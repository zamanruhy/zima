export default function dispatchEvent(node, name, detail = null) {
  if (typeof CustomEvent === 'function') {
    node.dispatchEvent(
      new CustomEvent(name, {
        bubbles: false,
        cancelable: false,
        detail
      })
    )
  } else {
    const event = document.createEvent('CustomEvent')
    event.initCustomEvent(name, false, false, detail)
    node.dispatchEvent(event)
  }
}
