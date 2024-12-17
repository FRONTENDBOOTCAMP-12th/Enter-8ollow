import { LitElement, html } from 'lit';
import s from '/src/components/Main/MainButton/MainButton.css?inline';
import buttonReset from '/src/style/buttonReset.css?inline';

class MainButton extends LitElement {
  constructor() {
    super();
    this.name = 'text';
  }

  render() {
    const imageClass =
      this.name === '주제' ? 'category-view' : 'category-view hidden';

    return html`
      <style>
        ${buttonReset}
        ${s}
      </style>
      <button
        type="button"
        class="category"
        onclick="this.classList.toggle('checked')"
      >
        <img
          alt="카테고리이미지"
          src="/src/assets/hamburger.svg"
          class="${imageClass}"
        />
        <span>${this.name}</span>
      </button>
    `;
  }
}
customElements.define('main-button', MainButton);
