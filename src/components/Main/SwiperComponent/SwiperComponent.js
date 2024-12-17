import { LitElement, html } from 'lit';
import { register } from 'swiper/element/bundle';
import styles from '/src/components/Main/SwiperComponent/SwiperComponent.css?inline';

register();

class SwiperComponent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <swiper-container navigation="true" loop="true">
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
              src="/src/assets/MainSwiper.png"
              alt="두 명의 남자가 어꺠동무를 하고 파이팅 하고 있는 모습"
            />
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
      </swiper-container>
    `;
  }
}

customElements.define('swiper-component', SwiperComponent);
