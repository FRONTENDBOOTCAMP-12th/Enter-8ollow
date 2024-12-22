import { LitElement, html } from 'lit';
import { register } from 'swiper/element/bundle';
import {} from '/src/pages/main/exchange/exchange.js';
import {} from '/src/pages/main/SeniorStory/SeniorStory.js';

register();

class MainPage extends LitElement {
  static properties = {
    activeIndex: { type: Number },
  };

  constructor() {
    super();
    this.activeIndex = 0;
  }

  handleTabChange(event) {
    const { index } = event.detail;
    this.activeIndex = index;

    // Swiper 슬라이드 변경
    const swiperEl = this.renderRoot.querySelector('swiper-container');
    if (swiperEl && swiperEl.swiper) {
      swiperEl.swiper.slideTo(index);
    }

    console.log('Tab changed to:', index);
  }

  render() {
    return html`
      <div class="time-celluar"></div>
      <region-menu></region-menu>
      <swiper-component></swiper-component>

      <nav-items
        .activeIndex="${this.activeIndex}"
        @change-event="${this.handleTabChange}"
      ></nav-items>

      <swiper-container>
        <swiper-slide>
          <senior-story></senior-story>
        </swiper-slide>
        <swiper-slide>
          <exchange-layout></exchange-layout>
        </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper-container>

      <base-header></base-header>
    `;
  }
}

customElements.define('main-page', MainPage);
