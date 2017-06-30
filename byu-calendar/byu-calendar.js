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
    this.attachShadow({mode: 'open'});
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
    switch(attr) {
      case ATTR_TITLE:
      case ATTR_CATEGORIES:
      case ATTR_DAYS:
      case ATTR_PRICE:
      case ATTR_DISPLAY:
      case ATTR_LIMIT:
        getCalendarData(this);
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
  while(output.firstChild) {
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
//            price: '5',
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
        console.log(data);
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var response = xhttp.responseText;
                component.shadowRoot.getElementById('calendar-root').innerHTML = response;
            }
        };
        xhttp.open("POST", "https://calendar.byu.edu/calendar-widget/calendar-widget.php");
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(data));
}
