import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class AppContact extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>Contact Page Works</h1>
    `;
  }
}

window.customElements.define('app-contact', AppContact);