<script>
  export let value = ''
  export let checked = false
  export let group = undefined
  export let label = ''

  if (checked) {
    handleChange(checked)
  }

  $: if (group !== undefined) {
    checked = group === value
  }

  function handleChange(on) {
    if (group !== undefined) {
      group = value
    } else {
      checked = on
    }
  }
</script>

<label class="radio" class:radio_single={!label}>
  <input
    class="radio__control"
    type="radio"
    {checked}
    {value}
    {...$$restProps}
    on:change={(e) => handleChange(e.target.checked)}
    on:change
  />
  <span class="radio__box" />
  {#if label}<span class="radio__label">{label}</span>{/if}
</label>

<style lang="scss" global>
  .radio {
    display: inline-flex;
    align-items: flex-start;
    vertical-align: middle;
    user-select: none;

    &__control {
      @include visually-hidden;
    }
    &__box {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      width: 16px;
      height: 16px;
      border: 1px solid #adb5bd;
      border-radius: 50%;
      background-color: #ffffff;
      position: relative;
      top: 4px;
    }
    &__control:focus ~ &__box {
      @include keyboard-intent() {
        @include focus-ring();
      }
    }
    &__control:checked ~ &__box {
      &:before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #666666;
      }
    }
    &__control:disabled ~ &__box {
      background-color: #e9ecef;
    }
    &_single &__box {
      top: 0;
    }
    &__label {
      display: inline-block;
      flex: 0 1 auto;
      margin-left: 8px;
    }
    &__control:disabled ~ &__label {
      color: #6c757d;
    }
  }

  app-radio:defined {
    display: inline-flex;
    vertical-align: middle;
  }

  app-radio:not(:defined) {
    @extend .radio;

    &:before {
      content: '';
      display: inline-block;
      @extend .radio__box;
    }
    &[disabled]:before {
      background-color: #e9ecef;
    }
    &:not([label]):before {
      top: 0;
    }
    &[label]:after {
      content: attr(label);
      @extend .radio__label;
    }
    &[disabled]:after {
      color: #6c757d;
    }
  }
</style>
