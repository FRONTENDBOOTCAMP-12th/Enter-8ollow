import {} from '/src/components/index.js';

import { LitElement, html } from 'lit';

class qnaPage extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      content: { type: String },
      items: { type: Array },
      cartegory: { type: String },
    };
  }

  constructor() {
    super();

    this.fetchData();
    this.items = [];
  }

  // 데이터 가져오기
  async fetchData() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/qnaPosts/records`
      );
      const data = await response.json();

      this.items = (data.items || []).reverse();
    } catch (error) {
      console.error('데이터 가져오기 실패', error);
    }
  }

  getImageURL(item) {
    if (!item || !item.image) {
      return false; // 기본 이미지 경로 반환
    }
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item.image}`;
  }

  handleClick(id) {
    location.href = `/src/pages/qnaBoard/?qnadetail=${id}`;
  }

  // 렌더링
  render() {
    return html`
      <div class="container">
        ${this.items.map(
          (item) => html`
            <text-img
              title=${item.title}
              description=${item.content}
              place=${item.place}
              date=${item.date}
              category=${item.category}
              @click="${() => this.handleClick(item.id)}"
            >
            </text-img>

            <plus-button></plus-button>
          `
        )}
      </div>
    `;
  }
}

customElements.define('qna-page', qnaPage);
