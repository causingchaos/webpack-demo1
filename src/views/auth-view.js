import { LitElement, html } from 'lit-element'
import { BaseView } from './base-view';

import '@vaadin/vaadin-text-field/vaadin-email-field'
import '@vaadin/vaadin-text-field/vaadin-password-field'
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-login';

class AuthView extends LitElement{
  constructor(){
    super();
  }

  render() {
    return html`
      <style>
        .background-container{
        background-image: url("../img/bg.jpg");
        -webkit-background-size: cover;
        -moz-background-size: cover;
       -o-background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height:100vh;  /* responsive height */
      }
      .form-container{
        display: flex;
        justify-content: center;
        padding: 25px;
      }
      </style>
      <div class="background-container">
          <div class="form-container">
          <vaadin-login-form @load ="${this.consoleLog}"></vaadin-login-form>
          </div>
          <vaadin-dialog id="feedbackDialog">
            <template>Login is being processed</template>
          </vaadin-dialog>
          <vaadin-dialog id="supportDialog">
            <template>Please contact support</template>
          </vaadin-dialog>
      </div>
    `;
  }
  // firstUpdated lifecycle method fires after render
  firstUpdated() {
    window.addEventListener('WebComponentsReady', function() {
      var login = document.querySelector('vaadin-login-form');
      var feedbackDialog = document.querySelector('#feedbackDialog');
    })
  }

}

customElements.define('auth-view', AuthView);

//window.addEventListener('load', () => {
//  console.log("outside class -- > hello");
//  document.querySelector('vaadin-login-form')
//})