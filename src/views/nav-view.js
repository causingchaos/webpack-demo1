import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-button';

import { BaseView } from './base-view.js'


class NavView extends BaseView{
    render(){
    return html`
      <style>
      </style>
      <header>
        <h2>Test App</h2>
        <nav>
          <vaadin-button 
            @click=${event => window.location.href = './'} >
            Todo
          </vaadin-button>
          <vaadin-button 
            @click=${event => window.location.href = './stats'} >
            Stats
          </vaadin-button>
          <vaadin-button 
            @click=${event => window.location.href = './messages'} >
            Messages
          </vaadin-button>
          <vaadin-button 
            @click=${event => window.location.href = './todo-view2'} >
            Todo2
          </vaadin-button>
          <vaadin-button id="loginBtn"
            theme="primary"
            @click=${event => window.location.href = './auth'} >
            Login
          </vaadin-button>
        </nav>
      </header>
      <main>
        <slot></slot> <!--Render component below nav -->
      </main>
      `
    };
        
}

customElements.define('nav-view', NavView);