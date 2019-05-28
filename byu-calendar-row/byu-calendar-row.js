'use strict';
import {LitElement} from 'lit-element';
const util = require('byu-web-component-utils');
const tileTemplate = require('./byu-calendar-tile-row.html');
const imageTemplate = require('./byu-calendar-image-row.html');

const ATTR_IMAGE_ROW = 'image-row';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class ByuCalendarRow extends LitElement {

    get imageRow() {
        return this.hasAttribute(ATTR_IMAGE_ROW);
    }

    set imageRow(val) {
        if (val) {
            this.setAttribute(ATTR_IMAGE_ROW, '');
        } else {
            this.removeAttribute(ATTR_IMAGE_ROW);
        }
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

    render() {
        let template = this.imageRow ? imageTemplate : tileTemplate;
        util.applyTemplate(this, 'byu-calendar-row', template, () => {
            if (!this.imageRow) {
                var dateOb = this.date;
                var day = dateOb.getDate();
                var weekday = weekdays[dateOb.getDay()];
                var monthName = months[dateOb.getMonth()];
                var year = dateOb.getFullYear();

                this.shadowRoot.querySelector('#day-number').innerHTML = day;
                this.shadowRoot.querySelector('#month-name').innerHTML = monthName;
                this.shadowRoot.querySelector('#year').innerHTML = year;
            }
        });

    }
}

window.customElements.define('byu-calendar-row', ByuCalendarRow);
window.ByuCalendarRow = ByuCalendarRow;