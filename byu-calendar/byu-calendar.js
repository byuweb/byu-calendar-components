/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
"use strict";

import template from './byu-calendar.html';
import * as util from 'byu-web-component-utils';
// Why do we need this? This breaks the code
// import { currentId } from 'async_hooks';

const ATTR_TITLE = 'title';
const ATTR_CATEGORIES = 'categories';
const ATTR_DAYS = 'days';
const ATTR_PRICE = 'price';
const ATTR_DISPLAY = 'display';
const ATTR_LIMIT = 'limit';

const DEFAULT_TITLE = 'Calendar Events';
const DEFAULT_CATEGORIES = 'all';
const DEFAULT_DAYS = '14';
const DEFAULT_DISPLAY = 4;

class ByuCalendar extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-calendar', template, () => {
      getCalendarData(this);
    });
  }

  disconnectedCallback() {

  }

  static get observedAttributes() {
    return [ATTR_TITLE, ATTR_CATEGORIES, ATTR_DAYS, ATTR_PRICE, ATTR_DISPLAY, ATTR_LIMIT];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    // This just makes unnecessary calls after connectedCallback inits the calendar data
    switch (attr) {
      case ATTR_TITLE:
      case ATTR_CATEGORIES:
      case ATTR_DAYS:
      case ATTR_PRICE:
      case ATTR_DISPLAY:
      case ATTR_LIMIT:
        //getCalendarData(this);
        break;
    }
  }

  // Attributes
  set title(value) {
    this.setAttribute(ATTR_TITLE, value);
  }

  get title() {
    if (this.hasAttribute(ATTR_TITLE)) {
      return this.getAttribute(ATTR_TITLE);
    }
    return DEFAULT_TITLE;
  }

  set categories(value) {
    this.setAttribute(ATTR_CATEGORIES, value);
  }

  get categories() {
    if (this.hasAttribute(ATTR_CATEGORIES)) {
      return this.getAttribute(ATTR_CATEGORIES);
    }
    return DEFAULT_CATEGORIES;
  }

  set days(value) {
    this.setAttribute(ATTR_DAYS, value);
  }

  get days() {
    if (this.hasAttribute(ATTR_DAYS)) {
      return Number(this.getAttribute(ATTR_DAYS));
    }
    return DEFAULT_DAYS;
  }

  set price(value) {
    this.setAttribute(ATTR_PRICE, value);
  }

  get price() {
    if (this.hasAttribute(ATTR_PRICE)) {
      return this.getAttribute(ATTR_PRICE);
    }
    return null;
  }

  set display(value) {
    this.setAttribute(ATTR_DISPLAY, value);
  }

  get display() {
    if (this.hasAttribute(ATTR_DISPLAY)) {
      return Number(this.getAttribute(ATTR_DISPLAY));
    }
    return DEFAULT_DISPLAY;
  }

  set limit(value) {
    this.setAttribute(ATTR_LIMIT, value);
  }

  get limit() {
    if (this.hasAttribute(ATTR_LIMIT)) {
      return Number(this.getAttribute(ATTR_LIMIT));
    }
    return null;
  }
  // end Attributes
}

window.customElements.define('byu-calendar', ByuCalendar);
window.ByuCalendar = ByuCalendar;

// -------------------- Helper Functions --------------------

function applyFancy(component) {
  let output = component.shadowRoot.querySelector('.output');
  let count = component.fancy;

  //Remove all current children
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }

  if (count === 0) return;

  let slot = component.shadowRoot.querySelector('#fancy-template');
  let template = util.querySelectorSlot(slot, 'template');

  if (!template) {
    throw new Error('No template was specified!');
  }

  for (let i = 0; i < count; i++) {
    let element = document.importNode(template.content, true);
    output.appendChild(element);
  }
}

function setupSlotListeners(component) {
  // let slot = component.shadowRoot.querySelector('#fancy-template');

  // //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  // slot.addEventListener('slotchange', () => {
  //   applyFancy(component);
  // }, false);
}

