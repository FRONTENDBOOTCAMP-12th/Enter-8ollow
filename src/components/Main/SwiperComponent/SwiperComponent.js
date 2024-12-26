import { LitElement, html } from 'lit';
import { register } from 'swiper/element/bundle';
import { SwiperSlide } from '/src/components/Main/SwiperComponent/SwiperComponentCSS?inline';

import mainImage from '/src/assets/MainSwiper.png';

register();

class SwiperComponent extends LitElement {
  static get properties() {
    return {
      swiperInstance: { type: Object },
    };
  }

  static styles = SwiperSlide;

  firstUpdated() {
    this.swiperInstance =
      this.renderRoot.querySelector('swiper-container')?.swiper;
    if (!this.swiperInstance) {
      const swiperContainer = this.renderRoot.querySelector('swiper-container');
      swiperContainer.addEventListener('swiper-init', () => {
        this.swiperInstance = swiperContainer.swiper;
        this.attachNavigation();
      });
    } else {
      this.attachNavigation();
    }
  }

  attachNavigation() {
    const prevButton = this.renderRoot.querySelector('.prev');
    const nextButton = this.renderRoot.querySelector('.next');

    if (prevButton && nextButton && this.swiperInstance) {
      prevButton.addEventListener('click', () => {
        console.log('prev');
        this.swiperInstance.slidePrev();
      });

      nextButton.addEventListener('click', () => {
        console.log('next');
        this.swiperInstance.slideNext();
      });
    } else {
      console.error('버그발생 ');
    }
  }

  render() {
    return html`
      <swiper-container loop="true">
        <swiper-slide>
          <div class="text-container">
            <p class="title">
              풀리지 않는 버그 속<br />
              개발자로 살아남기
            </p>
            <a
              class="description"
              href="https://okky.kr/"
              alt="(임시) 링크 바로가기"
              >자세히 보기</a
            >
          </div>

          <div class="image-container">
            <img
              src="${mainImage}"
              alt="두 명의 남자가 어꺠동무를 하고 파이팅 하고 있는 모습"
            />
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
      </swiper-container>

      <button class="next sr-only" type="button">다음 배너</button>
      <button class="prev sr-only" type="button">이전 배너</button>
    `;
  }
}

customElements.define('swiper-component', SwiperComponent);
