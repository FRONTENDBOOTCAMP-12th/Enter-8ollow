import { LitElement, html, css } from 'lit';
import { styles } from '/src/pages/writeQna/WriteQnaCSS.js';
import pb from '/src/api/pocketbase';

class WriteQna extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      inputTitle: { type: String },
      inputContent: { type: String },
      author: { type: String },
      pbPath: { type: String }, // 부모로부터 전달받을 경로
    };
  }

  constructor() {
    super();
    this.inputTitle = '';
    this.inputContent = '';
    this.author = '';
    this.pbPath = ''; // 초기값 설정
  }

  updated(changedProperties) {
    if (
      changedProperties.has('inputTitle') ||
      changedProperties.has('inputContent')
    ) {
      this.checkInput();
    }
  }

  checkInput() {
    const completeButton = this.shadowRoot.querySelector('#completeButton');
    if (this.inputTitle && this.inputContent && this.pbPath) {
      completeButton.classList.remove('inactive');
      completeButton.classList.add('active');
      completeButton.removeAttribute('disabled');
    } else {
      completeButton.classList.remove('active');
      completeButton.classList.add('inactive');
      completeButton.setAttribute('disabled', '');
    }
  }

  async _onSubmit(e) {
    e.preventDefault();

    if (!this.author) {
      console.error('작성자 정보가 없습니다.');
      return;
    }

    if (!this.savePath) {
      console.error('저장 경로가 설정되지 않았습니다.');
      alert('저장 경로를 확인해주세요.');
      return;
    }

    const data = {
      title: this.inputTitle,
      contents: this.inputContent,
      author_test: this.author,
      image: '', // 이미지 업로드 기능이 추가된다면 처리 가능
    };

    try {
      const record = await pb.collection(this.savePath).create(data);
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

      <button id="completeButton" type="submit" class="inactive" disabled>
        완료
      </button>
      <info-component></info-component>

      <form @submit=${this._onSubmit}>
        <input-component
          placeholder="제목"
          style="--border-color: transparent"
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
