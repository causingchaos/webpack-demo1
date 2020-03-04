import {LitElement,html} from 'lit-element'

class TodoView extends LitElement{
  render(){
    return html`
      <p>Hello World</p>
    `
  }
}

//use dashes as per spec, to avoid collisions
customElements.define('todo-view', TodoView);