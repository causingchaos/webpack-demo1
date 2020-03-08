import { BaseView } from './base-view.js'
import { LitElement, html } from 'lit-element'

import '@vaadin/vaadin-text-field'
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-text-field/vaadin-text-area'
import '@vaadin/vaadin-ordered-layout';
import '@vaadin/vaadin-button';

class MessagesView extends BaseView{
  
  //getters
  static get properties() {
    return {
      message: String,
      name: String,
    }
  }
  render(){
    return html`
      <style>
        .form-container {
          width: 500px;
          padding: 50px;
          position: absolute;
          left: calc(50% - 250px);
          box-shadow: 1px 1px 1px black;
          background-color: white;  
        }
        #submitBtn{
          width: 100%;
        }
        #messageField{
          width: 100%;
        }
      </style>
      <vaadin-form-layout class="form-container">
        <h2>Post a Message</h2>
        <hr>
        <vaadin-text-area id="messageField" class="form-group" 
            placeholder="Enter some text"
            colspan="3" >
        </vaadin-text-area>
        <vaadin-button id="submitBtn" theme="primary"@click="${this.postMessage}"
        >Submit</vaadin-button>
      </vaadin-form-layout>
    `;
  }

  postMessage() {
    console.log("post");
  }

};

customElements.define('messages-view', MessagesView);

