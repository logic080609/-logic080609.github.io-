import {shelf} from './shelf.js';
import {animate} from 'motion';
import {createTearTicket} from '../components/react-bits/TearTicket.js';
import {mountSea} from './sea.js';
import {createRefineFrame} from '../components/react-bits/RefineFrame.js';
import {createFlipCard} from '../components/react-bits/FlipCard.js';
import {chapters} from './chapters.js';
import './journey.css';

const node=(tag,cls,text)=>{const el=document.createElement(tag);el.className=cls;if(text)el.textContent=text;return el};
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
export function createJourney(){
 const shell=document.querySelector('.intro-preview');shell.classList.add('journey-shell');
 shell.innerHTML='<div class="station-atmosphere" aria-hidden="true"><div class="station-horizon"></div><div class="station-orbit"></div><div class="station-grain"></div></div><header class="journey-header"><button class="back-cover" type="button">← 返回封面</button><span class="journey-edition">A PERSONAL ODYSSEY <i> / </i> VOL. 001</span><button class="journey-menu" aria-expanded="false" aria-controls="journey-index">目录 <span>＋</span></button></header><h2 id="intro-heading" class="journey-word" tabindex="-1"><em>logic</em></h2><div class="journey-index" id="journey-index" hidden></div><div class="scene-host"></div><footer class="journey-footer"><span class="journey-location">00 / DEPARTURE</span><span class="journey-footer-note">慢一点，发现多一点。</span><span class="journey-coordinate">LOGIC — PERSONAL ARCHIVE</span></footer><div class="travel-shutter" hidden aria-hidden="true"><div class="travel-lines"></div><p>下一站 <span>你的好奇心</span></p></div><p class="journey-status" role="status" aria-live="polite"></p>';
 const host=shell.querySelector('.scene-host'),menu=shell.querySelector('.journey-menu'),index=shell.querySelector('.journey-index'),word=shell.querySelector('.journey-word');
 let scene='ticket',active=0,entry=0,cleanup=[],animations=[],run=0,transitioning=false;
 const announce=t=>shell.querySelector('.journey-status').textContent=t;
 const own=object=>{if(typeof object==='function')cleanup.push(object);else if(object?.destroy)cleanup.push(()=>object.destroy());return object};
 const play=(el,keyframes,options={})=>{const a=animate(el,keyframes,{duration:reduced()?0:.7,ease:[.22,1,.36,1],...options});animations.push(a);return a};
 function clear(){run++;cleanup.splice(0).forEach(f=>f());animations.splice(0).forEach(a=>a.stop());host.replaceChildren();const shutter=shell.querySelector('.travel-shutter');shutter.hidden=true;shutter.removeAttribute('style');transitioning=false;shell.removeAttribute('aria-busy');}
 function closeMenu(){index.hidden=true;menu.setAttribute('aria-expanded','false')}
 function sceneRoot(name){const el=node('section','journey-scene');el.dataset.scene=name;el.setAttribute('aria-label',name==='ticket'?'出发':name==='hub'?'章节中转站':chapters[active].title);host.append(el);return el}
 function heading(parent,kicker,title,desc){const box=node('div','scene-heading');box.append(node('p','scene-eyebrow',kicker),node('h3','scene-title',title),node('p','scene-description',desc));parent.append(box);return box}
 function button(label,cls,fn){const b=node('button',cls,label);b.type='button';b.addEventListener('click',fn);return b}
 function enter(name,{focus=true}={}){
  clear();closeMenu();scene=name;shell.dataset.scene=name;word.style.opacity=name==='chapter'?'.16':'1';
  if(name==='ticket'||name==='hub') own(mountSea(shell,reduced()));
  const root=sceneRoot(name);if(name==='ticket')ticket(root);else if(name==='hub')hub(root);else chapter(root);
  shell.querySelector('.journey-location').textContent=name==='ticket'?'00 / DEPARTURE':name==='hub'?'01 / INTERCHANGE':chapters[active].number+' / '+chapters[active].english;
  if(focus){root.tabIndex=-1;root.focus({preventScroll:true})}play(root,{opacity:[0,1]});announce(name==='hub'?'已抵达海窗书架，选择一本书':name==='ticket'?'一张进入 logic 的单程票':chapters[active].title);
 }
 function ticket(root){
  heading(root,'THE BEGINNING OF SOMETHING','下一站，认识我。','一张单程票。一段尚未写完的旅程。');
  const pedestal=node('div','ticket-pedestal'),mount=node('div','ticket-mount');pedestal.append(mount);root.append(pedestal);
  const face=node('div','boarding-face');face.innerHTML='<div class="boarding-top"><span>LOGIC EXPRESS</span><span>PERSONAL LINE · 001</span></div><div class="boarding-route"><b>此刻</b><span class="boarding-track">∘<i></i>∘</span><b>更深处</b></div><div class="boarding-bottom"><span>ONE WAY<br><strong>只需一点好奇心</strong></span><span class="boarding-barcode" aria-hidden="true"></span></div>';
  const stub=node('div','boarding-stub');stub.innerHTML='<span>ADMIT ONE</span><b>启程</b><span class="stub-arrow">↘</span><small>捏住票根<br>向右下方撕开</small><span>№ 000001</span>';
  const tt=own(createTearTicket(mount,{children:face,stub,width:650,height:244,stubSize:160,radius:7,holes:15,holeSize:5,notch:4,roughness:1.1,rotate:-3,background:'#e7e7dd',stubBackground:'#d9ddce',color:'#1b2c36',tiltMax:5,stretch:24,onTear:depart,ariaLabel:'拖动票根撕开单程票'}));
  const actions=node('div','ticket-actions');actions.append(node('span','ticket-instruction','拖动票根，或'),button('撕开单程票，出发','text-action',()=>tt.tear()));root.append(actions);
 }
 async function depart(){
  if(transitioning||scene!=='ticket')return;transitioning=true;const token=run;closeMenu();shell.setAttribute('aria-busy','true');announce('车票已撕开，出发前往中转站');
  if(reduced()){enter('hub');return}
  const ticket=host.querySelector('.ticket-pedestal');const shutter=shell.querySelector('.travel-shutter');shutter.hidden=false;
  play(ticket,{x:[0,-28,-window.innerWidth*1.2],rotate:[0,-5,-12],opacity:[1,1,0]},{duration:1.05,times:[0,.25,1]});
  await play(shutter,{opacity:[0,1,1,0],x:['100%','0%','0%','-100%']},{duration:1.65,times:[0,.28,.76,1],ease:[.7,0,.3,1]});
  if(token!==run||shell.hidden)return;enter('hub');
 }
 function hub(root){
  const books=node('nav','sea-books');
  books.setAttribute('aria-label','选择一本书进入章节');
  root.append(books);
  let selected=null;
  const actions=node('div','book-actions');
  actions.hidden=true;
  const read=button('进入章节 ↗','',()=>{if(selected)enter('chapter')});
  const putBack=button('放回书架','',()=>{
    selected?.classList.remove('chosen');
    selected?.setAttribute('aria-pressed','false');
    selected?.focus();
    selected=null;
    actions.hidden=true;
  });
  actions.append(read,putBack);
  root.append(actions);
  shelf.forEach(([title,i,page,binding,color,height,thickness])=>{
    const c=chapters[i];
    const book=button('','shelf-book',()=>{
      selected?.classList.remove('chosen');
      selected?.setAttribute('aria-pressed','false');
      selected=book;
      book.classList.add('chosen');
      book.setAttribute('aria-pressed','true');
      active=i;
      entry=page;
      read.setAttribute('aria-label','进入 '+title);
      actions.hidden=false;
      read.focus({preventScroll:true});
    });
    book.setAttribute('aria-pressed','false');
    book.dataset.binding=binding; book.style.setProperty('--cloth',color); book.style.setProperty('--height',height+'%'); book.style.setProperty('--thickness',thickness); book.setAttribute('aria-label',title+' · '+c.title);
    const spine=node('span','cloth-spine'); spine.append(node('span','book-lettering',title));
    const cover=node('span','cloth-cover');cover.append(node('small','',c.english),node('b','',title),node('em','','logic'));
    book.append(spine,cover);books.append(book);
  });
 }
 function chapter(root){
  const c=chapters[active];heading(root,c.number+' / '+c.english,c.title,c.short);
  root.append(button('← 返回书架','chapter-back',()=>enter('hub')));
  const layout=node('div','chapter-layout'),art=node('div','chapter-art'),content=node('div','chapter-copy');layout.append(art,content);root.append(layout);
  const artLabel=node('span','art-label','LOGIC / '+c.english+' — STUDY '+c.number);art.append(artLabel);
  const image=node('div','chapter-image');art.prepend(image);own(createRefineFrame(image,{src:c.src,alt:c.title+'的抽象雕塑插画',stageDuration:75}));
  const title=node('h4','chapter-title',c.intro),body=node('p','chapter-body',c.body);content.append(title,body);
  const entries=node('div','chapter-entry');content.append(entries);
  const controls=node('div','entry-controls');content.append(controls);
  let flip=null,veilCleanup=null;const showEntry=()=>{
   flip?.destroy();flip=null;entries.replaceChildren();controls.replaceChildren();
   const e=c.entries[entry];
   if(c.id==='favorites'){
    const mount=node('div','favorite-flip');entries.append(mount);
    const front=node('div','record-front');front.innerHTML='<span class="record-label"></span><div class="record-disc" aria-hidden="true"><i>logic</i></div><h5></h5><small>轻触，翻到另一面 ↗</small>';front.querySelector('span').textContent=e.label;front.querySelector('h5').textContent=e.title;
    const back=node('div','record-back');back.append(node('span','record-label',e.tags[0]),node('h5','',e.title),node('p','',e.text),node('small','','点击翻回封面'));
    flip=createFlipCard(mount,{front,back,width:320,height:280,radius:8,background:'#e7e5dc',color:'#172635',tiltMax:6,ariaLabel:'翻开 '+e.title});
   }else{entries.append(node('span','entry-kicker',e.label),node('h5','entry-title',e.title),node('p','entry-body',e.text));const tags=node('div','entry-tags');e.tags.forEach(t=>tags.append(node('span','',t)));entries.append(tags)}
   const prev=button('←','entry-arrow',()=>{entry=(entry-1+c.entries.length)%c.entries.length;showEntry()});prev.setAttribute('aria-label','上一条内容');
   const next=button('→','entry-arrow',()=>{entry=(entry+1)%c.entries.length;showEntry()});next.setAttribute('aria-label','下一条内容');controls.append(prev,node('span','entry-count',String(entry+1).padStart(2,'0')+' / '+String(c.entries.length).padStart(2,'0')),next);
  };showEntry();own(()=>flip?.destroy());
  if(c.id==='about'){
   // The shader is loaded only for this chapter. The frame remains as fallback.
   const token=run;import('../components/react-bits/DitherVeil.js').then(({createDitherVeil})=>{
    if(token!==run||shell.hidden)return;
    const veil=node('div','about-veil');image.append(veil);veil.tabIndex=0;veil.setAttribute('role','button');veil.setAttribute('aria-label','触碰或按回车显现关于我的插画');
    try{veilCleanup=createDitherVeil(veil,{src:c.src,fit:'cover',pattern:'floyd',pixelSize:2,paperColor:'#dee1dc',inkColor:'#153044',revealRadius:120,linger:1.8,contrast:1,wander:false});}
    catch{veil.remove();return}
    veil.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();veil.classList.toggle('revealed');veil.style.opacity=veil.classList.contains('revealed')?'0':'1'}});
    artLabel.textContent='触碰图像，显现另一面 / TOUCH TO REVEAL';
   });own(()=>{veilCleanup?.();veilCleanup=null});
  }
 }
 chapters.forEach((c,i)=>{const b=button(c.number+'  '+c.title,'index-destination',()=>{active=i;entry=0;enter('chapter')});index.append(b)});
 index.append(button('回到书架 ↗','index-destination',()=>enter('hub')));
 menu.addEventListener('click',()=>{index.hidden=!index.hidden;menu.setAttribute('aria-expanded',String(!index.hidden))});
 shell.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!index.hidden){closeMenu();menu.focus()}else if(scene==='chapter')enter('hub')}});
 shell.querySelector('.back-cover').addEventListener('click',()=>{clear();closeMenu();shell.dataset.scene='ticket'});
 document.addEventListener('logic:arrive',()=>enter('ticket',{focus:false}));
 const mq=matchMedia('(prefers-reduced-motion: reduce)');mq.addEventListener('change',()=>{if(!shell.hidden)enter(scene)});
 return {destroy:clear};
}
