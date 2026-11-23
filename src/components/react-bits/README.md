# React Bits — 本网站的原生宿主适配

这些是从官方 Registry 源码提取的原生 DOM 适配，不是 React Bits 官方 Vanilla 版本。未引入 React / JSX / Tailwind。完整 Registry 快照及原始 JSX/CSS 位于本任务 work/react-bits；来源和 SHA-256 见 sources.json。

## 已集成

| 组件 | 页面 | 保留的官方实现 | 宿主适配 |
| --- | --- | --- | --- |
| TearTicket | 单程票 | SVG 孔洞与边缘、逐根纤维、拉扯阻力、弹簧恢复、重力和旋转掉落 | DOM 代替 JSX；Motion 原生值代替 hooks；增加按钮自动拖撕并触发出发 |
| CircularCarousel | 中转站 | 弯曲分片、前后表面、透视自适应、入场、鼠标惯性、吸附、键盘 | 静态 items 挂载；8 张实物卡映射 4 个章节；已吸附位置不重复设置相同目标以停止空闲绘制 |
| RefineFrame | 章节插画 | 9 级像素缓冲、扫描过渡、渐进清晰 | 直接进入 complete 目标作为开幕效果；使用已有本地图像，不伪造生成进度；不导入 React 图标包 |
| FlipCard | 偏爱收藏 | 指针历史、甩动预测、180 度吸附、spring、倾斜、键盘翻转 | 原生 Motion 值绑定 DOM；无额外 glare 图层；前后面 inert/aria-hidden |
| DitherVeil | 关于与联系 | OGL shaders、Floyd 误差扩散、指针轨迹、点击显现 | 按需动态加载；原生 DOM 生命周期；添加键盘显现及失败回退 |

DodgeField 已研究源码和依赖，未集成。其躲避行为不适合主要导航；未来可作为可选彩蛋。Uiverse 本轮未新增组件。

## 调用约定

各模块导出 create<Component>(host, options)。前四个返回包含 destroy() 的控制对象；DitherVeil 返回清理函数。使用期间 host 必须有实际宽高。关闭章节即销毁，不在隐藏页面保留 WebGL 上下文或事件。

这批适配以当前网站所用的静态 props 为范围，不提供 React 的 controlled props 更新、children reconciliation、运行中切换 items 的交叉淡出和任意 JSX。改变内容时销毁并重新挂载。没有将所有官方 props 的运行中更新等同于已支持。后续扩展先对照上游源码。

- TearTicket：当前使用 children/stub DOM、width/height/stubSize/radius、holes/holeSize/notch/roughness、tearAngle/stretch/resistance、rotate/tilt/tiltMax、background/stubBackground/color、onTear。tear() 提供点击等价路径。
- CircularCarousel：items、preset、intro、cardWidth/aspectRatio/gap/curve/tilt、autoplay、momentum/snap、parallax/depthFade、onChange/onItemClick；focus(index)、step(delta)、active。章节名和按钮由旅程宿主绘制，未使用官方 captions 或图片换组动画。
- RefineFrame：本网站 API 为 src/alt/stageDuration/sweep；不是异步内容生成状态机。
- FlipCard：front/back DOM、width/height/radius、axis、draggable、tilt、stiffness/damping、onFlipChange；当前无 React controlled 更新。键盘和 reduced-motion 使用直接切换。
- DitherVeil：保留官方静态配置名；更新配置时重建。

依赖：motion 12.23.12（JavaScript 入口）、ogl 1.0.11。使用 package-lock.json 复现版本。

## 授权边界

本目录遵循 LICENSE.md 中的 MIT + Commons Clause，而非整个仓库 LICENSE 的无附加条款 MIT。版权归 David Haz（2026）。允许作为网站的一部分使用；不得将组件或移植版单独售卖、转许可或再分发。原作者示例图片未使用。
