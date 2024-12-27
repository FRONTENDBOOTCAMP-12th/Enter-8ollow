import { LitElement, html } from 'lit';
import pb from '/src/api/pocketbase';
import {} from '/src/components/Main/index.js';
import ListItemCSS from '/src/components/Main/ListItem/ListItemCSS';
import defaultImage from '/src/assets/logo.svg';

export default class Exchange extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

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
      return defaultImage; // 기본 이미지 경로 반환
    }
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item.image}`;
  }

  async fetchData() {
    try {
      const records = await pb.collection('exchangePosts').getFullList({
        sort: '-created', // 최신순 정렬
      });
      // console.log('서버에서 받은 전체 데이터:', records);

      this.items = records.map((item) => ({
        id: item.id,
        title: item.title || '제목 없음',
        region: item.region || '지역 없음',
        price: item.price || 0,
        state: item.status || 'available',
        liked_count: item.liked_count || 0,
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

  static styles = ListItemCSS;

  render() {
    console.log('렌더링 중...');
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
          : html`<p>데이터를 불러오는 중입니다...</p>`}
      </div>

      <plus-button></plus-button>
    `;
  }
}

customElements.define('exchange-page', Exchange);
