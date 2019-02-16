import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

/**
 * @customElement
 * @polymer
 */
class RoutingExpApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        ul {
          list-style: none;
          display: flex;
        }
        li {
          margin: 10px;
        }
      </style>
      <app-location route="{{route}}"></app-location>
      <app-route
          route="{{route}}"
          pattern="/:page"
          data="{{routeData}}"
          tail="{{subroute}}">
      </app-route>
      <!-- <app-route
          route="{{subroute}}"
          pattern="/:subPage"
          data="{{subrouteData}}">
      </app-route> -->

      <nav>
        <ul>
          <li>
            <a name="home" href="/home">Home</a>
          </li>
          <li>
            <a name="about" href="/about">About</a>
          </li>
          <li>
            <a name="blog" href="/blog">Blog</a>
          </li>
          <li>
            <a name="api" href="/api">API</a>
          </li>
        </ul>
      </nav>

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <app-home name="home" subPage="[[subPage]]"></app-home>
        <app-contact name="contact"></app-contact>
        <app-about name="about"></app-about>
        <app-blog name="blog"></app-blog>
        <app-api name="api"></app-api>
      </iron-pages>
    `;
  }
  static get properties() {
    return {
      route: {
        type: Object
      },
      subroute: {
        type: Object
      },
      routeData: {
        type: Object
      },
      subrouteData: {
        type: Object
      },
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      // subPage: {
      //   type: String,
      //   reflectToAttribute: true,
      //   observer: '_subpageChanged'
      // }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  ready() {
    super.ready();
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
      this.set('route.path', `${this.rootPath}home`);
    } else if (['about', 'blog', 'api', 'contact'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'home';
    }
  }

  // _subroutePageChanged(subPage) {
  //   if (!subPage) {
  //     return;
  //   } else if (['contact'].indexOf(subPage) !== -1) {
  //     this.subPage = subPage;
  //   }
  // }

  _pageChanged(page) {
    switch (page) {
      case 'home':
        import('./app-home.js');
        break;
      case 'about':
        import('./app-about.js');
        break;
      case 'blog':
        import('./app-blog.js');
        break;
      case 'api':
        import('./app-api.js');
        break;
    }
  }

  // _subpageChanged(subPage) {
  //   console.log(subPage);
  //   switch (subPage) {
  //     case 'contact':
  //       import('./app-contact.js');
  //       break;
  //   }
  // }
}

window.customElements.define('routing-exp-app', RoutingExpApp);
