varying vec3 ink;
varying float opacity;
varying float softness;

void main() {
  vec2 p = abs(gl_PointCoord*2.-1.);
  float edge = mix(length(p), max(p.x,p.y), .40);
  float alpha = opacity * (1.-smoothstep(softness,1.,edge));
  if (alpha < .012) discard;
  gl_FragColor = vec4(ink, alpha);
}
