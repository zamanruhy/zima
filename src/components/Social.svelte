<script>
  import Icon from './common/Icon.svelte'
</script>

<ul class="social {$$restProps.class}">
  <li class="social__item social__item_in">
    <a
      href="https://www.instagram.com/Zima_magazine/"
      target="_blank"
      class="social__link"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Icon name="in" />
    </a>
  </li>
  <li class="social__item social__item_fb">
    <a
      href="https://www.facebook.com/ZIMAmagazine/"
      target="_blank"
      class="social__link"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <Icon name="fb" />
    </a>
  </li>
  <li class="social__item social__item_tg">
    <a
      href="https://t.me/zimamagazine"
      target="_blank"
      class="social__link"
      rel="noopener noreferrer"
      aria-label="Telegram"
    >
      <Icon name="tg" />
    </a>
  </li>
  <li class="social__item social__item_yt">
    <a
      href="https://www.youtube.com/channel/UC1xOS7jTc9lrriBL-Nr-bgQ/videos?shelf_id=1&view=0&sort=dd"
      target="_blank"
      class="social__link"
      rel="noopener noreferrer"
      aria-label="YouTube"
    >
      <Icon name="yt" />
    </a>
  </li>
</ul>

<style lang="scss" global>
  .social {
    display: flex;
    align-items: center;

    &__item {
      flex: 0 0 auto;

      & + & {
        /*margin-left: 6px;*/
      }

      &_in {
        font-size: 16px;
      }
      &_fb {
        font-size: 16px;
      }
      &_tg {
        font-size: 13.33px;
      }
      &_yt {
        font-size: 14px;
      }
    }
    &__link {
      display: flex;
      /*height: 32px;*/
      align-items: center;
      padding: 8px; // 5px
      color: #ffffff;
      transition: color $transition;

      &:hover {
        color: $gray;
      }
    }
  }
</style>
