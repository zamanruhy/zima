<script>
  import Icon from './common/Icon.svelte'

  export let size = ''

  $: classes = ['search', size && `search_${size}`, $$restProps.class]
    .filter((c) => c)
    .join(' ')
</script>

<div class={classes}>
  <button class="search__button" aria-label="Найти">
    <Icon name="magnifier" />
  </button>
</div>

<!--<input type="text" aria-label="Поиск по сайту">-->

<style lang="scss" global>
  .search {
    &__button {
      display: flex;
      background-color: transparent;
      padding: 0;
      border: none;
      font-size: 17px;
      cursor: pointer;
      position: relative;
      outline-offset: 6px;

      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 48px;
        height: 48px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &_small &__button {
      font-size: 16px;
    }
  }
</style>
