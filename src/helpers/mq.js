import { readable, derived } from 'svelte/store'

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}
const mqObj = {}

export const mq = readable(undefined, (set) => {
  const dispose = []
  Object.keys(breakpoints).forEach((bp) => {
    const width = breakpoints[bp]
    const query = `(min-width: ${width}px)`
    const cb = ({ matches }) => {
      mqObj[`${bp}Up`] = matches
      mqObj[`${bp}Down`] = !matches
      set(mqObj)
    }
    dispose.push(listen(query, cb))
  })
  return () => {
    dispose.forEach((d) => d())
  }
})

export const smUp = derived(mq, ($mq) => $mq.smUp)
export const smDown = derived(mq, ($mq) => $mq.smDown)
export const mdUp = derived(mq, ($mq) => $mq.mdUp)
export const mdDown = derived(mq, ($mq) => $mq.mdDown)
export const lgUp = derived(mq, ($mq) => $mq.lgUp)
export const lgDown = derived(mq, ($mq) => $mq.lgDown)
export const xlUp = derived(mq, ($mq) => $mq.xlUp)
export const xlDown = derived(mq, ($mq) => $mq.xlDown)

function listen(query, cb) {
  const mql = window.matchMedia(query)
  cb(mql)
  mql.addListener(cb)

  return () => {
    mql.removeListener(cb)
  }
}
