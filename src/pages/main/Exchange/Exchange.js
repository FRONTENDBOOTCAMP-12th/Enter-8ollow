import { LitElement, html } from 'lit';
import pb from '/src/api/pocketbase';
import {} from '/src/components/index.js';
import ListItemCSS from '/src/components/Molecule/ListItem/ListItemCSS?inline';
import defaultImage from '/src/assets/logo.svg';

export default class Exchange extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  static styles = ListItemCSS;

  constructor() {
    super();
    this.items = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchData();
  }

  // 이미지 URL 생성 함수
  getImageURL(item) {
    if (!item || !item.image) {
      return defaultImage;
    }
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item.image}`;
  }

  async fetchData() {
    try {
      const records = await pb.collection('exchangePosts').getFullList({
        sort: '-created', // 최신순 정렬
      });

      this.items = records.map((item) => ({
        id: item.id,
        title: item.title || '제목 없음',
        region: item.region || '지역 없음',
        price: item.price || 0,
        state: item.status || 'available',
        liked_count: item.liked_count?.length || 0, // 좋아요 유저 수
        image: this.getImageURL(item),
        created: item.created,
      }));
      this.requestUpdate();
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  }

  // 디테일 페이지로 이동
  handleClick(id) {
    const url = `/src/pages/main/exchangeDetail/?post=${id}`;
    console.log('Navigating to:', url);
    location.href = url;
  }

  render() {
    return html`
      <div class="exchange-container">
        ${this.items.length > 0
          ? this.items.map(
              (item) => html`
                <list-item
                  .item=${item}
                  @click="${() => this.handleClick(item.id)}"
                ></list-item>
              `
            )
          : html`<span class="loader"></span> `}
      </div>
    `;
  }
}

customElements.define('exchange-page', Exchange);
