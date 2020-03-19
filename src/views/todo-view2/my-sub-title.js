import { LitElement, html } from "lit-element";
import { todoSubTitleStyles, todoBaseStyle } from "../../styles/todo2-styles";

export class MySubTitle extends LitElement{
  static get styles() {
    return [
      todoBaseStyle,
      todoSubTitleStyles
    ]
  }

  static get properties() {
    return {
      myText: { attribute: 'my-text' }
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h2 class="subtitle">${this.myText}</h2>
    `
  }
}

customElements.define('my-sub-title', MySubTitle);