import { customElement } from '@/utils'

import Test from '@/components/common/Test.svelte'
import Spinner from '@/components/common/Spinner.svelte'
import Hamburger from '@/components/common/Hamburger.svelte'
import ToTop from '@/components/common/ToTop.svelte'
import Button from '@/components/common/Button.svelte'
import Collapse from '@/components/common/Collapse.svelte'
import { Swiper, SwiperSlide, swiperEvents } from '@/components/common/swiper'
import LazyImage from '@/components/common/LazyImage.svelte'
import { Tabs, TabList, Tab, TabPanel } from '@/components/common/tabs'
import Modal from '@/components/common/Modal.svelte'
import Drawer from '@/components/common/Drawer.svelte'
import Input from '@/components/common/Input.svelte'
import FileInput from '@/components/common/FileInput.svelte'
import Checkbox from '@/components/common/Checkbox.svelte'
import Radio from '@/components/common/Radio.svelte'

document.addEventListener('DOMContentLoaded', () => {
  customElement('app-test', Test)
  customElement('app-hamburger', Hamburger, {
    attrs: ['active:boolean'],
    events: ['update']
  })
  customElement('app-drawer', Drawer, {
    attrs: ['visible:boolean'],
    events: ['update', 'open', 'opened', 'close', 'closed']
  })
  customElement('app-modal', Modal, {
    attrs: [
      'id.',
      'visible:boolean',
      'no-close-on-backdrop:boolean',
      'no-close-on-esc:boolean',
      'variant'
    ],
    events: ['update', 'open', 'opened', 'close', 'closed']
  })
  customElement('app-button', Button, {
    attrs: ['size', 'variant', 'loading:boolean', 'type', 'href']
  })
  customElement('app-collapse', Collapse, {
    attrs: ['id.', 'accordion', 'visible:boolean'],
    events: ['update', 'open', 'opened', 'close', 'closed']
  })
  customElement('app-swiper', Swiper, {
    attrs: [
      'index:number',
      'navigation:boolean',
      'pagination:boolean',
      'scrollbar:boolean',
      'options:object',
      'swiper:object'
    ],
    events: ['update', ...swiperEvents]
  })
  customElement('app-swiper-slide', SwiperSlide, { outside: true })
  customElement('app-lazy-image', LazyImage, {
    attrs: [
      'src',
      'srcset',
      'src-placeholder',
      'picture:boolean',
      'width:number',
      'height:number'
    ],
    events: ['load', 'error'],
    outside: true
  })
  customElement('app-tabs', Tabs, {
    attrs: ['index:number'],
    events: ['update'],
    passTarget: true
  })
  customElement('app-tab-list', TabList, { outside: true })
  customElement('app-tab', Tab, { outside: true, passTarget: true })
  customElement('app-tab-panel', TabPanel, {
    outside: true,
    passTarget: true
  })
  customElement('app-input', Input, {
    attrs: ['id.', 'value', 'label', 'type', 'autofocus:boolean']
  })
  customElement('app-file-input', FileInput, {
    attrs: ['value'],
    events: ['update']
  })
  customElement('app-checkbox', Checkbox, {
    attrs: ['value', 'checked:boolean', 'label']
  })
  customElement('app-radio', Radio, {
    attrs: ['value', 'checked:boolean', 'label']
  })
  customElement('app-spinner', Spinner, {
    attrs: ['size:number', 'width:number']
  })
  customElement('app-to-top', ToTop, { attrs: ['offset:number'] })
})
