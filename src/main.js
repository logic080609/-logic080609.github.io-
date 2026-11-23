import { initPhotoStudy } from './photo-study.js'
import { birdMaskGLSL, createBirdMask } from './bird-mask.js'
import { createReliefTitle } from './relief-title.js'
import './styles.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import dracoDecoderUrl from 'three/examples/jsm/libs/draco/gltf/draco_decoder.js?url'


import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

import textVertexShader from './shaders/text/vertex.glsl'
import textFragmentShader from './shaders/text/fragment.glsl'


import { TrailTexture } from './TrailTexture.js'

import { Text } from 'troika-three-text'


gsap.registerPlugin(ScrollTrigger)

class ThreeScene {
  constructor() {


    this.scroll = 0

    this.scene = new THREE.Scene()

    this.manager = this.setUpLoadingManager()

    this.canvasContainer = document.querySelector('.canvasContainer')
    this.width = this.canvasContainer.offsetWidth
    this.height = this.canvasContainer.offsetHeight

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    this.renderer.setSize(this.width, this.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    this.canvasContainer.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 0.01, 1000)
    this.camera.position.set(0, 0, 10)

    this.textureLoader = new THREE.TextureLoader(this.manager)

    this.loader = new GLTFLoader(this.manager)
    this.manager.setURLModifier(url => url === 'draco_decoder.js' ? dracoDecoderUrl : url)
    this.draco = new DRACOLoader(this.manager)
    this.draco.setDecoderConfig({ type: 'js' })

    this.loader.setDRACOLoader(this.draco)


    this.trailTexture = new TrailTexture({
      size: 30,
      maxAge: 3000,
      radius: 0.2,
      intensity: 0.1,
      interpolate: 5,
      smoothing: 0,
      minForce: 0.1,
      velocityEffect: false
    })

    this.autoTrailTexture = new TrailTexture({
      size: 30,
      maxAge: 3000,
      radius: 0.25,
      intensity: 0.1,
      interpolate: 3,
      smoothing: 0,
      minForce: 0.1,
    })

    this.raycaster = new THREE.Raycaster()
    this.pointer = new THREE.Vector2()
    this.pointerPosition = new THREE.Vector2()


    this.mouseEvents()
    this.addObjects()
    this.resize()
    this.reliefTitle = createReliefTitle(this.renderer, document.querySelector('.logic-button'), this.uniforms)
    this.render()
    this.handleResize()

  }

  mouseEvents() {

    this.fboScene = new THREE.Scene()
    this.fboCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    this.fboMaterial = new THREE.MeshBasicMaterial()
    this.fboMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.fboMaterial)
    this.fboScene.add(this.fboMesh)

    const throttlePointerMove = (callback, limit) => {
      let wait = false
      return function (...args) {
        if (!wait) {
          callback.apply(this, args)
          wait = true
          setTimeout(() => { wait = false }, limit)
        }
      }
    }

    const onPointerMove = ({ clientX, clientY }) => {
      this.pointer.x = (clientX / this.width) * 2 - 1
      this.pointer.y = -(clientY / this.height) * 2 + 1


      this.raycaster.setFromCamera(this.pointer, this.fboCamera)
      const intersects = this.raycaster.intersectObject(this.fboMesh)

      if (intersects.length > 0) {
        const uv = intersects[0].uv
        this.trailTexture.addTouch(uv)
      }
    }

    window.addEventListener('pointermove', throttlePointerMove(onPointerMove, 100))

