<script>
  import Icon from './common/Icon.svelte'
</script>

<a class="subscribe {$$restProps.class}" href="/">
  подписаться
  <Icon name="arrow-right" class="subscribe__icon" />
</a>

<style lang="scss" global>
  .subscribe {
    display: inline-flex;
    align-items: center;
    background-color: $yellow;
    font-size: 9px;
    font-weight: bold;
    height: 32px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    padding: 0 20px 0 25px;
    transition: background-color $transition;

    &:hover {
      background-color: darken($yellow, 15%);
    }

    &__icon {
      margin-left: 11px;
      font-size: 7px;
    }
  }
</style>
