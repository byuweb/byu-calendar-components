;(function() {
"use strict";

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    /******/return __webpack_require__(__webpack_require__.s = 14);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    window.JSCompiler_renameProperty = function (prop) {
        return prop;
    };

    /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(21);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(6);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(20);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(19);
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
/* 2 */
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
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export defaultTemplateFactory */
    /* unused harmony export render */
    /* unused harmony export directiveValue */
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // The first argument to JS template tags retain identity across multiple
    // calls to a tag for the same literal, so we can cache work done per literal
    // in a Map.

    var templateCaches = new Map();
    /* harmony export (immutable) */__webpack_exports__["a"] = templateCaches;

    /**
     * Interprets a template literal as an HTML template that can efficiently
     * render to and update a container.
     */
    var html = function html(strings) {
        for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            values[_key - 1] = arguments[_key];
        }

        return new TemplateResult(strings, values, 'html');
    };
    /* unused harmony export html */

    /**
     * Interprets a template literal as an SVG template that can efficiently
     * render to and update a container.
     */
    var svg = function svg(strings) {
        for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            values[_key2 - 1] = arguments[_key2];
        }

        return new SVGTemplateResult(strings, values, 'svg');
    };
    /* unused harmony export svg */

    /**
     * The return type of `html`, which holds a Template and the values from
     * interpolated expressions.
     */

    var TemplateResult = function () {
        function TemplateResult(strings, values, type) {
            var partCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultPartCallback;

            _classCallCheck(this, TemplateResult);

            this.strings = strings;
            this.values = values;
            this.type = type;
            this.partCallback = partCallback;
        }
        /**
         * Returns a string of HTML used to create a <template> element.
         */


        _createClass(TemplateResult, [{
            key: 'getHTML',
            value: function getHTML() {
                var l = this.strings.length - 1;
                var html = '';
                var isTextBinding = true;
                for (var i = 0; i < l; i++) {
                    var s = this.strings[i];
                    html += s;
                    // We're in a text position if the previous string closed its tags.
                    // If it doesn't have any tags, then we use the previous text position
                    // state.
                    var closing = findTagClose(s);
                    isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
                    html += isTextBinding ? nodeMarker : marker;
                }
                html += this.strings[l];
                return html;
            }
        }, {
            key: 'getTemplateElement',
            value: function getTemplateElement() {
                var template = document.createElement('template');
                template.innerHTML = this.getHTML();
                return template;
            }
        }]);

        return TemplateResult;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["f"] = TemplateResult;

    /**
     * A TemplateResult for SVG fragments.
     *
     * This class wraps HTMl in an <svg> tag in order to parse its contents in the
     * SVG namespace, then modifies the template to remove the <svg> tag so that
     * clones only container the original fragment.
     */

    var SVGTemplateResult = function (_TemplateResult) {
        _inherits(SVGTemplateResult, _TemplateResult);

        function SVGTemplateResult() {
            _classCallCheck(this, SVGTemplateResult);

            return _possibleConstructorReturn(this, (SVGTemplateResult.__proto__ || Object.getPrototypeOf(SVGTemplateResult)).apply(this, arguments));
        }

        _createClass(SVGTemplateResult, [{
            key: 'getHTML',
            value: function getHTML() {
                return '<svg>' + _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getHTML', this).call(this) + '</svg>';
            }
        }, {
            key: 'getTemplateElement',
            value: function getTemplateElement() {
                var template = _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getTemplateElement', this).call(this);
                var content = template.content;
                var svgElement = content.firstChild;
                content.removeChild(svgElement);
                reparentNodes(content, svgElement.firstChild);
                return template;
            }
        }]);

        return SVGTemplateResult;
    }(TemplateResult);
    /* harmony export (immutable) */

    __webpack_exports__["g"] = SVGTemplateResult;

    /**
     * The default TemplateFactory which caches Templates keyed on
     * result.type and result.strings.
     */
    function defaultTemplateFactory(result) {
        var templateCache = templateCaches.get(result.type);
        if (templateCache === undefined) {
            templateCache = new Map();
            templateCaches.set(result.type, templateCache);
        }
        var template = templateCache.get(result.strings);
        if (template === undefined) {
            template = new Template(result, result.getTemplateElement());
            templateCache.set(result.strings, template);
        }
        return template;
    }
    /**
     * Renders a template to a container.
     *
     * To update a container with new values, reevaluate the template literal and
     * call `render` with the new result.
     *
     * @param result a TemplateResult created by evaluating a template tag like
     *     `html` or `svg`.
     * @param container A DOM parent to render to. The entire contents are either
     *     replaced, or efficiently updated if the same result type was previous
     *     rendered there.
     * @param templateFactory a function to create a Template or retreive one from
     *     cache.
     */
    function render(result, container) {
        var templateFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultTemplateFactory;

        var template = templateFactory(result);
        var instance = container.__templateInstance;
        // Repeat render, just call update()
        if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
            instance.update(result.values);
            return;
        }
        // First render, create a new TemplateInstance and append it
        instance = new TemplateInstance(template, result.partCallback, templateFactory);
        container.__templateInstance = instance;
        var fragment = instance._clone();
        instance.update(result.values);
        removeNodes(container, container.firstChild);
        container.appendChild(fragment);
    }
    /**
     * An expression marker with embedded unique key to avoid collision with
     * possible text in templates.
     */
    var marker = '{{lit-' + String(Math.random()).slice(2) + '}}';
    /**
     * An expression marker used text-positions, not attribute positions,
     * in template.
     */
    var nodeMarker = '<!--' + marker + '-->';
    var markerRegex = new RegExp(marker + '|' + nodeMarker);
    /**
     * This regex extracts the attribute name preceding an attribute-position
     * expression. It does this by matching the syntax allowed for attributes
     * against the string literal directly preceding the expression, assuming that
     * the expression is in an attribute-value position.
     *
     * See attributes in the HTML spec:
     * https://www.w3.org/TR/html5/syntax.html#attributes-0
     *
     * "\0-\x1F\x7F-\x9F" are Unicode control characters
     *
     * " \x09\x0a\x0c\x0d" are HTML space characters:
     * https://www.w3.org/TR/html5/infrastructure.html#space-character
     *
     * So an attribute is:
     *  * The name: any character except a control character, space character, ('),
     *    ("), ">", "=", or "/"
     *  * Followed by zero or more space characters
     *  * Followed by "="
     *  * Followed by zero or more space characters
     *  * Followed by:
     *    * Any character except space, ('), ("), "<", ">", "=", (`), or
     *    * (") then any non-("), or
     *    * (') then any non-(')
     */
    var lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
    /**
     * Finds the closing index of the last closed HTML tag.
     * This has 3 possible return values:
     *   - `-1`, meaning there is no tag in str.
     *   - `string.length`, meaning the last opened tag is unclosed.
     *   - Some positive number < str.length, meaning the index of the closing '>'.
     */
    function findTagClose(str) {
        var close = str.lastIndexOf('>');
        var open = str.indexOf('<', close + 1);
        return open > -1 ? str.length : close;
    }
    /**
     * A placeholder for a dynamic expression in an HTML template.
     *
     * There are two built-in part types: AttributePart and NodePart. NodeParts
     * always represent a single dynamic expression, while AttributeParts may
     * represent as many expressions are contained in the attribute.
     *
     * A Template's parts are mutable, so parts can be replaced or modified
     * (possibly to implement different template semantics). The contract is that
     * parts can only be replaced, not removed, added or reordered, and parts must
     * always consume the correct number of values in their `update()` method.
     *
     * TODO(justinfagnani): That requirement is a little fragile. A
     * TemplateInstance could instead be more careful about which values it gives
     * to Part.update().
     */

    var TemplatePart = function TemplatePart(type, index, name, rawName, strings) {
        _classCallCheck(this, TemplatePart);

        this.type = type;
        this.index = index;
        this.name = name;
        this.rawName = rawName;
        this.strings = strings;
    };
    /* unused harmony export TemplatePart */

    var isTemplatePartActive = function isTemplatePartActive(part) {
        return part.index !== -1;
    };
    /* harmony export (immutable) */__webpack_exports__["e"] = isTemplatePartActive;

    /**
     * An updateable Template that tracks the location of dynamic parts.
     */

    var Template = function Template(result, element) {
        _classCallCheck(this, Template);

        this.parts = [];
        this.element = element;
        var content = this.element.content;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        var walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                            NodeFilter.SHOW_TEXT */, null, false);
        var index = -1;
        var partIndex = 0;
        var nodesToRemove = [];
        // The actual previous node, accounting for removals: if a node is removed
        // it will never be the previousNode.
        var previousNode = void 0;
        // Used to set previousNode at the top of the loop.
        var currentNode = void 0;
        while (walker.nextNode()) {
            index++;
            previousNode = currentNode;
            var node = currentNode = walker.currentNode;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (!node.hasAttributes()) {
                        continue;
                    }
                    var attributes = node.attributes;
                    // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order. In
                    // particular, Edge/IE can return them out of order, so we cannot assume
                    // a correspondance between part index and attribute index.
                    var count = 0;
                    for (var i = 0; i < attributes.length; i++) {
                        if (attributes[i].value.indexOf(marker) >= 0) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        var stringForPart = result.strings[partIndex];
                        // Find the attribute name
                        var attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1];
                        // Find the corresponding attribute
                        // TODO(justinfagnani): remove non-null assertion
                        var attribute = attributes.getNamedItem(attributeNameInPart);
                        var stringsForAttributeValue = attribute.value.split(markerRegex);
                        this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
                        node.removeAttribute(attribute.name);
                        partIndex += stringsForAttributeValue.length - 1;
                    }
                } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    var nodeValue = node.nodeValue;
                    if (nodeValue.indexOf(marker) < 0) {
                        continue;
                    }
                    var parent = node.parentNode;
                    var strings = nodeValue.split(markerRegex);
                    var lastIndex = strings.length - 1;
                    // We have a part for each match found
                    partIndex += lastIndex;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (var _i = 0; _i < lastIndex; _i++) {
                        parent.insertBefore(strings[_i] === '' ? document.createComment('') : document.createTextNode(strings[_i]), node);
                        this.parts.push(new TemplatePart('node', index++));
                    }
                    parent.insertBefore(strings[lastIndex] === '' ? document.createComment('') : document.createTextNode(strings[lastIndex]), node);
                    nodesToRemove.push(node);
                } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ && node.nodeValue === marker) {
                var _parent = node.parentNode;
                // Add a new marker node to be the startNode of the Part if any of the
                // following are true:
                //  * We don't have a previousSibling
                //  * previousSibling is being removed (thus it's not the
                //    `previousNode`)
                //  * previousSibling is not a Text node
                //
                // TODO(justinfagnani): We should be able to use the previousNode here
                // as the marker node and reduce the number of extra nodes we add to a
                // template. See https://github.com/PolymerLabs/lit-html/issues/147
                var previousSibling = node.previousSibling;
                if (previousSibling === null || previousSibling !== previousNode || previousSibling.nodeType !== Node.TEXT_NODE) {
                    _parent.insertBefore(document.createComment(''), node);
                } else {
                    index--;
                }
                this.parts.push(new TemplatePart('node', index++));
                nodesToRemove.push(node);
                // If we don't have a nextSibling add a marker node.
                // We don't have to check if the next node is going to be removed,
                // because that node will induce a new marker if so.
                if (node.nextSibling === null) {
                    _parent.insertBefore(document.createComment(''), node);
                } else {
                    index--;
                }
                currentNode = previousNode;
                partIndex++;
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = nodesToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var n = _step.value;

                n.parentNode.removeChild(n);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    };
    /* harmony export (immutable) */

    __webpack_exports__["b"] = Template;

    /**
     * Returns a value ready to be inserted into a Part from a user-provided value.
     *
     * If the user value is a directive, this invokes the directive with the given
     * part. If the value is null, it's converted to undefined to work better
     * with certain DOM APIs, like textContent.
     */
    var getValue = function getValue(part, value) {
        // `null` as the value of a Text node will render the string 'null'
        // so we convert it to undefined
        if (isDirective(value)) {
            value = value(part);
            return noChange;
        }
        return value === null ? undefined : value;
    };
    /* harmony export (immutable) */__webpack_exports__["j"] = getValue;

    var directive = function directive(f) {
        f.__litDirective = true;
        return f;
    };
    /* unused harmony export directive */

    var isDirective = function isDirective(o) {
        return typeof o === 'function' && o.__litDirective === true;
    };
    /**
     * A sentinel value that signals that a value was handled by a directive and
     * should not be written to the DOM.
     */
    var noChange = {};
    /* harmony export (immutable) */__webpack_exports__["k"] = noChange;

    /**
     * @deprecated Use `noChange` instead.
     */

    var isPrimitiveValue = function isPrimitiveValue(value) {
        return value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
    };

    var AttributePart = function () {
        function AttributePart(instance, element, name, strings) {
            _classCallCheck(this, AttributePart);

            this.instance = instance;
            this.element = element;
            this.name = name;
            this.strings = strings;
            this.size = strings.length - 1;
            this._previousValues = [];
        }

        _createClass(AttributePart, [{
            key: '_interpolate',
            value: function _interpolate(values, startIndex) {
                var strings = this.strings;
                var l = strings.length - 1;
                var text = '';
                for (var i = 0; i < l; i++) {
                    text += strings[i];
                    var v = getValue(this, values[startIndex + i]);
                    if (v && v !== noChange && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = v[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var t = _step2.value;

                                // TODO: we need to recursively call getValue into iterables...
                                text += t;
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    } else {
                        text += v;
                    }
                }
                return text + strings[l];
            }
        }, {
            key: '_equalToPreviousValues',
            value: function _equalToPreviousValues(values, startIndex) {
                for (var i = startIndex; i < startIndex + this.size; i++) {
                    if (this._previousValues[i] !== values[i] || !isPrimitiveValue(values[i])) {
                        return false;
                    }
                }
                return true;
            }
        }, {
            key: 'setValue',
            value: function setValue(values, startIndex) {
                if (this._equalToPreviousValues(values, startIndex)) {
                    return;
                }
                var s = this.strings;
                var value = void 0;
                if (s.length === 2 && s[0] === '' && s[1] === '') {
                    // An expression that occupies the whole attribute value will leave
                    // leading and trailing empty strings.
                    value = getValue(this, values[startIndex]);
                    if (Array.isArray(value)) {
                        value = value.join('');
                    }
                } else {
                    value = this._interpolate(values, startIndex);
                }
                if (value !== noChange) {
                    this.element.setAttribute(this.name, value);
                }
                this._previousValues = values;
            }
        }]);

        return AttributePart;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["h"] = AttributePart;

    var NodePart = function () {
        function NodePart(instance, startNode, endNode) {
            _classCallCheck(this, NodePart);

            this.instance = instance;
            this.startNode = startNode;
            this.endNode = endNode;
            this._previousValue = undefined;
        }

        _createClass(NodePart, [{
            key: 'setValue',
            value: function setValue(value) {
                value = getValue(this, value);
                if (value === noChange) {
                    return;
                }
                if (isPrimitiveValue(value)) {
                    // Handle primitive values
                    // If the value didn't change, do nothing
                    if (value === this._previousValue) {
                        return;
                    }
                    this._setText(value);
                } else if (value instanceof TemplateResult) {
                    this._setTemplateResult(value);
                } else if (Array.isArray(value) || value[Symbol.iterator]) {
                    this._setIterable(value);
                } else if (value instanceof Node) {
                    this._setNode(value);
                } else if (value.then !== undefined) {
                    this._setPromise(value);
                } else {
                    // Fallback, will render the string representation
                    this._setText(value);
                }
            }
        }, {
            key: '_insert',
            value: function _insert(node) {
                this.endNode.parentNode.insertBefore(node, this.endNode);
            }
        }, {
            key: '_setNode',
            value: function _setNode(value) {
                if (this._previousValue === value) {
                    return;
                }
                this.clear();
                this._insert(value);
                this._previousValue = value;
            }
        }, {
            key: '_setText',
            value: function _setText(value) {
                var node = this.startNode.nextSibling;
                value = value === undefined ? '' : value;
                if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
                    // If we only have a single text node between the markers, we can just
                    // set its value, rather than replacing it.
                    // TODO(justinfagnani): Can we just check if _previousValue is
                    // primitive?
                    node.textContent = value;
                } else {
                    this._setNode(document.createTextNode(value));
                }
                this._previousValue = value;
            }
        }, {
            key: '_setTemplateResult',
            value: function _setTemplateResult(value) {
                var template = this.instance._getTemplate(value);
                var instance = void 0;
                if (this._previousValue && this._previousValue.template === template) {
                    instance = this._previousValue;
                } else {
                    instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);
                    this._setNode(instance._clone());
                    this._previousValue = instance;
                }
                instance.update(value.values);
            }
        }, {
            key: '_setIterable',
            value: function _setIterable(value) {
                // For an Iterable, we create a new InstancePart per item, then set its
                // value to the item. This is a little bit of overhead for every item in
                // an Iterable, but it lets us recurse easily and efficiently update Arrays
                // of TemplateResults that will be commonly returned from expressions like:
                // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
                // If _previousValue is an array, then the previous render was of an
                // iterable and _previousValue will contain the NodeParts from the previous
                // render. If _previousValue is not an array, clear this part and make a new
                // array for NodeParts.
                if (!Array.isArray(this._previousValue)) {
                    this.clear();
                    this._previousValue = [];
                }
                // Lets us keep track of how many items we stamped so we can clear leftover
                // items from a previous render
                var itemParts = this._previousValue;
                var partIndex = 0;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var item = _step3.value;

                        // Try to reuse an existing part
                        var itemPart = itemParts[partIndex];
                        // If no existing part, create a new one
                        if (itemPart === undefined) {
                            // If we're creating the first item part, it's startNode should be the
                            // container's startNode
                            var itemStart = this.startNode;
                            // If we're not creating the first part, create a new separator marker
                            // node, and fix up the previous part's endNode to point to it
                            if (partIndex > 0) {
                                var previousPart = itemParts[partIndex - 1];
                                itemStart = previousPart.endNode = document.createTextNode('');
                                this._insert(itemStart);
                            }
                            itemPart = new NodePart(this.instance, itemStart, this.endNode);
                            itemParts.push(itemPart);
                        }
                        itemPart.setValue(item);
                        partIndex++;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                if (partIndex === 0) {
                    this.clear();
                    this._previousValue = undefined;
                } else if (partIndex < itemParts.length) {
                    var lastPart = itemParts[partIndex - 1];
                    // Truncate the parts array so _previousValue reflects the current state
                    itemParts.length = partIndex;
                    this.clear(lastPart.endNode.previousSibling);
                    lastPart.endNode = this.endNode;
                }
            }
        }, {
            key: '_setPromise',
            value: function _setPromise(value) {
                var _this2 = this;

                this._previousValue = value;
                value.then(function (v) {
                    if (_this2._previousValue === value) {
                        _this2.setValue(v);
                    }
                });
            }
        }, {
            key: 'clear',
            value: function clear() {
                var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

                removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
            }
        }]);

        return NodePart;
    }();
    /* unused harmony export NodePart */

    var defaultPartCallback = function defaultPartCallback(instance, templatePart, node) {
        if (templatePart.type === 'attribute') {
            return new AttributePart(instance, node, templatePart.name, templatePart.strings);
        } else if (templatePart.type === 'node') {
            return new NodePart(instance, node, node.nextSibling);
        }
        throw new Error('Unknown part type ' + templatePart.type);
    };
    /* harmony export (immutable) */__webpack_exports__["i"] = defaultPartCallback;

    /**
     * An instance of a `Template` that can be attached to the DOM and updated
     * with new values.
     */

    var TemplateInstance = function () {
        function TemplateInstance(template, partCallback, getTemplate) {
            _classCallCheck(this, TemplateInstance);

            this._parts = [];
            this.template = template;
            this._partCallback = partCallback;
            this._getTemplate = getTemplate;
        }

        _createClass(TemplateInstance, [{
            key: 'update',
            value: function update(values) {
                var valueIndex = 0;
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = this._parts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var part = _step4.value;

                        if (!part) {
                            valueIndex++;
                        } else if (part.size === undefined) {
                            part.setValue(values[valueIndex]);
                            valueIndex++;
                        } else {
                            part.setValue(values, valueIndex);
                            valueIndex += part.size;
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            }
        }, {
            key: '_clone',
            value: function _clone() {
                // Clone the node, rather than importing it, to keep the fragment in the
                // template's document. This leaves the fragment inert so custom elements
                // won't upgrade until after the main document adopts the node.
                var fragment = this.template.element.content.cloneNode(true);
                var parts = this.template.parts;
                if (parts.length > 0) {
                    // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
                    // null
                    var _walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                                          NodeFilter.SHOW_TEXT */, null, false);
                    var _index = -1;
                    for (var i = 0; i < parts.length; i++) {
                        var part = parts[i];
                        var partActive = isTemplatePartActive(part);
                        // An inactive part has no coresponding Template node.
                        if (partActive) {
                            while (_index < part.index) {
                                _index++;
                                _walker.nextNode();
                            }
                        }
                        this._parts.push(partActive ? this._partCallback(this, part, _walker.currentNode) : undefined);
                    }
                }
                return fragment;
            }
        }]);

        return TemplateInstance;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["c"] = TemplateInstance;

    /**
     * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
     * (exclusive), into another container (could be the same container), before
     * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
     * container.
     */
    var reparentNodes = function reparentNodes(container, start) {
        var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        var node = start;
        while (node !== end) {
            var n = node.nextSibling;
            container.insertBefore(node, before);
            node = n;
        }
    };
    /* unused harmony export reparentNodes */

    /**
     * Removes nodes, starting from `startNode` (inclusive) to `endNode`
     * (exclusive), from `container`.
     */
    var removeNodes = function removeNodes(container, startNode) {
        var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var node = startNode;
        while (node !== endNode) {
            var n = node.nextSibling;
            container.removeChild(node);
            node = n;
        }
    };
    /* harmony export (immutable) */__webpack_exports__["d"] = removeNodes;

    //# sourceMappingURL=lit-html.js.map

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export renderAttributes */
    /* unused harmony export classString */
    /* unused harmony export styleString */
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__polymer_polymer_lib_mixins_properties_mixin_js__ = __webpack_require__(16);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__polymer_polymer_lib_utils_case_map_js__ = __webpack_require__(18);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lit_html_lib_shady_render_js__ = __webpack_require__(35);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lit_html_lib_lit_extended_js__ = __webpack_require__(33);
    /* unused harmony reexport html */
    /* unused harmony reexport svg */

    /**
     * Renders attributes to the given element based on the `attrInfo` object where
     * boolean values are added/removed as attributes.
     * @param element Element on which to set attributes.
     * @param attrInfo Object describing attributes.
     */
    function renderAttributes(element, attrInfo) {
        for (var a in attrInfo) {
            var v = attrInfo[a] === true ? '' : attrInfo[a];
            if (v || v === '' || v === 0) {
                if (element.getAttribute(a) !== v) {
                    element.setAttribute(a, String(v));
                }
            } else if (element.hasAttribute(a)) {
                element.removeAttribute(a);
            }
        }
    }
    /**
     * Returns a string of css class names formed by taking the properties
     * in the `classInfo` object and appending the property name to the string of
     * class names if the property value is truthy.
     * @param classInfo
     */
    function classString(classInfo) {
        var o = [];
        for (var name in classInfo) {
            var v = classInfo[name];
            if (v) {
                o.push(name);
            }
        }
        return o.join(' ');
    }
    /**
     * Returns a css style string formed by taking the properties in the `styleInfo`
     * object and appending the property name (dash-cased) colon the
     * property value. Properties are separated by a semi-colon.
     * @param styleInfo
     */
    function styleString(styleInfo) {
        var o = [];
        for (var name in styleInfo) {
            var v = styleInfo[name];
            if (v || v === 0) {
                o.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__polymer_polymer_lib_utils_case_map_js__["a" /* camelToDashCase */])(name) + ': ' + v);
            }
        }
        return o.join('; ');
    }

    var LitElement = function (_webpack_require__$i) {
        _inherits(LitElement, _webpack_require__$i);

        function LitElement() {
            _classCallCheck(this, LitElement);

            var _this3 = _possibleConstructorReturn(this, (LitElement.__proto__ || Object.getPrototypeOf(LitElement)).apply(this, arguments));

            _this3.__renderComplete = null;
            _this3.__resolveRenderComplete = null;
            _this3.__isInvalid = false;
            _this3.__isChanging = false;
            return _this3;
        }
        /**
         * Override which sets up element rendering by calling* `_createRoot`
         * and `_firstRendered`.
         */


        _createClass(LitElement, [{
            key: 'ready',
            value: function ready() {
                this._root = this._createRoot();
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), 'ready', this).call(this);
                this._firstRendered();
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                if (window.ShadyCSS && this._root) {
                    window.ShadyCSS.styleElement(this);
                }
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), 'connectedCallback', this).call(this);
            }
            /**
             * Called after the element DOM is rendered for the first time.
             * Implement to perform tasks after first rendering like capturing a
             * reference to a static node which must be directly manipulated.
             * This should not be commonly needed. For tasks which should be performed
             * before first render, use the element constructor.
             */

        }, {
            key: '_firstRendered',
            value: function _firstRendered() {}
            /**
             * Implement to customize where the element's template is rendered by
             * returning an element into which to render. By default this creates
             * a shadowRoot for the element. To render into the element's childNodes,
             * return `this`.
             * @returns {Element|DocumentFragment} Returns a node into which to render.
             */

        }, {
            key: '_createRoot',
            value: function _createRoot() {
                return this.attachShadow({ mode: 'open' });
            }
            /**
             * Override which returns the value of `_shouldRender` which users
             * should implement to control rendering. If this method returns false,
             * _propertiesChanged will not be called and no rendering will occur even
             * if property values change or `requestRender` is called.
             * @param _props Current element properties
             * @param _changedProps Changing element properties
             * @param _prevProps Previous element properties
             * @returns {boolean} Default implementation always returns true.
             */

        }, {
            key: '_shouldPropertiesChange',
            value: function _shouldPropertiesChange(_props, _changedProps, _prevProps) {
                var shouldRender = this._shouldRender(_props, _changedProps, _prevProps);
                if (!shouldRender && this.__resolveRenderComplete) {
                    this.__resolveRenderComplete(false);
                }
                return shouldRender;
            }
            /**
             * Implement to control if rendering should occur when property values
             * change or `requestRender` is called. By default, this method always
             * returns true, but this can be customized as an optimization to avoid
             * rendering work when changes occur which should not be rendered.
             * @param _props Current element properties
             * @param _changedProps Changing element properties
             * @param _prevProps Previous element properties
             * @returns {boolean} Default implementation always returns true.
             */

        }, {
            key: '_shouldRender',
            value: function _shouldRender(_props, _changedProps, _prevProps) {
                return true;
            }
            /**
             * Override which performs element rendering by calling
             * `_render`, `_applyRender`, and finally `_didRender`.
             * @param props Current element properties
             * @param changedProps Changing element properties
             * @param prevProps Previous element properties
             */

        }, {
            key: '_propertiesChanged',
            value: function _propertiesChanged(props, changedProps, prevProps) {
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_propertiesChanged', this).call(this, props, changedProps, prevProps);
                var result = this._render(props);
                if (result && this._root !== undefined) {
                    this._applyRender(result, this._root);
                }
                this._didRender(props, changedProps, prevProps);
                if (this.__resolveRenderComplete) {
                    this.__resolveRenderComplete(true);
                }
            }
        }, {
            key: '_flushProperties',
            value: function _flushProperties() {
                this.__isChanging = true;
                this.__isInvalid = false;
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_flushProperties', this).call(this);
                this.__isChanging = false;
            }
            /**
             * Override which warns when a user attempts to change a property during
             * the rendering lifecycle. This is an anti-pattern and should be avoided.
             * @param property {string}
             * @param value {any}
             * @param old {any}
             */
            // tslint:disable-next-line no-any

        }, {
            key: '_shouldPropertyChange',
            value: function _shouldPropertyChange(property, value, old) {
                var change = _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_shouldPropertyChange', this).call(this, property, value, old);
                if (change && this.__isChanging) {
                    console.trace('Setting properties in response to other properties changing ' + ('considered harmful. Setting \'' + property + '\' from ') + ('\'' + this._getProperty(property) + '\' to \'' + value + '\'.'));
                }
                return change;
            }
            /**
             * Implement to describe the DOM which should be rendered in the element.
             * Ideally, the implementation is a pure function using only props to describe
             * the element template. The implementation must return a `lit-html`
             * TemplateResult. By default this template is rendered into the element's
             * shadowRoot. This can be customized by implementing `_createRoot`. This
             * method must be implemented.
             * @param {*} _props Current element properties
             * @returns {TemplateResult} Must return a lit-html TemplateResult.
             */

        }, {
            key: '_render',
            value: function _render(_props) {
                throw new Error('_render() not implemented');
            }
            /**
             * Renders the given lit-html template `result` into the given `node`.
             * Implement to customize the way rendering is applied. This is should not
             * typically be needed and is provided for advanced use cases.
             * @param result {TemplateResult} `lit-html` template result to render
             * @param node {Element|DocumentFragment} node into which to render
             */

        }, {
            key: '_applyRender',
            value: function _applyRender(result, node) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lit_html_lib_shady_render_js__["a" /* render */])(result, node, this.localName);
            }
            /**
             * Called after element DOM has been rendered. Implement to
             * directly control rendered DOM. Typically this is not needed as `lit-html`
             * can be used in the `_render` method to set properties, attributes, and
             * event listeners. However, it is sometimes useful for calling methods on
             * rendered elements, like calling `focus()` on an element to focus it.
             * @param _props Current element properties
             * @param _changedProps Changing element properties
             * @param _prevProps Previous element properties
             */

        }, {
            key: '_didRender',
            value: function _didRender(_props, _changedProps, _prevProps) {}
            /**
             * Call to request the element to asynchronously re-render regardless
             * of whether or not any property changes are pending.
             */

        }, {
            key: 'requestRender',
            value: function requestRender() {
                this._invalidateProperties();
            }
            /**
             * Override which provides tracking of invalidated state.
             */

        }, {
            key: '_invalidateProperties',
            value: function _invalidateProperties() {
                this.__isInvalid = true;
                _get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_invalidateProperties', this).call(this);
            }
            /**
             * Returns a promise which resolves after the element next renders.
             * The promise resolves to `true` if the element rendered and `false` if the
             * element did not render.
             * This is useful when users (e.g. tests) need to react to the rendered state
             * of the element after a change is made.
             * This can also be useful in event handlers if it is desireable to wait
             * to send an event until after rendering. If possible implement the
             * `_didRender` method to directly respond to rendering within the
             * rendering lifecycle.
             */

        }, {
            key: 'renderComplete',
            get: function get() {
                var _this4 = this;

                if (!this.__renderComplete) {
                    this.__renderComplete = new Promise(function (resolve) {
                        _this4.__resolveRenderComplete = function (value) {
                            _this4.__resolveRenderComplete = _this4.__renderComplete = null;
                            resolve(value);
                        };
                    });
                    if (!this.__isInvalid && this.__resolveRenderComplete) {
                        Promise.resolve().then(function () {
                            return _this4.__resolveRenderComplete(false);
                        });
                    }
                }
                return this.__renderComplete;
            }
        }]);

        return LitElement;
    }(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__polymer_polymer_lib_mixins_properties_mixin_js__["a" /* PropertiesMixin */])(HTMLElement));
    /* harmony export (immutable) */

    __webpack_exports__["a"] = LitElement;

    //# sourceMappingURL=lit-element.js.map

    /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__boot_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__boot_js__);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // unique global id for deduping mixins.
    var dedupeId = 0;

    /**
     * @constructor
     * @extends {Function}
     */
    function MixinFunction() {}
    /** @type {(WeakMap | undefined)} */
    MixinFunction.prototype.__mixinApplications;
    /** @type {(Object | undefined)} */
    MixinFunction.prototype.__mixinSet;

    /* eslint-disable valid-jsdoc */
    /**
     * Wraps an ES6 class expression mixin such that the mixin is only applied
     * if it has not already been applied its base argument. Also memoizes mixin
     * applications.
     *
     * @template T
     * @param {T} mixin ES6 class expression mixin to wrap
     * @return {T}
     * @suppress {invalidCasts}
     */
    var dedupingMixin = function dedupingMixin(mixin) {
        var mixinApplications = /** @type {!MixinFunction} */mixin.__mixinApplications;
        if (!mixinApplications) {
            mixinApplications = new WeakMap();
            /** @type {!MixinFunction} */mixin.__mixinApplications = mixinApplications;
        }
        // maintain a unique id for each mixin
        var mixinDedupeId = dedupeId++;
        function dedupingMixin(base) {
            var baseSet = /** @type {!MixinFunction} */base.__mixinSet;
            if (baseSet && baseSet[mixinDedupeId]) {
                return base;
            }
            var map = mixinApplications;
            var extended = map.get(base);
            if (!extended) {
                extended = /** @type {!Function} */mixin(base);
                map.set(base, extended);
            }
            // copy inherited mixin set from the extended class, or the base class
            // NOTE: we avoid use of Set here because some browser (IE11)
            // cannot extend a base Set via the constructor.
            var mixinSet = Object.create( /** @type {!MixinFunction} */extended.__mixinSet || baseSet || null);
            mixinSet[mixinDedupeId] = true;
            /** @type {!MixinFunction} */extended.__mixinSet = mixinSet;
            return extended;
        }

        return (/** @type {T} */dedupingMixin
        );
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = dedupingMixin;

    /* eslint-enable valid-jsdoc */

    /***/
},
/* 6 */
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
/* 7 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(2)();
    // imports


    // module
    exports.push([module.i, ":host{padding:10px 0;border-bottom:1px solid #e5e5e5;margin-bottom:10px}.section-first{background:#e5e5e5;color:#002e5d}.section-second{padding:15px;color:#767676}:host .content{width:100%}:host .content,:host ::slotted(*){font-family:Gotham A,Gotham B}#title ::slotted(*){color:#002e5d!important;font-size:24px;font-weight:700;text-decoration:none}#price ::slotted(*),.price-label{font-weight:700!important;color:#4d8501}#time{padding:6px 0;margin:0}#time ::slotted(*){font-size:14px;padding:0;margin:0;text-transform:uppercase}#location{padding:0 0 6px}#location ::slotted(*){font-size:14px!important;padding:0;margin:0;text-transform:uppercase}#tickets-link ::slotted(*){text-align:center;background-color:#4d8501!important;padding:9px 15px!important;width:120px;font-size:12px;color:#fff!important;text-decoration:none}#tickets-link ::slotted(:before){content:\"Price: \";display:inline}.section-second{min-height:100px;padding:0 15px 15px;display:block}#title ::slotted(*){line-height:1.2}#weekday{text-transform:uppercase;font-size:14px;padding-bottom:10px}#location ::slotted(*){color:#767676;font-size:12px;font-weight:500}#date,#date ::slotted(*){display:none}#year{letter-spacing:3px}.section-third{padding-top:8px;width:auto;margin-left:auto}:host{display:flex;flex-direction:row;justify-content:flex-start;margin:10px 8px;width:100%}:host .section-first{height:120px;width:120px;display:block;background:#e5e5e5;margin-bottom:15px}:host .section-first .content{width:120px;display:flex;justify-content:center}:host .section-second ::slotted(*){justify-content:flex-start}:host #month-name{padding:10px 0;font-size:13px;text-transform:uppercase;margin-bottom:0;font-weight:500}:host #day-number{font-size:48px;margin-bottom:5px;font-weight:700}:host #title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;padding:0 0 5px}:host #time ::slotted(*){font-size:14px}:host #location ::slotted(*){color:#767676;font-weight:500;padding:4px 0}:host #link ::slotted(*){color:#002e5d;padding:4px 0;text-decoration:none}:host([image-row]) .section-first{height:auto;width:100px;background:none}:host([image-row]) .section-first ::slotted(img){height:auto;width:100px}a,div,p{font-family:Gotham A,Gotham B}h1,h2,h3,h4{font-family:Sentinel A,Sentinel B}", ""]);

    // exports


    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(2)();
    // imports


    // module
    exports.push([module.i, ":host{padding:0;-moz-box-shadow:0 8px 12px rgba(0,0,0,.2);-webkit-box-shadow:0 8px 12px rgba(0,0,0,.2);box-shadow:0 8px 12px rgba(0,0,0,.2)}.section-first{background:#002e5d;color:#fff}.section-second{padding:15px}:host .content{width:100%;display:flex;justify-content:center}:host .content,:host ::slotted(*){font-family:Gotham A,Gotham B}#title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-decoration:none}#location ::slotted(*){font-size:14px}#time ::slotted(*){font-size:14px;text-transform:uppercase}#description ::slotted(*),#title ::slotted(*){font-family:Sentinel A,Sentinel B;line-height:1.2}#weekday{text-transform:uppercase;font-size:14px;padding-bottom:10px}#location ::slotted(*){color:#767676;text-transform:uppercase;font-size:12px;font-weight:500}#date,#date ::slotted(*){display:none}:host([layout=vertical]){max-width:170px;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:15px 8px}:host([layout=vertical]) .section-first{height:160px;width:170px;display:flex;flex-wrap:wrap;justify-content:center}:host([layout=vertical]) .section-second{height:190px;padding:15px 0;display:flex;flex-wrap:wrap;justify-content:center;align-content:space-between;align-self:flex-start}:host([layout=vertical]) .section-second ::slotted(*){justify-content:center}:host([layout=vertical]) #month-name{padding:10px;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=vertical]) #day-number{font-size:60px;margin-bottom:10px;font-weight:700}:host([layout=vertical]) #title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-align:center;padding:5px 0 10px;height:120px;width:150px}:host([layout=vertical]) #time ::slotted(*){font-size:14px;padding:8px 0!important}:host([layout=vertical]) #location ::slotted(*){color:#767676;text-align:center;font-weight:500}:host([layout=horizontal]){width:430px;margin:10px 15px;display:flex}:host([layout=horizontal]) .section-first{width:130px;min-height:130px!important}:host([layout=horizontal]) .section-second{width:300px;align-items:space-between}:host([layout=horizontal]) .section-second ::slotted(*){width:290px}:host([layout=horizontal]).extra-wide .section-second ::slotted(*){width:360px}:host([layout=horizontal]) #month-abb{padding:10px 0;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=horizontal]) #day-number{font-size:48px;font-weight:700}:host([layout=horizontal]) #time{padding:10px 0}:host([layout=horizontal]) #time ::slotted(*){color:#fff;padding:5px 0 10px;display:flex;justify-content:center}:host([layout=horizontal]) #title ::slotted(*){padding:5px 0 10px;width:100%;overflow:hidden}:host([layout=horizontal]) #location ::slotted(*){padding-top:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis!important}.section-second ::slotted(*){color:#767676;padding:0;margin:0;display:flex;flex-wrap:wrap;width:100%}:host ::slotted(img){display:none}a,div,p{font-family:Gotham A,Gotham B}h1,h2,h3,h4{font-family:Sentinel A,Sentinel B}", ""]);

    // exports


    /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__polymer_lit_element__ = __webpack_require__(4);

    var util = __webpack_require__(1);
    var featureTemplate = __webpack_require__(26);

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var ByuCalendarFeatureColumn = function (_WEBPACK_IMPORTED_MO) {
        _inherits(ByuCalendarFeatureColumn, _WEBPACK_IMPORTED_MO);

        function ByuCalendarFeatureColumn() {
            _classCallCheck(this, ByuCalendarFeatureColumn);

            return _possibleConstructorReturn(this, (ByuCalendarFeatureColumn.__proto__ || Object.getPrototypeOf(ByuCalendarFeatureColumn)).apply(this, arguments));
        }

        _createClass(ByuCalendarFeatureColumn, [{
            key: '_createRoot',
            value: function _createRoot() {
                return this.attachShadow({ mode: 'open' });
            }
        }, {
            key: '_render',
            value: function _render(_ref) {
                _objectDestructuringEmpty(_ref);
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this6 = this;

                _get(ByuCalendarFeatureColumn.prototype.__proto__ || Object.getPrototypeOf(ByuCalendarFeatureColumn.prototype), 'connectedCallback', this).call(this);
                util.applyTemplate(this, 'byu-calendar-feature-column', featureTemplate, function () {
                    var dateOb = _this6.date;
                    var day = dateOb.getDate();
                    var weekday = weekdays[dateOb.getDay()];
                    var monthName = months[dateOb.getMonth()];

                    _this6.shadowRoot.querySelector('#weekday').innerHTML = weekday;
                    _this6.shadowRoot.querySelector('#month-and-day').innerHTML = monthName + ' ' + day;
                });
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

        return ByuCalendarFeatureColumn;
    }(__WEBPACK_IMPORTED_MODULE_0__polymer_lit_element__["a" /* LitElement */]);

    window.customElements.define('byu-calendar-feature-column', ByuCalendarFeatureColumn);
    window.ByuCalendarFeatureColumn = ByuCalendarFeatureColumn;

    /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__polymer_lit_element__ = __webpack_require__(4);

    var util = __webpack_require__(1);
    var linksTemplate = __webpack_require__(27);

    var ByuCalendarFeatureLinks = function (_WEBPACK_IMPORTED_MO2) {
        _inherits(ByuCalendarFeatureLinks, _WEBPACK_IMPORTED_MO2);

        function ByuCalendarFeatureLinks() {
            _classCallCheck(this, ByuCalendarFeatureLinks);

            return _possibleConstructorReturn(this, (ByuCalendarFeatureLinks.__proto__ || Object.getPrototypeOf(ByuCalendarFeatureLinks)).apply(this, arguments));
        }

        _createClass(ByuCalendarFeatureLinks, [{
            key: '_createRoot',
            value: function _createRoot() {
                return this.attachShadow({ mode: 'open' });
            }
        }, {
            key: '_render',
            value: function _render(_ref2) {
                _objectDestructuringEmpty(_ref2);
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                _get(ByuCalendarFeatureLinks.prototype.__proto__ || Object.getPrototypeOf(ByuCalendarFeatureLinks.prototype), 'connectedCallback', this).call(this);
                util.applyTemplate(this, 'byu-calendar-feature-links', linksTemplate);
            }
        }]);

        return ByuCalendarFeatureLinks;
    }(__WEBPACK_IMPORTED_MODULE_0__polymer_lit_element__["a" /* LitElement */]);

    window.customElements.define('byu-calendar-feature-links', ByuCalendarFeatureLinks);
    window.ByuCalendarFeatureLinks = ByuCalendarFeatureLinks;

    /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var util = __webpack_require__(1);
    var tileTemplate = __webpack_require__(29);
    var imageTemplate = __webpack_require__(28);

    var ATTR_IMAGE_ROW = 'image-row';

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var ByuCalendarRow = function (_HTMLElement) {
        _inherits(ByuCalendarRow, _HTMLElement);

        function ByuCalendarRow() {
            _classCallCheck(this, ByuCalendarRow);

            var _this8 = _possibleConstructorReturn(this, (ByuCalendarRow.__proto__ || Object.getPrototypeOf(ByuCalendarRow)).call(this));

            _this8.attachShadow({ mode: 'open' });
            return _this8;
        }

        _createClass(ByuCalendarRow, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this9 = this;

                var template = this.imageRow ? imageTemplate : tileTemplate;
                util.applyTemplate(this, 'byu-calendar-row', template, function () {
                    if (!_this9.imageRow) {
                        var dateOb = _this9.date;
                        var day = dateOb.getDate();
                        var weekday = weekdays[dateOb.getDay()];
                        var monthName = months[dateOb.getMonth()];
                        var year = dateOb.getFullYear();

                        _this9.shadowRoot.querySelector('#day-number').innerHTML = day;
                        _this9.shadowRoot.querySelector('#month-name').innerHTML = monthName;
                        _this9.shadowRoot.querySelector('#year').innerHTML = year;
                    }
                });
            }
        }, {
            key: 'imageRow',
            get: function get() {
                return this.hasAttribute(ATTR_IMAGE_ROW);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_IMAGE_ROW, '');
                } else {
                    this.removeAttribute(ATTR_IMAGE_ROW);
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
/* 12 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var util = __webpack_require__(1);
    var verticalTemplate = __webpack_require__(31);
    var horizontalTemplate = __webpack_require__(30);

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var ByuCalendarTile = function (_HTMLElement2) {
        _inherits(ByuCalendarTile, _HTMLElement2);

        function ByuCalendarTile() {
            _classCallCheck(this, ByuCalendarTile);

            var _this10 = _possibleConstructorReturn(this, (ByuCalendarTile.__proto__ || Object.getPrototypeOf(ByuCalendarTile)).call(this));

            _this10.attachShadow({ mode: 'open' });
            return _this10;
        }

        _createClass(ByuCalendarTile, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this11 = this;

                var template = this.layout === 'horizontal' ? horizontalTemplate : verticalTemplate;
                util.applyTemplate(this, 'byu-calendar-tile', template, function () {
                    var dateOb = _this11.date;
                    var monthName = months[dateOb.getMonth()];
                    var monthAbb = monthAbbs[dateOb.getMonth()];
                    var day = dateOb.getDate();
                    var weekday = weekdays[dateOb.getDay()];
                    if (_this11.layout == 'horizontal') {
                        _this11.shadowRoot.querySelector('#month-abb').innerHTML = monthAbb;
                    } else {
                        _this11.shadowRoot.querySelector('#month-name').innerHTML = monthName;
                        _this11.shadowRoot.querySelector('#weekday').innerHTML = weekday;
                    }
                    _this11.shadowRoot.querySelector('#day-number').innerHTML = day;
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
/* 13 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html__ = __webpack_require__(32);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_calendar_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
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

            var _this12 = _possibleConstructorReturn(this, (ByuCalendar.__proto__ || Object.getPrototypeOf(ByuCalendar)).call(this));

            _this12.attachShadow({ mode: 'open' });
            return _this12;
        }

        _createClass(ByuCalendar, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this13 = this;

                //This will stamp our template for us, then let us perform actions on the stamped DOM.
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["applyTemplate"](this, 'byu-calendar', __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html___default.a, function () {
                    getCalendarData(_this13);
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
            case 6:
                return feature_columns(jsonArr);
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
            var start = new Date(item.StartDateTime.trim());
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
            var start = new Date(item.StartDateTime.trim());
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
            html += '<byu-calendar-row>';
            var start = new Date(item.StartDateTime.trim());
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
            var start = new Date(item.StartDateTime.trim());
            var diff = dateDiff(current, start);
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

    function feature_columns(jsonArr) {
        var html = '<div class="overall-feature-wrapper calendar-widget-block display-list">';
        var current = new Date();
        var eventCount = 0;
        var columnCount = 0;
        for (var i = 0; i < jsonArr.length; i++) {
            var item = jsonArr[i];
            var start = new Date(item.StartDateTime.trim());
            var diff = dateDiff(current, start);
            if (i === 0 || diff !== 0) {
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
                    html += '<hr slot="divider">';
                }
                html += '<h4 slot="title-' + eventCount + '"><a href="' + item.FullUrl + ' " target="_blank">' + item.Title + '</a></h4>';
                if (item.AllDay === 'false') {
                    html += '<div class="time" slot="time-' + eventCount + '">' + formatTime(start) + ' ' + item.Timezone + '</div>';
                } else {
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

    function list_format(jsonArr) {
        var html = '<div class="calendar-widget-block display-list">';
        var current = new Date();
        for (var i = 0; i < jsonArr.length; i++) {
            var item = jsonArr[i];
            var start = new Date(item.StartDateTime.trim());
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
/* 14 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_byu_calendar_js__ = __webpack_require__(13);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_calendar_row_byu_calendar_row_js__ = __webpack_require__(11);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_calendar_row_byu_calendar_row_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__byu_calendar_row_byu_calendar_row_js__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_calendar_tile_byu_calendar_tile_js__ = __webpack_require__(12);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_calendar_tile_byu_calendar_tile_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__byu_calendar_tile_byu_calendar_tile_js__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__byu_calendar_feature_column_byu_calendar_feature_column_js__ = __webpack_require__(9);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__byu_calendar_feature_links_byu_calendar_feature_links_js__ = __webpack_require__(10);
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
/* 15 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__utils_boot_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils_boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_boot_js__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_mixin_js__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils_async_js__ = __webpack_require__(17);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /** @const {!AsyncInterface} */
    var microtask = __WEBPACK_IMPORTED_MODULE_2__utils_async_js__["a" /* microTask */];

    /**
     * Element class mixin that provides basic meta-programming for creating one
     * or more property accessors (getter/setter pair) that enqueue an async
     * (batched) `_propertiesChanged` callback.
     *
     * For basic usage of this mixin, call `MyClass.createProperties(props)`
     * once at class definition time to create property accessors for properties
     * named in props, implement `_propertiesChanged` to react as desired to
     * property changes, and implement `static get observedAttributes()` and
     * include lowercase versions of any property names that should be set from
     * attributes. Last, call `this._enableProperties()` in the element's
     * `connectedCallback` to enable the accessors.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin for reacting to property changes from
     *   generated property accessors.
     */
    var PropertiesChanged = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_mixin_js__["a" /* dedupingMixin */])(function (superClass) {

        /**
         * @polymer
         * @mixinClass
         * @extends {superClass}
         * @implements {Polymer_PropertiesChanged}
         * @unrestricted
         */
        var PropertiesChanged = function (_superClass) {
            _inherits(PropertiesChanged, _superClass);

            _createClass(PropertiesChanged, [{
                key: '_createPropertyAccessor',
                //eslint-disable-line no-unused-vars

                /**
                 * Creates a setter/getter pair for the named property with its own
                 * local storage.  The getter returns the value in the local storage,
                 * and the setter calls `_setProperty`, which updates the local storage
                 * for the property and enqueues a `_propertiesChanged` callback.
                 *
                 * This method may be called on a prototype or an instance.  Calling
                 * this method may overwrite a property value that already exists on
                 * the prototype/instance by creating the accessor.
                 *
                 * @param {string} property Name of the property
                 * @param {boolean=} readOnly When true, no setter is created; the
                 *   protected `_setProperty` function must be used to set the property
                 * @return {void}
                 * @protected
                 */
                value: function _createPropertyAccessor(property, readOnly) {
                    this._addPropertyToAttributeMap(property);
                    if (!this.hasOwnProperty('__dataHasAccessor')) {
                        this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
                    }
                    if (!this.__dataHasAccessor[property]) {
                        this.__dataHasAccessor[property] = true;
                        this._definePropertyAccessor(property, readOnly);
                    }
                }

                /**
                 * Adds the given `property` to a map matching attribute names
                 * to property names, using `attributeNameForProperty`. This map is
                 * used when deserializing attribute values to properties.
                 *
                 * @param {string} property Name of the property
                 */

            }, {
                key: '_addPropertyToAttributeMap',
                value: function _addPropertyToAttributeMap(property) {
                    if (!this.hasOwnProperty('__dataAttributes')) {
                        this.__dataAttributes = Object.assign({}, this.__dataAttributes);
                    }
                    if (!this.__dataAttributes[property]) {
                        var attr = this.constructor.attributeNameForProperty(property);
                        this.__dataAttributes[attr] = property;
                    }
                }

                /**
                 * Defines a property accessor for the given property.
                 * @param {string} property Name of the property
                 * @param {boolean=} readOnly When true, no setter is created
                 * @return {void}
                 */

            }, {
                key: '_definePropertyAccessor',
                value: function _definePropertyAccessor(property, readOnly) {
                    Object.defineProperty(this, property, {
                        /* eslint-disable valid-jsdoc */
                        /** @this {PropertiesChanged} */
                        get: function get() {
                            return this._getProperty(property);
                        },

                        /** @this {PropertiesChanged} */
                        set: readOnly ? function () {} : function (value) {
                            this._setProperty(property, value);
                        }
                        /* eslint-enable */
                    });
                }
            }], [{
                key: 'createProperties',


                /**
                 * Creates property accessors for the given property names.
                 * @param {!Object} props Object whose keys are names of accessors.
                 * @return {void}
                 * @protected
                 */
                value: function createProperties(props) {
                    var proto = this.prototype;
                    for (var prop in props) {
                        // don't stomp an existing accessor
                        if (!(prop in proto)) {
                            proto._createPropertyAccessor(prop);
                        }
                    }
                }

                /**
                 * Returns an attribute name that corresponds to the given property.
                 * The attribute name is the lowercased property name. Override to
                 * customize this mapping.
                 * @param {string} property Property to convert
                 * @return {string} Attribute name corresponding to the given property.
                 *
                 * @protected
                 */

            }, {
                key: 'attributeNameForProperty',
                value: function attributeNameForProperty(property) {
                    return property.toLowerCase();
                }

                /**
                 * Override point to provide a type to which to deserialize a value to
                 * a given property.
                 * @param {string} name Name of property
                 *
                 * @protected
                 */

            }, {
                key: 'typeForProperty',
                value: function typeForProperty(name) {}
            }]);

            function PropertiesChanged() {
                _classCallCheck(this, PropertiesChanged);

                var _this14 = _possibleConstructorReturn(this, (PropertiesChanged.__proto__ || Object.getPrototypeOf(PropertiesChanged)).call(this));

                _this14.__dataEnabled = false;
                _this14.__dataReady = false;
                _this14.__dataInvalid = false;
                _this14.__data = {};
                _this14.__dataPending = null;
                _this14.__dataOld = null;
                _this14.__dataInstanceProps = null;
                _this14.__serializing = false;
                _this14._initializeProperties();
                return _this14;
            }

            /**
             * Lifecycle callback called when properties are enabled via
             * `_enableProperties`.
             *
             * Users may override this function to implement behavior that is
             * dependent on the element having its property data initialized, e.g.
             * from defaults (initialized from `constructor`, `_initializeProperties`),
             * `attributeChangedCallback`, or values propagated from host e.g. via
             * bindings.  `super.ready()` must be called to ensure the data system
             * becomes enabled.
             *
             * @return {void}
             * @public
             */


            _createClass(PropertiesChanged, [{
                key: 'ready',
                value: function ready() {
                    this.__dataReady = true;
                    this._flushProperties();
                }

                /**
                 * Initializes the local storage for property accessors.
                 *
                 * Provided as an override point for performing any setup work prior
                 * to initializing the property accessor system.
                 *
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_initializeProperties',
                value: function _initializeProperties() {
                    // Capture instance properties; these will be set into accessors
                    // during first flush. Don't set them here, since we want
                    // these to overwrite defaults/constructor assignments
                    for (var p in this.__dataHasAccessor) {
                        if (this.hasOwnProperty(p)) {
                            this.__dataInstanceProps = this.__dataInstanceProps || {};
                            this.__dataInstanceProps[p] = this[p];
                            delete this[p];
                        }
                    }
                }

                /**
                 * Called at ready time with bag of instance properties that overwrote
                 * accessors when the element upgraded.
                 *
                 * The default implementation sets these properties back into the
                 * setter at ready time.  This method is provided as an override
                 * point for customizing or providing more efficient initialization.
                 *
                 * @param {Object} props Bag of property values that were overwritten
                 *   when creating property accessors.
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_initializeInstanceProperties',
                value: function _initializeInstanceProperties(props) {
                    Object.assign(this, props);
                }

                /**
                 * Updates the local storage for a property (via `_setPendingProperty`)
                 * and enqueues a `_proeprtiesChanged` callback.
                 *
                 * @param {string} property Name of the property
                 * @param {*} value Value to set
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_setProperty',
                value: function _setProperty(property, value) {
                    if (this._setPendingProperty(property, value)) {
                        this._invalidateProperties();
                    }
                }

                /**
                 * Returns the value for the given property.
                 * @param {string} property Name of property
                 * @return {*} Value for the given property
                 * @protected
                 */

            }, {
                key: '_getProperty',
                value: function _getProperty(property) {
                    return this.__data[property];
                }

                /* eslint-disable no-unused-vars */
                /**
                 * Updates the local storage for a property, records the previous value,
                 * and adds it to the set of "pending changes" that will be passed to the
                 * `_propertiesChanged` callback.  This method does not enqueue the
                 * `_propertiesChanged` callback.
                 *
                 * @param {string} property Name of the property
                 * @param {*} value Value to set
                 * @param {boolean=} ext Not used here; affordance for closure
                 * @return {boolean} Returns true if the property changed
                 * @protected
                 */

            }, {
                key: '_setPendingProperty',
                value: function _setPendingProperty(property, value, ext) {
                    var old = this.__data[property];
                    var changed = this._shouldPropertyChange(property, value, old);
                    if (changed) {
                        if (!this.__dataPending) {
                            this.__dataPending = {};
                            this.__dataOld = {};
                        }
                        // Ensure old is captured from the last turn
                        if (this.__dataOld && !(property in this.__dataOld)) {
                            this.__dataOld[property] = old;
                        }
                        this.__data[property] = value;
                        this.__dataPending[property] = value;
                    }
                    return changed;
                }
                /* eslint-enable */

                /**
                 * Marks the properties as invalid, and enqueues an async
                 * `_propertiesChanged` callback.
                 *
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_invalidateProperties',
                value: function _invalidateProperties() {
                    var _this15 = this;

                    if (!this.__dataInvalid && this.__dataReady) {
                        this.__dataInvalid = true;
                        microtask.run(function () {
                            if (_this15.__dataInvalid) {
                                _this15.__dataInvalid = false;
                                _this15._flushProperties();
                            }
                        });
                    }
                }

                /**
                 * Call to enable property accessor processing. Before this method is
                 * called accessor values will be set but side effects are
                 * queued. When called, any pending side effects occur immediately.
                 * For elements, generally `connectedCallback` is a normal spot to do so.
                 * It is safe to call this method multiple times as it only turns on
                 * property accessors once.
                 *
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_enableProperties',
                value: function _enableProperties() {
                    if (!this.__dataEnabled) {
                        this.__dataEnabled = true;
                        if (this.__dataInstanceProps) {
                            this._initializeInstanceProperties(this.__dataInstanceProps);
                            this.__dataInstanceProps = null;
                        }
                        this.ready();
                    }
                }

                /**
                 * Calls the `_propertiesChanged` callback with the current set of
                 * pending changes (and old values recorded when pending changes were
                 * set), and resets the pending set of changes. Generally, this method
                 * should not be called in user code.
                 *
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_flushProperties',
                value: function _flushProperties() {
                    var props = this.__data;
                    var changedProps = this.__dataPending;
                    var old = this.__dataOld;
                    if (this._shouldPropertiesChange(props, changedProps, old)) {
                        this.__dataPending = null;
                        this.__dataOld = null;
                        this._propertiesChanged(props, changedProps, old);
                    }
                }

                /**
                 * Called in `_flushProperties` to determine if `_propertiesChanged`
                 * should be called. The default implementation returns true if
                 * properties are pending. Override to customize when
                 * `_propertiesChanged` is called.
                 * @param {!Object} currentProps Bag of all current accessor values
                 * @param {!Object} changedProps Bag of properties changed since the last
                 *   call to `_propertiesChanged`
                 * @param {!Object} oldProps Bag of previous values for each property
                 *   in `changedProps`
                 * @return {boolean} true if changedProps is truthy
                 */

            }, {
                key: '_shouldPropertiesChange',
                value: function _shouldPropertiesChange(currentProps, changedProps, oldProps) {
                    // eslint-disable-line no-unused-vars
                    return Boolean(changedProps);
                }

                /**
                 * Callback called when any properties with accessors created via
                 * `_createPropertyAccessor` have been set.
                 *
                 * @param {!Object} currentProps Bag of all current accessor values
                 * @param {!Object} changedProps Bag of properties changed since the last
                 *   call to `_propertiesChanged`
                 * @param {!Object} oldProps Bag of previous values for each property
                 *   in `changedProps`
                 * @return {void}
                 * @protected
                 */

            }, {
                key: '_propertiesChanged',
                value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars


                /**
                 * Method called to determine whether a property value should be
                 * considered as a change and cause the `_propertiesChanged` callback
                 * to be enqueued.
                 *
                 * The default implementation returns `true` if a strict equality
                 * check fails. The method always returns false for `NaN`.
                 *
                 * Override this method to e.g. provide stricter checking for
                 * Objects/Arrays when using immutable patterns.
                 *
                 * @param {string} property Property name
                 * @param {*} value New property value
                 * @param {*} old Previous property value
                 * @return {boolean} Whether the property should be considered a change
                 *   and enqueue a `_proeprtiesChanged` callback
                 * @protected
                 */

            }, {
                key: '_shouldPropertyChange',
                value: function _shouldPropertyChange(property, value, old) {
                    return (
                        // Strict equality check
                        old !== value && (
                        // This ensures (old==NaN, value==NaN) always returns false
                        old === old || value === value)
                    );
                }

                /**
                 * Implements native Custom Elements `attributeChangedCallback` to
                 * set an attribute value to a property via `_attributeToProperty`.
                 *
                 * @param {string} name Name of attribute that changed
                 * @param {?string} old Old attribute value
                 * @param {?string} value New attribute value
                 * @param {?string} namespace Attribute namespace.
                 * @return {void}
                 * @suppress {missingProperties} Super may or may not implement the callback
                 */

            }, {
                key: 'attributeChangedCallback',
                value: function attributeChangedCallback(name, old, value, namespace) {
                    if (old !== value) {
                        this._attributeToProperty(name, value);
                    }
                    if (_get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), 'attributeChangedCallback', this)) {
                        _get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), 'attributeChangedCallback', this).call(this, name, old, value, namespace);
                    }
                }

                /**
                 * Deserializes an attribute to its associated property.
                 *
                 * This method calls the `_deserializeValue` method to convert the string to
                 * a typed value.
                 *
                 * @param {string} attribute Name of attribute to deserialize.
                 * @param {?string} value of the attribute.
                 * @param {*=} type type to deserialize to, defaults to the value
                 * returned from `typeForProperty`
                 * @return {void}
                 */

            }, {
                key: '_attributeToProperty',
                value: function _attributeToProperty(attribute, value, type) {
                    if (!this.__serializing) {
                        var map = this.__dataAttributes;
                        var property = map && map[attribute] || attribute;
                        this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
                    }
                }

                /**
                 * Serializes a property to its associated attribute.
                 *
                 * @suppress {invalidCasts} Closure can't figure out `this` is an element.
                 *
                 * @param {string} property Property name to reflect.
                 * @param {string=} attribute Attribute name to reflect to.
                 * @param {*=} value Property value to refect.
                 * @return {void}
                 */

            }, {
                key: '_propertyToAttribute',
                value: function _propertyToAttribute(property, attribute, value) {
                    this.__serializing = true;
                    value = arguments.length < 3 ? this[property] : value;
                    this._valueToNodeAttribute( /** @type {!HTMLElement} */this, value, attribute || this.constructor.attributeNameForProperty(property));
                    this.__serializing = false;
                }

                /**
                 * Sets a typed value to an HTML attribute on a node.
                 *
                 * This method calls the `_serializeValue` method to convert the typed
                 * value to a string.  If the `_serializeValue` method returns `undefined`,
                 * the attribute will be removed (this is the default for boolean
                 * type `false`).
                 *
                 * @param {Element} node Element to set attribute to.
                 * @param {*} value Value to serialize.
                 * @param {string} attribute Attribute name to serialize to.
                 * @return {void}
                 */

            }, {
                key: '_valueToNodeAttribute',
                value: function _valueToNodeAttribute(node, value, attribute) {
                    var str = this._serializeValue(value);
                    if (str === undefined) {
                        node.removeAttribute(attribute);
                    } else {
                        node.setAttribute(attribute, str);
                    }
                }

                /**
                 * Converts a typed JavaScript value to a string.
                 *
                 * This method is called when setting JS property values to
                 * HTML attributes.  Users may override this method to provide
                 * serialization for custom types.
                 *
                 * @param {*} value Property value to serialize.
                 * @return {string | undefined} String serialized from the provided
                 * property  value.
                 */

            }, {
                key: '_serializeValue',
                value: function _serializeValue(value) {
                    switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
                        case 'boolean':
                            return value ? '' : undefined;
                        default:
                            return value != null ? value.toString() : undefined;
                    }
                }

                /**
                 * Converts a string to a typed JavaScript value.
                 *
                 * This method is called when reading HTML attribute values to
                 * JS properties.  Users may override this method to provide
                 * deserialization for custom `type`s. Types for `Boolean`, `String`,
                 * and `Number` convert attributes to the expected types.
                 *
                 * @param {?string} value Value to deserialize.
                 * @param {*=} type Type to deserialize the string to.
                 * @return {*} Typed value deserialized from the provided string.
                 */

            }, {
                key: '_deserializeValue',
                value: function _deserializeValue(value, type) {
                    switch (type) {
                        case Boolean:
                            return value !== null;
                        case Number:
                            return Number(value);
                        default:
                            return value;
                    }
                }
            }]);

            return PropertiesChanged;
        }(superClass);

        return PropertiesChanged;
    });
    /* harmony export (immutable) */__webpack_exports__["a"] = PropertiesChanged;

    /***/
},
/* 16 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__utils_boot_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils_boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_boot_js__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_mixin_js__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__properties_changed_js__ = __webpack_require__(15);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Creates a copy of `props` with each property normalized such that
     * upgraded it is an object with at least a type property { type: Type}.
     *
     * @param {Object} props Properties to normalize
     * @return {Object} Copy of input `props` with normalized properties that
     * are in the form {type: Type}
     * @private
     */
    function normalizeProperties(props) {
        var output = {};
        for (var p in props) {
            var o = props[p];
            output[p] = typeof o === 'function' ? { type: o } : o;
        }
        return output;
    }

    /**
     * Mixin that provides a minimal starting point to using the PropertiesChanged
     * mixin by providing a mechanism to declare properties in a static
     * getter (e.g. static get properties() { return { foo: String } }). Changes
     * are reported via the `_propertiesChanged` method.
     *
     * This mixin provides no specific support for rendering. Users are expected
     * to create a ShadowRoot and put content into it and update it in whatever
     * way makes sense. This can be done in reaction to properties changing by
     * implementing `_propertiesChanged`.
     *
     * @mixinFunction
     * @polymer
     * @appliesMixin PropertiesChanged
     * @summary Mixin that provides a minimal starting point for using
     * the PropertiesChanged mixin by providing a declarative `properties` object.
     */
    var PropertiesMixin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_mixin_js__["a" /* dedupingMixin */])(function (superClass) {

        /**
         * @constructor
         * @extends {superClass}
         * @implements {Polymer_PropertiesChanged}
         */
        var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__properties_changed_js__["a" /* PropertiesChanged */])(superClass);

        /**
         * Returns the super class constructor for the given class, if it is an
         * instance of the PropertiesMixin.
         *
         * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
         * @return {PropertiesMixinConstructor} Super class constructor
         */
        function superPropertiesClass(constructor) {
            var superCtor = Object.getPrototypeOf(constructor);

            // Note, the `PropertiesMixin` class below only refers to the class
            // generated by this call to the mixin; the instanceof test only works
            // because the mixin is deduped and guaranteed only to apply once, hence
            // all constructors in a proto chain will see the same `PropertiesMixin`
            return superCtor.prototype instanceof PropertiesMixin ?
            /** @type {PropertiesMixinConstructor} */superCtor : null;
        }

        /**
         * Returns a memoized version of the `properties` object for the
         * given class. Properties not in object format are converted to at
         * least {type}.
         *
         * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
         * @return {Object} Memoized properties object
         */
        function ownProperties(constructor) {
            if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
                var props = null;

                if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
                    props = normalizeProperties(constructor.properties);
                }

                constructor.__ownProperties = props;
            }
            return constructor.__ownProperties;
        }

        /**
         * @polymer
         * @mixinClass
         * @extends {base}
         * @implements {Polymer_PropertiesMixin}
         * @unrestricted
         */

        var PropertiesMixin = function (_base) {
            _inherits(PropertiesMixin, _base);

            function PropertiesMixin() {
                _classCallCheck(this, PropertiesMixin);

                return _possibleConstructorReturn(this, (PropertiesMixin.__proto__ || Object.getPrototypeOf(PropertiesMixin)).apply(this, arguments));
            }

            _createClass(PropertiesMixin, [{
                key: '_initializeProperties',


                /**
                 * Overrides `PropertiesChanged` method and adds a call to
                 * `finalize` which lazily configures the element's property accessors.
                 * @override
                 * @return {void}
                 */
                value: function _initializeProperties() {
                    this.constructor.finalize();
                    _get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), '_initializeProperties', this).call(this);
                }

                /**
                 * Called when the element is added to a document.
                 * Calls `_enableProperties` to turn on property system from
                 * `PropertiesChanged`.
                 * @suppress {missingProperties} Super may or may not implement the callback
                 * @return {void}
                 */

            }, {
                key: 'connectedCallback',
                value: function connectedCallback() {
                    if (_get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'connectedCallback', this)) {
                        _get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'connectedCallback', this).call(this);
                    }
                    this._enableProperties();
                }

                /**
                 * Called when the element is removed from a document
                 * @suppress {missingProperties} Super may or may not implement the callback
                 * @return {void}
                 */

            }, {
                key: 'disconnectedCallback',
                value: function disconnectedCallback() {
                    if (_get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'disconnectedCallback', this)) {
                        _get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'disconnectedCallback', this).call(this);
                    }
                }
            }], [{
                key: 'finalize',


                /**
                 * Finalizes an element definition, including ensuring any super classes
                 * are also finalized. This includes ensuring property
                 * accessors exist on the element prototype. This method calls
                 * `_finalizeClass` to finalize each constructor in the prototype chain.
                 * @return {void}
                 */
                value: function finalize() {
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
                        var superCtor = superPropertiesClass( /** @type {PropertiesMixinConstructor} */this);
                        if (superCtor) {
                            superCtor.finalize();
                        }
                        this.__finalized = true;
                        this._finalizeClass();
                    }
                }

                /**
                 * Finalize an element class. This includes ensuring property
                 * accessors exist on the element prototype. This method is called by
                 * `finalize` and finalizes the class constructor.
                 *
                 * @protected
                 */

            }, {
                key: '_finalizeClass',
                value: function _finalizeClass() {
                    var props = ownProperties( /** @type {PropertiesMixinConstructor} */this);
                    if (props) {
                        this.createProperties(props);
                    }
                }

                /**
                 * Returns a memoized version of all properties, including those inherited
                 * from super classes. Properties not in object format are converted to
                 * at least {type}.
                 *
                 * @return {Object} Object containing properties for this class
                 * @protected
                 */

            }, {
                key: 'typeForProperty',


                /**
                 * Overrides `PropertiesChanged` method to return type specified in the
                 * static `properties` object for the given property.
                 * @param {string} name Name of property
                 * @return {*} Type to which to deserialize attribute
                 *
                 * @protected
                 */
                value: function typeForProperty(name) {
                    var info = this._properties[name];
                    return info && info.type;
                }
            }, {
                key: 'observedAttributes',


                /**
                 * Implements standard custom elements getter to observes the attributes
                 * listed in `properties`.
                 * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
                 */
                get: function get() {
                    var _this17 = this;

                    var props = this._properties;
                    return props ? Object.keys(props).map(function (p) {
                        return _this17.attributeNameForProperty(p);
                    }) : [];
                }
            }, {
                key: '_properties',
                get: function get() {
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) {
                        var superCtor = superPropertiesClass( /** @type {PropertiesMixinConstructor} */this);
                        this.__properties = Object.assign({}, superCtor && superCtor._properties, ownProperties( /** @type {PropertiesMixinConstructor} */this));
                    }
                    return this.__properties;
                }
            }]);

            return PropertiesMixin;
        }(base);

        return PropertiesMixin;
    });
    /* harmony export (immutable) */__webpack_exports__["a"] = PropertiesMixin;

    /***/
},
/* 17 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export timeOut */
    /* unused harmony export animationFrame */
    /* unused harmony export idlePeriod */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
        return microTask;
    });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__boot_js__);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * @fileoverview
     *
     * This module provides a number of strategies for enqueuing asynchronous
     * tasks. Each sub-module provides a standard `run(fn)` interface that returns a
     * handle, and a `cancel(handle)` interface for canceling async tasks before
     * they run.
     *
     * @summary Module that provides a number of strategies for enqueuing
     * asynchronous tasks.
     */

    // Microtask implemented using Mutation Observer
    var microtaskCurrHandle = 0;
    var microtaskLastHandle = 0;
    var microtaskCallbacks = [];
    var microtaskNodeContent = 0;
    var microtaskNode = document.createTextNode('');
    new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

    function microtaskFlush() {
        var len = microtaskCallbacks.length;
        for (var i = 0; i < len; i++) {
            var cb = microtaskCallbacks[i];
            if (cb) {
                try {
                    cb();
                } catch (e) {
                    setTimeout(function () {
                        throw e;
                    });
                }
            }
        }
        microtaskCallbacks.splice(0, len);
        microtaskLastHandle += len;
    }

    /**
     * Async interface wrapper around `setTimeout`.
     *
     * @namespace
     * @summary Async interface wrapper around `setTimeout`.
     */
    var timeOut = {
        /**
         * Returns a sub-module with the async interface providing the provided
         * delay.
         *
         * @memberof timeOut
         * @param {number=} delay Time to wait before calling callbacks in ms
         * @return {!AsyncInterface} An async timeout interface
         */
        after: function after(delay) {
            return {
                run: function run(fn) {
                    return window.setTimeout(fn, delay);
                },
                cancel: function cancel(handle) {
                    window.clearTimeout(handle);
                }
            };
        },

        /**
         * Enqueues a function called in the next task.
         *
         * @memberof timeOut
         * @param {!Function} fn Callback to run
         * @param {number=} delay Delay in milliseconds
         * @return {number} Handle used for canceling task
         */
        run: function run(fn, delay) {
            return window.setTimeout(fn, delay);
        },

        /**
         * Cancels a previously enqueued `timeOut` callback.
         *
         * @memberof timeOut
         * @param {number} handle Handle returned from `run` of callback to cancel
         * @return {void}
         */
        cancel: function cancel(handle) {
            window.clearTimeout(handle);
        }
    };

    /**
     * Async interface wrapper around `requestAnimationFrame`.
     *
     * @namespace
     * @summary Async interface wrapper around `requestAnimationFrame`.
     */
    var animationFrame = {
        /**
         * Enqueues a function called at `requestAnimationFrame` timing.
         *
         * @memberof animationFrame
         * @param {function(number):void} fn Callback to run
         * @return {number} Handle used for canceling task
         */
        run: function run(fn) {
            return window.requestAnimationFrame(fn);
        },

        /**
         * Cancels a previously enqueued `animationFrame` callback.
         *
         * @memberof animationFrame
         * @param {number} handle Handle returned from `run` of callback to cancel
         * @return {void}
         */
        cancel: function cancel(handle) {
            window.cancelAnimationFrame(handle);
        }
    };

    /**
     * Async interface wrapper around `requestIdleCallback`.  Falls back to
     * `setTimeout` on browsers that do not support `requestIdleCallback`.
     *
     * @namespace
     * @summary Async interface wrapper around `requestIdleCallback`.
     */
    var idlePeriod = {
        /**
         * Enqueues a function called at `requestIdleCallback` timing.
         *
         * @memberof idlePeriod
         * @param {function(!IdleDeadline):void} fn Callback to run
         * @return {number} Handle used for canceling task
         */
        run: function run(fn) {
            return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
        },

        /**
         * Cancels a previously enqueued `idlePeriod` callback.
         *
         * @memberof idlePeriod
         * @param {number} handle Handle returned from `run` of callback to cancel
         * @return {void}
         */
        cancel: function cancel(handle) {
            window.cancelIdleCallback ? window.cancelIdleCallback(handle) : window.clearTimeout(handle);
        }
    };

    /**
     * Async interface for enqueuing callbacks that run at microtask timing.
     *
     * Note that microtask timing is achieved via a single `MutationObserver`,
     * and thus callbacks enqueued with this API will all run in a single
     * batch, and not interleaved with other microtasks such as promises.
     * Promises are avoided as an implementation choice for the time being
     * due to Safari bugs that cause Promises to lack microtask guarantees.
     *
     * @namespace
     * @summary Async interface for enqueuing callbacks that run at microtask
     *   timing.
     */
    var microTask = {

        /**
         * Enqueues a function called at microtask timing.
         *
         * @memberof microTask
         * @param {!Function=} callback Callback to run
         * @return {number} Handle used for canceling task
         */
        run: function run(callback) {
            microtaskNode.textContent = microtaskNodeContent++;
            microtaskCallbacks.push(callback);
            return microtaskCurrHandle++;
        },


        /**
         * Cancels a previously enqueued `microTask` callback.
         *
         * @memberof microTask
         * @param {number} handle Handle returned from `run` of callback to cancel
         * @return {void}
         */
        cancel: function cancel(handle) {
            var idx = handle - microtaskLastHandle;
            if (idx >= 0) {
                if (!microtaskCallbacks[idx]) {
                    throw new Error('invalid async handle: ' + handle);
                }
                microtaskCallbacks[idx] = null;
            }
        }
    };

    /***/
},
/* 18 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export dashToCamelCase */
    /* harmony export (immutable) */
    __webpack_exports__["a"] = camelToDashCase;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__boot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__boot_js__);
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    var caseMap = {};
    var DASH_TO_CAMEL = /-[a-z]/g;
    var CAMEL_TO_DASH = /([A-Z])/g;

    /**
     * Module with utilities for converting between "dash-case" and "camelCase"
     * identifiers.
     *
     * @summary Module that provides utilities for converting between "dash-case"
     *   and "camelCase".
     */
    'TODO(modulizer): A namespace named Polymer.CaseMap was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted';

    /**
     * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
     * (e.g. `fooBarBaz`).
     *
     * @param {string} dash Dash-case identifier
     * @return {string} Camel-case representation of the identifier
     */
    function dashToCamelCase(dash) {
        return caseMap[dash] || (caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, function (m) {
            return m[1].toUpperCase();
        }));
    }

    /**
     * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
     * (e.g. `foo-bar-baz`).
     *
     * @param {string} camel Camel-case identifier
     * @return {string} Dash-case representation of the identifier
     */
    function camelToDashCase(camel) {
        return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
    }

    /***/
},
/* 19 */
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
/* 20 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = querySelectorSlot;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(6);
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
/* 21 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = applyTemplate;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(25);
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
/* 22 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(2)();
    // imports


    // module
    exports.push([module.i, "#date,#date ::slotted(*){display:none}:host{width:19%;overflow:hidden}:host .section-first{width:100%;background:#5d7998;margin-bottom:10px;color:#fff;font-family:Ringside Narrow A,Ringside Narrow B,Arial,sans-serif}:host #weekday{padding:10px 10px 0;margin-top:0;font-weight:500;font-size:12px;margin-bottom:5px}:host #month-and-day,:host #weekday{text-align:center;text-transform:uppercase}:host #month-and-day{font-weight:700;font-size:16px;padding-bottom:10px}:host .section-second{margin-bottom:25px}:host #title-0,:host #title-1{font-family:Vitesse A,Vitesse B,Georgia,sans-serif;font-size:18px;font-weight:400;line-height:20px}:host #location-0,:host #location-1,:host #time-0,:host #time-1{font-size:14px;color:#666;font-family:Ringside Narrow A,Ringside Narrow B,Arial,sans-serif}:host .section-third{margin-top:15px}@media screen and (min-width:769px){:host{height:350px}}@media screen and (min-width:769px) and (max-width:1223px){:host{width:24%}}@media screen and (max-width:768px){:host{width:100%;margin-bottom:20px}:host .section-first{display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;align-content:center}:host #month-and-day{padding:0 29px}:host #weekday{padding:5px 30px 5px 15px}}", ""]);

    // exports


    /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(2)();
    // imports


    // module
    exports.push([module.i, ":host{width:19%;overflow:hidden}:host .academic-calendar-wrapper,:host .full-events{color:#fff;position:relative;display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;font-family:Ringside Narrow A,Ringside Narrow B,Arial,sans-serif}:host .full-link{height:67%;display:flex;flex-direction:row;justify-content:center;align-items:flex-start;background-color:#5d7998;text-decoration:none}:host .academic-calendar-text,:host .full-events-text{font-size:12px;text-align:center;font-weight:500}:host .academic-calendar-text .larger,:host .full-events-text .larger{font-size:16px;margin:-3px 0;font-weight:700}:host .events-button{font-size:14px;line-height:14px;font-weight:700;text-transform:uppercase;text-align:center;width:80px;padding:5px;border:3px solid #fff}:host .academic-link{height:33%;display:flex;flex-direction:row;justify-content:center;transform:skewY(0deg);text-decoration:none}:host .academic-link,:host .full-link:hover .events-button{background-color:#002e5d}:host .academic-link:hover .events-button{background-color:#5d7998}@media screen and (min-width:769px){:host{height:350px}:host .full-events{position:relative;top:50px}:host .full-events-text{padding-bottom:15px}:host .academic-calendar-text{padding-bottom:5px}:host .academic-link:after{position:absolute;top:0;left:0;content:\"\";background:inherit;z-index:-1;width:100%;height:60%;transform-origin:top left;transform:skewY(-13deg);border-top:5px solid #fff}}@media screen and (min-width:769px) and (max-width:1223px){:host{width:24%}}@media screen and (max-width:768px){:host{display:flex;justify-content:center;width:100%;margin-bottom:20px}:host .academic-link,:host .full-link{width:200px;margin:10px 5px;height:65px}:host .full-events{height:100%;top:0}:host .academic-calendar-text{padding-top:5px}:host .events-button{display:none}}", ""]);

    // exports


    /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(2)();
    // imports


    // module
    exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */a{color:#003da5}a,a:focus,a:hover{text-decoration:none}a:focus,a:hover{color:#002c5c}.block-calendar-widget-block div{font-family:Gotham A,Gotham B}.block-calendar-widget-block h2{color:#002e5d;border-bottom:1px solid #e5e5e5;font-size:28px;padding-bottom:6px}.block-calendar-widget-block .date-wrapper{display:flex;margin-bottom:12px}.block-calendar-widget-block .date-day-number{font-family:Sentinel A,Sentinel B;font-weight:700;font-size:26px;margin-right:7px}.block-calendar-widget-block .date-text{font-weight:500;font-size:21px;padding-top:4px}.block-calendar-widget-block .event-content{padding:0 0 15px 15px;display:flex;justify-content:space-between;line-height:1.3em;font-size:17px}.block-calendar-widget-block .event-time{min-width:60px;margin-left:12px;color:#767676;font-size:16px;display:flex;justify-content:flex-end}.calendar-widget-block.display-list{width:100%;margin-right:20px}@media screen and (max-width:1023px){.block-calendar-widget-block{width:100%}.calendar-widget-block.display-list{width:100%;margin-right:0}}.fullpage-date-wrapper{color:#002e5d;font-weight:700;font-size:32px;margin-bottom:25px;display:flex}.fullpage-date-weekday{text-transform:uppercase}.fullpage-date-text,.fullpage-date-weekday{font-family:Sentinel A,Sentinel B,Vitesse A,Vitesse B,sans-serif}.fullpage-date-text{padding-left:10px}.overall-feature-wrapper{display:flex;justify-content:space-between}@media screen and (min-width:769px) and (max-width:1223px){.column-4{display:none}}@media screen and (max-width:768px){.overall-feature-wrapper{display:flex;flex-direction:column}}", ""]);

    // exports


    /***/
},
/* 25 */
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
/* 26 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(22) + "</style> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"weekday\" class=\"content\"></div> <div id=\"month-and-day\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title-0\" class=\"content\"><slot name=\"title-0\"></slot></div> <div id=\"location-0\" class=\"content\"><slot name=\"location-0\"></slot></div> <div id=\"time-0\" class=\"content\"><slot name=\"time-0\"></slot></div> </div> <div id=\"divider\" class=\"content\"><slot name=\"divider\"></slot></div> <div class=\"section-third\"> <div id=\"title-1\" class=\"content\"><slot name=\"title-1\"></slot></div> <div id=\"location-1\" class=\"content\"><slot name=\"location-1\"></slot></div> <div id=\"time-1\" class=\"content\"><slot name=\"time-1\"></slot></div> </div>";

    /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(23) + "</style> <a href=\"https://calendar.byu.edu\" class=\"full-link\" id=\"full-events-area\"> <div class=\"full-events\"> <div class=\"full-events-text\"> FULL<div class=\"larger\">EVENTS</div>CALENDAR </div> <div class=\"events-button white bold centered-text\">View &gt;&gt;</div> </div> </a> <a href=\"https://registrar.byu.edu/academic-calendar\" class=\"academic-link\" id=\"academic-area\"> <div class=\"academic-calendar-wrapper\"> <div class=\"academic-calendar-text\"> <div class=\"larger\">ACADEMIC</div>CALENDAR </div> <div class=\"events-button white bold centered-text\">View &gt;&gt;</div> </div> </a>";

    /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(7) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"><slot id=\"image\" name=\"image\"></slot></div> <div class=\"section-second\"> <div id=\"title\"><slot class=\"content\" name=\"title\"></slot></div> <div id=\"time\"><slot class=\"content\" name=\"time\"></slot></div> <div id=\"location\"><slot class=\"content\" name=\"location\"></slot></div> <div id=\"price\"><slot class=\"content\" name=\"price\"></slot></div> <div id=\"link\"><slot class=\"content\" name=\"link\"></slot></div> </div> <div class=\"section-third\"> <div id=\"tickets-link\"><slot class=\"content\" name=\"tickets-link\"></slot></div> </div>";

    /***/
},
/* 29 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(7) + "</style> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-name\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"year\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> <div id=\"price\" class=\"content\"><slot name=\"price\"></slot></div> <div id=\"link\" class=\"content\"><slot name=\"link\"></slot></div> </div> <div class=\"section-third\"> <div id=\"tickets-link\"><slot id=\"tickets-link\" class=\"content\" name=\"tickets-link\"></slot></div> </div>";

    /***/
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(8) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-abb\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> <div id=\"description\"><slot class=\"content\" name=\"description\"></slot></div> </div>";

    /***/
},
/* 31 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(8) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-name\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"weekday\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> </div>";

    /***/
},
/* 32 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(24) + "</style> <div class=\"root block-calendar-widget-block\" id=\"calendar-root\"> Loading Calendar Items... </div>";

    /***/
},
/* 33 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__lit_html_js__ = __webpack_require__(3);
    /* unused harmony reexport render */
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */

    /**
     * Interprets a template literal as a lit-extended HTML template.
     */
    var html = function html(strings) {
        for (var _len3 = arguments.length, values = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            values[_key3 - 1] = arguments[_key3];
        }

        return new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["f" /* TemplateResult */](strings, values, 'html', extendedPartCallback);
    };
    /* unused harmony export html */

    /**
     * Interprets a template literal as a lit-extended SVG template.
     */
    var svg = function svg(strings) {
        for (var _len4 = arguments.length, values = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            values[_key4 - 1] = arguments[_key4];
        }

        return new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["g" /* SVGTemplateResult */](strings, values, 'svg', extendedPartCallback);
    };
    /* unused harmony export svg */

    /**
     * A PartCallback which allows templates to set properties and declarative
     * event handlers.
     *
     * Properties are set by default, instead of attributes. Attribute names in
     * lit-html templates preserve case, so properties are case sensitive. If an
     * expression takes up an entire attribute value, then the property is set to
     * that value. If an expression is interpolated with a string or other
     * expressions then the property is set to the string result of the
     * interpolation.
     *
     * To set an attribute instead of a property, append a `$` suffix to the
     * attribute name.
     *
     * Example:
     *
     *     html`<button class$="primary">Buy Now</button>`
     *
     * To set an event handler, prefix the attribute name with `on-`:
     *
     * Example:
     *
     *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
     *
     */
    var extendedPartCallback = function extendedPartCallback(instance, templatePart, node) {
        if (templatePart.type === 'attribute') {
            if (templatePart.rawName.substr(0, 3) === 'on-') {
                var eventName = templatePart.rawName.slice(3);
                return new EventPart(instance, node, eventName);
            }
            var lastChar = templatePart.name.substr(templatePart.name.length - 1);
            if (lastChar === '$') {
                var name = templatePart.name.slice(0, -1);
                return new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["h" /* AttributePart */](instance, node, name, templatePart.strings);
            }
            if (lastChar === '?') {
                var _name = templatePart.name.slice(0, -1);
                return new BooleanAttributePart(instance, node, _name, templatePart.strings);
            }
            return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["i" /* defaultPartCallback */])(instance, templatePart, node);
    };
    /* unused harmony export extendedPartCallback */

    /**
     * Implements a boolean attribute, roughly as defined in the HTML
     * specification.
     *
     * If the value is truthy, then the attribute is present with a value of
     * ''. If the value is falsey, the attribute is removed.
     */

    var BooleanAttributePart = function (_WEBPACK_IMPORTED_MO3) {
        _inherits(BooleanAttributePart, _WEBPACK_IMPORTED_MO3);

        function BooleanAttributePart() {
            _classCallCheck(this, BooleanAttributePart);

            return _possibleConstructorReturn(this, (BooleanAttributePart.__proto__ || Object.getPrototypeOf(BooleanAttributePart)).apply(this, arguments));
        }

        _createClass(BooleanAttributePart, [{
            key: 'setValue',
            value: function setValue(values, startIndex) {
                var s = this.strings;
                if (s.length === 2 && s[0] === '' && s[1] === '') {
                    var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["j" /* getValue */])(this, values[startIndex]);
                    if (value === __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["k" /* noChange */]) {
                        return;
                    }
                    if (value) {
                        this.element.setAttribute(this.name, '');
                    } else {
                        this.element.removeAttribute(this.name);
                    }
                } else {
                    throw new Error('boolean attributes can only contain a single expression');
                }
            }
        }]);

        return BooleanAttributePart;
    }(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["h" /* AttributePart */]);
    /* unused harmony export BooleanAttributePart */

    var PropertyPart = function (_WEBPACK_IMPORTED_MO4) {
        _inherits(PropertyPart, _WEBPACK_IMPORTED_MO4);

        function PropertyPart() {
            _classCallCheck(this, PropertyPart);

            return _possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
        }

        _createClass(PropertyPart, [{
            key: 'setValue',
            value: function setValue(values, startIndex) {
                var s = this.strings;
                var value = void 0;
                if (this._equalToPreviousValues(values, startIndex)) {
                    return;
                }
                if (s.length === 2 && s[0] === '' && s[1] === '') {
                    // An expression that occupies the whole attribute value will leave
                    // leading and trailing empty strings.
                    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["j" /* getValue */])(this, values[startIndex]);
                } else {
                    // Interpolation, so interpolate
                    value = this._interpolate(values, startIndex);
                }
                if (value !== __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["k" /* noChange */]) {
                    this.element[this.name] = value;
                }
                this._previousValues = values;
            }
        }]);

        return PropertyPart;
    }(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["h" /* AttributePart */]);
    /* unused harmony export PropertyPart */

    var EventPart = function () {
        function EventPart(instance, element, eventName) {
            _classCallCheck(this, EventPart);

            this.instance = instance;
            this.element = element;
            this.eventName = eventName;
        }

        _createClass(EventPart, [{
            key: 'setValue',
            value: function setValue(value) {
                var listener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["j" /* getValue */])(this, value);
                if (listener === this._listener) {
                    return;
                }
                if (listener == null) {
                    this.element.removeEventListener(this.eventName, this);
                } else if (this._listener == null) {
                    this.element.addEventListener(this.eventName, this);
                }
                this._listener = listener;
            }
        }, {
            key: 'handleEvent',
            value: function handleEvent(event) {
                if (typeof this._listener === 'function') {
                    this._listener.call(this.element, event);
                } else if (typeof this._listener.handleEvent === 'function') {
                    this._listener.handleEvent(event);
                }
            }
        }]);

        return EventPart;
    }();
    /* unused harmony export EventPart */

    //# sourceMappingURL=lit-extended.js.map

    /***/
},
/* 34 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = removeNodesFromTemplate;
    /* harmony export (immutable) */__webpack_exports__["b"] = insertNodeIntoTemplate;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lit_html_js__ = __webpack_require__(3);
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */

    var walkerNodeFilter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT;
    /**
     * Removes the list of nodes from a Template safely. In addition to removing
     * nodes from the Template, the Template part indices are updated to match
     * the mutated Template DOM.
     *
     * As the template is walked the removal state is tracked and
     * part indices are adjusted as needed.
     *
     * div
     *   div#1 (remove) <-- start removing (removing node is div#1)
     *     div
     *       div#2 (remove)  <-- continue removing (removing node is still div#1)
     *         div
     * div <-- stop removing since previous sibling is the removing node (div#1, removed 4 nodes)
     */
    function removeNodesFromTemplate(template, nodesToRemove) {
        var content = template.element.content,
            parts = template.parts;

        var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        var partIndex = 0;
        var part = parts[0];
        var nodeIndex = -1;
        var removeCount = 0;
        var nodesToRemoveInTemplate = [];
        var currentRemovingNode = null;
        while (walker.nextNode()) {
            nodeIndex++;
            var node = walker.currentNode;
            // End removal if stepped past the removing node
            if (node.previousSibling === currentRemovingNode) {
                currentRemovingNode = null;
            }
            // A node to remove was found in the template
            if (nodesToRemove.has(node)) {
                nodesToRemoveInTemplate.push(node);
                // Track node we're removing
                if (currentRemovingNode === null) {
                    currentRemovingNode = node;
                }
            }
            // When removing, increment count by which to adjust subsequent part indices
            if (currentRemovingNode !== null) {
                removeCount++;
            }
            while (part !== undefined && part.index === nodeIndex) {
                // If part is in a removed node deactivate it by setting index to -1 or
                // adjust the index as needed.
                part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
                part = parts[++partIndex];
            }
        }
        nodesToRemoveInTemplate.forEach(function (n) {
            return n.parentNode.removeChild(n);
        });
    }
    var countNodes = function countNodes(node) {
        var count = 1;
        var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
        while (walker.nextNode()) {
            count++;
        }
        return count;
    };
    var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
        var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

        for (var i = startIndex + 1; i < parts.length; i++) {
            var part = parts[i];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["e" /* isTemplatePartActive */])(part)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Inserts the given node into the Template, optionally before the given
     * refNode. In addition to inserting the node into the Template, the Template
     * part indices are updated to match the mutated Template DOM.
     */
    function insertNodeIntoTemplate(template, node) {
        var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var content = template.element.content,
            parts = template.parts;
        // If there's no refNode, then put node at end of template.
        // No part indices need to be shifted in this case.

        if (refNode === null || refNode === undefined) {
            content.appendChild(node);
            return;
        }
        var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        var partIndex = nextActiveIndexInTemplateParts(parts);
        var insertCount = 0;
        var walkerIndex = -1;
        while (walker.nextNode()) {
            walkerIndex++;
            var walkerNode = walker.currentNode;
            if (walkerNode === refNode) {
                refNode.parentNode.insertBefore(node, refNode);
                insertCount = countNodes(node);
            }
            while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
                // If we've inserted the node, simply adjust all subsequent parts
                if (insertCount > 0) {
                    while (partIndex !== -1) {
                        parts[partIndex].index += insertCount;
                        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                    }
                    return;
                }
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            }
        }
    }
    //# sourceMappingURL=modify-template.js.map

    /***/
},
/* 35 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = render;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lit_html_js__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__modify_template_js__ = __webpack_require__(34);
    /* unused harmony reexport html */
    /* unused harmony reexport svg */
    /* unused harmony reexport TemplateResult */
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */

    // Get a key to lookup in `templateCaches`.
    var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
        return type + '--' + scopeName;
    };
    /**
     * Template factory which scopes template DOM using ShadyCSS.
     * @param scopeName {string}
     */
    var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
        return function (result) {
            var cacheKey = getTemplateCacheKey(result.type, scopeName);
            var templateCache = __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["a" /* templateCaches */].get(cacheKey);
            if (templateCache === undefined) {
                templateCache = new Map();
                __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["a" /* templateCaches */].set(cacheKey, templateCache);
            }
            var template = templateCache.get(result.strings);
            if (template === undefined) {
                var element = result.getTemplateElement();
                if (_typeof(window.ShadyCSS) === 'object') {
                    window.ShadyCSS.prepareTemplateDom(element, scopeName);
                }
                template = new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["b" /* Template */](result, element);
                templateCache.set(result.strings, template);
            }
            return template;
        };
    };
    var TEMPLATE_TYPES = ['html', 'svg'];
    /**
     * Removes all style elements from Templates for the given scopeName.
     */
    function removeStylesFromLitTemplates(scopeName) {
        TEMPLATE_TYPES.forEach(function (type) {
            var templates = __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["a" /* templateCaches */].get(getTemplateCacheKey(type, scopeName));
            if (templates !== undefined) {
                templates.forEach(function (template) {
                    var content = template.element.content;

                    var styles = content.querySelectorAll('style');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modify_template_js__["a" /* removeNodesFromTemplate */])(template, new Set(Array.from(styles)));
                });
            }
        });
    }
    var shadyRenderSet = new Set();
    /**
     * For the given scope name, ensures that ShadyCSS style scoping is performed.
     * This is done just once per scope name so the fragment and template cannot
     * be modified.
     * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
     * to be scoped and appended to the document
     * (2) removes style elements from all lit-html Templates for this scope name.
     *
     * Note, <style> elements can only be placed into templates for the
     * initial rendering of the scope. If <style> elements are included in templates
     * dynamically rendered to the scope (after the first scope render), they will
     * not be scoped and the <style> will be left in the template and rendered output.
     */
    var ensureStylesScoped = function ensureStylesScoped(fragment, template, scopeName) {
        // only scope element template once per scope name
        if (!shadyRenderSet.has(scopeName)) {
            shadyRenderSet.add(scopeName);
            var styleTemplate = document.createElement('template');
            Array.from(fragment.querySelectorAll('style')).forEach(function (s) {
                styleTemplate.content.appendChild(s);
            });
            window.ShadyCSS.prepareTemplateStyles(styleTemplate, scopeName);
            // Fix templates: note the expectation here is that the given `fragment`
            // has been generated from the given `template` which contains
            // the set of templates rendered into this scope.
            // It is only from this set of initial templates from which styles
            // will be scoped and removed.
            removeStylesFromLitTemplates(scopeName);
            // ApplyShim case
            if (window.ShadyCSS.nativeShadow) {
                var style = styleTemplate.content.querySelector('style');
                if (style !== null) {
                    // Insert style into rendered fragment
                    fragment.insertBefore(style, fragment.firstChild);
                    // Insert into lit-template (for subsequent renders)
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modify_template_js__["b" /* insertNodeIntoTemplate */])(template, style.cloneNode(true), template.element.content.firstChild);
                }
            }
        }
    };
    // NOTE: We're copying code from lit-html's `render` method here.
    // We're doing this explicitly because the API for rendering templates is likely
    // to change in the near term.
    function render(result, container, scopeName) {
        var templateFactory = shadyTemplateFactory(scopeName);
        var template = templateFactory(result);
        var instance = container.__templateInstance;
        // Repeat render, just call update()
        if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
            instance.update(result.values);
            return;
        }
        // First render, create a new TemplateInstance and append it
        instance = new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__["c" /* TemplateInstance */](template, result.partCallback, templateFactory);
        container.__templateInstance = instance;
        var fragment = instance._clone();
        instance.update(result.values);
        var host = container instanceof ShadowRoot ? container.host : undefined;
        // If there's a shadow host, do ShadyCSS scoping...
        if (host !== undefined && _typeof(window.ShadyCSS) === 'object') {
            ensureStylesScoped(fragment, template, scopeName);
            window.ShadyCSS.styleElement(host);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__["d" /* removeNodes */])(container, container.firstChild);
        container.appendChild(fragment);
    }
    //# sourceMappingURL=shady-render.js.map

    /***/
}]
/******/);
//# sourceMappingURL=components.js.map
}());

//# sourceMappingURL=components-compat.js.map
