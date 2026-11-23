uniform float birdDetach;
varying float birdHeight;
uniform float birdRole,birdRoll;
uniform vec3 birdOffset;
varying vec2 birdLocal;
uniform sampler2D touchTexture, autoTouchTexture;
uniform float opacity, revealProgress;
uniform vec2 resolution, revealCenter;

varying vec2 vUv, uvScreen;
varying vec4 flowmap;
varying float extrude;

void main() {
  vUv = uv;
  birdLocal = position.xy;
  birdHeight = position.z;

  vec4 worldPosition = modelMatrix * vec4(position, 1.);
  vec4 ndc = projectionMatrix * viewMatrix * worldPosition;
  uvScreen = (ndc.xy / ndc.w + 1.) * .5;

  flowmap = texture2D(touchTexture, uvScreen) + texture2D(autoTouchTexture, uvScreen);
  vec2 aspect = vec2(resolution.x / resolution.y, 1.);
  vec2 offset = (uvScreen - revealCenter) * aspect;
  float distanceFromTitle = length(offset);
  float angle = atan(offset.y, offset.x);
  float irregularDistance = distanceFromTitle * (1. + .035 * sin(angle * 5.) + .02 * sin(angle * 9.));
  float farthest = length(max(revealCenter, 1. - revealCenter) * aspect);
  float radius = mix(-.12, farthest * 1.12 + .12, revealProgress);
  float spread = 1. - smoothstep(radius - .10, radius + .10, irregularDistance);
  if (revealProgress <= 0.) spread = 0.;
  if (revealProgress >= 1.) spread = 1.;
  extrude = clamp(max(flowmap.b, spread) * opacity, 0., 1.);

  if(birdRole>1.5) extrude=1.;
  worldPosition.xyz *= vec3(1.004, 1.004, mix(.05, 1., extrude));

  if(birdRole>.5 && birdRole<1.5){
    float cut=1.-smoothstep(-.04,.045,birdDistance(birdLocal));
    worldPosition.z*=1.-cut*birdDetach;
  }
  if(birdRole>1.5){
    vec2 pivot=vec2(-.5,.8);
    vec2 p=worldPosition.xy-pivot;
    worldPosition.xy=pivot+mat2(cos(birdRoll),sin(birdRoll),-sin(birdRoll),cos(birdRoll))*p;
    worldPosition.xyz+=birdOffset;
  }
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
