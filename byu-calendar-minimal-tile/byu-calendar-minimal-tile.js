'use strict';
import {LitElement, html} from '@polymer/lit-element';
const util = require('byu-web-component-utils');
const style = require('./byu-calendar-minimal-tile.scss');

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
    return html`
<style>${style}</style>
<div class="section-first">
  <div id="date"><slot id="date-val" name="date"></slot></div>
  <div id="month-and-day" class="content"></div>
  <div id="time" class="content"><slot name="time"></slot></div>
</div>
<div class="section-second">
  <div id="title" class="content"><slot name="title"></slot></div>
  <div id="location" class="content"><slot name="location"></slot></div>
</div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    let dateOb = this.date;
    let day = dateOb.getDate();
    let monthName = months[dateOb.getMonth()];
    this.shadowRoot.querySelector('#month-and-day').innerHTML = monthName + ' ' + day;
  };
}

window.customElements.define('byu-calendar-minimal-tile', ByuCalendarMinimalTile);
window.ByuCalendarMinimalTile = ByuCalendarMinimalTile;