import { LitElement, html } from 'lit';

class BoardParticipation extends LitElement {
  static properties = {
    text: { type: String },
  };
  constructor() {
    super();
    this.text = '0/0';
  }

  render() {
    return html`
      <style>
        .user-icon {
          border-radius: 50px;
          background-color: var(--components--component-participation);
          width: 1.25rem;
          height: 1.25rem;
        }
        p {
          font-size: var(--paragraph---small);
          color: var(--contents--content-secondary);
        }
        .user-icon,
        p {
          display: inline-block;
          vertical-align: middle;
        }
      </style>
      <div class="user-icon"></div>
      <p>${this.text}</p>
    `;
  }
}

customElements.define('board-participation', BoardParticipation);
