import { LitElement, html } from 'lit';
import s from '/src/components/signUp/number/number.css?inline';

class InputComponent extends LitElement {
  constructor() {
    super();
  }

  static properties = {
    placeholder: { type: String },
    type: { type: String },
    maxlength: { type: Number },
  };

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="number-box">
        <input
          type="text"
          maxlength="${this.maxlength}"
          class="number-input"
          placeholder="${this.placeholder}"
          @input=${this.handleInput}
          @keydown=${this.handleBackSpace}
          required
        />
        <span class="required"></span>
      </div>
    `;
  }

  handleInput(e) {
    if (this.type === 'phoneNumber') {
      let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/g, '');

      if (value.length > 3) {
        value = value.slice(0, 3) + ' ' + value.slice(3);
      }
      if (value.length > 7) {
        value = value.slice(0, 8) + ' ' + value.slice(8);
      }

      e.target.value = value.slice(0, 13);
    }
  }

  /* ---------------------------- 삭제 안되는 이슈때문에 만든거 ---------------------------- */ s;
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
