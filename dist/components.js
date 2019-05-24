/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/* harmony export (immutable) */ __webpack_exports__["a"] = marker;

/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
/* harmony export (immutable) */ __webpack_exports__["f"] = nodeMarker;

const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/* unused harmony export markerRegex */

/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/* harmony export (immutable) */ __webpack_exports__["g"] = boundAttributeSuffix;

/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Template;

const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
/* harmony export (immutable) */ __webpack_exports__["c"] = isTemplatePartActive;

// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/* harmony export (immutable) */ __webpack_exports__["d"] = createMarker;

/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
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
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/* harmony export (immutable) */ __webpack_exports__["e"] = lastAttributeNameRegex;

//# sourceMappingURL=template.js.map

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyTemplate", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchesSelector", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "querySelectorSlot", function() { return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__["a"]; });
/**
 * Created by ThatJoeMoore on 2/14/17
 */










/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lit_html__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lit_html_lib_shady_render_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_updating_element_js__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_decorators_js__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lit_html_lit_html_js__ = __webpack_require__(9);
/* unused harmony reexport html */
/* unused harmony reexport svg */
/* unused harmony reexport TemplateResult */
/* unused harmony reexport SVGTemplateResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_css_tag_js__ = __webpack_require__(13);
/* unused harmony namespace reexport */
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








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.0.1');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */
function arrayFlat(styles, result = []) {
    for (let i = 0, length = styles.length; i < length; i++) {
        const value = styles[i];
        if (Array.isArray(value)) {
            arrayFlat(value, result);
        }
        else {
            result.push(value);
        }
    }
    return result;
}
/** Deeply flattens styles array. Uses native flat if available. */
const flattenStyles = (styles) => styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
class LitElement extends __WEBPACK_IMPORTED_MODULE_2__lib_updating_element_js__["a" /* UpdatingElement */] {
    /** @nocollapse */
    static finalize() {
        super.finalize();
        // Prepare styling that is stamped at first render time. Styling
        // is built from user provided `styles` or is inherited from the superclass.
        this._styles =
            this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ?
                this._getUniqueStyles() :
                this._styles || [];
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Take care not to call `this.styles` multiple times since this generates
        // new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.styles;
        const styles = [];
        if (Array.isArray(userStyles)) {
            const flatStyles = flattenStyles(userStyles);
            // As a performance optimization to avoid duplicated styling that can
            // occur especially when composing via subclassing, de-duplicate styles
            // preserving the last item in the list. The last item is kept to
            // try to preserve cascade order with the assumption that it's most
            // important that last added styles override previous styles.
            const styleSet = flatStyles.reduceRight((set, s) => {
                set.add(s);
                // on IE set.add does not return the set.
                return set;
            }, new Set());
            // Array.from does not work on Set in IE
            styleSet.forEach((v) => styles.unshift(v));
        }
        else if (userStyles) {
            styles.push(userStyles);
        }
        return styles;
    }
    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    initialize() {
        super.initialize();
        this.renderRoot =
            this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow({ mode: 'open' });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (__WEBPACK_IMPORTED_MODULE_5__lib_css_tag_js__["a" /* supportsAdoptingStyleSheets */]) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        super.update(changedProperties);
        const templateResult = this.render();
        if (templateResult instanceof __WEBPACK_IMPORTED_MODULE_0_lit_html__["a" /* TemplateResult */]) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */
    render() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LitElement;

/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 */
LitElement.finalized = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */
LitElement.render = __WEBPACK_IMPORTED_MODULE_1_lit_html_lib_shady_render_js__["a" /* render */];
//# sourceMappingURL=lit-element.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/* harmony export (immutable) */ __webpack_exports__["b"] = isCEPolyfill;

/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = reparentNodes;

/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = removeNodes;

//# sourceMappingURL=dom.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_js__ = __webpack_require__(0);
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
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment poisition.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceeding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = __WEBPACK_IMPORTED_MODULE_1__template_js__["e" /* lastAttributeNameRegex */].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceeding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? __WEBPACK_IMPORTED_MODULE_1__template_js__["a" /* marker */] : __WEBPACK_IMPORTED_MODULE_1__template_js__["f" /* nodeMarker */]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + __WEBPACK_IMPORTED_MODULE_1__template_js__["g" /* boundAttributeSuffix */] + attributeMatch[3] +
                    __WEBPACK_IMPORTED_MODULE_1__template_js__["a" /* marker */];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TemplateResult;

/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_js__["c" /* reparentNodes */])(content, svgElement.firstChild);
        return template;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = SVGTemplateResult;

//# sourceMappingURL=template-result.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__part_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_instance_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_result_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__template_js__ = __webpack_require__(0);
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
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
/* unused harmony export isPrimitive */

const isIterable = (value) => {
    return Array.isArray(value) ||
        // tslint:disable-next-line:no-any
        !!(value && value[Symbol.iterator]);
};
/* unused harmony export isIterable */

/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = AttributeCommitter;

/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive_js__["a" /* isDirective */])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive_js__["a" /* isDirective */])(this.value)) {
            const directive = this.value;
            this.value = __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */];
            directive(this);
        }
        if (this.value === __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */]) {
            return;
        }
        this.committer.commit();
    }
}
/* unused harmony export AttributePart */

