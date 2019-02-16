import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class AppApi extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>API Page Works</h1>
    `;
  }
}

window.customElements.define('app-api', AppApi);