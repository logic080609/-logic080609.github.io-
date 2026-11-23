import { animate, springValue } from 'motion';
import { cropPhoto } from './photo-particles.js';

// Replace the files here to change the collection while preserving the choreography.
const prints = [
  [1366909, 'Pinnacles', '雾中的尖峭山峰'],
  [167964, 'Gesture', '向镜头伸手的黑白剪影'],
  [417074, 'Alpenglow', '橙色山顶在湖水中的倒影'],
  [36215328, 'Red Room', '红光下穿黑衣的人像'],
  [37420108, 'Gel Light', '冷暖色光下穿白衣的人像'],
  [31146128, 'Afterimage', '粉蓝色灯光中的全身人像'],
  [2662116, 'Still Water', '雪山与蓝绿色湖面的倒影']
];
const middle = Math.floor(prints.length / 2);
const asset = index => import.meta.env.BASE_URL + 'gallery/' + prints[index][0] + '.jpg';
const clamp = (x, lo=0, hi=1) => Math.min(hi, Math.max(lo, x));
const wrap = (n, period) => ((n % period) + period) % period;
const number = index => String(index + 1).padStart(2,'0');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

function element(tag, cls, text) {
  const el = document.createElement(tag);
  el.className = cls;
  if (text) el.textContent = text;
  return el;
}

// A small highlight pass from the print itself gives light areas a soft halation.
function highlightImage(image) {
  const canvas=document.createElement('canvas');
  canvas.width=104; canvas.height=Math.round(104*840/640);
  const ctx=cropPhoto(canvas,image);
  const frame=ctx.getImageData(0,0,canvas.width,canvas.height);
  const pixels=frame.data;
  for (let i=0;i<pixels.length;i+=4) {
    const r=pixels[i], g=pixels[i+1], b=pixels[i+2];
    const light=(.48*Math.max(r,g,b)+.52*(.213*r+.715*g+.072*b))/255;
    const knee=clamp((light-.46)/.40);
    pixels[i+3]=Math.round(255*knee*knee*(3-2*knee));
  }
  ctx.putImageData(frame,0,0);
  return canvas.toDataURL();
}

function makeDetail(shell, onClose, signal) {
  const dialog=element('dialog','print-detail');
  dialog.setAttribute('aria-label','单张照片');
  const close=element('button','detail-close','Close ×');
  close.type='button'; close.setAttribute('aria-label','关闭大图');
  const picture=element('img','detail-image');
  const caption=element('p','detail-caption');
  caption.setAttribute('aria-live','polite');
  const strip=element('div','detail-strip');
  strip.setAttribute('role','group'); strip.setAttribute('aria-label','选择照片');
  let selected=0;
  const thumbs=prints.map((print,i)=>{
    const button=element('button','detail-thumb');
    button.type='button'; button.setAttribute('aria-label','查看 '+print[1]);
    const img=new Image(); img.alt=''; img.src=asset(i);
    button.append(img); strip.append(button);
    button.addEventListener('click',()=>select(i),{signal});
    return button;
  });
  function select(index) {
    selected=wrap(index,prints.length);
    picture.src=asset(selected);
    picture.alt=prints[selected][2];
    caption.textContent=number(selected)+' / '+String(prints.length).padStart(2,'0')+'   '+prints[selected][1];
    thumbs.forEach((b,i)=>b.setAttribute('aria-pressed',String(selected===i)));
    if (!reducedMotion.matches) picture.animate([{opacity:.6},{opacity:1}],{duration:210});
  }
  close.addEventListener('click',()=>dialog.close(),{signal});
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();},{signal});
  dialog.addEventListener('keydown',event=>{
    if (event.key==='ArrowLeft' || event.key==='ArrowRight') {
      event.preventDefault(); select(selected+(event.key==='ArrowRight'?1:-1));
    }
  },{signal});
  dialog.addEventListener('close',()=>onClose(selected, dialog.returnValue==='back'),{signal});
  dialog.append(close,picture,caption,strip);
  shell.append(dialog);
  return {
    open(index) { dialog.returnValue=''; select(index); dialog.showModal(); close.focus({preventScroll:true}); },
    close() {
      if (!dialog.open) return false;
      dialog.close('back');
      return true;
    }
  };
}

export function primeGalleryPhoto() {
  const hero=new Image(); hero.decoding='async'; hero.fetchPriority='high'; hero.src=asset(middle);
  return hero;
}

