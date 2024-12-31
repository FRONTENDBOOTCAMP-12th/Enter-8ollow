import { html, LitElement } from 'lit';
import { WithWhoCSS } from '/src/pages/Board/WithWho/WithWhoCSS.js';

class WithWho extends LitElement {
  static styles = WithWhoCSS;
  render() {
    return html`
      <back-component></back-component>
      <h1>어떤 학생과 함께 할까요?</h1>
      <form class="with-post-form" action="submit">
        <div class="gender-container">
          <label for="gender" class="gender-label">성별</label>
          <input class="gender-input" type="text" placeholder="" />
        </div>
        <span>누구나 또는 같은 성별 모임으로 설정해주세요</span>
        <div class="button-container">
          <main-button name="누구나"></main-button>
          <main-button name="여자만"></main-button>
          <main-button name="남자만"></main-button>
        </div>

        <div class="age-container">
          <label for="age" class="age-label">나이</label>
          <input
            type="text"
            class="age-input"
            placeholder="숫자 또는 '누구나'"
          />
        </div>

        <div class="approve-container">
          <label for="switch" class="approve-label">승인 후 참여 </label>

          <input type="checkbox" class="approve-input" />
          <span class="approve-switch"></span>
        </div>

        <common-button title="일정 만들기" type="submit"></common-button>
      </form>
    `;
  }
}

customElements.define('with-who-page', WithWho);