/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__template_js__["d" /* createMarker */])());
        this.endNode = container.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__template_js__["d" /* createMarker */])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__template_js__["d" /* createMarker */])());
        part.__insert(this.endNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__template_js__["d" /* createMarker */])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__template_js__["d" /* createMarker */])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive_js__["a" /* isDirective */])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof __WEBPACK_IMPORTED_MODULE_4__template_result_js__["a" /* TemplateResult */]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === __WEBPACK_IMPORTED_MODULE_2__part_js__["b" /* nothing */]) {
            this.value = __WEBPACK_IMPORTED_MODULE_2__part_js__["b" /* nothing */];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = value;
        }
        else {
            this.__commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof __WEBPACK_IMPORTED_MODULE_3__template_instance_js__["a" /* TemplateInstance */] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new __WEBPACK_IMPORTED_MODULE_3__template_instance_js__["a" /* TemplateInstance */](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_js__["a" /* removeNodes */])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NodePart;

/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive_js__["a" /* isDirective */])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */];
            directive(this);
        }
        if (this.__pendingValue === __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = BooleanAttributePart;

/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = PropertyCommitter;

class PropertyPart extends AttributePart {
}
/* unused harmony export PropertyPart */

// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
try {
    const options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
}
catch (_e) {
}
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive_js__["a" /* isDirective */])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */];
            directive(this);
        }
        if (this.__pendingValue === __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = __WEBPACK_IMPORTED_MODULE_2__part_js__["a" /* noChange */];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = EventPart;

// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = templateFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_js__ = __webpack_require__(0);
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
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(__WEBPACK_IMPORTED_MODULE_0__template_js__["a" /* marker */]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new __WEBPACK_IMPORTED_MODULE_0__template_js__["b" /* Template */](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
/* harmony export (immutable) */ __webpack_exports__["a"] = templateCaches;

//# sourceMappingURL=template-factory.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_js__ = __webpack_require__(0);
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
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari dooes not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = __WEBPACK_IMPORTED_MODULE_0__dom_js__["b" /* isCEPolyfill */] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__template_js__["c" /* isTemplatePartActive */])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (__WEBPACK_IMPORTED_MODULE_0__dom_js__["b" /* isCEPolyfill */]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TemplateInstance;

//# sourceMappingURL=template-instance.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_default_template_processor_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_template_result_js__ = __webpack_require__(5);
/* unused harmony reexport DefaultTemplateProcessor */
/* unused harmony reexport defaultTemplateProcessor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_directive_js__ = __webpack_require__(16);
/* unused harmony reexport directive */
/* unused harmony reexport isDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_dom_js__ = __webpack_require__(4);
/* unused harmony reexport removeNodes */
/* unused harmony reexport reparentNodes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_part_js__ = __webpack_require__(17);
/* unused harmony reexport noChange */
/* unused harmony reexport nothing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_parts_js__ = __webpack_require__(6);
/* unused harmony reexport AttributeCommitter */
/* unused harmony reexport AttributePart */
/* unused harmony reexport BooleanAttributePart */
/* unused harmony reexport EventPart */
/* unused harmony reexport isIterable */
/* unused harmony reexport isPrimitive */
/* unused harmony reexport NodePart */
/* unused harmony reexport PropertyCommitter */
/* unused harmony reexport PropertyPart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_render_js__ = __webpack_require__(18);
/* unused harmony reexport parts */
/* unused harmony reexport render */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_template_factory_js__ = __webpack_require__(7);
/* unused harmony reexport templateCaches */
/* unused harmony reexport templateFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_template_instance_js__ = __webpack_require__(8);
/* unused harmony reexport TemplateInstance */
/* unused harmony reexport SVGTemplateResult */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_template_result_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_template_js__ = __webpack_require__(0);
/* unused harmony reexport createMarker */
/* unused harmony reexport isTemplatePartActive */
/* unused harmony reexport Template */
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
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new __WEBPACK_IMPORTED_MODULE_1__lib_template_result_js__["a" /* TemplateResult */](strings, values, 'html', __WEBPACK_IMPORTED_MODULE_0__lib_default_template_processor_js__["a" /* defaultTemplateProcessor */]);
/* unused harmony export html */

/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new __WEBPACK_IMPORTED_MODULE_1__lib_template_result_js__["b" /* SVGTemplateResult */](strings, values, 'svg', __WEBPACK_IMPORTED_MODULE_0__lib_default_template_processor_js__["a" /* defaultTemplateProcessor */]);
/* unused harmony export svg */

//# sourceMappingURL=lit-html.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchesSelector;
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
    let proto = Element.prototype;
    let actual =
        proto.matches ||
        proto.matchesSelector ||
        proto.mozMatchesSelector ||
        proto.msMatchesSelector ||
        proto.oMatchesSelector ||
        proto.webkitMatchesSelector ||
        function (s) {
            let doc = this.document || this.ownerDocument;
            return doc.querySelectorAll(s).indexOf(this) !== -1;
        };

    return actual.call(el, selector);
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host{padding:10px 0;border-bottom:1px solid #e5e5e5;margin-bottom:10px}.section-first{background:#e5e5e5;color:#002e5d}.section-second{padding:15px;color:#767676}:host .content{width:100%}:host .content,:host ::slotted(*){font-family:HCo Ringside Narrow SSm}#title ::slotted(*){color:#002e5d!important;font-size:24px;font-weight:700;text-decoration:none}#price ::slotted(*),.price-label{font-weight:700!important;color:#4d8501}#time{padding:6px 0;margin:0}#time ::slotted(*){font-size:14px;padding:0;margin:0;text-transform:uppercase}#location{padding:0 0 6px}#location ::slotted(*){font-size:14px!important;padding:0;margin:0;text-transform:uppercase}#tickets-link ::slotted(*){text-align:center;background-color:#4d8501!important;padding:9px 15px!important;width:120px;font-size:12px;color:#fff!important;text-decoration:none}#tickets-link ::slotted(:before){content:\"Price: \";display:inline}.section-second{min-height:100px;padding:0 15px 15px;display:block}#title ::slotted(*){line-height:1.2}#weekday{text-transform:uppercase;font-size:14px;padding-bottom:10px}#location ::slotted(*){color:#767676;font-size:12px;font-weight:500}#date,#date ::slotted(*){display:none}#year{letter-spacing:3px}.section-third{padding-top:8px;width:auto;margin-left:auto}:host{display:flex;flex-direction:row;justify-content:flex-start;margin:10px 8px;width:100%}:host .section-first{height:120px;width:120px;display:block;background:#e5e5e5;margin-bottom:15px}:host .section-first .content{width:120px;display:flex;justify-content:center}:host .section-second ::slotted(*){justify-content:flex-start}:host #month-name{padding:10px 0;font-size:13px;text-transform:uppercase;margin-bottom:0;font-weight:500}:host #day-number{font-size:48px;margin-bottom:5px;font-weight:700}:host #title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;padding:0 0 5px}:host #time ::slotted(*){font-size:14px}:host #location ::slotted(*){color:#767676;font-weight:500;padding:4px 0}:host #link ::slotted(*){color:#002e5d;padding:4px 0;text-decoration:none}:host([image-row]) .section-first{height:auto;width:100px;background:none}:host([image-row]) .section-first ::slotted(img){height:auto;width:100px}a,div,h1,h2,h3,h4,p{font-family:HCo Ringside Narrow SSm,serif}", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host{padding:0;-moz-box-shadow:0 8px 12px rgba(0,0,0,.2);-webkit-box-shadow:0 8px 12px rgba(0,0,0,.2);box-shadow:0 8px 12px rgba(0,0,0,.2)}.section-first{background:#002e5d;color:#fff}.section-second{padding:15px}:host .content{width:100%;display:flex;justify-content:center}:host .content,:host ::slotted(*){font-family:HCo Ringside Narrow SSm}#title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-decoration:none}#location ::slotted(*){font-size:14px}#time ::slotted(*){font-size:14px;text-transform:uppercase}#description ::slotted(*),#title ::slotted(*){font-family:HCo Ringside Narrow SSm,serif;line-height:1.2}#weekday{text-transform:uppercase;font-size:14px;padding-bottom:10px}#location ::slotted(*){color:#666;text-transform:uppercase;font-size:12px;font-weight:500}#date,#date ::slotted(*){display:none}:host([layout=vertical]){max-width:170px;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:15px 8px;background-color:var(--byu-calendar-tile-background,#fff)}:host([layout=vertical]) .section-first{height:160px;width:170px;display:flex;flex-wrap:wrap;justify-content:center}:host([layout=vertical]) .section-second{height:190px;padding:15px 0;display:flex;flex-wrap:wrap;justify-content:center;align-content:space-between;align-self:flex-start}:host([layout=vertical]) .section-second ::slotted(*){justify-content:center}:host([layout=vertical]) #month-name{padding:10px;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=vertical]) #day-number{font-size:60px;margin-bottom:10px;font-weight:700}:host([layout=vertical]) #title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-align:center;padding:5px 0 10px;height:120px;width:150px}:host([layout=vertical]) #time ::slotted(*){font-size:14px;padding:8px 0!important}:host([layout=vertical]) #location ::slotted(*){color:#666;text-align:center;font-weight:500}:host([layout=horizontal]){width:430px;margin:10px 15px;display:flex;background-color:var(--byu-calendar-tile-background,#fff)}:host([layout=horizontal]) .section-first{width:130px;min-height:130px!important}:host([layout=horizontal]) .section-second{width:300px;align-items:space-between}:host([layout=horizontal]) .section-second ::slotted(*){width:290px}:host([layout=horizontal]).extra-wide .section-second ::slotted(*){width:360px}:host([layout=horizontal]) #month-abb{padding:10px 0;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=horizontal]) #day-number{font-size:48px;font-weight:700}:host([layout=horizontal]) #time{padding:10px 0}:host([layout=horizontal]) #time ::slotted(*){color:#fff;padding:5px 0 10px;display:flex;justify-content:center}:host([layout=horizontal]) #title ::slotted(*){padding:5px 0 10px;width:100%;overflow:hidden}:host([layout=horizontal]) #location ::slotted(*){padding-top:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis!important}.section-second ::slotted(*){color:#666;padding:0;margin:0;display:flex;flex-wrap:wrap;width:100%}:host ::slotted(img){display:none}a,div,h1,h2,h3,h4,p{font-family:HCo Ringside Narrow SSm,serif}", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const supportsAdoptingStyleSheets = ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
/* harmony export (immutable) */ __webpack_exports__["a"] = supportsAdoptingStyleSheets;

const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
            // is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/* unused harmony export CSSResult */

/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
/* unused harmony export unsafeCSS */

const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};
/* unused harmony export css */

//# sourceMappingURL=css-tag.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                return JSON.parse(value);
        }
        return value;
    }
};
/* unused harmony export defaultConverter */