export function createPhotoGallery(shell, hero) {
  const listeners=new AbortController();
  const {signal}=listeners;
  const stage=element('div','photo-strip');
  stage.tabIndex=0; stage.inert=true; stage.setAttribute('role','region');
  stage.setAttribute('aria-label','摄影画廊。左右方向键浏览，回车查看大图。');
  const track=element('div','photo-track');
  const heading=element('h2','gallery-masthead');
  heading.append(element('span','','Logic'),element('span','','Gallery List'));
  const hint=element('p','gallery-hint');
  hint.append(element('span','pointer-help','Scroll to surf, click to open'),element('span','touch-help','Swipe to surf, tap to open'));
  stage.style.setProperty('--first-print','url("'+asset(middle)+'")');
  stage.append(track,heading,hint);
  shell.append(stage);

  const N=prints.length;
  const sources=prints.map((p,i)=>{if(i===middle)return hero; const im=new Image(); im.decoding='async'; im.src=asset(i); return im;});
  const cursor=springValue(middle,{stiffness:116,damping:23,mass:.85,restDelta:.0008,restSpeed:.002});
  const ripple=springValue(0,{stiffness:79,damping:17,mass:.91,restDelta:.0009});
  let target=middle, spread=0, heroInk=0, active=false, detailOpen=false;
  let width=0,height=0,planeWidth=0, entrance, entryFocus, drag=null, blockClick=false;
  let renderFrame=0;
  const planes=Array.from({length:2*N},(_,slot)=>{
    const index=slot%N;
    const button=element('button','photo-plane');
    button.type='button'; button.tabIndex=-1;
    button.setAttribute('aria-label','查看 '+prints[index][1]+'，'+prints[index][2]);
    const mount=element('span','print-mount');
    const img=slot===middle?hero:sources[index].cloneNode();
    img.alt=''; img.draggable=false; img.className='print-image';
    const bloom=element('span','print-bloom');
    const copy=element('span','print-copy');
    const folio=element('span','print-number',number(index));
    const name=element('span','print-name',prints[index][1]);
    const title=prints[index][1].toUpperCase();
    let lettersAnimation;
    function revealName(event) {
      if(!active || reducedMotion.matches || event.pointerType==='touch')return;
      lettersAnimation?.stop();
      lettersAnimation=animate(0,title.length,{duration:.28,ease:'easeOut',onUpdate(shown) {
        name.textContent=Array.from(title,(letter,i)=>letter===' ' || i<shown ? letter : String.fromCharCode(65+(slot+i*7+Math.floor(shown*11))%26)).join('');
      },onComplete(){name.textContent=title;}});
    }
    button.addEventListener('pointerenter',revealName,{signal});
    button.addEventListener('focus',revealName,{signal});
    signal.addEventListener('abort',()=>lettersAnimation?.stop(),{once:true});
    mount.append(img,bloom,copy,folio,name);
    button.append(mount);
    track.append(button);
    button.addEventListener('click',event=>{
      if(!active || detailOpen || (event.detail!==0 && blockClick)) return;
      entryFocus=button; detailOpen=true; detail.open(index);
    },{signal});
    return {button,copy,bloom,index};
  });
  for (const [i,im] of sources.entries()) {
    im.decode().then(()=>{
      if(signal.aborted)return;
      const url='url("'+highlightImage(im)+'")';
      planes.filter(p=>p.index===i).forEach(p=>{p.bloom.style.backgroundImage=url;});
    }).catch(()=>{});
  }
  const detail=makeDetail(shell,(selected,back)=>{
    detailOpen=false;
    if (!active) return;
    if (back) {
      (entryFocus || stage).focus({preventScroll:true});
      return;
    }
    const distance=wrap(selected-wrap(target,N)+N/2,N)-N/2;
    moveTo(Math.round(target+distance));
    const samePrint=entryFocus?.getAttribute('aria-label')?.includes(prints[selected][1]);
    (samePrint ? entryFocus : stage).focus({preventScroll:true});
  },signal);

  function scheduleRender() {
    if(!renderFrame) renderFrame=requestAnimationFrame(()=>{renderFrame=0;render();});
  }
  function render() {
    const position=cursor.get(), impulse=ripple.get();
    const step=planeWidth*(width<650?.89:.94);
    const rise=width<650?.78:.61;
    for (let slot=0;slot<planes.length;slot++) {
      const {button,copy}=planes[slot];
      const d=wrap(slot-position+3.6,2*N)-3.6;
      const distance=Math.abs(d);
      // Start every secondary print flat behind the original before it peels away.
      const lead=slot===middle?0:.11+Math.min(distance,6)*.087+(d>0?.037:0);
      const local=clamp((spread-lead)/(.98-lead));
      const fan=1-Math.pow(1-local,3);
      const secondary=slot!==middle;
      const entranceVisibility=secondary?clamp(local*7.6):heroInk;
      const edgeOpacity=clamp((d+3.58)/.4)*clamp((10.38-d)/.7);
      const ripplePhase=Math.sin(d*1.12+.42);
      const x=d*step*fan;
      const horizon=step*.30*Math.max(0,d-1.12);
      const y=(height*(width<650?.036:.132) - d*step*rise + horizon + impulse*ripplePhase*planeWidth*.47)*fan;
      const z=(-d*planeWidth*.59*fan) - (secondary?(1-fan)*32:0);
      const tilt=(-32 - clamp(d,-2.4,5)*4.8 + impulse*9*Math.cos(d*.91))*fan;
      const pitch=(impulse*6*ripplePhase-1.6)*fan;
      button.style.transform='translate3d('+x+'px,'+y+'px,'+z+'px) rotateY('+tilt+'deg) rotateX('+pitch+'deg)';
      button.style.zIndex=String(Math.round(1000 + z));
      button.style.opacity=String(entranceVisibility*edgeOpacity);
      button.style.visibility=entranceVisibility*edgeOpacity<.003?'hidden':'visible';
      button.style.setProperty('--folio-alpha',String(fan));
      copy.style.opacity=secondary?String(1-clamp((local-.10)/.43)):0;
      button.tabIndex=active && Math.abs(d)<.5 ? 0 : -1;
      button.setAttribute('aria-hidden',String(d < -N/2 || d >= N/2));
    }
  }
  function resize() {
    width=stage.clientWidth; height=stage.clientHeight;
    planeWidth=Math.min(height*.317,width*(width<650?.46:.27),408);
    track.style.setProperty('--plane-width',planeWidth+'px');
    track.style.perspective=Math.max(height*1.21,width*.77)+'px';
    render();
  }
  function moveTo(value) {
    target=value;
    if(reducedMotion.matches) { cursor.jump(value); ripple.jump(0); }
    else cursor.set(value);
  }
  cursor.on('change',()=>{
    if(!reducedMotion.matches) ripple.set(clamp(cursor.getVelocity()/4.1,-1,1));
    scheduleRender();
  });
  cursor.on('animationComplete',()=>ripple.set(0));
  ripple.on('change',scheduleRender);
  const observer=new ResizeObserver(resize);
  observer.observe(stage);
  resize();
  stage.addEventListener('wheel',event=>{
    if(!active||detailOpen||event.ctrlKey)return;
    event.preventDefault();
    const units=event.deltaMode===1?16:event.deltaMode===2?height:1;
    const amount=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;
    moveTo(target + clamp(amount*units/Math.max(140,planeWidth*1.1),-2.5,2.5));
  },{passive:false,signal});
  stage.addEventListener('pointerdown',event=>{
    if(!active||detailOpen||!event.isPrimary||event.button!==0)return;
    drag={id:event.pointerId,x:event.clientX,y:event.clientY,start:target,moved:false};
    blockClick=false;
  },{signal});
  stage.addEventListener('pointermove',event=>{
    if(!drag||drag.id!==event.pointerId)return;
    const dx=event.clientX-drag.x, dy=event.clientY-drag.y;
    if(!drag.moved&&Math.hypot(dx,dy)<5)return;
    if(!drag.moved) { stage.setPointerCapture(event.pointerId); stage.classList.add('dragging'); }
    drag.moved=true;
    moveTo(drag.start+(-dx+dy*.56)/Math.max(110,planeWidth*.94));
  },{signal});
  function endDrag(event) {
    if(!drag || event.pointerId!==drag.id)return;
    blockClick=drag.moved; drag=null;
    if(stage.hasPointerCapture(event.pointerId))stage.releasePointerCapture(event.pointerId);
    stage.classList.remove('dragging');
  }
  stage.addEventListener('pointerup',endDrag,{signal});
  stage.addEventListener('pointercancel',endDrag,{signal});
  stage.addEventListener('dragstart',e=>e.preventDefault(),{signal});
  stage.addEventListener('keydown',event=>{
    if(!active||detailOpen)return;
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){
      event.preventDefault();
      stage.focus({preventScroll:true});
      moveTo(Math.round(target)+(event.key==='ArrowRight'?1:-1));
    } else if(event.target===stage && (event.key==='Enter'||event.key===' ')) {
      event.preventDefault(); entryFocus=stage; detailOpen=true; detail.open(wrap(Math.round(target),N));
    }
  },{signal});
  function ready() {
    spread=1; active=true; stage.inert=false;
    stage.classList.add('open');
    render(); stage.focus({preventScroll:true});
  }
  return {
    paperSize:()=>({width:planeWidth,height:planeWidth*840/640}),
    expose(value){heroInk=value; planes[middle].button.style.opacity=String(value); planes[middle].button.style.visibility=value>0?'visible':'hidden';},
    open(){
      heroInk=1;
      stage.classList.add('unfolding');
      if(reducedMotion.matches){ready();return;}
      entrance=animate(0,1,{duration:1.34,ease:'linear',onUpdate(value){spread=value;render();},onComplete:ready});
    },
    closeDetail:detail.close,
    fold(onComplete) {
      entrance?.stop();
      active=false;
      stage.inert=true;
      stage.classList.remove('open','unfolding','dragging');
      if (drag && stage.hasPointerCapture(drag.id)) stage.releasePointerCapture(drag.id);
      drag=null;
      function finish() {
        spread=0; target=middle; heroInk=1;
        cursor.jump(middle); ripple.jump(0);
        render();
        onComplete();
      }
      if (reducedMotion.matches || spread === 0) { finish(); return; }
      entrance=animate(spread,0,{duration:.48*spread,ease:'easeInOut',
        onUpdate(value){spread=value;render();},onComplete:finish});
    },
    destroy(){
      listeners.abort(); observer.disconnect(); entrance?.stop(); cancelAnimationFrame(renderFrame);
      cursor.destroy(); ripple.destroy();
    }
  };
}
