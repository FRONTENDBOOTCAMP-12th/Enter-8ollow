import { LitElement, html } from 'lit';
import pb from '/src/api/pocketbase';
import {} from '/src/components/index.js';
import ListItemCSS from '/src/components/Molecule/ListItem/ListItemCSS?inline';
import defaultImage from '/src/assets/logo.svg';

export default class Exchange extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      filteredItems: { type: Array },
      category: { type: String },
    };
  }

  static styles = ListItemCSS;

  constructor() {
    super();
    this.items = [];
    this.filteredItems = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchData();
  }

  getImageURL(item) {
    if (!item || !item.image || item.image.length === 0) {
      return defaultImage; // 이미지가 없을 경우 기본 이미지 반환
    }

    if (Array.isArray(item.image)) {
      // 여러 이미지 중 첫 번째 이미지 반환
      return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item.image[0]}`;
    }

    // 단일 이미지 처리
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item.image}`;
  }

  async fetchData() {
    try {
      const records = await pb.collection('exchangePosts').getFullList({
        sort: '-created',
      });

      this.items = records.map((item) => ({
        id: item.id,
        title: item.title || '제목 없음',
        region: item.region || '지역 없음',
        price: item.price || 0,
        state: item.status || 'available',
        liked_count: item.liked_count?.length || 0,
        image: this.getImageURL(item),
        created: item.created,
        category: item.category,
      }));

      this.filterItemsByCategory();
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  }

  filterItemsByCategory() {
    console.log('현재 카테고리:', this.category);

    if (!this.category) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(
        (item) => item.category === this.category
      );
      console.log(this.filteredItems.length);
    }

    this.requestUpdate();
  }

  updated(changedProperties) {
    if (changedProperties.has('category')) {
      this.filterItemsByCategory();
    }
  }

  handleClick(id) {
    const url = `/src/pages/main/exchangeDetail/?post=${id}`;
    console.log('Navigating to:', url);
    location.href = url;
  }

  handleKeyDown(e, id) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      this.handleClick(id);
    }
  }

  render() {
    return html`
      <div class="exchange-container">
        ${this.filteredItems.length > 0
          ? this.filteredItems.map(
              (item) => html`
                <list-item
                  .item=${item}
                  tabindex="0"
                  @click="${() => this.handleClick(item.id)}"
                  @keydown="${(e) => this.handleKeyDown(e, item.id)}"
                  loading="lazy"
                  aria-label="${item.title} (가격: ${item.price.toLocaleString()}원)"
                ></list-item>
              `
            )
          : html`<span n class="loader"></span>`}
        <div style="height: 70px;"></div>
      </div>
    `;
  }
}

customElements.define('exchange-page', Exchange);
