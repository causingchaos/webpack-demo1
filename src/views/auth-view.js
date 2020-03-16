import { LitElement, html } from 'lit-element'

import '@vaadin/vaadin-text-field/vaadin-email-field'
import '@vaadin/vaadin-text-field/vaadin-password-field'
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-login';

class AuthView extends LitElement{
  static get properties() {
    return {
      value: { type: Number }
    }
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
      main{
        display: flex;
        justify-content: center;
        padding: 25px;
      }
      </style>
      <div class="background-container">
          <main class="form-container">
          <vaadin-login-form id="login-form"
          @login="${(e) => console.log(e.target)}"
          @forgot-password="${(e) => this.forgotDialog(e)}"
          ></vaadin-login-form>
          </main>
          <vaadin-dialog id="feedbackDialog">
            <template>Login is being processed</template>
          </vaadin-dialog>
          <vaadin-dialog id="supportDialog"> 
            <template>Please contact support</template>
          </vaadin-dialog>

      </div>
    `;
  }
  forgotDialog(e) {
    var supportDialog= this.shadowRoot.querySelector('#supportDialog');
    console.log(supportDialog);
    supportDialog.opened = true;  // why does this not work!

  }
  // firstUpdated lifecycle method fires after render
  firstUpdated() {
  };

};

customElements.define('auth-view', AuthView);

//window.addEventListener('load', () => {
//  console.log("outside class -- > hello");
//  document.querySelector('vaadin-login-form')
//})
/*
window.addEventListener('WebComponentsReady', function() {
  var login = shadowRoot.getElementById('login-form');
  var feedbackDialog = document.querySelector('#feedbackDialog');
  var supportDialog = document.querySelector('#supportDialog');

  login.addEventListener('login', function() {
    feedbackDialog.opened = true;

    setTimeout(function() {
      login.disabled = false;
      feedbackDialog.opened = false;
    }, 2000)
  });

  login.addEventListener('forgot-password', function() {
    supportDialog.opened = true;
  });
});
*/