    const autoMove = () => {
      let start, end

      do {
        start = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 }
        end = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 }
      } while (Math.hypot(end.x - start.x, end.y - start.y) < 0.5 || Math.hypot(end.x - start.x, end.y - start.y) > 0.8)


      gsap.to(start, {
        delay: Math.random() * 2,
        x: end.x,
        y: end.y,
        duration: Math.random() * 2 + 1,
        ease: 'expo.inOut',
        onUpdate: () => {
          this.raycaster.setFromCamera(new THREE.Vector2(start.x, start.y), this.fboCamera)
          const intersects = this.raycaster.intersectObject(this.fboMesh)
          if (intersects.length > 0) {
            const uv = intersects[0].uv
            this.autoTrailTexture.addTouch(uv)
          }
        },
        onComplete: autoMove
      })


    }
    autoMove()

  }

  setUpLoadingManager() {
    const manager = new THREE.LoadingManager()
    const scroller = document.querySelector('.scroller')
    const loadingBar = document.querySelector('.loading-wrap .mid .loading-bar ')

    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
      const progress = Math.round((itemsLoaded / itemsTotal) * 100)
      loadingBar.style.width = progress + '%'
    }

    manager.onLoad = () => {
      this.canvasContainer.classList.remove('hidden')
      setTimeout(() => {
        scroller.classList.add('loaded')
        setTimeout(() => window.dispatchEvent(new Event("resize")), 50)
      }, 1000)
    }

    return manager
  }

  addObjects() {

    this.time = {
      value: 0
    }

    this.uniforms = {
      opacity: { value: 1 },
      birdMask: { value: createBirdMask() },
      revealProgress: { value: 0 },
      revealCenter: { value: new THREE.Vector2(.5, .5) },
      resolution: { value: new THREE.Vector2(this.width, this.height) },
      darkMode: { value: 0 },
      plasterStrength: { value: .5 },
      contrast: { value: 0.6 },
      plaster: { value: this.textureLoader.load('/plaster.jpg') },
      brightness: { value: 0.3 },
      touchTexture: { value: null },
      autoTouchTexture: { value: null },
    }


    this.loader.load('/model.glb', (gltf) => {

      this.model = gltf.scene

      gltf.scene.traverse((child) => {
        if (child.isMesh) {

          const material = new THREE.ShaderMaterial({
            uniforms: {
              ...this.uniforms,
              birdRole: { value: 0 }, birdHover: { value: 0 }, birdDetach: { value: 0 },
              birdOffset: { value: new THREE.Vector3() }, birdRoll: { value: 0 },
              map: { value: child.material.map },
              emissive: { value: child.material.emissiveMap }
            },
            vertexShader: vertexShader.replace(/void\s+main\s*\(\s*\)\s*\{/, birdMaskGLSL + '\nvoid main() {'),
            fragmentShader: fragmentShader.replace(/void\s+main\s*\(\s*\)\s*\{/, birdMaskGLSL + '\nvoid main() {')
          })

          child.material = material
          child.material.needsUpdate = true
        }

      })

      this.scene.add(gltf.scene)

    })



  }

  resize() {
    const width = this.canvasContainer.offsetWidth
    const height = this.canvasContainer.offsetHeight
    if (!width || !height) return
    this.width = width
    this.height = height
    this.uniforms.resolution.value.set(this.width, this.height)
    this.renderer.setSize(this.width, this.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.resize()
    }, false)
  }

  render() {
    const clock = new THREE.Clock()
    const render = () => {
      requestAnimationFrame(render)
      const delta = clock.getDelta()

      if (document.hidden || document.querySelector('main').hidden) return
      this.time.value += delta

      this.trailTexture.update(delta)
      this.autoTrailTexture.update(delta)
      this.uniforms.touchTexture.value = this.trailTexture.texture
      this.uniforms.autoTouchTexture.value = this.autoTrailTexture.texture


      this.renderer.render(this.scene, this.camera)
      this.reliefTitle.render()

    }
    render()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let scene
  try {
    scene = new ThreeScene()
  } catch (error) {
    if (!/WebGL context/i.test(error.message)) throw error
    document.querySelector('.scroller').classList.add('loaded')
  }
  initPhotoStudy({
    setRelief: expanded => scene?.reliefTitle.setExpanded(expanded),
    resizeCover: () => scene?.resize()
  })
})
