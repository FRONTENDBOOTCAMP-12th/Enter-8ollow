import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './profile-closed.css?inline';

class ProfileClosed extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <div class="profile-item">
        <span class="icon">🔒</span>
        text
      </div>
    `;
  }
}

customElements.define('profile-closed', ProfileClosed);
