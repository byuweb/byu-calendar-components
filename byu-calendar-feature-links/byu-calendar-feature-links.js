'use strict';
const util = require('byu-web-component-utils');
const linksTemplate = require('./byu-calendar-feature-links.html');

class ByuCalendarFeatureLinks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    util.applyTemplate(this, 'byu-calendar-feature-links', linksTemplate);
  }
}

window.customElements.define('byu-calendar-feature-links', ByuCalendarFeatureLinks);
window.ByuCalendarFeatureLinks = ByuCalendarFeatureLinks;