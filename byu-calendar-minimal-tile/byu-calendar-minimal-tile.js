'use strict';
import {LitElement, html} from '@polymer/lit-element';
const util = require('byu-web-component-utils');
const style = require('./byu-calendar-minimal-tile.scss');
const minimalTemplate = require('./byu-calendar-minimal-tile.html');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class ByuCalendarMinimalTile extends LitElement {

  constructor() {
    super();
  }

  _createRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  get date() {
    let dates = this.shadowRoot.querySelector('#date-val').assignedNodes();
    if (dates.length) {
      let date = this.shadowRoot.querySelector('#date-val').assignedNodes()[0];
      return new Date(date.innerText.trim());
    } else {
      return null;
    }
  }

  _render({}) {
    return html``;
  }

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.innerHTML = minimalTemplate;
    let dateOb = this.date;
    let day = dateOb.getDate();
    let monthName = months[dateOb.getMonth()];
    this.shadowRoot.querySelector('#month-and-day').innerHTML = monthName + ' ' + day;
  };
}

window.customElements.define('byu-calendar-minimal-tile', ByuCalendarMinimalTile);
window.ByuCalendarMinimalTile = ByuCalendarMinimalTile;