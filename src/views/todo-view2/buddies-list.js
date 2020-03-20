import { html, LitElement } from "lit-element";
import { todoBaseStyle, todoSubTitleStyles } from "../../styles/todo2-styles";


export class BuddiesList extends LitElement{
  static get styles() {
    return [
      todoBaseStyle,
      todoSubTitleStyles
    ]
  }
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
  }

  render(){
    return html`
    <div class="item">
      ${this.buddies.map( buddy => html`
        <h2 class="subtitle">${buddy}</h2>
      `)}
    </div>
    `
  }

};

customElements.define('buddies-list',BuddiesList);