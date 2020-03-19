import { html, LitElement } from "lit-element";

class BuddiesList extends LitElement{
  static get properties() {
    return{
      buddies: { type: Array }
    };
  };
  constructor(){
    super();
    this.buddies = [
      "🦊 Foxy",
      "🦁 Leo",
      "🐯 Tigrou"
    ]
  };

  render(){
    return html`
    <div>
      ${this.buddies.map( buddy => html`
        <h2>${buddy}</h2>
      `)}
    </div>
    `
  }

};

customElements.define('buddies-list',BuddiesList);