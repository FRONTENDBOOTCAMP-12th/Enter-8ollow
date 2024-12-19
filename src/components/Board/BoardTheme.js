import { LitElement, html } from "lit";

class BoardTheme extends LitElement{
  static properties = {
    imgLink : { type: String },
    imgAlt: { type: String },
    text : {type: String}
  }

  constructor() {
    super();
    this.text = 'text';
    this.imgLink = 'https://via.placeholder.com/34';
    this.imgAlt = '샘플 이미지'
  }

  render() {
    return html`
    <style>
      img {
        width:2.125rem;
        height:2.125rem;
        border-radius: 6px;
      }

      img, p {
      display: inline-block;  
      vertical-align: middle; 
      }

    </style>
    
    <img src='${this.imgLink}' alt='${this.imgAlt}'/>
    <p>${this.text}</p>`
  }
}

customElements.define('board-theme', BoardTheme);