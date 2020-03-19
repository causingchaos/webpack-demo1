import { LitElement, html } from "lit-element";

export class MySubTitle extends LitElement{
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
      <style>
        :host {
          padding: 0px;
          display: block;
        }
      </style>
      <div>
      <h2>${this.myText}</h2>
      </div>
      
    `
  }
}

customElements.define('my-sub-title', MySubTitle);