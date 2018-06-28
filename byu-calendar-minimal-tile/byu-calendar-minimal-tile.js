'use strict';
const util = require('byu-web-component-utils');
const minimalTemplate = require('./byu-calendar-minimal-tile.html');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class ByuCalendarMinimalTile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  get date() {
    var dates = this.shadowRoot.querySelector('#date-val').assignedNodes();
    if (dates.length) {
      var date = this.shadowRoot.querySelector('#date-val').assignedNodes()[0];
      return new Date(date.innerText.trim());
    }
    else {
      return null;
    }
  }

  connectedCallback() {
    util.applyTemplate(this, 'byu-calendar-minimal-tile', minimalTemplate, () => {
      var dateOb = this.date;
      var day = dateOb.getDate();
      var monthName = months[dateOb.getMonth()];

      this.shadowRoot.querySelector('#month-and-day').innerHTML = monthName + ' ' + day;
    });
  }
}

window.customElements.define('byu-calendar-minimal-tile', ByuCalendarMinimalTile);
window.ByuCalendarMinimalTile = ByuCalendarMinimalTile;