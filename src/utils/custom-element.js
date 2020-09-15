import { detach, insert, noop } from 'svelte/internal'
import { camelize, dispatchEvent } from '@/utils'

export default function customElement(name, Component, options = {}) {
  const {
    attrs = [],
    events = [],
    outside = false,
    passTarget = false
  } = options
  const attrsObj = attrs.reduce((acc, cur) => {
    const [key, value] = cur.split(':')
    return { ...acc, [key]: value || 'string' }
  }, {})
  const attrList = Object.keys(attrsObj)
  const propList = attrList
    .map((a) => (a.endsWith('.') ? a.slice(0, -1) : a))
    .map(camelize)

  return customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super()
        this.component = null
        this._children = null
        this._slots = null

        propList.forEach((prop) => {
          Object.defineProperty(this, prop, {
            get() {
              if (this.component) {
                return this.component[prop]
              }
            },
            set(value) {
              if (this.component) {
                this.component.$set({ [prop]: value })
              }
            }
          })
        })
      }

      static get observedAttributes() {
        return attrList
      }

      attributeChangedCallback(attrName, oldValue, newValue) {
        if (this.component && oldValue !== newValue) {
          if (!['class', 'style'].includes(attrName) || outside) {
            if (attrName.endsWith('.')) {
              attrName = attrName.slice(0, -1)
            }
            newValue = typeCast(newValue, attrsObj[attrName])
            attrName = camelize(attrName)
            this.component.$set({ [attrName]: newValue })
          }
        }
      }

      connectedCallback() {
        if (this.isConnected && !this.component) {
          this.mount()
        }
      }

      disconnectedCallback() {
        if (this.component) {
          this.destroy()
        }
      }

      mount() {
        this._children = this._children || Array.from(this.childNodes)

        const props = {}

        for (const attribute of this.attributes) {
          let attrName = attribute.nodeName
          let attrValue = attribute.nodeValue
          if (!['class', 'style'].includes(attrName) || outside) {
            if (attrName.endsWith('.')) {
              attrName = attrName.slice(0, -1)
            }
            if (attrList.includes(attrName)) {
              attrValue = typeCast(attrValue, attrsObj[attrName])
              attrName = camelize(attrName)
            }
            props[attrName] = attrValue
          }
        }

        if (this._children.length) {
          for (const child of this._children) {
            this.removeChild(child)
          }
          if (!this._slots) {
            const slots = {}
            for (const child of this._children) {
              const slot =
                child.nodeType !== Node.ELEMENT_NODE ||
                !child.hasAttribute('slot')
                  ? 'default'
                  : child.getAttribute('slot')
              slots[slot] = (slots[slot] || []).concat(child)
            }
            this._slots = createSlots(slots)
          }
          props.$$slots = this._slots
          props.$$scope = {}
        }

        if (this._use) {
          props.use = this._use
        }

        if (passTarget) {
          props.target = this
        }

        this.component = new Component({
          target: outside ? this.parentNode : this,
          anchor: outside ? this : null,
          props
        })

        events.forEach((event) => {
          this.component.$on(event, (e) => {
            this.dispatchEvent(e)
          })
        })

        dispatchEvent(this, 'mount')
      }

      destroy() {
        this.component.$destroy()
        this.component = null

        if (this._children.length) {
          const fragment = document.createDocumentFragment()
          this._children.forEach((node) => {
            fragment.appendChild(node)
          })
          this.appendChild(fragment)
        }

        dispatchEvent(this, 'destroy')
      }
    }
  )
}

function typeCast(value, type) {
  switch (type) {
    case 'boolean':
      return value !== 'false'
    case 'number':
      return Number(value)
    case 'array':
    case 'object':
      // eslint-disable-next-line no-eval
      return eval(`(${value})`)
    case 'string':
    default:
      return value
  }
}

function createSlots(slots) {
  const svelteSlots = {}

  for (const slotName in slots) {
    svelteSlots[slotName] = [createSlotFn(slots[slotName])]
  }

  function createSlotFn(nodes) {
    return () => {
      return {
        c: noop,
        m: function mount(target, anchor) {
          const frag = document.createDocumentFragment()
          nodes.forEach((node) => frag.appendChild(node))
          insert(target, frag, anchor)
        },
        d: function destroy(detaching) {
          if (detaching) {
            nodes.forEach((node) => detach(node))
          }
        },
        l: noop
      }
    }
  }

  return svelteSlots
}
