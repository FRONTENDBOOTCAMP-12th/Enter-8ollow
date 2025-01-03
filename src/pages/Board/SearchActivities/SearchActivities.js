import { html, LitElement } from 'lit';
import { SearchActivitiesCSS } from '/src/pages/Board/SearchActivities/SearchActivitiesCSS.js';

class SearchActivities extends LitElement {
  static properties = {
    place: { type: String },
  };

  static styles = SearchActivitiesCSS;

  constructor() {
    super();
    this.place = '남가좌제2동';
  }

  handleWrite(e) {
    e.preventDefault();

    const inputComponent = this.shadowRoot.querySelector('input-component');

    const inputValue =
      inputComponent.shadowRoot.querySelector('.number-input').value;

    console.log(inputValue);
    sessionStorage.setItem('withTitle', inputValue); // 값 저장

    if (inputValue)
      location.href = '/src/pages/Board/WriteActivities/index.html';
    else alert('제목을 입력하세요!');
  }

  render() {
    return html`
      <back-component></back-component>
      <form class="input-container">
        <input-component
          placeholder="이웃과 어떤 활동을 할까요"
          style=" --border-color: 1px solid var(--background); --text-size: var(--label---large); --font-weight:600"
          @input="${this.handleTitle}"
        ></input-component>

        <section class="popular-activities">
          <h2>${this.place} 근처 인기활동</h2>
          <div class="button-container">
            <main-button name="💻같이 프로젝트해요"></main-button>
            <main-button name="📝같이 스터디해요"></main-button>
            <main-button name="🍙같이 밥먹어요"></main-button>
            <main-button name="⌨같이 Lv2.알고리즘 풀어요"></main-button>
            <main-button name="🦕오프라인으로 만나요"></main-button>
          </div>
        </section>
        <common-button
          title="다음"
          type="submit"
          @click-event="${this.handleWrite}"
        ></common-button>
      </form>
    `;
  }
}

customElements.define('search-activities-page', SearchActivities);
