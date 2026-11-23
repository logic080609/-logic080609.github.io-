import * as THREE from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
export async function renderArt(kind){
 const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setSize(720,900);renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 document.body.replaceChildren(renderer.domElement);Object.assign(document.body.style,{margin:'0',width:'720px',height:'900px',overflow:'hidden'});renderer.domElement.style.display='block';
 const scene=new THREE.Scene();const bg={works:0xaabdc5,path:0xb4bcb1,favorites:0xbeb6c6,about:0xc8c4b7}[kind];scene.background=new THREE.Color(bg);scene.fog=new THREE.Fog(bg,14,28);
 const pmrem=new THREE.PMREMGenerator(renderer);const envScene=new RoomEnvironment();const env=pmrem.fromScene(envScene,.04);scene.environment=env.texture;scene.environmentIntensity=.9;
 const camera=new THREE.PerspectiveCamera(30,720/900,.1,100);camera.position.set(5,3.5,9);camera.lookAt(0,.45,0);
 const light=new THREE.DirectionalLight(0xf3f6ef,4.3);light.position.set(-3,6,5);light.castShadow=true;light.shadow.mapSize.set(2048,2048);Object.assign(light.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:.1,far:20});light.shadow.bias=-.0001;light.shadow.normalBias=.015;light.shadow.radius=4;scene.add(light);scene.add(new THREE.HemisphereLight(0xd4e8ff,0x5c605d,1.7));
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:bg,roughness:.85}));floor.rotation.x=-Math.PI/2;floor.position.y=-1.7;floor.receiveShadow=true;scene.add(floor);
 const group=new THREE.Group();scene.add(group);
 const silver=new THREE.MeshPhysicalMaterial({color:0xaebbc2,metalness:.92,roughness:.23,clearcoat:.25,clearcoatRoughness:.32});
 const chalk=new THREE.MeshPhysicalMaterial({color:0xd9ddd5,metalness:.12,roughness:.38});
 const dark=new THREE.MeshPhysicalMaterial({color:0x26313a,metalness:.75,roughness:.25});
 const mesh=(geo,mat=silver)=>{const m=new THREE.Mesh(geo,mat);m.castShadow=true;m.receiveShadow=true;group.add(m);return m};
 if(kind==='works'){
  const knot=mesh(new THREE.TorusKnotGeometry(1.05,.29,300,40,2,3));knot.rotation.set(.3,.2,-.6);knot.position.y=.25;
  const hoop=mesh(new THREE.TorusGeometry(1.72,.012,12,180),chalk);hoop.rotation.set(.5,.5,.15);hoop.position.y=.2;
 }else if(kind==='path'){
  for(let i=0;i<27;i++){const t=i/26,a=t*Math.PI*1.85;const step=mesh(new THREE.BoxGeometry(1.42,.075,.34),chalk);step.rotation.y=-a;step.position.set(Math.sin(a)*.76,-1.2+t*3,Math.cos(a)*.76)}
  const stem=mesh(new THREE.CylinderGeometry(.035,.035,3.4,32));stem.position.y=.25;group.rotation.y=.4;
 }else if(kind==='favorites'){
  const disc=mesh(new THREE.CylinderGeometry(1.58,1.58,.1,160),dark);disc.rotation.x=Math.PI/2;disc.position.y=.25;
  for(let i=0;i<50;i++){const ring=mesh(new THREE.TorusGeometry(.47+i*.021,.003,6,180),i%3?silver:dark);ring.position.set(0,.25,.055)}
  const center=mesh(new THREE.CylinderGeometry(.43,.43,.12,96),chalk);center.rotation.x=Math.PI/2;center.position.y=.25;
  const small=mesh(new THREE.CylinderGeometry(.045,.045,.125,32),dark);small.rotation.x=Math.PI/2;small.position.y=.25;
  group.rotation.set(-.13,-.38,-.15);
  const orbit=mesh(new THREE.TorusGeometry(1.9,.025,16,180),silver);orbit.rotation.set(.45,.7,.2);orbit.position.y=.25;
 }else{
  const sphere=mesh(new THREE.SphereGeometry(1.23,96,96,0,Math.PI*1.78),chalk);sphere.rotation.z=-.25;sphere.position.y=.1;sphere.scale.y=1.22;
  const core=mesh(new THREE.SphereGeometry(.83,64,64),silver);core.position.set(.3,.15,.18);
  const ring=mesh(new THREE.TorusGeometry(1.8,.024,16,180));ring.rotation.set(1.05,.12,-.28);ring.position.y=.1;
 }
 const pedestal=mesh(new THREE.CylinderGeometry(1.65,1.65,.12,120),chalk);pedestal.position.y=-1.6;
 renderer.render(scene,camera);
 // A small, typeset museum label is part of this site's original artwork.
 const label=document.createElement('div');label.innerHTML='<span>LOGIC / OBJECT STUDIES</span><b>'+{works:'01 — MAKE',path:'02 — BECOME',favorites:'03 — RESONATE',about:'04 — DISCOVER'}[kind]+'</b>';Object.assign(label.style,{position:'fixed',left:'44px',right:'44px',bottom:'42px',display:'flex',justifyContent:'space-between',font:'11px Arial',letterSpacing:'2px',color:'#263a45'});document.body.append(label);
 return true;
}
