import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class AppBlog extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>Blog Page Works</h1>
    `;
  }
}

window.customElements.define('app-blog', AppBlog);