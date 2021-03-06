'use strict';
import {LitElement} from 'lit-element';
const util = require('byu-web-component-utils');
const linksTemplate = require('./byu-calendar-feature-links.html');

class ByuCalendarFeatureLinks extends LitElement {

  render() {
    util.applyTemplate(this, 'byu-calendar-feature-links', linksTemplate);
  }

}

window.customElements.define('byu-calendar-feature-links', ByuCalendarFeatureLinks);
window.ByuCalendarFeatureLinks = ByuCalendarFeatureLinks;