import { LitElement, html } from 'lit';
import styles from '/src/components/Molecule/TextImg/TextImgCSS?inline';

class TextImg extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    place: { type: String },
    date: { type: String },

    category: { type: String },
  };

  static styles = styles;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <li>
          <div class="content">
            <with-us text=${this.category}></with-us>

            <h2 class="title">${this.title}</h2>
            <p class="description">${this.description}</p>
          </div>

          <div>
            <p class="footer">${this.place} • ${this.date}</p>
          </div>

          <img src="" alt="" />
        </li>
      </div>
    `;
  }
}

customElements.define('text-img', TextImg);
