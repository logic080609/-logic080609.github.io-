// Render a deterministic dust lane once per viewport, then move it as one layer.
export function mountSky(parent) {
  const sky = document.createElement('canvas');
  sky.className = 'celestial-sky';
  parent.prepend(sky);
  const ctx = sky.getContext('2d');
  function paint() {
    if (!ctx) return;
    const w = sky.width = Math.min(1800, Math.round(innerWidth * Math.min(devicePixelRatio, 1.5)));
    const h = sky.height = Math.round(w * innerHeight / innerWidth);
    const fog = document.createElement('canvas');
    fog.width = 460;
    fog.height = Math.max(120, Math.round(460*h/w));
    const fc = fog.getContext('2d');
    const pixels = fc.createImageData(fog.width, fog.height);
    function hash(x,y) {const v=Math.sin(x*127.1+y*311.7)*43758.5453;return v-Math.floor(v);}
    function noise(x,y) {
      const i=Math.floor(x),j=Math.floor(y);
      let a=x-i,b=y-j; a=a*a*(3-2*a); b=b*b*(3-2*b);
      return (hash(i,j)*(1-a)+hash(i+1,j)*a)*(1-b)+(hash(i,j+1)*(1-a)+hash(i+1,j+1)*a)*b;
    }
    for(let y=0;y<fog.height;y++) for(let x=0;x<fog.width;x++) {
      const u=x/fog.width,v=y/fog.height;
      const n=noise(u*7,v*5)*.53+noise(u*17,v*13)*.26+noise(u*41,v*33)*.14+noise(u*95,v*80)*.07;
      const d=v-.82+.67*u+.09*Math.sin(u*7)+.29*(n-.48);
      const band=Math.exp(-d*d*65);
      const light=band*Math.pow(n,2.2)*1.85;
      const gold=Math.exp(-Math.pow((u-.81)*3,2));
      const k=(y*fog.width+x)*4;
      pixels.data[k]=7+light*(62+99*gold);
      pixels.data[k+1]=9+light*(69+45*gold);
      pixels.data[k+2]=17+light*(104-20*gold);
      pixels.data[k+3]=255;
    }
    fc.putImageData(pixels,0,0);ctx.drawImage(fog,0,0,w,h);
    let seed=73219;
    function rand(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
    for(let i=0;i<Math.min(3800,w*h/380);i++){
      const x=rand()*w,y=rand()*h,bright=rand()**4,r=.32+bright*.93;
      ctx.fillStyle='rgba('+ (rand()<.18?'255,219,173':'211,224,248')+','+(.17+bright*.75)+')';
      ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
      if(bright>.985){ctx.fillRect(x-r*3,y-.35,r*6,.7);ctx.fillRect(x-.35,y-r*3,.7,r*6);}
    }
  }
  paint();
  window.addEventListener('resize',paint);
  return ()=>{sky.remove();window.removeEventListener('resize',paint);};
}