# UI dependencies and notices

- React Bits, Copyright (c) 2026 David Haz. MIT + Commons Clause. The five adapted components are incorporated into this website; see src/components/react-bits/LICENSE.md and sources.json. They are not re-licensed under the repository's root MIT license.
- Motion 12.23.12: native JavaScript API, MIT; see node_modules/motion/LICENSE.md and transitive package license files.
- OGL 1.0.11: MIT; see node_modules/ogl/LICENSE.
- Original Immersive-Garden files retain their original copyright notices. No new claim is made about the provenance of the original model, texture or font.
- Four chapter artworks are original procedural renders made for this website with Three.js. Upstream demo photos, audio and icons were not copied.


## V007 · Photographic gallery

The white sphere and black gallery were built for the existing vanilla site using Three.js 0.172.0 and Motion 12.23.12. The visual references are Motion’s [Three.js particle morph](https://motion.dev/examples/js-three-tsl) and [Scroll velocity: 3D planes](https://motion.dev/examples/react-scroll-velocity-linked-offset). The gallery uses its own layout, highlight rendering and dialog on the free Motion JavaScript spring API.

The seven local placeholder prints are from Pexels. The filenames in `public/gallery` carry the original photo IDs. Image order, English labels, accessible descriptions and the central print are set in `src/photo-gallery.js`. Substituting a local photograph updates its particles and highlight pass automatically.

The frozen preview includes the glTF Draco JavaScript decoder distributed with Three.js. Its Apache 2.0 license is included in public/licenses/Draco-Apache-2.0.txt.
