import { html, LitElement} from 'lit-element';

import { style } from '../../styles/todo2-styles.js'

import './my-title.js'
import './my-sub-title.js'
import './my-amazing-button.js'
import './buddies-list.js'
import { BaseView } from '../base-view.js';

class TodoView2 extends BaseView{
  static get styles() {
    return [
      style
    ]
  }

  constructor() {
    super();
  };

  render() {
    return html`
      <div class="container">
        <div class="item">
          <my-title><my-title>
        </div>
        <div class="item">
          <my-sub-title my-text="I ❤️ LitElement" ></my-sub-title>
        </div>
        <div class="item">
          <my-amazing-button></my-amazing-button>
          <buddies-list></buddies-list>
        </div>
      </div>
      
      
 

      

        
        
        

      
      
    `
  }
}

customElements.define('todo-view2', TodoView2)