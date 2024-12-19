import { LitElement, html } from 'lit';
// import styles from '/src/components/finished/finished.css';

class FinishedComponent extends LitElement {
  constructor() {
    super();
    this.cssPath = './../../components/finished/finished.css';
  }

  render() {
    return html`
      <link rel="stylesheet" href="${this.cssPath}" />
      <button id="completeButton" type="submit" class="inactive" disabled>
        완료
      </button>
    `;
  }
}

customElements.define('finished-component', FinishedComponent);

