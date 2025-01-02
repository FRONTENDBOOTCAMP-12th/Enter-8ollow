import { html, LitElement } from 'lit';
import { WriteActivitiesCSS } from '/src/pages/Board/WriteActivities/WriteActivitiesCSS';

class WriteActivities extends LitElement {
  static properties = {
    title: { type: String },
    participationNum: { type: Number },
    categoryList: { type: Array },
    category: { type: String },
  };

  static styles = WriteActivitiesCSS;

  constructor() {
    super();
    this.title = 'EUID 피그마 스터디 하실분!';
    this.categoryList = ['스터디', '프로젝트', '오프라인', '공모전'];
    this.category = '카테고리를 선택해주세요';
    this.participationNum = 0;
  }

  firstUpdated() {
    const inputForm = this.shadowRoot.querySelector('.with-post-form');
    const inputDescription = inputForm.querySelector('.activity-content');

    console.log(inputForm);
    console.log(inputDescription);
  }

  toggleCategoryList(e) {
    // button과 ul 요소 선택

    const categoryList = e.target.parentElement.querySelector('.category-list');
    console.log(categoryList);

    categoryList.classList.toggle('show');
  }

  chooseCategory(index) {
    this.checked = index;

    this.category = this.categoryList[index];
  }

  handleWrite(e) {
    e.preventDefault();

    const inputForm = this.shadowRoot.querySelector('.with-post-form');

    if (!inputForm.checkValidity()) {
      inputForm.reportValidity();
      return;
    }

    const inputCategory = this.category;
    const inputDescription = inputForm.querySelector('#activity-content').value;
    const inputParticipationNum = this.participationNum;
    const inputDate = inputForm.querySelector('#date').value;
    const inputTime = inputForm.querySelector('#time').value;
    const inputPlace = inputForm.querySelector('#place').value;

    sessionStorage.setItem('boardCategory', inputCategory);
    sessionStorage.setItem('boardDescription', inputDescription);
    sessionStorage.setItem('boardPeople', inputParticipationNum);
    sessionStorage.setItem('boardDate', inputDate);
    sessionStorage.setItem('boardTime', inputTime);
    sessionStorage.setItem('boardPlace', inputPlace);
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
          <label for="category" class="category">${this.category}</label>
          <ul class="category-list">
            <li
              class=${this.checked == 0 ? 'checked' : ''}
              @click="${() => this.chooseCategory(0)}"
            >
              🖊 스터디
            </li>
            <li
              class=${this.checked == 1 ? 'checked' : ''}
              @click="${() => this.chooseCategory(1)}"
            >
              💻프로젝트
            </li>
            <li
              class=${this.checked == 2 ? 'checked' : ''}
              @click="${() => this.chooseCategory(2)}"
            >
              ✨오프라인
            </li>
            <li
              class=${this.checked == 3 ? 'checked' : ''}
              @click="${() => this.chooseCategory(3)}"
            >
              🏆공모전
            </li>
          </ul>
          <button
            class="category-open"
            type="button"
            @click="${this.toggleCategoryList}"
            aria-label="category-list"
          ></button>
        </div>

        <label for="activity-content" class="hidden">활동 내용</label>
        <input
          class="activity-content"
          id="activity-content"
          type="text"
          required
          placeholder="활동 내용을 입력해주세요"
        />

        <div class="participation">
          <label for="participation-number" class="participation-number"
            >인원</label
          >
          <div class="participation-container">
            <div
              class="decrease"
              @click="${() => {
                if (this.participationNum !== 0) --this.participationNum;
              }}"
            ></div>
            <span>${this.participationNum}명</span>
            <div
              class="increase"
              @click="${() => ++this.participationNum}"
            ></div>
          </div>
        </div>

        <div class="date-container">
          <label for="date" class="date">날짜</label>
          <input type="date" id="date" class="date-input" required />
        </div>

        <div class="time-container">
          <label for="time" class="time">시간</label>
          <input type="time" id="time" class="time-input" required />
        </div>

        <div class="place-container">
          <label for="place" class="place">장소</label>
          <input
            type="text"
            id="place"
            class="place-input"
            required
            placeholder="입력해주세요"
          />
        </div>

        <common-button
          title="다음"
          type="submit"
          @click="${this.handleWrite}"
        ></common-button>
      </form>
    `;
  }
}

customElements.define('write-activities-page', WriteActivities);
