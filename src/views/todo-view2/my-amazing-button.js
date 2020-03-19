import { html, LitElement } from 'lit-element';

class MyAmazingButton extends LitElement{
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
      <div>
        <button 
        @click="${this.clickHandler}"
        >👋 Click me! ${this.counter.toString()}</button>
      </div>
    `
  }
  clickHandler() {
    this.counter+=1;
    console.log(this.counter)
  }
}
customElements.define('my-amazing-button', MyAmazingButton);