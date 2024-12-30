import { LitElement, html } from 'lit';
import { styles } from '/src/pages/writeQna/WriteQnaCSS?inline';
import pb from '/src/api/pocketbase';

class WriteQna extends LitElement {
  static get properties() {
    return {
      inputTitle: { type: String },
      inputContent: { type: String },
      author: { type: String },
    };
  }

  constructor() {
    super();
    this.inputTitle = '';
    this.inputContent = '';
    this.author = '';
    this.getUid();
  }

  static styles = styles;

  updated(changedProperties) {
    if (
      changedProperties.has('inputTitle') ||
      changedProperties.has('inputContent')
    ) {
      this.checkInput();
    }
  }

  checkInput() {
    console.log('checkInput 메서드 실행');
    console.log(this.inputTitle);
    console.log(this.inputContent);

    if (this.inputTitle !== '' && this.inputContent !== '') {
      this.buttonStyleChanger(true);
    } else {
      this.buttonStyleChanger(false);
    }
  }

  buttonStyleChanger(isChanged) {
    console.log('buttonStyleChanger 메서드 실행');

    const finishedComponent = this.renderRoot.querySelector('#completeButton');
    if (!finishedComponent) return;

    if (isChanged) {
      finishedComponent.classList.remove('inactive');
      finishedComponent.classList.add('active');
      finishedComponent.removeAttribute('disabled');
    } else {
      finishedComponent.classList.remove('active');
      finishedComponent.classList.add('inactive');
      finishedComponent.setAttribute('disabled', '');
    }
  }

  getUid() {
    const data = JSON.parse(localStorage.getItem('isLogin'));
    if (data) {
      this.author = data.UID;
    } else {
      console.warn('사용자가 로그인하지 않았습니다.');
    }
  }

  async _onSubmit(e) {
    e.preventDefault();

    if (!this.author) {
      console.error('작성자 정보가 없습니다.');
      return;
    }

    const data = {
      title: this.inputTitle,
      contents: this.inputContent,
      author_test: this.author,
      image: '', // 이미지 업로드 기능이 추가된다면 처리 가능
    };

    try {
      const record = await pb.collection('seniorStory').create(data);
      console.log('게시물 생성 성공:', record);
      alert('게시물이 성공적으로 생성되었습니다.');
    } catch (error) {
      console.error('게시물 생성 중 오류 발생:', error);
      alert('게시물 생성에 실패했습니다. 다시 시도해주세요.');
    }
  }

  render() {
    return html`
      <h1 class="sr-only">질문 작성</h1>

      <back-component></back-component>

      <button id="completeButton" type="submit" class="inactive" disabled>
        완료
      </button>
      <info-component></info-component>

      <form @submit=${this._onSubmit}>
        <input-component
          placeholder="제목"
          borderColor="transparent"
          @input="${(e) => {
            const input = e.composedPath().find((el) => el.tagName === 'INPUT');
            if (!input) return;

            this.inputTitle = input.value;
          }}"
        ></input-component>

        <textarea
          id="qnaContent"
          placeholder="관심있는 분야에 대한 질문을 올려주세요. 장소 정보와 사진을 함께 올리면 친구들에게 더 도움이 돼요"
          aria-label="질문 본문"
          @input="${(e) => {
            const input = e
              .composedPath()
              .find((el) => el.tagName === 'TEXTAREA');
            if (!input) return;

            this.inputContent = input.value;
          }}"
        ></textarea>
      </form>
    `;
  }
}

customElements.define('write-qna', WriteQna);
