<script>
  import Hamburger from './common/Hamburger.svelte'
  import Search from './Search.svelte'
</script>

<nav class="navbar">
  <div class="navbar__container container">
    <div class="navbar__inner">
      <Hamburger class="navbar__hamburger" />
      <ul class="navbar__nav">
        <li class="navbar__item">
          <a href="/" class="navbar__link">Новости</a>
        </li>
        <li class="navbar__item">
          <a href="/" class="navbar__link navbar__link_active">Истории</a>
        </li>
        <li class="navbar__item">
          <a href="/" class="navbar__link">Инструкции</a>
        </li>
        <li class="navbar__item">
          <a href="/" class="navbar__link">Мнения</a>
        </li>
        <li class="navbar__item">
          <a href="/" class="navbar__link">Подборки</a>
        </li>
        <li class="navbar__item">
          <a href="/" class="navbar__link">Интерактив</a>
        </li>
        <li class="navbar__item"><a href="/" class="navbar__link">Клуб</a></li>
        <li class="navbar__item">
          <a href="/" class="navbar__link">магазин</a>
        </li>
      </ul>
      <Search class="navbar__search" />
    </div>
  </div>
</nav>

<style lang="scss" global>
  .navbar {
    color: #000000;
    margin-bottom: 30px;

    @include down(lg) {
      display: none;
    }

    &__container {
    }
    &__inner {
      position: relative;
      border-bottom: 1px solid $gray-light;
    }
    &__nav {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: -1px;
    }
    &__item {
      & + & {
        margin-left: 38.5px; // 3.3%

        @supports (margin-left: clamp(1px, 1%, 2px)) {
          margin-left: clamp(35px, 3.3%, 38.5px);
        }
      }
    }
    &__link {
      display: block;
      font-weight: 500;
      font-size: 11px;
      align-items: center;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #000000;
      padding: 0 0 1px;
      line-height: 60px;
      position: relative;

      &_active {
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background-color: $blue-dark;
        }
      }
    }
    &__hamburger {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(calc(-50% + 1px));
    }
    &__search {
      position: absolute;
      top: 50%;
      right: 4px;
      transform: translateY(calc(-50% + 1px));
    }
  }
</style>
