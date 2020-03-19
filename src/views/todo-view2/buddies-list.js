import { html, LitElement } from "lit-element";
import { todoBaseStyle, todoSubTitleStyles } from "../../styles/todo2-styles";


class BuddiesList extends LitElement{
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
    if (window.components == null) window.components = []
    window.component.push(this);
    
    this.addEventListener("new buddy", e => {
      this.buddies = [...this.buddies, e.detail]
    })
  };

 

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