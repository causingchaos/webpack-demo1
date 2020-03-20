import { html, LitElement } from 'lit-element';
import { todoBaseStyle, todoButton } from '../../styles/todo2-styles';

class MyAmazingButton extends LitElement{
  static get styles() {
    return [
      todoBaseStyle,
      todoButton
    ]
  }

  static get properties() {
    return {
      counter: { type: Number }
    }
  }

  constructor(){
    super();
    this.counter = 0;
  }

  render() {
    return html`
      <div clas="item">
        <button 
        @click="${this.clickHandler}"
        class="button"
        >👋 Click me! ${this.counter.toString()}</button>
      </div>
    `
  }
  clickHandler() {
    this.counter+=1;
    console.log(this.counter)

    // composed flag -- allow event to bubble past Shadow DOM and regular DOM
    // bubbles, allows event to bubble to top of shawdow tree
    this.dispatchEvent(
      new CustomEvent('add-buddy', {
        bubbles: true, composed: true, 
        detail: { value: `🐻 Teddy n°${this.counter}`}
      })
    )
  }
}

customElements.define('my-amazing-button', MyAmazingButton);