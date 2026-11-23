import * as THREE from 'three'
import { birdOutline } from './bird-mask.js'

// The source is a single relief slab, not a rigged bird. This is a flight study.
export function createBirdGuide(stage) {
  const source=stage.model.getObjectByName('bird_01')
  if(!source?.isMesh)return null
  const trigger=document.querySelector('.logic-button')
  const button=document.querySelector('.bird-entry')
  const cover=document.querySelector('main')
  const intro=document.querySelector('.intro-preview')
  const reduced=matchMedia('(prefers-reduced-motion: reduce)')
  const shared={hover:{value:0},detach:{value:0},offset:{value:new THREE.Vector3()},roll:{value:0}}
  Object.assign(source.material.uniforms,{birdRole:{value:1},birdHover:shared.hover,birdDetach:shared.detach})
  const material=source.material.clone()
  Object.assign(material.uniforms,stage.uniforms,{birdRole:{value:2},birdHover:shared.hover,birdDetach:shared.detach,birdOffset:shared.offset,birdRoll:shared.roll})
  material.transparent=true
  const flyer=new THREE.Mesh(source.geometry,material)
  flyer.visible=false
  stage.scene.add(flyer)
  let hovering=false, start=null, arrived=false
  const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)}
  const ready=()=>trigger.getAttribute('aria-pressed')==='true'&&!arrived&&start===null
  function sync(){button.inert=!ready();button.setAttribute('aria-hidden',String(!ready()));button.classList.toggle('available',ready())}
  trigger.addEventListener('click',()=>{
    hovering=false
    shared.hover.value=0
    sync()
  })
  // Becoming visible beneath a stationary pointer must not light the bird.
  button.addEventListener('pointermove',event=>{
    if(event.pointerType==='mouse' && (event.movementX!==0 || event.movementY!==0) && ready()) hovering=true
  })
  button.addEventListener('pointerleave',()=>{hovering=false})
  button.addEventListener('blur',()=>{hovering=false})
  function finish(){
    arrived=true;start=null;cover.hidden=true;cover.inert=true;intro.hidden=false
    document.dispatchEvent(new CustomEvent('logic:arrive'));intro.focus({preventScroll:true});sync()
  }
  button.addEventListener('click',()=>{
    if(!ready())return
    if(reduced.matches){finish();return}
    start=performance.now();flyer.visible=true;cover.inert=true;sync()
  })
  sync()
  return {
    update(delta){
      shared.hover.value+=(Number(hovering && ready())-shared.hover.value)*Math.min(1,delta*8)
      const projected=birdOutline.map(([x,y,z])=>new THREE.Vector3(x*1.004,y*1.004,z).project(stage.camera))
      const width=stage.width,height=stage.height
      const pts=projected.map(p=>[(p.x*.5+.5)*width,(-p.y*.5+.5)*height])
      const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);const left=Math.min(...xs),top=Math.min(...ys)
      const w=Math.max(...xs)-left,h=Math.max(...ys)-top
      Object.assign(button.style,{left:left+'px',top:top+'px',width:w+'px',height:h+'px',clipPath:'polygon('+pts.map(p=>`${(p[0]-left)/w*100}% ${(p[1]-top)/h*100}%`).join(',')+')'})
      if(start===null)return
      const t=(performance.now()-start)/1000
      shared.detach.value=smooth(t/.35)
      if(t<1.05){
        const a=smooth(t/1.05)
        shared.offset.value.set(.54*a,-.42*a,.18*a)
      } else {
        const a=smooth((t-1.05)/1.45)
        shared.offset.value.set(.54+6*a,-.42+5*a,.18+1.6*a)
        shared.roll.value=-.18*Math.sin(a*Math.PI)
        // Carry the lettering from its fixed central position along the bird's path.
        const anchor=new THREE.Vector3(6*a,5*a,.18+1.6*a).project(stage.camera)
        stage.reliefTitle.setCarry(anchor.x*.5,anchor.y*.5)
      }
      if(t>2.05)cover.classList.add('bird-departed')
      if(t>2.65)finish()
    }
  }
}
