import * as THREE from 'three'

// A displaced plaster surface, with rounded text relief and a broad, blended root.
export function createReliefTitle(renderer, button, gardenUniforms) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -100, 100)
  const source = document.createElement('canvas')
  source.width = 1024; source.height = 512
  const ctx = source.getContext('2d')
  const layers = [4, 13, 34].map(blur => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024; canvas.height = 512
    return { canvas, blur, texture: new THREE.CanvasTexture(canvas) }
  })
  function drawHeight() {
    ctx.clearRect(0, 0, 1024, 512)
    ctx.fillStyle = '#fff'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 3
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.font = 'italic 290px Georgia'
    ctx.fillText('logic', 512, 256); ctx.strokeText('logic', 512, 256)
    for (const layer of layers) {
      const c = layer.canvas.getContext('2d')
      c.filter = 'none'; c.fillStyle = '#000'; c.fillRect(0, 0, 1024, 512)
      c.filter = `blur(${layer.blur}px)`; c.drawImage(source, 0, 0)
      layer.texture.needsUpdate = true
    }
  }
  drawHeight()
  document.fonts.load('italic 290px Georgia').then(drawHeight)
  const uniforms = {
    fine: { value: layers[0].texture }, soft: { value: layers[1].texture },
    root: { value: layers[2].texture },
    plaster: { value: new THREE.TextureLoader().load('/plaster.jpg') },
    resolution: { value: new THREE.Vector2() }, center: { value: new THREE.Vector2(.5, .5) },
    textSize: { value: new THREE.Vector2() },
    elapsed: { value: 0 }, progress: { value: 0 }, reduce: { value: false }
  }
  const surface = `
    uniform sampler2D fine,soft,root;
    uniform vec2 resolution,center,textSize;
    uniform float elapsed,progress;
    uniform bool reduce;
    float revealAt(vec2 uv) {
      if(progress<=0.)return 0.;
      if(progress>=1.)return 1.;
      float x=(uv.x-center.x)/textSize.x+.5;
      float sweep=mix(.15,.85,progress);
      return 1.-smoothstep(sweep-.07,sweep+.07,x);
    }
    vec3 reliefAt(vec2 uv) {
      vec2 q=(uv-center)/textSize+.5;
      if(q.x<0.||q.x>1.||q.y<0.||q.y>1.)return vec3(0.);
      return vec3(texture2D(fine,q).r,texture2D(soft,q).r,texture2D(root,q).r)*revealAt(uv);
    }
    float heightAt(vec2 uv) {
      vec3 h=reliefAt(uv);
      // Shallow relief with a broad plaster root, avoiding a rounded tube profile.
      float crown=smoothstep(0.,.85,h.x);
      vec2 local=(uv-center)/textSize;
      float variation=.88+.12*sin(local.x*17.+local.y*6.)+.06*cos(local.y*21.-local.x*8.);
      float height=(4.6*crown+3.4*h.y)*variation+3.8*h.z;
      vec2 p=(uv-center)/textSize;
      float irregular=sin(p.x*13.+p.y*7.)*sin(p.y*11.-p.x*4.);
      float life=reduce?0.:sin(clamp(elapsed/7.,0.,1.)*3.14159265);
      float swelling=exp(-dot(p*vec2(2.8,3.8),p*vec2(2.8,3.8)))*irregular*.7*life;
      return height+swelling;
    }
  `
  const material = new THREE.ShaderMaterial({
    transparent: true, depthTest: false, depthWrite: false, uniforms,
    vertexShader: `${surface}
      varying vec2 uvScreen;
      void main(){
        uvScreen=uv;
        vec3 p=position;
        p.z=heightAt(uv)*.001;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
      }`,
    fragmentShader: `${surface}
      uniform sampler2D plaster;
      varying vec2 uvScreen;
      void main(){
        vec2 px=1./resolution;
        float h=heightAt(uvScreen);
        float dx=(heightAt(uvScreen+vec2(px.x,0.))-heightAt(uvScreen-vec2(px.x,0.)))*.5;
        float dy=(heightAt(uvScreen+vec2(0.,px.y))-heightAt(uvScreen-vec2(0.,px.y)))*.5;
        vec3 normal=normalize(vec3(-dx,-dy,1.));
        vec3 light=normalize(vec3(-.5,.65,1.));
        float lighting=dot(normal,light)-light.z;
        // Soft contact shadow falls below/right, consistent with the existing relief.
        float shadow=0.;
        for(int i=1;i<=4;i++){
          float d=float(i)*2.;
          float blocker=heightAt(uvScreen+vec2(-d,d)*px);
          shadow+=max(0.,blocker-h-d*.7)*.006;
        }
        vec3 masks=reliefAt(uvScreen);
        vec2 p=(uvScreen-center)/textSize;
        float footprint=exp(-dot(p*vec2(3.2,4.),p*vec2(3.2,4.)))*revealAt(uvScreen);
        float alpha=max(smoothstep(.001,.055,masks.z),footprint);
        float grain=texture2D(plaster,uvScreen).g;
        float stone=mix(.627,.627*grain*1.5,.5);
        float occlusion=masks.z*(1.-masks.x)*.012;
        float shade=lighting*.24-min(shadow,.07)-occlusion;
        gl_FragColor=vec4(vec3(stone+shade),alpha);
      }`
  })
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 420, 210), material))
  const carry = new THREE.Vector2()
  let started = null
  let position = 0
  let target = 0
  let gardenPosition = 0
  let lastFrame = performance.now()
  return {
    setExpanded(expanded) {
      target = expanded ? 1 : 0
      started = performance.now()
      lastFrame = started
      button.classList.add('is-carved')
    },
    setCarry(x,y) { carry.set(x,y) },
    render() {
      if (started === null) return
      const rect = button.getBoundingClientRect()
      const width = renderer.domElement.clientWidth, height = renderer.domElement.clientHeight
      uniforms.resolution.value.set(width, height)
      uniforms.center.value.set((rect.left+rect.width/2)/width,1-(rect.top+rect.height/2)/height)
      uniforms.center.value.add(carry)
      uniforms.textSize.value.set(rect.width/width,rect.width*.5/height)
      uniforms.elapsed.value = (performance.now()-started)/1000
      uniforms.reduce.value = reduced.matches
      const now = performance.now()
      const delta = Math.min((now - lastFrame) / 1000, .1)
      const step = delta / 2.2
      lastFrame = now
      position = reduced.matches ? target : target > position
        ? Math.min(target, position + step)
        : Math.max(target, position - step)
      const progress = position * position * (3 - 2 * position)
      uniforms.progress.value = progress
      gardenPosition = reduced.matches ? target : target > gardenPosition
        ? Math.min(target, gardenPosition + delta / 3.2)
        : Math.max(target, gardenPosition - delta / 2.6)
      gardenUniforms.revealProgress.value = gardenPosition * gardenPosition * (3 - 2 * gardenPosition)
      gardenUniforms.revealCenter.value.set(.5,.5)
      const front = progress <= 0 ? -8 : progress >= 1 ? 108 : ( .15 + .7 * progress) * 100
      const mask = 'linear-gradient(to right, transparent ' + (front - 7) + '%, black ' + (front + 7) + '%)'
      const ink = button.querySelector('.logic-regular')
      ink.style.maskImage = mask; ink.style.webkitMaskImage = mask
      const autoClear = renderer.autoClear
      renderer.autoClear=false
      renderer.render(scene,camera)
      renderer.autoClear=autoClear
    }
  }
}
