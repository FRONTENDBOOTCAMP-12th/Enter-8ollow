import { LitElement, html } from 'lit';
import { style } from '/src/pages/writeQna/WriteQnaCSS?inline';

class WriteQna extends LitElement {
  static get properties() {
    return {
      inputTitle: { type: String },
      inputContent: { type: String },
    };
  }

  constructor() {
    super();
    this.inputTitle = '';
    this.inputContent = '';
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

    if (this.inputTitle !== '' && this.inputContent !== '') {
      this.buttonStyleChanger(true);
    } else {
      this.buttonStyleChanger(false);
    }
  }

  buttonStyleChanger(isChanged) {
    console.log('buttonStyleChanger 메서드 실행');
    const finishedComponent = document.querySelector('#completeButton');
    console.log(finishedComponent);
    if (!finishedComponent) return;

    if (isChanged) {
      finishedComponent.classList.remove('inactive');
      finishedComponent.classList.add('active');
    } else {
      finishedComponent.classList.remove('active');
      finishedComponent.classList.add('inactive');
    }
  }

  clickHandler() {
    console.log('clickHandler 메서드 실행');
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <finished-component @click=${this.clickHandler}></finished-component>

      <button
        id="completeButton"
        type="submit"
        class="inactive"
        disabled
        @click="${this.handleClick}"
      >
        완료
      </button>
      <info-component></info-component>

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
    `;
  }
}

customElements.define('write-qna', WriteQna);
