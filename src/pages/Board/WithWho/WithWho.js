import { html, LitElement } from 'lit';
import { WithWhoCSS } from '/src/pages/Board/WithWho/WithWhoCSS.js';
import pb from '/src/api/pocketbase';

class WithWho extends LitElement {
  static properties = {
    approved: { type: Boolean },
    genderList: { type: Array },
    gender: { type: String },
  };

  static styles = WithWhoCSS;

  constructor() {
    super();
    this.gender = '';
    this.genderList = ['누구나', '여자만', '남자만'];
  }

  chooseGender(index) {
    this.checked = index;
    this.gender = this.genderList[index];
    const inputForm = this.shadowRoot.querySelector('.with-post-form');
    inputForm.querySelector('#gender').value = this.gender;
  }

  handleWrite(e) {
    e.preventDefault();

    const inputForm = this.shadowRoot.querySelector('.with-post-form');
    if (!inputForm.checkValidity()) {
      inputForm.reportValidity();
      return;
    }

    const inputGender = this.gender;
    const inputAge = inputForm.querySelector('#age').value;
    const inputApprove = inputForm.querySelector('#approve').checked;

    sessionStorage.setItem('boardGender', inputGender);
    sessionStorage.setItem('boardAge', inputAge);
    sessionStorage.setItem('boardApprove', inputApprove);

    this.fetchData();
  }

  async fetchData() {
    const data = {
      title: sessionStorage.getItem('withTitle'),
      description: sessionStorage.getItem('boardDescription'),
      time: sessionStorage.getItem('boardTime'),
      place: sessionStorage.getItem('boardPlace'),
      gender: sessionStorage.getItem('boardGender'),
      approve: sessionStorage.getItem('boardApprove'),
      peoples: sessionStorage.getItem('boardPeople'),
      category: sessionStorage.getItem('boardCategory'),
      maxAge: sessionStorage.getItem('boardAge'),
    };

    await pb.collection('withPosts').create(data);
  }

  render() {
    return html`
      <back-component></back-component>
      <h1>어떤 학생과 함께 할까요?</h1>
      <form class="with-post-form" action="submit">
        <div class="gender-container">
          <label for="gender" class="gender-label">성별</label>
          <input
            class="gender-input"
            id="gender"
            type="text"
            placeholder="버튼을 클릭하세요"
            readonly
            required
          />
        </div>
        <span>누구나 또는 같은 성별 모임으로 설정해주세요</span>
        <div class="button-container">
          <button
            type="button"
            class="category ${this.checked == 0 ? 'checked' : ''}"
            @click="${() => this.chooseGender(0)}"
          >
            <span>누구나</span>
          </button>
          <button
            type="button"
            class="category ${this.checked == 1 ? 'checked' : ''}"
            @click="${() => this.chooseGender(1)}"
          >
            <span>여자만</span>
          </button>
          <button
            type="button"
            class="category ${this.checked == 2 ? 'checked' : ''}"
            @click="${() => this.chooseGender(2)}"
          >
            <span>남자만</span>
          </button>
        </div>

        <div class="age-container">
          <label for="age" class="age-label">나이</label>
          <input
            type="text"
            id="age"
            class="age-input"
            placeholder="최대 나이 또는 '누구나'"
            required
          />
        </div>

        <div class="approve-container">
          <label for="switch" class="approve-label">승인 후 참여 </label>

          <input type="checkbox" id="approve" class="approve-input" />
          <span class="approve-switch"></span>
        </div>

        <common-button
          title="일정 만들기"
          type="submit"
          @click="${this.handleWrite}"
        ></common-button>
      </form>
    `;
  }
}

customElements.define('with-who-page', WithWho);
