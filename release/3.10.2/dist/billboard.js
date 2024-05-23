/*!
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 *
 * billboard.js, JavaScript chart library
 * https://naver.github.io/billboard.js/
 *
 * @version 3.10.2
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3-axis"), require("d3-brush"), require("d3-drag"), require("d3-dsv"), require("d3-ease"), require("d3-hierarchy"), require("d3-interpolate"), require("d3-scale"), require("d3-selection"), require("d3-shape"), require("d3-time-format"), require("d3-transition"), require("d3-zoom"));
	else if(typeof define === 'function' && define.amd)
		define(["d3-axis", "d3-brush", "d3-drag", "d3-dsv", "d3-ease", "d3-hierarchy", "d3-interpolate", "d3-scale", "d3-selection", "d3-shape", "d3-time-format", "d3-transition", "d3-zoom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("d3-axis"), require("d3-brush"), require("d3-drag"), require("d3-dsv"), require("d3-ease"), require("d3-hierarchy"), require("d3-interpolate"), require("d3-scale"), require("d3-selection"), require("d3-shape"), require("d3-time-format"), require("d3-transition"), require("d3-zoom")) : factory(root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__14__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
// extracted by mini-css-extract-plugin

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bb: function() { return /* reexport */ bb; },
  "default": function() { return /* reexport */ bb; }
});

// NAMESPACE OBJECT: ./src/config/resolver/shape.ts
var resolver_shape_namespaceObject = {};
__webpack_require__.r(resolver_shape_namespaceObject);
__webpack_require__.d(resolver_shape_namespaceObject, {
  area: function() { return _area; },
  areaLineRange: function() { return areaLineRange; },
  areaSpline: function() { return areaSpline; },
  areaSplineRange: function() { return areaSplineRange; },
  areaStep: function() { return areaStep; },
  bar: function() { return resolver_shape_bar; },
  bubble: function() { return resolver_shape_bubble; },
  candlestick: function() { return resolver_shape_candlestick; },
  donut: function() { return shape_donut; },
  gauge: function() { return resolver_shape_gauge; },
  line: function() { return resolver_shape_line; },
  pie: function() { return shape_pie; },
  polar: function() { return resolver_shape_polar; },
  radar: function() { return resolver_shape_radar; },
  scatter: function() { return shape_scatter; },
  spline: function() { return shape_spline; },
  step: function() { return step; },
  treemap: function() { return resolver_shape_treemap; }
});

// NAMESPACE OBJECT: ./src/config/resolver/interaction.ts
var resolver_interaction_namespaceObject = {};
__webpack_require__.r(resolver_interaction_namespaceObject);
__webpack_require__.d(resolver_interaction_namespaceObject, {
  selection: function() { return _selectionModule; },
  subchart: function() { return subchartModule; },
  zoom: function() { return zoomModule; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/newArrowCheck.js
function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}
// EXTERNAL MODULE: external {"commonjs":"d3-time-format","commonjs2":"d3-time-format","amd":"d3-time-format","root":"d3"}
var external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_ = __webpack_require__(4);
// EXTERNAL MODULE: external {"commonjs":"d3-selection","commonjs2":"d3-selection","amd":"d3-selection","root":"d3"}
var external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_ = __webpack_require__(2);
;// CONCATENATED MODULE: ./src/module/browser.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * Window object
 * @private
 */
/* eslint-disable no-new-func, no-undef */


/**
 * Get global object
 * @returns {object} window object
 * @private
 */
function getGlobal() {
  return typeof globalThis === "object" && globalThis !== null && globalThis.Object === Object && globalThis || typeof global === "object" && global !== null && global.Object === Object && global || typeof self === "object" && self !== null && self.Object === Object && self || Function("return this")();
}

/**
 * Get fallback object
 * @param {object} w global object
 * @returns {Array} fallback object array
 * @private
 */
function getFallback(w) {
  var _this = this;
  const hasRAF = typeof (w == null ? void 0 : w.requestAnimationFrame) === "function" && typeof (w == null ? void 0 : w.cancelAnimationFrame) === "function",
    hasRIC = typeof (w == null ? void 0 : w.requestIdleCallback) === "function" && typeof (w == null ? void 0 : w.cancelIdleCallback) === "function",
    request = function (cb) {
      _newArrowCheck(this, _this);
      return setTimeout(cb, 1);
    }.bind(this),
    cancel = function (id) {
      _newArrowCheck(this, _this);
      return clearTimeout(id);
    }.bind(this);
  return [hasRAF ? w.requestAnimationFrame : request, hasRAF ? w.cancelAnimationFrame : cancel, hasRIC ? w.requestIdleCallback : request, hasRIC ? w.cancelIdleCallback : cancel];
}
const win = getGlobal(),
  browser_doc = win == null ? void 0 : win.document,
  _getFallback = getFallback(win),
  requestAnimationFrame = _getFallback[0],
  cancelAnimationFrame = _getFallback[1],
  requestIdleCallback = _getFallback[2],
  cancelIdleCallback = _getFallback[3];
;// CONCATENATED MODULE: ./src/config/const.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * Chart type constant
 * @private
 */
const TYPE = {
  AREA: "area",
  AREA_LINE_RANGE: "area-line-range",
  AREA_SPLINE: "area-spline",
  AREA_SPLINE_RANGE: "area-spline-range",
  AREA_STEP: "area-step",
  BAR: "bar",
  BUBBLE: "bubble",
  CANDLESTICK: "candlestick",
  DONUT: "donut",
  GAUGE: "gauge",
  LINE: "line",
  PIE: "pie",
  POLAR: "polar",
  RADAR: "radar",
  SCATTER: "scatter",
  SPLINE: "spline",
  STEP: "step",
  TREEMAP: "treemap"
};

/**
 * Chart type module and its method from ChartInternal class, needed to be initialized.
 * @private
 */
const TYPE_METHOD_NEEDED = {
  AREA: "initArea",
  AREA_LINE_RANGE: "initArea",
  AREA_SPLINE: "initArea",
  AREA_SPLINE_RANGE: "initArea",
  AREA_STEP: "initArea",
  BAR: "initBar",
  BUBBLE: "initCircle",
  CANDLESTICK: "initCandlestick",
  DONUT: "initArc",
  GAUGE: "initArc",
  LINE: "initLine",
  PIE: "initArc",
  POLAR: "initPolar",
  RADAR: "initCircle",
  SCATTER: "initCircle",
  SPLINE: "initLine",
  STEP: "initLine",
  TREEMAP: "initTreemap"
};

/**
 * chart types by category
 * @private
 */
const TYPE_BY_CATEGORY = {
  Area: [TYPE.AREA, TYPE.AREA_SPLINE, TYPE.AREA_SPLINE_RANGE, TYPE.AREA_LINE_RANGE, TYPE.AREA_STEP],
  AreaRange: [TYPE.AREA_SPLINE_RANGE, TYPE.AREA_LINE_RANGE],
  Arc: [TYPE.PIE, TYPE.DONUT, TYPE.GAUGE, TYPE.POLAR, TYPE.RADAR],
  Line: [TYPE.LINE, TYPE.SPLINE, TYPE.AREA, TYPE.AREA_SPLINE, TYPE.AREA_SPLINE_RANGE, TYPE.AREA_LINE_RANGE, TYPE.STEP, TYPE.AREA_STEP],
  Step: [TYPE.STEP, TYPE.AREA_STEP],
  Spline: [TYPE.SPLINE, TYPE.AREA_SPLINE, TYPE.AREA_SPLINE_RANGE]
};
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
// EXTERNAL MODULE: external {"commonjs":"d3-brush","commonjs2":"d3-brush","amd":"d3-brush","root":"d3"}
var external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_ = __webpack_require__(3);
;// CONCATENATED MODULE: ./src/module/util.ts


var _this = undefined;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1, t; r < arguments.length; r++) { t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * @ignore
 */




const isValue = function (v) {
    _newArrowCheck(this, _this);
    return v || v === 0;
  }.bind(undefined),
  isFunction = function (v) {
    _newArrowCheck(this, _this);
    return typeof v === "function";
  }.bind(undefined),
  isString = function (v) {
    _newArrowCheck(this, _this);
    return typeof v === "string";
  }.bind(undefined),
  isNumber = function (v) {
    _newArrowCheck(this, _this);
    return typeof v === "number";
  }.bind(undefined),
  isUndefined = function (v) {
    _newArrowCheck(this, _this);
    return typeof v === "undefined";
  }.bind(undefined),
  isDefined = function (v) {
    _newArrowCheck(this, _this);
    return typeof v !== "undefined";
  }.bind(undefined),
  isboolean = function (v) {
    _newArrowCheck(this, _this);
    return typeof v === "boolean";
  }.bind(undefined),
  ceil10 = function (v) {
    _newArrowCheck(this, _this);
    return Math.ceil(v / 10) * 10;
  }.bind(undefined),
  asHalfPixel = function (n) {
    _newArrowCheck(this, _this);
    return Math.ceil(n) + .5;
  }.bind(undefined),
  diffDomain = function (d) {
    _newArrowCheck(this, _this);
    return d[1] - d[0];
  }.bind(undefined),
  isObjectType = function (v) {
    _newArrowCheck(this, _this);
    return typeof v === "object";
  }.bind(undefined),
  isEmpty = function (o) {
    _newArrowCheck(this, _this);
    return isUndefined(o) || o === null || isString(o) && o.length === 0 || isObjectType(o) && !(o instanceof Date) && Object.keys(o).length === 0 || isNumber(o) && isNaN(o);
  }.bind(undefined),
  notEmpty = function (o) {
    _newArrowCheck(this, _this);
    return !isEmpty(o);
  }.bind(undefined),
  isArray = function (arr) {
    _newArrowCheck(this, _this);
    return Array.isArray(arr);
  }.bind(undefined),
  isObject = function (obj) {
    _newArrowCheck(this, _this);
    return obj && !(obj != null && obj.nodeType) && isObjectType(obj) && !isArray(obj);
  }.bind(undefined);
/**
 * Check if is array
 * @param {Array} arr Data to be checked
 * @returns {boolean}
 * @private
 */
/**
 * Check if is object
 * @param {object} obj Data to be checked
 * @returns {boolean}
 * @private
 */
/**
 * Get specified key value from object
 * If default value is given, will return if given key value not found
 * @param {object} options Source object
 * @param {string} key Key value
 * @param {*} defaultValue Default value
 * @returns {*}
 * @private
 */
function getOption(options, key, defaultValue) {
  return isDefined(options[key]) ? options[key] : defaultValue;
}

/**
 * Check if value exist in the given object
 * @param {object} dict Target object to be checked
 * @param {*} value Value to be checked
 * @returns {boolean}
 * @private
 */
function hasValue(dict, value) {
  var _this2 = this;
  let found = !1;
  Object.keys(dict).forEach(function (key) {
    _newArrowCheck(this, _this2);
    return dict[key] === value && (found = !0);
  }.bind(this));
  return found;
}

/**
 * Call function with arguments
 * @param {Function} fn Function to be called
 * @param {*} thisArg "this" value for fn
 * @param {*} args Arguments for fn
 * @returns {boolean} true: fn is function, false: fn is not function
 * @private
 */
function callFn(fn, thisArg) {
  const isFn = isFunction(fn);
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  isFn && fn.call.apply(fn, [thisArg].concat(args));
  return isFn;
}

/**
 * Call function after all transitions ends
 * @param {d3.transition} transition Transition
 * @param {Fucntion} cb Callback function
 * @private
 */
function endall(transition, cb) {
  var _this3 = this;
  let n = 0;
  const end = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    --n || cb.apply.apply(cb, [this].concat(args));
  };

  // if is transition selection
  if ("duration" in transition) {
    transition.each(function () {
      _newArrowCheck(this, _this3);
      return ++n;
    }.bind(this)).on("end", end);
  } else {
    ++n;
    transition.call(end);
  }
}

/**
 * Replace tag sign to html entity
 * @param {string} str Target string value
 * @returns {string}
 * @private
 */
function sanitize(str) {
  return isString(str) ? str.replace(/<(script|img)?/ig, "&lt;").replace(/(script)?>/ig, "&gt;") : str;
}

/**
 * Set text value. If there's multiline add nodes.
 * @param {d3Selection} node Text node
 * @param {string} text Text value string
 * @param {Array} dy dy value for multilined text
 * @param {boolean} toMiddle To be alingned vertically middle
 * @private
 */
function setTextValue(node, text, dy, toMiddle) {
  var _this4 = this;
  if (dy === void 0) {
    dy = [-1, 1];
  }
  if (toMiddle === void 0) {
    toMiddle = !1;
  }
  if (!node || !isString(text)) {
    return;
  }
  if (text.indexOf("\n") === -1) {
    node.text(text);
  } else {
    const diff = [node.text(), text].map(function (v) {
      _newArrowCheck(this, _this4);
      return v.replace(/[\s\n]/g, "");
    }.bind(this));
    if (diff[0] !== diff[1]) {
      const multiline = text.split("\n"),
        len = toMiddle ? multiline.length - 1 : 1;
      // reset possible text
      node.html("");
      multiline.forEach(function (v, i) {
        _newArrowCheck(this, _this4);
        node.append("tspan").attr("x", 0).attr("dy", (i === 0 ? dy[0] * len : dy[1]) + "em").text(v);
      }.bind(this));
    }
  }
}

/**
 * Substitution of SVGPathSeg API polyfill
 * @param {SVGGraphicsElement} path Target svg element
 * @returns {Array}
 * @private
 */
function getRectSegList(path) {
  /*
   * seg1 ---------- seg2
   *   |               |
   *   |               |
   *   |               |
   * seg0 ---------- seg3
   * */
  const _path$getBBox = path.getBBox(),
    x = _path$getBBox.x,
    y = _path$getBBox.y,
    width = _path$getBBox.width,
    height = _path$getBBox.height;
  return [{
    x: x,
    y: y + height
  },
  // seg0
  {
    x: x,
    y: y
  },
  // seg1
  {
    x: x + width,
    y: y
  },
  // seg2
  {
    x: x + width,
    y: y + height
  } // seg3
  ];
}

/**
 * Get svg bounding path box dimension
 * @param {SVGGraphicsElement} path Target svg element
 * @returns {object}
 * @private
 */
function getPathBox(path) {
  const _path$getBoundingClie = path.getBoundingClientRect(),
    width = _path$getBoundingClie.width,
    height = _path$getBoundingClie.height,
    items = getRectSegList(path),
    x = items[0].x,
    y = Math.min(items[0].y, items[1].y);
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}

/**
 * Get event's current position coordinates
 * @param {object} event Event object
 * @param {SVGElement|HTMLElement} element Target element
 * @returns {Array} [x, y] Coordinates x, y array
 * @private
 */
function getPointer(event, element) {
  var _ref,
    _this5 = this;
  const touches = event && ((_ref = event.touches || event.sourceEvent && event.sourceEvent.touches) == null ? void 0 : _ref[0]);
  let pointer = [0, 0];
  try {
    pointer = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.pointer)(touches || event, element);
  } catch (e) {}
  return pointer.map(function (v) {
    _newArrowCheck(this, _this5);
    return isNaN(v) ? 0 : v;
  }.bind(this));
}

/**
 * Return brush selection array
 * @param {object} ctx Current instance
 * @returns {d3.brushSelection}
 * @private
 */
function getBrushSelection(ctx) {
  const event = ctx.event,
    $el = ctx.$el,
    main = $el.subchart.main || $el.main;
  let selection;

  // check from event
  if (event && event.type === "brush") {
    selection = event.selection;
    // check from brush area selection
  } else if (main && (selection = main.select(".bb-brush").node())) {
    selection = (0,external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_.brushSelection)(selection);
  }
  return selection;
}

/**
 * Get boundingClientRect.
 * Cache the evaluated value once it was called.
 * @param {HTMLElement} node Target element
 * @returns {object}
 * @private
 */
function getBoundingRect(node) {
  const needEvaluate = !("rect" in node) || "rect" in node && node.hasAttribute("width") && node.rect.width !== +node.getAttribute("width");
  return needEvaluate ? node.rect = node.getBoundingClientRect() : node.rect;
}

/**
 * Retrun random number
 * @param {boolean} asStr Convert returned value as string
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {number|string}
 * @private
 */
function getRandom(asStr, min, max) {
  if (asStr === void 0) {
    asStr = !0;
  }
  if (min === void 0) {
    min = 0;
  }
  if (max === void 0) {
    max = 1e4;
  }
  const crpt = win.crypto || win.msCrypto,
    rand = crpt ? min + crpt.getRandomValues(new Uint32Array(1))[0] % (max - min + 1) : Math.floor(Math.random() * (max - min) + min);
  return asStr ? rand + "" : rand;
}

/**
 * Find index based on binary search
 * @param {Array} arr Data array
 * @param {number} v Target number to find
 * @param {number} start Start index of data array
 * @param {number} end End index of data arr
 * @param {boolean} isRotated Weather is roted axis
 * @returns {number} Index number
 * @private
 */
function findIndex(arr, v, start, end, isRotated) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  let _arr$mid = arr[mid],
    x = _arr$mid.x,
    _arr$mid$w = _arr$mid.w,
    w = _arr$mid$w === void 0 ? 0 : _arr$mid$w;
  if (isRotated) {
    x = arr[mid].y;
    w = arr[mid].h;
  }
  if (v >= x && v <= x + w) {
    return mid;
  }
  return v < x ? findIndex(arr, v, start, mid - 1, isRotated) : findIndex(arr, v, mid + 1, end, isRotated);
}

/**
 * Check if brush is empty
 * @param {object} ctx Bursh context
 * @returns {boolean}
 * @private
 */
function brushEmpty(ctx) {
  const selection = getBrushSelection(ctx);
  if (selection) {
    // brush selected area
    // two-dimensional: [[x0, y0], [x1, y1]]
    // one-dimensional: [x0, x1] or [y0, y1]
    return selection[0] === selection[1];
  }
  return !0;
}

/**
 * Deep copy object
 * @param {object} objectN Source object
 * @returns {object} Cloned object
 * @private
 */
function deepClone() {
  var _this6 = this;
  const _clone = function clone(v) {
    _newArrowCheck(this, _this6);
    if (isObject(v) && v.constructor) {
      const r = new v.constructor();
      for (const k in v) {
        r[k] = _clone(v[k]);
      }
      return r;
    }
    return v;
  }.bind(this);
  for (var _len3 = arguments.length, objectN = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    objectN[_key3] = arguments[_key3];
  }
  return objectN.map(function (v) {
    _newArrowCheck(this, _this6);
    return _clone(v);
  }.bind(this)).reduce(function (a, c) {
    _newArrowCheck(this, _this6);
    return _objectSpread(_objectSpread({}, a), c);
  }.bind(this));
}

/**
 * Extend target from source object
 * @param {object} target Target object
 * @param {object|Array} source Source object
 * @returns {object}
 * @private
 */
function extend(target, source) {
  var _this7 = this;
  if (target === void 0) {
    target = {};
  }
  if (isArray(source)) {
    source.forEach(function (v) {
      _newArrowCheck(this, _this7);
      return extend(target, v);
    }.bind(this));
  }

  // exclude name with only numbers
  for (const p in source) {
    if (/^\d+$/.test(p) || p in target) {
      continue;
    }
    target[p] = source[p];
  }
  return target;
}

/**
 * Return first letter capitalized
 * @param {string} str Target string
 * @returns {string} capitalized string
 * @private
 */
const capitalize = function (str) {
  _newArrowCheck(this, _this);
  return str.charAt(0).toUpperCase() + str.slice(1);
}.bind(undefined);

/**
 * Camelize from kebob style string
 * @param {string} str Target string
 * @param {string} separator Separator string
 * @returns {string} camelized string
 * @private
 */
function camelize(str, separator) {
  var _this8 = this;
  if (separator === void 0) {
    separator = "-";
  }
  return str.split(separator).map(function (v, i) {
    _newArrowCheck(this, _this8);
    return i ? v.charAt(0).toUpperCase() + v.slice(1).toLowerCase() : v.toLowerCase();
  }.bind(this)).join("");
}

/**
 * Convert to array
 * @param {object} v Target to be converted
 * @returns {Array}
 * @private
 */
const toArray = function (v) {
  _newArrowCheck(this, _this);
  return [].slice.call(v);
}.bind(undefined);

/**
 * Add CSS rules
 * @param {object} style Style object
 * @param {string} selector Selector string
 * @param {Array} prop Prps arrary
 * @returns {number} Newely added rule index
 * @private
 */
function addCssRules(style, selector, prop) {
  var _this9 = this;
  const rootSelctor = style.rootSelctor,
    sheet = style.sheet,
    getSelector = function (s) {
      _newArrowCheck(this, _this9);
      return s.replace(/\s?(bb-)/g, ".$1").replace(/\.+/g, ".");
    }.bind(this),
    rule = rootSelctor + " " + getSelector(selector) + " {" + prop.join(";") + "}";
  return sheet[sheet.insertRule ? "insertRule" : "addRule"](rule, sheet.cssRules.length);
}

/**
 * Get css rules for specified stylesheets
 * @param {Array} styleSheets The stylesheets to get the rules from
 * @returns {Array}
 * @private
 */
function getCssRules(styleSheets) {
  var _this10 = this;
  let rules = [];
  styleSheets.forEach(function (sheet) {
    _newArrowCheck(this, _this10);
    try {
      if (sheet.cssRules && sheet.cssRules.length) {
        rules = rules.concat(toArray(sheet.cssRules));
      }
    } catch (e) {
      var _window$console;
      (_window$console = win.console) == null || _window$console.warn("Error while reading rules from " + sheet.href + ": " + e.toString());
    }
  }.bind(this));
  return rules;
}

/**
 * Gets the SVGMatrix of an SVGGElement
 * @param {SVGElement} node Node element
 * @returns {SVGMatrix} matrix
 * @private
 */
function getTranslation(node) {
  const transform = node ? node.transform : null,
    baseVal = transform && transform.baseVal;
  return baseVal && baseVal.numberOfItems ? baseVal.getItem(0).matrix : {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0
  };
}

/**
 * Get unique value from array
 * @param {Array} data Source data
 * @returns {Array} Unique array value
 * @private
 */
function getUnique(data) {
  var _this11 = this;
  const isDate = data[0] instanceof Date,
    d = (isDate ? data.map(Number) : data).filter(function (v, i, self) {
      _newArrowCheck(this, _this11);
      return self.indexOf(v) === i;
    }.bind(this));
  return isDate ? d.map(function (v) {
    _newArrowCheck(this, _this11);
    return new Date(v);
  }.bind(this)) : d;
}

/**
 * Merge array
 * @param {Array} arr Source array
 * @returns {Array}
 * @private
 */
function mergeArray(arr) {
  var _this12 = this;
  return arr && arr.length ? arr.reduce(function (p, c) {
    _newArrowCheck(this, _this12);
    return p.concat(c);
  }.bind(this)) : [];
}

/**
 * Merge object returning new object
 * @param {object} target Target object
 * @param {object} objectN Source object
 * @returns {object} merged target object
 * @private
 */
function mergeObj(target) {
  for (var _this13 = this, _len4 = arguments.length, objectN = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    objectN[_key4 - 1] = arguments[_key4];
  }
  if (!objectN.length || objectN.length === 1 && !objectN[0]) {
    return target;
  }
  const source = objectN.shift();
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      _newArrowCheck(this, _this13);
      const value = source[key];
      if (isObject(value)) {
        target[key] || (target[key] = {});
        target[key] = mergeObj(target[key], value);
      } else {
        target[key] = isArray(value) ? value.concat() : value;
      }
    }.bind(this));
  }
  return mergeObj.apply(void 0, [target].concat(objectN));
}

/**
 * Sort value
 * @param {Array} data value to be sorted
 * @param {boolean} isAsc true: asc, false: desc
 * @returns {number|string|Date} sorted date
 * @private
 */
function sortValue(data, isAsc) {
  var _this14 = this;
  if (isAsc === void 0) {
    isAsc = !0;
  }
  let fn;
  if (data[0] instanceof Date) {
    fn = isAsc ? function (a, b) {
      _newArrowCheck(this, _this14);
      return a - b;
    }.bind(this) : function (a, b) {
      _newArrowCheck(this, _this14);
      return b - a;
    }.bind(this);
  } else {
    if (isAsc && !data.every(isNaN)) {
      fn = function (a, b) {
        _newArrowCheck(this, _this14);
        return a - b;
      }.bind(this);
    } else if (!isAsc) {
      fn = function (a, b) {
        _newArrowCheck(this, _this14);
        return a > b && -1 || a < b && 1 || a === b && 0;
      }.bind(this);
    }
  }
  return data.concat().sort(fn);
}

/**
 * Get min/max value
 * @param {string} type 'min' or 'max'
 * @param {Array} data Array data value
 * @returns {number|Date|undefined}
 * @private
 */
function getMinMax(type, data) {
  var _this15 = this;
  let res = data.filter(function (v) {
    _newArrowCheck(this, _this15);
    return notEmpty(v);
  }.bind(this));
  if (res.length) {
    if (isNumber(res[0])) {
      res = Math[type].apply(Math, res);
    } else if (res[0] instanceof Date) {
      res = sortValue(res, type === "min")[0];
    }
  } else {
    res = undefined;
  }
  return res;
}

/**
 * Get range
 * @param {number} start Start number
 * @param {number} end End number
 * @param {number} step Step number
 * @returns {Array}
 * @private
 */
const getRange = function (start, end, step) {
    if (step === void 0) {
      step = 1;
    }
    _newArrowCheck(this, _this);
    const res = [],
      n = Math.max(0, Math.ceil((end - start) / step)) | 0;
    for (let i = start; i < n; i++) {
      res.push(start + i * step);
    }
    return res;
  }.bind(undefined),
  emulateEvent = {
    mouse: function () {
      var _this16 = this;
      _newArrowCheck(this, _this);
      const getParams = function () {
        _newArrowCheck(this, _this16);
        return {
          bubbles: !1,
          cancelable: !1,
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0
        };
      }.bind(this);
      try {
        // eslint-disable-next-line no-new
        new MouseEvent("t");
        return function (el, eventType, params) {
          if (params === void 0) {
            params = getParams();
          }
          _newArrowCheck(this, _this16);
          el.dispatchEvent(new MouseEvent(eventType, params));
        }.bind(this);
      } catch (e) {
        // Polyfills DOM4 MouseEvent
        return function (el, eventType, params) {
          if (params === void 0) {
            params = getParams();
          }
          _newArrowCheck(this, _this16);
          const mouseEvent = browser_doc.createEvent("MouseEvent");

          // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
          mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, win, 0,
          // the event's mouse click count
          params.screenX, params.screenY, params.clientX, params.clientY, !1, !1, !1, !1, 0, null);
          el.dispatchEvent(mouseEvent);
        }.bind(this);
      }
    }.bind(undefined)(),
    touch: function touch(el, eventType, params) {
      _newArrowCheck(this, _this);
      const touchObj = new Touch(mergeObj({
        identifier: Date.now(),
        target: el,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: .5
      }, params));
      el.dispatchEvent(new TouchEvent(eventType, {
        cancelable: !0,
        bubbles: !0,
        shiftKey: !0,
        touches: [touchObj],
        targetTouches: [],
        changedTouches: [touchObj]
      }));
    }.bind(undefined)
  }; // emulate event
/**
 * Process the template  & return bound string
 * @param {string} tpl Template string
 * @param {object} data Data value to be replaced
 * @returns {string}
 * @private
 */
function tplProcess(tpl, data) {
  let res = tpl;
  for (const x in data) {
    res = res.replace(new RegExp("{=" + x + "}", "g"), data[x]);
  }
  return res;
}

/**
 * Get parsed date value
 * (It must be called in 'ChartInternal' context)
 * @param {Date|string|number} date Value of date to be parsed
 * @returns {Date}
 * @private
 */
function parseDate(date) {
  let parsedDate;
  if (date instanceof Date) {
    parsedDate = date;
  } else if (isString(date)) {
    var _format$dataTime;
    const config = this.config,
      format = this.format;

    // if fails to parse, try by new Date()
    // https://github.com/naver/billboard.js/issues/1714
    parsedDate = (_format$dataTime = format.dataTime(config.data_xFormat)(date)) != null ? _format$dataTime : new Date(date);
  } else if (isNumber(date) && !isNaN(date)) {
    parsedDate = new Date(+date);
  }
  if (!parsedDate || isNaN(+parsedDate)) {
    console && console.error && console.error("Failed to parse x '" + date + "' to Date object");
  }
  return parsedDate;
}

/**
 * Return if the current doc is visible or not
 * @returns {boolean}
 * @private
 */
function isTabVisible() {
  return (browser_doc == null ? void 0 : browser_doc.hidden) === !1 || (browser_doc == null ? void 0 : browser_doc.visibilityState) === "visible";
}

/**
 * Get the current input type
 * @param {boolean} mouse Config value: interaction.inputType.mouse
 * @param {boolean} touch Config value: interaction.inputType.touch
 * @returns {string} "mouse" | "touch" | null
 * @private
 */
function convertInputType(mouse, touch) {
  var _this17 = this;
  const DocumentTouch = win.DocumentTouch,
    matchMedia = win.matchMedia,
    navigator = win.navigator;
  let hasTouch = !1;
  if (touch) {
    // Some Edge desktop return true: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/20417074/
    if (navigator && "maxTouchPoints" in navigator) {
      hasTouch = navigator.maxTouchPoints > 0;

      // Ref: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
      // On IE11 with IE9 emulation mode, ('ontouchstart' in window) is returning true
    } else if ("ontouchmove" in win || DocumentTouch && browser_doc instanceof DocumentTouch) {
      hasTouch = !0;
    } else {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#avoiding_user_agent_detection
      if (matchMedia != null && matchMedia("(pointer:coarse)").matches) {
        hasTouch = !0;
      } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = navigator.userAgent;
        hasTouch = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }
  }

  // Check if agent has mouse using any-hover, touch devices (e.g iPad) with external mouse will return true as long as mouse is connected
  // https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/#aa-testing-the-capabilities-of-all-inputs
  // Demo: https://patrickhlauke.github.io/touch/pointer-hover-any-pointer-any-hover/
  const hasMouse = mouse && ["any-hover:hover", "any-pointer:fine"].some(function (v) {
    _newArrowCheck(this, _this17);
    return matchMedia == null ? void 0 : matchMedia("(" + v + ")").matches;
  }.bind(this));

  // fallback to 'mouse' if no input type is detected.
  return hasMouse && "mouse" || hasTouch && "touch" || "mouse";
}

/**
 * Run function until given condition function return true
 * @param {Function} fn Function to be executed when condition is true
 * @param {Function} conditionFn Condition function to check if condition is true
 * @private
 */
function runUntil(fn, conditionFn) {
  var _this18 = this;
  if (conditionFn() === !1) {
    requestAnimationFrame(function () {
      _newArrowCheck(this, _this18);
      return runUntil(fn, conditionFn);
    }.bind(this));
  } else {
    fn();
  }
}
;// CONCATENATED MODULE: ./src/module/error.ts




/**
 * Copyright (c) 2021 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/* eslint no-console: "off" */


/**
 * Check chart type module imports.
 * @param {ChartInternal} ctx Context
 * @private
 */
function checkModuleImport(ctx) {
  const $$ = ctx,
    config = $$.config;
  let type = "";
  if (isEmpty(config.data_type || config.data_types) && !$$[TYPE_METHOD_NEEDED.LINE]) {
    type = "line";
  } else {
    for (const x in TYPE_METHOD_NEEDED) {
      const t = TYPE[x];
      if ($$.hasType(t) && !$$[TYPE_METHOD_NEEDED[x]]) {
        type = t;
        break;
      }
    }
  }
  type && logError("Please, make sure if %c" + camelize(type), "module has been imported and specified correctly.");
}

/**
 * Log error and throw error
 * @param {string} head Message header
 * @param {string} tail Message tail
 * @private
 */
function logError(head, tail) {
  var _window$console;
  const hasConsole = (_window$console = win.console) == null ? void 0 : _window$console.error;
  if (hasConsole) {
    console.error("\u274C [billboard.js] " + head, "background:red;color:white;display:block;font-size:15px", tail);
    console.info("%cℹ️", "font-size:15px", "https://github.com/naver/billboard.js/wiki/CHANGELOG-v2#modularization-by-its-functionality");
  }
  throw Error("[billboard.js] " + head.replace(/\%c([a-z-]+)/i, "'$1' ") + " " + tail);
}
;// CONCATENATED MODULE: ./src/config/classes.ts

function classes_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function classes_objectSpread(e) { for (var r = 1, t; r < arguments.length; r++) { t = null != arguments[r] ? arguments[r] : {}; r % 2 ? classes_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : classes_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * CSS class names definition
 * @private
 */
const $COMMON = {
  button: "bb-button",
  chart: "bb-chart",
  empty: "bb-empty",
  main: "bb-main",
  target: "bb-target",
  EXPANDED: "_expanded_"
};
const $ARC = {
  arc: "bb-arc",
  arcLabelLine: "bb-arc-label-line",
  arcs: "bb-arcs",
  chartArc: "bb-chart-arc",
  chartArcs: "bb-chart-arcs",
  chartArcsBackground: "bb-chart-arcs-background",
  chartArcsTitle: "bb-chart-arcs-title",
  needle: "bb-needle"
};
const $AREA = {
  area: "bb-area",
  areas: "bb-areas"
};
const $AXIS = {
  axis: "bb-axis",
  axisX: "bb-axis-x",
  axisXLabel: "bb-axis-x-label",
  axisY: "bb-axis-y",
  axisY2: "bb-axis-y2",
  axisY2Label: "bb-axis-y2-label",
  axisYLabel: "bb-axis-y-label"
};
const $BAR = {
  bar: "bb-bar",
  bars: "bb-bars",
  chartBar: "bb-chart-bar",
  chartBars: "bb-chart-bars"
};
const $CANDLESTICK = {
  candlestick: "bb-candlestick",
  candlesticks: "bb-candlesticks",
  chartCandlestick: "bb-chart-candlestick",
  chartCandlesticks: "bb-chart-candlesticks",
  valueDown: "bb-value-down",
  valueUp: "bb-value-up"
};
const $CIRCLE = {
  chartCircles: "bb-chart-circles",
  circle: "bb-circle",
  circles: "bb-circles"
};
const $COLOR = {
  colorPattern: "bb-color-pattern",
  colorScale: "bb-colorscale"
};
const $DRAG = {
  dragarea: "bb-dragarea",
  INCLUDED: "_included_"
};
const $GAUGE = {
  chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
  chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
  chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
  chartArcsGaugeTitle: "bb-chart-arcs-gauge-title",
  gaugeValue: "bb-gauge-value"
};
const $LEGEND = {
  legend: "bb-legend",
  legendBackground: "bb-legend-background",
  legendItem: "bb-legend-item",
  legendItemEvent: "bb-legend-item-event",
  legendItemHidden: "bb-legend-item-hidden",
  legendItemPoint: "bb-legend-item-point",
  legendItemTile: "bb-legend-item-tile"
};
const $LINE = {
  chartLine: "bb-chart-line",
  chartLines: "bb-chart-lines",
  line: "bb-line",
  lines: "bb-lines"
};
const $EVENT = {
  eventRect: "bb-event-rect",
  eventRects: "bb-event-rects",
  eventRectsMultiple: "bb-event-rects-multiple",
  eventRectsSingle: "bb-event-rects-single"
};
const $FOCUS = {
  focused: "bb-focused",
  defocused: "bb-defocused",
  legendItemFocused: "bb-legend-item-focused",
  xgridFocus: "bb-xgrid-focus",
  ygridFocus: "bb-ygrid-focus"
};
const $GRID = {
  grid: "bb-grid",
  gridLines: "bb-grid-lines",
  xgrid: "bb-xgrid",
  xgridLine: "bb-xgrid-line",
  xgridLines: "bb-xgrid-lines",
  xgrids: "bb-xgrids",
  ygrid: "bb-ygrid",
  ygridLine: "bb-ygrid-line",
  ygridLines: "bb-ygrid-lines",
  ygrids: "bb-ygrids"
};
const $LEVEL = {
  level: "bb-level",
  levels: "bb-levels"
};
const $RADAR = {
  chartRadar: "bb-chart-radar",
  chartRadars: "bb-chart-radars"
};
const $REGION = {
  region: "bb-region",
  regions: "bb-regions"
};
const $SELECT = {
  selectedCircle: "bb-selected-circle",
  selectedCircles: "bb-selected-circles",
  SELECTED: "_selected_"
};
const $SHAPE = {
  shape: "bb-shape",
  shapes: "bb-shapes"
};
const $SUBCHART = {
  brush: "bb-brush",
  subchart: "bb-subchart"
};
const $TEXT = {
  chartText: "bb-chart-text",
  chartTexts: "bb-chart-texts",
  text: "bb-text",
  texts: "bb-texts",
  title: "bb-title",
  TextOverlapping: "text-overlapping"
};
const $TOOLTIP = {
  tooltip: "bb-tooltip",
  tooltipContainer: "bb-tooltip-container",
  tooltipName: "bb-tooltip-name"
};
const $TREEMAP = {
  treemap: "bb-treemap",
  chartTreemap: "bb-chart-treemap",
  chartTreemaps: "bb-chart-treemaps"
};
const $ZOOM = {
  buttonZoomReset: "bb-zoom-reset",
  zoomBrush: "bb-zoom-brush"
};
/* harmony default export */ var classes = (classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread(classes_objectSpread({}, $COMMON), $ARC), $AREA), $AXIS), $BAR), $CANDLESTICK), $CIRCLE), $COLOR), $DRAG), $GAUGE), $LEGEND), $LINE), $EVENT), $FOCUS), $GRID), $RADAR), $REGION), $SELECT), $SHAPE), $SUBCHART), $TEXT), $TOOLTIP), $TREEMAP), $ZOOM));
;// CONCATENATED MODULE: ./src/config/Store/Element.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * Elements class.
 * @class Elements
 * @ignore
 * @private
 */
let Element = function () {
  return {
    chart: null,
    main: null,
    svg: null,
    axis: {
      // axes
      x: null,
      y: null,
      y2: null,
      subX: null
    },
    defs: null,
    tooltip: null,
    legend: null,
    title: null,
    subchart: {
      main: null,
      // $$.context
      bar: null,
      // $$.contextBar
      line: null,
      // $$.contextLine
      area: null // $$.contextArea
    },

    arcs: null,
    bar: null,
    // mainBar,
    candlestick: null,
    line: null,
    // mainLine,
    area: null,
    // mainArea,
    circle: null,
    // mainCircle,
    radar: null,
    text: null,
    // mainText,
    grid: {
      main: null,
      // grid (also focus)
      x: null,
      // xgrid,
      y: null // ygrid,
    },

    gridLines: {
      main: null,
      // gridLines
      x: null,
      // xgridLines,
      y: null // ygridLines
    },

    region: {
      main: null,
      // region
      list: null // mainRegion
    },

    eventRect: null,
    zoomResetBtn: null // drag zoom reset button
  };
};

;// CONCATENATED MODULE: ./src/config/Store/State.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * State class.
 * @class State
 * @ignore
 * @private
 */
let State = function () {
  return {
    // chart drawn area dimension, excluding axes
    width: 0,
    width2: 0,
    height: 0,
    height2: 0,
    margin: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    margin2: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    margin3: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    arcWidth: 0,
    arcHeight: 0,
    xAxisHeight: 0,
    hasAxis: !1,
    hasRadar: !1,
    hasTreemap: !1,
    // for data CSS rule index (used when boost.useCssRule is true)
    cssRule: {},
    current: {
      // current domain value. Assigned when is zoom is called
      domain: undefined,
      // chart whole dimension
      width: 0,
      height: 0,
      dataMax: 0,
      maxTickSize: {
        x: {
          width: 0,
          height: 0,
          ticks: [],
          clipPath: 0,
          domain: ""
        },
        y: {
          width: 0,
          height: 0,
          domain: ""
        },
        y2: {
          width: 0,
          height: 0,
          domain: ""
        }
      },
      // current used chart type list
      types: [],
      needle: undefined // arc needle current value
    },

    // legend
    isLegendRight: !1,
    isLegendInset: !1,
    isLegendTop: !1,
    isLegendLeft: !1,
    legendStep: 0,
    legendItemWidth: 0,
    legendItemHeight: 0,
    legendHasRendered: !1,
    eventReceiver: {
      currentIdx: -1,
      // current event interaction index
      rect: {},
      // event rect's clientBoundingRect
      data: [],
      // event data bound of previoous eventRect
      coords: [] // coordination value of previous eventRect
    },

    axis: {
      x: {
        padding: {
          left: 0,
          right: 0
        },
        tickCount: 0
      }
    },
    rotatedPadding: {
      left: 30,
      right: 0,
      top: 5
    },
    withoutFadeIn: {},
    inputType: "",
    datetimeId: "",
    // clip id string
    clip: {
      id: "",
      idXAxis: "",
      idYAxis: "",
      idXAxisTickTexts: "",
      idGrid: "",
      idSubchart: "",
      // clipIdForSubchart
      path: "",
      pathXAxis: "",
      pathYAxis: "",
      pathXAxisTickTexts: "",
      pathGrid: ""
    },
    // state
    event: null,
    // event object
    dragStart: null,
    dragging: !1,
    flowing: !1,
    cancelClick: !1,
    mouseover: !1,
    rendered: !1,
    transiting: !1,
    redrawing: !1,
    // if redraw() is on process
    resizing: !1,
    // resize event called
    toggling: !1,
    // legend toggle
    zooming: !1,
    hasNegativeValue: !1,
    hasPositiveValue: !0,
    orgAreaOpacity: "0.2",
    orgConfig: {},
    // user original genration config

    // ID strings
    hiddenTargetIds: [],
    hiddenLegendIds: [],
    focusedTargetIds: [],
    defocusedTargetIds: [],
    // value for Arc
    radius: 0,
    innerRadius: 0,
    outerRadius: undefined,
    innerRadiusRatio: 0,
    gaugeArcWidth: 0,
    radiusExpanded: 0,
    // xgrid attribute
    xgridAttr: {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }
  };
};

;// CONCATENATED MODULE: ./src/config/Store/Store.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



// mapping
const Store_classes = {
  element: Element,
  state: State
};

/**
 * Internal store class.
 * @class Store
 * @ignore
 * @private
 */
let Store = /*#__PURE__*/function () {
  function Store() {
    var _this = this;
    Object.keys(Store_classes).forEach(function (v) {
      _newArrowCheck(this, _this);
      this[v] = new Store_classes[v]();
    }.bind(this));
  }
  var _proto = Store.prototype;
  _proto.getStore = function getStore(name) {
    return this[name];
  };
  return Store;
}();

;// CONCATENATED MODULE: ./src/config/Options/common/main.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * main config options
 */
/* harmony default export */ var main = ({
  /**
   * Specify the CSS selector or the element which the chart will be set to. D3 selection object can be specified also.<br>
   * If other chart is set already, it will be replaced with the new one (only one chart can be set in one element).
   * - **NOTE:** In case of element doesn't exist or not specified, will add a `<div>` element to the body.
   * @name bindto
   * @memberof Options
   * @property {string|HTMLElement|d3.selection|object} [bindto="#chart"] Specify the element where chart will be drawn.
   * @property {string|HTMLElement|d3.selection} bindto.element="#chart" Specify the element where chart will be drawn.
   * @property {string} [bindto.classname=bb] Specify the class name of bind element.<br>
   *     **NOTE:** When class name isn't `bb`, then you also need to update the default CSS to be rendered correctly.
   * @default #chart
   * @example
   * bindto: "#myContainer"
   *
   * // or HTMLElement
   * bindto: document.getElementById("myContainer")
   *
   * // or D3 selection object
   * bindto: d3.select("#myContainer")
   *
   * // or to change default classname
   * bindto: {
   *    element: "#chart",
   *    classname: "bill-board"  // ex) <div id='chart' class='bill-board'>
   * }
   */
  bindto: "#chart",
  /**
   * Set chart background.
   * @name background
   * @memberof Options
   * @property {object} background background object
   * @property {string} background.class Specify the class name for background element.
   * @property {string} background.color Specify the fill color for background element.<br>**NOTE:** Will be ignored if `imgUrl` option is set.
   * @property {string} background.imgUrl Specify the image url string for background.
   * @see [Demo](https://naver.github.io/billboard.js/demo/#ChartOptions.Background)
   * @example
   * background: {
   *    class: "myClass",
   *    color: "red",
   *
   *    // Set image url for background.
   *    // If specified, 'color' option will be ignored.
   *    imgUrl: "https://naver.github.io/billboard.js/img/logo/billboard.js.svg",
   * }
   */
  background: {},
  /**
   * Set 'clip-path' attribute for chart element
   * - **NOTE:**
   *  > When is false, chart node element is positioned after the axis node in DOM tree hierarchy.
   *  > Is to make chart element positioned over axis element.
   * @name clipPath
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#ChartOptions.clipPath)
   * @example
   * // don't set 'clip-path' attribute
   * clipPath: false
   */
  clipPath: !0,
  /**
   * Set svg element's class name
   * @name svg
   * @memberof Options
   * @type {object}
   * @property {object} [svg] svg object
   * @property {string} [svg.classname] class name for svg element
   * @example
   * svg: {
   *   classname: "test_class"
   * }
   */
  svg_classname: undefined,
  /**
   * The desired size of the chart element.
   * If value is not specified, the width of the chart will be calculated by the size of the parent element it's appended to.
   * @name size
   * @memberof Options
   * @type {object}
   * @property {object} [size] size object
   * @property {number} [size.width] width of the chart element
   * @property {number} [size.height] height of the chart element
   * @see [Demo](https://naver.github.io/billboard.js/demo/#ChartOptions.ChartSize)
   * @example
   * size: {
   *   width: 640,
   *   height: 480
   * }
   */
  size_width: undefined,
  size_height: undefined,
  /**
   * The padding of the chart element.
   * - **NOTE:** for more information, see the "[`Understanding padding`](https://github.com/naver/billboard.js/wiki/Understanding-padding)"" wiki documentaion.
   * @name padding
   * @memberof Options
   * @type {object}
   * @property {object|boolean} [padding=true] Set padding of chart, and accepts object or boolean type.
   * - `Object`: Specify each side's padding.
   * - `false`: Remove padding completely and make shape to fully occupy the container element.
   *   - In this case, axes and subchart will be hidden.
   *   - To adjust some padding from this state, use `axis.[x|y].padding` option.
   * @property {string} [padding.mode] padding mode
   * - `"fit"`: Reduce padding as much as possible to make chart fit to the container element for chart types w/axis.<br>When specified, all padding values will be relative from fitted value.
   * @property {number} [padding.top] padding on the top of chart
   * @property {number} [padding.right] padding on the right of chart
   * @property {number} [padding.bottom] padding on the bottom of chart
   * @property {number} [padding.left] padding on the left of chart
   * @see [Demo](https://naver.github.io/billboard.js/demo/#ChartOptions.Padding)
   * @see [Demo: Fit padding](https://naver.github.io/billboard.js/demo/#ChartOptions.FitPadding)
   * @example
   * // remove padding completely.
   * padding: false,
   *
   * padding: {
   *   // specifying mode value, will reduce padding and make fit to the container element.
   *   mode: "fit"
   *
   *   // when mode is "fit", all padding values will be relative from fitted value.
   *   // so, 0 will be initial fitted value.
   *   top: 20,
   *   right: 20,
   *   bottom: 20,
   *   left: 20
   * }
   *
   * // or specify padding value for each side
   * padding: {
   *   top: 20,
   *   right: 20,
   *   bottom: 20,
   *   left: 20
   * }
   */
  padding: !0,
  padding_mode: undefined,
  padding_left: undefined,
  padding_right: undefined,
  padding_top: undefined,
  padding_bottom: undefined,
  /**
   * Set chart resize options
   * @name resize
   * @memberof Options
   * @type {object}
   * @property {object} [resize] resize object
   * @property {boolean} [resize.auto=true] Set chart resize automatically on viewport changes.
   * @property {boolean|number} [resize.timer=true] Set resize timer option.
   * - **NOTE:**
   *   - The resize function will be called using:
   *     - true: `setTimeout()`
   *     - false: `requestIdleCallback()`
   *   - Given number(delay in ms) value, resize function will be triggered using `setTimer()` with given delay.
   * @example
   *  resize: {
   *      auto: false,
   *
   *      // set resize function will be triggered using `setTimer()`
   *      timer: true,
   *
   *      // set resize function will be triggered using `requestIdleCallback()`
   *      timer: false,
   *
   *      // set resize function will be triggered using `setTimer()` with a delay of `100ms`.
   *      timer: 100
   *  }
   */
  resize_auto: !0,
  resize_timer: !0,
  /**
   * Set a callback to execute when the chart is clicked.
   * @name onclick
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * onclick: function(event) {
   *   this; // chart instance itself
   *   event; // native event object
   *   ...
   * }
   */
  onclick: undefined,
  /**
   * Set a callback to execute when mouse/touch enters the chart.
   * @name onover
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * onover: function(event) {
   *   this; // chart instance itself
   *   event; // native event object
   *   ...
   * }
   */
  onover: undefined,
  /**
   * Set a callback to execute when mouse/touch leaves the chart.
   * @name onout
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * onout: function(event) {
   *   this; // chart instance itself
   *   event; // native event object
   *   ...
   * }
   */
  onout: undefined,
  /**
   * Set a callback to execute when user resizes the screen.
   * @name onresize
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * onresize: function() {
   *   this; // chart instance itself
   *   ...
   * }
   */
  onresize: undefined,
  /**
   * Set a callback to execute when screen resize finished.
   * @name onresized
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * onresized: function() {
   *   this; // chart instance itself
   *   ...
   * }
   */
  onresized: undefined,
  /**
   * Set a callback to execute before the chart is initialized
   * @name onbeforeinit
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * onbeforeinit: function() {
   *   this; // chart instance itself
   *   ...
   * }
   */
  onbeforeinit: undefined,
  /**
   * Set a callback to execute when the chart is initialized.
   * @name oninit
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * oninit: function() {
   *   this; // chart instance itself
   *   ...
   * }
   */
  oninit: undefined,
  /**
   * Set a callback to execute after the chart is initialized
   * @name onafterinit
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * onafterinit: function() {
   *   this; // chart instance itself
   *   ...
   * }
   */
  onafterinit: undefined,
  /**
   * Set a callback which is executed when the chart is rendered. Basically, this callback will be called in each time when the chart is redrawed.
   * @name onrendered
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * onrendered: function() {
   *   this; // chart instance itself
   *   ...
   * }
   */
  onrendered: undefined,
  /**
   * Set duration of transition (in milliseconds) for chart animation.<br><br>
   * - **NOTE:** If `0 `or `null` set, transition will be skipped. So, this makes initial rendering faster especially in case you have a lot of data.
   * @name transition
   * @memberof Options
   * @type {object}
   * @property {object} [transition] transition object
   * @property {number} [transition.duration=350] duration in milliseconds
   * @example
   * transition: {
   *    duration: 500
   * }
   */
  transition_duration: 250,
  /**
   * Set plugins
   * @name plugins
   * @memberof Options
   * @type {Array}
   * @example
   *  plugins: [
   *    new bb.plugin.stanford({ ... }),
   *    new PluginA(),
   *    ...
   * ]
   */
  plugins: [],
  /**
   * Control the render timing
   * @name render
   * @memberof Options
   * @type {object}
   * @property {object} [render] render object
   * @property {boolean} [render.lazy=true] Make to not render at initialization (enabled by default when bind element's visibility is hidden).
   * @property {boolean} [render.observe=true] Observe bind element's visibility(`display` or `visiblity` inline css property or class value) & render when is visible automatically (for IEs, only works IE11+). When set to **false**, call [`.flush()`](./Chart.html#flush) to render.
   * @see [Demo](https://naver.github.io/billboard.js/demo/#ChartOptions.LazyRender)
   * @example
   *  render: {
   *    lazy: true,
   *    observe: true
   * }
   *
   * @example
   *	// <!-- render.lazy will detect visibility defined -->
   *  // (a) <div id='chart' class='hide'></div>
   *  // (b) <div id='chart' style='display:none'></div>
   *
   *  // render.lazy enabled by default when element is hidden
   *  var chart = bb.generate({ ... });
   *
   *  // chart will be rendered automatically when element's visibility changes
   *  // Note: works only for inlined css property or class attribute changes
   *  document.getElementById('chart').classList.remove('hide')  // (a)
   *  document.getElementById('chart').style.display = 'block';  // (b)
   *
   * @example
   *	// chart won't be rendered and not observing bind element's visiblity changes
   *  var chart = bb.generate({
   *     render: {
   *          lazy: true,
   *          observe: false
   *     }
   *  });
   *
   *  // call at any point when you want to render
   *  chart.flush();
   */
  render: {},
  /**
   * Show rectangles inside the chart.<br><br>
   * This option accepts array including object that has axis, start, end and class.
   * The keys start, end and class are optional.
   * axis must be x, y or y2. start and end should be the value where regions start and end.
   * If not specified, the edge values will be used.
   * If timeseries x axis, date string, Date object and unixtime integer can be used.
   * If class is set, the region element will have it as class.
   * @name regions
   * @memberof Options
   * @type {Array}
   * @default []
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Region.RegionLabel)
   * @example
   *  regions: [
   *    {
   *      axis: "x",
   *      start: 1,
   *      end: 4,
   *      class: "region-1-4",
   *      label: {
   *      	text: "Region Text",
   *      	x: 5,  // position relative of the initial x coordinate
   *      	y: 5,  // position relative of the initial y coordinate
   *      	color: "red",  // color string
   *      	rotated: true  // make text to show in vertical or horizontal
   *      }
   *    }
   *  ]
   */
  regions: []
});
;// CONCATENATED MODULE: ./src/config/Options/common/boost.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * boost config options
 */
/* harmony default export */ var boost = ({
  /**
   * Set boost options
   * @name boost
   * @memberof Options
   * @type {object}
   * @property {object} boost boost object
   * @property {boolean} [boost.useCssRule=false] Avoid setting inline styles for each shape elements.
   * - **NOTE:**
   *   - Will append &lt;style> to the head tag and will add shpes' CSS rules dynamically.
   *   - For now, covers colors related properties (fill, stroke, etc.) only.
   * @property {boolean} [boost.useWorker=false] Use Web Worker as possible for processing.
   * - **NOTE:**
   *   - For now, only applies for data conversion at the initial time.
   *   - As of Web Worker's async nature, handling chart instance synchrously is not recommended.
   * @example
   *  boost: {
   *      useCssRule: true,
   *      useWorker: false
   *  }
   */
  boost_useCssRule: !1,
  boost_useWorker: !1
});
;// CONCATENATED MODULE: ./src/config/Options/data/data.ts

var data_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * data config options
 */
/* harmony default export */ var data = ({
  /**
   * Specify the key of x values in the data.<br><br>
   * We can show the data with non-index x values by this option. This option is required when the type of x axis is timeseries. If this option is set on category axis, the values of the data on the key will be used for category names.
   * @name data․x
   * @memberof Options
   * @type {string}
   * @default undefined
   * @example
   * data: {
   *   x: "date"
   * }
   */
  data_x: undefined,
  /**
   * Converts data id value
   * @name data․idConverter
   * @memberof Options
   * @type {Function}
   * @default function(id) { return id; }
   * @example
   * data: {
   *    idConverter: function(id) {
   *       // when id is 'data1', converts to be 'data2'
   *       // 'data2' should be given as the initial data value
   *       if (id === "data1") {
   *          return "data2";
   *       } else {
   *          return id;
   *       }
   *    }
   * }
   */
  data_idConverter: function data_idConverter(id) {
    _newArrowCheck(this, data_this);
    return id;
  }.bind(undefined),
  /**
   * Set custom data name.
   * If a name is set to `null`, the series is omitted from the legend.
   * @name data․names
   * @memberof Options
   * @type {object}
   * @default {}
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataName)
   * @example
   * data: {
   *   names: {
   *     data1: "Data Name 1",
   *     data2: "Data Name 2"
   *   }
   * }
   */
  data_names: {},
  /**
   * Set custom data class.<br><br>
   * If this option is specified, the element g for the data has an additional class that has the prefix 'bb-target-' (eg. bb-target-additional-data1-class).
   * @name data․classes
   * @memberof Options
   * @type {object}
   * @default {}
   * @example
   * data: {
   *   classes: {
   *     data1: "additional-data1-class",
   *     data2: "additional-data2-class"
   *   }
   * }
   */
  data_classes: {},
  /**
   * Set chart type at once.<br><br>
   * If this option is specified, the type will be applied to every data. This setting can be overwritten by data.types.<br><br>
   * **Available Values:**
   * - area
   * - area-line-range
   * - area-spline
   * - area-spline-range
   * - area-step
   * - bar
   * - bubble
   * - candlestick
   * - donut
   * - gauge
   * - line
   * - pie
   * - polar
   * - radar
   * - scatter
   * - spline
   * - step
   * - treemap
   * @name data․type
   * @memberof Options
   * @type {string}
   * @default "line"<br>NOTE: When importing shapes by ESM, `line()` should be specified for type.
   * @example
   * data: {
   *    type: "bar"
   * }
   * @example
   * // Generate chart by importing ESM
   * // Import types to be used only, where this will make smaller bundle size.
   * import bb, {
   *   area,
   *   areaLineRange,
   *   areaSpline,
   *   areaSplineRange,
   *   areaStep,
   *   bar,
   *   bubble,
   *   candlestick,
   *   donut,
   *   gauge,
   *   line,
   *   pie,
   *   polar,
   *   radar,
   *   scatter,
   *   spline,
   *   step,
   *   treemap
   * }
   *
   * bb.generate({
   *   ...,
   *   data: {
   *     type: bar()
   *   }
   * });
   */
  data_type: undefined,
  /**
   * Set chart type for each data.<br>
   * This setting overwrites data.type setting.
   * - **NOTE:** `radar` and `treemap` type can't be combined with other types.
   * @name data․types
   * @memberof Options
   * @type {object}
   * @default {}
   * @example
   * data: {
   *   types: {
   *     data1: "bar",
   *     data2: "spline"
   *   }
   * }
   * @example
   * // Generate chart by importing ESM
   * // Import types to be used only, where this will make smaller bundle size.
   * import bb, {
   *   area,
   *   areaLineRange,
   *   areaSpline,
   *   areaSplineRange,
   *   areaStep,
   *   bar,
   *   bubble,
   *   candlestick,
   *   donut,
   *   gauge,
   *   line,
   *   pie,
   *   polar,
   *   radar,
   *   scatter,
   *   spline,
   *   step,
   *   treemap
   * }
   *
   * bb.generate({
   *   ...,
   *   data: {
   *     types: {
   *       data1: bar(),
   *       data1: spline()
   *     }
   *   }
   * });
   */
  data_types: {},
  /**
   *  This option changes the order of stacking data and pieces of pie/donut.
   *  - If `null` specified, it will be the order the data loaded.
   *  - If function specified, it will be used as [Array.sort compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters)<br><br>
   *
   *  **Available Values:**
   *  - `desc`: In descending order
   *  - `asc`: In ascending order
   *  - `null`: It keeps the data load order
   *  - `function(data1, data2) { ... }`: Array.sort compareFunction
   *
   *  **NOTE**: order function, only works for Axis based types & Arc types, except `Radar` type.
   * @name data․order
   * @memberof Options
   * @type {string|Function|null}
   * @default desc
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataOrder)
   * @example
   * data: {
   *   // in descending order (default)
   *   order: "desc"
   *
   *   // in ascending order
   *   order: "asc"
   *
   *   // keeps data input order
   *   order: null
   *
   *   // specifying sort function
   *   order: function(a, b) {
   *       // param data passed format
   *       // {
   *       //   id: "data1", id_org: "data1", values: [
   *       //      {x: 5, value: 250, id: "data1", index: 5, name: "data1"},
   *       //       ...
   *       //   ]
   *       // }
   *
   *       const reducer = (p, c) => p + Math.abs(c.value);
   *       const aSum = a.values.reduce(reducer, 0);
   *       const bSum = b.values.reduce(reducer, 0);
   *
   *       // ascending order
   *       return aSum - bSum;
   *
   *       // descending order
   *       // return bSum - aSum;
   *   }
   * }
   */
  data_order: "desc",
  /**
   * Set groups for the data for stacking.
   * @name data․groups
   * @memberof Options
   * @type {Array}
   * @default []
   * @example
   * data: {
   *   groups: [
   *     ["data1", "data2"],
   *     ["data3"]
   *   ]
   * }
   */
  data_groups: [],
  /**
   * Set how zero value will be treated on groups.<br>
   * Possible values:
   * - `zero`: 0 will be positioned at absolute axis zero point.
   * - `positive`: 0 will be positioned at the top of a stack.
   * - `negative`: 0 will be positioned at the bottom of a stack.
   * @name data․groupsZeroAs
   * @memberof Options
   * @type {string}
   * @default "positive"
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.Groups)
   * @example
   * data: {
   *   groupsZeroAs: "zero" // "positive" or "negative"
   * }
   */
  data_groupsZeroAs: "positive",
  /**
   * Set color converter function.<br><br>
   * This option should a function and the specified function receives color (e.g. '#ff0000') and d that has data parameters like id, value, index, etc. And it must return a string that represents color (e.g. '#00ff00').
   * @name data․color
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataColor)
   * @example
   * data: {
   *   color: function(color, d) { ... }
   * }
   */
  data_color: undefined,
  /**
   * Set color for each data.
   * @name data․colors
   * @memberof Options
   * @type {object}
   * @default {}
   * @example
   * data: {
   *   colors: {
   *     data1: "#ff0000",
   *     data2: function(d) {
   *        return "#000";
   *     }
   *     ...
   *   }
   * }
   */
  data_colors: {},
  /**
   * Set labels options
   * @name data․labels
   * @memberof Options
   * @type {object}
   * @property {object} data Data object
   * @property {boolean} [data.labels=false] Show or hide labels on each data points
   * @property {boolean} [data.labels.centered=false] Centerize labels on `bar` shape. (**NOTE:** works only for 'bar' type)
   * @property {Function} [data.labels.format] Set formatter function for data labels.<br>
   * The formatter function receives 4 arguments such as `v, id, i, texts` and it **must return a string** (`\n` character will be used as line break) that will be shown as the label.<br><br>
   * The arguments are:<br>
   *  - `v` is the value of the data point where the label is shown.
   *  - `id` is the id of the data where the label is shown.
   *  - `i` is the index of the data series point where the label is shown.
   *  - `texts` is the array of whole corresponding data series' text labels.<br><br>
   * Formatter function can be defined for each data by specifying as an object and D3 formatter function can be set (ex. d3.format('$'))
   * @property {string|object} [data.labels.backgroundColors] Set label text background colors.
   * @property {string|object|Function} [data.labels.colors] Set label text colors.
   * @property {object|Function} [data.labels.position] Set each dataset position, relative the original.<br><br>
   * When function is specified, will receives 5 arguments such as `type, v, id, i, texts` and it must return a position number.<br><br>
   * The arguments are:<br>
   *  - `type` coordinate type string, which will be 'x' or 'y'.
   *  - `v` is the value of the data point where the label is shown.
   *  - `id` is the id of the data where the label is shown.
   *  - `i` is the index of the data series point where the label is shown.
   *  - `texts` is the array of whole corresponding data series' text labels.<br><br>
   * @property {number} [data.labels.position.x=0] x coordinate position, relative the original.
   * @property {number} [data.labels.position.y=0] y coordinate position, relative the original.
   * @property {object} [data.labels.rotate] Rotate label text. Specify degree value in a range of `0 ~ 360`.
   * - **NOTE:** Depend on rotate value, text position need to be adjusted manually(using `data.labels.position` option) to be shown nicely.
   * @memberof Options
   * @type {object}
   * @default {}
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataLabel)
   * @see [Demo: label colors](https://naver.github.io/billboard.js/demo/#Data.DataLabelColors)
   * @see [Demo: label format](https://naver.github.io/billboard.js/demo/#Data.DataLabelFormat)
   * @see [Demo: label multiline](https://naver.github.io/billboard.js/demo/#Data.DataLabelMultiline)
   * @see [Demo: label overlap](https://naver.github.io/billboard.js/demo/#Data.DataLabelOverlap)
   * @see [Demo: label position](https://naver.github.io/billboard.js/demo/#Data.DataLabelPosition)
   * @see [Demo: label rotate](https://naver.github.io/billboard.js/demo/#Data.DataLabelRotate)
   * @example
   * data: {
   *   labels: true,
   *
   *   // or set specific options
   *   labels: {
   *     format: function(v, id, i, texts) {
   *         ...
   *         // to multiline, return with '\n' character
   *         return "Line1\nLine2";
   *     },
   *
   *     // it's possible to set for each data
   *     format: {
   *         data1: function(v, id, i, texts) { ... },
   *         ...
   *     },
   *
   *     // align text to center of the 'bar' shape (works only for 'bar' type)
   *     centered: true,
   *
   *     // apply backgound color for label texts
   *     backgroundColors: "red",
   *
   *     // set differenct backround colors per dataset
   *     backgroundColors: {
   *          data1: "green",
   *          data2: "yellow"
   *     }
   *
   *     // apply for all label texts
   *     colors: "red",
   *
   *     // set different colors per dataset
   *     // for not specified dataset, will have the default color value
   *     colors: {
   *        data1: "yellow",
   *        data3: "green"
   *     },
   *
   *     // call back for label text color
   *     colors: function(color, d) {
   *         // color: the default data label color string
   *         // data: ex) {x: 0, value: 200, id: "data3", index: 0}
   *         ....
   *         return d.value > 200 ? "cyan" : color;
   *     },
   *
   *     // return x, y coordinate position
   *     // apt to handle each text position manually
   *     position: function(type, v, id, i, texts) {
   *         ...
   *         return type == "x" ? 10 : 20;
   *     },
   *
   *     // set x, y coordinate position
   *     position: {
   *        x: -10,
   *        y: 10
   *     },
   *
   *     // or set x, y coordinate position by each dataset
   *     position: {
   *        data1: {x: 5, y: 5},
   *        data2: {x: 10, y: -20}
   *     },
   *
   *	   // rotate degree for label text
   *     rotate: 90
   *   }
   * }
   */
  data_labels: {},
  data_labels_backgroundColors: undefined,
  data_labels_colors: undefined,
  data_labels_position: {},
  /**
   * Hide each data when the chart appears.<br><br>
   * If true specified, all of data will be hidden. If multiple ids specified as an array, those will be hidden.
   * @name data․hide
   * @memberof Options
   * @type {boolean|Array}
   * @default false
   * @example
   * data: {
   *   // all of data will be hidden
   *   hide: true
   *
   *   // specified data will be hidden
   *   hide: ["data1", ...]
   * }
   */
  data_hide: !1,
  /**
   * Filter values to be shown
   * The data value is the same as the returned by `.data()`.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   * @name data․filter
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * data: {
   *   // filter for id value
   *   filter: function(v) {
   *      // v: [{id: "data1", id_org: "data1", values: [
   *      //      {x: 0, value: 130, id: "data2", index: 0}, ...]
   *      //    }, ...]
   *      return v.id !== "data1";
   *   }
   */
  data_filter: undefined,
  /**
   * Set a callback for click event on each data point.<br><br>
   * This callback will be called when each data point clicked and will receive `d` and element as the arguments.
   * - `d` is the data clicked and element is the element clicked.
   * - `element` is the current interacting svg element.
   * - In this callback, `this` will be the Chart object.
   * @name data․onclick
   * @memberof Options
   * @type {Function}
   * @default function() {}
   * @example
   * data: {
   *     onclick: function(d, element) {
   *        // d - ex) {x: 4, value: 150, id: "data1", index: 4, name: "data1"}
   *        // element - <circle>
   *        ...
   *     }
   * }
   */
  data_onclick: function data_onclick() {
    _newArrowCheck(this, data_this);
  }.bind(undefined),
  /**
   * Set a callback for mouse/touch over event on each data point.<br><br>
   * This callback will be called when mouse cursor or via touch moves onto each data point and will receive `d` and `element` as the argument.
   * - `d` is the data where mouse cursor moves onto.
   * - `element` is the current interacting svg element.
   * - In this callback, `this` will be the Chart object.
   * @name data․onover
   * @memberof Options
   * @type {Function}
   * @default function() {}
   * @example
   * data: {
   *     onover: function(d, element) {
   *        // d - ex) {x: 4, value: 150, id: "data1", index: 4}
   *        // element - <circle>
   *        ...
   *     }
   * }
   */
  data_onover: function data_onover() {
    _newArrowCheck(this, data_this);
  }.bind(undefined),
  /**
   * Set a callback for mouse/touch out event on each data point.<br><br>
   * This callback will be called when mouse cursor or via touch moves out each data point and will receive `d` as the argument.
   * - `d` is the data where mouse cursor moves out.
   * - `element` is the current interacting svg element.
   * - In this callback, `this` will be the Chart object.
   * @name data․onout
   * @memberof Options
   * @type {Function}
   * @default function() {}
   * @example
   * data: {
   *     onout: function(d, element) {
   *        // d - ex) {x: 4, value: 150, id: "data1", index: 4}
   *        // element - <circle>
   *        ...
   *     }
   * }
   */
  data_onout: function data_onout() {
    _newArrowCheck(this, data_this);
  }.bind(undefined),
  /**
   * Set a callback for when data is shown.<br>
   * The callback will receive shown data ids in array.
   * @name data․onshown
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   *  data: {
   *    onshown: function(ids) {
   *      // ids - ["data1", "data2", ...]
   *      ...
   *    }
   *  }
   */
  data_onshown: undefined,
  /**
   * Set a callback for when data is hidden.<br>
   * The callback will receive hidden data ids in array.
   * @name data․onhidden
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   *  data: {
   *    onhidden: function(ids) {
   *      // ids - ["data1", "data2", ...]
   *      ...
   *    }
   *  }
   */
  data_onhidden: undefined,
  /**
   * Set a callback for minimum data
   * - **NOTE:** For 'area-line-range' and 'area-spline-range', `mid` data will be taken for the comparison
   * @name data․onmin
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.OnMinMaxCallback)
   * @example
   *  onmin: function(data) {
   *    // data - ex) [{x: 3, value: 400, id: "data1", index: 3}, ... ]
   *    ...
   *  }
   */
  data_onmin: undefined,
  /**
   * Set a callback for maximum data
   * - **NOTE:** For 'area-line-range' and 'area-spline-range', `mid` data will be taken for the comparison
   * @name data․onmax
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.OnMinMaxCallback)
   * @example
   *  onmax: function(data) {
   *    // data - ex) [{x: 3, value: 400, id: "data1", index: 3}, ... ]
   *    ...
   *  }
   */
  data_onmax: undefined,
  /**
   * Load a CSV or JSON file from a URL. NOTE that this will not work if loading via the "file://" protocol as the most browsers will block XMLHTTPRequests.
   * @name data․url
   * @memberof Options
   * @type {string}
   * @default undefined
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.LoadData)
   * @example
   * data: {
   *     url: "/data/test.csv"
   * }
   */
  data_url: undefined,
  /**
   * XHR header value
   * - **NOTE:** Should be used with `data.url` option
   * @name data․headers
   * @memberof Options
   * @type {string}
   * @default undefined
   * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
   * @example
   * data: {
   *     url: "/data/test.csv",
   *     headers: {
   *        "Content-Type": "text/xml",
   *        ...
   *     }
   * }
   */
  data_headers: undefined,
  /**
   * Parse a JSON object for data. See also data.keys.
   * @name data․json
   * @memberof Options
   * @type {Array}
   * @default undefined
   * @see [data․keys](#.data%25E2%2580%25A4keys)
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.JSONData)
   * @example
   * data: {
   *     json: [
   *       {name: "www.site1.com", upload: 200, download: 200, total: 400},
   *       {name: "www.site2.com", upload: 100, download: 300, total: 400},
   *       {name: "www.site3.com", upload: 300, download: 200, total: 500},
   *       {name: "www.site4.com", upload: 400, download: 100, total: 500}
   *     ],
   *     keys: {
   *       // case 1: specify 'x' key for category axis
   *       x: "name", // 'name' key will be used as category x axis values
   *       value: ["upload", "download"]
   *
   *       // case 2: without 'x' key for non-category axis
   *       value: ["upload", "download"]
   *     }
   * }
   */
  data_json: undefined,
  /**
   * Load data from a multidimensional array, with the first element containing the data names, the following containing related data in that order.
   * @name data․rows
   * @memberof Options
   * @type {Array}
   * @default undefined
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.RowOrientedData)
   * @example
   * data: {
   *   rows: [
   *     ["A", "B", "C"],
   *     [90, 120, 300],
   *     [40, 160, 240],
   *     [50, 200, 290],
   *     [120, 160, 230],
   *     [80, 130, 300],
   *     [90, 220, 320]
   *   ]
   * }
   *
   * // for 'bar' type, data can contain:
   * // - an array of [start, end] data following the order
   * data: {
   *   rows: [
   *      ["data1", "data2"],
   *      [[100, 150], 120],
   *      [[200, 300], 55],
   *      [[-400, 500], 60]
   *   ],
   *   type: "bar"
   * }
   *
   * // for 'range' types('area-line-range' or 'area-spline-range'), data should contain:
   * // - an array of [high, mid, low] data following the order
   * // - or an object with 'high', 'mid' and 'low' key value
   * data: {
   *   rows: [
   *      ["data1", "data2"],
   *      [
   *        // or {high:150, mid: 140, low: 110}, 120
   *        [150, 140, 110], 120
   *      ],
   *      [[155, 130, 115], 55],
   *      [[160, 135, 120], 60]
   *   ],
   *   types: {
   *       data1: "area-line-range",
   *       data2: "line"
   *   }
   * }
   *
   * // for 'bubble' type, data can contain dimension value:
   * // - an array of [y, z] data following the order
   * // - or an object with 'y' and 'z' key value
   * // 'y' is for y axis coordination and 'z' is the bubble radius value
   * data: {
   *   rows: [
   *      ["data1", "data2"],
   *      [
   *        // or {y:10, z: 140}, 120
   *        [10, 140], 120
   *      ],
   *      [[100, 30], 55],
   *      [[50, 100], 60]
   *   ],
   *   types: {
   *       data1: "bubble",
   *       data2: "line"
   *   }
   * }
   *
   * // for 'canlestick' type, data should contain:
   * // - an array of [open, high, low, close, volume(optional)] data following the order
   * // - or an object with 'open', 'high', 'low', 'close' and 'value'(optional) key value
   * data: {
   *   rows: [
   *      ["data1", "data2"],
   *		[
   *			// open, high, low, close, volume (optional)
   *			{open: 1300, high: 1369, low: 1200, close: 1339, volume: 100},
   *			[1000, 1100, 850, 870]
   *		],
   *		[
   *			{open: 1348, high: 1371, low: 1271, close: 1320},
   *			[870, 1250, 830, 1200, 50]
   *		]
   *   ],
   *   type: "candlestick"
   * }
   */
  data_rows: undefined,
  /**
   * Load data from a multidimensional array, with each element containing an array consisting of a datum name and associated data values.
   * @name data․columns
   * @memberof Options
   * @type {Array}
   * @default undefined
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.ColumnOrientedData)
   * @example
   * data: {
   *   columns: [
   *      ["data1", 30, 20, 50, 40, 60, 50],
   *      ["data2", 200, 130, 90, 240, 130, 220],
   *      ["data3", 300, 200, 160, 400, 250, 250]
   *   ]
   * }
   *
   * // for 'bar' type, data can contain:
   * // - an array of [start, end] data following the order
   * data: {
   *   columns: [
   *     ["data1", -100, 50, [100, 200], [200, 300]],
   *     ["data2", -200, 300, [-100, 100], [-50, -30]],
   *   ],
   *   type: "bar"
   * }
   *
   * // for 'range' types('area-line-range' or 'area-spline-range'), data should contain:
   * // - an array of [high, mid, low] data following the order
   * // - or an object with 'high', 'mid' and 'low' key value
   * data: {
   *   columns: [
   *      ["data1",
   *          [150, 140, 110],  // or {high:150, mid: 140, low: 110}
   *          [150, 140, 110],
   *          [150, 140, 110]
   *      ]
   *   ],
   *   type: "area-line-range"
   * }
   *
   * // for 'bubble' type, data can contain dimension value:
   * // - an array of [y, z] data following the order
   * // - or an object with 'y' and 'z' key value
   * // 'y' is for y axis coordination and 'z' is the bubble radius value
   * data: {
   *   columns: [
   *      ["data1",
   *          [10, 140],  // or {y:10, z: 140}
   *          [100, 30],
   *          [50, 100]
   *      ]
   *   ],
   *   type: "bubble"
   * }
   *
   * // for 'canlestick' type, data should contain:
   * // - an array of [open, high, low, close, volume(optional)] data following the order
   * // - or an object with 'open', 'high', 'low', 'close' and 'value'(optional) key value
   * data: {
   *   columns: [
   *      ["data1",
   *          [1000, 1100, 850, 870, 100],  // or {open:1000, high: 1100, low: 870, volume: 100}
   *          [870, 1250, 830, 1200]  // 'volume' can be omitted
   *      ]
   *   ],
   *   type: "candlestick"
   * }
   */
  data_columns: undefined,
  /**
   * Used if loading JSON via data.url.
   * - **Available Values:**
   *   - json
   *   - csv
   *   - tsv
   * @name data․mimeType
   * @memberof Options
   * @type {string}
   * @default csv
   * @example
   * data: {
   *     mimeType: "json"
   * }
   */
  data_mimeType: "csv",
  /**
   * Choose which JSON object keys correspond to desired data.
   * - **NOTE:** Only for JSON object given as array.
   * @name data․keys
   * @memberof Options
   * @type {string}
   * @default undefined
   * @example
   * data: {
   *     json: [
   *       {name: "www.site1.com", upload: 200, download: 200, total: 400},
   *       {name: "www.site2.com", upload: 100, download: 300, total: 400},
   *       {name: "www.site3.com", upload: 300, download: 200, total: 500},
   *       {name: "www.site4.com", upload: 400, download: 100, total: 500}
   *     ],
   *     keys: {
   *       // case 1: specify 'x' key for category axis
   *       x: "name", // 'name' key will be used as category x axis values
   *       value: ["upload", "download"]
   *
   *       // case 2: without 'x' key for non-category axis
   *       value: ["upload", "download"]
   *     }
   * }
   */
  data_keys: undefined,
  /**
   * Set text label to be displayed when there's no data to show.
   * - ex. Toggling all visible data to not be shown, unloading all current data, etc.
   * @name data․empty․label․text
   * @memberof Options
   * @type {string}
   * @default ""
   * @example
   * data: {
   *   empty: {
   *     label: {
   *       text: "No Data"
   *     }
   *   }
   * }
   */
  data_empty_label_text: ""
});
;// CONCATENATED MODULE: ./src/config/Options/common/color.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * color config options
 */
/* harmony default export */ var color = ({
  /**
   * Set color of the data values
   * @name color
   * @memberof Options
   * @type {object}
   * @property {object} color color object
   * @property {string|object|Function} [color.onover] Set the color value for each data point when mouse/touch onover event occurs.
   * @property {Array|null} [color.pattern=[]] Set custom color pattern. Passing `null` will not set a color for these elements, which requires the usage of custom CSS-based theming to work.
   * @property {Function} [color.tiles] if defined, allows use svg's patterns to fill data area. It should return an array of [SVGPatternElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPatternElement).
   *  - **NOTE:** The pattern element's id will be defined as `bb-colorize-pattern-$COLOR-VALUE`.<br>
   *    ex. When color pattern value is `['red', '#fff']` and defined 2 patterns,then ids for pattern elements are:<br>
   *    - `bb-colorize-pattern-red`
   *    - `bb-colorize-pattern-fff`
   * @property {object} [color.threshold] color threshold for gauge and tooltip color
   * @property {string} [color.threshold.unit] If set to `value`, the threshold will be based on the data value. Otherwise it'll be based on equation of the `threshold.max` option value.
   * @property {Array} [color.threshold.values] Threshold values for each steps
   * @property {number} [color.threshold.max=100] The base value to determine threshold step value condition. When the given value is 15 and max 10, then the value for threshold is `15*100/10`.
   * @example
   *  color: {
   *      pattern: ["#1f77b4", "#aec7e8", ...],
   *
   *      // Set colors' patterns
   *      // it should return an array of SVGPatternElement
   *      tiles: function() {
   *         var pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
   *         var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
   *         var circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
   *
   *         pattern.setAttribute("patternUnits", "userSpaceOnUse");
   *         pattern.setAttribute("width", "32");
   *         pattern.setAttribute("height", "32");
   *
   *         g.style.fill = "#000";
   *         g.style.opacity = "0.2";
   *
   *         circle1.setAttribute("cx", "3");
   *         circle1.setAttribute("cy", "3");
   *         circle1.setAttribute("r", "3");
   *
   *         g.appendChild(circle1);
   *         pattern.appendChild(g);
   *
   *         return [pattern];
   *      },
   *
   *      // for threshold usage, pattern values should be set for each steps
   *      pattern: ["grey", "green", "yellow", "orange", "red"],
   *      threshold: {
   *          unit: "value",
   *
   *          // when value is 20 => 'green', value is 40 => 'orange' will be set.
   *          values: [10, 20, 30, 40, 50],
   *
   *          // the equation for max:
   *          // - unit == 'value': max => 30
   *          // - unit != 'value': max => value*100/30
   *          max: 30
   *      },
   *
   *      // set all data to 'red'
   *      onover: "red",
   *
   *      // set different color for data
   *      onover: {
   *          data1: "red",
   *          data2: "yellow"
   *      },
   *
   *      // will pass data object to the callback
   *      onover: function(d) {
   *          return d.id === "data1" ? "red" : "green";
   *      }
   *  }
   */
  color_pattern: [],
  color_tiles: undefined,
  color_threshold: {},
  color_onover: undefined
});
;// CONCATENATED MODULE: ./src/config/Options/interaction/interaction.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * interaction config options
 */
/* harmony default export */ var interaction = ({
  /**
   * Interaction options
   * @name interaction
   * @memberof Options
   * @type {object}
   * @property {object} interaction Intersection object
   * @property {boolean} [interaction.enabled=true] Indicate if the chart should have interactions.<br>
   *     If `false` is set, all of interactions (showing/hiding tooltip, selection, mouse events, etc) will be disabled.
   * @property {boolean} [interaction.brighten=true] Make brighter for the selected area (ex. 'pie' type data selected area)
   * @property {boolean} [interaction.inputType.mouse=true] enable or disable mouse interaction
   * @property {boolean} [interaction.inputType.touch=true] enable or disable  touch interaction
   * @property {boolean|number} [interaction.inputType.touch.preventDefault=false] enable or disable to call event.preventDefault on touchstart & touchmove event. It's usually used to prevent document scrolling.
   * @see [Demo: touch.preventDefault](https://naver.github.io/billboard.js/demo/#Interaction.PreventScrollOnTouch)
   * @example
   * interaction: {
   *    enabled: false,
   *    brighten: false,
   *    inputType: {
   *        mouse: true,
   *        touch: false
   *
   *        // or declare preventDefault explicitly.
   *        // In this case touch inputType is enabled by default
   *        touch: {
   *            preventDefault: true
   *
   *            // or threshold pixel value (pixel moved from touchstart to touchmove)
   *            preventDefault: 5
   *        }
   *    }
   * }
   */
  interaction_enabled: !0,
  interaction_brighten: !0,
  interaction_inputType_mouse: !0,
  interaction_inputType_touch: {}
});
;// CONCATENATED MODULE: ./src/config/Options/common/legend.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * legend config options
 */
/* harmony default export */ var legend = ({
  /**
   * Legend options
   * @name legend
   * @memberof Options
   * @type {object}
   * @property {object} legend Legend object
   * @property {boolean} [legend.show=true] Show or hide legend.
   * @property {boolean} [legend.hide=false] Hide legend
   *  If true given, all legend will be hidden. If string or array given, only the legend that has the id will be hidden.
   * @property {string|HTMLElement} [legend.contents.bindto=undefined] Set CSS selector or element reference to bind legend items.
   * - **NOTE:** Should be used along with `legend.contents.template`.
   * @property {string|Function} [legend.contents.template="<span style='color:#fff;padding:5px;background-color:{=COLOR}'>{=TITLE}</span>"] Set item's template.<br>
   *  - If set `string` value, within template the 'color' and 'title' can be replaced using template-like syntax string:
   *    - {=COLOR}: data color value
   *    - {=TITLE}: data title value
   *  - If set `function` value, will pass following arguments to the given function:
   *   - title {string}: data's id value
   *   - color {string}: color string
   *   - data {Array}: data array
   * @property {string} [legend.position=bottom] Change the position of legend.<br>
   *  Available values are: `bottom`, `right` and `inset` are supported.
   * @property {object} [legend.inset={anchor: 'top-left',x: 10,y: 0,step: undefined}] Change inset legend attributes.<br>
   *  This option accepts object that has the keys `anchor`, `x`, `y` and `step`.
   *  - **anchor** decides the position of the legend:
   *   - top-left
   *   - top-right
   *   - bottom-left
   *   - bottom-right
   *  - **x** and **y**:
   *   - set the position of the legend based on the anchor.
   *  - **step**:
   *   - defines the max step the legend has (e.g. If 2 set and legend has 3 legend item, the legend 2 columns).
   * @property {boolean} [legend.equally=false] Set to all items have same width size.
   * @property {number} [legend.padding=0] Set padding value
   * @property {boolean} [legend.item.interaction=true] Set legend item interaction.
   *  - **NOTE:**
   *    - This setting will not have effect on `.toggle()` method.
   *    - `legend.item.onXXX` listener options will work if set, regardless of this option value.
   * @property {boolean} [legend.item.interaction.dblclick=false] Set legend item to interact on double click.
   *  - **NOTE:**
   *    - Double clicking will make focused clicked dataseries only, hiding all others.
   *      - for single click case, `click + altKey(Win)/optionKey(Mac OS)` to have same effect.
   *    - To return initial state(which all dataseries are showing), double click current focused legend item again.
   *      - for single click case, `click + altKey(Win)/optionKey(Mac OS)` to have same effect.
   *    - In this case, default `click` interaction will be disabled.
   * @property {Function} [legend.item.onclick=undefined] Set click event handler to the legend item.
   *  - **NOTE:**
   *    - When set, default `click` interaction will be disabled.
   *    - When `interaction.dblclick=true` is set, will be called on double click.
   * @property {Function} [legend.item.onover=undefined] Set mouse/touch over event handler to the legend item.
   *  - **NOTE:** When set, default `mouseover` interaction will be disabled.
   * @property {Function} [legend.item.onout=undefined] Set mouse/touch out event handler to the legend item.
   *  - **NOTE:** When set, default `mouseout` interaction will be disabled.
   * @property {number} [legend.item.tile.width=10] Set width for 'rectangle' legend item tile element.
   * @property {number} [legend.item.tile.height=10] Set height for 'rectangle' legend item tile element.
   * @property {number} [legend.item.tile.r=5] Set the radius for 'circle' legend item tile type.
   * @property {string} [legend.item.tile.type="rectangle"] Set legend item shape type.<br>
   * - **Available Values:**
   *   - circle
   *   - rectangle
   * @property {boolean} [legend.usePoint=false] Whether to use custom points in legend.
   * @see [Demo: item.interaction](https://naver.github.io/billboard.js/demo/#Legend.LegendItemInteraction)
   * @see [Demo: item.tile.type](https://naver.github.io/billboard.js/demo/#Legend.LegendItemTileType)
   * @see [Demo: position](https://naver.github.io/billboard.js/demo/#Legend.LegendPosition)
   * @see [Demo: contents.template](https://naver.github.io/billboard.js/demo/#Legend.LegendTemplate1)
   * @see [Demo: usePoint](https://naver.github.io/billboard.js/demo/#Legend.usePoint)
   * @example
   *  legend: {
   *      show: true,
   *      hide: true,
   *      //or hide: "data1"
   *      //or hide: ["data1", "data2"]
   *      contents: {
   *          bindto: "#legend",   // <ul id='legend'></ul>
   *
   *          // will be as: <li style='background-color:#1f77b4'>data1</li>
   *          template: "<li style='background-color:{=COLOR}'>{=TITLE}</li>"
   *
   *          // or using function
   *          template: function(id, color, data) {
   *               // if you want omit some legend, return falsy value
   *               if (id !== "data1") {
   *                    return "<li style='background-color:"+ color +">"+ id +"</li>";
   *               }
   *          }
   *      },
   *      position: "bottom",  // bottom, right, inset
   *      inset: {
   *          anchor: "top-right"  // top-left, top-right, bottom-left, bottom-right
   *          x: 20,
   *          y: 10,
   *          step: 2
   *      },
   *      equally: false,
   *      padding: 10,
   *      item: {
   *          // will disable default interaction
   *          interaction: false,
   *
   *          // set legend interact on double click
   *          // by double clicking, will make focused clicked dataseries only, hiding all others.
   *          interaction: {
   *            dblclick: true
   *          }
   *
   *          // when set below callback, will disable corresponding default interactions
   *          onclick: function(id) { ... },
   *          onover: function(id) { ... },
   *          onout: function(id) { ... },
   *
   *          // set tile's size
   *          tile: {
   *              // set tile type
   *              type: "circle"  // or "rectangle" (default)
   *
   *              // width & height, are only applicable for 'rectangle' legend type
   *              width: 15,
   *              height: 15
   *
   *              // radis is only applicable for 'circle' legend type
   *              r: 10
   *          }
   *      },
   *      usePoint: true
   *  }
   */
  legend_contents_bindto: undefined,
  legend_contents_template: "<span style='color:#fff;padding:5px;background-color:{=COLOR}'>{=TITLE}</span>",
  legend_equally: !1,
  legend_hide: !1,
  legend_inset_anchor: "top-left",
  legend_inset_x: 10,
  legend_inset_y: 0,
  legend_inset_step: undefined,
  legend_item_interaction: !0,
  legend_item_dblclick: !1,
  legend_item_onclick: undefined,
  legend_item_onover: undefined,
  legend_item_onout: undefined,
  legend_item_tile_width: 10,
  legend_item_tile_height: 10,
  legend_item_tile_r: 5,
  legend_item_tile_type: "rectangle",
  legend_padding: 0,
  legend_position: "bottom",
  legend_show: !0,
  legend_usePoint: !1
});
;// CONCATENATED MODULE: ./src/config/Options/common/title.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * title config options
 */
/* harmony default export */ var title = ({
  /**
   * Set title options
   * @name title
   * @memberof Options
   * @type {object}
   * @property {object} title Title object
   * @property {string} [title.text] Title text. If contains `\n`, it's used as line break allowing multiline title.
   * @property {number} [title.padding.top=0] Top padding value.
   * @property {number} [title.padding.right=0] Right padding value.
   * @property {number} [title.padding.bottom=0] Bottom padding value.
   * @property {number} [title.padding.left=0] Left padding value.
   * @property {string} [title.position=center] Available values are: 'center', 'right' and 'left'.
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Title.MultilinedTitle)
   * @example
   *  title: {
   *      text: "Title Text",
   *
   *      // or Multiline title text
   *      text: "Main title text\nSub title text",
   *
   *      padding: {
   *          top: 10,
   *          right: 10,
   *          bottom: 10,
   *          left: 10
   *      },
   *      position: "center"
   *  }
   */
  title_text: undefined,
  title_padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  title_position: "center"
});
;// CONCATENATED MODULE: ./src/config/Options/common/tooltip.ts

var tooltip_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * tooltip config options
 */
/* harmony default export */ var tooltip = ({
  /**
   * Tooltip options
   * @name tooltip
   * @memberof Options
   * @type {object}
   * @property {object} tooltip Tooltip object
   * @property {boolean} [tooltip.show=true] Show or hide tooltip.
   * @property {boolean} [tooltip.doNotHide=false] Make tooltip keep showing not hiding on interaction.
   * @property {boolean} [tooltip.grouped=true] Set if tooltip is grouped or not for the data points.
   *   - **NOTE:** The overlapped data points will be displayed as grouped even if set false.
   * @property {boolean} [tooltip.linked=false] Set if tooltips on all visible charts with like x points are shown together when one is shown.
   * @property {string} [tooltip.linked.name=""] Groping name for linked tooltip.<br>If specified, linked tooltip will be groped interacting to be worked only with the same name.
   * @property {Function} [tooltip.format.title] Set format for the title of tooltip.<br>
   *  Specified function receives x of the data point to show.
   * @property {Function} [tooltip.format.name] Set format for the name of each data in tooltip.<br>
   *  Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not donut/pie/gauge.
   * @property {Function} [tooltip.format.value] Set format for the value of each data value in tooltip. If undefined returned, the row of that value will be skipped to be called.
   *  - Will pass following arguments to the given function:
   *    - `value {string}`: Value of the data point. If data row contains multiple or ranged(ex. candlestick, area range, etc.) value, formatter will be called as value length.
   *    - `ratio {number}`: Ratio of the data point in the `pie/donut/gauge` and `area/bar` when contains grouped data. Otherwise is `undefined`.
   *    - `id {string}`: id of the data point
   *    - `index {number}`: Index of the data point
   * @property {Function} [tooltip.position] Set custom position function for the tooltip.<br>
   *  This option can be used to modify the tooltip position by returning object that has top and left.
   *  - Will pass following arguments to the given function:
   *    - `data {Array}`: Current selected data array object.
   *    - `width {number}`: Width of tooltip.
   *    - `height {number}`: Height of tooltip.
   *    - `element {SVGElement}`: Tooltip event bound element
   *    - `pos {object}`: Current position of the tooltip.
   * @property {Function|object} [tooltip.contents] Set custom HTML for the tooltip.<br>
   *  If tooltip.grouped is true, data includes multiple data points.<br><br>
   *  Specified function receives `data` array and `defaultTitleFormat`, `defaultValueFormat` and `color` functions of the data point to show.
   *  - **Note:**
   *    - defaultTitleFormat:
   *      - if `axis.x.tick.format` option will be used if set.
   *      - otherwise, will return function based on tick format type(category, timeseries).
   *    - defaultValueFormat:
   *	    - for Arc type (except gauge, radar), the function will return value from `(ratio * 100).toFixed(1)`.
   *	    - for Axis based types, will be used `axis.[y|y2].tick.format` option value if is set.
   *	    - otherwise, will parse value and return as number.
   * @property {string|HTMLElement} [tooltip.contents.bindto=undefined] Set CSS selector or element reference to bind tooltip.
   *  - **NOTE:** When is specified, will not be updating tooltip's position.
   * @property {string} [tooltip.contents.template=undefined] Set tooltip's template.<br><br>
   *  Within template, below syntax will be replaced using template-like syntax string:
   *    - **{{ ... }}**: the doubly curly brackets indicate loop block for data rows.
   *    - **{=CLASS_TOOLTIP}**: default tooltip class name `bb-tooltip`.
   *    - **{=CLASS_TOOLTIP_NAME}**: default tooltip data class name (ex. `bb-tooltip-name-data1`)
   *    - **{=TITLE}**: title value.
   *    - **{=COLOR}**: data color.
   *    - **{=VALUE}**: data value.
   * @property {object} [tooltip.contents.text=undefined] Set additional text content within data loop, using template syntax.
   *  - **NOTE:** It should contain `{ key: Array, ... }` value
   *    - 'key' name is used as substitution within template as '{=KEY}'
   *    - The value array length should match with the data length
   * @property {boolean} [tooltip.init.show=false] Show tooltip at the initialization.
   * @property {number} [tooltip.init.x=0] Set x Axis index(or index for Arc(donut, gauge, pie) types) to be shown at the initialization.
   * @property {object} [tooltip.init.position] Set the position of tooltip at the initialization.
   * @property {Function} [tooltip.onshow] Set a callback that will be invoked before the tooltip is shown.
   * @property {Function} [tooltip.onhide] Set a callback that will be invoked before the tooltip is hidden.
   * @property {Function} [tooltip.onshown] Set a callback that will be invoked after the tooltip is shown
   * @property {Function} [tooltip.onhidden] Set a callback that will be invoked after the tooltip is hidden.
   * @property {string|Function|null} [tooltip.order=null] Set tooltip data display order.<br><br>
   *  **Available Values:**
   *  - `desc`: In descending data value order
   *  - `asc`: In ascending data value order
   *  - `null`: It keeps the data display order<br>
   *     **NOTE:** When `data.groups` is set, the order will follow as the stacked graph order.<br>
   *      If want to order as data bound, set any value rather than asc, desc or null. (ex. empty string "")
   *  - `function(data1, data2) { ... }`: [Array.sort compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters)
   * @see [Demo: Hide Tooltip](https://naver.github.io/billboard.js/demo/#Tooltip.HideTooltip)
   * @see [Demo: Tooltip Grouping](https://naver.github.io/billboard.js/demo/#Tooltip.TooltipGrouping)
   * @see [Demo: Tooltip Format](https://naver.github.io/billboard.js/demo/#Tooltip.TooltipFormat)
   * @see [Demo: Linked Tooltip](https://naver.github.io/billboard.js/demo/#Tooltip.LinkedTooltips)
   * @see [Demo: Tooltip Position](https://naver.github.io/billboard.js/demo/#Tooltip.TooltipPosition)
   * @see [Demo: Tooltip Template](https://naver.github.io/billboard.js/demo/#Tooltip.TooltipTemplate)
   * @example
   *  tooltip: {
   *      show: true,
   *      doNotHide: true,
   *      grouped: false,
   *      format: {
   *          title: function(x) { return "Data " + x; },
   *          name: function(name, ratio, id, index) { return name; },
   *
   *          // If data row contains multiple or ranged(ex. candlestick, area range, etc.) value,
   *          // formatter will be called as value length times.
   *          value: function(value, ratio, id, index) { return ratio; }
   *      },
   *      position: function(data, width, height, element, pos) {
   *          // data: [{x, index, id, name, value}, ...]
   *          // width: Tooltip width
   *          // height: Tooltip height
   *          // element: Tooltip event bound element
   *          // pos: {
   *          //   x: Current mouse event x position,
   *          //   y: Current mouse event y position,
   *          //   xAxis: Current x Axis position (the value is given for axis based chart type only)
   *          //   yAxis: Current y Axis position value or function(the value is given for axis based chart type only)
   *          // }
   *
   *          // yAxis will work differently per data lenghts
   *          // - a) Single data: `yAxis` will return `number` value
   *          // - b) Multiple data: `yAxis` will return a function with property value
   *
   *          // a) Single data:
   *          // Get y coordinate
   *          pos.yAxis; // y axis coordinate value of current data point
   *
   *          // b) Multiple data:
   *          // Get y coordinate of value 500, where 'data1' scales(y or y2).
   *          // When 'data.axes' option is used, data can bound to different axes.
   *          // - when "data.axes={data1: 'y'}", wil return y value from y axis scale.
   *          // - when "data.axes={data1: 'y2'}", wil return y value from y2 axis scale.
   *          pos.yAxis(500, "data1"); // will return y coordinate value of data1
   *
   *          pos.yAxis(500); // get y coordinate with value of 500, using y axis scale
   *          pos.yAxis(500, null, "y2"); // get y coordinate with value of 500, using y2 axis scale
   *
   *          return {
   *            top: 0,
   *            left: 0
   *          }
   *      },
   *
   *      contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
   *          return ... // formatted html as you want
   *      },
   *
   *       // specify tooltip contents using template
   *       // - example of HTML returned:
   *       // <ul class="bb-tooltip">
   *       //   <li class="bb-tooltip-name-data1"><span>250</span><br><span style="color:#00c73c">data1</span></li>
   *       //   <li class="bb-tooltip-name-data2"><span>50</span><br><span style="color:#fa7171">data2</span></li>
   *       // </ul>
   *       contents: {
   *      	bindto: "#tooltip",
   *      	template: '<ul class={=CLASS_TOOLTIP}>{{' +
   *      			'<li class="{=CLASS_TOOLTIP_NAME}"><span>{=VALUE}</span><br>' +
   *      			'<span style=color:{=COLOR}>{=NAME}</span></li>' +
   *      		'}}</ul>'
   *      }
   *
   *       // with additional text value
   *       // - example of HTML returned:
   *       // <ul class="bb-tooltip">
   *       //   <li class="bb-tooltip-name-data1"><span>250</span><br>comment1<span style="color:#00c73c">data1</span>text1</li>
   *       //   <li class="bb-tooltip-name-data2"><span>50</span><br>comment2<span style="color:#fa7171">data2</span>text2</li>
   *       // </ul>
   *       contents: {
   *      	bindto: "#tooltip",
   *      	text: {
   *      		// a) 'key' name is used as substitution within template as '{=KEY}'
   *      		// b) the length should match with the data length
   *      		VAR1: ["text1", "text2"],
   *      		VAR2: ["comment1", "comment2"],
   *      	},
   *      	template: '<ul class={=CLASS_TOOLTIP}>{{' +
   *      			'<li class="{=CLASS_TOOLTIP_NAME}"><span>{=VALUE}</span>{=VAR2}<br>' +
   *      			'<span style=color:{=COLOR}>{=NAME}</span>{=VAR1}</li>' +
   *      		'}}</ul>'
   *      }
   *
   *      // sort tooltip data value display in ascending order
   *      order: "asc",
   *
   *      // specifying sort function
   *      order: function(a, b) {
   *         // param data passed format
   *         {x: 5, value: 250, id: "data1", index: 5, name: "data1"}
   *           ...
   *      },
   *
   *      // show at the initialization
   *      init: {
   *          show: true,
   *          x: 2, // x Axis index (or index for Arc(donut, gauge, pie) types)
   *          position: {
   *              top: "150px",  // specify as number or as string with 'px' unit string
   *              left: 250  // specify as number or as string with 'px' unit string
   *          }
   *      },
   *
   *      // fires prior tooltip is shown
   *      onshow: function(selectedData) {
   *      	// current dataset selected
   *      	// ==> [{x: 4, value: 150, id: "data2", index: 4, name: "data2"}, ...]
   *      	selectedData;
   *      },
   *
   *      // fires prior tooltip is hidden
   *      onhide: function(selectedData) {
   *      	// current dataset selected
   *      	// ==> [{x: 4, value: 150, id: "data2", index: 4, name: "data2"}, ...]
   *      	selectedData;
   *      },
   *
   *      // fires after tooltip is shown
   *      onshown: function(selectedData) {
   *      	// current dataset selected
   *      	// ==> [{x: 4, value: 150, id: "data2", index: 4, name: "data2"}, ...]
   *      	selectedData;
   *      },
   *
   *      // fires after tooltip is hidden
   *      onhidden: function(selectedData) {
   *      	// current dataset selected
   *      	// ==> [{x: 4, value: 150, id: "data2", index: 4, name: "data2"}, ...]
   *      	selectedData;
   *      },
   *
   *      // Link any tooltips when multiple charts are on the screen where same x coordinates are available
   *      // Useful for timeseries correlation
   *      linked: true,
   *
   *      // Specify name to interact those with the same name only.
   *      linked: {
   *          name: "some-group"
   *      }
   *  }
   */
  tooltip_show: !0,
  tooltip_doNotHide: !1,
  tooltip_grouped: !0,
  tooltip_format_title: undefined,
  tooltip_format_name: undefined,
  tooltip_format_value: undefined,
  tooltip_position: undefined,
  tooltip_contents: {},
  tooltip_init_show: !1,
  tooltip_init_x: 0,
  tooltip_init_position: undefined,
  tooltip_linked: !1,
  tooltip_linked_name: "",
  tooltip_onshow: function tooltip_onshow() {
    _newArrowCheck(this, tooltip_this);
  }.bind(undefined),
  tooltip_onhide: function tooltip_onhide() {
    _newArrowCheck(this, tooltip_this);
  }.bind(undefined),
  tooltip_onshown: function tooltip_onshown() {
    _newArrowCheck(this, tooltip_this);
  }.bind(undefined),
  tooltip_onhidden: function tooltip_onhidden() {
    _newArrowCheck(this, tooltip_this);
  }.bind(undefined),
  tooltip_order: null
});
;// CONCATENATED MODULE: ./src/config/Options/Options.ts


function Options_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Options_objectSpread(e) { for (var r = 1, t; r < arguments.length; r++) { t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Options_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Options_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
// common










/**
 * Class to set options on generating chart.
 * - It's instantiated internally, not exposed for public.
 * @class Options
 * @see {@link bb.generate} to use these options on generating the chart
 */
let Options = /*#__PURE__*/function () {
  Options.setOptions = function setOptions(options) {
    var _this = this;
    this.data = options.reduce(function (a, c) {
      _newArrowCheck(this, _this);
      return Options_objectSpread(Options_objectSpread({}, a), c);
    }.bind(this), this.data);
  };
  function Options() {
    return deepClone(main, boost, data, color, interaction, legend, title, tooltip, Options.data);
  }
  return Options;
}();
Options.data = {};

;// CONCATENATED MODULE: ./src/module/Cache.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Constant for cache key
 * - NOTE: Prefixed with '$', will be resetted when .load() is called
 * @private
 */
const KEY = {
  bubbleBaseLength: "$baseLength",
  colorPattern: "__colorPattern__",
  dataMinMax: "$dataMinMax",
  dataTotalSum: "$dataTotalSum",
  dataTotalPerIndex: "$totalPerIndex",
  legendItemTextBox: "legendItemTextBox",
  radarPoints: "$radarPoints",
  setOverOut: "setOverOut",
  callOverOutForTouch: "callOverOutForTouch",
  textRect: "textRect"
};
let Cache = /*#__PURE__*/function () {
  function Cache() {
    this.cache = {};
  }
  var _proto = Cache.prototype;
  /**
   * Add cache
   * @param {string} key Cache key
   * @param {*} value Value to be stored
   * @param {boolean} isDataType Weather the cache is data typed '{id:'data', id_org: 'data', values: [{x:0, index:0,...}, ...]}'
   * @returns {*} Added data value
   * @private
   */
  _proto.add = function add(key, value, isDataType) {
    if (isDataType === void 0) {
      isDataType = !1;
    }
    this.cache[key] = isDataType ? this.cloneTarget(value) : value;
    return this.cache[key];
  }

  /**
   * Remove cache
   * @param {string|Array} key Cache key
   * @private
   */;
  _proto.remove = function remove(key) {
    var _this = this;
    (isString(key) ? [key] : key).forEach(function (v) {
      _newArrowCheck(this, _this);
      return delete this.cache[v];
    }.bind(this));
  }

  /**
   * Get cahce
   * @param {string|Array} key Cache key
   * @param {boolean} isDataType Weather the cache is data typed '{id:'data', id_org: 'data', values: [{x:0, index:0,...}, ...]}'
   * @returns {*}
   * @private
   */;
  _proto.get = function get(key, isDataType) {
    if (isDataType === void 0) {
      isDataType = !1;
    }
    // when is isDataType, key should be string array
    if (isDataType && Array.isArray(key)) {
      const targets = [];
      for (let i = 0, id; id = key[i]; i++) {
        if (id in this.cache) {
          targets.push(this.cloneTarget(this.cache[id]));
        }
      }
      return targets;
    } else {
      const value = this.cache[key];
      return isValue(value) ? value : null;
    }
  }

  /**
   * Reset cached data
   * @param {boolean} all true: reset all data, false: reset only '$' prefixed key data
   * @private
   */;
  _proto.reset = function reset(all) {
    const $$ = this;
    for (const x in $$.cache) {
      // reset the prefixed '$' key(which is internal use data) only.
      if (all || /^\$/.test(x)) {
        $$.cache[x] = null;
      }
    }
  }

  /**
   * Clone data target object
   * @param {object} target Data object
   * @returns {object}
   * @private
   */
  // eslint-disable-next-line camelcase
  ;
  _proto.cloneTarget = function cloneTarget(target) {
    var _this2 = this;
    return {
      id: target.id,
      id_org: target.id_org,
      values: target.values.map(function (d) {
        _newArrowCheck(this, _this2);
        return {
          x: d.x,
          value: d.value,
          id: d.id
        };
      }.bind(this))
    };
  };
  return Cache;
}();

;// CONCATENATED MODULE: ./src/module/generator.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



const generator_setTimeout = win.setTimeout,
  generator_clearTimeout = win.clearTimeout;

/**
 * Generate resize queue function
 * @param {boolean|number} option Resize option
 * @returns {Fucntion}
 * @private
 */
function generateResize(option) {
  var _this4 = this;
  const fn = [];
  let timeout;
  const callResizeFn = function () {
    var _this = this;
    // Delay all resize functions call, to prevent unintended excessive call from resize event
    callResizeFn.clear();
    if (option === !1) {
      requestIdleCallback(function () {
        var _this2 = this;
        _newArrowCheck(this, _this);
        fn.forEach(function (f) {
          _newArrowCheck(this, _this2);
          return f();
        }.bind(this));
      }.bind(this), {
        timeout: 200
      });
    } else {
      timeout = generator_setTimeout(function () {
        var _this3 = this;
        _newArrowCheck(this, _this);
        fn.forEach(function (f) {
          _newArrowCheck(this, _this3);
          return f();
        }.bind(this));
      }.bind(this), isNumber(option) ? option : 200);
    }
  };
  callResizeFn.clear = function () {
    _newArrowCheck(this, _this4);
    if (timeout) {
      generator_clearTimeout(timeout);
      timeout = null;
    }
  }.bind(this);
  callResizeFn.add = function (f) {
    _newArrowCheck(this, _this4);
    return fn.push(f);
  }.bind(this);
  callResizeFn.remove = function (f) {
    _newArrowCheck(this, _this4);
    return fn.splice(fn.indexOf(f), 1);
  }.bind(this);
  return callResizeFn;
}
/**
 * Generate transition queue function
 * @returns {Function}
 * @private
 */
function generateWait() {
  let transitionsToWait = [];

  // 'f' is called as selection.call(f, ...);
  const f = function (selection, callback) {
    var _this5 = this;
    /**
     * Check if transition is complete
     * @returns {boolean} Whether transition is complete
     * @private
     */
    function loop() {
      let done = 0;
      for (let i = 0, t; t = transitionsToWait[i]; i++) {
        if (t === !0 || t.empty != null && t.empty()) {
          done++;
          continue;
        }

        // when tab isn't visible exit loop
        if (isTabVisible() === !1) {
          done = transitionsToWait.length;
          break;
        }
        try {
          t.transition();
        } catch (e) {
          done++;
        }
      }
      return done === transitionsToWait.length;
    }
    runUntil(function () {
      _newArrowCheck(this, _this5);
      callback == null || callback();
    }.bind(this), loop);
  };
  f.add = function (t) {
    isArray(t) ? transitionsToWait = transitionsToWait.concat(t) : transitionsToWait.push(t);
  };
  return f;
}
;// CONCATENATED MODULE: ./src/module/worker.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


// Store blob in memory
const blob = {};

/**
 * Get Object URL
 * @param {Function} fn Function to be executed in worker
 * @param {Array} depsFn Dependency functions to run given function(fn).
 * @returns {string}
 * @private
 */
function getObjectURL(fn, depsFn) {
  const fnString = fn.toString(),
    key = fnString.replace(/(function|[\s\W\n])/g, "").substring(0, 15);
  if (!(key in blob)) {
    var _depsFn$map$join;
    // Web Worker body
    blob[key] = new win.Blob([((_depsFn$map$join = depsFn == null ? void 0 : depsFn.map(String).join(";")) != null ? _depsFn$map$join : "") + "\n\n\t\t\tself.onmessage=function({data}) {\n\t\t\t\tconst result = (" + fnString + ").apply(null, data);\n\t\t\t\tself.postMessage(result);\n\t\t\t};"], {
      type: "text/javascript"
    });
  }
  return win.URL.createObjectURL(blob[key]);
}

/**
 * Get WebWorker instance
 * @param {string} src URL object as string
 * @returns {object} WebWorker instance
 * @private
 */
function getWorker(src) {
  const worker = new win.Worker(src);

  // handle error
  worker.onerror = function (e) {
    // eslint-disable-next-line no-console
    console.error ? console.error(e) : console.log(e);
  };
  return worker;
}

/**
 * Create and run on Web Worker
 * @param {boolean} useWorker Use Web Worker
 * @param {Function} fn Function to be executed in worker
 * @param {Function} callback Callback function to receive result from worker
 * @param {Array} depsFn Dependency functions to run given function(fn).
 * @returns {object}
 * @example
 * 	const worker = runWorker(function(arg) {
 *		  // do some tasks...
 *		  console.log("param:", A(arg));
 *
 *		  return 1234;
 *	   }, function(data) {
 *		  // callback after worker is done
 *	 	  console.log("result:", data);
 *	   },
 *	   [function A(){}]
 *	);
 *
 *	worker(11111);
 * @private
 */
function runWorker(useWorker, fn, callback, depsFn) {
  if (useWorker === void 0) {
    useWorker = !0;
  }
  let runFn = function () {
    const res = fn.apply(void 0, arguments);
    callback(res);
  };
  if (win.Worker && useWorker) {
    const src = getObjectURL(fn, depsFn),
      worker = getWorker(src);
    runFn = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      // trigger worker
      worker.postMessage(args);

      // listen worker
      worker.onmessage = function (e) {
        // release object URL from memory
        win.URL.revokeObjectURL(src);
        return callback(e.data);
      };

      // return new Promise((resolve, reject) => {
      // 	worker.onmessage = ({data}) => resolve(data);
      // 	worker.onerror = reject;
      // });
    };
  }

  return runFn;
}
// EXTERNAL MODULE: external {"commonjs":"d3-dsv","commonjs2":"d3-dsv","amd":"d3-dsv","root":"d3"}
var external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_ = __webpack_require__(5);
;// CONCATENATED MODULE: ./src/ChartInternal/data/convert.helper.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* eslint-disable */



/***** Functions to be executed on Web Worker *****
 * NOTE: Don't allowed to use
 * - arrow function syntax
 * - Utils functions
 */
/**
 * Convert Columns data
 * @param {object} columns
 * @returns {Array}
 * @private
 */
function columns(columns) {
  const newRows = [];
  columns.forEach(function (col, i) {
    const key = col[0];
    col.forEach(function (v, j) {
      if (j > 0) {
        if (typeof newRows[j - 1] === "undefined") {
          newRows[j - 1] = {};
        }
        if (typeof v === "undefined") {
          throw new Error("Source data is missing a component at (" + i + ", " + j + ")!");
        }
        newRows[j - 1][key] = v;
      }
    });
  });
  return newRows;
}

/**
 * Convert Rows data
 * @param {object} columns
 * @returns {Array}
 * @private
 */
function rows(rows) {
  const keys = rows[0],
    newRows = [];
  rows.forEach(function (row, i) {
    if (i > 0) {
      const newRow = {};
      row.forEach(function (v, j) {
        if (typeof v === "undefined") {
          throw new Error("Source data is missing a component at (" + i + ", " + j + ")!");
        }
        newRow[keys[j]] = v;
      });
      newRows.push(newRow);
    }
  });
  return newRows;
}

/**
 * Convert JSON data
 * @param {object} columns
 * @returns {Array}
 * @private
 */
function json(json, keysParam) {
  const newRows = [];
  let targetKeys, data;
  if (Array.isArray(json)) {
    const findValueInJson = function (object, path) {
      if (object[path] !== undefined) {
        return object[path];
      }
      const convertedPath = path.replace(/\[(\w+)\]/g, ".$1"),
        pathArray = convertedPath.replace(/^\./, "").split("."); // convert indexes to properties (replace [] with .)
      // strip a leading dot
      let target = object;
      pathArray.some(function (k) {
        return !(target = target && k in target ? target[k] : undefined);
      });
      return target;
    };
    if (keysParam.x) {
      targetKeys = keysParam.value.concat(keysParam.x);
    } else {
      targetKeys = keysParam.value;
    }
    newRows.push(targetKeys);
    json.forEach(function (o) {
      const newRow = targetKeys.map(function (key) {
        // convert undefined to null because undefined data will be removed in convertDataToTargets()
        let v = findValueInJson(o, key);
        if (typeof v === "undefined") {
          v = null;
        }
        return v;
      });
      newRows.push(newRow);
    });
    data = rows(newRows);
  } else {
    Object.keys(json).forEach(function (key) {
      const tmp = json[key].concat();
      tmp.unshift == null || tmp.unshift(key);
      newRows.push(tmp);
    });
    data = columns(newRows);
  }
  return data;
}

/***** Functions can't be executed on Web Worker *****/
/**
 * Convert URL data
 * @param {string} url Remote URL
 * @param {string} mimeType MIME type string: json | csv | tsv
 * @param {object} headers Header object
 * @param {object} keys Key object
 * @param {Function} done Callback function
 * @private
 */
function url(url, mimeType, headers, keys, done) {
  if (mimeType === void 0) {
    mimeType = "csv";
  }
  const req = new XMLHttpRequest(),
    converter = {
      csv: csv,
      tsv: tsv,
      json: json
    };
  req.open("GET", url);
  if (headers) {
    Object.keys(headers).forEach(function (key) {
      req.setRequestHeader(key, headers[key]);
    });
  }
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      if (req.status === 200) {
        const response = req.responseText;
        response && done.call(this, converter[mimeType](mimeType === "json" ? JSON.parse(response) : response, keys));
      } else {
        throw new Error(url + ": Something went wrong loading!");
      }
    }
  };
  req.send();
}

/**
 * Convert CSV/TSV data
 * @param {object} parser Parser object
 * @param {object} xsv Data
 * @returns {object}
 * @private
 */
function convertCsvTsvToData(parser, xsv) {
  var _this = this;
  const rows = parser.rows(xsv);
  let d;
  if (rows.length === 1) {
    d = [{}];
    rows[0].forEach(function (id) {
      _newArrowCheck(this, _this);
      d[0][id] = null;
    }.bind(this));
  } else {
    d = parser.parse(xsv);
  }
  return d;
}
function csv(xsv) {
  return convertCsvTsvToData({
    rows: external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_.csvParseRows,
    parse: external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_.csvParse
  }, xsv);
}
function tsv(tsv) {
  return convertCsvTsvToData({
    rows: external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_.tsvParseRows,
    parse: external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_.tsvParse
  }, tsv);
}
;// CONCATENATED MODULE: ./src/ChartInternal/data/convert.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/**
 * Get data key for JSON
 * @param {string|object} keysParam Key params
 * @param {object} config Config object
 * @returns {string} Data key
 * @private
 */
function getDataKeyForJson(keysParam, config) {
  const keys = keysParam || (config == null ? void 0 : config.data_keys);
  if (keys != null && keys.x) {
    config.data_x = keys.x;
  }
  return keys;
}

/**
 * Data convert
 * @memberof ChartInternal
 * @private
 */
/* harmony default export */ var convert = ({
  /**
   * Convert data according its type
   * @param {object} args data object
   * @param {Function} [callback] callback for url(XHR) type loading
   * @private
   */
  convertData: function convertData(args, callback) {
    var _this = this;
    const config = this.config,
      useWorker = config.boost_useWorker;
    let data = args;
    if (args.bindto) {
      data = {};
      ["url", "mimeType", "headers", "keys", "json", "keys", "rows", "columns"].forEach(function (v) {
        _newArrowCheck(this, _this);
        const key = "data_" + v;
        if (key in args) {
          data[v] = args[key];
        }
      }.bind(this));
    }
    if (data.url && callback) {
      url(data.url, data.mimeType, data.headers, getDataKeyForJson(data.keys, config), callback);
    } else if (data.json) {
      runWorker(useWorker, json, callback, [columns, rows])(data.json, getDataKeyForJson(data.keys, config));
    } else if (data.rows) {
      runWorker(useWorker, rows, callback)(data.rows);
    } else if (data.columns) {
      runWorker(useWorker, columns, callback)(data.columns);
    } else if (args.bindto) {
      throw Error("url or json or rows or columns is required.");
    }
  },
  convertDataToTargets: function convertDataToTargets(data, appendXs) {
    var _this2 = this;
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      state = $$.state,
      chartType = config.data_type;
    let isCategorized = !1,
      isTimeSeries = !1,
      isCustomX = !1;
    if (axis) {
      isCategorized = axis.isCategorized();
      isTimeSeries = axis.isTimeSeries();
      isCustomX = axis.isCustomX();
    }
    const dataKeys = Object.keys(data[0] || {}),
      ids = dataKeys.length ? dataKeys.filter($$.isNotX, $$) : [],
      xs = dataKeys.length ? dataKeys.filter($$.isX, $$) : [];
    let xsData;

    // save x for update data by load when custom x and bb.x API
    ids.forEach(function (id) {
      var _this3 = this;
      _newArrowCheck(this, _this2);
      const xKey = this.getXKey(id);
      if (isCustomX || isTimeSeries) {
        // if included in input data
        if (xs.indexOf(xKey) >= 0) {
          xsData = (appendXs && $$.data.xs[id] || []).concat(data.map(function (d) {
            _newArrowCheck(this, _this3);
            return d[xKey];
          }.bind(this)).filter(isValue).map(function (rawX, i) {
            _newArrowCheck(this, _this3);
            return $$.generateTargetX(rawX, id, i);
          }.bind(this)));
        } else if (config.data_x) {
          // if not included in input data, find from preloaded data of other id's x
          xsData = this.getOtherTargetXs();
        } else if (notEmpty(config.data_xs)) {
          // if not included in input data, find from preloaded data
          xsData = $$.getXValuesOfXKey(xKey, $$.data.targets);
        }
        // MEMO: if no x included, use same x of current will be used
      } else {
        xsData = data.map(function (d, i) {
          _newArrowCheck(this, _this3);
          return i;
        }.bind(this));
      }
      xsData && (this.data.xs[id] = xsData);
    }.bind(this));

    // check x is defined
    ids.forEach(function (id) {
      _newArrowCheck(this, _this2);
      if (!this.data.xs[id]) {
        throw new Error("x is not defined for id = \"" + id + "\".");
      }
    }.bind(this));

    // convert to target
    const targets = ids.map(function (id, index) {
      var _this4 = this;
      _newArrowCheck(this, _this2);
      const convertedId = config.data_idConverter.bind($$.api)(id),
        xKey = $$.getXKey(id),
        isCategory = isCustomX && isCategorized,
        hasCategory = isCategory && data.map(function (v) {
          _newArrowCheck(this, _this4);
          return v.x;
        }.bind(this)).every(function (v) {
          _newArrowCheck(this, _this4);
          return config.axis_x_categories.indexOf(v) > -1;
        }.bind(this)),
        isDataAppend = data.__append__,
        xIndex = xKey === null && isDataAppend ? $$.api.data.values(id).length : 0; // when .load() with 'append' option is used for indexed axis
      // @ts-ignore
      return {
        id: convertedId,
        id_org: id,
        values: data.map(function (d, i) {
          _newArrowCheck(this, _this4);
          const rawX = d[xKey];
          let value = d[id],
            x;
          value = value !== null && !isNaN(value) && !isObject(value) ? +value : isArray(value) || isObject(value) ? value : null;

          // use x as categories if custom x and categorized
          if ((isCategory || state.hasRadar) && index === 0 && !isUndefined(rawX)) {
            if (!hasCategory && index === 0 && i === 0 && !isDataAppend) {
              config.axis_x_categories = [];
            }
            x = config.axis_x_categories.indexOf(rawX);
            if (x === -1) {
              x = config.axis_x_categories.length;
              config.axis_x_categories.push(rawX);
            }
          } else {
            x = $$.generateTargetX(rawX, id, xIndex + i);
          }

          // mark as x = undefined if value is undefined and filter to remove after mapped
          if (isUndefined(value) || $$.data.xs[id].length <= i) {
            x = undefined;
          }
          return {
            x: x,
            value: value,
            id: convertedId,
            index: -1
          };
        }.bind(this)).filter(function (v) {
          _newArrowCheck(this, _this4);
          return isDefined(v.x);
        }.bind(this))
      };
    }.bind(this));

    // finish targets
    targets.forEach(function (t) {
      var _this5 = this,
        _$$$data$xs$t$id;
      _newArrowCheck(this, _this2);
      // sort values by its x
      if (config.data_xSort) {
        t.values = t.values.sort(function (v1, v2) {
          _newArrowCheck(this, _this5);
          const x1 = v1.x || v1.x === 0 ? v1.x : Infinity,
            x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
          return x1 - x2;
        }.bind(this));
      }

      // indexing each value
      t.values.forEach(function (v, i) {
        _newArrowCheck(this, _this5);
        return v.index = i;
      }.bind(this));

      // this needs to be sorted because its index and value.index is identical
      (_$$$data$xs$t$id = $$.data.xs[t.id]) == null || _$$$data$xs$t$id.sort(function (v1, v2) {
        _newArrowCheck(this, _this5);
        return v1 - v2;
      }.bind(this));
    }.bind(this));

    // cache information about values
    state.hasNegativeValue = $$.hasNegativeValueInTargets(targets);
    state.hasPositiveValue = $$.hasPositiveValueInTargets(targets);

    // set target types
    if (chartType && $$.isValidChartType(chartType)) {
      const targetIds = $$.mapToIds(targets).filter(function (id) {
        _newArrowCheck(this, _this2);
        return !(id in config.data_types) || !$$.isValidChartType(config.data_types[id]);
      }.bind(this));
      $$.setTargetType(targetIds, chartType);
    }

    // cache as original id keyed
    targets.forEach(function (d) {
      _newArrowCheck(this, _this2);
      return $$.cache.add(d.id_org, d, !0);
    }.bind(this));
    return targets;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/data/data.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var data_data = ({
  isX: function isX(key) {
    const $$ = this,
      config = $$.config,
      dataKey = config.data_x && key === config.data_x,
      existValue = notEmpty(config.data_xs) && hasValue(config.data_xs, key);
    return dataKey || existValue;
  },
  isNotX: function isNotX(key) {
    return !this.isX(key);
  },
  isStackNormalized: function isStackNormalized() {
    const config = this.config;
    return !!(config.data_stack_normalize && config.data_groups.length);
  },
  /**
   * Check if given id is grouped data or has grouped data
   * @param {string} id Data id value
   * @returns {boolean} is grouped data or has grouped data
   * @private
   */
  isGrouped: function isGrouped(id) {
    var _this = this;
    const groups = this.config.data_groups;
    return id ? groups.some(function (v) {
      _newArrowCheck(this, _this);
      return v.indexOf(id) >= 0 && v.length > 1;
    }.bind(this)) : groups.length > 0;
  },
  getXKey: function getXKey(id) {
    const $$ = this,
      config = $$.config;
    return config.data_x ? config.data_x : notEmpty(config.data_xs) ? config.data_xs[id] : null;
  },
  getXValuesOfXKey: function getXValuesOfXKey(key, targets) {
    var _this2 = this;
    const $$ = this,
      ids = targets && notEmpty(targets) ? $$.mapToIds(targets) : [];
    let xValues;
    ids.forEach(function (id) {
      _newArrowCheck(this, _this2);
      if ($$.getXKey(id) === key) {
        xValues = $$.data.xs[id];
      }
    }.bind(this));
    return xValues;
  },
  /**
   * Get index number based on given x Axis value
   * @param {Date|number|string} x x Axis to be compared
   * @param {Array} basedX x Axis list to be based on
   * @returns {number} index number
   * @private
   */
  getIndexByX: function getIndexByX(x, basedX) {
    const $$ = this;
    return basedX ? basedX.indexOf(isString(x) ? x : +x) : ($$.filterByX($$.data.targets, x)[0] || {
      index: null
    }).index;
  },
  getXValue: function getXValue(id, i) {
    const $$ = this;
    return id in $$.data.xs && $$.data.xs[id] && isValue($$.data.xs[id][i]) ? $$.data.xs[id][i] : i;
  },
  getOtherTargetXs: function getOtherTargetXs() {
    const $$ = this,
      idsForX = Object.keys($$.data.xs);
    return idsForX.length ? $$.data.xs[idsForX[0]] : null;
  },
  getOtherTargetX: function getOtherTargetX(index) {
    const xs = this.getOtherTargetXs();
    return xs && index < xs.length ? xs[index] : null;
  },
  addXs: function addXs(xs) {
    var _this3 = this;
    const $$ = this,
      config = $$.config;
    Object.keys(xs).forEach(function (id) {
      _newArrowCheck(this, _this3);
      config.data_xs[id] = xs[id];
    }.bind(this));
  },
  isMultipleX: function isMultipleX() {
    return notEmpty(this.config.data_xs) || this.hasType("bubble") || this.hasType("scatter");
  },
  addName: function addName(data) {
    const $$ = this,
      config = $$.config;
    let name;
    if (data) {
      name = config.data_names[data.id];
      data.name = name !== undefined ? name : data.id;
    }
    return data;
  },
  /**
   * Get all values on given index
   * @param {number} index Index
   * @param {boolean} filterNull Filter nullish value
   * @returns {Array}
   * @private
   */
  getAllValuesOnIndex: function getAllValuesOnIndex(index, filterNull) {
    var _this4 = this;
    if (filterNull === void 0) {
      filterNull = !1;
    }
    const $$ = this;
    let value = $$.filterTargetsToShow($$.data.targets).map(function (t) {
      _newArrowCheck(this, _this4);
      return $$.addName($$.getValueOnIndex(t.values, index));
    }.bind(this));
    if (filterNull) {
      value = value.filter(function (v) {
        _newArrowCheck(this, _this4);
        return v && "value" in v && isValue(v.value);
      }.bind(this));
    }
    return value;
  },
  getValueOnIndex: function getValueOnIndex(values, index) {
    var _this5 = this;
    const valueOnIndex = values.filter(function (v) {
      _newArrowCheck(this, _this5);
      return v.index === index;
    }.bind(this));
    return valueOnIndex.length ? valueOnIndex[0] : null;
  },
  updateTargetX: function updateTargetX(targets, x) {
    var _this6 = this;
    const $$ = this;
    targets.forEach(function (t) {
      var _this7 = this;
      _newArrowCheck(this, _this6);
      t.values.forEach(function (v, i) {
        _newArrowCheck(this, _this7);
        v.x = $$.generateTargetX(x[i], t.id, i);
      }.bind(this));
      $$.data.xs[t.id] = x;
    }.bind(this));
  },
  updateTargetXs: function updateTargetXs(targets, xs) {
    var _this8 = this;
    const $$ = this;
    targets.forEach(function (t) {
      _newArrowCheck(this, _this8);
      xs[t.id] && $$.updateTargetX([t], xs[t.id]);
    }.bind(this));
  },
  generateTargetX: function generateTargetX(rawX, id, index) {
    const $$ = this,
      axis = $$.axis;
    let x = axis != null && axis.isCategorized() ? index : rawX || index;
    if (axis != null && axis.isTimeSeries()) {
      const fn = parseDate.bind($$);
      x = rawX ? fn(rawX) : fn($$.getXValue(id, index));
    } else if (axis != null && axis.isCustomX() && !(axis != null && axis.isCategorized())) {
      x = isValue(rawX) ? +rawX : $$.getXValue(id, index);
    }
    return x;
  },
  updateXs: function updateXs(values) {
    var _this9 = this;
    if (values.length) {
      this.axis.xs = values.map(function (v) {
        _newArrowCheck(this, _this9);
        return v.x;
      }.bind(this));
    }
  },
  getPrevX: function getPrevX(i) {
    const x = this.axis.xs[i - 1];
    return isDefined(x) ? x : null;
  },
  getNextX: function getNextX(i) {
    const x = this.axis.xs[i + 1];
    return isDefined(x) ? x : null;
  },
  /**
   * Get base value isAreaRangeType
   * @param {object} data Data object
   * @returns {number}
   * @private
   */
  getBaseValue: function getBaseValue(data) {
    const $$ = this,
      hasAxis = $$.state.hasAxis;
    let value = data.value;

    // In case of area-range, data is given as: [low, mid, high] or {low, mid, high}
    // will take the 'mid' as the base value
    if (value && hasAxis) {
      if ($$.isAreaRangeType(data)) {
        value = $$.getRangedData(data, "mid");
      } else if ($$.isBubbleZType(data)) {
        value = $$.getBubbleZData(value, "y");
      }
    }
    return value;
  },
  /**
   * Get min/max value from the data
   * @private
   * @param {Array} data array data to be evaluated
   * @returns {{min: {number}, max: {number}}}
   */
  getMinMaxValue: function getMinMaxValue(data) {
    var _this10 = this;
    const getBaseValue = this.getBaseValue.bind(this);
    let min, max;
    (data || this.data.targets.map(function (t) {
      _newArrowCheck(this, _this10);
      return t.values;
    }.bind(this))).forEach(function (v, i) {
      _newArrowCheck(this, _this10);
      const value = v.map(getBaseValue).filter(isNumber);
      min = Math.min.apply(Math, [i ? min : Infinity].concat(value));
      max = Math.max.apply(Math, [i ? max : -Infinity].concat(value));
    }.bind(this));
    return {
      min: min,
      max: max
    };
  },
  /**
   * Get the min/max data
   * @private
   * @returns {{min: Array, max: Array}}
   */
  getMinMaxData: function getMinMaxData() {
    var _this11 = this;
    const $$ = this,
      cacheKey = KEY.dataMinMax;
    let minMaxData = $$.cache.get(cacheKey);
    if (!minMaxData) {
      const data = $$.data.targets.map(function (t) {
          _newArrowCheck(this, _this11);
          return t.values;
        }.bind(this)),
        minMax = $$.getMinMaxValue(data);
      let min = [],
        max = [];
      data.forEach(function (v) {
        _newArrowCheck(this, _this11);
        const minData = $$.getFilteredDataByValue(v, minMax.min),
          maxData = $$.getFilteredDataByValue(v, minMax.max);
        if (minData.length) {
          min = min.concat(minData);
        }
        if (maxData.length) {
          max = max.concat(maxData);
        }
      }.bind(this));

      // update the cached data
      $$.cache.add(cacheKey, minMaxData = {
        min: min,
        max: max
      });
    }
    return minMaxData;
  },
  /**
   * Get sum of data per index
   * @private
   * @returns {Array}
   */
  getTotalPerIndex: function getTotalPerIndex() {
    var _this12 = this;
    const $$ = this,
      cacheKey = KEY.dataTotalPerIndex;
    let sum = $$.cache.get(cacheKey);
    if (($$.config.data_groups.length || $$.isStackNormalized()) && !sum) {
      sum = [];
      $$.data.targets.forEach(function (row) {
        var _this13 = this;
        _newArrowCheck(this, _this12);
        row.values.forEach(function (v, i) {
          _newArrowCheck(this, _this13);
          if (!sum[i]) {
            sum[i] = 0;
          }
          sum[i] += isNumber(v.value) ? v.value : 0;
        }.bind(this));
      }.bind(this));
    }
    return sum;
  },
  /**
   * Get total data sum
   * @param {boolean} subtractHidden Subtract hidden data from total
   * @returns {number}
   * @private
   */
  getTotalDataSum: function getTotalDataSum(subtractHidden) {
    var _this14 = this;
    const $$ = this,
      cacheKey = KEY.dataTotalSum;
    let total = $$.cache.get(cacheKey);
    if (!isNumber(total)) {
      const sum = mergeArray($$.data.targets.map(function (t) {
        _newArrowCheck(this, _this14);
        return t.values;
      }.bind(this))).map(function (v) {
        _newArrowCheck(this, _this14);
        return v.value;
      }.bind(this));
      total = sum.length ? sum.reduce(function (p, c) {
        _newArrowCheck(this, _this14);
        return p + c;
      }.bind(this)) : 0;
      $$.cache.add(cacheKey, total);
    }
    if (subtractHidden) {
      total -= $$.getHiddenTotalDataSum();
    }
    return total;
  },
  /**
   * Get total hidden data sum
   * @returns {number}
   * @private
   */
  getHiddenTotalDataSum: function getHiddenTotalDataSum() {
    var _this15 = this;
    const $$ = this,
      api = $$.api,
      hiddenTargetIds = $$.state.hiddenTargetIds;
    let total = 0;
    if (hiddenTargetIds.length) {
      total = api.data.values.bind(api)(hiddenTargetIds).reduce(function (p, c) {
        _newArrowCheck(this, _this15);
        return p + c;
      }.bind(this));
    }
    return total;
  },
  /**
   * Get filtered data by value
   * @param {object} data Data
   * @param {number} value Value to be filtered
   * @returns {Array} filtered array data
   * @private
   */
  getFilteredDataByValue: function getFilteredDataByValue(data, value) {
    var _this16 = this;
    return data.filter(function (t) {
      _newArrowCheck(this, _this16);
      return this.getBaseValue(t) === value;
    }.bind(this));
  },
  /**
   * Return the max length of the data
   * @returns {number} max data length
   * @private
   */
  getMaxDataCount: function getMaxDataCount() {
    var _this17 = this;
    return Math.max.apply(Math, this.data.targets.map(function (t) {
      _newArrowCheck(this, _this17);
      return t.values.length;
    }.bind(this)).concat([0]));
  },
  getMaxDataCountTarget: function getMaxDataCountTarget() {
    var _this18 = this;
    let target = this.filterTargetsToShow() || [];
    const length = target.length,
      isInverted = this.config.axis_x_inverted;
    if (length > 1) {
      target = target.map(function (t) {
        _newArrowCheck(this, _this18);
        return t.values;
      }.bind(this)).reduce(function (a, b) {
        _newArrowCheck(this, _this18);
        return a.concat(b);
      }.bind(this)).map(function (v) {
        _newArrowCheck(this, _this18);
        return v.x;
      }.bind(this));
      target = sortValue(getUnique(target)).map(function (x, index, array) {
        _newArrowCheck(this, _this18);
        return {
          x: x,
          index: isInverted ? array.length - index - 1 : index
        };
      }.bind(this));
    } else if (length) {
      target = target[0].values.concat();
    }
    return target;
  },
  mapToIds: function mapToIds(targets) {
    var _this19 = this;
    return targets.map(function (d) {
      _newArrowCheck(this, _this19);
      return d.id;
    }.bind(this));
  },
  mapToTargetIds: function mapToTargetIds(ids) {
    const $$ = this;
    return ids ? isArray(ids) ? ids.concat() : [ids] : $$.mapToIds($$.data.targets);
  },
  hasTarget: function hasTarget(targets, id) {
    const ids = this.mapToIds(targets);
    for (let i = 0, val; val = ids[i]; i++) {
      if (val === id) {
        return !0;
      }
    }
    return !1;
  },
  isTargetToShow: function isTargetToShow(targetId) {
    return this.state.hiddenTargetIds.indexOf(targetId) < 0;
  },
  isLegendToShow: function isLegendToShow(targetId) {
    return this.state.hiddenLegendIds.indexOf(targetId) < 0;
  },
  filterTargetsToShow: function filterTargetsToShow(targets) {
    var _this20 = this;
    const $$ = this;
    return (targets || $$.data.targets).filter(function (t) {
      _newArrowCheck(this, _this20);
      return $$.isTargetToShow(t.id);
    }.bind(this));
  },
  mapTargetsToUniqueXs: function mapTargetsToUniqueXs(targets) {
    var _this21 = this;
    const $$ = this,
      axis = $$.axis;
    let xs = [];
    if (targets != null && targets.length) {
      xs = getUnique(mergeArray(targets.map(function (t) {
        var _this22 = this;
        _newArrowCheck(this, _this21);
        return t.values.map(function (v) {
          _newArrowCheck(this, _this22);
          return +v.x;
        }.bind(this));
      }.bind(this))));
      xs = axis != null && axis.isTimeSeries() ? xs.map(function (x) {
        _newArrowCheck(this, _this21);
        return new Date(+x);
      }.bind(this)) : xs.map(Number);
    }
    return sortValue(xs);
  },
  /**
   * Add to the state target Ids
   * @param {string} type State's prop name
   * @param {Array|string} targetIds Target ids array
   * @private
   */
  addTargetIds: function addTargetIds(type, targetIds) {
    var _this23 = this;
    const state = this.state,
      ids = isArray(targetIds) ? targetIds : [targetIds];
    ids.forEach(function (v) {
      _newArrowCheck(this, _this23);
      state[type].indexOf(v) < 0 && state[type].push(v);
    }.bind(this));
  },
  /**
   * Remove from the state target Ids
   * @param {string} type State's prop name
   * @param {Array|string} targetIds Target ids array
   * @private
   */
  removeTargetIds: function removeTargetIds(type, targetIds) {
    var _this24 = this;
    const state = this.state,
      ids = isArray(targetIds) ? targetIds : [targetIds];
    ids.forEach(function (v) {
      _newArrowCheck(this, _this24);
      const index = state[type].indexOf(v);
      index >= 0 && state[type].splice(index, 1);
    }.bind(this));
  },
  addHiddenTargetIds: function addHiddenTargetIds(targetIds) {
    this.addTargetIds("hiddenTargetIds", targetIds);
  },
  removeHiddenTargetIds: function removeHiddenTargetIds(targetIds) {
    this.removeTargetIds("hiddenTargetIds", targetIds);
  },
  addHiddenLegendIds: function addHiddenLegendIds(targetIds) {
    this.addTargetIds("hiddenLegendIds", targetIds);
  },
  removeHiddenLegendIds: function removeHiddenLegendIds(targetIds) {
    this.removeTargetIds("hiddenLegendIds", targetIds);
  },
  getValuesAsIdKeyed: function getValuesAsIdKeyed(targets) {
    var _this25 = this;
    const $$ = this,
      hasAxis = $$.state.hasAxis,
      ys = {},
      isMultipleX = $$.isMultipleX(),
      xs = isMultipleX ? $$.mapTargetsToUniqueXs(targets).map(function (v) {
        _newArrowCheck(this, _this25);
        return isString(v) ? v : +v;
      }.bind(this)) : null;
    targets.forEach(function (t) {
      var _this26 = this;
      _newArrowCheck(this, _this25);
      const data = [];
      t.values.filter(function (_ref) {
        let value = _ref.value;
        _newArrowCheck(this, _this26);
        return isValue(value) || value === null;
      }.bind(this)).forEach(function (v) {
        _newArrowCheck(this, _this26);
        let value = v.value;

        // exclude 'volume' value to correct mis domain calculation
        if (value !== null && $$.isCandlestickType(v)) {
          value = isArray(value) ? value.slice(0, 4) : [value.open, value.high, value.low, value.close];
        }
        if (isArray(value)) {
          data.push.apply(data, value);
        } else if (isObject(value) && "high" in value) {
          data.push.apply(data, Object.values(value));
        } else if ($$.isBubbleZType(v)) {
          data.push(hasAxis && $$.getBubbleZData(value, "y"));
        } else {
          if (isMultipleX) {
            data[$$.getIndexByX(v.x, xs)] = value;
          } else {
            data.push(value);
          }
        }
      }.bind(this));
      ys[t.id] = data;
    }.bind(this));
    return ys;
  },
  checkValueInTargets: function checkValueInTargets(targets, checker) {
    const ids = Object.keys(targets);
    let values;
    for (let i = 0; i < ids.length; i++) {
      values = targets[ids[i]].values;
      for (let j = 0; j < values.length; j++) {
        if (checker(values[j].value)) {
          return !0;
        }
      }
    }
    return !1;
  },
  hasMultiTargets: function hasMultiTargets() {
    return this.filterTargetsToShow().length > 1;
  },
  hasNegativeValueInTargets: function hasNegativeValueInTargets(targets) {
    var _this27 = this;
    return this.checkValueInTargets(targets, function (v) {
      _newArrowCheck(this, _this27);
      return v < 0;
    }.bind(this));
  },
  hasPositiveValueInTargets: function hasPositiveValueInTargets(targets) {
    var _this28 = this;
    return this.checkValueInTargets(targets, function (v) {
      _newArrowCheck(this, _this28);
      return v > 0;
    }.bind(this));
  },
  /**
   * Sort targets data
   * Note: For stacked bar, will sort from the total sum of data series, not for each stacked bar
   * @param {Array} targetsValue Target value
   * @returns {Array}
   * @private
   */
  orderTargets: function orderTargets(targetsValue) {
    const $$ = this,
      targets = [].concat(targetsValue),
      fn = $$.getSortCompareFn();
    fn && targets.sort(fn);
    return targets;
  },
  /**
   * Get data.order compare function
   * @param {boolean} isReversed for Arc & Treemap type sort order needs to be reversed
   * @returns {Function} compare function
   * @private
   */
  getSortCompareFn: function getSortCompareFn(isReversed) {
    var _this29 = this;
    if (isReversed === void 0) {
      isReversed = !1;
    }
    const $$ = this,
      config = $$.config,
      order = config.data_order,
      orderAsc = /asc/i.test(order),
      orderDesc = /desc/i.test(order);
    let fn;
    if (orderAsc || orderDesc) {
      const reducer = function (p, c) {
        _newArrowCheck(this, _this29);
        return p + Math.abs(c.value);
      }.bind(this);
      fn = function (t1, t2) {
        _newArrowCheck(this, _this29);
        const t1Sum = "values" in t1 ? t1.values.reduce(reducer, 0) : t1.value,
          t2Sum = "values" in t2 ? t2.values.reduce(reducer, 0) : t2.value;
        return isReversed ? orderAsc ? t1Sum - t2Sum : t2Sum - t1Sum : orderAsc ? t2Sum - t1Sum : t1Sum - t2Sum;
      }.bind(this);
    } else if (isFunction(order)) {
      fn = order.bind($$.api);
    }
    return fn || null;
  },
  filterByX: function filterByX(targets, x) {
    var _this30 = this;
    return mergeArray(targets.map(function (t) {
      _newArrowCheck(this, _this30);
      return t.values;
    }.bind(this))).filter(function (v) {
      _newArrowCheck(this, _this30);
      return v.x - x === 0;
    }.bind(this));
  },
  filterRemoveNull: function filterRemoveNull(data) {
    var _this31 = this;
    return data.filter(function (d) {
      _newArrowCheck(this, _this31);
      return isValue(this.getBaseValue(d));
    }.bind(this));
  },
  filterByXDomain: function filterByXDomain(targets, xDomain) {
    var _this32 = this;
    return targets.map(function (t) {
      var _this33 = this;
      _newArrowCheck(this, _this32);
      return {
        id: t.id,
        id_org: t.id_org,
        values: t.values.filter(function (v) {
          _newArrowCheck(this, _this33);
          return xDomain[0] <= v.x && v.x <= xDomain[1];
        }.bind(this))
      };
    }.bind(this));
  },
  hasDataLabel: function hasDataLabel() {
    const dataLabels = this.config.data_labels;
    return isboolean(dataLabels) && dataLabels || isObjectType(dataLabels) && notEmpty(dataLabels);
  },
  /**
   * Get data index from the event coodinates
   * @param {Event} event Event object
   * @returns {number}
   */
  getDataIndexFromEvent: function getDataIndexFromEvent(event) {
    const $$ = this,
      config = $$.config,
      _$$$state = $$.state,
      hasRadar = _$$$state.hasRadar,
      inputType = _$$$state.inputType,
      _$$$state$eventReceiv = _$$$state.eventReceiver,
      coords = _$$$state$eventReceiv.coords,
      rect = _$$$state$eventReceiv.rect;
    let index;
    if (hasRadar) {
      let target = event.target;

      // in case of multilined axis text
      if (/tspan/i.test(target.tagName)) {
        target = target.parentNode;
      }
      const d = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(target).datum();
      index = d && Object.keys(d).length === 1 ? d.index : undefined;
    } else {
      const isRotated = config.axis_rotated,
        e = inputType === "touch" && event.changedTouches ? event.changedTouches[0] : event; // get data based on the mouse coords
      index = findIndex(coords, isRotated ? e.clientY - rect.top : e.clientX - rect.left, 0, coords.length - 1, isRotated);
    }
    return index;
  },
  getDataLabelLength: function getDataLabelLength(min, max, key) {
    var _this34 = this;
    const $$ = this,
      lengths = [0, 0];
    $$.$el.chart.select("svg").selectAll(".dummy").data([min, max]).enter().append("text").text(function (d) {
      _newArrowCheck(this, _this34);
      return $$.dataLabelFormat(d.id)(d);
    }.bind(this)).each(function (d, i) {
      lengths[i] = this.getBoundingClientRect()[key] * 1.3;
    }).remove();
    return lengths;
  },
  isNoneArc: function isNoneArc(d) {
    return this.hasTarget(this.data.targets, d.id);
  },
  isArc: function isArc(d) {
    return "data" in d && this.hasTarget(this.data.targets, d.data.id);
  },
  findSameXOfValues: function findSameXOfValues(values, index) {
    const targetX = values[index].x,
      sames = [];
    let i;
    for (i = index - 1; i >= 0; i--) {
      if (targetX !== values[i].x) {
        break;
      }
      sames.push(values[i]);
    }
    for (i = index; i < values.length; i++) {
      if (targetX !== values[i].x) {
        break;
      }
      sames.push(values[i]);
    }
    return sames;
  },
  findClosestFromTargets: function findClosestFromTargets(targets, pos) {
    var _this35 = this;
    const $$ = this,
      candidates = targets.map(function (target) {
        _newArrowCheck(this, _this35);
        return $$.findClosest(target.values, pos);
      }.bind(this));
    // map to array of closest points of each target
    // decide closest point and return
    return $$.findClosest(candidates, pos);
  },
  findClosest: function findClosest(values, pos) {
    var _this36 = this;
    const $$ = this,
      main = $$.$el.main,
      data = values.filter(function (v) {
        _newArrowCheck(this, _this36);
        return v && isValue(v.value);
      }.bind(this));
    let minDist, closest;
    // find mouseovering bar/candlestick
    // https://github.com/naver/billboard.js/issues/2434
    data.filter(function (v) {
      _newArrowCheck(this, _this36);
      return $$.isBarType(v.id) || $$.isCandlestickType(v.id);
    }.bind(this)).forEach(function (v) {
      _newArrowCheck(this, _this36);
      const selector = $$.isBarType(v.id) ? "." + $BAR.chartBar + "." + $COMMON.target + $$.getTargetSelectorSuffix(v.id) + " ." + $BAR.bar + "-" + v.index : "." + $CANDLESTICK.chartCandlestick + "." + $COMMON.target + $$.getTargetSelectorSuffix(v.id) + " ." + $CANDLESTICK.candlestick + "-" + v.index + " path";
      if (!closest && $$.isWithinBar(main.select(selector).node())) {
        closest = v;
      }
    }.bind(this));

    // find closest point from non-bar/candlestick
    data.filter(function (v) {
      _newArrowCheck(this, _this36);
      return !$$.isBarType(v.id) && !$$.isCandlestickType(v.id);
    }.bind(this)).forEach(function (v) {
      _newArrowCheck(this, _this36);
      const d = $$.dist(v, pos);
      minDist = $$.getPointSensitivity(v);
      if (d < minDist) {
        minDist = d;
        closest = v;
      }
    }.bind(this));
    return closest;
  },
  dist: function dist(data, pos) {
    const $$ = this,
      isRotated = $$.config.axis_rotated,
      scale = $$.scale,
      y = $$.circleY(data, data.index),
      x = (scale.zoom || scale.x)(data.x);

    // true: 1, false: 0
    // true: 0, false: 1

    return Math.sqrt(Math.pow(x - pos[+isRotated], 2) + Math.pow(y - pos[+!isRotated], 2));
  },
  /**
   * Convert data for step type
   * @param {Array} values Object data values
   * @returns {Array}
   * @private
   */
  convertValuesToStep: function convertValuesToStep(values) {
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      stepType = config.line_step_type,
      isCategorized = axis ? axis.isCategorized() : !1,
      converted = isArray(values) ? values.concat() : [values];
    if (!(isCategorized || /step\-(after|before)/.test(stepType))) {
      return values;
    }

    // when all datas are null, return empty array
    // https://github.com/naver/billboard.js/issues/3124
    if (converted.length) {
      // insert & append cloning first/last value to be fully rendered covering on each gap sides
      const head = converted[0],
        tail = converted[converted.length - 1],
        id = head.id;
      let x = head.x;

      // insert head
      converted.unshift({
        x: --x,
        value: head.value,
        id: id
      });
      isCategorized && stepType === "step-after" && converted.unshift({
        x: --x,
        value: head.value,
        id: id
      });

      // append tail
      x = tail.x;
      converted.push({
        x: ++x,
        value: tail.value,
        id: id
      });
      isCategorized && stepType === "step-before" && converted.push({
        x: ++x,
        value: tail.value,
        id: id
      });
    }
    return converted;
  },
  convertValuesToRange: function convertValuesToRange(values) {
    var _this37 = this;
    const converted = isArray(values) ? values.concat() : [values],
      ranges = [];
    converted.forEach(function (range) {
      _newArrowCheck(this, _this37);
      const x = range.x,
        id = range.id;
      ranges.push({
        x: x,
        id: id,
        value: range.value[0]
      });
      ranges.push({
        x: x,
        id: id,
        value: range.value[2]
      });
    }.bind(this));
    return ranges;
  },
  updateDataAttributes: function updateDataAttributes(name, attrs) {
    var _this38 = this;
    const $$ = this,
      config = $$.config,
      current = config["data_" + name];
    if (isUndefined(attrs)) {
      return current;
    }
    Object.keys(attrs).forEach(function (id) {
      _newArrowCheck(this, _this38);
      current[id] = attrs[id];
    }.bind(this));
    $$.redraw({
      withLegend: !0
    });
    return current;
  },
  getRangedData: function getRangedData(d, key, type) {
    if (key === void 0) {
      key = "";
    }
    if (type === void 0) {
      type = "areaRange";
    }
    const value = d == null ? void 0 : d.value;
    if (isArray(value)) {
      // @ts-ignore
      const index = {
        areaRange: ["high", "mid", "low"],
        candlestick: ["open", "high", "low", "close", "volume"]
      }[type].indexOf(key);
      return index >= 0 && value ? value[index] : undefined;
    } else if (value) {
      return value[key];
    }
    return value;
  },
  /**
   * Set ratio for grouped data
   * @param {Array} data Data array
   * @private
   */
  setRatioForGroupedData: function setRatioForGroupedData(data) {
    var _this39 = this;
    const $$ = this,
      config = $$.config;
    // calculate ratio if grouped data exists
    if (config.data_groups.length && data.some(function (d) {
      _newArrowCheck(this, _this39);
      return $$.isGrouped(d.id);
    }.bind(this))) {
      const setter = function (d) {
        _newArrowCheck(this, _this39);
        return $$.getRatio("index", d, !0);
      }.bind(this);
      data.forEach(function (v) {
        _newArrowCheck(this, _this39);
        "values" in v ? v.values.forEach(setter) : setter(v);
      }.bind(this));
    }
  },
  /**
   * Get ratio value
   * @param {string} type Ratio for given type
   * @param {object} d Data value object
   * @param {boolean} asPercent Convert the return as percent or not
   * @returns {number} Ratio value
   * @private
   */
  getRatio: function getRatio(type, d, asPercent) {
    var _this40 = this;
    if (asPercent === void 0) {
      asPercent = !1;
    }
    const $$ = this,
      config = $$.config,
      state = $$.state,
      api = $$.api;
    let ratio = 0;
    if (d && api.data.shown().length) {
      ratio = d.ratio || d.value;
      if (type === "arc") {
        // if has padAngle set, calculate rate based on value
        if ($$.pie.padAngle()()) {
          ratio = d.value / $$.getTotalDataSum(!0);

          // otherwise, based on the rendered angle value
        } else {
          const gaugeArcLength = config.gauge_fullCircle ? $$.getArcLength() : $$.getGaugeStartAngle() * -2,
            arcLength = $$.hasType("gauge") ? gaugeArcLength : Math.PI * 2;
          ratio = (d.endAngle - d.startAngle) / arcLength;
        }
      } else if (type === "index") {
        const dataValues = api.data.values.bind(api);
        let total = this.getTotalPerIndex();
        if (state.hiddenTargetIds.length) {
          let hiddenSum = dataValues(state.hiddenTargetIds, !1);
          if (hiddenSum.length) {
            hiddenSum = hiddenSum.reduce(function (acc, curr) {
              var _this41 = this;
              _newArrowCheck(this, _this40);
              return acc.map(function (v, i) {
                _newArrowCheck(this, _this41);
                return (isNumber(v) ? v : 0) + curr[i];
              }.bind(this));
            }.bind(this));
            total = total.map(function (v, i) {
              _newArrowCheck(this, _this40);
              return v - hiddenSum[i];
            }.bind(this));
          }
        }
        const divisor = total[d.index];
        d.ratio = isNumber(d.value) && total && divisor ? d.value / divisor : 0;
        ratio = d.ratio;
      } else if (type === "radar") {
        ratio = parseFloat(Math.max(d.value, 0) + "") / state.current.dataMax * config.radar_size_ratio;
      } else if (type === "bar") {
        const yScale = $$.getYScaleById.bind($$)(d.id),
          max = yScale.domain().reduce(function (a, c) {
            _newArrowCheck(this, _this40);
            return c - a;
          }.bind(this));
        // when all data are 0, return 0
        ratio = max === 0 ? 0 : Math.abs(d.value) / max;
      } else if (type === "treemap") {
        ratio /= $$.getTotalDataSum(!0);
      }
    }
    return asPercent && ratio ? ratio * 100 : ratio;
  },
  /**
   * Sort data index to be aligned with x axis.
   * @param {Array} tickValues Tick array values
   * @private
   */
  updateDataIndexByX: function updateDataIndexByX(tickValues) {
    var _this42 = this;
    const $$ = this,
      tickValueMap = tickValues.reduce(function (out, tick, index) {
        _newArrowCheck(this, _this42);
        out[+tick.x] = index;
        return out;
      }.bind(this), {});
    $$.data.targets.forEach(function (t) {
      var _this43 = this;
      _newArrowCheck(this, _this42);
      t.values.forEach(function (value, valueIndex) {
        _newArrowCheck(this, _this43);
        let index = tickValueMap[+value.x];
        if (index === undefined) {
          index = valueIndex;
        }
        value.index = index;
      }.bind(this));
    }.bind(this));
  },
  /**
   * Determine if bubble has dimension data
   * @param {object|Array} d data value
   * @returns {boolean}
   * @private
   */
  isBubbleZType: function isBubbleZType(d) {
    const $$ = this;
    return $$.isBubbleType(d) && (isObject(d.value) && ("z" in d.value || "y" in d.value) || isArray(d.value) && d.value.length >= 2);
  },
  /**
   * Determine if bar has ranged data
   * @param {Array} d data value
   * @returns {boolean}
   * @private
   */
  isBarRangeType: function isBarRangeType(d) {
    var _this44 = this;
    const $$ = this,
      value = d.value;
    return $$.isBarType(d) && isArray(value) && value.length >= 2 && value.every(function (v) {
      _newArrowCheck(this, _this44);
      return isNumber(v);
    }.bind(this));
  },
  /**
   * Get data object by id
   * @param {string} id data id
   * @returns {object}
   * @private
   */
  getDataById: function getDataById(id) {
    var _d$;
    const d = this.cache.get(id) || this.api.data(id);
    return (_d$ = d == null ? void 0 : d[0]) != null ? _d$ : d;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/data/load.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/**
 * Call done callback with resize after transition
 * @param {Function} fn Callback function
 * @param {boolean} resizeAfter Weather to resize chart after the load
 * @private
 */
function callDone(fn, resizeAfter) {
  if (resizeAfter === void 0) {
    resizeAfter = !1;
  }
  const $$ = this,
    api = $$.api;
  resizeAfter && $$.api.flush(!0);
  fn == null || fn.call(api);
}
/* harmony default export */ var load = ({
  load: function load(rawTargets, args) {
    var _this = this;
    const $$ = this,
      data = $$.data,
      append = args.append;
    let targets = rawTargets;
    if (targets) {
      // filter loading targets if needed
      if (args.filter) {
        targets = targets.filter(args.filter);
      }

      // set type if args.types || args.type specified
      if (args.type || args.types) {
        targets.forEach(function (t) {
          var _args$types;
          _newArrowCheck(this, _this);
          const type = ((_args$types = args.types) == null ? void 0 : _args$types[t.id]) || args.type;
          $$.setTargetType(t.id, type);
        }.bind(this));
      }

      // Update/Add data
      data.targets.forEach(function (d) {
        _newArrowCheck(this, _this);
        for (let i = 0; i < targets.length; i++) {
          if (d.id === targets[i].id) {
            d.values = append ? d.values.concat(targets[i].values) : targets[i].values;
            targets.splice(i, 1);
            break;
          }
        }
      }.bind(this));
      data.targets = data.targets.concat(targets); // add remained
    }

    // Set targets
    $$.updateTargets(data.targets);

    // Redraw with new targets
    $$.redraw({
      withUpdateOrgXDomain: !0,
      withUpdateXDomain: !0,
      withLegend: !0
    });

    // Update current state chart type and elements list after redraw
    $$.updateTypesElements();
    callDone.call($$, args.done, args.resizeAfter);
  },
  loadFromArgs: function loadFromArgs(args) {
    var _this2 = this;
    const $$ = this;

    // prevent load when chart is already destroyed
    if (!$$.config) {
      return;
    }

    // reset internally cached data
    $$.cache.reset();
    $$.convertData(args, function (d) {
      _newArrowCheck(this, _this2);
      const data = args.data || d;
      args.append && (data.__append__ = !0);
      data && $$.load($$.convertDataToTargets(data), args);
    }.bind(this));
  },
  unload: function unload(rawTargetIds, customDoneCb) {
    var _this3 = this;
    const $$ = this,
      state = $$.state,
      $el = $$.$el,
      $T = $$.$T;
    let done = customDoneCb,
      targetIds = rawTargetIds;
    // reset internally cached data
    $$.cache.reset();
    if (!done) {
      done = function () {
        _newArrowCheck(this, _this3);
      }.bind(this);
    }

    // filter existing target
    targetIds = targetIds.filter(function (id) {
      _newArrowCheck(this, _this3);
      return $$.hasTarget($$.data.targets, id);
    }.bind(this));

    // If no target, call done and return
    if (!targetIds || targetIds.length === 0) {
      done();
      return;
    }
    const targets = $el.svg.selectAll(targetIds.map(function (id) {
      _newArrowCheck(this, _this3);
      return $$.selectorTarget(id);
    }.bind(this)));
    $T(targets).style("opacity", "0").remove().call(endall, done);
    targetIds.forEach(function (id) {
      var _this4 = this;
      _newArrowCheck(this, _this3);
      // Reset fadein for future load
      state.withoutFadeIn[id] = !1;

      // Remove target's elements
      if ($el.legend) {
        $el.legend.selectAll("." + $LEGEND.legendItem + $$.getTargetSelectorSuffix(id)).remove();
      }

      // Remove target
      $$.data.targets = $$.data.targets.filter(function (t) {
        _newArrowCheck(this, _this4);
        return t.id !== id;
      }.bind(this));
    }.bind(this));

    // since treemap uses different data types, it needs to be transformed
    state.hasTreemap && $$.updateTargetsForTreemap($$.data.targets);

    // Update current state chart type and elements list after redraw
    $$.updateTypesElements();
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-drag","commonjs2":"d3-drag","amd":"d3-drag","root":"d3"}
var external_commonjs_d3_drag_commonjs2_d3_drag_amd_d3_drag_root_d3_ = __webpack_require__(7);
;// CONCATENATED MODULE: ./src/ChartInternal/interactions/interaction.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */





/* harmony default export */ var interactions_interaction = ({
  /**
   * Expand data shape/point
   * @param {number} index Index number
   * @param {string} id Data id
   * @param {boolean} reset Reset expand state
   * @private
   */
  setExpand: function setExpand(index, id, reset) {
    const $$ = this,
      config = $$.config,
      circle = $$.$el.circle;
    circle && config.point_focus_expand_enabled && $$.expandCircles(index, id, reset);

    // bar, candlestick
    $$.expandBarTypeShapes(!0, index, id, reset);
  },
  /**
   * Expand/Unexpand bar type shapes
   * @param {boolean} expand Expand or unexpand
   * @param {number} i Shape index
   * @param {string} id Data id
   * @param {boolean} reset Reset expand style
   * @private
   */
  expandBarTypeShapes: function expandBarTypeShapes(expand, i, id, reset) {
    var _this = this;
    if (expand === void 0) {
      expand = !0;
    }
    const $$ = this;
    ["bar", "candlestick"].filter(function (v) {
      _newArrowCheck(this, _this);
      return $$.$el[v];
    }.bind(this)).forEach(function (v) {
      _newArrowCheck(this, _this);
      reset && $$.$el[v].classed($COMMON.EXPANDED, !1);
      $$.getShapeByIndex(v, i, id).classed($COMMON.EXPANDED, expand);
    }.bind(this));
  },
  /**
   * Handle data.onover/out callback options
   * @param {boolean} isOver Over or not
   * @param {number|object} d data object
   * @private
   */
  setOverOut: function setOverOut(isOver, d) {
    var _this3 = this;
    const $$ = this,
      config = $$.config,
      _$$$state = $$.state,
      hasRadar = _$$$state.hasRadar,
      hasTreemap = _$$$state.hasTreemap,
      main = $$.$el.main,
      isArcTreemap = isObject(d);
    // Call event handler
    if (isArcTreemap || d !== -1) {
      const callback = config[isOver ? "data_onover" : "data_onout"].bind($$.api);
      config.color_onover && $$.setOverColor(isOver, d, isArcTreemap);
      if (isArcTreemap && "id") {
        const selector = hasTreemap ? $TREEMAP.treemap : $ARC.arc;
        callback(d, main.select("." + selector + $$.getTargetSelectorSuffix(d.id)).node());
      } else if (!config.tooltip_grouped) {
        const last = $$.cache.get(KEY.setOverOut) || [],
          shapesAtIndex = main.selectAll("." + $SHAPE.shape + "-" + d).filter(function (d) {
            return $$.isWithinShape(this, d);
          }),
          shape = shapesAtIndex.filter(function () {
            var _this2 = this;
            return last.every(function (v) {
              _newArrowCheck(this, _this2);
              return v !== this;
            }.bind(this));
          }); // select based on the index
        // filter if has new selection
        // call onout callback
        if (!isOver || shapesAtIndex.empty() || last.length === shape.size() && shape.nodes().every(function (v, i) {
          _newArrowCheck(this, _this3);
          return v !== last[i];
        }.bind(this))) {
          while (last.length) {
            const target = last.pop();
            config.data_onout.bind($$.api)((0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(target).datum(), target);
          }
        }

        // call onover callback
        shape.each(function () {
          if (isOver) {
            callback((0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).datum(), this);
            last.push(this);
          }
        });
        $$.cache.add(KEY.setOverOut, last);
      } else {
        if (isOver) {
          hasRadar && $$.isPointFocusOnly() ? $$.showCircleFocus($$.getAllValuesOnIndex(d, !0)) : $$.setExpand(d, null, !0);
        }
        $$.isMultipleX() || main.selectAll("." + $SHAPE.shape + "-" + d).each(function (d) {
          callback(d, this);
        });
      }
    }
  },
  /**
   * Call data.onover/out callback for touch event
   * @param {number|object} d target index or data object for Arc type
   * @private
   */
  callOverOutForTouch: function callOverOutForTouch(d) {
    const $$ = this,
      last = $$.cache.get(KEY.callOverOutForTouch);
    if (isObject(d) && last ? d.id !== last.id : d !== last) {
      (last || isNumber(last)) && $$.setOverOut(!1, last);
      (d || isNumber(d)) && $$.setOverOut(!0, d);
      $$.cache.add(KEY.callOverOutForTouch, d);
    }
  },
  /**
   * Return draggable selection function
   * @returns {Function}
   * @private
   */
  getDraggableSelection: function getDraggableSelection() {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state;
    return config.interaction_enabled && config.data_selection_draggable && $$.drag ? (0,external_commonjs_d3_drag_commonjs2_d3_drag_amd_d3_drag_root_d3_.drag)().on("drag", function (event) {
      state.event = event;
      $$.drag(getPointer(event, this));
    }).on("start", function (event) {
      state.event = event;
      $$.dragstart(getPointer(event, this));
    }).on("end", function (event) {
      _newArrowCheck(this, _this4);
      state.event = event;
      $$.dragend();
    }.bind(this)) : function () {
      _newArrowCheck(this, _this4);
    }.bind(this);
  },
  /**
   * Dispatch a mouse event.
   * @private
   * @param {string} type event type
   * @param {number} index Index of eventRect
   * @param {Array} mouse x and y coordinate value
   */
  dispatchEvent: function dispatchEvent(type, index, mouse) {
    var _ref;
    const $$ = this,
      config = $$.config,
      _$$$state2 = $$.state,
      eventReceiver = _$$$state2.eventReceiver,
      hasAxis = _$$$state2.hasAxis,
      hasRadar = _$$$state2.hasRadar,
      hasTreemap = _$$$state2.hasTreemap,
      _$$$$el = $$.$el,
      eventRect = _$$$$el.eventRect,
      radar = _$$$$el.radar,
      treemap = _$$$$el.treemap,
      element = (_ref = hasTreemap && eventReceiver.rect || hasRadar && radar.axes.select("." + $AXIS.axis + "-" + index + " text") || eventRect || ($$.getArcElementByIdOrIndex == null ? void 0 : $$.getArcElementByIdOrIndex(index))) == null ? void 0 : _ref.node();
    if (element) {
      const isMultipleX = $$.isMultipleX(),
        isRotated = config.axis_rotated;
      let _element$getBoundingC = element.getBoundingClientRect(),
        width = _element$getBoundingC.width,
        left = _element$getBoundingC.left,
        top = _element$getBoundingC.top;
      if (hasAxis && !hasRadar && !isMultipleX) {
        const coords = eventReceiver.coords[index];
        if (coords) {
          width = coords.w;
          left += coords.x;
          top += coords.y;
        } else {
          width = 0;
          left = 0;
          top = 0;
        }
      }
      const x = left + (mouse ? mouse[0] : 0) + (isMultipleX || isRotated ? 0 : width / 2),
        y = top + (mouse ? mouse[1] : 0) + (isRotated ? 4 : 0); // value 4, is to adjust coordinate value set from: scale.ts - updateScales(): $$.getResettedPadding(1)
      emulateEvent[/^(mouse|click)/.test(type) ? "mouse" : "touch"](hasTreemap ? treemap.node() : element, type, {
        screenX: x,
        screenY: y,
        clientX: x,
        clientY: y
      });
    }
  },
  setDragStatus: function setDragStatus(isDragging) {
    this.state.dragging = isDragging;
  },
  /**
   * Unbind zoom events
   * @private
   */
  unbindZoomEvent: function unbindZoomEvent() {
    const $$ = this,
      _$$$$el2 = $$.$el,
      eventRect = _$$$$el2.eventRect,
      zoomResetBtn = _$$$$el2.zoomResetBtn;
    eventRect == null || eventRect.on(".zoom wheel.zoom .drag", null);
    zoomResetBtn == null || zoomResetBtn.on("click", null).style("display", "none");
  },
  /**
   * Unbind all attached events
   * @private
   */
  unbindAllEvents: function unbindAllEvents() {
    var _this5 = this;
    const $$ = this,
      _$$$$el3 = $$.$el,
      arcs = _$$$$el3.arcs,
      eventRect = _$$$$el3.eventRect,
      legend = _$$$$el3.legend,
      region = _$$$$el3.region,
      svg = _$$$$el3.svg,
      treemap = _$$$$el3.treemap,
      brush = $$.brush;
    // detach all possible event types
    [svg, eventRect, region == null ? void 0 : region.list, brush == null ? void 0 : brush.getSelection(), arcs == null ? void 0 : arcs.selectAll("path"), legend == null ? void 0 : legend.selectAll("g"), treemap].forEach(function (v) {
      _newArrowCheck(this, _this5);
      return v == null ? void 0 : v.on("wheel click mouseover mousemove mouseout touchstart touchmove touchend touchstart.eventRect touchmove.eventRect touchend.eventRect .brush .drag .zoom wheel.zoom dblclick.zoom", null);
    }.bind(this));
    $$.unbindZoomEvent == null || $$.unbindZoomEvent();
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/class.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var internals_class = ({
  generateClass: function generateClass(prefix, targetId) {
    return " " + prefix + " " + (prefix + this.getTargetSelectorSuffix(targetId));
  },
  /**
   * Get class string
   * @param {string} type Shape type
   * @param {boolean} withShape Get with shape prefix
   * @returns {string} Class string
   * @private
   */
  getClass: function getClass(type, withShape) {
    var _this = this;
    const isPlural = /s$/.test(type),
      useIdKey = /^(area|arc|line|treemap)s?$/.test(type),
      key = isPlural ? "id" : "index";
    return function (d) {
      _newArrowCheck(this, _this);
      const data = d.data || d,
        result = (withShape ? this.generateClass(classes[isPlural ? "shapes" : "shape"], data[key]) : "") + this.generateClass(classes[type], data[useIdKey ? "id" : key]);
      return result.trim();
    }.bind(this);
  },
  /**
   * Get chart class string
   * @param {string} type Shape type
   * @returns {string} Class string
   * @private
   */
  getChartClass: function getChartClass(type) {
    var _this2 = this;
    return function (d) {
      _newArrowCheck(this, _this2);
      return classes["chart" + type] + this.classTarget((d.data ? d.data : d).id);
    }.bind(this);
  },
  generateExtraLineClass: function generateExtraLineClass() {
    const $$ = this,
      classes = $$.config.line_classes || [],
      ids = [];
    return function (d) {
      var _d$data;
      const id = d.id || ((_d$data = d.data) == null ? void 0 : _d$data.id) || d;
      if (ids.indexOf(id) < 0) {
        ids.push(id);
      }
      return classes[ids.indexOf(id) % classes.length];
    };
  },
  classRegion: function classRegion(d, i) {
    return this.generateClass(classes.region, i) + " " + ("class" in d ? d.class : "");
  },
  classTarget: function classTarget(id) {
    const additionalClassSuffix = this.config.data_classes[id];
    let additionalClass = "";
    if (additionalClassSuffix) {
      additionalClass = " " + classes.target + "-" + additionalClassSuffix;
    }
    return this.generateClass(classes.target, id) + additionalClass;
  },
  classFocus: function classFocus(d) {
    return this.classFocused(d) + this.classDefocused(d);
  },
  classFocused: function classFocused(d) {
    return " " + (this.state.focusedTargetIds.indexOf(d.id) >= 0 ? classes.focused : "");
  },
  classDefocused: function classDefocused(d) {
    return " " + (this.state.defocusedTargetIds.indexOf(d.id) >= 0 ? classes.defocused : "");
  },
  getTargetSelectorSuffix: function getTargetSelectorSuffix(targetId) {
    const targetStr = targetId || targetId === 0 ? "-" + targetId : "";
    return targetStr.replace(/([\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g, "-");
  },
  selectorTarget: function selectorTarget(id, prefix, postfix) {
    if (prefix === void 0) {
      prefix = "";
    }
    if (postfix === void 0) {
      postfix = "";
    }
    const target = this.getTargetSelectorSuffix(id);

    // select target & circle
    return prefix + "." + (classes.target + target) + " " + postfix + ", " + prefix + "." + (classes.circles + target) + " " + postfix;
  },
  selectorTargets: function selectorTargets(idsValue, prefix) {
    var _this3 = this;
    const ids = idsValue || [];
    return ids.length ? ids.map(function (id) {
      _newArrowCheck(this, _this3);
      return this.selectorTarget(id, prefix);
    }.bind(this)) : null;
  },
  selectorLegend: function selectorLegend(id) {
    return "." + (classes.legendItem + this.getTargetSelectorSuffix(id));
  },
  selectorLegends: function selectorLegends(ids) {
    var _this4 = this;
    return ids != null && ids.length ? ids.map(function (id) {
      _newArrowCheck(this, _this4);
      return this.selectorLegend(id);
    }.bind(this)) : null;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/category.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/* harmony default export */ var category = ({
  /**
   * Category Name
   * @param {number} i Index number
   * @returns {string} category Name
   * @private
   */
  categoryName: function categoryName(i) {
    var _axis_x_categories$i;
    const axis_x_categories = this.config.axis_x_categories;
    return (_axis_x_categories$i = axis_x_categories == null ? void 0 : axis_x_categories[i]) != null ? _axis_x_categories$i : i;
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-scale","commonjs2":"d3-scale","amd":"d3-scale","root":"d3"}
var external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_ = __webpack_require__(6);
;// CONCATENATED MODULE: ./src/ChartInternal/internals/color.ts

var color_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */






/**
 * Set pattern's background color
 * (it adds a <rect> element to simulate bg-color)
 * @param {SVGPatternElement} pattern SVG pattern element
 * @param {string} color Color string
 * @param {string} id ID to be set
 * @returns {{id: string, node: SVGPatternElement}}
 * @private
 */
const colorizePattern = function (pattern, color, id) {
  _newArrowCheck(this, color_this);
  const node = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(pattern.cloneNode(!0));
  node.attr("id", id).insert("rect", ":first-child").attr("width", node.attr("width")).attr("height", node.attr("height")).style("fill", color);
  return {
    id: id,
    node: node.node()
  };
}.bind(undefined);

/**
 * Get color pattern from CSS file
 * CSS should be defined as: background-image: url("#00c73c;#fa7171; ...");
 * @param {d3Selection} element Chart element
 * @returns {Array}
 * @private
 */
function getColorFromCss(element) {
  var _this2 = this;
  const cacheKey = KEY.colorPattern,
    body = browser_doc.body;
  let pattern = body[cacheKey];
  if (!pattern) {
    const content = element.classed($COLOR.colorPattern, !0).style("background-image");
    element.classed($COLOR.colorPattern, !1);
    if (content.indexOf(";") > -1) {
      pattern = content.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(";").map(function (v) {
        _newArrowCheck(this, _this2);
        return v.trim().replace(/[\"'\s]/g, "");
      }.bind(this)).filter(Boolean);
      body[cacheKey] = pattern;
    }
  }
  return pattern;
}

// Replacement of d3.schemeCategory10.
// Contained differently depend on d3 version: v4(d3-scale), v5(d3-scale-chromatic)
const schemeCategory10 = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];
/* harmony default export */ var internals_color = ({
  generateColor: function generateColor() {
    var _this3 = this;
    const $$ = this,
      $el = $$.$el,
      config = $$.config,
      colors = config.data_colors,
      callback = config.data_color,
      ids = [];
    let pattern = notEmpty(config.color_pattern) ? config.color_pattern : (0,external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_.scaleOrdinal)(getColorFromCss($el.chart) || schemeCategory10).range();
    const originalColorPattern = pattern;
    if (isFunction(config.color_tiles)) {
      const tiles = config.color_tiles.bind($$.api)(),
        colorizedPatterns = pattern.map(function (p, index) {
          _newArrowCheck(this, _this3);
          const color = p.replace(/[#\(\)\s,]/g, ""),
            id = $$.state.datetimeId + "-pattern-" + color + "-" + index;
          return colorizePattern(tiles[index % tiles.length], p, id);
        }.bind(this)); // Add background color to patterns
      pattern = colorizedPatterns.map(function (p) {
        _newArrowCheck(this, _this3);
        return "url(#" + p.id + ")";
      }.bind(this));
      $$.patterns = colorizedPatterns;
    }
    return function (d) {
      var _data;
      const id = d.id || ((_data = d.data) == null ? void 0 : _data.id) || d,
        isLine = $$.isTypeOf(id, ["line", "spline", "step"]) || !config.data_types[id];
      let color;

      // if callback function is provided
      if (isFunction(colors[id])) {
        color = colors[id].bind($$.api)(d);

        // if specified, choose that color
      } else if (colors[id]) {
        color = colors[id];

        // if not specified, choose from pattern
      } else {
        if (ids.indexOf(id) < 0) {
          ids.push(id);
        }
        color = isLine ? originalColorPattern[ids.indexOf(id) % originalColorPattern.length] : pattern[ids.indexOf(id) % pattern.length];
        colors[id] = color;
      }
      return isFunction(callback) ? callback.bind($$.api)(color, d) : color;
    };
  },
  generateLevelColor: function generateLevelColor() {
    const $$ = this,
      config = $$.config,
      colors = config.color_pattern,
      threshold = config.color_threshold,
      asValue = threshold.unit === "value",
      max = threshold.max || 100,
      values = threshold.values && threshold.values.length ? threshold.values : [];
    return notEmpty(threshold) ? function (value) {
      const v = asValue ? value : value * 100 / max;
      let color = colors[colors.length - 1];
      for (let i = 0, l = values.length; i < l; i++) {
        if (v <= values[i]) {
          color = colors[i];
          break;
        }
      }
      return color;
    } : null;
  },
  /**
   * Append data backgound color filter definition
   * @param {string} color Color string
   * @private
   */
  generateDataLabelBackgroundColorFilter: function generateDataLabelBackgroundColorFilter(color) {
    var _this4 = this;
    const $$ = this,
      $el = $$.$el,
      config = $$.config,
      state = $$.state,
      backgroundColors = color || config.data_labels_backgroundColors;
    if (backgroundColors) {
      let ids = [];
      if (isString(backgroundColors)) {
        ids.push("");
      } else if (isObject(backgroundColors)) {
        ids = Object.keys(backgroundColors);
      }
      ids.forEach(function (v) {
        _newArrowCheck(this, _this4);
        const id = state.datetimeId + "-labels-bg" + $$.getTargetSelectorSuffix(v) + (color ? $$.getTargetSelectorSuffix(color) : "");
        $el.defs.append("filter").attr("x", "0").attr("y", "0").attr("width", "1").attr("height", "1").attr("id", id).html("<feFlood flood-color=\"" + (v === "" ? backgroundColors : backgroundColors[v]) + "\" /><feComposite in=\"SourceGraphic\"/>");
      }.bind(this));
    }
  },
  /**
   * Get data gradient color url
   * @param {string} id Data id
   * @returns {string}
   * @private
   */
  getGradienColortUrl: function getGradienColortUrl(id) {
    return "url(#" + this.state.datetimeId + "-gradient" + this.getTargetSelectorSuffix(id) + ")";
  },
  /**
   * Update linear/radial gradient definition
   * - linear: area & bar only
   * - radial: type which has data points only
   * @private
   */
  updateLinearGradient: function updateLinearGradient() {
    var _this5 = this;
    const $$ = this,
      config = $$.config,
      targets = $$.data.targets,
      datetimeId = $$.state.datetimeId,
      defs = $$.$el.defs;
    targets.forEach(function (d) {
      var _this6 = this;
      _newArrowCheck(this, _this5);
      const id = datetimeId + "-gradient" + $$.getTargetSelectorSuffix(d.id),
        radialGradient = $$.hasPointType() && config.point_radialGradient,
        supportedType = $$.isAreaType(d) && "area" || $$.isBarType(d) && "bar";
      if ((radialGradient || supportedType) && defs.select("#" + id).empty()) {
        const color = $$.color(d),
          gradient = {
            defs: null,
            stops: []
          };
        if (radialGradient) {
          const _radialGradient = radialGradient,
            _radialGradient$cx = _radialGradient.cx,
            cx = _radialGradient$cx === void 0 ? .3 : _radialGradient$cx,
            _radialGradient$cy = _radialGradient.cy,
            cy = _radialGradient$cy === void 0 ? .3 : _radialGradient$cy,
            _radialGradient$r = _radialGradient.r,
            r = _radialGradient$r === void 0 ? .7 : _radialGradient$r,
            _radialGradient$stops = _radialGradient.stops,
            stops = _radialGradient$stops === void 0 ? [[.1, color, 0], [.9, color, 1]] : _radialGradient$stops;
          gradient.stops = stops;
          gradient.defs = defs.append("radialGradient").attr("id", "" + id).attr("cx", cx).attr("cy", cy).attr("r", r);
        } else {
          const isRotated = config.axis_rotated,
            _config = config[supportedType + "_linearGradient"],
            _config$x = _config.x,
            x = _config$x === void 0 ? isRotated ? [1, 0] : [0, 0] : _config$x,
            _config$y = _config.y,
            y = _config$y === void 0 ? isRotated ? [0, 0] : [0, 1] : _config$y,
            _config$stops = _config.stops,
            stops = _config$stops === void 0 ? [[0, color, 1], [1, color, 0]] : _config$stops;
          gradient.stops = stops;
          gradient.defs = defs.append("linearGradient").attr("id", "" + id).attr("x1", x[0]).attr("x2", x[1]).attr("y1", y[0]).attr("y2", y[1]);
        }
        gradient.stops.forEach(function (v) {
          _newArrowCheck(this, _this6);
          const offset = v[0],
            stopColor = v[1],
            stopOpacity = v[2],
            colorValue = isFunction(stopColor) ? stopColor.bind($$.api)(d.id) : stopColor;
          gradient.defs && gradient.defs.append("stop").attr("offset", offset).attr("stop-color", colorValue || color).attr("stop-opacity", stopOpacity);
        }.bind(this));
      }
    }.bind(this));
  },
  /**
   * Set the data over color.
   * When is out, will restate in its previous color value
   * @param {boolean} isOver true: set overed color, false: restore
   * @param {number|object} d target index or data object for Arc type
   * @private
   */
  setOverColor: function setOverColor(isOver, d) {
    var _this7 = this;
    const $$ = this,
      config = $$.config,
      main = $$.$el.main,
      onover = config.color_onover;
    let color = isOver ? onover : $$.color;
    if (isObject(color)) {
      color = function (_ref) {
        let id = _ref.id;
        _newArrowCheck(this, _this7);
        return id in onover ? onover[id] : $$.color(id);
      }.bind(this);
    } else if (isString(color)) {
      color = function () {
        _newArrowCheck(this, _this7);
        return onover;
      }.bind(this);
    } else if (isFunction(onover)) {
      color = color.bind($$.api);
    }
    main.selectAll(isObject(d) ? // when is Arc type
    "." + $ARC.arc + $$.getTargetSelectorSuffix(d.id) : "." + $SHAPE.shape + "-" + d).style("fill", color);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/domain.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var domain = ({
  getYDomainMinMax: function getYDomainMinMax(targets, type) {
    var _this = this;
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      isMin = type === "min",
      dataGroups = config.data_groups,
      ids = $$.mapToIds(targets),
      ys = $$.getValuesAsIdKeyed(targets);
    if (dataGroups.length > 0) {
      const hasValue = $$["has" + (isMin ? "Negative" : "Positive") + "ValueInTargets"](targets);
      dataGroups.forEach(function (groupIds) {
        var _this2 = this;
        _newArrowCheck(this, _this);
        // Determine baseId
        const idsInGroup = groupIds.filter(function (v) {
          _newArrowCheck(this, _this2);
          return ids.indexOf(v) >= 0;
        }.bind(this));
        if (idsInGroup.length) {
          const baseId = idsInGroup[0],
            baseAxisId = axis.getId(baseId);
          // Initialize base value. Set to 0 if not match with the condition
          if (hasValue && ys[baseId]) {
            ys[baseId] = ys[baseId].map(function (v) {
              _newArrowCheck(this, _this2);
              return (isMin ? v < 0 : v > 0) ? v : 0;
            }.bind(this));
          }
          idsInGroup.filter(function (v, i) {
            _newArrowCheck(this, _this2);
            return i > 0;
          }.bind(this)).forEach(function (id) {
            var _this3 = this;
            _newArrowCheck(this, _this2);
            if (ys[id]) {
              const axisId = axis.getId(id);
              ys[id].forEach(function (v, i) {
                _newArrowCheck(this, _this3);
                const val = +v,
                  meetCondition = isMin ? val > 0 : val < 0;
                if (axisId === baseAxisId && !(hasValue && meetCondition)) {
                  ys[baseId][i] += val;
                }
              }.bind(this));
            }
          }.bind(this));
        }
      }.bind(this));
    }
    return getMinMax(type, Object.keys(ys).map(function (key) {
      _newArrowCheck(this, _this);
      return getMinMax(type, ys[key]);
    }.bind(this)));
  },
  /**
   * Check if hidden targets bound to the given axis id
   * @param {string} id ID to be checked
   * @returns {boolean}
   * @private
   */
  isHiddenTargetWithYDomain: function isHiddenTargetWithYDomain(id) {
    var _this4 = this;
    const $$ = this;
    return $$.state.hiddenTargetIds.some(function (v) {
      _newArrowCheck(this, _this4);
      return $$.axis.getId(v) === id;
    }.bind(this));
  },
  getYDomain: function getYDomain(targets, axisId, xDomain) {
    var _this5 = this;
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      scale = $$.scale,
      pfx = "axis_" + axisId;
    if ($$.isStackNormalized()) {
      return [0, 100];
    }
    const isLog = (scale == null ? void 0 : scale[axisId]) && scale[axisId].type === "log",
      targetsByAxisId = targets.filter(function (t) {
        _newArrowCheck(this, _this5);
        return axis.getId(t.id) === axisId;
      }.bind(this)),
      yTargets = xDomain ? $$.filterByXDomain(targetsByAxisId, xDomain) : targetsByAxisId;
    if (yTargets.length === 0) {
      // use domain of the other axis if target of axisId is none
      if ($$.isHiddenTargetWithYDomain(axisId)) {
        return scale[axisId].domain();
      } else {
        return axisId === "y2" ? scale.y.domain() :
        // When all data bounds to y2, y Axis domain is called prior y2.
        // So, it needs to call to get y2 domain here
        $$.getYDomain(targets, "y2", xDomain);
      }
    }
    const yMin = config[pfx + "_min"],
      yMax = config[pfx + "_max"],
      center = config[pfx + "_center"],
      isInverted = config[pfx + "_inverted"],
      showHorizontalDataLabel = $$.hasDataLabel() && config.axis_rotated,
      showVerticalDataLabel = $$.hasDataLabel() && !config.axis_rotated;
    let yDomainMin = $$.getYDomainMinMax(yTargets, "min"),
      yDomainMax = $$.getYDomainMinMax(yTargets, "max"),
      isZeroBased = [TYPE.BAR, TYPE.BUBBLE, TYPE.SCATTER].concat(TYPE_BY_CATEGORY.Line).some(function (v) {
        _newArrowCheck(this, _this5);
        const type = v.indexOf("area") > -1 ? "area" : v;
        return $$.hasType(v, yTargets, !0) && config[type + "_zerobased"];
      }.bind(this));
    // MEMO: avoid inverting domain unexpectedly
    yDomainMin = isValue(yMin) ? yMin : isValue(yMax) ? yDomainMin <= yMax ? yDomainMin : yMax - 10 : yDomainMin;
    yDomainMax = isValue(yMax) ? yMax : isValue(yMin) ? yMin <= yDomainMax ? yDomainMax : yMin + 10 : yDomainMax;
    if (isNaN(yDomainMin)) {
      // set minimum to zero when not number
      yDomainMin = 0;
    }
    if (isNaN(yDomainMax)) {
      // set maximum to have same value as yDomainMin
      yDomainMax = yDomainMin;
    }
    if (yDomainMin === yDomainMax) {
      yDomainMin < 0 ? yDomainMax = 0 : yDomainMin = 0;
    }
    const isAllPositive = yDomainMin >= 0 && yDomainMax >= 0,
      isAllNegative = yDomainMin <= 0 && yDomainMax <= 0;
    // Cancel zerobased if axis_*_min / axis_*_max specified
    if (isValue(yMin) && isAllPositive || isValue(yMax) && isAllNegative) {
      isZeroBased = !1;
    }

    // Bar/Area chart should be 0-based if all positive|negative
    if (isZeroBased) {
      isAllPositive && (yDomainMin = 0);
      isAllNegative && (yDomainMax = 0);
    }
    const domainLength = Math.abs(yDomainMax - yDomainMin);
    let padding = {
      top: domainLength * .1,
      bottom: domainLength * .1
    };
    if (isDefined(center)) {
      const yDomainAbs = Math.max(Math.abs(yDomainMin), Math.abs(yDomainMax));
      yDomainMax = center + yDomainAbs;
      yDomainMin = center - yDomainAbs;
    }

    // add padding for data label
    if (showHorizontalDataLabel) {
      const diff = diffDomain(scale.y.range()),
        ratio = $$.getDataLabelLength(yDomainMin, yDomainMax, "width").map(function (v) {
          _newArrowCheck(this, _this5);
          return v / diff;
        }.bind(this));
      ["bottom", "top"].forEach(function (v, i) {
        _newArrowCheck(this, _this5);
        padding[v] += domainLength * (ratio[i] / (1 - ratio[0] - ratio[1]));
      }.bind(this));
    } else if (showVerticalDataLabel) {
      const lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, "height");
      ["bottom", "top"].forEach(function (v, i) {
        _newArrowCheck(this, _this5);
        padding[v] += $$.convertPixelToScale("y", lengths[i], domainLength);
      }.bind(this));
    }
    padding = $$.getResettedPadding(padding);

    // if padding is set, the domain will be updated relative the current domain value
    // ex) $$.height=300, padding.top=150, domainLength=4  --> domain=6
    const p = config[pfx + "_padding"];
    if (notEmpty(p)) {
      ["bottom", "top"].forEach(function (v) {
        _newArrowCheck(this, _this5);
        padding[v] = axis.getPadding(p, v, padding[v], domainLength);
      }.bind(this));
    }

    // Bar/Area chart should be 0-based if all positive|negative
    if (isZeroBased) {
      isAllPositive && (padding.bottom = yDomainMin);
      isAllNegative && (padding.top = -yDomainMax);
    }
    const domain = isLog ? [yDomainMin, yDomainMax].map(function (v) {
      _newArrowCheck(this, _this5);
      return v < 0 ? 0 : v;
    }.bind(this)) : [yDomainMin - padding.bottom, yDomainMax + padding.top];
    return isInverted ? domain.reverse() : domain;
  },
  getXDomainMinMax: function getXDomainMinMax(targets, type) {
    var _this6 = this,
      _$$$axis;
    const $$ = this,
      configValue = $$.config["axis_x_" + type],
      dataValue = getMinMax(type, targets.map(function (t) {
        var _this7 = this;
        _newArrowCheck(this, _this6);
        return getMinMax(type, t.values.map(function (v) {
          _newArrowCheck(this, _this7);
          return v.x;
        }.bind(this)));
      }.bind(this)));
    let value = isObject(configValue) ? configValue.value : configValue;
    value = isDefined(value) && (_$$$axis = $$.axis) != null && _$$$axis.isTimeSeries() ? parseDate.bind(this)(value) : value;
    if (isObject(configValue) && configValue.fit && (type === "min" && value < dataValue || type === "max" && value > dataValue)) {
      value = undefined;
    }
    return isDefined(value) ? value : dataValue;
  },
  /**
   * Get x Axis padding
   * @param {Array} domain x Axis domain
   * @param {number} tickCount Tick count
   * @returns {object} Padding object values with 'left' & 'right' key
   * @private
   */
  getXDomainPadding: function getXDomainPadding(domain, tickCount) {
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      padding = config.axis_x_padding,
      isTimeSeriesTickCount = axis.isTimeSeries() && tickCount,
      diff = diffDomain(domain);
    let defaultValue;

    // determine default padding value
    if (axis.isCategorized() || isTimeSeriesTickCount) {
      defaultValue = 0;
    } else if ($$.hasType("bar")) {
      const maxDataCount = $$.getMaxDataCount();
      defaultValue = maxDataCount > 1 ? diff / (maxDataCount - 1) / 2 : .5;
    } else {
      defaultValue = $$.getResettedPadding(diff * .01);
    }
    let _ref = isNumber(padding) ? {
        left: padding,
        right: padding
      } : padding,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? defaultValue : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? defaultValue : _ref$right;

    // when the unit is pixel, convert pixels to axis scale value
    if (padding.unit === "px") {
      const domainLength = Math.abs(diff + diff * .2);
      left = axis.getPadding(padding, "left", defaultValue, domainLength);
      right = axis.getPadding(padding, "right", defaultValue, domainLength);
    } else {
      const range = diff + left + right;
      if (isTimeSeriesTickCount && range) {
        const relativeTickWidth = diff / tickCount / range;
        left = left / range / relativeTickWidth;
        right = right / range / relativeTickWidth;
      }
    }
    return {
      left: left,
      right: right
    };
  },
  /**
   * Get x Axis domain
   * @param {Array} targets targets
   * @returns {Array} x Axis domain
   * @private
   */
  getXDomain: function getXDomain(targets) {
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      x = $$.scale.x,
      isInverted = config.axis_x_inverted,
      domain = [$$.getXDomainMinMax(targets, "min"), $$.getXDomainMinMax(targets, "max")];
    let _domain$ = domain[0],
      min = _domain$ === void 0 ? 0 : _domain$,
      _domain$2 = domain[1],
      max = _domain$2 === void 0 ? 0 : _domain$2;
    if (x.type !== "log") {
      const isCategorized = axis.isCategorized(),
        isTimeSeries = axis.isTimeSeries(),
        padding = $$.getXDomainPadding(domain);
      let firstX = domain[0],
        lastX = domain[1];

      // show center of x domain if min and max are the same
      if (firstX - lastX === 0 && !isCategorized) {
        if (isTimeSeries) {
          firstX = new Date(firstX.getTime() * .5);
          lastX = new Date(lastX.getTime() * 1.5);
        } else {
          firstX = firstX === 0 ? 1 : firstX * .5;
          lastX = lastX === 0 ? -1 : lastX * 1.5;
        }
      }
      if (firstX || firstX === 0) {
        min = isTimeSeries ? new Date(firstX.getTime() - padding.left) : firstX - padding.left;
      }
      if (lastX || lastX === 0) {
        max = isTimeSeries ? new Date(lastX.getTime() + padding.right) : lastX + padding.right;
      }
    }
    return isInverted ? [max, min] : [min, max];
  },
  updateXDomain: function updateXDomain(targets, withUpdateXDomain, withUpdateOrgXDomain, withTrim, domain) {
    const $$ = this,
      config = $$.config,
      org = $$.org,
      _$$$scale = $$.scale,
      x = _$$$scale.x,
      subX = _$$$scale.subX,
      zoomEnabled = config.zoom_enabled;
    if (withUpdateOrgXDomain) {
      var _$$$brush;
      x.domain(domain || sortValue($$.getXDomain(targets), !config.axis_x_inverted));
      org.xDomain = x.domain();

      // zoomEnabled && $$.zoom.updateScaleExtent();

      subX.domain(x.domain());
      (_$$$brush = $$.brush) == null || _$$$brush.scale(subX);
    }
    if (withUpdateXDomain) {
      const domainValue = domain || !$$.brush || brushEmpty($$) ? org.xDomain : getBrushSelection($$).map(subX.invert);
      x.domain(domainValue);
      // zoomEnabled && $$.zoom.updateScaleExtent();
    }

    if (withUpdateOrgXDomain || withUpdateXDomain) {
      zoomEnabled && $$.zoom.updateScaleExtent();
    }

    // Trim domain when too big by zoom mousemove event
    withTrim && x.domain($$.trimXDomain(x.orgDomain()));
    return x.domain();
  },
  /**
   * Trim x domain when given domain surpasses the range
   * @param {Array} domain Domain value
   * @returns {Array} Trimed domain if given domain is out of range
   * @private
   */
  trimXDomain: function trimXDomain(domain) {
    const $$ = this,
      isInverted = $$.config.axis_x_inverted,
      zoomDomain = $$.getZoomDomain(),
      _zoomDomain = zoomDomain,
      min = _zoomDomain[0],
      max = _zoomDomain[1];
    if (isInverted ? domain[0] >= min : domain[0] <= min) {
      domain[1] = +domain[1] + (min - domain[0]);
      domain[0] = min;
    }
    if (isInverted ? domain[1] <= max : domain[1] >= max) {
      domain[0] = +domain[0] - (domain[1] - max);
      domain[1] = max;
    }
    return domain;
  },
  /**
   * Get subchart/zoom domain
   * @param {string} type "subX" or "zoom"
   * @param {boolean} getCurrent Get current domain if true
   * @returns {Array} zoom domain
   * @private
   */
  getZoomDomain: function getZoomDomain(type, getCurrent) {
    if (type === void 0) {
      type = "zoom";
    }
    if (getCurrent === void 0) {
      getCurrent = !1;
    }
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      org = $$.org;
    let _ref2 = getCurrent && scale[type] ? scale[type].domain() : org.xDomain,
      min = _ref2[0],
      max = _ref2[1];
    if (type === "zoom") {
      if (isDefined(config.zoom_x_min)) {
        min = getMinMax("min", [min, config.zoom_x_min]);
      }
      if (isDefined(config.zoom_x_max)) {
        max = getMinMax("max", [max, config.zoom_x_max]);
      }
    }
    return [min, max];
  },
  /**
   * Converts pixels to axis' scale values
   * @param {string} type Axis type
   * @param {number} pixels Pixels
   * @param {number} domainLength Domain length
   * @returns {number}
   * @private
   */
  convertPixelToScale: function convertPixelToScale(type, pixels, domainLength) {
    const $$ = this,
      config = $$.config,
      state = $$.state,
      isRotated = config.axis_rotated;
    let length;
    if (type === "x") {
      length = isRotated ? "height" : "width";
    } else {
      length = isRotated ? "width" : "height";
    }
    return domainLength * (pixels / state[length]);
  },
  /**
   * Check if the given domain is within subchart/zoom range
   * @param {Array} domain Target domain value
   * @param {Array} current Current subchart/zoom domain value
   * @param {Array} range subchart/zoom range value
   * @returns {boolean}
   * @private
   */
  withinRange: function withinRange(domain, current, range) {
    var _this8 = this;
    const $$ = this,
      isInverted = $$.config.axis_x_inverted,
      _ref3 = range,
      min = _ref3[0],
      max = _ref3[1];
    if (Array.isArray(domain)) {
      const target = [].concat(domain);
      isInverted && target.reverse();
      if (target[0] < target[1]) {
        return domain.every(function (v, i) {
          var _this9 = this;
          _newArrowCheck(this, _this8);
          return (i === 0 ? isInverted ? +v <= min : +v >= min : isInverted ? +v >= max : +v <= max) && !domain.every(function (v, i) {
            _newArrowCheck(this, _this9);
            return v === current[i];
          }.bind(this));
        }.bind(this));
      }
    }
    return !1;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/format.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Get formatted
 * @param {object} $$ Context
 * @param {string} typeValue Axis type
 * @param {number} v Value to be formatted
 * @returns {number | string}
 * @private
 */
function getFormat($$, typeValue, v) {
  const config = $$.config,
    type = "axis_" + typeValue + "_tick_format",
    format = config[type] ? config[type] : $$.defaultValueFormat;
  return format.call($$.api, v);
}
/* harmony default export */ var format = ({
  yFormat: function yFormat(v) {
    return getFormat(this, "y", v);
  },
  y2Format: function y2Format(v) {
    return getFormat(this, "y2", v);
  },
  /**
   * Get default value format function
   * @returns {Function} formatter function
   * @private
   */
  getDefaultValueFormat: function getDefaultValueFormat() {
    const $$ = this,
      defaultArcValueFormat = $$.defaultArcValueFormat,
      yFormat = $$.yFormat,
      y2Format = $$.y2Format,
      hasArc = $$.hasArcType(null, ["gauge", "polar", "radar"]);
    return function (v, ratio, id) {
      const format = hasArc ? defaultArcValueFormat : $$.axis && $$.axis.getId(id) === "y2" ? y2Format : yFormat;
      return format.call($$, v, ratio);
    };
  },
  defaultValueFormat: function defaultValueFormat(v) {
    return isValue(v) ? +v : "";
  },
  defaultArcValueFormat: function defaultArcValueFormat(v, ratio) {
    return (ratio * 100).toFixed(1) + "%";
  },
  defaultPolarValueFormat: function defaultPolarValueFormat(v) {
    return "" + v;
  },
  dataLabelFormat: function dataLabelFormat(targetId) {
    var _this = this;
    const $$ = this,
      dataLabels = $$.config.data_labels,
      defaultFormat = function (v) {
        _newArrowCheck(this, _this);
        return isValue(v) ? +v : "";
      }.bind(this);
    let format = defaultFormat;

    // find format according to axis id
    if (isFunction(dataLabels.format)) {
      format = dataLabels.format;
    } else if (isObjectType(dataLabels.format)) {
      if (dataLabels.format[targetId]) {
        format = dataLabels.format[targetId] === !0 ? defaultFormat : dataLabels.format[targetId];
      } else {
        format = function () {
          _newArrowCheck(this, _this);
          return "";
        }.bind(this);
      }
    }
    return format.bind($$.api);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/legend.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */






/**
 * Get color string for given data id
 * @param {string} id Data id
 * @returns {string} Color string
 * @private
 */
function getLegendColor(id) {
  const $$ = this,
    data = $$.getDataById(id),
    color = $$.levelColor ? $$.levelColor(data.values[0].value) : $$.color(data);
  return color;
}
/* harmony default export */ var internals_legend = ({
  /**
   * Initialize the legend.
   * @private
   */
  initLegend: function initLegend() {
    const $$ = this,
      config = $$.config,
      $el = $$.$el;
    $$.legendItemTextBox = {};
    $$.state.legendHasRendered = !1;
    if (config.legend_show) {
      if (!config.legend_contents_bindto) {
        $el.legend = $$.$el.svg.append("g").classed($LEGEND.legend, !0).attr("transform", $$.getTranslate("legend"));
      }

      // MEMO: call here to update legend box and translate for all
      // MEMO: translate will be updated by this, so transform not needed in updateLegend()
      $$.updateLegend();
    } else {
      $$.state.hiddenLegendIds = $$.mapToIds($$.data.targets);
    }
  },
  /**
   * Update legend element
   * @param {Array} targetIds ID's of target
   * @param {object} options withTransform : Whether to use the transform property / withTransitionForTransform: Whether transition is used when using the transform property / withTransition : whether or not to transition.
   * @param {object} transitions Return value of the generateTransitions
   * @private
   */
  updateLegend: function updateLegend(targetIds, options, transitions) {
    var _$el$legend;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      scale = $$.scale,
      $el = $$.$el,
      optionz = options || {
        withTransform: !1,
        withTransitionForTransform: !1,
        withTransition: !1
      };
    optionz.withTransition = getOption(optionz, "withTransition", !0);
    optionz.withTransitionForTransform = getOption(optionz, "withTransitionForTransform", !0);
    if (config.legend_contents_bindto && config.legend_contents_template) {
      $$.updateLegendTemplate();
    } else if (!state.hasTreemap) {
      $$.updateLegendElement(targetIds || $$.mapToIds($$.data.targets), optionz, transitions);
    }

    // toggle legend state
    (_$el$legend = $el.legend) == null || _$el$legend.selectAll("." + $LEGEND.legendItem).classed($LEGEND.legendItemHidden, function (id) {
      const hide = !$$.isTargetToShow(id);
      if (hide) {
        this.style.opacity = null;
      }
      return hide;
    });

    // Update size and scale
    $$.updateScales(!1, !scale.zoom);
    $$.updateSvgSize();

    // Update g positions
    $$.transformAll(optionz.withTransitionForTransform, transitions);
    state.legendHasRendered = !0;
  },
  /**
   * Update legend using template option
   * @private
   */
  updateLegendTemplate: function updateLegendTemplate() {
    var _this = this;
    const $$ = this,
      config = $$.config,
      $el = $$.$el,
      wrapper = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(config.legend_contents_bindto),
      template = config.legend_contents_template;
    if (!wrapper.empty()) {
      const targets = $$.mapToIds($$.data.targets),
        ids = [];
      let html = "";
      targets.forEach(function (v) {
        _newArrowCheck(this, _this);
        const content = isFunction(template) ? template.bind($$.api)(v, $$.color(v), $$.api.data(v)[0].values) : tplProcess(template, {
          COLOR: $$.color(v),
          TITLE: v
        });
        if (content) {
          ids.push(v);
          html += content;
        }
      }.bind(this));
      const legendItem = wrapper.html(html).selectAll(function () {
        return this.childNodes;
      }).data(ids);
      $$.setLegendItem(legendItem);
      $el.legend = wrapper;
    }
  },
  /**
   * Update the size of the legend.
   * @param {Obejct} size Size object
   * @private
   */
  updateSizeForLegend: function updateSizeForLegend(size) {
    const $$ = this,
      config = $$.config,
      _$$$state = $$.state,
      isLegendTop = _$$$state.isLegendTop,
      isLegendLeft = _$$$state.isLegendLeft,
      isLegendRight = _$$$state.isLegendRight,
      isLegendInset = _$$$state.isLegendInset,
      current = _$$$state.current,
      width = size.width,
      height = size.height,
      insetLegendPosition = {
        top: isLegendTop ? $$.getCurrentPaddingByDirection("top") + config.legend_inset_y + 5.5 : current.height - height - $$.getCurrentPaddingByDirection("bottom") - config.legend_inset_y,
        left: isLegendLeft ? $$.getCurrentPaddingByDirection("left") + config.legend_inset_x + .5 : current.width - width - $$.getCurrentPaddingByDirection("right") - config.legend_inset_x + .5
      };
    $$.state.margin3 = {
      top: isLegendRight ? 0 : isLegendInset ? insetLegendPosition.top : current.height - height,
      right: NaN,
      bottom: 0,
      left: isLegendRight ? current.width - width : isLegendInset ? insetLegendPosition.left : 0
    };
  },
  /**
   * Transform Legend
   * @param {boolean} withTransition whether or not to transition.
   * @private
   */
  transformLegend: function transformLegend(withTransition) {
    const $$ = this,
      legend = $$.$el.legend,
      $T = $$.$T;
    $T(legend, withTransition).attr("transform", $$.getTranslate("legend"));
  },
  /**
   * Update the legend step
   * @param {number} step Step value
   * @private
   */
  updateLegendStep: function updateLegendStep(step) {
    this.state.legendStep = step;
  },
  /**
   * Update legend item width
   * @param {number} width Width value
   * @private
   */
  updateLegendItemWidth: function updateLegendItemWidth(width) {
    this.state.legendItemWidth = width;
  },
  /**
   * Update legend item height
   * @param {number} height Height value
   * @private
   */
  updateLegendItemHeight: function updateLegendItemHeight(height) {
    this.state.legendItemHeight = height;
  },
  /**
   * Update legend item color
   * @param {string} id Corresponding data ID value
   * @param {string} color Color value
   * @private
   */
  updateLegendItemColor: function updateLegendItemColor(id, color) {
    const legend = this.$el.legend;
    if (legend) {
      legend.select("." + $LEGEND.legendItem + "-" + id + " line").style("stroke", color);
    }
  },
  /**
   * Get the width of the legend
   * @returns {number} width
   * @private
   */
  getLegendWidth: function getLegendWidth() {
    const $$ = this,
      _$$$state2 = $$.state,
      width = _$$$state2.current.width,
      isLegendRight = _$$$state2.isLegendRight,
      isLegendInset = _$$$state2.isLegendInset,
      legendItemWidth = _$$$state2.legendItemWidth,
      legendStep = _$$$state2.legendStep;
    return $$.config.legend_show ? isLegendRight || isLegendInset ? legendItemWidth * (legendStep + 1) : width : 0;
  },
  /**
   * Get the height of the legend
   * @returns {number} height
   * @private
   */
  getLegendHeight: function getLegendHeight() {
    var _$$$config$padding;
    const $$ = this,
      _$$$state3 = $$.state,
      current = _$$$state3.current,
      isLegendRight = _$$$state3.isLegendRight,
      legendItemHeight = _$$$state3.legendItemHeight,
      legendStep = _$$$state3.legendStep,
      isFitPadding = ((_$$$config$padding = $$.config.padding) == null ? void 0 : _$$$config$padding.mode) === "fit";
    return $$.config.legend_show ? isLegendRight ? current.height : (isFitPadding ? 10 : Math.max(20, legendItemHeight)) * (legendStep + 1) : 0;
  },
  /**
   * Get the opacity of the legend that is unfocused
   * @param {d3.selection} legendItem Legend item node
   * @returns {string|null} opacity
   * @private
   */
  opacityForUnfocusedLegend: function opacityForUnfocusedLegend(legendItem) {
    return legendItem.classed($LEGEND.legendItemHidden) ? null : "0.3";
  },
  /**
   * Toggles the focus of the legend
   * @param {Array} targetIds ID's of target
   * @param {boolean} focus whether or not to focus.
   * @private
   */
  toggleFocusLegend: function toggleFocusLegend(targetIds, focus) {
    var _this2 = this;
    const $$ = this,
      legend = $$.$el.legend,
      $T = $$.$T,
      targetIdz = $$.mapToTargetIds(targetIds);
    legend && $T(legend.selectAll("." + $LEGEND.legendItem).filter(function (id) {
      _newArrowCheck(this, _this2);
      return targetIdz.indexOf(id) >= 0;
    }.bind(this)).classed($FOCUS.legendItemFocused, focus)).style("opacity", function () {
      return focus ? null : $$.opacityForUnfocusedLegend.call($$, (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this));
    });
  },
  /**
   * Revert the legend to its default state
   * @private
   */
  revertLegend: function revertLegend() {
    const $$ = this,
      legend = $$.$el.legend,
      $T = $$.$T;
    legend && $T(legend.selectAll("." + $LEGEND.legendItem).classed($FOCUS.legendItemFocused, !1)).style("opacity", null);
  },
  /**
   * Shows the legend
   * @param {Array} targetIds ID's of target
   * @private
   */
  showLegend: function showLegend(targetIds) {
    const $$ = this,
      config = $$.config,
      $el = $$.$el,
      $T = $$.$T;
    if (!config.legend_show) {
      config.legend_show = !0;
      $el.legend ? $el.legend.style("visibility", null) : $$.initLegend();
      $$.state.legendHasRendered || $$.updateLegend();
    }
    $$.removeHiddenLegendIds(targetIds);
    $T($el.legend.selectAll($$.selectorLegends(targetIds)).style("visibility", null)).style("opacity", null);
  },
  /**
   * Hide the legend
   * @param {Array} targetIds ID's of target
   * @private
   */
  hideLegend: function hideLegend(targetIds) {
    const $$ = this,
      config = $$.config,
      legend = $$.$el.legend;
    if (config.legend_show && isEmpty(targetIds)) {
      config.legend_show = !1;
      legend.style("visibility", "hidden");
    }
    $$.addHiddenLegendIds(targetIds);
    legend.selectAll($$.selectorLegends(targetIds)).style("opacity", "0").style("visibility", "hidden");
  },
  /**
   * Get legend item textbox dimension
   * @param {string} id Data ID
   * @param {HTMLElement|d3.selection} textElement Text node element
   * @returns {object} Bounding rect
   * @private
   */
  getLegendItemTextBox: function getLegendItemTextBox(id, textElement) {
    const $$ = this,
      cache = $$.cache,
      state = $$.state;
    let data;

    // do not prefix w/'$', to not be resetted cache in .load() call
    const cacheKey = KEY.legendItemTextBox;
    if (id) {
      data = !state.redrawing && cache.get(cacheKey) || {};
      if (!data[id]) {
        data[id] = $$.getTextRect(textElement, $LEGEND.legendItem);
        cache.add(cacheKey, data);
      }
      data = data[id];
    }
    return data;
  },
  /**
   * Set legend item style & bind events
   * @param {d3.selection} item Item node
   * @private
   */
  setLegendItem: function setLegendItem(item) {
    var _this3 = this;
    const $$ = this,
      $el = $$.$el,
      api = $$.api,
      config = $$.config,
      state = $$.state,
      isTouch = state.inputType === "touch",
      hasGauge = $$.hasType("gauge"),
      useCssRule = config.boost_useCssRule,
      interaction = config.legend_item_interaction;
    item.attr("class", function (id) {
      const node = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this),
        itemClass = !node.empty() && node.attr("class") || "";
      return itemClass + $$.generateClass($LEGEND.legendItem, id);
    }).style("visibility", function (id) {
      _newArrowCheck(this, _this3);
      return $$.isLegendToShow(id) ? null : "hidden";
    }.bind(this));
    if (config.interaction_enabled) {
      if (useCssRule) {
        [["." + $LEGEND.legendItem, "cursor:pointer"], ["." + $LEGEND.legendItem + " text", "pointer-events:none"], ["." + $LEGEND.legendItemPoint + " text", "pointer-events:none"], ["." + $LEGEND.legendItemTile, "pointer-events:none"], ["." + $LEGEND.legendItemEvent, "fill-opacity:0"]].forEach(function (v) {
          _newArrowCheck(this, _this3);
          const selector = v[0],
            props = v[1];
          $$.setCssRule(!1, selector, [props])($el.legend);
        }.bind(this));
      }
      item.on(interaction.dblclick ? "dblclick" : "click", interaction || isFunction(config.legend_item_onclick) ? function (event, id) {
        if (!callFn(config.legend_item_onclick, api, id)) {
          const altKey = event.altKey,
            target = event.target,
            type = event.type;
          if (type === "dblclick" || altKey) {
            // when focused legend is clicked(with altKey or double clicked), reset all hiding.
            if (state.hiddenTargetIds.length && target.parentNode.getAttribute("class").indexOf($LEGEND.legendItemHidden) === -1) {
              api.show();
            } else {
              api.hide();
              api.show(id);
            }
          } else {
            api.toggle(id);
            (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).classed($FOCUS.legendItemFocused, !1);
          }
        }
        isTouch && $$.hideTooltip();
      } : null);
      isTouch || item.on("mouseout", interaction || isFunction(config.legend_item_onout) ? function (event, id) {
        if (!callFn(config.legend_item_onout, api, id)) {
          (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).classed($FOCUS.legendItemFocused, !1);
          if (hasGauge) {
            $$.undoMarkOverlapped($$, "." + $GAUGE.gaugeValue);
          }
          $$.api.revert();
        }
      } : null).on("mouseover", interaction || isFunction(config.legend_item_onover) ? function (event, id) {
        if (!callFn(config.legend_item_onover, api, id)) {
          (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).classed($FOCUS.legendItemFocused, !0);
          if (hasGauge) {
            $$.markOverlapped(id, $$, "." + $GAUGE.gaugeValue);
          }
          if (!state.transiting && $$.isTargetToShow(id)) {
            api.focus(id);
          }
        }
      } : null);

      // set cursor when has some interaction
      !item.empty() && item.on("click mouseout mouseover") && item.style("cursor", $$.getStylePropValue("pointer"));
    }
  },
  /**
   * Update the legend
   * @param {Array} targetIds ID's of target
   * @param {object} options withTransform : Whether to use the transform property / withTransitionForTransform: Whether transition is used when using the transform property / withTransition : whether or not to transition.
   * @private
   */
  updateLegendElement: function updateLegendElement(targetIds, options) {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      legend = $$.$el.legend,
      $T = $$.$T,
      legendType = config.legend_item_tile_type,
      isRectangle = legendType !== "circle",
      legendItemR = config.legend_item_tile_r,
      itemTileSize = {
        width: isRectangle ? config.legend_item_tile_width : legendItemR * 2,
        height: isRectangle ? config.legend_item_tile_height : legendItemR * 2
      },
      dimension = {
        padding: {
          top: 4,
          right: 10
        },
        max: {
          width: 0,
          height: 0
        },
        posMin: 10,
        step: 0,
        tileWidth: itemTileSize.width + 5,
        totalLength: 0
      },
      sizes = {
        offsets: {},
        widths: {},
        heights: {},
        margins: [0],
        steps: {}
      };
    let xForLegend, yForLegend, background;
    // Skip elements when their name is set to null
    const targetIdz = targetIds.filter(function (id) {
        _newArrowCheck(this, _this4);
        return !isDefined(config.data_names[id]) || config.data_names[id] !== null;
      }.bind(this)),
      withTransition = options.withTransition,
      updatePositions = $$.getUpdateLegendPositions(targetIdz, dimension, sizes);
    if (state.isLegendInset) {
      dimension.step = config.legend_inset_step ? config.legend_inset_step : targetIdz.length;
      $$.updateLegendStep(dimension.step);
    }
    if (state.isLegendRight) {
      xForLegend = function (id) {
        _newArrowCheck(this, _this4);
        return dimension.max.width * sizes.steps[id];
      }.bind(this);
      yForLegend = function (id) {
        _newArrowCheck(this, _this4);
        return sizes.margins[sizes.steps[id]] + sizes.offsets[id];
      }.bind(this);
    } else if (state.isLegendInset) {
      xForLegend = function (id) {
        _newArrowCheck(this, _this4);
        return dimension.max.width * sizes.steps[id] + 10;
      }.bind(this);
      yForLegend = function (id) {
        _newArrowCheck(this, _this4);
        return sizes.margins[sizes.steps[id]] + sizes.offsets[id];
      }.bind(this);
    } else {
      xForLegend = function (id) {
        _newArrowCheck(this, _this4);
        return sizes.margins[sizes.steps[id]] + sizes.offsets[id];
      }.bind(this);
      yForLegend = function (id) {
        _newArrowCheck(this, _this4);
        return dimension.max.height * sizes.steps[id];
      }.bind(this);
    }
    const posFn = {
      xText: function xText(id, i) {
        _newArrowCheck(this, _this4);
        return xForLegend(id, i) + 4 + itemTileSize.width;
      }.bind(this),
      xRect: function xRect(id, i) {
        _newArrowCheck(this, _this4);
        return xForLegend(id, i);
      }.bind(this),
      x1Tile: function x1Tile(id, i) {
        _newArrowCheck(this, _this4);
        return xForLegend(id, i) - 2;
      }.bind(this),
      x2Tile: function x2Tile(id, i) {
        _newArrowCheck(this, _this4);
        return xForLegend(id, i) - 2 + itemTileSize.width;
      }.bind(this),
      yText: function yText(id, i) {
        _newArrowCheck(this, _this4);
        return yForLegend(id, i) + 9;
      }.bind(this),
      yRect: function yRect(id, i) {
        _newArrowCheck(this, _this4);
        return yForLegend(id, i) - 5;
      }.bind(this),
      yTile: function yTile(id, i) {
        _newArrowCheck(this, _this4);
        return yForLegend(id, i) + 4;
      }.bind(this)
    };
    $$.generateLegendItem(targetIdz, itemTileSize, updatePositions, posFn);

    // Set background for inset legend
    background = legend.select("." + $LEGEND.legendBackground + " rect");
    if (state.isLegendInset && dimension.max.width > 0 && background.size() === 0) {
      background = legend.insert("g", "." + $LEGEND.legendItem).attr("class", $LEGEND.legendBackground).append("rect");
    }
    const texts = legend.selectAll("text").data(targetIdz).text(function (id) {
      _newArrowCheck(this, _this4);
      return isDefined(config.data_names[id]) ? config.data_names[id] : id;
    }.bind(this)) // MEMO: needed for update
    .each(function (id, i) {
      updatePositions(this, id, i);
    });
    $T(texts, withTransition).attr("x", posFn.xText).attr("y", posFn.yText);
    const rects = legend.selectAll("rect." + $LEGEND.legendItemEvent).data(targetIdz);
    $T(rects, withTransition).attr("width", function (id) {
      _newArrowCheck(this, _this4);
      return sizes.widths[id];
    }.bind(this)).attr("height", function (id) {
      _newArrowCheck(this, _this4);
      return sizes.heights[id];
    }.bind(this)).attr("x", posFn.xRect).attr("y", posFn.yRect);

    // update legend items position
    $$.updateLegendItemPos(targetIdz, withTransition, posFn);
    if (background) {
      $T(background, withTransition).attr("height", $$.getLegendHeight() - 12).attr("width", dimension.max.width * (dimension.step + 1) + 10);
    }

    // Update all to reflect change of legend
    $$.updateLegendItemWidth(dimension.max.width);
    $$.updateLegendItemHeight(dimension.max.height);
    $$.updateLegendStep(dimension.step);
  },
  /**
   * Get position update function
   * @param {Array} targetIdz Data ids
   * @param {object} dimension Dimension object
   * @param {object} sizes Size object
   * @returns {Function} Update position function
   * @private
   */
  getUpdateLegendPositions: function getUpdateLegendPositions(targetIdz, dimension, sizes) {
    const $$ = this,
      config = $$.config,
      state = $$.state,
      isLegendRightOrInset = state.isLegendRight || state.isLegendInset;
    return function (textElement, id, index) {
      var _this5 = this;
      const isLast = index === targetIdz.length - 1,
        box = $$.getLegendItemTextBox(id, textElement),
        itemWidth = box.width + dimension.tileWidth + (isLast && !isLegendRightOrInset ? 0 : dimension.padding.right) + config.legend_padding,
        itemHeight = box.height + dimension.padding.top,
        itemLength = isLegendRightOrInset ? itemHeight : itemWidth,
        areaLength = isLegendRightOrInset ? $$.getLegendHeight() : $$.getLegendWidth();
      let margin;

      // MEMO: care about condifion of step, totalLength
      const updateValues = function (id2, withoutStep) {
        if (!withoutStep) {
          margin = (areaLength - dimension.totalLength - itemLength) / 2;
          if (margin < dimension.posMin) {
            margin = (areaLength - itemLength) / 2;
            dimension.totalLength = 0;
            dimension.step++;
          }
        }
        sizes.steps[id2] = dimension.step;
        sizes.margins[dimension.step] = state.isLegendInset ? 10 : margin;
        sizes.offsets[id2] = dimension.totalLength;
        dimension.totalLength += itemLength;
      };
      if (index === 0) {
        dimension.totalLength = 0;
        dimension.step = 0;
        dimension.max.width = 0;
        dimension.max.height = 0;
      }
      if (config.legend_show && !$$.isLegendToShow(id)) {
        sizes.widths[id] = 0;
        sizes.heights[id] = 0;
        sizes.steps[id] = 0;
        sizes.offsets[id] = 0;
        return;
      }
      sizes.widths[id] = itemWidth;
      sizes.heights[id] = itemHeight;
      if (!dimension.max.width || itemWidth >= dimension.max.width) {
        dimension.max.width = itemWidth;
      }
      if (!dimension.max.height || itemHeight >= dimension.max.height) {
        dimension.max.height = itemHeight;
      }
      const maxLength = isLegendRightOrInset ? dimension.max.height : dimension.max.width;
      if (config.legend_equally) {
        Object.keys(sizes.widths).forEach(function (id2) {
          _newArrowCheck(this, _this5);
          return sizes.widths[id2] = dimension.max.width;
        }.bind(this));
        Object.keys(sizes.heights).forEach(function (id2) {
          _newArrowCheck(this, _this5);
          return sizes.heights[id2] = dimension.max.height;
        }.bind(this));
        margin = (areaLength - maxLength * targetIdz.length) / 2;
        if (margin < dimension.posMin) {
          dimension.totalLength = 0;
          dimension.step = 0;
          targetIdz.forEach(function (id2) {
            _newArrowCheck(this, _this5);
            return updateValues(id2);
          }.bind(this));
        } else {
          updateValues(id, !0);
        }
      } else {
        updateValues(id);
      }
    };
  },
  /**
   * Generate legend item elements
   * @param {Array} targetIdz Data ids
   * @param {object} itemTileSize Item tile size {width, height}
   * @param {Function} updatePositions Update position function
   * @param {object} posFn Position functions
   * @private
   */
  generateLegendItem: function generateLegendItem(targetIdz, itemTileSize, updatePositions, posFn) {
    var _this6 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      legend = $$.$el.legend,
      usePoint = config.legend_usePoint,
      legendItemR = config.legend_item_tile_r,
      legendType = config.legend_item_tile_type,
      isRectangle = legendType !== "circle",
      isLegendRightOrInset = state.isLegendRight || state.isLegendInset,
      pos = -200,
      l = legend.selectAll("." + $LEGEND.legendItem).data(targetIdz).enter().append("g");

    // Define g for legend area

    $$.setLegendItem(l);
    l.append("text").text(function (id) {
      _newArrowCheck(this, _this6);
      return isDefined(config.data_names[id]) ? config.data_names[id] : id;
    }.bind(this)).each(function (id, i) {
      updatePositions(this, id, i);
    }).style("pointer-events", $$.getStylePropValue("none")).attr("x", isLegendRightOrInset ? posFn.xText : -200).attr("y", isLegendRightOrInset ? -200 : posFn.yText);
    l.append("rect").attr("class", $LEGEND.legendItemEvent).style("fill-opacity", $$.getStylePropValue("0")).attr("x", isLegendRightOrInset ? posFn.xRect : -200).attr("y", isLegendRightOrInset ? -200 : posFn.yRect);
    if (usePoint) {
      const ids = [];
      l.append(function (d) {
        _newArrowCheck(this, _this6);
        const pattern = notEmpty(config.point_pattern) ? config.point_pattern : [config.point_type];
        ids.indexOf(d) === -1 && ids.push(d);
        let point = pattern[ids.indexOf(d) % pattern.length];
        if (point === "rectangle") {
          point = "rect";
        }
        return browser_doc.createElementNS(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.namespaces.svg, "hasValidPointType" in $$ && $$.hasValidPointType(point) ? point : "use");
      }.bind(this)).attr("class", $LEGEND.legendItemPoint).style("fill", getLegendColor.bind($$)).style("pointer-events", $$.getStylePropValue("none")).attr("href", function (data, idx, selection) {
        _newArrowCheck(this, _this6);
        const node = selection[idx],
          nodeName = node.nodeName.toLowerCase(),
          id = $$.getTargetSelectorSuffix(data);
        return nodeName === "use" ? "#" + state.datetimeId + "-point" + id : undefined;
      }.bind(this));
    } else {
      l.append(isRectangle ? "line" : legendType).attr("class", $LEGEND.legendItemTile).style("stroke", getLegendColor.bind($$)).style("pointer-events", $$.getStylePropValue("none")).call(function (selection) {
        _newArrowCheck(this, _this6);
        if (legendType === "circle") {
          selection.attr("r", legendItemR).style("fill", getLegendColor.bind($$)).attr("cx", isLegendRightOrInset ? posFn.x2Tile : pos).attr("cy", isLegendRightOrInset ? pos : posFn.yTile);
        } else if (isRectangle) {
          selection.attr("stroke-width", itemTileSize.height).attr("x1", isLegendRightOrInset ? posFn.x1Tile : pos).attr("y1", isLegendRightOrInset ? pos : posFn.yTile).attr("x2", isLegendRightOrInset ? posFn.x2Tile : pos).attr("y2", isLegendRightOrInset ? pos : posFn.yTile);
        }
      }.bind(this));
    }
  },
  /**
   * Update legend item position
   * @param {Array} targetIdz Data ids
   * @param {boolean} withTransition Whether or not to apply transition
   * @param {object} posFn Position functions
   * @private
   */
  updateLegendItemPos: function updateLegendItemPos(targetIdz, withTransition, posFn) {
    var _this8 = this;
    const $$ = this,
      config = $$.config,
      legend = $$.$el.legend,
      $T = $$.$T,
      usePoint = config.legend_usePoint,
      legendType = config.legend_item_tile_type;
    if (usePoint) {
      const tiles = legend.selectAll("." + $LEGEND.legendItemPoint).data(targetIdz);
      $T(tiles, withTransition).each(function () {
        var _this7 = this;
        const nodeName = this.nodeName.toLowerCase(),
          pointR = config.point_r;
        let x = "x",
          y = "y",
          xOffset = 2,
          yOffset = 2.5,
          radius = null,
          width = null,
          height = null;
        if (nodeName === "circle") {
          const size = pointR * .2;
          x = "cx";
          y = "cy";
          radius = pointR + size;
          xOffset = pointR * 2;
          yOffset = -size;
        } else if (nodeName === "rect") {
          const size = pointR * 2.5;
          width = size;
          height = size;
          yOffset = 3;
        }
        (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).attr(x, function (d) {
          _newArrowCheck(this, _this7);
          return posFn.x1Tile(d) + xOffset;
        }.bind(this)).attr(y, function (d) {
          _newArrowCheck(this, _this7);
          return posFn.yTile(d) - yOffset;
        }.bind(this)).attr("r", radius).attr("width", width).attr("height", height);
      });
    } else {
      const tiles = legend.selectAll("." + $LEGEND.legendItemTile).data(targetIdz);
      $T(tiles, withTransition).style("stroke", getLegendColor.bind($$)).call(function (selection) {
        var _this9 = this;
        _newArrowCheck(this, _this8);
        if (legendType === "circle") {
          selection.attr("cx", function (d) {
            _newArrowCheck(this, _this9);
            const x2 = posFn.x2Tile(d);
            return x2 - (x2 - posFn.x1Tile(d)) / 2;
          }.bind(this)).attr("cy", posFn.yTile);
        } else if (legendType !== "circle") {
          selection.attr("x1", posFn.x1Tile).attr("y1", posFn.yTile).attr("x2", posFn.x2Tile).attr("y2", posFn.yTile);
        }
      }.bind(this));
    }
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-transition","commonjs2":"d3-transition","amd":"d3-transition","root":"d3"}
var external_commonjs_d3_transition_commonjs2_d3_transition_amd_d3_transition_root_d3_ = __webpack_require__(8);
;// CONCATENATED MODULE: ./src/ChartInternal/internals/redraw.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var redraw = ({
  redraw: function redraw(options) {
    var _$$$axis,
      _this = this;
    if (options === void 0) {
      options = {};
    }
    const $$ = this,
      config = $$.config,
      state = $$.state,
      $el = $$.$el,
      _$el = $el,
      main = _$el.main,
      treemap = _$el.treemap;
    state.redrawing = !0;
    const targetsToShow = $$.filterTargetsToShow($$.data.targets),
      _options = options,
      flow = _options.flow,
      initializing = _options.initializing,
      wth = $$.getWithOption(options),
      duration = wth.Transition ? config.transition_duration : 0,
      durationForExit = wth.TransitionForExit ? duration : 0,
      durationForAxis = wth.TransitionForAxis ? duration : 0,
      transitions = (_$$$axis = $$.axis) == null ? void 0 : _$$$axis.generateTransitions(durationForAxis);
    $$.updateSizes(initializing);

    // update legend and transform each g
    if (wth.Legend && config.legend_show) {
      options.withTransition = !!duration;
      treemap || $$.updateLegend($$.mapToIds($$.data.targets), options, transitions);
    } else if (wth.Dimension) {
      // need to update dimension (e.g. axis.y.tick.values) because y tick values should change
      // no need to update axis in it because they will be updated in redraw()
      $$.updateDimension(!0);
    }

    // Data empty label positioning and text.
    config.data_empty_label_text && main.select("text." + $TEXT.text + "." + $COMMON.empty).attr("x", state.width / 2).attr("y", state.height / 2).text(config.data_empty_label_text).style("display", targetsToShow.length ? "none" : null);

    // update axis
    if (state.hasAxis) {
      // @TODO: Make 'init' state to be accessible everywhere not passing as argument.
      $$.axis.redrawAxis(targetsToShow, wth, transitions, flow, initializing);

      // grid
      $$.hasGrid() && $$.updateGrid();

      // rect for regions
      config.regions.length && $$.updateRegion();
      ["bar", "candlestick", "line", "area"].forEach(function (v) {
        _newArrowCheck(this, _this);
        const name = capitalize(v);
        if (/^(line|area)$/.test(v) && $$.hasTypeOf(name) || $$.hasType(v)) {
          $$["update" + name](wth.TransitionForExit);
        }
      }.bind(this));

      // circles for select
      $el.text && main.selectAll("." + $SELECT.selectedCircles).filter($$.isBarType.bind($$)).selectAll("circle").remove();

      // event rects will redrawn when flow called
      if (config.interaction_enabled && !flow && wth.EventRect) {
        $$.redrawEventRect();
        $$.bindZoomEvent == null || $$.bindZoomEvent();
      }
    } else {
      // arc
      $el.arcs && $$.redrawArc(duration, durationForExit, wth.Transform);

      // radar
      $el.radar && $$.redrawRadar();

      // polar
      $el.polar && $$.redrawPolar();

      // treemap
      treemap && $$.updateTreemap(durationForExit);
    }

    // @TODO: Axis & Radar type
    if (!state.resizing && !treemap && ($$.hasPointType() || state.hasRadar)) {
      $$.updateCircle();
    }

    // text
    $$.hasDataLabel() && !$$.hasArcType(null, ["radar"]) && $$.updateText();

    // title
    $$.redrawTitle == null || $$.redrawTitle();
    initializing && $$.updateTypesElements();
    $$.generateRedrawList(targetsToShow, flow, duration, wth.Subchart);
    $$.updateTooltipOnRedraw();
    $$.callPluginHook("$redraw", options, duration);
  },
  /**
   * Generate redraw list
   * @param {object} targets targets data to be shown
   * @param {object} flow flow object
   * @param {number} duration duration value
   * @param {boolean} withSubchart whether or not to show subchart
   * @private
   */
  generateRedrawList: function generateRedrawList(targets, flow, duration, withSubchart) {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      shape = $$.getDrawShape();
    if (state.hasAxis) {
      // subchart
      config.subchart_show && $$.redrawSubchart(withSubchart, duration, shape);
    }

    // generate flow
    const flowFn = flow && $$.generateFlow({
        targets: targets,
        flow: flow,
        duration: flow.duration,
        shape: shape,
        xv: $$.xv.bind($$)
      }),
      withTransition = (duration || flowFn) && isTabVisible(),
      redrawList = $$.getRedrawList(shape, flow, flowFn, withTransition),
      afterRedraw = function () {
        _newArrowCheck(this, _this2);
        flowFn && flowFn();
        state.redrawing = !1;
        callFn(config.onrendered, $$.api);
      }.bind(this); // redraw list
    // callback function after redraw ends
    if (afterRedraw) {
      // Only use transition when current tab is visible.
      if (withTransition && redrawList.length) {
        // Wait for end of transitions for callback
        const waitForDraw = generateWait();

        // transition should be derived from one transition
        (0,external_commonjs_d3_transition_commonjs2_d3_transition_amd_d3_transition_root_d3_.transition)().duration(duration).each(function () {
          var _this3 = this;
          _newArrowCheck(this, _this2);
          redrawList.reduce(function (acc, t1) {
            _newArrowCheck(this, _this3);
            return acc.concat(t1);
          }.bind(this), []).forEach(function (t) {
            _newArrowCheck(this, _this3);
            return waitForDraw.add(t);
          }.bind(this));
        }.bind(this)).call(waitForDraw, afterRedraw);
      } else if (!state.transiting) {
        afterRedraw();
      }
    }

    // update fadein condition
    $$.mapToIds($$.data.targets).forEach(function (id) {
      _newArrowCheck(this, _this2);
      state.withoutFadeIn[id] = !0;
    }.bind(this));
  },
  getRedrawList: function getRedrawList(shape, flow, flowFn, withTransition) {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      _$$$state = $$.state,
      hasAxis = _$$$state.hasAxis,
      hasRadar = _$$$state.hasRadar,
      hasTreemap = _$$$state.hasTreemap,
      grid = $$.$el.grid,
      _shape$pos = shape.pos,
      cx = _shape$pos.cx,
      cy = _shape$pos.cy,
      xForText = _shape$pos.xForText,
      yForText = _shape$pos.yForText,
      list = [];
    if (hasAxis) {
      if (config.grid_x_lines.length || config.grid_y_lines.length) {
        list.push($$.redrawGrid(withTransition));
      }
      if (config.regions.length) {
        list.push($$.redrawRegion(withTransition));
      }
      Object.keys(shape.type).forEach(function (v) {
        _newArrowCheck(this, _this4);
        const name = capitalize(v),
          drawFn = shape.type[v];
        if (/^(area|line)$/.test(v) && $$.hasTypeOf(name) || $$.hasType(v)) {
          list.push($$["redraw" + name](drawFn, withTransition));
        }
      }.bind(this));
      !flow && grid.main && list.push($$.updateGridFocus());
    }
    if (!$$.hasArcType() || hasRadar) {
      notEmpty(config.data_labels) && config.data_labels !== !1 && list.push($$.redrawText(xForText, yForText, flow, withTransition));
    }
    if (($$.hasPointType() || hasRadar) && !$$.isPointFocusOnly()) {
      $$.redrawCircle && list.push($$.redrawCircle(cx, cy, withTransition, flowFn));
    }
    if (hasTreemap) {
      list.push($$.redrawTreemap(withTransition));
    }
    return list;
  },
  updateAndRedraw: function updateAndRedraw(options) {
    if (options === void 0) {
      options = {};
    }
    const $$ = this,
      config = $$.config,
      state = $$.state;
    let transitions;

    // same with redraw
    options.withTransition = getOption(options, "withTransition", !0);
    options.withTransform = getOption(options, "withTransform", !1);
    options.withLegend = getOption(options, "withLegend", !1);

    // NOT same with redraw
    options.withUpdateXDomain = !0;
    options.withUpdateOrgXDomain = !0;
    options.withTransitionForExit = !1;
    options.withTransitionForTransform = getOption(options, "withTransitionForTransform", options.withTransition);

    // MEMO: called in updateLegend in redraw if withLegend
    if (!(options.withLegend && config.legend_show)) {
      if (state.hasAxis) {
        transitions = $$.axis.generateTransitions(options.withTransitionForAxis ? config.transition_duration : 0);
      }

      // Update scales
      $$.updateScales();
      $$.updateSvgSize();

      // Update g positions
      $$.transformAll(options.withTransitionForTransform, transitions);
    }

    // Draw with new sizes & scales
    $$.redraw(options, transitions);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/scale.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Get scale
 * @param {string} [type='linear'] Scale type
 * @param {number} [min] Min range
 * @param {number} [max] Max range
 * @returns {d3.scaleLinear|d3.scaleTime} scale
 * @private
 */
function getScale(type, min, max) {
  if (type === void 0) {
    type = "linear";
  }
  if (min === void 0) {
    min = 0;
  }
  if (max === void 0) {
    max = 1;
  }
  const scale = {
    linear: external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_.scaleLinear,
    log: external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_.scaleSymlog,
    _log: external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_.scaleLog,
    time: external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_.scaleTime,
    utc: external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_.scaleUtc
  }[type]();
  scale.type = type;
  /_?log/.test(type) && scale.clamp(!0);
  return scale.range([min, max]);
}
/* harmony default export */ var scale = ({
  /**
   * Get x Axis scale function
   * @param {number} min Min value
   * @param {number} max Max value
   * @param {Array} domain Domain value
   * @param {Function} offset The offset getter to be sum
   * @returns {Function} scale
   * @private
   */
  getXScale: function getXScale(min, max, domain, offset) {
    const $$ = this,
      scale = $$.scale.zoom || getScale($$.axis.getAxisType("x"), min, max);
    return $$.getCustomizedXScale(domain ? scale.domain(domain) : scale, offset);
  },
  /**
   * Get y Axis scale function
   * @param {string} id Axis id: 'y' or 'y2'
   * @param {number} min Min value
   * @param {number} max Max value
   * @param {Array} domain Domain value
   * @returns {Function} Scale function
   * @private
   */
  getYScale: function getYScale(id, min, max, domain) {
    const $$ = this,
      scale = getScale($$.axis.getAxisType(id), min, max);
    domain && scale.domain(domain);
    return scale;
  },
  /**
   * Get y Axis scale
   * @param {string} id Axis id
   * @param {boolean} isSub Weather is sub Axis
   * @returns {Function} Scale function
   * @private
   */
  getYScaleById: function getYScaleById(id, isSub) {
    var _this$axis;
    if (isSub === void 0) {
      isSub = !1;
    }
    const isY2 = ((_this$axis = this.axis) == null ? void 0 : _this$axis.getId(id)) === "y2",
      key = isSub ? isY2 ? "subY2" : "subY" : isY2 ? "y2" : "y";
    return this.scale[key];
  },
  /**
   * Get customized x axis scale
   * @param {d3.scaleLinear|d3.scaleTime} scaleValue Scale function
   * @param {Function} offsetValue Offset getter to be sum
   * @returns {Function} Scale function
   * @private
   */
  getCustomizedXScale: function getCustomizedXScale(scaleValue, offsetValue) {
    var _this = this;
    const $$ = this,
      offset = offsetValue || function () {
        _newArrowCheck(this, _this);
        return $$.axis.x.tickOffset();
      }.bind(this),
      isInverted = $$.config.axis_x_inverted,
      scale = function (d, raw) {
        const v = scaleValue(d) + offset();
        return raw ? v : Math.ceil(v);
      };
    // copy original scale methods
    for (const key in scaleValue) {
      scale[key] = scaleValue[key];
    }
    scale.orgDomain = function () {
      _newArrowCheck(this, _this);
      return scaleValue.domain();
    }.bind(this);
    scale.orgScale = function () {
      _newArrowCheck(this, _this);
      return scaleValue;
    }.bind(this);

    // define custom domain() for categorized axis
    if ($$.axis.isCategorized()) {
      scale.domain = function (domainValue) {
        let domain = domainValue;
        if (!arguments.length) {
          domain = this.orgDomain();
          return isInverted ? [domain[0] + 1, domain[1]] : [domain[0], domain[1] + 1];
        }
        scaleValue.domain(domain);
        return scale;
      };
    }
    return scale;
  },
  /**
   * Update scale
   * @param {boolean} isInit Param is given at the init rendering
   * @param {boolean} updateXDomain If update x domain
   * @private
   */
  updateScales: function updateScales(isInit, updateXDomain) {
    var _this2 = this;
    if (updateXDomain === void 0) {
      updateXDomain = !0;
    }
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      format = $$.format,
      org = $$.org,
      scale = $$.scale,
      _$$$state = $$.state,
      current = _$$$state.current,
      width = _$$$state.width,
      height = _$$$state.height,
      width2 = _$$$state.width2,
      height2 = _$$$state.height2,
      hasAxis = _$$$state.hasAxis,
      hasTreemap = _$$$state.hasTreemap;
    if (hasAxis) {
      var _scale$x;
      const isRotated = config.axis_rotated,
        resettedPadding = $$.getResettedPadding(1),
        min = {
          x: isRotated ? resettedPadding : 0,
          y: isRotated ? 0 : height,
          subX: isRotated ? 1 : 0,
          subY: isRotated ? 0 : height2
        },
        max = {
          x: isRotated ? height : width,
          y: isRotated ? width : resettedPadding,
          subX: isRotated ? height : width,
          subY: isRotated ? width2 : 1
        },
        xDomain = updateXDomain && ((_scale$x = scale.x) == null ? void 0 : _scale$x.orgDomain()),
        xSubDomain = updateXDomain && org.xDomain; // update edges
      // update scales
      // x Axis
      scale.x = $$.getXScale(min.x, max.x, xDomain, function () {
        _newArrowCheck(this, _this2);
        return axis.x.tickOffset();
      }.bind(this));
      scale.subX = $$.getXScale(min.x, max.x, xSubDomain, function (d) {
        var _axis$subX;
        _newArrowCheck(this, _this2);
        return d % 1 ? 0 : ((_axis$subX = axis.subX) != null ? _axis$subX : axis.x).tickOffset();
      }.bind(this));
      format.xAxisTick = axis.getXAxisTickFormat();
      format.subXAxisTick = axis.getXAxisTickFormat(!0);
      axis.setAxis("x", scale.x, config.axis_x_tick_outer, isInit);
      if (config.subchart_show) {
        axis.setAxis("subX", scale.subX, config.axis_x_tick_outer, isInit);
      }

      // y Axis
      scale.y = $$.getYScale("y", min.y, max.y, scale.y ? scale.y.domain() : config.axis_y_default);
      scale.subY = $$.getYScale("y", min.subY, max.subY, scale.subY ? scale.subY.domain() : config.axis_y_default);
      axis.setAxis("y", scale.y, config.axis_y_tick_outer, isInit);

      // y2 Axis
      if (config.axis_y2_show) {
        scale.y2 = $$.getYScale("y2", min.y, max.y, scale.y2 ? scale.y2.domain() : config.axis_y2_default);
        scale.subY2 = $$.getYScale("y2", min.subY, max.subY, scale.subY2 ? scale.subY2.domain() : config.axis_y2_default);
        axis.setAxis("y2", scale.y2, config.axis_y2_tick_outer, isInit);
      }
    } else if (hasTreemap) {
      const padding = $$.getCurrentPadding();
      scale.x = (0,external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_.scaleLinear)().rangeRound([padding.left, current.width - padding.right]);
      scale.y = (0,external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_.scaleLinear)().rangeRound([padding.top, current.height - padding.bottom]);
    } else {
      // update for arc
      $$.updateArc == null || $$.updateArc();
    }
  },
  /**
   * Get the zoom or unzoomed scaled value
   * @param {Date|number|object} d Data value
   * @returns {number|null}
   * @private
   */
  xx: function xx(d) {
    const $$ = this,
      config = $$.config,
      _$$$scale = $$.scale,
      x = _$$$scale.x,
      zoom = _$$$scale.zoom,
      fn = config.zoom_enabled && zoom ? zoom : x;
    return d ? fn(isValue(d.x) ? d.x : d) : null;
  },
  xv: function xv(d) {
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      _$$$scale2 = $$.scale,
      x = _$$$scale2.x,
      zoom = _$$$scale2.zoom,
      fn = config.zoom_enabled && zoom ? zoom : x;
    let value = $$.getBaseValue(d);
    if (axis.isTimeSeries()) {
      value = parseDate.call($$, value);
    } else if (axis.isCategorized() && isString(value)) {
      value = config.axis_x_categories.indexOf(value);
    }
    return Math.ceil(fn(value));
  },
  yv: function yv(d) {
    const $$ = this,
      _$$$scale3 = $$.scale,
      y = _$$$scale3.y,
      y2 = _$$$scale3.y2,
      yScale = d.axis && d.axis === "y2" ? y2 : y;
    return Math.ceil(yScale($$.getBaseValue(d)));
  },
  subxx: function subxx(d) {
    return d ? this.scale.subX(d.x) : null;
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-shape","commonjs2":"d3-shape","amd":"d3-shape","root":"d3"}
var external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_ = __webpack_require__(9);
;// CONCATENATED MODULE: ./src/ChartInternal/shape/shape.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/**
 * Get grouped data point function for y coordinate
 * - Note: Grouped(stacking) works only for line and bar types
 * @param {object} d data vlaue
 * @returns {Function|undefined}
 * @private
 */
function getGroupedDataPointsFn(d) {
  const $$ = this;
  let fn;
  if ($$.isLineType(d)) {
    fn = $$.generateGetLinePoints($$.getShapeIndices($$.isLineType));
  } else if ($$.isBarType(d)) {
    fn = $$.generateGetBarPoints($$.getShapeIndices($$.isBarType));
  }
  return fn;
}
/* harmony default export */ var shape = ({
  /**
   * Get the shape draw function
   * @returns {object}
   * @private
   */
  getDrawShape: function getDrawShape() {
    var _this = this;
    const $$ = this,
      isRotated = $$.config.axis_rotated,
      _$$$state = $$.state,
      hasRadar = _$$$state.hasRadar,
      hasTreemap = _$$$state.hasTreemap,
      shape = {
        type: {},
        indices: {},
        pos: {}
      };
    hasTreemap || ["bar", "candlestick", "line", "area"].forEach(function (v) {
      _newArrowCheck(this, _this);
      const name = capitalize(/^(bubble|scatter)$/.test(v) ? "line" : v);
      if ($$.hasType(v) || $$.hasTypeOf(name) || v === "line" && ($$.hasType("bubble") || $$.hasType("scatter"))) {
        const indices = $$.getShapeIndices($$["is" + name + "Type"]),
          drawFn = $$["generateDraw" + name];
        shape.indices[v] = indices;
        shape.type[v] = drawFn ? drawFn.bind($$)(indices, !1) : undefined;
      }
    }.bind(this));
    if (!$$.hasArcType() || hasRadar || hasTreemap) {
      let cx, cy;
      // generate circle x/y functions depending on updated params
      if (!hasTreemap) {
        cx = hasRadar ? $$.radarCircleX : isRotated ? $$.circleY : $$.circleX;
        cy = hasRadar ? $$.radarCircleY : isRotated ? $$.circleX : $$.circleY;
      }
      shape.pos = {
        xForText: $$.generateXYForText(shape.indices, !0),
        yForText: $$.generateXYForText(shape.indices, !1),
        cx: (cx || function () {}).bind($$),
        cy: (cy || function () {}).bind($$)
      };
    }
    return shape;
  },
  /**
   * Get shape's indices according it's position within each axis tick.
   *
   * From the below example, indices will be:
   * ==> {data1: 0, data2: 0, data3: 1, data4: 1, __max__: 1}
   *
   *	data1 data3   data1 data3
   *	data2 data4   data2 data4
   *	-------------------------
   *		 0             1
   * @param {Function} typeFilter Chart type filter function
   * @returns {object} Indices object with its position
   */
  getShapeIndices: function getShapeIndices(typeFilter) {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      xs = config.data_xs,
      hasXs = notEmpty(xs),
      indices = {};
    let i = hasXs ? {} : 0;
    if (hasXs) {
      getUnique(Object.keys(xs).map(function (v) {
        _newArrowCheck(this, _this2);
        return xs[v];
      }.bind(this))).forEach(function (v) {
        _newArrowCheck(this, _this2);
        i[v] = 0;
        indices[v] = {};
      }.bind(this));
    }
    $$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)).forEach(function (d) {
      _newArrowCheck(this, _this2);
      const xKey = d.id in xs ? xs[d.id] : "",
        ind = xKey ? indices[xKey] : indices;
      for (let j = 0, groups; groups = config.data_groups[j]; j++) {
        if (groups.indexOf(d.id) < 0) {
          continue;
        }
        for (let k = 0, key; key = groups[k]; k++) {
          if (key in ind) {
            ind[d.id] = ind[key];
            break;
          }

          // for same grouped data, add other data to same indices
          if (d.id !== key && xKey) {
            var _ind$d$id;
            ind[key] = (_ind$d$id = ind[d.id]) != null ? _ind$d$id : i[xKey];
          }
        }
      }
      if (isUndefined(ind[d.id])) {
        ind[d.id] = xKey ? i[xKey]++ : i++;
        ind.__max__ = (xKey ? i[xKey] : i) - 1;
      }
    }.bind(this));
    return indices;
  },
  /**
   * Get indices value based on data ID value
   * @param {object} indices Indices object
   * @param {object} d Data row
   * @param {string} caller Caller function name (Used only for 'sparkline' plugin)
   * @returns {object} Indices object
   * @private
   */
  getIndices: function getIndices(indices, d) {
    var _this3 = this;
    // eslint-disable-line
    const $$ = this,
      _$$$config = $$.config,
      xs = _$$$config.data_xs,
      removeNull = _$$$config.bar_indices_removeNull,
      id = d.id,
      index = d.index;
    if ($$.isBarType(id) && removeNull) {
      const ind = {};

      // redefine bar indices order
      $$.getAllValuesOnIndex(index, !0).forEach(function (v, i) {
        _newArrowCheck(this, _this3);
        ind[v.id] = i;
        ind.__max__ = i;
      }.bind(this));
      return ind;
    }
    return notEmpty(xs) ? indices[xs[id]] : indices;
  },
  /**
   * Get indices max number
   * @param {object} indices Indices object
   * @returns {number} Max number
   * @private
   */
  getIndicesMax: function getIndicesMax(indices) {
    var _this4 = this;
    return notEmpty(this.config.data_xs) ?
    // if is multiple xs, return total sum of xs' __max__ value
    Object.keys(indices).map(function (v) {
      _newArrowCheck(this, _this4);
      return indices[v].__max__ || 0;
    }.bind(this)).reduce(function (acc, curr) {
      _newArrowCheck(this, _this4);
      return acc + curr;
    }.bind(this)) : indices.__max__;
  },
  getShapeX: function getShapeX(offset, indices, isSub) {
    var _this5 = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      currScale = isSub ? scale.subX : scale.zoom || scale.x,
      barOverlap = config.bar_overlap,
      barPadding = config.bar_padding,
      sum = function (p, c) {
        _newArrowCheck(this, _this5);
        return p + c;
      }.bind(this),
      halfWidth = isObjectType(offset) && (offset._$total.length ? offset._$total.reduce(sum) / 2 : 0);

    // total shapes half width

    return function (d) {
      _newArrowCheck(this, _this5);
      const ind = $$.getIndices(indices, d, "getShapeX"),
        index = d.id in ind ? ind[d.id] : 0,
        targetsNum = (ind.__max__ || 0) + 1;
      let x = 0;
      if (notEmpty(d.x)) {
        const xPos = currScale(d.x, !0);
        if (halfWidth) {
          const offsetWidth = offset[d.id] || offset._$width;
          x = barOverlap ? xPos - offsetWidth / 2 : xPos - offsetWidth + offset._$total.slice(0, index + 1).reduce(sum) - halfWidth;
        } else {
          x = xPos - (isNumber(offset) ? offset : offset._$width) * (targetsNum / 2 - (barOverlap ? 1 : index));
        }
      }

      // adjust x position for bar.padding option
      if (offset && x && targetsNum > 1 && barPadding) {
        if (index) {
          x += barPadding * index;
        }
        if (targetsNum > 2) {
          x -= (targetsNum - 1) * barPadding / 2;
        } else if (targetsNum === 2) {
          x -= barPadding / 2;
        }
      }
      return x;
    }.bind(this);
  },
  getShapeY: function getShapeY(isSub) {
    var _this6 = this;
    const $$ = this,
      isStackNormalized = $$.isStackNormalized();
    return function (d) {
      _newArrowCheck(this, _this6);
      let value = d.value;
      if (isNumber(d)) {
        value = d;
      } else if (isStackNormalized) {
        value = $$.getRatio("index", d, !0);
      } else if ($$.isBubbleZType(d)) {
        value = $$.getBubbleZData(d.value, "y");
      } else if ($$.isBarRangeType(d)) {
        // TODO use range.getEnd() like method
        value = value[1];
      }
      return $$.getYScaleById(d.id, isSub)(value);
    }.bind(this);
  },
  /**
   * Get shape based y Axis min value
   * @param {string} id Data id
   * @returns {number}
   * @private
   */
  getShapeYMin: function getShapeYMin(id) {
    const $$ = this,
      axisId = $$.axis.getId(id),
      scale = $$.scale[axisId],
      _scale$domain = scale.domain(),
      yMin = _scale$domain[0],
      inverted = $$.config["axis_" + axisId + "_inverted"];
    return !$$.isGrouped(id) && !inverted && yMin > 0 ? yMin : 0;
  },
  /**
   * Get Shape's offset data
   * @param {Function} typeFilter Type filter function
   * @returns {object}
   * @private
   */
  getShapeOffsetData: function getShapeOffsetData(typeFilter) {
    var _this7 = this;
    const $$ = this,
      targets = $$.orderTargets($$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$))),
      isStackNormalized = $$.isStackNormalized(),
      shapeOffsetTargets = targets.map(function (target) {
        var _this8 = this;
        _newArrowCheck(this, _this7);
        let rowValues = target.values;
        const values = {};
        if ($$.isStepType(target)) {
          rowValues = $$.convertValuesToStep(rowValues);
        }
        const rowValueMapByXValue = rowValues.reduce(function (out, d) {
          _newArrowCheck(this, _this8);
          const key = +d.x;
          out[key] = d;
          values[key] = isStackNormalized ? $$.getRatio("index", d, !0) : d.value;
          return out;
        }.bind(this), {});
        return {
          id: target.id,
          rowValues: rowValues,
          rowValueMapByXValue: rowValueMapByXValue,
          values: values
        };
      }.bind(this)),
      indexMapByTargetId = targets.reduce(function (out, _ref, index) {
        let id = _ref.id;
        _newArrowCheck(this, _this7);
        out[id] = index;
        return out;
      }.bind(this), {});
    return {
      indexMapByTargetId: indexMapByTargetId,
      shapeOffsetTargets: shapeOffsetTargets
    };
  },
  getShapeOffset: function getShapeOffset(typeFilter, indices, isSub) {
    var _this9 = this;
    const $$ = this,
      _$$$getShapeOffsetDat = $$.getShapeOffsetData(typeFilter),
      shapeOffsetTargets = _$$$getShapeOffsetDat.shapeOffsetTargets,
      indexMapByTargetId = _$$$getShapeOffsetDat.indexMapByTargetId,
      groupsZeroAs = $$.config.data_groupsZeroAs;
    return function (d, idx) {
      var _this10 = this;
      _newArrowCheck(this, _this9);
      const id = d.id,
        value = d.value,
        x = d.x,
        ind = $$.getIndices(indices, d),
        scale = $$.getYScaleById(id, isSub);
      if ($$.isBarRangeType(d)) {
        // TODO use range.getStart()
        return scale(value[0]);
      }
      const dataXAsNumber = +x,
        y0 = scale(groupsZeroAs === "zero" ? 0 : $$.getShapeYMin(id));
      let offset = y0;
      shapeOffsetTargets.filter(function (t) {
        _newArrowCheck(this, _this10);
        return t.id !== id && ind[t.id] === ind[id];
      }.bind(this)).forEach(function (t) {
        _newArrowCheck(this, _this10);
        const tid = t.id,
          rowValueMapByXValue = t.rowValueMapByXValue,
          rowValues = t.rowValues,
          tvalues = t.values;

        // for same stacked group (ind[tid] === ind[id])
        if (indexMapByTargetId[tid] < indexMapByTargetId[id]) {
          var _row;
          const rValue = tvalues[dataXAsNumber];
          let row = rowValues[idx];

          // check if the x values line up
          if (!row || +row.x !== dataXAsNumber) {
            row = rowValueMapByXValue[dataXAsNumber];
          }
          if (((_row = row) == null ? void 0 : _row.value) * value >= 0 && isNumber(rValue)) {
            const addOffset = value === 0 ? groupsZeroAs === "positive" && rValue > 0 || groupsZeroAs === "negative" && rValue < 0 : !0;
            if (addOffset) {
              offset += scale(rValue) - y0;
            }
          }
        }
      }.bind(this));
      return offset;
    }.bind(this);
  },
  /**
   * Get data's y coordinate
   * @param {object} d Target data
   * @param {number} i Index number
   * @returns {number} y coordinate
   * @private
   */
  circleY: function circleY(d, i) {
    const $$ = this,
      id = d.id;
    let points;
    if ($$.isGrouped(id)) {
      points = getGroupedDataPointsFn.bind($$)(d);
    }
    return points ? points(d, i)[0][1] : $$.getYScaleById(id)($$.getBaseValue(d));
  },
  getBarW: function getBarW(type, axis, targetsNum) {
    var _this11 = this;
    const $$ = this,
      config = $$.config,
      org = $$.org,
      scale = $$.scale,
      maxDataCount = $$.getMaxDataCount(),
      isGrouped = type === "bar" && config.data_groups.length,
      configName = type + "_width",
      tickInterval = scale.zoom && !$$.axis.isCategorized() ? org.xDomain.map(function (v) {
        _newArrowCheck(this, _this11);
        return scale.zoom(v);
      }.bind(this)).reduce(function (a, c) {
        _newArrowCheck(this, _this11);
        return Math.abs(a) + c;
      }.bind(this)) / maxDataCount : axis.tickInterval(maxDataCount),
      getWidth = function (id) {
        _newArrowCheck(this, _this11);
        const width = id ? config[configName][id] : config[configName],
          ratio = id ? width.ratio : config[configName + "_ratio"],
          max = id ? width.max : config[configName + "_max"],
          w = isNumber(width) ? width : targetsNum ? tickInterval * ratio / targetsNum : 0;
        return max && w > max ? max : w;
      }.bind(this);
    let result = getWidth();
    if (!isGrouped && isObjectType(config[configName])) {
      result = {
        _$width: result,
        _$total: []
      };
      $$.filterTargetsToShow($$.data.targets).forEach(function (v) {
        _newArrowCheck(this, _this11);
        if (config[configName][v.id]) {
          result[v.id] = getWidth(v.id);
          result._$total.push(result[v.id] || result._$width);
        }
      }.bind(this));
    }
    return result;
  },
  /**
   * Get shape element
   * @param {string} shapeName Shape string
   * @param {number} i Index number
   * @param {string} id Data series id
   * @returns {d3Selection}
   * @private
   */
  getShapeByIndex: function getShapeByIndex(shapeName, i, id) {
    var _this12 = this;
    const $$ = this,
      $el = $$.$el,
      suffix = isValue(i) ? "-" + i : "";
    let shape = $el[shapeName];

    // filter from shape reference if has
    if (shape && !shape.empty()) {
      shape = shape.filter(function (d) {
        _newArrowCheck(this, _this12);
        return id ? d.id === id : !0;
      }.bind(this)).filter(function (d) {
        _newArrowCheck(this, _this12);
        return isValue(i) ? d.index === i : !0;
      }.bind(this));
    } else {
      shape = (id ? $el.main.selectAll("." + classes[shapeName + "s"] + $$.getTargetSelectorSuffix(id)) : $el.main).selectAll("." + classes[shapeName] + suffix);
    }
    return shape;
  },
  isWithinShape: function isWithinShape(that, d) {
    const $$ = this,
      shape = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(that);
    let isWithin;
    if (!$$.isTargetToShow(d.id)) {
      isWithin = !1;
    } else if ($$.hasValidPointType != null && $$.hasValidPointType(that.nodeName)) {
      isWithin = $$.isStepType(d) ? $$.isWithinStep(that, $$.getYScaleById(d.id)(d.value)) : $$.isWithinCircle(that, $$.isBubbleType(d) ? $$.pointSelectR(d) * 1.5 : 0);
    } else if (that.nodeName === "path") {
      isWithin = shape.classed(classes.bar) ? $$.isWithinBar(that) : !0;
    }
    return isWithin;
  },
  getInterpolate: function getInterpolate(d) {
    const $$ = this,
      interpolation = $$.getInterpolateType(d);
    return {
      "basis": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveBasis,
      "basis-closed": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveBasisClosed,
      "basis-open": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveBasisOpen,
      "bundle": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveBundle,
      "cardinal": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveCardinal,
      "cardinal-closed": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveCardinalClosed,
      "cardinal-open": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveCardinalOpen,
      "catmull-rom": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveCatmullRom,
      "catmull-rom-closed": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveCatmullRomClosed,
      "catmull-rom-open": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveCatmullRomOpen,
      "monotone-x": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveMonotoneX,
      "monotone-y": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveMonotoneY,
      "natural": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveNatural,
      "linear-closed": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveLinearClosed,
      "linear": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveLinear,
      "step": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveStep,
      "step-after": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveStepAfter,
      "step-before": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.curveStepBefore
    }[interpolation];
  },
  getInterpolateType: function getInterpolateType(d) {
    const $$ = this,
      config = $$.config,
      type = config.spline_interpolation_type,
      interpolation = $$.isInterpolationType(type) ? type : "cardinal";
    return $$.isSplineType(d) ? interpolation : $$.isStepType(d) ? config.line_step_type : "linear";
  },
  isWithinBar: function isWithinBar(that) {
    const mouse = getPointer(this.state.event, that),
      list = getRectSegList(that),
      _list = list,
      seg0 = _list[0],
      seg1 = _list[1],
      x = Math.min(seg0.x, seg1.x),
      y = Math.min(seg0.y, seg1.y),
      offset = this.config.bar_sensitivity,
      _that$getBBox = that.getBBox(),
      width = _that$getBBox.width,
      height = _that$getBBox.height,
      isWithin = x - offset < mouse[0] && mouse[0] < x + width + offset && y - offset < mouse[1] && mouse[1] < y + height + offset;
    return isWithin;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/size.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var size = ({
  /**
   * Update container size
   * @private
   */
  setContainerSize: function setContainerSize() {
    const $$ = this,
      state = $$.state;
    state.current.width = $$.getCurrentWidth();
    state.current.height = $$.getCurrentHeight();
  },
  getCurrentWidth: function getCurrentWidth() {
    const $$ = this;
    return $$.config.size_width || $$.getParentWidth();
  },
  getCurrentHeight: function getCurrentHeight() {
    const $$ = this,
      config = $$.config,
      h = config.size_height || $$.getParentHeight();
    return h > 0 ? h : 320 / ($$.hasType("gauge") && !config.gauge_fullCircle ? 2 : 1);
  },
  /**
   * Get the parent rect element's size
   * @param {string} key property/attribute name
   * @returns {number}
   * @private
   */
  getParentRectValue: function getParentRectValue(key) {
    const offsetName = "offset" + capitalize(key);
    let parent = this.$el.chart.node(),
      v = 0;
    while (v < 30 && parent && parent.tagName !== "BODY") {
      try {
        v = parent.getBoundingClientRect()[key];
      } catch (e) {
        if (offsetName in parent) {
          // In IE in certain cases getBoundingClientRect
          // will cause an "unspecified error"
          v = parent[offsetName];
        }
      }
      parent = parent.parentNode;
    }

    // Sometimes element's dimension value is incorrect(ex. flex container)
    // In this case, use body's offset instead.
    const bodySize = browser_doc.body[offsetName];
    v > bodySize && (v = bodySize);
    return v;
  },
  getParentWidth: function getParentWidth() {
    return this.getParentRectValue("width");
  },
  getParentHeight: function getParentHeight() {
    const h = this.$el.chart.style("height");
    let height = 0;
    if (h) {
      height = /px$/.test(h) ? parseInt(h, 10) : this.getParentRectValue("height");
    }
    return height;
  },
  getSvgLeft: function getSvgLeft(withoutRecompute) {
    const $$ = this,
      config = $$.config,
      hasAxis = $$.state.hasAxis,
      $el = $$.$el,
      isRotated = config.axis_rotated,
      hasLeftAxisRect = isRotated || !isRotated && !config.axis_y_inner,
      leftAxisClass = isRotated ? $AXIS.axisX : $AXIS.axisY,
      leftAxis = $el.main.select("." + leftAxisClass).node(),
      leftLabel = hasAxis && config["axis_" + (isRotated ? "x" : "y") + "_label"];
    let labelWidth = 0;

    // if axis label position set to inner, exclude from the value
    if (hasAxis && (isString(leftLabel) || isString(leftLabel.text) || /^inner-/.test(leftLabel == null ? void 0 : leftLabel.position))) {
      const label = $el.main.select("." + leftAxisClass + "-label");
      if (!label.empty()) {
        labelWidth = label.node().getBoundingClientRect().left;
      }
    }
    const svgRect = leftAxis && hasLeftAxisRect ? leftAxis.getBoundingClientRect() : {
        right: 0
      },
      chartRectLeft = $el.chart.node().getBoundingClientRect().left + labelWidth,
      hasArc = $$.hasArcType(),
      svgLeft = svgRect.right - chartRectLeft - (hasArc ? 0 : $$.getCurrentPaddingByDirection("left", withoutRecompute));
    return svgLeft > 0 ? svgLeft : 0;
  },
  updateDimension: function updateDimension(withoutAxis) {
    const $$ = this,
      config = $$.config,
      hasAxis = $$.state.hasAxis,
      $el = $$.$el;
    if (hasAxis && !withoutAxis && $$.axis.x && config.axis_rotated) {
      var _$$$axis$subX;
      (_$$$axis$subX = $$.axis.subX) == null || _$$$axis$subX.create($el.axis.subX);
    }

    // pass 'withoutAxis' param to not animate at the init rendering
    $$.updateScales(withoutAxis);
    $$.updateSvgSize();
    $$.transformAll(!1);
  },
  updateSvgSize: function updateSvgSize() {
    const $$ = this,
      _$$$state = $$.state,
      clip = _$$$state.clip,
      current = _$$$state.current,
      hasAxis = _$$$state.hasAxis,
      width = _$$$state.width,
      height = _$$$state.height,
      svg = $$.$el.svg;
    svg.attr("width", current.width).attr("height", current.height);
    if (hasAxis) {
      const brush = svg.select("." + $SUBCHART.brush + " .overlay"),
        brushSize = {
          width: 0,
          height: 0
        };
      if (brush.size()) {
        brushSize.width = +brush.attr("width");
        brushSize.height = +brush.attr("height");
      }
      svg.selectAll(["#" + clip.id, "#" + clip.idGrid]).select("rect").attr("width", width).attr("height", height);
      svg.select("#" + clip.idXAxis).select("rect").call($$.setXAxisClipPath.bind($$));
      svg.select("#" + clip.idYAxis).select("rect").call($$.setYAxisClipPath.bind($$));
      clip.idSubchart && svg.select("#" + clip.idSubchart).select("rect").attr("width", width).attr("height", brushSize.height);
    }
  },
  /**
   * Get padding by the direction.
   * @param {string} type "top" | "bottom" | "left" | "right"
   * @param {boolean} [withoutRecompute=false] If set true, do not recompute the padding value.
   * @returns {number} padding value
   * @private
   */
  getCurrentPaddingByDirection: function getCurrentPaddingByDirection(type, withoutRecompute) {
    var _config$padding;
    if (withoutRecompute === void 0) {
      withoutRecompute = !1;
    }
    const $$ = this,
      config = $$.config,
      $el = $$.$el,
      hasAxis = $$.state.hasAxis,
      isRotated = config.axis_rotated,
      isFitPadding = ((_config$padding = config.padding) == null ? void 0 : _config$padding.mode) === "fit",
      paddingOption = isNumber(config["padding_" + type]) ? config["padding_" + type] : undefined,
      axisId = hasAxis ? {
        top: isRotated ? "y2" : null,
        bottom: isRotated ? "y" : "x",
        left: isRotated ? "x" : "y",
        right: isRotated ? null : "y2"
      }[type] : null,
      isLeftRight = /^(left|right)$/.test(type),
      isAxisInner = axisId && config["axis_" + axisId + "_inner"],
      isAxisShow = axisId && config["axis_" + axisId + "_show"],
      axesLen = axisId ? config["axis_" + axisId + "_axes"].length : 0;
    let axisSize = axisId ? isLeftRight ? $$.getAxisWidthByAxisId(axisId, withoutRecompute) : $$.getHorizontalAxisHeight(axisId) : 0;
    let gap = 0;
    if (!isFitPadding && isLeftRight) {
      axisSize = ceil10(axisSize);
    }
    let padding = hasAxis && isLeftRight && (isAxisInner || isUndefined(paddingOption) && !isAxisShow) ? 0 : isFitPadding ? (isAxisShow ? axisSize : 0) + (paddingOption != null ? paddingOption : 0) : isUndefined(paddingOption) ? axisSize : paddingOption;
    if (isLeftRight && hasAxis) {
      if (axisId && (isFitPadding || isAxisInner) && config["axis_" + axisId + "_label"].text) {
        padding += $$.axis.getAxisLabelPosition(axisId).isOuter ? 20 : 0;
      }
      if (type === "right") {
        padding += isRotated ? !isFitPadding && isUndefined(paddingOption) ? 10 : 2 : !isAxisShow || isAxisInner ? isFitPadding ? 2 : 1 : 0;
      } else if (type === "left" && isRotated && isUndefined(paddingOption)) {
        padding = !config.axis_x_show ? 1 : isFitPadding ? axisSize : Math.max(axisSize, 40);
      }
    } else {
      if (type === "top") {
        if ($el.title && $el.title.node()) {
          padding += $$.getTitlePadding();
        }
        gap = isRotated && !isAxisInner ? axesLen : 0;
      } else if (type === "bottom" && hasAxis && isRotated && !isAxisShow) {
        padding += 1;
      }
    }
    return padding + axisSize * axesLen - gap;
  },
  getCurrentPadding: function getCurrentPadding() {
    var _this = this;
    const $$ = this,
      _map = ["top", "bottom", "left", "right"].map(function (v) {
        _newArrowCheck(this, _this);
        return $$.getCurrentPaddingByDirection(v);
      }.bind(this)),
      top = _map[0],
      bottom = _map[1],
      left = _map[2],
      right = _map[3];
    return {
      top: top,
      bottom: bottom,
      left: left,
      right: right
    };
  },
  /**
   * Get resetted padding values when 'padding=false' option is set
   * https://github.com/naver/billboard.js/issues/2367
   * @param {number|object} v Padding values to be resetted
   * @returns {number|object} Padding value
   * @private
   */
  getResettedPadding: function getResettedPadding(v) {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      isNum = isNumber(v);
    let p = isNum ? 0 : {};
    if (config.padding === !1) {
      isNum || Object.keys(v).forEach(function (key) {
        _newArrowCheck(this, _this2);
        // when data.lables=true, do not reset top padding
        p[key] = !isEmpty(config.data_labels) && config.data_labels !== !1 && key === "top" ? v[key] : 0;
      }.bind(this));
    } else {
      p = v;
    }
    return p;
  },
  /**
   * Update size values
   * @param {boolean} isInit If is called at initialization
   * @private
   */
  updateSizes: function updateSizes(isInit) {
    var _config$padding2;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      legend = $$.$el.legend,
      isRotated = config.axis_rotated,
      isNonAxis = $$.hasArcType() || state.hasTreemap,
      isFitPadding = ((_config$padding2 = config.padding) == null ? void 0 : _config$padding2.mode) === "fit";
    isInit || $$.setContainerSize();
    const currLegend = {
      width: legend ? $$.getLegendWidth() : 0,
      height: legend ? $$.getLegendHeight() : 0
    };
    if (!isNonAxis && config.axis_x_show && config.axis_x_tick_autorotate) {
      $$.updateXAxisTickClip();
    }
    const legendSize = {
        right: config.legend_show && state.isLegendRight ? $$.getLegendWidth() + 20 : 0,
        bottom: !config.legend_show || state.isLegendRight || state.isLegendInset ? 0 : currLegend.height
      },
      xAxisHeight = isRotated || isNonAxis ? 0 : $$.getHorizontalAxisHeight("x"),
      subchartXAxisHeight = config.subchart_axis_x_show && config.subchart_axis_x_tick_text_show ? xAxisHeight : 30,
      subchartHeight = config.subchart_show && !isNonAxis ? config.subchart_size_height + subchartXAxisHeight : 0,
      gaugeHeight = $$.hasType("gauge") && config.arc_needle_show && !config.gauge_fullCircle && !config.gauge_label_show ? 10 : 0,
      padding = $$.getCurrentPadding(); // when needle is shown with legend, it need some bottom space to not overlap with legend text
    // for main
    state.margin = !isNonAxis && isRotated ? {
      top: padding.top,
      right: isNonAxis ? 0 : padding.right + legendSize.right,
      bottom: legendSize.bottom + padding.bottom,
      left: subchartHeight + (isNonAxis ? 0 : padding.left)
    } : {
      top: (isFitPadding ? 0 : 4) + padding.top,
      // for top tick text
      right: isNonAxis ? 0 : padding.right + legendSize.right,
      bottom: gaugeHeight + subchartHeight + legendSize.bottom + padding.bottom,
      left: isNonAxis ? 0 : padding.left
    };
    state.margin = $$.getResettedPadding(state.margin);

    // for subchart
    state.margin2 = isRotated ? {
      top: state.margin.top,
      right: NaN,
      bottom: 20 + legendSize.bottom,
      left: $$.state.rotatedPadding.left
    } : {
      top: state.current.height - subchartHeight - legendSize.bottom,
      right: NaN,
      bottom: subchartXAxisHeight + legendSize.bottom,
      left: state.margin.left
    };

    // for legend
    state.margin3 = {
      top: 0,
      right: NaN,
      bottom: 0,
      left: 0
    };
    $$.updateSizeForLegend == null || $$.updateSizeForLegend(currLegend);
    state.width = state.current.width - state.margin.left - state.margin.right;
    state.height = state.current.height - state.margin.top - state.margin.bottom;
    if (state.width < 0) {
      state.width = 0;
    }
    if (state.height < 0) {
      state.height = 0;
    }
    state.width2 = isRotated ? state.margin.left - state.rotatedPadding.left - state.rotatedPadding.right : state.width;
    state.height2 = isRotated ? state.height : state.current.height - state.margin2.top - state.margin2.bottom;
    if (state.width2 < 0) {
      state.width2 = 0;
    }
    if (state.height2 < 0) {
      state.height2 = 0;
    }

    // for arc
    if ($$.hasArcType()) {
      const hasGauge = $$.hasType("gauge"),
        isLegendRight = config.legend_show && state.isLegendRight;
      state.arcWidth = state.width - (isLegendRight ? currLegend.width + 10 : 0);
      state.arcHeight = state.height - (isLegendRight && !hasGauge ? 0 : 10);
      if (hasGauge && !config.gauge_fullCircle) {
        state.arcHeight += state.height - $$.getPaddingBottomForGauge();
      }
      $$.updateRadius == null || $$.updateRadius();
    }
    if (state.isLegendRight && isNonAxis) {
      state.margin3.left = state.arcWidth / 2 + state.radiusExpanded * 1.1;
    }
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/style.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var style = ({
  /**
   * Add props color css rule to given selector
   * @param {boolean} withShape Set shpes' prefix class
   * @param {string} selector CSS selector
   * @param {Array} props CSS props list
   * @param {Function} propsFn Function to retrieve value or determine for props
   * @returns {Function}
   * @private
   */
  setCssRule: function setCssRule(withShape, selector, props, propsFn) {
    var _this = this;
    const $$ = this,
      config = $$.config,
      _$$$state = $$.state,
      cssRule = _$$$state.cssRule,
      style = _$$$state.style;
    return config.boost_useCssRule ? function (selection) {
      var _this2 = this;
      _newArrowCheck(this, _this);
      selection.each(function (d) {
        var _this3 = this;
        _newArrowCheck(this, _this2);
        const res = propsFn && (propsFn == null ? void 0 : propsFn.call($$, d)),
          shapeSelector = "" + (withShape ? "." + ($SHAPE.shapes + $$.getTargetSelectorSuffix(d.id)) : "") + selector;
        selector in cssRule && style.sheet.deleteRule(cssRule[shapeSelector]);
        $$.state.cssRule[shapeSelector] = addCssRules(style, shapeSelector, props.filter(Boolean).map(function (v) {
          _newArrowCheck(this, _this3);
          return isString(res) && v.indexOf(":") === -1 ? v + ": " + res : v || "";
        }.bind(this)));
      }.bind(this));
    }.bind(this) : function () {
      _newArrowCheck(this, _this);
    }.bind(this);
  },
  /**
   * Get style prop value
   * @param {Function|string} v Value
   * @returns {string|null}
   * @private
   */
  getStylePropValue: function getStylePropValue(v) {
    const useCssRule = this.config.boost_useCssRule;
    return useCssRule ? null : isFunction(v) ? v.bind(this) : v;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/text.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/**
 * Get text-anchor according text.labels.rotate angle
 * @param {number} angle Angle value
 * @returns {string} Anchor string value
 * @private
 */
function getRotateAnchor(angle) {
  let anchor = "middle";
  if (angle > 0 && angle <= 170) {
    anchor = "end";
  } else if (angle > 190 && angle <= 360) {
    anchor = "start";
  }
  return anchor;
}

/**
 * Set rotated position coordinate according text.labels.rotate angle
 * @param {object} d Data object
 * @param {object} pos Position object
 * @param {object} pos.x x coordinate
 * @param {object} pos.y y coordinate
 * @param {string} anchor string value
 * @param {boolean} isRotated If axis is rotated
 * @param {boolean} isInverted If axis is inverted
 * @returns {object} x, y coordinate
 * @private
 */
function setRotatePos(d, pos, anchor, isRotated, isInverted) {
  var _$$$getCandlestickDat;
  const $$ = this,
    value = d.value,
    isCandlestickType = $$.isCandlestickType(d),
    isNegative = isNumber(value) && value < 0 || isCandlestickType && !((_$$$getCandlestickDat = $$.getCandlestickData(d)) != null && _$$$getCandlestickDat._isUp);
  let x = pos.x,
    y = pos.y;
  const gap = 4,
    doubleGap = 8;
  if (isRotated) {
    if (anchor === "start") {
      x += isNegative ? 0 : doubleGap;
      y += gap;
    } else if (anchor === "middle") {
      x += doubleGap;
      y -= doubleGap;
    } else if (anchor === "end") {
      isNegative && (x -= doubleGap);
      y += gap;
    }
  } else {
    if (anchor === "start") {
      x += gap;
      isNegative && (y += doubleGap * 2);
    } else if (anchor === "middle") {
      y -= doubleGap;
    } else if (anchor === "end") {
      x -= gap;
      isNegative && (y += doubleGap * 2);
    }
    if (isInverted) {
      y += isNegative ? -17 : isCandlestickType ? 13 : 7;
    }
  }
  return {
    x: x,
    y: y
  };
}

/**
 * Get data.labels.position value
 * @param {object} d Data object
 * @param {string} type x | y
 * @returns {number} Position value
 * @private
 */
function getTextPos(d, type) {
  var _ref;
  const position = this.config.data_labels_position,
    id = d.id,
    index = d.index,
    value = d.value;
  return (_ref = isFunction(position) ? position.bind(this.api)(type, value, id, index, this.$el.text) : (id in position ? position[id] : position)[type]) != null ? _ref : 0;
}
/* harmony default export */ var internals_text = ({
  opacityForText: function opacityForText(d) {
    const $$ = this;
    return $$.isBarType(d) && !$$.meetsLabelThreshold(Math.abs($$.getRatio("bar", d)), "bar") ? "0" : $$.hasDataLabel ? null : "0";
  },
  /**
   * Initializes the text
   * @private
   */
  initText: function initText() {
    const $el = this.$el;
    $el.main.select("." + $COMMON.chart).append("g").attr("class", $TEXT.chartTexts).style("pointer-events", $el.treemap ? "none" : null);
  },
  /**
   * Update chartText
   * @param {object} targets $$.data.targets
   * @private
   */
  updateTargetsForText: function updateTargetsForText(targets) {
    var _this = this;
    const $$ = this,
      classChartText = $$.getChartClass("Text"),
      classTexts = $$.getClass("texts", "id"),
      classFocus = $$.classFocus.bind($$),
      mainTextUpdate = $$.$el.main.select("." + $TEXT.chartTexts).selectAll("." + $TEXT.chartText).data(targets).attr("class", function (d) {
        _newArrowCheck(this, _this);
        return ("" + classChartText(d) + classFocus(d)).trim();
      }.bind(this)),
      mainTextEnter = mainTextUpdate.enter().append("g").style("opacity", "0").attr("class", classChartText).call($$.setCssRule(!0, " ." + $TEXT.text, ["fill", "pointer-events:none"], $$.updateTextColor));
    mainTextEnter.append("g").attr("class", classTexts);
  },
  /**
   * Update text
   * @private
   */
  updateText: function updateText() {
    var _this2 = this;
    const $$ = this,
      $el = $$.$el,
      $T = $$.$T,
      config = $$.config,
      axis = $$.axis,
      classText = $$.getClass("text", "index"),
      labelsCentered = config.data_labels.centered,
      text = $el.main.selectAll("." + $TEXT.texts).selectAll("." + $TEXT.text).data($$.labelishData.bind($$));
    $T(text.exit()).style("fill-opacity", "0").remove();
    $el.text = text.enter().append("text").merge(text).attr("class", classText).attr("text-anchor", function (d) {
      _newArrowCheck(this, _this2);
      const isInverted = config["axis_" + (axis == null ? void 0 : axis.getId(d.id)) + "_inverted"];

      // when value is negative or
      let isEndAnchor = isInverted ? d.value > 0 : d.value < 0;
      if ($$.isCandlestickType(d)) {
        const data = $$.getCandlestickData(d);
        isEndAnchor = !(data != null && data._isUp);
      } else if ($$.isTreemapType(d)) {
        return labelsCentered ? "middle" : "start";
      }
      return config.axis_rotated ? isEndAnchor ? "end" : "start" : "middle";
    }.bind(this)).style("fill", $$.getStylePropValue($$.updateTextColor)).style("fill-opacity", "0").each(function (d, i, texts) {
      const node = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
      let value = d.value;
      if ($$.isBubbleZType(d)) {
        value = $$.getBubbleZData(value, "z");
      } else if ($$.isCandlestickType(d)) {
        const data = $$.getCandlestickData(d);
        if (data) {
          value = data.close;
        }
      }
      value = $$.isTreemapType(d) ? $$.treemapDataLabelFormat(d)(node) : $$.dataLabelFormat(d.id)(value, d.id, d.index, texts);
      if (isNumber(value)) {
        this.textContent = value;
      } else {
        setTextValue(node, value);
      }
    });
  },
  updateTextColor: function updateTextColor(d) {
    const $$ = this,
      config = $$.config,
      labelColors = config.data_labels_colors,
      defaultColor = $$.isArcType(d) && !$$.isRadarType(d) || $$.isTreemapType(d) ? null : $$.color(d);
    let color;
    if (isString(labelColors)) {
      color = labelColors;
    } else if (isObject(labelColors)) {
      const _ref2 = d.data || d,
        id = _ref2.id;
      color = labelColors[id];
    } else if (isFunction(labelColors)) {
      color = labelColors.bind($$.api)(defaultColor, d);
    }
    if ($$.isCandlestickType(d) && !isFunction(labelColors)) {
      const value = $$.getCandlestickData(d);
      if (!(value != null && value._isUp)) {
        const downColor = config.candlestick_color_down;
        color = isObject(downColor) ? downColor[d.id] : downColor;
      }
    }
    return color || defaultColor;
  },
  /**
   * Update data label text background color
   * @param {object} d Data object
   * @returns {string|null}
   * @private
   */
  updateTextBacgroundColor: function updateTextBacgroundColor(d) {
    const $$ = this,
      $el = $$.$el,
      config = $$.config,
      backgroundColor = config.data_labels_backgroundColors;
    let color = "";
    if (isString(backgroundColor) || isObject(backgroundColor)) {
      const id = isString(backgroundColor) ? "" : $$.getTargetSelectorSuffix("id" in d ? d.id : d.data.id),
        filter = $el.defs.select(["filter[id*='labels-bg", "']"].join(id));
      if (filter.size()) {
        color = "url(#" + filter.attr("id") + ")";
      }
    }
    return color || null;
  },
  /**
   * Redraw chartText
   * @param {Function} getX Positioning function for x
   * @param {Function} getY Positioning function for y
   * @param {boolean} forFlow Weather is flow
   * @param {boolean} withTransition transition is enabled
   * @returns {Array}
   * @private
   */
  redrawText: function redrawText(getX, getY, forFlow, withTransition) {
    const $$ = this,
      $T = $$.$T,
      axis = $$.axis,
      config = $$.config,
      hasTreemap = $$.state.hasTreemap,
      t = getRandom(!0),
      isRotated = config.axis_rotated,
      angle = config.data_labels.rotate,
      anchorString = getRotateAnchor(angle),
      rotateString = angle ? "rotate(" + angle + ")" : "";
    $$.$el.text.style("fill", $$.getStylePropValue($$.updateTextColor)).attr("filter", $$.updateTextBacgroundColor.bind($$)).style("fill-opacity", forFlow ? 0 : $$.opacityForText.bind($$)).each(function (d, i) {
      // do not apply transition for newly added text elements
      const node = $T(hasTreemap && this.childElementCount ? this.parentNode : this, !!(withTransition && this.getAttribute("x")), t),
        isInverted = config["axis_" + (axis == null ? void 0 : axis.getId(d.id)) + "_inverted"];
      let pos = {
        x: getX.bind(this)(d, i),
        y: getY.bind(this)(d, i)
      };
      if (angle) {
        pos = setRotatePos.bind($$)(d, pos, anchorString, isRotated, isInverted);
        node.attr("text-anchor", anchorString);
      }

      // when is multiline
      if (this.childElementCount || angle) {
        node.attr("transform", "translate(" + pos.x + " " + pos.y + ") " + rotateString);
      } else {
        node.attr("x", pos.x).attr("y", pos.y);
      }
    });

    // need to return 'true' as of being pushed to the redraw list
    // ref: getRedrawList()
    return !0;
  },
  /**
   * Gets the getBoundingClientRect value of the element
   * @param {HTMLElement|d3.selection} element Target element
   * @param {string} className Class name
   * @returns {object} value of element.getBoundingClientRect()
   * @private
   */
  getTextRect: function getTextRect(element, className) {
    var _this3 = this;
    const $$ = this;
    let base = element.node ? element.node() : element;
    if (!/text/i.test(base.tagName)) {
      base = base.querySelector("text");
    }
    const text = base.textContent,
      cacheKey = KEY.textRect + "-" + text.replace(/\W/g, "_");
    let rect = $$.cache.get(cacheKey);
    if (!rect) {
      $$.$el.svg.append("text").style("visibility", "hidden").style("font", (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(base).style("font")).classed(className, !0).text(text).call(function (v) {
        _newArrowCheck(this, _this3);
        rect = getBoundingRect(v.node());
      }.bind(this)).remove();
      $$.cache.add(cacheKey, rect);
    }
    return rect;
  },
  /**
   * Gets the x or y coordinate of the text
   * @param {object} indices Indices values
   * @param {boolean} forX whether or not to x
   * @returns {number} coordinates
   * @private
   */
  generateXYForText: function generateXYForText(indices, forX) {
    var _this4 = this;
    const $$ = this,
      _$$$state = $$.state,
      hasRadar = _$$$state.hasRadar,
      hasTreemap = _$$$state.hasTreemap,
      types = Object.keys(indices),
      points = {},
      getter = forX ? $$.getXForText : $$.getYForText;
    hasRadar && types.push("radar");
    hasTreemap && types.push("treemap");
    types.forEach(function (v) {
      _newArrowCheck(this, _this4);
      points[v] = $$["generateGet" + capitalize(v) + "Points"](indices[v], !1);
    }.bind(this));
    return function (d, i) {
      const type = $$.isAreaType(d) && "area" || $$.isBarType(d) && "bar" || $$.isCandlestickType(d) && "candlestick" || $$.isRadarType(d) && "radar" || $$.isTreemapType(d) && "treemap" || "line";
      return getter.call($$, points[type](d, i), d, this);
    };
  },
  /**
   * Get centerized text position for bar type data.label.text
   * @param {object} d Data object
   * @param {Array} points Data points position
   * @param {HTMLElement} textElement Data label text element
   * @param {string} type 'x' or 'y'
   * @returns {number} Position value
   * @private
   */
  getCenteredTextPos: function getCenteredTextPos(d, points, textElement, type) {
    const $$ = this,
      config = $$.config,
      isRotated = config.axis_rotated,
      isBarType = $$.isBarType(d),
      isTreemapType = $$.isTreemapType(d);
    if (config.data_labels.centered && (isBarType || isTreemapType)) {
      const rect = getBoundingRect(textElement);
      if (isBarType) {
        const isPositive = d.value >= 0;
        if (isRotated) {
          const w = (isPositive ? points[1][1] - points[0][1] : points[0][1] - points[1][1]) / 2 + rect.width / 2;
          return isPositive ? -w - 3 : w + 2;
        } else {
          const h = (isPositive ? points[0][1] - points[1][1] : points[1][1] - points[0][1]) / 2 + rect.height / 2;
          return isPositive ? h : -h - 2;
        }
      } else if (isTreemapType) {
        return type === "x" ? (points[1][0] - points[0][0]) / 2 : (points[1][1] - points[0][1]) / 2 + rect.height / 2;
      }
    }
    return 0;
  },
  /**
   * Gets the x coordinate of the text
   * @param {object} points Data points position
   * @param {object} d Data object
   * @param {HTMLElement} textElement Data label text element
   * @returns {number} x coordinate
   * @private
   */
  getXForText: function getXForText(points, d, textElement) {
    const $$ = this,
      config = $$.config,
      isRotated = config.axis_rotated,
      isTreemapType = $$.isTreemapType(d);
    let xPos = points[0][0];
    if ($$.isCandlestickType(d)) {
      if (isRotated) {
        var _$$$getCandlestickDat2;
        xPos = (_$$$getCandlestickDat2 = $$.getCandlestickData(d)) != null && _$$$getCandlestickDat2._isUp ? points[2][2] + 4 : points[2][1] - 4;
      } else {
        xPos += (points[1][0] - xPos) / 2;
      }
    } else if (isTreemapType) {
      xPos += config.data_labels.centered ? 0 : 5;
    } else {
      if (isRotated) {
        const isInverted = config["axis_" + $$.axis.getId(d.id) + "_inverted"],
          padding = $$.isBarType(d) ? 4 : 6,
          value = d.value;
        xPos = points[2][1];
        if (isInverted) {
          xPos -= padding * (value > 0 ? 1 : -1);
        } else {
          xPos += padding * (value < 0 ? -1 : 1);
        }
      } else {
        xPos = $$.hasType("bar") ? (points[2][0] + points[0][0]) / 2 : xPos;
      }
    }
    if (isRotated || isTreemapType) {
      xPos += $$.getCenteredTextPos(d, points, textElement, "x");
    }
    return xPos + getTextPos.call(this, d, "x");
  },
  /**
   * Gets the y coordinate of the text
   * @param {object} points Data points position
   * @param {object} d Data object
   * @param {HTMLElement} textElement Data label text element
   * @returns {number} y coordinate
   * @private
   */
  getYForText: function getYForText(points, d, textElement) {
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      state = $$.state,
      isRotated = config.axis_rotated,
      isInverted = config["axis_" + (axis == null ? void 0 : axis.getId(d.id)) + "_inverted"],
      isBarType = $$.isBarType(d),
      isTreemapType = $$.isTreemapType(d),
      r = config.point_r,
      rect = getBoundingRect(textElement);
    let value = d.value,
      baseY = 3,
      yPos;
    if ($$.isCandlestickType(d)) {
      value = $$.getCandlestickData(d);
      if (isRotated) {
        yPos = points[0][0];
        yPos += (points[1][0] - yPos) / 2 + baseY;
      } else {
        yPos = value && value._isUp ? points[2][2] - baseY : points[2][1] + baseY * 4;
        if (isInverted) {
          yPos += 15 * (value._isUp ? 1 : -1);
        }
      }
    } else if (isTreemapType) {
      yPos = points[0][1] + (config.data_labels.centered ? 0 : rect.height + 5);
    } else {
      if (isRotated) {
        yPos = (points[0][0] + points[2][0] + rect.height * .6) / 2;
      } else {
        yPos = points[2][1];
        if (isNumber(r) && r > 5 && ($$.isLineType(d) || $$.isScatterType(d))) {
          baseY += config.point_r / 2.3;
        }
        if (value < 0 || value === 0 && !state.hasPositiveValue && state.hasNegativeValue) {
          yPos += isInverted ? isBarType ? -3 : -5 : rect.height + (isBarType ? -baseY : baseY);
        } else {
          let diff = -baseY * 2;
          if (isBarType) {
            diff = -baseY;
          } else if ($$.isBubbleType(d)) {
            diff = baseY;
          }
          if (isInverted) {
            diff = isBarType ? 10 : 15;
          }
          yPos += diff;
        }
      }
    }
    if (!isRotated || isTreemapType) {
      yPos += $$.getCenteredTextPos(d, points, textElement, "y");
    }
    return yPos + getTextPos.call(this, d, "y");
  },
  /**
   * Calculate if two or more text nodes are overlapping
   * Mark overlapping text nodes with "text-overlapping" class
   * @param {string} id Axis id
   * @param {ChartInternal} $$ ChartInternal context
   * @param {string} selector Selector string
   * @private
   */
  markOverlapped: function markOverlapped(id, $$, selector) {
    var _this5 = this;
    const textNodes = $$.$el.arcs.selectAll(selector),
      filteredTextNodes = textNodes.filter(function (node) {
        _newArrowCheck(this, _this5);
        return node.data.id !== id;
      }.bind(this)),
      textNode = textNodes.filter(function (node) {
        _newArrowCheck(this, _this5);
        return node.data.id === id;
      }.bind(this)),
      translate = getTranslation(textNode.node()),
      calcHypo = function (x, y) {
        _newArrowCheck(this, _this5);
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      }.bind(this); // Calculates the length of the hypotenuse
    textNode.node() && filteredTextNodes.each(function () {
      const coordinate = getTranslation(this),
        filteredTextNode = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this),
        nodeForWidth = calcHypo(translate.e, translate.f) > calcHypo(coordinate.e, coordinate.f) ? textNode : filteredTextNode,
        overlapsX = Math.ceil(Math.abs(translate.e - coordinate.e)) < Math.ceil(nodeForWidth.node().getComputedTextLength()),
        overlapsY = Math.ceil(Math.abs(translate.f - coordinate.f)) < parseInt(textNode.style("font-size"), 10);
      filteredTextNode.classed($TEXT.TextOverlapping, overlapsX && overlapsY);
    });
  },
  /**
   * Calculate if two or more text nodes are overlapping
   * Remove "text-overlapping" class on selected text nodes
   * @param {ChartInternal} $$ ChartInternal context
   * @param {string} selector Selector string
   * @private
   */
  undoMarkOverlapped: function undoMarkOverlapped($$, selector) {
    $$.$el.arcs.selectAll(selector).each(function () {
      (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.selectAll)([this, this.previousSibling]).classed($TEXT.TextOverlapping, !1);
    });
  },
  /**
   * Check if meets the ratio to show data label text
   * @param {number} ratio ratio to meet
   * @param {string} type chart type
   * @returns {boolean}
   * @private
   */
  meetsLabelThreshold: function meetsLabelThreshold(ratio, type) {
    if (ratio === void 0) {
      ratio = 0;
    }
    const $$ = this,
      config = $$.config,
      threshold = config[type + "_label_threshold"] || 0;
    return ratio >= threshold;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/title.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/**
 * Get the text position
 * @param {string} pos right, left or center
 * @param {number} width chart width
 * @returns {string|number} text-anchor value or position in pixel
 * @private
 */
function getTextXPos(pos, width) {
  if (pos === void 0) {
    pos = "left";
  }
  const isNum = isNumber(width);
  let position;
  if (pos.indexOf("center") > -1) {
    position = isNum ? width / 2 : "middle";
  } else if (pos.indexOf("right") > -1) {
    position = isNum ? width : "end";
  } else {
    position = isNum ? 0 : "start";
  }
  return position;
}
/* harmony default export */ var internals_title = ({
  /**
   * Initializes the title
   * @private
   */
  initTitle: function initTitle() {
    const $$ = this,
      config = $$.config,
      $el = $$.$el;
    if (config.title_text) {
      $el.title = $el.svg.append("g");
      const text = $el.title.append("text").style("text-anchor", getTextXPos(config.title_position)).attr("class", $TEXT.title);
      setTextValue(text, config.title_text, [.3, 1.5]);
    }
  },
  /**
   * Redraw title
   * @private
   */
  redrawTitle: function redrawTitle() {
    const $$ = this,
      config = $$.config,
      current = $$.state.current,
      title = $$.$el.title;
    if (title) {
      const x = getTextXPos(config.title_position, current.width),
        y = (config.title_padding.top || 0) + $$.getTextRect($$.$el.title, $TEXT.title).height;
      title.attr("transform", "translate(" + x + ", " + y + ")");
    }
  },
  /**
   * Get title padding
   * @returns {number} padding value
   * @private
   */
  getTitlePadding: function getTitlePadding() {
    const $$ = this,
      $el = $$.$el,
      config = $$.config;
    return (config.title_padding.top || 0) + $$.getTextRect($el.title, $TEXT.title).height + (config.title_padding.bottom || 0);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/tooltip.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var internals_tooltip = ({
  /**
   * Initializes the tooltip
   * @private
   */
  initTooltip: function initTooltip() {
    const $$ = this,
      config = $$.config,
      $el = $$.$el;
    $el.tooltip = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(config.tooltip_contents.bindto);
    if ($el.tooltip.empty()) {
      $el.tooltip = $el.chart.append("div").attr("class", $TOOLTIP.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none");
    }
    $$.bindTooltipResizePos();
  },
  /**
   * Show tooltip at initialization.
   * Is called only when tooltip.init.show=true option is set
   * @private
   */
  initShowTooltip: function initShowTooltip() {
    const $$ = this,
      config = $$.config,
      $el = $$.$el,
      _$$$state = $$.state,
      hasAxis = _$$$state.hasAxis,
      hasRadar = _$$$state.hasRadar;
    // Show tooltip if needed
    if (config.tooltip_init_show) {
      var _$$$axis, _data;
      if ((_$$$axis = $$.axis) != null && _$$$axis.isTimeSeries() && isString(config.tooltip_init_x)) {
        config.tooltip_init_x = parseDate.call($$, config.tooltip_init_x);
      }
      $$.api.tooltip.show({
        data: (_data = {}, _data[!(hasAxis || hasRadar) ? "index" : "x"] = config.tooltip_init_x, _data)
      });
      const position = config.tooltip_init_position;
      if (!config.tooltip_contents.bindto && !isEmpty(position)) {
        const _position$top = position.top,
          top = _position$top === void 0 ? 0 : _position$top,
          _position$left = position.left,
          left = _position$left === void 0 ? 50 : _position$left;
        $el.tooltip.style("top", isString(top) ? top : top + "px").style("left", isString(left) ? left : left + "px").style("display", null);
      }
    }
  },
  /**
   * Get the tooltip HTML string
   * @param  {Array} args Arguments
   * @returns {string} Formatted HTML string
   * @private
   */
  getTooltipHTML: function getTooltipHTML() {
    const $$ = this,
      api = $$.api,
      config = $$.config;
    return isFunction(config.tooltip_contents) ? config.tooltip_contents.bind(api).apply(void 0, arguments) : $$.getTooltipContent.apply($$, arguments);
  },
  /**
   * Returns the tooltip content(HTML string)
   * @param {object} d data
   * @param {Function} defaultTitleFormat Default title format
   * @param {Function} defaultValueFormat Default format for each data value in the tooltip.
   * @param {Function} color Color function
   * @returns {string} html
   * @private
   */
  getTooltipContent: function getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color) {
    var _this = this;
    const $$ = this,
      api = $$.api,
      config = $$.config,
      state = $$.state,
      $el = $$.$el,
      _map = ["title", "name", "value"].map(function (v) {
        _newArrowCheck(this, _this);
        const fn = config["tooltip_format_" + v];
        return isFunction(fn) ? fn.bind(api) : fn;
      }.bind(this)),
      titleFn = _map[0],
      nameFn = _map[1],
      valueFn = _map[2],
      titleFormat = function () {
        _newArrowCheck(this, _this);
        return sanitize((titleFn || defaultTitleFormat).apply(void 0, arguments));
      }.bind(this),
      nameFormat = function () {
        var _this2 = this;
        _newArrowCheck(this, _this);
        return sanitize((nameFn || function (name) {
          _newArrowCheck(this, _this2);
          return name;
        }.bind(this)).apply(void 0, arguments));
      }.bind(this),
      valueFormat = function () {
        var _this3 = this;
        _newArrowCheck(this, _this);
        const fn = valueFn || (state.hasTreemap || $$.isStackNormalized() ? function (v, ratio) {
          _newArrowCheck(this, _this3);
          return (ratio * 100).toFixed(2) + "%";
        }.bind(this) : defaultValueFormat);
        return sanitize(fn.apply(void 0, arguments));
      }.bind(this),
      order = config.tooltip_order,
      getRowValue = function (row) {
        _newArrowCheck(this, _this);
        return $$.axis && $$.isBubbleZType(row) ? $$.getBubbleZData(row.value, "z") : $$.getBaseValue(row);
      }.bind(this),
      getBgColor = $$.levelColor ? function (row) {
        _newArrowCheck(this, _this);
        return $$.levelColor(row.value);
      }.bind(this) : function (row) {
        _newArrowCheck(this, _this);
        return color(row);
      }.bind(this),
      contents = config.tooltip_contents,
      tplStr = contents.template,
      targetIds = $$.mapToTargetIds();

    // get formatter function

    // determine fotmatter function with sanitization

    if (order === null && config.data_groups.length) {
      // for stacked data, order should aligned with the visually displayed data
      const ids = $$.orderTargets($$.data.targets).map(function (i2) {
        _newArrowCheck(this, _this);
        return i2.id;
      }.bind(this)).reverse();
      d.sort(function (a, b) {
        _newArrowCheck(this, _this);
        let v1 = a ? a.value : null,
          v2 = b ? b.value : null;
        if (v1 > 0 && v2 > 0) {
          v1 = a.id ? ids.indexOf(a.id) : null;
          v2 = b.id ? ids.indexOf(b.id) : null;
        }
        return v1 - v2;
      }.bind(this));
    } else if (/^(asc|desc)$/.test(order)) {
      d.sort(function (a, b) {
        _newArrowCheck(this, _this);
        const v1 = a ? getRowValue(a) : null,
          v2 = b ? getRowValue(b) : null;
        return order === "asc" ? v1 - v2 : v2 - v1;
      }.bind(this));
    } else if (isFunction(order)) {
      d.sort(order.bind(api));
    }
    const tpl = $$.getTooltipContentTemplate(tplStr),
      len = d.length;
    let text, row, param, value, i;
    for (i = 0; i < len; i++) {
      row = d[i];
      if (!row || !(getRowValue(row) || getRowValue(row) === 0)) {
        continue;
      }
      if (isUndefined(text)) {
        const title = (state.hasAxis || state.hasRadar) && titleFormat(row.x);
        text = tplProcess(tpl[0], {
          CLASS_TOOLTIP: $TOOLTIP.tooltip,
          TITLE: isValue(title) ? tplStr ? title : "<tr><th colspan=\"2\">" + title + "</th></tr>" : ""
        });
      }
      if (!row.ratio && $el.arcs) {
        param = ["arc", $$.$el.arcs.select("path." + $ARC.arc + "-" + row.id).data()[0]];
        row.ratio = $$.getRatio.apply($$, param);
      }

      // arrange param to be passed to formatter
      param = [row.ratio, row.id, row.index];
      if ($$.isAreaRangeType(row)) {
        const _map2 = ["high", "low"].map(function (v) {
            _newArrowCheck(this, _this);
            return valueFormat.apply(void 0, [$$.getRangedData(row, v)].concat(param));
          }.bind(this)),
          high = _map2[0],
          low = _map2[1],
          mid = valueFormat.apply(void 0, [getRowValue(row)].concat(param));
        value = "<b>Mid:</b> " + mid + " <b>High:</b> " + high + " <b>Low:</b> " + low;
      } else if ($$.isCandlestickType(row)) {
        const _map3 = ["open", "high", "low", "close", "volume"].map(function (v) {
            _newArrowCheck(this, _this);
            const value = $$.getRangedData(row, v, "candlestick");
            return value ? valueFormat.apply(void 0, [$$.getRangedData(row, v, "candlestick")].concat(param)) : undefined;
          }.bind(this)),
          open = _map3[0],
          high = _map3[1],
          low = _map3[2],
          close = _map3[3],
          volume = _map3[4];
        value = "<b>Open:</b> " + open + " <b>High:</b> " + high + " <b>Low:</b> " + low + " <b>Close:</b> " + close + (volume ? " <b>Volume:</b> " + volume : "");
      } else if ($$.isBarRangeType(row)) {
        const _row = row,
          _row$value = _row.value,
          start = _row$value[0],
          end = _row$value[1],
          id = _row.id,
          index = _row.index;
        value = valueFormat(start, undefined, id, index) + " ~ " + valueFormat(end, undefined, id, index);
      } else {
        value = valueFormat.apply(void 0, [getRowValue(row)].concat(param));
      }
      if (value !== undefined) {
        // Skip elements when their name is set to null
        if (row.name === null) {
          continue;
        }
        const name = nameFormat.apply(void 0, [row.name].concat(param)),
          color = getBgColor(row),
          contentValue = {
            CLASS_TOOLTIP_NAME: $TOOLTIP.tooltipName + $$.getTargetSelectorSuffix(row.id),
            COLOR: tplStr || !$$.patterns ? color : "<svg><rect style=\"fill:" + color + "\" width=\"10\" height=\"10\"></rect></svg>",
            NAME: name,
            VALUE: value
          };
        if (tplStr && isObject(contents.text)) {
          const index = targetIds.indexOf(row.id);
          Object.keys(contents.text).forEach(function (key) {
            _newArrowCheck(this, _this);
            contentValue[key] = contents.text[key][index];
          }.bind(this));
        }
        text += tplProcess(tpl[1], contentValue);
      }
    }
    return text + "</table>";
  },
  /**
   * Get the content template string
   * @param {string} tplStr Tempalte string
   * @returns {Array} Template string
   * @private
   */
  getTooltipContentTemplate: function getTooltipContentTemplate(tplStr) {
    return (tplStr || "<table class=\"{=CLASS_TOOLTIP}\"><tbody>\n\t\t\t\t{=TITLE}\n\t\t\t\t{{<tr class=\"{=CLASS_TOOLTIP_NAME}\">\n\t\t\t\t\t<td class=\"name\">" + (this.patterns ? "{=COLOR}" : "<span style=\"background-color:{=COLOR}\"></span>") + "{=NAME}</td>\n\t\t\t\t\t<td class=\"value\">{=VALUE}</td>\n\t\t\t\t</tr>}}\n\t\t\t</tbody></table>").replace(/(\r?\n|\t)/g, "").split(/{{(.*)}}/);
  },
  /**
   * Update tooltip position coordinate
   * @param {object} dataToShow Data object
   * @param {SVGElement} eventTarget Event element
   * @private
   */
  setTooltipPosition: function setTooltipPosition(dataToShow, eventTarget) {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      state = $$.state,
      _$$$$el = $$.$el,
      eventRect = _$$$$el.eventRect,
      tooltip = _$$$$el.tooltip,
      bindto = config.tooltip_contents.bindto,
      isRotated = config.axis_rotated,
      datum = tooltip == null ? void 0 : tooltip.datum();
    if (!bindto && datum) {
      var _config$tooltip_posit, _config$tooltip_posit2;
      const data = dataToShow != null ? dataToShow : JSON.parse(datum.current),
        _getPointer = getPointer(state.event, eventTarget != null ? eventTarget : eventRect == null ? void 0 : eventRect.node()),
        x = _getPointer[0],
        y = _getPointer[1],
        currPos = {
          x: x,
          y: y
        };
      // get mouse event position

      if (state.hasAxis && scale.x && datum && "x" in datum) {
        const getYPos = function (value, id, axisId) {
          var _$$$axis2;
          if (value === void 0) {
            value = 0;
          }
          if (axisId === void 0) {
            axisId = "y";
          }
          _newArrowCheck(this, _this4);
          const scaleFn = scale[id ? (_$$$axis2 = $$.axis) == null ? void 0 : _$$$axis2.getId(id) : axisId];
          return scaleFn ? scaleFn(value) + (isRotated ? state.margin.left : state.margin.top) : 0;
        }.bind(this);
        currPos.xAxis = scale.x(datum.x) + (
        // add margin only when user specified tooltip.position function
        config.tooltip_position ? isRotated ? state.margin.top : state.margin.left : 0);
        if (data.length === 1) {
          currPos.yAxis = getYPos(data[0].value, data[0].id);
        } else {
          currPos.yAxis = getYPos;
        }
      }
      const _datum$width = datum.width,
        width = _datum$width === void 0 ? 0 : _datum$width,
        _datum$height = datum.height,
        height = _datum$height === void 0 ? 0 : _datum$height,
        pos = (_config$tooltip_posit = (_config$tooltip_posit2 = config.tooltip_position) == null ? void 0 : _config$tooltip_posit2.bind($$.api)(data, width, height, eventRect == null ? void 0 : eventRect.node(), currPos)) != null ? _config$tooltip_posit : $$.getTooltipPosition.bind($$)(width, height, currPos); // Get tooltip position
      ["top", "left"].forEach(function (v) {
        _newArrowCheck(this, _this4);
        const value = pos[v];
        tooltip.style(v, value + "px");

        // Remember left pos in percentage to be used on resize call
        if (v === "left" && !datum.xPosInPercent) {
          datum.xPosInPercent = value / state.current.width * 100;
        }
      }.bind(this));
    }
  },
  /**
   * Returns the position of the tooltip
   * @param {string} tWidth Width value of tooltip element
   * @param {string} tHeight Height value of tooltip element
   * @param {object} currPos Current mouse position
   * @returns {object} top, left value
   * @private
   */
  getTooltipPosition: function getTooltipPosition(tWidth, tHeight, currPos) {
    var _this5 = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      state = $$.state,
      _state = state,
      width = _state.width,
      height = _state.height,
      current = _state.current,
      isLegendRight = _state.isLegendRight,
      inputType = _state.inputType,
      hasGauge = $$.hasType("gauge") && !config.gauge_fullCircle,
      hasTreemap = state.hasTreemap,
      isRotated = config.axis_rotated,
      hasArcType = $$.hasArcType(),
      svgLeft = $$.getSvgLeft(!0);
    let chartRight = svgLeft + current.width - $$.getCurrentPaddingByDirection("right");
    const size = 20;
    let x = currPos.x,
      y = currPos.y;

    // Determine tooltip position
    if (hasArcType) {
      const raw = inputType === "touch" || $$.hasType("radar");
      if (!raw) {
        x += (width - (isLegendRight ? $$.getLegendWidth() : 0)) / 2;
        y += hasGauge ? height : height / 2;
      }
    } else if (!hasTreemap) {
      const padding = {
        top: $$.getCurrentPaddingByDirection("top", !0),
        left: $$.getCurrentPaddingByDirection("left", !0)
      };
      if (isRotated) {
        x += svgLeft + padding.left + size;
        y = padding.top + currPos.xAxis + size;
        chartRight -= svgLeft;
      } else {
        x = svgLeft + padding.left + size + (scale.zoom ? x : currPos.xAxis);
        y += padding.top - 5;
      }
    }

    // when tooltip left + tWidth > chart's width
    if (x + tWidth + 15 > chartRight) {
      x -= tWidth + (hasTreemap || hasArcType ? 0 : isRotated ? 40 : 38);
    }
    if (y + tHeight > current.height) {
      const gap = hasTreemap ? 0 : 30;
      y -= hasGauge ? tHeight * 3 : tHeight + gap;
    }
    const pos = {
      top: y,
      left: x
    };

    // make sure to not be positioned out of viewport
    Object.keys(pos).forEach(function (v) {
      _newArrowCheck(this, _this5);
      if (pos[v] < 0) {
        pos[v] = 0;
      }
    }.bind(this));
    return pos;
  },
  /**
   * Show the tooltip
   * @param {object} selectedData Data object
   * @param {SVGElement} eventTarget Event element
   * @private
   */
  showTooltip: function showTooltip(selectedData, eventTarget) {
    var _this6 = this;
    const $$ = this,
      config = $$.config,
      tooltip = $$.$el.tooltip,
      dataToShow = selectedData.filter(function (d) {
        _newArrowCheck(this, _this6);
        return d && isValue($$.getBaseValue(d));
      }.bind(this));
    if (!tooltip || dataToShow.length === 0 || !config.tooltip_show) {
      return;
    }
    let datum = tooltip.datum();
    const dataStr = JSON.stringify(selectedData);
    if (!datum || datum.current !== dataStr) {
      const _selectedData$concat$ = selectedData.concat().sort()[0],
        index = _selectedData$concat$.index,
        x = _selectedData$concat$.x;
      callFn(config.tooltip_onshow, $$.api, selectedData);

      // set tooltip content
      tooltip.html($$.getTooltipHTML(selectedData,
      // data
      $$.axis ? $$.axis.getXAxisTickFormat() : $$.categoryName.bind($$),
      // defaultTitleFormat
      $$.getDefaultValueFormat(),
      // defaultValueFormat
      $$.color // color
      )).style("display", null).style("visibility", null) // for IE9
      .datum(datum = {
        index: index,
        x: x,
        current: dataStr,
        width: tooltip.property("offsetWidth"),
        height: tooltip.property("offsetHeight")
      });
      callFn(config.tooltip_onshown, $$.api, selectedData);
      $$._handleLinkedCharts(!0, index);
    }
    $$.setTooltipPosition(dataToShow, eventTarget);
  },
  /**
   * Adjust tooltip position on resize event
   * @private
   */
  bindTooltipResizePos: function bindTooltipResizePos() {
    var _this7 = this;
    const $$ = this,
      resizeFunction = $$.resizeFunction,
      state = $$.state,
      tooltip = $$.$el.tooltip;
    resizeFunction.add(function () {
      _newArrowCheck(this, _this7);
      if (tooltip.style("display") === "block") {
        const current = state.current,
          _tooltip$datum = tooltip.datum(),
          width = _tooltip$datum.width,
          xPosInPercent = _tooltip$datum.xPosInPercent;
        let value = current.width / 100 * xPosInPercent;
        const diff = current.width - (value + width);

        // if tooltip size overs current viewport size
        if (diff < 0) {
          value += diff;
        }
        tooltip.style("left", value + "px");
      }
    }.bind(this));
  },
  /**
   * Hide the tooltip
   * @param {boolean} force Force to hide
   * @private
   */
  hideTooltip: function hideTooltip(force) {
    const $$ = this,
      api = $$.api,
      config = $$.config,
      tooltip = $$.$el.tooltip;
    if (tooltip && tooltip.style("display") !== "none" && (!config.tooltip_doNotHide || force)) {
      var _tooltip$datum$curren;
      const selectedData = JSON.parse((_tooltip$datum$curren = tooltip.datum().current) != null ? _tooltip$datum$curren : {});
      callFn(config.tooltip_onhide, api, selectedData);

      // hide tooltip
      tooltip.style("display", "none").style("visibility", "hidden") // for IE9
      .datum(null);
      callFn(config.tooltip_onhidden, api, selectedData);
    }
  },
  /**
   * Toggle display for linked chart instances
   * @param {boolean} show true: show, false: hide
   * @param {number} index x Axis index
   * @private
   */
  _handleLinkedCharts: function _handleLinkedCharts(show, index) {
    var _this8 = this;
    const $$ = this,
      charts = $$.charts,
      config = $$.config,
      event = $$.state.event;
    // Prevent propagation among instances if isn't instantiated from the user's event
    // https://github.com/naver/billboard.js/issues/1979
    if (event != null && event.isTrusted && config.tooltip_linked && charts.length > 1) {
      const linkedName = config.tooltip_linked_name;
      charts.filter(function (c) {
        _newArrowCheck(this, _this8);
        return c !== $$.api;
      }.bind(this)).forEach(function (c) {
        _newArrowCheck(this, _this8);
        const _c$internal = c.internal,
          config = _c$internal.config,
          $el = _c$internal.$el,
          isLinked = config.tooltip_linked,
          name = config.tooltip_linked_name,
          isInDom = browser_doc.body.contains($el.chart.node());
        if (isLinked && linkedName === name && isInDom) {
          const data = $el.tooltip.data()[0],
            isNotSameIndex = index !== (data == null ? void 0 : data.index);
          try {
            c.tooltip[show && isNotSameIndex ? "show" : "hide"]({
              index: index
            });
          } catch (e) {}
        }
      }.bind(this));
    }
  },
  /**
   * Update tooltip content on redraw
   * - In a situation where tooltip is displayed and data load happens, it should reflect loaded data to tooltip
   * @param {d3Selection} context Event rect element
   * @param {number} index Data index
   * @private
   */
  updateTooltipOnRedraw: function updateTooltipOnRedraw(context, index) {
    var _this9 = this;
    const $$ = this,
      config = $$.config,
      _$$$$el2 = $$.$el,
      eventRect = _$$$$el2.eventRect,
      svg = _$$$$el2.svg,
      tooltip = _$$$$el2.tooltip,
      _$$$state2 = $$.state,
      event = _$$$state2.event,
      hasAxis = _$$$state2.hasAxis,
      hasRadar = _$$$state2.hasRadar,
      hasTreemap = _$$$state2.hasTreemap;
    // Update tooltip, when tooltip is in shown state
    if ((tooltip == null ? void 0 : tooltip.style("display")) === "block" && event) {
      var _ref;
      const rect = context != null ? context : (_ref = hasRadar ? svg : eventRect) == null ? void 0 : _ref.node();

      // for Axis based & Radar
      if (hasAxis || hasRadar) {
        if ($$.isMultipleX()) {
          $$.selectRectForMultipleXs(rect, !1);
        } else {
          const idx = index != null ? index : $$.getDataIndexFromEvent(event);
          if (index === -1) {
            $$.api.tooltip.hide();
          } else {
            $$.selectRectForSingle(rect, idx);
            $$.setExpand(idx, null, !0);
          }
        }

        // for Arc & Treemap
      } else {
        const clientX = event.clientX,
          clientY = event.clientY;
        setTimeout(function () {
          _newArrowCheck(this, _this9);
          let target = browser_doc.elementFromPoint(clientX, clientY);
          const data = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(target).datum();
          if (data) {
            const d = $$.hasArcType() ? $$.convertToArcData($$.updateAngle(data)) : data == null ? void 0 : data.data;
            hasTreemap && (target = svg.node());
            d && $$.showTooltip([d], target);
          } else {
            $$.api.tooltip.hide();
          }
        }.bind(this), config.transition_duration);
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/transform.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var transform = ({
  getTranslate: function getTranslate(target, index) {
    if (index === void 0) {
      index = 0;
    }
    const $$ = this,
      config = $$.config,
      state = $$.state,
      isRotated = config.axis_rotated;
    let padding = 0,
      x,
      y;
    if (index && /^(x|y2?)$/.test(target)) {
      padding = $$.getAxisSize(target) * index;
    }
    if (target === "main") {
      x = asHalfPixel(state.margin.left);
      y = asHalfPixel(state.margin.top);
    } else if (target === "context") {
      x = asHalfPixel(state.margin2.left);
      y = asHalfPixel(state.margin2.top);
    } else if (target === "legend") {
      x = state.margin3.left;
      y = state.margin3.top;
    } else if (target === "x") {
      x = isRotated ? -padding : 0;
      y = isRotated ? 0 : state.height + padding;
    } else if (target === "y") {
      x = isRotated ? 0 : -padding;
      y = isRotated ? state.height + padding : 0;
    } else if (target === "y2") {
      x = isRotated ? 0 : state.width + padding;
      y = isRotated ? 1 - padding : 0;
    } else if (target === "subX") {
      x = 0;
      y = isRotated ? 0 : state.height2;
    } else if (target === "arc") {
      x = state.arcWidth / 2;
      y = state.arcHeight / 2;
    } else if (target === "polar") {
      x = state.arcWidth / 2;
      y = state.arcHeight / 2;
    } else if (target === "radar") {
      const _$$$getRadarSize = $$.getRadarSize(),
        width = _$$$getRadarSize[0];
      x = state.width / 2 - width;
      y = asHalfPixel(state.margin.top);
    }
    return "translate(" + x + ", " + y + ")";
  },
  transformMain: function transformMain(withTransition, transitions) {
    const $$ = this,
      main = $$.$el.main,
      $T = $$.$T,
      xAxis = transitions != null && transitions.axisX ? transitions.axisX : $T(main.select("." + $AXIS.axisX), withTransition),
      yAxis = transitions != null && transitions.axisY ? transitions.axisY : $T(main.select("." + $AXIS.axisY), withTransition),
      y2Axis = transitions != null && transitions.axisY2 ? transitions.axisY2 : $T(main.select("." + $AXIS.axisY2), withTransition);
    $T(main, withTransition).attr("transform", $$.getTranslate("main"));
    xAxis.attr("transform", $$.getTranslate("x"));
    yAxis.attr("transform", $$.getTranslate("y"));
    y2Axis.attr("transform", $$.getTranslate("y2"));
    main.select("." + $ARC.chartArcs).attr("transform", $$.getTranslate("arc"));
  },
  transformAll: function transformAll(withTransition, transitions) {
    const $$ = this,
      config = $$.config,
      _$$$state = $$.state,
      hasAxis = _$$$state.hasAxis,
      hasTreemap = _$$$state.hasTreemap,
      $el = $$.$el;
    hasTreemap || $$.transformMain(withTransition, transitions);
    hasAxis && config.subchart_show && $$.transformContext(withTransition, transitions);
    $el.legend && $$.transformLegend(withTransition);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/type.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var type = ({
  /**
   * Check if the given chart type is valid
   * @param {string} type Chart type string
   * @returns {boolean}
   * @private
   */
  isValidChartType: function isValidChartType(type) {
    return !!(type && Object.values(TYPE).indexOf(type) > -1);
  },
  setTargetType: function setTargetType(targetIds, type) {
    var _this = this;
    const $$ = this,
      config = $$.config,
      withoutFadeIn = $$.state.withoutFadeIn;
    $$.mapToTargetIds(targetIds).forEach(function (id) {
      _newArrowCheck(this, _this);
      withoutFadeIn[id] = type === config.data_types[id];
      config.data_types[id] = type;
    }.bind(this));
    if (!targetIds) {
      config.data_type = type;
    }
  },
  /**
   * Updte current used chart types
   * @private
   */
  updateTypesElements: function updateTypesElements() {
    var _this2 = this;
    const $$ = this,
      current = $$.state.current;
    Object.keys(TYPE).forEach(function (v) {
      _newArrowCheck(this, _this2);
      const t = TYPE[v],
        has = $$.hasType(t, null, !0),
        idx = current.types.indexOf(t);
      if (idx === -1 && has) {
        current.types.push(t);
      } else if (idx > -1 && !has) {
        current.types.splice(idx, 1);
      }
    }.bind(this));

    // Update current chart elements reference
    $$.setChartElements();
  },
  /**
   * Check if given chart types exists
   * @param {string} type Chart type
   * @param {Array} targetsValue Data array
   * @param {boolean} checkFromData Force to check type cotains from data targets
   * @returns {boolean}
   * @private
   */
  hasType: function hasType(type, targetsValue, checkFromData) {
    var _current$types,
      _this3 = this;
    if (checkFromData === void 0) {
      checkFromData = !1;
    }
    const $$ = this,
      config = $$.config,
      current = $$.state.current,
      types = config.data_types,
      targets = targetsValue || $$.data.targets;
    let has = !1;
    if (!checkFromData && ((_current$types = current.types) == null ? void 0 : _current$types.indexOf(type)) > -1) {
      has = !0;
    } else if (targets != null && targets.length) {
      targets.forEach(function (target) {
        _newArrowCheck(this, _this3);
        const t = types[target.id];
        if (t === type || !t && type === "line") {
          has = !0;
        }
      }.bind(this));
    } else if (Object.keys(types).length) {
      Object.keys(types).forEach(function (id) {
        _newArrowCheck(this, _this3);
        if (types[id] === type) {
          has = !0;
        }
      }.bind(this));
    } else {
      has = config.data_type === type;
    }
    return has;
  },
  /**
   * Check if contains given chart types
   * @param {string} type Type key
   * @param {object} targets Target data
   * @param {Array} exclude Excluded types
   * @returns {boolean}
   * @private
   */
  hasTypeOf: function hasTypeOf(type, targets, exclude) {
    var _this4 = this;
    if (exclude === void 0) {
      exclude = [];
    }
    if (type in TYPE_BY_CATEGORY) {
      return !TYPE_BY_CATEGORY[type].filter(function (v) {
        _newArrowCheck(this, _this4);
        return exclude.indexOf(v) === -1;
      }.bind(this)).every(function (v) {
        _newArrowCheck(this, _this4);
        return !this.hasType(v, targets);
      }.bind(this));
    }
    return !1;
  },
  /**
   * Check if given data is certain chart type
   * @param {object} d Data object
   * @param {string|Array} type chart type
   * @returns {boolean}
   * @private
   */
  isTypeOf: function isTypeOf(d, type) {
    const id = isString(d) ? d : d.id,
      dataType = this.config.data_types[id] || this.config.data_type;
    return isArray(type) ? type.indexOf(dataType) >= 0 : dataType === type;
  },
  hasPointType: function hasPointType() {
    const $$ = this;
    return $$.hasTypeOf("Line") || $$.hasType("bubble") || $$.hasType("scatter");
  },
  /**
   * Check if contains arc types chart
   * @param {object} targets Target data
   * @param {Array} exclude Excluded types
   * @returns {boolean}
   * @private
   */
  hasArcType: function hasArcType(targets, exclude) {
    return this.hasTypeOf("Arc", targets, exclude);
  },
  hasMultiArcGauge: function hasMultiArcGauge() {
    return this.hasType("gauge") && this.config.gauge_type === "multi";
  },
  isLineType: function isLineType(d) {
    const id = isString(d) ? d : d.id;
    return !this.config.data_types[id] || this.isTypeOf(id, TYPE_BY_CATEGORY.Line);
  },
  isStepType: function isStepType(d) {
    return this.isTypeOf(d, TYPE_BY_CATEGORY.Step);
  },
  isSplineType: function isSplineType(d) {
    return this.isTypeOf(d, TYPE_BY_CATEGORY.Spline);
  },
  isAreaType: function isAreaType(d) {
    return this.isTypeOf(d, TYPE_BY_CATEGORY.Area);
  },
  isAreaRangeType: function isAreaRangeType(d) {
    return this.isTypeOf(d, TYPE_BY_CATEGORY.AreaRange);
  },
  isBarType: function isBarType(d) {
    return this.isTypeOf(d, "bar");
  },
  isBubbleType: function isBubbleType(d) {
    return this.isTypeOf(d, "bubble");
  },
  isCandlestickType: function isCandlestickType(d) {
    return this.isTypeOf(d, "candlestick");
  },
  isScatterType: function isScatterType(d) {
    return this.isTypeOf(d, "scatter");
  },
  isTreemapType: function isTreemapType(d) {
    return this.isTypeOf(d, "treemap");
  },
  isPieType: function isPieType(d) {
    return this.isTypeOf(d, "pie");
  },
  isGaugeType: function isGaugeType(d) {
    return this.isTypeOf(d, "gauge");
  },
  isDonutType: function isDonutType(d) {
    return this.isTypeOf(d, "donut");
  },
  isPolarType: function isPolarType(d) {
    return this.isTypeOf(d, "polar");
  },
  isRadarType: function isRadarType(d) {
    return this.isTypeOf(d, "radar");
  },
  isArcType: function isArcType(d) {
    return this.isPieType(d) || this.isDonutType(d) || this.isGaugeType(d) || this.isPolarType(d) || this.isRadarType(d);
  },
  // determine if is 'circle' data point
  isCirclePoint: function isCirclePoint(node) {
    const config = this.config,
      pattern = config.point_pattern;
    let isCircle = !1;
    if ((node == null ? void 0 : node.tagName) === "circle") {
      isCircle = !0;
    } else {
      isCircle = config.point_type === "circle" && (!pattern || isArray(pattern) && pattern.length === 0);
    }
    return isCircle;
  },
  lineData: function lineData(d) {
    return this.isLineType(d) ? [d] : [];
  },
  arcData: function arcData(d) {
    return this.isArcType(d.data) ? [d] : [];
  },
  /**
   * Get data adapt for data label showing
   * @param {object} d Data object
   * @returns {Array}
   * @private
   */
  labelishData: function labelishData(d) {
    var _this5 = this;
    return this.isBarType(d) || this.isLineType(d) || this.isScatterType(d) || this.isBubbleType(d) || this.isCandlestickType(d) || this.isRadarType(d) || this.isTreemapType(d) ? d.values.filter(function (v) {
      _newArrowCheck(this, _this5);
      return isNumber(v.value) || !!v.value;
    }.bind(this)) : [];
  },
  barLineBubbleData: function barLineBubbleData(d) {
    return this.isBarType(d) || this.isLineType(d) || this.isBubbleType(d) ? d.values : [];
  },
  // https://github.com/d3/d3-shape#curves
  isInterpolationType: function isInterpolationType(type) {
    return ["basis", "basis-closed", "basis-open", "bundle", "cardinal", "cardinal-closed", "cardinal-open", "catmull-rom", "catmull-rom-closed", "catmull-rom-open", "linear", "linear-closed", "monotone-x", "monotone-y", "natural"].indexOf(type) >= 0;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/ChartInternal.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * @ignore
 */











// data




// interactions


// internals

 // used to retrieve radar Axis name















/**
 * Internal chart class.
 * - Note: Instantiated internally, not exposed for public.
 * @class ChartInternal
 * @ignore
 * @private
 */
let ChartInternal = /*#__PURE__*/function () {
  function ChartInternal(api) {
    this.api = void 0;
    // API interface
    this.config = void 0;
    // config object
    this.cache = void 0;
    // cache instance
    this.$el = void 0;
    // elements
    this.state = void 0;
    // state variables
    this.charts = void 0;
    // all Chart instances array within page (equivalent of 'bb.instances')
    // data object
    this.data = {
      xs: {},
      targets: []
    };
    // Axis
    this.axis = void 0;
    // Axis
    // scales
    this.scale = {
      x: null,
      y: null,
      y2: null,
      subX: null,
      subY: null,
      subY2: null,
      zoom: null
    };
    // original values
    this.org = {
      xScale: null,
      xDomain: null
    };
    // formatter function
    this.color = void 0;
    this.patterns = void 0;
    this.levelColor = void 0;
    this.point = void 0;
    this.brush = void 0;
    // format function
    this.format = {
      extraLineClasses: null,
      xAxisTick: null,
      dataTime: null,
      // dataTimeFormat
      defaultAxisTime: null,
      // defaultAxisTimeFormat
      axisTime: null // axisTimeFormat
    };

    const $$ = this;
    $$.api = api; // Chart class instance alias
    $$.config = new Options();
    $$.cache = new Cache();
    const store = new Store();
    $$.$el = store.getStore("element");
    $$.state = store.getStore("state");
    $$.$T = $$.$T.bind($$);
  }

  /**
   * Get the selection based on transition config
   * @param {SVGElement|d3Selection} selection Target selection
   * @param {boolean} force Force transition
   * @param {string} name Transition name
   * @returns {d3Selection}
   * @private
   */
  var _proto = ChartInternal.prototype;
  _proto.$T = function $T(selection, force, name) {
    const config = this.config,
      state = this.state,
      duration = config.transition_duration,
      subchart = config.subchart_show;
    let t = selection;
    if (t) {
      // in case of non d3 selection, wrap with d3 selection
      if ("tagName" in t) {
        t = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(t);
      }

      // do not transit on:
      // - wheel zoom (state.zooming = true)
      // - when has no subchart
      // - initialization
      // - resizing
      const transit = (force !== !1 && duration || force) && (!state.zooming || state.dragging) && !state.resizing && state.rendered && !subchart;
      t = transit ? t.transition(name).duration(duration) : t;
    }
    return t;
  };
  _proto.beforeInit = function beforeInit() {
    const $$ = this;
    $$.callPluginHook("$beforeInit");

    // can do something
    callFn($$.config.onbeforeinit, $$.api);
  };
  _proto.afterInit = function afterInit() {
    const $$ = this;
    $$.callPluginHook("$afterInit");

    // can do something
    callFn($$.config.onafterinit, $$.api);
  };
  _proto.init = function init() {
    const $$ = this,
      config = $$.config,
      state = $$.state,
      $el = $$.$el,
      useCssRule = config.boost_useCssRule;
    checkModuleImport($$);
    state.hasRadar = !state.hasAxis && $$.hasType("radar");
    state.hasTreemap = !state.hasAxis && $$.hasType("treemap");
    state.hasAxis = !$$.hasArcType() && !state.hasTreemap;

    // datetime to be used for uniqueness
    state.datetimeId = "bb-" + +new Date() * getRandom();
    if (useCssRule) {
      // append style element
      const styleEl = browser_doc.createElement("style");

      // styleEl.id = styleId;
      styleEl.type = "text/css";
      browser_doc.head.appendChild(styleEl);
      state.style = {
        rootSelctor: "." + state.datetimeId,
        sheet: styleEl.sheet
      };

      // used on .destroy()
      $el.style = styleEl;
    }
    const bindto = {
      element: config.bindto,
      classname: "bb"
    };
    if (isObject(config.bindto)) {
      bindto.element = config.bindto.element || "#chart";
      bindto.classname = config.bindto.classname || bindto.classname;
    }

    // select bind element
    $el.chart = isFunction(bindto.element.node) ? config.bindto.element : (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(bindto.element || []);
    if ($el.chart.empty()) {
      $el.chart = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(browser_doc.body.appendChild(browser_doc.createElement("div")));
    }
    $el.chart.html("").classed(bindto.classname, !0).classed(state.datetimeId, useCssRule).style("position", "relative");
    $$.initParams();
    $$.initToRender();
  }

  /**
   * Initialize the rendering process
   * @param {boolean} forced Force to render process
   * @private
   */;
  _proto.initToRender = function initToRender(forced) {
    var _this = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      chart = $$.$el.chart,
      isHidden = function () {
        _newArrowCheck(this, _this);
        return chart.style("display") === "none" || chart.style("visibility") === "hidden";
      }.bind(this),
      isLazy = config.render.lazy || isHidden(),
      MutationObserver = win.MutationObserver;
    if (isLazy && MutationObserver && config.render.observe !== !1 && !forced) {
      new MutationObserver(function (mutation, observer) {
        _newArrowCheck(this, _this);
        if (!isHidden()) {
          observer.disconnect();
          state.rendered || $$.initToRender(!0);
        }
      }.bind(this)).observe(chart.node(), {
        attributes: !0,
        attributeFilter: ["class", "style"]
      });
    }
    if (!isLazy || forced) {
      $$.convertData(config, function (res) {
        _newArrowCheck(this, _this);
        $$.initWithData(res);
        $$.afterInit();
      }.bind(this));
    }
  };
  _proto.initParams = function initParams() {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      format = $$.format,
      state = $$.state,
      isRotated = config.axis_rotated;
    // color settings
    $$.color = $$.generateColor();
    $$.levelColor = $$.generateLevelColor();

    // when 'padding=false' is set, disable axes and subchart. Because they are useless.
    if (config.padding === !1) {
      config.axis_x_show = !1;
      config.axis_y_show = !1;
      config.axis_y2_show = !1;
      config.subchart_show = !1;
    }
    if ($$.hasPointType()) {
      $$.point = $$.generatePoint();
    }
    if (state.hasAxis) {
      $$.initClip();
      format.extraLineClasses = $$.generateExtraLineClass();
      format.dataTime = config.data_xLocaltime ? external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_.timeParse : external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_.utcParse;
      format.axisTime = config.axis_x_localtime ? external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_.timeFormat : external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_.utcFormat;
      const isDragZoom = $$.config.zoom_enabled && $$.config.zoom_type === "drag";
      format.defaultAxisTime = function (d) {
        _newArrowCheck(this, _this2);
        const _$$$scale = $$.scale,
          x = _$$$scale.x,
          zoom = _$$$scale.zoom,
          isZoomed = isDragZoom ? zoom : zoom && x.orgDomain().toString() !== zoom.domain().toString(),
          specifier = d.getMilliseconds() && ".%L" || d.getSeconds() && ".:%S" || d.getMinutes() && "%I:%M" || d.getHours() && "%I %p" || d.getDate() !== 1 && "%b %d" || isZoomed && d.getDate() === 1 && "%b\'%y" || d.getMonth() && "%-m/%-d" || "%Y";
        return format.axisTime(specifier)(d);
      }.bind(this);
    }
    state.isLegendRight = config.legend_position === "right";
    state.isLegendInset = config.legend_position === "inset";
    state.isLegendTop = config.legend_inset_anchor === "top-left" || config.legend_inset_anchor === "top-right";
    state.isLegendLeft = config.legend_inset_anchor === "top-left" || config.legend_inset_anchor === "bottom-left";
    state.rotatedPadding.top = $$.getResettedPadding(state.rotatedPadding.top);
    state.rotatedPadding.right = isRotated && !config.axis_x_show ? 0 : 30;
    state.inputType = convertInputType(config.interaction_inputType_mouse, config.interaction_inputType_touch);
  };
  _proto.initWithData = function initWithData(data) {
    var _this3 = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      state = $$.state,
      $el = $$.$el,
      org = $$.org,
      _state = state,
      hasAxis = _state.hasAxis,
      hasTreemap = _state.hasTreemap,
      hasInteraction = config.interaction_enabled,
      hasPolar = $$.hasType("polar");
    // for arc type, set axes to not be shown
    // $$.hasArcType() && ["x", "y", "y2"].forEach(id => (config[`axis_${id}_show`] = false));
    if (hasAxis) {
      $$.axis = $$.getAxisInstance();
      config.zoom_enabled && $$.initZoom();
    }

    // Init data as targets
    $$.data.xs = {};
    $$.data.targets = $$.convertDataToTargets(data);
    if (config.data_filter) {
      $$.data.targets = $$.data.targets.filter(config.data_filter.bind($$.api));
    }

    // Set targets to hide if needed
    if (config.data_hide) {
      $$.addHiddenTargetIds(config.data_hide === !0 ? $$.mapToIds($$.data.targets) : config.data_hide);
    }
    if (config.legend_hide) {
      $$.addHiddenLegendIds(config.legend_hide === !0 ? $$.mapToIds($$.data.targets) : config.legend_hide);
    }

    // Init sizes and scales
    $$.updateSizes();
    $$.updateScales(!0);

    // retrieve scale after the 'updateScales()' is called
    if (hasAxis) {
      const x = scale.x,
        y = scale.y,
        y2 = scale.y2,
        subX = scale.subX,
        subY = scale.subY,
        subY2 = scale.subY2;

      // Set domains for each scale
      if (x) {
        x.domain(sortValue($$.getXDomain($$.data.targets), !config.axis_x_inverted));
        subX.domain(x.domain());

        // Save original x domain for zoom update
        org.xDomain = x.domain();
      }
      if (y) {
        y.domain($$.getYDomain($$.data.targets, "y"));
        subY.domain(y.domain());
      }
      if (y2) {
        y2.domain($$.getYDomain($$.data.targets, "y2"));
        subY2 && subY2.domain(y2.domain());
      }
    }

    // -- Basic Elements --
    $el.svg = $el.chart.append("svg").style("overflow", "hidden").style("display", "block");
    if (hasInteraction && state.inputType) {
      const isTouch = state.inputType === "touch",
        onclick = config.onclick,
        onover = config.onover,
        onout = config.onout;
      $el.svg.on("click", (onclick == null ? void 0 : onclick.bind($$.api)) || null).on(isTouch ? "touchstart" : "mouseenter", (onover == null ? void 0 : onover.bind($$.api)) || null).on(isTouch ? "touchend" : "mouseleave", (onout == null ? void 0 : onout.bind($$.api)) || null);
    }
    config.svg_classname && $el.svg.attr("class", config.svg_classname);

    // Define defs
    const hasColorPatterns = isFunction(config.color_tiles) && $$.patterns;
    if (hasAxis || hasColorPatterns || hasPolar || hasTreemap || config.data_labels_backgroundColors) {
      $el.defs = $el.svg.append("defs");
      if (hasAxis) {
        ["id", "idXAxis", "idYAxis", "idGrid"].forEach(function (v) {
          _newArrowCheck(this, _this3);
          $$.appendClip($el.defs, state.clip[v]);
        }.bind(this));
      }

      // Append data background color filter definition
      $$.generateDataLabelBackgroundColorFilter();

      // set color patterns
      if (hasColorPatterns) {
        $$.patterns.forEach(function (p) {
          var _this4 = this;
          _newArrowCheck(this, _this3);
          return $el.defs.append(function () {
            _newArrowCheck(this, _this4);
            return p.node;
          }.bind(this));
        }.bind(this));
      }
    }
    $$.updateSvgSize();

    // Bind resize event
    $$.bindResize();

    // Define regions
    const main = $el.svg.append("g").classed($COMMON.main, !0).attr("transform", hasTreemap ? null : $$.getTranslate("main"));
    $el.main = main;

    // initialize subchart when subchart show option is set
    config.subchart_show && $$.initSubchart();
    config.tooltip_show && $$.initTooltip();
    config.title_text && $$.initTitle();
    !hasTreemap && config.legend_show && $$.initLegend();

    // -- Main Region --

    // text when empty
    if (config.data_empty_label_text) {
      main.append("text").attr("class", $TEXT.text + " " + $COMMON.empty).attr("text-anchor", "middle") // horizontal centering of text at x position in all browsers.
      .attr("dominant-baseline", "middle"); // vertical centering of text at y position in all browsers, except IE.
    }

    if (hasAxis) {
      // Regions
      config.regions.length && $$.initRegion();

      // Add Axis here, when clipPath is 'false'
      config.clipPath || $$.axis.init();
    }

    // Define g for chart area
    main.append("g").classed($COMMON.chart, !0).attr("clip-path", hasAxis ? state.clip.path : null);
    $$.callPluginHook("$init");
    $$.initChartElements();
    if (hasAxis) {
      var _$$$axis;
      // Cover whole with rects for events
      hasInteraction && ($$.initEventRect == null ? void 0 : $$.initEventRect());

      // Grids
      $$.initGrid();

      // Add Axis here, when clipPath is 'true'
      config.clipPath && ((_$$$axis = $$.axis) == null ? void 0 : _$$$axis.init());
    }

    // Set targets
    $$.updateTargets($$.data.targets);

    // Draw with targets
    $$.updateDimension();

    // oninit callback
    callFn(config.oninit, $$.api);

    // Set background
    $$.setBackground();
    $$.redraw({
      withTransition: !1,
      withTransform: !0,
      withUpdateXDomain: !0,
      withUpdateOrgXDomain: !0,
      withTransitionForAxis: !1,
      initializing: !0
    });

    // data.onmin/max callback
    if (config.data_onmin || config.data_onmax) {
      const minMax = $$.getMinMaxData();
      callFn(config.data_onmin, $$.api, minMax.min);
      callFn(config.data_onmax, $$.api, minMax.max);
    }
    config.tooltip_show && $$.initShowTooltip();
    state.rendered = !0;
  }

  /**
   * Initialize chart elements
   * @private
   */;
  _proto.initChartElements = function initChartElements() {
    var _this5 = this;
    const $$ = this,
      _$$$state = $$.state,
      hasAxis = _$$$state.hasAxis,
      hasRadar = _$$$state.hasRadar,
      hasTreemap = _$$$state.hasTreemap,
      types = [];
    if (hasAxis) {
      const shapes = ["bar", "bubble", "candlestick", "line"];
      if ($$.config.bar_front) {
        shapes.push(shapes.shift());
      }
      shapes.forEach(function (v) {
        _newArrowCheck(this, _this5);
        const name = capitalize(v);
        if (v === "line" && $$.hasTypeOf(name) || $$.hasType(v)) {
          types.push(name);
        }
      }.bind(this));
    } else if (hasTreemap) {
      types.push("Treemap");
    } else {
      const hasPolar = $$.hasType("polar");
      if (!hasRadar) {
        types.push("Arc", "Pie");
      }
      if ($$.hasType("gauge")) {
        types.push("Gauge");
      } else if (hasRadar) {
        types.push("Radar");
      } else if (hasPolar) {
        types.push("Polar");
      }
    }
    types.forEach(function (v) {
      _newArrowCheck(this, _this5);
      $$["init" + v]();
    }.bind(this));
    notEmpty($$.config.data_labels) && !$$.hasArcType(null, ["radar"]) && $$.initText();
  }

  /**
   * Set chart elements
   * @private
   */;
  _proto.setChartElements = function setChartElements() {
    const $$ = this,
      _$$$$el = $$.$el,
      chart = _$$$$el.chart,
      svg = _$$$$el.svg,
      defs = _$$$$el.defs,
      main = _$$$$el.main,
      tooltip = _$$$$el.tooltip,
      legend = _$$$$el.legend,
      title = _$$$$el.title,
      grid = _$$$$el.grid,
      needle = _$$$$el.needle,
      arc = _$$$$el.arcs,
      circles = _$$$$el.circle,
      bars = _$$$$el.bar,
      candlestick = _$$$$el.candlestick,
      lines = _$$$$el.line,
      areas = _$$$$el.area,
      texts = _$$$$el.text;
    // public
    $$.api.$ = {
      chart: chart,
      svg: svg,
      defs: defs,
      main: main,
      tooltip: tooltip,
      legend: legend,
      title: title,
      grid: grid,
      arc: arc,
      circles: circles,
      bar: {
        bars: bars
      },
      candlestick: candlestick,
      line: {
        lines: lines,
        areas: areas
      },
      needle: needle,
      text: {
        texts: texts
      }
    };
  }

  /**
   * Set background element/image
   * @private
   */;
  _proto.setBackground = function setBackground() {
    const $$ = this,
      bg = $$.config.background,
      state = $$.state,
      svg = $$.$el.svg;
    if (notEmpty(bg)) {
      const element = svg.select("g").insert(bg.imgUrl ? "image" : "rect", ":first-child");
      if (bg.imgUrl) {
        element.attr("href", bg.imgUrl);
      } else if (bg.color) {
        element.style("fill", bg.color).attr("clip-path", state.clip.path);
      }
      element.attr("class", bg.class || null).attr("width", "100%").attr("height", "100%");
    }
  }

  /**
   * Update targeted element with given data
   * @param {object} targets Data object formatted as 'target'
   * @private
   */;
  _proto.updateTargets = function updateTargets(targets) {
    var _this6 = this;
    const $$ = this,
      _$$$state2 = $$.state,
      hasAxis = _$$$state2.hasAxis,
      hasRadar = _$$$state2.hasRadar,
      hasTreemap = _$$$state2.hasTreemap,
      helper = function (type) {
        _newArrowCheck(this, _this6);
        return $$["updateTargetsFor" + type](targets.filter($$["is" + type + "Type"].bind($$)));
      }.bind(this);
    // Text
    $$.updateTargetsForText(targets);
    if (hasAxis) {
      ["bar", "candlestick", "line"].forEach(function (v) {
        _newArrowCheck(this, _this6);
        const name = capitalize(v);
        if (v === "line" && $$.hasTypeOf(name) || $$.hasType(v)) {
          helper(name);
        }
      }.bind(this));

      // Sub Chart
      $$.updateTargetsForSubchart && $$.updateTargetsForSubchart(targets);

      // Arc, Polar, Radar
    } else if ($$.hasArcType(targets)) {
      let type = "Arc";
      if (hasRadar) {
        type = "Radar";
      } else if ($$.hasType("polar")) {
        type = "Polar";
      }
      helper(type);
      // Arc, Polar, Radar
    } else if (hasTreemap) {
      helper("Treemap");
    }

    // Point types
    const hasPointType = $$.hasType("bubble") || $$.hasType("scatter");
    if (hasPointType) {
      $$.updateTargetForCircle == null || $$.updateTargetForCircle();
    }

    // Fade-in each chart
    $$.filterTargetsToShowAtInit(hasPointType);
  }

  /**
   * Display targeted elements at initialization
   * @param {boolean} hasPointType whether has point type(bubble, scatter) or not
   * @private
   */;
  _proto.filterTargetsToShowAtInit = function filterTargetsToShowAtInit(hasPointType) {
    var _this7 = this;
    if (hasPointType === void 0) {
      hasPointType = !1;
    }
    const $$ = this,
      svg = $$.$el.svg,
      $T = $$.$T;
    let selector = "." + $COMMON.target;
    if (hasPointType) {
      selector += ", ." + $CIRCLE.chartCircles + " > ." + $CIRCLE.circles;
    }
    $T(svg.selectAll(selector).filter(function (d) {
      _newArrowCheck(this, _this7);
      return $$.isTargetToShow(d.id);
    }.bind(this))).style("opacity", null);
  };
  _proto.getWithOption = function getWithOption(options) {
    var _this8 = this;
    const withOptions = {
      Dimension: !0,
      EventRect: !0,
      Legend: !1,
      Subchart: !0,
      Transform: !1,
      Transition: !0,
      TrimXDomain: !0,
      UpdateXAxis: "UpdateXDomain",
      UpdateXDomain: !1,
      UpdateOrgXDomain: !1,
      TransitionForExit: "Transition",
      TransitionForAxis: "Transition",
      Y: !0
    };
    Object.keys(withOptions).forEach(function (key) {
      _newArrowCheck(this, _this8);
      let defVal = withOptions[key];
      if (isString(defVal)) {
        defVal = withOptions[defVal];
      }
      withOptions[key] = getOption(options, "with" + key, defVal);
    }.bind(this));
    return withOptions;
  };
  _proto.initialOpacity = function initialOpacity(d) {
    const $$ = this,
      withoutFadeIn = $$.state.withoutFadeIn,
      r = $$.getBaseValue(d) !== null && withoutFadeIn[d.id] ? null : "0";
    return r;
  };
  _proto.bindResize = function bindResize() {
    var _this9 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      resizeFunction = generateResize(config.resize_timer),
      list = [];
    list.push(function () {
      _newArrowCheck(this, _this9);
      return callFn(config.onresize, $$.api);
    }.bind(this));
    if (config.resize_auto) {
      list.push(function () {
        _newArrowCheck(this, _this9);
        state.resizing = !0;

        // https://github.com/naver/billboard.js/issues/2650
        if (config.legend_show) {
          $$.updateSizes();
          $$.updateLegend();
        }
        $$.api.flush(!1);
      }.bind(this));
    }
    list.push(function () {
      _newArrowCheck(this, _this9);
      callFn(config.onresized, $$.api);
      state.resizing = !1;
    }.bind(this));

    // add resize functions
    list.forEach(function (v) {
      _newArrowCheck(this, _this9);
      return resizeFunction.add(v);
    }.bind(this));
    $$.resizeFunction = resizeFunction;

    // attach resize event
    win.addEventListener("resize", $$.resizeFunction = resizeFunction);
  }

  /**
   * Call plugin hook
   * @param {string} phase The lifecycle phase
   * @param {Array} args Arguments
   * @private
   */;
  _proto.callPluginHook = function callPluginHook(phase) {
    for (var _this10 = this, _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    this.config.plugins.forEach(function (v) {
      _newArrowCheck(this, _this10);
      if (phase === "$beforeInit") {
        v.$$ = this;
        this.api.plugins.push(v);
      }
      v[phase].apply(v, args);
    }.bind(this));
  };
  return ChartInternal;
}();

extend(ChartInternal.prototype, [
// common
convert, data_data, load, category, internals_class, internals_color, domain, interactions_interaction, format, internals_legend, redraw, scale, shape, size, style, internals_text, internals_title, internals_tooltip, transform, type]);
;// CONCATENATED MODULE: ./src/config/config.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Load configuration option
 * @param {object} config User's generation config value
 * @private
 */
function loadConfig(config) {
  var _this = this;
  const thisConfig = this.config;
  let target, keys, read;
  const _find = function find() {
    _newArrowCheck(this, _this);
    const key = keys.shift();
    if (key && target && isObjectType(target) && key in target) {
      target = target[key];
      return _find();
    } else if (!key) {
      return target;
    }
    return undefined;
  }.bind(this);
  Object.keys(thisConfig).forEach(function (key) {
    _newArrowCheck(this, _this);
    target = config;
    keys = key.split("_");
    read = _find();
    if (isDefined(read)) {
      thisConfig[key] = read;
    }
  }.bind(this));

  // only should run in the ChartInternal context
  if (this.api) {
    this.state.orgConfig = config;
  }
}
;// CONCATENATED MODULE: ./src/Chart/api/chart.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var chart = ({
  /**
   * Resize the chart.
   * @function resize
   * @instance
   * @memberof Chart
   * @param {object} size This argument should include width and height in pixels.
   * @param {number} [size.width] width value
   * @param {number} [size.height] height value
   * @example
   * // Resize to 640x480
   * chart.resize({
   *    width: 640,
   *    height: 480
   * });
   */
  resize: function resize(size) {
    const $$ = this.internal,
      config = $$.config,
      state = $$.state;
    if (state.rendered) {
      config.size_width = size ? size.width : null;
      config.size_height = size ? size.height : null;
      state.resizing = !0;
      this.flush(!1);
      $$.resizeFunction();
    }
  },
  /**
   * Force to redraw.
   * - **NOTE:** When zoom/subchart is used, the zoomed state will be resetted.
   * @function flush
   * @instance
   * @memberof Chart
   * @param {boolean} [soft] For soft redraw.
   * @example
   * chart.flush();
   *
   * // for soft redraw
   * chart.flush(true);
   */
  flush: function flush(soft) {
    const $$ = this.internal,
      state = $$.state,
      zoomResetBtn = $$.$el.zoomResetBtn;
    if (state.rendered) {
      // reset possible zoom scale when is called from resize event
      // eslint-disable-next-line prefer-rest-params
      if (state.resizing) {
        var _$$$brush;
        // arguments[1] is given when is called from resize
        (_$$$brush = $$.brush) == null || _$$$brush.updateResize();
      } else {
        var _$$$axis;
        // re-update config info
        (_$$$axis = $$.axis) == null || _$$$axis.setOrient();
      }

      // hide possible reset zoom button
      // https://github.com/naver/billboard.js/issues/2201
      zoomResetBtn == null || zoomResetBtn.style("display", "none");
      $$.scale.zoom = null;
      soft ? $$.redraw({
        withTransform: !0,
        withUpdateXDomain: !0,
        withUpdateOrgXDomain: !0,
        withLegend: !0
      }) : $$.updateAndRedraw({
        withLegend: !0,
        withTransition: !1,
        withTransitionForTransform: !1
      });

      // reset subchart selection & selection state
      if (!state.resizing && $$.brush) {
        $$.brush.getSelection().call($$.brush.move);
        $$.unselectRect();
      }
    } else {
      $$.initToRender(!0);
    }
  },
  /**
   * Reset the chart object and remove element and events completely.
   * @function destroy
   * @instance
   * @memberof Chart
   * @returns {null}
   * @example
   * chart.destroy();
   */
  destroy: function destroy() {
    var _this = this;
    const $$ = this.internal,
      _$$$$el = $$.$el,
      chart = _$$$$el.chart,
      style = _$$$$el.style,
      svg = _$$$$el.svg;
    if (notEmpty($$)) {
      $$.callPluginHook("$willDestroy");
      $$.charts.splice($$.charts.indexOf(this), 1);

      // detach events
      $$.unbindAllEvents();

      // clear timers && pending transition
      svg.select("*").interrupt();
      $$.resizeFunction.clear();
      win.removeEventListener("resize", $$.resizeFunction);
      chart.classed("bb", !1).style("position", null).selectChildren().remove();

      // remove <style> element added by boost.useCssRule option
      style && style.parentNode.removeChild(style);

      // releasing own references
      Object.keys(this).forEach(function (key) {
        var _this2 = this;
        _newArrowCheck(this, _this);
        key === "internal" && Object.keys($$).forEach(function (k) {
          _newArrowCheck(this, _this2);
          $$[k] = null;
        }.bind(this));
        this[key] = null;
        delete this[key];
      }.bind(this));

      // release prototype chains
      for (const key in this) {
        this[key] = function () {
          _newArrowCheck(this, _this);
        }.bind(this);
      }
    }
    return null;
  },
  /**
   * Get or set config option value.
   * - **NOTE**
   *  - The option key name must be specified as the last level.
   *  - when no argument is given, will return all specified generation options object only. (will exclude any other options not specified at the initialization)
   * @function config
   * @instance
   * @memberof Chart
   * @param {string} name The option key name.
   * @param {*} [value] The value accepted for indicated option.
   * @param {boolean} [redraw] Set to redraw with the new option changes.
   * - **NOTE:** Doesn't guarantee work in all circumstances. It can be applied for limited options only.
   * @returns {*}
   * @example
   *
   * // Getter
   * chart.config("gauge.max");
   *
   * // Getter specified with top level key name will not work.
   * // The option key name must be specified as the last level.
   * // chart.config("gauge"); // will not work
   *
   * // without any arguments, it returns generation config object
   * chart.config();  // {data: { ... }, axis: { ... }, ...}
   *
   * // Setter
   * chart.config("gauge.max", 100);
   *
   * // Setter specified with top level key name will not work.
   * // The option key name must be specified as the last level.
   * // chart.config("gauge", {min: 10, max: 20}); // will not work
   *
   * // Setter & redraw with the new option
   * chart.config("gauge.max", 100, true);
   */
  config: function (name, value, redraw) {
    const $$ = this.internal,
      config = $$.config,
      state = $$.state,
      key = name == null ? void 0 : name.replace(/\./g, "_");
    let res;
    if (name && key in config) {
      if (isDefined(value)) {
        config[key] = value;
        res = value;
        redraw && this.flush();
      } else {
        res = config[key];
      }
    } else if (arguments.length === 0 || isEmpty(name)) {
      res = state.orgConfig;
    }
    return res;
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/color.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/* harmony default export */ var api_color = ({
  /**
   * Get the color
   * @function color
   * @instance
   * @memberof Chart
   * @param {string} id id to get the color
   * @returns {string}
   * @example
   * chart.color("data1");
   */
  color: function color(id) {
    return this.internal.color(id); // more patterns
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/data.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Get data loaded in the chart.
 * @function data
 * @instance
 * @memberof Chart
 * @param {string|Array} targetIds If this argument is given, this API returns the specified target data. If this argument is not given, all of data will be returned.
 * @returns {Array} Data objects
 * @example
 * // Get only data1 data
 * chart.data("data1");
 * // --> [{id: "data1", id_org: "data1", values: Array(6)}, ...]
 *
 * // Get data1 and data2 data
 * chart.data(["data1", "data2"]);
 *
 * // Get all data
 * chart.data();
 */
const api_data_data = function (targetIds) {
  var _this = this;
  const targets = this.internal.data.targets;
  if (!isUndefined(targetIds)) {
    const ids = isArray(targetIds) ? targetIds : [targetIds];
    return targets.filter(function (t) {
      var _this2 = this;
      _newArrowCheck(this, _this);
      return ids.some(function (v) {
        _newArrowCheck(this, _this2);
        return v === t.id;
      }.bind(this));
    }.bind(this));
  }
  return targets;
};
extend(api_data_data, {
  /**
   * Get data shown in the chart.
   * @function data․shown
   * @instance
   * @memberof Chart
   * @param {string|Array} targetIds If this argument is given, this API filters the data with specified target ids. If this argument is not given, all shown data will be returned.
   * @returns {Array} Data objects
   * @example
   * // Get shown data by filtering to include only data1 data
   * chart.data.shown("data1");
   * // --> [{id: "data1", id_org: "data1", values: Array(6)}, ...]
   *
   * // Get shown data by filtering to include data1 and data2 data
   * chart.data.shown(["data1", "data2"]);
   *
   * // Get all shown data
   * chart.data.shown();
   */
  shown: function shown(targetIds) {
    return this.internal.filterTargetsToShow(this.data(targetIds));
  },
  /**
   * Get values of the data loaded in the chart.
   * @function data․values
   * @instance
   * @memberof Chart
   * @param {string|Array|null} targetIds This API returns the values of specified target. If this argument is not given, null will be retruned
   * @param {boolean} [flat=true] Get flatten values
   * @returns {Array} Data values
   * @example
   * // Get data1 values
   * chart.data.values("data1");
   * // --> [10, 20, 30, 40]
   */
  values: function (targetIds, flat) {
    var _this3 = this;
    if (flat === void 0) {
      flat = !0;
    }
    let values = null;
    if (targetIds) {
      const targets = this.data(targetIds);
      if (isArray(targets)) {
        values = [];
        targets.forEach(function (v) {
          var _this4 = this;
          _newArrowCheck(this, _this3);
          const dataValue = v.values.map(function (d) {
            _newArrowCheck(this, _this4);
            return d.value;
          }.bind(this));
          flat ? values = values.concat(dataValue) : values.push(dataValue);
        }.bind(this));
      }
    }
    return values;
  },
  /**
   * Get and set names of the data loaded in the chart.
   * @function data․names
   * @instance
   * @memberof Chart
   * @param {object} names If this argument is given, the names of data will be updated. If not given, the current names will be returned. The format of this argument is the same as [data.names](./Options.html#.data%25E2%2580%25A4names).
   * @returns {object} Corresponding names according its key value, if specified names values.
   * @example
   * // Get current names
   * chart.data.names();
   * // --> {data1: "test1", data2: "test2"}
   *
   * // Update names
   * chart.data.names({
   *  data1: "New Name 1",
   *  data2: "New Name 2"
   *});
   */
  names: function names(_names) {
    const $$ = this.internal;
    return $$.updateDataAttributes("names", _names);
  },
  /**
   * Get and set colors of the data loaded in the chart.
   * @function data․colors
   * @instance
   * @memberof Chart
   * @param {object} colors If this argument is given, the colors of data will be updated. If not given, the current colors will be returned. The format of this argument is the same as [data.colors](./Options.html#.data%25E2%2580%25A4colors).
   * @returns {object} Corresponding data color value according its key value.
   * @example
   * // Get current colors
   * chart.data.colors();
   * // --> {data1: "#00c73c", data2: "#fa7171"}
   *
   * // Update colors
   * chart.data.colors({
   *  data1: "#FFFFFF",
   *  data2: "#000000"
   * });
   */
  colors: function colors(_colors) {
    return this.internal.updateDataAttributes("colors", _colors);
  },
  /**
   * Get and set axes of the data loaded in the chart.
   * - **NOTE:** If all data is related to one of the axes, the domain of axis without related data will be replaced by the domain from the axis with related data
   * @function data․axes
   * @instance
   * @memberof Chart
   * @param {object} axes If this argument is given, the axes of data will be updated. If not given, the current axes will be returned. The format of this argument is the same as
   * @returns {object} Corresponding axes value for data, if specified axes value.
   * @example
   * // Get current axes
   * chart.data.axes();
   * // --> {data1: "y"}
   *
   * // Update axes
   * chart.data.axes({
   *  data1: "y",
   *  data2: "y2"
   * });
   */
  axes: function axes(_axes) {
    return this.internal.updateDataAttributes("axes", _axes);
  },
  /**
   * Get the minimum data value bound to the chart
   * @function data․min
   * @instance
   * @memberof Chart
   * @returns {Array} Data objects
   * @example
   * // Get current axes
   * chart.data.min();
   * // --> [{x: 0, value: 30, id: "data1", index: 0}, ...]
   */
  min: function min() {
    return this.internal.getMinMaxData().min;
  },
  /**
   * Get the maximum data value bound to the chart
   * @function data․max
   * @instance
   * @memberof Chart
   * @returns {Array} Data objects
   * @example
   * // Get current axes
   * chart.data.max();
   * // --> [{x: 3, value: 400, id: "data1", index: 3}, ...]
   */
  max: function max() {
    return this.internal.getMinMaxData().max;
  }
});
/* harmony default export */ var api_data = ({
  data: api_data_data
});
;// CONCATENATED MODULE: ./src/Chart/api/export.ts

var export_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/**
 * Encode to base64
 * @param {string} str string to be encoded
 * @returns {string}
 * @private
 * @see https://developer.mozilla.org/ko/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
 */
const b64EncodeUnicode = function (str) {
  var _this2 = this;
  _newArrowCheck(this, export_this);
  return win.btoa == null ? void 0 : win.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p) {
    _newArrowCheck(this, _this2);
    return String.fromCharCode(+("0x" + p));
  }.bind(this)));
}.bind(undefined);

/**
 * Convert svg node to data url
 * @param {HTMLElement} node target node
 * @param {object} option object containing {width, height, preserveAspectRatio}
 * @param {object} orgSize object containing {width, height}
 * @returns {string}
 * @private
 */
function nodeToSvgDataUrl(node, option, orgSize) {
  var _this3 = this;
  const _ref = option || orgSize,
    width = _ref.width,
    height = _ref.height,
    serializer = new XMLSerializer(),
    clone = node.cloneNode(!0),
    cssText = getCssRules(toArray(browser_doc.styleSheets)).filter(function (r) {
      _newArrowCheck(this, _this3);
      return r.cssText;
    }.bind(this)).map(function (r) {
      _newArrowCheck(this, _this3);
      return r.cssText;
    }.bind(this));
  clone.setAttribute("xmlns", external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.namespaces.xhtml);

  // remove padding & margin
  clone.style.margin = "0";
  clone.style.padding = "0";

  // remove text nodes
  if (option.preserveFontStyle) {
    clone.querySelectorAll("text").forEach(function (t) {
      _newArrowCheck(this, _this3);
      t.innerHTML = "";
    }.bind(this));
  }
  const nodeXml = serializer.serializeToString(clone),
    style = browser_doc.createElement("style"); // escape css for XML
  style.appendChild(browser_doc.createTextNode(cssText.join("\n")));
  const styleXml = serializer.serializeToString(style),
    dataStr = "<svg xmlns=\"" + external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.namespaces.svg + "\" width=\"" + width + "\" height=\"" + height + "\" \n\t\tviewBox=\"0 0 " + orgSize.width + " " + orgSize.height + "\" \n\t\tpreserveAspectRatio=\"" + ((option == null ? void 0 : option.preserveAspectRatio) === !1 ? "none" : "xMinYMid meet") + "\">\n\t\t\t<foreignObject width=\"100%\" height=\"100%\">\n\t\t\t\t" + styleXml + "\n\t\t\t\t" + nodeXml.replace(/(url\()[^#]+/g, "$1") + "\n\t\t\t</foreignObject></svg>"; // foreignObject not supported in IE11 and below
  // https://msdn.microsoft.com/en-us/library/hh834675(v=vs.85).aspx
  return "data:image/svg+xml;base64," + b64EncodeUnicode(dataStr);
}

/**
 * Get coordinate of the element
 * @param {SVGElement} elem Target element
 * @param {object} svgOffset SVG offset
 * @returns {object}
 * @private
 */
function getCoords(elem, svgOffset) {
  const top = svgOffset.top,
    left = svgOffset.left,
    _elem$getBBox = elem.getBBox(),
    x = _elem$getBBox.x,
    y = _elem$getBBox.y,
    _elem$getScreenCTM = elem.getScreenCTM(),
    a = _elem$getScreenCTM.a,
    b = _elem$getScreenCTM.b,
    c = _elem$getScreenCTM.c,
    d = _elem$getScreenCTM.d,
    e = _elem$getScreenCTM.e,
    f = _elem$getScreenCTM.f,
    _elem$getBoundingClie = elem.getBoundingClientRect(),
    width = _elem$getBoundingClie.width,
    height = _elem$getBoundingClie.height;
  return {
    x: a * x + c * y + e - left,
    y: b * x + d * y + f - top + (height - Math.round(height / 4)),
    width: width,
    height: height
  };
}

/**
 * Get text glyph
 * @param {SVGTextElement} svg Target svg node
 * @returns {Array}
 * @private
 */
function getGlyph(svg) {
  var _this4 = this;
  const _svg$getBoundingClien = svg.getBoundingClientRect(),
    left = _svg$getBoundingClien.left,
    top = _svg$getBoundingClien.top,
    filterFn = function (t) {
      _newArrowCheck(this, _this4);
      return t.textContent || t.childElementCount;
    }.bind(this),
    glyph = [];
  toArray(svg.querySelectorAll("text")).filter(filterFn).forEach(function (t) {
    var _this5 = this;
    _newArrowCheck(this, _this4);
    // eslint-disable-line
    const getStyleFn = function (ts) {
      var _ref2;
      _newArrowCheck(this, _this5);
      const _window$getComputedSt = win.getComputedStyle(ts),
        fill = _window$getComputedSt.fill,
        fontFamily = _window$getComputedSt.fontFamily,
        fontSize = _window$getComputedSt.fontSize,
        textAnchor = _window$getComputedSt.textAnchor,
        transform = _window$getComputedSt.transform,
        _getCoords = getCoords(ts, {
          left: left,
          top: top
        }),
        x = _getCoords.x,
        y = _getCoords.y,
        width = _getCoords.width,
        height = _getCoords.height;
      return _ref2 = {}, _ref2[ts.textContent] = {
        x: x,
        y: y,
        width: width,
        height: height,
        fill: fill,
        fontFamily: fontFamily,
        fontSize: fontSize,
        textAnchor: textAnchor,
        transform: transform
      }, _ref2;
    }.bind(this);
    if (t.childElementCount > 1) {
      toArray(t.querySelectorAll("tspan")).filter(filterFn).forEach(function (ts) {
        _newArrowCheck(this, _this5);
        glyph.push(getStyleFn(ts));
      }.bind(this));
      return [];
    } else {
      glyph.push(getStyleFn(t));
    }
  }.bind(this));
  return glyph;
}

/**
 * Render text glyph
 * - NOTE: Called when the 'preserveFontStyle' option is true
 * @param {CanvasRenderingContext2D} ctx Canvas context
 * @param {Array} glyph Text glyph array
 * @private
 */
function renderText(ctx, glyph) {
  var _this6 = this;
  glyph.forEach(function (g) {
    var _this7 = this;
    _newArrowCheck(this, _this6);
    Object.keys(g).forEach(function (key) {
      var _this8 = this;
      _newArrowCheck(this, _this7);
      const _g$key = g[key],
        x = _g$key.x,
        y = _g$key.y,
        width = _g$key.width,
        height = _g$key.height,
        fill = _g$key.fill,
        fontFamily = _g$key.fontFamily,
        fontSize = _g$key.fontSize,
        transform = _g$key.transform;
      ctx.save();
      ctx.font = fontSize + " " + fontFamily;
      ctx.fillStyle = fill;
      if (transform === "none") {
        ctx.fillText(key, x, y);
      } else {
        const args = transform.replace(/(matrix|\(|\))/g, "").split(",");
        if (args.splice(4).every(function (v) {
          _newArrowCheck(this, _this8);
          return +v === 0;
        }.bind(this))) {
          args.push(x + width - width / 4);
          args.push(y - height + height / 3);
        } else {
          args.push(x);
          args.push(y);
        }
        ctx.transform.apply(ctx, args);
        ctx.fillText(key, 0, 0);
      }
      ctx.restore();
    }.bind(this));
  }.bind(this));
}
/* harmony default export */ var api_export = ({
  /**
   * Export chart as an image.
   * - **NOTE:**
   *   - IE11 and below not work properly due to the lack of the feature(<a href="https://msdn.microsoft.com/en-us/library/hh834675(v=vs.85).aspx">foreignObject</a>) support
   *   - Every style applied to the chart & the basic CSS file(ex. billboard.css) should be at same domain as API call context to get correct styled export image.
   * @function export
   * @instance
   * @memberof Chart
   * @param {object} option Export option
   * @param {string} [option.mimeType="image/png"] The desired output image format. (ex. 'image/png' for png, 'image/jpeg' for jpeg format)
   * @param {number} [option.width={currentWidth}] width
   * @param {number} [option.height={currentHeigth}] height
   * @param {boolean} [option.preserveAspectRatio=true] Preserve aspect ratio on given size
   * @param {boolean} [option.preserveFontStyle=false] Preserve font style(font-family).<br>
   * **NOTE:**
   *   - This option is useful when outlink web font style's `font-family` are applied to chart's text element.
   *   - Text element's position(especially "transformed") can't be preserved correctly according the page's layout condition.
   *   - If need to preserve accurate text position, embed the web font data within to the page and set `preserveFontStyle=false`.
   *     - Checkout the embed example: <a href="https://stackblitz.com/edit/zfbya9-8nf9nn?file=index.html">https://stackblitz.com/edit/zfbya9-8nf9nn?file=index.html</a>
   * @param {Function} [callback] The callback to be invoked when export is ready.
   * @returns {string} dataURI
   * @example
   *  chart.export();
   *  // --> "data:image/svg+xml;base64,PHN..."
   *
   *  // Initialize the download automatically
   *  chart.export({mimeType: "image/png"}, dataUrl => {
   *     const link = document.createElement("a");
   *
   *     link.download = `${Date.now()}.png`;
   *     link.href = dataUrl;
   *     link.innerHTML = "Download chart as image";
   *
   *     document.body.appendChild(link);
   *  });
   *
   *  // Resize the exported image
   *  chart.export(
   *    {
   *      width: 800,
   *      height: 600,
   *      preserveAspectRatio: false,
   *      preserveFontStyle: false,
   *      mimeType: "image/png"
   *    },
   *    dataUrl => { ... }
   *  );
   */
  export: function _export(option, callback) {
    var _this9 = this;
    const $$ = this.internal,
      state = $$.state,
      _$$$$el = $$.$el,
      chart = _$$$$el.chart,
      svg = _$$$$el.svg,
      _state$current = state.current,
      width = _state$current.width,
      height = _state$current.height,
      opt = mergeObj({
        width: width,
        height: height,
        preserveAspectRatio: !0,
        preserveFontStyle: !1,
        mimeType: "image/png"
      }, option),
      svgDataUrl = nodeToSvgDataUrl(chart.node(), opt, {
        width: width,
        height: height
      }),
      glyph = opt.preserveFontStyle ? getGlyph(svg.node()) : [];
    if (callback && isFunction(callback)) {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = function () {
        _newArrowCheck(this, _this9);
        const canvas = browser_doc.createElement("canvas"),
          ctx = canvas.getContext("2d");
        canvas.width = opt.width || width;
        canvas.height = opt.height || height;
        ctx.drawImage(img, 0, 0);
        if (glyph.length) {
          renderText(ctx, glyph);

          // release glyph array
          glyph.length = 0;
        }
        callback.bind(this)(canvas.toDataURL(opt.mimeType));
      }.bind(this);
      img.src = svgDataUrl;
    }
    return svgDataUrl;
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/focus.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var api_focus = ({
  /**
   * This API highlights specified targets and fade out the others.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be highlighted.
   * @function focus
   * @instance
   * @memberof Chart
   * @param {string|Array} targetIdsValue Target ids to be highlighted.
   * @example
   *  // data1 will be highlighted and the others will be faded out
   *  chart.focus("data1");
   *
   * // data1 and data2 will be highlighted and the others will be faded out
   * chart.focus(["data1", "data2"]);
   *
   * // all targets will be highlighted
   * chart.focus();
   */
  focus: function focus(targetIdsValue) {
    var _this = this;
    const $$ = this.internal,
      state = $$.state,
      targetIds = $$.mapToTargetIds(targetIdsValue),
      candidates = $$.$el.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$)));
    this.revert();
    this.defocus();
    candidates.classed($FOCUS.focused, !0).classed($FOCUS.defocused, !1);
    if ($$.hasArcType() && !state.hasRadar) {
      $$.expandArc(targetIds);
      $$.hasType("gauge") && $$.markOverlapped(targetIdsValue, $$, "." + $GAUGE.gaugeValue);
    }
    $$.toggleFocusLegend(targetIds, !0);
    state.focusedTargetIds = targetIds;
    state.defocusedTargetIds = state.defocusedTargetIds.filter(function (id) {
      _newArrowCheck(this, _this);
      return targetIds.indexOf(id) < 0;
    }.bind(this));
  },
  /**
   * This API fades out specified targets and reverts the others.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be faded out.
   * @function defocus
   * @instance
   * @memberof Chart
   * @param {string|Array} targetIdsValue Target ids to be faded out.
   * @example
   * // data1 will be faded out and the others will be reverted.
   * chart.defocus("data1");
   *
   * // data1 and data2 will be faded out and the others will be reverted.
   * chart.defocus(["data1", "data2"]);
   *
   * // all targets will be faded out.
   * chart.defocus();
   */
  defocus: function defocus(targetIdsValue) {
    var _this2 = this;
    const $$ = this.internal,
      state = $$.state,
      targetIds = $$.mapToTargetIds(targetIdsValue),
      candidates = $$.$el.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$)));
    candidates.classed($FOCUS.focused, !1).classed($FOCUS.defocused, !0);
    if ($$.hasArcType(null, ["polar"])) {
      $$.unexpandArc(targetIds);
      $$.hasType("gauge") && $$.undoMarkOverlapped($$, "." + $GAUGE.gaugeValue);
    }
    $$.toggleFocusLegend(targetIds, !1);
    state.focusedTargetIds = state.focusedTargetIds.filter(function (id) {
      _newArrowCheck(this, _this2);
      return targetIds.indexOf(id) < 0;
    }.bind(this));
    state.defocusedTargetIds = targetIds;
  },
  /**
   * Revert focused or defocused state to initial state.<br><br>
   * You can specify multiple targets by giving an array that includes id as string. If no argument is given, all of targets will be reverted.
   * @function revert
   * @instance
   * @memberof Chart
   * @param {string|Array} targetIdsValue Target ids to be reverted
   * @example
   * // 'data1' will be reverted.
   * chart.revert("data1");
   *
   * // 'data1' and 'data2' will be reverted.
   * chart.revert(["data1", "data2"]);
   *
   * // all targets will be reverted.
   * chart.revert();
   */
  revert: function revert(targetIdsValue) {
    const $$ = this.internal,
      config = $$.config,
      state = $$.state,
      $el = $$.$el,
      targetIds = $$.mapToTargetIds(targetIdsValue),
      candidates = $el.svg.selectAll($$.selectorTargets(targetIds));
    // should be for all targets

    candidates.classed($FOCUS.focused, !1).classed($FOCUS.defocused, !1);
    $$.hasArcType(null, ["polar"]) && $$.unexpandArc(targetIds);
    if (config.legend_show) {
      $$.showLegend(targetIds.filter($$.isLegendToShow.bind($$)));
      $el.legend.selectAll($$.selectorLegends(targetIds)).filter(function () {
        return (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).classed($FOCUS.legendItemFocused);
      }).classed($FOCUS.legendItemFocused, !1);
    }
    state.focusedTargetIds = [];
    state.defocusedTargetIds = [];
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/legend.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * Define legend
 * @ignore
 */
const legend_legend = {
  /**
   * Show legend for each target.
   * - **NOTE:** Legend APIs aren't supported for `treemap` type.
   * @function legend․show
   * @instance
   * @memberof Chart
   * @param {string|Array} targetIds
   * - If targetIds is given, specified target's legend will be shown.
   * - If only one target is the candidate, String can be passed.
   * - If no argument is given, all of target's legend will be shown.
   * @example
   * // Show legend for data1.
   * chart.legend.show("data1");
   *
   * // Show legend for data1 and data2.
   * chart.legend.show(["data1", "data2"]);
   *
   * // Show all legend.
   * chart.legend.show();
   */
  show: function show(targetIds) {
    const $$ = this.internal;
    $$.showLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({
      withLegend: !0
    });
  },
  /**
   * Hide legend for each target.
   * @function legend․hide
   * @instance
   * @memberof Chart
   * @param {string|Array} targetIds
   * - If targetIds is given, specified target's legend will be hidden.
   * - If only one target is the candidate, String can be passed.
   * - If no argument is given, all of target's legend will be hidden.
   * @example
   * // Hide legend for data1.
   * chart.legend.hide("data1");
   *
   * // Hide legend for data1 and data2.
   * chart.legend.hide(["data1", "data2"]);
   *
   * // Hide all legend.
   * chart.legend.hide();
   */
  hide: function hide(targetIds) {
    const $$ = this.internal;
    $$.hideLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({
      withLegend: !0
    });
  }
};
/* harmony default export */ var api_legend = ({
  legend: legend_legend
});
;// CONCATENATED MODULE: ./src/Chart/api/load.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var api_load = ({
  /**
   * Load data to the chart.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
   * - <b>Note:</b>
   *   - unload should be used if some data needs to be unloaded simultaneously.
   *     If you call unload API soon after/before load instead of unload param, chart will not be rendered properly because of cancel of animation.<br>
   *   - done will be called after data loaded, but it's not after rendering.
   *     It's because rendering will finish after some transition and there is some time lag between loading and rendering
   * @function load
   * @instance
   * @memberof Chart
   * @param {object} args The object can consist with following members:<br>
   *
   *    | Key | Type | Description |
   *    | --- | --- | --- |
   *    | columns | Array | The `columns` data will be loaded. If data that has the same target id is given, the chart will be updated. Otherwise, new target will be added |
   *    | json | Array | The `json` data will be loaded. If data that has the same target id is given, the chart will be updated. Otherwise, new target will be added |
   *    | rows | Array | The `rows` data will be loaded. If data that has the same target id is given, the chart will be updated. Otherwise, new target will be added |
   *    | url | string | The data from `url` will be loaded. If data that has the same target id is given, the chart will be updated. Otherwise, new target will be added |
   *    | &nbsp; | | |
   *    | append | boolean | Load data appending it to the current dataseries.<br>If the existing chart has`x` value, should provide with corresponding `x` value for newly loaded data.  |
   *    | axes | Object | The axes specified by data.axes will be updated. axes must be Object that has target id as keys. |
   *    | categories | Array | The categories specified by axis.x.categories or data.x will be updated. categories must be Array. |
   *    | classes | Object | The classes specified by data.classes will be updated. classes must be Object that has target id as keys. |
   *    | colors | Object | The colors specified by data.colors will be updated. colors must be Object that has target id as keys. |
   *    | data | Obejct | Data objects to be loaded. Checkout the example. |
   *    | done | Function | The specified function will be called after data loaded.|
   *    | headers | string |  Set request header if loading via `data.url`.<br>@see [data․headers](Options.html#.data%25E2%2580%25A4headers) |
   *    | keys | Object |  Choose which JSON objects keys correspond to desired data.<br>**NOTE:** Only for JSON object given as array.<br>@see [data․keys](Options.html#.data%25E2%2580%25A4keys) |
   *    | mimeType | string |  Set 'json' if loading JSON via url.<br>@see [data․mimeType](Options.html#.data%25E2%2580%25A4mimeType) |
   *    | names | Object | Same as data.names() |
   *    | resizeAfter | boolean | Resize after the load. Default value is `false`.<br>- This option won't call `onresize` neither `onresized`.<br>- When set to 'true', will call `.flush(true)` at the end of load. |
   *    | type | string | The type of targets will be updated. |
   *    | types | Object | The types of targets will be updated. |
   *    | unload | Array | Specify the data will be unloaded before loading new data. If true given, all of data will be unloaded. If target ids given as String or Array, specified targets will be unloaded. If absent or false given, unload will not occur. |
   *    | xs | string | Same as data.xs option  |
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataFromURL)
   * @example
   * // Load data1 and unload data2 and data3
   * chart.load({
   *     columns: [
   *        ["data1", 100, 200, 150, ...],
   *        ...
   *    ],
   *    unload: ["data2", "data3"],
   *    url: "...",
   *    done: function() { ... }
   *    resizeAfter: true  // will resize after load
   * });
   * @example
   * const chart = bb.generate({
   *   data: {
   *     columns: [
   *       ["data1", 20, 30, 40]
   *     ]
   *   }
   * });
   *
   * chart.load({
   *    columns: [
   *        // with 'append' option, the 'data1' will have `[20,30,40,50,60]`.
   *        ["data1", 50, 60]
   *    ],
   *    append: true
   * });
   * @example
   * const chart = bb.generate({
   *   data: {
   *     x: "x",
   *     xFormat: "%Y-%m-%dT%H:%M:%S",
   *     columns: [
   *       ["x", "2021-01-03T03:00:00", "2021-01-04T12:00:00", "2021-01-05T21:00:00"],
   *       ["data1", 36, 30, 24]
   *     ]
   *   },
   *   axis: {
   *     x: {
   *       type: "timeseries"
   *     }
   *   }
   * };
   *
   * chart.load({
   *   columns: [
   *     // when existing chart has `x` value, should provide correponding 'x' value.
   *     // with 'append' option, the 'data1' will have `[36,30,24,37]`.
   *     ["x", "2021-02-01T08:00:00"],
   *     ["data1", 37]
   *   ],
   *   append: true
   * });
   * @example
   * // myAPI.json
   * // {
   * //   "data1": [220, 240, 270, 250, 280],
   * //   "data2": [180, 150, 300, 70, 120]
   * // }
   *
   * chart.load({
   *     url: './data/myAPI.json',
   *     mimeType: "json",
   *
   *     // set request header if is needed
   *     headers: {
   *       "Content-Type": "text/json"
   *     }
   * });
   * @example
   * chart.load({
   *     data: [
   *       // equivalent as: columns: [["data1", 30, 200, 100]]
   *       {"data1": 30}, {"data1": 200}, {"data1": 100}
   *
   *       // or
   *       // equivalent as: columns: [["data1", 10, 20], ["data2", 13, 30]]
   *       // {"data1": 10, "data2": 13}, {"data1": 20, "data2": 30}}
   *     ]
   * });
   * @example
   * chart.load({
   *     json: [
   *          {name: "www.site1.com", upload: 800, download: 500, total: 400},
   *     ],
   *     keys: {
   *         x: "name",
   *         value: ["upload", "download"]
   *     }
   * });
   * @example
   * chart.load({
   *   json: {
   *       data1:[30, 20, 50, 40, 60, 50],
   *       data2:[200, 130, 90, 240, 130, 220],
   *   }
   * });
   */
  load: function load(args) {
    var _this = this;
    const $$ = this.internal,
      config = $$.config;
    // update xs if specified
    args.xs && $$.addXs(args.xs);

    // update names if exists
    "names" in args && this.data.names(args.names);

    // update classes if exists
    "classes" in args && Object.keys(args.classes).forEach(function (id) {
      _newArrowCheck(this, _this);
      config.data_classes[id] = args.classes[id];
    }.bind(this));

    // update categories if exists
    if ("categories" in args && $$.axis.isCategorized()) {
      config.axis_x_categories = args.categories;
    }

    // update axes if exists
    "axes" in args && Object.keys(args.axes).forEach(function (id) {
      _newArrowCheck(this, _this);
      config.data_axes[id] = args.axes[id];
    }.bind(this));

    // update colors if exists
    "colors" in args && Object.keys(args.colors).forEach(function (id) {
      _newArrowCheck(this, _this);
      config.data_colors[id] = args.colors[id];
    }.bind(this));

    // unload if needed
    if ("unload" in args && args.unload !== !1) {
      // TODO: do not unload if target will load (included in url/rows/columns)
      $$.unload($$.mapToTargetIds(args.unload === !0 ? null : args.unload), function () {
        var _this2 = this;
        _newArrowCheck(this, _this);
        // to mitigate improper rendering for multiple consecutive calls
        // https://github.com/naver/billboard.js/issues/2121
        requestIdleCallback(function () {
          _newArrowCheck(this, _this2);
          return $$.loadFromArgs(args);
        }.bind(this));
      }.bind(this));
    } else {
      $$.loadFromArgs(args);
    }
  },
  /**
   * Unload data to the chart.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
   * - <b>Note:</b>
   * If you call load API soon after/before unload, unload param of load should be used. Otherwise chart will not be rendered properly because of cancel of animation.<br>
   * `done` will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering.
   * @function unload
   * @instance
   * @memberof Chart
   * @param {object} argsValue
   *  | key | Type | Description |
   *  | --- | --- | --- |
   *  | ids | String &vert; Array | Target id data to be unloaded. If not given, all data will be unloaded. |
   *  | done | Fuction | Callback after data is unloaded. |
   *  | resizeAfter | boolean | Resize after the unload. Default value is `false`.<br>- This option won't call `onresize` neither `onresized`.<br>- When set to 'true', will call `.flush(true)` at the end of unload. |
   * @example
   *  // Unload data2 and data3
   *  chart.unload({
   *    ids: ["data2", "data3"],
   *    done: function() {
   *       // called after the unloaded
   *    },
   *    resizeAfter: true  // will resize after unload
   *  });
   */
  unload: function unload(argsValue) {
    var _this3 = this;
    const $$ = this.internal;
    let args = argsValue || {};

    // hide possible tooltip display when data is completely unloaded
    isEmpty(args) && this.tooltip.hide();
    if (isArray(args)) {
      args = {
        ids: args
      };
    } else if (isString(args)) {
      args = {
        ids: [args]
      };
    }
    const ids = $$.mapToTargetIds(args.ids);
    $$.unload(ids, function () {
      _newArrowCheck(this, _this3);
      $$.redraw({
        withUpdateOrgXDomain: !0,
        withUpdateXDomain: !0,
        withLegend: !0
      });
      $$.cache.remove(ids);
      callDone.call($$, args.done, args.resizeAfter);
    }.bind(this));
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/show.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Show/Hide data series
 * @param {boolean} show Show or hide
 * @param {Array} targetIdsValue Target id values
 * @param {object} options Options
 * @private
 */
function showHide(show, targetIdsValue, options) {
  var _this = this;
  const $$ = this.internal,
    targetIds = $$.mapToTargetIds(targetIdsValue),
    hiddenIds = $$.state.hiddenTargetIds.map(function (v) {
      _newArrowCheck(this, _this);
      return targetIds.indexOf(v) > -1 && v;
    }.bind(this)).filter(Boolean);
  $$.state.toggling = !0;
  $$[(show ? "remove" : "add") + "HiddenTargetIds"](targetIds);
  const targets = $$.$el.svg.selectAll($$.selectorTargets(targetIds)),
    opacity = show ? null : "0";
  if (show && hiddenIds.length) {
    targets.style("display", null);
    callFn($$.config.data_onshown, this, hiddenIds);
  }
  $$.$T(targets).style("opacity", opacity, "important").call(endall, function () {
    _newArrowCheck(this, _this);
    // https://github.com/naver/billboard.js/issues/1758
    if (!show && hiddenIds.length === 0) {
      targets.style("display", "none");
      callFn($$.config.data_onhidden, this, targetIds);
    }
    targets.style("opacity", opacity);
  }.bind(this));
  options.withLegend && $$[(show ? "show" : "hide") + "Legend"](targetIds);
  $$.redraw({
    withUpdateOrgXDomain: !0,
    withUpdateXDomain: !0,
    withLegend: !0
  });
  $$.state.toggling = !1;
}
/* harmony default export */ var show = ({
  /**
   * Show data series on chart
   * @function show
   * @instance
   * @memberof Chart
   * @param {string|Array} [targetIdsValue] The target id value.
   * @param {object} [options] The object can consist with following members:<br>
   *
   *    | Key | Type | default | Description |
   *    | --- | --- | --- | --- |
   *    | withLegend | boolean | false | whether or not display legend |
   *
   * @example
   * // show 'data1'
   * chart.show("data1");
   *
   * // show 'data1' and 'data3'
   * chart.show(["data1", "data3"]);
   */
  show: function show(targetIdsValue, options) {
    if (options === void 0) {
      options = {};
    }
    showHide.call(this, !0, targetIdsValue, options);
  },
  /**
   * Hide data series from chart
   * @function hide
   * @instance
   * @memberof Chart
   * @param {string|Array} [targetIdsValue] The target id value.
   * @param {object} [options] The object can consist with following members:<br>
   *
   *    | Key | Type | default | Description |
   *    | --- | --- | --- | --- |
   *    | withLegend | boolean | false | whether or not display legend |
   *
   * @example
   * // hide 'data1'
   * chart.hide("data1");
   *
   * // hide 'data1' and 'data3'
   * chart.hide(["data1", "data3"]);
   */
  hide: function hide(targetIdsValue, options) {
    if (options === void 0) {
      options = {};
    }
    showHide.call(this, !1, targetIdsValue, options);
  },
  /**
   * Toggle data series on chart. When target data is hidden, it will show. If is shown, it will hide in vice versa.
   * @function toggle
   * @instance
   * @memberof Chart
   * @param {string|Array} [targetIds] The target id value.
   * @param {object} [options] The object can consist with following members:<br>
   *
   *    | Key | Type | default | Description |
   *    | --- | --- | --- | --- |
   *    | withLegend | boolean | false | whether or not display legend |
   *
   * @example
   * // toggle 'data1'
   * chart.toggle("data1");
   *
   * // toggle 'data1' and 'data3'
   * chart.toggle(["data1", "data3"]);
   */
  toggle: function toggle(targetIds, options) {
    var _this2 = this;
    if (options === void 0) {
      options = {};
    }
    const $$ = this.internal,
      targets = {
        show: [],
        hide: []
      };
    // sort show & hide target ids
    $$.mapToTargetIds(targetIds).forEach(function (id) {
      _newArrowCheck(this, _this2);
      return targets[$$.isTargetToShow(id) ? "hide" : "show"].push(id);
    }.bind(this));

    // perform show & hide task separately
    // https://github.com/naver/billboard.js/issues/454
    targets.show.length && this.show(targets.show, options);
    targets.hide.length && setTimeout(function () {
      _newArrowCheck(this, _this2);
      return this.hide(targets.hide, options);
    }.bind(this), 0);
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/tooltip.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Define tooltip
 * @ignore
 */
const tooltip_tooltip = {
  /**
   * Show tooltip
   * @function tooltip․show
   * @instance
   * @memberof Chart
   * @param {object} args The object can consist with following members:<br>
   *
   *    | Key | Type | Description |
   *    | --- | --- | --- |
   *    | index | Number | Determine focus by index |
   *    | x | Number &vert; Date | Determine focus by x Axis index |
   *    | mouse | Array | Determine x and y coordinate value relative the targeted '.bb-event-rect' x Axis.<br>It should be used along with `data`, `index` or `x` value. The default value is set as `[0,0]` |
   *    | data | Object | When [data.xs](Options.html#.data%25E2%2580%25A4xs) option is used or [tooltip.grouped](Options.html#.tooltip) set to 'false', `should be used giving this param`.<br><br>**Key:**<br>- x {number &verbar; Date}: x Axis value<br>- index {number}: x Axis index (useless for data.xs)<br>- id {string}: data id<br>- value {number}: The corresponding value for tooltip. |
   *
   * @example
   *  // show the 2nd x Axis coordinate tooltip
   *  // for Arc(gauge, donut & pie) and radar type, approch showing tooltip by using "index" number.
   *  chart.tooltip.show({
   *    index: 1
   *  });
   *
   *  // show tooltip for the 3rd x Axis in x:50 and y:100 coordinate of '.bb-event-rect' of the x Axis.
   *  chart.tooltip.show({
   *    x: 2,
   *    mouse: [50, 100]
   *  });
   *
   *  // show tooltip for timeseries x axis
   *  chart.tooltip.show({
   *    x: new Date("2018-01-02 00:00")
   *  });
   *
   *  // treemap type can be shown by using "id" only.
   *  chart.tooltip.show({
   *    data: {
   *        id: "data1"  // data id
   *    }
   *  });
   *
   *  // for Arc types, specify 'id' or 'index'
   *  chart.tooltip.show({ data: { id: "data2" }});
   *  chart.tooltip.show({ data: { index: 2 }});
   *
   *  // when data.xs is used
   *  chart.tooltip.show({
   *    data: {
   *        x: 3,  // x Axis value
   *        id: "data1",  // data id
   *        value: 500  // data value
   *    }
   *  });
   *
   *  // when data.xs isn't used, but tooltip.grouped=false is set
   *  chart.tooltip.show({
   *    data: {
   *        index: 3,  // or 'x' key value
   *        id: "data1",  // data id
   *        value: 500  // data value
   *    }
   *  });
   */
  show: function show(args) {
    var _this = this;
    const $$ = this.internal,
      $el = $$.$el,
      config = $$.config,
      _$$$state = $$.state,
      eventReceiver = _$$$state.eventReceiver,
      hasTreemap = _$$$state.hasTreemap,
      inputType = _$$$state.inputType;
    let index, mouse;
    // determine mouse position on the chart
    if (args.mouse) {
      mouse = args.mouse;
    }

    // determine focus data
    if (args.data) {
      var _$$$getYScaleById;
      const data = args.data,
        y = (_$$$getYScaleById = $$.getYScaleById(data.id)) == null ? void 0 : _$$$getYScaleById(data.value);
      if (hasTreemap && data.id) {
        eventReceiver.rect = $el.main.select("" + $$.selectorTarget(data.id, undefined, "rect"));
      } else if ($$.isMultipleX()) {
        // if multiple xs, target point will be determined by mouse
        mouse = [$$.xx(data), y];
      } else {
        var _data$index, _$$$getArcElementById;
        if (!config.tooltip_grouped) {
          mouse = [0, y];
        }
        index = (_data$index = data.index) != null ? _data$index : $$.hasArcType() && data.id ? (_$$$getArcElementById = $$.getArcElementByIdOrIndex(data.id)) == null ? void 0 : _$$$getArcElementById.datum().index : $$.getIndexByX(data.x);
      }
    } else if (isDefined(args.x)) {
      index = $$.getIndexByX(args.x);
    } else if (isDefined(args.index)) {
      index = args.index;
    }
    (inputType === "mouse" ? ["mouseover", "mousemove"] : ["touchstart"]).forEach(function (eventName) {
      _newArrowCheck(this, _this);
      $$.dispatchEvent(eventName, index, mouse);
    }.bind(this));
  },
  /**
   * Hide tooltip
   * @function tooltip․hide
   * @instance
   * @memberof Chart
   */
  hide: function hide() {
    var _this2 = this;
    const $$ = this.internal,
      inputType = $$.state.inputType,
      tooltip = $$.$el.tooltip,
      data = tooltip == null ? void 0 : tooltip.datum();
    if (data) {
      const index = JSON.parse(data.current)[0].index;

      // make to finalize, possible pending event flow set from '.tooltip.show()' call
      (inputType === "mouse" ? ["mouseout"] : ["touchend"]).forEach(function (eventName) {
        _newArrowCheck(this, _this2);
        $$.dispatchEvent(eventName, index);
      }.bind(this));
    }

    // reset last touch point index
    inputType === "touch" && $$.callOverOutForTouch();
    $$.hideTooltip(!0);
    $$.hideGridFocus == null || $$.hideGridFocus();
    $$.unexpandCircles == null || $$.unexpandCircles();
    $$.expandBarTypeShapes == null || $$.expandBarTypeShapes(!1);
  }
};
/* harmony default export */ var api_tooltip = ({
  tooltip: tooltip_tooltip
});
;// CONCATENATED MODULE: ./src/Chart/Chart.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */













/**
 * Main chart class.
 * - Note: Instantiated via `bb.generate()`.
 * @class Chart
 * @example
 * var chart = bb.generate({
 *  data: {
 *    columns: [
 *        ["x", "2015-11-02", "2015-12-01", "2016-01-01", "2016-02-01", "2016-03-01"],
 *        ["count1", 11, 8, 7, 6, 5 ],
 *        ["count2", 9, 3, 6, 2, 8 ]
 *   ]}
 * }
 * @see {@link bb.generate} for the initialization.
 */
/**
 * Access instance's primary node elements
 * @member {object} $
 * @property {object} $ Access instance's primary node elements
 * @property {d3.selection} $.chart Wrapper element
 * @property {d3.selection} $.svg Main svg element
 * @property {d3.selection} $.defs Definition element
 * @property {d3.selection} $.main Main grouping element
 * @property {d3.selection} $.needle Needle element
 *  - **NOTE:**
 *    - The element will have `bb-needle` as class name.
 *    - Will provide speical helper `.updateHelper(value: number, updateConfig: boolean)` method to facilitate needle position update.
 * @property {d3.selection} $.tooltip Tooltip element
 * @property {d3.selection} $.legend Legend element
 * @property {d3.selection} $.title Title element
 * @property {d3.selection} $.grid Grid element
 * @property {d3.selection} $.arc Arc element
 * @property {d3.selection} $.circles Data point circle elements
 * @property {object} $.bar Bar element object
 * @property {d3.selection} $.bar.bars Bar elements
 * @property {d3.selection} $.candlestick Candlestick elements
 * @property {object} $.line Line element object
 * @property {d3.selection} $.line.lines Line elements
 * @property {d3.selection} $.line.areas Areas elements
 * @property {object} $.text Text element object
 * @property {d3.selection} $.text.texts Data label text elements
 * @memberof Chart
 * @example
 * const chart = bb.generate({ ... });
 *
 * chart.$.chart; // wrapper element
 * chart.$.line.circles;  // all data point circle elements
 * @example
 * // Update arc needle position
 * const chart = bb.generate({
 *   data: {
 *     type: "donut"
 *   },
 *   arc: {
 *     needle: {
 *       show: true,
 *       ...
 *     }
 *   }
 * });
 *
 * chart.$.needle.updateHelper(70);  // update needle position to point value 70.
 *
 * // update needle position to point value 70 and the config value.
 * // NOTE: updating config value, will update needle pointer initial value too.
 * chart.$.needle.updateHelper(70, true);
 *
 * // update needle point position every 1 second
 * let i = 0;
 * setInterval(() => {
 *   chart.$.needle.updateHelper(i += 10);
 * }, 1000)
 */
/**
 * Plugin instance array
 * @member {Array} plugins
 * @memberof Chart
 * @example
 *  var chart = bb.generate({
 *     ...
 *     plugins: [
 *        new bb.plugin.stanford({ ... }),
 *        new PluginA()
 *     ]
 *  });
 *
 *  chart.plugins; // [Stanford, PluginA] - instance array
 */
let Chart = function Chart(options) {
  this.plugins = [];
  this.internal = void 0;
  const $$ = new ChartInternal(this);
  this.internal = $$;

  // bind to namespaced APIs
  (function bindThis(fn, target, argThis) {
    var _this = this;
    Object.keys(fn).forEach(function (key) {
      _newArrowCheck(this, _this);
      const isFunc = isFunction(fn[key]),
        isChild = target !== argThis,
        isNotNil = notEmpty(fn[key]),
        hasChild = isNotNil && Object.keys(fn[key]).length > 0;
      if (isFunc && (!isChild && hasChild || isChild)) {
        target[key] = fn[key].bind(argThis);
      } else if (isNotNil && !isFunc) {
        target[key] = {};
      } else {
        target[key] = fn[key];
      }
      hasChild && bindThis(fn[key], target[key], argThis);
    }.bind(this));
  })(Chart.prototype, this, this);
  loadConfig.call($$, options);
  $$.beforeInit();
  $$.init();
}; // extend common APIs as part of Chart class

extend(Chart.prototype, [chart, api_color, api_data, api_export, api_focus, api_legend, api_load, show, api_tooltip]);
;// CONCATENATED MODULE: ./src/Chart/api/axis.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Set the min/max value
 * @param {Chart} $$ Chart instance
 * @param {string} type Set type 'min' or 'max'
 * @param {object} value Value to be set
 * @private
 */
function setMinMax($$, type, value) {
  var _this = this;
  const config = $$.config,
    helper = function (key, value) {
      _newArrowCheck(this, _this);
      const v = isNumber(value) ? value : value === !1 ? undefined : null;
      if (v !== null) {
        config["axis_" + key + "_" + type] = v;
      }
    }.bind(this);
  if (isDefined(value)) {
    if (isObjectType(value)) {
      Object.keys(value).forEach(function (key) {
        _newArrowCheck(this, _this);
        helper(key, value[key]);
      }.bind(this));
    } else if (isNumber(value) || value === !1) {
      // shorthand values affects only y and y2.
      ["y", "y2"].forEach(function (key) {
        _newArrowCheck(this, _this);
        helper(key, value);
      }.bind(this));
    }
    $$.redraw({
      withUpdateOrgXDomain: !0,
      withUpdateXDomain: !0
    });
  }
}

/**
 * Get the min/max value
 * @param {Chart} $$ Chart instance
 * @param {string} type Set type 'min' or 'max'
 * @returns {{x, y, y2}}
 * @private
 */
function axis_getMinMax($$, type) {
  const config = $$.config;
  return {
    x: config["axis_x_" + type],
    y: config["axis_y_" + type],
    y2: config["axis_y2_" + type]
  };
}

/**
 * Define axis
 * @ignore
 */
const axis = {
  /**
   * Get and set axis labels.
   * - **NOTE:** Only applicable for chart types which has x and y axes.
   * @function axis․labels
   * @instance
   * @memberof Chart
   * @param {object} labels specified axis' label to be updated.
   * @param {string} [labels.x] x Axis string
   * @param {string} [labels.y] y Axis string
   * @param {string} [labels.y2] y2 Axis string
   * @returns {object|undefined} axis labels text object
   * @example
   * // Update axis' label
   * chart.axis.labels({
   *   x: "New X Axis Label",
   *   y: "New Y Axis Label",
   *   y2: "New Y2 Axis Label"
   * });
   *
   * chart.axis.labels();
   * // --> {
   * //  x: "New X Axis Label",
   * //  y: "New Y Axis Label",
   * //  y2: "New Y2 Axis Label"
   * // }
   */
  labels: function labels(_labels) {
    var _this2 = this;
    const $$ = this.internal;
    let labelText;
    if (_labels) {
      Object.keys(_labels).forEach(function (axisId) {
        _newArrowCheck(this, _this2);
        $$.axis.setLabelText(axisId, _labels[axisId]);
      }.bind(this));
      $$.axis.updateLabels();
    }
    ["x", "y", "y2"].forEach(function (v) {
      _newArrowCheck(this, _this2);
      const text = $$.axis.getLabelText(v);
      if (text) {
        labelText || (labelText = {});
        labelText[v] = text;
      }
    }.bind(this));
    return labelText;
  },
  /**
   * Get and set axis min value.
   * - **NOTE:** Only applicable for chart types which has x and y axes.
   * @function axis․min
   * @instance
   * @memberof Chart
   * @param {object} min If min is given, specified axis' min value will be updated.<br>
   *   If no argument is given, the min values set on generating option for each axis will be returned.
   *   If not set any min values on generation, it will return `undefined`.<br>
   *   To unset specific axis max, set `false` to each of them.
   * @returns {object|undefined}
   * @example
   * // Update axis' min
   * chart.axis.min({
   *   x: -10,
   *   y: 1000,
   *   y2: 100
   * });
   *
   * // To unset specific axis min, set false to each of them.
   * chart.axis.min({
   *   x: false,
   *   y: false,
   *   y2: false
   * });
   *
   * // shorthand (only affects y and y2 axis)
   * chart.axis.min(-50);
   * chart.axis.min(false);
   */
  min: function min(_min) {
    const $$ = this.internal;
    return isValue(_min) || _min === !1 ? setMinMax($$, "min", _min) : axis_getMinMax($$, "min");
  },
  /**
   * Get and set axis max value.
   * - **NOTE:** Only applicable for chart types which has x and y axes.
   * @function axis․max
   * @instance
   * @memberof Chart
   * @param {object} max If max is given, specified axis' max value will be updated.<br>
   *   If no argument is given, the max values set on generating option for each axis will be returned.
   *   If not set any max values on generation, it will return `undefined`.<br>
   *   To unset specific axis max, set `false` to each of them.
   * @returns {object|undefined}
   * @example
   * // Update axis' label
   * chart.axis.max({
   *    x: 100,
   *    y: 1000,
   *    y2: 10000
   * });
   *
   * // To unset specific axis max, set false to each of them.
   * chart.axis.max({
   *   x: false,
   *   y: false,
   *   y2: false
   * });
   *
   * // shorthand (only affects y and y2 axis)
   * chart.axis.max(10);
   * chart.axis.max(false);
   */
  max: function max(_max) {
    const $$ = this.internal;
    return isValue(_max) || _max === !1 ? setMinMax($$, "max", _max) : axis_getMinMax($$, "max");
  },
  /**
   * Get and set axis min and max value.
   * - **NOTE:** Only applicable for chart types which has x and y axes.
   * @function axis․range
   * @instance
   * @memberof Chart
   * @param {object} range If range is given, specified axis' min and max value will be updated.
   *   If no argument is given, the current min and max values for each axis will be returned.<br>
   *   To unset specific axis max, set `false` to each of them.
   * @returns {object|undefined}
   * @example
   * // Update axis' label
   * chart.axis.range({
   *   min: {
   *     x: -10,
   *     y: -1000,
   *     y2: -10000
   *   },
   *   max: {
   *     x: 100,
   *     y: 1000,
   *     y2: 10000
   *   },
   * });
   *
   * // To unset specific axis max, set false to each of them.
   * chart.axis.range({
   *   min: {
   *     x: false,
   *     y: false,
   *     y2: false
   *   },
   *   max: {
   *     x: false,
   *     y: false,
   *     y2: false
   *   },
   * });
   *
   * // shorthand (only affects y and y2 axis)
   * chart.axis.range({ min: -50, max: 1000 });
   * chart.axis.range({ min: false, max: false });
   */
  range: function range(_range) {
    const axis = this.axis;
    if (arguments.length) {
      const min = _range.min,
        max = _range.max;
      isDefined(max) && axis.max(max);
      isDefined(min) && axis.min(min);
    } else {
      return {
        max: axis.max(),
        min: axis.min()
      };
    }
    return undefined;
  }
};
/* harmony default export */ var api_axis = ({
  axis: axis
});
;// CONCATENATED MODULE: ./src/Chart/api/category.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var api_category = ({
  /**
   * Set specified category name on category axis.
   * @function category
   * @instance
   * @memberof Chart
   * @param {number} i index of category to be changed
   * @param {string} category category value to be changed
   * @returns {string}
   * @example
   * chart.category(2, "Category 3");
   */
  category: function category(i, _category) {
    const $$ = this.internal,
      config = $$.config;
    if (arguments.length > 1) {
      config.axis_x_categories[i] = _category;
      $$.redraw();
    }
    return config.axis_x_categories[i];
  },
  /**
   * Set or get category names on category axis.
   * @function categories
   * @instance
   * @memberof Chart
   * @param {Array} categories This must be an array that includes category names in string. If category names are included in the date by data.x option, this is not required.
   * @returns {Array}
   * @example
   * chart.categories([
   *      "Category 1", "Category 2", ...
   * ]);
   */
  categories: function categories(_categories) {
    const $$ = this.internal,
      config = $$.config;
    if (!_categories || !Array.isArray(_categories)) {
      const cat = config.axis_x_categories;
      return isEmpty(cat) ? Object.values($$.data.xs)[0] : cat;
    }
    config.axis_x_categories = _categories;
    $$.redraw();
    return config.axis_x_categories;
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/grid.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Update grid lines.
 * @param {Array} grids grid lines to update
 * @param {string} axisId axis' id: "x" or "y"
 * @returns {Array}
 * @private
 */
function grid(grids, axisId) {
  const $$ = this.internal,
    config = $$.config,
    withTransition = config.transition_duration && isTabVisible(),
    gridPropLines = "grid_" + axisId + "_lines";
  if (!grids) {
    return config[gridPropLines];
  }
  config[gridPropLines] = grids;
  $$.updateGrid();
  $$.redrawGrid(withTransition);
  return config[gridPropLines];
}

/**
 * Add grid lines.
 * @param {Array|object} grids grid lines to add
 * @param {string} axisId axis' id: "x" or "y"
 * @returns {Array}
 * @private
 */
function _add(grids, axisId) {
  return grid.bind(this)(this.internal.config["grid_" + axisId + "_lines"].concat(grids || []), axisId);
}

/**
 * Remove grid lines.
 * @param {object} grids grid lines to remove
 * @param {boolean} isXAxis weather is x axis or not
 * @private
 */
function _remove(grids, isXAxis) {
  this.internal.removeGridLines(grids, isXAxis);
}

/**
 * Update x grid lines.
 * @function xgrids
 * @instance
 * @memberof Chart
 * @param {Array} grids X grid lines will be replaced with this argument. The format of this argument is the same as grid.x.lines.
 * @returns {Array}
 * @example
 *  // Show 2 x grid lines
 * chart.xgrids([
 *    {value: 1, text: "Label 1"},
 *    {value: 4, text: "Label 4"}
 * ]);
 * // --> Returns: [{value: 1, text: "Label 1"}, {value: 4, text: "Label 4"}]
 */
const xgrids = function (grids) {
  return grid.bind(this)(grids, "x");
};
extend(xgrids, {
  /**
   * Add x grid lines.<br>
   * This API adds new x grid lines instead of replacing like xgrids.
   * @function xgrids․add
   * @instance
   * @memberof Chart
   * @param {Array|object} grids New x grid lines will be added. The format of this argument is the same as grid.x.lines and it's possible to give an Object if only one line will be added.
   * @returns {Array}
   * @example
   *  // Add a new x grid line
   * chart.xgrids.add(
   *   {value: 4, text: "Label 4"}
   * );
   *
   * // Add new x grid lines
   * chart.xgrids.add([
   *   {value: 2, text: "Label 2"},
   *   {value: 4, text: "Label 4"}
   * ]);
   */
  add: function add(grids) {
    return _add.bind(this)(grids, "x");
  },
  /**
   * Remove x grid lines.<br>
   * This API removes x grid lines.
   * @function xgrids․remove
   * @instance
   * @memberof Chart
   * @param {object} grids This argument should include value or class. If value is given, the x grid lines that have specified x value will be removed. If class is given, the x grid lines that have specified class will be removed. If args is not given, all of x grid lines will be removed.
   * @param {number} [grids.value] target value
   * @param {string} [grids.class] target class
   * @returns {void}
   * @example
   * // x grid line on x = 2 will be removed
   * chart.xgrids.remove({value: 2});
   *
   * // x grid lines that have 'grid-A' will be removed
   * chart.xgrids.remove({
   *   class: "grid-A"
   * });
   *
   * // all of x grid lines will be removed
   * chart.xgrids.remove();
   */
  remove: function remove(grids) {
    // TODO: multiple
    return _remove.bind(this)(grids, !0);
  }
});

/**
 * Update y grid lines.
 * @function ygrids
 * @instance
 * @memberof Chart
 * @param {Array} grids Y grid lines will be replaced with this argument. The format of this argument is the same as grid.y.lines.
 * @returns {object}
 * @example
 *  // Show 2 y grid lines
 * chart.ygrids([
 *    {value: 100, text: "Label 1"},
 *    {value: 400, text: "Label 4"}
 * ]);
 * // --> Returns: [{value: 100, text: "Label 1"}, {value: 400, text: "Label 4"}]
 */
const ygrids = function (grids) {
  return grid.bind(this)(grids, "y");
};
extend(ygrids, {
  /**
   * Add y grid lines.<br>
   * This API adds new y grid lines instead of replacing like ygrids.
   * @function ygrids․add
   * @instance
   * @memberof Chart
   * @param {Array|object} grids New y grid lines will be added. The format of this argument is the same as grid.y.lines and it's possible to give an Object if only one line will be added.
   * @returns {object}
   * @example
   *  // Add a new x grid line
   * chart.ygrids.add(
   *   {value: 400, text: "Label 4"}
   * );
   *
   * // Add new x grid lines
   * chart.ygrids.add([
   *   {value: 200, text: "Label 2"},
   *   {value: 400, text: "Label 4"}
   * ]);
   */
  add: function add(grids) {
    return _add.bind(this)(grids, "y");
  },
  /**
   * Remove y grid lines.<br>
   * This API removes x grid lines.
   * @function ygrids․remove
   * @instance
   * @memberof Chart
   * @param {object} grids This argument should include value or class. If value is given, the y grid lines that have specified y value will be removed. If class is given, the y grid lines that have specified class will be removed. If args is not given, all of y grid lines will be removed.
   * @param {number} [grids.value] target value
   * @param {string} [grids.class] target class
   * @returns {void}
   * @example
   * // y grid line on y = 200 will be removed
   * chart.ygrids.remove({value: 200});
   *
   * // y grid lines that have 'grid-A' will be removed
   * chart.ygrids.remove({
   *   class: "grid-A"
   * });
   *
   * // all of y grid lines will be removed
   * chart.ygrids.remove();
   */
  remove: function remove(grids) {
    // TODO: multiple
    return _remove.bind(this)(grids, !1);
  }
});
/* harmony default export */ var api_grid = ({
  xgrids: xgrids,
  ygrids: ygrids
});
;// CONCATENATED MODULE: ./src/Chart/api/group.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var group = ({
  /**
   * Update groups for the targets.
   * @function groups
   * @instance
   * @memberof Chart
   * @param {Array} groups This argument needs to be an Array that includes one or more Array that includes target ids to be grouped.
   * @returns {Array} Grouped data names array
   * @example
   *  // data1 and data2 will be a new group.
   *  chart.groups([
   *     ["data1", "data2"]
   *  ]);
   */
  groups: function groups(_groups) {
    const $$ = this.internal,
      config = $$.config;
    if (isUndefined(_groups)) {
      return config.data_groups;
    }
    config.data_groups = _groups;
    $$.redraw();
    return config.data_groups;
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/regions.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Region add/update function
 * @param {Array} regions Regions will be replaced with this argument. The format of this argument is the same as regions.
 * @param {boolean} isAdd If true, add new regions, otherwise update regions
 * @returns {Array} regions
 * @private
 */
function regionsFn(regions, isAdd) {
  if (isAdd === void 0) {
    isAdd = !1;
  }
  const $$ = this.internal,
    config = $$.config,
    withTransition = config.transition_duration && isTabVisible();
  if (!regions) {
    return config.regions;
  }
  config.regions = isAdd ? config.regions.concat(regions) : regions;
  $$.updateRegion();
  $$.redrawRegion(withTransition);
  return isAdd ? config.regions : regions;
}

/**
 * Update regions.
 * @function regions
 * @instance
 * @memberof Chart
 * @param {Array} regions Regions will be replaced with this argument. The format of this argument is the same as regions.
 * @returns {Array} regions
 * @example
 * // Show 2 regions
 * chart.regions([
 *    {axis: "x", start: 5, class: "regionX"},
 *    {axis: "y", end: 50, class: "regionY"}
 * ]);
 */
const regions = function (_regions) {
  return regionsFn.bind(this)(_regions);
};
extend(regions, {
  /**
   * Add new region.<br><br>
   * This API adds new region instead of replacing like regions.
   * @function regions․add
   * @instance
   * @memberof Chart
   * @param {Array|object} regions New region will be added. The format of this argument is the same as regions and it's possible to give an Object if only one region will be added.
   * @returns {Array} regions
   * @example
   * // Add a new region
   * chart.regions.add(
   *    {axis: "x", start: 5, class: "regionX"}
   * );
   *
   * // Add new regions
   * chart.regions.add([
   *    {axis: "x", start: 5, class: "regionX"},
   *    {axis: "y", end: 50, class: "regionY"}
   *]);
   */
  add: function add(regions) {
    return regionsFn.bind(this)(regions, !0);
  },
  /**
   * Remove regions.<br><br>
   * This API removes regions.
   * @function regions․remove
   * @instance
   * @memberof Chart
   * @param {object} optionsValue This argument should include classes. If classes is given, the regions that have one of the specified classes will be removed. If args is not given, all of regions will be removed.
   * @returns {Array} regions Removed regions
   * @example
   * // regions that have 'region-A' or 'region-B' will be removed.
   * chart.regions.remove({
   *   classes: [
   *     "region-A", "region-B"
   *   ]
   * });
   *
   * // all of regions will be removed.
   * chart.regions.remove();
   */
  remove: function remove(optionsValue) {
    var _this = this;
    const $$ = this.internal,
      config = $$.config,
      $T = $$.$T,
      options = optionsValue || {},
      classes = getOption(options, "classes", [$REGION.region]);
    let regions = $$.$el.main.select("." + $REGION.regions).selectAll(classes.map(function (c) {
      _newArrowCheck(this, _this);
      return "." + c;
    }.bind(this)));
    $T(regions).style("opacity", "0").remove();
    regions = config.regions;
    if (Object.keys(options).length) {
      regions = regions.filter(function (region) {
        var _this2 = this;
        _newArrowCheck(this, _this);
        let found = !1;
        if (!region.class) {
          return !0;
        }
        region.class.split(" ").forEach(function (c) {
          _newArrowCheck(this, _this2);
          if (classes.indexOf(c) >= 0) {
            found = !0;
          }
        }.bind(this));
        return !found;
      }.bind(this));
      config.regions = regions;
    } else {
      config.regions = [];
    }
    return regions;
  }
});
/* harmony default export */ var api_regions = ({
  regions: regions
});
;// CONCATENATED MODULE: ./src/Chart/api/x.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var x = ({
  /**
   * Get and set x values for the chart.
   * @function x
   * @instance
   * @memberof Chart
   * @param {Array} x If x is given, x values of every target will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
   * @returns {object} xs
   * @example
   *  // Get current x values
   *  chart.x();
   *
   *  // Update x values for all targets
   *  chart.x([100, 200, 300, 400, ...]);
   */
  x: function x(_x) {
    const $$ = this.internal,
      axis = $$.axis,
      data = $$.data,
      isCategorized = axis.isCustomX() && axis.isCategorized();
    if (isArray(_x)) {
      if (isCategorized) {
        this.categories(_x);
      } else {
        $$.updateTargetX(data.targets, _x);
        $$.redraw({
          withUpdateOrgXDomain: !0,
          withUpdateXDomain: !0
        });
      }
    }
    return isCategorized ? this.categories() : data.xs;
  },
  /**
   * Get and set x values for the chart.
   * @function xs
   * @instance
   * @memberof Chart
   * @param {Array} xs If xs is given, specified target's x values will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
   * @returns {object} xs
   * @example
   *  // Get current x values
   *  chart.xs();
   *
   *  // Update x values for all targets
   *  chart.xs({
   *    data1: [10, 20, 30, 40, ...],
   *    data2: [100, 200, 300, 400, ...]
   *  });
   */
  xs: function xs(_xs) {
    const $$ = this.internal;
    if (isObject(_xs)) {
      $$.updateTargetXs($$.data.targets, _xs);
      $$.redraw({
        withUpdateOrgXDomain: !0,
        withUpdateXDomain: !0
      });
    }
    return $$.data.xs;
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/flow.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var flow = ({
  /**
   * Flow data to the chart.<br><br>
   * By this API, you can append new data points to the chart.
   * @function flow
   * @instance
   * @memberof Chart
   * @param {object} args The object can consist with following members:<br>
   *
   *    | Key | Type | Description |
   *    | --- | --- | --- |
   *    | json | Object | Data as JSON format (@see [data․json](Options.html#.data%25E2%2580%25A4json)) |
   *    | rows | Array | Data in array as row format (@see [data․rows](Options.html#.data%25E2%2580%25A4json)) |
   *    | columns | Array | Data in array as column format (@see [data․columns](Options.html#.data%25E2%2580%25A4columns)) |
   *    | to | String | The lower x edge will move to that point. If not given, the lower x edge will move by the number of given data points |
   *    | length | Number | The lower x edge will move by the number of this argument |
   *    | duration | Number | The duration of the transition will be specified value. If not given, transition.duration will be used as default |
   *    | done | Function | The specified function will be called when flow ends |
   *
   * - **NOTE:**
   *   - If json, rows and columns given, the data will be loaded.
   *   - If data that has the same target id is given, the chart will be appended.
   *   - Otherwise, new target will be added. One of these is required when calling.
   *   - If json specified, keys is required as well as data.json.
   * 	 - If tab isn't visible(by evaluating `document.hidden`), will not be executed to prevent unnecessary work.
   * @example
   * // 2 data points will be apprended to the tail and popped from the head.
   * // After that, 4 data points will be appended and no data points will be poppoed.
   * chart.flow({
   *  columns: [
   *    ["x", "2018-01-11", "2018-01-21"],
   *    ["data1", 500, 200],
   *    ["data2", 100, 300],
   *    ["data3", 200, 120]
   *  ],
   *  to: "2013-01-11",
   *  done: function () {
   *    chart.flow({
   *      columns: [
   *        ["x", "2018-02-11", "2018-02-12", "2018-02-13", "2018-02-14"],
   *        ["data1", 200, 300, 100, 250],
   *        ["data2", 100, 90, 40, 120],
   *        ["data3", 100, 100, 300, 500]
   *      ],
   *      length: 2,
   *      duration: 1500
   *    });
   *  }
   * });
   */
  flow: function flow(args) {
    var _this = this;
    const $$ = this.internal;
    let data;
    if (args.json || args.rows || args.columns) {
      $$.convertData(args, function (res) {
        _newArrowCheck(this, _this);
        data = res;
        _();
      }.bind(this));
    }

    /**
     * Process flows
     * @private
     */
    function _() {
      var _this2 = this;
      let domain,
        length = 0,
        tail = 0,
        diff,
        to;
      if ($$.state.redrawing || !data || !isTabVisible()) {
        return;
      }
      const notfoundIds = [],
        orgDataCount = $$.getMaxDataCount(),
        targets = $$.convertDataToTargets(data, !0),
        isTimeSeries = $$.axis.isTimeSeries();
      // Update/Add data
      $$.data.targets.forEach(function (t) {
        _newArrowCheck(this, _this2);
        let found = !1;
        for (let i = 0; i < targets.length; i++) {
          if (t.id === targets[i].id) {
            found = !0;
            if (t.values[t.values.length - 1]) {
              tail = t.values[t.values.length - 1].index + 1;
            }
            length = targets[i].values.length;
            for (let j = 0; j < length; j++) {
              targets[i].values[j].index = tail + j;
              if (!isTimeSeries) {
                targets[i].values[j].x = tail + j;
              }
            }
            t.values = t.values.concat(targets[i].values);
            targets.splice(i, 1);
            break;
          }
        }
        found || notfoundIds.push(t.id);
      }.bind(this));

      // Append null for not found targets
      $$.data.targets.forEach(function (t) {
        _newArrowCheck(this, _this2);
        for (let i = 0; i < notfoundIds.length; i++) {
          if (t.id === notfoundIds[i]) {
            tail = t.values[t.values.length - 1].index + 1;
            for (let j = 0; j < length; j++) {
              t.values.push({
                id: t.id,
                index: tail + j,
                x: isTimeSeries ? $$.getOtherTargetX(tail + j) : tail + j,
                value: null
              });
            }
          }
        }
      }.bind(this));

      // Generate null values for new target
      if ($$.data.targets.length) {
        targets.forEach(function (t) {
          var _this3 = this;
          _newArrowCheck(this, _this2);
          const missing = [];
          for (let i = $$.data.targets[0].values[0].index; i < tail; i++) {
            missing.push({
              id: t.id,
              index: i,
              x: isTimeSeries ? $$.getOtherTargetX(i) : i,
              value: null
            });
          }
          t.values.forEach(function (v) {
            _newArrowCheck(this, _this3);
            v.index += tail;
            if (!isTimeSeries) {
              v.x += tail;
            }
          }.bind(this));
          t.values = missing.concat(t.values);
        }.bind(this));
      }
      $$.data.targets = $$.data.targets.concat(targets); // add remained

      // check data count because behavior needs to change when it"s only one
      // const dataCount = $$.getMaxDataCount();
      const baseTarget = $$.data.targets[0],
        baseValue = baseTarget.values[0];
      // Update length to flow if needed
      if (isDefined(args.to)) {
        length = 0;
        to = isTimeSeries ? parseDate.call($$, args.to) : args.to;
        baseTarget.values.forEach(function (v) {
          _newArrowCheck(this, _this2);
          v.x < to && length++;
        }.bind(this));
      } else if (isDefined(args.length)) {
        length = args.length;
      }

      // If only one data, update the domain to flow from left edge of the chart
      if (!orgDataCount) {
        if (isTimeSeries) {
          diff = baseTarget.values.length > 1 ? baseTarget.values[baseTarget.values.length - 1].x - baseValue.x : baseValue.x - $$.getXDomain($$.data.targets)[0];
        } else {
          diff = 1;
        }
        domain = [baseValue.x - diff, baseValue.x];
      } else if (orgDataCount === 1 && isTimeSeries) {
        diff = (baseTarget.values[baseTarget.values.length - 1].x - baseValue.x) / 2;
        domain = [new Date(+baseValue.x - diff), new Date(+baseValue.x + diff)];
      }
      domain && $$.updateXDomain(null, !0, !0, !1, domain);

      // Set targets
      $$.updateTargets($$.data.targets);

      // Redraw with new targets
      $$.redraw({
        flow: {
          index: baseValue.index,
          length: length,
          duration: isValue(args.duration) ? args.duration : $$.config.transition_duration,
          done: args.done,
          orgDataCount: orgDataCount
        },
        withLegend: !0,
        withTransition: orgDataCount > 1,
        withTrimXDomain: !1,
        withUpdateXAxis: !0
      });
    }
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-axis","commonjs2":"d3-axis","amd":"d3-axis","root":"d3"}
var external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_ = __webpack_require__(10);
;// CONCATENATED MODULE: ./src/ChartInternal/Axis/AxisRendererHelper.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * @ignore
 */


let AxisRendererHelper = /*#__PURE__*/function () {
  function AxisRendererHelper(owner) {
    this.owner = void 0;
    this.config = void 0;
    this.scale = void 0;
    const scale = getScale(),
      config = owner.config,
      params = owner.params;
    this.owner = owner;
    this.config = config;
    this.scale = scale;
    if (config.noTransition || !params.config.transition_duration) {
      config.withoutTransition = !0;
    }

    // set range
    config.range = this.scaleExtent((params.orgXScale || scale).range());
  }

  /**
   * Compute a character dimension
   * @param {d3.selection} node <g class=tick> node
   * @returns {{w: number, h: number}}
   * @private
   */
  AxisRendererHelper.getSizeFor1Char = function getSizeFor1Char(node) {
    var _this = this;
    // default size for one character
    const size = {
      w: 5.5,
      h: 11.5
    };
    node.empty() || node.select("text").text("0").call(function (el) {
      _newArrowCheck(this, _this);
      try {
        const _el$node$getBBox = el.node().getBBox(),
          width = _el$node$getBBox.width,
          height = _el$node$getBBox.height;
        if (width && height) {
          size.w = width;
          size.h = height;
        }
      } catch (e) {} finally {
        el.text("");
      }
    }.bind(this));
    this.getSizeFor1Char = function () {
      _newArrowCheck(this, _this);
      return size;
    }.bind(this);
    return size;
  }

  /**
   * Get tick transform setter function
   * @param {string} id Axis id
   * @returns {Function} transfrom setter function
   * @private
   */;
  var _proto = AxisRendererHelper.prototype;
  _proto.getTickTransformSetter = function getTickTransformSetter(id) {
    var _this2 = this;
    const config = this.config,
      fn = id === "x" ? function (value) {
        _newArrowCheck(this, _this2);
        return "translate(" + (value + config.tickOffset) + ",0)";
      }.bind(this) : function (value) {
        _newArrowCheck(this, _this2);
        return "translate(0," + value + ")";
      }.bind(this);
    return function (selection, scale) {
      var _this3 = this;
      _newArrowCheck(this, _this2);
      selection.attr("transform", function (d) {
        _newArrowCheck(this, _this3);
        return isValue(d) ? fn(Math.ceil(scale(d))) : null;
      }.bind(this));
    }.bind(this);
  };
  _proto.scaleExtent = function scaleExtent(domain) {
    const start = domain[0],
      stop = domain[domain.length - 1];
    return start < stop ? [start, stop] : [stop, start];
  };
  _proto.generateTicks = function generateTicks(scale, isYAxes) {
    var _this4 = this;
    const tickStepSize = this.owner.params.tickStepSize,
      _scale$domain = scale.domain(),
      start = _scale$domain[0],
      end = _scale$domain[1];
    let ticks = [];

    // When 'axis[y|y2].tick.stepSize' option is set
    if (isYAxes && tickStepSize) {
      let interval = Math.round(start);
      while (interval <= end) {
        ticks.push(interval);
        interval += tickStepSize;
      }
    } else if (scale.ticks) {
      const tickArguments = this.config.tickArguments;

      // adjust excessive tick count show
      if (scale.type === "log" && !tickArguments) {
        // nicer symlog ticks didn't implemented yet: https://github.com/d3/d3-scale/issues/162
        // get ticks values from logScale
        const s = getScale("_log").domain([start > 0 ? start : 1, end]).range(scale.range());
        ticks = s.ticks();
        for (let cnt = end.toFixed().length; ticks.length > 15; cnt--) {
          ticks = s.ticks(cnt);
        }
        ticks.splice(0, 1, start);
        ticks.splice(ticks.length - 1, 1, end);
      } else {
        ticks = scale.ticks.apply(scale, this.config.tickArguments || []);
      }
      ticks = ticks.map(function (v) {
        _newArrowCheck(this, _this4);
        // round the tick value if is number
        const r = isString(v) && isNumber(v) && !isNaN(v) && Math.round(v * 10) / 10 || v;
        return r;
      }.bind(this));
    }
    return ticks;
  };
  _proto.copyScale = function copyScale() {
    const newScale = this.scale.copy();
    if (!newScale.domain().length) {
      newScale.domain(this.scale.domain());
    }
    newScale.type = this.scale.type;
    return newScale;
  };
  _proto.textFormatted = function textFormatted(v) {
    const tickFormat = this.config.tickFormat,
      value = /\d+\.\d+0{5,}\d$/.test(v) ? +(v + "").replace(/0+\d$/, "") : v,
      formatted = tickFormat ? tickFormat(value) : value; // to round float numbers from 'binary floating point'
    // https://en.wikipedia.org/wiki/Double-precision_floating-point_format
    // https://stackoverflow.com/questions/17849101/laymans-explanation-for-why-javascript-has-weird-floating-math-ieee-754-stand
    return isDefined(formatted) ? formatted : "";
  };
  _proto.transitionise = function transitionise(selection) {
    const config = this.config;
    let transitionSelection = selection;
    if (config.withoutTransition) {
      transitionSelection = selection.interrupt();
    } else if (config.transition || !this.owner.params.noTransition) {
      // prevent for 'transition not found' case
      // https://github.com/naver/billboard.js/issues/2140
      try {
        transitionSelection = selection.transition(config.transition);
      } catch (e) {}
    }
    return transitionSelection;
  };
  return AxisRendererHelper;
}();

;// CONCATENATED MODULE: ./src/ChartInternal/Axis/AxisRenderer.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * @ignore
 */



let AxisRenderer = /*#__PURE__*/function () {
  function AxisRenderer(params) {
    if (params === void 0) {
      params = {};
    }
    this.helper = void 0;
    this.config = void 0;
    this.params = void 0;
    this.g = void 0;
    this.generatedTicks = void 0;
    const config = {
      innerTickSize: 6,
      outerTickSize: params.outerTick ? 6 : 0,
      orient: "bottom",
      range: [],
      tickArguments: null,
      tickCentered: null,
      tickCulling: !0,
      tickFormat: null,
      tickLength: 9,
      tickOffset: 0,
      tickPadding: 3,
      tickValues: null,
      transition: null,
      noTransition: params.noTransition
    };
    config.tickLength = Math.max(config.innerTickSize, 0) + config.tickPadding;
    this.config = config;
    this.params = params;
    this.helper = new AxisRendererHelper(this);
  }

  /**
   * Create axis element
   * @param {d3.selection} g Axis selection
   * @private
   */
  var _proto = AxisRenderer.prototype;
  _proto.create = function create(g) {
    const ctx = this,
      config = ctx.config,
      helper = ctx.helper,
      params = ctx.params,
      scale = helper.scale,
      orient = config.orient,
      splitTickText = this.splitTickText.bind(ctx),
      isLeftRight = /^(left|right)$/.test(orient),
      isTopBottom = /^(top|bottom)$/.test(orient),
      tickTransform = helper.getTickTransformSetter(isTopBottom ? "x" : "y"),
      axisPx = tickTransform === helper.axisX ? "y" : "x",
      sign = /^(top|left)$/.test(orient) ? -1 : 1,
      rotate = params.tickTextRotate;

    // line/text enter and path update

    // tick text helpers

    this.config.range = scale.rangeExtent ? scale.rangeExtent() : helper.scaleExtent((params.orgXScale || scale).range());
    const innerTickSize = config.innerTickSize,
      tickLength = config.tickLength,
      range = config.range,
      id = params.id,
      tickTextPos = id && /^(x|y|y2)$/.test(id) ? params.config["axis_" + id + "_tick_text_position"] : {
        x: 0,
        y: 0
      },
      prefix = id === "subX" ? "subchart_axis_x" : "axis_" + id,
      axisShow = params.config[prefix + "_show"],
      tickShow = {
        tick: axisShow ? params.config[prefix + "_tick_show"] : !1,
        text: axisShow ? params.config[prefix + "_tick_text_show"] : !1
      }; // // get the axis' tick position configuration
    // tick visiblity
    let $g;
    g.each(function () {
      var _this = this;
      const g = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
      let scale0 = this.__chart__ || scale,
        scale1 = helper.copyScale();
      $g = g;
      this.__chart__ = scale1;
      config.tickOffset = params.isCategory ? Math.ceil((scale1(1) - scale1(0)) / 2) : 0;

      // update selection - data join
      const path = g.selectAll(".domain").data([0]);

      // enter + update selection
      path.enter().append("path").attr("class", "domain")
      // https://observablehq.com/@d3/d3-selection-2-0
      .merge(path).attr("d", function () {
        _newArrowCheck(this, _this);
        const outerTickSized = config.outerTickSize * sign;
        return isTopBottom ? "M" + range[0] + "," + outerTickSized + "V0H" + range[1] + "V" + outerTickSized : "M" + outerTickSized + "," + range[0] + "H0V" + range[1] + "H" + outerTickSized;
      }.bind(this));
      if (tickShow.tick || tickShow.text) {
        // count of tick data in array
        const ticks = config.tickValues || helper.generateTicks(scale1, isLeftRight);

        // set generated ticks
        ctx.generatedTicks = ticks;

        // update selection
        let tick = g.selectAll(".tick").data(ticks, scale1);

        // enter selection
        const tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick"),
          tickExit = tick.exit().remove(); // MEMO: No exit transition. The reason is this transition affects max tick width calculation because old tick will be included in the ticks.
        // enter + update selection
        tick = tickEnter.merge(tick);
        tickShow.tick && tickEnter.append("line");
        tickShow.text && tickEnter.append("text");
        const sizeFor1Char = AxisRendererHelper.getSizeFor1Char(tick),
          counts = [];
        let tspan = tick.select("text").selectAll("tspan").data(function (d, index) {
          var _this2 = this;
          _newArrowCheck(this, _this);
          const split = params.tickMultiline ? splitTickText(d, scale1, ticks, isLeftRight, sizeFor1Char.w) : isArray(helper.textFormatted(d)) ? helper.textFormatted(d).concat() : [helper.textFormatted(d)];
          counts[index] = split.length;
          return split.map(function (splitted) {
            _newArrowCheck(this, _this2);
            return {
              index: index,
              splitted: splitted
            };
          }.bind(this));
        }.bind(this));
        tspan.exit().remove();
        tspan = tspan.enter().append("tspan").merge(tspan).text(function (d) {
          _newArrowCheck(this, _this);
          return d.splitted;
        }.bind(this));

        // set <tspan>'s position
        tspan.attr("x", isTopBottom ? 0 : tickLength * sign).attr("dx", function () {
          _newArrowCheck(this, _this);
          let dx = 0;
          if (/(top|bottom)/.test(orient) && rotate) {
            dx = 8 * Math.sin(Math.PI * (rotate / 180)) * (orient === "top" ? -1 : 1);
          }
          return dx + (tickTextPos.x || 0);
        }.bind(this)()).attr("dy", function (d, i) {
          _newArrowCheck(this, _this);
          let dy = 0;
          if (orient !== "top") {
            dy = sizeFor1Char.h;
            if (i === 0) {
              dy = isLeftRight ? -((counts[d.index] - 1) * (sizeFor1Char.h / 2) - 3) : tickTextPos.y === 0 ? ".71em" : 0;
            }
          }
          return isNumber(dy) && tickTextPos.y ? dy + tickTextPos.y : dy || ".71em";
        }.bind(this));
        const lineUpdate = tick.select("line"),
          textUpdate = tick.select("text");
        tickEnter.select("line").attr(axisPx + "2", innerTickSize * sign);
        tickEnter.select("text").attr(axisPx, tickLength * sign);
        ctx.setTickLineTextPosition(lineUpdate, textUpdate);

        // Append <title> for tooltip display
        if (params.tickTitle) {
          const title = textUpdate.select("title");
          (title.empty() ? textUpdate.append("title") : title).text(function (index) {
            _newArrowCheck(this, _this);
            return params.tickTitle[index];
          }.bind(this));
        }
        if (scale1.bandwidth) {
          const x = scale1,
            dx = x.bandwidth() / 2;
          scale0 = function (d) {
            _newArrowCheck(this, _this);
            return x(d) + dx;
          }.bind(this);
          scale1 = scale0;
        } else if (scale0.bandwidth) {
          scale0 = scale1;
        } else {
          tickTransform(tickExit, scale1);
        }

        // when .flow(), it should follow flow's transition config
        // otherwise make to use ChartInternals.$T()
        tick = params.owner.state.flowing ? helper.transitionise(tick) : params.owner.$T(tick);
        tickTransform(tickEnter, scale0);
        tickTransform(tick.style("opacity", null), scale1);
      }
    });
    this.g = $g;
  }

  /**
   * Get generated ticks
   * @param {number} count Count of ticks
   * @returns {Array} Generated ticks
   * @private
   */;
  _proto.getGeneratedTicks = function getGeneratedTicks(count) {
    var _this$generatedTicks,
      _this3 = this;
    const len = ((_this$generatedTicks = this.generatedTicks) == null ? void 0 : _this$generatedTicks.length) - 1;
    let res = this.generatedTicks;
    if (len > count) {
      const interval = Math.round(len / count + .1);
      res = this.generatedTicks.map(function (v, i) {
        _newArrowCheck(this, _this3);
        return i % interval === 0 ? v : null;
      }.bind(this)).filter(function (v) {
        _newArrowCheck(this, _this3);
        return v !== null;
      }.bind(this)).splice(0, count);
    }
    return res;
  }

  /**
   * Get tick x/y coordinate
   * @returns {{x: number, y: number}}
   * @private
   */;
  _proto.getTickXY = function getTickXY() {
    const config = this.config,
      pos = {
        x: 0,
        y: 0
      };
    if (this.params.isCategory) {
      pos.x = config.tickCentered ? 0 : config.tickOffset;
      pos.y = config.tickCentered ? config.tickOffset : 0;
    }
    return pos;
  }

  /**
   * Get tick size
   * @param {object} d data object
   * @returns {number}
   * @private
   */;
  _proto.getTickSize = function getTickSize(d) {
    const scale = this.helper.scale,
      config = this.config,
      _config2 = config,
      innerTickSize = _config2.innerTickSize,
      range = _config2.range,
      tickPosition = scale(d) + (config.tickCentered ? 0 : config.tickOffset);
    return range[0] < tickPosition && tickPosition < range[1] ? innerTickSize : 0;
  }

  /**
   * Set tick's line & text position
   * @param {d3.selection} lineUpdate Line selection
   * @param {d3.selection} textUpdate Text selection
   * @private
   */;
  _proto.setTickLineTextPosition = function setTickLineTextPosition(lineUpdate, textUpdate) {
    var _this4 = this;
    const tickPos = this.getTickXY(),
      _this$config = this.config,
      innerTickSize = _this$config.innerTickSize,
      orient = _this$config.orient,
      tickLength = _this$config.tickLength,
      tickOffset = _this$config.tickOffset,
      rotate = this.params.tickTextRotate,
      textAnchorForText = function (r) {
        _newArrowCheck(this, _this4);
        const value = ["start", "end"];
        orient === "top" && value.reverse();
        return !r ? "middle" : value[r > 0 ? 0 : 1];
      }.bind(this),
      textTransform = function (r) {
        _newArrowCheck(this, _this4);
        return r ? "rotate(" + r + ")" : null;
      }.bind(this),
      yForText = function (r) {
        _newArrowCheck(this, _this4);
        const r2 = r / (orient === "bottom" ? 15 : 23);
        return r ? 11.5 - 2.5 * r2 * (r > 0 ? 1 : -1) : tickLength;
      }.bind(this);
    switch (orient) {
      case "bottom":
        lineUpdate.attr("x1", tickPos.x).attr("x2", tickPos.x).attr("y2", this.getTickSize.bind(this));
        textUpdate.attr("x", 0).attr("y", yForText(rotate)).style("text-anchor", textAnchorForText(rotate)).attr("transform", textTransform(rotate));
        break;
      case "top":
        lineUpdate.attr("x2", 0).attr("y2", -innerTickSize);
        textUpdate.attr("x", 0).attr("y", -yForText(rotate) * 2).style("text-anchor", textAnchorForText(rotate)).attr("transform", textTransform(rotate));
        break;
      case "left":
        lineUpdate.attr("x2", -innerTickSize).attr("y1", tickPos.y).attr("y2", tickPos.y);
        textUpdate.attr("x", -tickLength).attr("y", tickOffset).style("text-anchor", "end");
        break;
      case "right":
        lineUpdate.attr("x2", innerTickSize).attr("y2", 0);
        textUpdate.attr("x", tickLength).attr("y", 0).style("text-anchor", "start");
    }
  }

  // this should be called only when category axis
  ;
  _proto.splitTickText = function splitTickText(d, scale, ticks, isLeftRight, charWidth) {
    const params = this.params,
      tickText = this.helper.textFormatted(d),
      splitted = isString(tickText) && tickText.indexOf("\n") > -1 ? tickText.split("\n") : [];
    if (splitted.length) {
      return splitted;
    }
    if (isArray(tickText)) {
      return tickText;
    }
    let tickWidth = params.tickWidth;
    if (!tickWidth || tickWidth <= 0) {
      tickWidth = isLeftRight ? 95 : params.isCategory ? Math.ceil(params.isInverted ? scale(ticks[0]) - scale(ticks[1]) : scale(ticks[1]) - scale(ticks[0])) - 12 : 110;
    }

    // split given text by tick width size
    // eslint-disable-next-line
    function split(splitted, text) {
      let subtext, spaceIndex, textWidth;
      for (let i = 1; i < text.length; i++) {
        if (text.charAt(i) === " ") {
          spaceIndex = i;
        }
        subtext = text.substr(0, i + 1);
        textWidth = charWidth * subtext.length;

        // if text width gets over tick width, split by space index or current index
        if (tickWidth < textWidth) {
          return split(splitted.concat(text.substr(0, spaceIndex || i)), text.slice(spaceIndex ? spaceIndex + 1 : i));
        }
      }
      return splitted.concat(text);
    }
    return split(splitted, tickText + "");
  };
  _proto.scale = function scale(x) {
    if (!arguments.length) {
      return this.helper.scale;
    }
    this.helper.scale = x;
    return this;
  };
  _proto.orient = function orient(x) {
    if (!arguments.length) {
      return this.config.orient;
    }
    this.config.orient = x in {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    } ? x + "" : "bottom";
    return this;
  };
  _proto.tickFormat = function tickFormat(format) {
    const config = this.config;
    if (!arguments.length) {
      return config.tickFormat;
    }
    config.tickFormat = format;
    return this;
  };
  _proto.tickCentered = function tickCentered(isCentered) {
    const config = this.config;
    if (!arguments.length) {
      return config.tickCentered;
    }
    config.tickCentered = isCentered;
    return this;
  }

  /**
   * Return tick's offset value.
   * The value will be set for 'category' axis type.
   * @returns {number}
   * @private
   */;
  _proto.tickOffset = function tickOffset() {
    return this.config.tickOffset;
  }

  /**
   * Get tick interval count
   * @private
   * @param {number} size Total data size
   * @returns {number}
   */;
  _proto.tickInterval = function tickInterval(size) {
    var _this5 = this;
    const _this$config2 = this.config,
      outerTickSize = _this$config2.outerTickSize,
      tickOffset = _this$config2.tickOffset,
      tickValues = _this$config2.tickValues;
    let interval;
    if (this.params.isCategory) {
      interval = tickOffset * 2;
    } else {
      const length = this.g.select("path.domain").node().getTotalLength() - outerTickSize * 2;
      interval = length / (size || this.g.selectAll("line").size());

      // get the interval by its values
      const intervalByValue = tickValues ? tickValues.map(function (v, i, arr) {
        _newArrowCheck(this, _this5);
        const next = i + 1;
        return next < arr.length ? this.helper.scale(arr[next]) - this.helper.scale(v) : null;
      }.bind(this)).filter(Boolean) : [];
      interval = Math.min.apply(Math, intervalByValue.concat([interval]));
    }
    return interval === Infinity ? 0 : interval;
  };
  _proto.ticks = function ticks() {
    const config = this.config;
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!args.length) {
      return config.tickArguments;
    }
    config.tickArguments = toArray(args);
    return this;
  };
  _proto.tickCulling = function tickCulling(culling) {
    const config = this.config;
    if (!arguments.length) {
      return config.tickCulling;
    }
    config.tickCulling = culling;
    return this;
  };
  _proto.tickValues = function tickValues(x) {
    var _this6 = this;
    const config = this.config;
    if (isFunction(x)) {
      config.tickValues = function () {
        _newArrowCheck(this, _this6);
        return x(this.helper.scale.domain());
      }.bind(this);
    } else {
      if (!arguments.length) {
        return config.tickValues;
      }
      config.tickValues = x;
    }
    return this;
  };
  _proto.setTransition = function setTransition(t) {
    this.config.transition = t;
    return this;
  };
  return AxisRenderer;
}();

;// CONCATENATED MODULE: ./src/ChartInternal/Axis/Axis.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */





/* harmony default export */ var Axis = ({
  getAxisInstance: function getAxisInstance() {
    return this.axis || new Axis_Axis(this);
  }
});
let Axis_Axis = /*#__PURE__*/function () {
  function Axis(owner) {
    this.owner = void 0;
    this.x = void 0;
    this.subX = void 0;
    this.y = void 0;
    this.y2 = void 0;
    this.axesList = {};
    this.tick = {
      x: null,
      y: null,
      y2: null
    };
    this.xs = [];
    this.orient = {
      x: "bottom",
      y: "left",
      y2: "right",
      subX: "bottom"
    };
    this.owner = owner;
    this.setOrient();
  }
  var _proto = Axis.prototype;
  _proto.getAxisClassName = function getAxisClassName(id) {
    return $AXIS.axis + " " + $AXIS["axis" + capitalize(id)];
  };
  _proto.isHorizontal = function isHorizontal($$, forHorizontal) {
    const isRotated = $$.config.axis_rotated;
    return forHorizontal ? isRotated : !isRotated;
  };
  _proto.isCategorized = function isCategorized() {
    const _this$owner = this.owner,
      config = _this$owner.config,
      state = _this$owner.state;
    return config.axis_x_type.indexOf("category") >= 0 || state.hasRadar;
  };
  _proto.isCustomX = function isCustomX() {
    const config = this.owner.config;
    return !this.isTimeSeries() && (config.data_x || notEmpty(config.data_xs));
  };
  _proto.isTimeSeries = function isTimeSeries(id) {
    if (id === void 0) {
      id = "x";
    }
    return this.owner.config["axis_" + id + "_type"] === "timeseries";
  };
  _proto.isLog = function isLog(id) {
    if (id === void 0) {
      id = "x";
    }
    return this.owner.config["axis_" + id + "_type"] === "log";
  };
  _proto.isTimeSeriesY = function isTimeSeriesY() {
    return this.isTimeSeries("y");
  };
  _proto.getAxisType = function getAxisType(id) {
    if (id === void 0) {
      id = "x";
    }
    let type = "linear";
    if (this.isTimeSeries(id)) {
      type = this.owner.config.axis_x_localtime ? "time" : "utc";
    } else if (this.isLog(id)) {
      type = "log";
    }
    return type;
  };
  _proto.init = function init() {
    var _this = this;
    const $$ = this.owner,
      config = $$.config,
      _$$$$el = $$.$el,
      main = _$$$$el.main,
      axis = _$$$$el.axis,
      clip = $$.state.clip,
      isRotated = config.axis_rotated,
      target = ["x", "y"];
    config.axis_y2_show && target.push("y2");
    target.forEach(function (v) {
      var _this2 = this;
      _newArrowCheck(this, _this);
      const classAxis = this.getAxisClassName(v),
        classLabel = $AXIS["axis" + v.toUpperCase() + "Label"];
      axis[v] = main.append("g").attr("class", classAxis).attr("clip-path", function () {
        _newArrowCheck(this, _this2);
        let res = null;
        if (v === "x") {
          res = clip.pathXAxis;
        } else if (v === "y") {
          // || v === "y2") {
          res = clip.pathYAxis;
        }
        return res;
      }.bind(this)).attr("transform", $$.getTranslate(v)).style("visibility", config["axis_" + v + "_show"] ? null : "hidden");
      axis[v].append("text").attr("class", classLabel).attr("transform", ["rotate(-90)", null][v === "x" ? +!isRotated : +isRotated]).style("text-anchor", function () {
        _newArrowCheck(this, _this2);
        return this.textAnchorForAxisLabel(v);
      }.bind(this));
      this.generateAxes(v);
    }.bind(this));
  }

  /**
   * Set axis orient according option value
   * @private
   */;
  _proto.setOrient = function setOrient() {
    const $$ = this.owner,
      _$$$config = $$.config,
      isRotated = _$$$config.axis_rotated,
      yInner = _$$$config.axis_y_inner,
      y2Inner = _$$$config.axis_y2_inner;
    this.orient = {
      x: isRotated ? "left" : "bottom",
      y: isRotated ? yInner ? "top" : "bottom" : yInner ? "right" : "left",
      y2: isRotated ? y2Inner ? "bottom" : "top" : y2Inner ? "left" : "right",
      subX: isRotated ? "left" : "bottom"
    };
  }

  /**
   * Generate axes
   * It's used when axis' axes option is set
   * @param {string} id Axis id
   * @private
   */;
  _proto.generateAxes = function generateAxes(id) {
    var _this3 = this;
    const $$ = this.owner,
      config = $$.config,
      axes = [],
      axesConfig = config["axis_" + id + "_axes"],
      isRotated = config.axis_rotated;
    let d3Axis;
    if (id === "x") {
      d3Axis = isRotated ? external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_.axisLeft : external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_.axisBottom;
    } else if (id === "y") {
      d3Axis = isRotated ? external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_.axisBottom : external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_.axisLeft;
    } else if (id === "y2") {
      d3Axis = isRotated ? external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_.axisTop : external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_.axisRight;
    }
    if (axesConfig.length) {
      axesConfig.forEach(function (v) {
        var _this4 = this;
        _newArrowCheck(this, _this3);
        const tick = v.tick || {},
          scale = $$.scale[id].copy();
        v.domain && scale.domain(v.domain);
        axes.push(d3Axis(scale).ticks(tick.count).tickFormat(isFunction(tick.format) ? tick.format.bind($$.api) : function (x) {
          _newArrowCheck(this, _this4);
          return x;
        }.bind(this)).tickValues(tick.values).tickSizeOuter(tick.outer === !1 ? 0 : 6));
      }.bind(this));
    }
    this.axesList[id] = axes;
  }

  /**
   * Update axes nodes
   * @private
   */;
  _proto.updateAxes = function updateAxes() {
    var _this5 = this;
    const $$ = this.owner,
      config = $$.config,
      main = $$.$el.main,
      $T = $$.$T;
    Object.keys(this.axesList).forEach(function (id) {
      var _this6 = this;
      _newArrowCheck(this, _this5);
      const axesConfig = config["axis_" + id + "_axes"],
        scale = $$.scale[id].copy(),
        range = scale.range();
      this.axesList[id].forEach(function (v, i) {
        var _this7 = this;
        _newArrowCheck(this, _this6);
        const axisRange = v.scale().range();

        // adjust range value with the current
        // https://github.com/naver/billboard.js/issues/859
        if (!range.every(function (v, i) {
          _newArrowCheck(this, _this7);
          return v === axisRange[i];
        }.bind(this))) {
          v.scale().range(range);
        }
        const className = this.getAxisClassName(id) + "-" + (i + 1);
        let g = main.select("." + className.replace(/\s/, "."));
        if (g.empty()) {
          g = main.append("g").attr("class", className).style("visibility", config["axis_" + id + "_show"] ? null : "hidden").call(v);
        } else {
          axesConfig[i].domain && scale.domain(axesConfig[i].domain);
          $T(g).call(v.scale(scale));
        }
        g.attr("transform", $$.getTranslate(id, i + 1));
      }.bind(this));
    }.bind(this));
  }

  /**
   * Set Axis & tick values
   * called from: updateScales()
   * @param {string} id Axis id string
   * @param {d3Scale} scale Scale
   * @param {boolean} outerTick If show outer tick
   * @param {boolean} noTransition If with no transition
   * @private
   */;
  _proto.setAxis = function setAxis(id, scale, outerTick, noTransition) {
    const $$ = this.owner;
    if (id !== "subX") {
      this.tick[id] = this.getTickValues(id);
    }

    // @ts-ignore
    this[id] = this.getAxis(id, scale, outerTick,
    // do not transit x Axis on zoom and resizing
    // https://github.com/naver/billboard.js/issues/1949
    id === "x" && ($$.scale.zoom || $$.config.subchart_show || $$.state.resizing) ? !0 : noTransition);
  }

  // called from : getMaxTickSize()
  ;
  _proto.getAxis = function getAxis(id, scale, outerTick, noTransition, noTickTextRotate) {
    var _this8 = this;
    const $$ = this.owner,
      config = $$.config,
      isX = /^(x|subX)$/.test(id),
      type = isX ? "x" : id,
      isCategory = isX && this.isCategorized(),
      orient = this.orient[id],
      tickTextRotate = noTickTextRotate ? 0 : $$.getAxisTickRotate(type);
    let tickFormat;
    if (isX) {
      tickFormat = id === "subX" ? $$.format.subXAxisTick : $$.format.xAxisTick;
    } else {
      const fn = config["axis_" + id + "_tick_format"];
      if (isFunction(fn)) {
        tickFormat = fn.bind($$.api);
      }
    }
    let tickValues = this.tick[type];
    const axisParams = mergeObj({
      outerTick: outerTick,
      noTransition: noTransition,
      config: config,
      id: id,
      tickTextRotate: tickTextRotate,
      owner: $$
    }, isX && {
      isCategory: isCategory,
      isInverted: config.axis_x_inverted,
      tickMultiline: config.axis_x_tick_multiline,
      tickWidth: config.axis_x_tick_width,
      tickTitle: isCategory && config.axis_x_tick_tooltip && $$.api.categories(),
      orgXScale: $$.scale.x
    });
    if (!isX) {
      axisParams.tickStepSize = config["axis_" + type + "_tick_stepSize"];
    }
    const axis = new AxisRenderer(axisParams).scale(isX && $$.scale.zoom || scale).orient(orient);
    if (isX && this.isTimeSeries() && tickValues && !isFunction(tickValues)) {
      const fn = parseDate.bind($$);
      tickValues = tickValues.map(function (v) {
        _newArrowCheck(this, _this8);
        return fn(v);
      }.bind(this));
    } else if (!isX && this.isTimeSeriesY()) {
      // https://github.com/d3/d3/blob/master/CHANGES.md#time-intervals-d3-time
      axis.ticks(config.axis_y_tick_time_value);
      tickValues = null;
    }
    tickValues && axis.tickValues(tickValues);

    // Set tick
    axis.tickFormat(tickFormat || !isX && $$.isStackNormalized() && function (x) {
      _newArrowCheck(this, _this8);
      return x + "%";
    }.bind(this));
    if (isCategory) {
      axis.tickCentered(config.axis_x_tick_centered);
      if (isEmpty(config.axis_x_tick_culling)) {
        config.axis_x_tick_culling = !1;
      }
    }
    const tickCount = config["axis_" + type + "_tick_count"];
    tickCount && axis.ticks(tickCount);
    return axis;
  };
  _proto.updateXAxisTickValues = function updateXAxisTickValues(targets, axis) {
    const $$ = this.owner,
      config = $$.config,
      fit = config.axis_x_tick_fit;
    let count = config.axis_x_tick_count,
      values;
    if (fit || count && fit) {
      values = $$.mapTargetsToUniqueXs(targets);

      // if given count is greater than the value length, then limit the count.
      if (this.isCategorized() && count > values.length) {
        count = values.length;
      }
      values = this.generateTickValues(values, count, this.isTimeSeries());
    }
    if (axis) {
      axis.tickValues(values);
    } else if (this.x) {
      var _this$subX;
      this.x.tickValues(values);
      (_this$subX = this.subX) == null || _this$subX.tickValues(values);
    }
    return values;
  };
  _proto.getId = function getId(id) {
    const _this$owner2 = this.owner,
      config = _this$owner2.config,
      scale = _this$owner2.scale;
    let axis = config.data_axes[id];

    // when data.axes option has 'y2', but 'axis.y2.show=true' isn't set will return 'y'
    if (!axis || !scale[axis]) {
      axis = "y";
    }
    return axis;
  };
  _proto.getXAxisTickFormat = function getXAxisTickFormat(forSubchart) {
    var _this9 = this;
    const $$ = this.owner,
      config = $$.config,
      format = $$.format,
      tickFormat = forSubchart ? config.subchart_axis_x_tick_format || config.axis_x_tick_format : config.axis_x_tick_format,
      isTimeSeries = this.isTimeSeries(),
      isCategorized = this.isCategorized();

    // enable different tick format for x and subX - subX format defaults to x format if not defined

    let currFormat;
    if (tickFormat) {
      if (isFunction(tickFormat)) {
        currFormat = tickFormat.bind($$.api);
      } else if (isTimeSeries) {
        currFormat = function (date) {
          _newArrowCheck(this, _this9);
          return date ? format.axisTime(tickFormat)(date) : "";
        }.bind(this);
      }
    } else {
      currFormat = isTimeSeries ? format.defaultAxisTime : isCategorized ? $$.categoryName : function (v) {
        _newArrowCheck(this, _this9);
        return v < 0 ? v.toFixed(0) : v;
      }.bind(this);
    }
    return isFunction(currFormat) ? function (v) {
      _newArrowCheck(this, _this9);
      return currFormat.apply($$, isCategorized ? [v, $$.categoryName(v)] : [v]);
    }.bind(this) : currFormat;
  };
  _proto.getTickValues = function getTickValues(id) {
    const $$ = this.owner,
      tickValues = $$.config["axis_" + id + "_tick_values"],
      axis = $$[id + "Axis"];
    return (isFunction(tickValues) ? tickValues.call($$.api) : tickValues) || (axis ? axis.tickValues() : undefined);
  };
  _proto.getLabelOptionByAxisId = function getLabelOptionByAxisId(id) {
    return this.owner.config["axis_" + id + "_label"];
  };
  _proto.getLabelText = function getLabelText(id) {
    const option = this.getLabelOptionByAxisId(id);
    return isString(option) ? option : option ? option.text : null;
  };
  _proto.setLabelText = function setLabelText(id, text) {
    const $$ = this.owner,
      config = $$.config,
      option = this.getLabelOptionByAxisId(id);
    if (isString(option)) {
      config["axis_" + id + "_label"] = text;
    } else if (option) {
      option.text = text;
    }
  };
  _proto.getLabelPosition = function getLabelPosition(id, defaultPosition) {
    var _this10 = this;
    const isRotated = this.owner.config.axis_rotated,
      option = this.getLabelOptionByAxisId(id),
      position = isObjectType(option) && option.position ? option.position : defaultPosition[+!isRotated],
      has = function (v) {
        _newArrowCheck(this, _this10);
        return !!~position.indexOf(v);
      }.bind(this);
    return {
      isInner: has("inner"),
      isOuter: has("outer"),
      isLeft: has("left"),
      isCenter: has("center"),
      isRight: has("right"),
      isTop: has("top"),
      isMiddle: has("middle"),
      isBottom: has("bottom")
    };
  };
  _proto.getAxisLabelPosition = function getAxisLabelPosition(id) {
    return this.getLabelPosition(id, id === "x" ? ["inner-top", "inner-right"] : ["inner-right", "inner-top"]);
  };
  _proto.getLabelPositionById = function getLabelPositionById(id) {
    return this.getAxisLabelPosition(id);
  };
  _proto.xForAxisLabel = function xForAxisLabel(id) {
    const $$ = this.owner,
      _$$$state = $$.state,
      width = _$$$state.width,
      height = _$$$state.height,
      position = this.getAxisLabelPosition(id);
    let x = position.isMiddle ? -height / 2 : 0;
    if (this.isHorizontal($$, id !== "x")) {
      x = position.isLeft ? 0 : position.isCenter ? width / 2 : width;
    } else if (position.isBottom) {
      x = -height;
    }
    return x;
  };
  _proto.dxForAxisLabel = function dxForAxisLabel(id) {
    const $$ = this.owner,
      position = this.getAxisLabelPosition(id);
    let dx = position.isBottom ? "0.5em" : "0";
    if (this.isHorizontal($$, id !== "x")) {
      dx = position.isLeft ? "0.5em" : position.isRight ? "-0.5em" : "0";
    } else if (position.isTop) {
      dx = "-0.5em";
    }
    return dx;
  };
  _proto.textAnchorForAxisLabel = function textAnchorForAxisLabel(id) {
    const $$ = this.owner,
      position = this.getAxisLabelPosition(id);
    let anchor = position.isMiddle ? "middle" : "end";
    if (this.isHorizontal($$, id !== "x")) {
      anchor = position.isLeft ? "start" : position.isCenter ? "middle" : "end";
    } else if (position.isBottom) {
      anchor = "start";
    }
    return anchor;
  };
  _proto.dyForAxisLabel = function dyForAxisLabel(id) {
    const $$ = this.owner,
      config = $$.config,
      isRotated = config.axis_rotated,
      isInner = this.getAxisLabelPosition(id).isInner,
      tickRotate = config["axis_" + id + "_tick_rotate"] ? $$.getHorizontalAxisHeight(id) : 0,
      _this$getMaxTickSize = this.getMaxTickSize(id),
      maxTickWidth = _this$getMaxTickSize.width;
    let dy;
    if (id === "x") {
      const xHeight = config.axis_x_height;
      if (isRotated) {
        dy = isInner ? "1.2em" : -25 - maxTickWidth;
      } else if (isInner) {
        dy = "-0.5em";
      } else if (xHeight) {
        dy = xHeight - 10;
      } else if (tickRotate) {
        dy = tickRotate - 10;
      } else {
        dy = "3em";
      }
    } else {
      dy = {
        y: ["-0.5em", 10, "3em", "1.2em", 10],
        y2: ["1.2em", -20, "-2.2em", "-0.5em", 15]
      }[id];
      if (isRotated) {
        if (isInner) {
          dy = dy[0];
        } else if (tickRotate) {
          dy = tickRotate * (id === "y2" ? -1 : 1) - dy[1];
        } else {
          dy = dy[2];
        }
      } else {
        dy = isInner ? dy[3] : (dy[4] + (config["axis_" + id + "_inner"] ? 0 : maxTickWidth + dy[4])) * (id === "y" ? -1 : 1);
      }
    }
    return dy;
  }

  /**
   * Get max tick size
   * @param {string} id axis id string
   * @param {boolean} withoutRecompute wheather or not to recompute
   * @returns {object} {width, height}
   * @private
   */;
  _proto.getMaxTickSize = function getMaxTickSize(id, withoutRecompute) {
    var _this11 = this;
    const $$ = this.owner,
      config = $$.config,
      current = $$.state.current,
      _$$$$el2 = $$.$el,
      svg = _$$$$el2.svg,
      chart = _$$$$el2.chart,
      currentTickMax = current.maxTickSize[id],
      max = {
        width: 0,
        height: 0
      };
    if (withoutRecompute || !config["axis_" + id + "_show"] || currentTickMax.width > 0 && $$.filterTargetsToShow().length === 0) {
      return currentTickMax;
    }
    if (svg) {
      const isYAxis = /^y2?$/.test(id),
        targetsToShow = $$.filterTargetsToShow($$.data.targets),
        scale = $$.scale[id].copy().domain($$["get" + (isYAxis ? "Y" : "X") + "Domain"](targetsToShow, id)),
        domain = scale.domain(),
        isDomainSame = domain[0] === domain[1] && domain.every(function (v) {
          _newArrowCheck(this, _this11);
          return v > 0;
        }.bind(this)),
        isCurrentMaxTickDomainSame = isArray(currentTickMax.domain) && currentTickMax.domain[0] === currentTickMax.domain[1] && currentTickMax.domain.every(function (v) {
          _newArrowCheck(this, _this11);
          return v > 0;
        }.bind(this));
      // do not compute if domain or currentMaxTickDomain is same
      if (isDomainSame || isCurrentMaxTickDomainSame) {
        return currentTickMax.size;
      } else {
        currentTickMax.domain = domain;
      }

      // reset old max state value to prevent from new data loading
      if (!isYAxis) {
        currentTickMax.ticks.splice(0);
      }
      const axis = this.getAxis(id, scale, !1, !1, !0),
        tickCount = config["axis_" + id + "_tick_count"],
        tickValues = config["axis_" + id + "_tick_values"];
      // Make to generate the final tick text to be rendered
      // https://github.com/naver/billboard.js/issues/920
      // Do not generate if 'tick values' option is given
      // https://github.com/naver/billboard.js/issues/1251
      if (!tickValues && tickCount) {
        axis.tickValues(this.generateTickValues(domain, tickCount, isYAxis ? this.isTimeSeriesY() : this.isTimeSeries()));
      }
      isYAxis || this.updateXAxisTickValues(targetsToShow, axis);
      const dummy = chart.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0").style("left", "0");
      axis.create(dummy);
      dummy.selectAll("text").each(function (d, i) {
        const _this$getBoundingClie = this.getBoundingClientRect(),
          width = _this$getBoundingClie.width,
          height = _this$getBoundingClie.height;
        max.width = Math.max(max.width, width);
        max.height = Math.max(max.height, height);

        // cache tick text width for getXAxisTickTextY2Overflow()
        if (!isYAxis) {
          currentTickMax.ticks[i] = width;
        }
      });
      dummy.remove();
    }
    Object.keys(max).forEach(function (key) {
      _newArrowCheck(this, _this11);
      if (max[key] > 0) {
        currentTickMax[key] = max[key];
      }
    }.bind(this));
    return currentTickMax;
  };
  _proto.getXAxisTickTextY2Overflow = function getXAxisTickTextY2Overflow(defaultPadding) {
    const $$ = this.owner,
      axis = $$.axis,
      config = $$.config,
      state = $$.state,
      xAxisTickRotate = $$.getAxisTickRotate("x");
    if ((axis.isCategorized() || axis.isTimeSeries()) && config.axis_x_tick_fit && !config.axis_x_tick_culling && !config.axis_x_tick_multiline && xAxisTickRotate > 0 && xAxisTickRotate < 90) {
      const widthWithoutCurrentPaddingLeft = state.current.width - $$.getCurrentPaddingByDirection("left"),
        maxOverflow = this.getXAxisTickMaxOverflow(xAxisTickRotate, widthWithoutCurrentPaddingLeft - defaultPadding),
        xAxisTickTextY2Overflow = Math.max(0, maxOverflow) + defaultPadding;
      // for display inconsistencies between browsers

      return Math.min(xAxisTickTextY2Overflow, widthWithoutCurrentPaddingLeft / 2);
    }
    return 0;
  };
  _proto.getXAxisTickMaxOverflow = function getXAxisTickMaxOverflow(xAxisTickRotate, widthWithoutCurrentPaddingLeft) {
    const $$ = this.owner,
      axis = $$.axis,
      config = $$.config,
      state = $$.state,
      isTimeSeries = axis.isTimeSeries(),
      tickTextWidths = state.current.maxTickSize.x.ticks,
      tickCount = tickTextWidths.length,
      _state$axis$x$padding = state.axis.x.padding,
      left = _state$axis$x$padding.left,
      right = _state$axis$x$padding.right;
    let maxOverflow = 0;
    const remaining = tickCount - (isTimeSeries && config.axis_x_tick_fit ? .5 : 0);
    for (let i = 0; i < tickCount; i++) {
      const tickIndex = i + 1,
        rotatedTickTextWidth = Math.cos(Math.PI * xAxisTickRotate / 180) * tickTextWidths[i],
        ticksBeforeTickText = tickIndex - (isTimeSeries ? 1 : .5) + left;
      // Skip ticks if there are no ticks before them
      if (ticksBeforeTickText <= 0) {
        continue;
      }
      const tickLength = (widthWithoutCurrentPaddingLeft - rotatedTickTextWidth) / ticksBeforeTickText;
      maxOverflow = Math.max(maxOverflow, rotatedTickTextWidth - tickLength / 2 - ((remaining - tickIndex) * tickLength + right * tickLength));
    }
    const filteredTargets = $$.filterTargetsToShow($$.data.targets);
    let tickOffset = 0;
    if (!isTimeSeries && config.axis_x_tick_count <= filteredTargets.length && filteredTargets[0].values.length) {
      const scale = getScale($$.axis.getAxisType("x"), 0, widthWithoutCurrentPaddingLeft - maxOverflow).domain([left * -1, $$.getXDomainMax($$.data.targets) + 1 + right]);
      tickOffset = Math.ceil((scale(1) - scale(0)) / 2);
    }
    return maxOverflow + tickOffset;
  };
  _proto.updateLabels = function updateLabels(withTransition) {
    var _this12 = this;
    const $$ = this.owner,
      main = $$.$el.main,
      $T = $$.$T,
      labels = {
        x: main.select("." + $AXIS.axisX + " ." + $AXIS.axisXLabel),
        y: main.select("." + $AXIS.axisY + " ." + $AXIS.axisYLabel),
        y2: main.select("." + $AXIS.axisY2 + " ." + $AXIS.axisY2Label)
      };
    Object.keys(labels).filter(function (id) {
      _newArrowCheck(this, _this12);
      return !labels[id].empty();
    }.bind(this)).forEach(function (v) {
      var _this13 = this;
      _newArrowCheck(this, _this12);
      const node = labels[v];

      // @check $$.$T(node, withTransition)
      $T(node, withTransition).attr("x", function () {
        _newArrowCheck(this, _this13);
        return this.xForAxisLabel(v);
      }.bind(this)).attr("dx", function () {
        _newArrowCheck(this, _this13);
        return this.dxForAxisLabel(v);
      }.bind(this)).attr("dy", function () {
        _newArrowCheck(this, _this13);
        return this.dyForAxisLabel(v);
      }.bind(this)).text(function () {
        _newArrowCheck(this, _this13);
        return this.getLabelText(v);
      }.bind(this));
    }.bind(this));
  }

  /**
   * Get axis padding value
   * @param {number|object} padding Padding object
   * @param {string} key Key string of padding
   * @param {Date|number} defaultValue Default value
   * @param {number} domainLength Domain length
   * @returns {number} Padding value in scale
   * @private
   */;
  _proto.getPadding = function getPadding(padding, key, defaultValue, domainLength) {
    const p = isNumber(padding) ? padding : padding[key];
    if (!isValue(p)) {
      return defaultValue;
    }
    return this.owner.convertPixelToScale(/(bottom|top)/.test(key) ? "y" : "x", p, domainLength);
  };
  _proto.generateTickValues = function generateTickValues(values, tickCount, forTimeSeries) {
    var _this14 = this;
    let tickValues = values;
    if (tickCount) {
      const targetCount = isFunction(tickCount) ? tickCount() : tickCount;

      // compute ticks according to tickCount
      if (targetCount === 1) {
        tickValues = [values[0]];
      } else if (targetCount === 2) {
        tickValues = [values[0], values[values.length - 1]];
      } else if (targetCount > 2) {
        const isCategorized = this.isCategorized(),
          count = targetCount - 2,
          start = values[0],
          end = values[values.length - 1];
        let tickValue;

        // re-construct unique values
        tickValues = [start];
        for (let i = 0; i < count; i++) {
          tickValue = +start + (end - start) / (count + 1) * (i + 1);
          tickValues.push(forTimeSeries ? new Date(tickValue) : isCategorized ? Math.round(tickValue) : tickValue);
        }
        tickValues.push(end);
      }
    }
    if (!forTimeSeries) {
      tickValues = tickValues.sort(function (a, b) {
        _newArrowCheck(this, _this14);
        return a - b;
      }.bind(this));
    }
    return tickValues;
  };
  _proto.generateTransitions = function generateTransitions(withTransition) {
    var _this15 = this;
    const $$ = this.owner,
      axis = $$.$el.axis,
      $T = $$.$T,
      _map = ["x", "y", "y2", "subX"].map(function (v) {
        _newArrowCheck(this, _this15);
        return $T(axis[v], withTransition);
      }.bind(this)),
      axisX = _map[0],
      axisY = _map[1],
      axisY2 = _map[2],
      axisSubX = _map[3];
    return {
      axisX: axisX,
      axisY: axisY,
      axisY2: axisY2,
      axisSubX: axisSubX
    };
  };
  _proto.redraw = function redraw(transitions, isHidden, isInit) {
    var _this16 = this;
    const $$ = this.owner,
      config = $$.config,
      $el = $$.$el,
      opacity = isHidden ? "0" : null;
    ["x", "y", "y2", "subX"].forEach(function (id) {
      _newArrowCheck(this, _this16);
      const axis = this[id],
        $axis = $el.axis[id];
      if (axis && $axis) {
        if (!isInit && !config.transition_duration) {
          axis.config.withoutTransition = !0;
        }
        $axis.style("opacity", opacity);
        axis.create(transitions["axis" + capitalize(id)]);
      }
    }.bind(this));
    this.updateAxes();
  }

  /**
   * Redraw axis
   * @param {Array} targetsToShow targets data to be shown
   * @param {object} wth option object
   * @param {d3.Transition} transitions Transition object
   * @param {object} flow flow object
   * @param {boolean} isInit called from initialization
   * @private
   */;
  _proto.redrawAxis = function redrawAxis(targetsToShow, wth, transitions, flow, isInit) {
    var _this17 = this;
    const $$ = this.owner,
      config = $$.config,
      scale = $$.scale,
      $el = $$.$el,
      hasZoom = !!scale.zoom;
    let xDomainForZoom;
    if (!hasZoom && this.isCategorized() && targetsToShow.length === 0) {
      scale.x.domain([0, $el.axis.x.selectAll(".tick").size()]);
    }
    if (scale.x && targetsToShow.length) {
      hasZoom || $$.updateXDomain(targetsToShow, wth.UpdateXDomain, wth.UpdateOrgXDomain, wth.TrimXDomain);
      if (!config.axis_x_tick_values) {
        this.updateXAxisTickValues(targetsToShow);
      }
    } else if (this.x) {
      var _this$subX2;
      this.x.tickValues([]);
      (_this$subX2 = this.subX) == null || _this$subX2.tickValues([]);
    }
    if (config.zoom_rescale && !flow) {
      xDomainForZoom = scale.x.orgDomain();
    }
    ["y", "y2"].forEach(function (key) {
      var _this18 = this;
      _newArrowCheck(this, _this17);
      const prefix = "axis_" + key + "_",
        axisScale = scale[key];
      if (axisScale) {
        const tickValues = config[prefix + "tick_values"],
          tickCount = config[prefix + "tick_count"];
        axisScale.domain($$.getYDomain(targetsToShow, key, xDomainForZoom));
        if (!tickValues && tickCount) {
          const axis = $$.axis[key],
            domain = axisScale.domain();
          axis.tickValues(this.generateTickValues(domain, domain.every(function (v) {
            _newArrowCheck(this, _this18);
            return v === 0;
          }.bind(this)) ? 1 : tickCount, this.isTimeSeriesY()));
        }
      }
    }.bind(this));

    // axes
    this.redraw(transitions, $$.hasArcType(), isInit);

    // Update axis label
    this.updateLabels(wth.Transition);

    // show/hide if manual culling needed
    if ((wth.UpdateXDomain || wth.UpdateXAxis || wth.Y) && targetsToShow.length) {
      this.setCulling();
    }

    // Update sub domain
    if (wth.Y) {
      var _scale$subY, _scale$subY2;
      (_scale$subY = scale.subY) == null || _scale$subY.domain($$.getYDomain(targetsToShow, "y"));
      (_scale$subY2 = scale.subY2) == null || _scale$subY2.domain($$.getYDomain(targetsToShow, "y2"));
    }
  }

  /**
   * Set manual culling
   * @private
   */;
  _proto.setCulling = function setCulling() {
    var _this19 = this;
    const $$ = this.owner,
      config = $$.config,
      _$$$state2 = $$.state,
      clip = _$$$state2.clip,
      current = _$$$state2.current,
      $el = $$.$el;
    ["subX", "x", "y", "y2"].forEach(function (type) {
      _newArrowCheck(this, _this19);
      const axis = $el.axis[type],
        id = type === "subX" ? "x" : type,
        cullingOptionPrefix = "axis_" + id + "_tick_culling",
        toCull = config[cullingOptionPrefix]; // subchart x axis should be aligned with x axis culling
      if (axis && toCull) {
        const tickNodes = axis.selectAll(".tick"),
          tickValues = sortValue(tickNodes.data()),
          tickSize = tickValues.length,
          cullingMax = config[cullingOptionPrefix + "_max"],
          lines = config[cullingOptionPrefix + "_lines"];
        let intervalForCulling;
        if (tickSize) {
          for (let i = 1; i < tickSize; i++) {
            if (tickSize / i < cullingMax) {
              intervalForCulling = i;
              break;
            }
          }
          tickNodes.each(function (d) {
            const node = lines ? this.querySelector("text") : this;
            if (node) {
              node.style.display = tickValues.indexOf(d) % intervalForCulling ? "none" : null;
            }
          });
        } else {
          tickNodes.style("display", null);
        }

        // set/unset x_axis_tick_clippath
        if (type === "x") {
          const clipPath = current.maxTickSize.x.clipPath ? clip.pathXAxisTickTexts : null;
          $el.svg.selectAll("." + $AXIS.axisX + " .tick text").attr("clip-path", clipPath);
        }
      }
    }.bind(this));
  };
  return Axis;
}();
;// CONCATENATED MODULE: ./src/ChartInternal/interactions/eventrect.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var eventrect = ({
  /**
   * Initialize the area that detects the event.
   * Add a container for the zone that detects the event.
   * @private
   */
  initEventRect: function initEventRect() {
    const $$ = this;
    $$.$el.main.select("." + $COMMON.chart).append("g").attr("class", $EVENT.eventRects).style("fill-opacity", "0");
  },
  /**
   * Redraws the area that detects the event.
   * @private
   */
  redrawEventRect: function redrawEventRect() {
    var _this = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      $el = $$.$el,
      isMultipleX = $$.isMultipleX(),
      isInverted = config.axis_x_inverted;
    if ($el.eventRect) {
      $$.updateEventRect($el.eventRect, !0);

      // do not initialize eventRect when data is empty
    } else if ($$.data.targets.length) {
      const eventRects = $$.$el.main.select("." + $EVENT.eventRects).style("cursor", config.zoom_enabled && config.zoom_type !== "drag" ? config.axis_rotated ? "ns-resize" : "ew-resize" : null).classed($EVENT.eventRectsMultiple, isMultipleX).classed($EVENT.eventRectsSingle, !isMultipleX),
        eventRectUpdate = eventRects.selectAll("." + $EVENT.eventRect).data([0]).enter().append("rect"); // append event <rect>
      $$.updateEventRect(eventRectUpdate);

      // bind event to <rect> element
      isMultipleX ? $$.generateEventRectsForMultipleXs(eventRectUpdate) : $$.generateEventRectsForSingleX(eventRectUpdate);

      // bind draggable selection
      eventRectUpdate.call($$.getDraggableSelection());
      $el.eventRect = eventRectUpdate;
      if ($$.state.inputType === "touch" && !$el.svg.on("touchstart.eventRect") && !$$.hasArcType()) {
        $$.bindTouchOnEventRect();
      }

      // when initilazed with empty data and data loaded later, need to update eventRect
      state.rendered && $$.updateEventRect($el.eventRect, !0);
    }
    if (!isMultipleX) {
      // Set data and update eventReceiver.data
      const xAxisTickValues = $$.getMaxDataCountTarget();
      if (!config.data_xSort || isInverted) {
        xAxisTickValues.sort(function (a, b) {
          _newArrowCheck(this, _this);
          return isInverted ? b.x - a.x : a.x - b.x;
        }.bind(this));
      }

      // update data's index value to be alinged with the x Axis
      $$.updateDataIndexByX(xAxisTickValues);
      $$.updateXs(xAxisTickValues);
      $$.updatePointClass == null || $$.updatePointClass(!0);
      state.eventReceiver.data = xAxisTickValues;
    }
    $$.updateEventRectData();
  },
  bindTouchOnEventRect: function bindTouchOnEventRect() {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      _$$$$el = $$.$el,
      eventRect = _$$$$el.eventRect,
      svg = _$$$$el.svg,
      selectRect = function (context) {
        _newArrowCheck(this, _this2);
        if ($$.isMultipleX()) {
          $$.selectRectForMultipleXs(context);
        } else {
          const index = $$.getDataIndexFromEvent(state.event);
          $$.callOverOutForTouch(index);
          index === -1 ? $$.unselectRect() : $$.selectRectForSingle(context, index);
        }
      }.bind(this),
      unselectRect = function () {
        _newArrowCheck(this, _this2);
        $$.unselectRect();
        $$.callOverOutForTouch();
      }.bind(this),
      preventDefault = config.interaction_inputType_touch.preventDefault,
      isPrevented = isboolean(preventDefault) && preventDefault || !1,
      preventThreshold = !isNaN(preventDefault) && preventDefault || null;

    // call event.preventDefault()
    // according 'interaction.inputType.touch.preventDefault' option

    let startPx;
    const preventEvent = function (event) {
      _newArrowCheck(this, _this2);
      const eventType = event.type,
        touch = event.changedTouches[0],
        currentXY = touch["client" + (config.axis_rotated ? "Y" : "X")];
      // prevent document scrolling
      if (eventType === "touchstart") {
        if (isPrevented) {
          event.preventDefault();
        } else if (preventThreshold !== null) {
          startPx = currentXY;
        }
      } else if (eventType === "touchmove") {
        if (isPrevented || startPx === !0 || preventThreshold !== null && Math.abs(startPx - currentXY) >= preventThreshold) {
          // once prevented, keep prevented during whole 'touchmove' context
          startPx = !0;
          event.preventDefault();
        }
      }
    }.bind(this);

    // bind touch events
    eventRect.on("touchstart", function (event) {
      _newArrowCheck(this, _this2);
      state.event = event;
      $$.updateEventRect();
    }.bind(this)).on("touchstart.eventRect touchmove.eventRect", function (event) {
      _newArrowCheck(this, _this2);
      state.event = event;
      if (!eventRect.empty() && eventRect.classed($EVENT.eventRect)) {
        // if touch points are > 1, means doing zooming interaction. In this case do not execute tooltip codes.
        if (state.dragging || state.flowing || $$.hasArcType() || event.touches.length > 1) {
          return;
        }
        preventEvent(event);
        selectRect(eventRect.node());
      } else {
        unselectRect();
      }
    }.bind(this), !0).on("touchend.eventRect", function (event) {
      _newArrowCheck(this, _this2);
      state.event = event;
      if (!eventRect.empty() && eventRect.classed($EVENT.eventRect)) {
        if ($$.hasArcType() || !$$.toggleShape || state.cancelClick) {
          state.cancelClick && (state.cancelClick = !1);
        }
      }
    }.bind(this), !0);
    svg.on("touchstart", function (event) {
      _newArrowCheck(this, _this2);
      state.event = event;
      const target = event.target;
      if (target && target !== eventRect.node()) {
        unselectRect();
      }
    }.bind(this));
  },
  /**
   * Update event rect size
   * @param {d3Selection} eventRect Event <rect> element
   * @param {boolean} force Force to update
   * @private
   */
  updateEventRect: function updateEventRect(eventRect, force) {
    var _this3 = this;
    if (force === void 0) {
      force = !1;
    }
    const $$ = this,
      state = $$.state,
      $el = $$.$el,
      _state = state,
      eventReceiver = _state.eventReceiver,
      width = _state.width,
      height = _state.height,
      rendered = _state.rendered,
      resizing = _state.resizing,
      rectElement = eventRect || $el.eventRect,
      updateClientRect = function () {
        _newArrowCheck(this, _this3);
        eventReceiver && (eventReceiver.rect = rectElement.node().getBoundingClientRect());
      }.bind(this);
    if (!rendered || resizing || force) {
      rectElement.attr("x", 0).attr("y", 0).attr("width", width).attr("height", height);

      // only for init
      if (!rendered || force) {
        rectElement.classed($EVENT.eventRect, !0);
      }
    }
    updateClientRect();
  },
  /**
   * Updates the location and size of the eventRect.
   * @private
   */
  updateEventRectData: function updateEventRectData() {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      state = $$.state,
      xScale = scale.zoom || scale.x,
      isRotated = config.axis_rotated;
    let x, y, w, h;
    if ($$.isMultipleX()) {
      // TODO: rotated not supported yet
      x = 0;
      y = 0;
      w = state.width;
      h = state.height;
    } else {
      let rectW, rectX;
      if ($$.axis.isCategorized()) {
        rectW = $$.getEventRectWidth();
        rectX = function (d) {
          _newArrowCheck(this, _this4);
          return xScale(d.x) - rectW / 2;
        }.bind(this);
      } else {
        const getPrevNextX = function (_ref) {
          let index = _ref.index;
          _newArrowCheck(this, _this4);
          return {
            prev: $$.getPrevX(index),
            next: $$.getNextX(index)
          };
        }.bind(this);
        rectW = function (d) {
          var _this5 = this;
          _newArrowCheck(this, _this4);
          const x = getPrevNextX(d),
            xDomain = xScale.domain();
          let val;

          // if there this is a single data point make the eventRect full width (or height)
          if (x.prev === null && x.next === null) {
            val = isRotated ? state.height : state.width;
          } else if (x.prev === null) {
            val = (xScale(x.next) + xScale(d.x)) / 2;
          } else if (x.next === null) {
            val = xScale(xDomain[1]) - (xScale(x.prev) + xScale(d.x)) / 2;
          } else {
            Object.keys(x).forEach(function (key, i) {
              var _x$key;
              _newArrowCheck(this, _this5);
              x[key] = (_x$key = x[key]) != null ? _x$key : xDomain[i];
            }.bind(this));
            val = Math.max(0, (xScale(x.next) - xScale(x.prev)) / 2);
          }
          return val;
        }.bind(this);
        rectX = function (d) {
          _newArrowCheck(this, _this4);
          const x = getPrevNextX(d);
          let val;

          // if there this is a single data point position the eventRect at 0
          if (x.prev === null && x.next === null) {
            val = 0;
          } else if (x.prev === null) {
            val = xScale(xScale.domain()[0]);
          } else {
            val = (xScale(d.x) + xScale(x.prev)) / 2;
          }
          return val;
        }.bind(this);
      }
      x = isRotated ? 0 : rectX;
      y = isRotated ? rectX : 0;
      w = isRotated ? state.width : rectW;
      h = isRotated ? rectW : state.height;
    }
    const eventReceiver = state.eventReceiver,
      call = function (fn, v) {
        _newArrowCheck(this, _this4);
        return isFunction(fn) ? fn(v) : fn;
      }.bind(this);
    // reset for possible remains coords data before the data loading
    eventReceiver.coords.splice(eventReceiver.data.length);
    eventReceiver.data.forEach(function (d, i) {
      _newArrowCheck(this, _this4);
      eventReceiver.coords[i] = {
        x: call(x, d),
        y: call(y, d),
        w: call(w, d),
        h: call(h, d)
      };
    }.bind(this));
  },
  /**
   * Seletct rect for single x value
   * @param {d3Selection} context Event rect element
   * @param {number} index x Axis index
   * @private
   */
  selectRectForSingle: function selectRectForSingle(context, index) {
    var _this6 = this;
    const $$ = this,
      config = $$.config,
      _$$$$el2 = $$.$el,
      main = _$$$$el2.main,
      circle = _$$$$el2.circle,
      isSelectionEnabled = config.data_selection_enabled,
      isSelectionGrouped = config.data_selection_grouped,
      isSelectable = config.data_selection_isselectable,
      isTooltipGrouped = config.tooltip_grouped,
      selectedData = $$.getAllValuesOnIndex(index);
    if (isTooltipGrouped) {
      $$.showTooltip(selectedData, context);
      $$.showGridFocus == null || $$.showGridFocus(selectedData);
      if (!isSelectionEnabled || isSelectionGrouped) {
        return;
      }
    }

    // remove possible previous focused state
    circle || main.selectAll("." + $COMMON.EXPANDED + ":not(." + $SHAPE.shape + "-" + index + ")").classed($COMMON.EXPANDED, !1);
    const shapeAtIndex = main.selectAll("." + $SHAPE.shape + "-" + index).classed($COMMON.EXPANDED, !0).style("cursor", isSelectable ? "pointer" : null).filter(function (d) {
      return $$.isWithinShape(this, d);
    });
    if (shapeAtIndex.empty() && !isTooltipGrouped) {
      $$.hideGridFocus == null || $$.hideGridFocus();
      $$.hideTooltip();
      isSelectionGrouped || $$.setExpand(index);
    }
    shapeAtIndex.call(function (selected) {
      var _this7 = this;
      _newArrowCheck(this, _this6);
      const d = selected.data();
      if (isSelectionEnabled && (isSelectionGrouped || isSelectable != null && isSelectable.bind($$.api)(d))) {
        context.style.cursor = "pointer";
      }
      if (!isTooltipGrouped) {
        $$.showTooltip(d, context);
        $$.showGridFocus == null || $$.showGridFocus(d);
        $$.unexpandCircles == null || $$.unexpandCircles();
        selected.each(function (d) {
          _newArrowCheck(this, _this7);
          return $$.setExpand(index, d.id);
        }.bind(this));
      }
    }.bind(this));
  },
  /**
   * Select rect for multiple x values
   * @param {d3Selection} context Event rect element
   * @param {boolean} [triggerEvent=true] Whether trigger event or not
   * @private
   */
  selectRectForMultipleXs: function selectRectForMultipleXs(context, triggerEvent) {
    var _this8 = this;
    if (triggerEvent === void 0) {
      triggerEvent = !0;
    }
    const $$ = this,
      config = $$.config,
      state = $$.state,
      targetsToShow = $$.filterTargetsToShow($$.data.targets);
    // do nothing when dragging
    if (state.dragging || $$.hasArcType(targetsToShow)) {
      return;
    }
    const mouse = getPointer(state.event, context),
      closest = $$.findClosestFromTargets(targetsToShow, mouse);
    if (triggerEvent && state.mouseover && (!closest || closest.id !== state.mouseover.id)) {
      config.data_onout.call($$.api, state.mouseover);
      state.mouseover = undefined;
    }
    if (!closest) {
      $$.unselectRect();
      return;
    }
    const sameXData = $$.isBubbleType(closest) || $$.isScatterType(closest) || !config.tooltip_grouped ? [closest] : $$.filterByX(targetsToShow, closest.x),
      selectedData = sameXData.map(function (d) {
        _newArrowCheck(this, _this8);
        return $$.addName(d);
      }.bind(this)); // show tooltip when cursor is close to some point
    $$.showTooltip(selectedData, context);

    // expand points
    $$.setExpand(closest.index, closest.id, !0);

    // Show xgrid focus line
    $$.showGridFocus(selectedData);
    const dist = $$.dist(closest, mouse);

    // Show cursor as pointer if point is close to mouse position
    if ($$.isBarType(closest.id) || dist < $$.getPointSensitivity(closest)) {
      $$.$el.svg.select("." + $EVENT.eventRect).style("cursor", "pointer");
      if (triggerEvent && !state.mouseover) {
        config.data_onover.call($$.api, closest);
        state.mouseover = closest;
      }
    }
  },
  /**
   * Unselect EventRect.
   * @private
   */
  unselectRect: function unselectRect() {
    const $$ = this,
      _$$$$el3 = $$.$el,
      circle = _$$$$el3.circle,
      tooltip = _$$$$el3.tooltip;
    $$.$el.svg.select("." + $EVENT.eventRect).style("cursor", null);
    $$.hideGridFocus();
    if (tooltip) {
      $$.hideTooltip();
      $$._handleLinkedCharts(!1);
    }
    circle && !$$.isPointFocusOnly() && $$.unexpandCircles();
    $$.expandBarTypeShapes(!1);
  },
  /**
   * Create eventRect for each data on the x-axis.
   * Register touch and drag events.
   * @param {object} eventRectEnter d3.select($EVENT.eventRects) object.
   * @returns {object} d3.select($EVENT.eventRects) object.
   * @private
   */
  generateEventRectsForSingleX: function generateEventRectsForSingleX(eventRectEnter) {
    var _this9 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      eventReceiver = state.eventReceiver,
      rect = eventRectEnter.style("cursor", config.data_selection_enabled && config.data_selection_grouped ? "pointer" : null).on("click", function (event) {
        state.event = event;
        const currentIdx = eventReceiver.currentIdx,
          data = eventReceiver.data,
          d = data[currentIdx === -1 ? $$.getDataIndexFromEvent(event) : currentIdx];
        $$.clickHandlerForSingleX.bind(this)(d, $$);
      });
    if (state.inputType === "mouse") {
      const getData = function (event) {
        _newArrowCheck(this, _this9);
        const index = event ? $$.getDataIndexFromEvent(event) : eventReceiver.currentIdx;
        return index > -1 ? eventReceiver.data[index] : null;
      }.bind(this);
      rect.on("mouseover", function (event) {
        _newArrowCheck(this, _this9);
        state.event = event;
        $$.updateEventRect();
      }.bind(this)).on("mousemove", function (event) {
        const d = getData(event);
        state.event = event;
        if (!d) {
          return;
        }
        let index = d.index;
        const stepType = config.line_step_type;

        // tooltip position match for step-before & step-after
        if (config.line_step_tooltipMatch && $$.hasType("step") && /^step\-(before|after)$/.test(stepType)) {
          const scale = $$.scale.zoom || $$.scale.x,
            xs = $$.axis.xs[index],
            inverted = scale.invert(getPointer(event, this)[0]);
          if (stepType === "step-after" && inverted < xs) {
            index -= 1;
          } else if (stepType === "step-before" && inverted > xs) {
            index += 1;
          }
        }
        const eventOnSameIdx = config.tooltip_grouped && index === eventReceiver.currentIdx;

        // do nothing while dragging/flowing
        if (state.dragging || state.flowing || $$.hasArcType() || eventOnSameIdx) {
          config.tooltip_show && eventOnSameIdx && $$.setTooltipPosition();
          return;
        }
        if (index !== eventReceiver.currentIdx) {
          $$.setOverOut(!1, eventReceiver.currentIdx);
          eventReceiver.currentIdx = index;
        }
        index === -1 ? $$.unselectRect() : $$.selectRectForSingle(this, index);

        // As of individual data point(or <path>) element can't bind mouseover/out event
        // to determine current interacting element, so use 'mousemove' event instead.
        $$.setOverOut(index !== -1, index);
      }).on("mouseout", function (event) {
        _newArrowCheck(this, _this9);
        state.event = event;

        // chart is destroyed
        if (!config || $$.hasArcType() || eventReceiver.currentIdx === -1) {
          return;
        }
        $$.unselectRect();
        $$.setOverOut(!1, eventReceiver.currentIdx);

        // reset the event current index
        eventReceiver.currentIdx = -1;
      }.bind(this));
    }
    return rect;
  },
  clickHandlerForSingleX: function clickHandlerForSingleX(d, ctx) {
    const $$ = ctx,
      config = $$.config,
      state = $$.state,
      main = $$.$el.main;
    if (!d || $$.hasArcType() || state.cancelClick) {
      state.cancelClick && (state.cancelClick = !1);
      return;
    }
    const index = d.index;
    main.selectAll("." + $SHAPE.shape + "-" + index).each(function (d2) {
      if (config.data_selection_grouped || $$.isWithinShape(this, d2)) {
        $$.toggleShape == null || $$.toggleShape(this, d2, index);
        config.data_onclick.bind($$.api)(d2, this);
      }
    });
  },
  /**
   * Create an eventRect,
   * Register touch and drag events.
   * @param {object} eventRectEnter d3.select($EVENT.eventRects) object.
   * @private
   */
  generateEventRectsForMultipleXs: function generateEventRectsForMultipleXs(eventRectEnter) {
    var _this10 = this;
    const $$ = this,
      state = $$.state;
    eventRectEnter.on("click", function (event) {
      state.event = event;
      $$.clickHandlerForMultipleXS.bind(this)($$);
    });
    if (state.inputType === "mouse") {
      eventRectEnter.on("mouseover mousemove", function (event) {
        state.event = event;
        $$.selectRectForMultipleXs(this);
      }).on("mouseout", function (event) {
        _newArrowCheck(this, _this10);
        state.event = event;

        // chart is destroyed
        if (!$$.config || $$.hasArcType()) {
          return;
        }
        $$.unselectRect();
      }.bind(this));
    }
  },
  clickHandlerForMultipleXS: function clickHandlerForMultipleXS(ctx) {
    const $$ = ctx,
      config = $$.config,
      state = $$.state,
      targetsToShow = $$.filterTargetsToShow($$.data.targets);
    if ($$.hasArcType(targetsToShow)) {
      return;
    }
    const mouse = getPointer(state.event, this),
      closest = $$.findClosestFromTargets(targetsToShow, mouse),
      sensitivity = config.point_sensitivity === "radius" ? closest.r : config.point_sensitivity;
    if (!closest) {
      return;
    }

    // select if selection enabled
    if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < sensitivity) {
      $$.$el.main.selectAll("." + $SHAPE.shapes + $$.getTargetSelectorSuffix(closest.id)).selectAll("." + $SHAPE.shape + "-" + closest.index).each(function () {
        if (config.data_selection_grouped || $$.isWithinShape(this, closest)) {
          $$.toggleShape == null || $$.toggleShape(this, closest, closest.index);
          config.data_onclick.bind($$.api)(closest, this);
        }
      });
    }
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-ease","commonjs2":"d3-ease","amd":"d3-ease","root":"d3"}
var external_commonjs_d3_ease_commonjs2_d3_ease_amd_d3_ease_root_d3_ = __webpack_require__(11);
;// CONCATENATED MODULE: ./src/ChartInternal/interactions/flow.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var interactions_flow = ({
  /**
   * Generate flow
   * @param {object} args option object
   * @returns {Function}
   * @private
   */
  generateFlow: function generateFlow(args) {
    const $$ = this,
      data = $$.data,
      state = $$.state,
      $el = $$.$el;
    return function () {
      var _this = this;
      const flowLength = args.flow.length;

      // set flag
      state.flowing = !0;

      // remove head data after rendered
      data.targets.forEach(function (d) {
        _newArrowCheck(this, _this);
        d.values.splice(0, flowLength);
      }.bind(this));

      // update elements related to x scale
      if ($$.updateXGrid) {
        $$.updateXGrid(!0);
      }

      // target elements
      const elements = {};
      ["axis.x", "grid.x", "gridLines.x", "region.list", "text", "bar", "line", "area", "circle"].forEach(function (v) {
        var _node;
        _newArrowCheck(this, _this);
        const name = v.split(".");
        let node = $el[name[0]];
        if (node && name.length > 1) {
          node = node[name[1]];
        }
        if ((_node = node) != null && _node.size()) {
          elements[v] = node;
        }
      }.bind(this));
      $$.hideGridFocus();
      $$.setFlowList(elements, args);
    };
  },
  /**
   * Set flow list
   * @param {object} elements Target elements
   * @param {object} args option object
   * @private
   */
  setFlowList: function setFlowList(elements, args) {
    var _this2 = this;
    const $$ = this,
      flow = args.flow,
      targets = args.targets,
      _flow = flow,
      _flow$duration = _flow.duration,
      duration = _flow$duration === void 0 ? args.duration : _flow$duration,
      flowIndex = _flow.index,
      flowLength = _flow.length,
      orgDataCount = _flow.orgDataCount,
      transform = $$.getFlowTransform(targets, orgDataCount, flowIndex, flowLength),
      wait = generateWait();
    let n;
    wait.add(Object.keys(elements).map(function (v) {
      var _this3 = this;
      _newArrowCheck(this, _this2);
      n = elements[v].transition().ease(external_commonjs_d3_ease_commonjs2_d3_ease_amd_d3_ease_root_d3_.easeLinear).duration(duration);
      if (v === "axis.x") {
        n = n.call(function (g) {
          _newArrowCheck(this, _this3);
          $$.axis.x.setTransition(g).create(g);
        }.bind(this));
      } else if (v === "region.list") {
        n = n.filter($$.isRegionOnX).attr("transform", transform);
      } else {
        n = n.attr("transform", transform);
      }
      return n;
    }.bind(this)));
    n.call(wait, function () {
      _newArrowCheck(this, _this2);
      $$.cleanUpFlow(elements, args);
    }.bind(this));
  },
  /**
   * Clean up flow
   * @param {object} elements Target elements
   * @param {object} args option object
   * @private
   */
  cleanUpFlow: function cleanUpFlow(elements, args) {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      svg = $$.$el.svg,
      isRotated = config.axis_rotated,
      flow = args.flow,
      shape = args.shape,
      xv = args.xv,
      _shape$pos = shape.pos,
      cx = _shape$pos.cx,
      cy = _shape$pos.cy,
      xForText = _shape$pos.xForText,
      yForText = _shape$pos.yForText,
      _flow2 = flow,
      _flow2$done = _flow2.done,
      done = _flow2$done === void 0 ? function () {
        _newArrowCheck(this, _this4);
      }.bind(this) : _flow2$done,
      flowLength = _flow2.length;
    // Remove flowed elements
    if (flowLength) {
      ["circle", "text", "shape", "eventRect"].forEach(function (v) {
        _newArrowCheck(this, _this4);
        const target = [];
        for (let i = 0; i < flowLength; i++) {
          target.push("." + classes[v] + "-" + i);
        }
        svg.selectAll("." + classes[v + "s"]) // circles, shapes, texts, eventRects
        .selectAll(target).remove();
      }.bind(this));
      svg.select("." + classes.xgrid).remove();
    }

    // draw again for removing flowed elements and reverting attr
    Object.keys(elements).forEach(function (v) {
      var _this5 = this;
      _newArrowCheck(this, _this4);
      const n = elements[v];
      if (v !== "axis.x") {
        n.attr("transform", null);
      }
      if (v === "grid.x") {
        n.attr(state.xgridAttr);
      } else if (v === "gridLines.x") {
        n.attr("x1", isRotated ? 0 : xv).attr("x2", isRotated ? state.width : xv);
        n.select("text").attr("x", isRotated ? state.width : 0).attr("y", xv);
      } else if (/^(area|bar|line)$/.test(v)) {
        n.attr("d", shape.type[v]);
      } else if (v === "text") {
        n.attr("x", xForText).attr("y", yForText).style("fill-opacity", $$.opacityForText.bind($$));
      } else if (v === "circle") {
        if ($$.isCirclePoint()) {
          n.attr("cx", cx).attr("cy", cy);
        } else {
          const xFunc = function (d) {
              _newArrowCheck(this, _this5);
              return cx(d) - config.point_r;
            }.bind(this),
            yFunc = function (d) {
              _newArrowCheck(this, _this5);
              return cy(d) - config.point_r;
            }.bind(this);
          n.attr("x", xFunc).attr("y", yFunc);
        }
      } else if (v === "region.list") {
        n.select("rect").filter($$.isRegionOnX).attr("x", $$.regionX.bind($$)).attr("width", $$.regionWidth.bind($$));
      }
    }.bind(this));
    config.interaction_enabled && $$.redrawEventRect();

    // callback for end of flow
    done.call($$.api);
    state.flowing = !1;
  },
  /**
   * Get flow transform value
   * @param {object} targets target
   * @param {number} orgDataCount original data count
   * @param {number} flowIndex flow index
   * @param {number} flowLength flow length
   * @returns {string}
   * @private
   */
  getFlowTransform: function getFlowTransform(targets, orgDataCount, flowIndex, flowLength) {
    var _flowStart, _flowEnd;
    const $$ = this,
      data = $$.data,
      x = $$.scale.x,
      dataValues = data.targets[0].values;
    let flowStart = $$.getValueOnIndex(dataValues, flowIndex),
      flowEnd = $$.getValueOnIndex(dataValues, flowIndex + flowLength),
      translateX;
    // update x domain to generate axis elements for flow
    const orgDomain = x.domain(),
      domain = $$.updateXDomain(targets, !0, !0);
    // generate transform to flow
    if (!orgDataCount) {
      // if empty
      if (dataValues.length !== 1) {
        translateX = x(orgDomain[0]) - x(domain[0]);
      } else {
        if ($$.axis.isTimeSeries()) {
          flowStart = $$.getValueOnIndex(dataValues, 0);
          flowEnd = $$.getValueOnIndex(dataValues, dataValues.length - 1);
          translateX = x(flowStart.x) - x(flowEnd.x);
        } else {
          translateX = diffDomain(domain) / 2;
        }
      }
    } else if (orgDataCount === 1 || ((_flowStart = flowStart) == null ? void 0 : _flowStart.x) === ((_flowEnd = flowEnd) == null ? void 0 : _flowEnd.x)) {
      translateX = x(orgDomain[0]) - x(domain[0]);
    } else {
      var _flowStart2;
      translateX = $$.axis.isTimeSeries() ? x(orgDomain[0]) - x(domain[0]) : x(((_flowStart2 = flowStart) == null ? void 0 : _flowStart2.x) || 0) - x(flowEnd.x);
    }
    const scaleX = diffDomain(orgDomain) / diffDomain(domain);
    return "translate(" + translateX + ",0) scale(" + scaleX + ",1)";
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/clip.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var clip = ({
  initClip: function initClip() {
    const $$ = this,
      _$$$state = $$.state,
      clip = _$$$state.clip,
      datetimeId = _$$$state.datetimeId;
    // MEMO: clipId needs to be unique because it conflicts when multiple charts exist
    clip.id = datetimeId + "-clip";
    clip.idXAxis = clip.id + "-xaxis";
    clip.idYAxis = clip.id + "-yaxis";
    clip.idGrid = clip.id + "-grid";

    // Define 'clip-path' attribute values
    clip.path = $$.getClipPath(clip.id);
    clip.pathXAxis = $$.getClipPath(clip.idXAxis);
    clip.pathYAxis = $$.getClipPath(clip.idYAxis);
    clip.pathGrid = $$.getClipPath(clip.idGrid);
  },
  getClipPath: function getClipPath(id) {
    const $$ = this,
      config = $$.config;
    if (!config.clipPath && /-clip$/.test(id) || !config.axis_x_clipPath && /-clip-xaxis$/.test(id) || !config.axis_y_clipPath && /-clip-yaxis$/.test(id)) {
      return null;
    }
    const isIE9 = win.navigator ? win.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0 : !1;
    return "url(" + (isIE9 ? "" : browser_doc.URL.split("#")[0]) + "#" + id + ")";
  },
  appendClip: function appendClip(parent, id) {
    id && parent.append("clipPath").attr("id", id).append("rect");
  },
  /**
   * Set x Axis clipPath dimension
   * @param {d3Selecton} node clipPath <rect> selection
   * @private
   */
  setXAxisClipPath: function setXAxisClipPath(node) {
    const $$ = this,
      config = $$.config,
      _$$$state2 = $$.state,
      margin = _$$$state2.margin,
      width = _$$$state2.width,
      height = _$$$state2.height,
      isRotated = config.axis_rotated,
      left = Math.max(30, margin.left) - (isRotated ? 0 : 20),
      h = (isRotated ? margin.top + height + 10 : margin.bottom) + 20,
      x = isRotated ? -(1 + left) : -(left - 1),
      w = isRotated ? margin.left + 20 : width + 10 + left;

    // less than 20 is not enough to show the axis label 'outer' without legend

    // -Math.max(15, margin.top);

    node.attr("x", x).attr("y", -15).attr("width", w).attr("height", h);
  },
  /**
   * Set y Axis clipPath dimension
   * @param {d3Selection} node clipPath <rect> selection
   * @private
   */
  setYAxisClipPath: function setYAxisClipPath(node) {
    var _config$padding;
    const $$ = this,
      config = $$.config,
      _$$$state3 = $$.state,
      margin = _$$$state3.margin,
      width = _$$$state3.width,
      height = _$$$state3.height,
      isRotated = config.axis_rotated,
      left = Math.max(30, margin.left) - (isRotated ? 20 : 0),
      isInner = config.axis_y_inner,
      x = isInner && !isRotated ? config.axis_y_label.text ? -20 : -1 : isRotated ? -(1 + left) : -(left - 1),
      y = -(isRotated ? 20 : margin.top),
      w = (isRotated ? width + 15 + left : margin.left + 20) + (isInner ? 20 : 0),
      h = (isRotated ? margin.bottom + (((_config$padding = config.padding) == null ? void 0 : _config$padding.mode) === "fit" ? 10 : 0) : margin.top + height) + 10;
    node.attr("x", x).attr("y", y).attr("width", w).attr("height", h);
  },
  updateXAxisTickClip: function updateXAxisTickClip() {
    const $$ = this,
      config = $$.config,
      _$$$state4 = $$.state,
      clip = _$$$state4.clip,
      xAxisHeight = _$$$state4.xAxisHeight,
      defs = $$.$el.defs,
      newXAxisHeight = $$.getHorizontalAxisHeight("x");
    if (defs && !clip.idXAxisTickTexts) {
      const clipId = clip.id + "-xaxisticktexts";
      $$.appendClip(defs, clipId);
      clip.pathXAxisTickTexts = $$.getClipPath(clip.idXAxisTickTexts);
      clip.idXAxisTickTexts = clipId;
    }
    if (!config.axis_x_tick_multiline && $$.getAxisTickRotate("x") && newXAxisHeight !== xAxisHeight) {
      $$.setXAxisTickClipWidth();
      $$.setXAxisTickTextClipPathWidth();
    }
    $$.state.xAxisHeight = newXAxisHeight;
  },
  setXAxisTickClipWidth: function setXAxisTickClipWidth() {
    const $$ = this,
      config = $$.config,
      maxTickSize = $$.state.current.maxTickSize,
      xAxisTickRotate = $$.getAxisTickRotate("x");
    if (!config.axis_x_tick_multiline && xAxisTickRotate) {
      const sinRotation = Math.sin(Math.PI / 180 * Math.abs(xAxisTickRotate));
      maxTickSize.x.clipPath = ($$.getHorizontalAxisHeight("x") - 20) / sinRotation;
    } else {
      maxTickSize.x.clipPath = null;
    }
  },
  setXAxisTickTextClipPathWidth: function setXAxisTickTextClipPathWidth() {
    const $$ = this,
      _$$$state5 = $$.state,
      clip = _$$$state5.clip,
      current = _$$$state5.current,
      svg = $$.$el.svg;
    if (svg) {
      svg.select("#" + clip.idXAxisTickTexts + " rect").attr("width", current.maxTickSize.x.clipPath).attr("height", 30);
    }
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/grid.ts

var grid_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




// Grid position and text anchor helpers
const getGridTextAnchor = function (d) {
    _newArrowCheck(this, grid_this);
    return isValue(d.position) || "end";
  }.bind(undefined),
  getGridTextDx = function (d) {
    _newArrowCheck(this, grid_this);
    return d.position === "start" ? 4 : d.position === "middle" ? 0 : -4;
  }.bind(undefined);
/**
 * Get grid text x value getter function
 * @param {boolean} isX Is x Axis
 * @param {number} width Width value
 * @param {number} height Height value
 * @returns {Function}
 * @private
 */
function getGridTextX(isX, width, height) {
  var _this2 = this;
  return function (d) {
    _newArrowCheck(this, _this2);
    let x = isX ? 0 : width;
    if (d.position === "start") {
      x = isX ? -height : 0;
    } else if (d.position === "middle") {
      x = (isX ? -height : width) / 2;
    }
    return x;
  }.bind(this);
}

/**
 * Update coordinate attributes value
 * @param {d3.selection} el Target node
 * @param {string} type Type
 * @private
 */
function smoothLines(el, type) {
  if (type === "grid") {
    el.each(function () {
      var _this3 = this;
      const g = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
      ["x1", "x2", "y1", "y2"].forEach(function (v) {
        _newArrowCheck(this, _this3);
        return g.attr(v, Math.ceil(+g.attr(v)));
      }.bind(this));
    });
  }
}
/* harmony default export */ var internals_grid = ({
  hasGrid: function hasGrid() {
    var _this4 = this;
    const config = this.config;
    return ["x", "y"].some(function (v) {
      _newArrowCheck(this, _this4);
      return config["grid_" + v + "_show"] || config["grid_" + v + "_lines"].length;
    }.bind(this));
  },
  initGrid: function initGrid() {
    const $$ = this;
    $$.hasGrid() && $$.initGridLines();
    $$.initFocusGrid();
  },
  initGridLines: function initGridLines() {
    const $$ = this,
      config = $$.config,
      clip = $$.state.clip,
      $el = $$.$el;
    if (config.grid_x_lines.length || config.grid_y_lines.length) {
      $el.gridLines.main = $el.main.insert("g", "." + $COMMON.chart + (config.grid_lines_front ? " + *" : "")).attr("clip-path", clip.pathGrid).attr("class", $GRID.grid + " " + $GRID.gridLines);
      $el.gridLines.main.append("g").attr("class", $GRID.xgridLines);
      $el.gridLines.main.append("g").attr("class", $GRID.ygridLines);
      $el.gridLines.x = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.selectAll)([]);
    }
  },
  updateXGrid: function updateXGrid(withoutUpdate) {
    var _this5 = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      state = $$.state,
      _$$$$el = $$.$el,
      main = _$$$$el.main,
      grid = _$$$$el.grid,
      isRotated = config.axis_rotated,
      xgridData = $$.generateGridData(config.grid_x_type, scale.x),
      tickOffset = $$.axis.isCategorized() ? $$.axis.x.tickOffset() : 0,
      pos = function (d) {
        _newArrowCheck(this, _this5);
        return (scale.zoom || scale.x)(d) + tickOffset * (isRotated ? -1 : 1);
      }.bind(this);
    state.xgridAttr = isRotated ? {
      "x1": 0,
      "x2": state.width,
      "y1": pos,
      "y2": pos
    } : {
      "x1": pos,
      "x2": pos,
      "y1": 0,
      "y2": state.height
    };
    grid.x = main.select("." + $GRID.xgrids).selectAll("." + $GRID.xgrid).data(xgridData);
    grid.x.exit().remove();
    grid.x = grid.x.enter().append("line").attr("class", $GRID.xgrid).merge(grid.x);
    if (!withoutUpdate) {
      grid.x.each(function () {
        var _this6 = this;
        const grid = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
        Object.keys(state.xgridAttr).forEach(function (id) {
          var _this7 = this;
          _newArrowCheck(this, _this6);
          grid.attr(id, state.xgridAttr[id]).style("opacity", function () {
            _newArrowCheck(this, _this7);
            return grid.attr(isRotated ? "y1" : "x1") === (isRotated ? state.height : 0) ? "0" : null;
          }.bind(this));
        }.bind(this));
      });
    }
  },
  updateYGrid: function updateYGrid() {
    var _this8 = this;
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      scale = $$.scale,
      state = $$.state,
      _$$$$el2 = $$.$el,
      grid = _$$$$el2.grid,
      main = _$$$$el2.main,
      isRotated = config.axis_rotated,
      pos = function (d) {
        _newArrowCheck(this, _this8);
        return Math.ceil(scale.y(d));
      }.bind(this),
      gridValues = axis.y.getGeneratedTicks(config.grid_y_ticks) || $$.scale.y.ticks(config.grid_y_ticks);
    grid.y = main.select("." + $GRID.ygrids).selectAll("." + $GRID.ygrid).data(gridValues);
    grid.y.exit().remove();
    grid.y = grid.y.enter().append("line").attr("class", $GRID.ygrid).merge(grid.y);
    grid.y.attr("x1", isRotated ? pos : 0).attr("x2", isRotated ? pos : state.width).attr("y1", isRotated ? 0 : pos).attr("y2", isRotated ? state.height : pos);
    smoothLines(grid.y, "grid");
  },
  updateGrid: function updateGrid() {
    const $$ = this,
      _$$$$el3 = $$.$el,
      grid = _$$$$el3.grid,
      gridLines = _$$$$el3.gridLines;
    gridLines.main || $$.initGridLines();

    // hide if arc type
    grid.main.style("visibility", $$.hasArcType() ? "hidden" : null);
    $$.hideGridFocus();
    $$.updateGridLines("x");
    $$.updateGridLines("y");
  },
  /**
   * Update Grid lines
   * @param {string} type x | y
   * @private
   */
  updateGridLines: function updateGridLines(type) {
    var _this9 = this;
    const $$ = this,
      config = $$.config,
      _$$$$el4 = $$.$el,
      gridLines = _$$$$el4.gridLines,
      main = _$$$$el4.main,
      $T = $$.$T,
      isRotated = config.axis_rotated;
    config["grid_" + type + "_show"] && $$["update" + type.toUpperCase() + "Grid"]();
    let lines = main.select("." + $GRID[type + "gridLines"]).selectAll("." + $GRID[type + "gridLine"]).data(config["grid_" + type + "_lines"]);

    // exit
    $T(lines.exit()).style("opacity", "0").remove();

    // enter
    const gridLine = lines.enter().append("g");
    gridLine.append("line").style("opacity", "0");
    lines = gridLine.merge(lines);
    lines.each(function (d) {
      const g = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
      if (g.select("text").empty() && d.text) {
        g.append("text").style("opacity", "0");
      }
    });
    $T(lines.attr("class", function (d) {
      _newArrowCheck(this, _this9);
      return ($GRID[type + "gridLine"] + " " + (d.class || "")).trim();
    }.bind(this)).select("text").attr("text-anchor", getGridTextAnchor).attr("transform", function () {
      _newArrowCheck(this, _this9);
      return type === "x" ? isRotated ? null : "rotate(-90)" : isRotated ? "rotate(-90)" : null;
    }.bind(this)).attr("dx", getGridTextDx).attr("dy", -5)).text(function (d) {
      var _d$text;
      return (_d$text = d.text) != null ? _d$text : this.remove();
    });
    gridLines[type] = lines;
  },
  redrawGrid: function redrawGrid(withTransition) {
    const $$ = this,
      isRotated = $$.config.axis_rotated,
      _$$$state = $$.state,
      width = _$$$state.width,
      height = _$$$state.height,
      gridLines = $$.$el.gridLines,
      $T = $$.$T,
      xv = $$.xv.bind($$),
      yv = $$.yv.bind($$);
    let xLines = gridLines.x.select("line"),
      xTexts = gridLines.x.select("text"),
      yLines = gridLines.y.select("line"),
      yTexts = gridLines.y.select("text");
    xLines = $T(xLines, withTransition).attr("x1", isRotated ? 0 : xv).attr("x2", isRotated ? width : xv).attr("y1", isRotated ? xv : 0).attr("y2", isRotated ? xv : height);
    xTexts = $T(xTexts, withTransition).attr("x", getGridTextX(!isRotated, width, height)).attr("y", xv);
    yLines = $T(yLines, withTransition).attr("x1", isRotated ? yv : 0).attr("x2", isRotated ? yv : width).attr("y1", isRotated ? 0 : yv).attr("y2", isRotated ? height : yv);
    yTexts = $T(yTexts, withTransition).attr("x", getGridTextX(isRotated, width, height)).attr("y", yv);
    return [xLines.style("opacity", null), xTexts.style("opacity", null), yLines.style("opacity", null), yTexts.style("opacity", null)];
  },
  initFocusGrid: function initFocusGrid() {
    const $$ = this,
      config = $$.config,
      clip = $$.state.clip,
      $el = $$.$el,
      isFront = config.grid_front,
      className = "." + (isFront && $el.gridLines.main ? $GRID.gridLines : $COMMON.chart) + (isFront ? " + *" : ""),
      grid = $el.main.insert("g", className).attr("clip-path", clip.pathGrid).attr("class", $GRID.grid);
    $el.grid.main = grid;
    config.grid_x_show && grid.append("g").attr("class", $GRID.xgrids);
    config.grid_y_show && grid.append("g").attr("class", $GRID.ygrids);
    if (config.interaction_enabled && config.grid_focus_show) {
      grid.append("g").attr("class", $FOCUS.xgridFocus).append("line").attr("class", $FOCUS.xgridFocus);

      // to show xy focus grid line, should be 'tooltip.grouped=false'
      if (config.grid_focus_y && !config.tooltip_grouped) {
        grid.append("g").attr("class", $FOCUS.ygridFocus).append("line").attr("class", $FOCUS.ygridFocus);
      }
    }
  },
  /**
   * Show grid focus line
   * @param {Array} data Selected data
   * @private
   */
  showGridFocus: function showGridFocus(data) {
    var _this10 = this;
    const $$ = this,
      config = $$.config,
      _$$$state2 = $$.state,
      width = _$$$state2.width,
      height = _$$$state2.height,
      isRotated = config.axis_rotated,
      focusEl = $$.$el.main.selectAll("line." + $FOCUS.xgridFocus + ", line." + $FOCUS.ygridFocus),
      dataToShow = (data || [focusEl.datum()]).filter(function (d) {
        _newArrowCheck(this, _this10);
        return d && isValue($$.getBaseValue(d));
      }.bind(this));
    // Hide when bubble/scatter/stanford plot exists
    if (!config.tooltip_show || dataToShow.length === 0 || $$.hasType("bubble") || $$.hasArcType()) {
      return;
    }
    const isEdge = config.grid_focus_edge && !config.tooltip_grouped,
      xx = $$.xx.bind($$);
    focusEl.style("visibility", null).data(dataToShow.concat(dataToShow)).each(function (d) {
      var _this11 = this;
      const el = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this),
        pos = {
          x: xx(d),
          y: $$.getYScaleById(d.id)(d.value)
        };
      let xy;
      if (el.classed($FOCUS.xgridFocus)) {
        // will contain 'x1, y1, x2, y2' order
        xy = isRotated ? [null,
        // x1
        pos.x,
        // y1
        isEdge ? pos.y : width,
        // x2
        pos.x // y2
        ] : [pos.x, isEdge ? pos.y : null, pos.x, height];
      } else {
        const isY2 = $$.axis.getId(d.id) === "y2";
        xy = isRotated ? [pos.y,
        // x1
        isEdge && !isY2 ? pos.x : null,
        // y1
        pos.y,
        // x2
        isEdge && isY2 ? pos.x : height // y2
        ] : [isEdge && isY2 ? pos.x : null, pos.y, isEdge && !isY2 ? pos.x : width, pos.y];
      }
      ["x1", "y1", "x2", "y2"].forEach(function (v, i) {
        _newArrowCheck(this, _this11);
        return el.attr(v, xy[i]);
      }.bind(this));
    });
    smoothLines(focusEl, "grid");
    $$.showCircleFocus == null || $$.showCircleFocus(data);
  },
  hideGridFocus: function hideGridFocus() {
    const $$ = this,
      _$$$state3 = $$.state,
      inputType = _$$$state3.inputType,
      resizing = _$$$state3.resizing,
      main = $$.$el.main;
    if (inputType === "mouse" || !resizing) {
      main.selectAll("line." + $FOCUS.xgridFocus + ", line." + $FOCUS.ygridFocus).style("visibility", "hidden");
      $$.hideCircleFocus == null || $$.hideCircleFocus();
    }
  },
  updateGridFocus: function updateGridFocus() {
    const $$ = this,
      _$$$state4 = $$.state,
      inputType = _$$$state4.inputType,
      width = _$$$state4.width,
      height = _$$$state4.height,
      resizing = _$$$state4.resizing,
      grid = $$.$el.grid,
      xgridFocus = grid.main.select("line." + $FOCUS.xgridFocus);
    if (inputType === "touch") {
      if (xgridFocus.empty()) {
        resizing && ($$.showCircleFocus == null ? void 0 : $$.showCircleFocus());
      } else {
        $$.showGridFocus();
      }
    } else {
      const isRotated = $$.config.axis_rotated;
      xgridFocus.attr("x1", isRotated ? 0 : -10).attr("x2", isRotated ? width : -10).attr("y1", isRotated ? -10 : 0).attr("y2", isRotated ? -10 : height);
    }

    // need to return 'true' as of being pushed to the redraw list
    // ref: getRedrawList()
    return !0;
  },
  generateGridData: function generateGridData(type, scale) {
    var _this12 = this;
    const $$ = this,
      tickNum = $$.$el.main.select("." + $AXIS.axisX).selectAll(".tick").size();
    let gridData = [];
    if (type === "year") {
      const xDomain = $$.getXDomain(),
        _xDomain$map = xDomain.map(function (v) {
          _newArrowCheck(this, _this12);
          return v.getFullYear();
        }.bind(this)),
        firstYear = _xDomain$map[0],
        lastYear = _xDomain$map[1];
      for (let i = firstYear; i <= lastYear; i++) {
        gridData.push(new Date(i + "-01-01 00:00:00"));
      }
    } else {
      gridData = scale.ticks(10);
      if (gridData.length > tickNum) {
        // use only int
        gridData = gridData.filter(function (d) {
          _newArrowCheck(this, _this12);
          return (d + "").indexOf(".") < 0;
        }.bind(this));
      }
    }
    return gridData;
  },
  getGridFilterToRemove: function getGridFilterToRemove(params) {
    var _this13 = this;
    return params ? function (line) {
      var _this14 = this;
      _newArrowCheck(this, _this13);
      let found = !1;
      (isArray(params) ? params.concat() : [params]).forEach(function (param) {
        _newArrowCheck(this, _this14);
        if ("value" in param && line.value === param.value || "class" in param && line.class === param.class) {
          found = !0;
        }
      }.bind(this));
      return found;
    }.bind(this) : function () {
      _newArrowCheck(this, _this13);
      return !0;
    }.bind(this);
  },
  removeGridLines: function removeGridLines(params, forX) {
    var _this15 = this;
    const $$ = this,
      config = $$.config,
      $T = $$.$T,
      toRemove = $$.getGridFilterToRemove(params),
      toShow = function (line) {
        _newArrowCheck(this, _this15);
        return !toRemove(line);
      }.bind(this),
      classLines = forX ? $GRID.xgridLines : $GRID.ygridLines,
      classLine = forX ? $GRID.xgridLine : $GRID.ygridLine;
    $T($$.$el.main.select("." + classLines).selectAll("." + classLine).filter(toRemove)).style("opacity", "0").remove();
    const gridLines = "grid_" + (forX ? "x" : "y") + "_lines";
    config[gridLines] = config[gridLines].filter(toShow);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/region.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
 // selection


/* harmony default export */ var region = ({
  initRegion: function initRegion() {
    const $$ = this,
      $el = $$.$el;
    $el.region.main = $el.main.insert("g", ":first-child").attr("clip-path", $$.state.clip.path).attr("class", $REGION.regions);
  },
  updateRegion: function updateRegion() {
    const $$ = this,
      config = $$.config,
      region = $$.$el.region,
      $T = $$.$T;
    if (!region.main) {
      $$.initRegion();
    }

    // hide if arc type
    region.main.style("visibility", $$.hasArcType() ? "hidden" : null);

    // select <g> element
    const regions = region.main.selectAll("." + $REGION.region).data(config.regions);
    $T(regions.exit()).style("opacity", "0").remove();
    const regionsEnter = regions.enter().append("g");
    regionsEnter.append("rect").style("fill-opacity", "0");
    region.list = regionsEnter.merge(regions).attr("class", $$.classRegion.bind($$));
    region.list.each(function (d) {
      var _d$label;
      const g = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
      if (g.select("text").empty() && (_d$label = d.label) != null && _d$label.text) {
        (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).append("text").style("opacity", "0");
      }
    });
  },
  redrawRegion: function redrawRegion(withTransition) {
    var _this = this;
    const $$ = this,
      region = $$.$el.region,
      $T = $$.$T;
    let regions = region.list.select("rect"),
      label = region.list.selectAll("text");
    regions = $T(regions, withTransition).attr("x", $$.regionX.bind($$)).attr("y", $$.regionY.bind($$)).attr("width", $$.regionWidth.bind($$)).attr("height", $$.regionHeight.bind($$));
    label = $T(label, withTransition).attr("transform", function (d) {
      var _d$label2;
      _newArrowCheck(this, _this);
      const _ref = (_d$label2 = d.label) != null ? _d$label2 : {},
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$rotated = _ref.rotated,
        rotated = _ref$rotated === void 0 ? !1 : _ref$rotated;
      return "translate(" + ($$.regionX.bind($$)(d) + x) + ", " + ($$.regionY.bind($$)(d) + y) + ")" + (rotated ? " rotate(-90)" : "");
    }.bind(this)).attr("text-anchor", function (d) {
      var _d$label3;
      _newArrowCheck(this, _this);
      return (_d$label3 = d.label) != null && _d$label3.rotated ? "end" : null;
    }.bind(this)).attr("dy", "1em").style("fill", function (d) {
      var _d$label$color, _d$label4;
      _newArrowCheck(this, _this);
      return (_d$label$color = (_d$label4 = d.label) == null ? void 0 : _d$label4.color) != null ? _d$label$color : null;
    }.bind(this)).text(function (d) {
      var _d$label5;
      _newArrowCheck(this, _this);
      return (_d$label5 = d.label) == null ? void 0 : _d$label5.text;
    }.bind(this));
    return [regions.style("fill-opacity", function (d) {
      _newArrowCheck(this, _this);
      return isValue(d.opacity) ? d.opacity : null;
    }.bind(this)).on("end", function () {
      // remove unnecessary rect after transition
      (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this.parentNode).selectAll("rect:not([x])").remove();
    }), label.style("opacity", null)];
  },
  getRegionXY: function getRegionXY(type, d) {
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      isRotated = config.axis_rotated,
      isX = type === "x";
    let key = "start",
      currScale,
      pos = 0;
    if (d.axis === "y" || d.axis === "y2") {
      if (!isX) {
        key = "end";
      }
      if ((isX ? isRotated : !isRotated) && key in d) {
        currScale = scale[d.axis];
        pos = currScale(d[key]);
      }
    } else if ((isX ? !isRotated : isRotated) && key in d) {
      currScale = scale.zoom || scale.x;
      pos = currScale($$.axis.isTimeSeries() ? parseDate.call($$, d[key]) : d[key]);
    }
    return pos;
  },
  regionX: function regionX(d) {
    return this.getRegionXY("x", d);
  },
  regionY: function regionY(d) {
    return this.getRegionXY("y", d);
  },
  getRegionSize: function getRegionSize(type, d) {
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      state = $$.state,
      isRotated = config.axis_rotated,
      isWidth = type === "width",
      start = $$[isWidth ? "regionX" : "regionY"](d);
    let currScale,
      key = "end",
      end = state[type];
    if (d.axis === "y" || d.axis === "y2") {
      if (!isWidth) {
        key = "start";
      }
      if ((isWidth ? isRotated : !isRotated) && key in d) {
        currScale = scale[d.axis];
        end = currScale(d[key]);
      }
    } else if ((isWidth ? !isRotated : isRotated) && key in d) {
      currScale = scale.zoom || scale.x;
      end = currScale($$.axis.isTimeSeries() ? parseDate.call($$, d[key]) : d[key]);
    }
    return end < start ? 0 : end - start;
  },
  regionWidth: function regionWidth(d) {
    return this.getRegionSize("width", d);
  },
  regionHeight: function regionHeight(d) {
    return this.getRegionSize("height", d);
  },
  isRegionOnX: function isRegionOnX(d) {
    return !d.axis || d.axis === "x";
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/size.axis.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var size_axis = ({
  /**
   * Get Axis size according its position
   * @param {string} id Axis id value - x, y or y2
   * @returns {number} size Axis size value
   * @private
   */
  getAxisSize: function getAxisSize(id) {
    const $$ = this,
      isRotated = $$.config.axis_rotated;
    return isRotated && id === "x" || !isRotated && /y2?/.test(id) ? $$.getAxisWidthByAxisId(id, !0) : $$.getHorizontalAxisHeight(id);
  },
  getAxisWidthByAxisId: function getAxisWidthByAxisId(id, withoutRecompute) {
    const $$ = this;
    if ($$.axis) {
      var _$$$axis, _$$$config$padding;
      const position = (_$$$axis = $$.axis) == null ? void 0 : _$$$axis.getLabelPositionById(id),
        _$$$axis$getMaxTickSi = $$.axis.getMaxTickSize(id, withoutRecompute),
        width = _$$$axis$getMaxTickSi.width,
        gap = width === 0 ? .5 : 0;
      return width + (((_$$$config$padding = $$.config.padding) == null ? void 0 : _$$$config$padding.mode) === "fit" ? position.isInner ? 10 + gap : 10 : position.isInner ? 20 + gap : 40);
    } else {
      return 40;
    }
  },
  getHorizontalAxisHeight: function getHorizontalAxisHeight(id) {
    var _config$padding, _config$padding2;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      _state = state,
      current = _state.current,
      rotatedPadding = _state.rotatedPadding,
      isLegendRight = _state.isLegendRight,
      isLegendInset = _state.isLegendInset,
      isRotated = config.axis_rotated,
      isFitPadding = ((_config$padding = config.padding) == null ? void 0 : _config$padding.mode) === "fit",
      isInner = config["axis_" + id + "_inner"],
      hasLabelText = config["axis_" + id + "_label"].text;
    let h = ((_config$padding2 = config.padding) == null ? void 0 : _config$padding2.mode) === "fit" ? isInner && !hasLabelText ? id === "y" ? 1 : 0 : 20 : 30;
    if (id === "x" && !config.axis_x_show) {
      return 8;
    }
    if (id === "x" && isNumber(config.axis_x_height)) {
      return config.axis_x_height;
    }
    if (id === "y" && !config.axis_y_show) {
      return config.legend_show && !isLegendRight && !isLegendInset ? 10 : 1;
    }
    if (id === "y2" && !config.axis_y2_show) {
      return isFitPadding ? 0 : rotatedPadding.top;
    }
    const maxtickSize = $$.axis.getMaxTickSize(id),
      rotate = $$.getAxisTickRotate(id);
    // Calculate x/y axis height when tick rotated
    if ((id === "x" && !isRotated || /y2?/.test(id) && isRotated) && rotate) {
      h += maxtickSize.width * Math.cos(Math.PI * (90 - Math.abs(rotate)) / 180);
      if (!config.axis_x_tick_multiline && current.height) {
        if (h > current.height / 2) {
          h = current.height / 2;
        }
      }
    } else if (maxtickSize.height > 13 && config.legend_show) {
      h += maxtickSize.height - 13;
    }
    return h + ($$.axis.getLabelPositionById(id).isInner ? 0 : 10) + (id === "y2" && !isRotated ? -10 : 0);
  },
  getEventRectWidth: function getEventRectWidth() {
    const $$ = this,
      config = $$.config,
      axis = $$.axis,
      isInverted = config.axis_x_inverted,
      tickInterval = axis.x.tickInterval();
    return Math.max(0, isInverted ? Math.abs(tickInterval) : tickInterval);
  },
  /**
   * Get axis tick test rotate value
   * @param {string} id Axis id
   * @returns {number} rotate value
   * @private
   */
  getAxisTickRotate: function getAxisTickRotate(id) {
    const $$ = this,
      axis = $$.axis,
      config = $$.config,
      state = $$.state,
      $el = $$.$el;
    let rotate = config["axis_" + id + "_tick_rotate"];
    if (id === "x") {
      const allowedXAxisTypes = axis.isCategorized() || axis.isTimeSeries();
      if (config.axis_x_tick_fit && allowedXAxisTypes) {
        const xTickCount = config.axis_x_tick_count,
          currentXTicksLength = state.current.maxTickSize.x.ticks.length;
        let tickCount = 0;
        if (xTickCount) {
          tickCount = xTickCount > currentXTicksLength ? currentXTicksLength : xTickCount;
        } else if (currentXTicksLength) {
          tickCount = currentXTicksLength;
        }
        if (tickCount !== state.axis.x.tickCount) {
          const targets = $$.data.targets;
          state.axis.x.padding = $$.getXDomainPadding([$$.getXDomainMinMax(targets, "min"), $$.getXDomainMinMax(targets, "max")], tickCount);
        }
        state.axis.x.tickCount = tickCount;
      }
      if ($el.svg && config.axis_x_tick_fit && !config.axis_x_tick_multiline && !config.axis_x_tick_culling && config.axis_x_tick_autorotate && allowedXAxisTypes) {
        rotate = $$.needToRotateXAxisTickTexts() ? config.axis_x_tick_rotate : 0;
      }
    }
    return rotate;
  },
  /**
   * Check weather axis tick text needs to be rotated
   * @returns {boolean}
   * @private
   */
  needToRotateXAxisTickTexts: function needToRotateXAxisTickTexts() {
    const $$ = this,
      _$$$state = $$.state,
      axis = _$$$state.axis,
      current = _$$$state.current,
      xAxisLength = current.width - $$.getCurrentPaddingByDirection("left") - $$.getCurrentPaddingByDirection("right"),
      tickCountWithPadding = axis.x.tickCount + axis.x.padding.left + axis.x.padding.right,
      _$$$axis$getMaxTickSi2 = $$.axis.getMaxTickSize("x"),
      width = _$$$axis$getMaxTickSi2.width,
      tickLength = tickCountWithPadding ? xAxisLength / tickCountWithPadding : 0;
    return width > tickLength;
  }
});
;// CONCATENATED MODULE: ./src/config/Options/data/axis.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Axis based chart data config options
 */
/* harmony default export */ var data_axis = ({
  /**
   * Specify the keys of the x values for each data.<br><br>
   * This option can be used if we want to show the data that has different x values.
   * @name data․xs
   * @memberof Options
   * @type {object}
   * @default {}
   * @example
   * data: {
   *   xs: {
   *      data1: "x1",
   *      data2: "x2"
   *   }
   * }
   */
  data_xs: {},
  /**
   * Set a format specifier to parse string specifed as x.
   * @name data․xFormat
   * @memberof Options
   * @type {string}
   * @default %Y-%m-%d
   * @example
   * data: {
   *    x: "x",
   *    columns: [
   *        ["x", "01012019", "02012019", "03012019"],
   *        ["data1", 30, 200, 100]
   *    ],
   *    // Format specifier to parse as datetime for given 'x' string value
   *    xFormat: "%m%d%Y"
   * },
   * axis: {
   *    x: {
   *        type: "timeseries"
   *    }
   * }
   * @see [D3's time specifier](https://d3js.org/d3-time-format#locale_format)
   */
  data_xFormat: "%Y-%m-%d",
  /**
   * Set localtime format to parse x axis.
   * @name data․xLocaltime
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * data: {
   *   xLocaltime: false
   * }
   */
  data_xLocaltime: !0,
  /**
   * Sort on x axis.
   * - **NOTE:** This option works for lineish(area/line/spline/step) types only.
   * @name data․xSort
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataXSort)
   * @example
   * data: {
   *   xSort: false,
   *   x: "x",
   *   columns: [
   *     // The line graph will start to be drawn following the x axis sequence
   *     // Below data, wil start drawing x=1: 200, x=2: 300, x=3: 100
   *     ["x", 3, 1, 2],
   *     ["data1", 100, 200, 300]
   *   ]
   * }
   */
  data_xSort: !0,
  /**
   * Set y axis the data related to. y and y2 can be used.
   * - **NOTE:** If all data is related to one of the axes, the domain of axis without related data will be replaced by the domain from the axis with related data
   * @name data․axes
   * @memberof Options
   * @type {object}
   * @default {}
   * @example
   * data: {
   *   axes: {
   *     data1: "y",
   *     data2: "y2"
   *   }
   * }
   */
  data_axes: {},
  /**
   * Define regions for each data.<br>
   * The values must be an array for each data and it should include an object that has `start`, `end` and `style`.
   * - The object type should be as:
   *   - start {number}: Start data point number. If not set, the start will be the first data point.
   *   - [end] {number}: End data point number. If not set, the end will be the last data point.
   *   - [style.dasharray="2 2"] {object}: The first number specifies a distance for the filled area, and the second a distance for the unfilled area.
   * - **NOTE:** Currently this option supports only line chart and dashed style. If this option specified, the line will be dashed only in the regions.
   * @name data․regions
   * @memberof Options
   * @type {object}
   * @default {}
   * @example
   * data: {
   *   regions: {
   *     data1: [{
   *         start: 1,
   *         end: 2,
   *         style: {
   *             dasharray: "5 2"
   *         }
   *     }, {
   *         start: 3
   *     }],
   *     ...
   *   }
   * }
   */
  data_regions: {},
  /**
   * Set the stacking to be normalized
   * - **NOTE:**
   *   - For stacking, '[data.groups](#.data%25E2%2580%25A4groups)' option should be set
   *   - y Axis will be set in percentage value (0 ~ 100%)
   *   - Must have postive values
   * @name data․stack․normalize
   * @memberof Options
   * @type {boolean}
   * @default false
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataStackNormalized)
   * @example
   * data: {
   *   stack: {
   *      normalize: true
   *   }
   * }
   */
  data_stack_normalize: !1
});
;// CONCATENATED MODULE: ./src/config/Options/axis/x.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * x Axis config options
 */
/* harmony default export */ var axis_x = ({
  /**
   * Set clip-path attribute for x axis element
   * @name axis․x․clipPath
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo]()
   * @example
   * // don't set 'clip-path' attribute
   * clipPath: false
   */
  axis_x_clipPath: !0,
  /**
   * Show or hide x axis.
   * @name axis․x․show
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   x: {
   *     show: false
   *   }
   * }
   */
  axis_x_show: !0,
  /**
   * Set type of x axis.<br><br>
   * **Available Values:**
   * - category
   * - indexed
   * - log
   * - timeseries
   *
   * **NOTE:**<br>
   * - **log** type:
   *   - the x values specified by [`data.x`](#.data%25E2%2580%25A4x)(or by any equivalent option), must be exclusively-positive.
   *   - x axis min value should be >= 0.
   *   - for 'category' type, `data.xs` option isn't supported.
   *
   * @name axis․x․type
   * @memberof Options
   * @type {string}
   * @default indexed
   * @see [Demo: indexed](https://naver.github.io/billboard.js/demo/#Chart.AreaChart)
   * @see [Demo: timeseries](https://naver.github.io/billboard.js/demo/#Chart.TimeseriesChart)
   * @see [Demo: category](https://naver.github.io/billboard.js/demo/#Data.CategoryData)
   * @see [Demo: log](https://naver.github.io/billboard.js/demo/#Axis.LogScales)
   * @example
   * axis: {
   *   x: {
   *     type: "timeseries"
   *   }
   * }
   */
  axis_x_type: "indexed",
  /**
   * Set how to treat the timezone of x values.<br>
   * If true, treat x value as localtime. If false, convert to UTC internally.
   * @name axis․x․localtime
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   x: {
   *     localtime: false
   *   }
   * }
   */
  axis_x_localtime: !0,
  /**
   * Set category names on category axis.
   * This must be an array that includes category names in string. If category names are included in the date by data.x option, this is not required.
   * @name axis․x․categories
   * @memberof Options
   * @type {Array}
   * @default []
   * @example
   * axis: {
   *   x: {
   *     categories: ["Category 1", "Category 2", ...]
   *   }
   * }
   */
  axis_x_categories: [],
  /**
   * centerize ticks on category axis.
   * @name axis․x․tick․centered
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       centered: true
   *     }
   *   }
   * }
   */
  axis_x_tick_centered: !1,
  /**
   * A function to format tick value. Format string is also available for timeseries data.
   * @name axis․x․tick․format
   * @memberof Options
   * @type {Function|string}
   * @default undefined
   * @see [D3's time specifier](https://d3js.org/d3-time-format#locale_format)
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *        // for timeseries, a 'datetime' object is given as parameter
   *       format: function(x) {
   *           return x.getFullYear();
   *       }
   *
   *       // for category, index(Number) and categoryName(String) are given as parameter
   *       format: function(index, categoryName) {
   *           return categoryName.substr(0, 10);
   *       },
   *
   *        // for timeseries format specifier
   *        format: "%Y-%m-%d %H:%M:%S"
   *     }
   *   }
   * }
   */
  axis_x_tick_format: undefined,
  /**
   * Setting for culling ticks.
   * - `true`: the ticks will be culled, then only limited tick text will be shown.<br>
   *   This option does not hide the tick lines by default, if want to hide tick lines, set `axis.x.tick.culling.lines=false`.
   * - `false`: all of ticks will be shown.<br><br>
   * The number of ticks to be shown can be chaned by `axis.x.tick.culling.max`.
   * @name axis․x․tick․culling
   * @memberof Options
   * @type {boolean}
   * @default
   * `true` for indexed axis and timeseries axis, `false` for category axis
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       culling: false
   *     }
   *   }
   * }
   */
  axis_x_tick_culling: {},
  /**
   * The number of tick texts will be adjusted to less than this value.
   * @name axis․x․tick․culling․max
   * @memberof Options
   * @type {number}
   * @default 10
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       culling: {
   *           max: 5
   *       }
   *     }
   *   }
   * }
   */
  axis_x_tick_culling_max: 10,
  /**
   * Control visibility of tick lines within culling option, along with tick text.
   * @name axis․x․tick․culling․lines
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       culling: {
   *           lines: false,
   *       }
   *     }
   *   }
   * }
   */
  axis_x_tick_culling_lines: !0,
  /**
   * The number of x axis ticks to show.<br><br>
   * This option hides tick lines together with tick text. If this option is used on timeseries axis, the ticks position will be determined precisely and not nicely positioned (e.g. it will have rough second value).
   * @name axis․x․tick․count
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       count: 5
   *     }
   *   }
   * }
   */
  axis_x_tick_count: undefined,
  /**
   * Show or hide x axis tick line.
   * @name axis․x․tick․show
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       show: false
   *     }
   *   }
   * }
   */
  axis_x_tick_show: !0,
  /**
   * Show or hide x axis tick text.
   * @name axis․x․tick․text․show
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       text: {
   *           show: false
   *       }
   *     }
   *   }
   * }
   */
  axis_x_tick_text_show: !0,
  /**
   * Set the x Axis tick text's position relatively its original position
   * @name axis․x․tick․text․position
   * @memberof Options
   * @type {object}
   * @default {x: 0, y:0}
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       text: {
   *         position: {
   *           x: 10,
   *           y: 10
   *         }
   *       }
   *     }
   *   }
   * }
   */
  axis_x_tick_text_position: {
    x: 0,
    y: 0
  },
  /**
   * Fit x axis ticks.
   * - **true**: ticks will be shown according to x value of the data points.
   * - **false**: ticks will be shown as to have same intervals.
   * @name axis․x․tick․fit
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.XAxisTickFitting)
   * @see [Demo: for timeseries zoom](https://naver.github.io/billboard.js/demo/#Axis.XAxisTickTimeseries)
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       fit: false
   *     }
   *   }
   * }
   */
  axis_x_tick_fit: !0,
  /**
   * Set the x values of ticks manually.<br><br>
   * If this option is provided, the position of the ticks will be determined based on those values.<br>
   * This option works with `timeseries` data and the x values will be parsed accoding to the type of the value and data.xFormat option.
   * @name axis․x․tick․values
   * @memberof Options
   * @type {Array|Function}
   * @default null
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       values: [1, 2, 4, 8, 16, 32, ...],
   *
   *       // an Array value should be returned
   *       values: function() {
   *       	return [ ... ];
   *       }
   *     }
   *   }
   * }
   */
  axis_x_tick_values: null,
  /**
   * Rotate x axis tick text if there is not enough space for 'category' and 'timeseries' type axis.
   * - **NOTE:** The conditions where `autorotate` is enabled are:
   *   - axis.x.type='category' or 'timeseries
   *   - axis.x.tick.multiline=false
   *   - axis.x.tick.culling=false
   *   - axis.x.tick.fit=true
   * - **NOTE:** axis.x.tick.clippath=false is necessary for calculating the overflow padding between the end of x axis and the width of the SVG
   * @name axis․x․tick․autorotate
   * @memberof Options
   * @type {boolean}
   * @default false
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.XAxisTickAutorotate)
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       rotate: 15,
   *       autorotate: true,
   *       multiline: false,
   *       culling: false,
   *       fit: true
   *     },
   *     clipPath: false
   *   }
   * }
   */
  axis_x_tick_autorotate: !1,
  /**
   * Rotate x axis tick text.
   * - If you set negative value, it will rotate to opposite direction.
   * - Applied when [`axis.rotated`](#.axis%25E2%2580%25A4rotated) option is `false`.
   * - As long as `axis_x_tick_fit` is set to `true` it will calculate an overflow for the y2 axis and add this value to the right padding.
   * @name axis․x․tick․rotate
   * @memberof Options
   * @type {number}
   * @default 0
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.RotateXAxisTickText)
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       rotate: 60
   *     }
   *   }
   * }
   */
  axis_x_tick_rotate: 0,
  /**
   * Show x axis outer tick.
   * @name axis․x․tick․outer
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       outer: false
   *     }
   *   }
   * }
   */
  axis_x_tick_outer: !0,
  /**
   * Set tick text to be multiline
   * - **NOTE:**
   *  > When x tick text contains `\n`, it's used as line break and 'axis.x.tick.width' option is ignored.
   * @name axis․x․tick․multiline
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.XAxisTickMultiline)
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       multiline: false
   *     }
   *   }
   * }
   * @example
   * // example of line break with '\n'
   * // In this case, 'axis.x.tick.width' is ignored
   * data: {
   *    x: "x",
   *    columns: [
   *        ["x", "long\ntext", "Another\nLong\nText"],
   *        ...
   *    ],
   * }
   */
  axis_x_tick_multiline: !0,
  /**
   * Set tick width
   * - **NOTE:**
   *  > When x tick text contains `\n`, this option is ignored.
   * @name axis․x․tick․width
   * @memberof Options
   * @type {number}
   * @default null
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       width: 50
   *     }
   *   }
   * }
   */
  axis_x_tick_width: null,
  /**
   * Set to display system tooltip(via 'title' attribute) for tick text
   * - **NOTE:** Only available for category axis type (`axis.x.type='category'`)
   * @name axis․x․tick․tooltip
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * axis: {
   *   x: {
   *     tick: {
   *       tooltip: true
   *     }
   *   }
   * }
   */
  axis_x_tick_tooltip: !1,
  /**
   * Set max value of x axis range.
   * @name axis․x․max
   * @memberof Options
   * @property {number} max Set the max value
   * @property {boolean} [max.fit=false] When specified `max.value` is greater than the bound data value, setting `true` will make x axis max to be fitted to the bound data max value.
   * - **NOTE:** If the bound data max value is greater than the `max.value`, the x axis max will be limited as the given `max.value`.
   * @property {number} [max.value] Set the max value
   * @example
   * axis: {
   *   x: {
   *     max: 100,
   *
   *     max: {
   *       // 'fit=true' will make x axis max to be limited as the bound data value max when 'max.value' is greater.
   *       // - when bound data max is '10' and max.value: '100' ==>  x axis max will be '10'
   *       // - when bound data max is '1000' and max.value: '100' ==> x axis max will be '100'
   *       fit: true,
   *       value: 100
   *     }
   *   }
   * }
   */
  axis_x_max: undefined,
  /**
   * Set min value of x axis range.
   * @name axis․x․min
   * @memberof Options
   * @property {number} min Set the min value
   * @property {boolean} [min.fit=false] When specified `min.value` is lower than the bound data value, setting `true` will make x axis min to be fitted to the bound data min value.
   * - **NOTE:** If the bound data min value is lower than the `min.value`, the x axis min will be limited as the given `min.value`.
   * @property {number} [min.value] Set the min value
   * @example
   * axis: {
   *   x: {
   *     min: -100,
   *
   *     min: {
   *       // 'fit=true' will make x axis min to be limited as the bound data value min when 'min.value' is lower.
   *       // - when bound data min is '-10' and min.value: '-100' ==>  x axis min will be '-10'
   *       // - when bound data min is '-1000' and min.value: '-100' ==> x axis min will be '-100'
   *       fit: true,
   *       value: -100
   *     }
   *   }
   * }
   */
  axis_x_min: undefined,
  /**
   * Change the direction of x axis.<br><br>
   * If true set, the direction will be `right -> left`.
   * @name axis․x․inverted
   * @memberof Options
   * @type {boolean}
   * @default false
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.InvertedAxis)
   * @example
   * axis: {
   *   x: {
   *     inverted: true
   *   }
   * }
   */
  axis_x_inverted: !1,
  /**
   * Set padding for x axis.<br><br>
   * If this option is set, the range of x axis will increase/decrease according to the values.
   * If no padding is needed in the rage of x axis, 0 should be set.
   * By default, left/right padding are set depending on x axis type or chart types.
   * - **NOTE:**
   *   - The meaning of padding values, differs according axis types:<br>
   *     - **category/indexed:** The unit of tick value
   *       ex. the given value `1`, is same as the width of 1 tick width
   *     - **timeseries:** Numeric time value
   *       ex. the given value `1000*60*60*24`, which is numeric time equivalent of a day, is same as the width of 1 tick width
   *   - If want values to be treated as pixels, specify `unit:"px"`.
   *     - The pixel value will be convered based on the scale values. Hence can not reflect accurate padding result.
   * @name axis․x․padding
   * @memberof Options
   * @type {object|number}
   * @default {}
   * @example
   * axis: {
   *   x: {
   *     padding: {
   *       // when axis type is 'category'
   *       left: 1,  // set left padding width of equivalent value of a tick's width
   *       right: 0.5  // set right padding width as half of equivalent value of tick's width
   *
   *       // when axis type is 'timeseries'
   *       left: 1000*60*60*24,  // set left padding width of equivalent value of a day tick's width
   *       right: 1000*60*60*12   // set right padding width as half of equivalent value of a day tick's width
   *     },
   *
   *     // or set both values at once.
   *     padding: 10,
   *
   *     // or set padding values as pixel unit.
   *     padding: {
   *       left: 100,
   *       right: 50,
   *       unit: "px"
   *     },
   *   }
   * }
   */
  axis_x_padding: {},
  /**
   * Set height of x axis.<br><br>
   * The height of x axis can be set manually by this option. If you need more space for x axis, please use this option for that. The unit is pixel.
   * @name axis․x․height
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   x: {
   *     height: 20
   *   }
   * }
   */
  axis_x_height: undefined,
  /**
   * Set default extent for subchart and zoom. This can be an array or function that returns an array.
   * @name axis․x․extent
   * @memberof Options
   * @type {Array|Function}
   * @default undefined
   * @example
   * axis: {
   *   x: {
   *     // extent range as a pixel value
   *     extent: [0, 200],
   *
   *     // when axis is 'timeseries', parsable datetime string
   *     extent: ["2019-03-01", "2019-03-05"],
   *
   *     // return extent value
   *     extent: function(domain, scale) {
   *    	 var extent = domain.map(function(v) {
   *     	    return scale(v);
   *     	 });
   *
   *   	 // it should return a format of array
   *   	 // ex) [0, 584]
   *     	 return extent;
   *     }
   *   }
   * }
   */
  axis_x_extent: undefined,
  /**
   * Set label on x axis.<br><br>
   * You can set x axis label and change its position by this option.
   * `string` and `object` can be passed and we can change the poisiton by passing object that has position key.<br>
   * Available position differs according to the axis direction (vertical or horizontal).
   * If string set, the position will be the default.
   *
   *  - **If it's horizontal axis:**
   *    - inner-right [default]
   *    - inner-center
   *    - inner-left
   *    - outer-right
   *    - outer-center
   *    - outer-left
   *  - **If it's vertical axis:**
   *    - inner-top [default]
   *    - inner-middle
   *    - inner-bottom
   *    - outer-top
   *    - outer-middle
   *    - outer-bottom
   * @name axis․x․label
   * @memberof Options
   * @type {string|object}
   * @default undefined
   * @example
   * axis: {
   *   x: {
   *     label: "Your X Axis"
   *   }
   * }
   *
   * axis: {
   *   x: {
   *     label: {
   *        text: "Your X Axis",
   *        position: "outer-center"
   *     }
   *   }
   * }
   */
  axis_x_label: {},
  /**
   * Set additional axes for x Axis.
   * - **NOTE:** Axis' scale is based on x Axis value if domain option isn't set.
   *
   * Each axis object should consist with following options:
   *
   * | Name | Type | Default | Description |
   * | --- | --- | --- | --- |
   * | domain | Array | - | Set the domain value |
   * | tick.outer | boolean | true | Show outer tick |
   * | tick.format | Function | - | Set formatter for tick text |
   * | tick.count | Number | - | Set the number of y axis ticks |
   * | tick.values | Array | - | Set tick values manually |
   * @name axis․x․axes
   * @memberof Options
   * @type {Array}
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.MultiAxes)
   * @see [Demo: Domain](https://naver.github.io/billboard.js/demo/#Axis.MultiAxesDomain)
   * @example
   * x: {
   *    axes: [
   *      {
   *        // if set, will not be correlated with the main x Axis domain value
   *        domain: [0, 1000],
   *        tick: {
   *          outer: false,
   *          format: function(x) {
   *             return x + "%";
   *          },
   *          count: 2,
   *          values: [10, 20, 30]
   *        }
   *      },
   *      ...
   *    ]
   * }
   */
  axis_x_axes: []
});
;// CONCATENATED MODULE: ./src/config/Options/axis/y.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * y Axis  config options
 */
/* harmony default export */ var y = ({
  /**
   * Set clip-path attribute for y axis element
   * - **NOTE**: `clip-path` attribute for y Axis is set only when `axis.y.inner` option is true.
   * @name axis․y․clipPath
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * // don't set 'clip-path' attribute
   * clipPath: false
   */
  axis_y_clipPath: !0,
  /**
   * Show or hide y axis.
   * @name axis․y․show
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   y: {
   *     show: false
   *   }
   * }
   */
  axis_y_show: !0,
  /**
   * Set type of y axis.<br><br>
   * **Available Values:**
   *  - indexed
   *  - log
   *  - timeseries
   *
   * **NOTE:**<br>
   * - **log** type:
   *   - the bound data values must be exclusively-positive.
   *   - y axis min value should be >= 0.
   *   - [`data.groups`](#.data%25E2%2580%25A4groups)(stacked data) option aren't supported.
   *
   * @name axis․y․type
   * @memberof Options
   * @type {string}
   * @default "indexed"
   * @see [Demo: log](https://naver.github.io/billboard.js/demo/#Axis.LogScales)
   * @example
   * axis: {
   *   y: {
   *     type: "log"
   *   }
   * }
   */
  axis_y_type: "indexed",
  /**
   * Set max value of y axis.
   * - **NOTE:** Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).
   * @name axis․y․max
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   y: {
   *     max: 1000
   *   }
   * }
   */
  axis_y_max: undefined,
  /**
   * Set min value of y axis.
   * - **NOTE:**
   *   Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).
   * @name axis․y․min
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   y: {
   *     min: 1000
   *   }
   * }
   */
  axis_y_min: undefined,
  /**
   * Change the direction of y axis.<br><br>
   * If true set, the direction will be `top -> bottom`.
   * @name axis․y․inverted
   * @memberof Options
   * @type {boolean}
   * @default false
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.InvertedAxis)
   * @example
   * axis: {
   *   y: {
   *     inverted: true
   *   }
   * }
   */
  axis_y_inverted: !1,
  /**
   * Set center value of y axis.
   * @name axis․y․center
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   y: {
   *     center: 0
   *   }
   * }
   */
  axis_y_center: undefined,
  /**
   * Show y axis inside of the chart.
   * @name axis․y․inner
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * axis: {
   *   y: {
   *     inner: true
   *   }
   * }
   */
  axis_y_inner: !1,
  /**
   * Set label on y axis.<br><br>
   * You can set y axis label and change its position by this option. This option works in the same way as [axis.x.label](#.axis%25E2%2580%25A4x%25E2%2580%25A4label).
   * @name axis․y․label
   * @memberof Options
   * @type {string|object}
   * @default {}
   * @see [axis.x.label](#.axis%25E2%2580%25A4x%25E2%2580%25A4label) for position string value.
   * @example
   * axis: {
   *   y: {
   *     label: "Your Y Axis"
   *   }
   * }
   *
   * axis: {
   *   y: {
   *     label: {
   *        text: "Your Y Axis",
   *        position: "outer-middle"
   *     }
   *   }
   * }
   */
  axis_y_label: {},
  /**
   * Set formatter for y axis tick text.<br><br>
   * This option accepts d3.format object as well as a function you define.
   * @name axis․y․tick․format
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       format: function(x) {
   *           return x.getFullYear();
   *       }
   *     }
   *   }
   * }
   */
  axis_y_tick_format: undefined,
  /**
   * Setting for culling ticks.
   * - `true`: the ticks will be culled, then only limited tick text will be shown.<br>
   *   This option does not hide the tick lines by default, if want to hide tick lines, set `axis.y.tick.culling.lines=false`.
   * - `false`: all of ticks will be shown.<br><br>
   * The number of ticks to be shown can be chaned by `axis.y.tick.culling.max`.
   * @name axis․y․tick․culling
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       culling: false
   *     }
   *   }
   * }
   */
  axis_y_tick_culling: !1,
  /**
   * The number of tick texts will be adjusted to less than this value.
   * @name axis․y․tick․culling․max
   * @memberof Options
   * @type {number}
   * @default 5
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       culling: {
   *           max: 5
   *       }
   *     }
   *   }
   * }
   */
  axis_y_tick_culling_max: 5,
  /**
   * Control visibility of tick lines within culling option, along with tick text.
   * @name axis․y․tick․culling․lines
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       culling: {
   *           lines: false,
   *       }
   *     }
   *   }
   * }
   */
  axis_y_tick_culling_lines: !0,
  /**
   * Show y axis outer tick.
   * @name axis․y․tick․outer
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       outer: false
   *     }
   *   }
   * }
   */
  axis_y_tick_outer: !0,
  /**
   * Set y axis tick values manually.
   * @name axis․y․tick․values
   * @memberof Options
   * @type {Array|Function}
   * @default null
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       values: [100, 1000, 10000],
   *
   *       // an Array value should be returned
   *       values: function() {
   *       	return [ ... ];
   *       }
   *     }
   *   }
   * }
   */
  axis_y_tick_values: null,
  /**
   * Rotate y axis tick text.
   * - If you set negative value, it will rotate to opposite direction.
   * - Applied when [`axis.rotated`](#.axis%25E2%2580%25A4rotated) option is `true`.
   * @name axis․y․tick․rotate
   * @memberof Options
   * @type {number}
   * @default 0
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       rotate: 60
   *     }
   *   }
   * }
   */
  axis_y_tick_rotate: 0,
  /**
   * Set the number of y axis ticks.<br><br>
   * - **NOTE:** The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.
   * @name axis․y․tick․count
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       count: 5
   *     }
   *   }
   * }
   */
  axis_y_tick_count: undefined,
  /**
   * Show or hide y axis tick line.
   * @name axis․y․tick․show
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       show: false
   *     }
   *   }
   * }
   */
  axis_y_tick_show: !0,
  /**
   * Set axis tick step(interval) size.
   * - **NOTE:** Will be ignored if `axis.y.tick.count` or `axis.y.tick.values` options are set.
   * @name axis․y․tick․stepSize
   * @memberof Options
   * @type {number}
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.StepSizeForYAxis)
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       // tick value will step as indicated interval value.
   *       // ex) 'stepSize=15' ==> [0, 15, 30, 45, 60]
   *       stepSize: 15
   *     }
   *   }
   * }
   */
  axis_y_tick_stepSize: null,
  /**
   * Show or hide y axis tick text.
   * @name axis․y․tick․text․show
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       text: {
   *           show: false
   *       }
   *     }
   *   }
   * }
   */
  axis_y_tick_text_show: !0,
  /**
   * Set the y Axis tick text's position relatively its original position
   * @name axis․y․tick․text․position
   * @memberof Options
   * @type {object}
   * @default {x: 0, y:0}
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       text: {
   *         position: {
   *           x: 10,
   *           y: 10
   *         }
   *       }
   *     }
   *   }
   * }
   */
  axis_y_tick_text_position: {
    x: 0,
    y: 0
  },
  /**
   * Set the number of y axis ticks.<br><br>
   * - **NOTE:** The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.
   * @name axis․y․tick․time
   * @memberof Options
   * @private
   * @type {object}
   * @property {object} time time object
   * @property {Function} [time.value] D3's time interval function (https://github.com/d3/d3-time#intervals)
   * @example
   * axis: {
   *   y: {
   *     tick: {
   *       time: {
   *          // ticks at 15-minute intervals
   *          // https://github.com/d3/d3-scale/blob/master/README.md#time_ticks
   *          value: d3.timeMinute.every(15)
   *       }
   *     }
   *   }
   * }
   */
  // @TODO: not fully implemented yet
  axis_y_tick_time_value: undefined,
  /**
   * Set padding for y axis.<br><br>
   * You can set padding for y axis to create more space on the edge of the axis.
   * This option accepts object and it can include top and bottom. top, bottom will be treated as pixels.
   *
   * - **NOTE:**
   *   - Given values are translated relative to the y Axis domain value for padding
   *   - For area and bar type charts, [area.zerobased](#.area) or [bar.zerobased](#.bar) options should be set to 'false` to get padded bottom.
   * @name axis․y․padding
   * @memberof Options
   * @type {object|number}
   * @default {}
   * @example
   * axis: {
   *   y: {
   *     padding: {
   *       top: 0,
   *       bottom: 0
   *     },
   *
   *     // or set both values at once.
   *     padding: 10
   *   }
   * }
   */
  axis_y_padding: {},
  /**
   * Set default range of y axis.<br><br>
   * This option set the default value for y axis when there is no data on init.
   * @name axis․y․default
   * @memberof Options
   * @type {Array}
   * @default undefined
   * @example
   * axis: {
   *   y: {
   *     default: [0, 1000]
   *   }
   * }
   */
  axis_y_default: undefined,
  /**
   * Set additional axes for y Axis.
   * - **NOTE:** Axis' scale is based on y Axis value if domain option isn't set.
   *
   * Each axis object should consist with following options:
   *
   * | Name | Type | Default | Description |
   * | --- | --- | --- | --- |
   * | domain | Array | - | Set the domain value |
   * | tick.outer | boolean | true | Show outer tick |
   * | tick.format | Function | - | Set formatter for tick text |
   * | tick.count | Number | - | Set the number of y axis ticks |
   * | tick.values | Array | - | Set tick values manually |
   * @name axis․y․axes
   * @memberof Options
   * @type {Array}
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.MultiAxes)
   * @see [Demo: Domain](https://naver.github.io/billboard.js/demo/#Axis.MultiAxesDomain)
   * @example
   * y: {
   *    axes: [
   *      {
   *        // if set, will not be correlated with the main y Axis domain value
   *        domain: [0, 1000],
   *        tick: {
   *          outer: false,
   *          format: function(x) {
   *             return x + "%";
   *          },
   *          count: 2,
   *          values: [10, 20, 30]
   *        }
   *      },
   *      ...
   *    ]
   * }
   */
  axis_y_axes: []
});
;// CONCATENATED MODULE: ./src/config/Options/axis/y2.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * y2 Axis  config options
 */
/* harmony default export */ var y2 = ({
  /**
   * Show or hide y2 axis.
   * - **NOTE**:
   *   - When set to `false` will not generate y2 axis node. In this case, all 'y2' axis related functionality won't work properly.
   *   - If need to use 'y2' related options while y2 isn't visible, set the value `true` and control visibility by css display property.
   * @name axis․y2․show
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * axis: {
   *   y2: {
   *     show: true
   *   }
   * }
   */
  axis_y2_show: !1,
  /**
   * Set type of y2 axis.<br><br>
   * **Available Values:**
   *  - indexed
   *  - log
   *  - timeseries
   *
   * **NOTE:**<br>
   * - **log** type:
   *   - the bound data values must be exclusively-positive.
   *   - y2 axis min value should be >= 0.
   *   - [`data.groups`](#.data%25E2%2580%25A4groups)(stacked data) option aren't supported.
   *
   * @name axis․y2․type
   * @memberof Options
   * @type {string}
   * @default "indexed"
   * @see [Demo: log](https://naver.github.io/billboard.js/demo/#Axis.LogScales)
   * @example
   * axis: {
   *   y2: {
   *     type: "indexed"
   *   }
   * }
   */
  axis_y2_type: "indexed",
  /**
   * Set max value of y2 axis.
   * @name axis․y2․max
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   y2: {
   *     max: 1000
   *   }
   * }
   */
  axis_y2_max: undefined,
  /**
   * Set min value of y2 axis.
   * @name axis․y2․min
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   y2: {
   *     min: -1000
   *   }
   * }
   */
  axis_y2_min: undefined,
  /**
   * Change the direction of y2 axis.<br><br>
   * If true set, the direction will be `top -> bottom`.
   * @name axis․y2․inverted
   * @memberof Options
   * @type {boolean}
   * @default false
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.InvertedAxis)
   * @example
   * axis: {
   *   y2: {
   *     inverted: true
   *   }
   * }
   */
  axis_y2_inverted: !1,
  /**
   * Set center value of y2 axis.
   * @name axis․y2․center
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   y2: {
   *     center: 0
   *   }
   * }
   */
  axis_y2_center: undefined,
  /**
   * Show y2 axis inside of the chart.
   * @name axis․y2․inner
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * axis: {
   *   y2: {
   *     inner: true
   *   }
   * }
   */
  axis_y2_inner: !1,
  /**
   * Set label on y2 axis.<br><br>
   * You can set y2 axis label and change its position by this option. This option works in the same way as [axis.x.label](#.axis%25E2%2580%25A4x%25E2%2580%25A4label).
   * @name axis․y2․label
   * @memberof Options
   * @type {string|object}
   * @default {}
   * @see [axis.x.label](#.axis%25E2%2580%25A4x%25E2%2580%25A4label) for position string value.
   * @example
   * axis: {
   *   y2: {
   *     label: "Your Y2 Axis"
   *   }
   * }
   *
   * axis: {
   *   y2: {
   *     label: {
   *        text: "Your Y2 Axis",
   *        position: "outer-middle"
   *     }
   *   }
   * }
   */
  axis_y2_label: {},
  /**
   * Set formatter for y2 axis tick text.<br><br>
   * This option works in the same way as axis.y.format.
   * @name axis․y2․tick․format
   * @memberof Options
   * @type {Function}
   * @default undefined
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       format: d3.format("$,")
   *       //or format: function(d) { return "$" + d; }
   *     }
   *   }
   * }
   */
  axis_y2_tick_format: undefined,
  /**
   * Setting for culling ticks.
   * - `true`: the ticks will be culled, then only limited tick text will be shown.<br>
   *   This option does not hide the tick lines by default, if want to hide tick lines, set `axis.y2.tick.culling.lines=false`.
   * - `false`: all of ticks will be shown.<br><br>
   * The number of ticks to be shown can be chaned by `axis.y2.tick.culling.max`.
   * @name axis․y2․tick․culling
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       culling: false
   *     }
   *   }
   * }
   */
  axis_y2_tick_culling: !1,
  /**
   * The number of tick texts will be adjusted to less than this value.
   * @name axis․y2․tick․culling․max
   * @memberof Options
   * @type {number}
   * @default 5
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       culling: {
   *           max: 5
   *       }
   *     }
   *   }
   * }
   */
  axis_y2_tick_culling_max: 5,
  /**
   * Control visibility of tick lines within culling option, along with tick text.
   * @name axis․y2․tick․culling․lines
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       culling: {
   *           lines: false,
   *       }
   *     }
   *   }
   * }
   */
  axis_y2_tick_culling_lines: !0,
  /**
   * Show or hide y2 axis outer tick.
   * @name axis․y2․tick․outer
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       outer: false
   *     }
   *   }
   * }
   */
  axis_y2_tick_outer: !0,
  /**
   * Set y2 axis tick values manually.
   * @name axis․y2․tick․values
   * @memberof Options
   * @type {Array|Function}
   * @default null
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       values: [100, 1000, 10000],
   *
   *       // an Array value should be returned
   *       values: function() {
   *       	return [ ... ];
   *       }
   *     }
   *   }
   * }
   */
  axis_y2_tick_values: null,
  /**
   * Rotate y2 axis tick text.
   * - If you set negative value, it will rotate to opposite direction.
   * - Applied when [`axis.rotated`](#.axis%25E2%2580%25A4rotated) option is `true`.
   * @name axis․y2․tick․rotate
   * @memberof Options
   * @type {number}
   * @default 0
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       rotate: 60
   *     }
   *   }
   * }
   */
  axis_y2_tick_rotate: 0,
  /**
   * Set the number of y2 axis ticks.
   * - **NOTE:** This works in the same way as axis.y.tick.count.
   * @name axis․y2․tick․count
   * @memberof Options
   * @type {number}
   * @default undefined
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       count: 5
   *     }
   *   }
   * }
   */
  axis_y2_tick_count: undefined,
  /**
   * Show or hide y2 axis tick line.
   * @name axis․y2․tick․show
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       show: false
   *     }
   *   }
   * }
   */
  axis_y2_tick_show: !0,
  /**
   * Set axis tick step(interval) size.
   * - **NOTE:** Will be ignored if `axis.y2.tick.count` or `axis.y2.tick.values` options are set.
   * @name axis․y2․tick․stepSize
   * @memberof Options
   * @type {number}
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.StepSizeForYAxis)
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       // tick value will step as indicated interval value.
   *       // ex) 'stepSize=15' ==> [0, 15, 30, 45, 60]
   *       stepSize: 15
   *     }
   *   }
   * }
   */
  axis_y2_tick_stepSize: null,
  /**
   * Show or hide y2 axis tick text.
   * @name axis․y2․tick․text․show
   * @memberof Options
   * @type {boolean}
   * @default true
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       text: {
   *           show: false
   *       }
   *     }
   *   }
   * }
   */
  axis_y2_tick_text_show: !0,
  /**
   * Set the y2 Axis tick text's position relatively its original position
   * @name axis․y2․tick․text․position
   * @memberof Options
   * @type {object}
   * @default {x: 0, y:0}
   * @example
   * axis: {
   *   y2: {
   *     tick: {
   *       text: {
   *         position: {
   *           x: 10,
   *           y: 10
   *         }
   *       }
   *     }
   *   }
   * }
   */
  axis_y2_tick_text_position: {
    x: 0,
    y: 0
  },
  /**
   * Set padding for y2 axis.<br><br>
   * You can set padding for y2 axis to create more space on the edge of the axis.
   * This option accepts object and it can include top and bottom. top, bottom will be treated as pixels.
   *
   * - **NOTE:**
   *   - Given values are translated relative to the y2 Axis domain value for padding
   *   - For area and bar type charts, [area.zerobased](#.area) or [bar.zerobased](#.bar) options should be set to 'false` to get padded bottom.
   * @name axis․y2․padding
   * @memberof Options
   * @type {object|number}
   * @default {}
   * @example
   * axis: {
   *   y2: {
   *     padding: {
   *       top: 100,
   *       bottom: 100
   *     }
   *
   *     // or set both values at once.
   *     padding: 10
   * }
   */
  axis_y2_padding: {},
  /**
   * Set default range of y2 axis.<br><br>
   * This option set the default value for y2 axis when there is no data on init.
   * @name axis․y2․default
   * @memberof Options
   * @type {Array}
   * @default undefined
   * @example
   * axis: {
   *   y2: {
   *     default: [0, 1000]
   *   }
   * }
   */
  axis_y2_default: undefined,
  /**
   * Set additional axes for y2 Axis.
   * - **NOTE:** Axis' scale is based on y2 Axis value if domain option isn't set.
   *
   * Each axis object should consist with following options:
   *
   * | Name | Type | Default | Description |
   * | --- | --- | --- | --- |
   * | domain | Array | - | Set the domain value |
   * | tick.outer | boolean | true | Show outer tick |
   * | tick.format | Function | - | Set formatter for tick text |
   * | tick.count | Number | - | Set the number of y axis ticks |
   * | tick.values | Array | - | Set tick values manually |
   * @name axis․y2․axes
   * @memberof Options
   * @type {Array}
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.MultiAxes)
   * @see [Demo: Domain](https://naver.github.io/billboard.js/demo/#Axis.MultiAxesDomain)
   * @example
   * y2: {
   *    axes: [
   *      {
   *        // if set, will not be correlated with the main y2 Axis domain value
   *        domain: [0, 1000],
   *        tick: {
   *          outer: false,
   *          format: function(x) {
   *             return x + "%";
   *          },
   *          count: 2,
   *          values: [10, 20, 30]
   *        }
   *      },
   *      ...
   *    ]
   * }
   */
  axis_y2_axes: []
});
;// CONCATENATED MODULE: ./src/config/Options/axis/axis.ts

function axis_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function axis_objectSpread(e) { for (var r = 1, t; r < arguments.length; r++) { t = null != arguments[r] ? arguments[r] : {}; r % 2 ? axis_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : axis_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/**
 * y Axis  config options
 */
/* harmony default export */ var axis_axis = (axis_objectSpread(axis_objectSpread(axis_objectSpread({
  /**
   * Switch x and y axis position.
   * @name axis․rotated
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * axis: {
   *   rotated: true
   * }
   */
  axis_rotated: !1
}, axis_x), y), y2));
;// CONCATENATED MODULE: ./src/config/Options/common/grid.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * grid config options
 */

/* harmony default export */ var common_grid = ({
  /**
   * Set related options
   * @name grid
   * @memberof Options
   * @type {object}
   * @property {boolean} [front=false] Set 'grid & focus lines' to be positioned over grid lines and chart elements.
   * @property {object} x Grid x object
   * @property {boolean} [x.show=false] Show grids along x axis.
   * @property {Array} [x.lines=[]] Show additional grid lines along x axis.<br>
   *  This option accepts array including object that has value, text, position and class. text, position and class are optional. For position, start, middle and end (default) are available.
   *  If x axis is category axis, value can be category name. If x axis is timeseries axis, value can be date string, Date object and unixtime integer.
   * @property {object} y Grid y object
   * @property {boolean} [y.show=false] Show grids along x axis.
   * @property {Array} [y.lines=[]] Show additional grid lines along y axis.<br>
   *  This option accepts array including object that has value, text, position and class.
   * @property {number} [y.ticks=undefined] Number of y grids to be shown.
   * @property {object} focus Grid focus object
   * @property {boolean} [focus.edge=false] Show edged focus grid line.<br>**NOTE:** Available when [`tooltip.grouped=false`](#.tooltip) option is set.
   * @property {boolean} [focus.show=true] Show grid line when focus.
   * @property {boolean} [focus.y=false] Show y coordinate focus grid line.<br>**NOTE:** Available when [`tooltip.grouped=false`](#.tooltip) option is set.
   * @property {object} lines Grid lines object
   * @property {boolean} [lines.front=true] Set grid lines to be positioned over chart elements.
   * @default undefined
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Grid.GridLines)
   * @see [Demo: X Grid Lines](https://naver.github.io/billboard.js/demo/#Grid.OptionalXGridLines)
   * @see [Demo: Y Grid Lines](https://naver.github.io/billboard.js/demo/#Grid.OptionalYGridLines)
   * @example
   * grid: {
   *   x: {
   *     show: true,
   *     lines: [
   *       {value: 2, text: "Label on 2"},
   *       {value: 5, text: "Label on 5", class: "label-5"},
   *       {value: 6, text: "Label on 6", position: "start"}
   *     ]
   *   },
   *   y: {
   *     show: true,
   *     lines: [
   *       {value: 100, text: "Label on 100"},
   *       {value: 200, text: "Label on 200", class: "label-200"},
   *       {value: 300, text: "Label on 300", position: 'middle'}
   *     ],
   *     ticks: 5
   *   },
   *   front: true,
   *   focus: {
   *      show: false,
   *
   *      // Below options are available when 'tooltip.grouped=false' option is set
   *      edge: true,
   *      y: true
   *   },
   *   lines: {
   *      front: false
   *   }
   * }
   */
  grid_x_show: !1,
  grid_x_type: "tick",
  grid_x_lines: [],
  grid_y_show: !1,
  grid_y_lines: [],
  grid_y_ticks: undefined,
  grid_focus_edge: !1,
  grid_focus_show: !0,
  grid_focus_y: !1,
  grid_front: !1,
  grid_lines_front: !0
});
;// CONCATENATED MODULE: ./src/config/resolver/axis.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * Modules exports for Axis based chart
 */
// Chart








// ChartInternal








// Axis based options



const api = [api_axis, api_category, flow, api_grid, group, api_regions, x];
const internal = [Axis, clip, eventrect, interactions_flow, internals_grid, region, size_axis];
const options = [data_axis, axis_axis, common_grid];
// EXTERNAL MODULE: external {"commonjs":"d3-interpolate","commonjs2":"d3-interpolate","amd":"d3-interpolate","root":"d3"}
var external_commonjs_d3_interpolate_commonjs2_d3_interpolate_amd_d3_interpolate_root_d3_ = __webpack_require__(12);
;// CONCATENATED MODULE: ./src/ChartInternal/shape/arc.ts


function arc_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function arc_objectSpread(e) { for (var r = 1, t; r < arguments.length; r++) { t = null != arguments[r] ? arguments[r] : {}; r % 2 ? arc_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : arc_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */






/**
 * Get radius functions
 * @param {number} expandRate Expand rate number.
 *   - If 0, means for "normal" radius.
 *   - If > 0, means for "expanded" radius.
 * @returns {object} radius functions
 * @private
 */
function getRadiusFn(expandRate) {
  if (expandRate === void 0) {
    expandRate = 0;
  }
  const $$ = this,
    config = $$.config,
    state = $$.state,
    hasMultiArcGauge = $$.hasMultiArcGauge(),
    singleArcWidth = state.gaugeArcWidth / $$.filterTargetsToShow($$.data.targets).length,
    expandWidth = expandRate ? Math.min(state.radiusExpanded * expandRate - state.radius, singleArcWidth * .8 - (1 - expandRate) * 100) : 0;
  return {
    /**
     * Getter of arc innerRadius value
     * @param {IArcData} d Data object
     * @returns {number} innerRadius value
     * @private
     */
    inner: function inner(d) {
      const _$$$getRadius = $$.getRadius(d),
        innerRadius = _$$$getRadius.innerRadius;
      return hasMultiArcGauge ? state.radius - singleArcWidth * (d.index + 1) : isNumber(innerRadius) ? innerRadius : 0;
    },
    /**
     * Getter of arc outerRadius value
     * @param {IArcData} d Data object
     * @returns {number} outerRadius value
     * @private
     */
    outer: function outer(d) {
      const _$$$getRadius2 = $$.getRadius(d),
        outerRadius = _$$$getRadius2.outerRadius;
      let radius;
      if (hasMultiArcGauge) {
        radius = state.radius - singleArcWidth * d.index + expandWidth;
      } else if ($$.hasType("polar") && !expandRate) {
        radius = $$.getPolarOuterRadius(d, outerRadius);
      } else {
        radius = outerRadius;
        if (expandRate) {
          let radiusExpanded = state.radiusExpanded;
          if (state.radius !== outerRadius) {
            radiusExpanded -= Math.abs(state.radius - outerRadius);
          }
          radius = radiusExpanded * expandRate;
        }
      }
      return radius;
    },
    /**
     * Getter of arc cornerRadius value
     * @param {IArcData} d Data object
     * @param {number} outerRadius outer radius value
     * @returns {number} cornerRadius value
     * @private
     */
    corner: function (d, outerRadius) {
      const _config$arc_cornerRad = config.arc_cornerRadius_ratio,
        ratio = _config$arc_cornerRad === void 0 ? 0 : _config$arc_cornerRad,
        _config$arc_cornerRad2 = config.arc_cornerRadius,
        cornerRadius = _config$arc_cornerRad2 === void 0 ? 0 : _config$arc_cornerRad2,
        id = d.data.id,
        value = d.value;
      let corner = 0;
      if (ratio) {
        corner = ratio * outerRadius;
      } else {
        corner = isNumber(cornerRadius) ? cornerRadius : cornerRadius.call($$.api, id, value, outerRadius);
      }
      return corner;
    }
  };
}

/**
 * Get attrTween function to get interpolated value on transition
 * @param {Function} fn Arc function to execute
 * @returns {Function} attrTween function
 * @private
 */
function getAttrTweenFn(fn) {
  return function (d) {
    var _this2 = this;
    const getAngleKeyValue = function (_ref) {
        let _ref$startAngle = _ref.startAngle,
          startAngle = _ref$startAngle === void 0 ? 0 : _ref$startAngle,
          _ref$endAngle = _ref.endAngle,
          endAngle = _ref$endAngle === void 0 ? 0 : _ref$endAngle,
          _ref$padAngle = _ref.padAngle,
          padAngle = _ref$padAngle === void 0 ? 0 : _ref$padAngle;
        _newArrowCheck(this, _this2);
        return {
          startAngle: startAngle,
          endAngle: endAngle,
          padAngle: padAngle
        };
      }.bind(this),
      interpolate = (0,external_commonjs_d3_interpolate_commonjs2_d3_interpolate_amd_d3_interpolate_root_d3_.interpolate)(getAngleKeyValue(this._current), getAngleKeyValue(d)); // d3.interpolate interpolates id value, if id is given as color string(ex. gold, silver, etc)
    // to avoid unexpected behavior, interpolate only angle values
    // https://github.com/naver/billboard.js/issues/3321
    this._current = d;
    return function (t) {
      const interpolated = interpolate(t),
        data = d.data,
        index = d.index,
        value = d.value;
      return fn(arc_objectSpread(arc_objectSpread({}, interpolated), {}, {
        data: data,
        index: index,
        value: value
      }));
    };
  };
}
/* harmony default export */ var arc = ({
  initPie: function initPie() {
    var _this3 = this;
    const $$ = this,
      config = $$.config,
      dataType = config.data_type,
      padding = config[dataType + "_padding"],
      startingAngle = config[dataType + "_startingAngle"] || 0,
      padAngle = (padding ? padding * .01 : config[dataType + "_padAngle"]) || 0;
    $$.pie = (0,external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.pie)().startAngle(startingAngle).endAngle(startingAngle + 2 * Math.PI).padAngle(padAngle).value(function (d) {
      var _this4 = this;
      _newArrowCheck(this, _this3);
      return d.values.reduce(function (a, b) {
        _newArrowCheck(this, _this4);
        return a + b.value;
      }.bind(this), 0);
    }.bind(this)).sort($$.getSortCompareFn.bind($$)(!0));
  },
  updateRadius: function updateRadius() {
    const $$ = this,
      config = $$.config,
      state = $$.state,
      dataType = config.data_type,
      padding = config[dataType + "_padding"],
      w = config.gauge_width || config.donut_width,
      gaugeArcWidth = $$.filterTargetsToShow($$.data.targets).length * config.gauge_arcs_minWidth;
    // determine radius
    state.radiusExpanded = Math.min(state.arcWidth, state.arcHeight) / 2 * ($$.hasMultiArcGauge() && config.gauge_label_show ? .85 : 1);
    state.radius = state.radiusExpanded * .95;
    state.innerRadiusRatio = w ? (state.radius - w) / state.radius : .6;
    state.gaugeArcWidth = w || (gaugeArcWidth <= state.radius - state.innerRadius ? state.radius - state.innerRadius : gaugeArcWidth <= state.radius ? gaugeArcWidth : state.radius);
    const innerRadius = config.pie_innerRadius || (padding ? padding * (state.innerRadiusRatio + .1) : 0);

    // NOTE: inner/outerRadius can be an object by user setting, only for 'pie' type
    state.outerRadius = config.pie_outerRadius;
    state.innerRadius = $$.hasType("donut") || $$.hasType("gauge") ? state.radius * state.innerRadiusRatio : innerRadius;
  },
  /**
   * Get pie's inner & outer radius value
   * @param {object|undefined} d Data object
   * @returns {object}
   * @private
   */
  getRadius: function getRadius(d) {
    const $$ = this,
      data = d == null ? void 0 : d.data;
    let _$$$state = $$.state,
      innerRadius = _$$$state.innerRadius,
      outerRadius = _$$$state.outerRadius;
    if (!isNumber(innerRadius) && data) {
      innerRadius = innerRadius[data.id] || 0;
    }
    if (isObject(outerRadius) && data && data.id in outerRadius) {
      outerRadius = outerRadius[data.id];
    } else if (!isNumber(outerRadius)) {
      outerRadius = $$.state.radius;
    }
    return {
      innerRadius: innerRadius,
      outerRadius: outerRadius
    };
  },
  updateArc: function updateArc() {
    const $$ = this;
    $$.updateRadius();
    $$.svgArc = $$.getSvgArc();
    $$.svgArcExpanded = $$.getSvgArcExpanded();
  },
  getArcLength: function getArcLength() {
    const $$ = this,
      config = $$.config,
      arcLengthInPercent = config.gauge_arcLength * 3.6;
    let len = 2 * (arcLengthInPercent / 360);
    if (arcLengthInPercent < -360) {
      len = -2;
    } else if (arcLengthInPercent > 360) {
      len = 2;
    }
    return len * Math.PI;
  },
  getGaugeStartAngle: function getGaugeStartAngle() {
    const $$ = this,
      config = $$.config,
      isFullCircle = config.gauge_fullCircle,
      defaultStartAngle = -1 * Math.PI / 2,
      defaultEndAngle = Math.PI / 2;
    let startAngle = config.gauge_startingAngle;
    if (!isFullCircle && startAngle <= defaultStartAngle) {
      startAngle = defaultStartAngle;
    } else if (!isFullCircle && startAngle >= defaultEndAngle) {
      startAngle = defaultEndAngle;
    } else if (startAngle > Math.PI || startAngle < -1 * Math.PI) {
      startAngle = Math.PI;
    }
    return startAngle;
  },
  updateAngle: function updateAngle(dValue) {
    var _this5 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state;
    let pie = $$.pie,
      d = dValue,
      found = !1;
    if (!config) {
      return null;
    }
    const gStart = $$.getGaugeStartAngle(),
      radius = config.gauge_fullCircle ? $$.getArcLength() : gStart * -2;
    if (d.data && $$.isGaugeType(d.data) && !$$.hasMultiArcGauge()) {
      const min = config.gauge_min,
        max = config.gauge_max,
        totalSum = $$.getTotalDataSum(state.rendered); // to prevent excluding total data sum during the init(when data.hide option is used), use $$.rendered state value
      // https://github.com/naver/billboard.js/issues/2123
      pie = pie.startAngle(gStart).endAngle(radius * ((totalSum - min) / (max - min)) + gStart);
    }
    pie($$.filterTargetsToShow()).forEach(function (t, i) {
      var _d$data;
      _newArrowCheck(this, _this5);
      if (!found && t.data.id === ((_d$data = d.data) == null ? void 0 : _d$data.id)) {
        found = !0;
        d = t;
        d.index = i;
      }
    }.bind(this));
    if (isNaN(d.startAngle)) {
      d.startAngle = 0;
    }
    if (isNaN(d.endAngle)) {
      d.endAngle = d.startAngle;
    }
    if (d.data && $$.hasMultiArcGauge()) {
      const gMin = config.gauge_min,
        gMax = config.gauge_max,
        gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : gMax - gMin;
      d.startAngle = gStart;
      d.endAngle = gStart + radius / (gMax - gMin) * gValue;
    }
    return found ? d : null;
  },
  getSvgArc: function getSvgArc() {
    const $$ = this,
      _getRadiusFn$call = getRadiusFn.call($$),
      inner = _getRadiusFn$call.inner,
      outer = _getRadiusFn$call.outer,
      corner = _getRadiusFn$call.corner,
      arc = (0,external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.arc)().innerRadius(inner).outerRadius(outer),
      newArc = function (d, withoutUpdate) {
        let path = "M 0 0";
        if (d.value || d.data) {
          var _$$$updateAngle;
          const data = withoutUpdate ? d : (_$$$updateAngle = $$.updateAngle(d)) != null ? _$$$updateAngle : null;
          if (data) {
            path = arc.cornerRadius(corner(data, outer(data)))(data);
          }
        }
        return path;
      };
    // TODO: extends all function
    newArc.centroid = arc.centroid;
    return newArc;
  },
  /**
   * Get expanded arc path function
   * @param {number} rate Expand rate
   * @returns {Function} Expanded arc path getter function
   * @private
   */
  getSvgArcExpanded: function getSvgArcExpanded(rate) {
    var _this6 = this;
    if (rate === void 0) {
      rate = 1;
    }
    const $$ = this,
      _getRadiusFn$call2 = getRadiusFn.call($$, rate),
      inner = _getRadiusFn$call2.inner,
      outer = _getRadiusFn$call2.outer,
      corner = _getRadiusFn$call2.corner,
      arc = (0,external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.arc)().innerRadius(inner).outerRadius(outer);
    return function (d) {
      _newArrowCheck(this, _this6);
      const updated = $$.updateAngle(d),
        outerR = outer(updated);
      let cornerR = 0;
      if (updated) {
        cornerR = corner(updated, outerR);
      }
      return updated ? arc.cornerRadius(cornerR)(updated) : "M 0 0";
    }.bind(this);
  },
  getArc: function getArc(d, withoutUpdate, force) {
    return force || this.isArcType(d.data) ? this.svgArc(d, withoutUpdate) : "M 0 0";
  },
  /**
   * Set transform attributes to arc label text
   * @param {object} d Data object
   * @returns {string} Translate attribute string
   * @private
   */
  transformForArcLabel: function transformForArcLabel(d) {
    var _this7 = this;
    const $$ = this,
      config = $$.config,
      radiusExpanded = $$.state.radiusExpanded,
      updated = $$.updateAngle(d);
    let translate = "";
    if (updated) {
      if ($$.hasMultiArcGauge()) {
        const y1 = Math.sin(updated.endAngle - Math.PI / 2),
          x = Math.cos(updated.endAngle - Math.PI / 2) * (radiusExpanded + 25),
          y = y1 * (radiusExpanded + 15 - Math.abs(y1 * 10)) + 3;
        translate = "translate(" + x + "," + y + ")";
      } else if (!$$.hasType("gauge") || $$.data.targets.length > 1) {
        var _filter$map;
        let _$$$getRadius3 = $$.getRadius(d),
          outerRadius = _$$$getRadius3.outerRadius;
        if ($$.hasType("polar")) {
          outerRadius = $$.getPolarOuterRadius(d, outerRadius);
        }
        const c = this.svgArc.centroid(updated),
          _c$map = c.map(function (v) {
            _newArrowCheck(this, _this7);
            return isNaN(v) ? 0 : v;
          }.bind(this)),
          x = _c$map[0],
          y = _c$map[1],
          h = Math.sqrt(x * x + y * y);
        let ratio = (_filter$map = ["donut", "pie", "polar"].filter($$.hasType.bind($$)).map(function (v) {
          _newArrowCheck(this, _this7);
          return config[v + "_label_ratio"];
        }.bind(this))) == null ? void 0 : _filter$map[0];
        if (ratio) {
          ratio = isFunction(ratio) ? ratio.bind($$.api)(d, outerRadius, h) : ratio;
        } else {
          ratio = outerRadius && (h ? (36 / outerRadius > .375 ? 1.175 - 36 / outerRadius : .8) * outerRadius / h : 0);
        }
        translate = "translate(" + x * ratio + "," + y * ratio + ")";
      }
    }
    return translate;
  },
  convertToArcData: function convertToArcData(d) {
    return this.addName({
      id: "data" in d ? d.data.id : d.id,
      value: d.value,
      ratio: this.getRatio("arc", d),
      index: d.index
    });
  },
  textForArcLabel: function textForArcLabel(selection) {
    const $$ = this,
      hasGauge = $$.hasType("gauge");
    if ($$.shouldShowArcLabel()) {
      selection.style("fill", $$.updateTextColor.bind($$)).attr("filter", $$.updateTextBacgroundColor.bind($$)).each(function (d) {
        var _filter;
        const node = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this),
          updated = $$.updateAngle(d),
          ratio = $$.getRatio("arc", updated),
          isUnderThreshold = $$.meetsLabelThreshold(ratio, (_filter = ["donut", "gauge", "pie", "polar"].filter($$.hasType.bind($$))) == null ? void 0 : _filter[0]);
        if (isUnderThreshold) {
          const value = (updated || d).value,
            text = ($$.getArcLabelFormat() || $$.defaultArcValueFormat)(value, ratio, d.data.id).toString();
          setTextValue(node, text, [-1, 1], hasGauge);
        } else {
          node.text("");
        }
      });
    }
  },
  expandArc: function expandArc(targetIds) {
    var _this8 = this;
    const $$ = this,
      transiting = $$.state.transiting,
      $el = $$.$el;
    // MEMO: avoid to cancel transition
    if (transiting) {
      const interval = setInterval(function () {
        _newArrowCheck(this, _this8);
        if (!transiting) {
          clearInterval(interval);
          $el.legend.selectAll("." + $FOCUS.legendItemFocused).size() > 0 && $$.expandArc(targetIds);
        }
      }.bind(this), 10);
      return;
    }
    const newTargetIds = $$.mapToTargetIds(targetIds);
    $el.svg.selectAll($$.selectorTargets(newTargetIds, "." + $ARC.chartArc)).each(function (d) {
      if (!$$.shouldExpand(d.data.id)) {
        return;
      }
      const expandDuration = $$.getExpandConfig(d.data.id, "duration"),
        svgArcExpandedSub = $$.getSvgArcExpanded($$.getExpandConfig(d.data.id, "rate"));
      (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).selectAll("path").transition().duration(expandDuration).attrTween("d", getAttrTweenFn($$.svgArcExpanded.bind($$))).transition().duration(expandDuration * 2).attrTween("d", getAttrTweenFn(svgArcExpandedSub.bind($$)));
    });
  },
  unexpandArc: function unexpandArc(targetIds) {
    var _this9 = this;
    const $$ = this,
      transiting = $$.state.transiting,
      svg = $$.$el.svg;
    if (transiting) {
      return;
    }
    const newTargetIds = $$.mapToTargetIds(targetIds);
    svg.selectAll($$.selectorTargets(newTargetIds, "." + $ARC.chartArc)).selectAll("path").transition().duration(function (d) {
      _newArrowCheck(this, _this9);
      return $$.getExpandConfig(d.data.id, "duration");
    }.bind(this)).attrTween("d", getAttrTweenFn($$.svgArc.bind($$)));
    svg.selectAll("" + $ARC.arc).style("opacity", null);
  },
  /**
   * Get expand config value
   * @param {string} id data ID
   * @param {string} key config key: 'duration | rate'
   * @returns {number}
   * @private
   */
  getExpandConfig: function getExpandConfig(id, key) {
    const $$ = this,
      config = $$.config;
    let type;
    if ($$.isDonutType(id)) {
      type = "donut";
    } else if ($$.isGaugeType(id)) {
      type = "gauge";
    } else if ($$.isPieType(id)) {
      type = "pie";
    }
    return type ? config[type + "_expand_" + key] : {
      duration: 50,
      rate: .98
    }[key];
  },
  shouldExpand: function shouldExpand(id) {
    const $$ = this,
      config = $$.config;
    return $$.isDonutType(id) && config.donut_expand || $$.isGaugeType(id) && config.gauge_expand || $$.isPieType(id) && config.pie_expand;
  },
  shouldShowArcLabel: function shouldShowArcLabel() {
    var _this10 = this;
    const $$ = this,
      config = $$.config;
    return ["donut", "gauge", "pie", "polar"].some(function (v) {
      _newArrowCheck(this, _this10);
      return $$.hasType(v) && config[v + "_label_show"];
    }.bind(this));
  },
  getArcLabelFormat: function getArcLabelFormat() {
    var _this11 = this;
    const $$ = this,
      config = $$.config;
    let format = function (v) {
      _newArrowCheck(this, _this11);
      return v;
    }.bind(this);
    ["donut", "gauge", "pie", "polar"].filter($$.hasType.bind($$)).forEach(function (v) {
      _newArrowCheck(this, _this11);
      format = config[v + "_label_format"];
    }.bind(this));
    return isFunction(format) ? format.bind($$.api) : format;
  },
  updateTargetsForArc: function updateTargetsForArc(targets) {
    var _this12 = this;
    const $$ = this,
      $el = $$.$el,
      hasGauge = $$.hasType("gauge"),
      classChartArc = $$.getChartClass("Arc"),
      classArcs = $$.getClass("arcs", !0),
      classFocus = $$.classFocus.bind($$),
      chartArcs = $el.main.select("." + $ARC.chartArcs),
      mainPieUpdate = chartArcs.selectAll("." + $ARC.chartArc).data($$.pie(targets)).attr("class", function (d) {
        _newArrowCheck(this, _this12);
        return classChartArc(d) + classFocus(d.data);
      }.bind(this)),
      mainPieEnter = mainPieUpdate.enter().append("g").attr("class", classChartArc).call(this.setCssRule(!1, "." + $ARC.chartArcs + " text", ["pointer-events:none", "text-anchor:middle"]));
    mainPieEnter.append("g").attr("class", classArcs).merge(mainPieUpdate);
    mainPieEnter.append("text").attr("dy", hasGauge && !$$.hasMultiTargets() ? "-.1em" : ".35em").style("opacity", "0").style("text-anchor", $$.getStylePropValue("middle")).style("pointer-events", $$.getStylePropValue("none"));
    $el.text = chartArcs.selectAll("." + $COMMON.target + " text");
    // MEMO: can not keep same color..., but not bad to update color in redraw
    // mainPieUpdate.exit().remove();
  },
  initArc: function initArc() {
    const $$ = this,
      $el = $$.$el;
    $el.arcs = $el.main.select("." + $COMMON.chart).append("g").attr("class", $ARC.chartArcs).attr("transform", $$.getTranslate("arc"));
    $$.setArcTitle();
  },
  /**
   * Set arc title text
   * @param {string} str Title text
   * @private
   */
  setArcTitle: function setArcTitle(str) {
    const $$ = this,
      title = str || $$.getArcTitle(),
      hasGauge = $$.hasType("gauge");
    if (title) {
      const className = hasGauge ? $GAUGE.chartArcsGaugeTitle : $ARC.chartArcsTitle;
      let text = $$.$el.arcs.select("." + className);
      if (text.empty()) {
        text = $$.$el.arcs.append("text").attr("class", className).style("text-anchor", "middle");
      }
      hasGauge && text.attr("dy", "-0.3em");
      setTextValue(text, title, hasGauge ? undefined : [-.6, 1.35], !0);
    }
  },
  /**
   * Return arc title text
   * @returns {string} Arc title text
   * @private
   */
  getArcTitle: function getArcTitle() {
    const $$ = this,
      type = $$.hasType("donut") && "donut" || $$.hasType("gauge") && "gauge";
    return type ? $$.config[type + "_title"] : "";
  },
  /**
   * Get arc title text with needle value
   * @returns {string|boolean} When title contains needle template string will return processed string, otherwise false
   * @private
   */
  getArcTitleWithNeedleValue: function getArcTitleWithNeedleValue() {
    const $$ = this,
      config = $$.config,
      state = $$.state,
      title = $$.getArcTitle();
    if (title && $$.config.arc_needle_show && /{=[A-Z_]+}/.test(title)) {
      let value = state.current.needle;
      if (!isNumber(value)) {
        value = config.arc_needle_value;
      }
      return tplProcess(title, {
        NEEDLE_VALUE: isNumber(value) ? value : 0
      });
    }
    return !1;
  },
  redrawArc: function redrawArc(duration, durationForExit, withTransform) {
    var _this13 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      main = $$.$el.main,
      hasInteraction = config.interaction_enabled,
      isSelectable = hasInteraction && config.data_selection_isselectable;
    let mainArc = main.selectAll("." + $ARC.arcs).selectAll("." + $ARC.arc).data($$.arcData.bind($$));
    mainArc.exit().transition().duration(durationForExit).style("opacity", "0").remove();
    mainArc = mainArc.enter().append("path").attr("class", $$.getClass("arc", !0)).style("fill", function (d) {
      _newArrowCheck(this, _this13);
      return $$.color(d.data);
    }.bind(this)).style("cursor", function (d) {
      _newArrowCheck(this, _this13);
      return isSelectable != null && isSelectable.bind != null && isSelectable.bind($$.api)(d) ? "pointer" : null;
    }.bind(this)).style("opacity", "0").each(function (d) {
      if ($$.isGaugeType(d.data)) {
        d.startAngle = config.gauge_startingAngle;
        d.endAngle = config.gauge_startingAngle;
      }
      this._current = d;
    }).merge(mainArc);
    if ($$.hasType("gauge")) {
      $$.updateGaugeMax();
      $$.hasMultiArcGauge() && $$.redrawMultiArcGauge();
    }
    mainArc.attr("transform", function (d) {
      _newArrowCheck(this, _this13);
      return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : "";
    }.bind(this)).style("opacity", function (d) {
      return d === this._current ? "0" : null;
    }).each(function () {
      _newArrowCheck(this, _this13);
      state.transiting = !0;
    }.bind(this)).transition().duration(duration).attrTween("d", function (d) {
      var _this14 = this;
      const updated = $$.updateAngle(d);
      if (!updated) {
        return function () {
          _newArrowCheck(this, _this14);
          return "M 0 0";
        }.bind(this);
      }
      if (isNaN(this._current.startAngle)) {
        this._current.startAngle = 0;
      }
      if (isNaN(this._current.endAngle)) {
        this._current.endAngle = this._current.startAngle;
      }
      const interpolate = (0,external_commonjs_d3_interpolate_commonjs2_d3_interpolate_amd_d3_interpolate_root_d3_.interpolate)(this._current, updated);
      this._current = interpolate(0);
      return function (t) {
        const interpolated = interpolate(t);
        interpolated.data = d.data; // data.id will be updated by interporator

        return $$.getArc(interpolated, !0);
      };
    }).attr("transform", withTransform ? "scale(1)" : "").style("fill", function (d) {
      _newArrowCheck(this, _this13);
      let color;
      if ($$.levelColor) {
        color = $$.levelColor(d.data.values[0].value);

        // update data's color
        config.data_colors[d.data.id] = color;
      } else {
        color = $$.color(d.data);
      }
      return color;
    }.bind(this))
    // Where gauge reading color would receive customization.
    .style("opacity", null).call(endall, function () {
      if ($$.levelColor) {
        const path = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this),
          d = path.datum(this._current);
        $$.updateLegendItemColor(d.data.id, path.style("fill"));
      }
      state.transiting = !1;
      callFn(config.onrendered, $$.api);
    });

    // bind arc events
    hasInteraction && $$.bindArcEvent(mainArc);
    $$.hasType("polar") && $$.redrawPolar();
    $$.hasType("gauge") && $$.redrawBackgroundArcs();
    config.arc_needle_show && $$.redrawNeedle();
    $$.redrawArcText(duration);
  },
  /**
   * Update needle element
   * @private
   */
  redrawNeedle: function redrawNeedle() {
    var _this15 = this;
    const $$ = this,
      $el = $$.$el,
      config = $$.config,
      _$$$state2 = $$.state,
      hiddenTargetIds = _$$$state2.hiddenTargetIds,
      radius = _$$$state2.radius,
      length = (radius - 1) / 100 * config.arc_needle_length,
      hasDataToShow = hiddenTargetIds.length !== $$.data.targets.length;
    let needle = $$.$el.arcs.select("." + $ARC.needle);

    // needle options
    const pathFn = config.arc_needle_path,
      baseWidth = config.arc_needle_bottom_width / 2,
      topWidth = config.arc_needle_top_width / 2,
      topRx = config.arc_needle_top_rx,
      topRy = config.arc_needle_top_ry,
      bottomLen = config.arc_needle_bottom_len,
      bottomRx = config.arc_needle_bottom_rx,
      bottomRy = config.arc_needle_bottom_ry,
      needleAngle = $$.getNeedleAngle(),
      updateNeedleValue = function () {
        _newArrowCheck(this, _this15);
        const title = $$.getArcTitleWithNeedleValue();
        title && $$.setArcTitle(title);
      }.bind(this);
    updateNeedleValue();
    if (needle.empty()) {
      needle = $el.arcs.append("path").classed($ARC.needle, !0);
      $el.needle = needle;

      /**
       * Function to be exposed as public to facilitate updating needle
       * @param {number} v Value to be updated
       * @param {boolean} updateConfig Weather update config's value
       * @private
       */
      $el.needle.updateHelper = function (v, updateConfig) {
        var _this16 = this;
        if (updateConfig === void 0) {
          updateConfig = !1;
        }
        _newArrowCheck(this, _this15);
        if ($el.needle.style("display") !== "none") {
          $$.$T($el.needle).style("transform", "rotate(" + $$.getNeedleAngle(v) + "deg)").call(endall, function () {
            _newArrowCheck(this, _this16);
            updateConfig && (config.arc_needle_value = v);
            updateNeedleValue();
          }.bind(this));
        }
      }.bind(this);
    }
    if (hasDataToShow) {
      const path = isFunction(pathFn) ? pathFn.call($$, length) : "M-" + baseWidth + " " + bottomLen + " A" + bottomRx + " " + bottomRy + " 0 0 0 " + baseWidth + " " + bottomLen + " L" + topWidth + " -" + length + " A" + topRx + " " + topRy + " 0 0 0 -" + topWidth + " -" + length + " L-" + baseWidth + " " + bottomLen + " Z";
      $$.$T(needle).attr("d", path).style("fill", config.arc_needle_color).style("display", null).style("transform", "rotate(" + needleAngle + "deg)");
    } else {
      needle.style("display", "none");
    }
  },
  /**
   * Get needle angle value relative given value
   * @param {number} v Value to be calculated angle
   * @returns {number} angle value
   * @private
   */
  getNeedleAngle: function getNeedleAngle(v) {
    const $$ = this,
      config = $$.config,
      state = $$.state,
      arcLength = $$.getArcLength(),
      hasGauge = $$.hasType("gauge"),
      total = $$.getTotalDataSum(!0);
    let value = isDefined(v) ? v : config.arc_needle_value,
      startingAngle = config[config.data_type + "_startingAngle"] || 0,
      radian = 0;
    if (!isNumber(value)) {
      value = hasGauge && $$.data.targets.length === 1 ? total : 0;
    }
    state.current.needle = value;
    if (hasGauge) {
      startingAngle = $$.getGaugeStartAngle();
      const radius = config.gauge_fullCircle ? arcLength : startingAngle * -2,
        min = config.gauge_min,
        max = config.gauge_max;
      radian = radius * ((value - min) / (max - min));
    } else {
      radian = arcLength * (value / total);
    }
    return (startingAngle + radian) * (180 / Math.PI);
  },
  redrawBackgroundArcs: function redrawBackgroundArcs() {
    var _this17 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      hasMultiArcGauge = $$.hasMultiArcGauge(),
      isFullCircle = config.gauge_fullCircle,
      showEmptyTextLabel = $$.filterTargetsToShow($$.data.targets).length === 0 && !!config.data_empty_label_text,
      startAngle = $$.getGaugeStartAngle(),
      endAngle = isFullCircle ? startAngle + $$.getArcLength() : startAngle * -1;
    let backgroundArc = $$.$el.arcs.select((hasMultiArcGauge ? "g" : "") + "." + $ARC.chartArcsBackground);
    if (hasMultiArcGauge) {
      let index = 0;
      backgroundArc = backgroundArc.selectAll("path." + $ARC.chartArcsBackground).data($$.data.targets);
      backgroundArc.enter().append("path").attr("class", function (d, i) {
        _newArrowCheck(this, _this17);
        return $ARC.chartArcsBackground + " " + $ARC.chartArcsBackground + "-" + i;
      }.bind(this)).merge(backgroundArc).style("fill", config.gauge_background || null).attr("d", function (_ref3) {
        let id = _ref3.id;
        _newArrowCheck(this, _this17);
        if (showEmptyTextLabel || state.hiddenTargetIds.indexOf(id) >= 0) {
          return "M 0 0";
        }
        const d = {
          data: [{
            value: config.gauge_max
          }],
          startAngle: startAngle,
          endAngle: endAngle,
          index: index++
        };
        return $$.getArc(d, !0, !0);
      }.bind(this));
      backgroundArc.exit().remove();
    } else {
      backgroundArc.attr("d", showEmptyTextLabel ? "M 0 0" : function () {
        _newArrowCheck(this, _this17);
        const d = {
          data: [{
            value: config.gauge_max
          }],
          startAngle: startAngle,
          endAngle: endAngle
        };
        return $$.getArc(d, !0, !0);
      }.bind(this));
    }
  },
  bindArcEvent: function bindArcEvent(arc) {
    var _this18 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      isTouch = state.inputType === "touch",
      isMouse = state.inputType === "mouse";
    // eslint-disable-next-line
    function selectArc(_this, arcData, id) {
      // transitions
      $$.expandArc(id);
      $$.api.focus(id);
      $$.toggleFocusLegend(id, !0);
      $$.showTooltip([arcData], _this);
    }

    // eslint-disable-next-line
    function unselectArc(arcData) {
      const id = (arcData == null ? void 0 : arcData.id) || undefined;
      $$.unexpandArc(id);
      $$.api.revert();
      $$.revertLegend();
      $$.hideTooltip();
    }
    arc.on("click", function (event, d, i) {
      const updated = $$.updateAngle(d);
      let arcData;
      if (updated) {
        arcData = $$.convertToArcData(updated);
        $$.toggleShape == null || $$.toggleShape(this, arcData, i);
        config.data_onclick.bind($$.api)(arcData, this);
      }
    });

    // mouse events
    if (isMouse) {
      arc.on("mouseover", function (event, d) {
        var _arcData;
        if (state.transiting) {
          // skip while transiting
          return;
        }
        state.event = event;
        const updated = $$.updateAngle(d),
          arcData = updated ? $$.convertToArcData(updated) : null,
          id = ((_arcData = arcData) == null ? void 0 : _arcData.id) || undefined;
        selectArc(this, arcData, id);
        $$.setOverOut(!0, arcData);
      }).on("mouseout", function (event, d) {
        _newArrowCheck(this, _this18);
        if (state.transiting) {
          // skip while transiting
          return;
        }
        state.event = event;
        const updated = $$.updateAngle(d),
          arcData = updated ? $$.convertToArcData(updated) : null;
        unselectArc();
        $$.setOverOut(!1, arcData);
      }.bind(this)).on("mousemove", function (event, d) {
        const updated = $$.updateAngle(d),
          arcData = updated ? $$.convertToArcData(updated) : null;
        state.event = event;
        $$.showTooltip([arcData], this);
      });
    }

    // touch events
    if (isTouch && $$.hasArcType() && !$$.radars) {
      const getEventArc = function (event) {
        var _event$changedTouches, _event$changedTouches2;
        _newArrowCheck(this, _this18);
        const _ref4 = (_event$changedTouches = (_event$changedTouches2 = event.changedTouches) == null ? void 0 : _event$changedTouches2[0]) != null ? _event$changedTouches : {
            clientX: 0,
            clientY: 0
          },
          clientX = _ref4.clientX,
          clientY = _ref4.clientY,
          eventArc = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(browser_doc.elementFromPoint(clientX, clientY));
        return eventArc;
      }.bind(this);
      $$.$el.svg.on("touchstart touchmove", function (event) {
        var _datum, _arcData2;
        if (state.transiting) {
          // skip while transiting
          return;
        }
        state.event = event;
        const eventArc = getEventArc(event),
          datum = eventArc.datum(),
          updated = (_datum = datum) != null && _datum.data && datum.data.id ? $$.updateAngle(datum) : null,
          arcData = updated ? $$.convertToArcData(updated) : null,
          id = ((_arcData2 = arcData) == null ? void 0 : _arcData2.id) || undefined;
        $$.callOverOutForTouch(arcData);
        isUndefined(id) ? unselectArc() : selectArc(this, arcData, id);
      });
    }
  },
  redrawArcText: function redrawArcText(duration) {
    var _this19 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      _$$$$el = $$.$el,
      main = _$$$$el.main,
      arcs = _$$$$el.arcs,
      hasGauge = $$.hasType("gauge"),
      hasMultiArcGauge = $$.hasMultiArcGauge();
    let text;

    // for gauge type, update text when has no title & multi data
    if (!(hasGauge && $$.data.targets.length === 1 && config.gauge_title)) {
      text = main.selectAll("." + $ARC.chartArc).select("text").style("opacity", "0").attr("class", function (d) {
        _newArrowCheck(this, _this19);
        return $$.isGaugeType(d.data) ? $GAUGE.gaugeValue : null;
      }.bind(this)).call($$.textForArcLabel.bind($$)).attr("transform", $$.transformForArcLabel.bind($$)).style("font-size", function (d) {
        _newArrowCheck(this, _this19);
        return $$.isGaugeType(d.data) && $$.data.targets.length === 1 && !hasMultiArcGauge ? Math.round(state.radius / 5) + "px" : null;
      }.bind(this)).transition().duration(duration).style("opacity", function (d) {
        _newArrowCheck(this, _this19);
        return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? null : "0";
      }.bind(this));
      hasMultiArcGauge && text.attr("dy", "-.1em");
    }
    main.select("." + $ARC.chartArcsTitle).style("opacity", $$.hasType("donut") || hasGauge ? null : "0");
    if (hasGauge) {
      var _text;
      const isFullCircle = config.gauge_fullCircle;
      isFullCircle && ((_text = text) == null ? void 0 : _text.attr("dy", "" + (hasMultiArcGauge ? 0 : Math.round(state.radius / 14))));
      if (config.gauge_label_show) {
        arcs.select("." + $GAUGE.chartArcsGaugeUnit).attr("dy", (isFullCircle ? 1.5 : .75) + "em").text(config.gauge_units);
        arcs.select("." + $GAUGE.chartArcsGaugeMin).attr("dx", -1 * (state.innerRadius + (state.radius - state.innerRadius) / (isFullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text($$.textForGaugeMinMax(config.gauge_min, !1));

        // show max text when isn't fullCircle
        isFullCircle || arcs.select("." + $GAUGE.chartArcsGaugeMax).attr("dx", state.innerRadius + (state.radius - state.innerRadius) / 2 + "px").attr("dy", "1.2em").text($$.textForGaugeMinMax(config.gauge_max, !0));
      }
    }
  },
  /**
   * Get Arc element by id or index
   * @param {string|number} value id or index of Arc
   * @returns {d3Selection} Arc path element
   * @private
   */
  getArcElementByIdOrIndex: function getArcElementByIdOrIndex(value) {
    var _this20 = this;
    const $$ = this,
      arcs = $$.$el.arcs,
      filterFn = isNumber(value) ? function (d) {
        _newArrowCheck(this, _this20);
        return d.index === value;
      }.bind(this) : function (d) {
        _newArrowCheck(this, _this20);
        return d.data.id === value;
      }.bind(this);
    return arcs == null ? void 0 : arcs.selectAll("." + $COMMON.target + " path").filter(filterFn);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/area.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var shape_area = ({
  initArea: function initArea(mainLine) {
    const $$ = this,
      config = $$.config;
    mainLine.insert("g", "." + (config.area_front ? $CIRCLE.circles : $LINE.lines)).attr("class", $$.getClass("areas", !0));
  },
  /**
   * Update area color
   * @param {object} d Data object
   * @returns {string} Color string
   * @private
   */
  updateAreaColor: function updateAreaColor(d) {
    const $$ = this;
    return $$.config.area_linearGradient ? $$.getGradienColortUrl(d.id) : $$.color(d);
  },
  /**
   * Generate/Update elements
   * @param {boolean} withTransition Transition for exit elements
   * @param {boolean} isSub Subchart draw
   * @private
   */
  updateArea: function updateArea(withTransition, isSub) {
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      config = $$.config,
      state = $$.state,
      $el = $$.$el,
      $T = $$.$T,
      $root = isSub ? $el.subchart : $el;
    config.area_linearGradient && $$.updateLinearGradient();
    const area = $root.main.selectAll("." + $AREA.areas).selectAll("." + $AREA.area).data($$.lineData.bind($$));
    $T(area.exit(), withTransition).style("opacity", "0").remove();
    $root.area = area.enter().append("path").attr("class", $$.getClass("area", !0)).style("fill", $$.updateAreaColor.bind($$)).style("opacity", function () {
      state.orgAreaOpacity = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).style("opacity");
      return "0";
    }).merge(area);
    area.style("opacity", state.orgAreaOpacity);

    // calculate ratio if grouped data exists
    $$.setRatioForGroupedData($root.area.data());
  },
  /**
   * Redraw function
   * @param {Function} drawFn Retuned functino from .generateDrawCandlestick()
   * @param {boolean} withTransition With or without transition
   * @param {boolean} isSub Subchart draw
   * @returns {Array}
   */
  redrawArea: function redrawArea(drawFn, withTransition, isSub) {
    var _this = this;
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      _ref = isSub ? this.$el.subchart : this.$el,
      area = _ref.area,
      orgAreaOpacity = $$.state.orgAreaOpacity;
    return [$$.$T(area, withTransition, getRandom()).attr("d", drawFn).style("fill", $$.updateAreaColor.bind($$)).style("opacity", function (d) {
      _newArrowCheck(this, _this);
      return ($$.isAreaRangeType(d) ? orgAreaOpacity / 1.75 : orgAreaOpacity) + "";
    }.bind(this))];
  },
  /**
   * Generate area path data
   * @param {object} areaIndices Indices
   * @param {boolean} isSub Weather is sub axis
   * @returns {Function}
   * @private
   */
  generateDrawArea: function generateDrawArea(areaIndices, isSub) {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      lineConnectNull = config.line_connectNull,
      isRotated = config.axis_rotated,
      getPoints = $$.generateGetAreaPoints(areaIndices, isSub),
      yScale = $$.getYScaleById.bind($$),
      xValue = function (d) {
        _newArrowCheck(this, _this2);
        return (isSub ? $$.subxx : $$.xx).call($$, d);
      }.bind(this),
      value0 = function (d, i) {
        _newArrowCheck(this, _this2);
        return $$.isGrouped(d.id) ? getPoints(d, i)[0][1] : yScale(d.id, isSub)($$.isAreaRangeType(d) ? $$.getRangedData(d, "high") : $$.getShapeYMin(d.id));
      }.bind(this),
      value1 = function (d, i) {
        _newArrowCheck(this, _this2);
        return $$.isGrouped(d.id) ? getPoints(d, i)[1][1] : yScale(d.id, isSub)($$.isAreaRangeType(d) ? $$.getRangedData(d, "low") : d.value);
      }.bind(this);
    return function (d) {
      var _this3 = this;
      _newArrowCheck(this, _this2);
      let values = lineConnectNull ? $$.filterRemoveNull(d.values) : d.values,
        x0 = 0,
        y0 = 0,
        path;
      if ($$.isAreaType(d)) {
        let area = (0,external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.area)();
        area = isRotated ? area.y(xValue).x0(value0).x1(value1) : area.x(xValue).y0(config.area_above ? 0 : config.area_below ? $$.state.height : value0).y1(value1);
        if (!lineConnectNull) {
          area = area.defined(function (d) {
            _newArrowCheck(this, _this3);
            return $$.getBaseValue(d) !== null;
          }.bind(this));
        }
        if ($$.isStepType(d)) {
          values = $$.convertValuesToStep(values);
        }
        path = area.curve($$.getCurve(d))(values);
      } else {
        if (values[0]) {
          x0 = $$.scale.x(values[0].x);
          y0 = $$.getYScaleById(d.id)(values[0].value);
        }
        path = isRotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
      }
      return path || "M 0 0";
    }.bind(this);
  },
  generateGetAreaPoints: function generateGetAreaPoints(areaIndices, isSub) {
    // partial duplication of generateGetBarPoints
    const $$ = this,
      config = $$.config,
      x = $$.getShapeX(0, areaIndices, isSub),
      y = $$.getShapeY(!!isSub),
      areaOffset = $$.getShapeOffset($$.isAreaType, areaIndices, isSub),
      yScale = $$.getYScaleById.bind($$);
    return function (d, i) {
      const y0 = yScale.call($$, d.id, isSub)($$.getShapeYMin(d.id)),
        offset = areaOffset(d, i) || y0,
        posX = x(d),
        value = d.value; // offset is for stacked area chart
      let posY = y(d);

      // fix posY not to overflow opposite quadrant
      if (config.axis_rotated && (value > 0 && posY < y0 || value < 0 && y0 < posY)) {
        posY = y0;
      }

      // 1 point that marks the area position
      return [[posX, offset], [posX, posY - (y0 - offset)], [posX, posY - (y0 - offset)],
      // needed for compatibility
      [posX, offset] // needed for compatibility
      ];
    };
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/bar.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var bar = ({
  initBar: function initBar() {
    const $el = this.$el,
      config = this.config,
      clip = this.state.clip;
    $el.bar = $el.main.select("." + $COMMON.chart);
    $el.bar = config.bar_front ? $el.bar.append("g") : $el.bar.insert("g", ":first-child");
    $el.bar.attr("class", $BAR.chartBars).call(this.setCssRule(!1, "." + $BAR.chartBars, ["pointer-events:none"]));

    // set clip-path attribute when condition meet
    // https://github.com/naver/billboard.js/issues/2421
    if (config.clipPath === !1 && (config.bar_radius || config.bar_radius_ratio)) {
      $el.bar.attr("clip-path", clip.pathXAxis.replace(/#[^)]*/, "#" + clip.id));
    }
  },
  updateTargetsForBar: function updateTargetsForBar(targets) {
    var _this = this;
    const $$ = this,
      config = $$.config,
      $el = $$.$el,
      classChartBar = $$.getChartClass("Bar"),
      classBars = $$.getClass("bars", !0),
      classFocus = $$.classFocus.bind($$),
      isSelectable = config.interaction_enabled && config.data_selection_isselectable;
    if (!$el.bar) {
      $$.initBar();
    }
    const mainBarUpdate = $el.main.select("." + $BAR.chartBars).selectAll("." + $BAR.chartBar).data(
      // remove
      targets.filter(function (v) {
        var _this2 = this;
        _newArrowCheck(this, _this);
        return v.values.some(function (d) {
          _newArrowCheck(this, _this2);
          return isNumber(d.value) || $$.isBarRangeType(d);
        }.bind(this));
      }.bind(this))).attr("class", function (d) {
        _newArrowCheck(this, _this);
        return classChartBar(d) + classFocus(d);
      }.bind(this)),
      mainBarEnter = mainBarUpdate.enter().append("g").attr("class", classChartBar).style("opacity", "0").style("pointer-events", $$.getStylePropValue("none"));
    // Bars for each data
    mainBarEnter.append("g").attr("class", classBars).style("cursor", function (d) {
      _newArrowCheck(this, _this);
      return isSelectable != null && isSelectable.bind != null && isSelectable.bind($$.api)(d) ? "pointer" : null;
    }.bind(this)).call($$.setCssRule(!0, " ." + $BAR.bar, ["fill"], $$.color));
  },
  /**
   * Generate/Update elements
   * @param {boolean} withTransition Transition for exit elements
   * @param {boolean} isSub Subchart draw
   * @private
   */
  updateBar: function updateBar(withTransition, isSub) {
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      config = $$.config,
      $el = $$.$el,
      $T = $$.$T,
      $root = isSub ? $el.subchart : $el,
      classBar = $$.getClass("bar", !0),
      initialOpacity = $$.initialOpacity.bind($$);
    config.bar_linearGradient && $$.updateLinearGradient();
    const bar = $root.main.selectAll("." + $BAR.bars).selectAll("." + $BAR.bar).data($$.labelishData.bind($$));
    $T(bar.exit(), withTransition).style("opacity", "0").remove();
    $root.bar = bar.enter().append("path").attr("class", classBar).style("fill", $$.updateBarColor.bind($$)).merge(bar).style("opacity", initialOpacity);

    // calculate ratio if grouped data exists
    $$.setRatioForGroupedData($root.bar.data());
  },
  /**
   * Update bar color
   * @param {object} d Data object
   * @returns {string} Color string
   * @private
   */
  updateBarColor: function updateBarColor(d) {
    const $$ = this,
      fn = $$.getStylePropValue($$.color);
    return $$.config.bar_linearGradient ? $$.getGradienColortUrl(d.id) : fn ? fn(d) : null;
  },
  /**
   * Redraw function
   * @param {Function} drawFn Retuned function from .getDrawShape() => .generateDrawBar()
   * @param {boolean} withTransition With or without transition
   * @param {boolean} isSub Subchart draw
   * @returns {Array}
   * @private
   */
  redrawBar: function redrawBar(drawFn, withTransition, isSub) {
    var _this3 = this;
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      _ref = isSub ? $$.$el.subchart : $$.$el,
      bar = _ref.bar;
    return [$$.$T(bar, withTransition, getRandom()).attr("d", function (d) {
      _newArrowCheck(this, _this3);
      return (isNumber(d.value) || $$.isBarRangeType(d)) && drawFn(d);
    }.bind(this)).style("fill", $$.updateBarColor.bind($$)).style("opacity", null)];
  },
  /**
   * Generate draw function
   * @param {object} barIndices data order within x axis.
   * barIndices ==> {data1: 0, data2: 0, data3: 1, data4: 1, __max__: 1}
   *
   * When gropus given as:
   *  groups: [
   *		["data1", "data2"],
   *		["data3", "data4"]
   *	],
   *
   * Will be rendered as:
   * 		data1 data3   data1 data3
   *		data2 data4   data2 data4
   *		-------------------------
   *			 0             1
   * @param {boolean} isSub If is for subchart
   * @returns {Function}
   * @private
   */
  generateDrawBar: function generateDrawBar(barIndices, isSub) {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      getPoints = $$.generateGetBarPoints(barIndices, isSub),
      isRotated = config.axis_rotated,
      barRadius = config.bar_radius,
      barRadiusRatio = config.bar_radius_ratio,
      getRadius = isNumber(barRadius) && barRadius > 0 ? function () {
        _newArrowCheck(this, _this4);
        return barRadius;
      }.bind(this) : isNumber(barRadiusRatio) ? function (w) {
        _newArrowCheck(this, _this4);
        return w * barRadiusRatio;
      }.bind(this) : null;

    // get the bar radius

    return function (d, i) {
      _newArrowCheck(this, _this4);
      // 4 points that make a bar
      const points = getPoints(d, i),
        indexX = +isRotated,
        indexY = +!indexX,
        isUnderZero = d.value < 0,
        isInverted = config["axis_" + $$.axis.getId(d.id) + "_inverted"],
        isNegative = !isInverted && isUnderZero || isInverted && !isUnderZero,
        pathRadius = ["", ""]; // switch points if axis is rotated, not applicable for sub chart
      let radius = 0;
      const isGrouped = $$.isGrouped(d.id),
        isRadiusData = getRadius && isGrouped ? $$.isStackingRadiusData(d) : !1;
      if (getRadius) {
        const index = isRotated ? indexY : indexX,
          barW = points[2][index] - points[0][index];
        radius = !isGrouped || isRadiusData ? getRadius(barW) : 0;
        const arc = "a" + radius + "," + radius + " " + (isNegative ? "1 0 0" : "0 0 1") + " ";
        pathRadius[+!isRotated] = "" + arc + radius + "," + radius;
        pathRadius[+isRotated] = "" + arc + [-radius, radius][isRotated ? "sort" : "reverse"]();
        isNegative && pathRadius.reverse();
      }

      // path string data shouldn't be containing new line chars
      // https://github.com/naver/billboard.js/issues/530
      const path = isRotated ? "H" + (points[1][indexX] + (isNegative ? radius : -radius)) + " " + pathRadius[0] + "V" + (points[2][indexY] - radius) + " " + pathRadius[1] + "H" + points[3][indexX] : "V" + (points[1][indexY] + (isNegative ? -radius : radius)) + " " + pathRadius[0] + "H" + (points[2][indexX] - radius) + " " + pathRadius[1] + "V" + points[3][indexY];
      return "M" + points[0][indexX] + "," + points[0][indexY] + path + "z";
    }.bind(this);
  },
  /**
   * Determine if given stacking bar data is radius type
   * @param {object} d Data row
   * @returns {boolean}
   */
  isStackingRadiusData: function isStackingRadiusData(d) {
    var _this5 = this;
    const $$ = this,
      $el = $$.$el,
      config = $$.config,
      data = $$.data,
      state = $$.state,
      id = d.id,
      index = d.index,
      value = d.value;
    // when the data is hidden, check if has rounded edges
    if (state.hiddenTargetIds.indexOf(id) > -1) {
      const target = $el.bar.filter(function (d) {
        _newArrowCheck(this, _this5);
        return d.id === id && d.value === value;
      }.bind(this));
      return !target.empty() && /a\d+/i.test(target.attr("d"));
    }

    // Find same grouped ids
    const keys = config.data_groups.find(function (v) {
        _newArrowCheck(this, _this5);
        return v.indexOf(id) > -1;
      }.bind(this)),
      sortedList = $$.orderTargets($$.filterTargetsToShow(data.targets.filter($$.isBarType, $$))).filter(function (v) {
        _newArrowCheck(this, _this5);
        return keys.indexOf(v.id) > -1;
      }.bind(this)),
      sortedIds = sortedList.map(function (v) {
        var _this6 = this;
        _newArrowCheck(this, _this5);
        return v.values.filter(function (v2) {
          _newArrowCheck(this, _this6);
          return v2.index === index && (isNumber(value) && value > 0 ? v2.value > 0 : v2.value < 0);
        }.bind(this))[0];
      }.bind(this)).filter(Boolean).map(function (v) {
        _newArrowCheck(this, _this5);
        return v.id;
      }.bind(this)); // Get sorted list
    // Get sorted Ids. Filter positive or negative values Ids from given value
    // If the given id stays in the last position, then radius should be applied.
    return value !== 0 && sortedIds.indexOf(id) === sortedIds.length - 1;
  },
  /**
   * Generate bar coordinate points data
   * @param {object} barIndices Data order within x axis.
   * @param {boolean} isSub If is for subchart
   * @returns {Array} Array of coordinate points
   * @private
   */
  generateGetBarPoints: function generateGetBarPoints(barIndices, isSub) {
    var _this7 = this;
    const $$ = this,
      config = $$.config,
      axis = isSub ? $$.axis.subX : $$.axis.x,
      barTargetsNum = $$.getIndicesMax(barIndices) + 1,
      barW = $$.getBarW("bar", axis, barTargetsNum),
      barX = $$.getShapeX(barW, barIndices, !!isSub),
      barY = $$.getShapeY(!!isSub),
      barOffset = $$.getShapeOffset($$.isBarType, barIndices, !!isSub),
      yScale = $$.getYScaleById.bind($$);
    return function (d, i) {
      _newArrowCheck(this, _this7);
      const id = d.id,
        y0 = yScale.call($$, id, isSub)($$.getShapeYMin(id)),
        offset = barOffset(d, i) || y0,
        width = isNumber(barW) ? barW : barW[d.id] || barW._$width,
        isInverted = config["axis_" + $$.axis.getId(id) + "_inverted"],
        value = d.value,
        posX = barX(d);

      // offset is for stacked bar chart

      let posY = barY(d);

      // fix posY not to overflow opposite quadrant
      if (config.axis_rotated && !isInverted && (value > 0 && posY < y0 || value < 0 && y0 < posY)) {
        posY = y0;
      }
      if (!$$.isBarRangeType(d)) {
        posY -= y0 - offset;
      }
      const startPosX = posX + width;

      // 4 points that make a bar
      return [[posX, offset], [posX, posY], [startPosX, posY], [startPosX, offset]];
    }.bind(this);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/candlestick.ts


function candlestick_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function candlestick_objectSpread(e) { for (var r = 1, t; r < arguments.length; r++) { t = null != arguments[r] ? arguments[r] : {}; r % 2 ? candlestick_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : candlestick_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var candlestick = ({
  initCandlestick: function initCandlestick() {
    const $el = this.$el;
    $el.candlestick = $el.main.select("." + $COMMON.chart)
    // should positioned at the beginning of the shape node to not overlap others
    .append("g").attr("class", $CANDLESTICK.chartCandlesticks);
  },
  /**
   * Update targets by its data
   * called from: ChartInternal.updateTargets()
   * @param {Array} targets Filtered target by type
   * @private
   */
  updateTargetsForCandlestick: function updateTargetsForCandlestick(targets) {
    const $$ = this,
      $el = $$.$el,
      classChart = $$.getChartClass("Candlestick");
    if (!$el.candlestick) {
      $$.initCandlestick();
    }
    const mainUpdate = $$.$el.main.select("." + $CANDLESTICK.chartCandlesticks).selectAll("." + $CANDLESTICK.chartCandlestick).data(targets);
    mainUpdate.enter().append("g").attr("class", classChart).style("pointer-events", "none");
  },
  /**
   * Generate/Update elements
   * @param {boolean} withTransition Transition for exit elements
   * @param {boolean} isSub Subchart draw
   * @private
   */
  updateCandlestick: function updateCandlestick(withTransition, isSub) {
    var _this = this;
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      $el = $$.$el,
      $T = $$.$T,
      $root = isSub ? $el.subchart : $el,
      classSetter = $$.getClass("candlestick", !0),
      initialOpacity = $$.initialOpacity.bind($$),
      candlestick = $root.main.selectAll("." + $CANDLESTICK.chartCandlestick).selectAll("." + $CANDLESTICK.candlestick).data($$.labelishData.bind($$));
    $T(candlestick.exit(), withTransition).style("opacity", "0").remove();
    const candlestickEnter = candlestick.enter().filter(function (d) {
      _newArrowCheck(this, _this);
      return d.value;
    }.bind(this)).append("g").attr("class", classSetter);
    candlestickEnter.append("line");
    candlestickEnter.append("path");
    $root.candlestick = candlestick.merge(candlestickEnter).style("opacity", initialOpacity);
  },
  /**
   * Get draw function
   * @param {object} indices Indice data
   * @param {boolean} isSub Subchart draw
   * @returns {Function}
   * @private
   */
  generateDrawCandlestick: function generateDrawCandlestick(indices, isSub) {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      getPoints = $$.generateGetCandlestickPoints(indices, isSub),
      isRotated = config.axis_rotated,
      downColor = config.candlestick_color_down;
    return function (d, i, g) {
      var _value,
        _this3 = this;
      _newArrowCheck(this, _this2);
      const points = getPoints(d, i),
        value = $$.getCandlestickData(d),
        isUp = (_value = value) == null ? void 0 : _value._isUp,
        indexX = +isRotated; // switch points if axis is rotated, not applicable for sub chart
      if (g.classed) {
        g.classed($CANDLESTICK[isUp ? "valueUp" : "valueDown"], !0);
      }
      const path = isRotated ? "H" + points[1][1] + " V" + points[1][0] + " H" + points[0][1] : "V" + points[1][1] + " H" + points[1][0] + " V" + points[0][1];
      g.select("path").attr("d", "M" + points[0][indexX] + "," + points[0][+!indexX] + path + "z").style("fill", function (d) {
        _newArrowCheck(this, _this3);
        const color = isUp ? $$.color(d) : isObject(downColor) ? downColor[d.id] : downColor;
        return color || $$.color(d);
      }.bind(this));

      // set line position
      const line = g.select("line"),
        pos = isRotated ? {
          x1: points[2][1],
          x2: points[2][2],
          y1: points[2][0],
          y2: points[2][0]
        } : {
          x1: points[2][0],
          x2: points[2][0],
          y1: points[2][1],
          y2: points[2][2]
        };
      for (const x in pos) {
        line.attr(x, pos[x]);
      }
    }.bind(this);
  },
  /**
   * Generate shape drawing points
   * @param {object} indices Indice data
   * @param {boolean} isSub Subchart draw
   * @returns {Function}
   */
  generateGetCandlestickPoints: function generateGetCandlestickPoints(indices, isSub) {
    var _this4 = this;
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      axis = isSub ? $$.axis.subX : $$.axis.x,
      targetsNum = $$.getIndicesMax(indices) + 1,
      barW = $$.getBarW("candlestick", axis, targetsNum),
      x = $$.getShapeX(barW, indices, !!isSub),
      y = $$.getShapeY(!!isSub),
      shapeOffset = $$.getShapeOffset($$.isBarType, indices, !!isSub),
      yScale = $$.getYScaleById.bind($$);
    return function (d, i) {
      _newArrowCheck(this, _this4);
      const y0 = yScale.call($$, d.id, isSub)($$.getShapeYMin(d.id)),
        offset = shapeOffset(d, i) || y0,
        width = isNumber(barW) ? barW : barW[d.id] || barW._$width,
        value = $$.getCandlestickData(d); // offset is for stacked bar chart
      let points;
      if (value && isNumber(value.open) && isNumber(value.close)) {
        const posX = {
          start: x(d),
          end: 0
        };
        posX.end = posX.start + width;
        const posY = {
            start: y(value.open),
            end: y(value.close)
          },
          posLine = {
            x: posX.start + width / 2,
            high: y(value.high),
            low: y(value.low)
          };
        posY.start -= y0 - offset;
        points = [[posX.start, posY.start], [posX.end, posY.end], [posLine.x, posLine.low, posLine.high]];
      } else {
        points = [[0, 0], [0, 0], [0, 0, 0]];
      }
      return points;
    }.bind(this);
  },
  /**
   * Redraw function
   * @param {Function} drawFn Retuned functino from .generateDrawCandlestick()
   * @param {boolean} withTransition With or without transition
   * @param {boolean} isSub Subchart draw
   * @returns {Array}
   */
  redrawCandlestick: function redrawCandlestick(drawFn, withTransition, isSub) {
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      $el = $$.$el,
      $T = $$.$T,
      _ref = isSub ? $el.subchart : $el,
      candlestick = _ref.candlestick,
      rand = getRandom(!0);
    return [candlestick.each(function (d, i) {
      const g = $T((0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this), withTransition, rand);
      drawFn(d, i, g);
    }).style("opacity", null)];
  },
  /**
   * Get candlestick data as object
   * @param {object} param Data object
   * @param {Array|object} param.value Data value
   * @returns {object|null} Converted data object
   * @private
   */
  getCandlestickData: function getCandlestickData(_ref2) {
    let value = _ref2.value,
      d;
    if (isArray(value)) {
      const open = value[0],
        high = value[1],
        low = value[2],
        close = value[3],
        _value$ = value[4],
        volume = _value$ === void 0 ? !1 : _value$;
      d = {
        open: open,
        high: high,
        low: low,
        close: close
      };
      if (volume !== !1) {
        d.volume = volume;
      }
    } else if (isObject(value)) {
      d = candlestick_objectSpread({}, value);
    }
    if (d) {
      d._isUp = d.close >= d.open;
    }
    return d || null;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/gauge.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var gauge = ({
  initGauge: function initGauge() {
    var _this = this;
    const $$ = this,
      config = $$.config,
      arcs = $$.$el.arcs,
      appendText = function (className) {
        _newArrowCheck(this, _this);
        arcs.append("text").attr("class", className).style("text-anchor", "middle").style("pointer-events", "none");
      }.bind(this);
    if ($$.hasType("gauge")) {
      const hasMulti = $$.hasMultiArcGauge();
      arcs.append(hasMulti ? "g" : "path").attr("class", $ARC.chartArcsBackground).style("fill", !hasMulti && config.gauge_background || null);
      config.gauge_units && appendText($GAUGE.chartArcsGaugeUnit);
      if (config.gauge_label_show) {
        appendText($GAUGE.chartArcsGaugeMin);
        config.gauge_fullCircle || appendText($GAUGE.chartArcsGaugeMax);
      }
    }
  },
  updateGaugeMax: function updateGaugeMax() {
    const $$ = this,
      config = $$.config,
      state = $$.state,
      hasMultiGauge = $$.hasMultiArcGauge(),
      max = hasMultiGauge ? $$.getMinMaxData().max[0].value : $$.getTotalDataSum(state.rendered);

    // to prevent excluding total data sum during the init(when data.hide option is used), use $$.rendered state value

    // if gauge_max less than max, make max to max value
    if (max + config.gauge_min * (config.gauge_min > 0 ? -1 : 1) > config.gauge_max) {
      config.gauge_max = max - config.gauge_min;
    }
  },
  redrawMultiArcGauge: function redrawMultiArcGauge() {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      $el = $$.$el,
      hiddenTargetIds = $$.state.hiddenTargetIds,
      arcLabelLines = $el.main.selectAll("." + $ARC.arcs).selectAll("." + $ARC.arcLabelLine).data($$.arcData.bind($$)),
      mainArcLabelLine = arcLabelLines.enter().append("rect").attr("class", function (d) {
        _newArrowCheck(this, _this2);
        return $ARC.arcLabelLine + " " + $COMMON.target + " " + $COMMON.target + "-" + d.data.id;
      }.bind(this)).merge(arcLabelLines);
    mainArcLabelLine.style("fill", function (d) {
      _newArrowCheck(this, _this2);
      return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data);
    }.bind(this)).style("display", config.gauge_label_show ? null : "none").each(function (d) {
      let lineLength = 0;
      let x = 0,
        y = 0,
        transform = "";
      if (hiddenTargetIds.indexOf(d.data.id) < 0) {
        const updated = $$.updateAngle(d),
          innerLineLength = state.gaugeArcWidth / $$.filterTargetsToShow($$.data.targets).length * (updated.index + 1),
          lineAngle = updated.endAngle - Math.PI / 2,
          arcInnerRadius = state.radius - innerLineLength,
          linePositioningAngle = lineAngle - (arcInnerRadius === 0 ? 0 : 1 / arcInnerRadius);
        lineLength = state.radiusExpanded - state.radius + innerLineLength;
        x = Math.cos(linePositioningAngle) * arcInnerRadius;
        y = Math.sin(linePositioningAngle) * arcInnerRadius;
        transform = "rotate(" + lineAngle * 180 / Math.PI + ", " + x + ", " + y + ")";
      }
      (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).attr("x", x).attr("y", y).attr("width", lineLength).attr("height", 2).attr("transform", transform).style("stroke-dasharray", "0, " + (lineLength + 2) + ", 0");
    });
  },
  textForGaugeMinMax: function textForGaugeMinMax(value, isMax) {
    const $$ = this,
      config = $$.config,
      format = config.gauge_label_extents;
    return isFunction(format) ? format.bind($$.api)(value, isMax) : value;
  },
  getGaugeLabelHeight: function getGaugeLabelHeight() {
    const config = this.config;
    return this.config.gauge_label_show && !config.gauge_fullCircle ? 20 : 0;
  },
  getPaddingBottomForGauge: function getPaddingBottomForGauge() {
    const $$ = this;
    return $$.getGaugeLabelHeight() * ($$.config.gauge_label_show ? 2 : 2.5);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/bubble.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var bubble = ({
  /**
   * Initializer
   * @private
   */
  initBubble: function initBubble() {
    const $$ = this,
      config = $$.config;
    if ($$.hasType("bubble")) {
      config.point_show = !0;
      config.point_type = "circle";
    }
  },
  /**
   * Get user agent's computed value
   * @returns {number}
   * @private
   */
  getBaseLength: function getBaseLength() {
    const $$ = this,
      _$$$state = $$.state,
      width = _$$$state.width,
      height = _$$$state.height,
      cacheKey = KEY.bubbleBaseLength;
    let baseLength = $$.cache.get(cacheKey);
    if (!baseLength) {
      $$.cache.add(cacheKey, baseLength = getMinMax("min", [width, height]));
    }
    return baseLength;
  },
  /**
   * Get the radius value for bubble circle
   * @param {object} d Data object
   * @returns {number}
   * @private
   */
  getBubbleR: function getBubbleR(d) {
    var _this = this;
    const $$ = this;
    let maxR = $$.config.bubble_maxR;
    if (isFunction(maxR)) {
      maxR = maxR.bind($$.api)(d);
    } else if (!isNumber(maxR)) {
      maxR = $$.getBaseLength() / ($$.getMaxDataCount() * 2) + 12;
    }
    const max = getMinMax("max", $$.getMinMaxData().max.map(function (d) {
        _newArrowCheck(this, _this);
        return $$.isBubbleZType(d) ? $$.getBubbleZData(d.value, "y") : isObject(d.value) ? d.value.mid : d.value;
      }.bind(this))),
      maxArea = maxR * maxR * Math.PI,
      area = ($$.isBubbleZType(d) ? $$.getBubbleZData(d.value, "z") : d.value) * (maxArea / max);
    return Math.sqrt(area / Math.PI);
  },
  /**
   * Get bubble dimension data
   * @param {object|Array} d data value
   * @param {string} type - y or z
   * @returns {number}
   * @private
   */
  getBubbleZData: function getBubbleZData(d, type) {
    return isObject(d) ? d[type] : d[type === "y" ? 0 : 1];
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/line.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var line = ({
  initLine: function initLine() {
    const $el = this.$el;
    $el.line = $el.main.select("." + $COMMON.chart).append("g").attr("class", $LINE.chartLines).call(this.setCssRule(!1, "." + $LINE.chartLines, ["pointer-events:none"]));
  },
  updateTargetsForLine: function updateTargetsForLine(t) {
    var _this = this;
    const $$ = this,
      _$$$$el = $$.$el,
      area = _$$$$el.area,
      line = _$$$$el.line,
      main = _$$$$el.main,
      classChartLine = $$.getChartClass("Line"),
      classLines = $$.getClass("lines", !0),
      classFocus = $$.classFocus.bind($$);
    if (!line) {
      $$.initLine();
    }
    const targets = t.filter(function (d) {
        _newArrowCheck(this, _this);
        return !($$.isScatterType(d) || $$.isBubbleType(d));
      }.bind(this)),
      mainLineUpdate = main.select("." + $LINE.chartLines).selectAll("." + $LINE.chartLine).data(targets).attr("class", function (d) {
        _newArrowCheck(this, _this);
        return classChartLine(d) + classFocus(d);
      }.bind(this)),
      mainLineEnter = mainLineUpdate.enter().append("g").attr("class", classChartLine).style("opacity", "0").style("pointer-events", $$.getStylePropValue("none"));
    // Lines for each data
    mainLineEnter.append("g").attr("class", classLines);

    // Areas
    if ($$.hasTypeOf("Area")) {
      const mainLine = (!area && mainLineEnter.empty() ? mainLineUpdate : mainLineEnter).filter($$.isAreaType.bind($$));
      $$.initArea(mainLine);
    }
    $$.updateTargetForCircle(targets, mainLineEnter);
  },
  /**
   * Generate/Update elements
   * @param {boolean} withTransition Transition for exit elements
   * @param {boolean} isSub Subchart draw
   * @private
   */
  updateLine: function updateLine(withTransition, isSub) {
    var _this2 = this;
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      extraLineClasses = $$.format.extraLineClasses,
      $el = $$.$el,
      $T = $$.$T,
      $root = isSub ? $el.subchart : $el,
      line = $root.main.selectAll("." + $LINE.lines).selectAll("." + $LINE.line).data($$.lineData.bind($$));
    $T(line.exit(), withTransition).style("opacity", "0").remove();
    $root.line = line.enter().append("path").attr("class", function (d) {
      _newArrowCheck(this, _this2);
      return $$.getClass("line", !0)(d) + " " + (extraLineClasses(d) || "");
    }.bind(this)).style("stroke", $$.color).merge(line).style("opacity", $$.initialOpacity.bind($$)).attr("transform", null);
  },
  /**
   * Redraw function
   * @param {Function} drawFn Retuned functino from .generateDrawCandlestick()
   * @param {boolean} withTransition With or without transition
   * @param {boolean} isSub Subchart draw
   * @returns {Array}
   */
  redrawLine: function redrawLine(drawFn, withTransition, isSub) {
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      $el = $$.$el,
      $T = $$.$T,
      _ref = isSub ? $el.subchart : $el,
      line = _ref.line;
    return [$T(line, withTransition, getRandom()).attr("d", drawFn).style("stroke", this.color).style("opacity", null)];
  },
  /**
   * Get the curve interpolate
   * @param {Array} d Data object
   * @returns {Function}
   * @private
   */
  getCurve: function getCurve(d) {
    var _this3 = this;
    const $$ = this,
      isRotatedStepType = $$.config.axis_rotated && $$.isStepType(d);
    // when is step & rotated, should be computed in different way
    // https://github.com/naver/billboard.js/issues/471
    return isRotatedStepType ? function (context) {
      _newArrowCheck(this, _this3);
      const step = $$.getInterpolate(d)(context);

      // keep the original method
      step.orgPoint = step.point;

      // to get rotated path data
      step.pointRotated = function (x, y) {
        this._point === 1 && (this._point = 2);
        const y1 = this._y * (1 - this._t) + y * this._t;
        this._context.lineTo(this._x, y1);
        this._context.lineTo(x, y1);
        this._x = x;
        this._y = y;
      };
      step.point = function (x, y) {
        this._point === 0 ? this.orgPoint(x, y) : this.pointRotated(x, y);
      };
      return step;
    }.bind(this) : $$.getInterpolate(d);
  },
  generateDrawLine: function generateDrawLine(lineIndices, isSub) {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      lineConnectNull = config.line_connectNull,
      isRotated = config.axis_rotated,
      getPoints = $$.generateGetLinePoints(lineIndices, isSub),
      yScale = $$.getYScaleById.bind($$),
      xValue = function (d) {
        _newArrowCheck(this, _this4);
        return (isSub ? $$.subxx : $$.xx).call($$, d);
      }.bind(this),
      yValue = function (d, i) {
        _newArrowCheck(this, _this4);
        return $$.isGrouped(d.id) ? getPoints(d, i)[0][1] : yScale(d.id, isSub)($$.getBaseValue(d));
      }.bind(this);
    let line = (0,external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_.line)();
    line = isRotated ? line.x(yValue).y(xValue) : line.x(xValue).y(yValue);
    if (!lineConnectNull) {
      line = line.defined(function (d) {
        _newArrowCheck(this, _this4);
        return $$.getBaseValue(d) !== null;
      }.bind(this));
    }
    const x = isSub ? scale.subX : scale.x;
    return function (d) {
      _newArrowCheck(this, _this4);
      const y = yScale(d.id, isSub);
      let values = lineConnectNull ? $$.filterRemoveNull(d.values) : d.values,
        x0 = 0,
        y0 = 0,
        path;
      if ($$.isLineType(d)) {
        const regions = config.data_regions[d.id];
        if (regions) {
          path = $$.lineWithRegions(values, scale.zoom || x, y, regions);
        } else {
          if ($$.isStepType(d)) {
            values = $$.convertValuesToStep(values);
          }
          path = line.curve($$.getCurve(d))(values);
        }
      } else {
        if (values[0]) {
          x0 = x(values[0].x);
          y0 = y(values[0].value);
        }
        path = isRotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
      }
      return path || "M 0 0";
    }.bind(this);
  },
  lineWithRegions: function lineWithRegions(d, x, y, _regions) {
    var _this5 = this;
    const $$ = this,
      config = $$.config,
      isRotated = config.axis_rotated,
      isTimeSeries = $$.axis.isTimeSeries(),
      regions = [],
      dasharray = "2 2";
    // default value
    let xp, yp, diff, diffx2;
    // Check start/end of regions
    if (isDefined(_regions)) {
      const getValue = function (v, def) {
        _newArrowCheck(this, _this5);
        return isUndefined(v) ? def : isTimeSeries ? parseDate.call($$, v) : v;
      }.bind(this);
      for (let i = 0, reg; reg = _regions[i]; i++) {
        const start = getValue(reg.start, d[0].x),
          end = getValue(reg.end, d[d.length - 1].x),
          style = reg.style || {
            dasharray: dasharray
          };
        regions[i] = {
          start: start,
          end: end,
          style: style
        };
      }
    }

    // Set scales
    const xValue = isRotated ? function (dt) {
        _newArrowCheck(this, _this5);
        return y(dt.value);
      }.bind(this) : function (dt) {
        _newArrowCheck(this, _this5);
        return x(dt.x);
      }.bind(this),
      yValue = isRotated ? function (dt) {
        _newArrowCheck(this, _this5);
        return x(dt.x);
      }.bind(this) : function (dt) {
        _newArrowCheck(this, _this5);
        return y(dt.value);
      }.bind(this),
      generateM = function (points) {
        _newArrowCheck(this, _this5);
        return "M" + points[0][0] + "," + points[0][1] + "L" + points[1][0] + "," + points[1][1];
      }.bind(this),
      sWithRegion = isTimeSeries ? function (d0, d1, k, timeseriesDiff) {
        _newArrowCheck(this, _this5);
        const x0 = d0.x.getTime(),
          xDiff = d1.x - d0.x,
          xv0 = new Date(x0 + xDiff * k),
          xv1 = new Date(x0 + xDiff * (k + timeseriesDiff)),
          points = isRotated ? [[y(yp(k)), x(xv0)], [y(yp(k + diff)), x(xv1)]] : [[x(xv0), y(yp(k))], [x(xv1), y(yp(k + diff))]];
        return generateM(points);
      }.bind(this) : function (d0, d1, k, otherDiff) {
        _newArrowCheck(this, _this5);
        const points = isRotated ? [[y(yp(k), !0), x(xp(k))], [y(yp(k + otherDiff), !0), x(xp(k + otherDiff))]] : [[x(xp(k), !0), y(yp(k))], [x(xp(k + otherDiff), !0), y(yp(k + otherDiff))]];
        return generateM(points);
      }.bind(this),
      axisType = {
        x: $$.axis.getAxisType("x"),
        y: $$.axis.getAxisType("y")
      }; // Define svg generator function for region
    // Generate
    let path = "";
    for (let i = 0, data; data = d[i]; i++) {
      const prevData = d[i - 1],
        hasPrevData = prevData && isValue(prevData.value);
      let style = $$.isWithinRegions(data.x, regions);

      // https://github.com/naver/billboard.js/issues/1172
      if (!isValue(data.value)) {
        continue;
      }

      // Draw as normal
      if (isUndefined(regions) || !style || !hasPrevData) {
        path += "" + (i && hasPrevData ? "L" : "M") + xValue(data) + "," + yValue(data);
      } else if (hasPrevData) {
        try {
          style = style.dasharray.split(" ");
        } catch (e) {
          style = dasharray.split(" ");
        }

        // Draw with region // TODO: Fix for horizotal charts
        xp = getScale(axisType.x, prevData.x, data.x);
        yp = getScale(axisType.y, prevData.value, data.value);
        const dx = x(data.x) - x(prevData.x),
          dy = y(data.value) - y(prevData.value),
          dd = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        diff = style[0] / dd;
        diffx2 = diff * style[1];
        for (let j = diff; j <= 1; j += diffx2) {
          path += sWithRegion(prevData, data, j, diff);

          // to make sure correct line drawing
          if (j + diffx2 >= 1) {
            path += sWithRegion(prevData, data, 1, 0);
          }
        }
      }
    }
    return path;
  },
  isWithinRegions: function isWithinRegions(withinX, withinRegions) {
    for (let i = 0, reg; reg = withinRegions[i]; i++) {
      if (reg.start < withinX && withinX <= reg.end) {
        return reg.style;
      }
    }
    return !1;
  },
  isWithinStep: function isWithinStep(that, y) {
    return Math.abs(y - getPointer(this.state.event, that)[1]) < 30;
  },
  shouldDrawPointsForLine: function shouldDrawPointsForLine(d) {
    const linePoint = this.config.line_point;
    return linePoint === !0 || isArray(linePoint) && linePoint.indexOf(d.id) !== -1;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/point.ts

var point_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




const getTransitionName = function () {
  _newArrowCheck(this, point_this);
  return getRandom();
}.bind(undefined);
/* harmony default export */ var point = ({
  hasValidPointType: function hasValidPointType(type) {
    return /^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(type || this.config.point_type);
  },
  hasValidPointDrawMethods: function hasValidPointDrawMethods(type) {
    const pointType = type || this.config.point_type;
    return isObjectType(pointType) && isFunction(pointType.create) && isFunction(pointType.update);
  },
  initialOpacityForCircle: function initialOpacityForCircle(d) {
    const config = this.config,
      withoutFadeIn = this.state.withoutFadeIn;
    let opacity = config.point_opacity;
    if (isUndefined(opacity)) {
      opacity = this.getBaseValue(d) !== null && withoutFadeIn[d.id] ? this.opacityForCircle(d) : "0";
    }
    return opacity;
  },
  opacityForCircle: function opacityForCircle(d) {
    const config = this.config;
    let opacity = config.point_opacity;
    if (isUndefined(opacity)) {
      var _this$isPointFocusOnl;
      opacity = config.point_show && !((_this$isPointFocusOnl = this.isPointFocusOnly) != null && _this$isPointFocusOnl.call(this)) ? null : "0";
      opacity = isValue(this.getBaseValue(d)) ? this.isBubbleType(d) || this.isScatterType(d) ? "0.5" : opacity : "0";
    }
    return opacity;
  },
  initCircle: function initCircle() {
    const $$ = this,
      main = $$.$el.main;
    $$.point = $$.generatePoint();
    if (($$.hasType("bubble") || $$.hasType("scatter")) && main.select("." + $CIRCLE.chartCircles).empty()) {
      main.select("." + $COMMON.chart).append("g").attr("class", $CIRCLE.chartCircles);
    }
  },
  updateTargetForCircle: function updateTargetForCircle(targetsValue, enterNodeValue) {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      data = $$.data,
      $el = $$.$el,
      selectionEnabled = config.interaction_enabled && config.data_selection_enabled,
      isSelectable = selectionEnabled && config.data_selection_isselectable,
      classCircles = $$.getClass("circles", !0);
    if (!config.point_show) {
      return;
    }
    $el.circle || $$.initCircle();
    let targets = targetsValue,
      enterNode = enterNodeValue;
    // only for scatter & bubble type should generate seprate <g> node
    if (!targets) {
      targets = data.targets.filter(function (d) {
        _newArrowCheck(this, _this2);
        return this.isScatterType(d) || this.isBubbleType(d);
      }.bind(this));
      const mainCircle = $el.main.select("." + $CIRCLE.chartCircles).style("pointer-events", "none").selectAll("." + $CIRCLE.circles).data(targets);
      mainCircle.exit().remove();
      enterNode = mainCircle.enter();
    }

    // Circles for each data point on lines
    selectionEnabled && enterNode.append("g").attr("class", function (d) {
      _newArrowCheck(this, _this2);
      return $$.generateClass($SELECT.selectedCircles, d.id);
    }.bind(this));
    enterNode.append("g").attr("class", classCircles).call(function (selection) {
      _newArrowCheck(this, _this2);
      $$.setCssRule(!0, "." + $CIRCLE.circles, ["cursor:pointer"], isSelectable)(selection);
      $$.setCssRule(!0, " ." + $CIRCLE.circle, ["fill", "stroke"], $$.color)(selection);
    }.bind(this)).style("opacity", function () {
      const parent = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this.parentNode);

      // if the parent node is .bb-chart-circles (bubble, scatter), initialize <g bb-circles> with opacity "0"
      return parent.attr("class").indexOf($CIRCLE.chartCircles) > -1 ? "0" : null;
    });

    // Update date for selected circles
    selectionEnabled && targets.forEach(function (t) {
      var _this3 = this;
      _newArrowCheck(this, _this2);
      $el.main.selectAll("." + $SELECT.selectedCircles + $$.getTargetSelectorSuffix(t.id)).selectAll("" + $SELECT.selectedCircle).each(function (d) {
        _newArrowCheck(this, _this3);
        d.value = t.values[d.index].value;
      }.bind(this));
    }.bind(this));
  },
  updateCircle: function updateCircle(isSub) {
    var _this4 = this;
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      config = $$.config,
      state = $$.state,
      $el = $$.$el,
      focusOnly = $$.isPointFocusOnly(),
      $root = isSub ? $el.subchart : $el;
    if (config.point_show && !state.toggling) {
      config.point_radialGradient && $$.updateLinearGradient();
      const circles = $root.main.selectAll("." + $CIRCLE.circles).selectAll("." + $CIRCLE.circle).data(function (d) {
        _newArrowCheck(this, _this4);
        return $$.isLineType(d) && $$.shouldDrawPointsForLine(d) || $$.isBubbleType(d) || $$.isRadarType(d) || $$.isScatterType(d) ? focusOnly ? [d.values[0]] : d.values : [];
      }.bind(this));
      circles.exit().remove();
      circles.enter().filter(Boolean).append($$.point("create", this, $$.pointR.bind($$), $$.updateCircleColor.bind($$)));
      $root.circle = $root.main.selectAll("." + $CIRCLE.circles + " ." + $CIRCLE.circle).style("stroke", $$.getStylePropValue($$.color)).style("opacity", $$.initialOpacityForCircle.bind($$));
    }
  },
  /**
   * Update circle color
   * @param {object} d Data object
   * @returns {string} Color string
   * @private
   */
  updateCircleColor: function updateCircleColor(d) {
    const $$ = this,
      fn = $$.getStylePropValue($$.color);
    return $$.config.point_radialGradient ? $$.getGradienColortUrl(d.id) : fn ? fn(d) : null;
  },
  redrawCircle: function redrawCircle(cx, cy, withTransition, flow, isSub) {
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      rendered = $$.state.rendered,
      $el = $$.$el,
      $T = $$.$T,
      $root = isSub ? $el.subchart : $el,
      selectedCircles = $root.main.selectAll("." + $SELECT.selectedCircle);
    if (!$$.config.point_show) {
      return [];
    }
    const fn = $$.point("update", $$, cx, cy, $$.updateCircleColor.bind($$), withTransition, flow, selectedCircles),
      posAttr = $$.isCirclePoint() ? "c" : "",
      t = getRandom(),
      opacityStyleFn = $$.opacityForCircle.bind($$),
      mainCircles = [];
    $root.circle.each(function (d) {
      let result = fn.bind(this)(d);
      result = $T(result, withTransition || !rendered, t).style("opacity", opacityStyleFn);
      mainCircles.push(result);
    });
    return [mainCircles, $T(selectedCircles, withTransition).attr(posAttr + "x", cx).attr(posAttr + "y", cy)];
  },
  /**
   * Show focused data point circle
   * @param {object} d Selected data
   * @private
   */
  showCircleFocus: function showCircleFocus(d) {
    const $$ = this,
      _$$$state = $$.state,
      hasRadar = _$$$state.hasRadar,
      resizing = _$$$state.resizing,
      toggling = _$$$state.toggling,
      transiting = _$$$state.transiting,
      $el = $$.$el;
    let circle = $el.circle;
    if (transiting === !1 && circle && $$.isPointFocusOnly()) {
      const cx = (hasRadar ? $$.radarCircleX : $$.circleX).bind($$),
        cy = (hasRadar ? $$.radarCircleY : $$.circleY).bind($$),
        withTransition = toggling || isUndefined(d),
        fn = $$.point("update", $$, cx, cy, $$.getStylePropValue($$.color), resizing ? !1 : withTransition);
      if (d) {
        circle = circle.filter(function (t) {
          var _this5 = this;
          const data = d.filter == null ? void 0 : d.filter(function (v) {
            _newArrowCheck(this, _this5);
            return v.id === t.id;
          }.bind(this));
          return data.length ? (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).datum(data[0]) : !1;
        });
      }
      circle.attr("class", this.updatePointClass.bind(this)).style("opacity", null).each(function (d) {
        const id = d.id,
          index = d.index,
          value = d.value;
        let visibility = "hidden";
        if (isValue(value)) {
          fn.bind(this)(d);
          $$.expandCircles(index, id);
          visibility = "";
        }
        this.style.visibility = visibility;
      });
    }
  },
  /**
   * Hide focused data point circle
   * @private
   */
  hideCircleFocus: function hideCircleFocus() {
    const $$ = this,
      circle = $$.$el.circle;
    if ($$.isPointFocusOnly() && circle) {
      $$.unexpandCircles();
      circle.style("visibility", "hidden");
    }
  },
  circleX: function circleX(d) {
    return this.xx(d);
  },
  updateCircleY: function updateCircleY(isSub) {
    var _this6 = this;
    if (isSub === void 0) {
      isSub = !1;
    }
    const $$ = this,
      getPoints = $$.generateGetLinePoints($$.getShapeIndices($$.isLineType), isSub);
    return function (d, i) {
      _newArrowCheck(this, _this6);
      const id = d.id;
      return $$.isGrouped(id) ? getPoints(d, i)[0][1] : $$.getYScaleById(id, isSub)($$.getBaseValue(d));
    }.bind(this);
  },
  expandCircles: function expandCircles(i, id, reset) {
    const $$ = this,
      r = $$.pointExpandedR.bind($$);
    reset && $$.unexpandCircles();
    const circles = $$.getShapeByIndex("circle", i, id).classed($COMMON.EXPANDED, !0),
      scale = r(circles) / $$.config.point_r,
      ratio = 1 - scale;
    if ($$.isCirclePoint()) {
      circles.attr("r", r);
    } else {
      // transform must be applied to each node individually
      circles.each(function () {
        const point = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
        if (this.tagName === "circle") {
          point.attr("r", r);
        } else {
          const _this$getBBox = this.getBBox(),
            width = _this$getBBox.width,
            height = _this$getBBox.height,
            x = ratio * (+point.attr("x") + width / 2),
            y = ratio * (+point.attr("y") + height / 2);
          point.attr("transform", "translate(" + x + " " + y + ") scale(" + scale + ")");
        }
      });
    }
  },
  unexpandCircles: function unexpandCircles(i) {
    const $$ = this,
      r = $$.pointR.bind($$),
      circles = $$.getShapeByIndex("circle", i).filter(function () {
        return (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).classed($COMMON.EXPANDED);
      }).classed($COMMON.EXPANDED, !1);
    circles.attr("r", r);
    if (!$$.isCirclePoint()) {
      const scale = r(circles) / $$.config.point_r;
      circles.attr("transform", scale !== 1 ? "scale(" + scale + ")" : null);
    }
  },
  pointR: function (d) {
    const $$ = this,
      config = $$.config,
      pointR = config.point_r;
    let r = pointR;
    if ($$.isBubbleType(d)) {
      r = $$.getBubbleR(d);
    } else if (isFunction(pointR)) {
      r = pointR.bind($$.api)(d);
    }
    d.r = r;
    return r;
  },
  pointExpandedR: function pointExpandedR(d) {
    const $$ = this,
      config = $$.config,
      scale = $$.isBubbleType(d) ? 1.15 : 1.75;
    return config.point_focus_expand_enabled ? config.point_focus_expand_r || $$.pointR(d) * scale : $$.pointR(d);
  },
  pointSelectR: function pointSelectR(d) {
    const $$ = this,
      selectR = $$.config.point_select_r;
    return isFunction(selectR) ? selectR(d) : selectR || $$.pointR(d) * 4;
  },
  /**
   * Check if point.focus.only option can be applied.
   * @returns {boolean}
   * @private
   */
  isPointFocusOnly: function isPointFocusOnly() {
    const $$ = this;
    return $$.config.point_focus_only && !$$.hasType("bubble") && !$$.hasType("scatter") && !$$.hasArcType(null, ["radar"]);
  },
  isWithinCircle: function isWithinCircle(node, r) {
    const config = this.config,
      state = this.state,
      mouse = getPointer(state.event, node),
      element = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(node),
      prefix = this.isCirclePoint(node) ? "c" : "",
      sensitivity = config.point_sensitivity === "radius" ? node.getAttribute("r") : config.point_sensitivity;
    let cx = +element.attr(prefix + "x"),
      cy = +element.attr(prefix + "y");
    // if node don't have cx/y or x/y attribute value
    if (!(cx || cy) && node.nodeType === 1) {
      const _getBoundingRect = getBoundingRect(node),
        x = _getBoundingRect.x,
        y = _getBoundingRect.y;
      cx = x;
      cy = y;
    }
    return Math.sqrt(Math.pow(cx - mouse[0], 2) + Math.pow(cy - mouse[1], 2)) < (r || sensitivity);
  },
  /**
   * Get data point sensitivity radius
   * @param {object} d Data point object
   * @returns {number} return the sensitivity value
   */
  getPointSensitivity: function getPointSensitivity(d) {
    const $$ = this;
    let sensitivity = $$.config.point_sensitivity;
    if (isFunction(sensitivity)) {
      sensitivity = sensitivity.call($$.api, d);
    } else if (sensitivity === "radius") {
      sensitivity = d.r;
    }
    return sensitivity;
  },
  insertPointInfoDefs: function insertPointInfoDefs(point, id) {
    var _this7 = this,
      _node$childNodes;
    const $$ = this,
      copyAttr = function (from, target) {
        _newArrowCheck(this, _this7);
        const attribs = from.attributes;
        for (let i = 0, name; name = attribs[i]; i++) {
          name = name.name;
          target.setAttribute(name, from.getAttribute(name));
        }
      }.bind(this),
      doc = new DOMParser().parseFromString(point, "image/svg+xml"),
      node = doc.documentElement,
      clone = browser_doc.createElementNS(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.namespaces.svg, node.nodeName.toLowerCase());
    clone.id = id;
    clone.style.fill = "inherit";
    clone.style.stroke = "inherit";
    copyAttr(node, clone);
    if ((_node$childNodes = node.childNodes) != null && _node$childNodes.length) {
      const parent = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(clone);
      if ("innerHTML" in clone) {
        parent.html(node.innerHTML);
      } else {
        toArray(node.childNodes).forEach(function (v) {
          _newArrowCheck(this, _this7);
          copyAttr(v, parent.append(v.tagName).node());
        }.bind(this));
      }
    }
    $$.$el.defs.node().appendChild(clone);
  },
  pointFromDefs: function pointFromDefs(id) {
    return this.$el.defs.select("#" + id);
  },
  updatePointClass: function updatePointClass(d) {
    const $$ = this,
      circle = $$.$el.circle;
    let pointClass = !1;
    if (isObject(d) || circle) {
      pointClass = d === !0 ? circle.each(function (d) {
        let className = $$.getClass("circle", !0)(d);
        if (this.getAttribute("class").indexOf($COMMON.EXPANDED) > -1) {
          className += " " + $COMMON.EXPANDED;
        }
        this.setAttribute("class", className);
      }) : $$.getClass("circle", !0)(d);
    }
    return pointClass;
  },
  generateGetLinePoints: function generateGetLinePoints(lineIndices, isSub) {
    var _this8 = this;
    // partial duplication of generateGetBarPoints
    const $$ = this,
      config = $$.config,
      x = $$.getShapeX(0, lineIndices, isSub),
      y = $$.getShapeY(isSub),
      lineOffset = $$.getShapeOffset($$.isLineType, lineIndices, isSub),
      yScale = $$.getYScaleById.bind($$);
    return function (d, i) {
      _newArrowCheck(this, _this8);
      const y0 = yScale.call($$, d.id, isSub)($$.getShapeYMin(d.id)),
        offset = lineOffset(d, i) || y0,
        posX = x(d); // offset is for stacked area chart
      let posY = y(d);

      // fix posY not to overflow opposite quadrant
      if (config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY)) {
        posY = y0;
      }

      // 1 point that marks the line position
      const point = [posX, posY - (y0 - offset)];
      return [point, point,
      // from here and below, needed for compatibility
      point, point];
    }.bind(this);
  },
  generatePoint: function generatePoint() {
    const $$ = this,
      config = $$.config,
      datetimeId = $$.state.datetimeId,
      ids = [],
      pattern = notEmpty(config.point_pattern) ? config.point_pattern : [config.point_type];
    return function (method, context) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return function (d) {
        var _d$data;
        const id = $$.getTargetSelectorSuffix(d.id || ((_d$data = d.data) == null ? void 0 : _d$data.id) || d),
          element = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
        ids.indexOf(id) < 0 && ids.push(id);
        let point = pattern[ids.indexOf(id) % pattern.length];
        if ($$.hasValidPointType(point)) {
          point = $$[point];
        } else if (!$$.hasValidPointDrawMethods(point)) {
          const pointId = datetimeId + "-point" + id,
            pointFromDefs = $$.pointFromDefs(pointId);
          if (pointFromDefs.size() < 1) {
            $$.insertPointInfoDefs(point, pointId);
          }
          if (method === "create") {
            return $$.custom.create.bind(context).apply(void 0, [element, pointId].concat(args));
          } else if (method === "update") {
            return $$.custom.update.bind(context).apply(void 0, [element].concat(args));
          }
        }
        return point[method].bind(context).apply(void 0, [element].concat(args));
      };
    };
  },
  custom: {
    create: function create(element, id, fillStyleFn) {
      return element.append("use").attr("xlink:href", "#" + id).attr("class", this.updatePointClass.bind(this)).style("fill", fillStyleFn).node();
    },
    update: function update(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow, selectedCircles) {
      var _this9 = this;
      const $$ = this,
        _element$node$getBBox = element.node().getBBox(),
        width = _element$node$getBBox.width,
        height = _element$node$getBBox.height,
        xPosFn2 = function (d) {
          _newArrowCheck(this, _this9);
          return isValue(d.value) ? xPosFn(d) - width / 2 : 0;
        }.bind(this),
        yPosFn2 = function (d) {
          _newArrowCheck(this, _this9);
          return isValue(d.value) ? yPosFn(d) - height / 2 : 0;
        }.bind(this);
      let mainCircles = element;
      if (withTransition) {
        flow && mainCircles.attr("x", xPosFn2);
        mainCircles = $$.$T(mainCircles, withTransition, getTransitionName());
        selectedCircles && $$.$T(selectedCircles, withTransition, getTransitionName());
      }
      return mainCircles.attr("x", xPosFn2).attr("y", yPosFn2).style("fill", fillStyleFn);
    }
  },
  // 'circle' data point
  circle: {
    create: function create(element, sizeFn, fillStyleFn) {
      return element.append("circle").attr("class", this.updatePointClass.bind(this)).attr("r", sizeFn).style("fill", fillStyleFn).node();
    },
    update: function update(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow, selectedCircles) {
      const $$ = this;
      let mainCircles = element;

      // when '.load()' called, bubble size should be updated
      if ($$.hasType("bubble")) {
        mainCircles.attr("r", $$.pointR.bind($$));
      }
      if (withTransition) {
        flow && mainCircles.attr("cx", xPosFn);
        if (mainCircles.attr("cx")) {
          mainCircles = $$.$T(mainCircles, withTransition, getTransitionName());
        }
        selectedCircles && $$.$T(mainCircles, withTransition, getTransitionName());
      }
      return mainCircles.attr("cx", xPosFn).attr("cy", yPosFn).style("fill", fillStyleFn);
    }
  },
  // 'rectangle' data point
  rectangle: {
    create: function create(element, sizeFn, fillStyleFn) {
      var _this10 = this;
      const rectSizeFn = function (d) {
        _newArrowCheck(this, _this10);
        return sizeFn(d) * 2;
      }.bind(this);
      return element.append("rect").attr("class", this.updatePointClass.bind(this)).attr("width", rectSizeFn).attr("height", rectSizeFn).style("fill", fillStyleFn).node();
    },
    update: function update(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow, selectedCircles) {
      var _this11 = this;
      const $$ = this,
        r = $$.config.point_r,
        rectXPosFn = function (d) {
          _newArrowCheck(this, _this11);
          return xPosFn(d) - r;
        }.bind(this),
        rectYPosFn = function (d) {
          _newArrowCheck(this, _this11);
          return yPosFn(d) - r;
        }.bind(this);
      let mainCircles = element;
      if (withTransition) {
        flow && mainCircles.attr("x", rectXPosFn);
        mainCircles = $$.$T(mainCircles, withTransition, getTransitionName());
        selectedCircles && $$.$T(selectedCircles, withTransition, getTransitionName());
      }
      return mainCircles.attr("x", rectXPosFn).attr("y", rectYPosFn).style("fill", fillStyleFn);
    }
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/polar.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Get data max value
 * @param {object} $$ ChartInternal instance
 * @returns {number} max value
 * @private
 */
function getDataMax($$) {
  const levelMax = $$.config.polar_level_max;
  let dataMax = $$.getMinMaxData().max[0].value;

  // Apply level max only when is greater than the data max value
  if (levelMax && levelMax > dataMax) {
    dataMax = levelMax;
  }
  return dataMax;
}
/* harmony default export */ var polar = ({
  /**
   * Initialize polar
   * @private
   */
  initPolar: function initPolar() {
    const $$ = this,
      arcs = $$.$el.arcs,
      config = $$.config,
      levelTextShow = config.polar_level_text_show,
      levelTextBgColor = config.polar_level_text_backgroundColor;
    // append <g> for level
    arcs.levels = arcs.append("g").attr("class", $LEVEL.levels);

    // set level text background color
    if (levelTextShow && levelTextBgColor) {
      $$.generateDataLabelBackgroundColorFilter(levelTextBgColor);
    }
  },
  /**
   * Get polar outer radius according to the data value
   * @param {object} d Data object
   * @param {numbet} outerRadius Outer radius
   * @returns {number} outer radius
   * @private
   */
  getPolarOuterRadius: function getPolarOuterRadius(d, outerRadius) {
    var _d$data$values$0$valu;
    const dataMax = getDataMax(this);
    return ((_d$data$values$0$valu = d == null ? void 0 : d.data.values[0].value) != null ? _d$data$values$0$valu : 0) / dataMax * outerRadius;
  },
  /**
   * Update polar based on given data array
   * @param {object} targets Data object
   * @private
   */
  updateTargetsForPolar: function updateTargetsForPolar(targets) {
    // borrow from Arc
    this.updateTargetsForArc(targets);
  },
  /**
   * Called whenever redraw happens
   * @private
   */
  redrawPolar: function redrawPolar() {
    const $$ = this,
      config = $$.config;
    config.polar_level_show && $$.updatePolarLevel();
  },
  /**
   * Update polar level circle
   * @private
   */
  updatePolarLevel: function updatePolarLevel() {
    var _this = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      levels = $$.$el.arcs.levels,
      depth = config.polar_level_depth,
      dataMax = getDataMax($$),
      levelData = getRange(0, depth),
      outerRadius = state.radius,
      levelRatio = levelData.map(function (l) {
        _newArrowCheck(this, _this);
        return outerRadius * ((l + 1) / depth);
      }.bind(this)),
      levelTextFormat = (config.polar_level_text_format || function () {}).bind($$.api),
      level = levels.selectAll("." + $LEVEL.level).data(levelData);
    level.exit().remove();
    const levelEnter = level.enter().append("g").attr("class", function (d, i) {
      _newArrowCheck(this, _this);
      return $LEVEL.level + " " + $LEVEL.level + "-" + i;
    }.bind(this));

    // cx, cy, translate: Set center as origin (0,0) so that it can share same center with arcs
    levelEnter.append("circle");
    levelEnter.merge(level).selectAll("circle").style("visibility", config.polar_level_show ? null : "hidden").attr("cx", 0).attr("cy", 0).attr("r", function (d) {
      _newArrowCheck(this, _this);
      return levelRatio[d];
    }.bind(this));
    if (config.polar_level_text_show) {
      const levelTextBackgroundColor = config.polar_level_text_backgroundColor,
        defsId = "#" + state.datetimeId + "-labels-bg" + $$.getTargetSelectorSuffix(levelTextBackgroundColor);
      levelEnter.append("text").style("text-anchor", "middle");
      levelEnter.merge(level).selectAll("text").attr("dy", function (d) {
        _newArrowCheck(this, _this);
        return -levelRatio[d] + 5;
      }.bind(this)).attr("filter", levelTextBackgroundColor ? "url(" + defsId + ")" : null).text(function (d) {
        _newArrowCheck(this, _this);
        return levelTextFormat(dataMax / levelData.length * (d + 1));
      }.bind(this));
    }
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/shape/radar.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */





/**
 * Get the position value
 * @param {boolean} isClockwise If the direction is clockwise
 * @param {string} type Coordinate type 'x' or 'y'
 * @param {number} edge Number of edge
 * @param {number} pos The indexed position
 * @param {number} range Range value
 * @param {number} ratio Ratio value
 * @returns {number}
 * @private
 */
function getPosition(isClockwise, type, edge, pos, range, ratio) {
  const index = isClockwise && pos > 0 ? edge - pos : pos,
    r = 2 * Math.PI,
    func = type === "x" ? Math.sin : Math.cos;
  return range * (1 - ratio * func(index * r / edge));
}

// cache key
const cacheKey = KEY.radarPoints;
/* harmony default export */ var radar = ({
  initRadar: function initRadar() {
    const $$ = this,
      config = $$.config,
      current = $$.state.current,
      $el = $$.$el;
    if ($$.hasType("radar")) {
      $el.radar = $el.main.select("." + $COMMON.chart).append("g").attr("class", $RADAR.chartRadars);

      // level
      $el.radar.levels = $el.radar.append("g").attr("class", $LEVEL.levels);

      // axis
      $el.radar.axes = $el.radar.append("g").attr("class", $AXIS.axis);

      // shapes
      $el.radar.shapes = $el.radar.append("g").attr("class", $SHAPE.shapes);
      current.dataMax = config.radar_axis_max || $$.getMinMaxData().max[0].value;
    }
  },
  getRadarSize: function getRadarSize() {
    const $$ = this,
      config = $$.config,
      _$$$state = $$.state,
      arcWidth = _$$$state.arcWidth,
      arcHeight = _$$$state.arcHeight,
      padding = config.axis_x_categories.length < 4 ? -20 : 10,
      size = (Math.min(arcWidth, arcHeight) - padding) / 2;
    return [size, size];
  },
  updateTargetsForRadar: function updateTargetsForRadar(targets) {
    var _this = this;
    const $$ = this,
      config = $$.config;
    if (isEmpty(config.axis_x_categories)) {
      config.axis_x_categories = getRange(0, getMinMax("max", targets.map(function (v) {
        _newArrowCheck(this, _this);
        return v.values.length;
      }.bind(this))));
    }
    $$.generateRadarPoints();
  },
  getRadarPosition: function getRadarPosition(type, index, range, ratio) {
    var _this2 = this;
    const $$ = this,
      config = $$.config,
      _$$$getRadarSize = $$.getRadarSize(),
      width = _$$$getRadarSize[0],
      height = _$$$getRadarSize[1],
      edge = config.axis_x_categories.length,
      isClockwise = config.radar_direction_clockwise,
      pos = toArray(type).map(function (v) {
        _newArrowCheck(this, _this2);
        return getPosition(isClockwise, v, edge, index, isDefined(range) ? range : type === "x" ? width : height, isNumber(ratio) ? ratio : config.radar_size_ratio);
      }.bind(this));
    return pos.length === 1 ? pos[0] : pos;
  },
  /**
   * Generate data points
   * @private
   */
  generateRadarPoints: function generateRadarPoints() {
    var _this3 = this;
    const $$ = this,
      targets = $$.data.targets,
      _$$$getRadarSize2 = $$.getRadarSize(),
      width = _$$$getRadarSize2[0],
      height = _$$$getRadarSize2[1],
      points = $$.cache.get(cacheKey) || {},
      size = points._size;
    // recalculate position only when the previous dimension has been changed
    if (!size || size.width !== width && size.height !== height) {
      targets.forEach(function (d) {
        var _this4 = this;
        _newArrowCheck(this, _this3);
        points[d.id] = d.values.map(function (v, i) {
          _newArrowCheck(this, _this4);
          return $$.getRadarPosition(["x", "y"], i, undefined, $$.getRatio("radar", v));
        }.bind(this));
      }.bind(this));
      points._size = {
        width: width,
        height: height
      };
      $$.cache.add(cacheKey, points);
    }
  },
  redrawRadar: function redrawRadar() {
    const $$ = this,
      _$$$$el = $$.$el,
      radar = _$$$$el.radar,
      main = _$$$$el.main,
      translate = $$.getTranslate("radar");
    // Adjust radar, circles and texts' position
    if (translate) {
      radar.attr("transform", translate);
      main.select("." + $TEXT.chartTexts).attr("transform", translate);
      $$.generateRadarPoints();
      $$.updateRadarLevel();
      $$.updateRadarAxes();
      $$.updateRadarShape();
    }
  },
  generateGetRadarPoints: function generateGetRadarPoints() {
    var _this5 = this;
    const points = this.cache.get(cacheKey);
    return function (d, i) {
      _newArrowCheck(this, _this5);
      const point = points[d.id][i];
      return [point, point, point, point];
    }.bind(this);
  },
  updateRadarLevel: function updateRadarLevel() {
    var _this6 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      radar = $$.$el.radar,
      _$$$getRadarSize3 = $$.getRadarSize(),
      width = _$$$getRadarSize3[0],
      height = _$$$getRadarSize3[1],
      depth = config.radar_level_depth,
      edge = config.axis_x_categories.length,
      showText = config.radar_level_text_show,
      radarLevels = radar.levels,
      levelData = getRange(0, depth),
      radius = config.radar_size_ratio * Math.min(width, height),
      levelRatio = levelData.map(function (l) {
        _newArrowCheck(this, _this6);
        return radius * ((l + 1) / depth);
      }.bind(this)),
      levelTextFormat = (config.radar_level_text_format || function () {}).bind($$.api),
      points = levelData.map(function (v) {
        var _this7 = this;
        _newArrowCheck(this, _this6);
        const range = levelRatio[v],
          pos = getRange(0, edge).map(function (i) {
            _newArrowCheck(this, _this7);
            return $$.getRadarPosition(["x", "y"], i, range, 1).join(",");
          }.bind(this));
        return pos.join(" ");
      }.bind(this)),
      level = radarLevels.selectAll("." + $LEVEL.level).data(levelData);

    // Generate points

    level.exit().remove();
    const levelEnter = level.enter().append("g").attr("class", function (d, i) {
      _newArrowCheck(this, _this6);
      return $LEVEL.level + " " + $LEVEL.level + "-" + i;
    }.bind(this));
    levelEnter.append("polygon").style("visibility", config.radar_level_show ? null : "hidden");
    if (showText) {
      if (radarLevels.select("text").empty()) {
        radarLevels.append("text").attr("dx", "-.5em").attr("dy", "-.7em").style("text-anchor", "end").text(function () {
          _newArrowCheck(this, _this6);
          return levelTextFormat(0);
        }.bind(this));
      }
      levelEnter.append("text").attr("dx", "-.5em").style("text-anchor", "end").text(function (d) {
        _newArrowCheck(this, _this6);
        return levelTextFormat(state.current.dataMax / levelData.length * (d + 1));
      }.bind(this));
    }
    levelEnter.merge(level).attr("transform", function (d) {
      _newArrowCheck(this, _this6);
      return "translate(" + (width - levelRatio[d]) + ", " + (height - levelRatio[d]) + ")";
    }.bind(this)).selectAll("polygon").attr("points", function (d) {
      _newArrowCheck(this, _this6);
      return points[d];
    }.bind(this));

    // update level text position
    if (showText) {
      radarLevels.selectAll("text").attr("x", function (d) {
        _newArrowCheck(this, _this6);
        return isUndefined(d) ? width : points[d].split(",")[0];
      }.bind(this)).attr("y", function (d) {
        _newArrowCheck(this, _this6);
        return isUndefined(d) ? height : 0;
      }.bind(this));
    }
  },
  updateRadarAxes: function updateRadarAxes() {
    var _this8 = this;
    const $$ = this,
      config = $$.config,
      radar = $$.$el.radar,
      _$$$getRadarSize4 = $$.getRadarSize(),
      width = _$$$getRadarSize4[0],
      height = _$$$getRadarSize4[1],
      categories = config.axis_x_categories;
    let axis = radar.axes.selectAll("g").data(categories);
    axis.exit().remove();
    const axisEnter = axis.enter().append("g").attr("class", function (d, i) {
      _newArrowCheck(this, _this8);
      return $AXIS.axis + "-" + i;
    }.bind(this));
    config.radar_axis_line_show && axisEnter.append("line");
    config.radar_axis_text_show && axisEnter.append("text");
    axis = axisEnter.merge(axis);

    // axis line
    if (config.radar_axis_line_show) {
      axis.select("line").attr("x1", width).attr("y1", height).attr("x2", function (d, i) {
        _newArrowCheck(this, _this8);
        return $$.getRadarPosition("x", i);
      }.bind(this)).attr("y2", function (d, i) {
        _newArrowCheck(this, _this8);
        return $$.getRadarPosition("y", i);
      }.bind(this));
    }

    // axis text
    if (config.radar_axis_text_show) {
      const _config$radar_axis_te = config.radar_axis_text_position,
        _config$radar_axis_te2 = _config$radar_axis_te.x,
        x = _config$radar_axis_te2 === void 0 ? 0 : _config$radar_axis_te2,
        _config$radar_axis_te3 = _config$radar_axis_te.y,
        y = _config$radar_axis_te3 === void 0 ? 0 : _config$radar_axis_te3;
      axis.select("text").style("text-anchor", "middle").attr("dy", ".5em").call(function (selection) {
        _newArrowCheck(this, _this8);
        selection.each(function (d) {
          setTextValue((0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this), d + "", [-.6, 1.2]);
        });
      }.bind(this)).datum(function (d, i) {
        _newArrowCheck(this, _this8);
        return {
          index: i
        };
      }.bind(this)).attr("transform", function (d) {
        if (isUndefined(this.width)) {
          // cache evaluated axis text width
          this.width = this.getBoundingClientRect().width / 2;
        }
        let posX = $$.getRadarPosition("x", d.index, undefined, 1),
          posY = Math.round($$.getRadarPosition("y", d.index, undefined, 1));
        if (posX > width) {
          posX += this.width + x;
        } else if (Math.round(posX) < width) {
          posX -= this.width + x;
        }
        if (posY > height) {
          // update vertical centered edge axis text dy position
          if (posY / 2 === height && this.firstChild.tagName === "tspan") {
            this.firstChild.setAttribute("dy", "0em");
          }
          posY += y;
        } else if (posY < height) {
          posY -= y;
        }
        return "translate(" + posX + " " + posY + ")";
      });
    }
    $$.bindRadarEvent();
  },
  bindRadarEvent: function bindRadarEvent() {
    var _this9 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      _$$$$el2 = $$.$el,
      radar = _$$$$el2.radar,
      svg = _$$$$el2.svg,
      focusOnly = $$.isPointFocusOnly(),
      _state = state,
      inputType = _state.inputType,
      transiting = _state.transiting;
    if (config.interaction_enabled) {
      const isMouse = inputType === "mouse",
        hide = function (event) {
          _newArrowCheck(this, _this9);
          state.event = event;

          // const index = getIndex(event);
          const index = $$.getDataIndexFromEvent(event),
            noIndex = isUndefined(index);
          if (isMouse || noIndex) {
            $$.hideTooltip();
            focusOnly ? $$.hideCircleFocus() : $$.unexpandCircles();
            if (isMouse) {
              $$.setOverOut(!1, index);
            } else if (noIndex) {
              $$.callOverOutForTouch();
            }
          }
        }.bind(this);
      radar.axes.selectAll("text").on(isMouse ? "mouseover " : "touchstart", function (event) {
        _newArrowCheck(this, _this9);
        if (transiting) {
          // skip while transiting
          return;
        }
        state.event = event;
        const index = $$.getDataIndexFromEvent(event);
        $$.selectRectForSingle(svg.node(), index);
        isMouse ? $$.setOverOut(!0, index) : $$.callOverOutForTouch(index);
      }.bind(this)).on("mouseout", isMouse ? hide : null);
      if (!isMouse) {
        svg.on("touchstart", hide);
      }
    }
  },
  updateRadarShape: function updateRadarShape() {
    var _this10 = this;
    const $$ = this,
      targets = $$.data.targets.filter(function (d) {
        _newArrowCheck(this, _this10);
        return $$.isRadarType(d);
      }.bind(this)),
      points = $$.cache.get(cacheKey),
      areas = $$.$el.radar.shapes.selectAll("polygon").data(targets),
      areasEnter = areas.enter().append("g").attr("class", $$.getChartClass("Radar"));
    $$.$T(areas.exit()).remove();
    areasEnter.append("polygon").merge(areas).style("fill", $$.color).style("stroke", $$.color).attr("points", function (d) {
      _newArrowCheck(this, _this10);
      return points[d.id].join(" ");
    }.bind(this));
    $$.updateTargetForCircle(targets, areasEnter);
  },
  /**
   * Get data point x coordinate
   * @param {object} d Data object
   * @returns {number}
   * @private
   */
  radarCircleX: function radarCircleX(d) {
    return this.cache.get(cacheKey)[d.id][d.index][0];
  },
  /**
   * Get data point y coordinate
   * @param {object} d Data object
   * @returns {number}
   * @private
   */
  radarCircleY: function radarCircleY(d) {
    return this.cache.get(cacheKey)[d.id][d.index][1];
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-hierarchy","commonjs2":"d3-hierarchy","amd":"d3-hierarchy","root":"d3"}
var external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_ = __webpack_require__(13);
;// CONCATENATED MODULE: ./src/ChartInternal/shape/treemap.ts

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: !0 }; return { done: !1, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/**
 * Get treemap elements' position
 * @param {d3Selection} group Root selection
 * @param {object} root Root data
 * @private
 */
function position(group, root) {
  var _this = this;
  const $$ = this,
    _$$$scale = $$.scale,
    x = _$$$scale.x,
    y = _$$$scale.y,
    width = $$.state.width;
  group.selectAll("g").attr("transform", function (d) {
    _newArrowCheck(this, _this);
    return "translate(" + (d === root ? "0,0" : x(d.x0) + "," + y(d.y0)) + ")";
  }.bind(this)).select("rect").attr("width", function (d) {
    _newArrowCheck(this, _this);
    return d === root ? width : x(d.x1) - x(d.x0);
  }.bind(this)).attr("height", function (d) {
    _newArrowCheck(this, _this);
    return d === root ? 0 : y(d.y1) - y(d.y0);
  }.bind(this));
}

/**
 * Convert data for treemap hierarchy
 * @param {object} data Data object
 * @returns {Array} Array of data for treemap hierarchy
 * @private
 */
function convertDataToTreemapData(data) {
  var _this2 = this;
  const $$ = this;
  return data.map(function (d) {
    _newArrowCheck(this, _this2);
    const id = d.id,
      values = d.values,
      value = values[0].value;
    return {
      name: id,
      id: id,
      // needed to keep compatibility on whole code logic
      value: value,
      ratio: $$.getRatio("treemap", values[0])
    };
  }.bind(this));
}
/* harmony default export */ var treemap = ({
  initTreemap: function initTreemap() {
    var _this3 = this;
    const $$ = this,
      $el = $$.$el,
      _$$$state = $$.state,
      _$$$state$current = _$$$state.current,
      width = _$$$state$current.width,
      height = _$$$state$current.height,
      clip = _$$$state.clip,
      datetimeId = _$$$state.datetimeId;
    clip.id = datetimeId + "-clip";
    $$.treemap = (0,external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.treemap)().tile($$.getTreemapTile());
    $$.treemapFn = function (data) {
      var _this4 = this;
      _newArrowCheck(this, _this3);
      const hierarchyData = (0,external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.hierarchy)(data).sum(function (d) {
          _newArrowCheck(this, _this4);
          return d.value;
        }.bind(this)),
        sortFn = $$.getSortCompareFn(!0);
      return $$.treemap(sortFn ? hierarchyData.sort(sortFn) : hierarchyData);
    }.bind(this);
    $el.defs.append("clipPath").attr("id", clip.id).append("rect").attr("width", width).attr("height", height);
    $el.treemap = $el.main.select("." + $COMMON.chart).attr("clip-path", "url(#" + clip.id + ")").append("g").classed($TREEMAP.chartTreemaps, !0);
    $$.bindTreemapEvent();
  },
  /**
   * Bind events
   * @private
   */
  bindTreemapEvent: function bindTreemapEvent() {
    var _this5 = this;
    const $$ = this,
      $el = $$.$el,
      config = $$.config,
      state = $$.state,
      getTarget = function (event) {
        var _state$eventReceiver$, _data;
        _newArrowCheck(this, _this5);
        const target = event.isTrusted ? event.target : (_state$eventReceiver$ = state.eventReceiver.rect) == null ? void 0 : _state$eventReceiver$.node();
        let data;
        if (/^rect$/i.test(target.tagName)) {
          state.event = event;
          data = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(target).datum();
        }
        return (_data = data) == null ? void 0 : _data.data;
      }.bind(this);
    if (config.interaction_enabled) {
      const isTouch = state.inputType === "touch";
      $el.treemap.on(isTouch ? "touchstart" : "mouseover mousemove", function (event) {
        _newArrowCheck(this, _this5);
        const data = getTarget(event);
        if (data) {
          $$.showTooltip([data], event.currentTarget);
          /^(touchstart|mouseover)$/.test(event.type) && $$.setOverOut(!0, data);
        }
      }.bind(this)).on(isTouch ? "touchend" : "mouseout", function (event) {
        _newArrowCheck(this, _this5);
        const data = getTarget(event);
        $$.hideTooltip();
        $$.setOverOut(!1, data);
      }.bind(this));
    }
  },
  /**
   * Get tiling function
   * @returns {Function}
   * @private
   */
  getTreemapTile: function getTreemapTile() {
    var _binary$dice$slice$sl,
      _config$treemap_tile,
      _this6 = this;
    const $$ = this,
      config = $$.config,
      _$$$state$current2 = $$.state.current,
      width = _$$$state$current2.width,
      height = _$$$state$current2.height,
      tile = (_binary$dice$slice$sl = {
        "binary": external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.treemapBinary,
        "dice": external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.treemapDice,
        "slice": external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.treemapSlice,
        "sliceDice": external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.treemapSliceDice,
        "squarify": external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.treemapSquarify,
        "resquarify": external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.treemapResquarify
      }[(_config$treemap_tile = config.treemap_tile) != null ? _config$treemap_tile : "binary"]) != null ? _binary$dice$slice$sl : external_commonjs_d3_hierarchy_commonjs2_d3_hierarchy_amd_d3_hierarchy_root_d3_.treemapBinary;
    return function (node, x0, y0, x1, y1) {
      _newArrowCheck(this, _this6);
      tile(node, 0, 0, width, height);
      for (var _iterator = _createForOfIteratorHelperLoose(node.children), _step; !(_step = _iterator()).done;) {
        const child = _step.value;
        child.x0 = x0 + child.x0 / width * (x1 - x0);
        child.x1 = x0 + child.x1 / width * (x1 - x0);
        child.y0 = y0 + child.y0 / height * (y1 - y0);
        child.y1 = y0 + child.y1 / height * (y1 - y0);
      }
    }.bind(this);
  },
  /**
   * Get treemap hierarchy data
   * @param {Array} targets Data targets
   * @returns {object}
   * @private
   */
  getTreemapData: function getTreemapData(targets) {
    const $$ = this;
    return {
      name: "root",
      children: convertDataToTreemapData.bind($$)($$.filterTargetsToShow(targets.filter($$.isTreemapType, $$)))
    };
  },
  /**
   * Update treemap data
   * @param {Array} targets Data targets
   * @private
   */
  updateTargetsForTreemap: function updateTargetsForTreemap(targets) {
    const $$ = this,
      treemap = $$.$el.treemap,
      treemapData = $$.treemapFn($$.getTreemapData(targets != null ? targets : $$.data.targets));
    // using $el.treemap reference can alter data, so select treemap <g> again
    treemap.data(treemapData);
  },
  /**
   * Render treemap
   * @param {number} durationForExit Duration for exit transition
   * @private
   */
  updateTreemap: function updateTreemap(durationForExit) {
    var _this7 = this;
    const $$ = this,
      $el = $$.$el,
      $T = $$.$T,
      data = $el.treemap.datum(),
      classChartTreemap = $$.getChartClass("Treemap"),
      treemap = $el.treemap.selectAll("g").data(data.children);
    $T(treemap.exit(), durationForExit).style("opacity", "0").remove();
    treemap.enter().append("g").append("rect");
    $el.treemap.selectAll("g").attr("class", classChartTreemap).select("rect").attr("fill", function (d) {
      _newArrowCheck(this, _this7);
      return $$.color(d.data.name);
    }.bind(this));
  },
  /**
   * Generate treemap coordinate points data
   * @returns {Array} Array of coordinate points
   * @private
   */
  generateGetTreemapPoints: function generateGetTreemapPoints() {
    var _this8 = this;
    const $$ = this,
      $el = $$.$el,
      _$$$scale2 = $$.scale,
      x = _$$$scale2.x,
      y = _$$$scale2.y,
      points = {};
    $el.treemap.selectAll("g").each(function (d) {
      _newArrowCheck(this, _this8);
      points[d.data.name] = [[x(d.x0), y(d.y0)], [x(d.x1), y(d.y1)]];
    }.bind(this));
    return function (d) {
      _newArrowCheck(this, _this8);
      return points[d.id];
    }.bind(this);
  },
  /**
   * Redraw treemap
   * @param {boolean} withTransition With or without transition
   * @returns {Array} Selections
   * @private
   */
  redrawTreemap: function redrawTreemap(withTransition) {
    const $$ = this,
      $el = $$.$el,
      _$$$state$current3 = $$.state.current,
      width = _$$$state$current3.width,
      height = _$$$state$current3.height;
    // update defs
    $el.defs.select("rect").attr("width", width).attr("height", height);
    return [$$.$T($el.treemap, withTransition, getRandom()).call(position.bind($$), $el.treemap.datum())];
  },
  /**
   * Get treemap data label format function
   * @param {object} d Data object
   * @returns {Function}
   * @private
   */
  treemapDataLabelFormat: function treemapDataLabelFormat(d) {
    const $$ = this,
      config = $$.config,
      id = d.id,
      value = d.value,
      format = config.treemap_label_format,
      ratio = $$.getRatio("treemap", d),
      percentValue = (ratio * 100).toFixed(2),
      meetLabelThreshold = config.treemap_label_show && $$.meetsLabelThreshold(ratio, "treemap") ? null : "0";
    return function (node) {
      node.style("opacity", meetLabelThreshold);
      return isFunction(format) ? format.bind($$.api)(value, ratio, id) : id + "\n" + percentValue + "%";
    };
  }
});
;// CONCATENATED MODULE: ./src/config/Options/common/point.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * point config options
 */
/* harmony default export */ var common_point = ({
  /**
   * Set point options
   * @name point
   * @memberof Options
   * @type {object}
   * @property {object} point Point object
   * @property {boolean} [point.show=true] Whether to show each point in line.
   * @property {number|Function} [point.r=2.5] The radius size of each point.
   *  - **NOTE:** Disabled for 'bubble' type
   * @property {boolean|object} [point.radialGradient=false] Set the radial gradient on point.<br><br>
   * Or customize by giving below object value:
   *  - cx {number}: `cx` value (default: `0.3`)
   *  - cy {number}: `cy` value (default: `0.3`)
   *  - r {number}: `r` value (default: `0.7`)
   *  - stops {Array}: Each item should be having `[offset, stop-color, stop-opacity]` values.
   *    - (default: `[[0.1, $DATA_COLOR, 1], [0.9, $DATA_COLOR, 0]]`)
   * @property {boolean} [point.focus.expand.enabled=true] Whether to expand each point on focus.
   * @property {number} [point.focus.expand.r=point.r*1.75] The radius size of each point on focus.
   *  - **NOTE:** For 'bubble' type, the default is `bubbleSize*1.15`
   * @property {boolean} [point.focus.only=false] Show point only when is focused.
   * @property {number|null} [point.opacity=undefined] Set point opacity value.
   * - **NOTE:**
   *	- `null` will make to not set inline 'opacity' css prop.
   *	- when no value(or undefined) is set, it defaults to set opacity value according its chart types.
   * @property {number|string|Function} [point.sensitivity=10] The senstivity value for interaction boundary.
   * - **Available Values:**
   *   - {number}: Absolute sensitivity value which is the distance from the data point in pixel.
   *   - "radius": sensitivity based on point's radius
   *   - Function: callback for each point to determine the sensitivity<br>
   *    	```js
   *   	sensitivity: function(d) {
   * 	  // ex. of argument d:
   * 	  // ==> {x: 2, value: 55, id: 'data3', index: 2, r: 19.820624179302296}
   *
   * 	  // returning d.r, will make sensitivity same as point's radius value.
   *  	  return d.r;
   * 	}
   * 	```
   * @property {number} [point.select.r=point.r*4] The radius size of each point on selected.
   * @property {string} [point.type="circle"] The type of point to be drawn
   * - **NOTE:**
   *   - If chart has 'bubble' type, only circle can be used.
   *   - For IE, non circle point expansions are not supported due to lack of transform support.
   * - **Available Values:**
   *   - circle
   *   - rectangle
   * @property {Array} [point.pattern=[]] The type of point or svg shape as string, to be drawn for each line
   * - **NOTE:**
   *   - This is an `experimental` feature and can have some unexpected behaviors.
   *   - If chart has 'bubble' type, only circle can be used.
   *   - For IE, non circle point expansions are not supported due to lack of transform support.
   * - **Available Values:**
   *   - circle
   *   - rectangle
   *   - svg shape tag interpreted as string<br>
   *     (ex. `<polygon points='2.5 0 0 5 5 5'></polygon>`)
   * @see [Demo: point type](https://naver.github.io/billboard.js/demo/#Point.RectanglePoints)
   * @see [Demo: point focus only](https://naver.github.io/billboard.js/demo/#Point.FocusOnly)
   * @see [Demo: point radialGradient](https://naver.github.io/billboard.js/demo/#Point.RadialGradientPoint)
   * @see [Demo: point sensitivity](https://naver.github.io/billboard.js/demo/#Point.PointSensitivity)
   * @example
   *  point: {
   *      show: false,
   *      r: 5,
   *
   *      // or customize the radius
   *      r: function(d) {
   *          ...
   *          return r;
   *      },
   *
   *      // will generate follwing radialGradient:
   *      // for more info: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient
   *      // <radualGradient cx="0.3" cy="0.3" r="0.7">
   *      //    <stop offset="0.1" stop-color="$DATA_COLOR" stop-opacity="1"></stop>
   *      //    <stop offset="0.9" stop-color="$DATA_COLOR" stop-opacity="0"></stop>
   *      // </radialrGradient>
   *      radialGradient: true,
   *
   *      // Or customized gradient
   *      radialGradient: {
   *      	cx: 0.3,  // cx attributes
   *      	cy: 0.5,  // cy attributes
   *      	r: 0.7,  // r attributes
   *      	stops: [
   *      	  // offset, stop-color, stop-opacity
   *      	  [0, "#7cb5ec", 1],
   *
   *      	  // setting 'null' for stop-color, will set its original data color
   *      	  [0.5, null, 0],
   *
   *      	  // setting 'function' for stop-color, will pass data id as argument.
   *      	  // It should return color string or null value
   *      	  [1, function(id) { return id === "data1" ? "red" : "blue"; }, 0],
   *      	]
   *      },
   *
   *      focus: {
   *          expand: {
   *              enabled: true,
   *              r: 1
   *          },
   *          only: true
   *      },
   *
   *      // do not set inline 'opacity' css prop setting
   *      opacity: null,
   *
   *      // set every data point's opacity value
   *      opacity: 0.7,
   *
   *      select: {
   *          r: 3
   *      },
   *
   *      // having lower value, means how closer to be for interaction
   *      sensitivity: 3,
   *
   *      // sensitivity based on point's radius
   *      sensitivity: "radius",
   *
   *      // callback for each point to determine the sensitivity
   *      sensitivity: function(d) {
   *	// ex. of argument d:
   *	// ==> {x: 2, value: 55, id: 'data3', index: 2, r: 19.820624179302296}
   *
   *	// returning d.r, will make sensitivity same as point's radius value.
   *	return d.r;
   *      }
   *
   *      // valid values are "circle" or "rectangle"
   *      type: "rectangle",
   *
   *      // or indicate as pattern
   *      pattern: [
   *        "circle",
   *        "rectangle",
   *        "<polygon points='0 6 4 0 -4 0'></polygon>"
   *     ],
   *  }
   */
  point_show: !0,
  point_r: 2.5,
  point_radialGradient: !1,
  point_sensitivity: 10,
  point_focus_expand_enabled: !0,
  point_focus_expand_r: undefined,
  point_focus_only: !1,
  point_opacity: undefined,
  point_pattern: [],
  point_select_r: undefined,
  point_type: "circle"
});
;// CONCATENATED MODULE: ./src/config/Options/shape/area.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * area config options
 */
/* harmony default export */ var Options_shape_area = ({
  /**
   * Set area options
   * @name area
   * @memberof Options
   * @type {object}
   * @property {object} area Area object
   * @property {boolean} [area.above=false] Set background area `above` the data chart line.
   * @property {boolean} [area.below=false] Set background area `below` the data chart line.
   *  - **NOTE**: Can't be used along with `above` option. When above & below options are set to true, `above` will be prioritized.
   * @property {boolean} [area.front=true] Set area node to be positioned over line node.
   * @property {boolean|object} [area.linearGradient=false] Set the linear gradient on area.<br><br>
   * Or customize by giving below object value:
   *  - x {Array}: `x1`, `x2` value (default: `[0, 0]`)
   *  - y {Array}: `y1`, `y2` value (default: `[0, 1]`)
   *  - stops {Array}: Each item should be having `[offset, stop-color, stop-opacity]` values.
   *    - (default: `[[0, $DATA_COLOR, 1], [1, $DATA_COLOR, 0]]`)
   * @property {boolean} [area.zerobased=true] Set if min or max value will be 0 on area chart.
   * @see [MDN's &lt;linearGradient>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient), [&lt;stop>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Chart.AreaChart)
   * @see [Demo: above](https://naver.github.io/billboard.js/demo/#AreaChartOptions.Above)
   * @see [Demo: below](https://naver.github.io/billboard.js/demo/#AreaChartOptions.Below)
   * @see [Demo: linearGradient](https://naver.github.io/billboard.js/demo/#AreaChartOptions.LinearGradient)
   * @example
   *  area: {
   *      above: true,
   *      below: false,
   *      zerobased: false,
   *
   *      // <g class='bb-areas'> will be positioned behind the line <g class='bb-lines'> in stacking order
   *      front: false,
   *
   *      // will generate follwing linearGradient:
   *      // for more info: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
   *      // <linearGradient x1="0" x2="0" y1="0" y2="1">
   *      //    <stop offset="0" stop-color="$DATA_COLOR" stop-opacity="1"></stop>
   *      //    <stop offset="1" stop-color="$DATA_COLOR" stop-opacity="0"></stop>
   *      // </linearGradient>
   *      linearGradient: true,
   *
   *      // Or customized gradient
   *      linearGradient: {
   *      	x: [0, 0],  // x1, x2 attributes
   *      	y: [0, 0],  // y1, y2 attributes
   *      	stops: [
   *      	  // offset, stop-color, stop-opacity
   *      	  [0, "#7cb5ec", 1],
   *
   *      	  // setting 'null' for stop-color, will set its original data color
   *      	  [0.5, null, 0],
   *
   *      	  // setting 'function' for stop-color, will pass data id as argument.
   *      	  // It should return color string or null value
   *      	  [1, function(id) { return id === "data1" ? "red" : "blue"; }, 0],
   *      	]
   *      }
   *  }
   */
  area_above: !1,
  area_below: !1,
  area_front: !0,
  area_linearGradient: !1,
  area_zerobased: !0
});
;// CONCATENATED MODULE: ./src/config/Options/shape/bar.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * bar config options
 */
/* harmony default export */ var shape_bar = ({
  /**
   * Set bar options
   * @name bar
   * @memberof Options
   * @type {object}
   * @property {object} bar Bar object
   * @property {boolean} [bar.front=false] Set 'bar' to be positioned over(on the top) other shapes elements.
   * @property {number} [bar.indices.removeNull=false] Remove nullish data on bar indices positions.
   * @property {number} [bar.label.threshold=0] Set threshold ratio to show/hide labels.
   * @property {boolean|object} [bar.linearGradient=false] Set the linear gradient on bar.<br><br>
   * Or customize by giving below object value:
   *  - x {Array}: `x1`, `x2` value (default: `[0, 0]`)
   *  - y {Array}: `y1`, `y2` value (default: `[0, 1]`)
   *  - stops {Array}: Each item should be having `[offset, stop-color, stop-opacity]` values.
   *    - (default: `[[0, $DATA_COLOR, 1], [1, $DATA_COLOR, 0]]`)
   * @property {boolean} [bar.overlap=false] Bars will be rendered at same position, which will be overlapped each other. (for non-grouped bars only)
   * @property {number} [bar.padding=0] The padding pixel value between each bar.
   * @property {number} [bar.radius] Set the radius of bar edge in pixel.
   * @property {number} [bar.radius.ratio] Set the radius ratio of bar edge in relative the bar's width.
   * @property {number} [bar.sensitivity=2] The senstivity offset value for interaction boundary.
   * @property {number} [bar.width] Change the width of bar chart.
   * @property {number} [bar.width.ratio=0.6] Change the width of bar chart by ratio.
   * @property {number} [bar.width.max] The maximum width value for ratio.
   * @property {number} [bar.width.dataname] Change the width of bar for indicated dataset only.
   * - **NOTE:**
   *   - Works only for non-stacked bar
   *   - Bars are centered accoding its total width value
   * @property {number} [bar.width.dataname.ratio=0.6] Change the width of bar chart by ratio.
   * @property {number} [bar.width.dataname.max] The maximum width value for ratio.
   * @property {boolean} [bar.zerobased=true] Set if min or max value will be 0 on bar chart.
   * @see [Demo: bar front](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarFront)
   * @see [Demo: bar indices](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarIndices)
   * @see [Demo: bar overlap](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarOverlap)
   * @see [Demo: bar padding](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarPadding)
   * @see [Demo: bar radius](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarRadius)
   * @see [Demo: bar width](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarWidth)
   * @see [Demo: bar width variant](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarWidthVariant)
   * @example
   *  bar: {
   *      // make bar shape to be positioned over the other shape elements
   *      front: true,
   *
   *      // remove nullish data on bar indices postions
   *      indices: {
   *          removeNull: true
   *      },
   *
   *      // will generate follwing linearGradient:
   *      // for more info: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
   *      // <linearGradient x1="0" x2="0" y1="0" y2="1">
   *      //    <stop offset="0" stop-color="$DATA_COLOR" stop-opacity="1"></stop>
   *      //    <stop offset="1" stop-color="$DATA_COLOR" stop-opacity="0"></stop>
   *      // </linearGradient>
   *      linearGradient: true,
   *
   *      // Or customized gradient
   *      linearGradient: {
   *      	x: [0, 0],  // x1, x2 attributes
   *      	y: [0, 0],  // y1, y2 attributes
   *      	stops: [
   *      	  // offset, stop-color, stop-opacity
   *      	  [0, "#7cb5ec", 1],
   *
   *      	  // setting 'null' for stop-color, will set its original data color
   *      	  [0.5, null, 0],
   *
   *      	  // setting 'function' for stop-color, will pass data id as argument.
   *      	  // It should return color string or null value
   *      	  [1, function(id) { return id === "data1" ? "red" : "blue"; }, 0],
   *      	]
   *      },
   *
   *      // remove nullish da
   *      overlap: true,
   *
   *      padding: 1,
   *
   *      // bar radius
   *      radius: 10,
   *      // or
   *      radius: {
   *          ratio: 0.5
   *      }
   *
   *      label: {
   *          // 0.1(10%) ratio value means, the minimum ratio to show text label relative to the y Axis domain range value.
   *          // if data value is below than 0.1, text label will be hidden.
   *          threshold: 0.1,
   *      },
   *
   *      // will not have offset between each bar elements for interaction
   *      sensitivity: 0,
   *
   *      width: 10,
   *
   *      // or
   *      width: {
   *          ratio: 0.2,
   *          max: 20
   *      },
   *
   *      // or specify width per dataset
   *      width: {
   *          data1: 20,
   *          data2: {
   *              ratio: 0.2,
   *              max: 20
   *          }
   *      },
   *
   *      zerobased: false
   *  }
   */
  bar_front: !1,
  bar_indices_removeNull: !1,
  bar_label_threshold: 0,
  bar_linearGradient: !1,
  bar_overlap: !1,
  bar_padding: 0,
  bar_radius: undefined,
  bar_radius_ratio: undefined,
  bar_sensitivity: 2,
  bar_width: undefined,
  bar_width_ratio: .6,
  bar_width_max: undefined,
  bar_zerobased: !0
});
;// CONCATENATED MODULE: ./src/config/Options/shape/bubble.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * bubble config options
 */
/* harmony default export */ var shape_bubble = ({
  /**
   * Set bubble options
   * @name bubble
   * @memberof Options
   * @type {object}
   * @property {object} bubble bubble object
   * @property {number|Function} [bubble.maxR=35] Set the max bubble radius value
   * @property {boolean} [bubble.zerobased=false] Set if min or max value will be 0 on bubble chart.
   * @example
   *  bubble: {
   *      // ex) If 100 is the highest value among data bound, the representation bubble of 100 will have radius of 50.
   *      // And the lesser will have radius relatively from tha max value.
   *      maxR: 50,
   *
   *      // or set radius callback
   *      maxR: function(d) {
   *          // ex. of d param - {x: Fri Oct 06 2017 00:00:00 GMT+0900, value: 80, id: "data2", index: 5}
   *          ...
   *          return Math.sqrt(d.value * 2);
   *      },
   *      zerobased: false
   *  }
   */
  bubble_maxR: 35,
  bubble_zerobased: !1
});
;// CONCATENATED MODULE: ./src/config/Options/shape/candlestick.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * candlestick config options
 */
/* harmony default export */ var shape_candlestick = ({
  /**
   * Set candlestick options
   * @name candlestick
   * @memberof Options
   * @type {object}
   * @property {object} candlestick Candlestick object
   * @property {number} [candlestick.width] Change the width.
   * @property {number} [candlestick.width.ratio=0.6] Change the width by ratio.
   * @property {number} [candlestick.width.max] The maximum width value for ratio.
   * @property {number} [candlestick.width.dataname] Change the width for indicated dataset only.
   * @property {number} [candlestick.width.dataname.ratio=0.6] Change the width of bar chart by ratio.
   * @property {number} [candlestick.width.dataname.max] The maximum width value for ratio.
   * @property {object} [candlestick.color] Color setting.
   * @property {string|object} [candlestick.color.down] Change down(bearish) value color.
   * @property {string} [candlestick.color.down.dataname] Change down value color for indicated dataset only.
   *
   * @see [Demo](https://naver.github.io/billboard.js/demo/##Chart.CandlestickChart)
   * @example
   *  candlestick: {
   *      width: 10,
   *
   *      // or
   *      width: {
   *         	ratio: 0.2,
   *         	max: 20
   *      },
   *
   *      // or specify width per dataset
   *      width: {
   *         	data1: 20,
   *         	data2: {
   *         	    ratio: 0.2,
   *         		max: 20
   *         	}
   *      },
   *      color: {
   *  	  	// spcify bearish color
   *  	  	down: "red",
   *
   *  	  	// or specify color per dataset
   *  	  	down: {
   *  	  		data1: "red",
   *  	  		data2: "blue",
   *  	  	}
   *      }
   *  }
   */
  candlestick_width: undefined,
  candlestick_width_ratio: .6,
  candlestick_width_max: undefined,
  candlestick_color_down: "red"
});
;// CONCATENATED MODULE: ./src/config/Options/shape/line.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * line config options
 */
/* harmony default export */ var shape_line = ({
  /**
   * Set line options
   * @name line
   * @memberof Options
   * @type {object}
   * @property {object} line Line object
   * @property {boolean} [line.connectNull=false] Set if null data point will be connected or not.<br>
   *  If true set, the region of null data will be connected without any data point. If false set, the region of null data will not be connected and get empty.
   * @property {Array}   [line.classes=undefined] If set, used to set a css class on each line.
   * @property {boolean} [line.step.type=step] Change step type for step chart.<br>
   * **Available values:**
   * - step
   * - step-before
   * - step-after
   * @property {boolean} [line.step.tooltipMatch=false] Set to `true` for `step-before` and `step-after` types to have cursor/tooltip match to hovered step's point instead of nearest point.
   * @property {boolean|Array} [line.point=true] Set to false to not draw points on linecharts. Or pass an array of line ids to draw points for.
   * @property {boolean} [line.zerobased=false] Set if min or max value will be 0 on line chart.
   * @example
   *  line: {
   *      connectNull: true,
   *      classes: [
   *          "line-class1",
   *          "line-class2"
   *      ],
   *      step: {
   *          type: "step-after",
   *
   *          // to have cursor/tooltip match to hovered step's point instead of nearest point.
   *          tooltipMatch: true
   *      },
   *
   *      // hide all data points ('point.show=false' also has similar effect)
   *      point: false,
   *
   *      // show data points for only indicated datas
   *      point: [
   *          "data1", "data3"
   *      ],
   *
   *      zerobased: false
   *  }
   */
  line_connectNull: !1,
  line_step_type: "step",
  line_step_tooltipMatch: !1,
  line_zerobased: !1,
  line_classes: undefined,
  line_point: !0
});
;// CONCATENATED MODULE: ./src/config/Options/shape/scatter.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * scatter config options
 */
/* harmony default export */ var scatter = ({
  /**
   * Set scatter options
   * @name scatter
   * @memberof Options
   * @type {object}
   * @property {object} [scatter] scatter object
   * @property {boolean} [scatter.zerobased=false] Set if min or max value will be 0 on scatter chart.
   * @example
   *  scatter: {
   *      connectNull: true,
   *      step: {
   *          type: "step-after"
   *      },
   *
   *      // hide all data points ('point.show=false' also has similar effect)
   *      point: false,
   *
   *      // show data points for only indicated datas
   *      point: [
   *          "data1", "data3"
   *      ],
   *
   *      zerobased: false
   *  }
   */
  scatter_zerobased: !1
});
;// CONCATENATED MODULE: ./src/config/Options/shape/spline.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * spline config options
 */
/* harmony default export */ var spline = ({
  /**
   * Set spline options
   * - **Available interpolation type values:**
   *  - basis (d3.curveBasis)
   *  - basis-closed (d3.curveBasisClosed)
   *  - basis-open (d3.curveBasisOpen)
   *  - bundle (d3.curveBundle)
   *  - cardinal (d3.curveCardinal)
   *  - cardinal-closed (d3.curveCardinalClosed)
   *  - cardinal-open (d3.curveCardinalOpen)
   *  - catmull-rom (d3.curveCatmullRom)
   *  - catmull-rom-closed (d3.curveCatmullRomClosed)
   *  - catmull-rom-open (d3.curveCatmullRomOpen)
   *  - monotone-x (d3.curveMonotoneX)
   *  - monotone-y (d3.curveMonotoneY)
   *  - natural (d3.curveNatural)
   *  - linear-closed (d3.curveLinearClosed)
   *  - linear (d3.curveLinear)
   *  - step (d3.curveStep)
   *  - step-after (d3.curveStepAfter)
   *  - step-before (d3.curveStepBefore)
   * @name spline
   * @memberof Options
   * @type {object}
   * @property {object} spline Spline object
   * @property {object} spline.interpolation Spline interpolation object
   * @property {string} [spline.interpolation.type="cardinal"] Interpolation type
   * @see [Interpolation (d3 v4)](http://bl.ocks.org/emmasaunders/c25a147970def2b02d8c7c2719dc7502)
   * @example
   *  spline: {
   *      interpolation: {
   *          type: "cardinal"
   *      }
   *  }
   */
  spline_interpolation_type: "cardinal"
});
;// CONCATENATED MODULE: ./src/config/Options/shape/arc.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * arc config options
 */
/* harmony default export */ var shape_arc = ({
  /**
   * Set arc options
   * @name arc
   * @memberof Options
   * @type {object}
   * @property {object} arc Arc object
   * @property {number|Function} [arc.cornerRadius=0] Set corner radius of Arc(donut/gauge/pie/polar) shape.
   *  - **NOTE:**
   * 	  - Corner radius can't surpass the `(outerRadius - innerRadius) /2` of indicated shape.
   * @property {number} [arc.cornerRadius.ratio=0] Set ratio relative of outer radius.
   * @property {object} [arc.needle] Set needle options.
   * @property {boolean} [arc.needle.show=false] Show or hide needle.
   * @property {string} [arc.needle.color] Set needle filled color.
   * @property {Function} [arc.needle.path] Set custom needle path function.
   *  - **NOTE:**
   *   - The path should be starting from 0,0 (which is center) to top center coordinate.
   *   - The function will receive, `length`{number} parameter which indicating the needle length in pixel relative to radius.
   * @property {number} [arc.needle.value] Set needle value.
   *  - **NOTE:**
   *   - For single gauge chart, needle will point the data value by default, otherwise will point 0(zero).
   * @property {number} [arc.needle.length=100] Set needle length in percentages relative to radius.
   * @property {object} [arc.needle.top] Set needle top options.
   * @property {number} [arc.needle.top.rx=0] Set needle top [rx radius value](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve).
   * @property {number} [arc.needle.top.ry=0] Set needle top [ry radius value](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve).
   * @property {number} [arc.needle.top.width=0] Set needle top width in pixel.
   * @property {object} [arc.needle.bottom] Set needle bottom options.
   * @property {number} [arc.needle.bottom.rx=1] Set needle bottom [rx radius value](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve).
   * @property {number} [arc.needle.bottom.ry=1] Set needle bottom [ry radius value](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve).
   * @property {number} [arc.needle.bottom.width=15] Set needle bottom width in pixel.
   * @property {number} [arc.needle.bottom.len=0] Set needle bottom length in pixel. Setting this value, will make bottom larger starting from center.
   * @see [Demo: Donut corner radius](https://naver.github.io/billboard.js/demo/#DonutChartOptions.DonutCornerRadius)
   * @see [Demo: Gauge corner radius](https://naver.github.io/billboard.js/demo/#GaugeChartOptions.GaugeCornerRadius)
   * @see [Demo: Donut corner radius](https://naver.github.io/billboard.js/demo/#PieChartOptions.CornerRadius)
   * @see [Demo: Donut needle](https://naver.github.io/billboard.js/demo/#DonutChartOptions.DonutNeedle)
   * @see [Demo: Gauge needle](https://naver.github.io/billboard.js/demo/##GaugeChartOptions.GaugeNeedle)
   * @example
   *  arc: {
   *      cornerRadius: 12,
   *
   *      // can customize corner radius for each data with function callback
   *      //
   *      // The function will receive:
   *      // - id {string}: Data id
   *      // - value {number}: Data value
   *      // - outerRadius {number}: Outer radius value
   *      cornerRadius: function(id, value, outerRadius) {
   *          return (id === "data1" && value > 10) ?
   *          	50 : outerRadius * 1.2;
   *      },
   *
   *      // set ratio relative of outer radius
   *      cornerRadius: {
   *          ratio: 0.5
   *      },
   *
   *      needle: {
   *       	show: true,
   *       	color: "red", // any valid CSS color
   *       	path: function(length) {
   *       	  const len = length - 20;
   *
   *       	  // will return upper arrow shape path
   *       	  // Note: The path should begun from '0,0' coordinate to top center.
   *       	  const path = `M 0 -${len + 20}
   *       		L -12 -${len}
   *       		L -5 -${len}
   *       		L -5 0
   *       		A 1 1 0 0 0 5 0
   *       		L 5 -${len}
   *       		L 12 -${len} Z`;
   *
   *       	  return path;
   *       	},
   *       	value: 40,  // will make needle to point value 40.
   *       	length: 80, // needle length in percentages relative to radius.
   *
   *       	top: {
   *       	  // rx and ry are the two radii of the ellipse;
   *       	  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve
   *       	  rx: 1,
   *       	  ry: 1,
   *       	  width: 5
   *       	},
   *       	bottom: {
   *       	  // rx and ry are the two radii of the ellipse;
   *       	  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve
   *       	  rx: 1,
   *       	  ry: 1,
   *       	  width: 10
   *       	  len: 10
   *       	}
   *      }
   *  }
   */
  arc_cornerRadius: 0,
  arc_cornerRadius_ratio: 0,
  arc_needle_show: !1,
  arc_needle_color: undefined,
  arc_needle_value: undefined,
  arc_needle_path: undefined,
  arc_needle_length: 100,
  arc_needle_top_rx: 0,
  arc_needle_top_ry: 0,
  arc_needle_top_width: 0,
  arc_needle_bottom_rx: 1,
  arc_needle_bottom_ry: 1,
  arc_needle_bottom_width: 15,
  arc_needle_bottom_len: 0
});
;// CONCATENATED MODULE: ./src/config/Options/shape/donut.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * donut config options
 */
/* harmony default export */ var donut = ({
  /**
   * Set donut options
   * @name donut
   * @memberof Options
   * @type {object}
   * @property {object} donut Donut object
   * @property {boolean} [donut.label.show=true] Show or hide label on each donut piece.
   * @property {Function} [donut.label.format] Set formatter for the label on each donut piece.
   * @property {number} [donut.label.threshold=0.05] Set threshold ratio to show/hide labels.
   * @property {number|Function} [donut.label.ratio=undefined] Set ratio of labels position.
   * @property {boolean} [donut.expand=true] Enable or disable expanding donut pieces.
   * @property {number} [donut.expand.rate=0.98] Set expand rate.
   * @property {number} [donut.expand.duration=50] Set expand transition time in ms.
   * @property {number} [donut.width] Set width of donut chart.
   * @property {string} [donut.title=""] Set title of donut chart. Use `\n` character for line break.
   *  - **NOTE:**
   *    - When `arc.needle.show=true` is set, special template `{=NEEDLE_VALUE}` can be used inside the title text to show current needle value.
   * @property {number} [donut.padAngle=0] Set padding between data.
   * @property {number} [donut.startingAngle=0] Set starting angle where data draws.
   * @example
   *  donut: {
   *      label: {
   *          show: false,
   *          format: function(value, ratio, id) {
   *              return d3.format("$")(value);
   *
   *              // to multiline, return with '\n' character
   *              // return value +"%\nLine1\n2Line2";
   *          },
   *
   *          // 0.1(10%) ratio value means, the minimum ratio to show text label relative to the total value.
   *          // if data value is below than 0.1, text label will be hidden.
   *          threshold: 0.1,
   *
   *          // set ratio callback. Should return ratio value
   *          ratio: function(d, radius, h) {
   *          	...
   *          	return ratio;
   *          },
   *          // or set ratio number
   *          ratio: 0.5
   *      },
   *
   *      // disable expand transition for interaction
   *      expand: false,
   *
   *      expand: {
   *      	// set duration of expand transition to 500ms.
   *          duration: 500,
   *
   *      	// set expand area rate
   *          rate: 1
   *      },
   *
   *      width: 10,
   *      padAngle: 0.2,
   *      startingAngle: 1,
   *      title: "Donut Title"
   *
   *      // when 'arc.needle.show=true' is set, can show current needle value.
   *      title: "Needle value:\n{=NEEDLE_VALUE}",
   *
   *      // title with line break
   *      title: "Title1\nTitle2"
   *  }
   */
  donut_label_show: !0,
  donut_label_format: undefined,
  donut_label_threshold: .05,
  donut_label_ratio: undefined,
  donut_width: undefined,
  donut_title: "",
  donut_expand: {},
  donut_expand_rate: .98,
  donut_expand_duration: 50,
  donut_padAngle: 0,
  donut_startingAngle: 0
});
;// CONCATENATED MODULE: ./src/config/Options/shape/gauge.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * gauge config options
 */
/* harmony default export */ var shape_gauge = ({
  /**
   * Set gauge options
   * @name gauge
   * @memberof Options
   * @type {object}
   * @property {object} gauge Gauge object
   * @property {boolean} [gauge.background=""] Set background color. (The `.bb-chart-arcs-background` element)
   * @property {boolean} [gauge.fullCircle=false] Show full circle as donut. When set to 'true', the max label will not be showed due to start and end points are same location.
   * @property {boolean} [gauge.label.show=true] Show or hide label on gauge.
   * @property {Function} [gauge.label.format] Set formatter for the label on gauge. Label text can be multilined with `\n` character.<br>
   * Will pass following arguments to the given function:
   * - value {number}: absolute value
   * - ratio {number}: value's ratio
   * - id {string}: data's id value
   * @property {Function} [gauge.label.extents] Set customized min/max label text.
   * @property {number} [gauge.label.threshold=0] Set threshold ratio to show/hide labels.
   * @property {boolean} [gauge.expand=true] Enable or disable expanding gauge.
   * @property {number} [gauge.expand.rate=0.98] Set expand rate.
   * @property {number} [gauge.expand.duration=50] Set the expand transition time in milliseconds.
   * @property {number} [gauge.min=0] Set min value of the gauge.
   * @property {number} [gauge.max=100] Set max value of the gauge.
   * @property {number} [gauge.startingAngle=-1 * Math.PI / 2] Set starting angle where data draws.
   *
   * **Limitations:**
   * - when `gauge.fullCircle=false`:
   *   - -1 * Math.PI / 2 <= startingAngle <= Math.PI / 2
   *   - `startingAngle <= -1 * Math.PI / 2` defaults to `-1 * Math.PI / 2`
   *   - `startingAngle >= Math.PI / 2` defaults to `Math.PI / 2`
   * - when `gauge.fullCircle=true`:
   *   - -1 * Math.PI < startingAngle < Math.PI
   *   - `startingAngle < -1 * Math.PI` defaults to `Math.PI`
   *   - `startingAngle >  Math.PI` defaults to `Math.PI`
   * @property {number} [gauge.arcLength=100] Set the length of the arc to be drawn in percent from -100 to 100.<br>
   * Negative value will draw the arc **counterclockwise**. Need to be used in conjunction with `gauge.fullCircle=true`.
   *
   * **Limitations:**
   * - -100 <= arcLength (in percent) <= 100
   * - 'arcLength < -100' defaults to -100
   * - 'arcLength > 100' defaults to 100
   * @property {string} [gauge.title=""] Set title of gauge chart. Use `\n` character for line break.
   *  - **NOTE:**
   *    - When `arc.needle.show=true` is set, special template `{=NEEDLE_VALUE}` can be used inside the title text to show current needle value.
   * @property {string} [gauge.units] Set units of the gauge.
   * @property {number} [gauge.width] Set width of gauge chart.
   * @property {string} [gauge.type="single"] Set type of gauge to be displayed.<br><br>
   * **Available Values:**
   * - single
   * - multi
   * @property {number} [gauge.arcs.minWidth=5] Set minimal width of gauge arcs until the innerRadius disappears.
   * @see [Demo: archLength](https://naver.github.io/billboard.js/demo/#GaugeChartOptions.GaugeArcLength)
   * @see [Demo: startingAngle](https://naver.github.io/billboard.js/demo/#GaugeChartOptions.GaugeStartingAngle)
   * @example
   *  gauge: {
   *      background: "#eee", // will set 'fill' css prop for '.bb-chart-arcs-background' classed element.
   *      fullCircle: false,
   *      label: {
   *          show: false,
   *          format: function(value, ratio, id) {
   *              return value;
   *
   *              // to multiline, return with '\n' character
   *              // return value +"%\nLine1\n2Line2";
   *          },
   *
   *           extents: function(value, isMax) {
   *              return (isMax ? "Max:" : "Min:") + value;
   *          },
   *
   *          // 0.1(10%) ratio value means, the minimum ratio to show text label relative to the total value.
   *          // if data value is below than 0.1, text label will be hidden.
   *          threshold: 0.1,
   *      },
   *
   *      // disable expand transition for interaction
   *      expand: false,
   *
   *      expand: {
   *      	// set duration of expand transition to 500ms.
   *          duration: 500,
   *
   *      	// set expand area rate
   *          rate: 1
   *      },
   *
   *      min: -100,
   *      max: 200,
   *      type: "single"  // or 'multi'
   *      title: "Title Text",
   *
   *      // when 'arc.needle.show=true' is set, can show current needle value.
   *      title: "Needle value:\n{=NEEDLE_VALUE}",
   *
   *      units: "%",
   *      width: 10,
   *      startingAngle: -1 * Math.PI / 2,
   *      arcLength: 100,
   *      arcs: {
   *          minWidth: 5
   *      }
   *  }
   */
  gauge_background: "",
  gauge_fullCircle: !1,
  gauge_label_show: !0,
  gauge_label_format: undefined,
  gauge_label_extents: undefined,
  gauge_label_threshold: 0,
  gauge_min: 0,
  gauge_max: 100,
  gauge_type: "single",
  gauge_startingAngle: -1 * Math.PI / 2,
  gauge_arcLength: 100,
  gauge_title: "",
  gauge_units: undefined,
  gauge_width: undefined,
  gauge_arcs_minWidth: 5,
  gauge_expand: {},
  gauge_expand_rate: .98,
  gauge_expand_duration: 50
});
;// CONCATENATED MODULE: ./src/config/Options/shape/pie.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * pie config options
 */
/* harmony default export */ var pie = ({
  /**
   * Set pie options
   * @name pie
   * @memberof Options
   * @type {object}
   * @property {object} pie Pie object
   * @property {boolean} [pie.label.show=true] Show or hide label on each pie piece.
   * @property {Function} [pie.label.format] Set formatter for the label on each pie piece.
   * @property {number} [pie.label.threshold=0.05] Set threshold ratio to show/hide labels.
   * @property {number|Function} [pie.label.ratio=undefined] Set ratio of labels position.
   * @property {boolean|object} [pie.expand=true] Enable or disable expanding pie pieces.
   * @property {number} [pie.expand.rate=0.98] Set expand rate.
   * @property {number} [pie.expand.duration=50] Set expand transition time in ms.
   * @property {number|object} [pie.innerRadius=0] Sets the inner radius of pie arc.
   * @property {number|object|undefined} [pie.outerRadius=undefined] Sets the outer radius of pie arc.
   * @property {number} [pie.padAngle=0] Set padding between data.
   * @property {number} [pie.padding=0] Sets the gap between pie arcs.
   * @property {number} [pie.startingAngle=0] Set starting angle where data draws.
   * @see [Demo: expand.rate](https://naver.github.io/billboard.js/demo/#PieChartOptions.ExpandRate)
   * @see [Demo: innerRadius](https://naver.github.io/billboard.js/demo/#PieChartOptions.InnerRadius)
   * @see [Demo: outerRadius](https://naver.github.io/billboard.js/demo/#PieChartOptions.OuterRadius)
   * @see [Demo: startingAngle](https://naver.github.io/billboard.js/demo/#PieChartOptions.StartingAngle)
   * @example
   *  pie: {
   *      label: {
   *          show: false,
   *          format: function(value, ratio, id) {
   *              return d3.format("$")(value);
   *
   *              // to multiline, return with '\n' character
   *              // return value +"%\nLine1\n2Line2";
   *          },
   *
   *          // 0.1(10%) ratio value means, the minimum ratio to show text label relative to the total value.
   *          // if data value is below than 0.1, text label will be hidden.
   *          threshold: 0.1,
   *
   *          // set ratio callback. Should return ratio value
   *          ratio: function(d, radius, h) {
   *              ...
   *              return ratio;
   *          },
   *          // or set ratio number
   *          ratio: 0.5
   *      },
   *
   *      // disable expand transition for interaction
   *      expand: false,
   *
   *      expand: {
   *      	// set duration of expand transition to 500ms.
   *          duration: 500,
   *
   *      	// set expand area rate
   *          rate: 1
   *      },
   *
   *      innerRadius: 0,
   *
   *      // set different innerRadius for each data
   *      innerRadius: {
   *      	data1: 10,
   *      	data2: 0
   *      },
   *
   *      outerRadius: 100,
   *
   *      // set different outerRadius for each data
   *      outerRadius: {
   *      	data1: 50,
   *      	data2: 100
   *      }
   *
   *      padAngle: 0.1,
   *      padding: 0,
   *      startingAngle: 1
   *  }
   */
  pie_label_show: !0,
  pie_label_format: undefined,
  pie_label_threshold: .05,
  pie_label_ratio: undefined,
  pie_expand: {},
  pie_expand_rate: .98,
  pie_expand_duration: 50,
  pie_innerRadius: 0,
  pie_outerRadius: undefined,
  pie_padAngle: 0,
  pie_padding: 0,
  pie_startingAngle: 0
});
;// CONCATENATED MODULE: ./src/config/Options/shape/polar.ts

var polar_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * polar config options
 */
/* harmony default export */ var shape_polar = ({
  /**
   * Set polar options
   * @name polar
   * @memberof Options
   * @type {object}
   * @property {object} polar Polar object
   * @property {boolean} [polar.label.show=true] Show or hide label on each polar piece.
   * @property {Function} [polar.label.format] Set formatter for the label on each polar piece.
   * @property {number} [polar.label.threshold=0.05] Set threshold ratio to show/hide labels.
   * @property {number|Function} [polar.label.ratio=undefined] Set ratio of labels position.
   * @property {number} [polar.level.depth=3] Set the level depth.
   * @property {boolean} [polar.level.show=true] Show or hide level.
   * @property {string} [polar.level.text.backgroundColor="#fff"] Set label text's background color.
   * @property {Function} [polar.level.text.format] Set format function for the level value.<br>- Default value: `(x) => x % 1 === 0 ? x : x.toFixed(2)`
   * @property {boolean} [polar.level.text.show=true] Show or hide level text.
   * @property {number} [polar.padAngle=0] Set padding between data.
   * @property {number} [polar.padding=0] Sets the gap between pie arcs.
   * @property {number} [polar.startingAngle=0] Set starting angle where data draws.
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Chart.PolarChart)
   * @example
   *  polar: {
   *      label: {
   *          show: false,
   *          format: function(value, ratio, id) {
   *              return d3.format("$")(value);
   *
   *              // to multiline, return with '\n' character
   *              // return value +"%\nLine1\n2Line2";
   *          },
   *
   *          // 0.1(10%) ratio value means, the minimum ratio to show text label relative to the total value.
   *          // if data value is below than 0.1, text label will be hidden.
   *          threshold: 0.1,
   *
   *          // set ratio callback. Should return ratio value
   *          ratio: function(d, radius, h) {
   *              ...
   *              return ratio;
   *          },
   *          // or set ratio number
   *          ratio: 0.5
   *      },
   *      level: {
   *          depth: 3,
   *          max: 500,
   *          show: true,
   *          text: {
   *              format: function(x) {
   *                  return x + "%";
   *              },
   *              show: true,
   *              backgroundColor: "red"
   *          }
   *      },
   *      padAngle: 0.1,
   *      padding: 0,
   *      startingAngle: 1
   *  }
   */
  polar_label_show: !0,
  polar_label_format: undefined,
  polar_label_threshold: .05,
  polar_label_ratio: undefined,
  polar_level_depth: 3,
  polar_level_max: undefined,
  polar_level_show: !0,
  polar_level_text_backgroundColor: "#fff",
  polar_level_text_format: function polar_level_text_format(x) {
    _newArrowCheck(this, polar_this);
    return x % 1 === 0 ? x : x.toFixed(2);
  }.bind(undefined),
  polar_level_text_show: !0,
  polar_padAngle: 0,
  polar_padding: 0,
  polar_startingAngle: 0
});
;// CONCATENATED MODULE: ./src/config/Options/shape/radar.ts

var radar_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * radar config options
 */
/* harmony default export */ var shape_radar = ({
  /**
   * Set radar options
   * - **NOTE:**
   *  > When x tick text contains `\n`, it's used as line break.
   * @name radar
   * @memberof Options
   * @type {object}
   * @property {object} radar Radar object
   * @property {number} [radar.axis.max=undefined] The max value of axis. If not given, it'll take the max value from the given data.
   * @property {boolean} [radar.axis.line.show=true] Show or hide axis line.
   * @property {number} [radar.axis.text.position.x=0] x coordinate position, relative the original.
   * @property {number} [radar.axis.text.position.y=0] y coordinate position, relative the original.
   * @property {boolean} [radar.axis.text.show=true] Show or hide axis text.
   * @property {boolean} [radar.direction.clockwise=false] Set the direction to be drawn.
   * @property {number} [radar.level.depth=3] Set the level depth.
   * @property {boolean} [radar.level.show=true] Show or hide level.
   * @property {Function} [radar.level.text.format] Set format function for the level value.<br>- Default value: `(x) => x % 1 === 0 ? x : x.toFixed(2)`
   * @property {boolean} [radar.level.text.show=true] Show or hide level text.
   * @property {number} [radar.size.ratio=0.87] Set size ratio.
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Chart.RadarChart)
   * @see [Demo: radar axis](https://naver.github.io/billboard.js/demo/#RadarChartOptions.RadarAxis)
   * @see [Demo: radar level](https://naver.github.io/billboard.js/demo/#RadarChartOptions.RadarLevel)
   * @see [Demo: radar size](https://naver.github.io/billboard.js/demo/#RadarChartOptions.RadarSize)
   * @see [Demo: radar axis multiline](https://naver.github.io/billboard.js/demo/#RadarChartOptions.RadarAxisMultiline)
   * @example
   *  radar: {
   *      axis: {
   *          max: 50,
   *          line: {
   *              show: false
   *          },
   *          text: {
   *              position: {
   *              	x: 0,
   *              	y: 0
   *              },
   *              show: false
   *          }
   *      },
   *      direction: {
   *          clockwise: true
   *      },
   *      level: {
   *          show: false,
   *          text: {
   *              format: function(x) {
   *                  return x + "%";
   *              },
   *              show: true
   *          }
   *      },
   *      size: {
   *          ratio: 0.7
   *      }
   *  }
   */
  radar_axis_max: undefined,
  radar_axis_line_show: !0,
  radar_axis_text_show: !0,
  radar_axis_text_position: {},
  radar_level_depth: 3,
  radar_level_show: !0,
  radar_level_text_format: function radar_level_text_format(x) {
    _newArrowCheck(this, radar_this);
    return x % 1 === 0 ? x : x.toFixed(2);
  }.bind(undefined),
  radar_level_text_show: !0,
  radar_size_ratio: .87,
  radar_direction_clockwise: !1
});
;// CONCATENATED MODULE: ./src/config/Options/shape/treemap.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * treemap config options
 */
/* harmony default export */ var shape_treemap = ({
  /**
   * Set treemap options
   * @name treemap
   * @memberof Options
   * @type {object}
   * @property {object} treemap Treemap object
   * @property {string} [treemap.tile="binary"] Treemap tile type
   * - **Available tile type values:**
   * 	- binary ([d3.treemapBinary](https://github.com/d3/d3-hierarchy/blob/main/README.md#treemapBinary))
   * 	- dice ([d3.treemapDice](https://github.com/d3/d3-hierarchy/blob/main/README.md#treemapDice))
   * 	- slice ([d3.treemapSlice](https://github.com/d3/d3-hierarchy/blob/main/README.md#treemapSlice))
   * 	- sliceDice ([d3.treemapSliceDice](https://github.com/d3/d3-hierarchy/blob/main/README.md#treemapSliceDice))
   * 	- squrify ([d3.treemapSquarify](https://github.com/d3/d3-hierarchy/blob/main/README.md#treemapSquarify))
   * 	- resquarify ([d3.treemapResquarify](https://github.com/d3/d3-hierarchy/blob/main/README.md#treemapResquarify))
   * @property {Function} [treemap.label.format] Set formatter for the label text.
   * @property {number} [treemap.label.threshold=0.05] Set threshold ratio to show/hide labels text.
   * @property {number} [treemap.label.show=true] Show or hide label text.
   * @see [Demo: treemap](https://naver.github.io/billboard.js/demo/#Chart.TreemapChart)
   * @example
   *  treemap: {
   *      // "binary", "dice", "slice", "sliceDice", "squrify", "resquarify"
   *      tile: "dice",
   *
   *      label: {
   *          // show or hide label text
   *          show: false,
   *
   *          // set label text formatter
   *          format: function(value, ratio, id) {
   *              return d3.format("$")(value);
   *
   *              // to multiline, return with '\n' character
   *              // return value +"%\nLine1\n2Line2";
   *          },
   *
   *          // set ratio number
   *          ratio: 0.05
   *      }
   *  }
   */
  treemap_tile: "binary",
  treemap_label_format: undefined,
  treemap_label_threshold: .05,
  treemap_label_show: !0
});
;// CONCATENATED MODULE: ./src/config/resolver/shape.ts

var shape_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */






// Axis


// Shape












// Options









// Non-Axis based









/**
 * Extend Axis
 * @param {Array} module Module to be extended
 * @param {Array} option Option object to be extended
 * @private
 */
function extendAxis(module, option) {
  extend(ChartInternal.prototype, internal.concat(module));
  extend(Chart.prototype, api);
  Options.setOptions(options.concat(option || []));
}

/**
 * Extend Line type modules
 * @param {object} module Module to be extended
 * @param {Array} option Option object to be extended
 * @private
 */
function extendLine(module, option) {
  extendAxis([point, line].concat(module || []));
  Options.setOptions([common_point, shape_line].concat(option || []));
}

/**
 * Extend Arc type modules
 * @param {Array} module Module to be extended
 * @param {Array} option Option object to be extended
 * @private
 */
function extendArc(module, option) {
  extend(ChartInternal.prototype, [arc].concat(module || []));
  Options.setOptions(option);
}

// Area types
let _area = function area() {
    var _this2 = this;
    _newArrowCheck(this, shape_this);
    return extendLine(shape_area, [Options_shape_area]), (_area = function () {
      _newArrowCheck(this, _this2);
      return TYPE.AREA;
    }.bind(this))();
  }.bind(undefined),
  areaLineRange = function () {
    var _this3 = this;
    _newArrowCheck(this, shape_this);
    return extendLine(shape_area, [Options_shape_area]), (areaLineRange = function () {
      _newArrowCheck(this, _this3);
      return TYPE.AREA_LINE_RANGE;
    }.bind(this))();
  }.bind(undefined),
  areaSpline = function () {
    var _this4 = this;
    _newArrowCheck(this, shape_this);
    return extendLine(shape_area, [Options_shape_area, spline]), (areaSpline = function () {
      _newArrowCheck(this, _this4);
      return TYPE.AREA_SPLINE;
    }.bind(this))();
  }.bind(undefined),
  areaSplineRange = function () {
    var _this5 = this;
    _newArrowCheck(this, shape_this);
    return extendLine(shape_area, [Options_shape_area, spline]), (areaSplineRange = function () {
      _newArrowCheck(this, _this5);
      return TYPE.AREA_SPLINE_RANGE;
    }.bind(this))();
  }.bind(undefined),
  areaStep = function () {
    var _this6 = this;
    _newArrowCheck(this, shape_this);
    return extendLine(shape_area, [Options_shape_area]), (areaStep = function () {
      _newArrowCheck(this, _this6);
      return TYPE.AREA_STEP;
    }.bind(this))();
  }.bind(undefined),
  resolver_shape_line = function () {
    var _this7 = this;
    _newArrowCheck(this, shape_this);
    return extendLine(), (resolver_shape_line = function () {
      _newArrowCheck(this, _this7);
      return TYPE.LINE;
    }.bind(this))();
  }.bind(undefined),
  shape_spline = function () {
    var _this8 = this;
    _newArrowCheck(this, shape_this);
    return extendLine(undefined, [spline]), (shape_spline = function () {
      _newArrowCheck(this, _this8);
      return TYPE.SPLINE;
    }.bind(this))();
  }.bind(undefined),
  step = function () {
    var _this9 = this;
    _newArrowCheck(this, shape_this);
    return extendLine(), (step = function () {
      _newArrowCheck(this, _this9);
      return TYPE.STEP;
    }.bind(this))();
  }.bind(undefined),
  shape_donut = function () {
    var _this10 = this;
    _newArrowCheck(this, shape_this);
    return extendArc(undefined, [shape_arc, donut]), (shape_donut = function () {
      _newArrowCheck(this, _this10);
      return TYPE.DONUT;
    }.bind(this))();
  }.bind(undefined),
  resolver_shape_gauge = function () {
    var _this11 = this;
    _newArrowCheck(this, shape_this);
    return extendArc([gauge], [shape_arc, shape_gauge]), (resolver_shape_gauge = function () {
      _newArrowCheck(this, _this11);
      return TYPE.GAUGE;
    }.bind(this))();
  }.bind(undefined),
  shape_pie = function () {
    var _this12 = this;
    _newArrowCheck(this, shape_this);
    return extendArc(undefined, [shape_arc, pie]), (shape_pie = function () {
      _newArrowCheck(this, _this12);
      return TYPE.PIE;
    }.bind(this))();
  }.bind(undefined),
  resolver_shape_polar = function () {
    var _this13 = this;
    _newArrowCheck(this, shape_this);
    return extendArc([polar], [shape_arc, shape_polar]), (resolver_shape_polar = function () {
      _newArrowCheck(this, _this13);
      return TYPE.POLAR;
    }.bind(this))();
  }.bind(undefined),
  resolver_shape_radar = function () {
    var _this14 = this;
    _newArrowCheck(this, shape_this);
    return extendArc([point, radar], [common_point, shape_radar]), (resolver_shape_radar = function () {
      _newArrowCheck(this, _this14);
      return TYPE.RADAR;
    }.bind(this))();
  }.bind(undefined),
  resolver_shape_bar = function () {
    var _this15 = this;
    _newArrowCheck(this, shape_this);
    return extendAxis([bar], shape_bar), (resolver_shape_bar = function () {
      _newArrowCheck(this, _this15);
      return TYPE.BAR;
    }.bind(this))();
  }.bind(undefined),
  resolver_shape_bubble = function () {
    var _this16 = this;
    _newArrowCheck(this, shape_this);
    return extendAxis([point, bubble], [shape_bubble, common_point]), (resolver_shape_bubble = function () {
      _newArrowCheck(this, _this16);
      return TYPE.BUBBLE;
    }.bind(this))();
  }.bind(undefined),
  resolver_shape_candlestick = function () {
    var _this17 = this;
    _newArrowCheck(this, shape_this);
    return extendAxis([candlestick], [shape_candlestick]), (resolver_shape_candlestick = function () {
      _newArrowCheck(this, _this17);
      return TYPE.CANDLESTICK;
    }.bind(this))();
  }.bind(undefined),
  shape_scatter = function () {
    var _this18 = this;
    _newArrowCheck(this, shape_this);
    return extendAxis([point], [common_point, scatter]), (shape_scatter = function () {
      _newArrowCheck(this, _this18);
      return TYPE.SCATTER;
    }.bind(this))();
  }.bind(undefined),
  resolver_shape_treemap = function () {
    var _this19 = this;
    _newArrowCheck(this, shape_this);
    return extendAxis([treemap], [shape_treemap]), (resolver_shape_treemap = function () {
      _newArrowCheck(this, _this19);
      return TYPE.TREEMAP;
    }.bind(this))();
  }.bind(undefined); // Line types
// Arc types
// Axis based types
// Non Axis based types
;// CONCATENATED MODULE: ./src/Chart/api/selection.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/**
 * Toggler function to select or unselect
 * @param {boolean} isSelection Weather select or unselect
 * @param {Array} ids Target ids
 * @param {Array} indices Indices number
 * @param {boolean} resetOther Weather reset other selected points (only for selection)
 * @private
 */
function setSelection(isSelection, ids, indices, resetOther) {
  if (isSelection === void 0) {
    isSelection = !1;
  }
  const $$ = this,
    config = $$.config,
    main = $$.$el.main,
    selectionGrouped = config.data_selection_grouped,
    isSelectable = config.data_selection_isselectable.bind($$.api);
  if (!config.data_selection_enabled) {
    return;
  }
  main.selectAll("." + $SHAPE.shapes).selectAll("." + $SHAPE.shape).each(function (d) {
    const shape = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this),
      _ref = d.data ? d.data : d,
      id = _ref.id,
      index = _ref.index,
      toggle = $$.getToggle(this, d).bind($$),
      isTargetId = selectionGrouped || !ids || ids.indexOf(id) >= 0,
      isTargetIndex = !indices || indices.indexOf(index) >= 0,
      isSelected = shape.classed($SELECT.SELECTED);
    // line/area selection not supported yet
    if (shape.classed($LINE.line) || shape.classed($AREA.area)) {
      return;
    }
    if (isSelection) {
      if (isTargetId && isTargetIndex && isSelectable(d) && !isSelected) {
        toggle(!0, shape.classed($SELECT.SELECTED, !0), d, index);
      } else if (isDefined(resetOther) && resetOther && isSelected) {
        toggle(!1, shape.classed($SELECT.SELECTED, !1), d, index);
      }
    } else {
      if (isTargetId && isTargetIndex && isSelectable(d) && isSelected) {
        toggle(!1, shape.classed($SELECT.SELECTED, !1), d, index);
      }
    }
  });
}
/* harmony default export */ var selection = ({
  /**
   * Get selected data points.<br><br>
   * By this API, you can get selected data points information. To use this API, data.selection.enabled needs to be set true.
   * @function selected
   * @instance
   * @memberof Chart
   * @param {string} [targetId] You can filter the result by giving target id that you want to get. If not given, all of data points will be returned.
   * @returns {Array} dataPoint Array of the data points.<br>ex.) `[{x: 1, value: 200, id: "data1", index: 1, name: "data1"}, ...]`
   * @example
   *  // all selected data points will be returned.
   *  chart.selected();
   *  // --> ex.) [{x: 1, value: 200, id: "data1", index: 1, name: "data1"}, ... ]
   *
   *  // all selected data points of data1 will be returned.
   *  chart.selected("data1");
   */
  selected: function selected(targetId) {
    var _this = this;
    const $$ = this.internal,
      dataPoint = [];
    $$.$el.main.selectAll("." + ($SHAPE.shapes + $$.getTargetSelectorSuffix(targetId))).selectAll("." + $SHAPE.shape).filter(function () {
      return (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this).classed($SELECT.SELECTED);
    }).each(function (d) {
      _newArrowCheck(this, _this);
      return dataPoint.push(d);
    }.bind(this));
    return dataPoint;
  },
  /**
   * Set data points to be selected. ([`data.selection.enabled`](Options.html#.data%25E2%2580%25A4selection%25E2%2580%25A4enabled) option should be set true to use this method)
   * @function select
   * @instance
   * @memberof Chart
   * @param {string|Array} [ids] id value to get selected.
   * @param {Array} [indices] The index array of data points. If falsy value given, will select all data points.
   * @param {boolean} [resetOther] Unselect already selected.
   * @example
   *  // select all data points
   *  chart.select();
   *
   *  // select all from 'data2'
   *  chart.select("data2");
   *
   *  // select all from 'data1' and 'data2'
   *  chart.select(["data1", "data2"]);
   *
   *  // select from 'data1', indices 2 and unselect others selected
   *  chart.select("data1", [2], true);
   *
   *  // select from 'data1', indices 0, 3 and 5
   *  chart.select("data1", [0, 3, 5]);
   */
  select: function select(ids, indices, resetOther) {
    const $$ = this.internal;
    setSelection.bind($$)(!0, ids, indices, resetOther);
  },
  /**
   * Set data points to be un-selected.
   * @function unselect
   * @instance
   * @memberof Chart
   * @param {string|Array} [ids] id value to be unselected.
   * @param {Array} [indices] The index array of data points. If falsy value given, will select all data points.
   * @example
   *  // unselect all data points
   *  chart.unselect();
   *
   *  // unselect all from 'data1'
   *  chart.unselect("data1");
   *
   *  // unselect from 'data1', indices 2
   *  chart.unselect("data1", [2]);
   */
  unselect: function unselect(ids, indices) {
    const $$ = this.internal;
    setSelection.bind($$)(!1, ids, indices);
  }
});
;// CONCATENATED MODULE: ./src/Chart/api/subchart.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Select subchart by giving x domain range.
 * - **ℹ️ NOTE:**
 *  - Due to the limitations of floating point precision, domain value may not be exact returning approximately values.
 * @function subchart
 * @instance
 * @memberof Chart
 * @param {Array} domainValue If domain range is given, the subchart will be seleted to the given domain. If no argument is given, the current subchart selection domain will be returned.
 * @returns {Array} domain value in array
 * @example
 *  // Specify domain for subchart selection
 *  chart.subchart([1, 2]);
 *
 *  // Get the current subchart selection domain range
 *  // Domain value may not be exact returning approximately values.
 *  chart.subchart();
 */ // NOTE: declared funciton assigning to variable to prevent duplicated method generation in JSDoc.
const subchart = function (domainValue) {
  var _this = this;
  const $$ = this.internal,
    axis = $$.axis,
    brush = $$.brush,
    config = $$.config,
    _$$$scale = $$.scale,
    x = _$$$scale.x,
    subX = _$$$scale.subX,
    state = $$.state;
  let domain;
  if (config.subchart_show) {
    domain = domainValue;
    if (Array.isArray(domain)) {
      if (axis.isTimeSeries()) {
        domain = domain.map(function (x) {
          _newArrowCheck(this, _this);
          return parseDate.bind($$)(x);
        }.bind(this));
      }
      const isWithinRange = $$.withinRange(domain, $$.getZoomDomain("subX", !0), $$.getZoomDomain("subX"));
      if (isWithinRange) {
        state.domain = domain;
        brush.move(brush.getSelection(), domain.map(subX));
      }
    } else {
      var _state$domain;
      domain = (_state$domain = state.domain) != null ? _state$domain : x.orgDomain();
    }
  }
  return domain;
};
extend(subchart, {
  /**
   * Show subchart
   * - **NOTE:** for ESM imports, needs to import 'subchart' exports and instantiate it by calling `subchart()`.
   * @function subchart․show
   * @instance
   * @memberof Chart
   * @example
   * // for ESM imports, needs to import 'subchart' and must be instantiated first to enable subchart's API.
   * import {subchart} from "billboard.js";
   *
   * const chart = bb.generate({
   *   ...
   *   subchart: {
   *      // need to be instantiated by calling 'subchart()'
   *      enabled: subchart()
   *
   *      // in case don't want subchart to be shown at initialization, instantiate with '!subchart()'
   *      enabled: !subchart()
   *   }
   * });
   *
   * chart.subchart.show();
   */
  show: function () {
    const $$ = this.internal,
      subchart = $$.$el.subchart,
      config = $$.config,
      show = config.subchart_show;
    if (!show) {
      var _$target, _subchart$main2;
      // unbind zoom event bound to chart rect area
      $$.unbindZoomEvent();
      config.subchart_show = !show;
      subchart.main || $$.initSubchart();
      let $target = subchart.main.selectAll("." + $COMMON.target);

      // need to cover when new data has been loaded
      if ($$.data.targets.length !== $target.size()) {
        var _subchart$main;
        $$.updateSizes();
        $$.updateTargetsForSubchart($$.data.targets);
        $target = (_subchart$main = subchart.main) == null ? void 0 : _subchart$main.selectAll("." + $COMMON.target);
      }
      (_$target = $target) == null || _$target.style("opacity", null);
      (_subchart$main2 = subchart.main) == null || _subchart$main2.style("display", null);
      this.resize();
    }
  },
  /**
   * Hide generated subchart
   * - **NOTE:** for ESM imports, needs to import 'subchart' exports and instantiate it by calling `subchart()`.
   * @function subchart․hide
   * @instance
   * @memberof Chart
   * @example
   *  chart.subchart.hide();
   */
  hide: function hide() {
    const $$ = this.internal,
      main = $$.$el.subchart.main,
      config = $$.config;
    if (config.subchart_show && (main == null ? void 0 : main.style("display")) !== "none") {
      config.subchart_show = !1;
      main.style("display", "none");
      this.resize();
    }
  },
  /**
   * Toggle the visiblity of subchart
   * - **NOTE:** for ESM imports, needs to import 'subchart' exports and instantiate it by calling `subchart()`.
   * @function subchart․toggle
   * @instance
   * @memberof Chart
   * @example
   * // When subchart is hidden, will be shown
   * // When subchart is shown, will be hidden
   * chart.subchart.toggle();
   */
  toggle: function toggle() {
    const $$ = this.internal,
      config = $$.config;
    this.subchart[config.subchart_show ? "hide" : "show"]();
  },
  /**
   * Reset subchart selection
   * @function subchart․reset
   * @instance
   * @memberof Chart
   * @example
   * // Reset subchart selection
   * chart.subchart.reset();
   */
  reset: function reset() {
    const $$ = this.internal,
      brush = $$.brush;
    brush.clear(brush.getSelection());
  }
});
/* harmony default export */ var api_subchart = ({
  subchart: subchart
});
// EXTERNAL MODULE: external {"commonjs":"d3-zoom","commonjs2":"d3-zoom","amd":"d3-zoom","root":"d3"}
var external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_ = __webpack_require__(14);
;// CONCATENATED MODULE: ./src/Chart/api/zoom.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Zoom by giving x domain range.
 * - **ℹ️ NOTE:**
 *  - For `wheel` type zoom, the minimum zoom range will be set as the given domain range. To get the initial state, [.unzoom()](#unzoom) should be called.
 *  - To be used [zoom.enabled](Options.html#.zoom) option should be set as `truthy`.
 *  - When x axis type is `category`, domain range should be specified as index numbers.
 *  - Due to the limitations of floating point precision, domain value may not be exact returning approximately values.
 * @function zoom
 * @instance
 * @memberof Chart
 * @param {Array} domainValue If domain range is given, the chart will be zoomed to the given domain. If no argument is given, the current zoomed domain will be returned.
 * @returns {Array} domain value in array
 * @example
 *  // Zoom to specified domain range
 *  chart.zoom([10, 20]);
 *
 *  // For timeseries x axis, the domain value can be string, but the format should match with the 'data.xFormat' option.
 *  chart.zoom(["2021-02-03", "2021-02-08"]);
 *
 *  // For category x axis, the domain value should be index number.
 *  chart.zoom([0, 3]);
 *
 *  // Get the current zoomed domain range
 *  // Domain value may not be exact returning approximately values.
 *  chart.zoom();
 */ // NOTE: declared funciton assigning to variable to prevent duplicated method generation in JSDoc.
const zoom = function (domainValue) {
  var _this = this,
    _state$domain;
  const $$ = this.internal,
    $el = $$.$el,
    axis = $$.axis,
    config = $$.config,
    org = $$.org,
    scale = $$.scale,
    state = $$.state,
    isRotated = config.axis_rotated,
    isCategorized = axis.isCategorized();
  let domain;
  if (config.zoom_enabled) {
    domain = domainValue;
    if (Array.isArray(domain)) {
      if (axis.isTimeSeries()) {
        domain = domain.map(function (x) {
          _newArrowCheck(this, _this);
          return parseDate.bind($$)(x);
        }.bind(this));
      }
      const isWithinRange = $$.withinRange(domain, $$.getZoomDomain("zoom", !0), $$.getZoomDomain("zoom"));
      if (isWithinRange) {
        state.domain = domain;
        if (isCategorized) {
          domain = domain.map(function (v, i) {
            _newArrowCheck(this, _this);
            return +v + (i === 0 ? 0 : 1);
          }.bind(this));
        }

        // hide any possible tooltip show before the zoom
        $$.api.tooltip.hide();
        if (config.subchart_show) {
          const x = scale.zoom || scale.x;
          $$.brush.getSelection().call($$.brush.move, domain.map(x));
          // resultDomain = domain;
        } else {
          var _d3ZoomIdentity$scale;
          // in case of 'config.zoom_rescale=true', use org.xScale
          const x = isCategorized ? scale.x.orgScale() : org.xScale || scale.x,
            translate = [-x(domain[0]), 0],
            transform = (_d3ZoomIdentity$scale = external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoomIdentity.scale(x.range()[1] / (x(domain[1]) - x(domain[0])))).translate.apply(_d3ZoomIdentity$scale, isRotated ? translate.reverse() : translate); // Get transform from given domain value
          // https://github.com/d3/d3-zoom/issues/57#issuecomment-246434951
          $el.eventRect.call($$.zoom.transform, transform);
        }
        $$.setZoomResetButton();
      }
    } else {
      domain = $$.zoom.getDomain();
    }
  }
  return (_state$domain = state.domain) != null ? _state$domain : domain;
};
extend(zoom, {
  /**
   * Enable and disable zooming.
   * @function zoom․enable
   * @instance
   * @memberof Chart
   * @param {string|boolean} enabled Possible string values are "wheel" or "drag". If enabled is true, "wheel" will be used. If false is given, zooming will be disabled.<br>When set to false, the current zooming status will be reset.
   * @example
   *  // Enable zooming using the mouse wheel
   *  chart.zoom.enable(true);
   *  // Or
   *  chart.zoom.enable("wheel");
   *
   *  // Enable zooming by dragging
   *  chart.zoom.enable("drag");
   *
   *  // Disable zooming
   *  chart.zoom.enable(false);
   */
  enable: function enable(enabled) {
    const $$ = this.internal,
      config = $$.config;
    if (/^(drag|wheel)$/.test(enabled)) {
      config.zoom_type = enabled;
    }
    config.zoom_enabled = !!enabled;
    if (!$$.zoom) {
      $$.initZoom();
      $$.bindZoomEvent();
    } else if (enabled === !1) {
      $$.bindZoomEvent(!1);
    }
    $$.updateAndRedraw();
  },
  /**
   * Set or get x Axis maximum zoom range value
   * @function zoom․max
   * @instance
   * @memberof Chart
   * @param {number} [max] maximum value to set for zoom
   * @returns {number} zoom max value
   * @example
   *  // Set maximum range value
   *  chart.zoom.max(20);
   */
  max: function max(_max) {
    const $$ = this.internal,
      config = $$.config,
      xDomain = $$.org.xDomain;
    if (_max === 0 || _max) {
      config.zoom_x_max = getMinMax("max", [xDomain[1], _max]);
    }
    return config.zoom_x_max;
  },
  /**
   * Set or get x Axis minimum zoom range value
   * @function zoom․min
   * @instance
   * @memberof Chart
   * @param {number} [min] minimum value to set for zoom
   * @returns {number} zoom min value
   * @example
   *  // Set minimum range value
   *  chart.zoom.min(-1);
   */
  min: function min(_min) {
    const $$ = this.internal,
      config = $$.config,
      xDomain = $$.org.xDomain;
    if (_min === 0 || _min) {
      config.zoom_x_min = getMinMax("min", [xDomain[0], _min]);
    }
    return config.zoom_x_min;
  },
  /**
   * Set zoom range
   * @function zoom․range
   * @instance
   * @memberof Chart
   * @param {object} [range] zoom range
   * @returns {object} zoom range value
   * {
   *   min: 0,
   *   max: 100
   * }
   * @example
   *  chart.zoom.range({
   *      min: 10,
   *      max: 100
   *  });
   */
  range: function range(_range) {
    const zoom = this.zoom;
    if (isObject(_range)) {
      const min = _range.min,
        max = _range.max;
      isDefined(min) && zoom.min(min);
      isDefined(max) && zoom.max(max);
    }
    return {
      min: zoom.min(),
      max: zoom.max()
    };
  }
});
/* harmony default export */ var api_zoom = ({
  zoom: zoom,
  /**
   * Unzoom zoomed area
   * - **NOTE:** Calling .unzoom() will not trigger zoom events.
   * @function unzoom
   * @instance
   * @memberof Chart
   * @example
   *  chart.unzoom();
   */
  unzoom: function unzoom() {
    const $$ = this.internal,
      config = $$.config,
      _$$$$el = $$.$el,
      eventRect = _$$$$el.eventRect,
      zoomResetBtn = _$$$$el.zoomResetBtn,
      state = $$.state;
    if ($$.scale.zoom) {
      config.subchart_show ? $$.brush.getSelection().call($$.brush.move, null) : $$.zoom.updateTransformScale(external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoomIdentity);
      $$.updateZoom(!0);
      zoomResetBtn == null || zoomResetBtn.style("display", "none");

      // reset transform
      if ((0,external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoomTransform)(eventRect.node()) !== external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoomIdentity) {
        $$.zoom.transform(eventRect, external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoomIdentity);
      }
      state.domain = undefined;
    }
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/interactions/drag.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/**
 * Module used for data.selection.draggable option
 */
/* harmony default export */ var drag = ({
  /**
   * Called when dragging.
   * Data points can be selected.
   * @private
   * @param {object} mouse Object
   */
  drag: function drag(mouse) {
    var _this = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      main = $$.$el.main,
      isSelectionGrouped = config.data_selection_grouped,
      isSelectable = config.interaction_enabled && config.data_selection_isselectable;
    if ($$.hasArcType() || !config.data_selection_enabled ||
    // do nothing if not selectable
    config.zoom_enabled && !$$.zoom.altDomain ||
    // skip if zoomable because of conflict drag behavior
    !config.data_selection_multiple // skip when single selection because drag is used for multiple selection
    ) {
      return;
    }
    const _ref = state.dragStart || [0, 0],
      sx = _ref[0],
      sy = _ref[1],
      mx = mouse[0],
      my = mouse[1],
      minX = Math.min(sx, mx),
      maxX = Math.max(sx, mx),
      minY = isSelectionGrouped ? state.margin.top : Math.min(sy, my),
      maxY = isSelectionGrouped ? state.height : Math.max(sy, my);
    main.select("." + $DRAG.dragarea).attr("x", minX).attr("y", minY).attr("width", maxX - minX).attr("height", maxY - minY);

    // TODO: binary search when multiple xs
    main.selectAll("." + $SHAPE.shapes).selectAll("." + $SHAPE.shape).filter(function (d) {
      _newArrowCheck(this, _this);
      return isSelectable == null ? void 0 : isSelectable.bind($$.api)(d);
    }.bind(this)).each(function (d, i) {
      const shape = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this),
        isSelected = shape.classed($SELECT.SELECTED),
        isIncluded = shape.classed($DRAG.INCLUDED);
      let isWithin = !1,
        toggle;
      if (shape.classed($CIRCLE.circle)) {
        const x = +shape.attr("cx") * 1,
          y = +shape.attr("cy") * 1;
        toggle = $$.togglePoint;
        isWithin = minX < x && x < maxX && minY < y && y < maxY;
      } else if (shape.classed($BAR.bar)) {
        const _getPathBox = getPathBox(this),
          x = _getPathBox.x,
          y = _getPathBox.y,
          width = _getPathBox.width,
          height = _getPathBox.height;
        toggle = $$.togglePath;
        isWithin = !(maxX < x || x + width < minX) && !(maxY < y || y + height < minY);
      } else {
        // line/area selection not supported yet
        return;
      }

      // @ts-ignore
      if (isWithin ^ isIncluded) {
        shape.classed($DRAG.INCLUDED, !isIncluded);
        // TODO: included/unincluded callback here
        shape.classed($SELECT.SELECTED, !isSelected);
        toggle.call($$, !isSelected, shape, d, i);
      }
    });
  },
  /**
   * Called when the drag starts.
   * Adds and Shows the drag area.
   * @private
   * @param {object} mouse Object
   */
  dragstart: function dragstart(mouse) {
    const $$ = this,
      config = $$.config,
      state = $$.state,
      main = $$.$el.main;
    if ($$.hasArcType() || !config.data_selection_enabled) {
      return;
    }
    state.dragStart = mouse;
    main.select("." + $COMMON.chart).append("rect").attr("class", $DRAG.dragarea).style("opacity", "0.1");
    $$.setDragStatus(!0);
  },
  /**
   * Called when the drag finishes.
   * Removes the drag area.
   * @private
   */
  dragend: function dragend() {
    const $$ = this,
      config = $$.config,
      main = $$.$el.main,
      $T = $$.$T;
    if ($$.hasArcType() || !config.data_selection_enabled) {
      // do nothing if not selectable
      return;
    }
    $T(main.select("." + $DRAG.dragarea)).style("opacity", "0").remove();
    main.selectAll("." + $SHAPE.shape).classed($DRAG.INCLUDED, !1);
    $$.setDragStatus(!1);
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/internals/selection.ts


function selection_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function selection_objectSpread(e) { for (var r = 1, t; r < arguments.length; r++) { t = null != arguments[r] ? arguments[r] : {}; r % 2 ? selection_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : selection_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var internals_selection = (selection_objectSpread(selection_objectSpread({}, drag), {}, {
  /**
   * Select a point
   * @param {object} target Target point
   * @param {object} d Data object
   * @param {number} i Index number
   * @private
   */
  selectPoint: function selectPoint(target, d, i) {
    var _this = this;
    const $$ = this,
      config = $$.config,
      main = $$.$el.main,
      $T = $$.$T,
      isRotated = config.axis_rotated,
      cx = (isRotated ? $$.circleY : $$.circleX).bind($$),
      cy = (isRotated ? $$.circleX : $$.circleY).bind($$),
      r = $$.pointSelectR.bind($$);
    callFn(config.data_onselected, $$.api, d, target.node());

    // add selected-circle on low layer g
    $T(main.select("." + $SELECT.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll("." + $SELECT.selectedCircle + "-" + i).data([d]).enter().append("circle").attr("class", function () {
      _newArrowCheck(this, _this);
      return $$.generateClass($SELECT.selectedCircle, i);
    }.bind(this)).attr("cx", cx).attr("cy", cy).attr("stroke", $$.color).attr("r", function (d2) {
      _newArrowCheck(this, _this);
      return $$.pointSelectR(d2) * 1.4;
    }.bind(this))).attr("r", r);
  },
  /**
   * Unelect a point
   * @param {object} target Target point
   * @param {object} d Data object
   * @param {number} i Index number
   * @private
   */
  unselectPoint: function unselectPoint(target, d, i) {
    const $$ = this,
      config = $$.config,
      main = $$.$el.main,
      $T = $$.$T;
    callFn(config.data_onunselected, $$.api, d, target == null ? void 0 : target.node());

    // remove selected-circle from low layer g
    $T(main.select("." + $SELECT.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll("." + $SELECT.selectedCircle + "-" + i)).attr("r", 0).remove();
  },
  /**
   * Toggles the selection of points
   * @param {boolean} selected whether or not to select.
   * @param {object} target Target object
   * @param {object} d Data object
   * @param {number} i Index number
   * @private
   */
  togglePoint: function togglePoint(selected, target, d, i) {
    const method = (selected ? "" : "un") + "selectPoint";
    this[method](target, d, i);
  },
  /**
   * Select a path
   * @param {object} target Target path
   * @param {object} d Data object
   * @private
   */
  selectPath: function selectPath(target, d) {
    const $$ = this,
      config = $$.config;
    callFn(config.data_onselected, $$.api, d, target.node());
    if (config.interaction_brighten) {
      target.style("filter", "brightness(1.25)");
    }
  },
  /**
   * Unelect a path
   * @private
   * @param {object} target Target path
   * @param {object} d Data object
   */
  unselectPath: function unselectPath(target, d) {
    const $$ = this,
      config = $$.config;
    callFn(config.data_onunselected, $$.api, d, target.node());
    if (config.interaction_brighten) {
      target.style("filter", null);
    }
  },
  /**
   * Toggles the selection of lines
   * @param {boolean} selected whether or not to select.
   * @param {object} target Target object
   * @param {object} d Data object
   * @param {number} i Index number
   * @private
   */
  togglePath: function togglePath(selected, target, d, i) {
    this[(selected ? "" : "un") + "selectPath"](target, d, i);
  },
  /**
   * Returns the toggle method of the target
   * @param {object} that shape
   * @param {object} d Data object
   * @returns {Function} toggle method
   * @private
   */
  getToggle: function getToggle(that, d) {
    var _this2 = this;
    const $$ = this;
    return that.nodeName === "path" ? $$.togglePath : $$.isStepType(d) ? function () {
      _newArrowCheck(this, _this2);
    }.bind(this) :
    // circle is hidden in step chart, so treat as within the click area
    $$.togglePoint;
  },
  /**
   * Toggles the selection of shapes
   * @param {object} that shape
   * @param {object} d Data object
   * @param {number} i Index number
   * @private
   */
  toggleShape: function toggleShape(that, d, i) {
    const $$ = this,
      config = $$.config,
      main = $$.$el.main;
    if (config.data_selection_enabled && config.data_selection_isselectable.bind($$.api)(d)) {
      const shape = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(that),
        isSelected = shape.classed($SELECT.SELECTED),
        toggle = $$.getToggle(that, d).bind($$);
      let toggledShape;
      if (!config.data_selection_multiple) {
        const focusOnly = $$.isPointFocusOnly == null ? void 0 : $$.isPointFocusOnly();
        let selector = "." + (focusOnly ? $SELECT.selectedCircles : $SHAPE.shapes);
        if (config.data_selection_grouped) {
          selector += $$.getTargetSelectorSuffix(d.id);
        }
        main.selectAll(selector).selectAll(focusOnly ? "." + $SELECT.selectedCircle : "." + $SHAPE.shape + "." + $SELECT.SELECTED).classed($SELECT.SELECTED, !1).each(function (d) {
          const shape = (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)(this);
          toggledShape = shape;
          toggle(!1, shape, d, d.index);
        });
      }
      if (!toggledShape || toggledShape.node() !== shape.node()) {
        shape.classed($SELECT.SELECTED, !isSelected);
        toggle(!isSelected, shape, d, i);
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/ChartInternal/interactions/subchart.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var interactions_subchart = ({
  /**
   * Initialize the brush.
   * @private
   */
  initBrush: function initBrush() {
    var _this = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      subchart = $$.$el.subchart,
      state = $$.state,
      isRotated = config.axis_rotated,
      height = config.subchart_size_height;
    let lastDomain, lastSelection, timeout;
    // set the brush
    $$.brush = (isRotated ? (0,external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_.brushY)() : (0,external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_.brushX)()).handleSize(5);

    // bind brush event
    $$.brush.on("start brush end", function (event) {
      var _this2 = this;
      _newArrowCheck(this, _this);
      const selection = event.selection,
        sourceEvent = event.sourceEvent,
        target = event.target,
        type = event.type;
      if (type === "start") {
        $$.state.inputType === "touch" && $$.hideTooltip();
        lastSelection = sourceEvent ? selection : null;
        // sourceEvent && (state.domain = null);
      }

      // if (type === "brush") {
      if (/(start|brush)/.test(type)) {
        var _lastSelection;
        // when brush selection updates happens on one edge, update only chainging edge and
        // is only for adjustment of given domain range to be used to return current domain range.
        type === "brush" && sourceEvent && state.domain && ((_lastSelection = lastSelection) == null ? void 0 : _lastSelection.forEach(function (v, i) {
          _newArrowCheck(this, _this2);
          if (v !== selection[i]) {
            state.domain[i] = scale.x.orgDomain()[i];
          }
        }.bind(this)));
        $$.redrawForBrush(type !== "start");
      }
      if (type === "end") {
        lastDomain = scale.x.orgDomain();
      }

      // handle brush's handle position & visibility
      if (target != null && target.handle) {
        if (selection === null) {
          $$.brush.handle.attr("display", "none");
        } else {
          $$.brush.handle.attr("display", null).attr("transform", function (d, i) {
            _newArrowCheck(this, _this2);
            const pos = [selection[i], height / 2];
            return "translate(" + (isRotated ? pos.reverse() : pos) + ")";
          }.bind(this));
        }
      }
    }.bind(this));
    $$.brush.updateResize = function () {
      var _this3 = this;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(function () {
        _newArrowCheck(this, _this3);
        const selection = this.getSelection();
        lastDomain && (0,external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_.brushSelection)(selection.node()) && this.move(selection, lastDomain.map(scale.subX.orgScale()));
      }.bind(this), 0);
    };
    $$.brush.update = function () {
      var _this4 = this;
      const extent = this.extent()();
      if (extent[1].filter(function (v) {
        _newArrowCheck(this, _this4);
        return isNaN(v);
      }.bind(this)).length === 0) {
        var _subchart$main;
        (_subchart$main = subchart.main) == null || _subchart$main.select("." + classes.brush).call(this);
      }
      return this;
    };

    // set the brush extent
    $$.brush.scale = function (scale) {
      var _this5 = this;
      const h = config.subchart_size_height;
      let extent = $$.getExtent();
      if (!extent && scale.range) {
        extent = [[0, 0], [scale.range()[1], h]];
      } else if (isArray(extent)) {
        extent = extent.map(function (v, i) {
          _newArrowCheck(this, _this5);
          return [v, i > 0 ? h : i];
        }.bind(this));
      }

      // [[x0, y0], [x1, y1]], where [x0, y0] is the top-left corner and [x1, y1] is the bottom-right corner
      isRotated && extent[1].reverse();
      this.extent(extent);

      // when extent updates, brush selection also be re-applied
      // https://github.com/d3/d3/issues/2918
      this.update();
    };
    $$.brush.getSelection = function () {
      _newArrowCheck(this, _this);
      return (
        // @ts-ignore
        subchart.main ? subchart.main.select("." + classes.brush) : (0,external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_.select)([])
      );
    }.bind(this);
  },
  /**
   * Initialize the subchart.
   * @private
   */
  initSubchart: function initSubchart() {
    var _this6 = this;
    const $$ = this,
      config = $$.config,
      _$$$state = $$.state,
      clip = _$$$state.clip,
      hasAxis = _$$$state.hasAxis,
      _$$$$el = $$.$el,
      defs = _$$$$el.defs,
      svg = _$$$$el.svg,
      subchart = _$$$$el.subchart,
      axis = _$$$$el.axis;
    if (!hasAxis) {
      return;
    }
    const visibility = config.subchart_show ? null : "hidden",
      clipId = clip.id + "-subchart",
      clipPath = $$.getClipPath(clipId);
    clip.idSubchart = clipId;
    $$.appendClip(defs, clipId);
    $$.initBrush();
    subchart.main = svg.append("g").classed(classes.subchart, !0).attr("transform", $$.getTranslate("context"));
    const main = subchart.main;
    main.style("visibility", visibility);

    // Define g for chart area
    main.append("g").attr("clip-path", clipPath).attr("class", classes.chart);

    // Define g for chart types area
    ["bar", "line", "bubble", "candlestick", "scatter"].forEach(function (v) {
      _newArrowCheck(this, _this6);
      const type = capitalize(/^(bubble|scatter)$/.test(v) ? "circle" : v);
      if ($$.hasType(v) || $$.hasTypeOf(type)) {
        const chart = main.select("." + classes.chart),
          chartClassName = classes["chart" + type + "s"];
        if (chart.select("." + chartClassName).empty()) {
          chart.append("g").attr("class", chartClassName);
        }
      }
    }.bind(this));

    // Add extent rect for Brush
    const brush = main.append("g").attr("clip-path", clipPath).attr("class", classes.brush).call($$.brush);
    config.subchart_showHandle && $$.addBrushHandle(brush);

    // ATTENTION: This must be called AFTER chart added
    // Add Axis
    axis.subX = main.append("g").attr("class", classes.axisX).attr("transform", $$.getTranslate("subX")).attr("clip-path", config.axis_rotated ? "" : clip.pathXAxis).style("visibility", config.subchart_axis_x_show ? visibility : "hidden");
  },
  /**
   * Add brush handle
   * Enabled when: subchart.showHandle=true
   * @param {d3Selection} brush Brush selection
   * @private
   */
  addBrushHandle: function addBrushHandle(brush) {
    var _this7 = this;
    const $$ = this,
      config = $$.config,
      isRotated = config.axis_rotated,
      initRange = config.subchart_init_range,
      path = isRotated ? ["M8.5 0 a6 6 0 0 0 -6 -6.5 H-2.5 a 6 6 0 0 0 -6 6.5 z m-5 -2 H-3.5 m7 -2 H-3.5z", "M8.5 0 a6 -6 0 0 1 -6 6.5 H-2.5 a 6 -6 0 0 1 -6 -6.5z m-5 2 H-3.5 m7 2 H-3.5z"] : ["M0 -8.5 A6 6 0 0 0 -6.5 -3.5 V2.5 A6 6 0 0 0 0 8.5 Z M-2 -3.5 V3.5 M-4 -3.5 V3.5z", "M0 -8.5 A6 6 0 0 1 6.5 -3.5 V2.5 A6 6 0 0 1 0 8.5 Z M2 -3.5 V3.5 M4 -3.5 V3.5z"];

    // brush handle shape's path

    $$.brush.handle = brush.selectAll(".handle--custom").data(isRotated ? [{
      type: "n"
    }, {
      type: "s"
    }] : [{
      type: "w"
    }, {
      type: "e"
    }]).enter().append("path").attr("class", "handle--custom").attr("cursor", (isRotated ? "ns" : "ew") + "-resize").attr("d", function (d) {
      _newArrowCheck(this, _this7);
      return path[+/[se]/.test(d.type)];
    }.bind(this)).attr("display", initRange ? null : "none");
  },
  /**
   * Update sub chart
   * @param {object} targets $$.data.targets
   * @private
   */
  updateTargetsForSubchart: function updateTargetsForSubchart(targets) {
    var _this8 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      main = $$.$el.subchart.main;
    if (config.subchart_show) {
      ["bar", "line", "bubble", "candlestick", "scatter"].filter(function (v) {
        _newArrowCheck(this, _this8);
        return $$.hasType(v) || $$.hasTypeOf(capitalize(v));
      }.bind(this)).forEach(function (v) {
        _newArrowCheck(this, _this8);
        const isPointType = /^(bubble|scatter)$/.test(v),
          name = capitalize(isPointType ? "circle" : v),
          chartClass = $$.getChartClass(name, !0),
          shapeClass = $$.getClass(isPointType ? "circles" : v + "s", !0),
          shapeChart = main.select("." + classes["chart" + (name + "s")]);
        if (isPointType) {
          const circle = shapeChart.selectAll("." + classes.circles).data(targets.filter($$["is" + capitalize(v) + "Type"].bind($$))).attr("class", shapeClass);
          circle.exit().remove();
          circle.enter().append("g").attr("class", shapeClass);
        } else {
          const shapeUpdate = shapeChart.selectAll("." + classes["chart" + name]).attr("class", chartClass).data(targets.filter($$["is" + name + "Type"].bind($$))),
            shapeEnter = shapeUpdate.enter().append("g").style("opacity", "0").attr("class", chartClass).append("g").attr("class", shapeClass);
          shapeUpdate.exit().remove();

          // Area
          v === "line" && $$.hasTypeOf("Area") && shapeEnter.append("g").attr("class", $$.getClass("areas", !0));
        }
      }.bind(this));

      // -- Brush --//
      main.selectAll("." + classes.brush + " rect").attr(config.axis_rotated ? "width" : "height", config.axis_rotated ? state.width2 : state.height2);
    }
  },
  /**
   * Redraw subchart.
   * @private
   * @param {boolean} withSubchart whether or not to show subchart
   * @param {number} duration duration
   * @param {object} shape Shape's info
   */
  redrawSubchart: function redrawSubchart(withSubchart, duration, shape) {
    var _this9 = this;
    const $$ = this,
      config = $$.config,
      main = $$.$el.subchart.main,
      state = $$.state,
      withTransition = !!duration;
    main.style("visibility", config.subchart_show ? null : "hidden");

    // subchart
    if (config.subchart_show) {
      var _state$event;
      // reflect main chart to extent on subchart if zoomed
      if (((_state$event = state.event) == null ? void 0 : _state$event.type) === "zoom") {
        $$.brush.update();
      }

      // update subchart elements if needed
      if (withSubchart) {
        const initRange = config.subchart_init_range;

        // extent rect
        brushEmpty($$) || $$.brush.update();
        Object.keys(shape.type).forEach(function (v) {
          _newArrowCheck(this, _this9);
          const name = capitalize(v),
            drawFn = $$["generateDraw" + name](shape.indices[v], !0);
          // call shape's update & redraw method
          $$["update" + name](withTransition, !0);
          $$["redraw" + name](drawFn, withTransition, !0);
        }.bind(this));
        if ($$.hasType("bubble") || $$.hasType("scatter")) {
          const cx = shape.pos.cx,
            cy = $$.updateCircleY(!0);
          $$.updateCircle(!0);
          $$.redrawCircle(cx, cy, withTransition, undefined, !0);
        }
        if (!state.rendered && initRange) {
          state.domain = initRange;
          $$.brush.move($$.brush.getSelection(), initRange.map($$.scale.x));
        }
      }
    }
  },
  /**
   * Redraw the brush.
   * @param {boolean} [callCallbck=true] Call 'onbrush' callback or not.
   * @private
   */
  redrawForBrush: function redrawForBrush(callCallbck) {
    var _state$domain;
    if (callCallbck === void 0) {
      callCallbck = !0;
    }
    const $$ = this,
      _$$$config = $$.config,
      onBrush = _$$$config.subchart_onbrush,
      withY = _$$$config.zoom_rescale,
      scale = $$.scale,
      state = $$.state;
    $$.redraw({
      withTransition: !1,
      withY: withY,
      withSubchart: !1,
      withUpdateXDomain: !0,
      withDimension: !1
    });
    callCallbck && state.rendered && onBrush.bind($$.api)((_state$domain = state.domain) != null ? _state$domain : scale.x.orgDomain());
  },
  /**
   * Transform context
   * @param {boolean} withTransition indicates transition is enabled
   * @param {object} transitions The return value of the generateTransitions method of Axis.
   * @private
   */
  transformContext: function transformContext(withTransition, transitions) {
    const $$ = this,
      subchart = $$.$el.subchart,
      $T = $$.$T,
      subXAxis = transitions != null && transitions.axisSubX ? transitions.axisSubX : $T(subchart.main.select("." + classes.axisX), withTransition);
    subchart.main.attr("transform", $$.getTranslate("context"));
    subXAxis.attr("transform", $$.getTranslate("subX"));
  },
  /**
   * Get extent value
   * @returns {Array} default extent
   * @private
   */
  getExtent: function getExtent() {
    var _this10 = this;
    const $$ = this,
      config = $$.config,
      scale = $$.scale;
    let extent = config.axis_x_extent;
    if (extent) {
      if (isFunction(extent)) {
        extent = extent.bind($$.api)($$.getXDomain($$.data.targets), scale.subX);
      } else if ($$.axis.isTimeSeries() && extent.every(isNaN)) {
        const fn = parseDate.bind($$);
        extent = extent.map(function (v) {
          _newArrowCheck(this, _this10);
          return scale.subX(fn(v));
        }.bind(this));
      }
    }
    return extent;
  }
});
;// CONCATENATED MODULE: ./src/ChartInternal/interactions/zoom.ts

/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var interactions_zoom = ({
  /**
   * Initialize zoom.
   * @private
   */
  initZoom: function initZoom() {
    const $$ = this;
    $$.scale.zoom = null;
    $$.generateZoom();
    $$.initZoomBehaviour();
  },
  /**
   * Bind zoom event
   * @param {boolean} bind Weather bind or unbound
   * @private
   */
  bindZoomEvent: function bindZoomEvent(bind) {
    if (bind === void 0) {
      bind = !0;
    }
    const $$ = this,
      config = $$.config,
      zoomEnabled = config.zoom_enabled;
    if (zoomEnabled && bind) {
      // Do not bind zoom event when subchart is shown
      config.subchart_show || $$.bindZoomOnEventRect();
    } else if (bind === !1) {
      $$.api.unzoom();
      $$.unbindZoomEvent();
    }
  },
  /**
   * Generate zoom
   * @private
   */
  generateZoom: function generateZoom() {
    var _this = this;
    const $$ = this,
      config = $$.config,
      org = $$.org,
      scale = $$.scale,
      zoom = (0,external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoom)().duration(0).on("start", $$.onZoomStart.bind($$)).on("zoom", $$.onZoom.bind($$)).on("end", $$.onZoomEnd.bind($$));
    // get zoom extent
    // @ts-ignore
    zoom.orgScaleExtent = function () {
      _newArrowCheck(this, _this);
      const extent = config.zoom_extent || [1, 10];
      return [extent[0], Math.max($$.getMaxDataCount() / extent[1], extent[1])];
    }.bind(this);

    // @ts-ignore
    zoom.updateScaleExtent = function () {
      const ratio = diffDomain($$.scale.x.orgDomain()) / diffDomain($$.getZoomDomain()),
        extent = this.orgScaleExtent();
      this.scaleExtent([extent[0] * ratio, extent[1] * ratio]);
      return this;
    };

    /**
     * Update scale according zoom transform value
     * @param {object} transform transform object
     * @param {boolean} correctTransform if the d3 transform should be updated after rescaling
     * @private
     */
    // @ts-ignore
    zoom.updateTransformScale = function (transform, correctTransform) {
      var _org$xScale;
      _newArrowCheck(this, _this);
      const isRotated = config.axis_rotated;

      // in case of resize, update range of orgXScale
      (_org$xScale = org.xScale) == null || _org$xScale.range(scale.x.range());

      // rescale from the original scale
      const newScale = transform[isRotated ? "rescaleY" : "rescaleX"](org.xScale || scale.x),
        domain = $$.trimXDomain(newScale.domain()),
        rescale = config.zoom_rescale;
      newScale.domain(domain, org.xDomain);

      // prevent chart from panning off the edge and feeling "stuck"
      // https://github.com/naver/billboard.js/issues/2588
      if (correctTransform) {
        const t = newScale(scale.x.domain()[0]),
          tX = isRotated ? transform.x : t,
          tY = isRotated ? t : transform.y;
        $$.$el.eventRect.property("__zoom", external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoomIdentity.translate(tX, tY).scale(transform.k));
      }
      if (!$$.state.xTickOffset) {
        $$.state.xTickOffset = $$.axis.x.tickOffset();
      }
      scale.zoom = $$.getCustomizedXScale(newScale);
      $$.axis.x.scale(scale.zoom);
      if (rescale) {
        // copy current initial x scale in case of rescale option is used
        org.xScale || (org.xScale = scale.x.copy());
        scale.x.domain(domain);
      }
    }.bind(this);

    /**
     * Get zoom domain
     * @returns {Array} zoom domain
     * @private
     */
    // @ts-ignore
    zoom.getDomain = function () {
      _newArrowCheck(this, _this);
      const domain = scale[scale.zoom ? "zoom" : "subX"].domain(),
        isCategorized = $$.axis.isCategorized();
      if (isCategorized) {
        domain[1] -= 2;
      }
      return domain;
    }.bind(this);
    $$.zoom = zoom;
  },
  /**
   * 'start' event listener
   * @param {object} event Event object
   * @private
   */
  onZoomStart: function onZoomStart(event) {
    const $$ = this,
      sourceEvent = event.sourceEvent;
    if (sourceEvent) {
      $$.zoom.startEvent = sourceEvent;
      $$.state.zooming = !0;
      callFn($$.config.zoom_onzoomstart, $$.api, event);
    }
  },
  /**
   * 'zoom' event listener
   * @param {object} event Event object
   * @private
   */
  onZoom: function onZoom(event) {
    var _this2 = this,
      _$$$state$domain;
    const $$ = this,
      config = $$.config,
      scale = $$.scale,
      state = $$.state,
      org = $$.org,
      sourceEvent = event.sourceEvent,
      isUnZoom = (event == null ? void 0 : event.transform) === external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoomIdentity;
    if (!config.zoom_enabled || $$.filterTargetsToShow($$.data.targets).length === 0 || !scale.zoom && (sourceEvent == null ? void 0 : sourceEvent.type.indexOf("touch")) > -1 && (sourceEvent == null ? void 0 : sourceEvent.touches.length) === 1) {
      return;
    }
    if (event.sourceEvent) {
      state.zooming = !0;
      state.domain = undefined;
    }
    const isMousemove = (sourceEvent == null ? void 0 : sourceEvent.type) === "mousemove",
      isZoomOut = (sourceEvent == null ? void 0 : sourceEvent.wheelDelta) < 0,
      transform = event.transform;
    if (!isMousemove && isZoomOut && scale.x.domain().every(function (v, i) {
      _newArrowCheck(this, _this2);
      return v !== org.xDomain[i];
    }.bind(this))) {
      scale.x.domain(org.xDomain);
    }
    $$.zoom.updateTransformScale(transform, config.zoom_type === "wheel" && sourceEvent);

    // do zoom transiton when:
    // - zoom type 'drag'
    // - when .unzoom() is called (event.transform === d3ZoomIdentity)
    const doTransition = config.transition_duration > 0 && !config.subchart_show && (state.dragging || isUnZoom || !event.sourceEvent);
    $$.redraw({
      withTransition: doTransition,
      withY: config.zoom_rescale,
      withSubchart: !1,
      withEventRect: !1,
      withDimension: !1
    });
    $$.state.cancelClick = isMousemove;

    // do not call event cb when is .unzoom() is called
    isUnZoom || callFn(config.zoom_onzoom, $$.api, (_$$$state$domain = $$.state.domain) != null ? _$$$state$domain : $$.zoom.getDomain());
  },
  /**
   * 'end' event listener
   * @param {object} event Event object
   * @private
   */
  onZoomEnd: function onZoomEnd(event) {
    var _startEvent, _$$$state$domain2;
    const $$ = this,
      config = $$.config,
      state = $$.state;
    let startEvent = $$.zoom.startEvent,
      e = event == null ? void 0 : event.sourceEvent;
    const isUnZoom = (event == null ? void 0 : event.transform) === external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_.zoomIdentity;
    if (((_startEvent = startEvent) == null ? void 0 : _startEvent.type.indexOf("touch")) > -1) {
      var _e;
      startEvent = startEvent.changedTouches[0];
      e = (_e = e) == null || (_e = _e.changedTouches) == null ? void 0 : _e[0];
    }

    // if click, do nothing. otherwise, click interaction will be canceled.
    if (config.zoom_type === "drag" && e && startEvent.clientX === e.clientX && startEvent.clientY === e.clientY) {
      return;
    }
    $$.redrawEventRect();
    $$.updateZoom();
    state.zooming = !1;

    // do not call event cb when is .unzoom() is called
    !isUnZoom && (e || state.dragging) && callFn(config.zoom_onzoomend, $$.api, (_$$$state$domain2 = $$.state.domain) != null ? _$$$state$domain2 : $$.zoom.getDomain());
  },
  /**
   * Update zoom
   * @param {boolean} force Force unzoom
   * @private
   */
  updateZoom: function updateZoom(force) {
    const $$ = this,
      _$$$scale = $$.scale,
      subX = _$$$scale.subX,
      x = _$$$scale.x,
      zoom = _$$$scale.zoom;
    if (zoom) {
      const zoomDomain = zoom.domain(),
        xDomain = subX.domain(),
        delta = .015,
        isfullyShown = $$.config.axis_x_inverted ? (zoomDomain[0] >= xDomain[0] || zoomDomain[0] + delta >= xDomain[0]) && (xDomain[1] >= zoomDomain[1] || xDomain[1] >= zoomDomain[1] + delta) : (zoomDomain[0] <= xDomain[0] || zoomDomain[0] - delta <= xDomain[0]) && (xDomain[1] <= zoomDomain[1] || xDomain[1] <= zoomDomain[1] - delta); // arbitrary value
      // check if the zoomed chart is fully shown, then reset scale when zoom is out as initial
      if (force || isfullyShown) {
        $$.axis.x.scale(subX);
        x.domain(subX.orgDomain());
        $$.scale.zoom = null;
      }
    }
  },
  /**
   * Attach zoom event on <rect>
   * @private
   */
  bindZoomOnEventRect: function bindZoomOnEventRect() {
    var _this3 = this;
    const $$ = this,
      config = $$.config,
      eventRect = $$.$el.eventRect,
      behaviour = config.zoom_type === "drag" ? $$.zoomBehaviour : $$.zoom;
    // Since Chrome 89, wheel zoom not works properly
    // Applying the workaround: https://github.com/d3/d3-zoom/issues/231#issuecomment-802305692
    $$.$el.svg.on("wheel", function () {
      _newArrowCheck(this, _this3);
    }.bind(this));
    eventRect == null || eventRect.call(behaviour).on("dblclick.zoom", null);
  },
  /**
   * Initialize the drag behaviour used for zooming.
   * @private
   */
  initZoomBehaviour: function initZoomBehaviour() {
    var _this4 = this;
    const $$ = this,
      config = $$.config,
      state = $$.state,
      isRotated = config.axis_rotated;
    let start = 0,
      end = 0,
      zoomRect;
    const prop = {
      axis: isRotated ? "y" : "x",
      attr: isRotated ? "height" : "width",
      index: isRotated ? 1 : 0
    };
    $$.zoomBehaviour = (0,external_commonjs_d3_drag_commonjs2_d3_drag_amd_d3_drag_root_d3_.drag)().clickDistance(4).on("start", function (event) {
      state.event = event;
      $$.setDragStatus(!0);
      $$.unselectRect();
      if (!zoomRect) {
        zoomRect = $$.$el.main.append("rect").attr("clip-path", state.clip.path).attr("class", $ZOOM.zoomBrush).attr("width", isRotated ? state.width : 0).attr("height", isRotated ? 0 : state.height);
      }
      start = getPointer(event, this)[prop.index];
      end = start;
      zoomRect.attr(prop.axis, start).attr(prop.attr, 0);
      $$.onZoomStart(event);
    }).on("drag", function (event) {
      end = getPointer(event, this)[prop.index];
      zoomRect.attr(prop.axis, Math.min(start, end)).attr(prop.attr, Math.abs(end - start));
    }).on("end", function (event) {
      var _this5 = this;
      _newArrowCheck(this, _this4);
      const scale = $$.scale.zoom || $$.scale.x;
      state.event = event;
      zoomRect.attr(prop.axis, 0).attr(prop.attr, 0);
      if (start > end) {
        var _ref = [end, start];
        start = _ref[0];
        end = _ref[1];
      }
      if (start < 0) {
        end += Math.abs(start);
        start = 0;
      }
      if (start !== end) {
        $$.api.zoom([start, end].map(function (v) {
          _newArrowCheck(this, _this5);
          return scale.invert(v);
        }.bind(this)));
      }
      $$.setDragStatus(!1);
    }.bind(this));
  },
  setZoomResetButton: function setZoomResetButton() {
    const $$ = this,
      config = $$.config,
      $el = $$.$el,
      resetButton = config.zoom_resetButton;
    if (resetButton && config.zoom_type === "drag") {
      if (!$el.zoomResetBtn) {
        $el.zoomResetBtn = $$.$el.chart.append("div").classed($COMMON.button, !0).append("span").on("click", function () {
          isFunction(resetButton.onclick) && resetButton.onclick.bind($$.api)(this);
          $$.api.unzoom();
        }).classed($ZOOM.buttonZoomReset, !0).text(resetButton.text || "Reset Zoom");
      } else {
        $el.zoomResetBtn.style("display", null);
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/config/Options/data/selection.ts

var selection_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * data.selection config options
 */
/* harmony default export */ var data_selection = ({
  /**
   * Set data selection enabled<br><br>
   * If this option is set true, we can select the data points and get/set its state of selection by API (e.g. select, unselect, selected).
   *  - **NOTE:** for ESM imports, needs to import 'selection' exports and instantiate it by calling `selection()`.
   *    - `enabled: selection()`
   * @name data․selection․enabled
   * @memberof Options
   * @type {boolean}
   * @default false
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataSelection)
   * @example
   * data: {
   *    selection: {
   *       enabled: true
   *    }
   * }
   * @example
   * // importing ESM
   * import bb, {selection} from "billboard.js";
   *
   * data: {
   *    selection: {
   *       enabled: selection(),
   *       ...
   *    }
   * }
   */
  data_selection_enabled: !1,
  /**
   * Set grouped selection enabled.<br><br>
   * If this option set true, multiple data points that have same x value will be selected by one selection.
   * @name data․selection․grouped
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * data: {
   *    selection: {
   *       grouped: true
   *    }
   * }
   */
  data_selection_grouped: !1,
  /**
   * Set a callback for each data point to determine if it's selectable or not.<br><br>
   * The callback will receive d as an argument and it has some parameters like id, value, index. This callback should return boolean.
   * @name data․selection․isselectable
   * @memberof Options
   * @type {Function}
   * @default function() { return true; }
   * @example
   * data: {
   *    selection: {
   *       isselectable: function(d) { ... }
   *    }
   * }
   */
  data_selection_isselectable: function data_selection_isselectable() {
    _newArrowCheck(this, selection_this);
    return !0;
  }.bind(undefined),
  /**
   * Set multiple data points selection enabled.<br><br>
   * If this option set true, multile data points can have the selected state at the same time. If false set, only one data point can have the selected state and the others will be unselected when the new data point is selected.
   * @name data․selection․multiple
   * @memberof Options
   * @type {boolean}
   * @default true
   * @example
   * data: {
   *    selection: {
   *       multiple: false
   *    }
   * }
   */
  data_selection_multiple: !0,
  /**
   * Enable to select data points by dragging.
   * If this option set true, data points can be selected by dragging.
   * - **NOTE:** If this option set true, scrolling on the chart will be disabled because dragging event will handle the event.
   * @name data․selection․draggable
   * @memberof Options
   * @type {boolean}
   * @default false
   * @example
   * data: {
   *    selection: {
   *       draggable: true
   *   }
   * }
   */
  data_selection_draggable: !1,
  /**
   * Set a callback for on data selection.
   * @name data․onselected
   * @memberof Options
   * @type {Function}
   * @default function() {}
   * @example
   * data: {
   *     onselected: function(d, element) {
   *        // d - ex) {x: 4, value: 150, id: "data1", index: 4, name: "data1"}
   *        // element - <circle>
   *        ...
   *    }
   * }
   */
  data_onselected: function data_onselected() {
    _newArrowCheck(this, selection_this);
  }.bind(undefined),
  /**
   * Set a callback for on data un-selection.
   * @name data․onunselected
   * @memberof Options
   * @type {Function}
   * @default function() {}
   * @example
   * data: {
   *     onunselected: function(d, element) {
   *        // d - ex) {x: 4, value: 150, id: "data1", index: 4, name: "data1"}
   *        // element - <circle>
   *        ...
   *    }
   * }
   */
  data_onunselected: function data_onunselected() {
    _newArrowCheck(this, selection_this);
  }.bind(undefined)
});
;// CONCATENATED MODULE: ./src/config/Options/interaction/subchart.ts

var subchart_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * x Axis config options
 */
/* harmony default export */ var interaction_subchart = ({
  /**
   * Set subchart options.
   * - **NOTE:** Not supported for `bubble`, `scatter` and non-Axis based(pie, donut, gauge, radar) types.
   * @name subchart
   * @memberof Options
   * @type {object}
   * @property {object} subchart Subchart object
   * @property {boolean} [subchart.show=false] Show sub chart on the bottom of the chart.
   *  - **NOTE:** for ESM imports, needs to import 'subchart' exports and instantiate it by calling `subchart()`.
   *    - `show: subchart()`
   * @property {boolean} [subchart.showHandle=false] Show sub chart's handle.
   * @property {boolean} [subchart.axis.x.show=true] Show or hide x axis.
   * @property {boolean} [subchart.axis.x.tick.show=true] Show or hide x axis tick line.
   * @property {Function|string} [subchart.axis.x.tick.format] Use custom format for x axis ticks - see [axis.x.tick.format](#.axis․x․tick․format) for details.
   * @property {boolean} [subchart.axis.x.tick.text.show=true] Show or hide x axis tick text.
   * @property {Array} [subchart.init.range] Set initial selection domain range.
   * @property {number} [subchart.size.height] Change the height of the subchart.
   * @property {Function} [subchart.onbrush] Set callback for brush event.<br>
   *  Specified function receives the current zoomed x domain.
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Interaction.SubChart)
   * @example
   *  subchart: {
   *      show: true,
   *      showHandle: true,
   *      size: {
   *          height: 20
   *      },
   *      init: {
   *          // specify initial range domain selection
   *          range: [1, 2]
   *      },
   *      axis: {
   *      	x: {
   *      	  show: true,
   *      	    tick: {
   *      	      show: true,
   *      	      format: (x) => d3Format(".1f")(x)
   *      	      text: {
   *      	        show: false
   *      	      }
   *      	    }
   *      	}
   *      },
   *      onbrush: function(domain) { ... }
   *  }
   * @example
   * // importing ESM
   * import bb, {subchart} from "billboard.js";
   *
   * subchart: {
   *      show: subchart(),
   *      ...
   * }
   */
  subchart_show: !1,
  subchart_showHandle: !1,
  subchart_size_height: 60,
  subchart_axis_x_show: !0,
  subchart_axis_x_tick_show: !0,
  subchart_axis_x_tick_format: undefined,
  subchart_axis_x_tick_text_show: !0,
  subchart_init_range: undefined,
  subchart_onbrush: function subchart_onbrush() {
    _newArrowCheck(this, subchart_this);
  }.bind(undefined)
});
;// CONCATENATED MODULE: ./src/config/Options/interaction/zoom.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * zoom config options
 */
/* harmony default export */ var interaction_zoom = ({
  /**
   * Set zoom options
   * @name zoom
   * @memberof Options
   * @type {object}
   * @property {object} zoom Zoom object
   * @property {boolean} [zoom.enabled=false] Enable zooming.
   *  - **NOTE:** for ESM imports, needs to import 'zoom' exports and instantiate it by calling `zoom()`.
   *    - `enabled: zoom()`
   * @property {string} [zoom.type='wheel'] Set zoom interaction type.
   *  - **Available types:**
   *    - wheel
   *    - drag
   * @property {boolean} [zoom.rescale=false] Enable to rescale after zooming.<br>
   *  If true set, y domain will be updated according to the zoomed region.
   * @property {Array} [zoom.extent=[1, 10]] Change zoom extent.
   * @property {number|Date} [zoom.x.min] Set x Axis minimum zoom range
   * @property {number|Date} [zoom.x.max] Set x Axis maximum zoom range
   * @property {Function} [zoom.onzoomstart=undefined] Set callback that is called when zooming starts.<br>
   *  Specified function receives the zoom event.
   * @property {Function} [zoom.onzoom=undefined] Set callback that is called when the chart is zooming.<br>
   *  Specified function receives the zoomed domain.
   * @property {Function} [zoom.onzoomend=undefined] Set callback that is called when zooming ends.<br>
   *  Specified function receives the zoomed domain.
   * @property {boolean|object} [zoom.resetButton=true] Set to display zoom reset button for 'drag' type zoom
   * @property {Function} [zoom.resetButton.onclick] Set callback when clicks the reset button. The callback will receive reset button element reference as argument.
   * @property {string} [zoom.resetButton.text='Reset Zoom'] Text value for zoom reset button.
   * @see [Demo:zoom](https://naver.github.io/billboard.js/demo/#Interaction.Zoom)
   * @see [Demo:drag zoom](https://naver.github.io/billboard.js/demo/#Interaction.DragZoom)
   * @example
   *  zoom: {
   *      enabled: true,
   *      type: "drag",
   *      rescale: true,
   *      extent: [1, 100]  // enable more zooming
   *      x: {
   *          min: -1,  // set min range
   *          max: 10  // set max range
   *      },
   *      onzoomstart: function(event) { ... },
   *      onzoom: function(domain) { ... },
   *      onzoomend: function(domain) { ... },
   *
   *      // show reset button when is zoomed-in
   *      resetButton: true,
   *
   *      resetButton: {
   *          // onclick callback when reset button is clicked
   *          onclick: function(button) {
   *            button; // Reset button element reference
   *            ...
   *          },
   *
   *          // customized text value for reset zoom button
   *          text: "Unzoom"
   *      }
   *  }
   * @example
   * // importing ESM
   * import bb, {zoom} from "billboard.js";
   *
   * zoom: {
   *      enabled: zoom(),
   *      ...
   * }
   */
  zoom_enabled: !1,
  zoom_type: "wheel",
  zoom_extent: undefined,
  zoom_privileged: !1,
  zoom_rescale: !1,
  zoom_onzoom: undefined,
  zoom_onzoomstart: undefined,
  zoom_onzoomend: undefined,
  zoom_resetButton: !0,
  zoom_x_min: undefined,
  zoom_x_max: undefined
});
;// CONCATENATED MODULE: ./src/config/resolver/interaction.ts

var interaction_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */





// Chart




// ChartInternal




// Axis based options




let _selectionModule = function selectionModule() {
    var _this2 = this;
    _newArrowCheck(this, interaction_this);
    extend(ChartInternal.prototype, internals_selection);
    extend(Chart.prototype, selection);
    Options.setOptions([data_selection]);
    return (_selectionModule = function () {
      _newArrowCheck(this, _this2);
      return !0;
    }.bind(this))();
  }.bind(undefined),
  subchartModule = function () {
    var _this3 = this;
    _newArrowCheck(this, interaction_this);
    extend(ChartInternal.prototype, interactions_subchart);
    extend(Chart.prototype, api_subchart);
    Options.setOptions([interaction_subchart]);
    return (subchartModule = function () {
      _newArrowCheck(this, _this3);
      return !0;
    }.bind(this))();
  }.bind(undefined),
  zoomModule = function () {
    var _this4 = this;
    _newArrowCheck(this, interaction_this);
    extend(ChartInternal.prototype, interactions_zoom);
    extend(Chart.prototype, api_zoom);
    Options.setOptions([interaction_zoom]);
    return (zoomModule = function () {
      _newArrowCheck(this, _this4);
      return !0;
    }.bind(this))();
  }.bind(undefined);
;// CONCATENATED MODULE: ./src/core.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard project is licensed under the MIT license
 */



// eslint-disable-next-line no-use-before-define

let _defaults = {};

/**
 * @namespace bb
 * @version 3.10.2
 */
const bb = {
  /**
   * Version information
   * @property {string} version version
   * @example
   *    bb.version;  // "1.0.0"
   * @memberof bb
   */
  version: "3.10.2",
  /**
   * Generate chart
   * - **NOTE:** Bear in mind for the possiblity of ***throwing an error***, during the generation when:
   *   - Unused option value is given.
   *     - ex) For `data.type="pie"` option, setting 'axis' option can cause unexpected generation error.
   *   - Insufficient value is given for certain option used.
   *     - ex) `data: { x: "x", columns: [["x"], ["data1", 30, 200, 100]] }`
   * @param {Options} config chart options
   * @memberof bb
   * @returns {Chart}
   * @see {@link Options} for different generation options
   * @see {@link Chart} for different methods API
   * @example
   *  <!-- chart holder -->
   * <div id="LineChart"></div>
   * @example
   *  // Generate chart with options
   *  var chart = bb.generate({
   *      "bindto": "#LineChart"
   *      "data": {
   *          "columns": [
   *              ["data1", 30, 200, 100, 400, 150, 250],
   *              ["data2", 50, 20, 10, 40, 15, 25]
   *           ],
   *          "type": "line"
   *      }
   *  });
   *
   *  // call some API
   *  // ex) get the data of 'data1'
   *  chart.data("data1");
   * @example
   * // Generate chart by importing ESM
   * // Import types to be used only, where this will make smaller bundle size.
   * import bb, {
   *   area,
   *   areaLineRange,
   *   areaSpline,
   *   areaSplineRange,
   *   areaStep,
   *   bar,
   *   bubble,
   *   donut,
   *   gauge,
   *   line,
   *   pie,
   *   polar,
   *   radar,
   *   scatter,
   *   spline,
   *   step
   * }
   *
   * bb.generate({
   *      "bindto": "#LineChart"
   *      "data": {
   *          "columns": [
   *              ["data1", 30, 200, 100, 400, 150, 250],
   *              ["data2", 50, 20, 10, 40, 15, 25]
   *           ]
   *      },
   *      type: line(),
   *
   *      // or
   *      types: {
   *        data1: bar(),
   *        data2: step()
   *      }
   * });
   */
  generate: function generate(config) {
    const options = mergeObj({}, _defaults, config),
      inst = new Chart(options);
    inst.internal.charts = this.instance;
    this.instance.push(inst);
    return inst;
  },
  /**
   * Set or get global default options.
   * - **NOTE:**
   *   - The options values settings are valid within page context only.
   *   - If is called multiple times, will override the last value.
   * @param {Options} options chart options
   * @memberof bb
   * @returns {Options}
   * @see {@link Options}
   * @example
   * // Set same option value as for `.generate()`
   * bb.defaults({
   *   data: {
   *     type: "bar"
   *   }
   * });
   *
   * bb.defaults();  // {data:{type: "bar"}}
   *
   * // data.type defaults to 'bar'
   * var chart = bb.generate({ ... });
   */
  defaults: function defaults(options) {
    if (isObject(options)) {
      _defaults = options;
    }
    return _defaults;
  },
  /**
   * An array containing instance created
   * @property {Array} instance instance array
   * @example
   *  // generate charts
   *  var chart1 = bb.generate(...);
   *  var chart2 = bb.generate(...);
   *
   *  bb.instance;  // [ chart1, chart2, ... ]
   * @memberof bb
   */
  instance: [],
  /**
   * Namespace for plugins
   * @property {object} plugin plugin namespace
   * @example
   *  // Stanford diagram plugin
   *  bb.plugin.stanford;
   * @memberof bb
   */
  plugin: {}
};
;// CONCATENATED MODULE: ./src/index.ts

var src_this = undefined;
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard project is licensed under the MIT license
 */



// extends shape modules
Object.keys(resolver_shape_namespaceObject).forEach(function (v) {
  _newArrowCheck(this, src_this);
  return resolver_shape_namespaceObject[v]();
}.bind(undefined));

// extends interaction modules
Object.keys(resolver_interaction_namespaceObject).forEach(function (v) {
  _newArrowCheck(this, src_this);
  return resolver_interaction_namespaceObject[v]();
}.bind(undefined));

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});