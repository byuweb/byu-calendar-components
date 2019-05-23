'use strict';
import {LitElement} from 'lit-element';
const util = require('byu-web-component-utils');
const minimalTemplate = require('./byu-calendar-minimal-tile.html');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class ByuCalendarMinimalTile extends LitElement {

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

  }

  connectedCallback() {
    super.connectedCallback();
    util.applyTemplate(this, 'byu-calendar-minimal-tile', minimalTemplate, () => {
      let dateOb = this.date;
      let day = dateOb.getDate();
      let monthName = months[dateOb.getMonth()];
      this.shadowRoot.querySelector('#month-and-day').innerHTML = monthName + ' ' + day;
    });
  };
}

window.customElements.define('byu-calendar-minimal-tile', ByuCalendarMinimalTile);
window.ByuCalendarMinimalTile = ByuCalendarMinimalTile;