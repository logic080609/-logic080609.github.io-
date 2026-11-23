import * as THREE from 'three';
import vertexShader from './shaders/photo-grain.vert.glsl?raw';
import fragmentShader from './shaders/photo-grain.frag.glsl?raw';

const clamp = value => Math.max(0, Math.min(1, value));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
const orbitRadius = (width, height) => Math.min(width * .32, height * .279);

// The same crop is used for the grains, the luminous print and the final image.
export function cropPhoto(canvas, image) {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (image.naturalWidth) {
    const ratio = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
    const w = image.naturalWidth * ratio, h = image.naturalHeight * ratio;
    ctx.drawImage(image, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
  }
  return ctx;
}

function sampleGrains(image) {
  const sample = document.createElement('canvas');
  sample.width = 512;
  sample.height = 256;
  const ctx = sample.getContext('2d', { willReadFrequently: true });
  ctx.font = 'italic 145px Georgia';
  ctx.lineWidth = 1.5;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('logic', 256, 128);
  ctx.strokeText('logic', 256, 128);
  const mask = ctx.getImageData(0, 0, 512, 256).data;
  const glyph = [];
  // Reading by column lets neighbouring grains lift from the same stroke.
  for (let x = 0; x < 512; x++) {
    for (let y = 0; y < 256; y++) {
      if (mask[(y * 512 + x) * 4 + 3] > 110) glyph.push(y * 512 + x);
    }
  }
  const cols = Math.round(Math.min(225, Math.max(132, orbitRadius(innerWidth, innerHeight))));
  const rows = Math.round(cols * 840 / 640);
  sample.width = cols;
  sample.height = rows;
  const pixels = cropPhoto(sample, image).getImageData(0, 0, cols, rows).data;
  const count = cols * rows;
  const attributes = {};
  for (const key of ['position', 'letter', 'shellPoint', 'dye', 'pigment']) attributes[key] = new Float32Array(count * 3);
  attributes.grain = new Float32Array(count * 2);
  const order = new Uint32Array(count);
  let state = 0x19a3e7bd;
  const rand = () => ((state = (Math.imul(state, 1664525) + 1013904223) >>> 0) / 4294967296);

  for (let i = 0; i < count; i++) {
    const u = (i % cols + rand()) / cols;
    const v = (Math.floor(i / cols) + rand()) / rows;
    const y = 1 - 2*v;
    const ring = Math.sqrt(Math.max(0, 1 - y*y));
    const a = Math.PI * 2 * (2*u + .11*Math.sin(v*7) + (rand()-.5)*.53);
    const x = Math.sin(a) * ring, z = Math.cos(a) * ring;
    const depth = 1 - .042*Math.pow(rand(), 3) + .005*(rand()-.5);
    const size = rand(), seed = rand();
    const offset = i*3;
    attributes.position.set([u-.5, .5-v, 0], offset);
    attributes.shellPoint.set([depth*x, depth*y, depth*z], offset);
    attributes.grain.set([size, seed], i*2);
    const rgb = [pixels[i*4]/255, pixels[i*4+1]/255, pixels[i*4+2]/255];
    attributes.dye.set(rgb, offset);
    const exposure = rgb[0]*.34 + rgb[1]*.51 + rgb[2]*.15;
    const mineral = y + .15*x + .08*Math.sin(3*z + 4*x) + .31*(exposure-.4) + (rand()-.5)*.23;
    const amber = smooth((mineral + .43) / .57);
    const copper = smooth((mineral - .62) / .36);
    const charcoal = .035 + .125*seed;
    const fleck = (rand() < .16 + (1-exposure)*.10) ? .18 + .38*rand() : .85 + .23*rand();
    const body = [.87, .66, .21], cap = [.94, .275, .085];
    for (let k = 0; k < 3; k++) {
      const hue = mix(mix(charcoal, body[k], amber), cap[k], copper);
      attributes.pigment[offset+k] = clamp(mix(hue, rgb[k], .055) * fleck);
    }
    order[i] = i;
  }
  const globe = attributes.shellPoint;
  order.sort((a, b) => globe[a*3] - globe[b*3]);
  for (let rank = 0; rank < count; rank++) {
    const localRank = clamp(rank/count + (rand()-.5)*.026);
    const pixel = glyph[Math.min(glyph.length-1, Math.floor(localRank*glyph.length))];
    attributes.letter.set([((pixel % 512 + rand())/512-.5), .25-(Math.floor(pixel/512)+rand())/512, 0], order[rank]*3);
  }
  return { attributes, cols, count };
}

function makePointRenderer(canvas, data) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  renderer.setClearColor(0, 0);
  const geometry = new THREE.BufferGeometry();
  for (const [name, values] of Object.entries(data.attributes)) {
    geometry.setAttribute(name, new THREE.BufferAttribute(values, name === 'grain' ? 2 : 3));
  }
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 2400);
  camera.position.z = 1100;
  const uniforms = Object.fromEntries(['gather','flatten','elapsed','yaw','tilt','radius','wordWidth','pixelRatio','spacing'].map(name => [name,{value:0}]));
  uniforms.wordCenter = {value: new THREE.Vector2()};
  uniforms.photoSize = {value: new THREE.Vector2()};
  const material = new THREE.ShaderMaterial({uniforms, vertexShader, fragmentShader, transparent: true, depthTest: false, depthWrite: false});
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  scene.add(points);
  return {
    resize(w,h,word,paper) {
      const dpr = Math.min(devicePixelRatio, 1.8);
      renderer.setPixelRatio(dpr);
      renderer.setSize(w,h,false);
      Object.assign(camera,{left:-w/2,right:w/2,top:h/2,bottom:-h/2});
      camera.updateProjectionMatrix();
      uniforms.pixelRatio.value = dpr;
      uniforms.wordWidth.value = word.width;
      uniforms.wordCenter.value.set(word.left + word.width/2 - w/2, h/2 - word.top - word.height/2);
      uniforms.photoSize.value.set(paper.width,paper.height);
      uniforms.radius.value = orbitRadius(w,h);
      uniforms.spacing.value = Math.min(3.85, uniforms.radius.value / data.cols * 2.32);
    },
    draw(g,f,time,yaw,tilt) {
      uniforms.gather.value=g; uniforms.flatten.value=f; uniforms.elapsed.value=time;
      uniforms.yaw.value=yaw; uniforms.tilt.value=tilt;
      renderer.render(scene,camera);
    },
    dispose() { geometry.dispose(); material.dispose(); renderer.dispose(); renderer.forceContextLoss(); }
  };
}

