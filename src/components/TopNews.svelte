<script>
  import Button from './common/Button.svelte'
  import Icon from './common/Icon.svelte'
</script>

<div class="top-news">
  <h2 class="top-news__title">
    Топ новостей
    <Icon name="bookmark" class="top-news__title-icon" />
  </h2>
  <ul class="top-news__list">
    <li class="top-news__item">
      <div class="top-news__item-date">18/05/2020</div>
      <h3 class="top-news__item-title">
        <a href="/" class="top-news__item-link">
          <span class="top-news__item-rubric">Личное мнение / </span> Вышел трейлер
          мини-сериала BBC «Отравления  в Солсбери»
        </a>
      </h3>
    </li>
    <li class="top-news__item">
      <div class="top-news__item-date">18/05/2020</div>
      <h3 class="top-news__item-title">
        <a href="/" class="top-news__item-link">
          <span class="top-news__item-rubric">Ковид / </span> Первое фото после карантина:
          королева выехала  на верховую прогулку
        </a>
      </h3>
    </li>
    <li class="top-news__item">
      <div class="top-news__item-date">18/05/2020</div>
      <h3 class="top-news__item-title">
        <a href="/" class="top-news__item-link">
          <span class="top-news__item-rubric">Сенсация / </span> Корабль Crew Dragon
          пристыковался к МКС
        </a>
      </h3>
    </li>
    <li class="top-news__item">
      <div class="top-news__item-date">18/05/2020</div>
      <h3 class="top-news__item-title">
        <a href="/" class="top-news__item-link">
          <span class="top-news__item-rubric">Ковид / </span> Британцы потеряли сон
          из-за коронавируса
        </a>
      </h3>
    </li>
  </ul>
  <div class="top-news__footer">
    <Button variant="primary" href="all">все новости</Button>
  </div>
</div>

<style lang="scss" global>
  .top-news {
    &__title {
      font-family: $font-family-secondary;
      font-weight: bold;
      font-size: 30px;
      line-height: 1.07;
      margin: 0 0 32px;
      position: relative;
      display: inline-block;
      padding-right: 36px;

      @include down(lg) {
        padding-right: 35px;
      }

      @include down(md) {
        font-size: 20px;
        margin-bottom: 17px;
        line-height: 1.2;
        padding-right: 20px;
      }
    }
    &__title-icon {
      position: absolute;
      top: 3px;
      right: 0;
      font-size: 31px;
      color: $yellow;

      @include down(md) {
        top: 5px;
        font-size: 19px;
      }
    }
    &__list {
      display: grid;
      grid-row-gap: 23px;

      @include down(lg) {
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 33px;
      }
      @include down(md) {
        grid-row-gap: 13px;
      }
    }
    &__item {
      @include down(lg) {
        grid-column: span 3;
      }
      @include down(md) {
        grid-column: 1 / -1;
      }
    }
    &__item-date {
      font-weight: 700;
      font-size: 11px;
      line-height: 1.3;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: $gray;
      opacity: 0.7;
      margin-bottom: 11px;

      @include down(md) {
        font-weight: 500;
        font-size: 8px;
        margin-bottom: 8px;
      }
    }
    &__item-title {
      font-family: $font-family-secondary;
      font-weight: bold;
      font-size: 16px;
      line-height: 1.32;
      margin: 0;
      //max-width: 300px;

      @include down(md) {
        font-size: 14px;
        line-height: 1.3;
      }
    }
    &__item-link {
      display: inline-block;
      color: $dark;

      &:hover {
        text-decoration: underline;
      }
    }
    &__item-rubric {
      color: $blue;
    }
    &__footer {
      margin-top: 57px;

      @include down(lg) {
        margin-top: 35px;
      }
      @include down(md) {
        margin-top: 25px;
        text-align: center;
      }
    }
  }
</style>
