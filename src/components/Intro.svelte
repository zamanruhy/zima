<script>
  import Article from './Article.svelte'
  import TopNews from './TopNews.svelte'
  import preview1 from '../assets/img/article-preview-1.jpg'
  import preview2 from '../assets/img/article-preview-2.jpg'
  import preview3 from '../assets/img/article-preview-3.jpg'
</script>

<div class="intro">
  <div class="intro__item">
    <Article
      src={preview1}
      rubric="Личное мнение"
      title="Эстетика и драма:  10 самых стильных британских сериалов"
      author="редакция"
      variant="cover"
    />
  </div>
  <div class="intro__item">
    <Article
      src={preview2}
      rubric="Ковид"
      title="Период с 28 марта до 3 апреля стал самой «смертоносной» неделей в Великобритании с 2005 года"
      author="редакция"
      variant="compact"
    />
    <Article
      src={preview3}
      rubric="Герои"
      title="99-летний армейский ветеран собрал £2 миллиона для NHS"
      author="редакция"
      variant="compact"
    />
  </div>
  <div class="intro__item">
    <TopNews />
  </div>
</div>

<style lang="scss" global>
  .intro {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px;

    @include down(lg) {
      grid-template-columns: repeat(6, 1fr);
    }
    @include down(md) {
      grid-template-columns: repeat(4, 1fr);
    }

    &__item {
      &:nth-child(1) {
        grid-column: 1 / 7;

        @include up(lg) {
          margin-right: 30px;
        }
        @include down(lg) {
          grid-column: 1 / 5;
        }
        @include down(md) {
          grid-column: 1 / -1;
        }
      }
      &:nth-child(2) {
        grid-column: 7 / 10;
        display: grid;
        grid-row-gap: 26px;
        align-content: flex-start;

        @include up(lg) {
          margin: 0 30px 0 -30px;
        }
        @include down(lg) {
          grid-column: 5 / -1;
          /*grid-row-gap: 29px;*/
        }
        @include down(md) {
          grid-column: 1 / -1;
          margin-top: 32px;
          grid-row-gap: 20px;
        }
      }
      &:nth-child(3) {
        grid-column: 10 / -1;

        @include up(lg) {
          border-left: 1px solid $gray-light;
          padding-left: 30px;
          margin-left: -30px;
        }
        @include down(lg) {
          grid-column: 1 / -1;
          margin-top: 37px;
          border-top: 1px solid $gray-light;
          padding-top: 29px;
        }
        @include down(md) {
          margin-top: 32px;
          padding-top: 23px;
        }
      }
    }
  }
</style>