/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
/* unused harmony export notEqual */

const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const microtaskPromise = Promise.resolve(true);
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
const STATE_HAS_CONNECTED = 1 << 5;
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this._updateState = 0;
        this._instanceProperties = undefined;
        this._updatePromise = microtaskPromise;
        this._hasConnectedResolver = undefined;
        /**
         * Map with keys for any properties that have changed since the last
         * update cycle with previous values.
         */
        this._changedProperties = new Map();
        /**
         * Map with keys of properties that should be reflected when updated.
         */
        this._reflectingProperties = undefined;
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        Object.defineProperty(this.prototype, name, {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                // tslint:disable-next-line:no-any no symbol in index
                const oldValue = this[name];
                // tslint:disable-next-line:no-any no symbol in index
                this[key] = value;
                this._requestUpdate(name, oldValue);
            },
            configurable: true,
            enumerable: true
        });
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) &&
            this.finalized) {
            return;
        }
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (typeof superCtor.finalize === 'function') {
            superCtor.finalize();
        }
        this.finalized = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of `updateComplete`
        this._requestUpdate();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        this._updateState = this._updateState | STATE_HAS_CONNECTED;
        // Ensure first connection completes an update. Updates cannot complete before
        // connection and if one is pending connection the `_hasConnectionResolver`
        // will exist. If so, resolve it to complete the update, otherwise
        // requestUpdate.
        if (this._hasConnectedResolver) {
            this._hasConnectedResolver();
            this._hasConnectedResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor._classProperties.get(propName) || defaultPropertyDeclaration;
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    _requestUpdate(name, oldValue) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            const options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this._requestUpdate(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        // Mark state updating...
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        let resolve;
        let reject;
        const previousUpdatePromise = this._updatePromise;
        this._updatePromise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await previousUpdatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        // Make sure the element has connected before updating.
        if (!this._hasConnected) {
            await new Promise((res) => this._hasConnectedResolver = res);
        }
        try {
            const result = this.performUpdate();
            // If `performUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (result != null) {
                await result;
            }
        }
        catch (e) {
            reject(e);
        }
        resolve(!this._hasRequestedUpdate);
    }
    get _hasConnected() {
        return (this._updateState & STATE_HAS_CONNECTED);
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            throw e;
        }
        finally {
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update. This getter can be implemented to
     * await additional state. For example, it is sometimes useful to await a
     * rendered element before fulfilling this Promise. To do this, first await
     * `super.updateComplete` then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UpdatingElement;

/**
 * Marks class as having finished creating properties.
 */
UpdatingElement.finalized = true;
//# sourceMappingURL=updating-element.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_js__ = __webpack_require__(6);
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
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new __WEBPACK_IMPORTED_MODULE_0__parts_js__["b" /* PropertyCommitter */](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new __WEBPACK_IMPORTED_MODULE_0__parts_js__["c" /* EventPart */](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new __WEBPACK_IMPORTED_MODULE_0__parts_js__["d" /* BooleanAttributePart */](element, name.slice(1), strings)];
        }
        const committer = new __WEBPACK_IMPORTED_MODULE_0__parts_js__["e" /* AttributeCommitter */](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new __WEBPACK_IMPORTED_MODULE_0__parts_js__["a" /* NodePart */](options);
    }
}
/* unused harmony export DefaultTemplateProcessor */

