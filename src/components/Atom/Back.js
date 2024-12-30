import { LitElement, html, css } from 'lit';
import back from '/src/assets/common/back/direction=left.png';

class BackComponent extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }
    .back {
      padding: 15px;
      display: flex;
      align-items: center;
      height: 100%;
    }

    button {
      all: unset;

      &:focus-visible {
        outline: solid 2px #5a85ee;
      }
    }

    .back-icon {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
    ::slotted(h1) {
      margin: auto;
      font-size: var(--label---medium);
    }
  `;

  render() {
    return html`
      <div class="back">
      <button>
        <img
          src="${back}"
          alt="뒤로가기"
          class="back-icon"
          @click="${this.handleClick}"
        />
        <slot></slot>
      </div>
      </button>
    `;
  }

  handleClick() {
    console.log('click');
    window.history.back();
  }
}

customElements.define('back-component', BackComponent);
