import { LitElement, html, css } from 'lit';
import styles from '/src/components/Main/ListItem/ListItem.css?inline';

const testItems = [
  {
    title: '헬스장 팝니다',
    subtitle: { region: '대전광역시 성심동', time: '2시간 전' },
    status: 'reserved',
    price: 50000000,
    image: '/src/assets/test/test.jpeg',
  },
  {
    title: '롯데자이언츠 강민호 유니폼 팝니다',
    subtitle: { region: '부산광역시 갈매기', time: '1일 전' },
    status: 'complete',
    price: 5000,
    image: '/placeholder.png',
  },
  {
    title: '복숭아 드실분?',
    subtitle: { region: '서울특별시 멋사동', time: '2일 전' },
    status: 'complete',
    price: 70000,
    image: '/placeholder.png',
  },
  {
    title: '도서관 이용권 팔아요',
    subtitle: { region: '성남시 화안남', time: '5분 전' },
    status: 'reserved',
    price: 30000,
    image: '/placeholder.png',
  },
];

class ListItem extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items = testItems;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchListItemData();
  }

  async fetchListItemData() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/products/records` // ?
      );
      const data = await response.json();
      this.items = data.items;
    } catch (error) {
      console.error('API 데이터 가져오기 실패:', error);
      this.items = testItems;
    }
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <div class="container">
        ${this.items.map(
          (item) => html`
            <div class="list-item">
              <figure>
                <img src="${item.image}" alt="${item.title || '상품 이미지'}" />
              </figure>
              <div class="content">
                <ul>
                  <li class="title">${item.title}</li>
                  <li class="subtitle">
                    ${item.subtitle.region} • ${item.subtitle.time}
                  </li>
                  <li>
                    <main-state
                      status="${item.status}"
                      price="${item.price}"
                    ></main-state>
                  </li>
                </ul>
              </div>
              <like-counter class="like-counter"></like-counter>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('list-item', ListItem);
