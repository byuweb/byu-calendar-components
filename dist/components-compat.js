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
  /******/return __webpack_require__(__webpack_require__.s = 2);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
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
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html__ = __webpack_require__(10);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_calendar_html__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(3);
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

  var ByuCalendar = function (_HTMLElement) {
    _inherits(ByuCalendar, _HTMLElement);

    function ByuCalendar() {
      _classCallCheck(this, ByuCalendar);

      var _this = _possibleConstructorReturn(this, (ByuCalendar.__proto__ || Object.getPrototypeOf(ByuCalendar)).call(this));

      _this.attachShadow({ mode: 'open' });
      return _this;
    }

    _createClass(ByuCalendar, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        //This will stamp our template for us, then let us perform actions on the stamped DOM.
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-calendar', __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html___default.a, function () {
          getCalendarData(_this2);
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {}
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
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

    var template = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["b" /* querySelectorSlot */](slot, 'template');

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
      limit: component.limit // no limit is the default. This will show however many events there are for the above criteria.
    };
    console.log(data);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = xhttp.responseText;
        component.shadowRoot.getElementById('calendar-root').innerHTML = response;
      }
    };
    xhttp.open("POST", "https://calendar.byu.edu/calendar-widget/calendar-widget.php");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(data));
  }

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_byu_calendar_js__ = __webpack_require__(1);
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
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(5);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(4);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
    return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
  });
  /* unused harmony reexport matchesSelector */
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
    return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"];
  });
  /* unused harmony reexport createEvent */
  /**
   * Created by ThatJoeMoore on 2/14/17
   */

  /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* unused harmony export default */
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
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = querySelectorSlot;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(0);
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
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = applyTemplate;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(9);
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

    if (window.ShadyCSS) {
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
/* 7 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(8)();
  // imports


  // module
  exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.fullpage-date-wrapper{color:#002e5d;font-weight:700;font-size:32px;margin-bottom:25px;display:flex}.fullpage-date-weekday{text-transform:uppercase}.fullpage-date-text,.fullpage-date-weekday{font-family:Sentinel A,Sentinel B,Vitesse A,Vitesse B,sans-serif}.fullpage-date-text{padding-left:10px}", ""]);

  // exports


  /***/
},
/* 8 */
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
/* 9 */
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
/* 10 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(7) + "</style> <div class=\"root\" id=\"calendar-root\"> Loading Calendar Items </div>";

  /***/
}]
/******/);
}());

//# sourceMappingURL=components-compat.js.map
