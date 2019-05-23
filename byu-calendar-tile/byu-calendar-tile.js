'use strict';
import {LitElement} from 'lit-element';
const util = require('byu-web-component-utils');
const verticalTemplate = require('./byu-calendar-vtile.html');
const horizontalTemplate = require('./byu-calendar-htile.html');

var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

class ByuCalendarTile extends LitElement {

    _createRoot() {
        return this.attachShadow({ mode: 'open' });
    }

    get layout() {
        return this.getAttribute('layout');
    }

    set layout(value) {
        if (value) {
            this.setAttribute('layout', value);
        } else {
            this.removeAttribute('layout');
        }
    }

    get date(){
        var dates = this.shadowRoot.querySelector("#date-val").assignedNodes();
        if (dates.length) {
            var date = this.shadowRoot.querySelector("#date-val").assignedNodes()[0];
            return new Date(date.innerText.trim());
        } else {
            return null;
        }
    }

    _render({}) {

    }

    connectedCallback() {
        super.connectedCallback();
        let template = this.layout === 'horizontal' ? horizontalTemplate : verticalTemplate;
        util.applyTemplate(this, 'byu-calendar-tile', template, () => {
            var dateOb = this.date;
            var monthName = months[dateOb.getMonth()];
            var monthAbb = monthAbbs[dateOb.getMonth()];
            var day = dateOb.getDate();
            var weekday = weekdays[dateOb.getDay()];
            if (this.layout == 'horizontal') {
                this.shadowRoot.querySelector('#month-abb').innerHTML = monthAbb;
            } else {
                this.shadowRoot.querySelector('#month-name').innerHTML = monthName;
                this.shadowRoot.querySelector('#weekday').innerHTML = weekday;
            }
            this.shadowRoot.querySelector('#day-number').innerHTML = day;
        });
    }
}

window.customElements.define('byu-calendar-tile', ByuCalendarTile);
window.ByuCalendarTile = ByuCalendarTile;