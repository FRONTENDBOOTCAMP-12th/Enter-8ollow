import { LitElement, html } from 'lit';
// import styles from '/src/components/finished/finished.css';

class FinishedComponent extends LitElement {
  constructor() {
    super();
    this.cssPath = './../../components/Finished/finished.css';
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent('click-event', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <link rel="stylesheet" href="${this.cssPath}" />
      <button
        id="completeButton"
        type="submit"
        class="inactive"
        disabled
        @click="${this.handleClick}"
      >
        완료
      </button>
    `;
  }
}

customElements.define('finished-component', FinishedComponent);
