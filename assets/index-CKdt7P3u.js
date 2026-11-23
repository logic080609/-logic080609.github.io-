(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bf="172",$x=0,jd=1,Zx=2,Dg=1,Jx=2,nr=3,mr=0,zn=1,Oi=2,kr=0,po=1,$d=2,Zd=3,Jd=4,Qx=5,fs=100,ev=101,tv=102,nv=103,iv=104,rv=200,sv=201,ov=202,av=203,ih=204,rh=205,lv=206,cv=207,uv=208,hv=209,fv=210,dv=211,pv=212,mv=213,gv=214,sh=0,oh=1,ah=2,Eo=3,lh=4,ch=5,uh=6,hh=7,Lg=0,_v=1,xv=2,zr=0,vv=1,yv=2,Mv=3,Sv=4,Tv=5,bv=6,Ev=7,Qd="attached",Av="detached",Ig=300,Ao=301,wo=302,fh=303,dh=304,Gc=306,Ro=1e3,Pr=1001,yc=1002,Fn=1003,Ng=1004,pa=1005,Nn=1006,ic=1007,cr=1008,gr=1009,Ug=1010,Fg=1011,Ga=1012,kf=1013,ws=1014,Ri=1015,ll=1016,zf=1017,Vf=1018,Co=1020,Og=35902,Bg=1021,kg=1022,ti=1023,zg=1024,Vg=1025,mo=1026,Po=1027,Hf=1028,Gf=1029,Hg=1030,Wf=1031,Xf=1033,rc=33776,sc=33777,oc=33778,ac=33779,ph=35840,mh=35841,gh=35842,_h=35843,xh=36196,vh=37492,yh=37496,Mh=37808,Sh=37809,Th=37810,bh=37811,Eh=37812,Ah=37813,wh=37814,Rh=37815,Ch=37816,Ph=37817,Dh=37818,Lh=37819,Ih=37820,Nh=37821,lc=36492,Uh=36494,Fh=36495,Gg=36283,Oh=36284,Bh=36285,kh=36286,Wa=2300,Xa=2301,Zc=2302,ep=2400,tp=2401,np=2402,wv=2500,Rv=0,Wg=1,zh=2,Cv=3200,Pv=3201,Xg=0,Dv=1,Rr="",zt="srgb",yn="srgb-linear",Mc="linear",Mt="srgb",Bs=7680,ip=519,Lv=512,Iv=513,Nv=514,qg=515,Uv=516,Fv=517,Ov=518,Bv=519,Vh=35044,rp="300 es",ur=2e3,Sc=2001;class Go{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sp=1234567;const Ea=Math.PI/180,Do=180/Math.PI;function Pi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function qf(r,e){return(r%e+e)%e}function kv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function zv(r,e,t){return r!==e?(t-r)/(e-r):0}function Aa(r,e,t){return(1-t)*r+t*e}function Vv(r,e,t,n){return Aa(r,e,1-Math.exp(-t*n))}function Hv(r,e=1){return e-Math.abs(qf(r,e*2)-e)}function Gv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Wv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Xv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function qv(r,e){return r+Math.random()*(e-r)}function Yv(r){return r*(.5-Math.random())}function Kv(r){r!==void 0&&(sp=r);let e=sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jv(r){return r*Ea}function $v(r){return r*Do}function Zv(r){return(r&r-1)===0&&r!==0}function Jv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ey(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ai(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ty={DEG2RAD:Ea,RAD2DEG:Do,generateUUID:Pi,clamp:st,euclideanModulo:qf,mapLinear:kv,inverseLerp:zv,lerp:Aa,damp:Vv,pingpong:Hv,smoothstep:Gv,smootherstep:Wv,randInt:Xv,randFloat:qv,randFloatSpread:Yv,seededRandom:Kv,degToRad:jv,radToDeg:$v,isPowerOfTwo:Zv,ceilPowerOfTwo:Jv,floorPowerOfTwo:Qv,setQuaternionFromProperEuler:ey,normalize:vt,denormalize:Ai};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],M=i[4],x=i[7],A=i[2],E=i[5],T=i[8];return s[0]=o*_+a*S+l*A,s[3]=o*m+a*M+l*E,s[6]=o*p+a*x+l*T,s[1]=c*_+u*S+h*A,s[4]=c*m+u*M+h*E,s[7]=c*p+u*x+h*T,s[2]=f*_+d*S+g*A,s[5]=f*m+d*M+g*E,s[8]=f*p+d*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new Je;function Yg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ny(){const r=qa("canvas");return r.style.display="block",r}const op={};function io(r){r in op||(op[r]=!0,console.warn(r))}function iy(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ry(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ap=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lp=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){const r={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(i.r=go(i.r),i.g=go(i.g),i.b=go(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rr?Mc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[yn]:{primaries:e,whitePoint:n,transfer:Mc,toXYZ:ap,fromXYZ:lp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:ap,fromXYZ:lp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),r}const ct=oy();function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function go(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class ay{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=qa("canvas")),ks.width=e.width,ks.height=e.height;const n=ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ly=0;class Kg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Qc(i[o].image)):s.push(Qc(i[o]))}else s=Qc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ay.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cy=0;class Kt extends Go{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Pr,i=Pr,s=Nn,o=cr,a=ti,l=gr,c=Kt.DEFAULT_ANISOTROPY,u=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Pi(),this.name="",this.source=new Kg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Ig;Kt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(d+1)/2,A=(p+1)/2,E=(u+f)/4,T=(h+_)/4,R=(g+m)/4;return M>x&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=T/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=R/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uy extends Go{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Kg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends uy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jg extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hy extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),E=Math.atan2(A,p*S);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const x=a*S;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eu=new k,cp=new jr;class vr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(s,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),gl.subVectors(this.max,ta),zs.subVectors(e.a,ta),Vs.subVectors(e.b,ta),Hs.subVectors(e.c,ta),yr.subVectors(Vs,zs),Mr.subVectors(Hs,Vs),Jr.subVectors(zs,Hs);let t=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-Jr.z,Jr.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,Jr.z,0,-Jr.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-Jr.y,Jr.x,0];return!tu(t,zs,Vs,Hs,gl)||(t=[1,0,0,0,1,0,0,0,1],!tu(t,zs,Vs,Hs,gl))?!1:(_l.crossVectors(yr,Mr),t=[_l.x,_l.y,_l.z],tu(t,zs,Vs,Hs,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new k,new k,new k,new k,new k,new k,new k,new k],Mi=new k,ml=new vr,zs=new k,Vs=new k,Hs=new k,yr=new k,Mr=new k,Jr=new k,ta=new k,gl=new k,_l=new k,Qr=new k;function tu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Qr.fromArray(r,s);const a=i.x*Math.abs(Qr.x)+i.y*Math.abs(Qr.y)+i.z*Math.abs(Qr.z),l=e.dot(Qr),c=t.dot(Qr),u=n.dot(Qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fy=new vr,na=new k,nu=new k;class Yi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(na,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(nu)),this.expandByPoint(na.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new k,iu=new k,xl=new k,Sr=new k,ru=new k,vl=new k,su=new k;class cl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){iu.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(iu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xl),a=Sr.dot(this.direction),l=-Sr.dot(xl),c=Sr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(iu).addScaledVector(xl,f),d}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,i,s){ru.subVectors(t,e),vl.subVectors(n,e),su.crossVectors(ru,vl);let o=this.direction.dot(su),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sr.subVectors(this.origin,e);const l=a*this.direction.dot(vl.crossVectors(Sr,vl));if(l<0)return null;const c=a*this.direction.dot(ru.cross(Sr));if(c<0||l+c>o)return null;const u=-a*Sr.dot(su);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dy,e,py)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Tr.crossVectors(n,Kn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Tr.crossVectors(n,Kn)),Tr.normalize(),yl.crossVectors(Kn,Tr),i[0]=Tr.x,i[4]=yl.x,i[8]=Kn.x,i[1]=Tr.y,i[5]=yl.y,i[9]=Kn.y,i[2]=Tr.z,i[6]=yl.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],M=n[7],x=n[11],A=n[15],E=i[0],T=i[4],R=i[8],y=i[12],v=i[1],P=i[5],N=i[9],F=i[13],H=i[2],W=i[6],V=i[10],G=i[14],L=i[3],$=i[7],D=i[11],re=i[15];return s[0]=o*E+a*v+l*H+c*L,s[4]=o*T+a*P+l*W+c*$,s[8]=o*R+a*N+l*V+c*D,s[12]=o*y+a*F+l*G+c*re,s[1]=u*E+h*v+f*H+d*L,s[5]=u*T+h*P+f*W+d*$,s[9]=u*R+h*N+f*V+d*D,s[13]=u*y+h*F+f*G+d*re,s[2]=g*E+_*v+m*H+p*L,s[6]=g*T+_*P+m*W+p*$,s[10]=g*R+_*N+m*V+p*D,s[14]=g*y+_*F+m*G+p*re,s[3]=S*E+M*v+x*H+A*L,s[7]=S*T+M*P+x*W+A*$,s[11]=S*R+M*N+x*V+A*D,s[15]=S*y+M*F+x*G+A*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,M=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,A=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,E=t*S+n*M+i*x+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*T,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=M*T,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*T,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=x*T,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=A*T,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,S=l*c,M=l*u,x=l*h,A=n.x,E=n.y,T=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+x)*A,i[2]=(g-M)*A,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(g+M)*T,i[9]=(m-S)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gs.set(i[0],i[1],i[2]).length();const o=Gs.set(i[4],i[5],i[6]).length(),a=Gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Si.copy(this);const c=1/s,u=1/o,h=1/a;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=h,Si.elements[9]*=h,Si.elements[10]*=h,t.setFromRotationMatrix(Si),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ur){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===ur)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Sc)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ur){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===ur)g=(o+s)*h,_=-2*h;else if(a===Sc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gs=new k,Si=new je,dy=new k(0,0,0),py=new k(1,1,1),Tr=new k,yl=new k,Kn=new k,up=new je,hp=new jr;class Xi{constructor(e=0,t=0,n=0,i=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let my=0;const fp=new k,Ws=new jr,Ji=new je,Ml=new k,ia=new k,gy=new k,_y=new jr,dp=new k(1,0,0),pp=new k(0,1,0),mp=new k(0,0,1),gp={type:"added"},xy={type:"removed"},Xs={type:"childadded",child:null},ou={type:"childremoved",child:null};class It extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new k,t=new Xi,n=new jr,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Je}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(dp,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dp,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ml.copy(e):Ml.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(ia,Ml,this.up):Ji.lookAt(Ml,ia,this.up),this.quaternion.setFromRotationMatrix(Ji),i&&(Ji.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(Ji),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gp),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xy),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gp),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}It.DEFAULT_UP=new k(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new k,Qi=new k,au=new k,er=new k,qs=new k,Ys=new k,_p=new k,lu=new k,cu=new k,uu=new k,hu=new mt,fu=new mt,du=new mt;class wi{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),Qi.subVectors(n,t),au.subVectors(e,t);const o=Ti.dot(Ti),a=Ti.dot(Qi),l=Ti.dot(au),c=Qi.dot(Qi),u=Qi.dot(au),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return hu.setScalar(0),fu.setScalar(0),du.setScalar(0),hu.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,n),du.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(hu,s.x),o.addScaledVector(fu,s.y),o.addScaledVector(du,s.z),o}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),Qi.subVectors(e,t),Ti.cross(Qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ti.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;qs.subVectors(i,n),Ys.subVectors(s,n),lu.subVectors(e,n);const l=qs.dot(lu),c=Ys.dot(lu);if(l<=0&&c<=0)return t.copy(n);cu.subVectors(e,i);const u=qs.dot(cu),h=Ys.dot(cu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qs,o);uu.subVectors(e,s);const d=qs.dot(uu),g=Ys.dot(uu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ys,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return _p.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(_p,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function pu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=qf(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return ct.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=$g[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ct.fromWorkingColorSpace(dn.copy(this),e),Math.round(st(dn.r*255,0,255))*65536+Math.round(st(dn.g*255,0,255))*256+Math.round(st(dn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=zt){ct.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Sl);const n=Aa(br.h,Sl.h,t),i=Aa(br.s,Sl.s,t),s=Aa(br.l,Sl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Ye;Ye.NAMES=$g;let vy=0;class Vi extends Go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=po,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ih&&(n.blendSrc=this.blendSrc),this.blendDst!==rh&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ip&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dr extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new k,Tl=new qe;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}}class Zg extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jg extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dr extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yy=0;const ci=new je,mu=new It,Ks=new k,jn=new vr,ra=new vr,nn=new k;class vi extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yg(e)?Jg:Zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(jn.min,ra.min),jn.expandByPoint(nn),nn.addVectors(jn.max,ra.max),jn.expandByPoint(nn)):(jn.expandByPoint(ra.min),jn.expandByPoint(ra.max))}jn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),nn.add(Ks)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new k,l[R]=new k;const c=new k,u=new k,h=new k,f=new qe,d=new qe,g=new qe,_=new k,m=new k;function p(R,y,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[R].add(_),a[y].add(_),a[v].add(_),l[R].add(m),l[y].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,y=S.length;R<y;++R){const v=S[R],P=v.start,N=v.count;for(let F=P,H=P+N;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new k,x=new k,A=new k,E=new k;function T(R){A.fromBufferAttribute(i,R),E.copy(A);const y=a[R];M.copy(y),M.sub(A.multiplyScalar(A.dot(y))).normalize(),x.crossVectors(E,y);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,y=S.length;R<y;++R){const v=S[R],P=v.start,N=v.count;for(let F=P,H=P+N;F<H;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xp=new je,es=new cl,bl=new Yi,vp=new k,El=new k,Al=new k,wl=new k,gu=new k,Rl=new k,yp=new k,Cl=new k;class Un extends It{constructor(e=new vi,t=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(gu.fromBufferAttribute(h,e),o?Rl.addScaledVector(gu,u):Rl.addScaledVector(gu.sub(t),u))}t.add(Rl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(bl.containsPoint(es.origin)===!1&&(es.intersectSphere(bl,vp)===null||es.origin.distanceToSquared(vp)>(e.far-e.near)**2))&&(xp.copy(s).invert(),es.copy(e.ray).applyMatrix4(xp),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,A=M;x<A;x+=3){const E=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=Pl(this,p,e,n,c,u,h,E,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=Pl(this,o,e,n,c,u,h,S,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,A=M;x<A;x+=3){const E=x,T=x+1,R=x+2;i=Pl(this,p,e,n,c,u,h,E,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,M=m+1,x=m+2;i=Pl(this,o,e,n,c,u,h,S,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function My(r,e,t,n,i,s,o,a){let l;if(e.side===zn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===mr,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Cl);return c<t.near||c>t.far?null:{distance:c,point:Cl.clone(),object:r}}function Pl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,El),r.getVertexPosition(l,Al),r.getVertexPosition(c,wl);const u=My(r,e,t,n,El,Al,wl,yp);if(u){const h=new k;wi.getBarycoord(yp,El,Al,wl,h),i&&(u.uv=wi.getInterpolatedAttribute(i,a,l,c,h,new qe)),s&&(u.uv1=wi.getInterpolatedAttribute(s,a,l,c,h,new qe)),o&&(u.normal=wi.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};wi.getNormal(El,Al,wl,f.normal),u.face=f,u.barycoord=h}return u}class ul extends vi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(u,3)),this.setAttribute("uv",new dr(h,2));function g(_,m,p,S,M,x,A,E,T,R,y){const v=x/T,P=A/R,N=x/2,F=A/2,H=E/2,W=T+1,V=R+1;let G=0,L=0;const $=new k;for(let D=0;D<V;D++){const re=D*P-F;for(let Me=0;Me<W;Me++){const Ue=Me*v-N;$[_]=Ue*S,$[m]=re*M,$[p]=H,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=E>0?1:-1,u.push($.x,$.y,$.z),h.push(Me/T),h.push(1-D/R),G+=1}}for(let D=0;D<R;D++)for(let re=0;re<T;re++){const Me=f+re+W*D,Ue=f+re+W*(D+1),K=f+(re+1)+W*(D+1),Z=f+(re+1)+W*D;l.push(Me,Ue,Z),l.push(Ue,K,Z),L+=6}a.addGroup(d,L,y),d+=L,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(r){const e={};for(let t=0;t<r.length;t++){const n=Lo(r[t]);for(const i in n)e[i]=n[i]}return e}function Sy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Qg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Ty={clone:Lo,merge:An};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class e_ extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new k,Mp=new qe,Sp=new qe;class Pn extends e_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Mp,Sp),t.subVectors(Sp,Mp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,$s=1;class Ay extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pn(js,$s,e,t);i.layers=this.layers,this.add(i);const s=new Pn(js,$s,e,t);s.layers=this.layers,this.add(s);const o=new Pn(js,$s,e,t);o.layers=this.layers,this.add(o);const a=new Pn(js,$s,e,t);a.layers=this.layers,this.add(a);const l=new Pn(js,$s,e,t);l.layers=this.layers,this.add(l);const c=new Pn(js,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ur)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class t_ extends Kt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ao,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wy extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new t_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ul(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:kr});s.uniforms.tEquirect.value=t;const o=new Un(i,s),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=Nn),new Ay(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Tc extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ry{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new k;class Kf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Tp=new k,bp=new mt,Ep=new mt,Cy=new k,Ap=new je,Dl=new k,_u=new Yi,wp=new je,xu=new cl;class Py extends Un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qd,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dl),this.boundingBox.expandByPoint(Dl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dl),this.boundingSphere.expandByPoint(Dl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_u.copy(this.boundingSphere),_u.applyMatrix4(i),e.ray.intersectsSphere(_u)!==!1&&(wp.copy(i).invert(),xu.copy(e.ray).applyMatrix4(wp),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Av?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bp.fromBufferAttribute(i.attributes.skinIndex,e),Ep.fromBufferAttribute(i.attributes.skinWeight,e),Tp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Ep.getComponent(s);if(o!==0){const a=bp.getComponent(s);Ap.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Cy.copy(Tp).applyMatrix4(Ap),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class n_ extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jf extends Kt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Fn,u=Fn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rp=new je,Dy=new je;class $f{constructor(e=[],t=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Dy;Rp.multiplyMatrices(a,t[s]),Rp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $f(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jf(t,e,e,ti,Ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new n_),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Hh extends an{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zs=new je,Cp=new je,Ll=[],Pp=new vr,Ly=new je,sa=new Un,oa=new Yi;class Iy extends Un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ly)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Pp.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Pp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),oa.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Zs),Cp.multiplyMatrices(n,Zs),sa.matrixWorld=Cp,sa.raycast(e,Ll);for(let o=0,a=Ll.length;o<a;o++){const l=Ll[o];l.instanceId=s,l.object=this,t.push(l)}Ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jf(new Float32Array(i*this.count),i,this.count,Hf,Ri));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const vu=new k,Ny=new k,Uy=new Je;class as{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vu.subVectors(n,t).cross(Ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uy.getNormalMatrix(e),i=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Yi,Il=new k;class Zf{constructor(e=new as,t=new as,n=new as,i=new as,s=new as,o=new as){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ur){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+u,m+g,x+S).normalize(),n[3].setComponents(l-o,f-u,m-g,x-S).normalize(),n[4].setComponents(l-a,f-h,m-_,x-M).normalize(),t===ur)n[5].setComponents(l+a,f+h,m+_,x+M).normalize();else if(t===Sc)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Il.x=i.normal.x>0?e.max.x:e.min.x,Il.y=i.normal.y>0?e.max.y:e.min.y,Il.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i_ extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new k,Ec=new k,Dp=new je,aa=new cl,Nl=new Yi,yu=new k,Lp=new k;class Jf extends It{constructor(e=new vi,t=new i_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)bc.fromBufferAttribute(t,i-1),Ec.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bc.distanceTo(Ec);e.setAttribute("lineDistance",new dr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(i),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;Dp.copy(i).invert(),aa.copy(e.ray).applyMatrix4(Dp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),M=Ul(this,e,aa,l,p,S);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ul(this,e,aa,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Ul(this,e,aa,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ul(this,e,aa,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ul(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(bc.fromBufferAttribute(o,i),Ec.fromBufferAttribute(o,s),t.distanceSqToSegment(bc,Ec,yu,Lp)>n)return;yu.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(yu);if(!(l<e.near||l>e.far))return{distance:l,point:Lp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Ip=new k,Np=new k;class Fy extends Jf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ip.fromBufferAttribute(t,i),Np.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ip.distanceTo(Np);e.setAttribute("lineDistance",new dr(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oy extends Jf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class r_ extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Up=new je,Gh=new cl,Fl=new Yi,Ol=new k;class s_ extends It{constructor(e=new vi,t=new r_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(i),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;Up.copy(i).invert(),Gh.copy(e.ray).applyMatrix4(Up);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ol.fromBufferAttribute(h,m),Fp(Ol,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ol.fromBufferAttribute(h,g),Fp(Ol,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fp(r,e,t,n,i,s,o){const a=Gh.distanceSqToPoint(r);if(a<t){const l=new k;Gh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ps extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}class By extends Kt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class o_ extends Kt{constructor(e,t,n,i,s,o,a,l,c,u=mo){if(u!==mo&&u!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mo&&(n=ws),n===void 0&&u===Po&&(n=Co),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wo extends vi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let M=0;M<c;M++){const x=M*h-s;g.push(x,-S,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const M=S+c*p,x=S+c*(p+1),A=S+1+c*(p+1),E=S+1+c*p;d.push(M,x,E),d.push(x,A,E)}this.setIndex(d),this.setAttribute("position",new dr(g,3)),this.setAttribute("normal",new dr(_,3)),this.setAttribute("uv",new dr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qf extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xg,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ki extends Qf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ky extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zy extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Bl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Vy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Hy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Op(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function a_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class hl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gy extends hl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ep,endingEnd:ep}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case tp:s=e,a=2*t-n;break;case np:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tp:o=e,l=2*n-t;break;case np:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+S*o[c+A]+M*o[l+A]+x*o[h+A];return s}}class Wy extends hl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Xy extends hl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bl(t,this.TimeBufferType),this.values=Bl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bl(e.times,Array),values:Bl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case Xa:t=this.InterpolantFactoryMethodLinear;break;case Zc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return Zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Vy(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ji.prototype.TimeBufferType=Float32Array;ji.prototype.ValueBufferType=Float32Array;ji.prototype.DefaultInterpolation=Xa;class Xo extends ji{constructor(e,t,n){super(e,t,n)}}Xo.prototype.ValueTypeName="bool";Xo.prototype.ValueBufferType=Array;Xo.prototype.DefaultInterpolation=Wa;Xo.prototype.InterpolantFactoryMethodLinear=void 0;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;class l_ extends ji{}l_.prototype.ValueTypeName="color";class Io extends ji{}Io.prototype.ValueTypeName="number";class qy extends hl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)jr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class No extends ji{InterpolantFactoryMethodLinear(e){return new qy(this.times,this.values,this.getValueSize(),e)}}No.prototype.ValueTypeName="quaternion";No.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends ji{constructor(e,t,n){super(e,t,n)}}qo.prototype.ValueTypeName="string";qo.prototype.ValueBufferType=Array;qo.prototype.DefaultInterpolation=Wa;qo.prototype.InterpolantFactoryMethodLinear=void 0;qo.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends ji{}Uo.prototype.ValueTypeName="vector";class Yy{constructor(e="",t=-1,n=[],i=wv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jy(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Hy(l);l=Op(l,1,u),c=Op(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Io(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];a_(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const M=f[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new Io(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Uo,d+".position",f,"pos",i),n(No,d+".quaternion",f,"rot",i),n(Uo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ky(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Io;case"vector":case"vector2":case"vector3":case"vector4":return Uo;case"color":return l_;case"quaternion":return No;case"bool":case"boolean":return Xo;case"string":return qo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function jy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ky(r.type);if(r.times===void 0){const t=[],n=[];a_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Lr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class c_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const $y=new c_;class Us{constructor(e){this.manager=e!==void 0?e:$y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Us.DEFAULT_MATERIAL_NAME="__DEFAULT";const tr={};class Zy extends Error{constructor(e,t){super(e),this.response=t}}class Ac extends Us{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Lr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(tr[e]!==void 0){tr[e].push({onLoad:t,onProgress:n,onError:i});return}tr[e]=[],tr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=tr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,T=u.length;E<T;E++){const R=u[E];R.onProgress&&R.onProgress(A)}p.enqueue(x),S()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Zy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Lr.add(e,c);const u=tr[e];delete tr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=tr[e];if(u===void 0)throw this.manager.itemError(e),c;delete tr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jy extends Us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Lr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=qa("img");function l(){u(),Lr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ed extends Us{constructor(e){super(e)}load(e,t,n,i){const s=new Kt,o=new Jy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class td extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Mu=new je,Bp=new k,kp=new k;class nd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),Mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qy extends nd{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Do*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class eM extends td{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Qy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zp=new je,la=new k,Su=new k;class tM extends nd{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),la.setFromMatrixPosition(e.matrixWorld),n.position.copy(la),Su.copy(n.position),Su.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Su),n.updateMatrixWorld(),i.makeTranslation(-la.x,-la.y,-la.z),zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}}class nM extends td{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yo extends e_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iM extends nd{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rM extends td{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new iM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class sM extends Us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Lr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Lr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Lr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Lr.add(e,l),s.manager.itemStart(e)}}class oM extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vp(){return performance.now()}const id="\\[\\]\\.:\\/",lM=new RegExp("["+id+"]","g"),rd="[^"+id+"]",cM="[^"+id.replace("\\.","")+"]",uM=/((?:WC+[\/:])*)/.source.replace("WC",rd),hM=/(WCOD+)?/.source.replace("WCOD",cM),fM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rd),dM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rd),pM=new RegExp("^"+uM+hM+fM+dM+"$"),mM=["material","materials","bones","map"];class gM{constructor(e,t,n){const i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lM,"")}static parseTrackName(e){const t=pM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);mM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=gM;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hp=new je;class _M{constructor(e,t,n=0,i=1/0){this.ray=new cl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hp),this}intersectObject(e,t=!0,n=[]){return Wh(e,this,n,t),n.sort(Gp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Wh(e[i],this,n,t);return n.sort(Gp),n}}function Gp(r,e){return r.distance-e.distance}function Wh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Wh(s[o],e,t,!0)}}function Wp(r,e,t,n){const i=xM(n);switch(t){case Bg:return r*e;case zg:return r*e;case Vg:return r*e*2;case Hf:return r*e/i.components*i.byteLength;case Gf:return r*e/i.components*i.byteLength;case Hg:return r*e*2/i.components*i.byteLength;case Wf:return r*e*2/i.components*i.byteLength;case kg:return r*e*3/i.components*i.byteLength;case ti:return r*e*4/i.components*i.byteLength;case Xf:return r*e*4/i.components*i.byteLength;case rc:case sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case oc:case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:case _h:return Math.max(r,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(r,8)*Math.max(e,8)/2;case xh:case vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lc:case Uh:case Fh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gg:case Oh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bh:case kh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xM(r){switch(r){case gr:case Ug:return{byteLength:1,components:1};case Ga:case Fg:case ll:return{byteLength:2,components:1};case zf:case Vf:return{byteLength:2,components:4};case ws:case kf:case Ri:return{byteLength:4,components:1};case Og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function vM(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_S=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ES=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,US=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:yM,alphahash_pars_fragment:MM,alphamap_fragment:SM,alphamap_pars_fragment:TM,alphatest_fragment:bM,alphatest_pars_fragment:EM,aomap_fragment:AM,aomap_pars_fragment:wM,batching_pars_vertex:RM,batching_vertex:CM,begin_vertex:PM,beginnormal_vertex:DM,bsdfs:LM,iridescence_fragment:IM,bumpmap_pars_fragment:NM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:FM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:BM,color_fragment:kM,color_pars_fragment:zM,color_pars_vertex:VM,color_vertex:HM,common:GM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:XM,displacementmap_pars_vertex:qM,displacementmap_vertex:YM,emissivemap_fragment:KM,emissivemap_pars_fragment:jM,colorspace_fragment:$M,colorspace_pars_fragment:ZM,envmap_fragment:JM,envmap_common_pars_fragment:QM,envmap_pars_fragment:eS,envmap_pars_vertex:tS,envmap_physical_pars_fragment:fS,envmap_vertex:nS,fog_vertex:iS,fog_pars_vertex:rS,fog_fragment:sS,fog_pars_fragment:oS,gradientmap_pars_fragment:aS,lightmap_pars_fragment:lS,lights_lambert_fragment:cS,lights_lambert_pars_fragment:uS,lights_pars_begin:hS,lights_toon_fragment:dS,lights_toon_pars_fragment:pS,lights_phong_fragment:mS,lights_phong_pars_fragment:gS,lights_physical_fragment:_S,lights_physical_pars_fragment:xS,lights_fragment_begin:vS,lights_fragment_maps:yS,lights_fragment_end:MS,logdepthbuf_fragment:SS,logdepthbuf_pars_fragment:TS,logdepthbuf_pars_vertex:bS,logdepthbuf_vertex:ES,map_fragment:AS,map_pars_fragment:wS,map_particle_fragment:RS,map_particle_pars_fragment:CS,metalnessmap_fragment:PS,metalnessmap_pars_fragment:DS,morphinstance_vertex:LS,morphcolor_vertex:IS,morphnormal_vertex:NS,morphtarget_pars_vertex:US,morphtarget_vertex:FS,normal_fragment_begin:OS,normal_fragment_maps:BS,normal_pars_fragment:kS,normal_pars_vertex:zS,normal_vertex:VS,normalmap_pars_fragment:HS,clearcoat_normal_fragment_begin:GS,clearcoat_normal_fragment_maps:WS,clearcoat_pars_fragment:XS,iridescence_pars_fragment:qS,opaque_fragment:YS,packing:KS,premultiplied_alpha_fragment:jS,project_vertex:$S,dithering_fragment:ZS,dithering_pars_fragment:JS,roughnessmap_fragment:QS,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:tT,shadowmap_pars_vertex:nT,shadowmap_vertex:iT,shadowmask_pars_fragment:rT,skinbase_vertex:sT,skinning_pars_vertex:oT,skinning_vertex:aT,skinnormal_vertex:lT,specularmap_fragment:cT,specularmap_pars_fragment:uT,tonemapping_fragment:hT,tonemapping_pars_fragment:fT,transmission_fragment:dT,transmission_pars_fragment:pT,uv_pars_fragment:mT,uv_pars_vertex:gT,uv_vertex:_T,worldpos_vertex:xT,background_vert:vT,background_frag:yT,backgroundCube_vert:MT,backgroundCube_frag:ST,cube_vert:TT,cube_frag:bT,depth_vert:ET,depth_frag:AT,distanceRGBA_vert:wT,distanceRGBA_frag:RT,equirect_vert:CT,equirect_frag:PT,linedashed_vert:DT,linedashed_frag:LT,meshbasic_vert:IT,meshbasic_frag:NT,meshlambert_vert:UT,meshlambert_frag:FT,meshmatcap_vert:OT,meshmatcap_frag:BT,meshnormal_vert:kT,meshnormal_frag:zT,meshphong_vert:VT,meshphong_frag:HT,meshphysical_vert:GT,meshphysical_frag:WT,meshtoon_vert:XT,meshtoon_frag:qT,points_vert:YT,points_frag:KT,shadow_vert:jT,shadow_frag:$T,sprite_vert:ZT,sprite_frag:JT},xe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Fi={basic:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:An([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:An([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:An([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:An([xe.points,xe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:An([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:An([xe.common,xe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:An([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:An([xe.sprite,xe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:An([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:An([xe.lights,xe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Fi.physical={uniforms:An([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const kl={r:0,b:0,g:0},ns=new Xi,QT=new je;function eb(r,e,t,n,i,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const A=g(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Gc)?(u===void 0&&(u=new Un(new ul(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Lo(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ns.copy(x.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(ns)),u.material.toneMapped=ct.getTransfer(A.colorSpace)!==Mt,(h!==A||f!==A.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Un(new Wo(2,2),new Ii({name:"BackgroundMaterial",uniforms:Lo(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ct.getTransfer(A.colorSpace)!==Mt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(kl,Qg(r)),n.buffers.color.setClear(kl.r,kl.g,kl.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:S}}function tb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(v,P,N,F,H){let W=!1;const V=h(F,N,P);s!==V&&(s=V,c(s.object)),W=d(v,F,N,H),W&&g(v,F,N,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(v,P,N,F),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,P,N){const F=N.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let W=H[P.id];W===void 0&&(W={},H[P.id]=W);let V=W[F];return V===void 0&&(V=f(l()),W[F]=V),V}function f(v){const P=[],N=[],F=[];for(let H=0;H<t;H++)P[H]=0,N[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,P,N,F){const H=s.attributes,W=P.attributes;let V=0;const G=N.getAttributes();for(const L in G)if(G[L].location>=0){const D=H[L];let re=W[L];if(re===void 0&&(L==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),L==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),D===void 0||D.attribute!==re||re&&D.data!==re.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(v,P,N,F){const H={},W=P.attributes;let V=0;const G=N.getAttributes();for(const L in G)if(G[L].location>=0){let D=W[L];D===void 0&&(L==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),L==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));const re={};re.attribute=D,D&&D.data&&(re.data=D.data),H[L]=re,V++}s.attributes=H,s.attributesNum=V,s.index=F}function _(){const v=s.newAttributes;for(let P=0,N=v.length;P<N;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const N=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;N[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),H[v]!==P&&(r.vertexAttribDivisor(v,P),H[v]=P)}function S(){const v=s.newAttributes,P=s.enabledAttributes;for(let N=0,F=P.length;N<F;N++)P[N]!==v[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function M(v,P,N,F,H,W,V){V===!0?r.vertexAttribIPointer(v,P,N,H,W):r.vertexAttribPointer(v,P,N,F,H,W)}function x(v,P,N,F){_();const H=F.attributes,W=N.getAttributes(),V=P.defaultAttributeValues;for(const G in W){const L=W[G];if(L.location>=0){let $=H[G];if($===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),$!==void 0){const D=$.normalized,re=$.itemSize,Me=e.get($);if(Me===void 0)continue;const Ue=Me.buffer,K=Me.type,Z=Me.bytesPerElement,oe=K===r.INT||K===r.UNSIGNED_INT||$.gpuType===kf;if($.isInterleavedBufferAttribute){const ne=$.data,fe=ne.stride,ue=$.offset;if(ne.isInstancedInterleavedBuffer){for(let Ie=0;Ie<L.locationSize;Ie++)p(L.location+Ie,ne.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ie=0;Ie<L.locationSize;Ie++)m(L.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Ie=0;Ie<L.locationSize;Ie++)M(L.location+Ie,re/L.locationSize,K,D,fe*Z,(ue+re/L.locationSize*Ie)*Z,oe)}else{if($.isInstancedBufferAttribute){for(let ne=0;ne<L.locationSize;ne++)p(L.location+ne,$.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ne=0;ne<L.locationSize;ne++)m(L.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let ne=0;ne<L.locationSize;ne++)M(L.location+ne,re/L.locationSize,K,D,re*Z,re/L.locationSize*ne*Z,oe)}}else if(V!==void 0){const D=V[G];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(L.location,D);break;case 3:r.vertexAttrib3fv(L.location,D);break;case 4:r.vertexAttrib4fv(L.location,D);break;default:r.vertexAttrib1fv(L.location,D)}}}}S()}function A(){R();for(const v in n){const P=n[v];for(const N in P){const F=P[N];for(const H in F)u(F[H].object),delete F[H];delete P[N]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const N in P){const F=P[N];for(const H in F)u(F[H].object),delete F[H];delete P[N]}delete n[v.id]}function T(v){for(const P in n){const N=n[P];if(N[v.id]===void 0)continue;const F=N[v.id];for(const H in F)u(F[H].object),delete F[H];delete N[v.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function nb(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ib(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ti&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===ll&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==gr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ri&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function rb(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new as,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,M=S*4;let x=p.clippingState||null;l.value=x,x=u(g,f,M,d);for(let A=0;A!==M;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sb(r){let e=new WeakMap;function t(o,a){return a===fh?o.mapping=Ao:a===dh&&(o.mapping=wo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fh||a===dh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wy(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const lo=4,Xp=[.125,.215,.35,.446,.526,.582],ds=20,Tu=new Yo,qp=new Ye;let bu=null,Eu=0,Au=0,wu=!1;const ls=(1+Math.sqrt(5))/2,Js=1/ls,Yp=[new k(-ls,Js,0),new k(ls,Js,0),new k(-Js,0,ls),new k(Js,0,ls),new k(0,ls,-Js),new k(0,ls,Js),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Eu,Au),this._renderer.xr.enabled=wu,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ll,format:ti,colorSpace:yn,depthBuffer:!1},i=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ob(s)),this._blurMaterial=ab(s,e,t)}return i}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,n,i){const a=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(qp),u.toneMapping=zr,u.autoClear=!1;const d=new Dr({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new Un(new ul,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(qp),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;zl(i,S*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ao||e.mapping===wo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yp[(i-s-1)%Yp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Un(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ds-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ds;m>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let S=0;for(let T=0;T<ds;++T){const R=T/_,y=Math.exp(-R*R/2);p.push(y),T===0?S+=y:T<m&&(S+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[i],A=3*x*(i>M-lo?i-M+lo:0),E=4*(this._cubeSize-x);zl(t,A,E,3*x,2*x),l.setRenderTarget(t),l.render(h,Tu)}}function ob(r){const e=[],t=[],n=[];let i=r;const s=r-lo+1+Xp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-lo?l=Xp[o-r+lo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,R=E>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];S.set(y,_*g*E),M.set(f,m*g*E);const v=[E,E,E,E,E,E];x.set(v,p*g*E)}const A=new vi;A.setAttribute("position",new an(S,_)),A.setAttribute("uv",new an(M,m)),A.setAttribute("faceIndex",new an(x,p)),e.push(A),i>lo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jp(r,e,t){const n=new Rs(r,e,t);return n.texture.mapping=Gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ab(r,e,t){const n=new Float32Array(ds),i=new k(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function $p(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Zp(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fh||l===dh,u=l===Ao||l===wo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Kp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Kp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&io("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ub(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let M=0,x=S.length;M<x;M+=3){const A=S[M+0],E=S[M+1],T=S[M+2];f.push(A,E,E,T,T,A)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const A=M+0,E=M+1,T=M+2;f.push(A,E,E,T,T,A)}}else return;const m=new(Yg(f)?Jg:Zg)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function hb(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function db(r,e,t){const n=new WeakMap,i=new mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*E*4*h),R=new jg(T,A,E,h);R.type=Ri,R.needsUpdate=!0;const y=x*4;for(let P=0;P<h;P++){const N=p[P],F=S[P],H=M[P],W=A*E*4*P;for(let V=0;V<N.count;V++){const G=V*y;g===!0&&(i.fromBufferAttribute(N,V),T[W+G+0]=i.x,T[W+G+1]=i.y,T[W+G+2]=i.z,T[W+G+3]=0),_===!0&&(i.fromBufferAttribute(F,V),T[W+G+4]=i.x,T[W+G+5]=i.y,T[W+G+6]=i.z,T[W+G+7]=0),m===!0&&(i.fromBufferAttribute(H,V),T[W+G+8]=i.x,T[W+G+9]=i.y,T[W+G+10]=i.z,T[W+G+11]=H.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new qe(A,E)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function pb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const h_=new Kt,Jp=new o_(1,1),f_=new jg,d_=new hy,p_=new t_,Qp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function Ko(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qp[i];if(s===void 0&&(s=new Float32Array(i),Qp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wc(r,e){let t=em[e];t===void 0&&(t=new Int32Array(e),em[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function vb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;im.set(n),r.uniformMatrix2fv(this.addr,!1,im),tn(t,n)}}function yb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;nm.set(n),r.uniformMatrix3fv(this.addr,!1,nm),tn(t,n)}}function Mb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;tm.set(n),r.uniformMatrix4fv(this.addr,!1,tm),tn(t,n)}}function Sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Tb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function Eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function Ab(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function Rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function Cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function Pb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Jp.compareFunction=qg,s=Jp):s=h_,t.setTexture2D(e||s,i)}function Db(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||d_,i)}function Lb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||p_,i)}function Ib(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||f_,i)}function Nb(r){switch(r){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return xb;case 35674:return vb;case 35675:return yb;case 35676:return Mb;case 5124:case 35670:return Sb;case 35667:case 35671:return Tb;case 35668:case 35672:return bb;case 35669:case 35673:return Eb;case 5125:return Ab;case 36294:return wb;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Ub(r,e){r.uniform1fv(this.addr,e)}function Fb(r,e){const t=Ko(e,this.size,2);r.uniform2fv(this.addr,t)}function Ob(r,e){const t=Ko(e,this.size,3);r.uniform3fv(this.addr,t)}function Bb(r,e){const t=Ko(e,this.size,4);r.uniform4fv(this.addr,t)}function kb(r,e){const t=Ko(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zb(r,e){const t=Ko(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Vb(r,e){const t=Ko(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Hb(r,e){r.uniform1iv(this.addr,e)}function Gb(r,e){r.uniform2iv(this.addr,e)}function Wb(r,e){r.uniform3iv(this.addr,e)}function Xb(r,e){r.uniform4iv(this.addr,e)}function qb(r,e){r.uniform1uiv(this.addr,e)}function Yb(r,e){r.uniform2uiv(this.addr,e)}function Kb(r,e){r.uniform3uiv(this.addr,e)}function jb(r,e){r.uniform4uiv(this.addr,e)}function $b(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||h_,s[o])}function Zb(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||d_,s[o])}function Jb(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||p_,s[o])}function Qb(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||f_,s[o])}function eE(r){switch(r){case 5126:return Ub;case 35664:return Fb;case 35665:return Ob;case 35666:return Bb;case 35674:return kb;case 35675:return zb;case 35676:return Vb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return qb;case 36294:return Yb;case 36295:return Kb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Qb}}class tE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nb(t.type)}}class nE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eE(t.type)}}class iE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function rm(r,e){r.seq.push(e),r.map[e.id]=e}function rE(r,e,t){const n=r.name,i=n.length;for(Ru.lastIndex=0;;){const s=Ru.exec(n),o=Ru.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rm(t,c===void 0?new tE(a,r,e):new nE(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new iE(a),rm(t,h)),t=h}}}class cc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);rE(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const sE=37297;let oE=0;function aE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const om=new Je;function lE(r){ct._getMatrix(om,ct.workingColorSpace,r);const e=`mat3( ${om.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(r)){case Mc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function am(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+aE(r.getShaderSource(e),o)}else return i}function cE(r,e){const t=lE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uE(r,e){let t;switch(e){case vv:t="Linear";break;case yv:t="Reinhard";break;case Mv:t="Cineon";break;case Sv:t="ACESFilmic";break;case bv:t="AgX";break;case Ev:t="Neutral";break;case Tv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vl=new k;function hE(){ct.getLuminanceCoefficients(Vl);const r=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function dE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ma(r){return r!==""}function lm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(r){return r.replace(mE,_E)}const gE=new Map;function _E(r,e){let t=Qe[e];if(t===void 0){const n=gE.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xh(t)}const xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(r){return r.replace(xE,vE)}function vE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function ME(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ao:case wo:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function TE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Lg:e="ENVMAP_BLENDING_MULTIPLY";break;case _v:e="ENVMAP_BLENDING_MIX";break;case xv:e="ENVMAP_BLENDING_ADD";break}return e}function bE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function EE(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yE(t),c=ME(t),u=SE(t),h=TE(t),f=bE(t),d=fE(t),g=dE(s),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(m=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==zr?uE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,cE("linearToOutputTexel",t.outputColorSpace),hE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),o=Xh(o),o=lm(o,t),o=cm(o,t),a=Xh(a),a=lm(a,t),a=cm(a,t),o=um(o),a=um(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,x=S+p+a,A=sm(i,i.VERTEX_SHADER,M),E=sm(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(E).trim();let W=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,E);else{const G=am(i,A,"vertex"),L=am(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+G+`
`+L)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||H==="")&&(V=!1);V&&(P.diagnostics={runnable:W,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(A),i.deleteShader(E),R=new cc(i,_),y=pE(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,sE)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let AE=0;class wE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new RE(e),t.set(e,n)),n}}class RE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function CE(r,e,t,n,i,s,o){const a=new Yf,l=new wE,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,P,N,F){const H=N.fog,W=F.geometry,V=y.isMeshStandardMaterial?N.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),L=G&&G.mapping===Gc?G.image.height:null,$=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const D=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=D!==void 0?D.length:0;let Me=0;W.morphAttributes.position!==void 0&&(Me=1),W.morphAttributes.normal!==void 0&&(Me=2),W.morphAttributes.color!==void 0&&(Me=3);let Ue,K,Z,oe;if($){const ve=Fi[$];Ue=ve.vertexShader,K=ve.fragmentShader}else Ue=y.vertexShader,K=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);const ne=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),ue=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,Ve=!!y.map,Pe=!!y.matcap,Ae=!!G,I=!!y.aoMap,pt=!!y.lightMap,Be=!!y.bumpMap,z=!!y.normalMap,Se=!!y.displacementMap,it=!!y.emissiveMap,we=!!y.metalnessMap,C=!!y.roughnessMap,b=y.anisotropy>0,q=y.clearcoat>0,te=y.dispersion>0,ee=y.iridescence>0,J=y.sheen>0,de=y.transmission>0,le=b&&!!y.anisotropyMap,me=q&&!!y.clearcoatMap,Ke=q&&!!y.clearcoatNormalMap,se=q&&!!y.clearcoatRoughnessMap,ae=ee&&!!y.iridescenceMap,Fe=ee&&!!y.iridescenceThicknessMap,Oe=J&&!!y.sheenColorMap,ye=J&&!!y.sheenRoughnessMap,$e=!!y.specularMap,He=!!y.specularColorMap,ht=!!y.specularIntensityMap,U=de&&!!y.transmissionMap,he=de&&!!y.thicknessMap,j=!!y.gradientMap,Q=!!y.alphaMap,ce=y.alphaTest>0,pe=!!y.alphaHash,Ge=!!y.extensions;let ft=zr;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Nt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:K,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:ue,instancingColor:ue&&F.instanceColor!==null,instancingMorph:ue&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:yn,alphaToCoverage:!!y.alphaToCoverage,map:Ve,matcap:Pe,envMap:Ae,envMapMode:Ae&&G.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:pt,bumpMap:Be,normalMap:z,displacementMap:f&&Se,emissiveMap:it,normalMapObjectSpace:z&&y.normalMapType===Dv,normalMapTangentSpace:z&&y.normalMapType===Xg,metalnessMap:we,roughnessMap:C,anisotropy:b,anisotropyMap:le,clearcoat:q,clearcoatMap:me,clearcoatNormalMap:Ke,clearcoatRoughnessMap:se,dispersion:te,iridescence:ee,iridescenceMap:ae,iridescenceThicknessMap:Fe,sheen:J,sheenColorMap:Oe,sheenRoughnessMap:ye,specularMap:$e,specularColorMap:He,specularIntensityMap:ht,transmission:de,transmissionMap:U,thicknessMap:he,gradientMap:j,opaque:y.transparent===!1&&y.blending===po&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:ce,alphaHash:pe,combine:y.combine,mapUv:Ve&&_(y.map.channel),aoMapUv:I&&_(y.aoMap.channel),lightMapUv:pt&&_(y.lightMap.channel),bumpMapUv:Be&&_(y.bumpMap.channel),normalMapUv:z&&_(y.normalMap.channel),displacementMapUv:Se&&_(y.displacementMap.channel),emissiveMapUv:it&&_(y.emissiveMap.channel),metalnessMapUv:we&&_(y.metalnessMap.channel),roughnessMapUv:C&&_(y.roughnessMap.channel),anisotropyMapUv:le&&_(y.anisotropyMap.channel),clearcoatMapUv:me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(y.sheenRoughnessMap.channel),specularMapUv:$e&&_(y.specularMap.channel),specularColorMapUv:He&&_(y.specularColorMap.channel),specularIntensityMapUv:ht&&_(y.specularIntensityMap.channel),transmissionMapUv:U&&_(y.transmissionMap.channel),thicknessMapUv:he&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(z||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ve||Q),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Me,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:it&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oi,flipSided:y.side===zn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ge&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&y.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)v.push(P),v.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(S(v,y),M(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function M(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=g[y.type];let P;if(v){const N=Fi[v];P=Ty.clone(N.uniforms)}else P=y.uniforms;return P}function A(y,v){let P;for(let N=0,F=u.length;N<F;N++){const H=u[N];if(H.cacheKey===v){P=H,++P.usedTimes;break}}return P===void 0&&(P=new EE(r,v,y,s),u.push(P)),P}function E(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:R}}function PE(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function DE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function fm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||DE),n.length>1&&n.sort(f||fm),i.length>1&&i.sort(f||fm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function LE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new dm,r.set(n,[o])):i>=s.length?(o=new dm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function IE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ye};break;case"SpotLight":t={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function NE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let UE=0;function FE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function OE(r){const e=new IE,t=NE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,s=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,M=0,x=0,A=0,E=0,T=0;c.sort(FE);for(let y=0,v=c.length;y<v;y++){const P=c[y],N=P.color,F=P.intensity,H=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*F,h+=N.g*F,f+=N.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);T++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,L=t.get(P);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,n.directionalShadow[d]=L,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(N).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const G=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,G.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=G.matrix,P.castShadow){const L=t.get(P);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=W,x++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(N).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const G=P.shadow,L=t.get(P);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,L.shadowCameraNear=G.camera.near,L.shadowCameraFar=G.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==A||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=A,R.numLightProbes=T,n.version=UE++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function pm(r){const e=new OE(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function BE(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new pm(r),e.set(i,[a])):s>=o.length?(a=new pm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const kE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VE(r,e,t){let n=new Zf;const i=new qe,s=new qe,o=new mt,a=new ky({depthPacking:Pv}),l=new zy,c={},u=t.maxTextureSize,h={[mr]:zn,[zn]:mr,[Oi]:Oi},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:kE,fragmentShader:zE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new vi;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Un(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dg;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=r.getRenderTarget(),v=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(kr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==nr&&this.type===nr,H=p===nr&&this.type!==nr;for(let W=0,V=E.length;W<V;W++){const G=E[W],L=G.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const $=L.getFrameExtents();if(i.multiply($),s.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,L.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||F===!0||H===!0){const re=this.type!==nr?{minFilter:Fn,magFilter:Fn}:{};L.map!==null&&L.map.dispose(),L.map=new Rs(i.x,i.y,re),L.map.texture.name=G.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const D=L.getViewportCount();for(let re=0;re<D;re++){const Me=L.getViewport(re);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),N.viewport(o),L.updateMatrices(G,re),n=L.getFrustum(),x(T,R,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===nr&&S(L,R),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,P)};function S(E,T){const R=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rs(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,R,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,R,d,_,null)}function M(E,T,R,y){let v=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)v=P;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=v.uuid,F=T.uuid;let H=c[N];H===void 0&&(H={},c[N]=H);let W=H[F];W===void 0&&(W=v.clone(),H[F]=W,T.addEventListener("dispose",A)),v=W}if(v.visible=T.visible,v.wireframe=T.wireframe,y===nr?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=R}return v}function x(E,T,R,y,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===nr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const F=e.update(E),H=E.material;if(Array.isArray(H)){const W=F.groups;for(let V=0,G=W.length;V<G;V++){const L=W[V],$=H[L.materialIndex];if($&&$.visible){const D=M(E,$,y,v);E.onBeforeShadow(r,E,T,R,F,D,L),r.renderBufferDirect(R,null,F,D,E,L),E.onAfterShadow(r,E,T,R,F,D,L)}}}else if(H.visible){const W=M(E,H,y,v);E.onBeforeShadow(r,E,T,R,F,W,null),r.renderBufferDirect(R,null,F,W,E,null),E.onAfterShadow(r,E,T,R,F,W,null)}}const N=E.children;for(let F=0,H=N.length;F<H;F++)x(N[F],T,R,y,v)}function A(E){E.target.removeEventListener("dispose",A);for(const R in c){const y=c[R],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const HE={[sh]:oh,[ah]:uh,[lh]:hh,[Eo]:ch,[oh]:sh,[uh]:ah,[hh]:lh,[ch]:Eo};function GE(r,e){function t(){let U=!1;const he=new mt;let j=null;const Q=new mt(0,0,0,0);return{setMask:function(ce){j!==ce&&!U&&(r.colorMask(ce,ce,ce,ce),j=ce)},setLocked:function(ce){U=ce},setClear:function(ce,pe,Ge,ft,Nt){Nt===!0&&(ce*=ft,pe*=ft,Ge*=ft),he.set(ce,pe,Ge,ft),Q.equals(he)===!1&&(r.clearColor(ce,pe,Ge,ft),Q.copy(he))},reset:function(){U=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,he=!1,j=null,Q=null,ce=null;return{setReversed:function(pe){if(he!==pe){const Ge=e.get("EXT_clip_control");he?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const ft=ce;ce=null,this.setClear(ft)}he=pe},getReversed:function(){return he},setTest:function(pe){pe?ne(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(pe){j!==pe&&!U&&(r.depthMask(pe),j=pe)},setFunc:function(pe){if(he&&(pe=HE[pe]),Q!==pe){switch(pe){case sh:r.depthFunc(r.NEVER);break;case oh:r.depthFunc(r.ALWAYS);break;case ah:r.depthFunc(r.LESS);break;case Eo:r.depthFunc(r.LEQUAL);break;case lh:r.depthFunc(r.EQUAL);break;case ch:r.depthFunc(r.GEQUAL);break;case uh:r.depthFunc(r.GREATER);break;case hh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=pe}},setLocked:function(pe){U=pe},setClear:function(pe){ce!==pe&&(he&&(pe=1-pe),r.clearDepth(pe),ce=pe)},reset:function(){U=!1,j=null,Q=null,ce=null,he=!1}}}function i(){let U=!1,he=null,j=null,Q=null,ce=null,pe=null,Ge=null,ft=null,Nt=null;return{setTest:function(ve){U||(ve?ne(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(ve){he!==ve&&!U&&(r.stencilMask(ve),he=ve)},setFunc:function(ve,Ce,Ze){(j!==ve||Q!==Ce||ce!==Ze)&&(r.stencilFunc(ve,Ce,Ze),j=ve,Q=Ce,ce=Ze)},setOp:function(ve,Ce,Ze){(pe!==ve||Ge!==Ce||ft!==Ze)&&(r.stencilOp(ve,Ce,Ze),pe=ve,Ge=Ce,ft=Ze)},setLocked:function(ve){U=ve},setClear:function(ve){Nt!==ve&&(r.clearStencil(ve),Nt=ve)},reset:function(){U=!1,he=null,j=null,Q=null,ce=null,pe=null,Ge=null,ft=null,Nt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,M=null,x=null,A=null,E=null,T=new Ye(0,0,0),R=0,y=!1,v=null,P=null,N=null,F=null,H=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const L=r.getParameter(r.VERSION);L.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(L)[1]),V=G>=1):L.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),V=G>=2);let $=null,D={};const re=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Ue=new mt().fromArray(re),K=new mt().fromArray(Me);function Z(U,he,j,Q){const ce=new Uint8Array(4),pe=r.createTexture();r.bindTexture(U,pe),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<j;Ge++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(he+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return pe}const oe={};oe[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(r.DEPTH_TEST),o.setFunc(Eo),Be(!1),z(jd),ne(r.CULL_FACE),I(kr);function ne(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function fe(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function ue(U,he){return h[U]!==he?(r.bindFramebuffer(U,he),h[U]=he,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function Ie(U,he){let j=d,Q=!1;if(U){j=f.get(he),j===void 0&&(j=[],f.set(he,j));const ce=U.textures;if(j.length!==ce.length||j[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ge=ce.length;pe<Ge;pe++)j[pe]=r.COLOR_ATTACHMENT0+pe;j.length=ce.length,Q=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,Q=!0);Q&&r.drawBuffers(j)}function Ve(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Pe={[fs]:r.FUNC_ADD,[ev]:r.FUNC_SUBTRACT,[tv]:r.FUNC_REVERSE_SUBTRACT};Pe[nv]=r.MIN,Pe[iv]=r.MAX;const Ae={[rv]:r.ZERO,[sv]:r.ONE,[ov]:r.SRC_COLOR,[ih]:r.SRC_ALPHA,[fv]:r.SRC_ALPHA_SATURATE,[uv]:r.DST_COLOR,[lv]:r.DST_ALPHA,[av]:r.ONE_MINUS_SRC_COLOR,[rh]:r.ONE_MINUS_SRC_ALPHA,[hv]:r.ONE_MINUS_DST_COLOR,[cv]:r.ONE_MINUS_DST_ALPHA,[dv]:r.CONSTANT_COLOR,[pv]:r.ONE_MINUS_CONSTANT_COLOR,[mv]:r.CONSTANT_ALPHA,[gv]:r.ONE_MINUS_CONSTANT_ALPHA};function I(U,he,j,Q,ce,pe,Ge,ft,Nt,ve){if(U===kr){_===!0&&(fe(r.BLEND),_=!1);return}if(_===!1&&(ne(r.BLEND),_=!0),U!==Qx){if(U!==m||ve!==y){if((p!==fs||x!==fs)&&(r.blendEquation(r.FUNC_ADD),p=fs,x=fs),ve)switch(U){case po:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $d:r.blendFunc(r.ONE,r.ONE);break;case Zd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $d:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,M=null,A=null,E=null,T.set(0,0,0),R=0,m=U,y=ve}return}ce=ce||he,pe=pe||j,Ge=Ge||Q,(he!==p||ce!==x)&&(r.blendEquationSeparate(Pe[he],Pe[ce]),p=he,x=ce),(j!==S||Q!==M||pe!==A||Ge!==E)&&(r.blendFuncSeparate(Ae[j],Ae[Q],Ae[pe],Ae[Ge]),S=j,M=Q,A=pe,E=Ge),(ft.equals(T)===!1||Nt!==R)&&(r.blendColor(ft.r,ft.g,ft.b,Nt),T.copy(ft),R=Nt),m=U,y=!1}function pt(U,he){U.side===Oi?fe(r.CULL_FACE):ne(r.CULL_FACE);let j=U.side===zn;he&&(j=!j),Be(j),U.blending===po&&U.transparent===!1?I(kr):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),it(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function z(U){U!==$x?(ne(r.CULL_FACE),U!==P&&(U===jd?r.cullFace(r.BACK):U===Zx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),P=U}function Se(U){U!==N&&(V&&r.lineWidth(U),N=U)}function it(U,he,j){U?(ne(r.POLYGON_OFFSET_FILL),(F!==he||H!==j)&&(r.polygonOffset(he,j),F=he,H=j)):fe(r.POLYGON_OFFSET_FILL)}function we(U){U?ne(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+W-1),$!==U&&(r.activeTexture(U),$=U)}function b(U,he,j){j===void 0&&($===null?j=r.TEXTURE0+W-1:j=$);let Q=D[j];Q===void 0&&(Q={type:void 0,texture:void 0},D[j]=Q),(Q.type!==U||Q.texture!==he)&&($!==j&&(r.activeTexture(j),$=j),r.bindTexture(U,he||oe[U]),Q.type=U,Q.texture=he)}function q(){const U=D[$];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(U){Ue.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ue.copy(U))}function ye(U){K.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function $e(U,he){let j=c.get(he);j===void 0&&(j=new WeakMap,c.set(he,j));let Q=j.get(U);Q===void 0&&(Q=r.getUniformBlockIndex(he,U.name),j.set(U,Q))}function He(U,he){const Q=c.get(he).get(U);l.get(he)!==Q&&(r.uniformBlockBinding(he,Q,U.__bindingPointIndex),l.set(he,Q))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},$=null,D={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,M=null,x=null,A=null,E=null,T=new Ye(0,0,0),R=0,y=!1,v=null,P=null,N=null,F=null,H=null,Ue.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:fe,bindFramebuffer:ue,drawBuffers:Ie,useProgram:Ve,setBlending:I,setMaterial:pt,setFlipSided:Be,setCullFace:z,setLineWidth:Se,setPolygonOffset:it,setScissorTest:we,activeTexture:C,bindTexture:b,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:ee,texImage2D:ae,texImage3D:Fe,updateUBOMapping:$e,uniformBlockBinding:He,texStorage2D:Ke,texStorage3D:se,texSubImage2D:J,texSubImage3D:de,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Oe,viewport:ye,reset:ht}}function WE(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return d?new OffscreenCanvas(C,b):qa("canvas")}function _(C,b,q){let te=1;const ee=we(C);if((ee.width>q||ee.height>q)&&(te=q/Math.max(ee.width,ee.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(te*ee.width),de=Math.floor(te*ee.height);h===void 0&&(h=g(J,de));const le=b?g(J,de):h;return le.width=J,le.height=de,le.getContext("2d").drawImage(C,0,0,J,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+de+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,b,q,te,ee=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=b;if(b===r.RED&&(q===r.FLOAT&&(J=r.R32F),q===r.HALF_FLOAT&&(J=r.R16F),q===r.UNSIGNED_BYTE&&(J=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(J=r.R8UI),q===r.UNSIGNED_SHORT&&(J=r.R16UI),q===r.UNSIGNED_INT&&(J=r.R32UI),q===r.BYTE&&(J=r.R8I),q===r.SHORT&&(J=r.R16I),q===r.INT&&(J=r.R32I)),b===r.RG&&(q===r.FLOAT&&(J=r.RG32F),q===r.HALF_FLOAT&&(J=r.RG16F),q===r.UNSIGNED_BYTE&&(J=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(J=r.RG8UI),q===r.UNSIGNED_SHORT&&(J=r.RG16UI),q===r.UNSIGNED_INT&&(J=r.RG32UI),q===r.BYTE&&(J=r.RG8I),q===r.SHORT&&(J=r.RG16I),q===r.INT&&(J=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(J=r.RGB8UI),q===r.UNSIGNED_SHORT&&(J=r.RGB16UI),q===r.UNSIGNED_INT&&(J=r.RGB32UI),q===r.BYTE&&(J=r.RGB8I),q===r.SHORT&&(J=r.RGB16I),q===r.INT&&(J=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),q===r.UNSIGNED_INT&&(J=r.RGBA32UI),q===r.BYTE&&(J=r.RGBA8I),q===r.SHORT&&(J=r.RGBA16I),q===r.INT&&(J=r.RGBA32I)),b===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),b===r.RGBA){const de=ee?Mc:ct.getTransfer(te);q===r.FLOAT&&(J=r.RGBA32F),q===r.HALF_FLOAT&&(J=r.RGBA16F),q===r.UNSIGNED_BYTE&&(J=de===Mt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(C,b){let q;return C?b===null||b===ws||b===Co?q=r.DEPTH24_STENCIL8:b===Ri?q=r.DEPTH32F_STENCIL8:b===Ga&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ws||b===Co?q=r.DEPTH_COMPONENT24:b===Ri?q=r.DEPTH_COMPONENT32F:b===Ga&&(q=r.DEPTH_COMPONENT16),q}function A(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){const b=C.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&u.delete(b)}function T(C){const b=C.target;b.removeEventListener("dispose",T),v(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const q=C.source,te=f.get(q);if(te){const ee=te[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(C),Object.keys(te).length===0&&f.delete(q)}n.remove(C)}function y(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const q=C.source,te=f.get(q);delete te[b.__cacheKey],o.memory.textures--}function v(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ee=0;ee<b.__webglFramebuffer[te].length;ee++)r.deleteFramebuffer(b.__webglFramebuffer[te][ee]);else r.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)r.deleteFramebuffer(b.__webglFramebuffer[te]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=C.textures;for(let te=0,ee=q.length;te<ee;te++){const J=n.get(q[te]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(q[te])}n.remove(C)}let P=0;function N(){P=0}function F(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function H(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function W(C,b){const q=n.get(C);if(C.isVideoTexture&&Se(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,C,b);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function V(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){K(q,C,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function G(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){K(q,C,b);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function L(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Z(q,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const $={[Ro]:r.REPEAT,[Pr]:r.CLAMP_TO_EDGE,[yc]:r.MIRRORED_REPEAT},D={[Fn]:r.NEAREST,[Ng]:r.NEAREST_MIPMAP_NEAREST,[pa]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[ic]:r.LINEAR_MIPMAP_NEAREST,[cr]:r.LINEAR_MIPMAP_LINEAR},re={[Lv]:r.NEVER,[Bv]:r.ALWAYS,[Iv]:r.LESS,[qg]:r.LEQUAL,[Nv]:r.EQUAL,[Ov]:r.GEQUAL,[Uv]:r.GREATER,[Fv]:r.NOTEQUAL};function Me(C,b){if(b.type===Ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===ic||b.magFilter===pa||b.magFilter===cr||b.minFilter===Nn||b.minFilter===ic||b.minFilter===pa||b.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,$[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,$[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,$[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,D[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fn||b.minFilter!==pa&&b.minFilter!==cr||b.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ue(C,b){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));const te=b.source;let ee=f.get(te);ee===void 0&&(ee={},f.set(te,ee));const J=H(b);if(J!==C.__cacheKey){ee[J]===void 0&&(ee[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ee[J].usedTimes++;const de=ee[C.__cacheKey];de!==void 0&&(ee[C.__cacheKey].usedTimes--,de.usedTimes===0&&y(b)),C.__cacheKey=J,C.__webglTexture=ee[J].texture}return q}function K(C,b,q){let te=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=r.TEXTURE_3D);const ee=Ue(C,b),J=b.source;t.bindTexture(te,C.__webglTexture,r.TEXTURE0+q);const de=n.get(J);if(J.version!==de.__version||ee===!0){t.activeTexture(r.TEXTURE0+q);const le=ct.getPrimaries(ct.workingColorSpace),me=b.colorSpace===Rr?null:ct.getPrimaries(b.colorSpace),Ke=b.colorSpace===Rr||le===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let se=_(b.image,!1,i.maxTextureSize);se=it(b,se);const ae=s.convert(b.format,b.colorSpace),Fe=s.convert(b.type);let Oe=M(b.internalFormat,ae,Fe,b.colorSpace,b.isVideoTexture);Me(te,b);let ye;const $e=b.mipmaps,He=b.isVideoTexture!==!0,ht=de.__version===void 0||ee===!0,U=J.dataReady,he=A(b,se);if(b.isDepthTexture)Oe=x(b.format===Po,b.type),ht&&(He?t.texStorage2D(r.TEXTURE_2D,1,Oe,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Oe,se.width,se.height,0,ae,Fe,null));else if(b.isDataTexture)if($e.length>0){He&&ht&&t.texStorage2D(r.TEXTURE_2D,he,Oe,$e[0].width,$e[0].height);for(let j=0,Q=$e.length;j<Q;j++)ye=$e[j],He?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ae,Fe,ye.data):t.texImage2D(r.TEXTURE_2D,j,Oe,ye.width,ye.height,0,ae,Fe,ye.data);b.generateMipmaps=!1}else He?(ht&&t.texStorage2D(r.TEXTURE_2D,he,Oe,se.width,se.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ae,Fe,se.data)):t.texImage2D(r.TEXTURE_2D,0,Oe,se.width,se.height,0,ae,Fe,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){He&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Oe,$e[0].width,$e[0].height,se.depth);for(let j=0,Q=$e.length;j<Q;j++)if(ye=$e[j],b.format!==ti)if(ae!==null)if(He){if(U)if(b.layerUpdates.size>0){const ce=Wp(ye.width,ye.height,b.format,b.type);for(const pe of b.layerUpdates){const Ge=ye.data.subarray(pe*ce/ye.data.BYTES_PER_ELEMENT,(pe+1)*ce/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,pe,ye.width,ye.height,1,ae,Ge)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,se.depth,ae,ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Oe,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,se.depth,ae,Fe,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Oe,ye.width,ye.height,se.depth,0,ae,Fe,ye.data)}else{He&&ht&&t.texStorage2D(r.TEXTURE_2D,he,Oe,$e[0].width,$e[0].height);for(let j=0,Q=$e.length;j<Q;j++)ye=$e[j],b.format!==ti?ae!==null?He?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ae,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ae,Fe,ye.data):t.texImage2D(r.TEXTURE_2D,j,Oe,ye.width,ye.height,0,ae,Fe,ye.data)}else if(b.isDataArrayTexture)if(He){if(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Oe,se.width,se.height,se.depth),U)if(b.layerUpdates.size>0){const j=Wp(se.width,se.height,b.format,b.type);for(const Q of b.layerUpdates){const ce=se.data.subarray(Q*j/se.data.BYTES_PER_ELEMENT,(Q+1)*j/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ae,Fe,ce)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ae,Fe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,se.width,se.height,se.depth,0,ae,Fe,se.data);else if(b.isData3DTexture)He?(ht&&t.texStorage3D(r.TEXTURE_3D,he,Oe,se.width,se.height,se.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ae,Fe,se.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,se.width,se.height,se.depth,0,ae,Fe,se.data);else if(b.isFramebufferTexture){if(ht)if(He)t.texStorage2D(r.TEXTURE_2D,he,Oe,se.width,se.height);else{let j=se.width,Q=se.height;for(let ce=0;ce<he;ce++)t.texImage2D(r.TEXTURE_2D,ce,Oe,j,Q,0,ae,Fe,null),j>>=1,Q>>=1}}else if($e.length>0){if(He&&ht){const j=we($e[0]);t.texStorage2D(r.TEXTURE_2D,he,Oe,j.width,j.height)}for(let j=0,Q=$e.length;j<Q;j++)ye=$e[j],He?U&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ae,Fe,ye):t.texImage2D(r.TEXTURE_2D,j,Oe,ae,Fe,ye);b.generateMipmaps=!1}else if(He){if(ht){const j=we(se);t.texStorage2D(r.TEXTURE_2D,he,Oe,j.width,j.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Fe,se)}else t.texImage2D(r.TEXTURE_2D,0,Oe,ae,Fe,se);m(b)&&p(te),de.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Z(C,b,q){if(b.image.length!==6)return;const te=Ue(C,b),ee=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+q);const J=n.get(ee);if(ee.version!==J.__version||te===!0){t.activeTexture(r.TEXTURE0+q);const de=ct.getPrimaries(ct.workingColorSpace),le=b.colorSpace===Rr?null:ct.getPrimaries(b.colorSpace),me=b.colorSpace===Rr||de===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!Ke&&!se?ae[Q]=_(b.image[Q],!0,i.maxCubemapSize):ae[Q]=se?b.image[Q].image:b.image[Q],ae[Q]=it(b,ae[Q]);const Fe=ae[0],Oe=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),$e=M(b.internalFormat,Oe,ye,b.colorSpace),He=b.isVideoTexture!==!0,ht=J.__version===void 0||te===!0,U=ee.dataReady;let he=A(b,Fe);Me(r.TEXTURE_CUBE_MAP,b);let j;if(Ke){He&&ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,$e,Fe.width,Fe.height);for(let Q=0;Q<6;Q++){j=ae[Q].mipmaps;for(let ce=0;ce<j.length;ce++){const pe=j[ce];b.format!==ti?Oe!==null?He?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,pe.width,pe.height,Oe,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,$e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,pe.width,pe.height,Oe,ye,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,$e,pe.width,pe.height,0,Oe,ye,pe.data)}}}else{if(j=b.mipmaps,He&&ht){j.length>0&&he++;const Q=we(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,Oe,ye,ae[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,ae[Q].width,ae[Q].height,0,Oe,ye,ae[Q].data);for(let ce=0;ce<j.length;ce++){const Ge=j[ce].image[Q].image;He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Ge.width,Ge.height,Oe,ye,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,$e,Ge.width,Ge.height,0,Oe,ye,Ge.data)}}else{He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,ye,ae[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Oe,ye,ae[Q]);for(let ce=0;ce<j.length;ce++){const pe=j[ce];He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Oe,ye,pe.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,$e,Oe,ye,pe.image[Q])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),J.__version=ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function oe(C,b,q,te,ee,J){const de=s.convert(q.format,q.colorSpace),le=s.convert(q.type),me=M(q.internalFormat,de,le,q.colorSpace),Ke=n.get(b),se=n.get(q);if(se.__renderTarget=b,!Ke.__hasExternalTextures){const ae=Math.max(1,b.width>>J),Fe=Math.max(1,b.height>>J);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,me,ae,Fe,b.depth,0,de,le,null):t.texImage2D(ee,J,me,ae,Fe,0,de,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ee,se.__webglTexture,0,Be(b)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ee,se.__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(C,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const te=b.depthTexture,ee=te&&te.isDepthTexture?te.type:null,J=x(b.stencilBuffer,ee),de=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Be(b);z(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,J,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,J,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,J,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,C)}else{const te=b.textures;for(let ee=0;ee<te.length;ee++){const J=te[ee],de=s.convert(J.format,J.colorSpace),le=s.convert(J.type),me=M(J.internalFormat,de,le,J.colorSpace),Ke=Be(b);q&&z(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,me,b.width,b.height):z(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,me,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,me,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(b.depthTexture);te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const ee=te.__webglTexture,J=Be(b);if(b.depthTexture.format===mo)z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(b.depthTexture.format===Po)z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ue(C){const b=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",ee)};te.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=te}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");fe(b.__webglFramebuffer,C)}else if(q){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=r.createRenderbuffer(),ne(b.__webglDepthbuffer[te],C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ne(b.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,ee)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(C,b,q){const te=n.get(C);b!==void 0&&oe(te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&ue(C)}function Ve(C){const b=C.texture,q=n.get(C),te=n.get(b);C.addEventListener("dispose",T);const ee=C.textures,J=C.isWebGLCubeRenderTarget===!0,de=ee.length>1;if(de||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=b.version,o.memory.textures++),J){q.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[le]=[];for(let me=0;me<b.mipmaps.length;me++)q.__webglFramebuffer[le][me]=r.createFramebuffer()}else q.__webglFramebuffer[le]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)q.__webglFramebuffer[le]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(de)for(let le=0,me=ee.length;le<me;le++){const Ke=n.get(ee[le]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&z(C)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const me=ee[le];q.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[le]);const Ke=s.convert(me.format,me.colorSpace),se=s.convert(me.type),ae=M(me.internalFormat,Ke,se,me.colorSpace,C.isXRRenderTarget===!0),Fe=Be(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,q.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ne(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Me(r.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)oe(q.__webglFramebuffer[le][me],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else oe(q.__webglFramebuffer[le],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let le=0,me=ee.length;le<me;le++){const Ke=ee[le],se=n.get(Ke);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Me(r.TEXTURE_2D,Ke),oe(q.__webglFramebuffer,C,Ke,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(Ke)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),Me(le,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)oe(q.__webglFramebuffer[me],C,b,r.COLOR_ATTACHMENT0,le,me);else oe(q.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,le,0);m(b)&&p(le),t.unbindTexture()}C.depthBuffer&&ue(C)}function Pe(C){const b=C.textures;for(let q=0,te=b.length;q<te;q++){const ee=b[q];if(m(ee)){const J=S(C),de=n.get(ee).__webglTexture;t.bindTexture(J,de),p(J),t.unbindTexture()}}}const Ae=[],I=[];function pt(C){if(C.samples>0){if(z(C)===!1){const b=C.textures,q=C.width,te=C.height;let ee=r.COLOR_BUFFER_BIT;const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(C),le=b.length>1;if(le)for(let me=0;me<b.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<b.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ke=n.get(b[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,q,te,0,0,q,te,ee,r.NEAREST),l===!0&&(Ae.length=0,I.length=0,Ae.push(r.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ae.push(J),I.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<b.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ke=n.get(b[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Be(C){return Math.min(i.maxSamples,C.samples)}function z(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(C){const b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function it(C,b){const q=C.colorSpace,te=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==yn&&q!==Rr&&(ct.getTransfer(q)===Mt?(te!==ti||ee!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=G,this.setTextureCube=L,this.rebindTextures=Ie,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=z}function XE(r,e){function t(n,i=Rr){let s;const o=ct.getTransfer(i);if(n===gr)return r.UNSIGNED_BYTE;if(n===zf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Vf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Og)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ug)return r.BYTE;if(n===Fg)return r.SHORT;if(n===Ga)return r.UNSIGNED_SHORT;if(n===kf)return r.INT;if(n===ws)return r.UNSIGNED_INT;if(n===Ri)return r.FLOAT;if(n===ll)return r.HALF_FLOAT;if(n===Bg)return r.ALPHA;if(n===kg)return r.RGB;if(n===ti)return r.RGBA;if(n===zg)return r.LUMINANCE;if(n===Vg)return r.LUMINANCE_ALPHA;if(n===mo)return r.DEPTH_COMPONENT;if(n===Po)return r.DEPTH_STENCIL;if(n===Hf)return r.RED;if(n===Gf)return r.RED_INTEGER;if(n===Hg)return r.RG;if(n===Wf)return r.RG_INTEGER;if(n===Xf)return r.RGBA_INTEGER;if(n===rc||n===sc||n===oc||n===ac)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ph||n===mh||n===gh||n===_h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xh||n===vh||n===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xh||n===vh)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mh||n===Sh||n===Th||n===bh||n===Eh||n===Ah||n===wh||n===Rh||n===Ch||n===Ph||n===Dh||n===Lh||n===Ih||n===Nh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ah)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ch)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ph)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ih)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===Uh||n===Fh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lc)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gg||n===Oh||n===Bh||n===kh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const qE={type:"move"};class Cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Kt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:YE,fragmentShader:KE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new Wo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $E extends Go{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new jE,m=t.getContextAttributes();let p=null,S=null;const M=[],x=[],A=new qe;let E=null;const T=new Pn;T.viewport=new mt;const R=new Pn;R.viewport=new mt;const y=[T,R],v=new oM;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Z=M[K];return Z===void 0&&(Z=new Cu,M[K]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(K){let Z=M[K];return Z===void 0&&(Z=new Cu,M[K]=Z),Z.getGripSpace()},this.getHand=function(K){let Z=M[K];return Z===void 0&&(Z=new Cu,M[K]=Z),Z.getHandSpace()};function F(K){const Z=x.indexOf(K.inputSource);if(Z===-1)return;const oe=M[Z];oe!==void 0&&(oe.update(K.inputSource,K.frame,c||o),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",W);for(let K=0;K<M.length;K++){const Z=x[K];Z!==null&&(x[K]=null,M[K].disconnect(Z))}P=null,N=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,S=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let oe=null,ne=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Po:mo,ne=m.stencil?Co:ws);const ue={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ue),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Rs(f.textureWidth,f.textureHeight,{format:ti,type:gr,depthTexture:new o_(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Rs(d.framebufferWidth,d.framebufferHeight,{format:ti,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(K){for(let Z=0;Z<K.removed.length;Z++){const oe=K.removed[Z],ne=x.indexOf(oe);ne>=0&&(x[ne]=null,M[ne].disconnect(oe))}for(let Z=0;Z<K.added.length;Z++){const oe=K.added[Z];let ne=x.indexOf(oe);if(ne===-1){for(let ue=0;ue<M.length;ue++)if(ue>=x.length){x.push(oe),ne=ue;break}else if(x[ue]===null){x[ue]=oe,ne=ue;break}if(ne===-1)break}const fe=M[ne];fe&&fe.connect(oe)}}const V=new k,G=new k;function L(K,Z,oe){V.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(oe.matrixWorld);const ne=V.distanceTo(G),fe=Z.projectionMatrix.elements,ue=oe.projectionMatrix.elements,Ie=fe[14]/(fe[10]-1),Ve=fe[14]/(fe[10]+1),Pe=(fe[9]+1)/fe[5],Ae=(fe[9]-1)/fe[5],I=(fe[8]-1)/fe[0],pt=(ue[8]+1)/ue[0],Be=Ie*I,z=Ie*pt,Se=ne/(-I+pt),it=Se*-I;if(Z.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(it),K.translateZ(Se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),fe[10]===-1)K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const we=Ie+Se,C=Ve+Se,b=Be-it,q=z+(ne-it),te=Pe*Ve/C*we,ee=Ae*Ve/C*we;K.projectionMatrix.makePerspective(b,q,te,ee,we,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,Z){Z===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Z.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Z=K.near,oe=K.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),v.near=R.near=T.near=Z,v.far=R.far=T.far=oe,(P!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,N=v.far),T.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,v.layers.mask=T.layers.mask|R.layers.mask;const ne=K.parent,fe=v.cameras;$(v,ne);for(let ue=0;ue<fe.length;ue++)$(fe[ue],ne);fe.length===2?L(v,T,R):v.projectionMatrix.copy(T.projectionMatrix),D(K,v,ne)};function D(K,Z,oe){oe===null?K.matrix.copy(Z.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(Z.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Do*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let re=null;function Me(K,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ne=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let ue=0;ue<oe.length;ue++){const Ie=oe[ue];let Ve=null;if(d!==null)Ve=d.getViewport(Ie);else{const Ae=h.getViewSubImage(f,Ie);Ve=Ae.viewport,ue===0&&(e.setRenderTargetTextures(S,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(S))}let Pe=y[ue];Pe===void 0&&(Pe=new Pn,Pe.layers.enable(ue),Pe.viewport=new mt,y[ue]=Pe),Pe.matrix.fromArray(Ie.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ie.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ue===0&&(v.matrix.copy(Pe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ne===!0&&v.cameras.push(Pe)}const fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const ue=h.getDepthInformation(oe[0]);ue&&ue.isValid&&ue.texture&&_.init(e,ue,i.renderState)}}for(let oe=0;oe<M.length;oe++){const ne=x[oe],fe=M[oe];ne!==null&&fe!==void 0&&fe.update(ne,Z,c||o)}re&&re(K,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ue=new u_;Ue.setAnimationLoop(Me),this.setAnimationLoop=function(K){re=K},this.dispose=function(){}}}const is=new Xi,ZE=new je;function JE(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),M=S.envMap,x=S.envMapRotation;M&&(m.envMap.value=M,is.copy(x),is.x*=-1,is.y*=-1,is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(is)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function QE(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function c(S,M){let x=i[S.id];x===void 0&&(g(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(S,A);const E=e.render.frame;s[S.id]!==E&&(f(S),s[S.id]=E)}function u(S){const M=h();S.__bindingPointIndex=M;const x=r.createBuffer(),A=S.__size,E=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=i[S.id],x=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,T=x.length;E<T;E++){const R=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,v=R.length;y<v;y++){const P=R[y];if(d(P,E,y,A)===!0){const N=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let W=0;W<F.length;W++){const V=F[W],G=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,N+H,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,M,x,A){const E=S.value,T=M+"_"+x;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const R=A[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return A[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(S){const M=S.uniforms;let x=0;const A=16;for(let T=0,R=M.length;T<R;T++){const y=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,P=y.length;v<P;v++){const N=y[v],F=Array.isArray(N.value)?N.value:[N.value];for(let H=0,W=F.length;H<W;H++){const V=F[H],G=_(V),L=x%A,$=L%G.boundary,D=L+$;x+=$,D!==0&&A-D<G.storage&&(x+=A-D),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=G.storage}}}const E=x%A;return E>0&&(x+=A-E),S.__size=x,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class m_{constructor(e={}){const{canvas:t=ny(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=zr,this.toneMappingExposure=1;const x=this;let A=!1,E=0,T=0,R=null,y=-1,v=null;const P=new mt,N=new mt;let F=null;const H=new Ye(0);let W=0,V=t.width,G=t.height,L=1,$=null,D=null;const re=new mt(0,0,V,G),Me=new mt(0,0,V,G);let Ue=!1;const K=new Zf;let Z=!1,oe=!1;this.transmissionResolutionScale=1;const ne=new je,fe=new je,ue=new k,Ie=new mt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Ae(){return R===null?L:1}let I=n;function pt(w,B){return t.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bf}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",pe,!1),I===null){const B="webgl2";if(I=pt(B,w),I===null)throw pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,z,Se,it,we,C,b,q,te,ee,J,de,le,me,Ke,se,ae,Fe,Oe,ye,$e,He,ht,U;function he(){Be=new cb(I),Be.init(),He=new XE(I,Be),z=new ib(I,Be,e,He),Se=new GE(I,Be),z.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),it=new fb(I),we=new PE,C=new WE(I,Be,Se,we,z,He,it),b=new sb(x),q=new lb(x),te=new vM(I),ht=new tb(I,te),ee=new ub(I,te,it,ht),J=new pb(I,ee,te,it),Oe=new db(I,z,C),se=new rb(we),de=new CE(x,b,q,Be,z,ht,se),le=new JE(x,we),me=new LE,Ke=new BE(Be),Fe=new eb(x,b,q,Se,J,d,l),ae=new VE(x,J,z),U=new QE(I,it,z,Se),ye=new nb(I,Be,it),$e=new hb(I,Be,it),it.programs=de.programs,x.capabilities=z,x.extensions=Be,x.properties=we,x.renderLists=me,x.shadowMap=ae,x.state=Se,x.info=it}he();const j=new $E(x,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(V,G,!1))},this.getSize=function(w){return w.set(V,G)},this.setSize=function(w,B,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,G=B,t.width=Math.floor(w*L),t.height=Math.floor(B*L),Y===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(V*L,G*L).floor()},this.setDrawingBufferSize=function(w,B,Y){V=w,G=B,L=Y,t.width=Math.floor(w*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,B,Y,X){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,B,Y,X),Se.viewport(P.copy(re).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,B,Y,X){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,B,Y,X),Se.scissor(N.copy(Me).multiplyScalar(L).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){Se.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){D=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(w=!0,B=!0,Y=!0){let X=0;if(w){let O=!1;if(R!==null){const ie=R.texture.format;O=ie===Xf||ie===Wf||ie===Gf}if(O){const ie=R.texture.type,_e=ie===gr||ie===ws||ie===Ga||ie===Co||ie===zf||ie===Vf,be=Fe.getClearColor(),Te=Fe.getClearAlpha(),Ne=be.r,ze=be.g,Le=be.b;_e?(g[0]=Ne,g[1]=ze,g[2]=Le,g[3]=Te,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ne,_[1]=ze,_[2]=Le,_[3]=Te,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}B&&(X|=I.DEPTH_BUFFER_BIT),Y&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Fe.dispose(),me.dispose(),Ke.dispose(),we.dispose(),b.dispose(),q.dispose(),J.dispose(),ht.dispose(),U.dispose(),de.dispose(),j.dispose(),j.removeEventListener("sessionstart",ge),j.removeEventListener("sessionend",Xe),De.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=it.autoReset,B=ae.enabled,Y=ae.autoUpdate,X=ae.needsUpdate,O=ae.type;he(),it.autoReset=w,ae.enabled=B,ae.autoUpdate=Y,ae.needsUpdate=X,ae.type=O}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){const B=w.target;B.removeEventListener("dispose",Ge),ft(B)}function ft(w){Nt(w),we.remove(w)}function Nt(w){const B=we.get(w).programs;B!==void 0&&(B.forEach(function(Y){de.releaseProgram(Y)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Y,X,O,ie){B===null&&(B=Ve);const _e=O.isMesh&&O.matrixWorld.determinant()<0,be=qn(w,B,Y,X,O);Se.setMaterial(X,_e);let Te=Y.index,Ne=1;if(X.wireframe===!0){if(Te=ee.getWireframeAttribute(Y),Te===void 0)return;Ne=2}const ze=Y.drawRange,Le=Y.attributes.position;let et=ze.start*Ne,_t=(ze.start+ze.count)*Ne;ie!==null&&(et=Math.max(et,ie.start*Ne),_t=Math.min(_t,(ie.start+ie.count)*Ne)),Te!==null?(et=Math.max(et,0),_t=Math.min(_t,Te.count)):Le!=null&&(et=Math.max(et,0),_t=Math.min(_t,Le.count));const Ht=_t-et;if(Ht<0||Ht===1/0)return;ht.setup(O,X,be,Y,Te);let Ut,dt=ye;if(Te!==null&&(Ut=te.get(Te),dt=$e,dt.setIndex(Ut)),O.isMesh)X.wireframe===!0?(Se.setLineWidth(X.wireframeLinewidth*Ae()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(O.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),Se.setLineWidth(ke*Ae()),O.isLineSegments?dt.setMode(I.LINES):O.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else O.isPoints?dt.setMode(I.POINTS):O.isSprite&&dt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)dt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))dt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ke=O._multiDrawStarts,cn=O._multiDrawCounts,xt=O._multiDrawCount,yi=Te?te.get(Te).bytesPerElement:1,Os=we.get(X).currentProgram.getUniforms();for(let Yn=0;Yn<xt;Yn++)Os.setValue(I,"_gl_DrawID",Yn),dt.render(ke[Yn]/yi,cn[Yn])}else if(O.isInstancedMesh)dt.renderInstances(et,Ht,O.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,cn=Math.min(Y.instanceCount,ke);dt.renderInstances(et,Ht,cn)}else dt.render(et,Ht)};function ve(w,B,Y){w.transparent===!0&&w.side===Oi&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,St(w,B,Y),w.side=mr,w.needsUpdate=!0,St(w,B,Y),w.side=Oi):St(w,B,Y)}this.compile=function(w,B,Y=null){Y===null&&(Y=w),p=Ke.get(Y),p.init(B),M.push(p),Y.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==Y&&w.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ie=O.material;if(ie)if(Array.isArray(ie))for(let _e=0;_e<ie.length;_e++){const be=ie[_e];ve(be,Y,O),X.add(be)}else ve(ie,Y,O),X.add(ie)}),M.pop(),p=null,X},this.compileAsync=function(w,B,Y=null){const X=this.compile(w,B,Y);return new Promise(O=>{function ie(){if(X.forEach(function(_e){we.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){O(w);return}setTimeout(ie,10)}Be.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ce=null;function Ze(w){Ce&&Ce(w)}function ge(){De.stop()}function Xe(){De.start()}const De=new u_;De.setAnimationLoop(Ze),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(w){Ce=w,j.setAnimationLoop(w),w===null?De.stop():De.start()},j.addEventListener("sessionstart",ge),j.addEventListener("sessionend",Xe),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,R),p=Ke.get(w,M.length),p.init(B),M.push(p),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(fe),oe=this.localClippingEnabled,Z=se.init(this.clippingPlanes,oe),m=me.get(w,S.length),m.init(),S.push(m),j.enabled===!0&&j.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&We(ie,B,-1/0,x.sortObjects)}We(w,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,D),Pe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Pe&&Fe.addToRenderList(m,w),this.info.render.frame++,Z===!0&&se.beginShadows();const Y=p.state.shadowsArray;ae.render(Y,w,B),Z===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),B.isArrayCamera){const ie=B.cameras;if(O.length>0)for(let _e=0,be=ie.length;_e<be;_e++){const Te=ie[_e];tt(X,O,w,Te)}Pe&&Fe.render(w);for(let _e=0,be=ie.length;_e<be;_e++){const Te=ie[_e];Bt(m,w,Te,Te.viewport)}}else O.length>0&&tt(X,O,w,B),Pe&&Fe.render(w),Bt(m,w,B);R!==null&&T===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,B),ht.resetDefaultState(),y=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],Z===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function We(w,B,Y,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){X&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const _e=J.update(w),be=w.material;be.visible&&m.push(w,_e,be,Y,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const _e=J.update(w),be=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ie.copy(_e.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(be)){const Te=_e.groups;for(let Ne=0,ze=Te.length;Ne<ze;Ne++){const Le=Te[Ne],et=be[Le.materialIndex];et&&et.visible&&m.push(w,_e,et,Y,Ie.z,Le)}}else be.visible&&m.push(w,_e,be,Y,Ie.z,null)}}const ie=w.children;for(let _e=0,be=ie.length;_e<be;_e++)We(ie[_e],B,Y,X)}function Bt(w,B,Y,X){const O=w.opaque,ie=w.transmissive,_e=w.transparent;p.setupLightsView(Y),Z===!0&&se.setGlobalState(x.clippingPlanes,Y),X&&Se.viewport(P.copy(X)),O.length>0&&Et(O,B,Y),ie.length>0&&Et(ie,B,Y),_e.length>0&&Et(_e,B,Y),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function tt(w,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Rs(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?ll:gr,minFilter:cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const ie=p.state.transmissionRenderTarget[X.id],_e=X.viewport||P;ie.setSize(_e.z*x.transmissionResolutionScale,_e.w*x.transmissionResolutionScale);const be=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(H),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Pe&&Fe.render(Y);const Te=x.toneMapping;x.toneMapping=zr;const Ne=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Z===!0&&se.setGlobalState(x.clippingPlanes,X),Et(w,Y,X),C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,et=B.length;Le<et;Le++){const _t=B[Le],Ht=_t.object,Ut=_t.geometry,dt=_t.material,ke=_t.group;if(dt.side===Oi&&Ht.layers.test(X.layers)){const cn=dt.side;dt.side=zn,dt.needsUpdate=!0,jt(Ht,Y,X,Ut,dt,ke),dt.side=cn,dt.needsUpdate=!0,ze=!0}}ze===!0&&(C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie))}x.setRenderTarget(be),x.setClearColor(H,W),Ne!==void 0&&(X.viewport=Ne),x.toneMapping=Te}function Et(w,B,Y){const X=B.isScene===!0?B.overrideMaterial:null;for(let O=0,ie=w.length;O<ie;O++){const _e=w[O],be=_e.object,Te=_e.geometry,Ne=X===null?_e.material:X,ze=_e.group;be.layers.test(Y.layers)&&jt(be,B,Y,Te,Ne,ze)}}function jt(w,B,Y,X,O,ie){w.onBeforeRender(x,B,Y,X,O,ie),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,B,Y,X,w,ie),O.transparent===!0&&O.side===Oi&&O.forceSinglePass===!1?(O.side=zn,O.needsUpdate=!0,x.renderBufferDirect(Y,B,X,O,w,ie),O.side=mr,O.needsUpdate=!0,x.renderBufferDirect(Y,B,X,O,w,ie),O.side=Oi):x.renderBufferDirect(Y,B,X,O,w,ie),w.onAfterRender(x,B,Y,X,O,ie)}function St(w,B,Y){B.isScene!==!0&&(B=Ve);const X=we.get(w),O=p.state.lights,ie=p.state.shadowsArray,_e=O.state.version,be=de.getParameters(w,O.state,ie,B,Y),Te=de.getProgramCacheKey(be);let Ne=X.programs;X.environment=w.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(w.isMeshStandardMaterial?q:b).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Ge),Ne=new Map,X.programs=Ne);let ze=Ne.get(Te);if(ze!==void 0){if(X.currentProgram===ze&&X.lightsStateVersion===_e)return gt(w,be),ze}else be.uniforms=de.getUniforms(w),w.onBeforeCompile(be,x),ze=de.acquireProgram(be,Te),Ne.set(Te,ze),X.uniforms=be.uniforms;const Le=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=se.uniform),gt(w,be),X.needsLights=Mn(w),X.lightsStateVersion=_e,X.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=ze,X.uniformsList=null,ze}function Tt(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=cc.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function gt(w,B){const Y=we.get(w);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function qn(w,B,Y,X,O){B.isScene!==!0&&(B=Ve),C.resetTextureUnits();const ie=B.fog,_e=X.isMeshStandardMaterial?B.environment:null,be=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yn,Te=(X.isMeshStandardMaterial?q:b).get(X.envMap||_e),Ne=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,_t=!!Y.morphAttributes.color;let Ht=zr;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ht=x.toneMapping);const Ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=Ut!==void 0?Ut.length:0,ke=we.get(X),cn=p.state.lights;if(Z===!0&&(oe===!0||w!==v)){const Sn=w===v&&X.id===y;se.setState(X,w,Sn)}let xt=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==cn.state.version||ke.outputColorSpace!==be||O.isBatchedMesh&&ke.batching===!1||!O.isBatchedMesh&&ke.batching===!0||O.isBatchedMesh&&ke.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ke.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ke.instancing===!1||!O.isInstancedMesh&&ke.instancing===!0||O.isSkinnedMesh&&ke.skinning===!1||!O.isSkinnedMesh&&ke.skinning===!0||O.isInstancedMesh&&ke.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ke.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ke.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ke.instancingMorph===!1&&O.morphTexture!==null||ke.envMap!==Te||X.fog===!0&&ke.fog!==ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==se.numPlanes||ke.numIntersection!==se.numIntersection)||ke.vertexAlphas!==Ne||ke.vertexTangents!==ze||ke.morphTargets!==Le||ke.morphNormals!==et||ke.morphColors!==_t||ke.toneMapping!==Ht||ke.morphTargetsCount!==dt)&&(xt=!0):(xt=!0,ke.__version=X.version);let yi=ke.currentProgram;xt===!0&&(yi=St(X,B,O));let Os=!1,Yn=!1,ea=!1;const Rt=yi.getUniforms(),ai=ke.uniforms;if(Se.useProgram(yi.program)&&(Os=!0,Yn=!0,ea=!0),X.id!==y&&(y=X.id,Yn=!0),Os||v!==w){Se.buffers.depth.getReversed()?(ne.copy(w.projectionMatrix),ry(ne),sy(ne),Rt.setValue(I,"projectionMatrix",ne)):Rt.setValue(I,"projectionMatrix",w.projectionMatrix),Rt.setValue(I,"viewMatrix",w.matrixWorldInverse);const On=Rt.map.cameraPosition;On!==void 0&&On.setValue(I,ue.setFromMatrixPosition(w.matrixWorld)),z.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Yn=!0,ea=!0)}if(O.isSkinnedMesh){Rt.setOptional(I,O,"bindMatrix"),Rt.setOptional(I,O,"bindMatrixInverse");const Sn=O.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Rt.setValue(I,"boneTexture",Sn.boneTexture,C))}O.isBatchedMesh&&(Rt.setOptional(I,O,"batchingTexture"),Rt.setValue(I,"batchingTexture",O._matricesTexture,C),Rt.setOptional(I,O,"batchingIdTexture"),Rt.setValue(I,"batchingIdTexture",O._indirectTexture,C),Rt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",O._colorsTexture,C));const li=Y.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&Oe.update(O,Y,yi),(Yn||ke.receiveShadow!==O.receiveShadow)&&(ke.receiveShadow=O.receiveShadow,Rt.setValue(I,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ai.envMap.value=Te,ai.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(ai.envMapIntensity.value=B.environmentIntensity),Yn&&(Rt.setValue(I,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&At(ai,ea),ie&&X.fog===!0&&le.refreshFogUniforms(ai,ie),le.refreshMaterialUniforms(ai,X,L,G,p.state.transmissionRenderTarget[w.id]),cc.upload(I,Tt(ke),ai,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cc.upload(I,Tt(ke),ai,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(I,"center",O.center),Rt.setValue(I,"modelViewMatrix",O.modelViewMatrix),Rt.setValue(I,"normalMatrix",O.normalMatrix),Rt.setValue(I,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Sn=X.uniformsGroups;for(let On=0,$c=Sn.length;On<$c;On++){const Zr=Sn[On];U.update(Zr,yi),U.bind(Zr,yi)}}return yi}function At(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Mn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,B,Y){we.get(w.texture).__webglTexture=B,we.get(w.depthTexture).__webglTexture=Y;const X=we.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const Y=we.get(w);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const oi=I.createFramebuffer();this.setRenderTarget=function(w,B=0,Y=0){R=w,E=B,T=Y;let X=!0,O=null,ie=!1,_e=!1;if(w){const Te=we.get(w);if(Te.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Te.__hasExternalTextures)C.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(Te.__boundDepthTexture!==Le){if(Le!==null&&we.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);const ze=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?O=ze[B][Y]:O=ze[B],ie=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?O=we.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[Y]:O=ze,P.copy(w.viewport),N.copy(w.scissor),F=w.scissorTest}else P.copy(re).multiplyScalar(L).floor(),N.copy(Me).multiplyScalar(L).floor(),F=Ue;if(Y!==0&&(O=oi),Se.bindFramebuffer(I.FRAMEBUFFER,O)&&X&&Se.drawBuffers(w,O),Se.viewport(P),Se.scissor(N),Se.setScissorTest(F),ie){const Te=we.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,Y)}else if(_e){const Te=we.get(w.texture),Ne=B;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,Y,Ne)}else if(w!==null&&Y!==0){const Te=we.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Te.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(w,B,Y,X,O,ie,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){Se.bindFramebuffer(I.FRAMEBUFFER,be);try{const Te=w.texture,Ne=Te.format,ze=Te.type;if(!z.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&Y>=0&&Y<=w.height-O&&I.readPixels(B,Y,X,O,He.convert(Ne),He.convert(ze),ie)}finally{const Te=R!==null?we.get(R).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,B,Y,X,O,ie,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){const Te=w.texture,Ne=Te.format,ze=Te.type;if(!z.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-X&&Y>=0&&Y<=w.height-O){Se.bindFramebuffer(I.FRAMEBUFFER,be);const Le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(B,Y,X,O,He.convert(Ne),He.convert(ze),0);const et=R!==null?we.get(R).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,et);const _t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await iy(I,_t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(Le),I.deleteSync(_t),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,Y=0){w.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-Y),O=Math.floor(w.image.width*X),ie=Math.floor(w.image.height*X),_e=B!==null?B.x:0,be=B!==null?B.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,_e,be,O,ie),Se.unbindTexture()};const $t=I.createFramebuffer(),Zt=I.createFramebuffer();this.copyTextureToTexture=function(w,B,Y=null,X=null,O=0,ie=null){w.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],B=arguments[2],ie=arguments[3]||0,Y=null),ie===null&&(O!==0?(io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let _e,be,Te,Ne,ze,Le,et,_t,Ht;const Ut=w.isCompressedTexture?w.mipmaps[ie]:w.image;if(Y!==null)_e=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,ze=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{const li=Math.pow(2,-O);_e=Math.floor(Ut.width*li),be=Math.floor(Ut.height*li),w.isDataArrayTexture?Te=Ut.depth:w.isData3DTexture?Te=Math.floor(Ut.depth*li):Te=1,Ne=0,ze=0,Le=0}X!==null?(et=X.x,_t=X.y,Ht=X.z):(et=0,_t=0,Ht=0);const dt=He.convert(B.format),ke=He.convert(B.type);let cn;B.isData3DTexture?(C.setTexture3D(B,0),cn=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),cn=I.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),cn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const xt=I.getParameter(I.UNPACK_ROW_LENGTH),yi=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Os=I.getParameter(I.UNPACK_SKIP_PIXELS),Yn=I.getParameter(I.UNPACK_SKIP_ROWS),ea=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Le);const Rt=w.isDataArrayTexture||w.isData3DTexture,ai=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const li=we.get(w),Sn=we.get(B),On=we.get(li.__renderTarget),$c=we.get(Sn.__renderTarget);Se.bindFramebuffer(I.READ_FRAMEBUFFER,On.__webglFramebuffer),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,$c.__webglFramebuffer);for(let Zr=0;Zr<Te;Zr++)Rt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(w).__webglTexture,O,Le+Zr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(B).__webglTexture,ie,Ht+Zr)),I.blitFramebuffer(Ne,ze,_e,be,et,_t,_e,be,I.DEPTH_BUFFER_BIT,I.NEAREST);Se.bindFramebuffer(I.READ_FRAMEBUFFER,null),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||we.has(w)){const li=we.get(w),Sn=we.get(B);Se.bindFramebuffer(I.READ_FRAMEBUFFER,$t),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zt);for(let On=0;On<Te;On++)Rt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,li.__webglTexture,O,Le+On):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,li.__webglTexture,O),ai?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,ie,Ht+On):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,ie),O!==0?I.blitFramebuffer(Ne,ze,_e,be,et,_t,_e,be,I.COLOR_BUFFER_BIT,I.NEAREST):ai?I.copyTexSubImage3D(cn,ie,et,_t,Ht+On,Ne,ze,_e,be):I.copyTexSubImage2D(cn,ie,et,_t,Ne,ze,_e,be);Se.bindFramebuffer(I.READ_FRAMEBUFFER,null),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ai?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(cn,ie,et,_t,Ht,_e,be,Te,dt,ke,Ut.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(cn,ie,et,_t,Ht,_e,be,Te,dt,Ut.data):I.texSubImage3D(cn,ie,et,_t,Ht,_e,be,Te,dt,ke,Ut):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,et,_t,_e,be,dt,ke,Ut.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,et,_t,Ut.width,Ut.height,dt,Ut.data):I.texSubImage2D(I.TEXTURE_2D,ie,et,_t,_e,be,dt,ke,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yi),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Os),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ea),ie===0&&B.generateMipmaps&&I.generateMipmap(cn),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,B,Y=null,X=null,O=0){return w.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,X=arguments[1]||null,w=arguments[2],B=arguments[3],O=arguments[4]||0),io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,Y,X,O)},this.initRenderTarget=function(w){we.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Se.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const e1=`attribute vec3 letter;
attribute vec3 shellPoint;
attribute vec3 dye;
attribute vec3 pigment;
attribute vec2 grain;
uniform float gather, flatten, elapsed, yaw, tilt, radius, wordWidth, pixelRatio, spacing;
uniform vec2 wordCenter, photoSize;
varying vec3 ink;
varying float opacity;
varying float softness;

void main() {
  float fromLeft = clamp(letter.x + .5, 0., 1.);
  float g = smoothstep(.16 * fromLeft, .82 + .17 * fromLeft, gather);
  float row = .5 - position.y;
  float f = smoothstep(.13 * row, .85 + .13 * row, flatten);
  float phase = grain.y * 6.283185;
  vec3 n = shellPoint;
  float wave = sin(3.6*n.x + 2.9*n.y + elapsed*.49) * cos(2.3*n.z - elapsed*.29);
  n *= 1. + (.006*wave + .0028*sin(phase + elapsed*.65)) * g * (1.-f);
  float angle = yaw + sin(g*3.14159) * (.37 + .16*n.y);
  float c = cos(angle), s = sin(angle);
  vec3 turned = vec3(c*n.x + s*n.z, n.y, -s*n.x + c*n.z);
  c = cos(tilt); s = sin(tilt);
  vec3 normal = vec3(turned.x, c*turned.y - s*turned.z, s*turned.y + c*turned.z);
  float nearSide = smoothstep(-.92, .88, normal.z);
  vec3 ball = normal * radius;
  vec3 word = vec3(wordCenter + letter.xy * wordWidth, 0.);
  float lift = sin(3.14159*g);
  vec3 p = mix(word, ball, g);
  p.y += radius * lift * (.13*normal.x + .15*sin(phase + 2.*letter.x));
  p.x += radius * lift * (.09*normal.y + .045*cos(phase));
  float bend = sin(f*3.14159);
  p = mix(p, vec3(position.xy*photoSize, 0.), f);
  p.x += radius * bend * (.19*normal.z + .09*sin(3.2*normal.y));
  p.y += radius * bend * (.14*normal.x + .055*sin(phase));
  p.z += radius * bend * .16*normal.z;

  float sidelight = .91 + .13*dot(normalize(normal), normalize(vec3(-.48,.65,.62)));
  vec3 rock = pigment * sidelight;
  ink = mix(mix(vec3(.18 + .20*grain.y), rock, g), dye, f);
  float body = spacing * (.60 + .85*grain.x) * (.88 + .19*nearSide);
  float letterDot = min(1.6, spacing) * (.67 + .35*grain.x);
  float diameter = mix(mix(letterDot, body, g), photoSize.x / max(1., radius*2.15/spacing)*1.27, f);
  gl_PointSize = max(.85, diameter*pixelRatio);
  opacity = mix(mix(.79, .53+.44*nearSide, g), .95, f);
  opacity *= 1. - smoothstep(.76, .995, flatten);
  softness = mix(.53,.75,nearSide);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.);
}\r
`,t1=`varying vec3 ink;
varying float opacity;
varying float softness;

void main() {
  vec2 p = abs(gl_PointCoord*2.-1.);
  float edge = mix(length(p), max(p.x,p.y), .40);
  float alpha = opacity * (1.-smoothstep(softness,1.,edge));
  if (alpha < .012) discard;
  gl_FragColor = vec4(ink, alpha);
}\r
`,qh=r=>Math.max(0,Math.min(1,r)),Cr=(r,e,t)=>r+(e-r)*t,Ra=r=>{const e=qh(r);return e*e*(3-2*e)},od=(r,e)=>Math.min(r*.32,e*.279);function g_(r,e){const t=r.getContext("2d",{willReadFrequently:!0});if(e.naturalWidth){const n=Math.max(r.width/e.naturalWidth,r.height/e.naturalHeight),i=e.naturalWidth*n,s=e.naturalHeight*n;t.drawImage(e,(r.width-i)/2,(r.height-s)/2,i,s)}return t}function n1(r){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d",{willReadFrequently:!0});t.font="italic 145px Georgia",t.lineWidth=1.5,t.textAlign="center",t.textBaseline="middle",t.fillText("logic",256,128),t.strokeText("logic",256,128);const n=t.getImageData(0,0,512,256).data,i=[];for(let g=0;g<512;g++)for(let _=0;_<256;_++)n[(_*512+g)*4+3]>110&&i.push(_*512+g);const s=Math.round(Math.min(225,Math.max(132,od(innerWidth,innerHeight)))),o=Math.round(s*840/640);e.width=s,e.height=o;const a=g_(e,r).getImageData(0,0,s,o).data,l=s*o,c={};for(const g of["position","letter","shellPoint","dye","pigment"])c[g]=new Float32Array(l*3);c.grain=new Float32Array(l*2);const u=new Uint32Array(l);let h=430172093;const f=()=>(h=Math.imul(h,1664525)+1013904223>>>0)/4294967296;for(let g=0;g<l;g++){const _=(g%s+f())/s,m=(Math.floor(g/s)+f())/o,p=1-2*m,S=Math.sqrt(Math.max(0,1-p*p)),M=Math.PI*2*(2*_+.11*Math.sin(m*7)+(f()-.5)*.53),x=Math.sin(M)*S,A=Math.cos(M)*S,E=1-.042*Math.pow(f(),3)+.005*(f()-.5),T=f(),R=f(),y=g*3;c.position.set([_-.5,.5-m,0],y),c.shellPoint.set([E*x,E*p,E*A],y),c.grain.set([T,R],g*2);const v=[a[g*4]/255,a[g*4+1]/255,a[g*4+2]/255];c.dye.set(v,y);const P=v[0]*.34+v[1]*.51+v[2]*.15,N=p+.15*x+.08*Math.sin(3*A+4*x)+.31*(P-.4)+(f()-.5)*.23,F=Ra((N+.43)/.57),H=Ra((N-.62)/.36),W=.035+.125*R,V=f()<.16+(1-P)*.1?.18+.38*f():.85+.23*f(),G=[.87,.66,.21],L=[.94,.275,.085];for(let $=0;$<3;$++){const D=Cr(Cr(W,G[$],F),L[$],H);c.pigment[y+$]=qh(Cr(D,v[$],.055)*V)}u[g]=g}const d=c.shellPoint;u.sort((g,_)=>d[g*3]-d[_*3]);for(let g=0;g<l;g++){const _=qh(g/l+(f()-.5)*.026),m=i[Math.min(i.length-1,Math.floor(_*i.length))];c.letter.set([(m%512+f())/512-.5,.25-(Math.floor(m/512)+f())/512,0],u[g]*3)}return{attributes:c,cols:s,count:l}}function i1(r,e){const t=new m_({canvas:r,alpha:!0,antialias:!1,powerPreference:"low-power"});t.setClearColor(0,0);const n=new vi;for(const[c,u]of Object.entries(e.attributes))n.setAttribute(c,new an(u,c==="grain"?2:3));const i=new Tc,s=new Yo(-1,1,1,-1,1,2400);s.position.z=1100;const o=Object.fromEntries(["gather","flatten","elapsed","yaw","tilt","radius","wordWidth","pixelRatio","spacing"].map(c=>[c,{value:0}]));o.wordCenter={value:new qe},o.photoSize={value:new qe};const a=new Ii({uniforms:o,vertexShader:e1,fragmentShader:t1,transparent:!0,depthTest:!1,depthWrite:!1}),l=new s_(n,a);return l.frustumCulled=!1,i.add(l),{resize(c,u,h,f){const d=Math.min(devicePixelRatio,1.8);t.setPixelRatio(d),t.setSize(c,u,!1),Object.assign(s,{left:-c/2,right:c/2,top:u/2,bottom:-u/2}),s.updateProjectionMatrix(),o.pixelRatio.value=d,o.wordWidth.value=h.width,o.wordCenter.value.set(h.left+h.width/2-c/2,u/2-h.top-h.height/2),o.photoSize.value.set(f.width,f.height),o.radius.value=od(c,u),o.spacing.value=Math.min(3.85,o.radius.value/e.cols*2.32)},draw(c,u,h,f,d){o.gather.value=c,o.flatten.value=u,o.elapsed.value=h,o.yaw.value=f,o.tilt.value=d,t.render(i,s)},dispose(){n.dispose(),a.dispose(),t.dispose(),t.forceContextLoss()}}}function r1(r,{attributes:e,count:t}){const n=r.getContext("2d"),i=Math.max(1,Math.floor(t/13e3)),s=[];for(let f=0;f<t;f+=i){const d=Array.from(e.pigment.subarray(f*3,f*3+3),g=>Math.round(g*255));s.push("rgb("+d.join(",")+")")}let o,a,l,c,u,h;return{resize(f,d,g,_){o=f,a=d,c=g,u=_;const m=Math.min(devicePixelRatio,1.5);r.width=Math.round(o*m),r.height=Math.round(a*m),n.setTransform(m,0,0,m,0,0),l=od(o,a),h=l/Math.sqrt(t/i)*1.95},draw(f,d,g,_,m){n.clearRect(0,0,o,a);const p=Math.cos(_),S=Math.sin(_),M=Math.cos(m),x=Math.sin(m);f=Ra(f),d=Ra(d);const A=1-Ra((d-.68)/.32);for(let E=0,T=0;E<t;E+=i,T++){const R=E*3,y=e.shellPoint[R],v=e.shellPoint[R+1],P=e.shellPoint[R+2],N=-S*y+p*P,F=(p*y+S*P)*l,H=(M*v-x*N)*l,W=c.left+c.width/2-o/2+e.letter[R]*c.width,V=a/2-c.top-c.height/2+e.letter[R+1]*c.width,G=Cr(Cr(W,F,f),e.position[R]*u.width,d),L=Cr(Cr(V,H,f),e.position[R+1]*u.height,d);n.fillStyle=f<.38?"#53483d":s[T],n.globalAlpha=(.65+.25*N)*A;const $=Cr(1,h,f)*(.59+.73*e.grain[E*2]);n.fillRect(o/2+G-$/2,a/2-L-$/2,$,$)}n.globalAlpha=1},dispose(){}}}function s1(r,e,t,n){const i=n1(e);let s;try{s=i1(r,i)}catch{const l=r.cloneNode(!1);r.replaceWith(l),r=l,s=r1(r,i)}const o=()=>s.resize(r.clientWidth,r.clientHeight,t,n());o();const a=new ResizeObserver(o);return a.observe(r),{draw:s.draw,dispose(){a.disconnect(),s.dispose(),r.remove()}}}function o1(r,e){r.indexOf(e)===-1&&r.push(e)}function ad(r,e){const t=r.indexOf(e);t>-1&&r.splice(t,1)}const Wr=(r,e,t)=>t>e?e:t<r?r:t;let Ya=()=>{};const Xr={},__=r=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r),a1=r=>typeof r=="object"&&r!==null,x_=r=>/^0[^.\s]+$/u.test(r);function v_(r){let e;return()=>(e===void 0&&(e=r()),e)}const jo=r=>r,ld=(...r)=>r.reduce((e,t)=>n=>t(e(n))),cd=(r,e,t)=>{const n=e-r;return n?(t-r)/n:1};class y_{constructor(){this.subscriptions=[]}add(e){return o1(this.subscriptions,e),()=>ad(this.subscriptions,e)}notify(e,t,n){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,t,n);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const gi=r=>r*1e3,Ci=r=>r/1e3,M_=(r,e)=>e?r*(1e3/e):0,l1=(r,e,t)=>{const n=e-r;return((t-r)%n+n)%n+r},S_=(r,e,t)=>(((1-3*t+3*e)*r+(3*t-6*e))*r+3*e)*r,c1=1e-7,u1=12;function h1(r,e,t,n,i){let s,o,a=0;do o=e+(t-e)/2,s=S_(o,n,i)-r,s>0?t=o:e=o;while(Math.abs(s)>c1&&++a<u1);return o}function fl(r,e,t,n){if(r===e&&t===n)return jo;const i=s=>h1(s,0,1,r,t);return s=>s===0||s===1?s:S_(i(s),e,n)}const T_=r=>e=>e<=.5?r(2*e)/2:(2-r(2*(1-e)))/2,ud=r=>e=>1-r(1-e),b_=fl(.33,1.53,.69,.99),hd=ud(b_),E_=T_(hd),A_=r=>r>=1?1:(r*=2)<1?.5*hd(r):.5*(2-Math.pow(2,-10*(r-1))),fd=r=>1-Math.sin(Math.acos(r)),f1=ud(fd),w_=T_(fd),d1=fl(.42,0,1,1),p1=fl(0,0,.58,1),R_=fl(.42,0,.58,1),C_=r=>Array.isArray(r)&&typeof r[0]!="number";function P_(r,e){return C_(r)?r[l1(0,r.length,e)]:r}const D_=r=>Array.isArray(r)&&typeof r[0]=="number",mm={linear:jo,easeIn:d1,easeInOut:R_,easeOut:p1,circIn:fd,circInOut:w_,circOut:f1,backIn:hd,backInOut:E_,backOut:b_,anticipate:A_},m1=r=>typeof r=="string",gm=r=>{if(D_(r)){Ya(r.length===4);const[e,t,n,i]=r;return fl(e,t,n,i)}else if(m1(r))return Ya(mm[r]!==void 0),mm[r];return r},Hl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function g1(r){let e=new Set,t=new Set,n=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),r()),c(o)}const l={schedule:(c,u=!1,h=!1)=>{const d=h&&n?e:t;return u&&s.add(c),d.add(c),c},cancel:c=>{t.delete(c),s.delete(c)},process:c=>{if(o=c,n){i=!0;return}n=!0;const u=e;e=t,t=u,e.forEach(a),e.clear(),n=!1,i&&(i=!1,l.process(c))}};return l}const _1=40;function L_(r,e){let t=!1,n=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>t=!0,o=Hl.reduce((M,x)=>(M[x]=g1(s),M),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:h,preRender:f,render:d,postRender:g}=o,_=()=>{const M=Xr.useManualTiming,x=M?i.timestamp:performance.now();t=!1,M||(i.delta=n?1e3/60:Math.max(Math.min(x-i.timestamp,_1),1)),i.timestamp=x,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),h.process(i),f.process(i),d.process(i),g.process(i),i.isProcessing=!1,t&&e&&(n=!1,r(_))},m=()=>{t=!0,n=!0,i.isProcessing||r(_)};return{schedule:Hl.reduce((M,x)=>{const A=o[x];return M[x]=(E,T=!1,R=!1)=>(t||m(),A.schedule(E,T,R)),M},{}),cancel:M=>{for(let x=0;x<Hl.length;x++)o[Hl[x]].cancel(M)},state:i,steps:o}}const{schedule:Di,cancel:Yh,state:wc,steps:q2}=L_(typeof requestAnimationFrame<"u"?requestAnimationFrame:jo,!0);let uc;function x1(){uc=void 0}const ni={now:()=>(uc===void 0&&ni.set(wc.isProcessing||Xr.useManualTiming?wc.timestamp:performance.now()),uc),set:r=>{uc=r,queueMicrotask(x1)}},I_=r=>e=>typeof e=="string"&&e.startsWith(r),N_=I_("--"),v1=I_("var(--"),dd=r=>v1(r)?y1.test(r.split("/*")[0].trim()):!1,y1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function _m(r){return typeof r!="string"?!1:r.split("/*")[0].includes("var(--")}const $o={test:r=>typeof r=="number",parse:parseFloat,transform:r=>r},Ka={...$o,transform:r=>Wr(0,1,r)},Gl={...$o,default:1},Ca=r=>Math.round(r*1e5)/1e5,pd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function M1(r){return r==null}const S1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,md=(r,e)=>t=>!!(typeof t=="string"&&S1.test(t)&&t.startsWith(r)||e&&!M1(t)&&Object.prototype.hasOwnProperty.call(t,e)),U_=(r,e,t)=>n=>{if(typeof n!="string")return n;const[i,s,o,a]=n.match(pd);return{[r]:parseFloat(i),[e]:parseFloat(s),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},T1=r=>Wr(0,255,r),Pu={...$o,transform:r=>Math.round(T1(r))},ms={test:md("rgb","red"),parse:U_("red","green","blue"),transform:({red:r,green:e,blue:t,alpha:n=1})=>"rgba("+Pu.transform(r)+", "+Pu.transform(e)+", "+Pu.transform(t)+", "+Ca(Ka.transform(n))+")"};function b1(r){let e="",t="",n="",i="";return r.length>5?(e=r.substring(1,3),t=r.substring(3,5),n=r.substring(5,7),i=r.substring(7,9)):(e=r.substring(1,2),t=r.substring(2,3),n=r.substring(3,4),i=r.substring(4,5),e+=e,t+=t,n+=n,i+=i),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}}const Kh={test:md("#"),parse:b1,transform:ms.transform},dl=r=>({test:e=>typeof e=="string"&&e.endsWith(r)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${r}`}),ir=dl("deg"),_o=dl("%"),Re=dl("px"),E1=dl("vh"),A1=dl("vw"),xm={..._o,parse:r=>_o.parse(r)/100,transform:r=>_o.transform(r*100)},co={test:md("hsl","hue"),parse:U_("hue","saturation","lightness"),transform:({hue:r,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(r)+", "+_o.transform(Ca(e))+", "+_o.transform(Ca(t))+", "+Ca(Ka.transform(n))+")"},qt={test:r=>ms.test(r)||Kh.test(r)||co.test(r),parse:r=>ms.test(r)?ms.parse(r):co.test(r)?co.parse(r):Kh.parse(r),transform:r=>typeof r=="string"?r:r.hasOwnProperty("red")?ms.transform(r):co.transform(r),getAnimatableNone:r=>{const e=qt.parse(r);return e.alpha=0,qt.transform(e)}},w1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function R1(r){var e,t;return isNaN(r)&&typeof r=="string"&&(((e=r.match(pd))==null?void 0:e.length)||0)+(((t=r.match(w1))==null?void 0:t.length)||0)>0}const F_="number",O_="color",C1="var",P1="var(",vm="${}",D1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Fo(r){const e=r.toString(),t=[],n={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(D1,l=>(qt.test(l)?(n.color.push(s),i.push(O_),t.push(qt.parse(l))):l.startsWith(P1)?(n.var.push(s),i.push(C1),t.push(l)):(n.number.push(s),i.push(F_),t.push(parseFloat(l))),++s,vm)).split(vm);return{values:t,split:a,indexes:n,types:i}}function L1(r){return Fo(r).values}function B_({split:r,types:e}){const t=r.length;return n=>{let i="";for(let s=0;s<t;s++)if(i+=r[s],n[s]!==void 0){const o=e[s];o===F_?i+=Ca(n[s]):o===O_?i+=qt.transform(n[s]):i+=n[s]}return i}}function I1(r){return B_(Fo(r))}const N1=r=>typeof r=="number"?0:qt.test(r)?qt.getAnimatableNone(r):r,U1=(r,e)=>typeof r=="number"?e!=null&&e.trim().endsWith("/")?r:0:N1(r);function F1(r){const e=Fo(r);return B_(e)(e.values.map((n,i)=>U1(n,e.split[i])))}const Li={test:R1,parse:L1,createTransformer:I1,getAnimatableNone:F1};function Du(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function O1({hue:r,saturation:e,lightness:t,alpha:n}){r/=360,e/=100,t/=100;let i=0,s=0,o=0;if(!e)i=s=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;i=Du(l,a,r+1/3),s=Du(l,a,r),o=Du(l,a,r-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}function Rc(r,e){return t=>t>0?e:r}const Zo=(r,e,t)=>r+(e-r)*t,Lu=(r,e,t)=>{const n=r*r,i=t*(e*e-n)+n;return i<0?0:Math.sqrt(i)},B1=[Kh,ms,co],k1=r=>B1.find(e=>e.test(r));function ym(r){const e=k1(r);if(!e)return!1;let t=e.parse(r);return e===co&&(t=O1(t)),t}const Mm=(r,e)=>{const t=ym(r),n=ym(e);if(!t||!n)return Rc(r,e);const i={...t};return s=>(i.red=Lu(t.red,n.red,s),i.green=Lu(t.green,n.green,s),i.blue=Lu(t.blue,n.blue,s),i.alpha=Zo(t.alpha,n.alpha,s),ms.transform(i))},jh=new Set(["none","hidden"]);function z1(r,e){return jh.has(r)?t=>t<=0?r:e:t=>t>=1?e:r}function V1(r,e){return t=>Zo(r,e,t)}function gd(r){return typeof r=="number"?V1:typeof r=="string"?dd(r)?Rc:qt.test(r)?Mm:W1:Array.isArray(r)?k_:typeof r=="object"?qt.test(r)?Mm:H1:Rc}function k_(r,e){const t=[...r],n=t.length,i=r.map((s,o)=>gd(s)(s,e[o]));return s=>{for(let o=0;o<n;o++)t[o]=i[o](s);return t}}function H1(r,e){const t={...r,...e},n={};for(const i in t)r[i]!==void 0&&e[i]!==void 0&&(n[i]=gd(r[i])(r[i],e[i]));return i=>{for(const s in n)t[s]=n[s](i);return t}}function G1(r,e){const t=[],n={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const s=e.types[i],o=r.indexes[s][n[s]],a=r.values[o]??0;t[i]=a,n[s]++}return t}const W1=(r,e)=>{const t=Li.createTransformer(e),n=Fo(r),i=Fo(e);return n.indexes.var.length===i.indexes.var.length&&n.indexes.color.length===i.indexes.color.length&&n.indexes.number.length>=i.indexes.number.length?jh.has(r)&&!i.values.length||jh.has(e)&&!n.values.length?z1(r,e):ld(k_(G1(n,i),i.values),t):Rc(r,e)};function z_(r,e,t){return typeof r=="number"&&typeof e=="number"&&typeof t=="number"?Zo(r,e,t):gd(r)(r,e)}const X1=r=>{const e=({timestamp:t})=>r(t);return{start:(t=!0)=>Di.update(e,t),stop:()=>Yh(e),now:()=>wc.isProcessing?wc.timestamp:ni.now()}},V_=(r,e,t=10)=>{let n="";const i=Math.max(Math.round(e/t),2);for(let s=0;s<i;s++)n+=Math.round(r(s/(i-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},Cc=2e4;function _d(r){let e=0;const t=50;let n=r.next(e);for(;!n.done&&e<Cc;)e+=t,n=r.next(e);return e>=Cc?1/0:e}function H_(r,e=100,t){const n=t({...r,keyframes:[0,e]}),i=Math.min(_d(n),Cc);return{type:"keyframes",ease:s=>n.next(i*s).value/e,duration:Ci(i)}}const Ft={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function $h(r,e){return r*Math.sqrt(1-e*e)}const q1=12;function Y1(r,e,t){let n=t;for(let i=1;i<q1;i++)n=n-r(n)/e(n);return n}const Sm=.001;function K1({duration:r=Ft.duration,bounce:e=Ft.bounce,velocity:t=Ft.velocity,mass:n=Ft.mass}){let i,s,o=1-e;o=Wr(Ft.minDamping,Ft.maxDamping,o),r=Wr(Ft.minDuration,Ft.maxDuration,Ci(r)),o<1?(i=c=>{const u=c*o,h=u*r,f=u-t,d=$h(c,o),g=Math.exp(-h);return Sm-f/d*g},s=c=>{const h=c*o*r,f=h*t+t,d=Math.pow(o,2)*Math.pow(c,2)*r,g=Math.exp(-h),_=$h(Math.pow(c,2),o);return(-i(c)+Sm>0?-1:1)*((f-d)*g)/_}):(i=c=>{const u=Math.exp(-c*r),h=(c-t)*r+1;return-.001+u*h},s=c=>{const u=Math.exp(-c*r),h=(t-c)*(r*r);return u*h});const a=5/r,l=Y1(i,s,a);if(r=gi(r),isNaN(l))return{stiffness:Ft.stiffness,damping:Ft.damping,duration:r};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:r}}}const j1=["duration","bounce"],$1=["stiffness","damping","mass"];function Tm(r,e){return e.some(t=>r[t]!==void 0)}function Z1(r){let e={velocity:Ft.velocity,stiffness:Ft.stiffness,damping:Ft.damping,mass:Ft.mass,isResolvedFromDuration:!1,...r};if(!Tm(r,$1)&&Tm(r,j1))if(e.velocity=0,r.visualDuration){const t=r.visualDuration,n=2*Math.PI/(t*1.2),i=n*n,s=2*Wr(.05,1,1-(r.bounce||0))*Math.sqrt(i);e={...e,mass:Ft.mass,stiffness:i,damping:s}}else{const t=K1({...r,velocity:0});e={...e,...t,mass:Ft.mass},e.isResolvedFromDuration=!0}return e}function ja(r=Ft.visualDuration,e=Ft.bounce){const t=typeof r!="object"?{visualDuration:r,keyframes:[0,1],bounce:e}:r;let{restSpeed:n,restDelta:i}=t;const s=t.keyframes[0],o=t.keyframes[t.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:h,velocity:f,isResolvedFromDuration:d}=Z1({...t,velocity:-Ci(t.velocity||0)}),g=f||0,_=c/(2*Math.sqrt(l*u)),m=o-s,p=Ci(Math.sqrt(l/u)),S=Math.abs(m)<5;n||(n=S?Ft.restSpeed.granular:Ft.restSpeed.default),i||(i=S?Ft.restDelta.granular:Ft.restDelta.default);let M,x,A,E,T,R;if(_<1)A=$h(p,_),E=(g+_*p*m)/A,M=v=>{const P=Math.exp(-_*p*v);return o-P*(E*Math.sin(A*v)+m*Math.cos(A*v))},T=_*p*E+m*A,R=_*p*m-E*A,x=v=>Math.exp(-_*p*v)*(T*Math.sin(A*v)+R*Math.cos(A*v));else if(_===1){M=P=>o-Math.exp(-p*P)*(m+(g+p*m)*P);const v=g+p*m;x=P=>Math.exp(-p*P)*(p*v*P-g)}else{const v=p*Math.sqrt(_*_-1);M=H=>{const W=Math.exp(-_*p*H),V=Math.min(v*H,300);return o-W*((g+_*p*m)*Math.sinh(V)+v*m*Math.cosh(V))/v};const P=(g+_*p*m)/v,N=_*p*P-m*v,F=_*p*m-P*v;x=H=>{const W=Math.exp(-_*p*H),V=Math.min(v*H,300);return W*(N*Math.sinh(V)+F*Math.cosh(V))}}const y={calculatedDuration:d&&h||null,velocity:v=>gi(x(v)),next:v=>{if(!d&&_<1){const N=Math.exp(-_*p*v),F=Math.sin(A*v),H=Math.cos(A*v),W=o-N*(E*F+m*H),V=gi(N*(T*F+R*H));return a.done=Math.abs(V)<=n&&Math.abs(o-W)<=i,a.value=a.done?o:W,a}const P=M(v);if(d)a.done=v>=h;else{const N=gi(x(v));a.done=Math.abs(N)<=n&&Math.abs(o-P)<=i}return a.value=a.done?o:P,a},toString:()=>{const v=Math.min(_d(y),Cc),P=V_(N=>y.next(v*N).value,v,30);return v+"ms "+P},toTransition:()=>{}};return y}ja.applyToOptions=r=>{const e=H_(r,100,ja);return r.ease=e.ease,r.duration=gi(e.duration),r.type="keyframes",r};const J1=5;function G_(r,e,t){const n=Math.max(e-J1,0);return M_(t-r(n),e-n)}function Zh({keyframes:r,velocity:e=0,power:t=.8,timeConstant:n=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=r[0],f={done:!1,value:h},d=R=>a!==void 0&&R<a||l!==void 0&&R>l,g=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let _=t*e;const m=h+_,p=o===void 0?m:o(m);p!==m&&(_=p-h);const S=R=>-_*Math.exp(-R/n),M=R=>p+S(R),x=R=>{const y=S(R),v=M(R);f.done=Math.abs(y)<=c,f.value=f.done?p:v};let A,E;const T=R=>{d(f.value)&&(A=R,E=ja({keyframes:[f.value,g(f.value)],velocity:G_(M,R,f.value),damping:i,stiffness:s,restDelta:c,restSpeed:u}))};return T(0),{calculatedDuration:null,next:R=>{let y=!1;return!E&&A===void 0&&(y=!0,x(R),T(R)),A!==void 0&&R>=A?E.next(R-A):(!y&&x(R),f)}}}function Q1(r,e,t){const n=[],i=t||Xr.mix||z_,s=r.length-1;for(let o=0;o<s;o++){let a=i(r[o],r[o+1]);if(e){const l=Array.isArray(e)?e[o]||jo:e;a=ld(l,a)}n.push(a)}return n}function eA(r,e,{clamp:t=!0,ease:n,mixer:i}={}){const s=r.length;if(Ya(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=r[0]===r[1];r[0]>r[s-1]&&(r=[...r].reverse(),e=[...e].reverse());const a=Q1(e,n,i),l=a.length,c=u=>{if(o&&u<r[0])return e[0];let h=0;if(l>1)for(;h<r.length-2&&!(u<r[h+1]);h++);const f=cd(r[h],r[h+1],u);return a[h](f)};return t?u=>c(Wr(r[0],r[s-1],u)):c}function W_(r,e){const t=r[r.length-1];for(let n=1;n<=e;n++){const i=cd(0,e,n);r.push(Zo(t,1,i))}}function X_(r){const e=[0];return W_(e,r.length-1),e}function tA(r,e){return r.map(t=>t*e)}function nA(r,e){return r.map(()=>e||R_).splice(0,r.length-1)}function Pa({duration:r=300,keyframes:e,times:t,ease:n="easeInOut"}){const i=C_(n)?n.map(gm):gm(n),s={done:!1,value:e[0]},o=tA(t&&t.length===e.length?t:X_(e),r),a=eA(o,e,{ease:Array.isArray(i)?i:nA(e,i)});return{calculatedDuration:r,next:l=>(s.value=a(l),s.done=l>=r,s)}}const iA=r=>r!==null;function Xc(r,{repeat:e,repeatType:t="loop"},n,i=1){const s=r.filter(iA),a=i<0||e&&t!=="loop"&&e%2===1?0:s.length-1;return!a||n===void 0?s[a]:n}const rA={decay:Zh,inertia:Zh,tween:Pa,keyframes:Pa,spring:ja};function q_(r){typeof r.type=="string"&&(r.type=rA[r.type])}class xd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const sA=r=>r/100;class $a extends xd{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var n,i;const{motionValue:t}=this.options;t&&t.updatedAt!==ni.now()&&this.tick(ni.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(n=this.options).onStop)==null||i.call(n))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;q_(e);const{type:t=Pa,repeat:n=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=t||Pa;l!==Pa&&typeof a[0]!="number"&&(this.mixKeyframes=ld(sA,z_(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=_d(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(n+1)-i,this.generator=c}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:n,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return n.next(0);const{delay:c=0,keyframes:u,repeat:h,repeatType:f,repeatDelay:d,type:g,onUpdate:_,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const p=this.currentTime-c*(this.playbackSpeed>=0?1:-1),S=this.playbackSpeed>=0?p<0:p>i;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let M=this.currentTime,x=n;if(h){const R=Math.min(this.currentTime,i)/a;let y=Math.floor(R),v=R%1;!v&&R>=1&&(v=1),v===1&&y--,y=Math.min(y,h+1),!!(y%2)&&(f==="reverse"?(v=1-v,d&&(v-=d/a)):f==="mirror"&&(x=o)),M=Wr(0,1,v)*a}let A;S?(this.delayState.value=u[0],A=this.delayState):A=x.next(M),s&&!S&&(A.value=s(A.value));let{done:E}=A;!S&&l!==null&&(E=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return T&&g!==Zh&&(A.value=Xc(u,this.options,m,this.speed)),_&&_(A.value),T&&this.finish(),A}then(e,t){return this.finished.then(e,t)}get duration(){return Ci(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ci(e)}get time(){return Ci(this.currentTime)}set time(e){e=gi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return G_(n=>this.generator.next(n).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(ni.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Ci(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:e=X1,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ni.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function oA(r){for(let e=1;e<r.length;e++)r[e]??(r[e]=r[e-1])}const gs=r=>r*180/Math.PI,Jh=r=>{const e=gs(Math.atan2(r[1],r[0]));return Qh(e)},aA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:r=>(Math.abs(r[0])+Math.abs(r[3]))/2,rotate:Jh,rotateZ:Jh,skewX:r=>gs(Math.atan(r[1])),skewY:r=>gs(Math.atan(r[2])),skew:r=>(Math.abs(r[1])+Math.abs(r[2]))/2},Qh=r=>(r=r%360,r<0&&(r+=360),r),bm=Jh,Em=r=>Math.sqrt(r[0]*r[0]+r[1]*r[1]),Am=r=>Math.sqrt(r[4]*r[4]+r[5]*r[5]),lA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Em,scaleY:Am,scale:r=>(Em(r)+Am(r))/2,rotateX:r=>Qh(gs(Math.atan2(r[6],r[5]))),rotateY:r=>Qh(gs(Math.atan2(-r[2],r[0]))),rotateZ:bm,rotate:bm,skewX:r=>gs(Math.atan(r[4])),skewY:r=>gs(Math.atan(r[1])),skew:r=>(Math.abs(r[1])+Math.abs(r[4]))/2};function ef(r){return r.includes("scale")?1:0}function tf(r,e){if(!r||r==="none")return ef(e);const t=r.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,i;if(t)n=lA,i=t;else{const a=r.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=aA,i=a}if(!i)return ef(e);const s=n[e],o=i[1].split(",").map(uA);return typeof s=="function"?s(o):o[s]}const cA=(r,e)=>{const{transform:t="none"}=getComputedStyle(r);return tf(t,e)};function uA(r){return parseFloat(r.trim())}const Jo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Qo=new Set([...Jo,"pathRotation"]),wm=r=>r===$o||r===Re,hA=new Set(["x","y","z"]),fA=Jo.filter(r=>!hA.has(r));function dA(r){const e=[];return fA.forEach(t=>{const n=r.getValue(t);n!==void 0&&(e.push([t,n.get()]),n.set(t.startsWith("scale")?1:0))}),e}const Ir={width:({x:r},{paddingLeft:e="0",paddingRight:t="0",boxSizing:n})=>{const i=r.max-r.min;return n==="border-box"?i:i-parseFloat(e)-parseFloat(t)},height:({y:r},{paddingTop:e="0",paddingBottom:t="0",boxSizing:n})=>{const i=r.max-r.min;return n==="border-box"?i:i-parseFloat(e)-parseFloat(t)},top:(r,{top:e})=>parseFloat(e),left:(r,{left:e})=>parseFloat(e),bottom:({y:r},{top:e})=>parseFloat(e)+(r.max-r.min),right:({x:r},{left:e})=>parseFloat(e)+(r.max-r.min),x:(r,{transform:e})=>tf(e,"x"),y:(r,{transform:e})=>tf(e,"y")};Ir.translateX=Ir.x;Ir.translateY=Ir.y;const vs=new Set;let nf=!1,rf=!1,sf=!1;function Y_(){if(rf){const r=Array.from(vs).filter(n=>n.needsMeasurement),e=new Set(r.map(n=>n.element)),t=new Map;e.forEach(n=>{const i=dA(n);i.length&&(t.set(n,i),n.render())}),r.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();const i=t.get(n);i&&i.forEach(([s,o])=>{var a;(a=n.getValue(s))==null||a.set(o)})}),r.forEach(n=>n.measureEndState()),r.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}rf=!1,nf=!1,vs.forEach(r=>r.complete(sf)),vs.clear()}function K_(){vs.forEach(r=>{r.readKeyframes(),r.needsMeasurement&&(rf=!0)})}function pA(){sf=!0,K_(),Y_(),sf=!1}class vd{constructor(e,t,n,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(vs.add(this),nf||(nf=!0,Di.read(K_),Di.resolveKeyframes(Y_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:i}=this;if(e[0]===null){const s=i==null?void 0:i.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(n&&t){const a=n.readValue(t,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),i&&s===void 0&&i.set(e[0])}oA(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),vs.delete(this)}cancel(){this.state==="scheduled"&&(vs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const mA=r=>r.startsWith("--");function j_(r,e,t){mA(e)?r.style.setProperty(e,t):r.style[e]=t}const gA={};function $_(r,e){const t=v_(r);return()=>gA[e]??t()}const _A=$_(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Z_=$_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ga=([r,e,t,n])=>`cubic-bezier(${r}, ${e}, ${t}, ${n})`,Rm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ga([0,.65,.55,1]),circOut:ga([.55,0,1,.45]),backIn:ga([.31,.01,.66,-.59]),backOut:ga([.33,1.53,.69,.99])};function J_(r,e){if(r)return typeof r=="function"?Z_()?V_(r,e):"ease-out":D_(r)?ga(r):Array.isArray(r)?r.map(t=>J_(t,e)||Rm.easeOut):Rm[r]}function xA(r,e,t,{delay:n=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:t};l&&(u.offset=l);const h=J_(a,i);Array.isArray(h)&&(u.easing=h);const f={delay:n,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),r.animate(u,f)}function yd(r){return typeof r=="function"&&"applyToOptions"in r}function vA({type:r,...e}){return yd(r)&&Z_()?r.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Q_ extends xd{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:n,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Ya(typeof e.type!="string");const c=vA(e);this.animation=xA(t,n,i,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Xc(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),j_(t,n,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n,i;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(n=this.animation).commitStyles)==null||i.call(n))}get duration(){var t,n;const e=((n=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:n.call(t).duration)||0;return Ci(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ci(e)}get time(){return Ci(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=gi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:i}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&_A()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),jo):i(this)}}const e0={anticipate:A_,backInOut:E_,circInOut:w_};function yA(r){return r in e0}function MA(r){typeof r.ease=="string"&&yA(r.ease)&&(r.ease=e0[r.ease])}const Iu=10;class SA extends Q_{constructor(e){MA(e),q_(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:i,element:s,...o}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const a=new $a({...o,autoplay:!1}),l=Math.max(Iu,ni.now()-this.startTime),c=Wr(0,Iu,l-Iu),u=a.sample(l).value,{name:h}=this.options;s&&h&&j_(s,h,u),t.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const Cm=(r,e)=>e==="zIndex"?!1:!!(typeof r=="number"||Array.isArray(r)||typeof r=="string"&&(Li.test(r)||r==="0")&&!r.startsWith("url("));function TA(r){const e=r[0];if(r.length===1)return!0;for(let t=0;t<r.length;t++)if(r[t]!==e)return!0}function bA(r,e,t,n){const i=r[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=r[r.length-1],o=Cm(i,e),a=Cm(s,e);return!o||!a?!1:TA(r)||(t==="spring"||yd(t))&&n}function of(r){r.duration=0,r.type="keyframes"}const t0=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),EA=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function AA(r){for(let e=0;e<r.length;e++)if(typeof r[e]=="string"&&EA.test(r[e]))return!0;return!1}const wA=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),RA=v_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function CA(r){var h;const{motionValue:e,name:t,repeatDelay:n,repeatType:i,damping:s,type:o,keyframes:a}=r,l=(h=e==null?void 0:e.owner)==null?void 0:h.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return RA()&&t&&(t0.has(t)||wA.has(t)&&AA(a))&&(t!=="transform"||!u)&&!c&&!n&&i!=="mirror"&&s!==0&&o!=="inertia"}const PA=40;class DA extends xd{constructor({autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...h}){var g;super(),this.stop=()=>{var _,m;this._animation&&(this._animation.stop(),(_=this.stopTimeline)==null||_.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=ni.now();const f={autoplay:e,delay:t,type:n,repeat:i,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...h},d=(u==null?void 0:u.KeyframeResolver)||vd;this.keyframeResolver=new d(a,(_,m,p)=>this.onKeyframesResolved(_,m,f,!p),l,c,u),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(e,t,n,i){var p,S;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=n;this.resolvedAt=ni.now();let h=!0;bA(e,s,o,a)||(h=!1,(Xr.instantAnimations||!l)&&(u==null||u(Xc(e,n,t))),e[0]=e[e.length-1],of(n),n.repeat=0);const d={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>PA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},g=h&&!c&&CA(d),_=(S=(p=d.motionValue)==null?void 0:p.owner)==null?void 0:S.current;let m;if(g)try{m=new SA({...d,element:_})}catch{m=new $a(d)}else m=new $a(d);m.finished.then(()=>{this.notifyFinished()}).catch(jo),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),pA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}class LA{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){const t=this.animations.map(n=>n.attachTimeline(e));return()=>{t.forEach((n,i)=>{n&&n(),this.animations[i].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Pm(this.animations,"duration")}get iterationDuration(){return Pm(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Pm(r,e){let t=0;for(let n=0;n<r.length;n++){const i=r[n][e];i!==null&&i>t&&(t=i)}return t}class IA extends LA{then(e,t){return this.finished.finally(e).then(()=>{})}}const Dm=30,NA=r=>!isNaN(parseFloat(r));class UA{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{var s;const i=ni.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ni.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=NA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new y_);const n=this.events[e].add(t);return e==="change"?()=>{n(),Di.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ni.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Dm)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Dm);return M_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Cs(r,e){return new UA(r,e)}function n0(r,e){if(r!=null&&r.inherit&&e){const{inherit:t,...n}=r;return{...e,...n}}return r}function i0(r,e){const t=(r==null?void 0:r[e])??(r==null?void 0:r.default)??r;return t!==r?n0(t,r):t}const FA={type:"spring",stiffness:500,damping:25,restSpeed:10},OA=r=>({type:"spring",stiffness:550,damping:r===0?2*Math.sqrt(550):30,restSpeed:10}),BA={type:"keyframes",duration:.8},kA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zA=(r,{keyframes:e})=>e.length>2?BA:Qo.has(r)?r.startsWith("scale")?OA(e[1]):FA:kA,VA=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function HA(r){for(const e in r)if(!VA.has(e))return!0;return!1}const r0=(r,e,t,n={},i,s)=>o=>{const a=i0(n,r)||{},l=a.delay||n.delay||0;let{elapsed:c=0}=n;c=c-gi(l);const u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:r,motionValue:e,element:s?void 0:i};HA(a)||Object.assign(u,zA(r,u)),u.duration&&(u.duration=gi(u.duration)),u.repeatDelay&&(u.repeatDelay=gi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(of(u),u.delay===0&&(h=!0)),(Xr.instantAnimations||Xr.skipAnimations||i!=null&&i.shouldSkipAnimations||a.skipAnimations)&&(h=!0,of(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,h&&!s&&e.get()!==void 0){const f=Xc(u.keyframes,a);if(f!==void 0){Di.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new $a(u):new DA(u)},GA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function WA(r){const e=GA.exec(r);if(!e)return[,];const[,t,n,i]=e;return[`--${t??n}`,i]}function s0(r,e,t=1){const[n,i]=WA(r);if(!n)return;const s=window.getComputedStyle(e).getPropertyValue(n);if(s){const o=s.trim();return __(o)?parseFloat(o):o}return dd(i)?s0(i,e,t+1):i}function Lm(r){const e=[{},{}];return r==null||r.values.forEach((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()}),e}function o0(r,e,t,n){if(typeof e=="function"){const[i,s]=Lm(n);e=e(t!==void 0?t:r.custom,i,s)}if(typeof e=="string"&&(e=r.variants&&r.variants[e]),typeof e=="function"){const[i,s]=Lm(n);e=e(t!==void 0?t:r.custom,i,s)}return e}function XA(r,e,t){const n=r.getProps();return o0(n,e,n.custom,r)}const a0=new Set(["width","height","top","left","right","bottom",...Jo]),qA=r=>Array.isArray(r);function YA(r,e,t){r.hasValue(e)?r.getValue(e).set(t):r.addValue(e,Cs(t))}function KA(r){return qA(r)?r[r.length-1]||0:r}function jA(r,e){const t=XA(r,e);let{transitionEnd:n={},transition:i={},...s}=t||{};s={...s,...n};for(const o in s){const a=KA(s[o]);YA(r,o,a)}}const un=r=>!!(r&&r.getVelocity);function $A(r){return!!(un(r)&&r.add)}function ZA(r,e){const t=r.getValue("willChange");if($A(t))return t.add(e);if(!t&&Xr.WillChange){const n=new Xr.WillChange("auto");r.addValue("willChange",n),n.add(e)}}function Md(r){return r.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const JA="framerAppearId",QA="data-"+Md(JA);function ew(r){return r.props[QA]}function tw({protectedKeys:r,needsAnimating:e},t){const n=r.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,n}function nw(r,e,{delay:t=0,transitionOverride:n,type:i}={}){let{transition:s,transitionEnd:o,...a}=e;const l=r.getDefaultTransition();s=s?n0(s,l):l;const c=s==null?void 0:s.reduceMotion,u=s==null?void 0:s.skipAnimations;n&&(s=n);const h=[],f=i&&r.animationState&&r.animationState.getState()[i],d=s==null?void 0:s.path;d&&d.animateVisualElement(r,a,s,t,h);for(const g in a){const _=r.getValue(g,r.latestValues[g]??null),m=a[g];if(m===void 0||f&&tw(f,g))continue;const p={delay:t,...i0(s||{},g)};u&&(p.skipAnimations=!0);const S=_.get();if(S!==void 0&&!_.isAnimating()&&!Array.isArray(m)&&m===S&&!p.velocity){Di.update(()=>_.set(m));continue}let M=!1;if(window.MotionHandoffAnimation){const E=ew(r);if(E){const T=window.MotionHandoffAnimation(E,g,Di);T!==null&&(p.startTime=T,M=!0)}}ZA(r,g);const x=c??r.shouldReduceMotion;_.start(r0(g,_,m,x&&a0.has(g)?{type:!1}:p,r,M));const A=_.animation;A&&h.push(A)}if(o){const g=()=>Di.update(()=>{o&&jA(r,o)});h.length?Promise.all(h).then(g):g()}return h}const iw={test:r=>r==="auto",parse:r=>r},l0=r=>e=>e.test(r),c0=[$o,Re,_o,ir,A1,E1,iw],Im=r=>c0.find(l0(r));function rw(r){return typeof r=="number"?r===0:r!==null?r==="none"||r==="0"||x_(r):!0}const sw=new Set(["brightness","contrast","saturate","opacity"]);function ow(r){const[e,t]=r.slice(0,-1).split("(");if(e==="drop-shadow")return r;const[n]=t.match(pd)||[];if(!n)return r;const i=t.replace(n,"");let s=sw.has(e)?1:0;return n!==t&&(s*=100),e+"("+s+i+")"}const aw=/\b([a-z-]*)\(.*?\)/gu,af={...Li,getAnimatableNone:r=>{const e=r.match(aw);return e?e.map(ow).join(" "):r}},lf={...Li,getAnimatableNone:r=>{const e=Li.parse(r);return Li.createTransformer(r)(e.map(n=>typeof n=="number"?0:typeof n=="object"?{...n,alpha:1}:n))}},Nm={...$o,transform:Math.round},lw={rotate:ir,pathRotation:ir,rotateX:ir,rotateY:ir,rotateZ:ir,scale:Gl,scaleX:Gl,scaleY:Gl,scaleZ:Gl,skew:ir,skewX:ir,skewY:ir,distance:Re,translateX:Re,translateY:Re,translateZ:Re,x:Re,y:Re,z:Re,perspective:Re,transformPerspective:Re,opacity:Ka,originX:xm,originY:xm,originZ:Re},Pc={borderWidth:Re,borderTopWidth:Re,borderRightWidth:Re,borderBottomWidth:Re,borderLeftWidth:Re,borderRadius:Re,borderTopLeftRadius:Re,borderTopRightRadius:Re,borderBottomRightRadius:Re,borderBottomLeftRadius:Re,width:Re,maxWidth:Re,height:Re,maxHeight:Re,top:Re,right:Re,bottom:Re,left:Re,inset:Re,insetBlock:Re,insetBlockStart:Re,insetBlockEnd:Re,insetInline:Re,insetInlineStart:Re,insetInlineEnd:Re,padding:Re,paddingTop:Re,paddingRight:Re,paddingBottom:Re,paddingLeft:Re,paddingBlock:Re,paddingBlockStart:Re,paddingBlockEnd:Re,paddingInline:Re,paddingInlineStart:Re,paddingInlineEnd:Re,margin:Re,marginTop:Re,marginRight:Re,marginBottom:Re,marginLeft:Re,marginBlock:Re,marginBlockStart:Re,marginBlockEnd:Re,marginInline:Re,marginInlineStart:Re,marginInlineEnd:Re,fontSize:Re,backgroundPositionX:Re,backgroundPositionY:Re,...lw,zIndex:Nm,fillOpacity:Ka,strokeOpacity:Ka,numOctaves:Nm},cw={...Pc,color:qt,backgroundColor:qt,outlineColor:qt,fill:qt,stroke:qt,borderColor:qt,borderTopColor:qt,borderRightColor:qt,borderBottomColor:qt,borderLeftColor:qt,filter:af,WebkitFilter:af,mask:lf,WebkitMask:lf},u0=r=>cw[r],uw=new Set([af,lf]);function h0(r,e){let t=u0(r);return uw.has(t)||(t=Li),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const hw=new Set(["auto","none","0"]);function fw(r,e,t){let n=0,i;for(;n<r.length&&!i;){const s=r[n];typeof s=="string"&&!hw.has(s)&&Fo(s).values.length&&(i=r[n]),n++}if(i&&t)for(const s of e)r[s]=h0(t,i)}class dw extends vd{constructor(e,t,n,i,s){super(e,t,n,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let h=e[u];if(typeof h=="string"&&(h=h.trim(),dd(h))){const f=s0(h,t.current);f!==void 0&&(e[u]=f),u===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!a0.has(n)||e.length!==2)return;const[i,s]=e,o=Im(i),a=Im(s),l=_m(i),c=_m(s);if(l!==c&&Ir[n]){this.needsMeasurement=!0;return}if(o!==a)if(wm(o)&&wm(a))for(let u=0;u<e.length;u++){const h=e[u];typeof h=="string"&&(e[u]=parseFloat(h))}else Ir[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)(e[i]===null||rw(e[i]))&&n.push(i);n.length&&fw(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ir[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const i=t[t.length-1];i!==void 0&&e.getValue(n,i).jump(i,!1)}measureEndState(){var a;const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const i=e.getValue(t);i&&i.jump(this.measuredOrigin,!1);const s=n.length-1,o=n[s];n[s]=Ir[t](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const pw=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function mw(r,e,t){if(r==null)return[];if(r instanceof EventTarget)return[r];if(typeof r=="string"){let n=document;e&&(n=e.current);const i=(t==null?void 0:t[r])??n.querySelectorAll(r);return i?Array.from(i):[]}return Array.from(r).filter(n=>n!=null)}const cf=(r,e)=>e&&typeof r=="number"?e.transform(r):r,{schedule:gw,cancel:Y2}=L_(queueMicrotask,!1);function f0(r){return a1(r)&&"ownerSVGElement"in r}function _w(r){return f0(r)&&r.tagName==="svg"}function xw(r,e){const t=un(r)?r.get():r,n=Cs(t);return vw(n,r,e),n}function vw(r,e,t={}){const n=r.get();let i=null,s=n,o;const a=typeof n=="string"?n.replace(/[\d.-]/g,""):void 0,l=()=>{i&&(i.stop(),i=null),r.animation=void 0},c=()=>{const h=Um(r.get()),f=Um(s);if(h===f){l();return}const d=i?i.getGeneratorVelocity():r.getVelocity();l(),i=new $a({keyframes:[h,f],velocity:d,type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o})},u=()=>{var h;c(),r.animation=i??void 0,(h=r.events.animationStart)==null||h.notify(),i==null||i.then(()=>{var f;r.animation=void 0,(f=r.events.animationComplete)==null||f.notify()})};if(r.attach((h,f)=>{s=h,o=d=>f(Nu(d,a)),Di.postRender(u)},l),un(e)){let h=t.skipInitialAnimation===!0;const f=e.on("change",g=>{h?(h=!1,r.jump(Nu(g,a),!1)):r.set(Nu(g,a))}),d=r.on("destroy",f);return()=>{f(),d()}}return l}function Nu(r,e){return e?r+e:r}function Um(r){return typeof r=="number"?r:parseFloat(r)}function Fm(r,e){return xw(r,{type:"spring",...e})}const yw=[...c0,qt,Li],Mw=r=>yw.find(l0(r)),Om=()=>({min:0,max:0}),Sd=()=>({x:Om(),y:Om()}),Za=new WeakMap;function Sw(r){return r!==null&&typeof r=="object"&&typeof r.start=="function"}function Tw(r){return typeof r=="string"||Array.isArray(r)}const bw=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ew=["initial",...bw];function d0(r){return Sw(r.animate)||Ew.some(e=>Tw(r[e]))}function Aw(r){return!!(d0(r)||r.variants)}function ww(r,e,t){for(const n in e){const i=e[n],s=t[n];if(un(i))r.addValue(n,i);else if(un(s))r.addValue(n,Cs(i,{owner:r}));else if(s!==i)if(r.hasValue(n)){const o=r.getValue(n);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=r.getStaticValue(n);r.addValue(n,Cs(o!==void 0?o:i,{owner:r}))}}for(const n in t)e[n]===void 0&&r.removeValue(n);return e}const uf={current:null},p0={current:!1},Rw=typeof window<"u";function Cw(){if(p0.current=!0,!!Rw)if(window.matchMedia){const r=window.matchMedia("(prefers-reduced-motion)"),e=()=>uf.current=r.matches;r.addEventListener("change",e),e()}else uf.current=!1}const Bm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let km={};class m0{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:i,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=vd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=ni.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,Di.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=d0(t),this.isVariantNode=Aw(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in f){const g=f[d];c[d]!==void 0&&un(g)&&g.set(c[d])}}mount(e){var t,n;if(this.hasBeenMounted)for(const i in this.initialValues)(t=this.values.get(i))==null||t.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,Za.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(p0.current||Cw(),this.shouldReduceMotion=uf.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Yh(this.notifyUpdate),Yh(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&t0.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=t.accelerate,h=new Q_({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:gi(u)}),f=o(h);this.valueSubscriptions.set(e,()=>{f(),h.cancel()});return}const n=Qo.has(e);n&&this.onBindTransform&&this.onBindTransform();const i=t.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Di.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{i(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in km){const t=km[e];if(!t)continue;const{isEnabled:n,Feature:i}=t;if(!this.features[e]&&i&&n(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Sd()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Bm.length;n++){const i=Bm[n];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=ww(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Cs(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n=="string"&&(__(n)||x_(n))?n=parseFloat(n):!Mw(n)&&Li.test(t)&&(n=h0(e,t)),this.setBaseTarget(e,un(n)?n.get():n)),un(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var s;const{initial:t}=this.props;let n;if(typeof t=="string"||typeof t=="object"){const o=o0(this.props,t,(s=this.presenceContext)==null?void 0:s.custom);o&&(n=o[e])}if(t&&n!==void 0)return n;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!un(i)?i:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new y_),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){gw.render(this.render)}}class g0 extends m0{constructor(){super(...arguments),this.KeyframeResolver=dw}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;un(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Pw({top:r,left:e,right:t,bottom:n}){return{x:{min:e,max:t},y:{min:r,max:n}}}function Dw(r,e){if(!e)return r;const t=e({x:r.left,y:r.top}),n=e({x:r.right,y:r.bottom});return{top:t.y,left:t.x,bottom:n.y,right:n.x}}function Lw(r,e){return Pw(Dw(r.getBoundingClientRect(),e))}const Iw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Nw=Jo.length;function Uw(r,e,t){let n="",i=!0;for(let o=0;o<Nw;o++){const a=Jo[o],l=r[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const u=parseFloat(l);c=a.startsWith("scale")?u===1:u===0}if(!c||t){const u=cf(l,Pc[a]);if(!c){i=!1;const h=Iw[a]||a;n+=`${h}(${u}) `}t&&(e[a]=u)}}const s=r.pathRotation;return s&&(i=!1,n+=`rotate(${cf(s,Pc.pathRotation)}) `),n=n.trim(),t?n=t(e,i?"":n):i&&(n="none"),n}function _0(r,e,t){const{style:n,vars:i,transformOrigin:s}=r;let o=!1,a=!1;for(const l in e){const c=e[l];if(Qo.has(l)){o=!0;continue}else if(N_(l)){i[l]=c;continue}else{const u=cf(c,Pc[l]);l.startsWith("origin")?(a=!0,s[l]=u):n[l]=u}}if(e.transform||(o||t?n.transform=Uw(e,r.transform,t):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;n.transformOrigin=`${l} ${c} ${u}`}}function x0(r,{style:e,vars:t},n,i){const s=r.style;let o;for(o in e)s[o]=e[o];i==null||i.applyProjectionStyles(s,n);for(o in t)s.setProperty(o,t[o])}function zm(r,e){return e.max===e.min?0:r/(e.max-e.min)*100}const ca={correct:(r,e)=>{if(!e.target)return r;if(typeof r=="string")if(Re.test(r))r=parseFloat(r);else return r;const t=zm(r,e.target.x),n=zm(r,e.target.y);return`${t}% ${n}%`}},Fw={correct:(r,{treeScale:e,projectionDelta:t})=>{const n=r,i=Li.parse(r);if(i.length>5)return n;const s=Li.createTransformer(r),o=typeof i[0]!="number"?1:0,a=t.x.scale*e.x,l=t.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=Zo(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},Ow={borderRadius:{...ca,applyTo:[...pw]},borderTopLeftRadius:ca,borderTopRightRadius:ca,borderBottomLeftRadius:ca,borderBottomRightRadius:ca,boxShadow:Fw};function Bw(r,{layout:e,layoutId:t}){return Qo.has(r)||r.startsWith("origin")||(e||t!==void 0)&&(!!Ow[r]||r==="opacity")}function v0(r,e,t){var o;const n=r.style,i=e==null?void 0:e.style,s={};if(!n)return s;for(const a in n)(un(n[a])||i&&un(i[a])||Bw(a,r)||((o=t==null?void 0:t.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=n[a]);return s}function kw(r){return window.getComputedStyle(r)}class zw extends g0{constructor(){super(...arguments),this.type="html",this.renderInstance=x0}mount(e){Ya(!!e.style),super.mount(e)}readValueFromInstance(e,t){var n;if(Qo.has(t))return(n=this.projection)!=null&&n.isProjecting?ef(t):cA(e,t);{const i=kw(e),s=(N_(t)?i.getPropertyValue(t):i[t])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Lw(e,t)}build(e,t,n){_0(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return v0(e,t,n)}}function Vw(r,e){return r in e}class Hw extends m0{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(Vw(t,e)){const n=e[t];if(typeof n=="string"||typeof n=="number")return n}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return Sd()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}}const Gw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ww={offset:"strokeDashoffset",array:"strokeDasharray"};function Xw(r,e,t=1,n=0,i=!0){r.pathLength=1;const s=i?Gw:Ww;r[s.offset]=`${-n}`,r[s.array]=`${e} ${t}`}const qw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Yw(r,{attrX:e,attrY:t,attrScale:n,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(_0(r,a,c),l){r.style.viewBox&&(r.attrs.viewBox=r.style.viewBox);return}r.attrs=r.style,r.style={};const{attrs:h,style:f}=r;h.transform&&(f.transform=h.transform,delete h.transform),(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete h.transformBox);for(const d of qw)h[d]!==void 0&&(f[d]=h[d],delete h[d]);e!==void 0&&(h.x=e),t!==void 0&&(h.y=t),n!==void 0&&(h.scale=n),i!==void 0&&Xw(h,i,s,o,!1)}const y0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Kw=r=>typeof r=="string"&&r.toLowerCase()==="svg";function jw(r,e,t,n){x0(r,e,void 0,n);for(const i in e.attrs)r.setAttribute(y0.has(i)?i:Md(i),e.attrs[i])}function $w(r,e,t){const n=v0(r,e,t);for(const i in r)if(un(r[i])||un(e[i])){const s=Jo.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[s]=r[i]}return n}class Zw extends g0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Sd}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Qo.has(t)){const n=u0(t);return n&&n.default||0}return t=y0.has(t)?t:Md(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return $w(e,t,n)}build(e,t,n){Yw(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,i){jw(e,t,n,i)}mount(e){this.isSVGTag=Kw(e.tagName),super.mount(e)}}function Jw(r,e,t){const n=un(r)?r:Cs(r);return n.start(r0("",n,e,t)),n.animation}function Td(r){return typeof r=="object"&&!Array.isArray(r)}function M0(r,e,t,n){return r==null?[]:typeof r=="string"&&Td(e)?mw(r,t,n):r instanceof NodeList?Array.from(r):Array.isArray(r)?r.filter(i=>i!=null):[r]}function Qw(r,e,t){return r*(e+1)+t*e}function Vm(r,e,t,n){return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,r+parseFloat(e)):e==="<"?t:e.startsWith("<")?Math.max(0,t+parseFloat(e.slice(1))):n.get(e)??r}function eR(r,e,t){for(let n=0;n<r.length;n++){const i=r[n];i.at>e&&i.at<t&&(ad(r,i),n--)}}function tR(r,e,t,n,i,s){eR(r,i,s);for(let o=0;o<e.length;o++)r.push({value:e[o],at:Zo(i,s,n[o]),easing:P_(t,o)})}function nR(r,e,t=0){const n=e+1+e*t;for(let i=0;i<r.length;i++)r[i]=r[i]/n}function iR(r,e){return r.at===e.at?r.value===null?1:e.value===null?-1:0:r.at-e.at}const rR="easeInOut",sR=20;function oR(r,{defaultTransition:e={},...t}={},n,i){const s=e.duration||.3,o=new Map,a=new Map,l={},c=new Map;let u=0,h=0,f=0;for(let d=0;d<r.length;d++){const g=r[d];if(typeof g=="string"){c.set(g,h);continue}else if(!Array.isArray(g)){c.set(g.name,Vm(h,g.at,u,c));continue}let[_,m,p={}]=g;p.at!==void 0&&(h=Vm(h,p.at,u,c));let S=0;const M=(x,A,E,T=0,R=0)=>{const y=aR(x),{delay:v=0,times:P=X_(y),type:N=e.type||"keyframes",repeat:F,repeatType:H,repeatDelay:W=0,...V}=A;let{ease:G=e.ease||"easeOut",duration:L}=A;const $=typeof v=="function"?v(T,R):v,D=y.length,re=yd(N)?N:i==null?void 0:i[N||"keyframes"];if(D<=2&&re){let Z=100;if(D===2&&uR(y)){const fe=y[1]-y[0];Z=Math.abs(fe)}const oe={...e,...V};L!==void 0&&(oe.duration=gi(L));const ne=H_(oe,Z,re);G=ne.ease,L=ne.duration}L??(L=s);const Me=h+$;P.length===1&&P[0]===0&&(P[1]=1);const Ue=P.length-y.length;if(Ue>0&&W_(P,Ue),y.length===1&&y.unshift(null),F&&F<sR){const Z=L>0?W/L:0;L=Qw(L,F,W);const oe=[...y],ne=[...P];G=Array.isArray(G)?[...G]:[G];const fe=[...G],ue=H==="reverse"||H==="mirror";let Ie=oe,Ve=fe;ue&&(Ie=[...oe].reverse(),H==="reverse"&&(Ve=[...fe].reverse().map(Pe=>typeof Pe=="function"?ud(Pe):Pe)));for(let Pe=0;Pe<F;Pe++){const Ae=ue&&Pe%2===0,I=Ae?Ie:oe,pt=Ae?Ve:fe,Be=(Pe+1)*(1+Z);Z>0&&(y.push(y[y.length-1]),P.push(Be),G.push("linear")),y.push(...I);for(let z=0;z<I.length;z++)P.push(ne[z]+Be),G.push(z===0?"linear":P_(pt,z-1))}nR(P,F,Z)}const K=Me+L;tR(E,y,G,P,Me,K),S=Math.max($+L,S),f=Math.max(K,f)};if(un(_)){const x=Hm(_,a);M(m,p,Gm("default",x))}else{const x=M0(_,m,n,l),A=x.length;for(let E=0;E<A;E++){m=m,p=p;const T=x[E],R=Hm(T,a);for(const y in m)M(m[y],lR(p,y),Gm(y,R),E,A)}}u=h,h+=S}return a.forEach((d,g)=>{for(const _ in d){const m=d[_];m.sort(iR);const p=[],S=[],M=[];for(let T=0;T<m.length;T++){const{at:R,value:y,easing:v}=m[T];p.push(y),S.push(cd(0,f,R)),M.push(v||"easeOut")}S[0]!==0&&(S.unshift(0),p.unshift(p[0]),M.unshift(rR)),S[S.length-1]!==1&&(S.push(1),p.push(null)),o.has(g)||o.set(g,{keyframes:{},transition:{}});const x=o.get(g);x.keyframes[_]=p;const{type:A,...E}=e;x.transition[_]={...E,duration:f,ease:M,times:S,...t}}}),o}function Hm(r,e){return!e.has(r)&&e.set(r,{}),e.get(r)}function Gm(r,e){return e[r]||(e[r]=[]),e[r]}function aR(r){return Array.isArray(r)?r:[r]}function lR(r,e){return r&&r[e]?{...r,...r[e]}:{...r}}const cR=r=>typeof r=="number",uR=r=>r.every(cR);function hR(r){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},t=f0(r)&&!_w(r)?new Zw(e):new zw(e);t.mount(r),Za.set(r,t)}function fR(r){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},t=new Hw(e);t.mount(r),Za.set(r,t)}function dR(r,e){return un(r)||typeof r=="number"||typeof r=="string"&&!Td(e)}function S0(r,e,t,n){const i=[];if(dR(r,e))i.push(Jw(r,Td(e)&&e.default||e,t&&(t.default||t)));else{if(r==null)return i;const s=M0(r,e,n),o=s.length;for(let a=0;a<o;a++){const l=s[a],c=l instanceof Element?hR:fR;Za.has(l)||c(l);const u=Za.get(l),h={...t};"delay"in h&&typeof h.delay=="function"&&(h.delay=h.delay(a,o)),i.push(...nw(u,{...e,transition:h},{}))}}return i}function pR(r,e,t){const n=[],i=r.map(o=>{if(Array.isArray(o)&&typeof o[0]=="function"){const a=o[0],l=Cs(0);return l.on("change",a),o.length===1?[l,[0,1]]:o.length===2?[l,[0,1],o[1]]:[l,o[1],o[2]]}return o});return oR(i,e,t,{spring:ja}).forEach(({keyframes:o,transition:a},l)=>{n.push(...S0(l,o,a))}),n}function mR(r){return Array.isArray(r)&&r.some(Array.isArray)}function gR(r={}){const{scope:e,reduceMotion:t,skipAnimations:n}=r;function i(s,o,a){let l=[],c;const u={};if(t!==void 0&&(u.reduceMotion=t),n!==void 0&&(u.skipAnimations=n),mR(s)){const{onComplete:f,...d}=o||{};typeof f=="function"&&(c=f),l=pR(s,{...u,...d},e)}else{const{onComplete:f,...d}=a||{};typeof f=="function"&&(c=f),l=S0(s,o,{...u,...d},e)}const h=new IA(l);return c&&h.finished.then(c),e&&(e.animations.push(h),h.finished.then(()=>{ad(e.animations,h)})),h}return i}const Uu=gR(),kn=[[1366909,"Pinnacles","雾中的尖峭山峰"],[167964,"Gesture","向镜头伸手的黑白剪影"],[417074,"Alpenglow","橙色山顶在湖水中的倒影"],[36215328,"Red Room","红光下穿黑衣的人像"],[37420108,"Gel Light","冷暖色光下穿白衣的人像"],[31146128,"Afterimage","粉蓝色灯光中的全身人像"],[2662116,"Still Water","雪山与蓝绿色湖面的倒影"]],ui=Math.floor(kn.length/2),Ja=r=>"/-logic080609.github.io-/gallery/"+kn[r][0]+".jpg",rr=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),_a=(r,e)=>(r%e+e)%e,T0=r=>String(r+1).padStart(2,"0"),ro=matchMedia("(prefers-reduced-motion: reduce)");function Wt(r,e,t){const n=document.createElement(r);return n.className=e,t&&(n.textContent=t),n}function _R(r){const e=document.createElement("canvas");e.width=104,e.height=Math.round(104*840/640);const t=g_(e,r),n=t.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s+=4){const o=i[s],a=i[s+1],l=i[s+2],c=(.48*Math.max(o,a,l)+.52*(.213*o+.715*a+.072*l))/255,u=rr((c-.46)/.4);i[s+3]=Math.round(255*u*u*(3-2*u))}return t.putImageData(n,0,0),e.toDataURL()}function xR(r,e,t){const n=Wt("dialog","print-detail");n.setAttribute("aria-label","单张照片");const i=Wt("button","detail-close","Close ×");i.type="button",i.setAttribute("aria-label","关闭大图");const s=Wt("img","detail-image"),o=Wt("p","detail-caption");o.setAttribute("aria-live","polite");const a=Wt("div","detail-strip");a.setAttribute("role","group"),a.setAttribute("aria-label","选择照片");let l=0;const c=kn.map((h,f)=>{const d=Wt("button","detail-thumb");d.type="button",d.setAttribute("aria-label","查看 "+h[1]);const g=new Image;return g.alt="",g.src=Ja(f),d.append(g),a.append(d),d.addEventListener("click",()=>u(f),{signal:t}),d});function u(h){l=_a(h,kn.length),s.src=Ja(l),s.alt=kn[l][2],o.textContent=T0(l)+" / "+String(kn.length).padStart(2,"0")+"   "+kn[l][1],c.forEach((f,d)=>f.setAttribute("aria-pressed",String(l===d))),ro.matches||s.animate([{opacity:.6},{opacity:1}],{duration:210})}return i.addEventListener("click",()=>n.close(),{signal:t}),n.addEventListener("click",h=>{h.target===n&&n.close()},{signal:t}),n.addEventListener("keydown",h=>{(h.key==="ArrowLeft"||h.key==="ArrowRight")&&(h.preventDefault(),u(l+(h.key==="ArrowRight"?1:-1)))},{signal:t}),n.addEventListener("close",()=>e(l,n.returnValue==="back"),{signal:t}),n.append(i,s,o,a),r.append(n),{open(h){n.returnValue="",u(h),n.showModal(),i.focus({preventScroll:!0})},close(){return n.open?(n.close("back"),!0):!1}}}function vR(){const r=new Image;return r.decoding="async",r.fetchPriority="high",r.src=Ja(ui),r}function yR(r,e){const t=new AbortController,{signal:n}=t,i=Wt("div","photo-strip");i.tabIndex=0,i.inert=!0,i.setAttribute("role","region"),i.setAttribute("aria-label","摄影画廊。左右方向键浏览，回车查看大图。");const s=Wt("div","photo-track"),o=Wt("h2","gallery-masthead");o.append(Wt("span","","Logic"),Wt("span","","Gallery List"));const a=Wt("p","gallery-hint");a.append(Wt("span","pointer-help","Scroll to surf, click to open"),Wt("span","touch-help","Swipe to surf, tap to open")),i.style.setProperty("--first-print",'url("'+Ja(ui)+'")'),i.append(s,o,a),r.append(i);const l=kn.length,c=kn.map((L,$)=>{if($===ui)return e;const D=new Image;return D.decoding="async",D.src=Ja($),D}),u=Fm(ui,{stiffness:116,damping:23,mass:.85,restDelta:8e-4,restSpeed:.002}),h=Fm(0,{stiffness:79,damping:17,mass:.91,restDelta:9e-4});let f=ui,d=0,g=0,_=!1,m=!1,p=0,S=0,M=0,x,A,E=null,T=!1,R=0;const y=Array.from({length:2*l},(L,$)=>{const D=$%l,re=Wt("button","photo-plane");re.type="button",re.tabIndex=-1,re.setAttribute("aria-label","查看 "+kn[D][1]+"，"+kn[D][2]);const Me=Wt("span","print-mount"),Ue=$===ui?e:c[D].cloneNode();Ue.alt="",Ue.draggable=!1,Ue.className="print-image";const K=Wt("span","print-bloom"),Z=Wt("span","print-copy"),oe=Wt("span","print-number",T0(D)),ne=Wt("span","print-name",kn[D][1]),fe=kn[D][1].toUpperCase();let ue;function Ie(Ve){!_||ro.matches||Ve.pointerType==="touch"||(ue==null||ue.stop(),ue=Uu(0,fe.length,{duration:.28,ease:"easeOut",onUpdate(Pe){ne.textContent=Array.from(fe,(Ae,I)=>Ae===" "||I<Pe?Ae:String.fromCharCode(65+($+I*7+Math.floor(Pe*11))%26)).join("")},onComplete(){ne.textContent=fe}}))}return re.addEventListener("pointerenter",Ie,{signal:n}),re.addEventListener("focus",Ie,{signal:n}),n.addEventListener("abort",()=>ue==null?void 0:ue.stop(),{once:!0}),Me.append(Ue,K,Z,oe,ne),re.append(Me),s.append(re),re.addEventListener("click",Ve=>{!_||m||Ve.detail!==0&&T||(A=re,m=!0,v.open(D))},{signal:n}),{button:re,copy:Z,bloom:K,index:D}});for(const[L,$]of c.entries())$.decode().then(()=>{if(n.aborted)return;const D='url("'+_R($)+'")';y.filter(re=>re.index===L).forEach(re=>{re.bloom.style.backgroundImage=D})}).catch(()=>{});const v=xR(r,(L,$)=>{var Me;if(m=!1,!_)return;if($){(A||i).focus({preventScroll:!0});return}const D=_a(L-_a(f,l)+l/2,l)-l/2;H(Math.round(f+D)),(((Me=A==null?void 0:A.getAttribute("aria-label"))==null?void 0:Me.includes(kn[L][1]))?A:i).focus({preventScroll:!0})},n);function P(){R||(R=requestAnimationFrame(()=>{R=0,N()}))}function N(){const L=u.get(),$=h.get(),D=M*(p<650?.89:.94),re=p<650?.78:.61;for(let Me=0;Me<y.length;Me++){const{button:Ue,copy:K}=y[Me],Z=_a(Me-L+3.6,2*l)-3.6,oe=Math.abs(Z),ne=Me===ui?0:.11+Math.min(oe,6)*.087+(Z>0?.037:0),fe=rr((d-ne)/(.98-ne)),ue=1-Math.pow(1-fe,3),Ie=Me!==ui,Ve=Ie?rr(fe*7.6):g,Pe=rr((Z+3.58)/.4)*rr((10.38-Z)/.7),Ae=Math.sin(Z*1.12+.42),I=Z*D*ue,pt=D*.3*Math.max(0,Z-1.12),Be=(S*(p<650?.036:.132)-Z*D*re+pt+$*Ae*M*.47)*ue,z=-Z*M*.59*ue-(Ie?(1-ue)*32:0),Se=(-32-rr(Z,-2.4,5)*4.8+$*9*Math.cos(Z*.91))*ue,it=($*6*Ae-1.6)*ue;Ue.style.transform="translate3d("+I+"px,"+Be+"px,"+z+"px) rotateY("+Se+"deg) rotateX("+it+"deg)",Ue.style.zIndex=String(Math.round(1e3+z)),Ue.style.opacity=String(Ve*Pe),Ue.style.visibility=Ve*Pe<.003?"hidden":"visible",Ue.style.setProperty("--folio-alpha",String(ue)),K.style.opacity=Ie?String(1-rr((fe-.1)/.43)):0,Ue.tabIndex=_&&Math.abs(Z)<.5?0:-1,Ue.setAttribute("aria-hidden",String(Z<-l/2||Z>=l/2))}}function F(){p=i.clientWidth,S=i.clientHeight,M=Math.min(S*.317,p*(p<650?.46:.27),408),s.style.setProperty("--plane-width",M+"px"),s.style.perspective=Math.max(S*1.21,p*.77)+"px",N()}function H(L){f=L,ro.matches?(u.jump(L),h.jump(0)):u.set(L)}u.on("change",()=>{ro.matches||h.set(rr(u.getVelocity()/4.1,-1,1)),P()}),u.on("animationComplete",()=>h.set(0)),h.on("change",P);const W=new ResizeObserver(F);W.observe(i),F(),i.addEventListener("wheel",L=>{if(!_||m||L.ctrlKey)return;L.preventDefault();const $=L.deltaMode===1?16:L.deltaMode===2?S:1,D=Math.abs(L.deltaX)>Math.abs(L.deltaY)?L.deltaX:L.deltaY;H(f+rr(D*$/Math.max(140,M*1.1),-2.5,2.5))},{passive:!1,signal:n}),i.addEventListener("pointerdown",L=>{!_||m||!L.isPrimary||L.button!==0||(E={id:L.pointerId,x:L.clientX,y:L.clientY,start:f,moved:!1},T=!1)},{signal:n}),i.addEventListener("pointermove",L=>{if(!E||E.id!==L.pointerId)return;const $=L.clientX-E.x,D=L.clientY-E.y;!E.moved&&Math.hypot($,D)<5||(E.moved||(i.setPointerCapture(L.pointerId),i.classList.add("dragging")),E.moved=!0,H(E.start+(-$+D*.56)/Math.max(110,M*.94)))},{signal:n});function V(L){!E||L.pointerId!==E.id||(T=E.moved,E=null,i.hasPointerCapture(L.pointerId)&&i.releasePointerCapture(L.pointerId),i.classList.remove("dragging"))}i.addEventListener("pointerup",V,{signal:n}),i.addEventListener("pointercancel",V,{signal:n}),i.addEventListener("dragstart",L=>L.preventDefault(),{signal:n}),i.addEventListener("keydown",L=>{!_||m||(L.key==="ArrowLeft"||L.key==="ArrowRight"?(L.preventDefault(),i.focus({preventScroll:!0}),H(Math.round(f)+(L.key==="ArrowRight"?1:-1))):L.target===i&&(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),A=i,m=!0,v.open(_a(Math.round(f),l))))},{signal:n});function G(){d=1,_=!0,i.inert=!1,i.classList.add("open"),N(),i.focus({preventScroll:!0})}return{paperSize:()=>({width:M,height:M*840/640}),expose(L){g=L,y[ui].button.style.opacity=String(L),y[ui].button.style.visibility=L>0?"visible":"hidden"},open(){if(g=1,i.classList.add("unfolding"),ro.matches){G();return}x=Uu(0,1,{duration:1.34,ease:"linear",onUpdate(L){d=L,N()},onComplete:G})},closeDetail:v.close,fold(L){x==null||x.stop(),_=!1,i.inert=!0,i.classList.remove("open","unfolding","dragging"),E&&i.hasPointerCapture(E.id)&&i.releasePointerCapture(E.id),E=null;function $(){d=0,f=ui,g=1,u.jump(ui),h.jump(0),N(),L()}if(ro.matches||d===0){$();return}x=Uu(d,0,{duration:.48*d,ease:"easeInOut",onUpdate(D){d=D,N()},onComplete:$})},destroy(){t.abort(),W.disconnect(),x==null||x.stop(),cancelAnimationFrame(R),u.destroy(),h.destroy()}}}const so=r=>Math.max(0,Math.min(1,r)),Fu=r=>{const e=so(r);return e*e*(3-2*e)};function MR(r,e,t,n,i){const s=matchMedia("(prefers-reduced-motion: reduce)"),o=new AbortController,{signal:a}=o;r.inert=!0,e.hidden=!1,e.classList.add("photo-study","behind-cover");const l=document.createElement("div");l.className="photo-night",l.setAttribute("aria-hidden","true"),e.append(l);const c=yR(e,t),u=document.createElement("canvas");u.className="morph-canvas",u.setAttribute("aria-hidden","true");const h=document.createElement("button");h.className="globe-hit",h.type="button",h.disabled=!0,h.setAttribute("aria-label","展开摄影画廊"),e.append(u,h);let f="forming",d,g,_=0,m=0,p=0,S=0,M=0,x=0,A=0,E=0,T=0;function R(){f="globe",h.hidden=!1,h.disabled=!1,h.focus({preventScroll:!0})}function y(N){if(a.aborted||!d||f==="gallery"||f==="folding")return;const F=Math.max(0,N-p);p=N;const H=Math.min(.07,F/1e3),W=s.matches,V=Math.max(0,N-m),G=f==="forming"&&!W?so((V-660)/1560):1;if(f==="opening"&&(S=W?1:so(S+F/1470)),f==="returning"&&(S=W?0:so(S-F/760)),!W){const L=1-Math.exp(-H*5);M+=H*.125*Fu(G)*(1-S),T+=(E*.27-T)*L,x+=(A-x)*L}if(d.draw(G,S,W?0:V/1e3,W?0:M+T,W?0:x),(f==="opening"||f==="returning")&&(l.style.opacity=String(Fu((S-.25)/.62)),c.expose(Fu((S-.735)/.24))),(f==="forming"&&G===1||f==="returning"&&S===0)&&R(),f==="opening"&&S===1){f="gallery",h.hidden=!0,e.classList.add("showing-prints"),c.open();return}!W&&!document.hidden&&(_=requestAnimationFrame(y))}function v(){cancelAnimationFrame(_),p=performance.now(),document.hidden||y(p)}function P(){a.aborted||(f="returning",e.classList.remove("showing-prints"),v())}return h.addEventListener("click",()=>{f==="globe"&&(f="opening",h.disabled=!0,v())},{signal:a}),e.addEventListener("pointermove",N=>{if(f!=="globe"||N.pointerType==="touch")return;const F=h.getBoundingClientRect();E=so((N.clientX-F.left)/F.width)-.5,A=(so((N.clientY-F.top)/F.height)-.5)*.24},{signal:a}),e.addEventListener("pointerleave",()=>{E=0,A=0},{signal:a}),s.addEventListener("change",v,{signal:a}),document.addEventListener("visibilitychange",v,{signal:a}),t.decode().catch(()=>{}).then(()=>{a.aborted||(d=s1(u,t,n,c.paperSize),d.draw(0,0,0,0,0),g=r.animate([{clipPath:"circle(74vmax at 50% 50%)"},{clipPath:"circle(0px at 50% 50%)"}],{duration:s.matches?0:970,easing:"cubic-bezier(.46,.045,.50,1)",fill:"forwards"}),g.onfinish=()=>{r.hidden=!0,g.cancel(),e.classList.remove("behind-cover")},m=performance.now(),v())}),{back(){c.closeDetail()||(f==="gallery"?(f="folding",c.fold(P)):f==="opening"?P():i())},dispose(){o.abort(),cancelAnimationFrame(_),g&&(g.onfinish=null,g.cancel()),c.destroy(),d==null||d.dispose(),e.replaceChildren(),e.classList.remove("photo-study","behind-cover","showing-prints"),e.hidden=!0}}}function SR({setRelief:r,resizeCover:e}){const t=document.querySelector(".logic-button"),n=document.querySelector(".intro-preview"),i=document.querySelector("main"),s=()=>t.getAttribute("aria-pressed")==="true";let o,a;function l(u){r(u),t.setAttribute("aria-pressed",String(u)),t.setAttribute("aria-label",u?"logic，进入粒子摄影画廊":"logic，展开雕塑封面")}function c(){a.dispose(),a=null,i.hidden=!1,i.inert=!1,e(),t.focus({preventScroll:!0})}t.addEventListener("click",()=>{a||(o||(o=vR()),s()?a=MR(i,n,o,t.getBoundingClientRect(),c):l(!0))}),document.addEventListener("contextmenu",u=>{u.button!==2||u.pointerType==="touch"||!a&&!s()||(u.preventDefault(),a?a.back():l(!1))}),window.addEventListener("pagehide",u=>{u.persisted||a==null||a.dispose()})}const Qs=[[-2.14839,1.43007,.55677],[-1.82585,1.43412,.48614],[-1.76523,1.45881,.45494],[-1.30015,1.44835,.34706],[-1.32547,1.56266,.0037],[-1.2312,1.59291,.03263],[-1.31208,1.66802,-64e-5],[-1.19606,1.70369,.03565],[-1.32604,1.75177,-64e-5],[-1.27719,1.78667,-64e-5],[-1.18188,1.81453,.03799],[-1.33302,1.85646,-64e-5],[-1.31208,1.90531,-64e-5],[-1.20193,1.92448,.04461],[-1.31249,1.97221,.04919],[-1.29809,2.03088,-34e-5],[-1.19561,2.03671,.03938],[-1.29796,2.11442,62e-5],[-1.24283,2.15933,.05091],[-1.13241,2.15366,.04506],[-1.2414,2.23174,.00651],[-1.20969,2.28034,.03793],[-1.06112,2.26094,.06208],[-1.16464,2.36414,.00694],[-1.05726,2.35637,.09822],[-.93904,2.31308,.10606],[-1.10433,2.56983,.04762],[-1.05965,2.55563,.07582],[-.86927,2.39393,.11433],[-.9013,2.54445,.06537],[-.84031,2.49338,.13029],[-.68174,2.30003,.13243],[-.74081,2.48554,.07914],[-.67793,2.44192,.08755],[-.54404,2.22438,.13198],[-.50253,2.08583,.13584],[-.43505,2.00953,.1048],[-.3781,1.86987,.14934],[-.35933,1.72756,.09811],[-.3866,1.61546,.10757],[-.40643,1.53616,.12916],[-.35209,1.5119,.10757],[-.16052,1.56334,-68e-5],[.0069,1.56699,.10843],[.13099,1.56496,.12128],[.26162,1.50776,.13466],[.34308,1.39289,.16793],[.40575,1.2929,.1456],[.50948,1.22833,-64e-5],[.34896,1.26323,-64e-5],[.21547,1.27198,.04013],[.12463,1.25325,.07837],[.03469,1.18638,.05853],[-.0624,1.05389,.06486],[-.17907,.93666,.13119],[-.32312,.8181,.14892],[-.41258,.76327,.14674],[-.43741,.71513,.05118],[-.36633,.66482,.27922],[-.30452,.67824,.083],[-.24827,.64827,.11781],[-.20675,.61337,.12461],[-.19987,.54447,.12426],[-.17448,.50948,-64e-5],[-.20621,.52239,.15073],[-.23395,.59176,.14013],[-.25528,.60714,.11372],[-.24427,.54438,-64e-5],[-.20938,.5025,-64e-5],[-.25125,.52344,-64e-5],[-.27619,.58,.10601],[-.29091,.60212,.30574],[-.32516,.61645,.29306],[-.335,.58625,-64e-5],[-.29757,.52751,.30923],[-.335,.55833,-64e-5],[-.34594,.61048,.28025],[-.40972,.63194,.04911],[-.44981,.64746,.23413],[-.4911,.64797,.22632],[-.53036,.70482,44e-5],[-.51077,.76275,.24145],[-.57408,.7791,.20702],[-.62719,.66203,.01433],[-.6483,.50191,.0111],[-.68168,.38257,.03272],[-.70216,.29199,.03814],[-.72916,.25694,.04928],[-.7634,.28454,.05545],[-.77158,.18073,.03952],[-.79967,.14603,.03594],[-.82573,.16653,.05706],[-.83383,.06254,.04318],[-.86818,.04167,.04774],[-.90246,.06248,.05259],[-.91339,-.04844,.08464],[-.94593,-.06905,.10618],[-.97994,-.0276,.11135],[-.93685,-.18737,.05598],[-.88635,-.31406,-64e-5],[-.89332,-.41177,-52e-5],[-.96629,-.32673,.03872],[-1.02594,-.19542,-64e-5],[-1.03292,-.29313,-64e-5],[-1.09573,-.18844,-64e-5],[-1.13063,-.14656,-64e-5],[-1.15854,-.1675,-64e-5],[-1.20042,-.09771,-64e-5],[-1.23531,-.01396,-64e-5],[-1.26299,.08373,.00123],[-1.27545,.17329,.06725],[-1.35183,.14558,.06629],[-1.44245,.06968,.01487],[-1.39422,.20216,.01092],[-1.35153,.2926,.01733],[-1.4352,.20901,.01685],[-1.38743,.34163,.00963],[-1.33003,.43174,.02178],[-1.42681,.35496,.02675],[-1.37355,.46017,.00918],[-1.32505,.53699,.00684],[-1.37325,.52978,.01131],[-1.28367,.66277,.00322],[-1.32314,.62065,.227],[-1.37577,.57891,.24071],[-1.45017,.60656,.00967],[-1.43909,.65167,.27303],[-1.52079,.62087,.00379],[-1.556,.64891,.00164],[-1.53284,.6986,.28119],[-1.65361,.66982,.0021],[-1.63267,.66791,.33264],[-1.70258,.76756,.00135],[-1.78528,.7183,.00711],[-1.76273,.69971,.3593],[-1.84051,.80174,.01019],[-1.90933,.76652,.01488],[-1.95772,.78727,.01685],[-1.91305,.83234,.38154],[-2.04876,.85714,.01453],[-2.07673,.89202,.01409],[-2.13283,.89913,.01247],[-2.14473,.96095,.02195],[-2.17337,.97356,.17578],[-2.26287,1.01655,.02302],[-2.10368,1.01511,.43043],[-2.2565,1.0795,.02037],[-2.28594,1.12903,.01345],[-2.09798,1.12558,.45634],[-2.30065,1.15032,.01012],[-2.39301,1.16511,.00291],[-2.41428,1.19319,.00148],[-2.19891,1.17585,.48074],[-2.09507,1.24374,.4696],[-2.30285,1.31193,56e-5],[-2.39354,1.3468,7e-4],[-2.38653,1.38168,8e-4],[-2.1922,1.30472,.50979],[-2.05451,1.37188,.50334],[-2.24036,1.4517,-85e-5]];function TR(){const e=document.createElement("canvas");e.width=1536,e.height=1536;const t=e.getContext("2d");t.fillStyle="black",t.fillRect(0,0,1536,1536);const n=([c,u])=>[(c+3)/4*1536,(u+1)/4*1536];t.beginPath(),Qs.forEach((c,u)=>{const h=Qs[(u+Qs.length-1)%Qs.length],f=Qs[(u+1)%Qs.length],d=Math.hypot(h[0]-c[0],h[1]-c[1]),g=Math.hypot(f[0]-c[0],f[1]-c[1]),_=Math.min(.009,d*.14,g*.14),m=n([c[0]+(h[0]-c[0])*_/d,c[1]+(h[1]-c[1])*_/d]),p=n([c[0]+(f[0]-c[0])*_/g,c[1]+(f[1]-c[1])*_/g]);u?t.lineTo(...m):t.moveTo(...m),t.quadraticCurveTo(...n(c),...p)}),t.closePath(),t.fillStyle="white",t.fill();const i=t.getImageData(0,0,1536,1536).data,s=new Uint8Array(1536*1536),o=new Float32Array(1536*1536);o.fill(1e4);for(let c=0;c<s.length;c++)s[c]=i[c*4]>127?1:0;for(let c=1;c<1535;c++)for(let u=1;u<1535;u++){const h=c*1536+u;(s[h]!==s[h-1]||s[h]!==s[h+1]||s[h]!==s[h-1536]||s[h]!==s[h+1536])&&(o[h]=0)}for(let c=1;c<1535;c++)for(let u=1;u<1535;u++){const h=c*1536+u;o[h]=Math.min(o[h],o[h-1]+1,o[h-1536]+1,o[h-1536-1]+1.4142,o[h-1536+1]+1.4142)}for(let c=1534;c>0;c--)for(let u=1534;u>0;u--){const h=c*1536+u;o[h]=Math.min(o[h],o[h+1]+1,o[h+1536]+1,o[h+1536-1]+1.4142,o[h+1536+1]+1.4142)}const a=new Uint8Array(1536*1536*4);for(let c=0;c<s.length;c++){const u=o[c]*4/1536*(s[c]?-1:1),h=Math.round(Math.max(0,Math.min(1,.5+u/.5))*255);a[c*4]=h,a[c*4+1]=h,a[c*4+2]=h,a[c*4+3]=255}const l=new jf(a,1536,1536,ti);return l.minFilter=Nn,l.magFilter=Nn,l.needsUpdate=!0,l}const Wm=`
uniform sampler2D birdMask;
float birdDistance(vec2 p) {
  vec2 uv=(p+vec2(3.,1.))/4.;
  if(uv.x<0.||uv.x>1.||uv.y<0.||uv.y>1.)return .25;
  return (texture2D(birdMask,uv).r-.5)*.5;
}
`;function bR(r,e,t){const n=matchMedia("(prefers-reduced-motion: reduce)"),i=new Tc,s=new Yo(-1,1,1,-1,-100,100),o=document.createElement("canvas");o.width=1024,o.height=512;const a=o.getContext("2d"),l=[4,13,34].map(M=>{const x=document.createElement("canvas");return x.width=1024,x.height=512,{canvas:x,blur:M,texture:new By(x)}});function c(){a.clearRect(0,0,1024,512),a.fillStyle="#fff",a.strokeStyle="#fff",a.lineWidth=3,a.textAlign="center",a.textBaseline="middle",a.font="italic 290px Georgia",a.fillText("logic",512,256),a.strokeText("logic",512,256);for(const M of l){const x=M.canvas.getContext("2d");x.filter="none",x.fillStyle="#000",x.fillRect(0,0,1024,512),x.filter=`blur(${M.blur}px)`,x.drawImage(o,0,0),M.texture.needsUpdate=!0}}c(),document.fonts.load("italic 290px Georgia").then(c);const u={fine:{value:l[0].texture},soft:{value:l[1].texture},root:{value:l[2].texture},plaster:{value:new ed().load("/-logic080609.github.io-/plaster.jpg")},resolution:{value:new qe},center:{value:new qe(.5,.5)},textSize:{value:new qe},elapsed:{value:0},progress:{value:0},reduce:{value:!1}},h=`
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
  `,f=new Ii({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:u,vertexShader:`${h}
      varying vec2 uvScreen;
      void main(){
        uvScreen=uv;
        vec3 p=position;
        p.z=heightAt(uv)*.001;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
      }`,fragmentShader:`${h}
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
      }`});i.add(new Un(new Wo(2,2,420,210),f));const d=new qe;let g=null,_=0,m=0,p=0,S=performance.now();return{setExpanded(M){m=M?1:0,g=performance.now(),S=g,e.classList.add("is-carved")},setCarry(M,x){d.set(M,x)},render(){if(g===null)return;const M=e.getBoundingClientRect(),x=r.domElement.clientWidth,A=r.domElement.clientHeight;u.resolution.value.set(x,A),u.center.value.set((M.left+M.width/2)/x,1-(M.top+M.height/2)/A),u.center.value.add(d),u.textSize.value.set(M.width/x,M.width*.5/A),u.elapsed.value=(performance.now()-g)/1e3,u.reduce.value=n.matches;const E=performance.now(),T=Math.min((E-S)/1e3,.1),R=T/2.2;S=E,_=n.matches?m:m>_?Math.min(m,_+R):Math.max(m,_-R);const y=_*_*(3-2*_);u.progress.value=y,p=n.matches?m:m>p?Math.min(m,p+T/3.2):Math.max(m,p-T/2.6),t.revealProgress.value=p*p*(3-2*p),t.revealCenter.value.set(.5,.5);const v=y<=0?-8:y>=1?108:(.15+.7*y)*100,P="linear-gradient(to right, transparent "+(v-7)+"%, black "+(v+7)+"%)",N=e.querySelector(".logic-regular");N.style.maskImage=P,N.style.webkitMaskImage=P;const F=r.autoClear;r.autoClear=!1,r.render(i,s),r.autoClear=F}}}function Xm(r,e){if(e===Rv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===zh||e===Wg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===zh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ER extends Us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new PR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new wR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new WR(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=wa.extractUrlBase(e);o=wa.resolveURL(c,this.path)}else o=wa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ac(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===b0){try{o[ot.KHR_BINARY_GLTF]=new XR(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new rC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new RR;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new qR(s,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new YR;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new KR;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function AR(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wR{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],yn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new rM(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nM(u),c.distance=h;break;case"spot":c=new eM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,sr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class RR{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Dr}extendParams(e,t,n){const i=[];e.color=new Ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],yn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,zt))}return Promise.all(i)}}class CR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class PR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(a,a)}return Promise.all(s)}}class DR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class LR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class IR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],yn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class NR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class UR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(a[0],a[1],a[2],yn),Promise.all(s)}}class FR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class OR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(a[0],a[1],a[2],yn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(s)}}class BR{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class kR{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class zR{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class VR{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class HR{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class GR{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class WR{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==fi.TRIANGLES&&c.mode!==fi.TRIANGLE_STRIP&&c.mode!==fi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new je,m=new k,p=new jr,S=new k(1,1,1),M=new Iy(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&S.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(m,p,S));for(const x in l)if(x==="_COLOR_0"){const A=l[x];M.instanceColor=new Hh(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);It.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const b0="glTF",ua=12,qm={JSON:1313821514,BIN:5130562};class XR{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==b0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ua,s=new DataView(e,ua);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===qm.JSON){const c=new Uint8Array(e,ua+o,a);this.content=n.decode(c)}else if(l===qm.BIN){const c=ua+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=hf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=hf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=xo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,yn,f)})})}}class YR{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KR{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class E0 extends hl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,S=1-m,M=p-f+h;for(let x=0;x!==a;x++){const A=o[_+x+a],E=o[_+x+l]*u,T=o[g+x+a],R=o[g+x]*u;s[x]=S*A+M*E+m*T+p*R}return s}}const jR=new jr;class $R extends E0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return jR.fromArray(s).normalize().toArray(s),s}}const fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ym={9728:Fn,9729:Nn,9984:Ng,9985:ic,9986:pa,9987:cr},Km={33071:Pr,33648:yc,10497:Ro},Ou={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ar={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZR={CUBICSPLINE:void 0,LINEAR:Xa,STEP:Wa},Bu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JR(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mr})),r.DefaultMaterial}function rs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function sr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QR(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function eC(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tC(r){let e;const t=r.extensions&&r.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ku(t.attributes):e=r.indices+":"+ku(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ku(r.targets[n]);return e}function ku(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ff(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const iC=new je;class rC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new ed(this.options.manager):this.textureLoader=new sM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ac(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return rs(s,a,i),sr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(wa.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ou[i.type],a=xo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new an(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ou[i.type],c=xo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(S);M||(_=new c(a,p*d,i.count*d/u),M=new Ry(_,d/u),t.cache.add(S,M)),m=new Kf(M,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new an(_,l,g);if(i.sparse!==void 0){const p=Ou.SCALAR,S=xo[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new S(o[1],M,i.sparse.count*p),E=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new an(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=A.length;T<R;T++){const y=A[T];if(m.setX(y,E[T*l]),l>=2&&m.setY(y,E[T*l+1]),l>=3&&m.setZ(y,E[T*l+2]),l>=4&&m.setW(y,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ym[f.magFilter]||Nn,u.minFilter=Ym[f.minFilter]||cr,u.wrapS=Km[f.wrapS]||Ro,u.wrapT=Km[f.wrapT]||Ro,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Fn&&u.minFilter!==Nn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Kt(_);m.needsUpdate=!0,f(m)}),t.load(wa.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),sr(h,o),h.userData.mimeType=o.mimeType||nC(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new r_,Vi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new i_,Vi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){const h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],yn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Oi);const u=s.alphaMode||Bu.OPAQUE;if(u===Bu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Bu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Dr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new qe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Dr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Dr){const h=s.emissiveFactor;a.emissive=new Ye().setRGB(h[0],h[1],h[2],yn)}return s.emissiveTexture!==void 0&&o!==Dr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,zt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),sr(h,s),t.associations.set(h,{materials:e}),s.extensions&&rs(i,h,s),h})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return jm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=tC(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=jm(new vi,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?JR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const S=c[d];if(m.mode===fi.TRIANGLES||m.mode===fi.TRIANGLE_STRIP||m.mode===fi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Py(_,S):new Un(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===fi.TRIANGLE_STRIP?p.geometry=Xm(p.geometry,Wg):m.mode===fi.TRIANGLE_FAN&&(p.geometry=Xm(p.geometry,zh));else if(m.mode===fi.LINES)p=new Fy(_,S);else if(m.mode===fi.LINE_STRIP)p=new Jf(_,S);else if(m.mode===fi.LINE_LOOP)p=new Oy(_,S);else if(m.mode===fi.POINTS)p=new s_(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&eC(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),sr(p,s),m.extensions&&rs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&rs(i,h[0],s),h[0];const f=new ps;s.extensions&&rs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pn(ty.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),sr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new je;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $f(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let S=0,M=f.length;S<M;S++){const x=f[S],A=d[S],E=g[S],T=_[S],R=m[S];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,A,E,T,R);if(y)for(let v=0;v<y.length;v++)p.push(y[v])}return new Yy(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,iC)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new n_:c.length>1?u=new ps:c.length===1?u=c[0]:u=new It,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),sr(u,s),s.extensions&&rs(n,u,s),s.matrix!==void 0){const h=new je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ps;n.name&&(s.name=i.createUniqueName(n.name)),sr(s,n),n.extensions&&rs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Vi||f instanceof Kt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ar[s.path]===Ar.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ar[s.path]){case Ar.weights:c=Io;break;case Ar.rotation:c=No;break;case Ar.position:case Ar.scale:c=Uo;break;default:switch(n.itemSize){case 1:c=Io;break;case 2:case 3:default:c=Uo;break}break}const u=i.interpolation!==void 0?ZR[i.interpolation]:Xa,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Ar[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ff(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof No?$R:E0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sC(r,e,t){const n=e.attributes,i=new vr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=ff(xo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new k,l=new k;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=ff(xo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Yi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function jm(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=hf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ct.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),sr(r,e),sC(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?QR(r,e.targets,t):r})}const zu=new WeakMap;class oC extends Us{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ac(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,zt,n).catch(n)}decodeDracoFile(e,t,n,i,s=yn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(zu.has(e)){const l=zu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),zu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new vi;e.index&&t.setIndex(new an(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new an(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==zt)return;const n=new Ye;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),ct.toWorkingColorSpace(n,zt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ac(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=aC.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function aC(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let S,M;if(c.useUniqueIDs)M=u[m],S=a.GetAttributeByUniqueId(f,M);else{if(M=a.GetAttributeId(f,o[u[m]]),M===-1)continue;S=a.GetAttribute(f,M)}const x=i(o,a,f,m,p,S);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,_=g*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,m,_,p);const S=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:S,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const lC="/-logic080609.github.io-/assets/draco_decoder-B2VYTIrf.js";function or(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function A0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oo={duration:.5,overwrite:!1,delay:0},bd,xn,Ct,Hi=1e8,_n=1/Hi,df=Math.PI*2,cC=df/4,uC=0,w0=Math.sqrt,hC=Math.cos,fC=Math.sin,ln=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},_r=function(e){return typeof e=="number"},Ed=function(e){return typeof e>"u"},qi=function(e){return typeof e=="object"},Vn=function(e){return e!==!1},Ad=function(){return typeof window<"u"},Wl=function(e){return Ot(e)||ln(e)},R0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,pf=/(?:-?\.?\d|\.)+/gi,C0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,uo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,P0=/[+-]=-?[.\d]+/,D0=/[^,'"\[\]\s]+/gi,dC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,Ni,mf,wd,si={},Dc={},L0,I0=function(e){return(Dc=Ps(e,si))&&Xn},Rd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qa=function(e,t){return!t&&console.warn(e)},N0=function(e,t){return e&&(si[e]=t)&&Dc&&(Dc[e]=t)||si},el=function(){return 0},pC={suppressEvents:!0,isStart:!0,kill:!1},hc={suppressEvents:!0,kill:!1},mC={suppressEvents:!0},Cd={},Vr=[],gf={},U0,Jn={},Hu={},$m=30,fc=[],Pd="",Dd=function(e){var t=e[0],n,i;if(qi(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=fc.length;i--&&!fc[i].targetTest(t););n=fc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new sx(e[i],n)))||e.splice(i,1);return e},ys=function(e){return e._gsap||Dd(mi(e))[0]._gsap},F0=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():Ed(n)&&e.getAttribute&&e.getAttribute(t)||n},Hn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},on=function(e){return Math.round(e*1e7)/1e7||0},vo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gC=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Lc=function(){var e=Vr.length,t=Vr.slice(0),n,i;for(gf={},Vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},O0=function(e,t,n,i){Vr.length&&!xn&&Lc(),e.render(t,n,xn&&t<0&&(e._initted||e._startAt)),Vr.length&&!xn&&Lc()},B0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(D0).length<2?t:ln(e)?e.trim():e},k0=function(e){return e},xi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_C=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ps=function(e,t){for(var n in t)e[n]=t[n];return e},Zm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=qi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ic=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Da=function(e){var t=e.parent||Dt,n=e.keyframes?_C(vn(e.keyframes)):xi;if(Vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xC=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},z0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},qc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_f=function(e,t,n,i){return e._startAt&&(xn?e._startAt.revert(hc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yC=function r(e){return!e||e._ts&&r(e.parent)},Jm=function(e){return e._repeat?Bo(e._tTime,e=e.duration()+e._rDelay)*e:0},Bo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Nc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yc=function(e){return e._end=on(e._start+(e._tDur/Math.abs(e._ts||e._rts||_n)||0))},Kc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=on(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yc(e),n._dirty||Ms(n,e)),e},V0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nc(e.rawTime(),t),(!t._dur||pl(0,t.totalDuration(),n)-t._tTime>_n)&&t.render(n,!0)),Ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Bi=function(e,t,n,i){return t.parent&&qr(t),t._start=on((_r(n)?n:n||e!==Dt?hi(e,n,t):e._time)+t._delay),t._end=on(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),z0(e,t,"_first","_last",e._sort?"_start":0),xf(t)||(e._recent=t),i||V0(e,t),e._ts<0&&Kc(e,e._tTime),e},H0=function(e,t){return(si.ScrollTrigger||Rd("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},G0=function(e,t,n,i,s){if(Id(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&U0!==Qn.frame)return Vr.push(e),e._lazy=[s,i],1},MC=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},SC=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&MC(e)&&!(!e._initted&&xf(e))||(e._ts<0||e._dp._ts<0)&&!xf(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=pl(0,e._tDur,t),u=Bo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Bo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||xn||i||e._zTime===_n||!t&&e._zTime){if(!e._initted&&G0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?_n:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_f(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&qr(e,1),!n&&!xn&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TC=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ko=function(e,t,n,i){var s=e._repeat,o=on(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:on(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Kc(e,e._tTime=e._tDur*a),e.parent&&Yc(e),n||Ms(e.parent,e),e},Qm=function(e){return e instanceof Dn?Ms(e):ko(e,e._dur)},bC={_start:0,endTime:el,totalDuration:el},hi=function r(e,t,n){var i=e.labels,s=e._recent||bC,o=e.duration()>=Hi?s.endTime(!1):e._dur,a,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},La=function(e,t,n){var i=_r(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;o.immediateRender=Vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Yt(t[0],o,t[s+1])},$r=function(e,t){return e||e===0?t(e):t},pl=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!ln(e)||!(t=dC.exec(e))?"":t[1]},EC=function(e,t,n){return $r(n,function(i){return pl(e,t,i)})},vf=[].slice,W0=function(e,t){return e&&qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&qi(e[0]))&&!e.nodeType&&e!==Ni},AC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||W0(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):ln(e)&&!n&&(mf||!zo())?vf.call((t||wd).querySelectorAll(e),0):vn(e)?AC(e,n):W0(e)?vf.call(e,0):e?[e]:[]},yf=function(e){return e=mi(e)[0]||Qa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Qa("Invalid scope")||wd.createElement("div"):e)}},X0=function(e){return e.sort(function(){return .5-Math.random()})},q0=function(e){if(Ot(e))return e;var t=qi(e)?e:{each:e},n=Ss(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return ln(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,S,M,x,A,E,T,R,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Hi])[1],!y){for(T=-1e8;T<(T=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*u-.5:i%y,S=y===Hi?0:l?_*h/y-.5:i/y|0,T=0,R=Hi,E=0;E<_;E++)M=E%y-p,x=S-(E/y|0),m[E]=A=c?Math.abs(c==="y"?x:M):w0(M*M+x*x),A>T&&(T=A),A<R&&(R=A);i==="random"&&X0(m),m.max=T-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=gn(t.amount||t.each)||0,n=n&&_<0?nx(n):n}return _=(m[f]-m.min)/m.max||0,on(m.b+(n?n(_):_)*m.v)+m.u}},Mf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=on(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_r(n)?0:gn(n))}},Y0=function(e,t){var n=vn(e),i,s;return!n&&qi(e)&&(i=n=e.radius||Hi,e.values?(e=mi(e.values),(s=!_r(e[0]))&&(i*=i)):e=Mf(e.increment)),$r(t,n?Ot(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Hi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||_r(o)?u:u+gn(o)}:Mf(e))},K0=function(e,t,n,i){return $r(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},wC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},RC=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},CC=function(e,t,n){return $0(e,t,0,1,n)},j0=function(e,t,n){return $r(n,function(i){return e[~~t(i)]})},PC=function r(e,t,n){var i=t-e;return vn(e)?j0(e,r(0,e.length),t):$r(n,function(s){return(i+(s-e)%i)%i+e})},DC=function r(e,t,n){var i=t-e,s=i*2;return vn(e)?j0(e,r(0,e.length-1),t):$r(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},tl=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?D0:pf),n+=e.substr(t,i-t)+K0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},$0=function(e,t,n,i,s){var o=t-e,a=i-n;return $r(s,function(l){return n+((l-e)/o*a||0)})},LC=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=ln(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Ps(vn(e)?[]:{},e));if(!u){for(l in t)Ld.call(a,e,l,"get",t[l]);s=function(g){return Fd(g,a)||(o?e.p:e)}}}return $r(n,s)},eg=function(e,t,n){var i=e.labels,s=Hi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ii=function(e,t,n){var i=e.vars,s=i[t],o=Ct,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vr.length&&Lc(),a&&(Ct=a),u=l?s.apply(c,l):s.call(c),Ct=o,u},xa=function(e){return qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&ii(e,"onInterrupt"),e},ho,Z0=[],J0=function(e){if(e)if(e=!e.name&&e.default||e,Ad()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:el,render:Fd,add:Ld,kill:KC,modifier:YC,rawVars:0},o={targetTest:0,get:0,getSetter:Ud,aliases:{},register:0};if(zo(),e!==i){if(Jn[t])return;xi(i,xi(Ic(e,s),o)),Ps(i.prototype,Ps(s,Ic(e,o))),Jn[i.prop=t]=i,e.targetTest&&(fc.push(i),Cd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}N0(t,i),e.register&&e.register(Xn,i,Gn)}else Z0.push(e)},bt=255,va={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Gu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Q0=function(e,t,n){var i=e?_r(e)?[e>>16,e>>8&bt,e&bt]:0:va.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),va[e])i=va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(pf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Gu(l+1/3,s,o),i[1]=Gu(l,s,o),i[2]=Gu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(C0),n&&i.length<4&&(i[3]=1),i}else i=e.match(pf)||va.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/bt,o=i[1]/bt,a=i[2]/bt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ex=function(e){var t=[],n=[],i=-1;return e.split(Hr).forEach(function(s){var o=s.match(uo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},tg=function(e,t,n){var i="",s=(e+i).match(Hr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Q0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ex(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Hr,"1").split(uo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Hr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Hr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in va)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),IC=/hsl[a]?\(/,tx=function(e){var t=e.join(" "),n;if(Hr.lastIndex=0,Hr.test(t))return n=IC.test(t),e[1]=tg(e[1],n),e[0]=tg(e[0],n,ex(e[1])),!0},nl,Qn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,S=m===!0,M,x,A,E;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,M=A-o,(M>0||S)&&(E=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=M+(M>=s?4:s-M),x=1),S||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](A,f,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){L0&&(!mf&&Ad()&&(Ni=mf=window,wd=Ni.document||{},si.gsap=Xn,(Ni.gsapVersions||(Ni.gsapVersions=[])).push(Xn.version),I0(Dc||Ni.GreenSockGlobals||!Ni.gsap&&Ni||{}),Z0.forEach(J0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},nl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),nl=0,c=el},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,S){var M=p?function(x,A,E,T){m(x,A,E,T),h.remove(M)}:m;return h.remove(m),a[S?"unshift":"push"](M),zo(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),zo=function(){return!nl&&Qn.wake()},ut={},NC=/^[\d.\-M][\d.\-,\s]/,UC=/["']/g,FC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(UC,"").trim():+c,i=l.substr(a+1).trim();return t},OC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},BC=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[FC(t[1])]:OC(e).split(",").map(B0)):ut._CE&&NC.test(e)?ut._CE("",e):n},nx=function(e){return function(t){return 1-e(1-t)}},ix=function r(e,t){for(var n=e._first,i;n;)n instanceof Dn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ss=function(e,t){return e&&(Ot(e)?e:ut[e]||BC(e))||t},Fs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Hn(e,function(a){ut[a]=si[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},rx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/df*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*fC((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:rx(a);return s=df/s,l.config=function(c,u){return r(e,c,u)},l},Xu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:rx(n);return i.config=function(s){return r(e,s)},i};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Fs("Elastic",Wu("in"),Wu("out"),Wu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Fs("Circ",function(r){return-(w0(1-r*r)-1)});Fs("Sine",function(r){return r===1?1:-hC(r*cC)+1});Fs("Back",Xu("in"),Xu("out"),Xu());ut.SteppedEase=ut.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-_n;return function(a){return((i*pl(0,o,a)|0)+s)*n}}};Oo.ease=ut["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Pd+=r+","+r+"Params,"});var sx=function(e,t){this.id=uC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:F0,this.set=t?t.getSetter:Ud},il=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ko(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),nl||Qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ko(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(zo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Kc(this,n),!s._dp||s.parent||V0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),O0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Bo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(pl(-Math.abs(this._delay),this._tDur,s),i!==!1),Yc(this),vC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_n&&(this._tTime-=_n)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mC);var i=xn;return xn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(hi(this,n),Vn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_n)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ot(n)?n:k0,a=function(){var c=i.then;i.then=null,Ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){xa(this)},r}();xi(il.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Dn=function(r){A0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Vn(n.sortChildren),Dt&&Bi(n.parent||Dt,or(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&H0(or(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return La(0,arguments,this),this},t.from=function(i,s,o){return La(1,arguments,this),this},t.fromTo=function(i,s,o,a){return La(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(i,s,hi(this,o),1),this},t.call=function(i,s,o){return Bi(this,Yt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Yt(i,o,hi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Da(o).immediateRender=Vn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Da(a).immediateRender=Vn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:on(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,M,x,A,E,T;if(this!==Dt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,M=this._ts,p=!M,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=on(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),A=Bo(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),E&&_&1&&(f=c-f,T=1),_!==A&&!this._lock){var R=E&&A&1,y=R===(E&&_&1);if(_<A&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:on(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ix(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=TC(this,on(a),on(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(ii(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var v=i<0?i:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||xn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=v?-1e-8:_n);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=x,Yc(this),this.render(i,s,o);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ii(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(_r(s)||(s=hi(this,s,i)),!(i instanceof il)){if(vn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ln(i))return this.addLabel(i,s);if(Ot(i))i=Yt.delayedCall(0,i);else return this}return this!==i?Bi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Yt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return ln(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(qc(this,i),i===this._recent&&(this._recent=this._last),Ms(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=on(Qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=hi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Yt.delayedCall(0,s||el,o);return a.data="isPause",this._hasPause=1,Bi(this,a,hi(this,i))},t.removePause=function(i){var s=this._first;for(i=hi(this,i);s;)s._start===i&&s.data==="isPause"&&qr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Nr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=mi(i),l=this._first,c=_r(s),u;l;)l instanceof Yt?gC(l._targets,a)&&(c?(!Nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=hi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Yt.to(o,xi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||_n,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ko(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,xi({startAt:{time:hi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),eg(this,hi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),eg(this,hi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_n)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ms(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ms(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Hi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ko(o,o===Dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Dt._ts&&(O0(Dt,Nc(i,Dt)),U0=Qn.frame),Qn.frame>=$m){$m+=ri.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&ri.autoSleep&&Qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qn.sleep()}}},e}(il);xi(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var kC=function(e,t,n,i,s,o,a){var l=new Gn(this._pt,e,t,0,1,hx,null,s),c=0,u=0,h,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=tl(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(Vu)||[];h=Vu.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?vo(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Vu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(P0.test(i)||p)&&(l.e=0),this._pt=l,l},Ld=function(e,t,n,i,s,o,a,l,c,u){Ot(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ot(h)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ot(h)?c?WC:cx:Nd,g;if(ln(i)&&(~i.indexOf("random(")&&(i=tl(i)),i.charAt(1)==="="&&(g=vo(f,i)+(gn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Sf)return!isNaN(f*i)&&i!==""?(g=new Gn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?qC:ux,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Rd(t,i),kC.call(this,e,t,f,i,d,l||ri.stringFilter,c))},zC=function(e,t,n,i,s){if(Ot(e)&&(e=Ia(e,s,t,n,i)),!qi(e)||e.style&&e.nodeType||vn(e)||R0(e))return ln(e)?Ia(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ia(e[a],s,t,n,i);return o},ox=function(e,t,n,i,s,o){var a,l,c,u;if(Jn[e]&&(a=new Jn[e]).init(s,a.rawVars?t[e]:zC(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Gn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ho))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Nr,Sf,Id=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!bd,x=e.timeline,A,E,T,R,y,v,P,N,F,H,W,V,G;if(x&&(!f||!s)&&(s="none"),e._ease=Ss(s,Oo.ease),e._yEase=h?nx(Ss(h===!0?s:h,Oo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(N=m[0]?ys(m[0]).harness:0,V=N&&i[N.prop],A=Ic(i,Cd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?hc:pC),_._lazy=0),o){if(qr(e._startAt=Yt.set(m,xi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!d)&&e._startAt.revert(hc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=xi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Vn(l),immediateRender:a,stagger:0,parent:p},A),V&&(T[N.prop]=V),qr(e._startAt=Yt.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(hc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,_n,_n);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Vn(l)||l&&!g,E=0;E<m.length;E++){if(y=m[E],P=y._gsap||Dd(m)[E]._gsap,e._ptLookup[E]=H={},gf[P.id]&&Vr.length&&Lc(),W=S===m?E:S.indexOf(y),N&&(F=new N).init(y,V||A,e,W,S)!==!1&&(e._pt=R=new Gn(e._pt,y,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(L){H[L]=R}),F.priority&&(v=1)),!N||V)for(T in A)Jn[T]&&(F=ox(T,A,e,W,y,S))?F.priority&&(v=1):H[T]=R=Ld.call(e,y,T,"get",A[T],W,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),M&&e._pt&&(Nr=e,Dt.killTweensOf(y,H,e.globalTime(t)),G=!e.parent,Nr=0),e._pt&&l&&(gf[P.id]=1)}v&&fx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&x.render(Hi,!0,!0)},VC=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sf=1,e.vars[t]="+=0",Id(e,a),Sf=0,l?Qa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=kt(n)+gn(h.e)),h.b&&(h.b=u.s+gn(h.b))},HC=function(e,t){var n=e[0]?ys(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ps({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},GC=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(vn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ia=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?tl(e):e},ax=Pd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lx={};Hn(ax+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return lx[r]=1});var Yt=function(r){A0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Da(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Dt,M=(vn(n)||R0(n)?_r(n[0]):"length"in i)?[n]:mi(n),x,A,E,T,R,y,v,P;if(a._targets=M.length?Dd(M):Qa("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Wl(c)||Wl(u)){if(i=a.vars,x=a.timeline=new Dn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:M}),x.kill(),x.parent=x._dp=or(a),x._start=0,f||Wl(c)||Wl(u)){if(T=M.length,v=f&&q0(f),qi(f))for(R in f)~ax.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(A=0;A<T;A++)E=Ic(i,lx),E.stagger=0,p&&(E.yoyoEase=p),P&&Ps(E,P),y=M[A],E.duration=+Ia(c,or(a),A,y,M),E.delay=(+Ia(u,or(a),A,y,M)||0)-a._delay,!f&&T===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),x.to(y,E,v?v(A,y,M):0),x._ease=ut.none;x.duration()?c=u=0:a.timeline=0}else if(g){Da(xi(x.vars.defaults,{ease:"none"})),x._ease=Ss(g.ease||i.ease||"none");var N=0,F,H,W;if(vn(g))g.forEach(function(V){return x.to(M,V,">")}),x.duration();else{E={};for(R in g)R==="ease"||R==="easeEach"||GC(R,g[R],E,g.easeEach);for(R in E)for(F=E[R].sort(function(V,G){return V.t-G.t}),N=0,A=0;A<F.length;A++)H=F[A],W={ease:H.e,duration:(H.t-(A?F[A-1].t:0))/100*c},W[R]=H.v,x.to(M,W,N),N+=W.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!bd&&(Nr=or(a),Dt.killTweensOf(M),Nr=0),Bi(S,or(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===on(S._time)&&Vn(h)&&yC(or(a))&&S.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&H0(or(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-_n&&!u?l:i<_n?0:i,f,d,g,_,m,p,S,M,x;if(!c)SC(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=on(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===on(h/_)&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,f=c-f),m=Bo(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(M&&this._yEase&&ix(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(on(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(G0(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!s&&!g&&(ii(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_f(this,i,s,o),ii(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&_f(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(ii(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){nl||Qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Id(this,c),u=this._ease(c/this._dur),VC(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Kc(this,0),this.parent||z0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Nr&&Nr.vars.overwrite!==!0)._first||xa(this),this.parent&&o!==this.timeline.totalDuration()&&ko(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?mi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&xC(a,l))return s==="all"&&(this._pt=0),xa(this);for(h=this._op=this._op||[],s!=="all"&&(ln(s)&&(_={},Hn(s,function(S){return _[S]=1}),s=_),s=HC(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&qc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&xa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return La(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return La(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Dt.killTweensOf(i,s,o)},e}(il);xi(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(r){Yt[r]=function(){var e=new Dn,t=vf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Nd=function(e,t,n){return e[t]=n},cx=function(e,t,n){return e[t](n)},WC=function(e,t,n,i){return e[t](i.fp,n)},XC=function(e,t,n){return e.setAttribute(t,n)},Ud=function(e,t){return Ot(e[t])?cx:Ed(e[t])&&e.setAttribute?XC:Nd},ux=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hx=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Fd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},YC=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},KC=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?qc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},jC=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},fx=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Gn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ux,this.d=l||this,this.set=c||Nd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=jC,this.m=n,this.mt=s,this.tween=i},r}();Hn(Pd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Cd[r]=1});si.TweenMax=si.TweenLite=Yt;si.TimelineLite=si.TimelineMax=Dn;Dt=new Dn({sortChildren:!1,defaults:Oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=tx;var Ts=[],dc={},$C=[],ng=0,ZC=0,qu=function(e){return(dc[e]||$C).map(function(t){return t()})},Tf=function(){var e=Date.now(),t=[];e-ng>2&&(qu("matchMediaInit"),Ts.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ni.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),qu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ng=e,qu("matchMedia"))},dx=function(){function r(t,n){this.selector=n&&yf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZC++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var o=this,a=function(){var c=Ct,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=yf(s)),Ct=o,h=i.apply(o,arguments),Ot(h)&&o._r.push(h),Ct=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ot?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ts.length;o--;)Ts[o].id===this.id&&Ts.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),JC=function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){qi(n)||(n={matches:n});var o=new dx(0,s||this.scope),a=o.conditions={},l,c,u;Ct&&!o.selector&&(o.selector=Ct.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ni.matchMedia(n[c]),l&&(Ts.indexOf(o)<0&&Ts.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Tf):l.addEventListener("change",Tf)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Uc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return J0(i)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=mi(e)[0]);var s=ys(e||{}).get,o=n?k0:B0;return n==="native"&&(n=""),e&&(t?o((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Jn[t],a=ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ho._pt=0,h.init(e,n?u+n:u,ho,0,[e]),h.render(1,h),ho._pt&&Fd(1,ho)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Xn.to(e,Ps((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,Oo.ease)),Zm(Oo,e||{})},config:function(e){return Zm(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!si[a]&&Qa(t+" effect requires "+a+" plugin.")}),Hu[t]=function(a,l,c){return n(mi(a),xi(l||{},s),c)},o&&(Dn.prototype[t]=function(a,l,c){return this.add(Hu[t](a,qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):ut},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dn(e),i,s;for(n.smoothChildTiming=Vn(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Yt&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=s;return Bi(Dt,n,0),n},context:function(e,t){return e?new dx(e,t):Ct},matchMedia:function(e){return new JC(e)},matchMediaRefresh:function(){return Ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Tf()},addEventListener:function(e,t){var n=dc[e]||(dc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=dc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:PC,wrapYoyo:DC,distribute:q0,random:K0,snap:Y0,normalize:CC,getUnit:gn,clamp:EC,splitColor:Q0,toArray:mi,selector:yf,mapRange:$0,pipe:wC,unitize:RC,interpolate:LC,shuffle:X0},install:I0,effects:Hu,ticker:Qn,updateRoot:Dn.updateRoot,plugins:Jn,globalTimeline:Dt,core:{PropTween:Gn,globals:N0,Tween:Yt,Timeline:Dn,Animation:il,getCache:ys,_removeLinkedListItem:qc,reverting:function(){return xn},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return bd=e}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Uc[r]=Yt[r]});Qn.add(Dn.updateRoot);ho=Uc.to({},{duration:0});var QC=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},e2=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=QC(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Yu=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Hn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}e2(a,s)}}}},Xn=Uc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)xn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Yu("roundProps",Mf),Yu("modifiers"),Yu("snap",Y0))||Uc;Yt.version=Dn.version=Xn.version="3.12.5";L0=1;Ad()&&zo();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ig,Ur,yo,Od,_s,rg,Bd,t2=function(){return typeof window<"u"},xr={},cs=180/Math.PI,Mo=Math.PI/180,eo=Math.atan2,sg=1e8,kd=/([A-Z])/g,n2=/(left|right|width|margin|padding|x)/i,i2=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},r2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},s2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},o2=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},px=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},a2=function(e,t,n){return e.style[t]=n},l2=function(e,t,n){return e.style.setProperty(t,n)},c2=function(e,t,n){return e._gsap[t]=n},u2=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},h2=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},f2=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Lt="transform",Wn=Lt+"Origin",d2=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in xr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ar(i,a)}):this.tfm[e]=o.x?o[e]:ar(i,e),e===Wn&&(this.tfm.zOrigin=o.zOrigin);else return ki.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Lt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},gx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},p2=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(kd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bd(),(!s||!s.isStart)&&!n[Lt]&&(gx(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_x=function(e,t){var n={target:e,props:[],revert:p2,save:d2};return e._gsap||Xn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},xx,Ef=function(e,t){var n=Ur.createElementNS?Ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ur.createElement(e);return n&&n.style?n:Ur.createElement(e)},Gi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(kd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Vo(t)||t,1)||""},og="O,Moz,ms,Ms,Webkit".split(","),Vo=function(e,t,n){var i=t||_s,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(og[o]+e in s););return o<0?null:(o===3?"ms":o>=0?og[o]:"")+e},Af=function(){t2()&&window.document&&(ig=window,Ur=ig.document,yo=Ur.documentElement,_s=Ef("div")||{style:{}},Ef("div"),Lt=Vo(Lt),Wn=Lt+"Origin",_s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xx=!!Vo("perspective"),Bd=Xn.core.reverting,Od=1)},Ku=function r(e){var t=Ef("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(yo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),yo.removeChild(t),this.style.cssText=s,o},ag=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},vx=function(e){var t;try{t=e.getBBox()}catch{t=Ku.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ku||(t=Ku.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ag(e,["x","cx","x1"])||0,y:+ag(e,["y","cy","y1"])||0,width:0,height:0}:t},yx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vx(e))},Ds=function(e,t){if(t){var n=e.style,i;t in xr&&t!==Wn&&(t=Lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(kd,"-$1").toLowerCase())):n.removeAttribute(t)}},Fr=function(e,t,n,i,s,o){var a=new Gn(e._pt,t,n,0,1,o?mx:px);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},lg={deg:1,rad:1,turn:1},m2={grid:1,flex:1},Yr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=_s.style,l=n2.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||lg[i]||lg[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&yx(e),(d||o==="%")&&(xr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],kt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ur||!_.appendChild)&&(_=Ur.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Qn.time&&!m.uncache)return kt(s/m.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:Ds(e,t)}else(d||o==="%")&&!m2[Gi(_,"display")]&&(a.position=Gi(e,"position")),_===e&&(a.position="static"),_.appendChild(_s),g=_s[u],_.removeChild(_s),a.position="absolute";return l&&d&&(m=ys(_),m.time=Qn.time,m.width=_[u]),kt(f?g*s/h:g&&s?h/g*s:0)},ar=function(e,t,n,i){var s;return Od||Af(),t in ki&&t!=="transform"&&(t=ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),xr[t]&&t!=="transform"?(s=sl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Oc(Gi(e,Wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Fc[t]&&Fc[t](e,t,n)||Gi(e,t)||F0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Yr(e,t,s,n)+n:s},g2=function(e,t,n,i){if(!n||n==="none"){var s=Vo(t,e,1),o=s&&Gi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Gi(e,"borderTopColor"))}var a=new Gn(this._pt,e.style,t,0,1,hx),l=0,c=0,u,h,f,d,g,_,m,p,S,M,x,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Gi(e,t)||i,_?e.style[t]=_:Ds(e,t)),u=[n,i],tx(u),n=u[0],i=u[1],f=n.match(uo)||[],A=i.match(uo)||[],A.length){for(;h=uo.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=vo(d,m)+x),p=parseFloat(m),M=m.substr((p+"").length),l=uo.lastIndex-M.length,M||(M=M||ri.units[t]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(d=Yr(e,t,_,M)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?mx:px;return P0.test(i)&&(a.e=0),this._pt=a,a},cg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_2=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cg[n]||n,t[1]=cg[i]||i,t.join(" ")},x2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],xr[a]&&(l=1,a=a==="transformOrigin"?Wn:Lt),Ds(n,a);l&&(Ds(n,Lt),o&&(o.svg&&n.removeAttribute("transform"),sl(n,1),o.uncache=1,gx(i)))}},Fc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Gn(e._pt,t,n,0,0,x2);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},rl=[1,0,0,1,0,0],Mx={},Sx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ug=function(e){var t=Gi(e,Lt);return Sx(t)?rl:t.substr(7).match(C0).map(kt)},zd=function(e,t){var n=e._gsap||ys(e),i=e.style,s=ug(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?rl:s):(s===rl&&!e.offsetParent&&e!==yo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,yo.appendChild(e)),s=ug(e),l?i.display=l:Ds(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):yo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wf=function(e,t,n,i,s,o){var a=e._gsap,l=s||zd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],M=t.split(" "),x=parseFloat(M[0])||0,A=parseFloat(M[1])||0,E,T,R,y;n?l!==rl&&(T=d*m-g*_)&&(R=x*(m/T)+A*(-_/T)+(_*S-m*p)/T,y=x*(-g/T)+A*(d/T)-(d*S-g*p)/T,x=R,A=y):(E=vx(e),x=E.x+(~M[0].indexOf("%")?x/100*E.width:x),A=E.y+(~(M[1]||M[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(p=x-c,S=A-u,a.xOffset=h+(p*d+S*_)-p,a.yOffset=f+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Wn]="0px 0px",o&&(Fr(o,a,"xOrigin",c,x),Fr(o,a,"yOrigin",u,A),Fr(o,a,"xOffset",h,a.xOffset),Fr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+A)},sl=function(e,t){var n=e._gsap||new sx(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Gi(e,Wn)||"0",u,h,f,d,g,_,m,p,S,M,x,A,E,T,R,y,v,P,N,F,H,W,V,G,L,$,D,re,Me,Ue,K,Z;return u=h=f=_=m=p=S=M=x=0,d=g=1,n.svg=!!(e.getCTM&&yx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),i.scale=i.rotate=i.translate="none"),T=zd(e,n.svg),n.svg&&(n.uncache?(L=e.getBBox(),c=n.xOrigin-L.x+"px "+(n.yOrigin-L.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),wf(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,E=n.yOrigin||0,T!==rl&&(P=T[0],N=T[1],F=T[2],H=T[3],u=W=T[4],h=V=T[5],T.length===6?(d=Math.sqrt(P*P+N*N),g=Math.sqrt(H*H+F*F),_=P||N?eo(N,P)*cs:0,S=F||H?eo(F,H)*cs+_:0,S&&(g*=Math.abs(Math.cos(S*Mo))),n.svg&&(u-=A-(A*P+E*F),h-=E-(A*N+E*H))):(Z=T[6],Ue=T[7],D=T[8],re=T[9],Me=T[10],K=T[11],u=T[12],h=T[13],f=T[14],R=eo(Z,Me),m=R*cs,R&&(y=Math.cos(-R),v=Math.sin(-R),G=W*y+D*v,L=V*y+re*v,$=Z*y+Me*v,D=W*-v+D*y,re=V*-v+re*y,Me=Z*-v+Me*y,K=Ue*-v+K*y,W=G,V=L,Z=$),R=eo(-F,Me),p=R*cs,R&&(y=Math.cos(-R),v=Math.sin(-R),G=P*y-D*v,L=N*y-re*v,$=F*y-Me*v,K=H*v+K*y,P=G,N=L,F=$),R=eo(N,P),_=R*cs,R&&(y=Math.cos(R),v=Math.sin(R),G=P*y+N*v,L=W*y+V*v,N=N*y-P*v,V=V*y-W*v,P=G,W=L),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=kt(Math.sqrt(P*P+N*N+F*F)),g=kt(Math.sqrt(V*V+Z*Z)),R=eo(W,V),S=Math.abs(R)>2e-4?R*cs:0,x=K?1/(K<0?-K:K):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sx(Gi(e,Lt)),G&&e.setAttribute("transform",G))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=kt(d),n.scaleY=kt(g),n.rotation=kt(_)+a,n.rotationX=kt(m)+a,n.rotationY=kt(p)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Wn]=Oc(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?y2:xx?Tx:v2,n.uncache=0,n},Oc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ju=function(e,t,n){var i=gn(t);return kt(parseFloat(t)+parseFloat(Yr(e,"x",n+"px",i)))+i},v2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tx(e,t)},ss="0deg",ha="0px",os=") ",Tx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,M=n.zOrigin,x="",A=p==="auto"&&e&&e!==1||p===!0;if(M&&(h!==ss||u!==ss)){var E=parseFloat(u)*Mo,T=Math.sin(E),R=Math.cos(E),y;E=parseFloat(h)*Mo,y=Math.cos(E),o=ju(S,o,T*y*-M),a=ju(S,a,-Math.sin(E)*-M),l=ju(S,l,R*y*-M+M)}m!==ha&&(x+="perspective("+m+os),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(A||o!==ha||a!==ha||l!==ha)&&(x+=l!==ha||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+os),c!==ss&&(x+="rotate("+c+os),u!==ss&&(x+="rotateY("+u+os),h!==ss&&(x+="rotateX("+h+os),(f!==ss||d!==ss)&&(x+="skew("+f+", "+d+os),(g!==1||_!==1)&&(x+="scale("+g+", "+_+os),S.style[Lt]=x||"translate(0, 0)"},y2=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,M=parseFloat(o),x=parseFloat(a),A,E,T,R,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Mo,c*=Mo,A=Math.cos(l)*h,E=Math.sin(l)*h,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=Mo,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,R*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,E*=y)),A=kt(A),E=kt(E),T=kt(T),R=kt(R)):(A=h,R=f,E=T=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=Yr(d,"x",o,"px"),x=Yr(d,"y",a,"px")),(g||_||m||p)&&(M=kt(M+g-(g*A+_*T)+m),x=kt(x+_-(g*E+_*R)+p)),(i||s)&&(y=d.getBBox(),M=kt(M+i/100*y.width),x=kt(x+s/100*y.height)),y="matrix("+A+","+E+","+T+","+R+","+M+","+x+")",d.setAttribute("transform",y),S&&(d.style[Lt]=y)},M2=function(e,t,n,i,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?cs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*sg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*sg)%o-~~(c/o)*o)),e._pt=f=new Gn(e._pt,t,n,i,c,r2),f.e=u,f.u="deg",e._props.push(n),f},hg=function(e,t){for(var n in t)e[n]=t[n];return e},S2=function(e,t,n){var i=hg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Lt]=t,a=sl(n,1),Ds(n,Lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Lt],o[Lt]=t,a=sl(n,1),o[Lt]=c);for(l in xr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=gn(c),g=gn(u),h=d!==g?Yr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Gn(e._pt,a,l,h,f-h,bf),e._pt.u=g||0,e._props.push(l));hg(a,i)};Hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Fc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return ar(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var bx={name:"css",register:Af,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,S,M,x,A,E,T,R;Od||Af(),this.styles=this.styles||_x(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Jn[_]&&ox(_,t,n,i,e,s)))){if(d=typeof u,g=Fc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=tl(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Hr.lastIndex=0,Hr.test(c)||(m=gn(c),p=gn(u)),p?m!==p&&(c=Yr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],ln(c)&&~c.indexOf("random(")&&(c=tl(c)),gn(c+"")||c==="auto"||(c+=ri.units[_]||gn(ar(e,_))||""),(c+"").charAt(1)==="="&&(c=ar(e,_))):c=ar(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in ki&&(_==="autoAlpha"&&(f===1&&ar(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),Fr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in xr,M){if(this.styles.save(_),x||(A=e._gsap,A.renderTransform&&!t.parseTransform||sl(e,t.parseTransform),E=t.smoothOrigin!==!1&&A.smooth,x=this._pt=new Gn(this._pt,a,Lt,0,1,A.renderTransform,A,0,-1),x.dep=1),_==="scale")this._pt=new Gn(this._pt,A,"scaleY",A.scaleY,(S?vo(A.scaleY,S+h):h)-A.scaleY||0,bf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Wn,0,a[Wn]),u=_2(u),A.svg?wf(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&Fr(this,A,"zOrigin",A.zOrigin,p),Fr(this,a,_,Oc(c),Oc(u)));continue}else if(_==="svgOrigin"){wf(e,u,1,E,0,this);continue}else if(_ in Mx){M2(this,A,_,f,S?vo(f,S+u):u);continue}else if(_==="smoothOrigin"){Fr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){S2(this,u,e);continue}}else _ in a||(_=Vo(_)||_);if(M||(h||h===0)&&(f||f===0)&&!i2.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=gn(u)||(_ in ri.units?ri.units[_]:m),m!==p&&(f=Yr(e,_,c,p)),this._pt=new Gn(this._pt,M?A:a,_,f,(S?vo(f,S+h):h)-f,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?o2:bf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=s2);else if(_ in a)g2.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Rd(_,u);continue}M||(_ in a?R.push(_,0,a[_]):R.push(_,1,c||e[_])),o.push(_)}}T&&fx(this)},render:function(e,t){if(t.tween._time||!Bd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ar,aliases:ki,getSetter:function(e,t,n){var i=ki[t];return i&&i.indexOf(",")<0&&(t=i),t in xr&&t!==Wn&&(e._gsap.x||ar(e,"x"))?n&&rg===n?t==="scale"?u2:c2:(rg=n||{})&&(t==="scale"?h2:f2):e.style&&!Ed(e.style[t])?a2:~t.indexOf("-")?l2:Ud(e,t)},core:{_removeProperty:Ds,_getMatrix:zd}};Xn.utils.checkPrefix=Vo;Xn.core.getStyleSaver=_x;(function(r,e,t,n){var i=Hn(r+","+e+","+t,function(s){xr[s]=1});Hn(e,function(s){ri.units[s]="deg",Mx[s]=1}),ki[i[13]]=r+","+e,Hn(n,function(s){var o=s.split(":");ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});Xn.registerPlugin(bx);var Vd=Xn.registerPlugin(bx)||Xn;Vd.core.Tween;function T2(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function b2(r,e,t){return T2(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hn,pc,ei,Or,Br,So,Ex,us,Na,Ax,hr,bi,wx,Rx=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},Cx=1,fo=[],rt=[],Wi=[],Ua=Date.now,Rf=function(e,t){return t},E2=function(){var e=Na.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Wi),rt=n,Wi=i,Rf=function(o,a){return t[o](a)}},Gr=function(e,t){return~Wi.indexOf(e)&&Wi[Wi.indexOf(e)+1][t]},Fa=function(e){return!!~Ax.indexOf(e)},En=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Xl="scrollLeft",ql="scrollTop",Cf=function(){return hr&&hr.isPressed||rt.cache++},Bc=function(e,t){var n=function i(s){if(s||s===0){Cx&&(ei.history.scrollRestoration="manual");var o=hr&&hr.isPressed;s=i.v=Math.round(s)||(hr&&hr.iOS?1:0),e(s),i.cacheID=rt.cache,o&&Rf("ss",s)}else(t||rt.cache!==i.cacheID||Rf("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Ln={s:Xl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bc(function(r){return arguments.length?ei.scrollTo(r,Qt.sc()):ei.pageXOffset||Or[Xl]||Br[Xl]||So[Xl]||0})},Qt={s:ql,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ln,sc:Bc(function(r){return arguments.length?ei.scrollTo(Ln.sc(),r):ei.pageYOffset||Or[ql]||Br[ql]||So[ql]||0})},Bn=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Kr=function(e,t){var n=t.s,i=t.sc;Fa(e)&&(e=Or.scrollingElement||Br);var s=rt.indexOf(e),o=i===Qt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||En(e,"scroll",Cf);var a=rt[s+o],l=a||(rt[s+o]=Bc(Gr(e,n),!0)||(Fa(e)?i:Bc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},Pf=function(e,t,n){var i=e,s=e,o=Ua(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Ua();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=Ua();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},fa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Px=function(){Na=hn.core.globals().ScrollTrigger,Na&&Na.core&&E2()},Dx=function(e){return hn=e||Rx(),!pc&&hn&&typeof document<"u"&&document.body&&(ei=window,Or=document,Br=Or.documentElement,So=Or.body,Ax=[ei,Or,Br,So],hn.utils.clamp,wx=hn.core.context||function(){},us="onpointerenter"in So?"pointer":"mouse",Ex=Vt.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,bi=Vt.eventTypes=("ontouchstart"in Br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cx=0},500),Px(),pc=1),pc};Ln.op=Qt;rt.cache=0;var Vt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){pc||Dx(hn)||console.warn("Please gsap.registerPlugin(Observer)"),Na||Px();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,M=n.onPress,x=n.onRelease,A=n.onRight,E=n.onLeft,T=n.onUp,R=n.onDown,y=n.onChangeX,v=n.onChangeY,P=n.onChange,N=n.onToggleX,F=n.onToggleY,H=n.onHover,W=n.onHoverEnd,V=n.onMove,G=n.ignoreCheck,L=n.isNormalizer,$=n.onGestureStart,D=n.onGestureEnd,re=n.onWheel,Me=n.onEnable,Ue=n.onDisable,K=n.onClick,Z=n.scrollSpeed,oe=n.capture,ne=n.allowClicks,fe=n.lockAxis,ue=n.onLockAxis;this.target=a=Bn(a)||Br,this.vars=n,d&&(d=hn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Z=Z||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(So).lineHeight)||22);var Ie,Ve,Pe,Ae,I,pt,Be,z=this,Se=0,it=0,we=n.passive||!u,C=Kr(a,Ln),b=Kr(a,Qt),q=C(),te=b(),ee=~o.indexOf("touch")&&!~o.indexOf("pointer")&&bi[0]==="pointerdown",J=Fa(a),de=a.ownerDocument||Or,le=[0,0,0],me=[0,0,0],Ke=0,se=function(){return Ke=Ua()},ae=function(Ce,Ze){return(z.event=Ce)&&d&&~d.indexOf(Ce.target)||Ze&&ee&&Ce.pointerType!=="touch"||G&&G(Ce,Ze)},Fe=function(){z._vx.reset(),z._vy.reset(),Ve.pause(),h&&h(z)},Oe=function(){var Ce=z.deltaX=fg(le),Ze=z.deltaY=fg(me),ge=Math.abs(Ce)>=i,Xe=Math.abs(Ze)>=i;P&&(ge||Xe)&&P(z,Ce,Ze,le,me),ge&&(A&&z.deltaX>0&&A(z),E&&z.deltaX<0&&E(z),y&&y(z),N&&z.deltaX<0!=Se<0&&N(z),Se=z.deltaX,le[0]=le[1]=le[2]=0),Xe&&(R&&z.deltaY>0&&R(z),T&&z.deltaY<0&&T(z),v&&v(z),F&&z.deltaY<0!=it<0&&F(z),it=z.deltaY,me[0]=me[1]=me[2]=0),(Ae||Pe)&&(V&&V(z),Pe&&(S(z),Pe=!1),Ae=!1),pt&&!(pt=!1)&&ue&&ue(z),I&&(re(z),I=!1),Ie=0},ye=function(Ce,Ze,ge){le[ge]+=Ce,me[ge]+=Ze,z._vx.update(Ce),z._vy.update(Ze),c?Ie||(Ie=requestAnimationFrame(Oe)):Oe()},$e=function(Ce,Ze){fe&&!Be&&(z.axis=Be=Math.abs(Ce)>Math.abs(Ze)?"x":"y",pt=!0),Be!=="y"&&(le[2]+=Ce,z._vx.update(Ce,!0)),Be!=="x"&&(me[2]+=Ze,z._vy.update(Ze,!0)),c?Ie||(Ie=requestAnimationFrame(Oe)):Oe()},He=function(Ce){if(!ae(Ce,1)){Ce=fa(Ce,u);var Ze=Ce.clientX,ge=Ce.clientY,Xe=Ze-z.x,De=ge-z.y,We=z.isDragging;z.x=Ze,z.y=ge,(We||Math.abs(z.startX-Ze)>=s||Math.abs(z.startY-ge)>=s)&&(S&&(Pe=!0),We||(z.isDragging=!0),$e(Xe,De),We||m&&m(z))}},ht=z.onPress=function(ve){ae(ve,1)||ve&&ve.button||(z.axis=Be=null,Ve.pause(),z.isPressed=!0,ve=fa(ve),Se=it=0,z.startX=z.x=ve.clientX,z.startY=z.y=ve.clientY,z._vx.reset(),z._vy.reset(),En(L?a:de,bi[1],He,we,!0),z.deltaX=z.deltaY=0,M&&M(z))},U=z.onRelease=function(ve){if(!ae(ve,1)){bn(L?a:de,bi[1],He,!0);var Ce=!isNaN(z.y-z.startY),Ze=z.isDragging,ge=Ze&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Xe=fa(ve);!ge&&Ce&&(z._vx.reset(),z._vy.reset(),u&&ne&&hn.delayedCall(.08,function(){if(Ua()-Ke>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(de.createEvent){var De=de.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,ei,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(De)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&Ze&&!L&&Ve.restart(!0),p&&Ze&&p(z),x&&x(z,ge)}},he=function(Ce){return Ce.touches&&Ce.touches.length>1&&(z.isGesturing=!0)&&$(Ce,z.isDragging)},j=function(){return(z.isGesturing=!1)||D(z)},Q=function(Ce){if(!ae(Ce)){var Ze=C(),ge=b();ye((Ze-q)*Z,(ge-te)*Z,1),q=Ze,te=ge,h&&Ve.restart(!0)}},ce=function(Ce){if(!ae(Ce)){Ce=fa(Ce,u),re&&(I=!0);var Ze=(Ce.deltaMode===1?l:Ce.deltaMode===2?ei.innerHeight:1)*g;ye(Ce.deltaX*Ze,Ce.deltaY*Ze,0),h&&!L&&Ve.restart(!0)}},pe=function(Ce){if(!ae(Ce)){var Ze=Ce.clientX,ge=Ce.clientY,Xe=Ze-z.x,De=ge-z.y;z.x=Ze,z.y=ge,Ae=!0,h&&Ve.restart(!0),(Xe||De)&&$e(Xe,De)}},Ge=function(Ce){z.event=Ce,H(z)},ft=function(Ce){z.event=Ce,W(z)},Nt=function(Ce){return ae(Ce)||fa(Ce,u)&&K(z)};Ve=z._dc=hn.delayedCall(f||.25,Fe).pause(),z.deltaX=z.deltaY=0,z._vx=Pf(0,50,!0),z._vy=Pf(0,50,!0),z.scrollX=C,z.scrollY=b,z.isDragging=z.isGesturing=z.isPressed=!1,wx(this),z.enable=function(ve){return z.isEnabled||(En(J?de:a,"scroll",Cf),o.indexOf("scroll")>=0&&En(J?de:a,"scroll",Q,we,oe),o.indexOf("wheel")>=0&&En(a,"wheel",ce,we,oe),(o.indexOf("touch")>=0&&Ex||o.indexOf("pointer")>=0)&&(En(a,bi[0],ht,we,oe),En(de,bi[2],U),En(de,bi[3],U),ne&&En(a,"click",se,!0,!0),K&&En(a,"click",Nt),$&&En(de,"gesturestart",he),D&&En(de,"gestureend",j),H&&En(a,us+"enter",Ge),W&&En(a,us+"leave",ft),V&&En(a,us+"move",pe)),z.isEnabled=!0,ve&&ve.type&&ht(ve),Me&&Me(z)),z},z.disable=function(){z.isEnabled&&(fo.filter(function(ve){return ve!==z&&Fa(ve.target)}).length||bn(J?de:a,"scroll",Cf),z.isPressed&&(z._vx.reset(),z._vy.reset(),bn(L?a:de,bi[1],He,!0)),bn(J?de:a,"scroll",Q,oe),bn(a,"wheel",ce,oe),bn(a,bi[0],ht,oe),bn(de,bi[2],U),bn(de,bi[3],U),bn(a,"click",se,!0),bn(a,"click",Nt),bn(de,"gesturestart",he),bn(de,"gestureend",j),bn(a,us+"enter",Ge),bn(a,us+"leave",ft),bn(a,us+"move",pe),z.isEnabled=z.isPressed=z.isDragging=!1,Ue&&Ue(z))},z.kill=z.revert=function(){z.disable();var ve=fo.indexOf(z);ve>=0&&fo.splice(ve,1),hr===z&&(hr=0)},fo.push(z),L&&Fa(a)&&(hr=z),z.enable(_)},b2(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Vt.version="3.12.5";Vt.create=function(r){return new Vt(r)};Vt.register=Dx;Vt.getAll=function(){return fo.slice()};Vt.getById=function(r){return fo.filter(function(e){return e.vars.id===r})[0]};Rx()&&hn.registerPlugin(Vt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,oo,lt,Pt,Ei,wt,Lx,kc,ol,Oa,ya,Yl,pn,jc,Df,Rn,dg,pg,ao,Ix,$u,Nx,wn,Lf,Ux,Fx,wr,If,Hd,To,Gd,zc,Nf,Zu,Kl=1,mn=Date.now,Ju=mn(),_i=0,Ma=0,mg=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},gg=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},A2=function r(){return Ma&&requestAnimationFrame(r)},_g=function(){return jc=1},xg=function(){return jc=0},Ui=function(e){return e},Sa=function(e){return Math.round(e*1e5)/1e5||0},Ox=function(){return typeof window<"u"},Bx=function(){return Ee||Ox()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Ls=function(e){return!!~Lx.indexOf(e)},kx=function(e){return(e==="Height"?Gd:lt["inner"+e])||Ei["client"+e]||wt["client"+e]},zx=function(e){return Gr(e,"getBoundingClientRect")||(Ls(e)?function(){return vc.width=lt.innerWidth,vc.height=Gd,vc}:function(){return lr(e)})},w2=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Gr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?kx(s):e["client"+s])||0}},R2=function(e,t){return!t||~Wi.indexOf(e)?zx(e):function(){return vc}},zi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Gr(e,n))?o()-zx(e)()[s]:Ls(e)?(Ei[n]||wt[n])-kx(i):e[n]-e["offset"+i])},jl=function(e,t){for(var n=0;n<ao.length;n+=3)(!t||~t.indexOf(ao[n+1]))&&e(ao[n],ao[n+1],ao[n+2])},Zn=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},Ta=function(e){return typeof e=="number"},hs=function(e){return typeof e=="object"},da=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Qu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},to=Math.abs,Vx="left",Hx="top",Wd="right",Xd="bottom",bs="width",Es="height",Ba="Right",ka="Left",za="Top",Va="Bottom",Xt="padding",di="margin",Ho="Width",qd="Height",Jt="px",pi=function(e){return lt.getComputedStyle(e)},C2=function(e){var t=pi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},vg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lr=function(e,t){var n=t&&pi(e)[Df]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Vc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Gx=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},P2=function(e){return function(t){return Ee.utils.snap(Gx(e),t)}},Yd=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},D2=function(e){return function(t,n){return Yd(Gx(e))(t,n.direction)}},$l=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Zl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},yg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Jl={toggleActions:"play",anticipatePin:0},Hc={top:0,left:0,center:.5,bottom:1,right:1},mc=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Hc?Hc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ql=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Pt.createElement("div"),_=Ls(n)||Gr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?wt:n,S=e.indexOf("start")!==-1,M=S?c:u,x="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===Qt?Wd:Xd)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],gc(g,0,i,S),g},gc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ho]=1,s["border"+a+Ho]=0,s[n.p]=t+"px",Ee.set(e,s)},nt=[],Uf={},al,Mg=function(){return mn()-_i>34&&(al||(al=requestAnimationFrame(pr)))},no=function(){(!wn||!wn.isPressed||wn.startX>wt.clientWidth)&&(rt.cache++,wn?al||(al=requestAnimationFrame(pr)):pr(),_i||Ns("scrollStart"),_i=mn())},eh=function(){Fx=lt.innerWidth,Ux=lt.innerHeight},ba=function(){rt.cache++,!pn&&!Nx&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!Lf||Fx!==lt.innerWidth||Math.abs(lt.innerHeight-Ux)>lt.innerHeight*.25)&&kc.restart(!0)},Is={},L2=[],Wx=function r(){return rn(at,"scrollEnd",r)||xs(!0)},Ns=function(e){return Is[e]&&Is[e].map(function(t){return t()})||L2},$n=[],Xx=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},Kd=function(e,t){var n;for(Rn=0;Rn<nt.length;Rn++)n=nt[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));zc=!0,t&&Xx(t),t||Ns("revert")},qx=function(e,t){rt.cache++,(t||!Cn)&&rt.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(lt.history.scrollRestoration=Hd=e)},Cn,As=0,Sg,I2=function(){if(Sg!==As){var e=Sg=As;requestAnimationFrame(function(){return e===As&&xs(!0)})}},Yx=function(){wt.appendChild(To),Gd=!wn&&To.offsetHeight||lt.innerHeight,wt.removeChild(To)},Tg=function(e){return ol(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xs=function(e,t){if(_i&&!e&&!zc){sn(at,"scrollEnd",Wx);return}Yx(),Cn=at.isRefreshing=!0,rt.forEach(function(i){return In(i)&&++i.cacheID&&(i.rec=i())});var n=Ns("refreshInit");Ix&&at.sort(),t||Kd(),rt.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),zc=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Nf=1,Tg(!0),nt.forEach(function(i){var s=zi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Tg(!1),Nf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),qx(Hd,1),kc.pause(),As++,Cn=2,pr(2),nt.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=at.isRefreshing=!1,Ns("refresh")},Ff=0,_c=1,Ha,pr=function(e){if(e===2||!Cn&&!zc){at.isUpdating=!0,Ha&&Ha.update(0);var t=nt.length,n=mn(),i=n-Ju>=50,s=t&&nt[0].scroll();if(_c=Ff>s?-1:1,Cn||(Ff=s),i&&(_i&&!jc&&n-_i>200&&(_i=0,Ns("scrollEnd")),ya=Ju,Ju=n),_c<0){for(Rn=t;Rn-- >0;)nt[Rn]&&nt[Rn].update(0,i);_c=1}else for(Rn=0;Rn<t;Rn++)nt[Rn]&&nt[Rn].update(0,i);at.isUpdating=!1}al=0},Of=[Vx,Hx,Xd,Wd,di+Va,di+Ba,di+za,di+ka,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xc=Of.concat([bs,Es,"boxSizing","max"+Ho,"max"+qd,"position",di,Xt,Xt+za,Xt+Ba,Xt+Va,Xt+ka]),N2=function(e,t,n){bo(n);var i=e._gsap;if(i.spacerIsNative)bo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},th=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Of.length,o=t.style,a=e.style,l;s--;)l=Of[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Xd]=a[Wd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[bs]=Vc(e,Ln)+Jt,o[Es]=Vc(e,Qt)+Jt,o[Xt]=a[di]=a[Hx]=a[Vx]="0",bo(i),a[bs]=a["max"+Ho]=n[bs],a[Es]=a["max"+qd]=n[Es],a[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},U2=/([A-Z])/g,bo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(U2,"-$1").toLowerCase())}},ec=function(e){for(var t=xc.length,n=e.style,i=[],s=0;s<t;s++)i.push(xc[s],n[xc[s]]);return i.t=e,i},F2=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},vc={left:0,top:0},bg=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){In(e)&&(e=e(l)),Zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?mc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Ta(e))d&&(e=Ee.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&gc(a,n,i,!0);else{In(t)&&(t=t(l));var M=(e||"0").split(" "),x,A,E,T;S=Bn(t,l)||wt,x=lr(S)||{},(!x||!x.left&&!x.top)&&pi(S).display==="none"&&(T=S.style.display,S.style.display="block",x=lr(S),T?S.style.display=T:S.style.removeProperty("display")),A=mc(M[0],x[i.d]),E=mc(M[1]||"0",n),e=x[i.p]-c[i.p]-u+A+s-E,a&&gc(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,y=o._isStart;m="scroll"+i.d2,gc(o,R,i,y&&R>20||!y&&(h?Math.max(wt[m],Ei[m]):o.parentNode[m])<=R+1),h&&(c=lr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Jt))}return d&&S&&(m=lr(S),d.seek(f),p=lr(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},O2=/(webkit|moz|length|cssText|inset)/i,Eg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=pi(e);for(o in a)!+o&&!O2.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Kx=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},tc=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},Ag=function(e,t){var n=Kr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=Kx(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&pr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ee.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(e,"wheel",n.wheelHandler),at.isTouch&&sn(e,"touchmove",n.wheelHandler),s},at=function(){function r(t,n){oo||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),If(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ma){this.update=this.refresh=this.kill=Ui;return}n=vg(Zn(n)||Ta(n)||n.nodeType?{trigger:n}:n,Jl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,M=s.once,x=s.snap,A=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ln:Qt,P=!h&&h!==0,N=Bn(n.scroller||lt),F=Ee.core.getCache(N),H=Ls(N),W=("pinType"in n?n.pinType:Gr(N,"pinType")||H&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=P&&n.toggleActions.split(" "),L="markers"in n?n.markers:Jl.markers,$=H?0:parseFloat(pi(N)["border"+v.p2+Ho])||0,D=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Me=w2(N,H,v),Ue=R2(N,H),K=0,Z=0,oe=0,ne=Kr(N,v),fe,ue,Ie,Ve,Pe,Ae,I,pt,Be,z,Se,it,we,C,b,q,te,ee,J,de,le,me,Ke,se,ae,Fe,Oe,ye,$e,He,ht,U,he,j,Q,ce,pe,Ge,ft;if(D._startClamp=D._endClamp=!1,D._dir=v,m*=45,D.scroller=N,D.scroll=T?T.time.bind(T):ne,Ve=ne(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ix=1,n.refreshPriority===-9999&&(Ha=D)),F.tweenScroll=F.tweenScroll||{top:Ag(N,Qt),left:Ag(N,Ln)},D.tweenTo=fe=F.tweenScroll[v.p],D.scrubDuration=function(ge){he=Ta(ge)&&ge,he?U?U.duration(ge):U=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(D)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),He=0,l||(l=i.vars.id)),x&&((!hs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in wt.style&&Ee.set(H?[wt,Ei]:N,{scrollBehavior:"auto"}),rt.forEach(function(ge){return In(ge)&&ge.target===(H?Pt.scrollingElement||Ei:N)&&(ge.smooth=!1)}),Ie=In(x.snapTo)?x.snapTo:x.snapTo==="labels"?P2(i):x.snapTo==="labelsDirectional"?D2(i):x.directional!==!1?function(ge,Xe){return Yd(x.snapTo)(ge,mn()-Z<500?0:Xe.direction)}:Ee.utils.snap(x.snapTo),j=x.duration||{min:.1,max:2},j=hs(j)?Oa(j.min,j.max):Oa(j,j),Q=Ee.delayedCall(x.delay||he/2||.1,function(){var ge=ne(),Xe=mn()-Z<500,De=fe.tween;if((Xe||Math.abs(D.getVelocity())<10)&&!De&&!jc&&K!==ge){var We=(ge-Ae)/C,Bt=i&&!P?i.totalProgress():We,tt=Xe?0:(Bt-ht)/(mn()-ya)*1e3||0,Et=Ee.utils.clamp(-We,1-We,to(tt/2)*tt/.185),jt=We+(x.inertia===!1?0:Et),St,Tt,gt=x,qn=gt.onStart,At=gt.onInterrupt,Mn=gt.onComplete;if(St=Ie(jt,D),Ta(St)||(St=jt),Tt=Math.round(Ae+St*C),ge<=I&&ge>=Ae&&Tt!==ge){if(De&&!De._initted&&De.data<=to(Tt-ge))return;x.inertia===!1&&(Et=St-We),fe(Tt,{duration:j(to(Math.max(to(jt-Bt),to(St-Bt))*.185/tt/.05||0)),ease:x.ease||"power3",data:to(Tt-ge),onInterrupt:function(){return Q.restart(!0)&&At&&At(D)},onComplete:function(){D.update(),K=ne(),i&&(U?U.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),He=ht=i&&!P?i.totalProgress():D.progress,S&&S(D),Mn&&Mn(D)}},ge,Et*C,Tt-ge-Et*C),qn&&qn(D,fe.tween)}}else D.isActive&&K!==ge&&Q.restart(!0)}).pause()),l&&(Uf[l]=D),f=D.trigger=Bn(f||d!==!0&&d),ft=f&&f._gsap&&f._gsap.stRevert,ft&&(ft=ft(D)),d=d===!0?f:Bn(d),Zn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===di||(g=!g&&d.parentNode&&d.parentNode.style&&pi(d.parentNode).display==="flex"?!1:Xt),D.pin=d,ue=Ee.core.getCache(d),ue.spacer?b=ue.pinState:(E&&(E=Bn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),ue.spacerIsNative=!!E,E&&(ue.spacerState=ec(E))),ue.spacer=ee=E||Pt.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),ue.pinState=b=ec(d)),n.force3D!==!1&&Ee.set(d,{force3D:!0}),D.spacer=ee=ue.spacer,$e=pi(d),se=$e[g+v.os2],de=Ee.getProperty(d),le=Ee.quickSetter(d,v.a,Jt),th(d,ee,$e),te=ec(d)),L){it=hs(L)?vg(L,yg):yg,z=Ql("scroller-start",l,N,v,it,0),Se=Ql("scroller-end",l,N,v,it,0,z),J=z["offset"+v.op.d2];var Nt=Bn(Gr(N,"content")||N);pt=this.markerStart=Ql("start",l,Nt,v,it,J,0,T),Be=this.markerEnd=Ql("end",l,Nt,v,it,J,0,T),T&&(Ge=Ee.quickSetter([pt,Be],v.a,Jt)),!W&&!(Wi.length&&Gr(N,"fixedMarkers")===!0)&&(C2(H?wt:N),Ee.set([z,Se],{force3D:!0}),Fe=Ee.quickSetter(z,v.a,Jt),ye=Ee.quickSetter(Se,v.a,Jt))}if(T){var ve=T.vars.onUpdate,Ce=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){D.update(0,0,1),ve&&ve.apply(T,Ce||[])})}if(D.previous=function(){return nt[nt.indexOf(D)-1]},D.next=function(){return nt[nt.indexOf(D)+1]},D.revert=function(ge,Xe){if(!Xe)return D.kill(!0);var De=ge!==!1||!D.enabled,We=pn;De!==D.isReverted&&(De&&(ce=Math.max(ne(),D.scroll.rec||0),oe=D.progress,pe=i&&i.progress()),pt&&[pt,Be,z,Se].forEach(function(Bt){return Bt.style.display=De?"none":"block"}),De&&(pn=D,D.update(De)),d&&(!A||!D.isActive)&&(De?N2(d,ee,b):th(d,ee,pi(d),ae)),De||D.update(De),pn=We,D.isReverted=De)},D.refresh=function(ge,Xe,De,We){if(!((pn||!D.enabled)&&!Xe)){if(d&&ge&&_i){sn(r,"scrollEnd",Wx);return}!Cn&&re&&re(D),pn=D,fe.tween&&!De&&(fe.tween.kill(),fe.tween=0),U&&U.pause(),_&&i&&i.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Bt=Me(),tt=Ue(),Et=T?T.duration():zi(N,v),jt=C<=.01,St=0,Tt=We||0,gt=hs(De)?De.end:n.end,qn=n.endTrigger||f,At=hs(De)?De.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Mn=D.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,D),oi=f&&Math.max(0,nt.indexOf(D))||0,$t=oi,Zt,w,B,Y,X,O,ie,_e,be,Te,Ne,ze,Le;for(L&&hs(De)&&(ze=Ee.getProperty(z,v.p),Le=Ee.getProperty(Se,v.p));$t--;)O=nt[$t],O.end||O.refresh(0,1)||(pn=D),ie=O.pin,ie&&(ie===f||ie===d||ie===Mn)&&!O.isReverted&&(Te||(Te=[]),Te.unshift(O),O.revert(!0,!0)),O!==nt[$t]&&(oi--,$t--);for(In(At)&&(At=At(D)),At=mg(At,"start",D),Ae=bg(At,f,Bt,v,ne(),pt,z,D,tt,$,W,Et,T,D._startClamp&&"_startClamp")||(d?-.001:0),In(gt)&&(gt=gt(D)),Zn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(Zn(At)?At.split(" ")[0]:"")+gt:(St=mc(gt.substr(2),Bt),gt=Zn(At)?At:(T?Ee.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Ae):Ae)+St,qn=f)),gt=mg(gt,"end",D),I=Math.max(Ae,bg(gt||(qn?"100% 0":Et),qn,Bt,v,ne()+St,Be,Se,D,tt,$,W,Et,T,D._endClamp&&"_endClamp"))||-.001,St=0,$t=oi;$t--;)O=nt[$t],ie=O.pin,ie&&O.start-O._pinPush<=Ae&&!T&&O.end>0&&(Zt=O.end-(D._startClamp?Math.max(0,O.start):O.start),(ie===f&&O.start-O._pinPush<Ae||ie===Mn)&&isNaN(At)&&(St+=Zt*(1-O.progress)),ie===d&&(Tt+=Zt));if(Ae+=St,I+=St,D._startClamp&&(D._startClamp+=St),D._endClamp&&!Cn&&(D._endClamp=I||-.001,I=Math.min(I,zi(N,v))),C=I-Ae||(Ae-=.01)&&.001,jt&&(oe=Ee.utils.clamp(0,1,Ee.utils.normalize(Ae,I,ce))),D._pinPush=Tt,pt&&St&&(Zt={},Zt[v.a]="+="+St,Mn&&(Zt[v.p]="-="+ne()),Ee.set([pt,Be],Zt)),d&&!(Nf&&D.end>=zi(N,v)))Zt=pi(d),Y=v===Qt,B=ne(),me=parseFloat(de(v.a))+Tt,!Et&&I>1&&(Ne=(H?Pt.scrollingElement||Ei:N).style,Ne={style:Ne,value:Ne["overflow"+v.a.toUpperCase()]},H&&pi(wt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Ne.style["overflow"+v.a.toUpperCase()]="scroll")),th(d,ee,Zt),te=ec(d),w=lr(d,!0),_e=W&&Kr(N,Y?Ln:Qt)(),g?(ae=[g+v.os2,C+Tt+Jt],ae.t=ee,$t=g===Xt?Vc(d,v)+C+Tt:0,$t&&(ae.push(v.d,$t+Jt),ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=$t+Jt)),bo(ae),Mn&&nt.forEach(function(et){et.pin===Mn&&et.vars.pinSpacing!==!1&&(et._subPinOffset=!0)}),W&&ne(ce)):($t=Vc(d,v),$t&&ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=$t+Jt)),W&&(X={top:w.top+(Y?B-Ae:_e)+Jt,left:w.left+(Y?_e:B-Ae)+Jt,boxSizing:"border-box",position:"fixed"},X[bs]=X["max"+Ho]=Math.ceil(w.width)+Jt,X[Es]=X["max"+qd]=Math.ceil(w.height)+Jt,X[di]=X[di+za]=X[di+Ba]=X[di+Va]=X[di+ka]="0",X[Xt]=Zt[Xt],X[Xt+za]=Zt[Xt+za],X[Xt+Ba]=Zt[Xt+Ba],X[Xt+Va]=Zt[Xt+Va],X[Xt+ka]=Zt[Xt+ka],q=F2(b,X,A),Cn&&ne(0)),i?(be=i._initted,$u(1),i.render(i.duration(),!0,!0),Ke=de(v.a)-me+C+Tt,Oe=Math.abs(C-Ke)>1,W&&Oe&&q.splice(q.length-2,2),i.render(0,!0,!0),be||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),$u(0)):Ke=C,Ne&&(Ne.value?Ne.style["overflow"+v.a.toUpperCase()]=Ne.value:Ne.style.removeProperty("overflow-"+v.a));else if(f&&ne()&&!T)for(w=f.parentNode;w&&w!==wt;)w._pinOffset&&(Ae-=w._pinOffset,I-=w._pinOffset),w=w.parentNode;Te&&Te.forEach(function(et){return et.revert(!1,!0)}),D.start=Ae,D.end=I,Ve=Pe=Cn?ce:ne(),!T&&!Cn&&(Ve<ce&&ne(ce),D.scroll.rec=0),D.revert(!1,!0),Z=mn(),Q&&(K=-1,Q.restart(!0)),pn=0,i&&P&&(i._initted||pe)&&i.progress()!==pe&&i.progress(pe||0,!0).render(i.time(),!0,!0),(jt||oe!==D.progress||T||_)&&(i&&!P&&i.totalProgress(T&&Ae<-.001&&!oe?Ee.utils.normalize(Ae,I,0):oe,!0),D.progress=jt||(Ve-Ae)/C===oe?0:oe),d&&g&&(ee._pinOffset=Math.round(D.progress*Ke)),U&&U.invalidate(),isNaN(ze)||(ze-=Ee.getProperty(z,v.p),Le-=Ee.getProperty(Se,v.p),tc(z,v,ze),tc(pt,v,ze-(We||0)),tc(Se,v,Le),tc(Be,v,Le-(We||0))),jt&&!Cn&&D.update(),u&&!Cn&&!we&&(we=!0,u(D),we=!1)}},D.getVelocity=function(){return(ne()-Pe)/(mn()-ya)*1e3||0},D.endAnimation=function(){da(D.callbackAnimation),i&&(U?U.progress(1):i.paused()?P||da(i,D.direction<0,1):da(i,i.reversed()))},D.labelToScroll=function(ge){return i&&i.labels&&(Ae||D.refresh()||Ae)+i.labels[ge]/i.duration()*C||0},D.getTrailing=function(ge){var Xe=nt.indexOf(D),De=D.direction>0?nt.slice(0,Xe).reverse():nt.slice(Xe+1);return(Zn(ge)?De.filter(function(We){return We.vars.preventOverlaps===ge}):De).filter(function(We){return D.direction>0?We.end<=Ae:We.start>=I})},D.update=function(ge,Xe,De){if(!(T&&!De&&!ge)){var We=Cn===!0?ce:D.scroll(),Bt=ge?0:(We-Ae)/C,tt=Bt<0?0:Bt>1?1:Bt||0,Et=D.progress,jt,St,Tt,gt,qn,At,Mn,oi;if(Xe&&(Pe=Ve,Ve=T?ne():We,x&&(ht=He,He=i&&!P?i.totalProgress():tt)),m&&d&&!pn&&!Kl&&_i&&(!tt&&Ae<We+(We-Pe)/(mn()-ya)*m?tt=1e-4:tt===1&&I>We+(We-Pe)/(mn()-ya)*m&&(tt=.9999)),tt!==Et&&D.enabled){if(jt=D.isActive=!!tt&&tt<1,St=!!Et&&Et<1,At=jt!==St,qn=At||!!tt!=!!Et,D.direction=tt>Et?1:-1,D.progress=tt,qn&&!pn&&(Tt=tt&&!Et?0:tt===1?1:Et===1?2:3,P&&(gt=!At&&G[Tt+1]!=="none"&&G[Tt+1]||G[Tt],oi=i&&(gt==="complete"||gt==="reset"||gt in i))),y&&(At||oi)&&(oi||h||!i)&&(In(y)?y(D):D.getTrailing(y).forEach(function(B){return B.endAnimation()})),P||(U&&!pn&&!Kl?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",tt,i._tTime/i._tDur):(U.vars.totalProgress=tt,U.invalidate().restart())):i&&i.totalProgress(tt,!!(pn&&(Z||ge)))),d){if(ge&&g&&(ee.style[g+v.os2]=se),!W)le(Sa(me+Ke*tt));else if(qn){if(Mn=!ge&&tt>Et&&I+1>We&&We+1>=zi(N,v),A)if(!ge&&(jt||Mn)){var $t=lr(d,!0),Zt=We-Ae;Eg(d,wt,$t.top+(v===Qt?Zt:0)+Jt,$t.left+(v===Qt?0:Zt)+Jt)}else Eg(d,ee);bo(jt||Mn?q:te),Oe&&tt<1&&jt||le(me+(tt===1&&!Mn?Ke:0))}}x&&!fe.tween&&!pn&&!Kl&&Q.restart(!0),a&&(At||M&&tt&&(tt<1||!Zu))&&ol(a.targets).forEach(function(B){return B.classList[jt||M?"add":"remove"](a.className)}),o&&!P&&!ge&&o(D),qn&&!pn?(P&&(oi&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(D)),(At||!Zu)&&(c&&At&&Qu(D,c),V[Tt]&&Qu(D,V[Tt]),M&&(tt===1?D.kill(!1,1):V[Tt]=0),At||(Tt=tt===1?1:3,V[Tt]&&Qu(D,V[Tt]))),R&&!jt&&Math.abs(D.getVelocity())>(Ta(R)?R:2500)&&(da(D.callbackAnimation),U?U.progress(1):da(i,gt==="reverse"?1:!tt,1))):P&&o&&!pn&&o(D)}if(ye){var w=T?We/T.duration()*(T._caScrollDist||0):We;Fe(w+(z._isFlipped?1:0)),ye(w)}Ge&&Ge(-We/T.duration()*(T._caScrollDist||0))}},D.enable=function(ge,Xe){D.enabled||(D.enabled=!0,sn(N,"resize",ba),H||sn(N,"scroll",no),re&&sn(r,"refreshInit",re),ge!==!1&&(D.progress=oe=0,Ve=Pe=K=ne()),Xe!==!1&&D.refresh())},D.getTween=function(ge){return ge&&fe?fe.tween:U},D.setPositions=function(ge,Xe,De,We){if(T){var Bt=T.scrollTrigger,tt=T.duration(),Et=Bt.end-Bt.start;ge=Bt.start+Et*ge/tt,Xe=Bt.start+Et*Xe/tt}D.refresh(!1,!1,{start:gg(ge,De&&!!D._startClamp),end:gg(Xe,De&&!!D._endClamp)},We),D.update()},D.adjustPinSpacing=function(ge){if(ae&&ge){var Xe=ae.indexOf(v.d)+1;ae[Xe]=parseFloat(ae[Xe])+ge+Jt,ae[1]=parseFloat(ae[1])+ge+Jt,bo(ae)}},D.disable=function(ge,Xe){if(D.enabled&&(ge!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Xe||U&&U.pause(),ce=0,ue&&(ue.uncache=1),re&&rn(r,"refreshInit",re),Q&&(Q.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!H)){for(var De=nt.length;De--;)if(nt[De].scroller===N&&nt[De]!==D)return;rn(N,"resize",ba),H||rn(N,"scroll",no)}},D.kill=function(ge,Xe){D.disable(ge,Xe),U&&!Xe&&U.kill(),l&&delete Uf[l];var De=nt.indexOf(D);De>=0&&nt.splice(De,1),De===Rn&&_c>0&&Rn--,De=0,nt.forEach(function(We){return We.scroller===D.scroller&&(De=1)}),De||Cn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ge&&i.revert({kill:!1}),Xe||i.kill()),pt&&[pt,Be,z,Se].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),Ha===D&&(Ha=0),d&&(ue&&(ue.uncache=1),De=0,nt.forEach(function(We){return We.pin===d&&De++}),De||(ue.spacer=0)),n.onKill&&n.onKill(D)},nt.push(D),D.enable(!1,!1),ft&&ft(D),i&&i.add&&!C){var Ze=D.update;D.update=function(){D.update=Ze,Ae||I||D.refresh()},Ee.delayedCall(.01,D.update),C=.01,Ae=I=0}else D.refresh();d&&I2()},r.register=function(n){return oo||(Ee=n||Bx(),Ox()&&window.document&&r.enable(),oo=Ma),oo},r.defaults=function(n){if(n)for(var i in n)Jl[i]=n[i];return Jl},r.disable=function(n,i){Ma=0,nt.forEach(function(o){return o[i?"kill":"disable"](n)}),rn(lt,"wheel",no),rn(Pt,"scroll",no),clearInterval(Yl),rn(Pt,"touchcancel",Ui),rn(wt,"touchstart",Ui),$l(rn,Pt,"pointerdown,touchstart,mousedown",_g),$l(rn,Pt,"pointerup,touchend,mouseup",xg),kc.kill(),jl(rn);for(var s=0;s<rt.length;s+=3)Zl(rn,rt[s],rt[s+1]),Zl(rn,rt[s],rt[s+2])},r.enable=function(){if(lt=window,Pt=document,Ei=Pt.documentElement,wt=Pt.body,Ee&&(ol=Ee.utils.toArray,Oa=Ee.utils.clamp,If=Ee.core.context||Ui,$u=Ee.core.suppressOverwrites||Ui,Hd=lt.history.scrollRestoration||"auto",Ff=lt.pageYOffset,Ee.core.globals("ScrollTrigger",r),wt)){Ma=1,To=document.createElement("div"),To.style.height="100vh",To.style.position="absolute",Yx(),A2(),Vt.register(Ee),r.isTouch=Vt.isTouch,wr=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lf=Vt.isTouch===1,sn(lt,"wheel",no),Lx=[lt,Pt,Ei,wt],Ee.matchMedia?(r.matchMedia=function(l){var c=Ee.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ee.addEventListener("matchMediaInit",function(){return Kd()}),Ee.addEventListener("matchMediaRevert",function(){return Xx()}),Ee.addEventListener("matchMedia",function(){xs(0,1),Ns("matchMedia")}),Ee.matchMedia("(orientation: portrait)",function(){return eh(),eh})):console.warn("Requires GSAP 3.11.0 or later"),eh(),sn(Pt,"scroll",no);var n=wt.style,i=n.borderTopStyle,s=Ee.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=lr(wt),Qt.m=Math.round(o.top+Qt.sc())||0,Ln.m=Math.round(o.left+Ln.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Yl=setInterval(Mg,250),Ee.delayedCall(.5,function(){return Kl=0}),sn(Pt,"touchcancel",Ui),sn(wt,"touchstart",Ui),$l(sn,Pt,"pointerdown,touchstart,mousedown",_g),$l(sn,Pt,"pointerup,touchend,mouseup",xg),Df=Ee.utils.checkPrefix("transform"),xc.push(Df),oo=mn(),kc=Ee.delayedCall(.2,xs).pause(),ao=[Pt,"visibilitychange",function(){var l=lt.innerWidth,c=lt.innerHeight;Pt.hidden?(dg=l,pg=c):(dg!==l||pg!==c)&&ba()},Pt,"DOMContentLoaded",xs,lt,"load",xs,lt,"resize",ba],jl(sn),nt.forEach(function(l){return l.enable(0,1)}),a=0;a<rt.length;a+=3)Zl(rn,rt[a],rt[a+1]),Zl(rn,rt[a],rt[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Zu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Yl)||(Yl=i)&&setInterval(Mg,i),"ignoreMobileResize"in n&&(Lf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(jl(rn)||jl(sn,n.autoRefreshEvents||"none"),Nx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Bn(n),o=rt.indexOf(s),a=Ls(s);~o&&rt.splice(o,a?6:2),i&&(a?Wi.unshift(lt,i,wt,i,Ei,i):Wi.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?Bn(n):n).getBoundingClientRect(),a=o[s?bs:Es]*i||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=Bn(n));var o=n.getBoundingClientRect(),a=o[s?bs:Es],l=i==null?a/2:i in Hc?Hc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Is.killAll||[];Is={},i.forEach(function(s){return s()})}},r}();at.version="3.12.5";at.saveStyles=function(r){return r?ol(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),If())}}):$n};at.revert=function(r,e){return Kd(!r,e)};at.create=function(r,e){return new at(r,e)};at.refresh=function(r){return r?ba():(oo||at.register())&&xs(!0)};at.update=function(r){return++rt.cache&&pr(r===!0?2:0)};at.clearScrollMemory=qx;at.maxScroll=function(r,e){return zi(r,e?Ln:Qt)};at.getScrollFunc=function(r,e){return Kr(Bn(r),e?Ln:Qt)};at.getById=function(r){return Uf[r]};at.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!_i};at.snapDirectional=Yd;at.addEventListener=function(r,e){var t=Is[r]||(Is[r]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(r,e){var t=Is[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ee.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&In(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return In(s)&&(s=s(),sn(at,"refresh",function(){return s=e.batchMax()})),ol(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(at.create(c))}),t};var wg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},nh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===Ei&&r(wt,t)},nc={auto:1,scroll:1},B2=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nc[(l=pi(s)).overflowY]||nc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ls(s)&&(nc[(l=pi(s)).overflowY]||nc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},jx=function(e,t,n,i){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&B2,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(Pt,Vt.eventTypes[0],Cg,!1,!0)},onDisable:function(){return rn(Pt,Vt.eventTypes[0],Cg,!0)}})},k2=/(input|label|select|textarea)/i,Rg,Cg=function(e){var t=k2.test(e.target.tagName);(t||Rg)&&(e._gsapAllow=!0,Rg=t)},z2=function(e){hs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Bn(e.target)||Ei,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),f=wr&&(e.content&&Bn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Kr(c,Qt),g=Kr(c,Ln),_=1,m=(Vt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,S=In(i)?function(){return i(a)}:function(){return i||2.8},M,x,A=jx(c,e.type,!0,s),E=function(){return x=!1},T=Ui,R=Ui,y=function(){l=zi(c,Qt),R=Oa(wr?1:0,l),n&&(T=Oa(0,zi(c,Ln))),M=As},v=function(){f._gsap.y=Sa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(x){requestAnimationFrame(E);var L=Sa(a.deltaY/2),$=R(d.v-L);if(f&&$!==d.v+d.offset){d.offset=$-d.v;var D=Sa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=rt.cache,pr()}return!0}d.offset&&v(),x=!0},N,F,H,W,V=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ee.set(f,{y:"+=0"}),e.ignoreCheck=function(G){return wr&&G.type==="touchmove"&&P()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){x=!1;var G=_;_=Sa((lt.visualViewport&&lt.visualViewport.scale||1)/m),N.pause(),G!==_&&nh(c,_>1.01?!0:n?!1:"x"),F=g(),H=d(),y(),M=As},e.onRelease=e.onGestureStart=function(G,L){if(d.offset&&v(),!L)W.restart(!0);else{rt.cache++;var $=S(),D,re;n&&(D=g(),re=D+$*.05*-G.velocityX/.227,$*=wg(g,D,re,zi(c,Ln)),N.vars.scrollX=T(re)),D=d(),re=D+$*.05*-G.velocityY/.227,$*=wg(d,D,re,zi(c,Qt)),N.vars.scrollY=R(re),N.invalidate().duration($).play(.01),(wr&&N.vars.scrollY>=l||D>=l-1)&&Ee.to({},{onUpdate:V,duration:$})}o&&o(G)},e.onWheel=function(){N._ts&&N.pause(),mn()-p>1e3&&(M=0,p=mn())},e.onChange=function(G,L,$,D,re){if(As!==M&&y(),L&&n&&g(T(D[2]===L?F+(G.startX-G.x):g()+L-D[1])),$){d.offset&&v();var Me=re[2]===$,Ue=Me?H+G.startY-G.y:d()+$-re[1],K=R(Ue);Me&&Ue!==K&&(H+=K-Ue),d(K)}($||L)&&pr()},e.onEnable=function(){nh(c,n?!1:"x"),at.addEventListener("refresh",V),sn(lt,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){nh(c,!0),rn(lt,"resize",V),at.removeEventListener("refresh",V),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Vt(e),a.iOS=wr,wr&&!d()&&d(1),wr&&Ee.ticker.add(Ui),W=a._dc,N=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Kx(d,d(),function(){return N.pause()})},onUpdate:pr,onComplete:W.vars.onComplete}),a};at.sort=function(r){return nt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};at.observe=function(r){return new Vt(r)};at.normalizeScroll=function(r){if(typeof r>"u")return wn;if(r===!0&&wn)return wn.enable();if(r===!1){wn&&wn.kill(),wn=r;return}var e=r instanceof Vt?r:z2(r);return wn&&wn.target===e.target&&wn.kill(),Ls(e.target)&&(wn=e),e};at.core={_getVelocityProp:Pf,_inputObserver:jx,_scrollers:rt,_proxies:Wi,bridge:{ss:function(){_i||Ns("scrollStart"),_i=mn()},ref:function(){return pn}}};Bx()&&Ee.registerPlugin(at);var V2=`uniform float birdDetach;
varying float birdHeight;
uniform float birdRole,birdRoll;
uniform vec3 birdOffset;
varying vec2 birdLocal;
uniform sampler2D touchTexture, autoTouchTexture;\r
uniform float opacity, revealProgress;
uniform vec2 resolution, revealCenter;

varying vec2 vUv, uvScreen;\r
varying vec4 flowmap;\r
varying float extrude;

void main() {\r
  vUv = uv;
  birdLocal = position.xy;
  birdHeight = position.z;

  vec4 worldPosition = modelMatrix * vec4(position, 1.);\r
  vec4 ndc = projectionMatrix * viewMatrix * worldPosition;\r
  uvScreen = (ndc.xy / ndc.w + 1.) * .5;

  flowmap = texture2D(touchTexture, uvScreen) + texture2D(autoTouchTexture, uvScreen);\r
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
  gl_Position = projectionMatrix * viewMatrix * worldPosition;\r
}`,H2=`varying float birdHeight;
precision highp float;

uniform sampler2D map, emissive, plaster;\r
uniform float darkMode, brightness, contrast, plasterStrength;

varying vec2 vUv, uvScreen;\r
varying vec4 flowmap;\r
varying float extrude;

vec4 sRGB(vec4 color) {\r
  vec3 adjusted = mix(pow(color.rgb, vec3(.41666)) * 1.055 - vec3(.055), color.rgb * 12.92, step(color.rgb, vec3(.0031308)));\r
  return vec4(adjusted, color.a);\r
}

uniform float birdRole,birdHover,birdDetach;
varying vec2 birdLocal;

void main() {\r
  float extrusion = extrude;\r
  vec3 map1 = sRGB(texture2D(map, vUv)).rgb;\r
  vec3 map2 = sRGB(texture2D(emissive, vUv)).rgb;\r
  float plasterTexture = texture2D(plaster, uvScreen).g;

  float initialMix = mix(map2.b, map2.g, smoothstep(0., .2, extrusion));\r
  float firstLayer = mix(.54504, initialMix, smoothstep(.2, .4, extrusion));\r
  float secondLayer = mix(map2.r, map1.b, smoothstep(.4, .6, extrusion));\r
  float thirdLayer = mix(firstLayer, secondLayer, smoothstep(.6, .8, extrusion));\r
  float finalLayer = mix(map1.g, map1.r, smoothstep(.8, 1., extrusion));

  float interpolatedValue = mix(thirdLayer, finalLayer, smoothstep(.8, 1., extrusion));

  vec3 finalColor = vec3(interpolatedValue) * contrast + brightness;\r
  finalColor = mix(finalColor, finalColor * plasterTexture * 1.5, plasterStrength);

  vec3 darkVer = pow(vec3(interpolatedValue) * (length(flowmap) * .0003) + vec3(interpolatedValue), vec3(5.5));\r
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
  gl_FragColor = vec4(finalColor, alpha);\r
}`;function G2(r,e,t=.9){return e*t+r*(1-t)}const W2=r=>Math.sqrt(1-Math.pow(r-1,2));class Pg{constructor({size:e=64,maxAge:t=750,radius:n=.2,intensity:i=.2,interpolate:s=0,smoothing:o=0,minForce:a=.3,velocityEffect:l=!1,blend:c="screen",ease:u=W2}={}){this.size=e,this.maxAge=t,this.radius=n,this.intensity=i,this.ease=u,this.interpolate=s,this.smoothing=o,this.minForce=a,this.blend=c,this.velocityEffect=l,this.trail=[],this.force=0,this.lastUpdate=performance.now(),this.frameId=null,this.maxPoints=1e3,this.pointDistanceThreshold=.01,this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new Kt(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height=`${this.canvas.width}px`}update(e){this.frameId||(this.frameId=requestAnimationFrame(()=>{const t=performance.now(),n=t-this.lastUpdate;this.clear();let i=this.trail.length;for(;i--;){const s=this.trail[i];s.age+=n,s.age>this.maxAge?this.trail.splice(i,1):this.drawTouch(s)}this.texture&&(this.texture.needsUpdate=!0),this.lastUpdate=t,this.frameId=null}))}clear(){this.ctx&&(this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height))}addTouch(e){if(!Number.isFinite(e.x)||!Number.isFinite(e.y))return;const t=this.trail[this.trail.length-1],n=performance.now();if(t){const i=t.x-e.x,s=t.y-e.y,o=Math.sqrt(i*i+s*s);if(o<this.pointDistanceThreshold)return;const a=Math.max(this.minForce,Math.min(o*100,1));if(this.force=G2(a,this.force,this.smoothing),this.interpolate&&o>.02){const l=Math.min(Math.ceil(o/.02),5);if(l>1)for(let c=1;c<l;c++)this.trail.length>=this.maxPoints&&this.trail.shift(),this.trail.push({x:t.x-i/l*c,y:t.y-s/l*c,age:0,force:a,timestamp:n})}}this.trail.length>=this.maxPoints&&this.trail.shift(),this.trail.push({x:e.x,y:e.y,age:0,force:this.force,timestamp:n})}drawTouch(e){const t={x:e.x*this.size,y:(1-e.y)*this.size};let n=1;if(e.age<this.maxAge*.3?n=this.ease(e.age/(this.maxAge*.3)):n=this.ease(1-(e.age-this.maxAge*.3)/(this.maxAge*.7)),this.velocityEffect&&(n*=e.force),this.ctx){this.ctx.globalCompositeOperation=this.blend;const i=this.size*this.radius*n,s=this.ctx.createRadialGradient(t.x,t.y,Math.max(0,i*.25),t.x,t.y,Math.max(0,i));s.addColorStop(0,`rgba(255, 255, 255, ${this.intensity})`),s.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,Math.max(0,i),0,Math.PI*2),this.ctx.fill()}}}Vd.registerPlugin(at);class X2{constructor(){this.scroll=0,this.scene=new Tc,this.manager=this.setUpLoadingManager(),this.canvasContainer=document.querySelector(".canvasContainer"),this.width=this.canvasContainer.offsetWidth,this.height=this.canvasContainer.offsetHeight,this.renderer=new m_({antialias:!0,alpha:!1}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=zt,this.canvasContainer.appendChild(this.renderer.domElement),this.camera=new Pn(35,this.width/this.height,.01,1e3),this.camera.position.set(0,0,10),this.textureLoader=new ed(this.manager),this.loader=new ER(this.manager),this.manager.setURLModifier(e=>e==="draco_decoder.js"?lC:e),this.draco=new oC(this.manager),this.draco.setDecoderConfig({type:"js"}),this.loader.setDRACOLoader(this.draco),this.trailTexture=new Pg({size:30,maxAge:3e3,radius:.2,intensity:.1,interpolate:5,smoothing:0,minForce:.1,velocityEffect:!1}),this.autoTrailTexture=new Pg({size:30,maxAge:3e3,radius:.25,intensity:.1,interpolate:3,smoothing:0,minForce:.1}),this.raycaster=new _M,this.pointer=new qe,this.pointerPosition=new qe,this.mouseEvents(),this.addObjects(),this.resize(),this.reliefTitle=bR(this.renderer,document.querySelector(".logic-button"),this.uniforms),this.render(),this.handleResize()}mouseEvents(){this.fboScene=new Tc,this.fboCamera=new Yo(-1,1,1,-1,0,1),this.fboMaterial=new Dr,this.fboMesh=new Un(new Wo(2,2),this.fboMaterial),this.fboScene.add(this.fboMesh);const e=(i,s)=>{let o=!1;return function(...a){o||(i.apply(this,a),o=!0,setTimeout(()=>{o=!1},s))}},t=({clientX:i,clientY:s})=>{this.pointer.x=i/this.width*2-1,this.pointer.y=-(s/this.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.fboCamera);const o=this.raycaster.intersectObject(this.fboMesh);if(o.length>0){const a=o[0].uv;this.trailTexture.addTouch(a)}};window.addEventListener("pointermove",e(t,100));const n=()=>{let i,s;do i={x:Math.random()*2-1,y:Math.random()*2-1},s={x:Math.random()*2-1,y:Math.random()*2-1};while(Math.hypot(s.x-i.x,s.y-i.y)<.5||Math.hypot(s.x-i.x,s.y-i.y)>.8);Vd.to(i,{delay:Math.random()*2,x:s.x,y:s.y,duration:Math.random()*2+1,ease:"expo.inOut",onUpdate:()=>{this.raycaster.setFromCamera(new qe(i.x,i.y),this.fboCamera);const o=this.raycaster.intersectObject(this.fboMesh);if(o.length>0){const a=o[0].uv;this.autoTrailTexture.addTouch(a)}},onComplete:n})};n()}setUpLoadingManager(){const e=new c_,t=document.querySelector(".scroller"),n=document.querySelector(".loading-wrap .mid .loading-bar ");return e.onProgress=function(i,s,o){const a=Math.round(s/o*100);n.style.width=a+"%"},e.onLoad=()=>{this.canvasContainer.classList.remove("hidden"),setTimeout(()=>{t.classList.add("loaded"),setTimeout(()=>window.dispatchEvent(new Event("resize")),50)},1e3)},e}addObjects(){this.time={value:0},this.uniforms={opacity:{value:1},birdMask:{value:TR()},revealProgress:{value:0},revealCenter:{value:new qe(.5,.5)},resolution:{value:new qe(this.width,this.height)},darkMode:{value:0},plasterStrength:{value:.5},contrast:{value:.6},plaster:{value:this.textureLoader.load("/-logic080609.github.io-/plaster.jpg")},brightness:{value:.3},touchTexture:{value:null},autoTouchTexture:{value:null}},this.loader.load("/-logic080609.github.io-/model.glb",e=>{this.model=e.scene,e.scene.traverse(t=>{if(t.isMesh){const n=new Ii({uniforms:{...this.uniforms,birdRole:{value:0},birdHover:{value:0},birdDetach:{value:0},birdOffset:{value:new k},birdRoll:{value:0},map:{value:t.material.map},emissive:{value:t.material.emissiveMap}},vertexShader:V2.replace(/void\s+main\s*\(\s*\)\s*\{/,Wm+`
void main() {`),fragmentShader:H2.replace(/void\s+main\s*\(\s*\)\s*\{/,Wm+`
void main() {`)});t.material=n,t.material.needsUpdate=!0}}),this.scene.add(e.scene)})}resize(){const e=this.canvasContainer.offsetWidth,t=this.canvasContainer.offsetHeight;!e||!t||(this.width=e,this.height=t,this.uniforms.resolution.value.set(this.width,this.height),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix())}handleResize(){window.addEventListener("resize",()=>{this.resize()},!1)}render(){const e=new aM,t=()=>{requestAnimationFrame(t);const n=e.getDelta();document.hidden||document.querySelector("main").hidden||(this.time.value+=n,this.trailTexture.update(n),this.autoTrailTexture.update(n),this.uniforms.touchTexture.value=this.trailTexture.texture,this.uniforms.autoTouchTexture.value=this.autoTrailTexture.texture,this.renderer.render(this.scene,this.camera),this.reliefTitle.render())};t()}}document.addEventListener("DOMContentLoaded",()=>{let r;try{r=new X2}catch(e){if(!/WebGL context/i.test(e.message))throw e;document.querySelector(".scroller").classList.add("loaded")}SR({setRelief:e=>r==null?void 0:r.reliefTitle.setExpanded(e),resizeCover:()=>r==null?void 0:r.resize()})});
