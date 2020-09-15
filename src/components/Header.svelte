<script>
  import Icon from './common/Icon.svelte'
  import Subscribe from './Subscribe.svelte'
  import Social from './Social.svelte'
  import Hamburger from './common/Hamburger.svelte'
  import Search from './Search.svelte'
</script>

<header class="header">
  <div class="container header__container">
    <div class="header__inner">
      <div class="header__slogan">Русский взгляд <br /> на мир из Лондона</div>
      <Hamburger class="header__hamburger" />
      <a href="/" class="header__logo">
        <Icon name="logo" role="img" aria-label="Zima Magazine" />
      </a>
      <Social class="header__social" />
      <Subscribe class="header__subscribe" />
      <Search size="small" class="header__search" />
    </div>
  </div>
</header>

<style lang="scss" global>
  .header {
    background-color: $blue-dark;
    color: #ffffff;

    @include down(lg) {
      margin-bottom: 50px;
    }
    @include down(md) {
      margin-bottom: 21px;
    }

    &__container {
    }
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 90px;
      position: relative;

      @include down(lg) {
        height: 64px;
      }
    }
    &__slogan {
      font-weight: 300;
      font-size: 15px;
      line-height: 1.1;
      letter-spacing: em(-0.4px, 15px);

      @include down(lg) {
        display: none;
      }
    }
    &__logo {
      font-size: 64px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      margin-top: 3px;
      color: #ffffff;
      transition: color $transition;

      &:hover {
        color: $gray;
      }

      @include down(lg) {
        font-size: 47px;
        margin-top: 0;
      }
    }
    &__social {
      margin-left: auto;

      @include down(lg) {
        display: none;
      }
    }
    &__subscribe {
      /*margin-left: 39px;*/
      margin-left: 3.1%;

      @include down(lg) {
        display: none;
      }
    }
    &__hamburger {
      @include up(lg) {
        display: none;
      }
    }
    &__search {
      position: relative;
      right: 1px;

      @include up(lg) {
        display: none;
      }
    }
  }
</style>
