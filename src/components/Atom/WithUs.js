import { LitElement, html, css } from 'lit';

class WithUs extends LitElement {
  static properties = {
    text: { type: String },
  };

  static styles = css`
    .withUs {
      background-color: var(--contents--content-tertiary);
      width: 50px;
      height: 17px;
      border-radius: 4px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Pretendard', sans-serif;
      font-size: 10.5px;
      font-weight: 600;
      color: #ffffff;
      box-sizing: border-box;
      white-space: nowrap;
    }
  `;
  constructor() {
    super();
    this.text = 'text';
  }

  render() {
    return html` <div class="withUs">${this.text}</div> `;
  }
}

customElements.define('with-us', WithUs);
