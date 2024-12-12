import { LitElement, html, css } from 'lit';

export class PlusButton extends LitElement {
  static properties = {
    active: { type: Boolean, reflect: true },
  };

  static styles = css`
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 3rem;
      height: 3rem;
      border: none;
      border-radius: 50%;
      box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);

      font-size: 2rem;
      cursor: pointer;

      transition:
        background-color 0.3s,
        color 0.3s,
        box-shadow 0.2s;

      position: fixed;
      bottom: 20vh;
      right: 5vw;
      z-index: 1000;
    }

    button[aria-pressed='true'] {
      background-color: #ffffff;
      color: black;
    }

    button[aria-pressed='false'] {
      background-color: #2e3b68;
      color: white;
    }

    /* 키보드 접근시 주황색 윤곽선 */
    button:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px orange;
    }
  `;

  constructor() {
    super();
    this.active = false;
  }

  handleClick() {
    this.active = !this.active;
    this.dispatchEvent(
      new CustomEvent('active-change', {
        detail: { active: this.active },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button
        type="button"
        aria-pressed="${this.active}"
        aria-label="${this.active ? '활성화' : '비활성화'}"
        @click="${this.handleClick}"
      >
        +
      </button>
    `;
  }
}

customElements.define('plus-button', PlusButton);
