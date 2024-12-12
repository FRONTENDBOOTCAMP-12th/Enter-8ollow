import { LitElement, html } from 'lit';
import s from '/src/components/signUp/number/number.css?inline';

class InputComponent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="number-box">
        <input
          type="text"
          maxlength="13"
          class="number-input"
          placeholder="휴대폰번호(- 없이 숫자만 입력)"
          @input=${this.handleInput}
          @keydown=${this.handleBackSpace}
          required
        />
        <span class="required"></span>
      </div>
    `;
  }

  handleInput(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/g, '');

    if (value.length > 3) {
      value = value.slice(0, 3) + ' ' + value.slice(3);
    }
    if (value.length > 7) {
      value = value.slice(0, 8) + ' ' + value.slice(8);
    }

    e.target.value = value.slice(0, 13);
  }

  handleBackSpace(e) {
    if (e.key === 'Backspace') {
      const value = e.target.value;
      const cursorPosition = e.target.selectionStart;

      if (value[cursorPosition - 1] === ' ') {
        e.preventDefault();
        const newValue =
          value.slice(0, cursorPosition - 1) + value.slice(cursorPosition);
        e.target.value = newValue;
        e.target.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
      }
    }
  }
}

customElements.define('input-component', InputComponent);
