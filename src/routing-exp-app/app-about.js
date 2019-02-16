import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class AppAbout extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>About Page Works</h1>
    `;
  }
}

window.customElements.define('app-about', AppAbout);