import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from '/src/style/profile-choice-button.css?inline';

class ProfileChoiceButton extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <div class="button-group">
        <div class="button active"><span class="icon">🔍</span> text</div>
        <div class="button"><span class="icon">🔍</span> text</div>
        <div class="button"><span class="icon">🔍</span> text</div>
      </div>
    `;
  }
}

customElements.define('profile-choice-button', ProfileChoiceButton);
