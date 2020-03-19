import { LitElement, html } from "lit-element";

class MyTitle extends LitElement{
  constructor() {
    super();
  }
  render(){
    return html`
      <h1>Kitchen Sink 🍔 [LitElement]</h1>
    `
  }
}

customElements.define('my-title', MyTitle);