import { tick } from 'svelte'
import { detach, insert, noop } from 'svelte/internal'

export function createSlots(slots) {
  const svelteSlots = {}

  for (const slotName in slots) {
    svelteSlots[slotName] = [createSlotFn(slots[slotName])]
  }

  function createSlotFn(element) {
    return function () {
      return {
        c: noop,

        m: function mount(target, anchor) {
          insert(target, element, anchor)
        },

        d: function destroy(detaching) {
          if (detaching) {
            detach(element)
          }
        },

        l: noop
      }
    }
  }

  return svelteSlots
}

export function waitRAF() {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve)
  })
}

export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function waitTransition(ms) {
  await tick()
  await waitRAF()
  await wait(ms)
  await waitRAF()
  await tick()
}
