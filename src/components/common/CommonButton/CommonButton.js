import { LitElement, html } from 'lit';
import s from '/src/components/common/CommonButton/CommonButton.css?inline';

class CommonButton extends LitElement {
  constructor() {
    super();
  }

  render() {
    console.log(s);
    return html`<style>
        ${s}
      </style>

      <button type="button" class="common-button">시작하기</button> `;
  }
}

customElements.define('common-button', CommonButton);
