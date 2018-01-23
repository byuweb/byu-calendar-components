;(function() {
"use strict";

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 8);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(11);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(2);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(10);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(9);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "applyTemplate", function () {
    return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
  });
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "matchesSelector", function () {
    return __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__["a"];
  });
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "querySelectorSlot", function () {
    return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"];
  });
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "createEvent", function () {
    return __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__["a"];
  });
  /**
   * Created by ThatJoeMoore on 2/14/17
   */

  /***/
},
/* 1 */
/***/function (module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function () {
    var list = [];

    // return the list of modules as css string
    list.toString = function toString() {
      var result = [];
      for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (item[2]) {
          result.push("@media " + item[2] + "{" + item[1] + "}");
        } else {
          result.push(item[1]);
        }
      }
      return result.join("");
    };

    // import a list of modules into the list
    list.i = function (modules, mediaQuery) {
      if (typeof modules === "string") modules = [[null, modules, ""]];
      var alreadyImportedModules = {};
      for (var i = 0; i < this.length; i++) {
        var id = this[i][0];
        if (typeof id === "number") alreadyImportedModules[id] = true;
      }
      for (i = 0; i < modules.length; i++) {
        var item = modules[i];
        // skip already imported module
        // this implementation is not 100% perfect for weird media query combinations
        //  when a module is imported multiple times with different media queries.
        //  I hope this will never occur (Hey this way we have smaller bundles)
        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
          if (mediaQuery && !item[2]) {
            item[2] = mediaQuery;
          } else if (mediaQuery) {
            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
          }
          list.push(item);
        }
      }
    };
    return list;
  };

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = matchesSelector;
  /*
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
   */

  function matchesSelector(el, selector) {
    var proto = Element.prototype;
    var actual = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (s) {
      var doc = this.document || this.ownerDocument;
      return doc.querySelectorAll(s).indexOf(this) !== -1;
    };

    return actual.call(el, selector);
  }

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
  // imports


  // module
  exports.push([module.i, ":host{padding:10px 0;border-bottom:1px solid #e5e5e5;margin-bottom:10px}.section-first{background:#e5e5e5;color:#002e5d}.section-second{padding:15px;color:#767676}:host .content{width:100%}:host .content,:host ::slotted(*){font-family:Gotham A,Gotham B}#title ::slotted(*){color:#002e5d!important;font-size:24px;font-weight:700;text-decoration:none}#price ::slotted(*),.price-label{font-weight:700!important;color:#4d8501}#time{padding:6px 0;margin:0}#time ::slotted(*){font-size:14px;padding:0;margin:0;text-transform:uppercase}#location{padding:0 0 6px}#location ::slotted(*){font-size:14px!important;padding:0;margin:0;text-transform:uppercase}#tickets-link ::slotted(*){text-align:center;background-color:#4d8501!important;padding:9px 15px!important;width:120px;font-size:12px;color:#fff!important;text-decoration:none}#tickets-link ::slotted(:before){content:\"Price: \";display:inline}.section-second{min-height:100px;padding:0 15px 15px;display:block}#title ::slotted(*){line-height:1.2}#weekday{text-transform:uppercase;font-size:14px;padding-bottom:10px}#location ::slotted(*){color:#767676;font-size:12px;font-weight:500}#date,#date ::slotted(*){display:none}#year{letter-spacing:3px}.section-third{padding-top:8px;width:auto;margin-left:auto}:host{display:flex;flex-wrap:wrap;justify-content:flex-start;margin:10px 8px;width:100%}:host .section-first{height:120px;width:120px;display:block;background:#e5e5e5;margin-bottom:15px}:host .section-first .content{display:flex;justify-content:center}:host .section-second ::slotted(*){justify-content:flex-start}:host #month-name{padding:10px 0;font-size:13px;text-transform:uppercase;margin-bottom:0;font-weight:500}:host #day-number{font-size:48px;margin-bottom:5px;font-weight:700}:host #title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-align:center;padding:0 0 5px}:host #time ::slotted(*){font-size:14px}:host #location ::slotted(*){color:#767676;font-weight:500;padding:4px 0}:host #link ::slotted(*){color:#002e5d;padding:4px 0;text-decoration:none}:host([type=image]) .section-first{height:100px;width:100px}:host([type=image]) ::slotted(img){height:100px;width:100px;object-fit:cover}a,div,p{font-family:Gotham A,Gotham B}h1,h2,h3,h4{font-family:Sentinel A,Sentinel B}", ""]);

  // exports


  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
  // imports


  // module
  exports.push([module.i, ":host{padding:0;-moz-box-shadow:0 8px 12px rgba(0,0,0,.2);-webkit-box-shadow:0 8px 12px rgba(0,0,0,.2);box-shadow:0 8px 12px rgba(0,0,0,.2)}.section-first{background:#002e5d;color:#fff}.section-second{padding:15px}:host .content{width:100%;display:flex;justify-content:center}:host .content,:host ::slotted(*){font-family:Gotham A,Gotham B}#title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-decoration:none}#location ::slotted(*){font-size:14px}#time ::slotted(*){font-size:14px;text-transform:uppercase}#description ::slotted(*),#title ::slotted(*){font-family:Sentinel A,Sentinel B;line-height:1.2}#weekday{text-transform:uppercase;font-size:14px;padding-bottom:10px}#location ::slotted(*){color:#767676;text-transform:uppercase;font-size:12px;font-weight:500}#date,#date ::slotted(*){display:none}:host([layout=vertical]){max-width:170px;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:15px 8px}:host([layout=vertical]) .section-first{height:160px;width:170px;display:flex;flex-wrap:wrap;justify-content:center}:host([layout=vertical]) .section-second{height:190px;padding:15px 0;display:flex;flex-wrap:wrap;justify-content:center;align-content:space-between;align-self:flex-start}:host([layout=vertical]) .section-second ::slotted(*){justify-content:center}:host([layout=vertical]) #month-name{padding:10px;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=vertical]) #day-number{font-size:60px;margin-bottom:10px;font-weight:700}:host([layout=vertical]) #title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-align:center;padding:5px 0 10px;height:120px;width:150px}:host([layout=vertical]) #time ::slotted(*){font-size:14px;padding:8px 0!important}:host([layout=vertical]) #location ::slotted(*){color:#767676;text-align:center;font-weight:500}:host([layout=horizontal]){width:430px;margin:10px 15px;display:flex}:host([layout=horizontal]) .section-first{width:130px;min-height:130px!important}:host([layout=horizontal]) .section-second{width:300px;align-items:space-between}:host([layout=horizontal]) .section-second ::slotted(*){width:290px}:host([layout=horizontal]).extra-wide .section-second ::slotted(*){width:360px}:host([layout=horizontal]) #month-abb{padding:10px 0;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=horizontal]) #day-number{font-size:48px;font-weight:700}:host([layout=horizontal]) #time{padding:10px 0}:host([layout=horizontal]) #time ::slotted(*){color:#fff;padding:5px 0 10px;display:flex;justify-content:center}:host([layout=horizontal]) #title ::slotted(*){padding:5px 0 10px;width:100%;overflow:hidden}:host([layout=horizontal]) #location ::slotted(*){padding-top:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis!important}.section-second ::slotted(*){color:#767676;padding:0;margin:0;display:flex;flex-wrap:wrap;width:100%}:host ::slotted(img){display:none}a,div,p{font-family:Gotham A,Gotham B}h1,h2,h3,h4{font-family:Sentinel A,Sentinel B}", ""]);

  // exports


  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var util = __webpack_require__(0);
  var tileTemplate = __webpack_require__(15);
  var imageTemplate = __webpack_require__(14);

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var ByuCalendarRow = function (_HTMLElement) {
    _inherits(ByuCalendarRow, _HTMLElement);

    function ByuCalendarRow() {
      _classCallCheck(this, ByuCalendarRow);

      var _this = _possibleConstructorReturn(this, (ByuCalendarRow.__proto__ || Object.getPrototypeOf(ByuCalendarRow)).call(this));

      _this.attachShadow({ mode: 'open' });
      return _this;
    }

    _createClass(ByuCalendarRow, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var template = this.type === 'image' ? imageTemplate : tileTemplate;
        util.applyTemplate(this, 'byu-calendar-row', template, function () {
          if (_this2.type !== 'image') {
            var dateOb = _this2.date;
            var day = dateOb.getDate();
            var weekday = weekdays[dateOb.getDay()];
            var monthName = months[dateOb.getMonth()];
            var year = dateOb.getFullYear();

            _this2.shadowRoot.querySelector('#day-number').innerHTML = day;
            _this2.shadowRoot.querySelector('#month-name').innerHTML = monthName;
            _this2.shadowRoot.querySelector('#year').innerHTML = year;
          }
        });
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      },
      set: function set(value) {
        if (value) {
          this.setAttribute('type', value);
        } else {
          this.removeAttribute('type');
        }
      }
    }, {
      key: 'date',
      get: function get() {
        var dates = this.shadowRoot.querySelector('#date-val').assignedNodes();
        if (dates.length) {
          var date = this.shadowRoot.querySelector('#date-val').assignedNodes()[0];
          return new Date(date.innerText.trim());
        } else {
          return null;
        }
      }
    }]);

    return ByuCalendarRow;
  }(HTMLElement);

  window.customElements.define('byu-calendar-row', ByuCalendarRow);
  window.ByuCalendarRow = ByuCalendarRow;

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var util = __webpack_require__(0);
  var verticalTemplate = __webpack_require__(17);
  var horizontalTemplate = __webpack_require__(16);

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var ByuCalendarTile = function (_HTMLElement2) {
    _inherits(ByuCalendarTile, _HTMLElement2);

    function ByuCalendarTile() {
      _classCallCheck(this, ByuCalendarTile);

      var _this3 = _possibleConstructorReturn(this, (ByuCalendarTile.__proto__ || Object.getPrototypeOf(ByuCalendarTile)).call(this));

      _this3.attachShadow({ mode: 'open' });
      return _this3;
    }

    _createClass(ByuCalendarTile, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this4 = this;

        var template = this.layout === 'horizontal' ? horizontalTemplate : verticalTemplate;
        util.applyTemplate(this, 'byu-calendar-tile', template, function () {
          var dateOb = _this4.date;
          var monthName = months[dateOb.getMonth()];
          var monthAbb = monthAbbs[dateOb.getMonth()];
          var day = dateOb.getDate();
          var weekday = weekdays[dateOb.getDay()];
          if (_this4.layout == 'horizontal') {
            _this4.shadowRoot.querySelector('#month-abb').innerHTML = monthAbb;
          } else {
            _this4.shadowRoot.querySelector('#month-name').innerHTML = monthName;
            _this4.shadowRoot.querySelector('#weekday').innerHTML = weekday;
          }
          _this4.shadowRoot.querySelector('#day-number').innerHTML = day;
        });
      }
    }, {
      key: 'layout',
      get: function get() {
        return this.getAttribute('layout');
      },
      set: function set(value) {
        if (value) {
          this.setAttribute('layout', value);
        } else {
          this.removeAttribute('layout');
        }
      }
    }, {
      key: 'date',
      get: function get() {
        var dates = this.shadowRoot.querySelector("#date-val").assignedNodes();
        if (dates.length) {
          var date = this.shadowRoot.querySelector("#date-val").assignedNodes()[0];
          return new Date(date.innerText.trim());
        } else {
          return null;
        }
      }
    }]);

    return ByuCalendarTile;
  }(HTMLElement);

  window.customElements.define('byu-calendar-tile', ByuCalendarTile);
  window.ByuCalendarTile = ByuCalendarTile;

  /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html__ = __webpack_require__(18);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_calendar_html__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
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

  // Why do we need this? This breaks the code
  // import { currentId } from 'async_hooks';

  var ATTR_TITLE = 'title';
  var ATTR_CATEGORIES = 'categories';
  var ATTR_DAYS = 'days';
  var ATTR_PRICE = 'price';
  var ATTR_DISPLAY = 'display';
  var ATTR_LIMIT = 'limit';

  var DEFAULT_TITLE = 'Calendar Events';
  var DEFAULT_CATEGORIES = 'all';
  var DEFAULT_DAYS = '14';
  var DEFAULT_DISPLAY = 4;

  var ByuCalendar = function (_HTMLElement3) {
    _inherits(ByuCalendar, _HTMLElement3);

    function ByuCalendar() {
      _classCallCheck(this, ByuCalendar);

      var _this5 = _possibleConstructorReturn(this, (ByuCalendar.__proto__ || Object.getPrototypeOf(ByuCalendar)).call(this));

      _this5.attachShadow({ mode: 'open' });
      return _this5;
    }

    _createClass(ByuCalendar, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this6 = this;

        //This will stamp our template for us, then let us perform actions on the stamped DOM.
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["applyTemplate"](this, 'byu-calendar', __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html___default.a, function () {
          getCalendarData(_this6);
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {}
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
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

    }, {
      key: 'title',
      set: function set(value) {
        this.setAttribute(ATTR_TITLE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_TITLE)) {
          return this.getAttribute(ATTR_TITLE);
        }
        return DEFAULT_TITLE;
      }
    }, {
      key: 'categories',
      set: function set(value) {
        this.setAttribute(ATTR_CATEGORIES, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_CATEGORIES)) {
          return this.getAttribute(ATTR_CATEGORIES);
        }
        return DEFAULT_CATEGORIES;
      }
    }, {
      key: 'days',
      set: function set(value) {
        this.setAttribute(ATTR_DAYS, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_DAYS)) {
          return Number(this.getAttribute(ATTR_DAYS));
        }
        return DEFAULT_DAYS;
      }
    }, {
      key: 'price',
      set: function set(value) {
        this.setAttribute(ATTR_PRICE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_PRICE)) {
          return this.getAttribute(ATTR_PRICE);
        }
        return null;
      }
    }, {
      key: 'display',
      set: function set(value) {
        this.setAttribute(ATTR_DISPLAY, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_DISPLAY)) {
          return Number(this.getAttribute(ATTR_DISPLAY));
        }
        return DEFAULT_DISPLAY;
      }
    }, {
      key: 'limit',
      set: function set(value) {
        this.setAttribute(ATTR_LIMIT, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_LIMIT)) {
          return Number(this.getAttribute(ATTR_LIMIT));
        }
        return null;
      }
      // end Attributes

    }], [{
      key: 'observedAttributes',
      get: function get() {
        return [ATTR_TITLE, ATTR_CATEGORIES, ATTR_DAYS, ATTR_PRICE, ATTR_DISPLAY, ATTR_LIMIT];
      }
    }]);

    return ByuCalendar;
  }(HTMLElement);

  window.customElements.define('byu-calendar', ByuCalendar);
  window.ByuCalendar = ByuCalendar;

  // -------------------- Helper Functions --------------------

  function applyFancy(component) {
    var output = component.shadowRoot.querySelector('.output');
    var count = component.fancy;

    //Remove all current children
    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }

    if (count === 0) return;

    var slot = component.shadowRoot.querySelector('#fancy-template');
    var template = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["querySelectorSlot"](slot, 'template');

    if (!template) {
      throw new Error('No template was specified!');
    }

    for (var i = 0; i < count; i++) {
      var element = document.importNode(template.content, true);
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
      limit: component.limit // no limit is the default. This will show however many events there are for the above criteria.
    };

    // if no limit is specified, limit to 3
    if (!data.limit) data.limit = 3;

    var today = new Date();
    // Date formatted as yyyy-mm-dd
    var startDate = today.toISOString().split('T')[0];
    var endDate = new Date(today.setDate(today.getDate() + data.days)).toISOString().split('T')[0];

    var url = 'https://calendar.byu.edu/api/Events.json?event[min][date]=' + startDate + '&event[max][date]=' + endDate + '&categories=' + data.categories + '&price=' + data.price;

    if (!('fetch' in window)) {
      // IE11 doesn't support fetch, use XMLHttpRequest instead
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var response = xhttp.responseText;
          var html = response.length === 0 ? '<h3>No events.</h3>' : formatCalendarData(response, data);
          component.shadowRoot.getElementById('calendar-root').innerHTML = html;
        }
      };
      xhttp.open("GET", url);
      xhttp.send();
      return;
    }

    fetch(url).then(function (res) {
      return res.json();
    }).catch(function (error) {
      return console.error('Error:', error);
    }).then(function (response) {
      // trim the response to the requested limit
      response = response.slice(0, data.limit);
      // format calendar data
      var html = response.length === 0 ? '<h3>No events.</h3>' : formatCalendarData(response, data);
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
      case 1:
      default:
        return list_format(jsonArr);
        break;
    }
  }

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", 'August', 'September', 'October', 'November', 'December'];
  var shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  function vertical_tiles(jsonArr) {
    var html = '<div class="tile-container" style="display: flex; flex-wrap: wrap; margin: 20px 0px;">';
    for (var i = 0; i < jsonArr.length; i++) {
      var item = jsonArr[i];
      html += '<byu-calendar-tile layout="vertical">';
      var start = new Date(item.StartDateTime);
      html += '<p slot="date">' + start + '</p>';
      html += '<a href="' + item.FullUrl + ' " slot="title" target="_blank"><div class="title">' + item.Title + '</div></a>';
      if (item.AllDay === 'false') {
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
    var html = '<div class="tile-container" style="display: flex; flex-wrap: wrap; margin: 20px 0px;">';
    for (var i = 0; i < jsonArr.length; i++) {
      var item = jsonArr[i];
      html += '<byu-calendar-tile layout="horizontal">';
      var start = new Date(item.StartDateTime);
      html += '<p slot="date">' + start + '</p>';
      html += '<a href="' + item.FullUrl + ' " slot="title" target="_blank"><div class="title">' + item.Title + '</div></a>';
      if (item.AllDay === 'false') {
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
    var html = '<div class="tile-container">';
    for (var i = 0; i < jsonArr.length; i++) {
      var item = jsonArr[i];
      html += '<byu-calendar-row type="tile">';
      var start = new Date(item.StartDateTime);
      html += '<p slot="date">' + start + '</p>';
      html += '<a href="' + item.FullUrl + ' " slot="title" target="_blank"><div class="title">' + item.Title + '</div></a>';
      if (item.AllDay === 'false') {
        html += '<div class="time" slot="time">' + formatTime(start) + ' ' + item.Timezone + '</div>';
      } else {
        html += '<div class="time" slot="time">All Day</div>';
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
    var html = '<div class="tile-container">';
    var current = new Date();
    for (var i = 0; i < jsonArr.length; i++) {
      var item = jsonArr[i];
      var start = new Date(item.StartDateTime);
      var diff = dateDiff(current, start);
      if (i === 0 || diff !== 0) {
        html += '<div class="fullpage-date-wrapper"><div class="fullpage-date-weekday">' + days[start.getDay()] + ' | ' + '</div><div class="fullpage-date-text">' + months[start.getMonth()] + ' ' + start.getDate() + ', ' + start.getFullYear() + '</div></div>';
        current = start;
      }
      html += '<byu-calendar-row type="image">';
      html += '<img slot="image" src="' + item.ImgUrl + '">';
      html += '<a href="' + item.FullUrl + ' " slot="title" target="_blank">' + item.Title + '</a>';
      if (item.AllDay === 'false') {
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

  function list_format(jsonArr) {
    var html = '<div class="calendar-widget-block display-list">';
    var current = new Date();
    for (var i = 0; i < jsonArr.length; i++) {
      var item = jsonArr[i];
      var start = new Date(item.StartDateTime);
      var diff = dateDiff(current, start);
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

  /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_byu_calendar_js__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_calendar_row_byu_calendar_row_js__ = __webpack_require__(5);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_calendar_row_byu_calendar_row_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__byu_calendar_row_byu_calendar_row_js__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_calendar_tile_byu_calendar_tile_js__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_calendar_tile_byu_calendar_tile_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__byu_calendar_tile_byu_calendar_tile_js__);
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

  /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = createEvent;
  /*
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
   */

  function createEvent(name, detail) {
    if (typeof window.CustomEvent === 'function') {
      return new CustomEvent(name, { detail: detail, cancelable: true, bubbles: true });
    }
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, detail);
    return evt;
  }

  /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = querySelectorSlot;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(2);
  /*
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
   */

  function querySelectorSlot(slot, selector) {
    var roots = slot.assignedNodes({ flatten: true }).filter(function (n) {
      return n.nodeType === Node.ELEMENT_NODE;
    });

    for (var i = 0, len = roots.length; i < len; i++) {
      var each = roots[i];
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
        return each;
      }
      var child = each.querySelector(selector);
      if (child) {
        return child;
      }
    }
    return null;
  }

  /***/
},
/* 11 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = applyTemplate;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(13);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
  /*
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
   */

  var TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

  function applyTemplate(element, elementName, template, callback) {
    var sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

    var elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
    if (elSettings.templateHash === sum) {
      //Nothing has changed in the element.  Don't replace the DOM, don't fire the callback.
      return;
    }
    elSettings.templateHash = sum;

    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
      applyTemplateShady(element, elementName, template, callback, sum);
    } else {
      applyTemplateNative(element, template, callback);
    }
  }

  function applyTemplateShady(element, elementName, template, callback, sum) {
    var templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
    var templateElement = document.head.querySelector('template#' + templateId);
    if (!templateElement) {
      templateElement = document.createElement('template');
      templateElement.id = templateId;
      templateElement.innerHTML = template;
      document.head.appendChild(templateElement);
      ShadyCSS.prepareTemplate(templateElement, elementName);
    }
    if (ShadyCSS.styleElement) {
      ShadyCSS.styleElement(element);
    } else if (ShadyCSS.applyStyle) {
      ShadyCSS.applyStyle(element);
    } else {
      throw new Error('ShadyCSS is not properly defined: no styleElement or applyStyle!');
    }
    var imported = document.importNode(templateElement.content, true);
    var shadow = element.shadowRoot;
    //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
    // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
    while (shadow.firstChild) {
      shadow.removeChild(shadow.firstChild);
    }
    shadow.appendChild(imported);
    setTimeout(function () {
      runAfterStamping(element, callback);
    });
  }

  function applyTemplateNative(element, template, callback) {
    element.shadowRoot.innerHTML = template;
    runAfterStamping(element, callback);
  }

  function runAfterStamping(element, callback) {
    element.classList.add(TEMPLATE_RENDERED_CLASS);
    if (callback) {
      callback();
    }
  }

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
  // imports


  // module
  exports.push([module.i, "/*!\r\n *  @license\r\n *    Copyright 2017 Brigham Young University\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n *    Unless required by applicable law or agreed to in writing, software\r\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\r\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n *    See the License for the specific language governing permissions and\r\n *    limitations under the License.\r\n */\n/*!\r\n *  @license\r\n *    Copyright 2017 Brigham Young University\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n *    Unless required by applicable law or agreed to in writing, software\r\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\r\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n *    See the License for the specific language governing permissions and\r\n *    limitations under the License.\r\n */.fullpage-date-wrapper{color:#002e5d;font-weight:700;font-size:32px;margin-bottom:25px;display:flex}.fullpage-date-weekday{text-transform:uppercase}.fullpage-date-text,.fullpage-date-weekday{font-family:Sentinel A,Sentinel B,Vitesse A,Vitesse B,sans-serif}.fullpage-date-text{padding-left:10px}a{color:#003da5}a,a:focus,a:hover{text-decoration:none}a:focus,a:hover{color:#002c5c}.calendar-block-title{font-family:Sentinel A,Sentinel B}.block-calendar-widget-block div{font-family:Gotham A,Gotham B}.block-calendar-widget-block h2{color:#002e5d;border-bottom:1px solid #e5e5e5;font-size:28px;padding-bottom:6px}.block-calendar-widget-block .date-wrapper{display:flex;margin-bottom:12px}.block-calendar-widget-block .date-day-number{font-family:Sentinel A,Sentinel B;font-weight:700;font-size:26px;margin-right:7px}.block-calendar-widget-block .date-text{font-weight:500;font-size:21px;padding-top:4px}.block-calendar-widget-block .event-content{padding:0 0 15px 15px;display:flex;justify-content:space-between;line-height:1.3em;font-size:17px}.block-calendar-widget-block .event-time{min-width:60px;margin-left:12px;color:#767676;font-size:16px;display:flex;justify-content:flex-end}.calendar-widget-block.display-list{width:100%;margin-right:20px}@media screen and (max-width:1023px){.block-calendar-widget-block{width:100%}.calendar-widget-block.display-list{width:100%;margin-right:0}}", ""]);

  // exports


  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  function pad(hash, len) {
    while (hash.length < len) {
      hash = '0' + hash;
    }
    return hash;
  }

  function fold(hash, text) {
    var i;
    var chr;
    var len;
    if (text.length === 0) {
      return hash;
    }
    for (i = 0, len = text.length; i < len; i++) {
      chr = text.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash < 0 ? hash * -2 : hash;
  }

  function foldObject(hash, o, seen) {
    return Object.keys(o).sort().reduce(foldKey, hash);
    function foldKey(hash, key) {
      return foldValue(hash, o[key], key, seen);
    }
  }

  function foldValue(input, value, key, seen) {
    var hash = fold(fold(fold(input, key), toString(value)), typeof value === 'undefined' ? 'undefined' : _typeof(value));
    if (value === null) {
      return fold(hash, 'null');
    }
    if (value === undefined) {
      return fold(hash, 'undefined');
    }
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      if (seen.indexOf(value) !== -1) {
        return fold(hash, '[Circular]' + key);
      }
      seen.push(value);
      return foldObject(hash, value, seen);
    }
    return fold(hash, value.toString());
  }

  function toString(o) {
    return Object.prototype.toString.call(o);
  }

  function sum(o) {
    return pad(foldValue(0, o, '', []).toString(16), 8);
  }

  module.exports = sum;

  /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(3) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"><slot id=\"image\" name=\"image\"></slot></div> <div class=\"section-second\"> <div id=\"title\"><slot class=\"content\" name=\"title\"> </slot></div> <div id=\"time\"><slot class=\"content\" name=\"time\"></slot></div> <div id=\"location\"><slot class=\"content\" name=\"location\"></slot></div> <div id=\"price\"><slot class=\"content\" name=\"price\"></slot></div> <div id=\"link\"><slot class=\"content\" name=\"link\"></slot></div> </div> <div class=\"section-third\"> <div id=\"tickets-link\"><slot class=\"content\" name=\"tickets-link\"></slot></div> </div>";

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(3) + "</style> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-name\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"year\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> <div id=\"price\" class=\"content\"><slot name=\"price\"></slot></div> <div id=\"link\" class=\"content\"><slot name=\"link\"></slot></div> </div> <div class=\"section-third\"> <div id=\"tickets-link\"><slot id=\"tickets-link\" class=\"content\" name=\"tickets-link\"></slot></div> </div>";

  /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(4) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-abb\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> <div id=\"description\"><slot class=\"content\" name=\"description\"></slot></div> </div>";

  /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(4) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-name\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"weekday\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> </div>";

  /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(12) + "</style> <div class=\"root block-calendar-widget-block\" id=\"calendar-root\"> Loading Calendar Items </div>";

  /***/
}]
/******/);
}());

//# sourceMappingURL=components-compat.js.map
