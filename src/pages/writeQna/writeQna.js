import { LitElement, html } from 'lit';
import style from '/src/pages/writeQna/writeQna.css?inline';

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
    const finishedComponent =
      this.renderRoot.querySelector('finished-component');
    if (!finishedComponent) return;

    const { shadowRoot } = finishedComponent;
    if (!shadowRoot) return;

    const completeButton = shadowRoot.querySelector('#completeButton');
    if (!completeButton) return;

    if (isChanged) {
      completeButton.classList.remove('inactive');
      completeButton.classList.add('active');
    } else {
      completeButton.classList.remove('active');
      completeButton.classList.add('inactive');
    }
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <finished-component></finished-component>
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
