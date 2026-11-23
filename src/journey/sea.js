const seaBackground = {
  folder: 'sea-window/',
  day: { image: 'day.jpg', video: 'day.mp4' },
  night: { image: 'night.jpg', video: 'night.mp4' },
  // 窗玻璃边界，依次为上、右、下、左；只换静图时将对应 video 设为 null。
  windowInset: '6.4% 4.45% 35.5% 4.25%'
};
const asset = name => import.meta.env.BASE_URL + seaBackground.folder + name;
let night = false;
export function mountSea(shell, reduced) {
  const room = document.createElement('div');
  room.className = 'sea-room';
  const plane = document.createElement('div');
  plane.className = 'sea-plane';
  plane.style.backgroundImage = 'url("' + asset(seaBackground.day.image) + '")';
  room.append(plane);
  const layers = ['day','night'].map(mode => {
    const layer = document.createElement('div');
    layer.className = 'sea-layer';
    const source = seaBackground[mode]; layer.style.clipPath = 'inset(' + seaBackground.windowInset + ')';
    layer.style.backgroundImage = 'url("' + asset(source.image) + '")';
    const video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.poster = asset(source.image) + '';
    video.preload = 'none';
    if (!reduced && source.video) video.src = asset(source.video);
    layer.append(video);
    plane.append(layer);
    return {layer,video};
  });
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'sea-toggle';
  toggle.innerHTML = '<i aria-hidden="true"></i>';
  function update() {
    shell.dataset.light = night ? 'night' : 'day';
    toggle.setAttribute('aria-label','夜景');
    toggle.setAttribute('aria-pressed',String(night));
    toggle.title = night ? '切换到白天' : '切换到夜晚';
    layers.forEach(({layer,video},i)=>{
      const visible = i === Number(night);
      layer.style.opacity = visible ? '1' : '0';
      if (visible && video.hasAttribute('src')) video.play().catch(()=>{});
      else video.pause();
    });
  }
  toggle.onclick = ()=>{night = !night; update();};
  shell.prepend(room);
  shell.querySelector('.journey-header').insertBefore(toggle,shell.querySelector('.journey-menu'));
  update();
  return ()=>{layers.forEach(({video})=>video.pause()); room.remove(); toggle.remove();delete shell.dataset.light;};
}