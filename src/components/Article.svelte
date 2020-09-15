<script>
  let className = ''
  export { className as class }
  export let src = ''
  export let href = '/'
  export let rubric = ''
  export let title = ''
  export let author = ''
  export let variant = ''

  $: classes = ['article', variant && `article_${variant}`, className]
    .filter((c) => c)
    .join(' ')
</script>

<a {href} class={classes}>
  <div class="article__image">
    <img {src} alt={title} class="article__img" />
  </div>
  <h2 class="article__title">
    <span class="article__rubric">{rubric} / </span>
    {title}
  </h2>
  <div class="article__author">{author}</div>
</a>

<style lang="scss" global>
  .article {
    color: inherit;
    display: flex;
    flex-direction: column;

    &_compact {
      @include down(md) {
        display: grid;
        /*grid-template-columns: 1.12fr 2fr;*/
        grid-template-columns: auto 2fr;
        grid-template-rows: auto auto;
        /*grid-column-gap: 10px;*/
        grid-column-gap: min(3.5%, 20px);
      }
    }

    &__image {
      order: -1;
      height: 0;
      position: relative;
      padding-bottom: 80%;
    }
    &_cover &__image {
      margin-bottom: 22px;
      padding-bottom: 83.5%;

      @include down(lg) {
        margin-bottom: 27px;
      }
      @include down(md) {
        margin: 0;
        padding-bottom: 68.4%;
      }
    }
    &_compact &__image {
      margin-bottom: 18px;
      /*overflow: hidden;*/
      padding-bottom: 74%;

      @include down(md) {
        margin: 0;
        /*height: 80px;*/
        padding-bottom: 78%;
        grid-row: 1 / -1;
        width: linear(102px, 200px, 320px, 768px);
      }
    }
    &__img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
    &__title {
      font-family: $font-family-secondary;
      font-weight: bold;
    }
    &_cover &__title {
      font-size: 24px;
      line-height: 1.2;
      margin: 10px 0 0;

      @include down(lg) {
        margin: 11px 0 0;
      }
      @include down(md) {
        order: -2;
        /*font-size: 20px;*/
        /*line-height: 1.2;*/
        font-size: linear(20px, 24px, 320px, 768px);
        margin: 0 0 15px;
      }
      /*@include down(sm) {
        font-size: 20px;
      }*/
    }
    &_compact &__title {
      font-size: 14px;
      line-height: 1.22;
      margin: 9px 0 0;

      @include down(lg) {
        /*font-size: 12px;*/
      }
      @include down(md) {
        margin: -2px 0 5px;
        align-self: flex-start;
        font-size: linear(12px, 14px, 320px, 768px);
        line-height: 1.35;
        //line-height: linear(12px * 1.35, 14px * 1.22, 320px, 768px);
      }
      @include down(sm) {
        /*font-size: 12px;*/
        /*line-height: 1.35;*/
      }
    }
    &__rubric {
      color: $blue;
    }
    &__author {
      font-weight: 500;
      font-size: 10px;
      line-height: 1.3;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: $gray;
    }
    &_cover &__author {
      order: -1;

      @include down(md) {
        display: none;
      }
    }
    &_compact &__author {
      order: -1;

      @include down(md) {
        order: 0;
        align-self: flex-end;
        margin-bottom: -2px;
      }
      @include down(sm) {
        font-size: 8px;
      }
    }
  }
</style>
