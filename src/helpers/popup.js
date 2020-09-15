const popups = []
let isBodyOverflowing = false
let offsetElements = null
let scrollbarWidth = null

export function registerPopup(popup) {
  if (popups.indexOf(popup) === -1) {
    popups.push(popup)
  }
  if (popups.length === 1) {
    checkScrollbar()
    setScrollbar()
    document.body.style.overflow = 'hidden'
  }
}

export function unregisterPopup(popup) {
  const index = popups.indexOf(popup)
  if (index === -1) {
    return
  }
  popups.splice(index, 1)
  if (popups.length === 0) {
    resetScrollbar()
    document.body.style.overflow = ''
  }
}

function checkScrollbar() {
  const { left, right } = document.body.getBoundingClientRect()
  isBodyOverflowing = left + right < window.innerWidth
}

function setScrollbar() {
  if (!isBodyOverflowing) {
    return
  }
  offsetElements = [
    document.body,
    ...Array.from(document.querySelectorAll('[data-fixed]'))
  ]
  offsetElements.forEach((el) => {
    const offset = el.getAttribute('data-fixed') || 'padding'
    const actual = el.style[`${offset}Right`]
    const computed = getComputedStyle(el)[`${offset}Right`]
    el.setAttribute(`data-${offset}-right`, actual)
    el.style[`${offset}Right`] = `${
      parseFloat(computed) + getScrollbarWidth()
    }px`
  })
}

function resetScrollbar() {
  if (!isBodyOverflowing) {
    return
  }
  offsetElements.forEach((el) => {
    const offset = el.getAttribute('data-fixed') || 'padding'
    el.style[`${offset}Right`] = el.getAttribute(`data-${offset}-right`)
    el.removeAttribute(`data-${offset}-right`)
  })
  offsetElements = null
}

export function getScrollbarWidth() {
  if (scrollbarWidth === null && typeof window !== 'undefined') {
    const div = document.createElement('div')
    div.style.cssText = `
      width: 100px;
      height: 100px;
      position: absolute;
      overflow: scroll;
      top: -9999px`
    document.body.appendChild(div)
    scrollbarWidth = div.getBoundingClientRect().width - div.clientWidth
    document.body.removeChild(div)
  }
  return scrollbarWidth || 0
}

function getFocusable(node) {
  const selector = [
    'button',
    '[href]',
    'input',
    'select',
    'textarea',
    '[tabindex]',
    '[contenteditable]'
  ]
    .map((s) => `${s}:not(:disabled):not([disabled])`)
    .join(', ')
  return Array.from(node.querySelectorAll(selector)).filter(
    (i) => i.tabIndex > -1 && !i.disabled
  )
}

export function trapFocus(e) {
  if (e.keyCode !== 9) {
    return
  }

  const focusable = getFocusable(e.currentTarget)

  if (focusable.length === 0) {
    e.preventDefault()
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  const active = document.activeElement

  if (e.shiftKey) {
    if (active === first || active === e.currentTarget) {
      last.focus()
      e.preventDefault()
    }
  } else {
    if (active === last) {
      first.focus()
      e.preventDefault()
    }
  }
}
