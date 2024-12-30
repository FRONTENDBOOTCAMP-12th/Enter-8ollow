import { LitElement, html, css } from 'lit';
import { register } from 'swiper/element/bundle';
import {} from '/src/pages/main/Exchange/Exchange.js';
import {} from '/src/pages/main/SeniorStory/SeniorStory.js';

register();

class MainPage extends LitElement {
  static properties = {
    activeIndex: { type: Number },
    menuItems: { type: Array },
    category: { type: String },
  };

  constructor() {
    super();
    this.activeIndex = 0;
    this.updateMenuItems(this.activeIndex);
  }

  // 탭 인덱스에 따라 메뉴 아이템 업데이트
  updateMenuItems(index) {
    const menuConfigs = {
      0: ['📝 글쓰기', '🧩 카테고리'],
      1: ['🎧 헤드셋', '⌨️ 키보드', '🖱️ 마우스', '💻 컴퓨터', '🎈 기타 등등'],
      2: ['❓ 질문하기', '💡 답변하기', '🔍 검색하기', '📌 스크랩'],
      3: [],
    };

    this.menuItems = menuConfigs[index] || [];
  }

  handleTabChange(event) {
    const { index } = event.detail;
    this.activeIndex = index;
    this.updateMenuItems(index); // 탭 변경 시 메뉴 아이템 업데이트

    // Swiper 슬라이드 변경
    const swiperEl = this.renderRoot.querySelector('swiper-container');
    if (swiperEl && swiperEl.swiper) {
      swiperEl.swiper.slideTo(index);
    }
  }

  handleIndexClicked(event) {
    const index = event.detail.index;
    console.log('클릭된 인덱스:', index);

    if (this.activeIndex === 0) {
      if (index === 0) {
        location.href = '/src/pages/main/writeSenior/';
      }
    } else if (this.activeIndex === 1) {
      if (index === 0) {
        this.category = 'Headset';
        console.log('카테고리:', this.category);
      }
      if (index === 1) {
        this.category = 'Keyboard';
        console.log('카테고리:', this.category);
      }
      if (index === 2) {
        this.category = 'Computer';
        console.log('카테고리:', this.category);
      }
      if (index === 3) {
        this.category = 'Etc';
        console.log('카테고리:', this.category);
      }
    }

    if (this.activeIndex === 1) {
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
            <exchange-page category="${this.category}"></exchange-page>
          </swiper-slide>
          <swiper-slide>
            <qna-page></qna-page>
          </swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>

          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper-container>

        <plus-button
          .items="${this.menuItems}"
          @index-clicked="${this.handleIndexClicked}"
        ></plus-button>

        <base-header></base-header>
      </div>
    `;
  }
}

customElements.define('main-page', MainPage);
