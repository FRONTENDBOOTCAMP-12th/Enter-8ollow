import { LitElement, html, css } from 'lit';
import buttonReset from '/src/style/buttonReset.css?inline';

export class MainButton extends LitElement {
  static properties = {
    name: { type: String },
  };
  static styles = css`
    button {
      background-color: var(--white);
      height: 27px;
      padding-left: 8px;
      padding-right: 8px;
      padding-inline: 8px;

      padding-top: 4px;
      padding-bottom: 4px;
      padding-block: 4px;
      border-radius: var(--border-radius---large);
      border: 2px solid var(--contents--content-tertiary);
      white-space: nowrap;

      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        width: 1.25rem;
        height: 1.25rem;
        padding: 0.25rem;
      }

      & svg {
        width: 1.25rem;
        height: 1.25rem;
        padding: 0.25rem;
      }

      & span {
        margin-bottom: 0.125rem;
        font-size: var(--paragraph---small);
      }
    }

    .checked {
      background-color: var(--primary);
      border: 2px solid var(--primary);

      & span {
        color: var(--white);
      }

      & svg path {
        stroke: white;
      }
    }

    .hidden {
      display: none;
    }
  `;
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
