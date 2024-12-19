import { LitElement, html } from 'lit';
import s from '/src/components/common/Back/Back.css?inline';
import back from '/src/assets/common/back/direction=left.png';

class BackComponent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="back">
        <img
          src="${back}"
          alt="뒤로가기"
          class="back-icon"
          @click="${this.handleClick}"
        />
      </div>
    `;
  }

  handleClick() {
    console.log('click');
    window.history.back();
  }
}

customElements.define('back-component', BackComponent);
