'use strict';
import {LitElement} from 'lit-element';
const util = require('byu-web-component-utils');
const featureTemplate = require('./byu-calendar-feature-column.html');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class ByuCalendarFeatureColumn extends LitElement {

  render() {
    util.applyTemplate(this, 'byu-calendar-feature-column', featureTemplate, () => {
      var dateOb = this.date;
      var day = dateOb.getDate();
      var weekday = weekdays[dateOb.getDay()];
      var monthName = months[dateOb.getMonth()];

      this.shadowRoot.querySelector('#weekday').innerHTML = weekday;
      this.shadowRoot.querySelector('#month-and-day').innerHTML = monthName + ' ' + day;
    });
  }

  get date() {
    var dates = this.shadowRoot.querySelector('#date-val').assignedNodes();
    if (dates.length) {
      var date = this.shadowRoot.querySelector('#date-val').assignedNodes()[0];
      return new Date(date.innerText.trim());
    } else {
      return null;
    }
  }

}

window.customElements.define('byu-calendar-feature-column', ByuCalendarFeatureColumn);
window.ByuCalendarFeatureColumn = ByuCalendarFeatureColumn;