const defaultTemplateProcessor = new DefaultTemplateProcessor();
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultTemplateProcessor;

//# sourceMappingURL=default-template-processor.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
/* unused harmony export directive */

const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = isDirective;

//# sourceMappingURL=directive.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/* harmony export (immutable) */ __webpack_exports__["a"] = noChange;

/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
/* harmony export (immutable) */ __webpack_exports__["b"] = nothing;

//# sourceMappingURL=part.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parts_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_factory_js__ = __webpack_require__(7);
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
 * @module lit-html
 */



const parts = new WeakMap();
/* harmony export (immutable) */ __webpack_exports__["a"] = parts;

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
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_js__["a" /* removeNodes */])(container, container.firstChild);
        parts.set(container, part = new __WEBPACK_IMPORTED_MODULE_1__parts_js__["a" /* NodePart */](Object.assign({ templateFactory: __WEBPACK_IMPORTED_MODULE_2__template_factory_js__["b" /* templateFactory */] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
/* harmony export (immutable) */ __webpack_exports__["b"] = render;

//# sourceMappingURL=render.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lit_element__ = __webpack_require__(3);


const util = __webpack_require__(1);
const featureTemplate = __webpack_require__(34);

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class ByuCalendarFeatureColumn extends __WEBPACK_IMPORTED_MODULE_0_lit_element__["a" /* LitElement */] {

  _createRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  _render({}) {

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

  connectedCallback() {
    super.connectedCallback();
    util.applyTemplate(this, 'byu-calendar-feature-column', featureTemplate, () => {
      var dateOb = this.date;
      var day = dateOb.getDate();
      var weekday = weekdays[dateOb.getDay()];
      var monthName = months[dateOb.getMonth()];

      this.shadowRoot.querySelector('#weekday').innerHTML = weekday;
      this.shadowRoot.querySelector('#month-and-day').innerHTML = monthName + ' ' + day;
    });
  }
}

window.customElements.define('byu-calendar-feature-column', ByuCalendarFeatureColumn);
window.ByuCalendarFeatureColumn = ByuCalendarFeatureColumn;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lit_element__ = __webpack_require__(3);


const util = __webpack_require__(1);
const linksTemplate = __webpack_require__(35);

class ByuCalendarFeatureLinks extends __WEBPACK_IMPORTED_MODULE_0_lit_element__["a" /* LitElement */] {
  _createRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  _render({}) {

  }

  connectedCallback() {
    super.connectedCallback();
    util.applyTemplate(this, 'byu-calendar-feature-links', linksTemplate);
  }
}

window.customElements.define('byu-calendar-feature-links', ByuCalendarFeatureLinks);
window.ByuCalendarFeatureLinks = ByuCalendarFeatureLinks;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lit_element__ = __webpack_require__(3);


const util = __webpack_require__(1);
const minimalTemplate = __webpack_require__(36);

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class ByuCalendarMinimalTile extends __WEBPACK_IMPORTED_MODULE_0_lit_element__["a" /* LitElement */] {

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

  }

  connectedCallback() {
    super.connectedCallback();
    util.applyTemplate(this, 'byu-calendar-minimal-tile', minimalTemplate, () => {
      let dateOb = this.date;
      let day = dateOb.getDate();
      let monthName = months[dateOb.getMonth()];
      this.shadowRoot.querySelector('#month-and-day').innerHTML = monthName + ' ' + day;
    });
  };
}

window.customElements.define('byu-calendar-minimal-tile', ByuCalendarMinimalTile);
window.ByuCalendarMinimalTile = ByuCalendarMinimalTile;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lit_element__ = __webpack_require__(3);


const util = __webpack_require__(1);
const tileTemplate = __webpack_require__(38);
const imageTemplate = __webpack_require__(37);

const ATTR_IMAGE_ROW = 'image-row';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class ByuCalendarRow extends __WEBPACK_IMPORTED_MODULE_0_lit_element__["a" /* LitElement */] {

    _createRoot() {
        return this.attachShadow({ mode: 'open' });
    }

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

    _render({}) {

    }
    
    connectedCallback(){
        super.connectedCallback();
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

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lit_element__ = __webpack_require__(3);


const util = __webpack_require__(1);
const verticalTemplate = __webpack_require__(40);
const horizontalTemplate = __webpack_require__(39);

var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

class ByuCalendarTile extends __WEBPACK_IMPORTED_MODULE_0_lit_element__["a" /* LitElement */] {

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

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_calendar_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lit_element__ = __webpack_require__(3);
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

class ByuCalendar extends __WEBPACK_IMPORTED_MODULE_2_lit_element__["a" /* LitElement */] {

  render() {
    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["applyTemplate"](this, 'byu-calendar', __WEBPACK_IMPORTED_MODULE_0__byu_calendar_html___default.a, () => {
      getCalendarData(this);
    });
  }

  // _createRoot() {
  //   // return this.attachShadow({ mode: 'open' });
  // }
  //
  // connectedCallback() {
  //   // super.connectedCallback();
  //   //This will stamp our template for us, then let us perform actions on the stamped DOM.
  //   // util.applyTemplate(this, 'byu-calendar', template, () => {
  //   //   getCalendarData(this);
  //   // });
  // }
  //
  // disconnectedCallback() {
  //
  // }
  //
  // static get observedAttributes() {
  //   return [ATTR_TITLE, ATTR_CATEGORIES, ATTR_DAYS, ATTR_PRICE, ATTR_DISPLAY, ATTR_LIMIT];
  // }
  //
  // attributeChangedCallback(attr, oldValue, newValue) {
  //   // This just makes unnecessary calls after connectedCallback inits the calendar data
  //   switch (attr) {
  //     case ATTR_TITLE:
  //     case ATTR_CATEGORIES:
  //     case ATTR_DAYS:
  //     case ATTR_PRICE:
  //     case ATTR_DISPLAY:
  //     case ATTR_LIMIT:
  //       //getCalendarData(this);
  //       break;
  //   }
  // }

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
  let template = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["querySelectorSlot"](slot, 'template');

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
    html += '<p slot="date">' + item.StartDateTime + '</p>';
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

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_calendar_byu_calendar_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__byu_calendar_row_byu_calendar_row_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__byu_calendar_tile_byu_calendar_tile_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__byu_calendar_feature_column_byu_calendar_feature_column_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__byu_calendar_feature_links_byu_calendar_feature_links_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__byu_calendar_minimal_tile_byu_calendar_minimal_tile_js__ = __webpack_require__(21);
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









/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createEvent;
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
        return new CustomEvent(name, {detail, cancelable: true, bubbles: true})
    }
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, detail);
    return evt;
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = querySelectorSlot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(10);
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
    let roots = slot.assignedNodes({flatten: true})
        .filter(n => n.nodeType === Node.ELEMENT_NODE);

    for (let i = 0, len = roots.length; i < len; i++) {
        let each = roots[i];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
            return each;
        }
        let child = each.querySelector(selector);
        if (child) {
            return child;
        }
    }
    return null;
}



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyTemplate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
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




const TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

function applyTemplate(element, elementName, template, callback) {
    let sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

    let elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
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
    let templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
    let templateElement = document.head.querySelector('template#' + templateId);
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
    let imported = document.importNode(templateElement.content, true);
    let shadow = element.shadowRoot;
    //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
    // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
    while (shadow.firstChild) {
        shadow.removeChild(shadow.firstChild);
    }
    shadow.appendChild(imported);
    setTimeout(function() {
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



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "#date,#date ::slotted(*){display:none}:host{width:19%;overflow:hidden}:host .section-first{width:100%;background:#32538d;margin-bottom:10px;color:#fff;font-family:HCo Ringside Narrow SSm,Arial,Helvetica,sans-serif}:host #weekday{padding:10px 10px 0;margin-top:0;font-weight:500;font-size:15px;line-height:17px!important;letter-spacing:2px;margin-bottom:5px}:host #month-and-day,:host #weekday{text-align:center;text-transform:uppercase}:host #month-and-day{font-weight:700;font-size:16px;line-height:18px;letter-spacing:1px;padding-bottom:10px}:host .section-second{margin-bottom:25px}:host ::slotted(h4){font-size:18px;font-weight:400;line-height:20px;margin-top:0;margin-bottom:14px}:host ::slotted(div),:host ::slotted(h4){font-family:HCo Ringside Narrow SSm,Arial,Helvetica,sans-serif}:host ::slotted(div){font-size:15px;color:#666}:host .section-third{margin-top:15px}@media screen and (min-width:769px){:host{height:350px}}@media screen and (min-width:769px) and (max-width:1223px){:host{width:24%}}@media screen and (max-width:768px){:host{width:100%;margin-bottom:20px}:host .section-first{display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;align-content:center}:host #month-and-day{padding:0 29px}:host #weekday{padding:5px 30px 5px 15px}}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host{width:19%;overflow:hidden}:host .academic-calendar-wrapper,:host .full-events{color:#fff;position:relative;display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;font-family:HCo Ringside Narrow SSm,Arial,Helvetica,sans-serif}:host .full-link{height:67%;display:flex;flex-direction:row;justify-content:center;align-items:flex-start;background-color:#32538d;text-decoration:none}:host .academic-calendar-text,:host .full-events-text{font-size:15px;letter-spacing:2px;line-height:22px;text-align:center;font-weight:500}:host .academic-calendar-text .larger,:host .full-events-text .larger{font-size:16px;margin:-3px 0;font-weight:700}:host .events-button{font-size:15px;line-height:15px;font-weight:700;text-transform:uppercase;text-align:center;width:80px;padding:5px;border:3px solid #fff}:host .academic-link{height:33%;display:flex;flex-direction:row;justify-content:center;transform:skewY(0deg);text-decoration:none}:host .academic-link,:host .full-link:hover .events-button{background-color:#002e5d}:host .academic-link:hover .events-button{background-color:#32538d}@media screen and (min-width:769px){:host{height:350px}:host .full-events{position:relative;top:50px}:host .full-events-text{padding-bottom:15px}:host .academic-calendar-text{padding-bottom:5px}:host .academic-link:after{position:absolute;top:0;left:0;content:\"\";background:inherit;z-index:-1;width:100%;height:60%;transform-origin:top left;transform:skewY(-13deg);border-top:5px solid #fff}}@media screen and (min-width:769px) and (max-width:1223px){:host{width:24%}}@media screen and (max-width:768px){:host{display:flex;justify-content:center;width:100%;margin-bottom:20px}:host .academic-link,:host .full-link{width:200px;margin:10px 5px;height:65px}:host .full-events{height:100%;top:0}:host .academic-calendar-text{padding-top:5px}:host .events-button{display:none}}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host{margin-bottom:15px;display:flex;flex-direction:row}:host .section-first{background-color:#0057b8;color:#fff;height:120px;width:200px;margin-right:10px;text-align:center}:host .section-second{background-color:#c5c5c5;width:100%;padding:10px}:host #month-and-day{font-size:36px;padding:10px}:host #month-and-day,:host #time{font-family:HCo Ringside Narrow SSm,Arial,sans-serif}:host #time{font-size:20px}:host #title{font-size:24px;margin-bottom:10px}:host #location{font-size:12px;text-transform:uppercase;font-weight:700;color:#666}#date,#date ::slotted(*){display:none}", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */a[slot=title]{color:#002e5d;font-weight:500}a[slot=title]:hover{color:#0057b8}a{color:#002e5d}a,a:focus,a:hover{text-decoration:none}a:focus,a:hover{color:#003da5}.block-calendar-widget-block div,.calendar-block-title{font-family:HCo Ringside Narrow SSm}.block-calendar-widget-block h2{color:#002e5d;border-bottom:1px solid #e5e5e5;font-size:28px;padding-bottom:6px}.block-calendar-widget-block .date-wrapper{display:flex;margin-bottom:12px}.block-calendar-widget-block .date-day-number{font-family:HCo Ringside Narrow SSm;font-weight:700;font-size:23px;padding-top:4px;margin-right:7px}.block-calendar-widget-block .date-text{font-weight:500;font-size:21px;padding-top:4px}.block-calendar-widget-block .event-content{padding:0 0 15px 15px;display:flex;justify-content:space-between;line-height:1.3em;font-size:17px}.block-calendar-widget-block .event-time{min-width:60px;margin-left:12px;color:#666;font-size:16px;display:flex;justify-content:flex-end}.calendar-widget-block.display-list{width:100%;margin-right:20px}@media screen and (max-width:1023px){.block-calendar-widget-block{width:100%}.calendar-widget-block.display-list{width:100%;margin-right:0}}.fullpage-date-wrapper{color:#002e5d;font-weight:700;font-size:32px;margin-bottom:25px;display:flex}.fullpage-date-weekday{text-transform:uppercase}.fullpage-date-text,.fullpage-date-weekday{font-family:HCo Ringside Narrow SSm,Arial,Helvetica,sans-serif}.fullpage-date-text{padding-left:10px}.overall-feature-wrapper{display:flex;justify-content:space-between}@media screen and (min-width:769px) and (max-width:1223px){.column-4{display:none}}@media screen and (max-width:768px){.overall-feature-wrapper{display:flex;flex-direction:column}}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function pad (hash, len) {
  while (hash.length < len) {
    hash = '0' + hash;
  }
  return hash;
}

function fold (hash, text) {
  var i;
  var chr;
  var len;
  if (text.length === 0) {
    return hash;
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
}

function foldObject (hash, o, seen) {
  return Object.keys(o).sort().reduce(foldKey, hash);
  function foldKey (hash, key) {
    return foldValue(hash, o[key], key, seen);
  }
}

function foldValue (input, value, key, seen) {
  var hash = fold(fold(fold(input, key), toString(value)), typeof value);
  if (value === null) {
    return fold(hash, 'null');
  }
  if (value === undefined) {
    return fold(hash, 'undefined');
  }
  if (typeof value === 'object') {
    if (seen.indexOf(value) !== -1) {
      return fold(hash, '[Circular]' + key);
    }
    seen.push(value);
    return foldObject(hash, value, seen);
  }
  return fold(hash, value.toString());
}

function toString (o) {
  return Object.prototype.toString.call(o);
}

function sum (o) {
  return pad(foldValue(0, o, '', []).toString(16), 8);
}

module.exports = sum;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (29) + "</style> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"weekday\" class=\"content\"></div> <div id=\"month-and-day\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title-0\" class=\"content\"><slot name=\"title-0\"></slot></div> <div id=\"location-0\" class=\"content\"><slot name=\"location-0\"></slot></div> <div id=\"time-0\" class=\"content\"><slot name=\"time-0\"></slot></div> </div> <div id=\"divider\" class=\"content\"><slot name=\"divider\"></slot></div> <div class=\"section-third\"> <div id=\"title-1\" class=\"content\"><slot name=\"title-1\"></slot></div> <div id=\"location-1\" class=\"content\"><slot name=\"location-1\"></slot></div> <div id=\"time-1\" class=\"content\"><slot name=\"time-1\"></slot></div> </div>";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(30) + "</style> <a href=\"https://calendar.byu.edu\" class=\"full-link\" id=\"full-events-area\"> <div class=\"full-events\"> <div class=\"full-events-text\"> FULL<div class=\"larger\">EVENTS</div>CALENDAR </div> <div class=\"events-button white bold centered-text\">View &gt;&gt;</div> </div> </a> <a href=\"https://registrar.byu.edu/academic-calendar\" class=\"academic-link\" id=\"academic-area\"> <div class=\"academic-calendar-wrapper\"> <div class=\"academic-calendar-text\"> <div class=\"larger\">ACADEMIC</div>CALENDAR </div> <div class=\"events-button white bold centered-text\">View &gt;&gt;</div> </div> </a>";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(31) + "</style> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-and-day\" class=\"content\"></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> </div>";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (11) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"><slot id=\"image\" name=\"image\"></slot></div> <div class=\"section-second\"> <div id=\"title\"><slot class=\"content\" name=\"title\"></slot></div> <div id=\"time\"><slot class=\"content\" name=\"time\"></slot></div> <div id=\"location\"><slot class=\"content\" name=\"location\"></slot></div> <div id=\"price\"><slot class=\"content\" name=\"price\"></slot></div> <div id=\"link\"><slot class=\"content\" name=\"link\"></slot></div> </div> <div class=\"section-third\"> <div id=\"tickets-link\"><slot class=\"content\" name=\"tickets-link\"></slot></div> </div>";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (11) + "</style> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-name\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"year\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> <div id=\"price\" class=\"content\"><slot name=\"price\"></slot></div> <div id=\"link\" class=\"content\"><slot name=\"link\"></slot></div> </div> <div class=\"section-third\"> <div id=\"tickets-link\"><slot id=\"tickets-link\" class=\"content\" name=\"tickets-link\"></slot></div> </div>";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (12) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-abb\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> <div id=\"description\"><slot class=\"content\" name=\"description\"></slot></div> </div>";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (12) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <div id=\"date\"><slot id=\"date-val\" name=\"date\"></slot></div> <div id=\"month-name\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"weekday\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"><slot name=\"title\"></slot></div> <div id=\"time\" class=\"content\"><slot name=\"time\"></slot></div> <div id=\"location\" class=\"content\"><slot name=\"location\"></slot></div> </div>";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(32) + "</style> <div class=\"root block-calendar-widget-block\" id=\"calendar-root\"> Loading Calendar Items... </div>";

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export property */
/* unused harmony export query */
/* unused harmony export queryAll */
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
const legacyCustomElement = (tagName, clazz) => {
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * @param tagName the name of the custom element to define
 */
const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
    legacyCustomElement(tagName, classOrDescriptor) :
    standardCustomElement(tagName, classOrDescriptor);
/* unused harmony export customElement */

const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign({}, element, { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            // tslint:disable-next-line:no-any decorator
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A `PropertyDeclaration` may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */
function query(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */
function queryAll(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelectorAll(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
const standardEventOptions = (options, element) => {
    return Object.assign({}, element, { finisher(clazz) {
            Object.assign(clazz.prototype[element.key], options);
        } });
};
const legacyEventOptions = 
// tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
    Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifis event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 *
 *     class MyElement {
 *
 *       clicked = false;
 *
 *       render() {
 *         return html`<div @click=${this._onClick}`><button></button></div>`;
 *       }
 *
 *       @eventOptions({capture: true})
 *       _onClick(e) {
 *         this.clicked = true;
 *       }
 *     }
 */
const eventOptions = (options) => 
// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
((protoOrDescriptor, name) => (name !== undefined) ?
    legacyEventOptions(options, protoOrDescriptor, name) :
    standardEventOptions(options, protoOrDescriptor));
/* unused harmony export eventOptions */

//# sourceMappingURL=decorators.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeNodesFromTemplate;
/* harmony export (immutable) */ __webpack_exports__["b"] = insertNodeIntoTemplate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_js__ = __webpack_require__(0);
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
 * @module shady-render
 */

const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
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
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
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
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__template_js__["c" /* isTemplatePartActive */])(part)) {
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
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
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

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modify_template_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_factory_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_instance_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__template_result_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__template_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lit_html_js__ = __webpack_require__(9);
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
/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */








// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = __WEBPACK_IMPORTED_MODULE_3__template_factory_js__["a" /* templateCaches */].get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        __WEBPACK_IMPORTED_MODULE_3__template_factory_js__["a" /* templateCaches */].set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(__WEBPACK_IMPORTED_MODULE_6__template_js__["a" /* marker */]);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new __WEBPACK_IMPORTED_MODULE_6__template_js__["b" /* Template */](result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = __WEBPACK_IMPORTED_MODULE_3__template_factory_js__["a" /* templateCaches */].get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modify_template_js__["a" /* removeNodesFromTemplate */])(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
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
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (renderedDOM, template, scopeName) => {
    shadyRenderSet.add(scopeName);
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = template.element.content;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modify_template_js__["b" /* insertNodeIntoTemplate */])(template, condensedStyle, content.firstChild);
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modify_template_js__["a" /* removeNodesFromTemplate */])(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render = (result, container, options) => {
    const scopeName = options.scopeName;
    const hasRendered = __WEBPACK_IMPORTED_MODULE_2__render_js__["a" /* parts */].has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host && result instanceof __WEBPACK_IMPORTED_MODULE_5__template_result_js__["a" /* TemplateResult */];
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__render_js__["b" /* render */])(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = __WEBPACK_IMPORTED_MODULE_2__render_js__["a" /* parts */].get(renderContainer);
        __WEBPACK_IMPORTED_MODULE_2__render_js__["a" /* parts */].delete(renderContainer);
        if (part.value instanceof __WEBPACK_IMPORTED_MODULE_4__template_instance_js__["a" /* TemplateInstance */]) {
            prepareTemplateStyles(renderContainer, part.value.template, scopeName);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_js__["a" /* removeNodes */])(container, container.firstChild);
        container.appendChild(renderContainer);
        __WEBPACK_IMPORTED_MODULE_2__render_js__["a" /* parts */].set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = render;

//# sourceMappingURL=shady-render.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map