import { LitElement, html } from "lit-element";
import { todoSubTitleStyles, todoBaseStyle } from "../../styles/todo2-styles";

export class MyMessageBanner extends LitElement{
  static get styles() {
    return [
      todoBaseStyle,
    ]
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
      :host{
        background-color: blue;
        color: purple;
      }
      </style>
      <h2 class="banner">This is my message banner</h2>
    `
  }
}

customElements.define('my-message-banner', MyMessageBanner);