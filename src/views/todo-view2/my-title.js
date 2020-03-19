import { LitElement, html } from "lit-element";
import { todoBaseStyle, todoTitleStyles } from '../../styles/todo2-styles';

class MyTitle extends LitElement{
  static get styles(){
    return [
      todoBaseStyle,
      todoTitleStyles
    ]
  }

  constructor() {
    super();
  }
  render(){
    return html`
      <h1 class="title">Kitchen Sink 🍔 [LitElement]</h1>
    `
  }
}

customElements.define('my-title', MyTitle);