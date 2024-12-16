import { LitElement, html } from 'lit';
import s from '/src/pages/Cartegory/Cartegory.css?inline';

class Cartegory extends LitElement {
  static properties = {
    selectedCategories: { type: Array },
  };

  constructor() {
    super();

    this.data = [
      { id: 1, category: '프로그래밍', name: '프론트엔드' },
      { id: 2, category: '프로그래밍', name: '백 엔드' },
      { id: 3, category: '프로그래밍', name: '리액트' },
      { id: 4, category: '프로그래밍', name: '풀스택' },
      { id: 5, category: '프로그래밍', name: '알고리즘' },
      { id: 6, category: '프로그래밍', name: '기초지식' },
      { id: 7, category: '디자인', name: 'UI디자인' },
      { id: 8, category: '디자인', name: 'UX디자인' },
      { id: 9, category: '디자인', name: 'UI/UX' },
      { id: 10, category: '데이터', name: '데이터분석' },
      { id: 11, category: '데이터', name: '통계분석' },
      { id: 12, category: '데이터', name: '시각화' },
    ];

    this.selectedCategories = [];
  }

  /* 클릭하면 2번씩 클릭되는 문제가 발생
  
  컴포넌트 마크업 때문에 생기는 문제인 것 같음 ㅜㅜ*/

  toggleCategory(categoryName) {
    console.log(categoryName);

    if (!this.selectedCategories.includes(categoryName)) {
      this.selectedCategories = [...this.selectedCategories, categoryName];
      console.log(this.selectedCategories);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (item) => item !== categoryName
      );
      console.log(this.selectedCategories);
    }

    localStorage.setItem(
      'selectedCategories',
      JSON.stringify(this.selectedCategories)
    );
  }

  handleClick() {
    location.href = '/src/pages/register/';
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="app">
        <div class="flex">
          <div class="header">
            <back-component></back-component>
            <div class="search-container">
              <span class="search-icon">
                <img src="/src/assets/common/cartegory/search.svg" alt="검색" />
              </span>
              <input
                type="text"
                class="search"
                placeholder="분야(이름)로 검색 (ex. 프론트)"
              />
            </div>
          </div>
        </div>
        <common-button title="관심분야 선택하기"></common-button>

        <div class="grid">
          ${this.data.map(
            (item) => html`
              <common-cartegory
                title="${item.category}"
                detail="${item.name}"
                @click="${(e) => {
                  console.log(e.target);
                  this.toggleCategory(item.name);
                }}"
              ></common-cartegory>
            `
          )}
        </div>

        <common-button
          title="이대로 저장할래요"
          @click="${this.handleClick}"
        ></common-button>
      </div>
    `;
  }
}

customElements.define('cartegory-page', Cartegory);
