import { html, LitElement } from 'lit';

class SearchActivities extends LitElement {
  static properties = {
    place: { type: String },
  };

  constructor() {
    super();
    this.place = '남가좌제2동';
  }
  render() {
    return html`
      <back-component></back-component>
      <input-component
        placeholder="이웃과 어떤 활동을 할까요"
      ></input-component>
      <section class="popular-activities">
        <h2>${this.place} 근처 인기활동</h2>
        <main-button title="💻같이 프로젝트해요"></main-button>
        <main-button></main-button>
        <main-button></main-button>
        <main-button></main-button>
      </section>
      <common-button title="다음"></common-button>
    `;
  }
}

customElements.define('search-activities-page', SearchActivities);
