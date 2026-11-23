// Spring-driven suspension: position and velocity survive direction changes.
export function setupHangingEntry(trigger, entry) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  let y = -entry.offsetHeight - 60
  let velocity = 0
  let angle = 0
  let angularVelocity = 0
  let open = false
  let frame = 0
  let previous = 0
  entry.inert = true
  entry.setAttribute('aria-hidden', 'true')
  entry.style.translate = `0 ${y}px`
  function draw() {
    entry.style.translate = `0 ${y}px`
    entry.style.rotate = `${angle}deg`
  }
  function tick(now) {
    const dt = Math.min((now - previous) / 1000, .032)
    previous = now
    const target = open ? 0 : -entry.offsetHeight - 60
    const acceleration = (target - y) * (open ? 64 : 48) - velocity * (open ? 11 : 13)
    velocity += acceleration * dt
    y += velocity * dt
    angularVelocity += (-angle * 30 - angularVelocity * 7 + acceleration * .0015) * dt
    angle += angularVelocity * dt
    draw()
    if (Math.abs(target - y) < .15 && Math.abs(velocity) < .3 && Math.abs(angle) < .03) {
      y = target; velocity = 0; angle = 0; angularVelocity = 0
      draw()
      if (!open) entry.style.visibility = 'hidden'
      frame = 0
      return
    }
    frame = requestAnimationFrame(tick)
  }
  trigger.addEventListener('click', () => {
    // The title click handler runs first and owns the shared open/closed state.
    open = trigger.getAttribute('aria-pressed') === 'true'
    entry.inert = !open
    entry.setAttribute('aria-hidden', String(!open))
    entry.style.visibility = 'visible'
    if (reduced.matches) {
      cancelAnimationFrame(frame); frame = 0
      y = open ? 0 : -entry.offsetHeight - 60
      velocity = 0; angle = 0; angularVelocity = 0
      draw()
      if (!open) entry.style.visibility = 'hidden'
      return
    }
    if (!frame) {
      // A small release/hoist impulse, followed by spring tension and damping.
      velocity = open ? 45 : 90
      angularVelocity = open ? 2.5 : -1.5
      previous = performance.now()
      frame = requestAnimationFrame(tick)
    }
  })
}
