<script>
  import { createEventDispatcher } from 'svelte'
  import Input from './Input.svelte'
  import Button from './Button.svelte'

  export let value = null

  let controlEl
  const dispatch = createEventDispatcher()

  $: fileName = value ? value.name : ''
  $: dispatch('update', value)

  function onClick() {
    controlEl.click()
  }
  function onFileSelect(e) {
    value = e.target.files[0]
  }
</script>

<div class="file-input">
  <input
    type="file"
    name="image"
    tabindex="-1"
    accept="image/*"
    class="file-input__control"
    bind:this={controlEl}
    on:change={onFileSelect}
  />
  <div class="file-input__field">
    <Input
      class="file-input__input"
      value={fileName}
      tabindex="-1"
      readonly
      placeholder="Choose file..."
      aria-label="Choose file..."
    />
    <Button variant="primary" class="file-input__button" on:click={onClick}>
      Обзор
    </Button>
  </div>
</div>

<style lang="scss" global>
  .file-input {
    &__control {
      @include visually-hidden;
    }
    &__field {
      position: relative;
      display: flex;
      align-items: center;
    }
    &__input.input {
      flex: 1 1 auto;
    }
    &__button.button {
      flex: 0 0 auto;
      margin-left: 5px;
    }
  }

  app-file-input:defined {
    display: block;
  }
</style>
