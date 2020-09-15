<script>
  // import Spinner from './Spinner.svelte'
  import { actions } from '@/actions'

  let className = ''
  export { className as class }
  export let size = ''
  export let variant = ''
  export let loading = false
  export let type = 'button'
  export let href = ''
  export let use = []

  $: classes = [
    'button',
    variant && `button_${variant}`,
    size && `button_${size}`,
    loading && 'button_loading',
    className
  ]
    .filter((c) => c)
    .join(' ')
</script>

{#if href}
  <a class={classes} {href} {...$$restProps} use:actions={use} on:click>
    <span class="button__content">
      <slot />
    </span>
    {#if loading}
      <!--      <Spinner size={23} width={2} class="button__spinner" />-->
    {/if}
  </a>
{:else}
  <button class={classes} {type} {...$$restProps} use:actions={use} on:click>
    <span class="button__content">
      <slot />
    </span>
    {#if loading}
      <!--      <Spinner size={23} width={2} class="button__spinner" />-->
    {/if}
  </button>
{/if}

<style lang="scss" global>
  .button {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    color: $body-color;
    user-select: none;
    background-color: transparent;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.3;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    height: 46px;
    padding: 6px 12px;
    width: 172px;
    margin: 0 24px;
    transition: $transition;
    transition-property: color, background-color;
    max-width: 100%;
    flex: 0 0 auto;
    position: relative;

    @include down(md) {
      height: 42px;
      font-size: 10px;
      width: 132px;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;

      @include down(md) {
        transform: scaleY(0.9) translateY(-2px);
      }
    }

    &:before {
      @include triangle(46px 24px, $blue-dark, left);
      left: -24px;
    }

    &:after {
      @include triangle(46px 24px, $blue-dark, right);
      right: -24px;
    }

    &:hover {
      text-decoration: none;
    }

    &[disabled] {
      pointer-events: none;
      opacity: 0.65;
    }

    &_primary {
      color: #ffffff;
      background-color: $blue-dark;

      &:hover {
        //background-color: lighten($blue-dark, 4%);
      }

      &:active {
        //background-color: darken($blue-dark, 4%);
      }
    }

    &_small {
      padding: 4px 8px;
      font-size: 14px;
    }

    &_large {
      padding: 8px 16px;
      font-size: 20px;
    }

    &_loading {
      pointer-events: none;
      transition: none;
    }

    &__content {
      align-items: center;
      display: flex;
      flex: 1 0 auto;
      justify-content: inherit;
    }

    &_loading &__content {
      opacity: 0;
    }

    & &__spinner {
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  /*app-button:defined {
    display: inline-flex;
    vertical-align: middle;
  }

  app-button:not(:defined) {
    @extend .button;
    -webkit-appearance: none !important;

    &[variant='primary'] {
      @extend .button_primary;
    }

    &[size='small'] {
      @extend .button_small;
    }

    &[size='large'] {
      @extend .button_large;
    }
  }*/
</style>
