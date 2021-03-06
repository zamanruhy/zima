<script>
  import Swiper from 'swiper/bundle'
  import {
    onMount,
    afterUpdate,
    onDestroy,
    tick,
    createEventDispatcher
  } from 'svelte'
  import events from './events'

  export let index = 0
  export let navigation = false
  export let pagination = false
  export let scrollbar = false
  export let options = {}
  export let swiper = null

  let el
  let wrapperEl
  let nextEl
  let prevEl
  let paginationEl
  let scrollbarEl
  let ready = false
  const dispatch = createEventDispatcher()

  $: computedOptions = {
    ...options,
    navigation: navigation
      ? {
          nextEl: nextEl,
          prevEl: prevEl,
          ...options.navigation
        }
      : {},
    pagination: pagination
      ? {
          el: paginationEl,
          type: 'bullets',
          clickable: true,
          ...options.pagination
        }
      : {},
    scrollbar: scrollbar
      ? {
          el: scrollbarEl,
          ...options.scrollbar
        }
      : {}
  }
  $: dispatch('update', index)
  $: if (swiper && swiper.realIndex !== index) {
    swiper.slideToLoop(index)
  }
  $: computedOptions, ready && updateInstance()

  function mountInstance() {
    if (swiper) {
      return
    }
    swiper = new Swiper(el, {
      ...computedOptions,
      initialSlide: index
    })
    swiper.on('slideChange', () => {
      index = swiper.realIndex
    })
    bindEvents()
  }
  function bindEvents() {
    events.forEach((event) => {
      swiper.on(event, (...args) => {
        dispatch(event, args)
      })
    })
  }
  function destroyInstance() {
    if (swiper) {
      swiper.destroy()
      swiper = null
    }
  }
  function updateInstance() {
    destroyInstance()
    mountInstance()
  }
  function update() {
    if (swiper) {
      swiper.update()
      if (computedOptions.loop) {
        swiper.loopDestroy()
        swiper.loopCreate()
      }
    }
  }

  onMount(async () => {
    await tick()
    ready = true
  })

  onDestroy(() => {
    destroyInstance()
  })

  afterUpdate(() => {
    if (ready) {
      update()
    }
  })
</script>

<div class="swiper-container" bind:this={el}>
  <slot name="before-wrapper" />

  <div class="swiper-wrapper" bind:this={wrapperEl}>
    <slot />
  </div>

  {#if pagination}
    <div class="swiper-pagination" bind:this={paginationEl} />
  {/if}

  {#if navigation}
    <div class="swiper-button-prev" bind:this={prevEl}>
      <slot name="prev" />
    </div>
    <div class="swiper-button-next" bind:this={nextEl}>
      <slot name="next" />
    </div>
  {/if}

  {#if scrollbar}
    <div class="swiper-scrollbar" bind:this={scrollbarEl} />
  {/if}

  <slot name="after-wrapper" />
</div>

<style lang="scss" global>
  @import '~swiper/swiper-bundle.css';

  :root {
    --swiper-theme-color: #{$primary};
  }

  app-swiper:defined {
    display: block;
  }

  app-swiper-slide:defined {
    display: none !important;
  }

  app-swiper:not(:defined) {
    display: flex;
    overflow: hidden;
    margin: 0 auto;

    > [slot] {
      display: none;
    }
  }

  app-swiper-slide:not(:defined) {
    display: block;
    flex: none;
    width: 100%;
  }
</style>
