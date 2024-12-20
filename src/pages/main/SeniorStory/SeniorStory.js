import { LitElement, html, css } from 'lit';
import styles from '/src/pages/main/SeniorStory/SeniorStory.css?inline';

import {} from '/src/components/index.js';

class SeniorStory extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items = [];
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/seniorStory/records`
      );
      const data = await response.json();
      this.items = data.items || [];
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  }

  // 이미지 URL 생성
  getImageURL(item) {
    console.log('아이템:', item);
    if (!item || !item.image) {
      console.log('이미지 없음');
      return '/src/assets/test/test2.png'; // 기본 이미지 경로 반환
    }
    console.log('이미지 있음');
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item.image}`;
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>

      <div class="story-container">
        ${this.items.length > 0
          ? this.items.map(
              (item) => html`
                <story-field
                  image="${this.getImageURL(item)}"
                  title="${item.title}"
                  content="${item.content}"
                  author="${item.author}"
                ></story-field>
              `
            )
          : html`<p>데이터가 없습니다.</p>`}
      </div>
    `;
  }
}

customElements.define('senior-story', SeniorStory);
