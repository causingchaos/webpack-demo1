import { BaseView } from './base-view.js'
import { LitElement, html } from 'lit-element'
import { connect } from 'pwa-helpers';

import '@vaadin/vaadin-text-field'
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-text-field/vaadin-text-area'
import '@vaadin/vaadin-ordered-layout';
import '@vaadin/vaadin-button';

import { store } from '../redux/store.js'


class MessagesView extends connect(store)(BaseView){
  
  //getters
  static get properties() {
    return {
      message: { type: String},
      name: { type: String},
      button: {type: String = "disabled" },
      messages: { type: Object }
    }
  }
  stateChanged(){
    //nothing set in state store yet
    this.messages = ["hello","today"]
    this.getMessage();
  }

  //position: absolute
  //left: calc(50% - 250px)
  //box-shadow: 1px 1px 1px black;
  render(){
    return html`
      <style>
        .form-container {
          width: 500px;
          padding: 50px;
          height: 300px;
          background-color: white;
          margin-bottom: 10px;
          box-shadow: 1px 1px 1px black;   
        }
        #submitBtn{width: 100%;}
        #messageField{width: 100%;
        }
        .messages-container{
          width: 600px;
          background-color: white;
          box-shadow: 1px 1px 1px black;  
        }
        .container{
          background-color: grey;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>
      <div class="container">
        <div class="form-container">
          <h2>Post a Message</h2>
          <hr>
          <vaadin-text-area id="messageField" class="form-group"
            value = "${this.message || ""}"
            @change = "${this.updateMessage}"
            @keyup = "${this.disableEnable}"
            placeholder="Enter some text"
            colspan="3" >
          </vaadin-text-area>
          <vaadin-button id="submitBtn" theme="primary"
            @click="${this.postMessage}"
            disabled >
            Submit</vaadin-button>
        </div>
        <div class=messages-container>
          <h2>Messages</h2>
          <ul>
            ${this.messages.map(item => html `<li>${item.msg}</li>`)}
          </ul>
        </div>  
      </div>  
    `;
  } 
  generateMessages(){

  }

  disableEnable(){
    var button = document.getElementById('submitBtn');
    if (event.target.value.length > 0){
      button.disabled = false;
    }else{
      button.disabled = true;
    }
  }
  updateMessage() {
    this.message = event.target.value;
    console.log("the updated message is " + this.message);
    console.log("the array has " + this.messages)
  };

  postMessage() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");
    myHeaders.append("Accept", "application/json","text/plain", '*/*')
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({msg: this.message}),
      redirect: 'follow'
    };
    fetch("http://localhost:4000/api/message", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
  }

  getMessage(){
    var vm = this;
    var data = [];

    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");
    myHeaders.append("Accept", "application/json","text/plain", '*/*')
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("http://localhost:4000/api/message", requestOptions)
    .then(response => response.text())
    .then(result => {
      this.messages = JSON.parse(result);

      console.log(this.messages);
    })
    .catch(error => console.log('error', error))
  }

};

customElements.define('messages-view', MessagesView);