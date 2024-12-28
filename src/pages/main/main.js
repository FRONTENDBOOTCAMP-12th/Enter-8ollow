import { LitElement, html, css } from 'lit';
import { register } from 'swiper/element/bundle';
import {} from '/src/pages/main/exchange/exchange.js';
import {} from '/src/pages/main/SeniorStory/SeniorStory.js';

register();

class MainPage extends LitElement {
  static properties = {
    activeIndex: { type: Number },
  };

  static styles = css`
    .app {
      padding-bottom: 70px;
      padding-block-end: 70px;
    }

    button {
      cursor: pointer;
      all: unset;
    }

    .nav-pagination {
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 15px;
      z-index: 1000;
    }

    .bullet {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #666;
      font-weight: bold;
    }

    .bullet.is-active {
      background: #007bff;
      color: white;
      transform: scale(1.2);
    }

    swiper-container {
      width: 100%;
      height: 100vh;
    }
  `;

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
  }

  render() {
    return html`
      <div class="app">
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
            <exchange-page></exchange-page>
          </swiper-slide>
          <swiper-slide>
            <qna-page></qna-page>
          </swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>

          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper-container>

        <base-header></base-header>
      </div>
    `;
  }
}

customElements.define('main-page', MainPage);