function getCalendarData(component) {
  var data = {
    /* STEP 1. REQUIRED. Set Categories Here: --- */
    title: component.title,
    /* STEP 2. REQUIRED. Set Categories Here: ---
      See https://calendar.byu.edu/subscribe to find what category ids you want. Separate them by +'s. i.e. 10+4+151  ----- */
    categories: component.categories,
    /* -- If you want to allow ALL BYU Calendar events for this time period, set categories to all instead: */
    //categories:  "all",
    /* STEP 3. REQUIRED. Enter the number of days going forward from today -- */
    days: component.days,
    /* STEP 4. OPTIONAL. IF you want to filter values to only those equal to or below a certain price, add a price filter in decimal or integer format -- */
    //price: '5',
    //price: '4.5',
    price: component.price ? component.price : '',
    /* -- Display Type Options:
    1: list type, grouped by date
    2: Vertical tiles.
    3: Horizontal tiles.4
    4: Full Page calendar list with tile rows, including pricing/ticket info.
    5: Full Page calendar list with image rows (grouped by date), including pricing/ticket info.
    */
    display: component.display,
    /* -- this limit is optional. It is for the purpose of putting a max limit on how many events are returned.
    * The display type you choose will also determine the limit.I.e. for the list format you may want a limit of 10 or 20.
    * For the vertical tile display you may want a limit of 3 or 4. For horizontal you may want a limit of 2 or 4.
    * Note that tile displays will wrap to the next line if the number of events returned can't all fit in one row. */
    limit: component.limit,  // no limit is the default. This will show however many events there are for the above criteria.
  };
  
  // if no limit is specified, limit to 3
  if (!data.limit) data.limit = 3;

  let today = new Date();
  // Date formatted as yyyy-mm-dd
  let startDate = today.toISOString().split('T')[0];
  let endDate = new Date(today.setDate(today.getDate() + data.days)).toISOString().split('T')[0];

  var url = 'https://calendar.byu.edu/api/Events.json?event[min][date]=' + startDate + '&event[max][date]=' + endDate + '&categories=' + data.categories + '&price=' + data.price;

  if (!('fetch' in window)) {
    // IE11 doesn't support fetch, use XMLHttpRequest instead
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = xhttp.responseText;
        let html = response.length === 0 ? '<h3>No events.</h3>' : formatCalendarData(response, data);
        component.shadowRoot.getElementById('calendar-root').innerHTML = html;
      }
    };
    xhttp.open("GET", url);
    xhttp.send();
    return;
  }

  fetch(url).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      // trim the response to the requested limit
      response = response.slice(0, data.limit);
      // format calendar data
      let html = response.length === 0 ? '<h3>No events.</h3>' : formatCalendarData(response, data);
      component.shadowRoot.getElementById('calendar-root').innerHTML = html;
    });
}

function formatCalendarData(jsonArr, data) {
  switch (data.display) {
    case 2:
      return vertical_tiles(jsonArr);
      break;
    case 3:
      return horizontal_tiles(jsonArr);
      break;
    case 4:
      return fullpage_rows(jsonArr);
      break;
    case 5:
      return fullpage_imgrows(jsonArr);
      break;
    case 6:
      return feature_columns(jsonArr);
      break;
    case 7:
      return minimal_tiles(jsonArr);
      break;
    case 1:
    default:
      return list_format(jsonArr);
      break;
  }
}

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July",'August','September','October','November','December'];
var shortMonths = ["Jan","Feb","Mar","Apr","May","June","July",'Aug','Sept','Oct','Nov','Dec'];

function vertical_tiles(jsonArr) {
  let html = '<div class="tile-container" style="display: flex; flex-wrap: wrap; margin: 20px 0px;">';
  for (let i = 0; i < jsonArr.length; i++) {
    let item = jsonArr[i];
    html += '<byu-calendar-tile layout="vertical">';
    let start = new Date(item.StartDateTime.trim());
    html += '<p slot="date">' + start + '</p>';
    html += '<a href="' + item.FullUrl + ' " slot="title" target="_blank"><div class="title">' + item.Title + '</div></a>';
    if (item.AllDay === 'false'){
      html += '<div class="time" slot="time">' + formatTime(start) + ' ' + item.Timezone + '</div>';
    } else {
      html += '<div class="time" slot="time">All Day</div>';
    }
    if (item.LocationName) {
      html += '<div class="location" slot="location">' + item.LocationName + '</div>';
    }
    html += '</byu-calendar-tile>';
  }
  html += '</div>';
  return html;
}

