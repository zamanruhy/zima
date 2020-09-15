<script>
  import FooterSocial from './FooterSocial.svelte'
  import Icon from './common/Icon.svelte'
</script>

<footer class="footer">
  <div class="footer__top">
    <div class="footer__container container">
      <div class="footer__content">
        <div class="footer__col">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="/" class="footer__link">Новости</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Истории</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Инструкции</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Мнения</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Подборки</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Интерактив</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="/" class="footer__link">Наш Лондон</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Клуб</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Фотоконкурс</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">ZIMA StartUp</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Магазин</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="/" class="footer__link">Рекламодателям</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Контакты</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">О проекте</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">About us</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Privacy policy</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Rss</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <FooterSocial />
        </div>
        <div class="footer__col">
          <div class="footer__extra">
            <a href="/" class="footer__block-link">
              Поиск
              <Icon name="arrow-diagonal" class="footer__block-link-icon" />
            </a>
            <a href="/" class="footer__block-link">
              Подписаться на рассылку
              <Icon name="arrow-diagonal" class="footer__block-link-icon" />
            </a>
            <a
              href="https://www.giftoflife.eu/"
              class="footer__charity"
              rel="noopener noreferrer"
            >
              <Icon name="gift-of-life" img class="footer__charity-icon" />
              <div class="footer__charity-text">
                We are proud to support  Gift of Life charity
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="footer__container container">
      <div class="footer__meta">
        <div class="footer__copyright">
          Copyright © 2017-2020 ZIMA Magazine | Все права защищены
        </div>
        <div class="footer__misprint">
          Нашли ошибку? Выделите ее и нажмите CNRTL + ENTER
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss" global>
  .footer {
    border-top: 1px solid $gray-light;
    margin-top: 80px;

    @include down(lg) {
      margin-top: 69px;
    }
    @include down(md) {
      margin-top: 71px;
    }

    &__top {
      padding: 44px 0 48px;

      @include down(lg) {
        padding-bottom: 30px;
      }
      @include down(md) {
        padding-top: 31px;
        padding-bottom: 28px;
      }
    }
    &__container {
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: var(--grid-gutter);

      @include down(lg) {
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 46px;
      }
      @include down(md) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 26px;
      }
    }
    &__col {
      &:nth-child(3) {
        @include down(md) {
          grid-column: 1 / -1;
          border-top: 1px solid $gray-light;
          border-bottom: 1px solid $gray-light;
          padding: 22px 0 26px;
        }
      }
      &:nth-child(4) {
        @include down(md) {
          grid-column: 1 / -1;
          border-bottom: 1px solid #edeff3;
          padding-bottom: 25px;
          margin-top: -5px;
        }
      }
      &:last-child {
        grid-column: span 2;

        @include down(lg) {
          grid-column: 1 / -1;
        }
      }
    }
    &__list {
      /*display: flex;
      flex-direction: column;
      align-items: flex-start;*/
      display: grid;
      grid-row-gap: 11px;
    }
    &__col:nth-child(3) &__list {
      @include down(md) {
        grid-template-rows: repeat(3, auto);
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        grid-column-gap: var(--grid-gutter);
      }
    }
    &__item {
      display: flex;
      justify-content: flex-start;
    }
    &__link {
      font-size: 13px;
      color: $dark;
      min-width: 48px;
      //transition: color $transition;

      &:hover {
        text-decoration: underline;
      }

      & + & {
        //margin-top: 11px;
      }
    }
    &__extra {
      /*display: flex;
      flex-wrap: wrap;
      margin: 0 -4.5px;*/
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 9px;
      margin: 6px 8.6% 0 -2.5%;

      @include down(lg) {
        margin: 0;
        grid-template-columns: 1fr 1fr 0.71fr;
        grid-gap: 20px;
      }
      @include down(md) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
        margin-top: 4px;
      }
    }
    &__block-link {
      font-size: 11.5px;
      color: $blue;
      border: 1px solid $blue;
      /*width: calc(50% - 9px);
      margin: 0 4.5px;*/
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 10px 10px 7px 9px;
      transition: $transition;
      transition-property: color, background-color;

      &:hover {
        color: #ffffff;
        background-color: $blue;
      }
    }
    &__block-link-icon {
      font-size: 9px;
      align-self: flex-start;
    }
    &__charity {
      font-size: 11px;
      line-height: 1.273;
      display: flex;
      align-items: center;
      /*width: calc(50% - 9px);
      margin-left: calc(50% + 4.5px);*/
      margin-top: 35px;
      grid-column: 2;
      align-self: center;
      justify-self: flex-start;
      color: $dark;
      //transition: color $transition;

      &:hover {
        //color: $blue-dark;
        text-decoration: underline;
      }

      @include down(lg) {
        margin: 0;
        grid-column: auto;
      }
      @include down(md) {
        margin-top: 22px;
      }
    }
    &__charity-icon {
      font-size: 40px;
      margin-right: 9px;
      position: relative;
      top: -1px;
      flex: 0 0 auto;
    }
    &__charity-text {
      max-width: 139.5px;
    }
    &__bottom {
      border-top: 1px solid $gray-light;
    }
    &__meta {
      color: $gray;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1.273;
      padding: 14px 0;
    }
    &__copyright {
      font-size: 11px;
    }
    &__misprint {
      font-size: 13px;
      letter-spacing: em(-0.5px, 13px);
      margin-right: 5.5%;

      @include down(lg) {
        display: none;
      }
    }
  }
</style>