// Keep the real grain silhouette on devices without a second WebGL context.
function canvasRenderer(canvas, {attributes:a, count}) {
  const ctx = canvas.getContext('2d');
  const stride = Math.max(1, Math.floor(count/13000));
  const colors = [];
  for (let i=0; i<count; i+=stride) {
    const channels = Array.from(a.pigment.subarray(i*3, i*3+3), n => Math.round(n*255));
    colors.push('rgb('+channels.join(',')+')');
  }
  let w,h,r,wordBox,paperBox,diameter;
  return {
    resize(width,height,word,paper) {
      w=width; h=height; wordBox=word; paperBox=paper;
      const dpr=Math.min(devicePixelRatio,1.5);
      canvas.width=Math.round(w*dpr); canvas.height=Math.round(h*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      r=orbitRadius(w,h);
      diameter=r/Math.sqrt(count/stride)*1.95;
    },
    draw(g,f,time,yaw,tilt) {
      ctx.clearRect(0,0,w,h);
      const c=Math.cos(yaw),s=Math.sin(yaw),ct=Math.cos(tilt),st=Math.sin(tilt);
      g=smooth(g); f=smooth(f);
      const opacity=1-smooth((f-.68)/.32);
      for(let i=0,k=0;i<count;i+=stride,k++) {
        const j=i*3, x=a.shellPoint[j], y=a.shellPoint[j+1], z=a.shellPoint[j+2];
        const zRot=-s*x+c*z;
        const bx=(c*x+s*z)*r, by=(ct*y-st*zRot)*r;
        const wx=wordBox.left+wordBox.width/2-w/2+a.letter[j]*wordBox.width;
        const wy=h/2-wordBox.top-wordBox.height/2+a.letter[j+1]*wordBox.width;
        const px=mix(mix(wx,bx,g),a.position[j]*paperBox.width,f);
        const py=mix(mix(wy,by,g),a.position[j+1]*paperBox.height,f);
        ctx.fillStyle=g<.38?'#53483d':colors[k];
        ctx.globalAlpha=(.65+.25*zRot)*opacity;
        const size=mix(1,diameter,g)*(.59+.73*a.grain[i*2]);
        ctx.fillRect(w/2+px-size/2,h/2-py-size/2,size,size);
      }
      ctx.globalAlpha=1;
    },
    dispose() {}
  };
}

export function createPhotoParticles(canvas, image, word, measurePhoto) {
  const data=sampleGrains(image);
  let painter;
  try {
    painter=makePointRenderer(canvas,data);
  } catch {
    const fresh=canvas.cloneNode(false);
    canvas.replaceWith(fresh);
    canvas=fresh;
    painter=canvasRenderer(canvas,data);
  }
  const resize=() => painter.resize(canvas.clientWidth,canvas.clientHeight,word,measurePhoto());
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  return {
    draw: painter.draw,
    dispose() { observer.disconnect(); painter.dispose(); canvas.remove(); }
  };
}
