// Adapted for this website from React Bits, David Haz, 2026.
// MIT + Commons Clause: see LICENSE.md. Native DOM host; original geometry and simulation retained.
import {animate,motionValue} from 'motion';
import {ref,springValue,listen} from './motion-values.js';
import './FlipCard.css';
const SLOP = { fine: 4, coarse: 8 };
const TILT_SPRING = { stiffness: 240, damping: 24, mass: 0.6 };
const LIFT_SPRING = { stiffness: 320, damping: 26 };
const FLING = 0.16;
const HISTORY_MS = 90;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const snap = deg => Math.round(deg / 180) * 180;
const isBack = deg => Math.abs(Math.round(deg / 180)) % 2 === 1;

export function createFlipCard(host, {
  front = null,
  back = null,
  flipped,
  defaultFlipped = false,
  onFlipChange,
  axis = 'y',
  flipOnClick = true,
  draggable = true,
  dragDistance = 0,
  tilt = true,
  tiltMax = 12,
  glare = true,
  glareOpacity = 0.22,
  hoverScale = 1.03,
  perspective = 1100,
  stiffness = 170,
  damping = 20,
  width = 300,
  height = 400,
  radius = 22,
  background = '#27272a',
  color = '#f5f5f5',
  shadow = true,
  shadowColor = '#000000',
  shadowOpacity = 0.45,
  disabled = false,
  ariaLabel = 'Flip card',
  className = ''
} = {}) {
const cleanups=[];
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const controlled = flipped !== undefined;
  let inner=defaultFlipped;const setInner=v=>{inner=v;updateFaces(v);};
  const setDragging=v=>host.toggleAttribute('data-dragging',v);
  const shown = controlled ? flipped : inner;
  const shownRef = ref(shown);
  shownRef.current = shown;
  const rootRef = ref(null);
  const grip = ref(null);
  const spin = ref(null);
  const target = ref(shown ? 180 : 0);

  const turn = motionValue(shown ? 180 : 0);
  const tiltX = springValue(0, TILT_SPRING,cleanups);
  const tiltY = springValue(0, TILT_SPRING,cleanups);
  const lift = springValue(1, LIFT_SPRING,cleanups);
  const sheen = springValue(0, LIFT_SPRING,cleanups);
  const gx = motionValue(50);
  const gy = motionValue(50);


 host.classList.add('flip-card');host.tabIndex=0;host.setAttribute('role','button');host.setAttribute('aria-label',ariaLabel);host.dataset.axis=axis;host.dataset.draggable='';rootRef.current=host;
 Object.entries({w:width+'px',h:height+'px',radius:radius+'px',bg:background,ink:color,shadow:shadowColor,'shadow-o':shadowOpacity,glare:glareOpacity}).forEach(([k,v])=>host.style.setProperty('--fc-'+k,v));
 host.innerHTML='<span class="flip-card__shadow" aria-hidden="true"></span><div class="flip-card__rotor"><div class="flip-card__face flip-card__face--front"></div><div class="flip-card__face flip-card__face--back"></div></div>';
 const rotor=host.querySelector('.flip-card__rotor'),faces=host.querySelectorAll('.flip-card__face');faces[0].append(front||'');faces[1].append(back||'');
 function updateFaces(v){host.setAttribute('aria-pressed',v);faces[0].inert=v;faces[1].inert=!v;faces[0].setAttribute('aria-hidden',v);faces[1].setAttribute('aria-hidden',!v);if(reduce)host.dataset.fade=v?'back':'front'}
 updateFaces(shown);
 const paint=()=>{rotor.style.transform=reduce?'none':'perspective('+perspective+'px) scale('+lift.get()+') rotateX('+(tiltX.get()+(axis==='x'?turn.get():0))+'deg) rotateY('+(tiltY.get()+(axis==='y'?turn.get():0))+'deg)';};
 [turn,tiltX,tiltY,lift].forEach(v=>cleanups.push(v.on('change',paint)));paint();
  const settle = (to, velocity, instant) => {
    spin.current?.stop();
    target.current = to;
    if (instant || reduce) turn.jump(to);
    else spin.current = animate(turn, to, { type: 'spring', stiffness, damping, velocity, restDelta: 0.05 });
    const next = isBack(to);
    if (next === shownRef.current) return;
    shownRef.current = next;
    if (!controlled) setInner(next);
    onFlipChange?.(next);
  };
  const flip = instant => {
    const base = snap(turn.get());
    settle(isBack(base) ? base - 180 : base + 180, 0, instant);
  };
  const rest = () => {
    tiltX.set(0);
    tiltY.set(0);
    sheen.set(0);
    lift.set(1);
  };

  const onPointerDown = e => {
    if (disabled || e.button !== 0 || grip.current) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    spin.current?.stop();
    grip.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      base: turn.get(),
      moved: false,
      slop: e.pointerType === 'touch' ? SLOP.coarse : SLOP.fine,
      hist: []
    };
    if (!reduce) lift.set(hoverScale);
  };
  const onPointerMove = e => {
    const g = grip.current;
    if (g && g.id === e.pointerId) {
      const d = axis === 'x' ? e.clientY - g.y : e.clientX - g.x;
      if (!g.moved) {
        if (Math.abs(d) < g.slop || !draggable || reduce) return;
        g.moved = true;
        setDragging(true);
        tiltX.set(0);
        tiltY.set(0);
        sheen.set(0);
      }
      const span = dragDistance > 0 ? dragDistance : axis === 'x' ? height : width;
      const deg = g.base + (axis === 'x' ? -1 : 1) * (d / span) * 180;
      turn.set(deg);
      const now = performance.now();
      g.hist.push({ t: now, v: deg });
      while (g.hist.length > 2 && now - g.hist[0].t > HISTORY_MS) g.hist.shift();
      return;
    }
    if (!tilt || reduce || disabled || e.pointerType === 'touch') return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = clamp((e.clientX - r.left) / r.width, 0, 1);
    const py = clamp((e.clientY - r.top) / r.height, 0, 1);
    tiltX.set((0.5 - py) * 2 * tiltMax);
    tiltY.set((px - 0.5) * 2 * tiltMax);
    gx.set(px * 100);
    gy.set(py * 100);
    sheen.set(1);
  };
  const release = (e, cancelled) => {
    const g = grip.current;
    if (!g || g.id !== e.pointerId) return;
    grip.current = null;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    setDragging(false);
    if (e.pointerType === 'touch' || !rootRef.current?.matches(':hover')) rest();
    if (!g.moved) {
      if (!cancelled && flipOnClick) flip(false);
      else settle(target.current, 0, false);
      return;
    }
    const here = turn.get();
    let velocity = 0;
    const a = g.hist[0];
    const b = g.hist[g.hist.length - 1];
    if (!cancelled && a && b && b.t > a.t && performance.now() - b.t < 60)
      velocity = ((b.v - a.v) / (b.t - a.t)) * 1000;
    const to = cancelled ? snap(g.base) : clamp(snap(here + velocity * FLING), snap(here) - 180, snap(here) + 180);
    settle(to, velocity, false);
  };
  const onKeyDown = e => {
    if (disabled || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault();
    if (!e.repeat) flip(true);
  };
  const onClick = e => {
    if (!disabled && e.detail === 0) flip(true);
  };


 const events={pointerdown:onPointerDown,pointermove:onPointerMove,pointerup:e=>release(e,false),pointercancel:e=>release(e,true),lostpointercapture:e=>release(e,true),pointerenter:e=>{if(!reduce&&e.pointerType!=='touch')lift.set(hoverScale)},pointerleave:()=>{if(!grip.current)rest()},keydown:onKeyDown,click:onClick,dragstart:e=>e.preventDefault()};
 Object.entries(events).forEach(([n,fn])=>listen(host,n,fn,cleanups));
 return {destroy(){spin.current?.stop();cleanups.forEach(f=>f());[turn,gx,gy].forEach(v=>v.destroy());host.replaceChildren();}};
}
