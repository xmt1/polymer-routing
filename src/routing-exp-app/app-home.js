import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class AppHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <app-location route="{{subroute}}"></app-location>
      <app-route
          route="{{subroute}}"
          pattern="/home/:subPage"
          data="{{subrouteData}}">
      </app-route>
      <h1>Home Page Works</h1>
      <nav>
        <ul>
          <li><a name="blog" href="/home/contact">Contact</a></li>
        </ul>
      </nav>
      
      <iron-pages selected="[[subPage]]" attr-for-selected="name">
        <app-contact name="contact"></app-contact>
      </iron-pages>
      
    `;
  }

  static get properties() {
    return {
      subPage: {
        type: String,
        reflectToAttribute: true,
        observer: '_subpageChanged'
      }
    }
  }

  static get observers() {
    return [
      '_subroutePageChanged(subrouteData.subPage)'
    ];
  }

  _subroutePageChanged(subPage) {
    if (!subPage) {
      this.subPage = undefined;
      return;
    } else if (['contact'].indexOf(subPage) !== -1) {
      this.subPage = subPage;
    }
  }

  _subpageChanged(subPage) {
    switch (subPage) {
      case 'contact':
        import('./app-contact.js');
        break;
    }
  }
}

window.customElements.define('app-home', AppHome);