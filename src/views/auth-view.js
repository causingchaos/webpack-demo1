import { LitElement, html } from 'lit-element'
import { BaseView } from './base-view';

import '@vaadin/vaadin-text-field/vaadin-email-field'
import '@vaadin/vaadin-text-field/vaadin-password-field'
import '@vaadin/vaadin-button'

class AuthView extends LitElement{
  constructor(){
    super(); 
  }

  render() {
    return html`
      <style>
        .form-container{
          margin-top: 10px;
          width: 500px;
          padding: 25px;
          height: 200px;
          background-color: white;
          margin-bottom: 10px;
        }
      </style>
      <div class="container">
        
        <div class="form-container"> 
          <h3>Login</h3>
          <vaadin-email-field label="Email" placeholder="Enter Email" name="email" clear-button-visible
          error-message="Please enter a valid email adress">
          </vaadin-email-field>
          <vaadin-password-field label="Password" name="password" placeholder="Enter Password"
          error-message="Please enter a valid email adress"
          reveal-button-visible
          ></vaadin-password-field>
          <vaadin-button type="submit"
            theme="default"
          >Submit</vaadin-button>
        </div>
        <div class="form-container">
          <h3>Register</h3>
          <vaadin-email-field label="Email" placeholder="Enter Email" name="email" clear-button-visible
          error-message="Please enter a valid email adress">
          </vaadin-email-field>
          <vaadin-password-field label="Password" name="password" placeholder="Enter Password"
          error-message="Please enter a valid email adress"
          reveal-button-visible
          ></vaadin-password-field>
          <vaadin-password-field label="Confirm Password" name="passwordConfirm" placeholder="Enter Password"
          error-message="Please enter a valid email adress"
          reveal-button-visible
          ></vaadin-password-field>
          <vaadin-button type="submit"
            theme="default"
          >Submit</vaadin-button>
        </div>
        <div>
      </div>
    `;
  }

}

customElements.define('auth-view', AuthView);