import { LitElement, html } from 'lit';
import '/src/components/Main/Like/Like';
import '/src/components/Main/ListItem/ListItem';
import '/src/components/Main/PlusButton/PlusButton';

export default class ExchangeLayout extends LitElement {
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

  // 데이터 가져오기
  async fetchData() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/exchangePosts/records`
      );
      const data = await response.json();
      console.log('서버에서 받은 전체 데이터:', data);
      this.items = data.items || [];
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  }

  // 이미지 URL 생성
  getImageURL(item) {
    if (!item || !item.image) {
      return '/src/assets/test/test2.png'; // 기본 이미지 경로 반환
    }
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item.image}`;
  }

  // 렌더링
  render() {
    return html`
      <div class="exchange-container">
        <div class="item-list">
          ${this.items.length > 0
            ? this.items.map((item) => {
                return html`
                  <div class="item-wrapper">
                    <!-- 게시물 내용 렌더링 -->
                    <list-item
                      .item=${{
                        title: item.title || '제목 없음',
                        region: item.region || '지역 없음',
                        price: item.price || 0,
                        state: item.status || 'available',
                        liked_count: item.liked_count || 0,
                        image: this.getImageURL(item),
                        created: item.created,
                      }}
                    ></list-item>

                    <!-- 좋아요 버튼 -->
                    <div class="like-counter-container">
                      <like-counter
                        .liked="${item.liked || false}"
                        .liked_count="${item.liked_count || 0}"
                      ></like-counter>
                    </div>
                  </div>
                `;
              })
            : html`<p>데이터를 불러오는 중입니다...</p>`}
        </div>

        <!-- 플러스 버튼 -->
        <plus-button></plus-button>
      </div>
    `;
  }
}

customElements.define('exchange-layout', ExchangeLayout);
