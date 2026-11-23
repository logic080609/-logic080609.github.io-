import { createPhotoParticles } from './photo-particles.js';
import { createPhotoGallery, primeGalleryPhoto } from './photo-gallery.js';
import './photo-study.css';

const clamp = n => Math.max(0, Math.min(1, n));
const smooth = n => { const t = clamp(n); return t*t*(3-2*t); };

function startStudy(cover, shell, hero, word, restoreCover) {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const listeners = new AbortController();
  const { signal } = listeners;
  cover.inert = true;
  shell.hidden = false;
  shell.classList.add('photo-study', 'behind-cover');

  const night = document.createElement('div');
  night.className = 'photo-night';
  night.setAttribute('aria-hidden','true');
  shell.append(night);
  const gallery = createPhotoGallery(shell, hero);
  const canvas = document.createElement('canvas');
  canvas.className = 'morph-canvas';
  canvas.setAttribute('aria-hidden','true');
  const hit = document.createElement('button');
  hit.className = 'globe-hit';
  hit.type = 'button';
  hit.disabled = true;
  hit.setAttribute('aria-label','展开摄影画廊');
  shell.append(canvas, hit);

  let phase = 'forming';
  let particles, wipe, frame = 0, start = 0, last = 0;
  let photo = 0, orbit = 0, tilt = 0, targetTilt = 0, targetYaw = 0, pointerYaw = 0;

  function enableGlobe() {
    phase = 'globe';
    hit.hidden = false;
    hit.disabled = false;
    hit.focus({preventScroll:true});
  }

  function tick(now) {
    if (signal.aborted || !particles || phase === 'gallery' || phase === 'folding') return;
    const delta = Math.max(0, now-last);
    last = now;
    const dt = Math.min(.07,delta/1000);
    const reduced = motion.matches;
    const age = Math.max(0,now-start);
    const g = phase === 'forming' && !reduced ? clamp((age-660)/1560) : 1;
    if (phase === 'opening') photo = reduced ? 1 : clamp(photo + delta/1470);
    if (phase === 'returning') photo = reduced ? 0 : clamp(photo - delta/760);
    if (!reduced) {
      const follow = 1-Math.exp(-dt*5);
      orbit += dt*.125*smooth(g)*(1-photo);
      pointerYaw += (targetYaw*.27-pointerYaw)*follow;
      tilt += (targetTilt-tilt)*follow;
    }
    particles.draw(g,photo,reduced?0:age/1000,reduced?0:orbit+pointerYaw,reduced?0:tilt);
    if (phase === 'opening' || phase === 'returning') {
      night.style.opacity = String(smooth((photo-.25)/.62));
      gallery.expose(smooth((photo-.735)/.24));
    }
    if ((phase === 'forming' && g === 1) || (phase === 'returning' && photo === 0)) enableGlobe();
    if (phase === 'opening' && photo === 1) {
      phase = 'gallery';
      hit.hidden = true;
      shell.classList.add('showing-prints');
      gallery.open();
      return;
    }
    if (!reduced && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function refresh() {
    cancelAnimationFrame(frame);
    last = performance.now();
    if (!document.hidden) tick(last);
  }
  function reverseToGlobe() {
    if (signal.aborted) return;
    phase = 'returning';
    shell.classList.remove('showing-prints');
    refresh();
  }

  hit.addEventListener('click', () => {
    if (phase !== 'globe') return;
    phase = 'opening';
    hit.disabled = true;
    refresh();
  }, {signal});
  shell.addEventListener('pointermove', e => {
    if (phase !== 'globe' || e.pointerType === 'touch') return;
    const b = hit.getBoundingClientRect();
    targetYaw = clamp((e.clientX-b.left)/b.width)-.5;
    targetTilt = (clamp((e.clientY-b.top)/b.height)-.5)*.24;
  }, {signal});
  shell.addEventListener('pointerleave', () => { targetYaw=0; targetTilt=0; }, {signal});
  motion.addEventListener('change',refresh,{signal});
  document.addEventListener('visibilitychange',refresh,{signal});

  hero.decode().catch(()=>{}).then(() => {
    if (signal.aborted) return;
    particles = createPhotoParticles(canvas,hero,word,gallery.paperSize);
    particles.draw(0,0,0,0,0);
    wipe = cover.animate([
      {clipPath:'circle(74vmax at 50% 50%)'},{clipPath:'circle(0px at 50% 50%)'}
    ],{duration:motion.matches?0:970,easing:'cubic-bezier(.46,.045,.50,1)',fill:'forwards'});
    wipe.onfinish = () => {
      cover.hidden = true;
      wipe.cancel();
      shell.classList.remove('behind-cover');
    };
    start = performance.now();
    refresh();
  });

  return {
    back() {
      if (gallery.closeDetail()) return;
      if (phase === 'gallery') {
        phase = 'folding';
        gallery.fold(reverseToGlobe);
      } else if (phase === 'opening') {
        reverseToGlobe();
      } else {
        restoreCover();
      }
    },
    dispose() {
      listeners.abort();
      cancelAnimationFrame(frame);
      if (wipe) { wipe.onfinish=null; wipe.cancel(); }
      gallery.destroy();
      particles?.dispose();
      shell.replaceChildren();
      shell.classList.remove('photo-study','behind-cover','showing-prints');
      shell.hidden = true;
    }
  };
}

export function initPhotoStudy({setRelief, resizeCover}) {
  const trigger = document.querySelector('.logic-button');
  const shell = document.querySelector('.intro-preview');
  const cover = document.querySelector('main');
  const expanded = () => trigger.getAttribute('aria-pressed') === 'true';
  let hero, study;
  function expand(value) {
    setRelief(value);
    trigger.setAttribute('aria-pressed',String(value));
    trigger.setAttribute('aria-label',value?'logic，进入粒子摄影画廊':'logic，展开雕塑封面');
  }
  function restoreCover() {
    study.dispose();
    study = null;
    cover.hidden = false;
    cover.inert = false;
    resizeCover();
    trigger.focus({preventScroll:true});
  }
  trigger.addEventListener('click', () => {
    if (study) return;
    hero ||= primeGalleryPhoto();
    if (expanded()) {
      study = startStudy(cover,shell,hero,trigger.getBoundingClientRect(),restoreCover);
    } else {
      expand(true);
    }
  });
  document.addEventListener('contextmenu', event => {
    if (event.button !== 2 || event.pointerType === 'touch' || (!study && !expanded())) return;
    event.preventDefault();
    if (study) study.back();
    else expand(false);
  });
  window.addEventListener('pagehide', event => {
    if (!event.persisted) study?.dispose();
  });
}
