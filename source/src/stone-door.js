export function setupStoneDoor(trigger, door) {
  const cover = document.querySelector('main')
  const intro = document.querySelector('.intro-preview')
  const back = document.querySelector('.back-cover')
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  let entering = false
  let timer
  trigger.addEventListener('click', () => {
    const open = trigger.getAttribute('aria-pressed') === 'true'
    door.classList.toggle('is-visible', open)
    door.inert = !open
    door.setAttribute('aria-hidden', String(!open))
  })
  door.addEventListener('click', () => {
    if (entering) return
    entering = true
    door.classList.add('is-opening')
    cover.classList.add('is-entering')
    cover.inert = true
    timer = setTimeout(() => {
      cover.hidden = true
      intro.hidden = false
      document.querySelector('#intro-heading').focus({ preventScroll: true })
    }, reduced.matches ? 0 : 780)
  })
  back.addEventListener('click', () => {
    clearTimeout(timer)
    intro.hidden = true
    cover.classList.remove('is-entering')
    door.classList.remove('is-opening')
    cover.hidden = false
    cover.inert = false
    entering = false
    door.focus({ preventScroll: true })
  })
}
