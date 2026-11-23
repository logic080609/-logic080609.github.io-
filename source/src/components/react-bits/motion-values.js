import { animate, motionValue } from 'motion';
export const ref = current => ({current});
export function springValue(initial, options, disposers) {
 const value=motionValue(initial); const set=value.set.bind(value); let animation;
 const target=motionValue(initial);
 const off=target.on('change',v=>{animation?.stop();animation=animate(value,v,{type:'spring',...options});});
 disposers.push(()=>{off();animation?.stop();value.destroy();target.destroy();});
 return {get:()=>value.get(),set:v=>target.set(v),on:(...a)=>value.on(...a),jump:v=>{animation?.stop();set(v);target.jump(v)}};
}
export function listen(el,name,fn,cleanups,options){el.addEventListener(name,fn,options);cleanups.push(()=>el.removeEventListener(name,fn,options));}
