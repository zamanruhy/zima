import 'what-input'
import '@/assets/scss/main.scss'
// import '@/data-attributes'
// import '@/custom-elements'
// import header from '@/components/header/header'

import App from './App.svelte'

// eslint-disable-next-line no-new
new App({
  target: document.body,
  props: {}
})

// header()

// // Require all component styles
// const requireStyle = require.context('@/components', true, /\.scss$/)
// requireStyle.keys().forEach(requireStyle)

// // Live reload on templates changes in dev mode
// if (process.env.NODE_ENV === 'development') {
//   const requirePage = require.context('@/pages', true, /\.ejs$/)
//   requirePage.keys().forEach(requirePage)
//   const requireCompView = require.context('@/components', true, /\.ejs$/)
//   requireCompView.keys().forEach(requireCompView)
// }
