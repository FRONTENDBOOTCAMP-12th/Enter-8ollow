import { LitElement, html } from 'lit';
import { styles } from '/src/pages/start/startCSS?inline';
import logo from '/src/assets/logo.svg';

class Start extends LitElement {
  constructor() {
    super();
  }

  static styles = styles;

  render() {
    console.log('렌더링');
    return html`
      <div class="app">
        <img src="${logo}" alt="EUID" />
        <h1 class="title">당신 곁에 엔터이듬</h1>
        <p class="description">
          With EUID's 함께 성장하기 <br />함께 배우고 적용하며 성장해보세요!
        </p>

        <div class="button-container">
          <common-button
            title="시작하기"
            @click-event="${this.handleClick}"
          ></common-button>

          <div class="login">
            <p>이미 계정이 있나요?</p>
            <a href="/src/pages/login/">로그인</a>
          </div>
        </div>
      </div>
    `;
  }

  handleClick(event) {
    console.log('클릭');
    location.href = '/src/pages/cartegory/cartegory.html';
  }
}

customElements.define('start-page', Start);
