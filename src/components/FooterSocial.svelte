<script>
  import Icon from './common/Icon.svelte'
</script>

<ul class="footer-social">
  <li class="footer-social__item footer-social__item_in">
    <a
      href="https://www.instagram.com/Zima_magazine/"
      target="_blank"
      class="footer-social__link"
      rel="noopener noreferrer"
    >
      <span class="footer-social__icon-wrap">
        <Icon name="in" />
      </span> Instagram
    </a>
  </li>
  <li class="footer-social__item footer-social__item_fb">
    <a
      href="https://www.facebook.com/ZIMAmagazine/"
      target="_blank"
      class="footer-social__link"
      rel="noopener noreferrer"
    >
      <span class="footer-social__icon-wrap">
        <Icon name="fb" />
      </span> Facebook
    </a>
  </li>
  <li class="footer-social__item footer-social__item_tg">
    <a
      href="https://t.me/zimamagazine"
      target="_blank"
      class="footer-social__link"
      rel="noopener noreferrer"
    >
      <span class="footer-social__icon-wrap">
        <Icon name="tg" />
      </span> Telegram
    </a>
  </li>
  <li class="footer-social__item footer-social__item_yt">
    <a
      href="https://www.youtube.com/channel/UC1xOS7jTc9lrriBL-Nr-bgQ/videos?shelf_id=1&view=0&sort=dd"
      target="_blank"
      class="footer-social__link"
      rel="noopener noreferrer"
    >
      <span class="footer-social__icon-wrap">
        <Icon name="yt" />
      </span> Youtube
    </a>
  </li>
</ul>

<style lang="scss" global>
  .footer-social {
    display: grid;
    grid-row-gap: 8.7px;

    @include down(md) {
      grid-template-rows: repeat(2, auto);
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      grid-column-gap: var(--grid-gutter);
    }

    &__item {
      display: flex;
      justify-content: flex-start;

      & + & {
        /*margin-top: 8.7px;*/
      }
    }
    &__link {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #212020;
      min-width: 48px;
    }
    &__icon-wrap {
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      width: 17px;
      margin-right: 15px;
      position: relative;
      top: 1px;
    }
    &__item_in &__icon-wrap {
      color: $dark;
      font-size: 14.29px;
    }
    &__item_fb &__icon-wrap {
      color: #164c8c;
      font-size: 14.29px;
    }
    &__item_tg &__icon-wrap {
      color: #5599d9;
      font-size: 11.9px;
    }
    &__item_yt &__icon-wrap {
      color: #e42313;
      font-size: 12px;
    }
  }
</style>
