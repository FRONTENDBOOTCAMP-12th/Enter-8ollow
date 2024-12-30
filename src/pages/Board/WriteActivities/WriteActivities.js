import { html, LitElement } from 'lit';
import { WriteActivitiesCSS } from '/src/pages/Board/WriteActivities/WriteActivitiesCSS';

class WriteActivities extends LitElement {
  static properties = {
    title: { type: String },
    participationNum: { type: Number },
  };

  static styles = WriteActivitiesCSS;

  constructor() {
    super();
    this.title = 'EUID 피그마 스터디 하실분!';
  }

  toggleCategoryList(e) {
    // button과 ul 요소 선택

    const categoryList = e.target.parentElement.querySelector('.category-list');
    console.log(categoryList);

    categoryList.classList.toggle('show');
  }

  handleWho() {
    location.href = '/src/pages/Board/WithWho/index.html';
  }
  render() {
    window.onload = () => {
      this.title = sessionStorage.getItem('withTitle');
      console.log(this.title);
    };

    return html`
      <back-component></back-component>
      <form class="with-post-form" action="submit">
        <label for="title"></label>
        <h1>${this.title}</h1>

        <div class="category-container">
          <label for="category" class="category">카테고리를 선택해주세요</label>
          <ul class="category-list">
            <li>🖊 스터디</li>
            <li>💻프로젝트</li>
            <li>✨오프라인</li>
            <li>🏆공모전</li>
          </ul>
          <button
            class="category-open"
            type="button"
            @click="${this.toggleCategoryList}"
          ></button>
        </div>

        <label for="activity-content" class="hidden">활동 내용</label>
        <input
          class="activity-content"
          type="text"
          required
          placeholder="활동 내용을 입력해주세요"
        />

        <div class="participation">
          <label for="participation-number" class="participation-number"
            >인원</label
          >
          <div class="participation-container">
            <button class="decrease"></button>
            <span>${this.participationNum}명</span>
            <button class="increase"></button>
          </div>
        </div>

        <div class="date-container">
          <label for="date" class="date">날짜</label>
          <input type="date" class="date-input" required />
        </div>

        <div class="time-container">
          <label for="time" class="time">시간</label>
          <input type="time" class="time-input" required />
        </div>

        <div class="place-container">
          <label for="place" class="place">장소</label>
          <input
            type="text"
            class="place-input"
            required
            placeholder="입력해주세요"
          />
        </div>

        <common-button
          title="다음"
          type="submit"
          @click-event="${this.handleWho}"
        ></common-button>
      </form>
    `;
  }
}

customElements.define('write-activities-page', WriteActivities);
