varying float birdHeight;
precision highp float;

uniform sampler2D map, emissive, plaster;
uniform float darkMode, brightness, contrast, plasterStrength;

varying vec2 vUv, uvScreen;
varying vec4 flowmap;
varying float extrude;

vec4 sRGB(vec4 color) {
  vec3 adjusted = mix(pow(color.rgb, vec3(.41666)) * 1.055 - vec3(.055), color.rgb * 12.92, step(color.rgb, vec3(.0031308)));
  return vec4(adjusted, color.a);
}

uniform float birdRole,birdHover,birdDetach;
varying vec2 birdLocal;
// BIRD_MASK
void main() {
  float extrusion = extrude;
  vec3 map1 = sRGB(texture2D(map, vUv)).rgb;
  vec3 map2 = sRGB(texture2D(emissive, vUv)).rgb;
  float plasterTexture = texture2D(plaster, uvScreen).g;

  float initialMix = mix(map2.b, map2.g, smoothstep(0., .2, extrusion));
  float firstLayer = mix(.54504, initialMix, smoothstep(.2, .4, extrusion));
  float secondLayer = mix(map2.r, map1.b, smoothstep(.4, .6, extrusion));
  float thirdLayer = mix(firstLayer, secondLayer, smoothstep(.6, .8, extrusion));
  float finalLayer = mix(map1.g, map1.r, smoothstep(.8, 1., extrusion));

  float interpolatedValue = mix(thirdLayer, finalLayer, smoothstep(.8, 1., extrusion));

  vec3 finalColor = vec3(interpolatedValue) * contrast + brightness;
  finalColor = mix(finalColor, finalColor * plasterTexture * 1.5, plasterStrength);

  vec3 darkVer = pow(vec3(interpolatedValue) * (length(flowmap) * .0003) + vec3(interpolatedValue), vec3(5.5));
  finalColor = mix(finalColor, darkVer, darkMode);

  float alpha=1.;
  if(birdRole>.5){
    float d=birdDistance(birdLocal);
    float cut=1.-smoothstep(-.025,.015,d);
    float aa=max(fwidth(d),.0015);
    float line=1.-smoothstep(.003,.008+aa,abs(d));
    float rim=(line*.56+exp(-abs(d)*65.)*.27)*birdHover;
    vec3 blue=vec3(.30,.65,1.);
    finalColor=mix(finalColor,blue,clamp(rim*.74,0.,.8));
    finalColor+=vec3(.015,.035,.075)*rim;
    if(birdRole<1.5){
      float stone=mix(.627,.627*plasterTexture*1.5,plasterStrength);
      finalColor=mix(finalColor,vec3(stone),cut*birdDetach);
    }else{
      alpha=cut*birdDetach*smoothstep(.005,.07,birdHeight);
      if(alpha<.01)discard;
    }
  }
  gl_FragColor = vec4(finalColor, alpha);
}