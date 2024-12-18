import { LitElement, html } from 'lit';
import s from '/src/components/Main/MainButton/MainButton.css?inline';
import buttonReset from '/src/style/buttonReset.css?inline';

class MainButton extends LitElement {
  static properties = {
    name: { type: String },
  };
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
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="${imageClass}"
        >
          <title>카테고리 이미지</title>
          <path
            d="M1.16675 9.16668H12.8334M1.16675 5.00001H12.8334M1.16675 0.833344H12.8334"
            stroke="black"
            stroke-width="1.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>${this.name}</span>
      </button>
    `;
  }
}
customElements.define('main-button', MainButton);