function horizontal_tiles(jsonArr) {
  let html = '<div class="tile-container" style="display: flex; flex-wrap: wrap; margin: 20px 0px;">';
  for (let i = 0; i < jsonArr.length; i++) {
    let item = jsonArr[i];
    html += '<byu-calendar-tile layout="horizontal">';
    let start = new Date(item.StartDateTime.trim());
    html += '<p slot="date">' + start + '</p>';
    html += '<a href="' + item.FullUrl + ' " slot="title" target="_blank"><div class="title">' + item.Title + '</div></a>';
    if (item.AllDay === 'false'){
      html += '<div class="time" slot="time">' + formatTime(start) + ' ' + item.Timezone + '</div>';
    } else {
      html += '<div class="time" slot="time">All Day</div>';
    }
    if (item.ShortDescription) {
      html += '<p slot="description">' + item.ShortDescription + '</p>';
    }
    if (item.LocationName) {
      html += '<div class="location" slot="location">' + item.LocationName + '</div>';
    }
    html += '</byu-calendar-tile>';
  }  
  html += '</div>';
  return html;
}

function fullpage_rows(jsonArr) {
  let html = '<div class="tile-container">';
  for (let i = 0; i < jsonArr.length; i++) {
    let item = jsonArr[i];
    html += '<byu-calendar-row>';
    let start = new Date(item.StartDateTime.trim());
    html += '<p slot="date">' + start + '</p>';
    html += '<a href="' + item.FullUrl + ' " slot="title" target="_blank"><div class="title">' + item.Title + '</div></a>';
    if (item.AllDay === 'false'){
      html += '<div class="time" slot="time">' + formatTime(start) + ' ' + item.Timezone + '</div>';
    } else {
      html += '<div class="time" slot="time">All Day</div>';
    }
    if (item.LocationName) {
      html += '<div class="location" slot="location">' + item.LocationName + '</div>';
    }
    if (item.TicketsExist === 'Yes') {
      if (item.IsFree === 'true') {
        html += '<p slot="price">Free</p>';
        if (item.TicketsUrl) {
          html += '<a slot="tickets-link" target="_blank" href="' + item.TicketsUrl + '">FREE TICKETS</a>';
        }
      } else {
        if (item.HighPrice) {
          html += '<p slot="price">Tickets: $' + item.LowPrice + ' - $' + item.HighPrice + '</p>';
        } else {
          html += '<p slot="price">Tickets: $' + item.LowPrice + '</p>';
        }
        if (item.TicketsUrl) {
          html += '<a slot="tickets-link" target="_blank" href="' + item.TicketsUrl + '">TICKETS</a>';
        }
      }
    }
    html += '<a href="' + item.FullUrl + '" slot="link" target="_blank">SEE FULL EVENT</a></byu-calendar-row>';
  }
  html += '</div>';
  return html;
}

function fullpage_imgrows(jsonArr) {
  let html = '<div class="tile-container">';
  let current = new Date();
  for (let i = 0; i < jsonArr.length; i++) {
    let item = jsonArr[i];
    let start = new Date(item.StartDateTime.trim());
    let diff = dateDiff(current, start);
    if (i === 0 || diff !== 0) {
      html += '<div class="fullpage-date-wrapper"><div class="fullpage-date-weekday">' + days[start.getDay()] + ' | ' + '</div><div class="fullpage-date-text">' + months[start.getMonth()] + ' ' + start.getDate() + ', ' + start.getFullYear() + '</div></div>';
      current = start;
    }
    html += '<byu-calendar-row image-row>';
    html += '<img slot="image" src="' + item.ImgUrl + '" />';
    html += '<a href="' + item.FullUrl + ' " slot="title" target="_blank">' + item.Title + '</a>';
    if (item.AllDay === 'false') {
      html += '<div class="time" slot="time">' + formatTime(start) + ' ' + item.Timezone + '</div>';
    } else {
      html += '<div class="time" slot="time">All Day</div>';
    }
    if (item.LocationName) {
      html += '<div class="location" slot="location">' + item.LocationName + '</div>';
    }
    if(item.TicketsExist === 'Yes') {
      if(item.IsFree === 'true') {
        html += '<p slot="price">Free</p>';
        if (item.TicketsUrl) {
          html += '<a slot="tickets-link" target="_blank" href="' + item.TicketsUrl + '">FREE TICKETS</a>';
        }
      } else {
        if (item.HighPrice) {
          html += '<p slot="price">Tickets: $' + item.LowPrice + '</p>';
        } else {
          html += '<p slot="price">Tickets: $' + item.LowPrice + ' - $' + item.HighPrice + '</p>';
        }
        if (item.TicketsUrl) {
          html += '<a slot="tickets-link" target="_blank" href="' + item.TicketsUrl + '">TICKETS</a>';
        }
      }
    }
    html += '<a href="' + item.FullUrl + '" slot="link" target="_blank">SEE FULL EVENT</a></byu-calendar-row>';
  }
  html += '</div>';
  return html;
}

