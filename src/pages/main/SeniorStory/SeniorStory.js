import { LitElement, html, css } from 'lit';

import { styles } from '/src/pages/main/SeniorStory/SeniorStoryCSS?inline';
import pb from '/src/api/pocketbase';
import image from '/src/assets/logo.svg';

class SeniorStory extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  static styles = styles;

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
      const itemsWithNicknames = await Promise.all(
        (data.items || []).map(async (item) => {
          const nickname = await this.getNickname(item.author_test);

          return { ...item, nickname };
        })
      );
      this.items = itemsWithNicknames;
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  }

  async getNickname(uid) {
    try {
      const user = await pb.collection('members').getOne(uid);

      return user.nickName || '';
    } catch (error) {
      console.error(`닉네임 가져오기 실패 (UID: ${uid}):`, error);
      return 'Unknown User';
    }
  }

  // 이미지 URL 생성
  getImageURL(item) {
    if (!item || !item.iamge) {
      return `${image}`;
    }
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item.iamge}`;
  }

  handleClick(id) {
    location.href = `/src/pages/main/SeniorDetail/?story=${id}`;
  }

  render() {
    return html`
      ${this.items.length > 0
        ? html`
            <div class="story-container">
              ${this.items.map(
                (item) => html`
                  <story-field
                    tabindex="0"
                    image="${this.getImageURL(item)}"
                    title="${item.title}"
                    content="${item.content}"
                    author="${item.nickname}"
                    @click="${() => this.handleClick(item.id)}"
                  ></story-field>
                `
              )}
            </div>
          `
        : html`
            <div class="app">
              <span class="loader"></span>
            </div>
          `}
    `;
  }
}

customElements.define('senior-story', SeniorStory);
