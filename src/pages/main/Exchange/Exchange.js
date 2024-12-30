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
    if (!item || !item.image) {
      return defaultImage;
    }
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

  render() {
    return html`
      <div class="exchange-container">
        ${this.filteredItems.length > 0
          ? this.filteredItems.map(
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
