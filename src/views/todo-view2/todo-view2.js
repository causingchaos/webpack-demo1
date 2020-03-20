import { html, LitElement} from 'lit-element';

import { todoBaseStyle } from '../../styles/todo2-styles.js'

import './my-title.js'
import './my-sub-title.js'
import './my-amazing-button.js'
import './buddies-list.js'
import './message-banner.js'
import { BaseView } from '../base-view.js';

class TodoView2 extends BaseView{
  static get styles() {
    return [
      todoBaseStyle
    ]
  }

  constructor() {
    super();
    //listen for bubbling event add-buddy
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
        <my-amazing-button></my-amazing-button>
        <buddies-list></buddies-list>
        <div class="item">
          <my-message-banner></my-message-banner>
        </div>
      </div>
    `
  }
}

customElements.define('todo-view2', TodoView2)