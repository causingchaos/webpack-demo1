import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-button';

import { BaseView } from './base-view.js'


class NavView extends BaseView{
    render(){
    return html`
      <style>

      </style>
    
      <header>
        <h1>Test App</h1>
        <nav>
          <a href="/">Todo</a>
          <a href="/stats">Stats</a>
          <a href="/messages">Messages</a>
          <vaadin-button @click=${event => window.location.href = './messages'}>TEST</vaadin-button>
        </nav>
      </header>
      
      <main>
        <slot></slot>
      </main>
      `
    };
        
}

customElements.define('nav-view', NavView);