function feature_columns(jsonArr) {
  let html = '<div class="overall-feature-wrapper calendar-widget-block display-list">';
  let current = new Date();
  let eventCount = 0;
  let columnCount = 0;
  for (let i = 0; i < jsonArr.length; i++) {
    let item = jsonArr[i];
    let start = new Date(item.StartDateTime.trim());
    let diff = dateDiff(current, start);
    if (i === 0 || diff !== 0 ) {
      if (i !== 0) {
        html += '</byu-calendar-feature-column>';
        eventCount = 0;
        if (columnCount == 4) {
          html += '<byu-calendar-feature-links></byu-calendar-feature-links>';
          html += '</div>';
          return html;
        }
      }
      columnCount++;
      html += '<byu-calendar-feature-column class="column-' + columnCount + '">';
      html += '<p slot="date">' + start + '</p>';
      current = start;
    }

    if (eventCount < 2) {
      if (eventCount == 1) {
        html += '<hr slot="divider">'
      }
      html += '<h4 slot="title-' + eventCount + '"><a href="' + item.FullUrl + ' " target="_blank">' + item.Title + '</a></h4>';
      if (item.AllDay === 'false') {
        html += '<div class="time" slot="time-' + eventCount + '">' + formatTime(start) + ' ' + item.Timezone + '</div>';
      }
      else {
        html += '<div class="time" slot="time-' + eventCount + '">All Day</div>';
      }
      if (item.LocationName) {
        html += '<div class="location" slot="location-' + eventCount + '">' + item.LocationName + '</div>';
      }
      eventCount++;
    }
  }
  html += '</byu-calendar-feature-column>';
  html += '<byu-calendar-feature-links></byu-calendar-feature-links>';
  html += '</div>';
  return html;
}

function minimal_tiles(jsonArr) {
  let html = '<div class="tile-container">';
  for (let i = 0; i < jsonArr.length; i++) {
    let item = jsonArr[i];
    html += '<byu-calendar-minimal-tile>';
    let start = new Date(item.StartDateTime.trim());
    html += '<p slot="date">' + start + '</p>';
    if (item.AllDay === 'false') {
      html += '<div slot="time">' + formatTime(start) + '</div>';
    }
    else {
      html += '<div slot="time">ALL DAY</div>';
    }
    if (item.LocationName) {
      html += '<div slot="location">' + item.LocationName + '</div>';
    }
    html += '<a slot="title" href="'+ item.FullUrl + '">' + item.Title + '</a>';
    html+= '</byu-calendar-minimal-tile>';
  }
  html += '</div>';
  return html;
}

function list_format(jsonArr) {
  let html = '<div class="calendar-widget-block display-list">';
  let current = new Date();
  for (let i = 0; i < jsonArr.length; i++) {
    let item = jsonArr[i];
    let start = new Date(item.StartDateTime.trim());
    let diff = dateDiff(current, start);
    if (i === 0 || diff !== 0) {
      html += '<div class="date-wrapper"><div class="date-day-number">' + start.getDate() + '</div><div class="date-text">' + shortMonths[start.getMonth()] + ', ' + days[start.getDay()] + '</div></div>';
      current = start;
    }
    html += '<div class="event"><div class="event-content">';
    html += '<div class="event-title"><a href="' + item.FullUrl + ' " target="_blank"><div class="title">' + item.Title + '</div></a></div>';
    if (item.AllDay === 'false') {
      html += '<div class="event-time">' + formatTime(start) + '</div>';
    } else {
      html += '<div class="event-time">All Day</div>';
    }
    html += '</div></div>';
  }
  html += '</div>';
  return html;
}

var _MS_PER_DAY = 1000 * 60 * 60 * 24;
function dateDiff(a, b) {
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function formatTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}