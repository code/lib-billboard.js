(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3-time-format"), require("d3-selection"), require("d3-transition"), require("d3-brush"), require("d3-axis"), require("d3-scale"), require("d3-dsv"), require("d3-drag"), require("d3-zoom"), require("d3-ease"), require("d3-color"), require("d3-shape"), require("d3-interpolate"));
	else if(typeof define === 'function' && define.amd)
		define(["d3-time-format", "d3-selection", "d3-transition", "d3-brush", "d3-axis", "d3-scale", "d3-dsv", "d3-drag", "d3-zoom", "d3-ease", "d3-color", "d3-shape", "d3-interpolate"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("d3-time-format"), require("d3-selection"), require("d3-transition"), require("d3-brush"), require("d3-axis"), require("d3-scale"), require("d3-dsv"), require("d3-drag"), require("d3-zoom"), require("d3-ease"), require("d3-color"), require("d3-shape"), require("d3-interpolate")) : factory(root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__36__, __WEBPACK_EXTERNAL_MODULE__37__, __WEBPACK_EXTERNAL_MODULE__38__, __WEBPACK_EXTERNAL_MODULE__39__, __WEBPACK_EXTERNAL_MODULE__40__, __WEBPACK_EXTERNAL_MODULE__41__, __WEBPACK_EXTERNAL_MODULE__42__, __WEBPACK_EXTERNAL_MODULE__43__, __WEBPACK_EXTERNAL_MODULE__44__, __WEBPACK_EXTERNAL_MODULE__45__, __WEBPACK_EXTERNAL_MODULE__46__, __WEBPACK_EXTERNAL_MODULE__47__, __WEBPACK_EXTERNAL_MODULE__48__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(32);
module.exports = __webpack_require__(49);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {
/* global __resourceQuery WorkerGlobalScope self */

/* eslint prefer-destructuring: off */

var stripAnsi = __webpack_require__(3);

var socket = __webpack_require__(5);

var overlay = __webpack_require__(9);

var _require = __webpack_require__(15),
    log = _require.log,
    setLogLevel = _require.setLogLevel;

var sendMessage = __webpack_require__(17);

var reloadApp = __webpack_require__(18);

var createSocketUrl = __webpack_require__(21);

var status = {
  isUnloading: false,
  currentHash: ''
};
var options = {
  hot: false,
  hotReload: true,
  liveReload: false,
  initial: true,
  useWarningOverlay: false,
  useErrorOverlay: false,
  useProgress: false
};
var socketUrl = createSocketUrl(__resourceQuery);
self.addEventListener('beforeunload', function () {
  status.isUnloading = true;
});

if (typeof window !== 'undefined') {
  var qs = window.location.search.toLowerCase();
  options.hotReload = qs.indexOf('hotreload=false') === -1;
}

var onSocketMessage = {
  hot: function hot() {
    options.hot = true;
    log.info('[WDS] Hot Module Replacement enabled.');
  },
  liveReload: function liveReload() {
    options.liveReload = true;
    log.info('[WDS] Live Reloading enabled.');
  },
  invalid: function invalid() {
    log.info('[WDS] App updated. Recompiling...'); // fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    sendMessage('Invalid');
  },
  hash: function hash(_hash) {
    status.currentHash = _hash;
  },
  'still-ok': function stillOk() {
    log.info('[WDS] Nothing changed.');

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    sendMessage('StillOk');
  },
  'log-level': function logLevel(level) {
    var hotCtx = __webpack_require__(30);

    if (hotCtx.keys().indexOf('./log') !== -1) {
      hotCtx('./log').setLogLevel(level);
    }

    setLogLevel(level);
  },
  overlay: function overlay(value) {
    if (typeof document !== 'undefined') {
      if (typeof value === 'boolean') {
        options.useWarningOverlay = false;
        options.useErrorOverlay = value;
      } else if (value) {
        options.useWarningOverlay = value.warnings;
        options.useErrorOverlay = value.errors;
      }
    }
  },
  progress: function progress(_progress) {
    if (typeof document !== 'undefined') {
      options.useProgress = _progress;
    }
  },
  'progress-update': function progressUpdate(data) {
    if (options.useProgress) {
      log.info("[WDS] ".concat(data.percent, "% - ").concat(data.msg, "."));
    }

    sendMessage('Progress', data);
  },
  ok: function ok() {
    sendMessage('Ok');

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    if (options.initial) {
      return options.initial = false;
    } // eslint-disable-line no-return-assign


    reloadApp(options, status);
  },
  'content-changed': function contentChanged() {
    log.info('[WDS] Content base changed. Reloading...');
    self.location.reload();
  },
  warnings: function warnings(_warnings) {
    log.warn('[WDS] Warnings while compiling.');

    var strippedWarnings = _warnings.map(function (warning) {
      return stripAnsi(warning);
    });

    sendMessage('Warnings', strippedWarnings);

    for (var i = 0; i < strippedWarnings.length; i++) {
      log.warn(strippedWarnings[i]);
    }

    if (options.useWarningOverlay) {
      overlay.showMessage(_warnings);
    }

    if (options.initial) {
      return options.initial = false;
    } // eslint-disable-line no-return-assign


    reloadApp(options, status);
  },
  errors: function errors(_errors) {
    log.error('[WDS] Errors while compiling. Reload prevented.');

    var strippedErrors = _errors.map(function (error) {
      return stripAnsi(error);
    });

    sendMessage('Errors', strippedErrors);

    for (var i = 0; i < strippedErrors.length; i++) {
      log.error(strippedErrors[i]);
    }

    if (options.useErrorOverlay) {
      overlay.showMessage(_errors);
    }

    options.initial = false;
  },
  error: function error(_error) {
    log.error(_error);
  },
  close: function close() {
    log.error('[WDS] Disconnected!');
    sendMessage('Close');
  }
};
socket(socketUrl, onSocketMessage);
/* WEBPACK VAR INJECTION */}.call(this, "?http://localhost:8080"))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(4)();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_dev_server_client__) {
/* global __webpack_dev_server_client__ */

/* eslint-disable
  camelcase
*/
// this SockJSClient is here as a default fallback, in case inline mode
// is off or the client is not injected. This will be switched to
// WebsocketClient when it becomes the default
// important: the path to SockJSClient here is made to work in the 'client'
// directory, but is updated via the webpack compilation when compiled from
// the 'client-src' directory

var Client = typeof __webpack_dev_server_client__ !== 'undefined' ? __webpack_dev_server_client__ : // eslint-disable-next-line import/no-unresolved
__webpack_require__(6);
var retries = 0;
var client = null;

var socket = function initSocket(url, handlers) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    } // Try to reconnect.


    client = null; // After 10 retries stop trying, to prevent logspam.

    if (retries <= 10) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-mixed-operators, no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      setTimeout(function () {
        socket(url, handlers);
      }, retryInMs);
    }
  });
  client.onMessage(function (data) {
    var msg = JSON.parse(data);

    if (handlers[msg.type]) {
      handlers[msg.type](msg.data);
    }
  });
};

module.exports = socket;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable
  no-unused-vars
*/

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SockJS = __webpack_require__(7);

var BaseClient = __webpack_require__(8);

module.exports =
/*#__PURE__*/
function (_BaseClient) {
  _inherits(SockJSClient, _BaseClient);

  function SockJSClient(url) {
    var _this;

    _classCallCheck(this, SockJSClient);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SockJSClient).call(this));
    _this.sock = new SockJS(url);

    _this.sock.onerror = function (err) {// TODO: use logger to log the error event once client and client-src
      // are reorganized to have the same directory structure
    };

    return _this;
  }

  _createClass(SockJSClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.sock.onopen = f;
    }
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.sock.onclose = f;
    } // call f with the message string as the first argument

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.sock.onmessage = function (e) {
        f(e.data);
      };
    }
  }], [{
    key: "getClientPath",
    value: function getClientPath(options) {
      return /*require.resolve*/(6);
    }
  }]);

  return SockJSClient;
}(BaseClient);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/* sockjs-client v1.4.0 | http://sockjs.org | MIT license */
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var transportList = require('./transport-list');

module.exports = require('./main')(transportList);

// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in global) {
  setTimeout(global._sockjs_onload, 1);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./main":14,"./transport-list":16}],2:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , Event = require('./event')
  ;

function CloseEvent() {
  Event.call(this);
  this.initEvent('close', false, false);
  this.wasClean = false;
  this.code = 0;
  this.reason = '';
}

inherits(CloseEvent, Event);

module.exports = CloseEvent;

},{"./event":4,"inherits":57}],3:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , EventTarget = require('./eventtarget')
  ;

function EventEmitter() {
  EventTarget.call(this);
}

inherits(EventEmitter, EventTarget);

EventEmitter.prototype.removeAllListeners = function(type) {
  if (type) {
    delete this._listeners[type];
  } else {
    this._listeners = {};
  }
};

EventEmitter.prototype.once = function(type, listener) {
  var self = this
    , fired = false;

  function g() {
    self.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  this.on(type, g);
};

EventEmitter.prototype.emit = function() {
  var type = arguments[0];
  var listeners = this._listeners[type];
  if (!listeners) {
    return;
  }
  // equivalent of Array.prototype.slice.call(arguments, 1);
  var l = arguments.length;
  var args = new Array(l - 1);
  for (var ai = 1; ai < l; ai++) {
    args[ai - 1] = arguments[ai];
  }
  for (var i = 0; i < listeners.length; i++) {
    listeners[i].apply(this, args);
  }
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;

module.exports.EventEmitter = EventEmitter;

},{"./eventtarget":5,"inherits":57}],4:[function(require,module,exports){
'use strict';

function Event(eventType) {
  this.type = eventType;
}

Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
  this.type = eventType;
  this.bubbles = canBubble;
  this.cancelable = cancelable;
  this.timeStamp = +new Date();
  return this;
};

Event.prototype.stopPropagation = function() {};
Event.prototype.preventDefault = function() {};

Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;

module.exports = Event;

},{}],5:[function(require,module,exports){
'use strict';

/* Simplified implementation of DOM2 EventTarget.
 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
 */

function EventTarget() {
  this._listeners = {};
}

EventTarget.prototype.addEventListener = function(eventType, listener) {
  if (!(eventType in this._listeners)) {
    this._listeners[eventType] = [];
  }
  var arr = this._listeners[eventType];
  // #4
  if (arr.indexOf(listener) === -1) {
    // Make a copy so as not to interfere with a current dispatchEvent.
    arr = arr.concat([listener]);
  }
  this._listeners[eventType] = arr;
};

EventTarget.prototype.removeEventListener = function(eventType, listener) {
  var arr = this._listeners[eventType];
  if (!arr) {
    return;
  }
  var idx = arr.indexOf(listener);
  if (idx !== -1) {
    if (arr.length > 1) {
      // Make a copy so as not to interfere with a current dispatchEvent.
      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
    } else {
      delete this._listeners[eventType];
    }
    return;
  }
};

EventTarget.prototype.dispatchEvent = function() {
  var event = arguments[0];
  var t = event.type;
  // equivalent of Array.prototype.slice.call(arguments, 0);
  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
  // TODO: This doesn't match the real behavior; per spec, onfoo get
  // their place in line from the /first/ time they're set from
  // non-null. Although WebKit bumps it to the end every time it's
  // set.
  if (this['on' + t]) {
    this['on' + t].apply(this, args);
  }
  if (t in this._listeners) {
    // Grab a reference to the listeners list. removeEventListener may alter the list.
    var listeners = this._listeners[t];
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(this, args);
    }
  }
};

module.exports = EventTarget;

},{}],6:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , Event = require('./event')
  ;

function TransportMessageEvent(data) {
  Event.call(this);
  this.initEvent('message', false, false);
  this.data = data;
}

inherits(TransportMessageEvent, Event);

module.exports = TransportMessageEvent;

},{"./event":4,"inherits":57}],7:[function(require,module,exports){
'use strict';

var JSON3 = require('json3')
  , iframeUtils = require('./utils/iframe')
  ;

function FacadeJS(transport) {
  this._transport = transport;
  transport.on('message', this._transportMessage.bind(this));
  transport.on('close', this._transportClose.bind(this));
}

FacadeJS.prototype._transportClose = function(code, reason) {
  iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
};
FacadeJS.prototype._transportMessage = function(frame) {
  iframeUtils.postMessage('t', frame);
};
FacadeJS.prototype._send = function(data) {
  this._transport.send(data);
};
FacadeJS.prototype._close = function() {
  this._transport.close();
  this._transport.removeAllListeners();
};

module.exports = FacadeJS;

},{"./utils/iframe":47,"json3":58}],8:[function(require,module,exports){
(function (process){
'use strict';

var urlUtils = require('./utils/url')
  , eventUtils = require('./utils/event')
  , JSON3 = require('json3')
  , FacadeJS = require('./facade')
  , InfoIframeReceiver = require('./info-iframe-receiver')
  , iframeUtils = require('./utils/iframe')
  , loc = require('./location')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:iframe-bootstrap');
}

module.exports = function(SockJS, availableTransports) {
  var transportMap = {};
  availableTransports.forEach(function(at) {
    if (at.facadeTransport) {
      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
    }
  });

  // hard-coded for the info iframe
  // TODO see if we can make this more dynamic
  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
  var parentOrigin;

  /* eslint-disable camelcase */
  SockJS.bootstrap_iframe = function() {
    /* eslint-enable camelcase */
    var facade;
    iframeUtils.currentWindowId = loc.hash.slice(1);
    var onMessage = function(e) {
      if (e.source !== parent) {
        return;
      }
      if (typeof parentOrigin === 'undefined') {
        parentOrigin = e.origin;
      }
      if (e.origin !== parentOrigin) {
        return;
      }

      var iframeMessage;
      try {
        iframeMessage = JSON3.parse(e.data);
      } catch (ignored) {
        debug('bad json', e.data);
        return;
      }

      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
        return;
      }
      switch (iframeMessage.type) {
      case 's':
        var p;
        try {
          p = JSON3.parse(iframeMessage.data);
        } catch (ignored) {
          debug('bad json', iframeMessage.data);
          break;
        }
        var version = p[0];
        var transport = p[1];
        var transUrl = p[2];
        var baseUrl = p[3];
        debug(version, transport, transUrl, baseUrl);
        // change this to semver logic
        if (version !== SockJS.version) {
          throw new Error('Incompatible SockJS! Main site uses:' +
                    ' "' + version + '", the iframe:' +
                    ' "' + SockJS.version + '".');
        }

        if (!urlUtils.isOriginEqual(transUrl, loc.href) ||
            !urlUtils.isOriginEqual(baseUrl, loc.href)) {
          throw new Error('Can\'t connect to different domain from within an ' +
                    'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
        }
        facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
        break;
      case 'm':
        facade._send(iframeMessage.data);
        break;
      case 'c':
        if (facade) {
          facade._close();
        }
        facade = null;
        break;
      }
    };

    eventUtils.attachEvent('message', onMessage);

    // Start
    iframeUtils.postMessage('s');
  };
};

}).call(this,{ env: {} })

},{"./facade":7,"./info-iframe-receiver":10,"./location":13,"./utils/event":46,"./utils/iframe":47,"./utils/url":52,"debug":55,"json3":58}],9:[function(require,module,exports){
(function (process){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , objectUtils = require('./utils/object')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-ajax');
}

function InfoAjax(url, AjaxObject) {
  EventEmitter.call(this);

  var self = this;
  var t0 = +new Date();
  this.xo = new AjaxObject('GET', url);

  this.xo.once('finish', function(status, text) {
    var info, rtt;
    if (status === 200) {
      rtt = (+new Date()) - t0;
      if (text) {
        try {
          info = JSON3.parse(text);
        } catch (e) {
          debug('bad json', text);
        }
      }

      if (!objectUtils.isObject(info)) {
        info = {};
      }
    }
    self.emit('finish', info, rtt);
    self.removeAllListeners();
  });
}

inherits(InfoAjax, EventEmitter);

InfoAjax.prototype.close = function() {
  this.removeAllListeners();
  this.xo.close();
};

module.exports = InfoAjax;

}).call(this,{ env: {} })

},{"./utils/object":49,"debug":55,"events":3,"inherits":57,"json3":58}],10:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , JSON3 = require('json3')
  , XHRLocalObject = require('./transport/sender/xhr-local')
  , InfoAjax = require('./info-ajax')
  ;

function InfoReceiverIframe(transUrl) {
  var self = this;
  EventEmitter.call(this);

  this.ir = new InfoAjax(transUrl, XHRLocalObject);
  this.ir.once('finish', function(info, rtt) {
    self.ir = null;
    self.emit('message', JSON3.stringify([info, rtt]));
  });
}

inherits(InfoReceiverIframe, EventEmitter);

InfoReceiverIframe.transportName = 'iframe-info-receiver';

InfoReceiverIframe.prototype.close = function() {
  if (this.ir) {
    this.ir.close();
    this.ir = null;
  }
  this.removeAllListeners();
};

module.exports = InfoReceiverIframe;

},{"./info-ajax":9,"./transport/sender/xhr-local":37,"events":3,"inherits":57,"json3":58}],11:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , utils = require('./utils/event')
  , IframeTransport = require('./transport/iframe')
  , InfoReceiverIframe = require('./info-iframe-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-iframe');
}

function InfoIframe(baseUrl, url) {
  var self = this;
  EventEmitter.call(this);

  var go = function() {
    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);

    ifr.once('message', function(msg) {
      if (msg) {
        var d;
        try {
          d = JSON3.parse(msg);
        } catch (e) {
          debug('bad json', msg);
          self.emit('finish');
          self.close();
          return;
        }

        var info = d[0], rtt = d[1];
        self.emit('finish', info, rtt);
      }
      self.close();
    });

    ifr.once('close', function() {
      self.emit('finish');
      self.close();
    });
  };

  // TODO this seems the same as the 'needBody' from transports
  if (!global.document.body) {
    utils.attachEvent('load', go);
  } else {
    go();
  }
}

inherits(InfoIframe, EventEmitter);

InfoIframe.enabled = function() {
  return IframeTransport.enabled();
};

InfoIframe.prototype.close = function() {
  if (this.ifr) {
    this.ifr.close();
  }
  this.removeAllListeners();
  this.ifr = null;
};

module.exports = InfoIframe;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./info-iframe-receiver":10,"./transport/iframe":22,"./utils/event":46,"debug":55,"events":3,"inherits":57,"json3":58}],12:[function(require,module,exports){
(function (process){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , urlUtils = require('./utils/url')
  , XDR = require('./transport/sender/xdr')
  , XHRCors = require('./transport/sender/xhr-cors')
  , XHRLocal = require('./transport/sender/xhr-local')
  , XHRFake = require('./transport/sender/xhr-fake')
  , InfoIframe = require('./info-iframe')
  , InfoAjax = require('./info-ajax')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-receiver');
}

function InfoReceiver(baseUrl, urlInfo) {
  debug(baseUrl);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self.doXhr(baseUrl, urlInfo);
  }, 0);
}

inherits(InfoReceiver, EventEmitter);

// TODO this is currently ignoring the list of available transports and the whitelist

InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
  // determine method of CORS support (if needed)
  if (urlInfo.sameOrigin) {
    return new InfoAjax(url, XHRLocal);
  }
  if (XHRCors.enabled) {
    return new InfoAjax(url, XHRCors);
  }
  if (XDR.enabled && urlInfo.sameScheme) {
    return new InfoAjax(url, XDR);
  }
  if (InfoIframe.enabled()) {
    return new InfoIframe(baseUrl, url);
  }
  return new InfoAjax(url, XHRFake);
};

InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
  var self = this
    , url = urlUtils.addPath(baseUrl, '/info')
    ;
  debug('doXhr', url);

  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);

  this.timeoutRef = setTimeout(function() {
    debug('timeout');
    self._cleanup(false);
    self.emit('finish');
  }, InfoReceiver.timeout);

  this.xo.once('finish', function(info, rtt) {
    debug('finish', info, rtt);
    self._cleanup(true);
    self.emit('finish', info, rtt);
  });
};

InfoReceiver.prototype._cleanup = function(wasClean) {
  debug('_cleanup');
  clearTimeout(this.timeoutRef);
  this.timeoutRef = null;
  if (!wasClean && this.xo) {
    this.xo.close();
  }
  this.xo = null;
};

InfoReceiver.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  this._cleanup(false);
};

InfoReceiver.timeout = 8000;

module.exports = InfoReceiver;

}).call(this,{ env: {} })

},{"./info-ajax":9,"./info-iframe":11,"./transport/sender/xdr":34,"./transport/sender/xhr-cors":35,"./transport/sender/xhr-fake":36,"./transport/sender/xhr-local":37,"./utils/url":52,"debug":55,"events":3,"inherits":57}],13:[function(require,module,exports){
(function (global){
'use strict';

module.exports = global.location || {
  origin: 'http://localhost:80'
, protocol: 'http:'
, host: 'localhost'
, port: 80
, href: 'http://localhost/'
, hash: ''
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],14:[function(require,module,exports){
(function (process,global){
'use strict';

require('./shims');

var URL = require('url-parse')
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , random = require('./utils/random')
  , escape = require('./utils/escape')
  , urlUtils = require('./utils/url')
  , eventUtils = require('./utils/event')
  , transport = require('./utils/transport')
  , objectUtils = require('./utils/object')
  , browser = require('./utils/browser')
  , log = require('./utils/log')
  , Event = require('./event/event')
  , EventTarget = require('./event/eventtarget')
  , loc = require('./location')
  , CloseEvent = require('./event/close')
  , TransportMessageEvent = require('./event/trans-message')
  , InfoReceiver = require('./info-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:main');
}

var transports;

// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
function SockJS(url, protocols, options) {
  if (!(this instanceof SockJS)) {
    return new SockJS(url, protocols, options);
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
  }
  EventTarget.call(this);

  this.readyState = SockJS.CONNECTING;
  this.extensions = '';
  this.protocol = '';

  // non-standard extension
  options = options || {};
  if (options.protocols_whitelist) {
    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
  }
  this._transportsWhitelist = options.transports;
  this._transportOptions = options.transportOptions || {};
  this._timeout = options.timeout || 0;

  var sessionId = options.sessionId || 8;
  if (typeof sessionId === 'function') {
    this._generateSessionId = sessionId;
  } else if (typeof sessionId === 'number') {
    this._generateSessionId = function() {
      return random.string(sessionId);
    };
  } else {
    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
  }

  this._server = options.server || random.numberString(1000);

  // Step 1 of WS spec - parse and validate the url. Issue #8
  var parsedUrl = new URL(url);
  if (!parsedUrl.host || !parsedUrl.protocol) {
    throw new SyntaxError("The URL '" + url + "' is invalid");
  } else if (parsedUrl.hash) {
    throw new SyntaxError('The URL must not contain a fragment');
  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
  }

  var secure = parsedUrl.protocol === 'https:';
  // Step 2 - don't allow secure origin with an insecure protocol
  if (loc.protocol === 'https:' && !secure) {
    throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
  }

  // Step 3 - check port access - no need here
  // Step 4 - parse protocols argument
  if (!protocols) {
    protocols = [];
  } else if (!Array.isArray(protocols)) {
    protocols = [protocols];
  }

  // Step 5 - check protocols argument
  var sortedProtocols = protocols.sort();
  sortedProtocols.forEach(function(proto, i) {
    if (!proto) {
      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
    }
    if (i < (sortedProtocols.length - 1) && proto === sortedProtocols[i + 1]) {
      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
    }
  });

  // Step 6 - convert origin
  var o = urlUtils.getOrigin(loc.href);
  this._origin = o ? o.toLowerCase() : null;

  // remove the trailing slash
  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

  // store the sanitized url
  this.url = parsedUrl.href;
  debug('using url', this.url);

  // Step 7 - start connection in background
  // obtain server info
  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
  this._urlInfo = {
    nullOrigin: !browser.hasDomain()
  , sameOrigin: urlUtils.isOriginEqual(this.url, loc.href)
  , sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
  };

  this._ir = new InfoReceiver(this.url, this._urlInfo);
  this._ir.once('finish', this._receiveInfo.bind(this));
}

inherits(SockJS, EventTarget);

function userSetCode(code) {
  return code === 1000 || (code >= 3000 && code <= 4999);
}

SockJS.prototype.close = function(code, reason) {
  // Step 1
  if (code && !userSetCode(code)) {
    throw new Error('InvalidAccessError: Invalid code');
  }
  // Step 2.4 states the max is 123 bytes, but we are just checking length
  if (reason && reason.length > 123) {
    throw new SyntaxError('reason argument has an invalid length');
  }

  // Step 3.1
  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
    return;
  }

  // TODO look at docs to determine how to set this
  var wasClean = true;
  this._close(code || 1000, reason || 'Normal closure', wasClean);
};

SockJS.prototype.send = function(data) {
  // #13 - convert anything non-string to string
  // TODO this currently turns objects into [object Object]
  if (typeof data !== 'string') {
    data = '' + data;
  }
  if (this.readyState === SockJS.CONNECTING) {
    throw new Error('InvalidStateError: The connection has not been established yet');
  }
  if (this.readyState !== SockJS.OPEN) {
    return;
  }
  this._transport.send(escape.quote(data));
};

SockJS.version = require('./version');

SockJS.CONNECTING = 0;
SockJS.OPEN = 1;
SockJS.CLOSING = 2;
SockJS.CLOSED = 3;

SockJS.prototype._receiveInfo = function(info, rtt) {
  debug('_receiveInfo', rtt);
  this._ir = null;
  if (!info) {
    this._close(1002, 'Cannot connect to server');
    return;
  }

  // establish a round-trip timeout (RTO) based on the
  // round-trip time (RTT)
  this._rto = this.countRTO(rtt);
  // allow server to override url used for the actual transport
  this._transUrl = info.base_url ? info.base_url : this.url;
  info = objectUtils.extend(info, this._urlInfo);
  debug('info', info);
  // determine list of desired and supported transports
  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
  this._transports = enabledTransports.main;
  debug(this._transports.length + ' enabled transports');

  this._connect();
};

SockJS.prototype._connect = function() {
  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
    debug('attempt', Transport.transportName);
    if (Transport.needBody) {
      if (!global.document.body ||
          (typeof global.document.readyState !== 'undefined' &&
            global.document.readyState !== 'complete' &&
            global.document.readyState !== 'interactive')) {
        debug('waiting for body');
        this._transports.unshift(Transport);
        eventUtils.attachEvent('load', this._connect.bind(this));
        return;
      }
    }

    // calculate timeout based on RTO and round trips. Default to 5s
    var timeoutMs = Math.max(this._timeout, (this._rto * Transport.roundTrips) || 5000);
    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
    debug('using timeout', timeoutMs);

    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
    var options = this._transportOptions[Transport.transportName];
    debug('transport url', transportUrl);
    var transportObj = new Transport(transportUrl, this._transUrl, options);
    transportObj.on('message', this._transportMessage.bind(this));
    transportObj.once('close', this._transportClose.bind(this));
    transportObj.transportName = Transport.transportName;
    this._transport = transportObj;

    return;
  }
  this._close(2000, 'All transports failed', false);
};

SockJS.prototype._transportTimeout = function() {
  debug('_transportTimeout');
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transport) {
      this._transport.close();
    }

    this._transportClose(2007, 'Transport timed out');
  }
};

SockJS.prototype._transportMessage = function(msg) {
  debug('_transportMessage', msg);
  var self = this
    , type = msg.slice(0, 1)
    , content = msg.slice(1)
    , payload
    ;

  // first check for messages that don't need a payload
  switch (type) {
    case 'o':
      this._open();
      return;
    case 'h':
      this.dispatchEvent(new Event('heartbeat'));
      debug('heartbeat', this.transport);
      return;
  }

  if (content) {
    try {
      payload = JSON3.parse(content);
    } catch (e) {
      debug('bad json', content);
    }
  }

  if (typeof payload === 'undefined') {
    debug('empty payload', content);
    return;
  }

  switch (type) {
    case 'a':
      if (Array.isArray(payload)) {
        payload.forEach(function(p) {
          debug('message', self.transport, p);
          self.dispatchEvent(new TransportMessageEvent(p));
        });
      }
      break;
    case 'm':
      debug('message', this.transport, payload);
      this.dispatchEvent(new TransportMessageEvent(payload));
      break;
    case 'c':
      if (Array.isArray(payload) && payload.length === 2) {
        this._close(payload[0], payload[1], true);
      }
      break;
  }
};

SockJS.prototype._transportClose = function(code, reason) {
  debug('_transportClose', this.transport, code, reason);
  if (this._transport) {
    this._transport.removeAllListeners();
    this._transport = null;
    this.transport = null;
  }

  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
    this._connect();
    return;
  }

  this._close(code, reason);
};

SockJS.prototype._open = function() {
  debug('_open', this._transport && this._transport.transportName, this.readyState);
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transportTimeoutId) {
      clearTimeout(this._transportTimeoutId);
      this._transportTimeoutId = null;
    }
    this.readyState = SockJS.OPEN;
    this.transport = this._transport.transportName;
    this.dispatchEvent(new Event('open'));
    debug('connected', this.transport);
  } else {
    // The server might have been restarted, and lost track of our
    // connection.
    this._close(1006, 'Server lost session');
  }
};

SockJS.prototype._close = function(code, reason, wasClean) {
  debug('_close', this.transport, code, reason, wasClean, this.readyState);
  var forceFail = false;

  if (this._ir) {
    forceFail = true;
    this._ir.close();
    this._ir = null;
  }
  if (this._transport) {
    this._transport.close();
    this._transport = null;
    this.transport = null;
  }

  if (this.readyState === SockJS.CLOSED) {
    throw new Error('InvalidStateError: SockJS has already been closed');
  }

  this.readyState = SockJS.CLOSING;
  setTimeout(function() {
    this.readyState = SockJS.CLOSED;

    if (forceFail) {
      this.dispatchEvent(new Event('error'));
    }

    var e = new CloseEvent('close');
    e.wasClean = wasClean || false;
    e.code = code || 1000;
    e.reason = reason;

    this.dispatchEvent(e);
    this.onmessage = this.onclose = this.onerror = null;
    debug('disconnected');
  }.bind(this), 0);
};

// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
// and RFC 2988.
SockJS.prototype.countRTO = function(rtt) {
  // In a local environment, when using IE8/9 and the `jsonp-polling`
  // transport the time needed to establish a connection (the time that pass
  // from the opening of the transport to the call of `_dispatchOpen`) is
  // around 200msec (the lower bound used in the article above) and this
  // causes spurious timeouts. For this reason we calculate a value slightly
  // larger than that used in the article.
  if (rtt > 100) {
    return 4 * rtt; // rto > 400msec
  }
  return 300 + rtt; // 300msec < rto <= 400msec
};

module.exports = function(availableTransports) {
  transports = transport(availableTransports);
  require('./iframe-bootstrap')(SockJS, availableTransports);
  return SockJS;
};

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./event/close":2,"./event/event":4,"./event/eventtarget":5,"./event/trans-message":6,"./iframe-bootstrap":8,"./info-receiver":12,"./location":13,"./shims":15,"./utils/browser":44,"./utils/escape":45,"./utils/event":46,"./utils/log":48,"./utils/object":49,"./utils/random":50,"./utils/transport":51,"./utils/url":52,"./version":53,"debug":55,"inherits":57,"json3":58,"url-parse":61}],15:[function(require,module,exports){
/* eslint-disable */
/* jscs: disable */
'use strict';

// pulled specific shims from https://github.com/es-shims/es5-shim

var ArrayPrototype = Array.prototype;
var ObjectPrototype = Object.prototype;
var FunctionPrototype = Function.prototype;
var StringPrototype = String.prototype;
var array_slice = ArrayPrototype.slice;

var _toString = ObjectPrototype.toString;
var isFunction = function (val) {
    return ObjectPrototype.toString.call(val) === '[object Function]';
};
var isArray = function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
};
var isString = function isString(obj) {
    return _toString.call(obj) === '[object String]';
};

var supportsDescriptors = Object.defineProperty && (function () {
    try {
        Object.defineProperty({}, 'x', {});
        return true;
    } catch (e) { /* this is ES3 */
        return false;
    }
}());

// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty;
if (supportsDescriptors) {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        Object.defineProperty(object, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: method
        });
    };
} else {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        object[name] = method;
    };
}
var defineProperties = function (object, map, forceAssign) {
    for (var name in map) {
        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
          defineProperty(object, name, map[name], forceAssign);
        }
    }
};

var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert " + o + ' to object');
    }
    return Object(o);
};

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(num) {
    var n = +num;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function ToUint32(x) {
    return x >>> 0;
}

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isFunction(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(array_slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

//
// Array
// =====
//

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties(Array, { isArray: isArray });


var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';
            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && isString(this) ? this.split('') : object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isFunction(fun)) {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && isString(this) ? this.split('') : toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = StringPrototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

        StringPrototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (_toString.call(separator) !== '[object RegExp]') {
                return string_split.call(this, separator, limit);
            }

            var output = [],
                flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline  ? 'm' : '') +
                        (separator.extended   ? 'x' : '') + // Proposed for ES6
                        (separator.sticky     ? 'y' : ''), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            separator = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                ToUint32(limit);
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        ArrayPrototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test('')) {
                    output.push('');
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (separator === void 0 && limit === 0) { return []; }
        return string_split.call(this, separator, limit);
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}, hasNegativeSubstrBug);

},{}],16:[function(require,module,exports){
'use strict';

module.exports = [
  // streaming transports
  require('./transport/websocket')
, require('./transport/xhr-streaming')
, require('./transport/xdr-streaming')
, require('./transport/eventsource')
, require('./transport/lib/iframe-wrap')(require('./transport/eventsource'))

  // polling transports
, require('./transport/htmlfile')
, require('./transport/lib/iframe-wrap')(require('./transport/htmlfile'))
, require('./transport/xhr-polling')
, require('./transport/xdr-polling')
, require('./transport/lib/iframe-wrap')(require('./transport/xhr-polling'))
, require('./transport/jsonp-polling')
];

},{"./transport/eventsource":20,"./transport/htmlfile":21,"./transport/jsonp-polling":23,"./transport/lib/iframe-wrap":26,"./transport/websocket":38,"./transport/xdr-polling":39,"./transport/xdr-streaming":40,"./transport/xhr-polling":41,"./transport/xhr-streaming":42}],17:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , utils = require('../../utils/event')
  , urlUtils = require('../../utils/url')
  , XHR = global.XMLHttpRequest
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:browser:xhr');
}

function AbstractXHRObject(method, url, payload, opts) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function () {
    self._start(method, url, payload, opts);
  }, 0);
}

inherits(AbstractXHRObject, EventEmitter);

AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
  var self = this;

  try {
    this.xhr = new XHR();
  } catch (x) {
    // intentionally empty
  }

  if (!this.xhr) {
    debug('no xhr');
    this.emit('finish', 0, 'no xhr support');
    this._cleanup();
    return;
  }

  // several browsers cache POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  // Explorer tends to keep connection open, even after the
  // tab gets closed: http://bugs.jquery.com/ticket/5280
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload cleanup');
    self._cleanup(true);
  });
  try {
    this.xhr.open(method, url, true);
    if (this.timeout && 'timeout' in this.xhr) {
      this.xhr.timeout = this.timeout;
      this.xhr.ontimeout = function() {
        debug('xhr timeout');
        self.emit('finish', 0, '');
        self._cleanup(false);
      };
    }
  } catch (e) {
    debug('exception', e);
    // IE raises an exception on wrong port.
    this.emit('finish', 0, '');
    this._cleanup(false);
    return;
  }

  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
    debug('withCredentials');
    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
    // "This never affects same-site requests."

    this.xhr.withCredentials = true;
  }
  if (opts && opts.headers) {
    for (var key in opts.headers) {
      this.xhr.setRequestHeader(key, opts.headers[key]);
    }
  }

  this.xhr.onreadystatechange = function() {
    if (self.xhr) {
      var x = self.xhr;
      var text, status;
      debug('readyState', x.readyState);
      switch (x.readyState) {
      case 3:
        // IE doesn't like peeking into responseText or status
        // on Microsoft.XMLHTTP and readystate=3
        try {
          status = x.status;
          text = x.responseText;
        } catch (e) {
          // intentionally empty
        }
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }

        // IE does return readystate == 3 for 404 answers.
        if (status === 200 && text && text.length > 0) {
          debug('chunk');
          self.emit('chunk', status, text);
        }
        break;
      case 4:
        status = x.status;
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }
        // IE returns this for a bad port
        // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
        if (status === 12005 || status === 12029) {
          status = 0;
        }

        debug('finish', status, x.responseText);
        self.emit('finish', status, x.responseText);
        self._cleanup(false);
        break;
      }
    }
  };

  try {
    self.xhr.send(payload);
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
};

AbstractXHRObject.prototype._cleanup = function(abort) {
  debug('cleanup');
  if (!this.xhr) {
    return;
  }
  this.removeAllListeners();
  utils.unloadDel(this.unloadRef);

  // IE needs this field to be a function
  this.xhr.onreadystatechange = function() {};
  if (this.xhr.ontimeout) {
    this.xhr.ontimeout = null;
  }

  if (abort) {
    try {
      this.xhr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xhr = null;
};

AbstractXHRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

AbstractXHRObject.enabled = !!XHR;
// override XMLHttpRequest for IE6/7
// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (!AbstractXHRObject.enabled && (axo in global)) {
  debug('overriding xmlhttprequest');
  XHR = function() {
    try {
      return new global[axo]('Microsoft.XMLHTTP');
    } catch (e) {
      return null;
    }
  };
  AbstractXHRObject.enabled = !!new XHR();
}

var cors = false;
try {
  cors = 'withCredentials' in new XHR();
} catch (ignored) {
  // intentionally empty
}

AbstractXHRObject.supportsCORS = cors;

module.exports = AbstractXHRObject;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/event":46,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],18:[function(require,module,exports){
(function (global){
module.exports = global.EventSource;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],19:[function(require,module,exports){
(function (global){
'use strict';

var Driver = global.WebSocket || global.MozWebSocket;
if (Driver) {
	module.exports = function WebSocketBrowserDriver(url) {
		return new Driver(url);
	};
} else {
	module.exports = undefined;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],20:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , EventSourceReceiver = require('./receiver/eventsource')
  , XHRCorsObject = require('./sender/xhr-cors')
  , EventSourceDriver = require('eventsource')
  ;

function EventSourceTransport(transUrl) {
  if (!EventSourceTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
}

inherits(EventSourceTransport, AjaxBasedTransport);

EventSourceTransport.enabled = function() {
  return !!EventSourceDriver;
};

EventSourceTransport.transportName = 'eventsource';
EventSourceTransport.roundTrips = 2;

module.exports = EventSourceTransport;

},{"./lib/ajax-based":24,"./receiver/eventsource":29,"./sender/xhr-cors":35,"eventsource":18,"inherits":57}],21:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , HtmlfileReceiver = require('./receiver/htmlfile')
  , XHRLocalObject = require('./sender/xhr-local')
  , AjaxBasedTransport = require('./lib/ajax-based')
  ;

function HtmlFileTransport(transUrl) {
  if (!HtmlfileReceiver.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
}

inherits(HtmlFileTransport, AjaxBasedTransport);

HtmlFileTransport.enabled = function(info) {
  return HtmlfileReceiver.enabled && info.sameOrigin;
};

HtmlFileTransport.transportName = 'htmlfile';
HtmlFileTransport.roundTrips = 2;

module.exports = HtmlFileTransport;

},{"./lib/ajax-based":24,"./receiver/htmlfile":30,"./sender/xhr-local":37,"inherits":57}],22:[function(require,module,exports){
(function (process){
'use strict';

// Few cool transports do work only for same-origin. In order to make
// them work cross-domain we shall use iframe, served from the
// remote domain. New browsers have capabilities to communicate with
// cross domain iframe using postMessage(). In IE it was implemented
// from IE 8+, but of course, IE got some details wrong:
//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
//    http://stevesouders.com/misc/test-postmessage.php

var inherits = require('inherits')
  , JSON3 = require('json3')
  , EventEmitter = require('events').EventEmitter
  , version = require('../version')
  , urlUtils = require('../utils/url')
  , iframeUtils = require('../utils/iframe')
  , eventUtils = require('../utils/event')
  , random = require('../utils/random')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:transport:iframe');
}

function IframeTransport(transport, transUrl, baseUrl) {
  if (!IframeTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  EventEmitter.call(this);

  var self = this;
  this.origin = urlUtils.getOrigin(baseUrl);
  this.baseUrl = baseUrl;
  this.transUrl = transUrl;
  this.transport = transport;
  this.windowId = random.string(8);

  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
  debug(transport, transUrl, iframeUrl);

  this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
    debug('err callback');
    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
    self.close();
  });

  this.onmessageCallback = this._message.bind(this);
  eventUtils.attachEvent('message', this.onmessageCallback);
}

inherits(IframeTransport, EventEmitter);

IframeTransport.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  if (this.iframeObj) {
    eventUtils.detachEvent('message', this.onmessageCallback);
    try {
      // When the iframe is not loaded, IE raises an exception
      // on 'contentWindow'.
      this.postMessage('c');
    } catch (x) {
      // intentionally empty
    }
    this.iframeObj.cleanup();
    this.iframeObj = null;
    this.onmessageCallback = this.iframeObj = null;
  }
};

IframeTransport.prototype._message = function(e) {
  debug('message', e.data);
  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
    debug('not same origin', e.origin, this.origin);
    return;
  }

  var iframeMessage;
  try {
    iframeMessage = JSON3.parse(e.data);
  } catch (ignored) {
    debug('bad json', e.data);
    return;
  }

  if (iframeMessage.windowId !== this.windowId) {
    debug('mismatched window id', iframeMessage.windowId, this.windowId);
    return;
  }

  switch (iframeMessage.type) {
  case 's':
    this.iframeObj.loaded();
    // window global dependency
    this.postMessage('s', JSON3.stringify([
      version
    , this.transport
    , this.transUrl
    , this.baseUrl
    ]));
    break;
  case 't':
    this.emit('message', iframeMessage.data);
    break;
  case 'c':
    var cdata;
    try {
      cdata = JSON3.parse(iframeMessage.data);
    } catch (ignored) {
      debug('bad json', iframeMessage.data);
      return;
    }
    this.emit('close', cdata[0], cdata[1]);
    this.close();
    break;
  }
};

IframeTransport.prototype.postMessage = function(type, data) {
  debug('postMessage', type, data);
  this.iframeObj.post(JSON3.stringify({
    windowId: this.windowId
  , type: type
  , data: data || ''
  }), this.origin);
};

IframeTransport.prototype.send = function(message) {
  debug('send', message);
  this.postMessage('m', message);
};

IframeTransport.enabled = function() {
  return iframeUtils.iframeEnabled;
};

IframeTransport.transportName = 'iframe';
IframeTransport.roundTrips = 2;

module.exports = IframeTransport;

}).call(this,{ env: {} })

},{"../utils/event":46,"../utils/iframe":47,"../utils/random":50,"../utils/url":52,"../version":53,"debug":55,"events":3,"inherits":57,"json3":58}],23:[function(require,module,exports){
(function (global){
'use strict';

// The simplest and most robust transport, using the well-know cross
// domain hack - JSONP. This transport is quite inefficient - one
// message could use up to one http request. But at least it works almost
// everywhere.
// Known limitations:
//   o you will get a spinning cursor
//   o for Konqueror a dumb timer is needed to detect errors

var inherits = require('inherits')
  , SenderReceiver = require('./lib/sender-receiver')
  , JsonpReceiver = require('./receiver/jsonp')
  , jsonpSender = require('./sender/jsonp')
  ;

function JsonPTransport(transUrl) {
  if (!JsonPTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
}

inherits(JsonPTransport, SenderReceiver);

JsonPTransport.enabled = function() {
  return !!global.document;
};

JsonPTransport.transportName = 'jsonp-polling';
JsonPTransport.roundTrips = 1;
JsonPTransport.needBody = true;

module.exports = JsonPTransport;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/sender-receiver":28,"./receiver/jsonp":31,"./sender/jsonp":33,"inherits":57}],24:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , urlUtils = require('../../utils/url')
  , SenderReceiver = require('./sender-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:ajax-based');
}

function createAjaxSender(AjaxObject) {
  return function(url, payload, callback) {
    debug('create ajax sender', url, payload);
    var opt = {};
    if (typeof payload === 'string') {
      opt.headers = {'Content-type': 'text/plain'};
    }
    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
    xo.once('finish', function(status) {
      debug('finish', status);
      xo = null;

      if (status !== 200 && status !== 204) {
        return callback(new Error('http status ' + status));
      }
      callback();
    });
    return function() {
      debug('abort');
      xo.close();
      xo = null;

      var err = new Error('Aborted');
      err.code = 1000;
      callback(err);
    };
  };
}

function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
}

inherits(AjaxBasedTransport, SenderReceiver);

module.exports = AjaxBasedTransport;

}).call(this,{ env: {} })

},{"../../utils/url":52,"./sender-receiver":28,"debug":55,"inherits":57}],25:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:buffered-sender');
}

function BufferedSender(url, sender) {
  debug(url);
  EventEmitter.call(this);
  this.sendBuffer = [];
  this.sender = sender;
  this.url = url;
}

inherits(BufferedSender, EventEmitter);

BufferedSender.prototype.send = function(message) {
  debug('send', message);
  this.sendBuffer.push(message);
  if (!this.sendStop) {
    this.sendSchedule();
  }
};

// For polling transports in a situation when in the message callback,
// new message is being send. If the sending connection was started
// before receiving one, it is possible to saturate the network and
// timeout due to the lack of receiving socket. To avoid that we delay
// sending messages by some small time, in order to let receiving
// connection be started beforehand. This is only a halfmeasure and
// does not fix the big problem, but it does make the tests go more
// stable on slow networks.
BufferedSender.prototype.sendScheduleWait = function() {
  debug('sendScheduleWait');
  var self = this;
  var tref;
  this.sendStop = function() {
    debug('sendStop');
    self.sendStop = null;
    clearTimeout(tref);
  };
  tref = setTimeout(function() {
    debug('timeout');
    self.sendStop = null;
    self.sendSchedule();
  }, 25);
};

BufferedSender.prototype.sendSchedule = function() {
  debug('sendSchedule', this.sendBuffer.length);
  var self = this;
  if (this.sendBuffer.length > 0) {
    var payload = '[' + this.sendBuffer.join(',') + ']';
    this.sendStop = this.sender(this.url, payload, function(err) {
      self.sendStop = null;
      if (err) {
        debug('error', err);
        self.emit('close', err.code || 1006, 'Sending error: ' + err);
        self.close();
      } else {
        self.sendScheduleWait();
      }
    });
    this.sendBuffer = [];
  }
};

BufferedSender.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

BufferedSender.prototype.close = function() {
  debug('close');
  this._cleanup();
  if (this.sendStop) {
    this.sendStop();
    this.sendStop = null;
  }
};

module.exports = BufferedSender;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],26:[function(require,module,exports){
(function (global){
'use strict';

var inherits = require('inherits')
  , IframeTransport = require('../iframe')
  , objectUtils = require('../../utils/object')
  ;

module.exports = function(transport) {

  function IframeWrapTransport(transUrl, baseUrl) {
    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
  }

  inherits(IframeWrapTransport, IframeTransport);

  IframeWrapTransport.enabled = function(url, info) {
    if (!global.document) {
      return false;
    }

    var iframeInfo = objectUtils.extend({}, info);
    iframeInfo.sameOrigin = true;
    return transport.enabled(iframeInfo) && IframeTransport.enabled();
  };

  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
  IframeWrapTransport.needBody = true;
  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

  IframeWrapTransport.facadeTransport = transport;

  return IframeWrapTransport;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/object":49,"../iframe":22,"inherits":57}],27:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:polling');
}

function Polling(Receiver, receiveUrl, AjaxObject) {
  debug(receiveUrl);
  EventEmitter.call(this);
  this.Receiver = Receiver;
  this.receiveUrl = receiveUrl;
  this.AjaxObject = AjaxObject;
  this._scheduleReceiver();
}

inherits(Polling, EventEmitter);

Polling.prototype._scheduleReceiver = function() {
  debug('_scheduleReceiver');
  var self = this;
  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);

  poll.on('message', function(msg) {
    debug('message', msg);
    self.emit('message', msg);
  });

  poll.once('close', function(code, reason) {
    debug('close', code, reason, self.pollIsClosing);
    self.poll = poll = null;

    if (!self.pollIsClosing) {
      if (reason === 'network') {
        self._scheduleReceiver();
      } else {
        self.emit('close', code || 1006, reason);
        self.removeAllListeners();
      }
    }
  });
};

Polling.prototype.abort = function() {
  debug('abort');
  this.removeAllListeners();
  this.pollIsClosing = true;
  if (this.poll) {
    this.poll.abort();
  }
};

module.exports = Polling;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],28:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , urlUtils = require('../../utils/url')
  , BufferedSender = require('./buffered-sender')
  , Polling = require('./polling')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender-receiver');
}

function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
  debug(pollUrl);
  var self = this;
  BufferedSender.call(this, transUrl, senderFunc);

  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
  this.poll.on('message', function(msg) {
    debug('poll message', msg);
    self.emit('message', msg);
  });
  this.poll.once('close', function(code, reason) {
    debug('poll close', code, reason);
    self.poll = null;
    self.emit('close', code, reason);
    self.close();
  });
}

inherits(SenderReceiver, BufferedSender);

SenderReceiver.prototype.close = function() {
  BufferedSender.prototype.close.call(this);
  debug('close');
  this.removeAllListeners();
  if (this.poll) {
    this.poll.abort();
    this.poll = null;
  }
};

module.exports = SenderReceiver;

}).call(this,{ env: {} })

},{"../../utils/url":52,"./buffered-sender":25,"./polling":27,"debug":55,"inherits":57}],29:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , EventSourceDriver = require('eventsource')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:eventsource');
}

function EventSourceReceiver(url) {
  debug(url);
  EventEmitter.call(this);

  var self = this;
  var es = this.es = new EventSourceDriver(url);
  es.onmessage = function(e) {
    debug('message', e.data);
    self.emit('message', decodeURI(e.data));
  };
  es.onerror = function(e) {
    debug('error', es.readyState, e);
    // ES on reconnection has readyState = 0 or 1.
    // on network error it's CLOSED = 2
    var reason = (es.readyState !== 2 ? 'network' : 'permanent');
    self._cleanup();
    self._close(reason);
  };
}

inherits(EventSourceReceiver, EventEmitter);

EventSourceReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

EventSourceReceiver.prototype._cleanup = function() {
  debug('cleanup');
  var es = this.es;
  if (es) {
    es.onmessage = es.onerror = null;
    es.close();
    this.es = null;
  }
};

EventSourceReceiver.prototype._close = function(reason) {
  debug('close', reason);
  var self = this;
  // Safari and chrome < 15 crash if we close window before
  // waiting for ES cleanup. See:
  // https://code.google.com/p/chromium/issues/detail?id=89155
  setTimeout(function() {
    self.emit('close', null, reason);
    self.removeAllListeners();
  }, 200);
};

module.exports = EventSourceReceiver;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"eventsource":18,"inherits":57}],30:[function(require,module,exports){
(function (process,global){
'use strict';

var inherits = require('inherits')
  , iframeUtils = require('../../utils/iframe')
  , urlUtils = require('../../utils/url')
  , EventEmitter = require('events').EventEmitter
  , random = require('../../utils/random')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:htmlfile');
}

function HtmlfileReceiver(url) {
  debug(url);
  EventEmitter.call(this);
  var self = this;
  iframeUtils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));

  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
  var constructFunc = HtmlfileReceiver.htmlfileEnabled ?
      iframeUtils.createHtmlfile : iframeUtils.createIframe;

  global[iframeUtils.WPrefix][this.id] = {
    start: function() {
      debug('start');
      self.iframeObj.loaded();
    }
  , message: function(data) {
      debug('message', data);
      self.emit('message', data);
    }
  , stop: function() {
      debug('stop');
      self._cleanup();
      self._close('network');
    }
  };
  this.iframeObj = constructFunc(url, function() {
    debug('callback');
    self._cleanup();
    self._close('permanent');
  });
}

inherits(HtmlfileReceiver, EventEmitter);

HtmlfileReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

HtmlfileReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  if (this.iframeObj) {
    this.iframeObj.cleanup();
    this.iframeObj = null;
  }
  delete global[iframeUtils.WPrefix][this.id];
};

HtmlfileReceiver.prototype._close = function(reason) {
  debug('_close', reason);
  this.emit('close', null, reason);
  this.removeAllListeners();
};

HtmlfileReceiver.htmlfileEnabled = false;

// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (axo in global) {
  try {
    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
  } catch (x) {
    // intentionally empty
  }
}

HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;

module.exports = HtmlfileReceiver;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],31:[function(require,module,exports){
(function (process,global){
'use strict';

var utils = require('../../utils/iframe')
  , random = require('../../utils/random')
  , browser = require('../../utils/browser')
  , urlUtils = require('../../utils/url')
  , inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:jsonp');
}

function JsonpReceiver(url) {
  debug(url);
  var self = this;
  EventEmitter.call(this);

  utils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));

  global[utils.WPrefix][this.id] = this._callback.bind(this);
  this._createScript(urlWithId);

  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
  this.timeoutId = setTimeout(function() {
    debug('timeout');
    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
  }, JsonpReceiver.timeout);
}

inherits(JsonpReceiver, EventEmitter);

JsonpReceiver.prototype.abort = function() {
  debug('abort');
  if (global[utils.WPrefix][this.id]) {
    var err = new Error('JSONP user aborted read');
    err.code = 1000;
    this._abort(err);
  }
};

JsonpReceiver.timeout = 35000;
JsonpReceiver.scriptErrorTimeout = 1000;

JsonpReceiver.prototype._callback = function(data) {
  debug('_callback', data);
  this._cleanup();

  if (this.aborting) {
    return;
  }

  if (data) {
    debug('message', data);
    this.emit('message', data);
  }
  this.emit('close', null, 'network');
  this.removeAllListeners();
};

JsonpReceiver.prototype._abort = function(err) {
  debug('_abort', err);
  this._cleanup();
  this.aborting = true;
  this.emit('close', err.code, err.message);
  this.removeAllListeners();
};

JsonpReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  clearTimeout(this.timeoutId);
  if (this.script2) {
    this.script2.parentNode.removeChild(this.script2);
    this.script2 = null;
  }
  if (this.script) {
    var script = this.script;
    // Unfortunately, you can't really abort script loading of
    // the script.
    script.parentNode.removeChild(script);
    script.onreadystatechange = script.onerror =
        script.onload = script.onclick = null;
    this.script = null;
  }
  delete global[utils.WPrefix][this.id];
};

JsonpReceiver.prototype._scriptError = function() {
  debug('_scriptError');
  var self = this;
  if (this.errorTimer) {
    return;
  }

  this.errorTimer = setTimeout(function() {
    if (!self.loadedOkay) {
      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
    }
  }, JsonpReceiver.scriptErrorTimeout);
};

JsonpReceiver.prototype._createScript = function(url) {
  debug('_createScript', url);
  var self = this;
  var script = this.script = global.document.createElement('script');
  var script2;  // Opera synchronous load trick.

  script.id = 'a' + random.string(8);
  script.src = url;
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.onerror = this._scriptError.bind(this);
  script.onload = function() {
    debug('onload');
    self._abort(new Error('JSONP script loaded abnormally (onload)'));
  };

  // IE9 fires 'error' event after onreadystatechange or before, in random order.
  // Use loadedOkay to determine if actually errored
  script.onreadystatechange = function() {
    debug('onreadystatechange', script.readyState);
    if (/loaded|closed/.test(script.readyState)) {
      if (script && script.htmlFor && script.onclick) {
        self.loadedOkay = true;
        try {
          // In IE, actually execute the script.
          script.onclick();
        } catch (x) {
          // intentionally empty
        }
      }
      if (script) {
        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
      }
    }
  };
  // IE: event/htmlFor/onclick trick.
  // One can't rely on proper order for onreadystatechange. In order to
  // make sure, set a 'htmlFor' and 'event' properties, so that
  // script code will be installed as 'onclick' handler for the
  // script object. Later, onreadystatechange, manually execute this
  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
  // set. For reference see:
  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
  // Also, read on that about script ordering:
  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
  if (typeof script.async === 'undefined' && global.document.attachEvent) {
    // According to mozilla docs, in recent browsers script.async defaults
    // to 'true', so we may use it to detect a good browser:
    // https://developer.mozilla.org/en/HTML/Element/script
    if (!browser.isOpera()) {
      // Naively assume we're in IE
      try {
        script.htmlFor = script.id;
        script.event = 'onclick';
      } catch (x) {
        // intentionally empty
      }
      script.async = true;
    } else {
      // Opera, second sync script hack
      script2 = this.script2 = global.document.createElement('script');
      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
      script.async = script2.async = false;
    }
  }
  if (typeof script.async !== 'undefined') {
    script.async = true;
  }

  var head = global.document.getElementsByTagName('head')[0];
  head.insertBefore(script, head.firstChild);
  if (script2) {
    head.insertBefore(script2, head.firstChild);
  }
};

module.exports = JsonpReceiver;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/browser":44,"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],32:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:xhr');
}

function XhrReceiver(url, AjaxObject) {
  debug(url);
  EventEmitter.call(this);
  var self = this;

  this.bufferPosition = 0;

  this.xo = new AjaxObject('POST', url, null);
  this.xo.on('chunk', this._chunkHandler.bind(this));
  this.xo.once('finish', function(status, text) {
    debug('finish', status, text);
    self._chunkHandler(status, text);
    self.xo = null;
    var reason = status === 200 ? 'network' : 'permanent';
    debug('close', reason);
    self.emit('close', null, reason);
    self._cleanup();
  });
}

inherits(XhrReceiver, EventEmitter);

XhrReceiver.prototype._chunkHandler = function(status, text) {
  debug('_chunkHandler', status);
  if (status !== 200 || !text) {
    return;
  }

  for (var idx = -1; ; this.bufferPosition += idx + 1) {
    var buf = text.slice(this.bufferPosition);
    idx = buf.indexOf('\n');
    if (idx === -1) {
      break;
    }
    var msg = buf.slice(0, idx);
    if (msg) {
      debug('message', msg);
      this.emit('message', msg);
    }
  }
};

XhrReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

XhrReceiver.prototype.abort = function() {
  debug('abort');
  if (this.xo) {
    this.xo.close();
    debug('close');
    this.emit('close', null, 'user');
    this.xo = null;
  }
  this._cleanup();
};

module.exports = XhrReceiver;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],33:[function(require,module,exports){
(function (process,global){
'use strict';

var random = require('../../utils/random')
  , urlUtils = require('../../utils/url')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender:jsonp');
}

var form, area;

function createIframe(id) {
  debug('createIframe', id);
  try {
    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
    return global.document.createElement('<iframe name="' + id + '">');
  } catch (x) {
    var iframe = global.document.createElement('iframe');
    iframe.name = id;
    return iframe;
  }
}

function createForm() {
  debug('createForm');
  form = global.document.createElement('form');
  form.style.display = 'none';
  form.style.position = 'absolute';
  form.method = 'POST';
  form.enctype = 'application/x-www-form-urlencoded';
  form.acceptCharset = 'UTF-8';

  area = global.document.createElement('textarea');
  area.name = 'd';
  form.appendChild(area);

  global.document.body.appendChild(form);
}

module.exports = function(url, payload, callback) {
  debug(url, payload);
  if (!form) {
    createForm();
  }
  var id = 'a' + random.string(8);
  form.target = id;
  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);

  var iframe = createIframe(id);
  iframe.id = id;
  iframe.style.display = 'none';
  form.appendChild(iframe);

  try {
    area.value = payload;
  } catch (e) {
    // seriously broken browsers get here
  }
  form.submit();

  var completed = function(err) {
    debug('completed', id, err);
    if (!iframe.onerror) {
      return;
    }
    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
    // Opera mini doesn't like if we GC iframe
    // immediately, thus this timeout.
    setTimeout(function() {
      debug('cleaning up', id);
      iframe.parentNode.removeChild(iframe);
      iframe = null;
    }, 500);
    area.value = '';
    // It is not possible to detect if the iframe succeeded or
    // failed to submit our form.
    callback(err);
  };
  iframe.onerror = function() {
    debug('onerror', id);
    completed();
  };
  iframe.onload = function() {
    debug('onload', id);
    completed();
  };
  iframe.onreadystatechange = function(e) {
    debug('onreadystatechange', id, iframe.readyState, e);
    if (iframe.readyState === 'complete') {
      completed();
    }
  };
  return function() {
    debug('aborted', id);
    completed(new Error('Aborted'));
  };
};

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/random":50,"../../utils/url":52,"debug":55}],34:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , eventUtils = require('../../utils/event')
  , browser = require('../../utils/browser')
  , urlUtils = require('../../utils/url')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender:xdr');
}

// References:
//   http://ajaxian.com/archives/100-line-ajax-wrapper
//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

function XDRObject(method, url, payload) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self._start(method, url, payload);
  }, 0);
}

inherits(XDRObject, EventEmitter);

XDRObject.prototype._start = function(method, url, payload) {
  debug('_start');
  var self = this;
  var xdr = new global.XDomainRequest();
  // IE caches even POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  xdr.onerror = function() {
    debug('onerror');
    self._error();
  };
  xdr.ontimeout = function() {
    debug('ontimeout');
    self._error();
  };
  xdr.onprogress = function() {
    debug('progress', xdr.responseText);
    self.emit('chunk', 200, xdr.responseText);
  };
  xdr.onload = function() {
    debug('load');
    self.emit('finish', 200, xdr.responseText);
    self._cleanup(false);
  };
  this.xdr = xdr;
  this.unloadRef = eventUtils.unloadAdd(function() {
    self._cleanup(true);
  });
  try {
    // Fails with AccessDenied if port number is bogus
    this.xdr.open(method, url);
    if (this.timeout) {
      this.xdr.timeout = this.timeout;
    }
    this.xdr.send(payload);
  } catch (x) {
    this._error();
  }
};

XDRObject.prototype._error = function() {
  this.emit('finish', 0, '');
  this._cleanup(false);
};

XDRObject.prototype._cleanup = function(abort) {
  debug('cleanup', abort);
  if (!this.xdr) {
    return;
  }
  this.removeAllListeners();
  eventUtils.unloadDel(this.unloadRef);

  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
  if (abort) {
    try {
      this.xdr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xdr = null;
};

XDRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

// IE 8/9 if the request target uses the same scheme - #79
XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());

module.exports = XDRObject;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/browser":44,"../../utils/event":46,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],35:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , XhrDriver = require('../driver/xhr')
  ;

function XHRCorsObject(method, url, payload, opts) {
  XhrDriver.call(this, method, url, payload, opts);
}

inherits(XHRCorsObject, XhrDriver);

XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

module.exports = XHRCorsObject;

},{"../driver/xhr":17,"inherits":57}],36:[function(require,module,exports){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  ;

function XHRFake(/* method, url, payload, opts */) {
  var self = this;
  EventEmitter.call(this);

  this.to = setTimeout(function() {
    self.emit('finish', 200, '{}');
  }, XHRFake.timeout);
}

inherits(XHRFake, EventEmitter);

XHRFake.prototype.close = function() {
  clearTimeout(this.to);
};

XHRFake.timeout = 2000;

module.exports = XHRFake;

},{"events":3,"inherits":57}],37:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , XhrDriver = require('../driver/xhr')
  ;

function XHRLocalObject(method, url, payload /*, opts */) {
  XhrDriver.call(this, method, url, payload, {
    noCredentials: true
  });
}

inherits(XHRLocalObject, XhrDriver);

XHRLocalObject.enabled = XhrDriver.enabled;

module.exports = XHRLocalObject;

},{"../driver/xhr":17,"inherits":57}],38:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('../utils/event')
  , urlUtils = require('../utils/url')
  , inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , WebsocketDriver = require('./driver/websocket')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:websocket');
}

function WebSocketTransport(transUrl, ignore, options) {
  if (!WebSocketTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  EventEmitter.call(this);
  debug('constructor', transUrl);

  var self = this;
  var url = urlUtils.addPath(transUrl, '/websocket');
  if (url.slice(0, 5) === 'https') {
    url = 'wss' + url.slice(5);
  } else {
    url = 'ws' + url.slice(4);
  }
  this.url = url;

  this.ws = new WebsocketDriver(this.url, [], options);
  this.ws.onmessage = function(e) {
    debug('message event', e.data);
    self.emit('message', e.data);
  };
  // Firefox has an interesting bug. If a websocket connection is
  // created after onunload, it stays alive even when user
  // navigates away from the page. In such situation let's lie -
  // let's not open the ws connection at all. See:
  // https://github.com/sockjs/sockjs-client/issues/28
  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload');
    self.ws.close();
  });
  this.ws.onclose = function(e) {
    debug('close event', e.code, e.reason);
    self.emit('close', e.code, e.reason);
    self._cleanup();
  };
  this.ws.onerror = function(e) {
    debug('error event', e);
    self.emit('close', 1006, 'WebSocket connection broken');
    self._cleanup();
  };
}

inherits(WebSocketTransport, EventEmitter);

WebSocketTransport.prototype.send = function(data) {
  var msg = '[' + data + ']';
  debug('send', msg);
  this.ws.send(msg);
};

WebSocketTransport.prototype.close = function() {
  debug('close');
  var ws = this.ws;
  this._cleanup();
  if (ws) {
    ws.close();
  }
};

WebSocketTransport.prototype._cleanup = function() {
  debug('_cleanup');
  var ws = this.ws;
  if (ws) {
    ws.onmessage = ws.onclose = ws.onerror = null;
  }
  utils.unloadDel(this.unloadRef);
  this.unloadRef = this.ws = null;
  this.removeAllListeners();
};

WebSocketTransport.enabled = function() {
  debug('enabled');
  return !!WebsocketDriver;
};
WebSocketTransport.transportName = 'websocket';

// In theory, ws should require 1 round trip. But in chrome, this is
// not very stable over SSL. Most likely a ws connection requires a
// separate SSL connection, in which case 2 round trips are an
// absolute minumum.
WebSocketTransport.roundTrips = 2;

module.exports = WebSocketTransport;

}).call(this,{ env: {} })

},{"../utils/event":46,"../utils/url":52,"./driver/websocket":19,"debug":55,"events":3,"inherits":57}],39:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XdrStreamingTransport = require('./xdr-streaming')
  , XhrReceiver = require('./receiver/xhr')
  , XDRObject = require('./sender/xdr')
  ;

function XdrPollingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
}

inherits(XdrPollingTransport, AjaxBasedTransport);

XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
XdrPollingTransport.transportName = 'xdr-polling';
XdrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrPollingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"./xdr-streaming":40,"inherits":57}],40:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XDRObject = require('./sender/xdr')
  ;

// According to:
//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

function XdrStreamingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
}

inherits(XdrStreamingTransport, AjaxBasedTransport);

XdrStreamingTransport.enabled = function(info) {
  if (info.cookie_needed || info.nullOrigin) {
    return false;
  }
  return XDRObject.enabled && info.sameScheme;
};

XdrStreamingTransport.transportName = 'xdr-streaming';
XdrStreamingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrStreamingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"inherits":57}],41:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XHRCorsObject = require('./sender/xhr-cors')
  , XHRLocalObject = require('./sender/xhr-local')
  ;

function XhrPollingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
}

inherits(XhrPollingTransport, AjaxBasedTransport);

XhrPollingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }

  if (XHRLocalObject.enabled && info.sameOrigin) {
    return true;
  }
  return XHRCorsObject.enabled;
};

XhrPollingTransport.transportName = 'xhr-polling';
XhrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XhrPollingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":57}],42:[function(require,module,exports){
(function (global){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XHRCorsObject = require('./sender/xhr-cors')
  , XHRLocalObject = require('./sender/xhr-local')
  , browser = require('../utils/browser')
  ;

function XhrStreamingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
}

inherits(XhrStreamingTransport, AjaxBasedTransport);

XhrStreamingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }
  // Opera doesn't support xhr-streaming #60
  // But it might be able to #92
  if (browser.isOpera()) {
    return false;
  }

  return XHRCorsObject.enabled;
};

XhrStreamingTransport.transportName = 'xhr-streaming';
XhrStreamingTransport.roundTrips = 2; // preflight, ajax

// Safari gets confused when a streaming ajax request is started
// before onload. This causes the load indicator to spin indefinetely.
// Only require body when used in a browser
XhrStreamingTransport.needBody = !!global.document;

module.exports = XhrStreamingTransport;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../utils/browser":44,"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":57}],43:[function(require,module,exports){
(function (global){
'use strict';

if (global.crypto && global.crypto.getRandomValues) {
  module.exports.randomBytes = function(length) {
    var bytes = new Uint8Array(length);
    global.crypto.getRandomValues(bytes);
    return bytes;
  };
} else {
  module.exports.randomBytes = function(length) {
    var bytes = new Array(length);
    for (var i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
    return bytes;
  };
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],44:[function(require,module,exports){
(function (global){
'use strict';

module.exports = {
  isOpera: function() {
    return global.navigator &&
      /opera/i.test(global.navigator.userAgent);
  }

, isKonqueror: function() {
    return global.navigator &&
      /konqueror/i.test(global.navigator.userAgent);
  }

  // #187 wrap document.domain in try/catch because of WP8 from file:///
, hasDomain: function () {
    // non-browser client always has a domain
    if (!global.document) {
      return true;
    }

    try {
      return !!global.document.domain;
    } catch (e) {
      return false;
    }
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],45:[function(require,module,exports){
'use strict';

var JSON3 = require('json3');

// Some extra characters that Chrome gets wrong, and substitutes with
// something else on the wire.
// eslint-disable-next-line no-control-regex
var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g
  , extraLookup;

// This may be quite slow, so let's delay until user actually uses bad
// characters.
var unrollLookup = function(escapable) {
  var i;
  var unrolled = {};
  var c = [];
  for (i = 0; i < 65536; i++) {
    c.push( String.fromCharCode(i) );
  }
  escapable.lastIndex = 0;
  c.join('').replace(escapable, function(a) {
    unrolled[ a ] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    return '';
  });
  escapable.lastIndex = 0;
  return unrolled;
};

// Quote string, also taking care of unicode characters that browsers
// often break. Especially, take care of unicode surrogates:
// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
module.exports = {
  quote: function(string) {
    var quoted = JSON3.stringify(string);

    // In most cases this should be very fast and good enough.
    extraEscapable.lastIndex = 0;
    if (!extraEscapable.test(quoted)) {
      return quoted;
    }

    if (!extraLookup) {
      extraLookup = unrollLookup(extraEscapable);
    }

    return quoted.replace(extraEscapable, function(a) {
      return extraLookup[a];
    });
  }
};

},{"json3":58}],46:[function(require,module,exports){
(function (global){
'use strict';

var random = require('./random');

var onUnload = {}
  , afterUnload = false
    // detect google chrome packaged apps because they don't allow the 'unload' event
  , isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime
  ;

module.exports = {
  attachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.addEventListener(event, listener, false);
    } else if (global.document && global.attachEvent) {
      // IE quirks.
      // According to: http://stevesouders.com/misc/test-postmessage.php
      // the message gets delivered only to 'document', not 'window'.
      global.document.attachEvent('on' + event, listener);
      // I get 'window' for ie8.
      global.attachEvent('on' + event, listener);
    }
  }

, detachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.removeEventListener(event, listener, false);
    } else if (global.document && global.detachEvent) {
      global.document.detachEvent('on' + event, listener);
      global.detachEvent('on' + event, listener);
    }
  }

, unloadAdd: function(listener) {
    if (isChromePackagedApp) {
      return null;
    }

    var ref = random.string(8);
    onUnload[ref] = listener;
    if (afterUnload) {
      setTimeout(this.triggerUnloadCallbacks, 0);
    }
    return ref;
  }

, unloadDel: function(ref) {
    if (ref in onUnload) {
      delete onUnload[ref];
    }
  }

, triggerUnloadCallbacks: function() {
    for (var ref in onUnload) {
      onUnload[ref]();
      delete onUnload[ref];
    }
  }
};

var unloadTriggered = function() {
  if (afterUnload) {
    return;
  }
  afterUnload = true;
  module.exports.triggerUnloadCallbacks();
};

// 'unload' alone is not reliable in opera within an iframe, but we
// can't use `beforeunload` as IE fires it on javascript: links.
if (!isChromePackagedApp) {
  module.exports.attachEvent('unload', unloadTriggered);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./random":50}],47:[function(require,module,exports){
(function (process,global){
'use strict';

var eventUtils = require('./event')
  , JSON3 = require('json3')
  , browser = require('./browser')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:iframe');
}

module.exports = {
  WPrefix: '_jp'
, currentWindowId: null

, polluteGlobalNamespace: function() {
    if (!(module.exports.WPrefix in global)) {
      global[module.exports.WPrefix] = {};
    }
  }

, postMessage: function(type, data) {
    if (global.parent !== global) {
      global.parent.postMessage(JSON3.stringify({
        windowId: module.exports.currentWindowId
      , type: type
      , data: data || ''
      }), '*');
    } else {
      debug('Cannot postMessage, no parent window.', type, data);
    }
  }

, createIframe: function(iframeUrl, errorCallback) {
    var iframe = global.document.createElement('iframe');
    var tref, unloadRef;
    var unattach = function() {
      debug('unattach');
      clearTimeout(tref);
      // Explorer had problems with that.
      try {
        iframe.onload = null;
      } catch (x) {
        // intentionally empty
      }
      iframe.onerror = null;
    };
    var cleanup = function() {
      debug('cleanup');
      if (iframe) {
        unattach();
        // This timeout makes chrome fire onbeforeunload event
        // within iframe. Without the timeout it goes straight to
        // onunload.
        setTimeout(function() {
          if (iframe) {
            iframe.parentNode.removeChild(iframe);
          }
          iframe = null;
        }, 0);
        eventUtils.unloadDel(unloadRef);
      }
    };
    var onerror = function(err) {
      debug('onerror', err);
      if (iframe) {
        cleanup();
        errorCallback(err);
      }
    };
    var post = function(msg, origin) {
      debug('post', msg, origin);
      setTimeout(function() {
        try {
          // When the iframe is not loaded, IE raises an exception
          // on 'contentWindow'.
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(msg, origin);
          }
        } catch (x) {
          // intentionally empty
        }
      }, 0);
    };

    iframe.src = iframeUrl;
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.onerror = function() {
      onerror('onerror');
    };
    iframe.onload = function() {
      debug('onload');
      // `onload` is triggered before scripts on the iframe are
      // executed. Give it few seconds to actually load stuff.
      clearTimeout(tref);
      tref = setTimeout(function() {
        onerror('onload timeout');
      }, 2000);
    };
    global.document.body.appendChild(iframe);
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }

/* eslint no-undef: "off", new-cap: "off" */
, createHtmlfile: function(iframeUrl, errorCallback) {
    var axo = ['Active'].concat('Object').join('X');
    var doc = new global[axo]('htmlfile');
    var tref, unloadRef;
    var iframe;
    var unattach = function() {
      clearTimeout(tref);
      iframe.onerror = null;
    };
    var cleanup = function() {
      if (doc) {
        unattach();
        eventUtils.unloadDel(unloadRef);
        iframe.parentNode.removeChild(iframe);
        iframe = doc = null;
        CollectGarbage();
      }
    };
    var onerror = function(r) {
      debug('onerror', r);
      if (doc) {
        cleanup();
        errorCallback(r);
      }
    };
    var post = function(msg, origin) {
      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        setTimeout(function() {
          if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage(msg, origin);
          }
        }, 0);
      } catch (x) {
        // intentionally empty
      }
    };

    doc.open();
    doc.write('<html><s' + 'cript>' +
              'document.domain="' + global.document.domain + '";' +
              '</s' + 'cript></html>');
    doc.close();
    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
    var c = doc.createElement('div');
    doc.body.appendChild(c);
    iframe = doc.createElement('iframe');
    c.appendChild(iframe);
    iframe.src = iframeUrl;
    iframe.onerror = function() {
      onerror('onerror');
    };
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }
};

module.exports.iframeEnabled = false;
if (global.document) {
  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
  // huge delay, or not at all.
  module.exports.iframeEnabled = (typeof global.postMessage === 'function' ||
    typeof global.postMessage === 'object') && (!browser.isKonqueror());
}

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./browser":44,"./event":46,"debug":55,"json3":58}],48:[function(require,module,exports){
(function (global){
'use strict';

var logObject = {};
['log', 'debug', 'warn'].forEach(function (level) {
  var levelExists;

  try {
    levelExists = global.console && global.console[level] && global.console[level].apply;
  } catch(e) {
    // do nothing
  }

  logObject[level] = levelExists ? function () {
    return global.console[level].apply(global.console, arguments);
  } : (level === 'log' ? function () {} : logObject.log);
});

module.exports = logObject;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],49:[function(require,module,exports){
'use strict';

module.exports = {
  isObject: function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

, extend: function(obj) {
    if (!this.isObject(obj)) {
      return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj;
  }
};

},{}],50:[function(require,module,exports){
'use strict';

/* global crypto:true */
var crypto = require('crypto');

// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
module.exports = {
  string: function(length) {
    var max = _randomStringChars.length;
    var bytes = crypto.randomBytes(length);
    var ret = [];
    for (var i = 0; i < length; i++) {
      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
    }
    return ret.join('');
  }

, number: function(max) {
    return Math.floor(Math.random() * max);
  }

, numberString: function(max) {
    var t = ('' + (max - 1)).length;
    var p = new Array(t + 1).join('0');
    return (p + this.number(max)).slice(-t);
  }
};

},{"crypto":43}],51:[function(require,module,exports){
(function (process){
'use strict';

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:transport');
}

module.exports = function(availableTransports) {
  return {
    filterToEnabled: function(transportsWhitelist, info) {
      var transports = {
        main: []
      , facade: []
      };
      if (!transportsWhitelist) {
        transportsWhitelist = [];
      } else if (typeof transportsWhitelist === 'string') {
        transportsWhitelist = [transportsWhitelist];
      }

      availableTransports.forEach(function(trans) {
        if (!trans) {
          return;
        }

        if (trans.transportName === 'websocket' && info.websocket === false) {
          debug('disabled from server', 'websocket');
          return;
        }

        if (transportsWhitelist.length &&
            transportsWhitelist.indexOf(trans.transportName) === -1) {
          debug('not in whitelist', trans.transportName);
          return;
        }

        if (trans.enabled(info)) {
          debug('enabled', trans.transportName);
          transports.main.push(trans);
          if (trans.facadeTransport) {
            transports.facade.push(trans.facadeTransport);
          }
        } else {
          debug('disabled', trans.transportName);
        }
      });
      return transports;
    }
  };
};

}).call(this,{ env: {} })

},{"debug":55}],52:[function(require,module,exports){
(function (process){
'use strict';

var URL = require('url-parse');

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:url');
}

module.exports = {
  getOrigin: function(url) {
    if (!url) {
      return null;
    }

    var p = new URL(url);
    if (p.protocol === 'file:') {
      return null;
    }

    var port = p.port;
    if (!port) {
      port = (p.protocol === 'https:') ? '443' : '80';
    }

    return p.protocol + '//' + p.hostname + ':' + port;
  }

, isOriginEqual: function(a, b) {
    var res = this.getOrigin(a) === this.getOrigin(b);
    debug('same', a, b, res);
    return res;
  }

, isSchemeEqual: function(a, b) {
    return (a.split(':')[0] === b.split(':')[0]);
  }

, addPath: function (url, path) {
    var qs = url.split('?');
    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
  }

, addQuery: function (url, q) {
    return url + (url.indexOf('?') === -1 ? ('?' + q) : ('&' + q));
  }
};

}).call(this,{ env: {} })

},{"debug":55,"url-parse":61}],53:[function(require,module,exports){
module.exports = '1.4.0';

},{}],54:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],55:[function(require,module,exports){
(function (process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = require('./common')(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};


}).call(this,{ env: {} })

},{"./common":56}],56:[function(require,module,exports){
"use strict";

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = require('ms');
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;


},{"ms":54}],57:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],58:[function(require,module,exports){
(function (global){
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root["Object"]());
    exports || (exports = root["Object"]());

    // Native constructor aliases.
    var Number = context["Number"] || root["Number"],
        String = context["String"] || root["String"],
        Object = context["Object"] || root["Object"],
        Date = context["Date"] || root["Date"],
        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
        TypeError = context["TypeError"] || root["TypeError"],
        Math = context["Math"] || root["Math"],
        nativeJSON = context["JSON"] || root["JSON"];

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty, forEach, undef;

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = objectProto.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
            // The *proto* property cannot be set multiple times in recent
            // versions of Firefox and SeaMonkey.
            "toString": 1
          }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the object's prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                result += Escapes[charCode];
                break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += useCharIndex ? symbols[index] : value.charAt(index);
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        exports.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (objectTypes[typeof filter] && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports["runInContext"] = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root["JSON3"],
        isRestored = false;

    var JSON3 = runInContext(root, (root["JSON3"] = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root["JSON3"] = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],59:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

},{}],60:[function(require,module,exports){
'use strict';

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};

},{}],61:[function(require,module,exports){
(function (global){
'use strict';

var required = require('requires-port')
  , qs = require('querystringify')
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"querystringify":59,"requires-port":60}]},{},[1])(1)
});


//# sourceMappingURL=sockjs.js.map


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable
  no-unused-vars
*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function BaseClient() {
    _classCallCheck(this, BaseClient);
  }

  _createClass(BaseClient, null, [{
    key: "getClientPath",
    value: function getClientPath(options) {
      throw new Error('Client needs implementation');
    }
  }]);

  return BaseClient;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).

var ansiHTML = __webpack_require__(10);

var _require = __webpack_require__(11),
    AllHtmlEntities = _require.AllHtmlEntities;

var entities = new AllHtmlEntities();
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};
var overlayIframe = null;
var overlayDiv = null;
var lastOnOverlayDivReady = null;
ansiHTML.setColors(colors);

function createOverlayIframe(onIframeLoad) {
  var iframe = document.createElement('iframe');
  iframe.id = 'webpack-dev-server-client-overlay';
  iframe.src = 'about:blank';
  iframe.style.position = 'fixed';
  iframe.style.left = 0;
  iframe.style.top = 0;
  iframe.style.right = 0;
  iframe.style.bottom = 0;
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  iframe.style.zIndex = 9999999999;
  iframe.onload = onIframeLoad;
  return iframe;
}

function addOverlayDivTo(iframe) {
  var div = iframe.contentDocument.createElement('div');
  div.id = 'webpack-dev-server-client-overlay-div';
  div.style.position = 'fixed';
  div.style.boxSizing = 'border-box';
  div.style.left = 0;
  div.style.top = 0;
  div.style.right = 0;
  div.style.bottom = 0;
  div.style.width = '100vw';
  div.style.height = '100vh';
  div.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
  div.style.color = '#E8E8E8';
  div.style.fontFamily = 'Menlo, Consolas, monospace';
  div.style.fontSize = 'large';
  div.style.padding = '2rem';
  div.style.lineHeight = '1.2';
  div.style.whiteSpace = 'pre-wrap';
  div.style.overflow = 'auto';
  iframe.contentDocument.body.appendChild(div);
  return div;
}

function ensureOverlayDivExists(onOverlayDivReady) {
  if (overlayDiv) {
    // Everything is ready, call the callback right away.
    onOverlayDivReady(overlayDiv);
    return;
  } // Creating an iframe may be asynchronous so we'll schedule the callback.
  // In case of multiple calls, last callback wins.


  lastOnOverlayDivReady = onOverlayDivReady;

  if (overlayIframe) {
    // We've already created it.
    return;
  } // Create iframe and, when it is ready, a div inside it.


  overlayIframe = createOverlayIframe(function () {
    overlayDiv = addOverlayDivTo(overlayIframe); // Now we can talk!

    lastOnOverlayDivReady(overlayDiv);
  }); // Zalgo alert: onIframeLoad() will be called either synchronously
  // or asynchronously depending on the browser.
  // We delay adding it so `overlayIframe` is set when `onIframeLoad` fires.

  document.body.appendChild(overlayIframe);
} // Successful compilation.


function clear() {
  if (!overlayDiv) {
    // It is not there in the first place.
    return;
  } // Clean up and reset internal state.


  document.body.removeChild(overlayIframe);
  overlayDiv = null;
  overlayIframe = null;
  lastOnOverlayDivReady = null;
} // Compilation with errors (e.g. syntax error or missing modules).


function showMessage(messages) {
  ensureOverlayDivExists(function (div) {
    // Make it look similar to our terminal.
    div.innerHTML = "<span style=\"color: #".concat(colors.red, "\">Failed to compile.</span><br><br>").concat(ansiHTML(entities.encode(messages[0])));
  });
}

module.exports = {
  clear: clear,
  showMessage: showMessage
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  XmlEntities: __webpack_require__(12),
  Html4Entities: __webpack_require__(13),
  Html5Entities: __webpack_require__(14),
  AllHtmlEntities: __webpack_require__(14)
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};

var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};

var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};

/**
 * @constructor
 */
function XmlEntities() {}

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/<|>|"|'|&/g, function(s) {
        return CHAR_S_INDEX[s];
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encode = function(str) {
    return new XmlEntities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
        if (s.charAt(1) === '#') {
            var code = s.charAt(2).toLowerCase() === 'x' ?
                parseInt(s.substr(3), 16) :
                parseInt(s.substr(2));

            if (isNaN(code) || code < -32768 || code > 65535) {
                return '';
            }
            return String.fromCharCode(code);
        }
        return ALPHA_INDEX[s] || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.decode = function(str) {
    return new XmlEntities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var alpha = CHAR_INDEX[c];
        if (alpha) {
            result += "&" + alpha + ";";
            i++;
            continue;
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonUTF = function(str) {
    return new XmlEntities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLenght = str.length;
    var result = '';
    var i = 0;
    while (i < strLenght) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonASCII = function(str) {
    return new XmlEntities().encodeNonASCII(str);
 };

module.exports = XmlEntities;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];

var alphaIndex = {};
var numIndex = {};

var i = 0;
var length = HTML_ALPHA.length;
while (i < length) {
    var a = HTML_ALPHA[i];
    var c = HTML_CODES[i];
    alphaIndex[a] = String.fromCharCode(c);
    numIndex[c] = a;
    i++;
}

/**
 * @constructor
 */
function Html4Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1).toLowerCase() === 'x' ?
                parseInt(entity.substr(2), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.decode = function(str) {
    return new Html4Entities().decode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var alpha = numIndex[str.charCodeAt(i)];
        result += alpha ? "&" + alpha + ";" : str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encode = function(str) {
    return new Html4Entities().encode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var cc = str.charCodeAt(i);
        var alpha = numIndex[cc];
        if (alpha) {
            result += "&" + alpha + ";";
        } else if (cc < 32 || cc > 126) {
            result += "&#" + cc + ";";
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonUTF = function(str) {
    return new Html4Entities().encodeNonUTF(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonASCII = function(str) {
    return new Html4Entities().encodeNonASCII(str);
};

module.exports = Html4Entities;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];

var alphaIndex = {};
var charIndex = {};

createIndexes(alphaIndex, charIndex);

/**
 * @constructor
 */
function Html5Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1) === 'x' ?
                parseInt(entity.substr(2).toLowerCase(), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.decode = function(str) {
    return new Html5Entities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var charInfo = charIndex[str.charCodeAt(i)];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        result += str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encode = function(str) {
    return new Html5Entities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var charInfo = charIndex[c];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonUTF = function(str) {
    return new Html5Entities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonASCII = function(str) {
    return new Html5Entities().encodeNonASCII(str);
 };

/**
 * @param {Object} alphaIndex Passed by reference.
 * @param {Object} charIndex Passed by reference.
 */
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    var _results = [];
    while (i--) {
        var e = ENTITIES[i];
        var alpha = e[0];
        var chars = e[1];
        var chr = chars[0];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chars[1]) {
            var chr2 = chars[1];
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            _results.push(addChar && (charInfo[chr2] = alpha));
        } else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            _results.push(addChar && (charInfo[''] = alpha));
        }
    }
}

module.exports = Html5Entities;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var log = __webpack_require__(16).getLogger('webpack-dev-server');

var INFO = 'info';
var WARN = 'warn';
var ERROR = 'error';
var DEBUG = 'debug';
var TRACE = 'trace';
var SILENT = 'silent'; // deprecated
// TODO: remove these at major released
// https://github.com/webpack/webpack-dev-server/pull/1825

var WARNING = 'warning';
var NONE = 'none'; // Set the default log level

log.setDefaultLevel(INFO);

function setLogLevel(level) {
  switch (level) {
    case INFO:
    case WARN:
    case ERROR:
    case DEBUG:
    case TRACE:
      log.setLevel(level);
      break;
    // deprecated

    case WARNING:
      // loglevel's warning name is different from webpack's
      log.setLevel('warn');
      break;
    // deprecated

    case NONE:
    case SILENT:
      log.disableAll();
      break;

    default:
      log.error("[WDS] Unknown clientLogLevel '".concat(level, "'"));
  }
}

module.exports = {
  log: log,
  setLogLevel: setLogLevel
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    return defaultLogger;
}));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __resourceQuery WorkerGlobalScope self */
// Send messages to the outside, so plugins can consume it.

function sendMsg(type, data) {
  if (typeof self !== 'undefined' && (typeof WorkerGlobalScope === 'undefined' || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, '*');
  }
}

module.exports = sendMsg;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global WorkerGlobalScope self */

var _require = __webpack_require__(15),
    log = _require.log;

function reloadApp(_ref, _ref2) {
  var hotReload = _ref.hotReload,
      hot = _ref.hot,
      liveReload = _ref.liveReload;
  var isUnloading = _ref2.isUnloading,
      currentHash = _ref2.currentHash;

  if (isUnloading || !hotReload) {
    return;
  }

  if (hot) {
    log.info('[WDS] App hot update...');

    var hotEmitter = __webpack_require__(19);

    hotEmitter.emit('webpackHotUpdate', currentHash);

    if (typeof self !== 'undefined' && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(currentHash), '*');
    }
  } // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload) {
      var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

      var intervalId = self.setInterval(function () {
        if (rootWindow.location.protocol !== 'about:') {
          // reload immediately if protocol is valid
          applyReload(rootWindow, intervalId);
        } else {
          rootWindow = rootWindow.parent;

          if (rootWindow.parent === rootWindow) {
            // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
            applyReload(rootWindow, intervalId);
          }
        }
      });
    }

  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    log.info('[WDS] App updated. Reloading...');
    rootWindow.location.reload();
  }
}

module.exports = reloadApp;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(20);
module.exports = new EventEmitter();


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global self */

var url = __webpack_require__(22);

var getCurrentScriptSource = __webpack_require__(29);

function createSocketUrl(resourceQuery, currentLocation) {
  var urlParts;

  if (typeof resourceQuery === 'string' && resourceQuery !== '') {
    // If this bundle is inlined, use the resource query to get the correct url.
    // format is like `?http://0.0.0.0:8096&sockPort=8097&sockHost=localhost`
    urlParts = url.parse(resourceQuery // strip leading `?` from query string to get a valid URL
    .substr(1) // replace first `&` with `?` to have a valid query string
    .replace('&', '?'), true);
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptHost = getCurrentScriptSource();
    urlParts = url.parse(scriptHost || '/', true, true);
  } // Use parameter to allow passing location in unit tests


  if (typeof currentLocation === 'string' && currentLocation !== '') {
    currentLocation = url.parse(currentLocation);
  } else {
    currentLocation = self.location;
  }

  return getSocketUrl(urlParts, currentLocation);
}
/*
 * Gets socket URL based on Script Source/Location
 * (scriptSrc: URL, location: URL) -> URL
 */


function getSocketUrl(urlParts, loc) {
  var auth = urlParts.auth,
      query = urlParts.query;
  var hostname = urlParts.hostname,
      protocol = urlParts.protocol,
      port = urlParts.port;

  if (!port || port === '0') {
    port = loc.port;
  } // check ipv4 and ipv6 `all hostname`
  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384


  if ((hostname === '0.0.0.0' || hostname === '::') && loc.hostname && loc.protocol.indexOf('http') === 0) {
    hostname = loc.hostname;
  } // `hostname` can be empty when the script path is relative. In that case, specifying
  // a protocol would result in an invalid URL.
  // When https is used in the app, secure websockets are always necessary
  // because the browser doesn't accept non-secure websockets.


  if (hostname && hostname !== '127.0.0.1' && (loc.protocol === 'https:' || urlParts.hostname === '0.0.0.0')) {
    protocol = loc.protocol;
  } // all of these sock url params are optionally passed in through
  // resourceQuery, so we need to fall back to the default if
  // they are not provided


  var sockHost = query.sockHost || hostname;
  var sockPath = query.sockPath || '/sockjs-node';
  var sockPort = query.sockPort || port;

  if (sockPort === 'location') {
    sockPort = loc.port;
  }

  return url.format({
    protocol: protocol,
    auth: auth,
    hostname: sockHost,
    port: sockPort,
    // If sockPath is provided it'll be passed in via the resourceQuery as a
    // query param so it has to be parsed out of the querystring in order for the
    // client to open the socket to the correct location.
    pathname: sockPath
  });
}

module.exports = createSocketUrl;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(23);
var util = __webpack_require__(25);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(26);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(27);
exports.encode = exports.stringify = __webpack_require__(28);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute('src');
  } // Fall back to getting all scripts in the document.


  var scriptElements = document.scripts || [];
  var currentScript = scriptElements[scriptElements.length - 1];

  if (currentScript) {
    return currentScript.getAttribute('src');
  } // Fail as there was no script to use.


  throw new Error('[WDS] Failed to get current script source.');
}

module.exports = getCurrentScriptSource;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": 31
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 30;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};

module.exports.formatError = function(err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(33);
            var content = __webpack_require__(34);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(35);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*-- Chart --*/\n.bb svg {\n  font: 10px sans-serif;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n.bb path, .bb line {\n  fill: none;\n  stroke: #000; }\n\n.bb text, .bb .bb-button {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none; }\n\n.bb-legend-item-tile,\n.bb-xgrid-focus,\n.bb-ygrid-focus,\n.bb-ygrid,\n.bb-event-rect,\n.bb-bars path {\n  shape-rendering: crispEdges; }\n\n.bb-chart-arc .bb-gauge-value {\n  fill: #000; }\n\n.bb-chart-arc path {\n  stroke: #fff; }\n\n.bb-chart-arc rect {\n  stroke: #fff;\n  stroke-width: 1; }\n\n.bb-chart-arc text {\n  fill: #fff;\n  font-size: 13px; }\n\n/*-- Axis --*/\n.bb-axis {\n  shape-rendering: crispEdges; }\n\n/*-- Grid --*/\n.bb-grid line {\n  stroke: #aaa; }\n\n.bb-grid text {\n  fill: #aaa; }\n\n.bb-xgrid, .bb-ygrid {\n  stroke-dasharray: 3 3; }\n\n/*-- Text on Chart --*/\n.bb-text.bb-empty {\n  fill: #808080;\n  font-size: 2em; }\n\n/*-- Line --*/\n.bb-line {\n  stroke-width: 1px; }\n\n/*-- Point --*/\n.bb-circle._expanded_ {\n  stroke-width: 1px;\n  stroke: white; }\n\n.bb-selected-circle {\n  fill: white;\n  stroke-width: 2px; }\n\n/*-- Bar --*/\n.bb-bar {\n  stroke-width: 0; }\n  .bb-bar._expanded_ {\n    fill-opacity: 0.75; }\n\n/*-- Focus --*/\n.bb-target.bb-focused, .bb-circles.bb-focused {\n  opacity: 1; }\n\n.bb-target.bb-focused path.bb-line, .bb-target.bb-focused path.bb-step, .bb-circles.bb-focused path.bb-line, .bb-circles.bb-focused path.bb-step {\n  stroke-width: 2px; }\n\n.bb-target.bb-defocused, .bb-circles.bb-defocused {\n  opacity: 0.3 !important; }\n  .bb-target.bb-defocused .text-overlapping, .bb-circles.bb-defocused .text-overlapping {\n    opacity: .05 !important; }\n\n/*-- Region --*/\n.bb-region {\n  fill: steelblue;\n  fill-opacity: .1; }\n\n/*-- Zoom region --*/\n.bb-zoom-brush {\n  fill-opacity: .1; }\n\n/*-- Brush --*/\n.bb-brush .extent {\n  fill-opacity: .1; }\n\n/*-- Select - Drag --*/\n/*-- Legend --*/\n.bb-legend-item {\n  font-size: 12px;\n  user-select: none; }\n\n.bb-legend-item-hidden {\n  opacity: 0.15; }\n\n.bb-legend-background {\n  opacity: 0.75;\n  fill: white;\n  stroke: lightgray;\n  stroke-width: 1; }\n\n/*-- Title --*/\n.bb-title {\n  font: 14px sans-serif; }\n\n/*-- Tooltip --*/\n.bb-tooltip-container {\n  z-index: 10;\n  user-select: none; }\n\n.bb-tooltip {\n  border-collapse: collapse;\n  border-spacing: 0;\n  background-color: #fff;\n  empty-cells: show;\n  opacity: 0.9;\n  -webkit-box-shadow: 7px 7px 12px -9px #777777;\n  -moz-box-shadow: 7px 7px 12px -9px #777777;\n  box-shadow: 7px 7px 12px -9px #777777; }\n  .bb-tooltip tr {\n    border: 1px solid #CCC; }\n  .bb-tooltip th {\n    background-color: #aaa;\n    font-size: 14px;\n    padding: 2px 5px;\n    text-align: left;\n    color: #FFF; }\n  .bb-tooltip td {\n    font-size: 13px;\n    padding: 3px 6px;\n    background-color: #fff;\n    border-left: 1px dotted #999; }\n    .bb-tooltip td > span, .bb-tooltip td > svg {\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      margin-right: 6px; }\n  .bb-tooltip.value {\n    text-align: right; }\n\n/*-- Area --*/\n.bb-area {\n  stroke-width: 0;\n  opacity: 0.2; }\n\n/*-- Arc --*/\n.bb-chart-arcs-title {\n  dominant-baseline: middle;\n  font-size: 1.3em; }\n\n.bb-chart-arcs-gauge-title {\n  dominant-baseline: middle;\n  font-size: 2.7em; }\n\n.bb-chart-arcs .bb-chart-arcs-background {\n  fill: #e0e0e0;\n  stroke: #fff; }\n\n.bb-chart-arcs .bb-chart-arcs-gauge-unit {\n  fill: #000;\n  font-size: 16px; }\n\n.bb-chart-arcs .bb-chart-arcs-gauge-max {\n  fill: #777; }\n\n.bb-chart-arcs .bb-chart-arcs-gauge-min {\n  fill: #777; }\n\n/*-- Radar --*/\n.bb-chart-radars .bb-levels polygon {\n  fill: none;\n  stroke: #848282;\n  stroke-width: .5px; }\n\n.bb-chart-radars .bb-levels text {\n  fill: #848282; }\n\n.bb-chart-radars .bb-axis line {\n  stroke: #848282;\n  stroke-width: .5px; }\n\n.bb-chart-radars .bb-axis text {\n  font-size: 1.15em;\n  cursor: default; }\n\n.bb-chart-radars .bb-shapes polygon {\n  fill-opacity: .2;\n  stroke-width: 1px; }\n\n/*-- Button --*/\n.bb-button {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n  .bb-button .bb-zoom-reset {\n    font-size: 11px;\n    border: solid 1px #ccc;\n    background-color: #fff;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__43__;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__44__;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__45__;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__46__;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__47__;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__48__;

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
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
// EXTERNAL MODULE: external {"commonjs":"d3-time-format","commonjs2":"d3-time-format","amd":"d3-time-format","root":"d3"}
var external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_ = __webpack_require__(36);

// EXTERNAL MODULE: external {"commonjs":"d3-selection","commonjs2":"d3-selection","amd":"d3-selection","root":"d3"}
var external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_ = __webpack_require__(37);

// EXTERNAL MODULE: external {"commonjs":"d3-transition","commonjs2":"d3-transition","amd":"d3-transition","root":"d3"}
var external_commonjs_d3_transition_commonjs2_d3_transition_amd_d3_transition_root_d3_ = __webpack_require__(38);

// CONCATENATED MODULE: ./src/config/classes.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * CSS class names definition
 * @private
 */
/* harmony default export */ var config_classes = ({
  arc: "bb-arc",
  arcLabelLine: "bb-arc-label-line",
  arcs: "bb-arcs",
  area: "bb-area",
  areas: "bb-areas",
  axis: "bb-axis",
  axisX: "bb-axis-x",
  axisXLabel: "bb-axis-x-label",
  axisY: "bb-axis-y",
  axisY2: "bb-axis-y2",
  axisY2Label: "bb-axis-y2-label",
  axisYLabel: "bb-axis-y-label",
  bar: "bb-bar",
  bars: "bb-bars",
  brush: "bb-brush",
  button: "bb-button",
  buttonZoomReset: "bb-zoom-reset",
  chart: "bb-chart",
  chartArc: "bb-chart-arc",
  chartArcs: "bb-chart-arcs",
  chartArcsBackground: "bb-chart-arcs-background",
  chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
  chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
  chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
  chartArcsTitle: "bb-chart-arcs-title",
  chartArcsGaugeTitle: "bb-chart-arcs-gauge-title",
  chartBar: "bb-chart-bar",
  chartBars: "bb-chart-bars",
  chartCircles: "bb-chart-circles",
  chartLine: "bb-chart-line",
  chartLines: "bb-chart-lines",
  chartRadar: "bb-chart-radar",
  chartRadars: "bb-chart-radars",
  chartText: "bb-chart-text",
  chartTexts: "bb-chart-texts",
  circle: "bb-circle",
  circles: "bb-circles",
  colorPattern: "bb-color-pattern",
  colorScale: "bb-colorscale",
  defocused: "bb-defocused",
  dragarea: "bb-dragarea",
  empty: "bb-empty",
  eventRect: "bb-event-rect",
  eventRects: "bb-event-rects",
  eventRectsMultiple: "bb-event-rects-multiple",
  eventRectsSingle: "bb-event-rects-single",
  focused: "bb-focused",
  gaugeValue: "bb-gauge-value",
  grid: "bb-grid",
  gridLines: "bb-grid-lines",
  legendBackground: "bb-legend-background",
  legendItem: "bb-legend-item",
  legendItemEvent: "bb-legend-item-event",
  legendItemFocused: "bb-legend-item-focused",
  legendItemHidden: "bb-legend-item-hidden",
  legendItemPoint: "bb-legend-item-point",
  legendItemTile: "bb-legend-item-tile",
  level: "bb-level",
  levels: "bb-levels",
  line: "bb-line",
  lines: "bb-lines",
  region: "bb-region",
  regions: "bb-regions",
  selectedCircle: "bb-selected-circle",
  selectedCircles: "bb-selected-circles",
  shape: "bb-shape",
  shapes: "bb-shapes",
  stanfordElements: "bb-stanford-elements",
  stanfordLine: "bb-stanford-line",
  stanfordLines: "bb-stanford-lines",
  stanfordRegion: "bb-stanford-region",
  stanfordRegions: "bb-stanford-regions",
  target: "bb-target",
  text: "bb-text",
  texts: "bb-texts",
  title: "bb-title",
  tooltip: "bb-tooltip",
  tooltipContainer: "bb-tooltip-container",
  tooltipName: "bb-tooltip-name",
  xgrid: "bb-xgrid",
  xgridFocus: "bb-xgrid-focus",
  xgridLine: "bb-xgrid-line",
  xgridLines: "bb-xgrid-lines",
  xgrids: "bb-xgrids",
  ygrid: "bb-ygrid",
  ygridFocus: "bb-ygrid-focus",
  ygridLine: "bb-ygrid-line",
  ygridLines: "bb-ygrid-lines",
  ygrids: "bb-ygrids",
  zoomBrush: "bb-zoom-brush",
  zoomRect: "bb-zoom-rect",
  EXPANDED: "_expanded_",
  SELECTED: "_selected_",
  INCLUDED: "_included_",
  TextOverlapping: "text-overlapping"
});
// CONCATENATED MODULE: ./src/config/Store.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var Store_state = function () {
  return {
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
    currentWidth: 0,
    currentHeight: 0,
    currentData: {
      max: 0
    },
    hasAxis: !1,
    hasRadar: !1,
    // legend
    isLegendRight: !1,
    isLegendInset: !1,
    isLegendTop: !1,
    isLegendLeft: !1,
    legendStep: 0,
    legendItemWidth: 0,
    legendItemHeight: 0,
    legendHasRendered: !1,
    currentMaxTickWidths: {
      x: {
        size: 0,
        domain: ""
      },
      y: {
        size: 0,
        domain: ""
      },
      y2: {
        size: 0,
        domain: ""
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
      idGrid: "",
      idSubchart: "",
      // clipIdForSubchart
      path: "",
      pathXAxis: "",
      pathYAxis: "",
      pathGrid: ""
    },
    // status
    dragStart: null,
    dragging: !1,
    flowing: !1,
    cancelClick: !1,
    mouseover: !1,
    rendered: !1,
    transiting: !1,
    hasNegativeValue: !1,
    hasPositiveValue: !0,
    orgAreaOpacity: "0.2",
    // ID strings
    hiddenTargetIds: [],
    hiddenLegendIds: [],
    focusedTargetIds: [],
    defocusedTargetIds: [],
    // value for Arc
    radius: 0,
    innerRadius: 0,
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


// CONCATENATED MODULE: ./src/config/Options/data/data.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * data config options
 */
/* harmony default export */ var data_data = ({
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
    return id;
  },

  /**
   * Set custom data name.
   * @name data․names
   * @memberof Options
   * @type {Object}
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
   * @type {Object}
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
   * - donut
   * - gauge
   * - line
   * - pie
   * - radar
   * - scatter
   * - spline
   * - step
   * @name data․type
   * @memberof Options
   * @type {String}
   * @default line
   * @example
   * data: {
   *    type: "bar"
   * }
   */
  data_type: undefined,

  /**
   * Set chart type for each data.<br>
   * This setting overwrites data.type setting.
   * - **NOTE:** `radar` type can't be combined with other types.
   * @name data․types
   * @memberof Options
   * @type {Object}
   * @default {}
   * @example
   * data: {
   *   types: {
   *     data1: "bar",
   *     data2: "spline"
   *   }
   * }
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
   * @name data․order
   * @memberof Options
   * @type {String|Function|null}
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
   *       {
   *          id: "data1", id_org: "data1", values: [
   *              {x: 5, value: 250, id: "data1", index: 5, name: "data1"},
   *              ...
   *          ]
   *       }
   *   }
   * }
   */
  data_order: "desc",

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
   * @type {Object}
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
   * Hide each data when the chart appears.<br><br>
   * If true specified, all of data will be hidden. If multiple ids specified as an array, those will be hidden.
   * @name data․hide
   * @memberof Options
   * @type {Boolean|Array}
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
  data_onclick: function data_onclick() {},

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
  data_onover: function data_onover() {},

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
  data_onout: function data_onout() {},

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
   * @type {String}
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
   * @type {String}
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
   *       // x: "name", // it's possible to specify 'x' when category axis
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
   * @type {String}
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
   * @type {String}
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
   *       // x: "name", // it's possible to specify 'x' when category axis
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
   * @type {String}
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
// CONCATENATED MODULE: ./src/config/Options/common/color.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * color config options
 */
/* harmony default export */ var common_color = ({
  /**
   * Set color of the data values
   * @name color
   * @memberof Options
   * @type {Object}
   * @property {String|Object|Function} [color.onover] Set the color value for each data point when mouse/touch onover event occurs.
   * @property {Array} [color.pattern=[]] custom color pattern
   * @property {Function} [color.tiles] if defined, allows use svg's patterns to fill data area. It should return an array of [SVGPatternElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPatternElement).
   *  - **NOTE:** The pattern element's id will be defined as `bb-colorize-pattern-$COLOR-VALUE`.<br>
   *    ex. When color pattern value is `['red', '#fff']` and defined 2 patterns,then ids for pattern elements are:<br>
   *    - `bb-colorize-pattern-red`
   *    - `bb-colorize-pattern-fff`
   * @property {Object} [color.threshold] color threshold for gauge and tooltip color
   * @property {String} [color.threshold.unit] If set to `value`, the threshold will be based on the data value. Otherwise it'll be based on equation of the `threshold.max` option value.
   * @property {Array} [color.threshold.values] Threshold values for each steps
   * @property {Number} [color.threshold.max=100] The base value to determine threshold step value condition. When the given value is 15 and max 10, then the value for threshold is `15*100/10`.
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
// CONCATENATED MODULE: ./src/config/Options/common/interaction.ts
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
   * @type {Object}
   * @property {Boolean} [interaction.enabled=true] Indicate if the chart should have interactions.<br>
   *     If `false` is set, all of interactions (showing/hiding tooltip, selection, mouse events, etc) will be disabled.
   * @property {Boolean} [interaction.brighten=true] Make brighter for the selected area (ex. 'pie' type data selected area)
   * @property {Boolean} [interaction.inputType.mouse=true] enable or disable mouse interaction
   * @property {Boolean} [interaction.inputType.touch=true] enable or disable  touch interaction
   * @property {Boolean|Number} [interaction.inputType.touch.preventDefault=false] enable or disable to call event.preventDefault on touchstart & touchmove event. It's usually used to prevent document scrolling.
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
// CONCATENATED MODULE: ./src/config/Options/common/legend.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * legend config options
 */
/* harmony default export */ var common_legend = ({
  /**
   * Legend options
   * @name legend
   * @memberof Options
   * @type {Object}
   * @property {Boolean} [legend.show=true] Show or hide legend.
   * @property {Boolean} [legend.hide=false] Hide legend
   *  If true given, all legend will be hidden. If string or array given, only the legend that has the id will be hidden.
   * @property {String|HTMLElement} [legend.contents.bindto=undefined] Set CSS selector or element reference to bind legend items.
   * @property {String|Function} [legend.contents.template=undefined] Set item's template.<br>
   *  - If set `string` value, within template the 'color' and 'title' can be replaced using template-like syntax string:
   *    - {=COLOR}: data color value
   *    - {=TITLE}: data title value
   *  - If set `function` value, will pass following arguments to the given function:
   *   - title {String}: data's id value
   *   - color {String}: color string
   *   - data {Array}: data array
   * @property {String} [legend.position=bottom] Change the position of legend.<br>
   *  Available values are: `bottom`, `right` and `inset` are supported.
   * @property {Object} [legend.inset={anchor: 'top-left',x: 10,y: 0,step: undefined}] Change inset legend attributes.<br>
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
   * @property {Boolean} [legend.equally=false] Set to all items have same width size.
   * @property {Boolean} [legend.padding=0] Set padding value
   * @property {Function} [legend.item.onclick=undefined] Set click event handler to the legend item.
   * @property {Function} [legend.item.onover=undefined] Set mouse/touch over event handler to the legend item.
   * @property {Function} [legend.item.onout=undefined] Set mouse/touch out event handler to the legend item.
   * @property {Number} [legend.item.tile.width=10] Set width of item tile element
   * @property {Number} [legend.item.tile.height=10] Set height of item tile element
   * @property {Boolean} [legend.usePoint=false] Whether to use custom points in legend.
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
   *          onclick: function(id) { ... },
   *          onover: function(id) { ... },
   *          onout: function(id) { ... },
   *
   *          // set tile's size
   *          tile: {
   *              width: 20,
   *              height: 15
   *          }
   *      },
   *      usePoint: true
   *  }
   */
  legend_show: !0,
  legend_hide: !1,
  legend_contents_bindto: undefined,
  legend_contents_template: undefined,
  legend_position: "bottom",
  legend_inset_anchor: "top-left",
  legend_inset_x: 10,
  legend_inset_y: 0,
  legend_inset_step: undefined,
  legend_item_onclick: undefined,
  legend_item_onover: undefined,
  legend_item_onout: undefined,
  legend_equally: !1,
  legend_padding: 0,
  legend_item_tile_width: 10,
  legend_item_tile_height: 10,
  legend_usePoint: !1
});
// CONCATENATED MODULE: ./src/config/Options/common/title.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * title config options
 */
/* harmony default export */ var common_title = ({
  /**
   * Set title options
   * @name title
   * @memberof Options
   * @type {Object}
   * @property {String} [title.text] Title text. If contains `\n`, it's used as line break allowing multiline title.
   * @property {Number} [title.padding.top=0] Top padding value.
   * @property {Number} [title.padding.right=0] Right padding value.
   * @property {Number} [title.padding.bottom=0] Bottom padding value.
   * @property {Number} [title.padding.left=0] Left padding value.
   * @property {String} [title.position=center] Available values are: 'center', 'right' and 'left'.
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
// CONCATENATED MODULE: ./src/config/Options/common/tooltip.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * tooltip config options
 */
/* harmony default export */ var common_tooltip = ({
  /**
   * Tooltip options
   * @name tooltip
   * @memberof Options
   * @type {Object}
   * @property {Boolean} [tooltip.show=true] Show or hide tooltip.
   * @property {Boolean} [tooltip.doNotHide=false] Make tooltip keep showing not hiding on interaction.
   * @property {Boolean} [tooltip.grouped=true] Set if tooltip is grouped or not for the data points.
   *   - **NOTE:** The overlapped data points will be displayed as grouped even if set false.
   * @property {Boolean} [tooltip.linked=false] Set if tooltips on all visible charts with like x points are shown together when one is shown.
   * @property {String} [tooltip.linked.name=""] Groping name for linked tooltip.<br>If specified, linked tooltip will be groped interacting to be worked only with the same name.
   * @property {Function} [tooltip.format.title] Set format for the title of tooltip.<br>
   *  Specified function receives x of the data point to show.
   * @property {Function} [tooltip.format.name] Set format for the name of each data in tooltip.<br>
   *  Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not donut/pie/gauge.
   * @property {Function} [tooltip.format.value] Set format for the value of each data in tooltip.<br>
   *  Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not donut/pie/gauge.
   *  If undefined returned, the row of that value will be skipped.
   * @property {Function} [tooltip.position] Set custom position function for the tooltip.<br>
   *  This option can be used to modify the tooltip position by returning object that has top and left.
   * @property {String} [tooltip.position.unit="px"] Set tooltip's position unit.
   *  - **NOTE:** This option can't be used along with `tooltip.position` custom function. If want to specify unit in custom function, return value with desired unit.
   * @property {Function|Object} [tooltip.contents] Set custom HTML for the tooltip.<br>
   *  Specified function receives data, defaultTitleFormat, defaultValueFormat and color of the data point to show. If tooltip.grouped is true, data includes multiple data points.
   * @property {String|HTMLElement} [tooltip.contents.bindto=undefined] Set CSS selector or element reference to bind tooltip.
   *  - **NOTE:** When is specified, will not be updating tooltip's position.
   * @property {String} [tooltip.contents.template=undefined] Set tooltip's template.<br><br>
   *  Within template, below syntax will be replaced using template-like syntax string:
   *    - **{{ ... }}**: the doubly curly brackets indicate loop block for data rows.
   *    - **{=CLASS_TOOLTIP}**: default tooltip class name `bb-tooltip`.
   *    - **{=CLASS_TOOLTIP_NAME}**: default tooltip data class name (ex. `bb-tooltip-name-data1`)
   *    - **{=TITLE}**: title value.
   *    - **{=COLOR}**: data color.
   *    - **{=VALUE}**: data value.
   * @property {Object} [tooltip.contents.text=undefined] Set additional text content within data loop, using template syntax.
   *  - **NOTE:** It should contain `{ key: Array, ... }` value
   *    - 'key' name is used as substitution within template as '{=KEY}'
   *    - The value array length should match with the data length
   * @property {Boolean} [tooltip.init.show=false] Show tooltip at the initialization.
   * @property {Number} [tooltip.init.x=0] Set x Axis index to be shown at the initialization.
   * @property {Object} [tooltip.init.position={top: "0px",left: "50px"}] Set the position of tooltip at the initialization.
   * @property {Function} [tooltip.onshow] Set a callback that will be invoked before the tooltip is shown.
   * @property {Function} [tooltip.onhide] Set a callback that will be invoked before the tooltip is hidden.
   * @property {Function} [tooltip.onshown] Set a callback that will be invoked after the tooltip is shown
   * @property {Function} [tooltip.onhidden] Set a callback that will be invoked after the tooltip is hidden.
   * @property {String|Function|null} [tooltip.order=null] Set tooltip data display order.<br><br>
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
   * @see [Demo: Tooltip Template](https://naver.github.io/billboard.js/demo/#Tooltip.TooltipTemplate)
   * @example
   *  tooltip: {
   *      show: true,
   *      doNotHide: true,
   *      grouped: false,
   *      format: {
   *          title: function(x) { return "Data " + x; },
   *          name: function(name, ratio, id, index) { return name; },
   *          value: function(value, ratio, id, index) { return ratio; }
   *      },
   *      position: function(data, width, height, element) {
   *          return {top: 0, left: 0}
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
   *          x: 2,
   *          position: {
   *              top: "150px",
   *              left: "250px"
   *          }
   *      },
   *
   *      // fires prior tooltip is shown
   *      onshow: function(ctx, selectedData) {
   *      	ctx; // current chart instance
   *
   *      	// current dataset selected
   *      	// ==> [{x: 4, value: 150, id: "data2", index: 4, name: "data2"}, ...]
   *      	selectedData;
   *      },
   *
   *      // fires prior tooltip is hidden
   *      onhide: function(ctx, selectedData) {
   *      	ctx; // current chart instance
   *
   *      	// current dataset selected
   *      	// ==> [{x: 4, value: 150, id: "data2", index: 4, name: "data2"}, ...]
   *      	selectedData;
   *      },
   *
   *      // fires after tooltip is shown
   *      onshown: function(ctx, selectedData) {
   *      	ctx; // current chart instance
   *
   *      	// current dataset selected
   *      	// ==> [{x: 4, value: 150, id: "data2", index: 4, name: "data2"}, ...]
   *      	selectedData;
   *      },
   *
   *      // fires after tooltip is hidden
   *      onhidden: function(ctx, selectedData) {
   *      	ctx; // current chart instance
   *
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
  tooltip_init_position: {
    top: "0px",
    left: "50px"
  },
  tooltip_linked: !1,
  tooltip_linked_name: "",
  tooltip_onshow: function tooltip_onshow() {},
  tooltip_onhide: function tooltip_onhide() {},
  tooltip_onshown: function tooltip_onshown() {},
  tooltip_onhidden: function tooltip_onhidden() {},
  tooltip_order: null
});
// CONCATENATED MODULE: ./src/config/Options/data/axis.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Axis based chart data config options
 */
/* harmony default export */ var data_axis = ({
  /**
   * Specify the key of x values in the data.<br><br>
   * We can show the data with non-index x values by this option. This option is required when the type of x axis is timeseries. If this option is set on category axis, the values of the data on the key will be used for category names.
   * @name data․x
   * @memberof Options
   * @type {String}
   * @default undefined
   * @example
   * data: {
   *   x: "date"
   * }
   */
  data_x: undefined,

  /**
   * Specify the keys of the x values for each data.<br><br>
   * This option can be used if we want to show the data that has different x values.
   * @name data․xs
   * @memberof Options
   * @type {Object}
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
   * @type {String}
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
   * @see [D3's time specifier](https://github.com/d3/d3-time-format#locale_format)
   */
  data_xFormat: "%Y-%m-%d",

  /**
   * Set localtime format to parse x axis.
   * @name data․xLocaltime
   * @memberof Options
   * @type {Boolean}
   * @default true
   * @example
   * data: {
   *   xLocaltime: false
   * }
   */
  data_xLocaltime: !0,

  /**
   * Sort on x axis.
   * @name data․xSort
   * @memberof Options
   * @type {Boolean}
   * @default true
   * @example
   * data: {
   *   xSort: false
   * }
   */
  data_xSort: !0,

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
   * Set y axis the data related to. y and y2 can be used.
  * - **NOTE:** If all data is related to one of the axes, the domain of axis without related data will be replaced by the domain from the axis with related data
   * @name data․axes
   * @memberof Options
   * @type {Object}
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
   * Set labels options
   * @name data․labels
   * @memberof Options
   * @type {Object}
   * @property {Boolean} [data.labels=false] Show or hide labels on each data points
   * @property {Boolean} [data.labels.centered=false] Centerize labels on `bar` shape. (**NOTE:** works only for 'bar' type)
   * @property {Function} [data.labels.format] Set formatter function for data labels.<br>
   * The formatter function receives 4 arguments such as v, id, i, j and it must return a string that will be shown as the label. The arguments are:<br>
   *  - `v` is the value of the data point where the label is shown.
   *  - `id` is the id of the data where the label is shown.
   *  - `i` is the index of the data point where the label is shown.
   *  - `j` is the sub index of the data point where the label is shown.<br><br>
   * Formatter function can be defined for each data by specifying as an object and D3 formatter function can be set (ex. d3.format('$'))
   * @property {String|Object} [data.labels.colors] Set label text colors.
   * @property {Object} [data.labels.position] Set each dataset position, relative the original.
   * @property {Number} [data.labels.position.x=0] x coordinate position, relative the original.
   * @property {Number} [data.labels.position.y=0] y coordinate position, relative the original.
   * @memberof Options
   * @type {Object}
   * @default {}
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataLabel)
   * @see [Demo: label colors](https://naver.github.io/billboard.js/demo/#Data.DataLabelColors)
   * @see [Demo: label format](https://naver.github.io/billboard.js/demo/#Data.DataLabelFormat)
   * @see [Demo: label overlap](https://naver.github.io/billboard.js/demo/#Data.DataLabelOverlap)
   * @see [Demo: label position](https://naver.github.io/billboard.js/demo/#Data.DataLabelPosition)
   * @example
   * data: {
   *   labels: true,
   *
   *   // or set specific options
   *   labels: {
   *     format: function(v, id, i, j) { ... },
   *
   *     // it's possible to set for each data
   *     format: {
   *         data1: function(v, id, i, j) { ... },
   *         ...
   *     },
   *
   *     // align text to center of the 'bar' shape (works only for 'bar' type)
   *     centered: true,
   *
   *     // apply for all label texts
   *     colors: "red",
   *
   *     // or set different colors per dataset
   *     // for not specified dataset, will have the default color value
   *     colors: {
   *        data1: "yellow",
   *        data3: "green"
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
   *     }
   *   }
   * }
   */
  data_labels: {},
  data_labels_colors: undefined,
  data_labels_position: {},

  /**
   * Define regions for each data.<br>
   * The values must be an array for each data and it should include an object that has `start`, `end` and `style`.
   * - The object type should be as:
   *   - start {Number}: Start data point number. If not set, the start will be the first data point.
   *   - [end] {Number}: End data point number. If not set, the end will be the last data point.
   *   - [style.dasharray="2 2"] {Object}: The first number specifies a distance for the filled area, and the second a distance for the unfilled area.
   * - **NOTE:** Currently this option supports only line chart and dashed style. If this option specified, the line will be dashed only in the regions.
   * @name data․regions
   * @memberof Options
   * @type {Object}
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
   * @type {Boolean}
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
// CONCATENATED MODULE: ./src/config/Options/data/selection.ts
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
   * @name data․selection․enabled
   * @memberof Options
   * @type {Boolean}
   * @default false
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Data.DataSelection)
   * @example
   * data: {
   *    selection: {
   *       enabled: true
   *    }
   * }
   */
  data_selection_enabled: !1,

  /**
   * Set grouped selection enabled.<br><br>
   * If this option set true, multiple data points that have same x value will be selected by one selection.
   * @name data․selection․grouped
   * @memberof Options
   * @type {Boolean}
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
    return !0;
  },

  /**
   * Set multiple data points selection enabled.<br><br>
   * If this option set true, multile data points can have the selected state at the same time. If false set, only one data point can have the selected state and the others will be unselected when the new data point is selected.
   * @name data․selection․multiple
   * @memberof Options
   * @type {Boolean}
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
   * @type {Boolean}
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
  data_onselected: function data_onselected() {},

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
  data_onunselected: function data_onunselected() {}
});
// CONCATENATED MODULE: ./src/config/Options/axis/x.ts
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
   * @type {Boolean}
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
   * @type {Boolean}
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
   * - timeseries
   * - category
   * - indexed
   * @name axis․x․type
   * @memberof Options
   * @type {String}
   * @default indexed
   * @see [Demo: indexed](https://naver.github.io/billboard.js/demo/#Chart.AreaChart)
   * @see [Demo: timeseries](https://naver.github.io/billboard.js/demo/#Chart.TimeseriesChart)
   * @see [Demo: category](https://naver.github.io/billboard.js/demo/#Data.CategoryData)
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
   * @type {Boolean}
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
   * @type {Boolean}
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
   * @type {Function|String}
   * @default undefined
   * @see [D3's time specifier](https://github.com/d3/d3-time-format#locale_format)
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
   * Setting for culling ticks.<br><br>
   * If true is set, the ticks will be culled, then only limitted tick text will be shown. This option does not hide the tick lines. If false is set, all of ticks will be shown.<br><br>
   * We can change the number of ticks to be shown by axis.x.tick.culling.max.
   * @name axis․x․tick․culling
   * @memberof Options
   * @type {Boolean}
   * @default
   * - true for indexed axis and timeseries axis
   * - false for category axis
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
   * @type {Number}
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
   * The number of x axis ticks to show.<br><br>
   * This option hides tick lines together with tick text. If this option is used on timeseries axis, the ticks position will be determined precisely and not nicely positioned (e.g. it will have rough second value).
   * @name axis․x․tick․count
   * @memberof Options
   * @type {Number}
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
   * @type {Boolean}
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
   * @type {Boolean}
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
   * @type {Object}
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
   * - **true**: ticks will be positioned nicely to have same intervals.
   * - **false**: ticks will be positioned according to x value of the data points.
   * @name axis․x․tick․fit
   * @memberof Options
   * @type {Boolean}
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
   * Rotate x axis tick text.
   * - If you set negative value, it will rotate to opposite direction.
   * - Applied when [`axis.rotated`](#.axis%25E2%2580%25A4rotated) option is `false`.
   * @name axis․x․tick․rotate
   * @memberof Options
   * @type {Number}
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
   * @type {Boolean}
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
   * @type {Boolean}
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
   * @type {Number}
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
   * @type {Boolean}
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
   * @type {Number}
   * @default undefined
   * @example
   * axis: {
   *   x: {
   *     max: 100
   *   }
   * }
   */
  axis_x_max: undefined,

  /**
   * Set min value of x axis range.
   * @name axis․x․min
   * @memberof Options
   * @type {Number}
   * @default undefined
   * @example
   * axis: {
   *   x: {
   *     min: -100
   *   }
   * }
   */
  axis_x_min: undefined,

  /**
   * Set padding for x axis.<br><br>
   * If this option is set, the range of x axis will increase/decrease according to the values.
   * If no padding is needed in the rage of x axis, 0 should be set.
   * - **NOTE:**
   *   The padding values aren't based on pixels. It differs according axis types<br>
   *   - **category:** The unit of tick value
   *     ex. the given value `1`, is same as the width of 1 tick width
   *   - **timeseries:** Numeric time value
   *     ex. the given value `1000*60*60*24`, which is numeric time equivalent of a day, is same as the width of 1 tick width
   * @name axis․x․padding
   * @memberof Options
   * @type {Object|Number}
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
   *     padding: 10
   *   }
   * }
   */
  axis_x_padding: {},

  /**
   * Set height of x axis.<br><br>
   * The height of x axis can be set manually by this option. If you need more space for x axis, please use this option for that. The unit is pixel.
   * @name axis․x․height
   * @memberof Options
   * @type {Number}
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
   * @type {String|Object}
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
   * | tick.outer | Boolean | true | Show outer tick |
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
// CONCATENATED MODULE: ./src/config/Options/axis/y.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * y Axis  config options
 */
/* harmony default export */ var axis_y = ({
  /**
   * Set clip-path attribute for y axis element
   * - **NOTE**: `clip-path` attribute for y Axis is set only when `axis.y.inner` option is true.
   * @name axis․y․clipPath
   * @memberof Options
   * @type {Boolean}
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
   * @type {Boolean}
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
   *   - timeseries
   *   - category
   *   - indexed
   * @name axis․y․type
   * @memberof Options
   * @type {String}
   * @default undefined
   * @example
   * axis: {
   *   y: {
   *     type: "timeseries"
   *   }
   * }
   */
  axis_y_type: undefined,

  /**
   * Set max value of y axis.
   * - **NOTE:** Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).
   * @name axis․y․max
   * @memberof Options
   * @type {Number}
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
   * @type {Number}
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
   * If true set, the direction will be from the top to the bottom.
   * @name axis․y․inverted
   * @memberof Options
   * @type {Boolean}
   * @default false
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
   * @type {Number}
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
   * @type {Boolean}
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
   * @type {String|Object}
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
   * Setting for culling ticks.<br><br>
   * If true is set, the ticks will be culled, then only limitted tick text will be shown. This option does not hide the tick lines. If false is set, all of ticks will be shown.<br><br>
   * We can change the number of ticks to be shown by axis.y.tick.culling.max.
   * @name axis․y․tick․culling
   * @memberof Options
   * @type {Boolean}
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
   * @type {Number}
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
   * Show y axis outer tick.
   * @name axis․y․tick․outer
   * @memberof Options
   * @type {Boolean}
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
   * @type {Number}
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
   * @type {Number}
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
   * @type {Boolean}
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
   * @type {Number}
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
  * @type {Boolean}
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
   * @type {Object}
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
   * @type {Object}
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
   * - **NOTE:** For area and bar type charts, [area.zerobased](#.area) or [bar.zerobased](#.bar) options should be set to 'false` to get padded bottom.
   * @name axis․y․padding
   * @memberof Options
   * @type {Object|Number}
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
   * | tick.outer | Boolean | true | Show outer tick |
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
// CONCATENATED MODULE: ./src/config/Options/axis/y2.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * y2 Axis  config options
 */
/* harmony default export */ var axis_y2 = ({
  /**
   * Show or hide y2 axis.
   * - **NOTE**:
   *   - When set to `false` will not generate y2 axis node. In this case, all 'y2' axis related functionality won't work properly.
   *   - If need to use 'y2' related options while y2 isn't visible, set the value `true` and control visibility by css display property.
   * @name axis․y2․show
   * @memberof Options
   * @type {Boolean}
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
   * Set max value of y2 axis.
   * @name axis․y2․max
   * @memberof Options
   * @type {Number}
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
   * @type {Number}
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
   * If true set, the direction will be from the top to the bottom.
   * @name axis․y2․inverted
   * @memberof Options
   * @type {Boolean}
   * @default false
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
   * @type {Number}
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
   * @type {Boolean}
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
   * @type {String|Object}
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
   * Setting for culling ticks.<br><br>
   * If true is set, the ticks will be culled, then only limitted tick text will be shown. This option does not hide the tick lines. If false is set, all of ticks will be shown.<br><br>
   * We can change the number of ticks to be shown by axis.y.tick.culling.max.
   * @name axis․y2․tick․culling
   * @memberof Options
   * @type {Boolean}
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
   * @type {Number}
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
   * Show or hide y2 axis outer tick.
   * @name axis․y2․tick․outer
   * @memberof Options
   * @type {Boolean}
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
   * @type {Number}
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
   * @type {Number}
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
   * @type {Boolean}
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
   * @type {Number}
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
   * @type {Boolean}
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
   * @type {Object}
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
   * Set the number of y2 axis ticks.
   * - **NOTE:** This works in the same way as axis.y.tick.count.
   * @name axis․y2․padding
   * @memberof Options
   * @type {Object|Number}
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
   * | tick.outer | Boolean | true | Show outer tick |
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
// EXTERNAL MODULE: external {"commonjs":"d3-brush","commonjs2":"d3-brush","amd":"d3-brush","root":"d3"}
var external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_ = __webpack_require__(39);

// CONCATENATED MODULE: ./src/module/browser.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Window object
 * @module
 * @ignore
 */

/* eslint-disable no-new-func, no-undef */


var win = function () {
  var def = function (o) {
    return typeof o !== "undefined" && o;
  };

  return def(self) || def(window) || def(global) || def(globalThis) || Function("return this")();
}(),
    browser_doc = win && win.document;
/* eslint-enable no-new-func, no-undef */
// CONCATENATED MODULE: ./src/module/util.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * @ignore
 */






var isValue = function (v) {
  return v || v === 0;
},
    isFunction = function (v) {
  return typeof v === "function";
},
    isString = function (v) {
  return typeof v === "string";
},
    isNumber = function (v) {
  return typeof v === "number";
},
    isUndefined = function (v) {
  return typeof v === "undefined";
},
    isDefined = function (v) {
  return typeof v !== "undefined";
},
    isBoolean = function (v) {
  return typeof v === "boolean";
},
    ceil10 = function (v) {
  return Math.ceil(v / 10) * 10;
},
    asHalfPixel = function (n) {
  return Math.ceil(n) + .5;
},
    diffDomain = function (d) {
  return d[1] - d[0];
},
    isObjectType = function (v) {
  return typeof v === "object";
},
    isEmpty = function (o) {
  return isUndefined(o) || o === null || isString(o) && o.length === 0 || isObjectType(o) && !(o instanceof Date) && Object.keys(o).length === 0 || isNumber(o) && isNaN(o);
},
    notEmpty = function (o) {
  return !isEmpty(o);
},
    isArray = function (arr) {
  return Array.isArray(arr);
},
    isObject = function (obj) {
  return obj && !obj.nodeType && isObjectType(obj) && !isArray(obj);
};

function getOption(options, key, defaultValue) {
  return isDefined(options[key]) ? options[key] : defaultValue;
}

function util_hasValue(dict, value) {
  var found = !1;
  return Object.keys(dict).forEach(function (key) {
    return dict[key] === value && (found = !0);
  }), found;
}
/**
 * Call function with arguments
 * @param {Function} fn Function to be called
 * @param {*} args Arguments
 * @return {Boolean} true: fn is function, false: fn is not function
 * @private
 */


function callFn(fn) {
  for (var isFn = isFunction(fn), _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];

  return isFn && fn.call.apply(fn, args), isFn;
}
/**
 * Replace tag sign to html entity
 * @param {String} str
 * @return {String}
 * @private
 */


function sanitise(str) {
  return isString(str) ? str.replace(/</g, "&lt;").replace(/>/g, "&gt;") : str;
}
/**
 * Set text value. If there's multiline add nodes.
 * @param {d3Selection} node Text node
 * @param {String} text Text value string
 * @param {Array} dy dy value for multilined text
 * @param {Boolean} toMiddle To be alingned vertically middle
 * @private
 */


function setTextValue(node, text, dy, toMiddle) {
  if (dy === void 0 && (dy = [-1, 1]), toMiddle === void 0 && (toMiddle = !1), node && isString(text)) if (text.indexOf("\n") === -1) node.text(text);else {
    var diff = [node.text(), text].map(function (v) {
      return v.replace(/[\s\n]/g, "");
    });

    if (diff[0] !== diff[1]) {
      var multiline = text.split("\n"),
          len = toMiddle ? multiline.length - 1 : 1;
      node.html(""), multiline.forEach(function (v, i) {
        node.append("tspan").attr("x", 0).attr("dy", (i === 0 ? dy[0] * len : dy[1]) + "em").text(v);
      });
    }
  }
} // substitution of SVGPathSeg API polyfill


function getRectSegList(path) {
  /*
   * seg1 ---------- seg2
   *   |               |
   *   |               |
   *   |               |
   * seg0 ---------- seg3
   * */
  var _path$getBBox = path.getBBox(),
      x = _path$getBBox.x,
      y = _path$getBBox.y,
      width = _path$getBBox.width,
      height = _path$getBBox.height;

  return [{
    x: x,
    y: y + height
  }, // seg0
  {
    x: x,
    y: y
  }, // seg1
  {
    x: x + width,
    y: y
  }, // seg2
  {
    x: x + width,
    y: y + height
  } // seg3
  ];
}

function getPathBox(path) {
  var _path$getBoundingClie = path.getBoundingClientRect(),
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
} // return brush selection array


function getBrushSelection(_ref) {
  var selection,
      $el = _ref.$el,
      event = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"],
      main = $el.subchart.main || $el.main;
  return event && event.type === "brush" ? selection = event.selection : main && (selection = main.select("." + config_classes.brush).node()) && (selection = Object(external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_["brushSelection"])(selection)), selection;
} // Get boundingClientRect. cache the evaluated value once it was called.


var getBoundingRect = function (node) {
  return node.rect || (node.rect = node.getBoundingClientRect());
}; // retrun random number


function getRandom(asStr) {
  asStr === void 0 && (asStr = !0);
  var rand = Math.random();
  return asStr ? rand + "" : rand;
}

function brushEmpty(ctx) {
  var selection = getBrushSelection(ctx);
  return !selection || selection[0] === selection[1];
}

function extend(target, source) {
  // exclude name with only numbers
  for (var p in target === void 0 && (target = {}), isArray(source) && source.forEach(function (v) {
    return extend(target, v);
  }), source) /^\d+$/.test(p) || (target[p] = source[p]);

  return target;
}
/**
 * Return first letter capitalized
 * @param {String} str
 * @return {String} capitalized string
 * @private
 */


var capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
},
    toArray = function (v) {
  return [].slice.call(v);
};
/**
 * Convert to array
 * @param {Object} v
 * @returns {Array}
 * @private
 */


/**
 * Get css rules for specified stylesheets
 * @param {Array} styleSheets The stylesheets to get the rules from
 * @returns {Array}
 * @private
 */
function getCssRules(styleSheets) {
  var rules = [];
  return styleSheets.forEach(function (sheet) {
    try {
      sheet.cssRules && sheet.cssRules.length && (rules = rules.concat(toArray(sheet.cssRules)));
    } catch (e) {
      console.error("Error while reading rules from " + sheet.href + ": " + e.toString());
    }
  }), rules;
}
/**
 * Gets the SVGMatrix of an SVGElement
 * @param {SVGElement} element
 * @return {SVGMatrix} matrix
 * @private
 */


function getTranslation(node) {
  var transform = node ? node.transform : null,
      baseVal = transform ? transform.baseVal : [];
  return baseVal.length ? baseVal.getItem(0).matrix : {
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
 * @param {Array} data
 * @return {Array} Unique array value
 * @private
 */


function getUnique(data) {
  var isDate = data[0] instanceof Date,
      d = (isDate ? data.map(Number) : data).filter(function (v, i, self) {
    return self.indexOf(v) === i;
  });
  return isDate ? d.map(function (v) {
    return new Date(v);
  }) : d;
}
/**
 * Merge array
 * @param {Array} arr
 * @return {Array}
 * @private
 */


function mergeArray(arr) {
  return arr && arr.length ? arr.reduce(function (p, c) {
    return p.concat(c);
  }) : [];
}
/**
 * Merge object returning new object
 * @param {Object} target
 * @param {Object} objectN
 * @returns {Object} merged target object
 * @private
 */


function mergeObj(target) {
  for (var _len2 = arguments.length, objectN = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) objectN[_key2 - 1] = arguments[_key2];

  if (!objectN.length || objectN.length === 1 && !objectN[0]) return target;
  var source = objectN.shift();
  return isObject(target) && isObject(source) && Object.keys(source).forEach(function (key) {
    var value = source[key];
    isObject(value) ? (!target[key] && (target[key] = {}), target[key] = mergeObj(target[key], value)) : target[key] = isArray(value) ? value.concat() : value;
  }), mergeObj.apply(void 0, [target].concat(objectN));
}
/**
 * Sort value
 * @param {Array} data value to be sorted
 * @param {Boolean} isAsc true: asc, false: desc
 * @return {Number|String|Date} sorted date
 * @private
 */


function util_sortValue(data, isAsc) {
  isAsc === void 0 && (isAsc = !0);
  var fn;
  return data[0] instanceof Date ? fn = isAsc ? function (a, b) {
    return a - b;
  } : function (a, b) {
    return b - a;
  } : isAsc && !data.every(isNaN) ? fn = function (a, b) {
    return a - b;
  } : !isAsc && (fn = function (a, b) {
    return a > b && -1 || a < b && 1 || a === b && 0;
  }), data.concat().sort(fn);
}
/**
 * Get min/max value
 * @param {String} type 'min' or 'max'
 * @param {Array} data Array data value
 * @retun {Number|Date|undefined}
 * @private
 */


function getMinMax(type, data) {
  var res = data.filter(function (v) {
    return notEmpty(v);
  });
  return res.length ? isNumber(res[0]) ? res = Math[type].apply(Math, res) : res[0] instanceof Date && (res = util_sortValue(res, type === "min")[0]) : res = undefined, res;
}
/**
 * Get range
 * @param {Number} start Start number
 * @param {Number} end End number
 * @return {Array}
 * @private
 */


function getRange(start, end) {
  var res = [];

  for (var i = start; i < end; i++) res.push(i);

  return res;
} // emulate event


var emulateEvent = {
  mouse: function () {
    var getParams = function () {
      return {
        bubbles: !1,
        cancelable: !1,
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0
      };
    };

    try {
      return new MouseEvent("t"), function (el, eventType, params) {
        params === void 0 && (params = getParams()), el.dispatchEvent(new MouseEvent(eventType, params));
      };
    } catch (e) {
      // Polyfills DOM4 MouseEvent
      return function (el, eventType, params) {
        params === void 0 && (params = getParams());
        var mouseEvent = browser_doc.createEvent("MouseEvent"); // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent

        mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, win, 0, // the event's mouse click count
        params.screenX, params.screenY, params.clientX, params.clientY, !1, !1, !1, !1, 0, null), el.dispatchEvent(mouseEvent);
      };
    }
  }(),
  touch: function touch(el, eventType, params) {
    var touchObj = new Touch(mergeObj({
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
  }
};
/**
 * Process the template  & return bound string
 * @param {String} tpl Template string
 * @param {Object} data Data value to be replaced
 * @return {String}
 * @private
 */

function tplProcess(tpl, data) {
  var res = tpl;

  for (var x in data) res = res.replace(new RegExp("{=" + x + "}", "g"), data[x]);

  return res;
}
/**
 * Get parsed date value
 * (It must be called in 'ChartInternal' context)
 * @param {Date|String|Number} date Value of date to be parsed
 * @return {Date}
 * @private
 */


function parseDate(date) {
  var parsedDate;
  if (date instanceof Date) parsedDate = date;else if (isString(date)) {
    var config = this.config,
        format = this.format;
    parsedDate = format.dataTime(config.data_xFormat)(date);
  } else isNumber(date) && !isNaN(date) && (parsedDate = new Date(+date));
  return (!parsedDate || isNaN(+parsedDate)) && console && console.error && console.error("Failed to parse x '" + date + "' to Date object"), parsedDate;
}
/**
 * Return if the current doc is visible or not
 * @return {boolean}
 * @private
 */


function isTabVisible() {
  return !browser_doc.hidden;
}
/**
 * Get the current input type
 * @return {String} "mouse" | "touch" | null
 * @private
 */


function convertInputType(mouse, touch) {
  var isMobile = !1; // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Tablet_or_Desktop

  if (/Mobi/.test(win.navigator.userAgent) && touch) {
    // Some Edge desktop return true: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/20417074/
    var hasTouchPoints = win.navigator && "maxTouchPoints" in win.navigator && win.navigator.maxTouchPoints > 0,
        hasTouch = "ontouchmove" in win || win.DocumentTouch && browser_doc instanceof win.DocumentTouch; // Ref: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
    // On IE11 with IE9 emulation mode, ('ontouchstart' in window) is returning true

    isMobile = hasTouchPoints || hasTouch;
  }

  var hasMouse = !(!mouse || isMobile) && "onmouseover" in win;
  return hasMouse && "mouse" || isMobile && "touch" || null;
}
// CONCATENATED MODULE: ./src/config/Options/axis/axis.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/**
* y Axis  config options
*/

/* harmony default export */ var axis_axis = (mergeObj({
  /**
   * Switch x and y axis position.
   * @name axis․rotated
   * @memberof Options
   * @type {Boolean}
   * @default false
   * @example
   * axis: {
   *   rotated: true
   * }
   */
  axis_rotated: !1
}, axis_x, axis_y, axis_y2));
// CONCATENATED MODULE: ./src/config/Options/common/grid.ts
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
   * @type {Object}
   * @property {Boolean} [front=false] Set 'grid & focus lines' to be positioned over grid lines and chart elements.
   * @property {Boolean} [x.show=false] Show grids along x axis.
   * @property {Array} [x.lines=[]] Show additional grid lines along x axis.<br>
   *  This option accepts array including object that has value, text, position and class. text, position and class are optional. For position, start, middle and end (default) are available.
   *  If x axis is category axis, value can be category name. If x axis is timeseries axis, value can be date string, Date object and unixtime integer.
   * @property {Boolean} [y.show=false] Show grids along x axis.
   * @property {Array} [y.lines=[]] Show additional grid lines along y axis.<br>
   *  This option accepts array including object that has value, text, position and class.
   * @property {Number} [y.ticks=10] Number of y grids to be shown.
   * @property {Boolean} [focus.edge=false] Show edged focus grid line.<br>**NOTE:** Available when [`tooltip.grouped=false`](#.tooltip) option is set.
   * @property {Boolean} [focus.show=true] Show grid line when focus.
   * @property {Boolean} [focus.y=false] Show y coordinate focus grid line.<br>**NOTE:** Available when [`tooltip.grouped=false`](#.tooltip) option is set.
   * @property {Boolean} [lines.front=true] Set grid lines to be positioned over chart elements.
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
  grid_y_ticks: 10,
  grid_focus_edge: !1,
  grid_focus_show: !0,
  grid_focus_y: !1,
  grid_front: !1,
  grid_lines_front: !0
});
// CONCATENATED MODULE: ./src/config/Options/common/point.ts
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
   * @type {Object}
   * @property {Boolean} [point.show=true] Whether to show each point in line.
   * @property {Number|Function} [point.r=2.5] The radius size of each point.
   *  - **NOTE:** Disabled for 'bubble' type
   * @property {Boolean} [point.focus.expand.enabled=true] Whether to expand each point on focus.
   * @property {Number} [point.focus.expand.r=point.r*1.75] The radius size of each point on focus.
   *  - **NOTE:** For 'bubble' type, the default is `bubbleSize*1.15`
   * @property {Number} [point.sensitivity=10] The senstivity value for interaction boundary.
   * @property {Number} [point.select.r=point.r*4] The radius size of each point on selected.
   * @property {String} [point.type="circle"] The type of point to be drawn
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
   *      focus: {
   *          expand: {
   *              enabled: true,
   *              r: 1
   *          }
   *      },
   *      select: {
   *          r: 3
   *      },
   *
   *      // having lower value, means how closer to be for interaction
   *      sensitivity: 3,
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
  point_sensitivity: 10,
  point_focus_expand_enabled: !0,
  point_focus_expand_r: undefined,
  point_pattern: [],
  point_select_r: undefined,
  point_type: "circle"
});
// CONCATENATED MODULE: ./src/config/Options/common/subchart.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * x Axis config options
 */
/* harmony default export */ var common_subchart = ({
  /**
   * Set subchart options
   * @name subchart
   * @memberof Options
   * @type {Object}
   * @property {Boolean} [subchart.show=false] Show sub chart on the bottom of the chart.
   * @property {Boolean} [subchart.axis.x.show=true] Show or hide x axis.
   * @property {Boolean} [subchart.axis.x.tick.show=true] Show or hide x axis tick line.
   * @property {Boolean} [subchart.axis.x.tick.text.show=true] Show or hide x axis tick text.
   * @property {Number} [subchart.size.height] Change the height of the subchart.
   * @property {Function} [subchart.onbrush] Set callback for brush event.<br>
   *  Specified function receives the current zoomed x domain.
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Interaction.SubChart)
   * @example
   *  subchart: {
   *      axis: {
   *      	x: {
   *      	  show: true,
   *      	    tick: {
   *      	      show: true,
   *      	      text: {
   *      	        show: false
   *      	      }
   *      	    }
   *      	}
   *      },
   *      show: true,
   *      size: {
   *          height: 20
   *      },
   *      onbrush: function(domain) { ... }
   *  }
   */
  subchart_show: !1,
  subchart_size_height: 60,
  subchart_axis_x_show: !0,
  subchart_axis_x_tick_show: !0,
  subchart_axis_x_tick_text_show: !0,
  subchart_onbrush: function subchart_onbrush() {}
});
// CONCATENATED MODULE: ./src/config/Options/common/zoom.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * zoom config options
 */
/* harmony default export */ var common_zoom = ({
  /**
   * Set zoom options
   * @name zoom
   * @memberof Options
   * @type {Object}
   * @property {Boolean} [zoom.enabled=false] Enable zooming.
   * @property {String} [zoom.enabled.type='wheel'] Set zoom interaction type.
   *  - **Available types:**
   *    - wheel
   *    - drag
   * @property {Boolean} [zoom.rescale=false] Enable to rescale after zooming.<br>
   *  If true set, y domain will be updated according to the zoomed region.
   * @property {Array} [zoom.extent=[1, 10]] Change zoom extent.
   * @property {Number|Date} [zoom.x.min] Set x Axis minimum zoom range
   * @property {Number|Date} [zoom.x.max] Set x Axis maximum zoom range
   * @property {Function} [zoom.onzoomstart=undefined] Set callback that is called when zooming starts.<br>
   *  Specified function receives the zoom event.
   * @property {Function} [zoom.onzoom=undefined] Set callback that is called when the chart is zooming.<br>
   *  Specified function receives the zoomed domain.
   * @property {Function} [zoom.onzoomend=undefined] Set callback that is called when zooming ends.<br>
   *  Specified function receives the zoomed domain.
   * @property {Boolean|Object} [zoom.resetButton=true] Set to display zoom reset button for 'drag' type zoom
   * @property {Function} [zoom.resetButton.onclick] Set callback when clicks the reset button. The callback will receive reset button element reference as argument.
   * @property {String} [zoom.resetButton.text='Reset Zoom'] Text value for zoom reset button.
   * @see [Demo:zoom](https://naver.github.io/billboard.js/demo/#Interaction.Zoom)
   * @see [Demo:drag zoom](https://naver.github.io/billboard.js/demo/#Interaction.DragZoom)
   * @example
   *  zoom: {
   *      enabled: {
   *          type: "drag"
   *      },
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
   */
  zoom_enabled: undefined,
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
// CONCATENATED MODULE: ./src/config/Options/shape/area.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * area config options
 */
/* harmony default export */ var shape_area = ({
  /**
   * Set area options
   * @name area
   * @memberof Options
   * @type {Object}
   * @property {Boolean} [area.zerobased=true] Set if min or max value will be 0 on area chart.
   * @property {Boolean} [area.above=false] Set background area above the data chart line.
   * @property {Boolean|Object} [area.linearGradient=false] Set the linear gradient on area.<br><br>
   * Or customize by giving below object value:
   *  - x {Array}: `x1`, `x2` value
   *  - y {Array}: `y1`, `y2` value
   *  - stops {Array}: Each item should be having `[offset, stop-color, stop-opacity]` values.
   * @see [MDN's &lt;linearGradient>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient), [&lt;stop>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
   * @see [Demo](https://naver.github.io/billboard.js/demo/#Chart.AreaChart)
   * @see [Demo: above](https://naver.github.io/billboard.js/demo/#AreaChartOptions.Above)
   * @see [Demo: linearGradient](https://naver.github.io/billboard.js/demo/#AreaChartOptions.LinearGradient)
   * @example
   *  area: {
   *      zerobased: false,
   *      above: true,
   *
   *      // will generate follwing linearGradient:
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
  area_zerobased: !0,
  area_above: !1,
  area_linearGradient: !1
});
// CONCATENATED MODULE: ./src/config/Options/shape/bar.ts
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
   * @type {Object}
   * @property {Number} [bar.padding=0] The padding pixel value between each bar.
   * @property {Number} [bar.radius] Set the radius of bar edge in pixel.
   * - **NOTE:** Works only for non-stacked bar
   * @property {Number} [bar.radius.ratio] Set the radius ratio of bar edge in relative the bar's width.
   * @property {Number} [bar.sensitivity=2] The senstivity offset value for interaction boundary.
   * @property {Number} [bar.width] Change the width of bar chart.
   * @property {Number} [bar.width.ratio=0.6] Change the width of bar chart by ratio.
   * @property {Number} [bar.width.max] The maximum width value for ratio.
   * @property {Number} [bar.width.dataname] Change the width of bar for indicated dataset only.
   * - **NOTE:**
   *   - Works only for non-stacked bar
   *   - Bars are centered accoding its total width value
   * @property {Number} [bar.width.dataname.ratio=0.6] Change the width of bar chart by ratio.
   * @property {Number} [bar.width.dataname.max] The maximum width value for ratio.
   * @property {Boolean} [bar.zerobased=true] Set if min or max value will be 0 on bar chart.
   * @see [Demo: bar padding](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarPadding)
   * @see [Demo: bar radius](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarRadius)
   * @see [Demo: bar width](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarWidth)
   * @see [Demo: bar width variant](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarWidthVariant)
   * @example
   *  bar: {
   *      padding: 1,
   *
   *      // the 'radius' option can be used only for non-stacking bars
   *      radius: 10,
   *      // or
   *      radius: {
   *          ratio: 0.5
   *      }
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
  bar_padding: 0,
  bar_radius: undefined,
  bar_radius_ratio: undefined,
  bar_sensitivity: 2,
  bar_width: undefined,
  bar_width_ratio: .6,
  bar_width_max: undefined,
  bar_zerobased: !0
});
// CONCATENATED MODULE: ./src/config/Options/shape/bubble.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * bubble config options
 */
/* harmony default export */ var bubble = ({
  /**
   * Set bubble options
   * @name bubble
   * @memberof Options
   * @type {Object}
   * @property {Number|Function} [bubble.maxR=35] Set the max bubble radius value
   * @property {Boolean} [bubble.zerobased=false] Set if min or max value will be 0 on bubble chart.
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
// CONCATENATED MODULE: ./src/config/Options/shape/line.ts
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
   * @type {Object}
   * @property {Boolean} [line.connectNull=false] Set if null data point will be connected or not.<br>
   *  If true set, the region of null data will be connected without any data point. If false set, the region of null data will not be connected and get empty.
   * @property {Array}   [line.classes=undefined] If set, used to set a css class on each line.
   * @property {Boolean} [line.step.type=step] Change step type for step chart.<br>
   * **Available values:**
   * - step
   * - step-before
   * - step-after
   * @property {Boolean|Array} [line.point=true] Set to false to not draw points on linecharts. Or pass an array of line ids to draw points for.
   * @property {Boolean} [line.zerobased=false] Set if min or max value will be 0 on line chart.
   * @example
   *  line: {
   *      connectNull: true,
   *      classes: [
   *          "line-class1",
   *          "line-class2"
   *      ],
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
  line_connectNull: !1,
  line_step_type: "step",
  line_zerobased: !1,
  line_classes: undefined,
  line_point: !0
});
// CONCATENATED MODULE: ./src/config/Options/shape/spline.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * x Axis config options
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
   * @type {Object}
   * @property {String} [spline.interpolation.type="cardinal"]
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
// CONCATENATED MODULE: ./src/config/Options/shape/donut.ts
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
   * @type {Object}
   * @property {Boolean} [donut.label.show=true] Show or hide label on each donut piece.
   * @property {Function} [donut.label.format] Set formatter for the label on each donut piece.
   * @property {Number} [donut.label.threshold=0.05] Set threshold to show/hide labels.
   * @property {Number|Function} [donut.label.ratio=undefined] Set ratio of labels position.
   * @property {Boolean} [donut.expand=true] Enable or disable expanding donut pieces.
   * @property {Number} [donut.expand.rate=0.98] Set expand rate.
   * @property {Number} [donut.expand.duration=50] Set expand transition time in ms.
   * @property {Number} [donut.width] Set width of donut chart.
   * @property {String} [donut.title=""] Set title of donut chart. Use `\n` character to enter line break.
   * @property {Number} [donut.padAngle=0] Set padding between data.
   * @property {Number} [donut.startingAngle=0] Set starting angle where data draws.
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
// CONCATENATED MODULE: ./src/config/Options/shape/gauge.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * gauge config options
 */
/* harmony default export */ var gauge = ({
  /**
   * Set gauge options
   * @name gauge
   * @memberof Options
   * @type {Object}
   * @property {Boolean} [gauge.fullCircle=false] Show full circle as donut. When set to 'true', the max label will not be showed due to start and end points are same location.
   * @property {Boolean} [gauge.label.show=true] Show or hide label on gauge.
   * @property {Function} [gauge.label.format] Set formatter for the label on gauge. Label text can be multilined with `\n` character.
   * @property {Function} [gauge.label.extents] Set customized min/max label text.
   * @property {Boolean} [gauge.expand=true] Enable or disable expanding gauge.
   * @property {Number} [gauge.expand.rate=0.98] Set expand rate.
   * @property {Number} [gauge.expand.duration=50] Set the expand transition time in milliseconds.
   * @property {Number} [gauge.min=0] Set min value of the gauge.
   * @property {Number} [gauge.max=100] Set max value of the gauge.
   * @property {Number} [gauge.startingAngle=-1 * Math.PI / 2] Set starting angle where data draws.
   * @property {String} [gauge.title=""] Set title of gauge chart. Use `\n` character to enter line break.
   * @property {String} [gauge.units] Set units of the gauge.
   * @property {Number} [gauge.width] Set width of gauge chart.
   * @property {String} [gauge.type="single"] Set type of gauge to be displayed.<br><br>
   * **Available Values:**
   * - single
   * - multi
   * @property {String} [gauge.arcs.minWidth=5] Set minimal width of gauge arcs until the innerRadius disappears.
   * @example
   *  gauge: {
   *      fullCircle: false,
   *      label: {
   *          show: false,
   *          format: function(value, ratio) {
   *              return value;
   *
   *              // to multiline, return with '\n' character
   *              // return value +"%\nLine1\n2Line2";
   *          },
   *          extents: function(value, isMax) {
   *              return (isMax ? "Max:" : "Min:") + value;
   *          }
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
   *      units: "%",
   *      width: 10,
   *      arcs: {
   *          minWidth: 5
   *      }
   *  }
   */
  gauge_fullCircle: !1,
  gauge_label_show: !0,
  gauge_label_format: undefined,
  gauge_label_extents: undefined,
  gauge_min: 0,
  gauge_max: 100,
  gauge_type: "single",
  gauge_startingAngle: -1 * Math.PI / 2,
  gauge_title: "",
  gauge_units: undefined,
  gauge_width: undefined,
  gauge_arcs_minWidth: 5,
  gauge_expand: {},
  gauge_expand_rate: .98,
  gauge_expand_duration: 50
});
// CONCATENATED MODULE: ./src/config/Options/shape/pie.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * x Axis config options
 */
/* harmony default export */ var pie = ({
  /**
   * Set pie options
   * @name pie
   * @memberof Options
   * @type {Object}
   * @property {Boolean} [pie.label.show=true] Show or hide label on each pie piece.
   * @property {Function} [pie.label.format] Set formatter for the label on each pie piece.
   * @property {Number} [pie.label.threshold=0.05] Set threshold to show/hide labels.
   * @property {Number|Function} [pie.label.ratio=undefined] Set ratio of labels position.
   * @property {Boolean|Object} [pie.expand=true] Enable or disable expanding pie pieces.
   * @property {Number} [pie.expand.rate=0.98] Set expand rate.
   * @property {Number} [pie.expand.duration=50] Set expand transition time in ms.
   * @property {Number|Object} [pie.innerRadius=0] Sets the inner radius of pie arc.
   * @property {Number} [pie.padAngle=0] Set padding between data.
   * @property {Number} [pie.padding=0] Sets the gap between pie arcs.
   * @property {Number} [donut.startingAngle=0] Set starting angle where data draws.
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
  pie_padAngle: 0,
  pie_padding: 0,
  pie_startingAngle: 0
});
// CONCATENATED MODULE: ./src/config/Options/shape/radar.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * x Axis config options
 */
/* harmony default export */ var radar = ({
  /**
   * Set radar options
   * - **NOTE:**
   *  > When x tick text contains `\n`, it's used as line break.
   * @name radar
   * @memberof Options
   * @type {Object}
   * @property {Number} [radar.axis.max=undefined] The max value of axis. If not given, it'll take the max value from the given data.
   * @property {Boolean} [radar.axis.line.show=true] Show or hide axis line.
   * @property {Number} [radar.axis.text.position.x=0] x coordinate position, relative the original.
   * @property {NUmber} [radar.axis.text.position.y=0] y coordinate position, relative the original.
   * @property {Boolean} [radar.axis.text.show=true] Show or hide axis text.
   * @property {Boolean} [radar.direction.clockwise=false] Set the direction to be drawn.
   * @property {Number} [radar.level.depth=3] Set the level depth.
   * @property {Boolean} [radar.level.show=true] Show or hide level.
   * @property {Function} [radar.level.text.format=(x) => (x % 1 === 0 ? x : x.toFixed(2))] Set format function for the level value.
   * @property {Boolean} [radar.level.text.show=true] Show or hide level text.
   * @property {Number} [radar.size.ratio=0.87] Set size ratio.
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
    return x % 1 === 0 ? x : x.toFixed(2);
  },
  radar_level_text_show: !0,
  radar_size_ratio: .87,
  radar_direction_clockwise: !1
});
// CONCATENATED MODULE: ./src/config/Options/Options.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
// common





 // Axis based












 // Non-Axis based






/**
 * Class to set options on generating chart.
 * - It's instantiated internally, not exposed for public.
 * @class Options
 * @see {@link bb.generate} to use these options on generating the chart
 */

var Options = function () {
  var config = [data_data, common_color, interaction, common_legend, common_title, common_tooltip].concat([donut, gauge, pie, radar], [data_axis, data_selection, axis_axis, common_grid, common_point, common_subchart, common_zoom], [shape_area, shape_bar, bubble, shape_line, spline]);
  return mergeObj.apply(void 0, [{
    /**
     * Specify the CSS selector or the element which the chart will be set to. D3 selection object can be specified also.<br>
     * If other chart is set already, it will be replaced with the new one (only one chart can be set in one element).
     * - **NOTE:** In case of element doesn't exist or not specified, will add a `<div>` element to the body.
     * @name bindto
     * @memberof Options
     * @property {String|HTMLElement|d3.selection} bindto=#chart Specify the element where chart will be drawn.
     * @property {String|HTMLElement|d3.selection} bindto.element=#chart Specify the element where chart will be drawn.
     * @property {String} [bindto.classname=bb] Specify the class name of bind element.<br>
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
     * @property {String} background.class Specify the class name for background element.
     * @property {String} background.color Specify the fill color for background element.<br>**NOTE:** Will be ignored if `imgUrl` option is set.
     * @property {String} background.imgUrl Specify the image url string for background.
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
     * @type {Boolean}
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
     * @type {Object}
     * @property {String} [svg.classname] class name for svg element
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
     * @type {Object}
     * @property {Number} [size.width] width of the chart element
     * @property {Number} [size.height] height of the chart element
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
     * @name padding
     * @memberof Options
     * @type {Object}
     * @property {Number} [padding.top] padding on the top of chart
     * @property {Number} [padding.right] padding on the right of chart
     * @property {Number} [padding.bottom] padding on the bottom of chart
     * @property {Number} [padding.left] padding on the left of chart
     * @example
     * padding: {
              *   top: 20,
              *   right: 20,
              *   bottom: 20,
              *   left: 20
     * }
     */
    padding_left: undefined,
    padding_right: undefined,
    padding_top: undefined,
    padding_bottom: undefined,

    /**
     * Set chart resize options
     * @name resize
     * @memberof Options
     * @type {Object}
     * @property {Boolean} [resize.auto=true] Set chart resize automatically on viewport changes.
     * @example
     *  resize: {
     *      auto: false
     *  }
     */
    resize_auto: !0,

    /**
     * Set a callback to execute when mouse/touch enters the chart.
     * @name onover
     * @memberof Options
     * @type {Function}
     * @default undefined
     * @example
     * // @param {Chart} ctx - Instance itself
     * onover: function(ctx) {
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
     * // @param {Chart} ctx - Instance itself
     * onout: function(ctx) {
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
     * // @param {Chart} ctx - Instance itself
     * onresize: function(ctx) {
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
     * // @param {Chart} ctx - Instance itself
     * onresized: function(ctx) {
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
     * // @param {Chart} ctx - Instance itself
     * onbeforeinit: function(ctx) {
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
     * // @param {Chart} ctx - Instance itself
     * oninit: function(ctx) {
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
     * // @param {Chart} ctx - Instance itself
     * onafterinit: function(ctx) {
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
     * // @param {Chart} ctx - Instance itself
     * onrendered: function(ctx) {
     *   ...
     * }
     */
    onrendered: undefined,

    /**
     * Set duration of transition (in milliseconds) for chart animation.<br><br>
     * - **NOTE:** If `0 `or `null` set, transition will be skipped. So, this makes initial rendering faster especially in case you have a lot of data.
     * @name transition
     * @memberof Options
     * @type {Object}
     * @property {Number} [transition.duration=350] duration in milliseconds
     * @example
     * transition: {
     *    duration: 500
     * }
     */
    transition_duration: 350,

    /**
     * Set scatter options
     * @name scatter
     * @memberof Options
     * @type {Object}
     * @property {Boolean} [scatter.zerobased=false] Set if min or max value will be 0 on scatter chart.
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
    scatter_zerobased: !1,

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
     * @type {Object}
     * @property {Boolean} [render.lazy=true] Make to not render at initialization (enabled by default when bind element's visibility is hidden).
     * @property {Boolean} [render.observe=true] Observe bind element's visibility(`display` or `visiblity` inline css property or class value) & render when is visible automatically (for IEs, only works IE11+). When set to **false**, call [`.flush()`](./Chart.html#flush) to render.
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
     * @example
     *  regions: [
     *    {
     *      axis: "x",
     *      start: 1,
     *      end: 4,
     *      class: "region-1-4"
     *    }
     *  ]
     */
    regions: []
  }].concat(config));
};


// CONCATENATED MODULE: ./src/module/Cache.ts


/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


var Cache_Cache =
/*#__PURE__*/
function () {
  function Cache() {
    _defineProperty(this, "cache", {});
  }

  var _proto = Cache.prototype;
  return _proto.add =
  /**
   * Add cache
   * @param {String} key
   * @param {*} value
   * @param {Boolean} isDataType
   * @private
   */
  function add(key, value, isDataType) {
    return isDataType === void 0 && (isDataType = !1), this.cache[key] = isDataType ? this.cloneTarget(value) : value, this.cache[key];
  }
  /**
   * Remove cache
   * @param {String|Array} key
   * @private
   */
  , _proto.remove = function remove(key) {
    var _this = this;

    toArray(key).forEach(function (v) {
      return delete _this.cache[v];
    });
  }
  /**
   * Get cahce
   * @param {String|Array} key
   * @param {Boolean} isDataType
   * @return {*}
   * @private
   */
  , _proto.get = function get(key, isDataType) {
    if (isDataType === void 0 && (isDataType = !1), isDataType) {
      for (var id, targets = [], i = 0; id = key[i]; i++) id in this.cache && targets.push(this.cloneTarget(this.cache[id]));

      return targets;
    }

    return this.cache[key] || null;
  }
  /**
   * reset cached data
   * @param {Boolean} all true: reset all data, false: reset only '$' prefixed key data
   * @private
  	 */
  , _proto.reset = function reset(all) {
    var $$ = this;

    for (var x in $$.cache) (all || /^\$/.test(x)) && ($$.cache[x] = null);
  }, _proto.cloneTarget = function cloneTarget(target) {
    return {
      id: target.id,
      id_org: target.id_org,
      values: target.values.map(function (d) {
        return {
          x: d.x,
          value: d.value,
          id: d.id
        };
      })
    };
  }, Cache;
}();


// EXTERNAL MODULE: external {"commonjs":"d3-axis","commonjs2":"d3-axis","amd":"d3-axis","root":"d3"}
var external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_ = __webpack_require__(40);

// EXTERNAL MODULE: external {"commonjs":"d3-scale","commonjs2":"d3-scale","amd":"d3-scale","root":"d3"}
var external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_ = __webpack_require__(41);

// CONCATENATED MODULE: ./src/ChartInternal/Axis/AxisRendererHelper.ts


/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * @ignore
 */



var AxisRendererHelper_AxisRendererHelper =
/*#__PURE__*/
function () {
  function AxisRendererHelper(owner) {
    _defineProperty(this, "owner", void 0), _defineProperty(this, "config", void 0), _defineProperty(this, "scale", void 0);
    var scale = Object(external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_["scaleLinear"])(),
        config = owner.config,
        params = owner.params;
    this.owner = owner, this.config = config, this.scale = scale, (config.noTransition || !params.config.transition_duration) && (config.withoutTransition = !0), config.range = this.scaleExtent((params.orgXScale || scale).range());
  }
  /**
   * Compute a character dimension
   * @param {d3.selection} node
   * @return {{w: number, h: number}}
   * @private
   */


  AxisRendererHelper.getSizeFor1Char = function getSizeFor1Char(node) {
    // default size for one character
    var size = {
      w: 5.5,
      h: 11.5
    };
    return node.empty() || node.select("text").text("0").call(function (el) {
      try {
        var _el$node$getBBox = el.node().getBBox(),
            width = _el$node$getBBox.width,
            height = _el$node$getBBox.height;

        width && height && (size.w = width, size.h = height), el.text("");
      } catch (e) {}
    }), this.getSizeFor1Char = function () {
      return size;
    }, size;
  };

  var _proto = AxisRendererHelper.prototype;
  return _proto.axisX = function axisX(selection, x) {
    var _this = this;

    selection.attr("transform", function (d) {
      return "translate(" + Math.ceil(x(d) + _this.config.tickOffset) + ",0)";
    });
  }, _proto.axisY = function axisY(selection, y) {
    selection.attr("transform", function (d) {
      return "translate(0," + Math.ceil(y(d)) + ")";
    });
  }, _proto.scaleExtent = function scaleExtent(domain) {
    var start = domain[0],
        stop = domain[domain.length - 1];
    return start < stop ? [start, stop] : [stop, start];
  }, _proto.generateTicks = function generateTicks(scale, isYAxes) {
    var tickStepSize = this.owner.params.tickStepSize,
        ticks = [];
    // When 'axis[y|y2].tick.stepSize' option is set
    if (isYAxes && tickStepSize) for (var _scale$domain = scale.domain(), start = _scale$domain[0], end = _scale$domain[1], interval = start; interval <= end;) ticks.push(interval), interval += tickStepSize;else if (scale.ticks) ticks = scale.ticks.apply(scale, this.config.tickArguments || []).map(function (v) {
      return (// round the tick value if is number
        isString(v) && isNumber(v) && !isNaN(v) && Math.round(v * 10) / 10 || v
      );
    });else {
      for (var domain = scale.domain(), i = Math.ceil(domain[0]); i < domain[1]; i++) ticks.push(i);

      ticks.length > 0 && ticks[0] > 0 && ticks.unshift(ticks[0] - (ticks[1] - ticks[0]));
    }
    return ticks;
  }, _proto.copyScale = function copyScale() {
    var newScale = this.scale.copy();
    return newScale.domain().length || newScale.domain(this.scale.domain()), newScale;
  }, _proto.textFormatted = function textFormatted(v) {
    var tickFormat = this.config.tickFormat,
        value = /\d+\.\d+0{5,}\d$/.test(v) ? +(v + "").replace(/0+\d$/, "") : v,
        formatted = tickFormat ? tickFormat(value) : value; // to round float numbers from 'binary floating point'
    // https://en.wikipedia.org/wiki/Double-precision_floating-point_format
    // https://stackoverflow.com/questions/17849101/laymans-explanation-for-why-javascript-has-weird-floating-math-ieee-754-stand

    return isDefined(formatted) ? formatted : "";
  }, _proto.transitionise = function transitionise(selection) {
    var config = this.config;
    return config.withoutTransition ? selection.interrupt() : selection.transition(config.transition);
  }, AxisRendererHelper;
}();


// CONCATENATED MODULE: ./src/ChartInternal/Axis/AxisRenderer.ts


/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * @ignore
 */




var AxisRenderer_AxisRenderer =
/*#__PURE__*/
function () {
  function AxisRenderer(params) {
    params === void 0 && (params = {}), _defineProperty(this, "helper", void 0), _defineProperty(this, "config", void 0), _defineProperty(this, "params", void 0), _defineProperty(this, "g", void 0);
    var config = {
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
    config.tickLength = Math.max(config.innerTickSize, 0) + config.tickPadding, this.config = config, this.params = params, this.helper = new AxisRendererHelper_AxisRendererHelper(this);
  }
  /**
   * Create axis element
   * @param {d3.selection} g
   * @private
   */


  var _proto = AxisRenderer.prototype;
  return _proto.create = function create(g) {
    var ctx = this,
        config = this.config,
        params = this.params,
        helperInst = this.helper,
        scale = helperInst.scale,
        orient = config.orient,
        splitTickText = this.splitTickText.bind(this),
        isLeftRight = /^(left|right)$/.test(orient),
        isTopBottom = /^(top|bottom)$/.test(orient),
        tickTransform = helperInst[isTopBottom ? "axisX" : "axisY"],
        axisPx = tickTransform === helperInst.axisX ? "y" : "x",
        sign = /^(top|left)$/.test(orient) ? -1 : 1,
        rotate = params.tickTextRotate;
    this.config.range = scale.rangeExtent ? scale.rangeExtent() : helperInst.scaleExtent((params.orgXScale || scale).range());
    var $g,
        _config = config,
        innerTickSize = _config.innerTickSize,
        tickLength = _config.tickLength,
        range = _config.range,
        name = params.name,
        tickTextPos = name && /^(x|y|y2)$/.test(name) ? params.config["axis_" + name + "_tick_text_position"] : {
      x: 0,
      y: 0
    },
        prefix = name === "subX" ? "subchart_axis_x" : "axis_" + name,
        axisShow = params.config[prefix + "_show"],
        tickShow = {
      tick: !!axisShow && params.config[prefix + "_tick_show"],
      text: !!axisShow && params.config[prefix + "_tick_text_show"]
    }; // // get the axis' tick position configuration

    g.each(function () {
      var g = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
          scale0 = this.__chart__ || scale,
          scale1 = helperInst.copyScale();
      $g = g, this.__chart__ = scale1, config.tickOffset = params.isCategory ? Math.ceil((scale1(1) - scale1(0)) / 2) : 0;
      // update selection - data join
      var path = g.selectAll(".domain").data([0]); // enter + update selection

      if (path.enter().append("path").attr("class", "domain").merge(helperInst.transitionise(path)).attr("d", function () {
        var outerTickSized = config.outerTickSize * sign;
        return isTopBottom ? "M" + range[0] + "," + outerTickSized + "V0H" + range[1] + "V" + outerTickSized : "M" + outerTickSized + "," + range[0] + "H0V" + range[1] + "H" + outerTickSized;
      }), tickShow.tick || tickShow.text) {
        // count of tick data in array
        var ticks = config.tickValues || helperInst.generateTicks(scale1, isLeftRight),
            tick = g.selectAll(".tick").data(ticks, scale1),
            tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", "1"),
            tickExit = tick.exit().remove(); // update selection

        tick = tickEnter.merge(tick), tickShow.tick && tickEnter.append("line"), tickShow.text && tickEnter.append("text");
        var sizeFor1Char = AxisRendererHelper_AxisRendererHelper.getSizeFor1Char(tick),
            counts = [],
            tspan = tick.select("text").selectAll("tspan").data(function (d, index) {
          var split = params.tickMultiline ? splitTickText(d, scale1, ticks, isLeftRight, sizeFor1Char.w) : isArray(helperInst.textFormatted(d)) ? helperInst.textFormatted(d).concat() : [helperInst.textFormatted(d)];
          return counts[index] = split.length, split.map(function (splitted) {
            return {
              index: index,
              splitted: splitted
            };
          });
        });
        tspan.exit().remove(), tspan = tspan.enter().append("tspan").merge(tspan).text(function (d) {
          return d.splitted;
        }), tspan.attr("x", isTopBottom ? 0 : tickLength * sign).attr("dx", function () {
          var dx = 0;
          return /(top|bottom)/.test(orient) && rotate && (dx = 8 * Math.sin(Math.PI * (rotate / 180)) * (orient === "top" ? -1 : 1)), dx + (tickTextPos.x || 0);
        }()).attr("dy", function (d, i) {
          var dy = 0;
          return orient !== "top" && (dy = sizeFor1Char.h, i === 0 && (dy = isLeftRight ? -((counts[d.index] - 1) * (sizeFor1Char.h / 2) - 3) : tickTextPos.y === 0 ? ".71em" : 0)), isNumber(dy) && tickTextPos.y ? dy + tickTextPos.y : dy || ".71em";
        });
        var lineUpdate = tick.select("line"),
            textUpdate = tick.select("text");

        if (tickEnter.select("line").attr(axisPx + "2", innerTickSize * sign), tickEnter.select("text").attr("" + axisPx, tickLength * sign), ctx.setTickLineTextPosition(lineUpdate, textUpdate), params.tickTitle && textUpdate.append && textUpdate.append("title").each(function (index) {
          Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).text(params.tickTitle[index]);
        }), scale1.bandwidth) {
          var x = scale1,
              dx = x.bandwidth() / 2;
          scale0 = function (d) {
            return x(d) + dx;
          }, scale1 = scale0;
        } else scale0.bandwidth ? scale0 = scale1 : tickTransform.call(helperInst, tickExit, scale1);

        tickTransform.call(helperInst, tickEnter, scale0), tickTransform.call(helperInst, helperInst.transitionise(tick).style("opacity", "1"), scale1);
      }
    }), this.g = $g;
  }
  /**
   * Get tick x/y coordinate
   * @return {{x: number, y: number}}
   * @private
   */
  , _proto.getTickXY = function getTickXY() {
    var config = this.config,
        pos = {
      x: 0,
      y: 0
    };
    return this.params.isCategory && (pos.x = config.tickCentered ? 0 : config.tickOffset, pos.y = config.tickCentered ? config.tickOffset : 0), pos;
  }
  /**
   * Get tick size
   * @param d
   * @return {number}
   * @private
   */
  , _proto.getTickSize = function getTickSize(d) {
    var scale = this.helper.scale,
        config = this.config,
        _config2 = config,
        innerTickSize = _config2.innerTickSize,
        range = _config2.range,
        tickPosition = scale(d) + (config.tickCentered ? 0 : config.tickOffset);
    return range[0] < tickPosition && tickPosition < range[1] ? innerTickSize : 0;
  }
  /**
   * Set tick's line & text position
   * @param lineUpdate
   * @param textUpdate
   * @param scale
   * @private
   */
  , _proto.setTickLineTextPosition = function setTickLineTextPosition(lineUpdate, textUpdate) {
    var tickPos = this.getTickXY(),
        _this$config = this.config,
        innerTickSize = _this$config.innerTickSize,
        orient = _this$config.orient,
        tickLength = _this$config.tickLength,
        tickOffset = _this$config.tickOffset,
        rotate = this.params.tickTextRotate,
        textAnchorForText = function (r) {
      var value = ["start", "end"];
      return orient === "top" && value.reverse(), r ? r > 0 ? value[0] : value[1] : "middle";
    },
        textTransform = function (r) {
      return r ? "rotate(" + r + ")" : null;
    },
        yForText = function (r) {
      var r2 = r / (orient === "bottom" ? 15 : 23);
      return r ? 11.5 - 2.5 * r2 * (r > 0 ? 1 : -1) : tickLength;
    };

    orient === "bottom" ? (lineUpdate.attr("x1", tickPos.x).attr("x2", tickPos.x).attr("y2", this.getTickSize.bind(this)), textUpdate.attr("x", 0).attr("y", yForText(rotate)).style("text-anchor", textAnchorForText(rotate)).attr("transform", textTransform(rotate))) : orient === "top" ? (lineUpdate.attr("x2", 0).attr("y2", -innerTickSize), textUpdate.attr("x", 0).attr("y", -yForText(rotate) * 2).style("text-anchor", textAnchorForText(rotate)).attr("transform", textTransform(rotate))) : orient === "left" ? (lineUpdate.attr("x2", -innerTickSize).attr("y1", tickPos.y).attr("y2", tickPos.y), textUpdate.attr("x", -tickLength).attr("y", tickOffset).style("text-anchor", "end")) : orient === "right" ? (lineUpdate.attr("x2", innerTickSize).attr("y2", 0), textUpdate.attr("x", tickLength).attr("y", 0).style("text-anchor", "start")) : void 0;
  } // this should be called only when category axis
  , _proto.splitTickText = function splitTickText(d, scale, ticks, isLeftRight, charWidth) {
    function split(splitted, text) {
      for (var subtext, spaceIndex, textWidth, i = 1; i < text.length; i++) // if text width gets over tick width, split by space index or current index
      if (text.charAt(i) === " " && (spaceIndex = i), subtext = text.substr(0, i + 1), textWidth = charWidth * subtext.length, tickWidth < textWidth) return split(splitted.concat(text.substr(0, spaceIndex || i)), text.slice(spaceIndex ? spaceIndex + 1 : i));

      return splitted.concat(text);
    }

    var params = this.params,
        tickText = this.helper.textFormatted(d),
        splitted = isString(tickText) && tickText.indexOf("\n") > -1 ? tickText.split("\n") : [];
    if (splitted.length) return splitted;
    if (isArray(tickText)) return tickText;
    var tickWidth = params.tickWidth;
    return (!tickWidth || tickWidth <= 0) && (tickWidth = isLeftRight ? 95 : params.isCategory ? Math.ceil(scale(ticks[1]) - scale(ticks[0])) - 12 : 110), split(splitted, tickText + "");
  }, _proto.scale = function scale(x) {
    return arguments.length ? (this.helper.scale = x, this) : this.helper.scale;
  }, _proto.orient = function orient(x) {
    return arguments.length ? (this.config.orient = x in {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    } ? x + "" : "bottom", this) : this.config.orient;
  }, _proto.tickFormat = function tickFormat(format) {
    var config = this.config;
    return arguments.length ? (config.tickFormat = format, this) : config.tickFormat;
  }, _proto.tickCentered = function tickCentered(isCentered) {
    var config = this.config;
    return arguments.length ? (config.tickCentered = isCentered, this) : config.tickCentered;
  }
  /**
   * Return tick's offset value.
   * The value will be set for 'category' axis type.
   * @return {number}
   * @private
   */
  , _proto.tickOffset = function tickOffset() {
    return this.config.tickOffset;
  }
  /**
   * Get tick interval count
   * @private
   * @param {Number} size Total data size
   * @return {number}
   */
  , _proto.tickInterval = function tickInterval(size) {
    var interval;
    if (this.params.isCategory) interval = this.config.tickOffset * 2;else {
      var length = this.g.select("path.domain").node().getTotalLength() - this.config.outerTickSize * 2;
      interval = length / (size || this.g.selectAll("line").size());
    }
    return interval === Infinity ? 0 : interval;
  }, _proto.ticks = function ticks() {
    for (var config = this.config, _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];

    return args.length ? (config.tickArguments = toArray(args), this) : config.tickArguments;
  }, _proto.tickCulling = function tickCulling(culling) {
    var config = this.config;
    return arguments.length ? (config.tickCulling = culling, this) : config.tickCulling;
  }, _proto.tickValues = function tickValues(x) {
    var _this = this,
        config = this.config;

    if (isFunction(x)) config.tickValues = function () {
      return x(_this.helper.scale.domain());
    };else {
      if (!arguments.length) return config.tickValues;
      config.tickValues = x;
    }
    return this;
  }, _proto.setTransition = function setTransition(t) {
    return this.config.transition = t, this;
  }, AxisRenderer;
}();


// CONCATENATED MODULE: ./src/ChartInternal/Axis/Axis.ts


/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */





var Axis_Axis =
/*#__PURE__*/
function () {
  function Axis(owner) {
    _defineProperty(this, "owner", void 0), _defineProperty(this, "axesList", {}), _defineProperty(this, "tick", {
      x: null,
      y: null,
      y2: null
    }), _defineProperty(this, "xs", []), _defineProperty(this, "orient", {
      x: "bottom",
      y: "left",
      y2: "right",
      subX: "bottom"
    }), this.owner = owner, this.setOrient();
  }

  var _proto = Axis.prototype;
  return _proto.getAxisClassName = function getAxisClassName(id) {
    return config_classes.axis + " " + config_classes["axis" + capitalize(id)];
  }, _proto.isHorizontal = function isHorizontal($$, forHorizontal) {
    var isRotated = $$.config.axis_rotated;
    return forHorizontal ? isRotated : !isRotated;
  }, _proto.init = function init() {
    var _this = this,
        $$ = this.owner,
        config = $$.config,
        _$$$$el = $$.$el,
        main = _$$$$el.main,
        axis = _$$$$el.axis,
        clip = $$.state.clip,
        isRotated = config.axis_rotated,
        target = ["x", "y"];

    config.axis_y2_show && target.push("y2"), target.forEach(function (v) {
      var classAxis = _this.getAxisClassName(v),
          axisId = v.toUpperCase(),
          classLabel = config_classes["axis" + axisId + "Label"];

      axis[v] = main.append("g").attr("class", classAxis).attr("clip-path", function () {
        var res = null;
        return v === "x" ? res = clip.pathXAxis : v === "y" && config.axis_y_inner && (res = clip.pathYAxis), res;
      }).attr("transform", $$.getTranslate(v)).style("visibility", config["axis_" + v + "_show"] ? "visible" : "hidden"), axis[v].append("text").attr("class", classLabel).attr("transform", ["rotate(-90)", null][v === "x" ? +!isRotated : +isRotated]).style("text-anchor", _this["textAnchorFor" + axisId + "AxisLabel"].bind(_this)), _this.generateAxes(v);
    });
  }
  /**
   * Set axis orient according option value
   * @private
   */
  , _proto.setOrient = function setOrient() {
    var $$ = this.owner,
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
   * @param {String} id Axis id
   * @private
   */
  , _proto.generateAxes = function generateAxes(id) {
    var d3Axis,
        $$ = this.owner,
        config = $$.config,
        axes = [],
        axesConfig = config["axis_" + id + "_axes"],
        isRotated = config.axis_rotated;
    id === "x" ? d3Axis = isRotated ? external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_["axisLeft"] : external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_["axisBottom"] : id === "y" ? d3Axis = isRotated ? external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_["axisBottom"] : external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_["axisLeft"] : id === "y2" && (d3Axis = isRotated ? external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_["axisTop"] : external_commonjs_d3_axis_commonjs2_d3_axis_amd_d3_axis_root_d3_["axisRight"]), axesConfig.length && axesConfig.forEach(function (v) {
      var tick = v.tick || {},
          scale = $$.scale[id].copy();
      v.domain && scale.domain(v.domain), axes.push(d3Axis(scale).ticks(tick.count).tickFormat(isFunction(tick.format) ? tick.format.bind($$.api) : function (x) {
        return x;
      }).tickValues(tick.values).tickSizeOuter(tick.outer === !1 ? 0 : 6));
    }), this.axesList[id] = axes;
  }
  /**
   * Update axes nodes
   * @private
   */
  , _proto.updateAxes = function updateAxes() {
    var _this2 = this,
        $$ = this.owner,
        config = $$.config,
        main = $$.$el.main;

    Object.keys(this.axesList).forEach(function (id) {
      var axesConfig = config["axis_" + id + "_axes"],
          scale = $$.scale[id].copy(),
          range = scale.range();

      _this2.axesList[id].forEach(function (v, i) {
        var axisRange = v.scale().range(); // adjust range value with the current
        // https://github.com/naver/billboard.js/issues/859

        range.every(function (v, i) {
          return v === axisRange[i];
        }) || v.scale().range(range);
        var className = _this2.getAxisClassName(id) + "-" + (i + 1),
            g = main.select("." + className.replace(/\s/, "."));
        g.empty() ? g = main.append("g").attr("class", className).style("visibility", config["axis_" + id + "_show"] ? "visible" : "hidden").call(v) : (axesConfig[i].domain && scale.domain(axesConfig[i].domain), $$.axis.x.helper.transitionise(g).call(v.scale(scale))), g.attr("transform", $$.getTranslate(id, i + 1));
      });
    });
  } // called from : updateScales() & getMaxTickWidth()
  , _proto.getAxis = function getAxis(name, scale, outerTick, noTransition, noTickTextRotate) {
    var tickFormat,
        $$ = this.owner,
        config = $$.config,
        isX = /^(x|subX)$/.test(name),
        type = isX ? "x" : name,
        isCategory = isX && $$.isCategorized(),
        orient = this.orient[name];
    if (isX) tickFormat = $$.format.xAxisTick;else {
      var fn = config["axis_" + name + "_tick_format"];
      isFunction(fn) && (tickFormat = fn.bind($$.api));
    }
    var tickValues = $$.axis.tick[type],
        axisParams = mergeObj({
      outerTick: outerTick,
      noTransition: noTransition,
      config: config,
      name: name,
      tickTextRotate: noTickTextRotate ? 0 : config["axis_" + type + "_tick_rotate"]
    }, isX && {
      isCategory: isCategory,
      tickMultiline: config.axis_x_tick_multiline,
      tickWidth: config.axis_x_tick_width,
      tickTitle: isCategory && config.axis_x_tick_tooltip && $$.api.categories(),
      orgXScale: $$.scale.x
    });
    isX || (axisParams.tickStepSize = config["axis_" + type + "_tick_stepSize"]);
    var axis = new AxisRenderer_AxisRenderer(axisParams).scale(isX && $$.scale.zoom || scale).orient(orient);

    if (isX && $$.isTimeSeries() && tickValues && !isFunction(tickValues)) {
      var _fn = parseDate.bind($$);

      tickValues = tickValues.map(function (v) {
        return _fn(v);
      });
    } else !isX && $$.isTimeSeriesY() && ( // https://github.com/d3/d3/blob/master/CHANGES.md#time-intervals-d3-time
    axis.ticks(config.axis_y_tick_time_value), tickValues = null);

    return tickValues && axis.tickValues(tickValues), axis.tickFormat(tickFormat || !isX && $$.isStackNormalized() && function (x) {
      return x + "%";
    }), isCategory && (axis.tickCentered(config.axis_x_tick_centered), isEmpty(config.axis_x_tick_culling) && (config.axis_x_tick_culling = !1)), config["axis_" + type + "_tick_count"] && axis.ticks(config["axis_" + type + "_tick_count"]), axis;
  }, _proto.updateXAxisTickValues = function updateXAxisTickValues(targets, axis) {
    var values,
        $$ = this.owner,
        config = $$.config,
        fit = config.axis_x_tick_fit,
        count = config.axis_x_tick_count;
    return (fit || count && fit) && (values = this.generateTickValues($$.mapTargetsToUniqueXs(targets), count, $$.isTimeSeries())), axis ? axis.tickValues(values) : $$.axis.x && ($$.axis.x.tickValues(values), $$.axis.subX && $$.axis.subX.tickValues(values)), values;
  }, _proto.getId = function getId(id) {
    var _this$owner = this.owner,
        config = _this$owner.config,
        scale = _this$owner.scale,
        axis = config.data_axes[id];
    return axis && scale[axis] || (axis = "y"), axis;
  }, _proto.getXAxisTickFormat = function getXAxisTickFormat() {
    var currFormat,
        $$ = this.owner,
        config = $$.config,
        format = $$.format,
        tickFormat = config.axis_x_tick_format,
        isTimeSeries = $$.isTimeSeries(),
        isCategorized = $$.isCategorized();
    return tickFormat ? isFunction(tickFormat) ? currFormat = tickFormat.bind($$.api) : isTimeSeries && (currFormat = function (date) {
      return date ? format.axisTime(tickFormat)(date) : "";
    }) : currFormat = isTimeSeries ? format.defaultAxisTime : isCategorized ? $$.categoryName : function (v) {
      return v < 0 ? v.toFixed(0) : v;
    }, isFunction(currFormat) ? function (v) {
      return currFormat.apply($$, isCategorized ? [v, $$.categoryName(v)] : [v]);
    } : currFormat;
  }, _proto.getTickValues = function getTickValues(id) {
    var $$ = this.owner,
        tickValues = $$.config["axis_" + id + "_tick_values"],
        axis = $$[id + "Axis"];
    return (isFunction(tickValues) ? tickValues.call($$.api) : tickValues) || (axis ? axis.tickValues() : undefined);
  }, _proto.getLabelOptionByAxisId = function getLabelOptionByAxisId(id) {
    return this.owner.config["axis_" + id + "_label"];
  }, _proto.getLabelText = function getLabelText(id) {
    var option = this.getLabelOptionByAxisId(id);
    return isString(option) ? option : option ? option.text : null;
  }, _proto.setLabelText = function setLabelText(id, text) {
    var $$ = this.owner,
        config = $$.config,
        option = this.getLabelOptionByAxisId(id);
    isString(option) ? config["axis_" + id + "_label"] = text : option && (option.text = text);
  }, _proto.getLabelPosition = function getLabelPosition(id, defaultPosition) {
    var isRotated = this.owner.config.axis_rotated,
        option = this.getLabelOptionByAxisId(id),
        position = isObjectType(option) && option.position ? option.position : defaultPosition[+!isRotated],
        has = function (v) {
      return !!~position.indexOf(v);
    };

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
  }, _proto.getXAxisLabelPosition = function getXAxisLabelPosition() {
    return this.getLabelPosition("x", ["inner-top", "inner-right"]);
  }, _proto.getYAxisLabelPosition = function getYAxisLabelPosition() {
    return this.getLabelPosition("y", ["inner-right", "inner-top"]);
  }, _proto.getY2AxisLabelPosition = function getY2AxisLabelPosition() {
    return this.getLabelPosition("y2", ["inner-right", "inner-top"]);
  }, _proto.getLabelPositionById = function getLabelPositionById(id) {
    return this["get" + id.toUpperCase() + "AxisLabelPosition"]();
  }, _proto.textForXAxisLabel = function textForXAxisLabel() {
    return this.getLabelText("x");
  }, _proto.textForYAxisLabel = function textForYAxisLabel() {
    return this.getLabelText("y");
  }, _proto.textForY2AxisLabel = function textForY2AxisLabel() {
    return this.getLabelText("y2");
  }, _proto.xForAxisLabel = function xForAxisLabel(position, forHorizontal) {
    forHorizontal === void 0 && (forHorizontal = !0);
    var $$ = this.owner,
        _$$$state = $$.state,
        width = _$$$state.width,
        height = _$$$state.height,
        x = position.isMiddle ? -height / 2 : 0;
    return this.isHorizontal($$, forHorizontal) ? x = position.isLeft ? 0 : position.isCenter ? width / 2 : width : position.isBottom && (x = -$$.state.height), x;
  }, _proto.dxForAxisLabel = function dxForAxisLabel(position, forHorizontal) {
    forHorizontal === void 0 && (forHorizontal = !0);
    var $$ = this.owner,
        dx = position.isBottom ? "0.5em" : "0";
    return this.isHorizontal($$, forHorizontal) ? dx = position.isLeft ? "0.5em" : position.isRight ? "-0.5em" : "0" : position.isTop && (dx = "-0.5em"), dx;
  }, _proto.textAnchorForAxisLabel = function textAnchorForAxisLabel(position, forHorizontal) {
    forHorizontal === void 0 && (forHorizontal = !0);
    var $$ = this.owner,
        anchor = position.isMiddle ? "middle" : "end";
    return this.isHorizontal($$, forHorizontal) ? anchor = position.isLeft ? "start" : position.isCenter ? "middle" : "end" : position.isBottom && (anchor = "start"), anchor;
  }, _proto.xForXAxisLabel = function xForXAxisLabel() {
    return this.xForAxisLabel(this.getXAxisLabelPosition(), !1);
  }, _proto.xForYAxisLabel = function xForYAxisLabel() {
    return this.xForAxisLabel(this.getYAxisLabelPosition());
  }, _proto.xForY2AxisLabel = function xForY2AxisLabel() {
    return this.xForAxisLabel(this.getY2AxisLabelPosition());
  }, _proto.dxForXAxisLabel = function dxForXAxisLabel() {
    return this.dxForAxisLabel(this.getXAxisLabelPosition(), !1);
  }, _proto.dxForYAxisLabel = function dxForYAxisLabel() {
    return this.dxForAxisLabel(this.getYAxisLabelPosition());
  }, _proto.dxForY2AxisLabel = function dxForY2AxisLabel() {
    return this.dxForAxisLabel(this.getY2AxisLabelPosition());
  }, _proto.dyForXAxisLabel = function dyForXAxisLabel() {
    var $$ = this.owner,
        config = $$.config,
        isInner = this.getXAxisLabelPosition().isInner,
        xHeight = config.axis_x_height;
    return config.axis_rotated ? isInner ? "1.2em" : -25 - this.getMaxTickWidth("x") : isInner ? "-0.5em" : xHeight ? xHeight - 10 : "3em";
  }, _proto.dyForYAxisLabel = function dyForYAxisLabel() {
    var $$ = this.owner,
        isInner = this.getYAxisLabelPosition().isInner;
    return $$.config.axis_rotated ? isInner ? "-0.5em" : "3em" : isInner ? "1.2em" : -10 - ($$.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10);
  }, _proto.dyForY2AxisLabel = function dyForY2AxisLabel() {
    var $$ = this.owner,
        isInner = this.getY2AxisLabelPosition().isInner;
    return $$.config.axis_rotated ? isInner ? "1.2em" : "-2.2em" : isInner ? "-0.5em" : 15 + ($$.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15);
  }, _proto.textAnchorForXAxisLabel = function textAnchorForXAxisLabel() {
    return this.textAnchorForAxisLabel(this.getXAxisLabelPosition(), !1);
  }, _proto.textAnchorForYAxisLabel = function textAnchorForYAxisLabel() {
    return this.textAnchorForAxisLabel(this.getYAxisLabelPosition());
  }, _proto.textAnchorForY2AxisLabel = function textAnchorForY2AxisLabel() {
    return this.textAnchorForAxisLabel(this.getY2AxisLabelPosition());
  }, _proto.getMaxTickWidth = function getMaxTickWidth(id, withoutRecompute) {
    var $$ = this.owner,
        config = $$.config,
        _$$$$el2 = $$.$el,
        svg = _$$$$el2.svg,
        chart = _$$$$el2.chart,
        currentTickMax = $$.state.currentMaxTickWidths[id],
        maxWidth = 0;
    if (withoutRecompute || !config["axis_" + id + "_show"]) return currentTickMax.size;

    if (svg) {
      var isYAxis = /^y2?$/.test(id),
          targetsToShow = $$.filterTargetsToShow($$.data.targets),
          scale = $$.scale[id].copy().domain($$["get" + (isYAxis ? "Y" : "X") + "Domain"](targetsToShow, id)),
          domain = scale.domain();
      // do not compute if domain is same
      if (isArray(currentTickMax.domain) && currentTickMax.domain.every(function (v, i) {
        return v === domain[i];
      })) return currentTickMax.size;
      currentTickMax.domain = domain;
      var axis = this.getAxis(id, scale, !1, !1, !0),
          tickCount = config["axis_" + id + "_tick_count"];
      tickCount && axis.tickValues(this.generateTickValues(domain, tickCount, isYAxis ? $$.isTimeSeriesY() : $$.isTimeSeries())), isYAxis || this.updateXAxisTickValues(targetsToShow, axis);
      var dummy = chart.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0px").style("left", "0px");
      axis.create(dummy), dummy.selectAll("text").each(function () {
        maxWidth = Math.max(maxWidth, this.getBoundingClientRect().width);
      }), dummy.remove();
    }

    return maxWidth > 0 && (currentTickMax.size = maxWidth), currentTickMax.size;
  }, _proto.updateLabels = function updateLabels(withTransition) {
    var _this3 = this,
        $$ = this.owner,
        main = $$.$el.main,
        labels = {
      X: main.select("." + config_classes.axisX + " ." + config_classes.axisXLabel),
      Y: main.select("." + config_classes.axisY + " ." + config_classes.axisYLabel),
      Y2: main.select("." + config_classes.axisY2 + " ." + config_classes.axisY2Label)
    };

    Object.keys(labels).filter(function (id) {
      return !labels[id].empty();
    }).forEach(function (v) {
      var node = labels[v],
          axisLabel = v + "AxisLabel";
      (withTransition ? node.transition() : node).attr("x", _this3["xFor" + axisLabel].bind(_this3)).attr("dx", _this3["dxFor" + axisLabel].bind(_this3)).attr("dy", _this3["dyFor" + axisLabel].bind(_this3)).text(_this3["textFor" + axisLabel].bind(_this3));
    });
  }, _proto.getPadding = function getPadding(padding, key, defaultValue, domainLength) {
    var p = isNumber(padding) ? padding : padding[key];
    return isValue(p) ? this.convertPixelsToAxisPadding(p, domainLength) : defaultValue;
  }, _proto.convertPixelsToAxisPadding = function convertPixelsToAxisPadding(pixels, domainLength) {
    var $$ = this.owner,
        config = $$.config,
        _$$$state2 = $$.state,
        width = _$$$state2.width,
        height = _$$$state2.height,
        length = config.axis_rotated ? width : height;
    return domainLength * (pixels / length);
  }, _proto.generateTickValues = function generateTickValues(values, tickCount, forTimeSeries) {
    var start,
        end,
        count,
        interval,
        i,
        tickValue,
        tickValues = values;

    if (tickCount) {
      var targetCount = isFunction(tickCount) ? tickCount() : tickCount; // compute ticks according to tickCount

      if (targetCount === 1) tickValues = [values[0]];else if (targetCount === 2) tickValues = [values[0], values[values.length - 1]];else if (targetCount > 2) {
        var isCategorized = this.owner.isCategorized();

        for (count = targetCount - 2, start = values[0], end = values[values.length - 1], interval = (end - start) / (count + 1), tickValues = [start], i = 0; i < count; i++) tickValue = +start + interval * (i + 1), tickValues.push(forTimeSeries ? new Date(tickValue) : isCategorized ? Math.round(tickValue) : tickValue);

        tickValues.push(end);
      }
    }

    return forTimeSeries || (tickValues = tickValues.sort(function (a, b) {
      return a - b;
    })), tickValues;
  }, _proto.generateTransitions = function generateTransitions(duration) {
    var $$ = this.owner,
        axis = $$.$el.axis,
        _map = ["x", "y", "y2", "subX"].map(function (v) {
      var ax = axis[v];
      return ax && duration && (ax = ax.transition().duration(duration)), ax;
    }),
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
  }, _proto.redraw = function redraw(transitions, isHidden, isInit) {
    var $$ = this.owner,
        config = $$.config,
        $el = $$.$el,
        opacity = isHidden ? "0" : "1";
    ["x", "y", "y2", "subX"].forEach(function (id) {
      var axis = $$.axis[id],
          $axis = $el.axis[id];
      axis && $axis && (!isInit && (axis.config.withoutTransition = !config.transition_duration), $axis.style("opacity", opacity), axis.create(transitions["axis" + capitalize(id)]));
    }), this.updateAxes();
  }
  /**
   * Redraw axis
   * @param {Object} targetsToShow targets data to be shown
   * @param {Object} wth
   * @param {Ojbect} transitions
   * @param {Object} flow
   * @private
   */
  , _proto.redrawAxis = function redrawAxis(targetsToShow, wth, transitions, flow, isInit) {
    var xDomainForZoom,
        _this4 = this,
        $$ = this.owner,
        config = $$.config,
        scale = $$.scale,
        $el = $$.$el,
        hasZoom = !!scale.zoom;

    !hasZoom && $$.isCategorized() && targetsToShow.length === 0 && scale.x.domain([0, $el.axis.x.selectAll(".tick").size()]), scale.x && targetsToShow.length ? (!hasZoom && $$.updateXDomain(targetsToShow, wth.UpdateXDomain, wth.UpdateOrgXDomain, wth.TrimXDomain), !config.axis_x_tick_values && this.updateXAxisTickValues(targetsToShow)) : $$.axis.x && ($$.axis.x.tickValues([]), $$.axis.subX && $$.axis.subX.tickValues([])), config.zoom_rescale && !flow && (xDomainForZoom = scale.x.orgDomain()), ["y", "y2"].forEach(function (key) {
      var axis = scale[key];

      if (axis) {
        var tickValues = config["axis_" + key + "_tick_values"],
            tickCount = config["axis_" + key + "_tick_count"];

        if (axis.domain($$.getYDomain(targetsToShow, key, xDomainForZoom)), !tickValues && tickCount) {
          var domain = axis.domain();
          $$[key + "Axis"].tickValues(_this4.generateTickValues(domain, domain.every(function (v) {
            return v === 0;
          }) ? 1 : tickCount, $$.isTimeSeriesY()));
        }
      }
    }), this.redraw(transitions, $$.hasArcType(), isInit), this.updateLabels(wth.Transition), (wth.UpdateXDomain || wth.UpdateXAxis || wth.Y) && targetsToShow.length && this.setCulling(), wth.Y && (scale.subY && scale.subY.domain($$.getYDomain(targetsToShow, "y")), scale.subY2 && scale.subY2.domain($$.getYDomain(targetsToShow, "y2")));
  }
  /**
   * Set manual culling
   * @private
   */
  , _proto.setCulling = function setCulling() {
    var $$ = this.owner,
        config = $$.config,
        $el = $$.$el;
    ["subX", "x", "y", "y2"].forEach(function (type) {
      var axis = $el.axis[type],
          id = type === "subX" ? "x" : type,
          toCull = config["axis_" + id + "_tick_culling"]; // subchart x axis should be aligned with x axis culling

      if (axis && toCull) {
        var intervalForCulling,
            tickText = axis.selectAll(".tick text"),
            tickValues = util_sortValue(tickText.data()),
            tickSize = tickValues.length,
            cullingMax = config["axis_" + id + "_tick_culling_max"];

        if (tickSize) {
          for (var _i = 1; _i < tickSize; _i++) if (tickSize / _i < cullingMax) {
            intervalForCulling = _i;
            break;
          }

          tickText.each(function (d) {
            this.style.display = tickValues.indexOf(d) % intervalForCulling ? "none" : "block";
          });
        } else tickText.style("display", "block");
      }
    });
  }, Axis;
}();


// EXTERNAL MODULE: external {"commonjs":"d3-dsv","commonjs2":"d3-dsv","amd":"d3-dsv","root":"d3"}
var external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_ = __webpack_require__(42);

// CONCATENATED MODULE: ./src/ChartInternal/data/data.convert.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Data convert
 * @memberof ChartInternal
 * @private
 */

/* harmony default export */ var data_convert = ({
  /**
   * Convert data according its type
   * @param {Object} args data object
   * @param {Function} [callback] callback for url(XHR) type loading
   * @return {Object}
   * @private
   */
  convertData: function convertData(args, callback) {
    var data;
    if (args.bindto ? (data = {}, ["url", "mimeType", "headers", "keys", "json", "keys", "rows", "columns"].forEach(function (v) {
      var key = "data_" + v;
      key in args && (data[v] = args[key]);
    })) : data = args, data.url && callback) this.convertUrlToData(data.url, data.mimeType, data.headers, data.keys, callback);else if (data.json) data = this.convertJsonToData(data.json, data.keys);else if (data.rows) data = this.convertRowsToData(data.rows);else if (data.columns) data = this.convertColumnsToData(data.columns);else if (args.bindto) throw Error("url or json or rows or columns is required.");
    return isArray(data) && data;
  },

  /**
   * Convert URL data
   * @param {String} url Remote URL
   * @param {String} mimeType MIME type string: json | csv | tsv
   * @param {Object} headers Header object
   * @param {Object} keys Key object
   * @param {Function} done Callback function
   * @private
   */
  convertUrlToData: function convertUrlToData(url, mimeType, headers, keys, done) {
    var _this = this;

    mimeType === void 0 && (mimeType = "csv");
    var req = new XMLHttpRequest();
    req.open("GET", url), headers && Object.keys(headers).forEach(function (key) {
      req.setRequestHeader(key, headers[key]);
    }), req.onreadystatechange = function () {
      if (req.readyState === 4) if (req.status === 200) {
        var response = req.responseText;
        response && done.call(_this, _this["convert" + capitalize(mimeType) + "ToData"](mimeType === "json" ? JSON.parse(response) : response, keys));
      } else throw new Error(url + ": Something went wrong loading!");
    }, req.send();
  },

  /**
   * Convert CSV/TSV data
   * @param {Object} parser Parser object
   * @param {Object} xsv Data
   * @private
   * @return {Object}
   */
  convertCsvTsvToData: function convertCsvTsvToData(parser, xsv) {
    var d,
        rows = parser.rows(xsv);
    return rows.length === 1 ? (d = [{}], rows[0].forEach(function (id) {
      d[0][id] = null;
    })) : d = parser.parse(xsv), d;
  },
  convertCsvToData: function convertCsvToData(xsv) {
    return this.convertCsvTsvToData({
      rows: external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_["csvParseRows"],
      parse: external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_["csvParse"]
    }, xsv);
  },
  convertTsvToData: function convertTsvToData(tsv) {
    return this.convertCsvTsvToData({
      rows: external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_["tsvParseRows"],
      parse: external_commonjs_d3_dsv_commonjs2_d3_dsv_amd_d3_dsv_root_d3_["tsvParse"]
    }, tsv);
  },
  convertJsonToData: function convertJsonToData(json, keysParam) {
    var targetKeys,
        data,
        _this2 = this,
        config = this.config,
        newRows = [];

    if (isArray(json)) {
      var keys = keysParam || config.data_keys;
      keys.x ? (targetKeys = keys.value.concat(keys.x), config.data_x = keys.x) : targetKeys = keys.value, newRows.push(targetKeys), json.forEach(function (o) {
        var newRow = targetKeys.map(function (key) {
          // convert undefined to null because undefined data will be removed in convertDataToTargets()
          var v = _this2.findValueInJson(o, key);

          return isUndefined(v) && (v = null), v;
        });
        newRows.push(newRow);
      }), data = this.convertRowsToData(newRows);
    } else Object.keys(json).forEach(function (key) {
      var tmp = json[key].concat();
      tmp.unshift(key), newRows.push(tmp);
    }), data = this.convertColumnsToData(newRows);

    return data;
  },
  findValueInJson: function findValueInJson(object, path) {
    if (object[path] !== undefined) return object[path];
    var convertedPath = path.replace(/\[(\w+)\]/g, ".$1"),
        pathArray = convertedPath.replace(/^\./, "").split("."),
        target = object; // convert indexes to properties (replace [] with .)

    return pathArray.some(function (k) {
      return !(target = target && k in target ? target[k] : undefined);
    }), target;
  },
  convertRowsToData: function convertRowsToData(rows) {
    var keys = rows[0],
        newRows = [];
    return rows.forEach(function (row, i) {
      if (i > 0) {
        var newRow = {};
        row.forEach(function (v, j) {
          if (isUndefined(v)) throw new Error("Source data is missing a component at (" + i + ", " + j + ")!");
          newRow[keys[j]] = v;
        }), newRows.push(newRow);
      }
    }), newRows;
  },
  convertColumnsToData: function convertColumnsToData(columns) {
    var newRows = [];
    return columns.forEach(function (col, i) {
      var key = col[0];
      col.forEach(function (v, j) {
        if (j > 0) {
          if (isUndefined(newRows[j - 1]) && (newRows[j - 1] = {}), isUndefined(v)) throw new Error("Source data is missing a component at (" + i + ", " + j + ")!");
          newRows[j - 1][key] = v;
        }
      });
    }), newRows;
  },
  convertDataToTargets: function convertDataToTargets(data, appendXs) {
    var xsData,
        _this3 = this,
        $$ = this,
        config = $$.config,
        state = $$.state,
        isTimeSeries = $$.isTimeSeries(),
        dataKeys = Object.keys(data[0] || {}),
        ids = dataKeys.length ? dataKeys.filter($$.isNotX, $$) : [],
        xs = dataKeys.length ? dataKeys.filter($$.isX, $$) : [];

    ids.forEach(function (id) {
      var xKey = _this3.getXKey(id);

      _this3.isCustomX() || isTimeSeries ? xs.indexOf(xKey) >= 0 ? xsData = (appendXs && $$.data.xs[id] || []).concat(data.map(function (d) {
        return d[xKey];
      }).filter(isValue).map(function (rawX, i) {
        return $$.generateTargetX(rawX, id, i);
      })) : config.data_x ? xsData = _this3.getOtherTargetXs() : notEmpty(config.data_xs) && (xsData = $$.getXValuesOfXKey(xKey, $$.data.targets)) : xsData = data.map(function (d, i) {
        return i;
      }), xsData && (_this3.data.xs[id] = xsData);
    }), ids.forEach(function (id) {
      if (!_this3.data.xs[id]) throw new Error("x is not defined for id = \"" + id + "\".");
    });
    // convert to target
    var targets = ids.map(function (id, index) {
      var convertedId = config.data_idConverter.bind($$.api)(id),
          xKey = $$.getXKey(id),
          isCategorized = $$.isCustomX() && $$.isCategorized(),
          hasCategory = isCategorized && data.map(function (v) {
        return v.x;
      }).every(function (v) {
        return config.axis_x_categories.indexOf(v) > -1;
      });
      return {
        id: convertedId,
        id_org: id,
        values: data.map(function (d, i) {
          var x,
              rawX = d[xKey],
              value = d[id];
          return value = value === null || isNaN(value) || isObject(value) ? isArray(value) || isObject(value) ? value : null : +value, isCategorized && index === 0 && !isUndefined(rawX) ? (!hasCategory && index === 0 && i === 0 && (config.axis_x_categories = []), x = config.axis_x_categories.indexOf(rawX), x === -1 && (x = config.axis_x_categories.length, config.axis_x_categories.push(rawX))) : x = $$.generateTargetX(rawX, id, i), (isUndefined(value) || $$.data.xs[id].length <= i) && (x = undefined), {
            x: x,
            value: value,
            id: convertedId
          };
        }).filter(function (v) {
          return isDefined(v.x);
        })
      };
    }); // finish targets

    return targets.forEach(function (t) {
      config.data_xSort && (t.values = t.values.sort(function (v1, v2) {
        var x1 = v1.x || v1.x === 0 ? v1.x : Infinity,
            x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
        return x1 - x2;
      })), t.values.forEach(function (v, i) {
        return v.index = i;
      }), $$.data.xs[t.id].sort(function (v1, v2) {
        return v1 - v2;
      });
    }), state.hasNegativeValue = $$.hasNegativeValueInTargets(targets), state.hasPositiveValue = $$.hasPositiveValueInTargets(targets), config.data_type && $$.setTargetType($$.mapToIds(targets).filter(function (id) {
      return !(id in config.data_types);
    }), config.data_type), targets.forEach(function (d) {
      return $$.cache.add(d.id_org, d, !0);
    }), targets;
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/data/data.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var ChartInternal_data_data = ({
  isX: function isX(key) {
    var $$ = this,
        config = $$.config,
        dataKey = config.data_x && key === config.data_x,
        existValue = notEmpty(config.data_xs) && util_hasValue(config.data_xs, key);
    return dataKey || existValue;
  },
  isNotX: function isNotX(key) {
    return !this.isX(key);
  },
  isStackNormalized: function isStackNormalized() {
    var config = this.config;
    return !!(config.data_stack_normalize && config.data_groups.length);
  },
  isGrouped: function isGrouped(id) {
    return this.config.data_groups.map(function (v) {
      return v.indexOf(id) >= 0;
    })[0];
  },
  getXKey: function getXKey(id) {
    var $$ = this,
        config = $$.config;
    return config.data_x ? config.data_x : notEmpty(config.data_xs) ? config.data_xs[id] : null;
  },
  getXValuesOfXKey: function getXValuesOfXKey(key, targets) {
    var xValues,
        $$ = this,
        ids = targets && notEmpty(targets) ? $$.mapToIds(targets) : [];
    return ids.forEach(function (id) {
      $$.getXKey(id) === key && (xValues = $$.data.xs[id]);
    }), xValues;
  },

  /**
   * Get index number based on given x Axis value
   * @param {Date|Number|String} x x Axis to be compared
   * @param {Array} basedX x Axis list to be based on
   * @return {Number} index number
   * @private
   */
  getIndexByX: function getIndexByX(x, basedX) {
    var $$ = this;
    return basedX ? basedX.indexOf(isString(x) ? x : +x) : ($$.filterByX($$.data.targets, x)[0] || {
      index: null
    }).index;
  },
  getXValue: function getXValue(id, i) {
    var $$ = this;
    return id in $$.data.xs && $$.data.xs[id] && isValue($$.data.xs[id][i]) ? $$.data.xs[id][i] : i;
  },
  getOtherTargetXs: function getOtherTargetXs() {
    var $$ = this,
        idsForX = Object.keys($$.data.xs);
    return idsForX.length ? $$.data.xs[idsForX[0]] : null;
  },
  getOtherTargetX: function getOtherTargetX(index) {
    var xs = this.getOtherTargetXs();
    return xs && index < xs.length ? xs[index] : null;
  },
  addXs: function addXs(xs) {
    var $$ = this,
        config = $$.config;
    Object.keys(xs).forEach(function (id) {
      config.data_xs[id] = xs[id];
    });
  },
  isMultipleX: function isMultipleX() {
    return notEmpty(this.config.data_xs) || !this.config.data_xSort || this.hasType("bubble") || this.hasType("scatter");
  },
  addName: function addName(data) {
    var name,
        $$ = this,
        config = $$.config;
    return data && (name = config.data_names[data.id], data.name = name === undefined ? data.id : name), data;
  },
  getAllValuesOnIndex: function getAllValuesOnIndex(index) {
    var $$ = this;
    return $$.filterTargetsToShow($$.data.targets).map(function (t) {
      return $$.addName($$.getValueOnIndex(t.values, index));
    });
  },
  getValueOnIndex: function getValueOnIndex(values, index) {
    var valueOnIndex = values.filter(function (v) {
      return v.index === index;
    });
    return valueOnIndex.length ? valueOnIndex[0] : null;
  },
  updateTargetX: function updateTargetX(targets, x) {
    var $$ = this;
    targets.forEach(function (t) {
      t.values.forEach(function (v, i) {
        v.x = $$.generateTargetX(x[i], t.id, i);
      }), $$.data.xs[t.id] = x;
    });
  },
  updateTargetXs: function updateTargetXs(targets, xs) {
    var $$ = this;
    targets.forEach(function (t) {
      xs[t.id] && $$.updateTargetX([t], xs[t.id]);
    });
  },
  generateTargetX: function generateTargetX(rawX, id, index) {
    var $$ = this,
        x = $$.isCategorized() ? index : rawX || index;

    if ($$.isTimeSeries()) {
      var fn = parseDate.bind($$);
      x = rawX ? fn(rawX) : fn($$.getXValue(id, index));
    } else $$.isCustomX() && !$$.isCategorized() && (x = isValue(rawX) ? +rawX : $$.getXValue(id, index));

    return x;
  },
  updateXs: function updateXs(values) {
    values.length && (this.axis.xs = values.map(function (v) {
      return v.x;
    }));
  },
  getPrevX: function getPrevX(i) {
    var x = this.axis.xs[i - 1];
    return isDefined(x) ? x : null;
  },
  getNextX: function getNextX(i) {
    var x = this.axis.xs[i + 1];
    return isDefined(x) ? x : null;
  },

  /**
   * Get base value isAreaRangeType
   * @param data Data object
   * @return {Number}
   * @private
   */
  getBaseValue: function getBaseValue(data) {
    var $$ = this,
        hasAxis = $$.state.hasAxis,
        value = data.value;
    return value && hasAxis && ($$.isAreaRangeType(data) ? value = $$.getAreaRangeData(data, "mid") : $$.isBubbleZType(data) && (value = $$.getBubbleZData(value, "y"))), value;
  },

  /**
   * Get min/max value from the data
   * @private
   * @param {Array} data array data to be evaluated
   * @return {{min: {Number}, max: {Number}}}
   */
  getMinMaxValue: function getMinMaxValue(data) {
    var min,
        max,
        getBaseValue = this.getBaseValue.bind(this);
    return (data || this.data.targets.map(function (t) {
      return t.values;
    })).forEach(function (v, i) {
      var value = v.map(getBaseValue).filter(isNumber);
      min = Math.min.apply(Math, [i ? min : Infinity].concat(value)), max = Math.max.apply(Math, [i ? max : -Infinity].concat(value));
    }), {
      min: min,
      max: max
    };
  },

  /**
   * Get the min/max data
   * @private
   * @return {{min: Array, max: Array}}
   */
  getMinMaxData: function getMinMaxData() {
    var $$ = this,
        cacheKey = "$minMaxData",
        minMaxData = $$.cache.get(cacheKey);

    if (!minMaxData) {
      var data = $$.data.targets.map(function (t) {
        return t.values;
      }),
          minMax = $$.getMinMaxValue(data),
          min = [],
          max = [];
      // update the cached data
      data.forEach(function (v) {
        var minData = $$.getFilteredDataByValue(v, minMax.min),
            maxData = $$.getFilteredDataByValue(v, minMax.max);
        minData.length && (min = min.concat(minData)), maxData.length && (max = max.concat(maxData));
      }), $$.cache.add(cacheKey, minMaxData = {
        min: min,
        max: max
      });
    }

    return minMaxData;
  },

  /**
   * Get sum of data per index
   * @private
   * @return {Array}
   */
  getTotalPerIndex: function getTotalPerIndex() {
    var $$ = this,
        sum = $$.cache.get("$totalPerIndex");
    return $$.isStackNormalized() && !sum && (sum = [], $$.data.targets.forEach(function (row) {
      row.values.forEach(function (v, i) {
        sum[i] || (sum[i] = 0), sum[i] += isNumber(v.value) ? v.value : 0;
      });
    })), sum;
  },

  /**
   * Get total data sum
   * @return {Number}
  	 * @private
   */
  getTotalDataSum: function getTotalDataSum() {
    var $$ = this,
        cacheKey = "$totalDataSum",
        totalDataSum = $$.cache.get(cacheKey);

    if (!totalDataSum) {
      var total = mergeArray($$.data.targets.map(function (t) {
        return t.values;
      })).map(function (v) {
        return v.value;
      }).reduce(function (p, c) {
        return p + c;
      });
      $$.cache.add(cacheKey, totalDataSum = total);
    }

    return totalDataSum;
  },

  /**
   * Get filtered data by value
   * @param {Object} data
   * @param {Number} value
   * @return {Array} filtered array data
   * @private
   */
  getFilteredDataByValue: function getFilteredDataByValue(data, value) {
    var _this = this;

    return data.filter(function (t) {
      return _this.getBaseValue(t) === value;
    });
  },

  /**
   * Return the max length of the data
   * @return {Number} max data length
   * @private
   */
  getMaxDataCount: function getMaxDataCount() {
    return Math.max.apply(Math, this.data.targets.map(function (t) {
      return t.values.length;
    }));
  },
  getMaxDataCountTarget: function getMaxDataCountTarget() {
    var target = this.filterTargetsToShow() || [],
        length = target.length;
    return length > 1 ? (target = target.map(function (t) {
      return t.values;
    }).reduce(function (a, b) {
      return a.concat(b);
    }).map(function (v) {
      return v.x;
    }), target = util_sortValue(getUnique(target)).map(function (x, index) {
      return {
        x: x,
        index: index
      };
    })) : length && (target = target[0].values), target;
  },
  mapToIds: function mapToIds(targets) {
    return targets.map(function (d) {
      return d.id;
    });
  },
  mapToTargetIds: function mapToTargetIds(ids) {
    var $$ = this;
    return ids ? isArray(ids) ? ids.concat() : [ids] : $$.mapToIds($$.data.targets);
  },
  hasTarget: function hasTarget(targets, id) {
    var ids = this.mapToIds(targets);

    for (var val, i = 0; val = ids[i]; i++) if (val === id) return !0;

    return !1;
  },
  isTargetToShow: function isTargetToShow(targetId) {
    return this.state.hiddenTargetIds.indexOf(targetId) < 0;
  },
  isLegendToShow: function isLegendToShow(targetId) {
    return this.state.hiddenLegendIds.indexOf(targetId) < 0;
  },
  filterTargetsToShow: function filterTargetsToShow(targets) {
    var $$ = this;
    return (targets || $$.data.targets).filter(function (t) {
      return $$.isTargetToShow(t.id);
    });
  },
  mapTargetsToUniqueXs: function mapTargetsToUniqueXs(targets) {
    var $$ = this,
        xs = [];
    return targets && targets.length && (xs = getUnique(mergeArray(targets.map(function (t) {
      return t.values.map(function (v) {
        return +v.x;
      });
    }))), xs = $$.isTimeSeries() ? xs.map(function (x) {
      return new Date(+x);
    }) : xs.map(function (x) {
      return +x;
    })), util_sortValue(xs);
  },
  addHiddenTargetIds: function addHiddenTargetIds(targetIds) {
    this.state.hiddenTargetIds = this.state.hiddenTargetIds.concat(targetIds);
  },
  removeHiddenTargetIds: function removeHiddenTargetIds(targetIds) {
    this.state.hiddenTargetIds = this.state.hiddenTargetIds.filter(function (id) {
      return targetIds.indexOf(id) < 0;
    });
  },
  addHiddenLegendIds: function addHiddenLegendIds(targetIds) {
    this.state.hiddenLegendIds = this.state.hiddenLegendIds.concat(targetIds);
  },
  removeHiddenLegendIds: function removeHiddenLegendIds(targetIds) {
    this.state.hiddenLegendIds = this.state.hiddenLegendIds.filter(function (id) {
      return targetIds.indexOf(id) < 0;
    });
  },
  getValuesAsIdKeyed: function getValuesAsIdKeyed(targets) {
    var $$ = this,
        hasAxis = $$.state.hasAxis,
        ys = {},
        isMultipleX = $$.isMultipleX(),
        xs = isMultipleX ? $$.mapTargetsToUniqueXs(targets).map(function (v) {
      return isString(v) ? v : +v;
    }) : null;
    return targets.forEach(function (t) {
      var data = [];
      t.values.forEach(function (v) {
        var value = v.value;
        isArray(value) ? data.push.apply(data, value) : isObject(value) && "high" in value ? data.push.apply(data, Object.values(value)) : $$.isBubbleZType(v) ? data.push(hasAxis && $$.getBubbleZData(value, "y")) : isMultipleX ? data[$$.getIndexByX(v.x, xs)] = value : data.push(value);
      }), ys[t.id] = data;
    }), ys;
  },
  checkValueInTargets: function checkValueInTargets(targets, checker) {
    var values,
        ids = Object.keys(targets);

    for (var i = 0; i < ids.length; i++) {
      values = targets[ids[i]].values;

      for (var j = 0; j < values.length; j++) if (checker(values[j].value)) return !0;
    }

    return !1;
  },
  hasMultiTargets: function hasMultiTargets() {
    return this.filterTargetsToShow().length > 1;
  },
  hasNegativeValueInTargets: function hasNegativeValueInTargets(targets) {
    return this.checkValueInTargets(targets, function (v) {
      return v < 0;
    });
  },
  hasPositiveValueInTargets: function hasPositiveValueInTargets(targets) {
    return this.checkValueInTargets(targets, function (v) {
      return v > 0;
    });
  },
  _checkOrder: function _checkOrder(type) {
    var config = this.config,
        order = config.data_order;
    return isString(order) && order.toLowerCase() === type;
  },
  isOrderDesc: function isOrderDesc() {
    return this._checkOrder("desc");
  },
  isOrderAsc: function isOrderAsc() {
    return this._checkOrder("asc");
  },

  /**
   * Sort targets data
   * @param {Array} targetsValue
   * @return {Array}
   * @private
   */
  orderTargets: function orderTargets(targetsValue) {
    var $$ = this,
        config = $$.config,
        targets = [].concat(targetsValue),
        orderAsc = $$.isOrderAsc(),
        orderDesc = $$.isOrderDesc();
    // TODO: accept name array for order
    return orderAsc || orderDesc ? targets.sort(function (t1, t2) {
      var reducer = function (p, c) {
        return p + Math.abs(c.value);
      },
          t1Sum = t1.values.reduce(reducer, 0),
          t2Sum = t2.values.reduce(reducer, 0);

      return orderAsc ? t2Sum - t1Sum : t1Sum - t2Sum;
    }) : isFunction(config.data_order) && targets.sort(config.data_order.bind($$.api)), targets;
  },
  filterByX: function filterByX(targets, x) {
    return mergeArray(targets.map(function (t) {
      return t.values;
    })).filter(function (v) {
      return v.x - x === 0;
    });
  },
  filterRemoveNull: function filterRemoveNull(data) {
    var _this2 = this;

    return data.filter(function (d) {
      return isValue(_this2.getBaseValue(d));
    });
  },
  filterByXDomain: function filterByXDomain(targets, xDomain) {
    return targets.map(function (t) {
      return {
        id: t.id,
        id_org: t.id_org,
        values: t.values.filter(function (v) {
          return xDomain[0] <= v.x && v.x <= xDomain[1];
        })
      };
    });
  },
  hasDataLabel: function hasDataLabel() {
    var dataLabels = this.config.data_labels;
    return isBoolean(dataLabels) && dataLabels || isObjectType(dataLabels) && notEmpty(dataLabels);
  },
  getDataLabelLength: function getDataLabelLength(min, max, key) {
    var $$ = this,
        lengths = [0, 0];
    return $$.$el.chart.select("svg").selectAll(".dummy").data([min, max]).enter().append("text").text(function (d) {
      return $$.dataLabelFormat(d.id)(d);
    }).each(function (d, i) {
      lengths[i] = this.getBoundingClientRect()[key] * 1.3;
    }).remove(), lengths;
  },
  isNoneArc: function isNoneArc(d) {
    return this.hasTarget(this.data.targets, d.id);
  },
  isArc: function isArc(d) {
    return "data" in d && this.hasTarget(this.data.targets, d.data.id);
  },
  findSameXOfValues: function findSameXOfValues(values, index) {
    var i,
        targetX = values[index].x,
        sames = [];

    for (i = index - 1; i >= 0 && !(targetX !== values[i].x); i--) sames.push(values[i]);

    for (i = index; i < values.length && !(targetX !== values[i].x); i++) sames.push(values[i]);

    return sames;
  },
  findClosestFromTargets: function findClosestFromTargets(targets, pos) {
    var $$ = this,
        candidates = targets.map(function (target) {
      return $$.findClosest(target.values, pos);
    });
    // map to array of closest points of each target
    // decide closest point and return
    return $$.findClosest(candidates, pos);
  },
  findClosest: function findClosest(values, pos) {
    var closest,
        $$ = this,
        config = $$.config,
        main = $$.$el.main,
        data = values.filter(function (v) {
      return v && isValue(v.value);
    }),
        minDist = config.point_sensitivity;
    return data.filter(function (v) {
      return $$.isBarType(v.id);
    }).forEach(function (v) {
      var shape = main.select("." + config_classes.bars + $$.getTargetSelectorSuffix(v.id) + " ." + config_classes.bar + "-" + v.index).node();
      !closest && $$.isWithinBar(shape) && (closest = v);
    }), data.filter(function (v) {
      return !$$.isBarType(v.id);
    }).forEach(function (v) {
      var d = $$.dist(v, pos);
      d < minDist && (minDist = d, closest = v);
    }), closest;
  },
  dist: function dist(data, pos) {
    var $$ = this,
        isRotated = $$.config.axis_rotated,
        scale = $$.scale,
        xIndex = isRotated ? 1 : 0,
        yIndex = isRotated ? 0 : 1,
        y = $$.circleY(data, data.index),
        x = (scale.zoom || scale.x)(data.x);
    return Math.sqrt(Math.pow(x - pos[xIndex], 2) + Math.pow(y - pos[yIndex], 2));
  },

  /**
   * Convert data for step type
   * @param {Array} values Object data values
   * @return {Array}
   * @private
   */
  convertValuesToStep: function convertValuesToStep(values) {
    var $$ = this,
        config = $$.config,
        isRotated = config.axis_rotated,
        stepType = config.line_step_type,
        isCategorized = $$.isCategorized(),
        converted = isArray(values) ? values.concat() : [values];
    if (!isRotated && !isCategorized) return values; // insert & append cloning first/last value to be fully rendered covering on each gap sides

    var id = converted[0].id,
        x = converted[0].x - 1,
        value = converted[0].value; // insert

    return isCategorized && converted.unshift({
      x: x,
      value: value,
      id: id
    }), stepType === "step-after" && converted.unshift({
      x: x - 1,
      value: value,
      id: id
    }), x = converted.length, value = converted[x - 1].value, isCategorized && converted.push({
      x: x,
      value: value,
      id: id
    }), stepType === "step-before" && converted.push({
      x: x + 1,
      value: value,
      id: id
    }), converted;
  },
  convertValuesToRange: function convertValuesToRange(values) {
    var converted = isArray(values) ? values.concat() : [values],
        ranges = [];
    return converted.forEach(function (range) {
      var x = range.x,
          id = range.id;
      ranges.push({
        x: x,
        id: id,
        value: range.value[0]
      }), ranges.push({
        x: x,
        id: id,
        value: range.value[2]
      });
    }), ranges;
  },
  updateDataAttributes: function updateDataAttributes(name, attrs) {
    var $$ = this,
        config = $$.config,
        current = config["data_" + name];
    return isUndefined(attrs) ? current : (Object.keys(attrs).forEach(function (id) {
      current[id] = attrs[id];
    }), $$.redraw({
      withLegend: !0
    }), current);
  },
  getAreaRangeData: function getAreaRangeData(d, type) {
    var value = d.value;

    if (isArray(value)) {
      var index = ["high", "mid", "low"].indexOf(type);
      return index === -1 ? null : value[index];
    }

    return value[type];
  },

  /**
   * Get ratio value
   * @param {String} type Ratio for given type
   * @param {Object} d Data value object
   * @param {Boolean} asPercent Convert the return as percent or not
   * @return {Number} Ratio value
   * @private
   */
  getRatio: function getRatio(type, d, asPercent) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        api = $$.api,
        ratio = 0;

    if (d && api.data.shown().length) {
      var dataValues = api.data.values.bind(api);
      if (ratio = d.ratio || d.value, type === "arc") {
          // if has padAngle set, calculate rate based on value
          if ($$.pie.padAngle()()) {
            var total = $$.getTotalDataSum();
            state.hiddenTargetIds.length && (total -= dataValues(state.hiddenTargetIds).reduce(function (p, c) {
              return p + c;
            })), ratio = d.value / total;
          } else ratio = (d.endAngle - d.startAngle) / (Math.PI * ($$.hasType("gauge") && !config.gauge_fullCircle ? 1 : 2));
      } else if (type === "index") {
        var _total = this.getTotalPerIndex();

        if (state.hiddenTargetIds.length) {
          var hiddenSum = dataValues(state.hiddenTargetIds, !1);
          hiddenSum.length && (hiddenSum = hiddenSum.reduce(function (acc, curr) {
            return acc.map(function (v, i) {
              return (isNumber(v) ? v : 0) + curr[i];
            });
          }), _total = _total.map(function (v, i) {
            return v - hiddenSum[i];
          }));
        }

        d.ratio = isNumber(d.value) && _total && _total[d.index] > 0 ? d.value / _total[d.index] : 0, ratio = d.ratio;
      } else type === "radar" && (ratio = parseFloat(Math.max(d.value, 0) + "") / state.currentData.max * config.radar_size_ratio);
    }

    return asPercent && ratio ? ratio * 100 : ratio;
  },

  /**
   * Sort data index to be aligned with x axis.
   * @param {Array} tickValues Tick array values
   * @private
   */
  updateDataIndexByX: function updateDataIndexByX(tickValues) {
    var $$ = this,
        tickValueMap = tickValues.reduce(function (out, tick, index) {
      return out[+tick.x] = index, out;
    }, {});
    $$.data.targets.forEach(function (t) {
      t.values.forEach(function (value, valueIndex) {
        var index = tickValueMap[+value.x];
        index === undefined && (index = valueIndex), value.index = index;
      });
    });
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/data/data.load.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var data_load = ({
  load: function load(rawTargets, args) {
    var $$ = this,
        targets = rawTargets;
    // Set targets
    // Redraw with new targets
    targets && (args.filter && (targets = targets.filter(args.filter)), (args.type || args.types) && targets.forEach(function (t) {
      var type = args.types && args.types[t.id] || args.type;
      $$.setTargetType(t.id, type);
    }), $$.data.targets.forEach(function (d) {
      for (var i = 0; i < targets.length; i++) if (d.id === targets[i].id) {
        d.values = targets[i].values, targets.splice(i, 1);
        break;
      }
    }), $$.data.targets = $$.data.targets.concat(targets)), $$.updateTargets($$.data.targets), $$.redraw({
      withUpdateOrgXDomain: !0,
      withUpdateXDomain: !0,
      withLegend: !0
    }), args.done && args.done.call($$.api);
  },
  loadFromArgs: function loadFromArgs(args) {
    var $$ = this; // prevent load when chart is already destroyed

    if ($$.config) {
      $$.cache.reset();
      var data = args.data || $$.convertData(args, function (d) {
        return $$.load($$.convertDataToTargets(d), args);
      });
      data && $$.load($$.convertDataToTargets(data), args);
    } // reset internally cached data

  },
  unload: function unload(rawTargetIds, customDoneCb) {
    var $$ = this,
        state = $$.state,
        $el = $$.$el,
        done = customDoneCb,
        targetIds = rawTargetIds;
    // If no target, call done and return
    return $$.cache.reset(), done || (done = function () {}), targetIds = targetIds.filter(function (id) {
      return $$.hasTarget($$.data.targets, id);
    }), targetIds && targetIds.length !== 0 ? void ($el.svg.selectAll(targetIds.map(function (id) {
      return $$.selectorTarget(id);
    })).transition().style("opacity", "0").remove().call($$.endall, done), targetIds.forEach(function (id) {
      state.withoutFadeIn[id] = !1, $el.legend && $el.legend.selectAll("." + config_classes.legendItem + $$.getTargetSelectorSuffix(id)).remove(), $$.data.targets = $$.data.targets.filter(function (t) {
        return t.id !== id;
      });
    })) : void done();
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-drag","commonjs2":"d3-drag","amd":"d3-drag","root":"d3"}
var external_commonjs_d3_drag_commonjs2_d3_drag_amd_d3_drag_root_d3_ = __webpack_require__(43);

// CONCATENATED MODULE: ./src/ChartInternal/interactions/interaction.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var interactions_interaction = ({
  /**
   * Handle data.onover/out callback options
   * @param {Boolean} isOver
   * @param {Number|Object} d
   * @private
   */
  setOverOut: function setOverOut(isOver, d) {
    var $$ = this,
        config = $$.config,
        main = $$.$el.main,
        isArc = isObject(d);

    // Call event handler
    if (isArc || d !== -1) {
      var callback = config[isOver ? "data_onover" : "data_onout"].bind($$.api);
      if (config.color_onover && $$.setOverColor(isOver, d, isArc), isArc) callback(d, main.select("." + config_classes.arc + $$.getTargetSelectorSuffix(d.id)).node());else if (!config.tooltip_grouped) {
        var callee = $$.setOverOut,
            last = callee.last || [],
            shape = main.selectAll("." + config_classes.shape + "-" + d).filter(function (d) {
          return $$.isWithinShape(this, d);
        });
        shape.each(function (d) {
          var _this = this;

          (last.length === 0 || last.every(function (v) {
            return v !== _this;
          })) && (callback(d, this), last.push(this));
        }), last.length > 0 && shape.empty() && (callback = config.data_onout.bind($$.api), last.forEach(function (v) {
          return callback(Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(v).datum(), v);
        }), last = []), callee.last = last;
      } else isOver && $$.expandCirclesBars(d, null, !0), $$.isMultipleX() || main.selectAll("." + config_classes.shape + "-" + d).each(function (d) {
        callback(d, this);
      });
    }
  },

  /**
   * Call data.onover/out callback for touch event
   * @param {Number|Object} d target index or data object for Arc type
   * @private
   */
  callOverOutForTouch: function callOverOutForTouch(d) {
    var $$ = this,
        callee = $$.callOverOutForTouch,
        last = callee.last;
    (isObject(d) && last ? d.id !== last.id : d !== last) && ((last || isNumber(last)) && $$.setOverOut(!1, last), (d || isNumber(d)) && $$.setOverOut(!0, d), callee.last = d);
  },

  /**
   * Return draggable selection function
   * @return {Function}
   * @private
   */
  getDraggableSelection: function getDraggableSelection() {
    var $$ = this,
        config = $$.config;
    return config.interaction_enabled && config.data_selection_draggable && $$.drag ? Object(external_commonjs_d3_drag_commonjs2_d3_drag_amd_d3_drag_root_d3_["drag"])().on("drag", function () {
      // @ts-ignore
      $$.drag(Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(this));
    }).on("start", function () {
      // @ts-ignore
      $$.dragstart(Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(this));
    }).on("end", function () {
      $$.dragend();
    }) : function () {};
  },

  /**
   * Dispatch a mouse event.
   * @private
   * @param {String} type event type
   * @param {Number} index Index of eventRect
   * @param {Array} mouse x and y coordinate value
   */
  dispatchEvent: function dispatchEvent(type, index, mouse) {
    var $$ = this,
        isMultipleX = $$.isMultipleX(),
        selector = "." + (isMultipleX ? config_classes.eventRect : config_classes.eventRect + "-" + index),
        eventRect = $$.$el.main.select(selector).node(),
        _eventRect$getBoundin = eventRect.getBoundingClientRect(),
        width = _eventRect$getBoundin.width,
        left = _eventRect$getBoundin.left,
        top = _eventRect$getBoundin.top,
        x = left + (mouse ? mouse[0] : 0) + (isMultipleX || $$.config.axis_rotated ? 0 : width / 2),
        y = top + (mouse ? mouse[1] : 0);

    emulateEvent[/^(mouse|click)/.test(type) ? "mouse" : "touch"](eventRect, type, {
      screenX: x,
      screenY: y,
      clientX: x,
      clientY: y
    });
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/class.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var internals_class = ({
  generateClass: function generateClass(prefix, targetId) {
    return " " + prefix + " " + (prefix + this.getTargetSelectorSuffix(targetId));
  },
  classText: function classText(d) {
    return this.generateClass(config_classes.text, d.index);
  },
  classTexts: function classTexts(d) {
    return this.generateClass(config_classes.texts, d.id);
  },
  classShape: function classShape(d) {
    return this.generateClass(config_classes.shape, d.index);
  },
  classShapes: function classShapes(d) {
    return this.generateClass(config_classes.shapes, d.id);
  },
  generateExtraLineClass: function generateExtraLineClass() {
    var $$ = this,
        classes = $$.config.line_classes || [],
        ids = [];
    return function (d) {
      var id = d.id || d.data && d.data.id || d;
      return ids.indexOf(id) < 0 && ids.push(id), classes[ids.indexOf(id) % classes.length];
    };
  },
  classLine: function classLine(d) {
    return this.classShape(d) + this.generateClass(config_classes.line, d.id);
  },
  classLines: function classLines(d) {
    return this.classShapes(d) + this.generateClass(config_classes.lines, d.id);
  },
  classCircle: function classCircle(d) {
    return this.classShape(d) + this.generateClass(config_classes.circle, d.index);
  },
  classCircles: function classCircles(d) {
    return this.classShapes(d) + this.generateClass(config_classes.circles, d.id);
  },
  classBar: function classBar(d) {
    return this.classShape(d) + this.generateClass(config_classes.bar, d.index);
  },
  classBars: function classBars(d) {
    return this.classShapes(d) + this.generateClass(config_classes.bars, d.id);
  },
  classArc: function classArc(d) {
    return this.classShape(d.data) + this.generateClass(config_classes.arc, d.data.id);
  },
  classArcs: function classArcs(d) {
    return this.classShapes(d.data) + this.generateClass(config_classes.arcs, d.data.id);
  },
  classArea: function classArea(d) {
    return this.classShape(d) + this.generateClass(config_classes.area, d.id);
  },
  classAreas: function classAreas(d) {
    return this.classShapes(d) + this.generateClass(config_classes.areas, d.id);
  },
  classRegion: function classRegion(d, i) {
    return this.generateClass(config_classes.region, i) + " " + ("class" in d ? d.class : "");
  },
  classEvent: function classEvent(d) {
    return this.generateClass(config_classes.eventRect, d.index);
  },
  classTarget: function classTarget(id) {
    var additionalClassSuffix = this.config.data_classes[id],
        additionalClass = "";
    return additionalClassSuffix && (additionalClass = " " + config_classes.target + "-" + additionalClassSuffix), this.generateClass(config_classes.target, id) + additionalClass;
  },
  classFocus: function classFocus(d) {
    return this.classFocused(d) + this.classDefocused(d);
  },
  classFocused: function classFocused(d) {
    return " " + (this.state.focusedTargetIds.indexOf(d.id) >= 0 ? config_classes.focused : "");
  },
  classDefocused: function classDefocused(d) {
    return " " + (this.state.defocusedTargetIds.indexOf(d.id) >= 0 ? config_classes.defocused : "");
  },
  classChartText: function classChartText(d) {
    return config_classes.chartText + this.classTarget(d.id);
  },
  classChartLine: function classChartLine(d) {
    return config_classes.chartLine + this.classTarget(d.id);
  },
  classChartBar: function classChartBar(d) {
    return config_classes.chartBar + this.classTarget(d.id);
  },
  classChartArc: function classChartArc(d) {
    return config_classes.chartArc + this.classTarget(d.data.id);
  },
  classChartRadar: function classChartRadar(d) {
    return config_classes.chartRadar + this.classTarget(d.id);
  },
  getTargetSelectorSuffix: function getTargetSelectorSuffix(targetId) {
    return targetId || targetId === 0 ? ("-" + targetId).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, "-") : "";
  },
  selectorTarget: function selectorTarget(id, prefix) {
    var pfx = prefix || "",
        target = this.getTargetSelectorSuffix(id);
    // select target & circle
    return pfx + "." + (config_classes.target + target) + ", " + pfx + "." + (config_classes.circles + target);
  },
  selectorTargets: function selectorTargets(idsValue, prefix) {
    var $$ = this,
        ids = idsValue || [];
    return ids.length ? ids.map(function (id) {
      return $$.selectorTarget(id, prefix);
    }) : null;
  },
  selectorLegend: function selectorLegend(id) {
    return "." + (config_classes.legendItem + this.getTargetSelectorSuffix(id));
  },
  selectorLegends: function selectorLegends(ids) {
    var $$ = this;
    return ids && ids.length ? ids.map(function (id) {
      return $$.selectorLegend(id);
    }) : null;
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/color.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */





/**
 * Set pattern's background color
 * (it adds a <rect> element to simulate bg-color)
 * @param {SVGPatternElement} pattern SVG pattern element
 * @param {String} color Color string
 * @param {String} id ID to be set
 * @return {{id: string, node: SVGPatternElement}}
 * @private
 */

var colorizePattern = function (pattern, color, id) {
  var node = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(pattern.cloneNode(!0));
  return node.attr("id", id).insert("rect", ":first-child").attr("width", node.attr("width")).attr("height", node.attr("height")).style("fill", color), {
    id: id,
    node: node.node()
  };
},
    schemeCategory10 = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]; // Replacement of d3.schemeCategory10.
// Contained differently depend on d3 version: v4(d3-scale), v5(d3-scale-chromatic)


/* harmony default export */ var internals_color = ({
  /**
   * Get color pattern from CSS file
   * CSS should be defined as: background-image: url("#00c73c;#fa7171; ...");
   * @return {Array}
   * @private
   */
  getColorFromCss: function getColorFromCss() {
    var body = browser_doc.body,
        pattern = body["__colorPattern__"];

    if (!pattern) {
      var span = browser_doc.createElement("span");
      span.className = config_classes.colorPattern, span.style.display = "none", body.appendChild(span);
      var content = win.getComputedStyle(span).backgroundImage;
      span.parentNode.removeChild(span), content.indexOf(";") > -1 && (pattern = content.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(";").map(function (v) {
        return v.trim().replace(/[\"'\s]/g, "");
      }).filter(Boolean), body["__colorPattern__"] = pattern);
    }

    return pattern;
  },
  generateColor: function generateColor() {
    var $$ = this,
        config = $$.config,
        colors = config.data_colors,
        callback = config.data_color,
        ids = [],
        pattern = notEmpty(config.color_pattern) ? config.color_pattern : Object(external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_["scaleOrdinal"])($$.getColorFromCss() || schemeCategory10).range(),
        originalColorPattern = pattern;

    if (isFunction(config.color_tiles)) {
      var tiles = config.color_tiles.bind($$.api)(),
          colorizedPatterns = pattern.map(function (p, index) {
        var color = p.replace(/[#\(\)\s,]/g, ""),
            id = $$.state.datetimeId + "-pattern-" + color + "-" + index;
        return colorizePattern(tiles[index % tiles.length], p, id);
      }); // Add background color to patterns

      pattern = colorizedPatterns.map(function (p) {
        return "url(#" + p.id + ")";
      }), $$.patterns = colorizedPatterns;
    }

    return function (d) {
      var color,
          id = d.id || d.data && d.data.id || d,
          isLine = $$.isTypeOf(id, ["line", "spline", "step"]) || !config.data_types[id];
      return isFunction(colors[id]) ? color = colors[id].bind($$.api)(d) : colors[id] ? color = colors[id] : (ids.indexOf(id) < 0 && ids.push(id), color = isLine ? originalColorPattern[ids.indexOf(id) % originalColorPattern.length] : pattern[ids.indexOf(id) % pattern.length], colors[id] = color), isFunction(callback) ? callback.bind($$.api)(color, d) : color;
    };
  },
  generateLevelColor: function generateLevelColor() {
    var $$ = this,
        config = $$.config,
        colors = config.color_pattern,
        threshold = config.color_threshold,
        asValue = threshold.unit === "value",
        max = threshold.max || 100,
        values = threshold.values && threshold.values.length ? threshold.values : [];
    return notEmpty(threshold) ? function (value) {
      var v = asValue ? value : value * 100 / max,
          color = colors[colors.length - 1];

      for (var i = 0, l = values.length; i < l; i++) if (v <= values[i]) {
        color = colors[i];
        break;
      }

      return color;
    } : null;
  },

  /**
   * Set the data over color.
   * When is out, will restate in its previous color value
   * @param {Boolean} isOver true: set overed color, false: restore
   * @param {Number|Object} d target index or data object for Arc type
   * @private
   */
  setOverColor: function setOverColor(isOver, d) {
    var $$ = this,
        config = $$.config,
        main = $$.$el.main,
        onover = config.color_onover,
        color = isOver ? onover : $$.color;
    isObject(color) ? color = function (_ref) {
      var id = _ref.id;
      return id in onover ? onover[id] : $$.color(id);
    } : isString(color) ? color = function () {
      return onover;
    } : isFunction(onover) && (color = color.bind($$.api)), isObject(d) ? main.selectAll("." + config_classes.arc + $$.getTargetSelectorSuffix(d.id)).style("fill", color(d)) : main.selectAll("." + config_classes.shape + "-" + d).style("fill", color);
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/domain.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var internals_domain = ({
  getYDomainMinMax: function getYDomainMinMax(targets, type) {
    var $$ = this,
        config = $$.config,
        isMin = type === "min",
        dataGroups = config.data_groups,
        ids = $$.mapToIds(targets),
        ys = $$.getValuesAsIdKeyed(targets);
    return dataGroups.length > 0 && function () {
      for (var idsInGroup, _ret, hasValue = $$["has" + (isMin ? "Negative" : "Positive") + "ValueInTargets"](targets), _loop = function (j, _idsInGroup) {
        if (_idsInGroup = _idsInGroup.filter(function (v) {
          return ids.indexOf(v) >= 0;
        }), _idsInGroup.length === 0) return idsInGroup = _idsInGroup, "continue";
        var baseId = _idsInGroup[0],
            baseAxisId = $$.axis.getId(baseId);
        hasValue && ys[baseId] && (ys[baseId] = ys[baseId].map(function (v) {
          return (isMin ? v < 0 : v > 0) ? v : 0;
        }));

        for (var id, _ret2, _loop2 = function (k, id) {
          if (!ys[id]) return "continue";
          var axisId = $$.axis.getId(id);
          ys[id].forEach(function (v, i) {
            var val = +v,
                meetCondition = isMin ? val > 0 : val < 0;
            axisId !== baseAxisId || hasValue && meetCondition || (ys[baseId][i] += val);
          });
        }, k = 1; id = _idsInGroup[k]; k++) _ret2 = _loop2(k, id), _ret2 === "continue";

        idsInGroup = _idsInGroup;
      }, j = 0; idsInGroup = dataGroups[j]; j++) _ret = _loop(j, idsInGroup), _ret === "continue";
    }(), getMinMax(type, Object.keys(ys).map(function (key) {
      return getMinMax(type, ys[key]);
    }));
  },
  getYDomainMin: function getYDomainMin(targets) {
    return this.getYDomainMinMax(targets, "min");
  },
  getYDomainMax: function getYDomainMax(targets) {
    return this.getYDomainMinMax(targets, "max");
  },
  getYDomain: function getYDomain(targets, axisId, xDomain) {
    var $$ = this,
        config = $$.config,
        scale = $$.scale;
    if ($$.isStackNormalized()) return [0, 100];
    var targetsByAxisId = targets.filter(function (t) {
      return $$.axis.getId(t.id) === axisId;
    }),
        yTargets = xDomain ? $$.filterByXDomain(targetsByAxisId, xDomain) : targetsByAxisId;
    if (yTargets.length === 0) // use domain of the other axis if target of axisId is none
      return axisId === "y2" ? scale.y.domain() : // When all data bounds to y2, y Axis domain is called prior y2.
      // So, it needs to call to get y2 domain here
      $$.getYDomain(targets, "y2", xDomain);
    var yMin = config["axis_" + axisId + "_min"],
        yMax = config["axis_" + axisId + "_max"],
        yDomainMin = $$.getYDomainMin(yTargets),
        yDomainMax = $$.getYDomainMax(yTargets),
        center = config["axis_" + axisId + "_center"],
        isZeroBased = ["area", "bar", "bubble", "line", "scatter"].some(function (v) {
      return $$.hasType(v, yTargets) && config[v + "_zerobased"];
    }),
        isInverted = config["axis_" + axisId + "_inverted"],
        showHorizontalDataLabel = $$.hasDataLabel() && config.axis_rotated,
        showVerticalDataLabel = $$.hasDataLabel() && !config.axis_rotated;
    yDomainMin = isValue(yMin) ? yMin : isValue(yMax) ? yDomainMin < yMax ? yDomainMin : yMax - 10 : yDomainMin, yDomainMax = isValue(yMax) ? yMax : isValue(yMin) ? yMin < yDomainMax ? yDomainMax : yMin + 10 : yDomainMax, isNaN(yDomainMin) && (yDomainMin = 0), isNaN(yDomainMax) && (yDomainMax = yDomainMin), yDomainMin === yDomainMax && (yDomainMin < 0 ? yDomainMax = 0 : yDomainMin = 0);
    var isAllPositive = yDomainMin >= 0 && yDomainMax >= 0,
        isAllNegative = yDomainMin <= 0 && yDomainMax <= 0;
    (isValue(yMin) && isAllPositive || isValue(yMax) && isAllNegative) && (isZeroBased = !1), isZeroBased && (isAllPositive && (yDomainMin = 0), isAllNegative && (yDomainMax = 0));
    var domainLength = Math.abs(yDomainMax - yDomainMin),
        padding = {
      top: domainLength * .1,
      bottom: domainLength * .1
    };

    if (isDefined(center)) {
      var yDomainAbs = Math.max(Math.abs(yDomainMin), Math.abs(yDomainMax));
      yDomainMax = center + yDomainAbs, yDomainMin = center - yDomainAbs;
    } // add padding for data label


    if (showHorizontalDataLabel) {
      var diff = diffDomain(scale.y.range()),
          ratio = $$.getDataLabelLength(yDomainMin, yDomainMax, "width").map(function (v) {
        return v / diff;
      });
      ["bottom", "top"].forEach(function (v, i) {
        padding[v] += domainLength * (ratio[i] / (1 - ratio[0] - ratio[1]));
      });
    } else if (showVerticalDataLabel) {
      var lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, "height");
      ["bottom", "top"].forEach(function (v, i) {
        padding[v] += $$.axis.convertPixelsToAxisPadding(lengths[i], domainLength);
      });
    }

    if (/^y2?$/.test(axisId)) {
      var p = config["axis_" + axisId + "_padding"];
      notEmpty(p) && ["bottom", "top"].forEach(function (v) {
        padding[v] = $$.axis.getPadding(p, v, padding[v], domainLength);
      });
    } // Bar/Area chart should be 0-based if all positive|negative


    isZeroBased && (isAllPositive && (padding.bottom = yDomainMin), isAllNegative && (padding.top = -yDomainMax));
    var domain = [yDomainMin - padding.bottom, yDomainMax + padding.top];
    return isInverted ? domain.reverse() : domain;
  },
  getXDomainMinMax: function getXDomainMinMax(targets, type) {
    var $$ = this,
        value = $$.config["axis_x_" + type];
    return isDefined(value) ? $$.isTimeSeries() ? parseDate.call($$, value) : value : getMinMax(type, targets.map(function (t) {
      return getMinMax(type, t.values.map(function (v) {
        return v.x;
      }));
    }));
  },
  getXDomainMin: function getXDomainMin(targets) {
    return this.getXDomainMinMax(targets, "min");
  },
  getXDomainMax: function getXDomainMax(targets) {
    return this.getXDomainMinMax(targets, "max");
  },
  getXDomainPadding: function getXDomainPadding(domain) {
    var maxDataCount,
        padding,
        $$ = this,
        config = $$.config,
        diff = domain[1] - domain[0],
        xPadding = config.axis_x_padding;
    $$.isCategorized() ? padding = 0 : $$.hasType("bar") ? (maxDataCount = $$.getMaxDataCount(), padding = maxDataCount > 1 ? diff / (maxDataCount - 1) / 2 : .5) : padding = diff * .01;
    var left = padding,
        right = padding;
    return isObject(xPadding) && notEmpty(xPadding) ? (left = isValue(xPadding.left) ? xPadding.left : padding, right = isValue(xPadding.right) ? xPadding.right : padding) : isNumber(config.axis_x_padding) && (left = xPadding, right = xPadding), {
      left: left,
      right: right
    };
  },
  getXDomain: function getXDomain(targets) {
    var $$ = this,
        xDomain = [$$.getXDomainMin(targets), $$.getXDomainMax(targets)],
        _xDomain = xDomain,
        firstX = _xDomain[0],
        lastX = _xDomain[1],
        padding = $$.getXDomainPadding(xDomain),
        min = 0,
        max = 0;
    return firstX - lastX !== 0 || $$.isCategorized() || ($$.isTimeSeries() ? (firstX = new Date(firstX.getTime() * .5), lastX = new Date(lastX.getTime() * 1.5)) : (firstX = firstX === 0 ? 1 : firstX * .5, lastX = lastX === 0 ? -1 : lastX * 1.5)), (firstX || firstX === 0) && (min = $$.isTimeSeries() ? new Date(firstX.getTime() - padding.left) : firstX - padding.left), (lastX || lastX === 0) && (max = $$.isTimeSeries() ? new Date(lastX.getTime() + padding.right) : lastX + padding.right), [min, max];
  },
  updateXDomain: function updateXDomain(targets, withUpdateXDomain, withUpdateOrgXDomain, withTrim, domain) {
    var $$ = this,
        config = $$.config,
        org = $$.org,
        _$$$scale = $$.scale,
        x = _$$$scale.x,
        subX = _$$$scale.subX,
        zoomEnabled = config.zoom_enabled;

    if (withUpdateOrgXDomain && (x.domain(domain || util_sortValue($$.getXDomain(targets))), org.xDomain = x.domain(), zoomEnabled && $$.zoom.updateScaleExtent(), subX.domain(x.domain()), $$.brush && $$.brush.scale(subX)), withUpdateXDomain) {
      var domainValue = domain || !$$.brush || brushEmpty($$) ? org.xDomain : getBrushSelection($$).map(subX.invert);
      x.domain(domainValue), zoomEnabled && $$.zoom.updateScaleExtent();
    } // Trim domain when too big by zoom mousemove event


    return withTrim && x.domain($$.trimXDomain(x.orgDomain())), x.domain();
  },
  trimXDomain: function trimXDomain(domain) {
    var zoomDomain = this.getZoomDomain(),
        min = zoomDomain[0],
        max = zoomDomain[1];
    return domain[0] <= min && (domain[1] = +domain[1] + (min - domain[0]), domain[0] = min), max <= domain[1] && (domain[0] = +domain[0] - (domain[1] - max), domain[1] = max), domain;
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/format.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


function getFormat($$, typeValue, v) {
  var config = $$.config,
      type = "axis_" + typeValue + "_tick_format",
      format = config[type] ? config[type] : $$.defaultValueFormat;
  return format(v);
}

/* harmony default export */ var internals_format = ({
  getYFormat: function getYFormat(forArc) {
    var $$ = this,
        yFormat = $$.yFormat,
        y2Format = $$.y2Format;
    return forArc && !$$.hasType("gauge") && (yFormat = $$.defaultArcValueFormat, y2Format = $$.defaultArcValueFormat), function (v, ratio, id) {
      var format = $$.axis && $$.axis.getId(id) === "y2" ? y2Format : yFormat;
      return format.call($$, v, ratio);
    };
  },
  yFormat: function yFormat(v) {
    return getFormat(this, "y", v);
  },
  y2Format: function y2Format(v) {
    return getFormat(this, "y2", v);
  },
  defaultValueFormat: function defaultValueFormat(v) {
    return isValue(v) ? +v : "";
  },
  defaultArcValueFormat: function defaultArcValueFormat(v, ratio) {
    return (ratio * 100).toFixed(1) + "%";
  },
  dataLabelFormat: function dataLabelFormat(targetId) {
    var $$ = this,
        dataLabels = $$.config.data_labels,
        defaultFormat = function (v) {
      return isValue(v) ? +v : "";
    },
        format = defaultFormat;

    return isFunction(dataLabels.format) ? format = dataLabels.format : isObjectType(dataLabels.format) && (dataLabels.format[targetId] ? format = dataLabels.format[targetId] === !0 ? defaultFormat : dataLabels.format[targetId] : format = function () {
      return "";
    }), format.bind($$.api);
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/legend.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var internals_legend = ({
  /**
   * Initialize the legend.
   * @private
   */
  initLegend: function initLegend() {
    var $$ = this,
        config = $$.config,
        $el = $$.$el;
    $$.legendItemTextBox = {}, $$.state.legendHasRendered = !1, config.legend_show ? (!config.legend_contents_bindto && ($el.legend = $$.$el.svg.append("g").attr("transform", $$.getTranslate("legend"))), $$.updateLegend()) : $$.state.hiddenLegendIds = $$.mapToIds($$.data.targets);
  },

  /**
   * Update legend element
   * @param {Array} targetIds ID's of target
   * @param {Object} options withTransform : Whether to use the transform property / withTransitionForTransform: Whether transition is used when using the transform property / withTransition : whether or not to transition.
   * @param {Object} transitions Return value of the generateTransitions
   * @private
   */
  updateLegend: function updateLegend(targetIds, options, transitions) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        scale = $$.scale,
        $el = $$.$el,
        optionz = options || {
      withTransform: !1,
      withTransitionForTransform: !1,
      withTransition: !1
    };
    // toggle legend state
    // Update size and scale
    // Update g positions
    optionz.withTransition = getOption(optionz, "withTransition", !0), optionz.withTransitionForTransform = getOption(optionz, "withTransitionForTransform", !0), config.legend_contents_bindto && config.legend_contents_template ? $$.updateLegendTemplate() : $$.updateLegendElement(targetIds || $$.mapToIds($$.data.targets), optionz, transitions), $el.legend.selectAll("." + config_classes.legendItem).classed(config_classes.legendItemHidden, function (id) {
      return !$$.isTargetToShow(id);
    }), $$.updateScales(!1, !scale.zoom), $$.updateSvgSize(), $$.transformAll(optionz.withTransitionForTransform, transitions), state.legendHasRendered = !0;
  },

  /**
   * Update legend using template option
   * @private
   */
  updateLegendTemplate: function updateLegendTemplate() {
    var $$ = this,
        config = $$.config,
        $el = $$.$el,
        wrapper = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(config.legend_contents_bindto),
        template = config.legend_contents_template;

    if (!wrapper.empty()) {
      var targets = $$.mapToIds($$.data.targets),
          ids = [],
          html = "";
      targets.forEach(function (v) {
        var content = isFunction(template) ? template.bind($$.api)(v, $$.color(v), $$.api.data(v)[0].values) : tplProcess(template, {
          COLOR: $$.color(v),
          TITLE: v
        });
        content && (ids.push(v), html += content);
      });
      var legendItem = wrapper.html(html).selectAll(function () {
        return this.childNodes;
      }).data(ids);
      $$.setLegendItem(legendItem), $el.legend = wrapper;
    }
  },

  /**
   * Update the size of the legend.
   * @private
   * @param {Obejct} size S
   */
  updateSizeForLegend: function updateSizeForLegend(size) {
    var $$ = this,
        config = $$.config,
        _$$$state = $$.state,
        isLegendTop = _$$$state.isLegendTop,
        isLegendLeft = _$$$state.isLegendLeft,
        isLegendRight = _$$$state.isLegendRight,
        isLegendInset = _$$$state.isLegendInset,
        currentWidth = _$$$state.currentWidth,
        currentHeight = _$$$state.currentHeight,
        width = size.width,
        height = size.height,
        insetLegendPosition = {
      top: isLegendTop ? $$.getCurrentPaddingTop() + config.legend_inset_y + 5.5 : currentHeight - height - $$.getCurrentPaddingBottom() - config.legend_inset_y,
      left: isLegendLeft ? $$.getCurrentPaddingLeft() + config.legend_inset_x + .5 : currentWidth - width - $$.getCurrentPaddingRight() - config.legend_inset_x + .5
    };
    $$.state.margin3 = {
      top: isLegendRight ? 0 : isLegendInset ? insetLegendPosition.top : currentHeight - height,
      right: NaN,
      bottom: 0,
      left: isLegendRight ? currentWidth - width : isLegendInset ? insetLegendPosition.left : 0
    };
  },

  /**
   * Transform Legend
   * @private
   * @param {Boolean} whether or not to transition.
   */
  transformLegend: function transformLegend(withTransition) {
    var $$ = this,
        legend = $$.$el.legend;
    (withTransition ? legend.transition() : legend).attr("transform", $$.getTranslate("legend"));
  },

  /**
   * Update the legend step
   * @private
   * @param {Number} step
   */
  updateLegendStep: function updateLegendStep(step) {
    this.state.legendStep = step;
  },

  /**
   * Update legend item width
   * @private
   * @param {Number} width
   */
  updateLegendItemWidth: function updateLegendItemWidth(w) {
    this.state.legendItemWidth = w;
  },

  /**
   * Update legend item height
   * @private
   * @param {Number} height
   */
  updateLegendItemHeight: function updateLegendItemHeight(h) {
    this.state.legendItemHeight = h;
  },

  /**
   * Update legend item color
   * @private
   * @param {String} id Corresponding data ID value
   * @param {String} color Color value
   */
  updateLegendItemColor: function updateLegendItemColor(id, color) {
    this.$el.legend.select("." + config_classes.legendItem + "-" + id + " line").style("stroke", color);
  },

  /**
   * Get the width of the legend
   * @private
   * @return {Number} width
   */
  getLegendWidth: function getLegendWidth() {
    var $$ = this,
        _$$$state2 = $$.state,
        currentWidth = _$$$state2.currentWidth,
        isLegendRight = _$$$state2.isLegendRight,
        isLegendInset = _$$$state2.isLegendInset,
        legendItemWidth = _$$$state2.legendItemWidth,
        legendStep = _$$$state2.legendStep;
    return $$.config.legend_show ? isLegendRight || isLegendInset ? legendItemWidth * (legendStep + 1) : currentWidth : 0;
  },

  /**
   * Get the height of the legend
   * @return {Number} height
   * @private
   */
  getLegendHeight: function getLegendHeight() {
    var $$ = this,
        _$$$state3 = $$.state,
        currentHeight = _$$$state3.currentHeight,
        isLegendRight = _$$$state3.isLegendRight,
        legendItemHeight = _$$$state3.legendItemHeight,
        legendStep = _$$$state3.legendStep;
    return $$.config.legend_show ? isLegendRight ? currentHeight : Math.max(20, legendItemHeight) * (legendStep + 1) : 0;
  },

  /**
   * Get the opacity of the legend
   * @private
   * @param {Object} d3.Select
   * @returns {Number} opacity
   */
  opacityForLegend: function opacityForLegend(legendItem) {
    return legendItem.classed(config_classes.legendItemHidden) ? null : "1";
  },

  /**
   * Get the opacity of the legend that is unfocused
   * @private
   * @param {Object} legendItem, d3.Select
   * @returns {Number} opacity
   */
  opacityForUnfocusedLegend: function opacityForUnfocusedLegend(legendItem) {
    return legendItem.classed(config_classes.legendItemHidden) ? null : "0.3";
  },

  /**
   * Toggles the focus of the legend
   * @private
   * @param {Array} ID's of target
   * @param {Boolean} whether or not to focus.
   */
  toggleFocusLegend: function toggleFocusLegend(targetIds, focus) {
    var $$ = this,
        legend = $$.$el.legend,
        targetIdz = $$.mapToTargetIds(targetIds);
    legend && legend.selectAll("." + config_classes.legendItem).filter(function (id) {
      return targetIdz.indexOf(id) >= 0;
    }).classed(config_classes.legendItemFocused, focus).transition().duration(100).style("opacity", function () {
      return (focus ? $$.opacityForLegend : $$.opacityForUnfocusedLegend).call($$, Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this));
    });
  },

  /**
   * Revert the legend to its default state
   * @private
   */
  revertLegend: function revertLegend() {
    var $$ = this,
        legend = $$.$el.legend;
    legend && legend.selectAll("." + config_classes.legendItem).classed(config_classes.legendItemFocused, !1).transition().duration(100).style("opacity", function () {
      return $$.opacityForLegend(Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this));
    });
  },

  /**
   * Shows the legend
   * @private
   * @param {Array} ID's of target
   */
  showLegend: function showLegend(targetIds) {
    var $$ = this,
        config = $$.config,
        $el = $$.$el;
    config.legend_show || (config.legend_show = !0, $el.legend ? $el.legend.style("visibility", "visible") : $$.initLegend(), !$$.state.legendHasRendered && $$.updateLegend()), $$.removeHiddenLegendIds(targetIds), $el.legend.selectAll($$.selectorLegends(targetIds)).style("visibility", "visible").transition().style("opacity", function () {
      return $$.opacityForLegend(Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this));
    });
  },

  /**
   * Hide the legend
   * @private
   * @param {Array} ID's of target
   */
  hideLegend: function hideLegend(targetIds) {
    var $$ = this,
        config = $$.config,
        legend = $$.$el.legend;
    config.legend_show && isEmpty(targetIds) && (config.legend_show = !1, legend.style("visibility", "hidden")), $$.addHiddenLegendIds(targetIds), legend.selectAll($$.selectorLegends(targetIds)).style("opacity", "0").style("visibility", "hidden");
  },

  /**
   * Get legend item textbox dimension
   * @param {String} id
   * @param {HTMLElement|d3.selection} textElement
   */
  getLegendItemTextBox: function getLegendItemTextBox(id, textElement) {
    var $$ = this,
        cache = $$.cache,
        cacheKey = "legendItemTextBox";

    if (id) {
      var data = cache.get(cacheKey);
      return data || (data = {}), data[id] || (data[id] = $$.getTextRect(textElement, config_classes.legendItem), cache.add(cacheKey, data)), data[id];
    }

    cache.remove(cacheKey);
  },

  /**
   * Set legend item style & bind events
   * @private
   * @param {d3.selection} item
   */
  setLegendItem: function setLegendItem(item) {
    var $$ = this,
        api = $$.api,
        config = $$.config,
        state = $$.state,
        isTouch = state.inputType === "touch",
        hasGauge = $$.hasType("gauge");
    item.attr("class", function (id) {
      var node = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
          itemClass = !node.empty() && node.attr("class") || "";
      return itemClass + $$.generateClass(config_classes.legendItem, id);
    }).style("visibility", function (id) {
      return $$.isLegendToShow(id) ? "visible" : "hidden";
    }).style("cursor", "pointer").on("click", function (id) {
      callFn(config.legend_item_onclick, api, id) || (external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"].altKey ? (api.hide(), api.show(id)) : (api.toggle(id), !isTouch && $$.isTargetToShow(id) ? api.focus(id) : api.revert())), isTouch && $$.hideTooltip();
    }), isTouch || item.on("mouseout", function (id) {
      callFn(config.legend_item_onout, api, id) || (Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).classed(config_classes.legendItemFocused, !1), hasGauge && $$.undoMarkOverlapped($$, "." + config_classes.gaugeValue), $$.api.revert());
    }).on("mouseover", function (id) {
      callFn(config.legend_item_onover, api, id) || (Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).classed(config_classes.legendItemFocused, !0), hasGauge && $$.markOverlapped(id, $$, "." + config_classes.gaugeValue), !state.transiting && $$.isTargetToShow(id) && api.focus(id));
    });
  },

  /**
   * Update the legend
   * @param {Array} targetIds ID's of target
   * @param {Object} options withTransform : Whether to use the transform property / withTransitionForTransform: Whether transition is used when using the transform property / withTransition : whether or not to transition.
  	 * @private
   */
  updateLegendElement: function updateLegendElement(targetIds, options) {
    var xForLegend,
        yForLegend,
        background,
        $$ = this,
        config = $$.config,
        state = $$.state,
        $el = $$.$el,
        posMin = 10,
        tileWidth = config.legend_item_tile_width + 5,
        maxWidth = 0,
        maxHeight = 0,
        totalLength = 0,
        offsets = {},
        widths = {},
        heights = {},
        margins = [0],
        steps = {},
        step = 0,
        isLegendRightOrInset = state.isLegendRight || state.isLegendInset,
        targetIdz = targetIds.filter(function (id) {
      return !isDefined(config.data_names[id]) || config.data_names[id] !== null;
    }),
        withTransition = options.withTransition,
        updatePositions = function (textElement, id, index) {
      var margin,
          isLast = index === targetIdz.length - 1,
          box = $$.getLegendItemTextBox(id, textElement),
          itemWidth = box.width + tileWidth + (isLast && !isLegendRightOrInset ? 0 : 10) + config.legend_padding,
          itemHeight = box.height + 4,
          itemLength = isLegendRightOrInset ? itemHeight : itemWidth,
          areaLength = isLegendRightOrInset ? $$.getLegendHeight() : $$.getLegendWidth(),
          updateValues = function (id2, withoutStep) {
        withoutStep || (margin = (areaLength - totalLength - itemLength) / 2, margin < posMin && (margin = (areaLength - itemLength) / 2, totalLength = 0, step++)), steps[id2] = step, margins[step] = state.isLegendInset ? 10 : margin, offsets[id2] = totalLength, totalLength += itemLength;
      };

      if (index === 0 && (totalLength = 0, step = 0, maxWidth = 0, maxHeight = 0), config.legend_show && !$$.isLegendToShow(id)) return widths[id] = 0, heights[id] = 0, steps[id] = 0, void (offsets[id] = 0);
      widths[id] = itemWidth, heights[id] = itemHeight, (!maxWidth || itemWidth >= maxWidth) && (maxWidth = itemWidth), (!maxHeight || itemHeight >= maxHeight) && (maxHeight = itemHeight);
      var maxLength = isLegendRightOrInset ? maxHeight : maxWidth;
      config.legend_equally ? (Object.keys(widths).forEach(function (id2) {
        return widths[id2] = maxWidth;
      }), Object.keys(heights).forEach(function (id2) {
        return heights[id2] = maxHeight;
      }), margin = (areaLength - maxLength * targetIdz.length) / 2, margin < posMin ? (totalLength = 0, step = 0, targetIdz.forEach(function (id2) {
        return updateValues(id2);
      })) : updateValues(id, !0)) : updateValues(id);
    };

    state.isLegendInset && (step = config.legend_inset_step ? config.legend_inset_step : targetIdz.length, $$.updateLegendStep(step)), state.isLegendRight ? (xForLegend = function (id) {
      return maxWidth * steps[id];
    }, yForLegend = function (id) {
      return margins[steps[id]] + offsets[id];
    }) : state.isLegendInset ? (xForLegend = function (id) {
      return maxWidth * steps[id] + 10;
    }, yForLegend = function (id) {
      return margins[steps[id]] + offsets[id];
    }) : (xForLegend = function (id) {
      return margins[steps[id]] + offsets[id];
    }, yForLegend = function (id) {
      return maxHeight * steps[id];
    });

    var xForLegendText = function (id, i) {
      return xForLegend(id, i) + 4 + config.legend_item_tile_width;
    },
        xForLegendRect = function (id, i) {
      return xForLegend(id, i);
    },
        x1ForLegendTile = function (id, i) {
      return xForLegend(id, i) - 2;
    },
        x2ForLegendTile = function (id, i) {
      return xForLegend(id, i) - 2 + config.legend_item_tile_width;
    },
        yForLegendText = function (id, i) {
      return yForLegend(id, i) + 9;
    },
        yForLegendRect = function (id, i) {
      return yForLegend(id, i) - 5;
    },
        yForLegendTile = function (id, i) {
      return yForLegend(id, i) + 4;
    },
        pos = -200,
        l = $el.legend.selectAll("." + config_classes.legendItem).data(targetIdz).enter().append("g");

    $$.setLegendItem(l), l.append("text").text(function (id) {
      return isDefined(config.data_names[id]) ? config.data_names[id] : id;
    }).each(function (id, i) {
      updatePositions(this, id, i);
    }).style("pointer-events", "none").attr("x", isLegendRightOrInset ? xForLegendText : pos).attr("y", isLegendRightOrInset ? pos : yForLegendText), l.append("rect").attr("class", config_classes.legendItemEvent).style("fill-opacity", "0").attr("x", isLegendRightOrInset ? xForLegendRect : pos).attr("y", isLegendRightOrInset ? pos : yForLegendRect);
    var usePoint = config.legend_usePoint;

    if (usePoint) {
      var ids = [];
      l.append(function (d) {
        var pattern = notEmpty(config.point_pattern) ? config.point_pattern : [config.point_type];
        ids.indexOf(d) === -1 && ids.push(d);
        var point = pattern[ids.indexOf(d) % pattern.length];
        return point === "rectangle" && (point = "rect"), browser_doc.createElementNS(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["namespaces"].svg, $$.hasValidPointType(point) ? point : "use");
      }).attr("class", config_classes.legendItemPoint).style("fill", function (d) {
        return $$.color(d);
      }).style("pointer-events", "none").attr("href", function (data, idx, selection) {
        var node = selection[idx],
            nodeName = node.nodeName.toLowerCase();
        return nodeName === "use" ? "#" + state.datetimeId + "-point-" + data : undefined;
      });
    } else l.append("line").attr("class", config_classes.legendItemTile).style("stroke", $$.color).style("pointer-events", "none").attr("x1", isLegendRightOrInset ? x1ForLegendTile : pos).attr("y1", isLegendRightOrInset ? pos : yForLegendTile).attr("x2", isLegendRightOrInset ? x2ForLegendTile : pos).attr("y2", isLegendRightOrInset ? pos : yForLegendTile).attr("stroke-width", config.legend_item_tile_height); // Set background for inset legend


    background = $el.legend.select("." + config_classes.legendBackground + " rect"), state.isLegendInset && maxWidth > 0 && background.size() === 0 && (background = legend.insert("g", "." + config_classes.legendItem).attr("class", config_classes.legendBackground).append("rect"));
    var texts = $el.legend.selectAll("text").data(targetIdz).text(function (id) {
      return isDefined(config.data_names[id]) ? config.data_names[id] : id;
    }) // MEMO: needed for update
    .each(function (id, i) {
      updatePositions(this, id, i);
    });
    (withTransition ? texts.transition() : texts).attr("x", xForLegendText).attr("y", yForLegendText);
    var rects = $el.legend.selectAll("rect." + config_classes.legendItemEvent).data(targetIdz);

    if ((withTransition ? rects.transition() : rects).attr("width", function (id) {
      return widths[id];
    }).attr("height", function (id) {
      return heights[id];
    }).attr("x", xForLegendRect).attr("y", yForLegendRect), usePoint) {
      var tiles = $el.legend.selectAll("." + config_classes.legendItemPoint).data(targetIdz);
      (withTransition ? tiles.transition() : tiles).each(function () {
        var radius,
            width,
            height,
            nodeName = this.nodeName.toLowerCase(),
            pointR = config.point_r,
            x = "x",
            y = "y",
            xOffset = 2,
            yOffset = 2.5;

        if (nodeName === "circle") {
          var size = pointR * .2;
          x = "cx", y = "cy", radius = pointR + size, xOffset = pointR * 2, yOffset = -size;
        } else if (nodeName === "rect") {
          var _size = pointR * 2.5;

          width = _size, height = _size, yOffset = 3;
        }

        Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).attr(x, function (d) {
          return x1ForLegendTile(d) + xOffset;
        }).attr(y, function (d) {
          return yForLegendTile(d) - yOffset;
        }).attr("r", radius).attr("width", width).attr("height", height);
      });
    } else {
      var _tiles = $el.legend.selectAll("line." + config_classes.legendItemTile).data(targetIdz);

      (withTransition ? _tiles.transition() : _tiles).style("stroke", $$.levelColor ? function (id) {
        return $$.levelColor($$.cache.get(id).values[0].value);
      } : $$.color).attr("x1", x1ForLegendTile).attr("y1", yForLegendTile).attr("x2", x2ForLegendTile).attr("y2", yForLegendTile);
    }

    background && (withTransition ? background.transition() : background).attr("height", $$.getLegendHeight() - 12).attr("width", maxWidth * (step + 1) + 10), $$.updateLegendItemWidth(maxWidth), $$.updateLegendItemHeight(maxHeight), $$.updateLegendStep(step);
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/scale.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var internals_scale = ({
  getScale: function getScale(min, max, forTimeseries) {
    return (forTimeseries ? Object(external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_["scaleTime"])() : Object(external_commonjs_d3_scale_commonjs2_d3_scale_amd_d3_scale_root_d3_["scaleLinear"])()).range([min, max]);
  },

  /**
   * Get x Axis scale function
   * @param {Number} min
   * @param {Number} max
   * @param {Number} domain
   * @param {Function} offset The offset getter to be sum
   * @return {Function} scale
   * @private
   */
  getX: function getX(min, max, domain, offset) {
    var $$ = this,
        scale = $$.scale.zoom || $$.getScale(min, max, $$.isTimeSeries());
    return $$.getCustomizedScale(domain ? scale.domain(domain) : scale, offset);
  },

  /**
   * Get y Axis scale function
   * @param {Number} min
   * @param {Number} max
   * @param {Number} domain
   * @return {Function} scale
   * @private
   */
  getY: function getY(min, max, domain) {
    var scale = this.getScale(min, max, this.isTimeSeriesY());
    return domain && scale.domain(domain), scale;
  },

  /**
   * Get customized scale
   * @param {d3.scaleLinear|d3.scaleTime} scaleValue
   * @param {Function} offsetValue Offset getter to be sum
   * @return {} scale
   * @private
   */
  getCustomizedScale: function getCustomizedScale(scaleValue, offsetValue) {
    var $$ = this,
        offset = offsetValue || function () {
      return $$.axis.x.tickOffset();
    },
        scale = function (d, raw) {
      var v = scaleValue(d) + offset();
      return raw ? v : Math.ceil(v);
    };

    // copy original scale methods
    for (var key in scaleValue) scale[key] = scaleValue[key];

    return scale.orgDomain = function () {
      return scaleValue.domain();
    }, scale.orgScale = function () {
      return scaleValue;
    }, $$.isCategorized() && (scale.domain = function (domainValue) {
      var domain = domainValue;
      return arguments.length ? (scaleValue.domain(domain), scale) : (domain = this.orgDomain(), [domain[0], domain[1] + 1]);
    }), scale;
  },
  getYScale: function getYScale(id) {
    var _this$scale = this.scale,
        y = _this$scale.y,
        y2 = _this$scale.y2;
    return this.axis.getId(id) === "y2" ? y2 : y;
  },
  getSubYScale: function getSubYScale(id) {
    var _this$scale2 = this.scale,
        subY = _this$scale2.subY,
        subY2 = _this$scale2.subY2;
    return this.axis.getId(id) === "y2" ? subY2 : subY;
  },

  /**
   * Update scale
   * @private
   * @param {Boolean} isInit - param is given at the init rendering
   */
  updateScales: function updateScales(isInit, updateXDomain) {
    updateXDomain === void 0 && (updateXDomain = !0);
    var $$ = this,
        axis = $$.axis,
        config = $$.config,
        format = $$.format,
        org = $$.org,
        scale = $$.scale,
        _$$$state = $$.state,
        width = _$$$state.width,
        height = _$$$state.height,
        width2 = _$$$state.width2,
        height2 = _$$$state.height2,
        hasAxis = _$$$state.hasAxis;

    if (hasAxis) {
      var isRotated = config.axis_rotated,
          min = {
        x: isRotated ? 1 : 0,
        y: isRotated ? 0 : height,
        subX: isRotated ? 1 : 0,
        subY: isRotated ? 0 : height2
      },
          max = {
        x: isRotated ? height : width,
        y: isRotated ? width : 1,
        subX: isRotated ? height : width,
        subY: isRotated ? width2 : 1
      },
          xDomain = updateXDomain && scale.x && scale.x.orgDomain(),
          xSubDomain = updateXDomain && org.xDomain; // update edges

      // y Axis
      scale.x = $$.getX(min.x, max.x, xDomain, function () {
        return axis.x.tickOffset();
      }), scale.subX = $$.getX(min.x, max.x, xSubDomain, function (d) {
        return d % 1 ? 0 : axis.subX.tickOffset();
      }), format.xAxisTick = axis.getXAxisTickFormat(), axis.tick.x = axis.getTickValues("x"), axis.x = axis.getAxis("x", scale.x, config.axis_x_tick_outer, isInit), config.subchart_show && (axis.subX = axis.getAxis("subX", scale.subX, config.axis_x_tick_outer, isInit)), scale.y = $$.getY(min.y, max.y, scale.y ? scale.y.domain() : config.axis_y_default), scale.subY = $$.getY(min.subY, max.subY, scale.subY ? scale.subY.domain() : config.axis_y_default), axis.tick.y = axis.getTickValues("y"), axis.y = axis.getAxis("y", scale.y, config.axis_y_tick_outer, isInit), config.axis_y2_show && (scale.y2 = $$.getY(min.y, max.y, scale.y2 ? scale.y2.domain() : config.axis_y2_default), scale.subY2 = $$.getY(min.subY, max.subY, scale.subY2 ? scale.subY2.domain() : config.axis_y2_default), axis.tick.y2 = axis.getTickValues("y2"), axis.y2 = axis.getAxis("y2", scale.y2, config.axis_y2_tick_outer, isInit));
    } else // update for arc
    $$.updateArc && $$.updateArc();
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/size.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var internals_size = ({
  /**
   * Update container size
   * @private
   */
  setContainerSize: function setContainerSize() {
    var $$ = this,
        state = $$.state;
    state.currentWidth = $$.getCurrentWidth(), state.currentHeight = $$.getCurrentHeight();
  },
  getCurrentWidth: function getCurrentWidth() {
    var $$ = this;
    return $$.config.size_width || $$.getParentWidth();
  },
  getCurrentHeight: function getCurrentHeight() {
    var $$ = this,
        config = $$.config,
        h = config.size_height || $$.getParentHeight();
    return h > 0 ? h : 320 / ($$.hasType("gauge") && !config.gauge_fullCircle ? 2 : 1);
  },

  /**
   * Get Axis size according its position
   * @param {String} id Axis id value - x, y or y2
   * @return {number} size Axis size value
   * @private
   */
  getAxisSize: function getAxisSize(id) {
    var $$ = this,
        isRotated = $$.config.axis_rotated;
    return isRotated && id === "x" || !isRotated && /y2?/.test(id) ? $$.getAxisWidthByAxisId(id, !0) : $$.getHorizontalAxisHeight(id);
  },
  getCurrentPaddingTop: function getCurrentPaddingTop() {
    var $$ = this,
        config = $$.config,
        $el = $$.$el,
        axesLen = config.axis_y2_axes.length,
        padding = isValue(config.padding_top) ? config.padding_top : 0;
    return $el.title && $el.title.node() && (padding += $$.getTitlePadding()), axesLen && config.axis_rotated && (padding += $$.getHorizontalAxisHeight("y2") * axesLen), padding;
  },
  getCurrentPaddingBottom: function getCurrentPaddingBottom() {
    var $$ = this,
        config = $$.config,
        axisId = config.axis_rotated ? "y" : "x",
        axesLen = config["axis_" + axisId + "_axes"].length,
        padding = isValue(config.padding_bottom) ? config.padding_bottom : 0;
    return padding + (axesLen ? $$.getHorizontalAxisHeight(axisId) * axesLen : 0);
  },
  getCurrentPaddingLeft: function getCurrentPaddingLeft(withoutRecompute) {
    var padding,
        $$ = this,
        config = $$.config,
        hasAxis = $$.state.hasAxis,
        isRotated = config.axis_rotated,
        axisId = isRotated ? "x" : "y",
        axesLen = config["axis_" + axisId + "_axes"].length,
        axisWidth = hasAxis ? $$.getAxisWidthByAxisId(axisId, withoutRecompute) : 0;
    return padding = isValue(config.padding_left) ? config.padding_left : hasAxis && isRotated ? config.axis_x_show ? Math.max(ceil10(axisWidth), 40) : 1 : hasAxis && (!config.axis_y_show || config.axis_y_inner) ? $$.axis.getYAxisLabelPosition().isOuter ? 30 : 1 : ceil10(axisWidth), padding + axisWidth * axesLen;
  },
  getCurrentPaddingRight: function getCurrentPaddingRight() {
    var padding,
        $$ = this,
        config = $$.config,
        legendWidthOnRight = $$.state.isLegendRight ? $$.getLegendWidth() + 20 : 0,
        axesLen = config.axis_y2_axes.length,
        axisWidth = $$.getAxisWidthByAxisId("y2");
    return padding = isValue(config.padding_right) ? config.padding_right + 1 : $$.axis && config.axis_rotated ? 10 + legendWidthOnRight : $$.axis && (!config.axis_y2_show || config.axis_y2_inner) ? 2 + legendWidthOnRight + ($$.axis.getY2AxisLabelPosition().isOuter ? 20 : 0) : ceil10(axisWidth) + legendWidthOnRight, padding + axisWidth * axesLen;
  },

  /**
   * Get the parent rect element's size
   * @param {String} key property/attribute name
   * @private
   */
  getParentRectValue: function getParentRectValue(key) {
    for (var v, offsetName = "offset" + capitalize(key), parent = this.$el.chart.node(); !v && parent && parent.tagName !== "BODY";) {
      try {
        v = parent.getBoundingClientRect()[key];
      } catch (e) {
        offsetName in parent && (v = parent[offsetName]);
      }

      parent = parent.parentNode;
    }

    if (key === "width") {
      // Sometimes element's width value is incorrect(ex. flex container)
      // In this case, use body's offsetWidth instead.
      var bodyWidth = browser_doc.body.offsetWidth;
      v > bodyWidth && (v = bodyWidth);
    }

    return v;
  },
  getParentWidth: function getParentWidth() {
    return this.getParentRectValue("width");
  },
  getParentHeight: function getParentHeight() {
    var h = this.$el.chart.style("height");
    return h.indexOf("px") > 0 ? parseInt(h, 10) : 0;
  },
  getSvgLeft: function getSvgLeft(withoutRecompute) {
    var $$ = this,
        config = $$.config,
        $el = $$.$el,
        hasLeftAxisRect = config.axis_rotated || !config.axis_rotated && !config.axis_y_inner,
        leftAxisClass = config.axis_rotated ? config_classes.axisX : config_classes.axisY,
        leftAxis = $el.main.select("." + leftAxisClass).node(),
        svgRect = leftAxis && hasLeftAxisRect ? leftAxis.getBoundingClientRect() : {
      right: 0
    },
        chartRect = $el.chart.node().getBoundingClientRect(),
        hasArc = $$.hasArcType(),
        svgLeft = svgRect.right - chartRect.left - (hasArc ? 0 : $$.getCurrentPaddingLeft(withoutRecompute));
    return svgLeft > 0 ? svgLeft : 0;
  },
  getAxisWidthByAxisId: function getAxisWidthByAxisId(id, withoutRecompute) {
    var $$ = this;

    if ($$.axis) {
      var position = $$.axis && $$.axis.getLabelPositionById(id);
      return $$.axis.getMaxTickWidth(id, withoutRecompute) + (position.isInner ? 20 : 40);
    }

    return 40;
  },
  getHorizontalAxisHeight: function getHorizontalAxisHeight(id) {
    var $$ = this,
        config = $$.config,
        _$$$state = $$.state,
        rotatedPadding = _$$$state.rotatedPadding,
        isLegendRight = _$$$state.isLegendRight,
        isLegendInset = _$$$state.isLegendInset,
        isRotated = config.axis_rotated,
        h = 30;
    if (id === "x" && !config.axis_x_show) return 8;
    if (id === "x" && config.axis_x_height) return config.axis_x_height;
    if (id === "y" && !config.axis_y_show) return !config.legend_show || isLegendRight || isLegendInset ? 1 : 10;
    if (id === "y2" && !config.axis_y2_show) return rotatedPadding.top;
    var rotate = config["axis_" + id + "_tick_rotate"]; // Calculate x/y axis height when tick rotated

    return (id === "x" && !isRotated || /y2?/.test(id) && isRotated) && rotate && (h = 30 + $$.axis.getMaxTickWidth(id) * Math.cos(Math.PI * (90 - rotate) / 180)), h + ($$.axis.getLabelPositionById(id).isInner ? 0 : 10) + (id !== "y2" || isRotated ? 0 : -10);
  },
  getEventRectWidth: function getEventRectWidth() {
    return Math.max(0, this.axis.x.tickInterval());
  },
  updateDimension: function updateDimension(withoutAxis) {
    var $$ = this,
        config = $$.config,
        hasAxis = $$.state.hasAxis,
        axis = $$.$el.axis;
    // pass 'withoutAxis' param to not animate at the init rendering
    hasAxis && !withoutAxis && ($$.axis.x && config.axis_rotated ? ($$.axis.x.create(axis.x), $$.axis.subX && $$.axis.subX.create(axis.subX)) : ($$.axis.y && $$.axis.y.create(axis.y), $$.axis.y2 && $$.axis.y2.create(axis.y2))), $$.updateScales(withoutAxis), $$.updateSvgSize(), $$.transformAll(!1);
  },
  updateSvgSize: function updateSvgSize() {
    var $$ = this,
        state = $$.state,
        svg = $$.$el.svg;

    if (svg.attr("width", state.currentWidth).attr("height", state.currentHeight), state.hasAxis) {
      var brush = svg.select("." + config_classes.brush + " .overlay"),
          brushSize = {
        width: 0,
        height: 0
      };
      brush.size() && (brushSize.width = +brush.attr("width"), brushSize.height = +brush.attr("height")), svg.selectAll(["#" + state.clip.id, "#" + state.clip.idGrid]).select("rect").attr("width", state.width).attr("height", state.height), svg.select("#" + state.clip.idXAxis).select("rect").attr("x", $$.getXAxisClipX.bind($$)).attr("y", $$.getXAxisClipY.bind($$)).attr("width", $$.getXAxisClipWidth.bind($$)).attr("height", $$.getXAxisClipHeight.bind($$)), svg.select("#" + state.clip.idYAxis).select("rect").attr("x", $$.getYAxisClipX.bind($$)).attr("y", $$.getYAxisClipY.bind($$)).attr("width", $$.getYAxisClipWidth.bind($$)).attr("height", $$.getYAxisClipHeight.bind($$)), state.clip.idSubchart && svg.select("#" + state.clip.idSubchart).select("rect").attr("width", state.width).attr("height", brushSize.height), svg.select("." + config_classes.zoomRect).attr("width", state.width).attr("height", state.height);
    }
  },

  /**
   * Update size values
   * @param {Boolean} isInit If is called at initialization
   * @private
   */
  updateSizes: function updateSizes(isInit) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        legend = $$.$el.legend,
        isRotated = config.axis_rotated,
        hasArc = $$.hasArcType(),
        currLegend = {
      width: legend ? $$.getLegendWidth() : 0,
      height: legend ? $$.getLegendHeight() : 0
    },
        legendHeightForBottom = state.isLegendRight || state.isLegendInset ? 0 : currLegend.height,
        xAxisHeight = isRotated || hasArc ? 0 : $$.getHorizontalAxisHeight("x"),
        subchartXAxisHeight = config.subchart_axis_x_show && config.subchart_axis_x_tick_text_show ? xAxisHeight : 30,
        subchartHeight = config.subchart_show && !hasArc ? config.subchart_size_height + subchartXAxisHeight : 0;
    // for main
    // for subchart
    // for legend
    // for arc
    isInit || $$.setContainerSize(), state.margin = isRotated ? {
      top: $$.getHorizontalAxisHeight("y2") + $$.getCurrentPaddingTop(),
      right: hasArc ? 0 : $$.getCurrentPaddingRight(),
      bottom: $$.getHorizontalAxisHeight("y") + legendHeightForBottom + $$.getCurrentPaddingBottom(),
      left: subchartHeight + (hasArc ? 0 : $$.getCurrentPaddingLeft())
    } : {
      top: 4 + $$.getCurrentPaddingTop(),
      // for top tick text
      right: hasArc ? 0 : $$.getCurrentPaddingRight(),
      bottom: xAxisHeight + subchartHeight + legendHeightForBottom + $$.getCurrentPaddingBottom(),
      left: hasArc ? 0 : $$.getCurrentPaddingLeft()
    }, state.margin2 = isRotated ? {
      top: state.margin.top,
      right: NaN,
      bottom: 20 + legendHeightForBottom,
      left: $$.state.rotatedPadding.left
    } : {
      top: state.currentHeight - subchartHeight - legendHeightForBottom,
      right: NaN,
      bottom: subchartXAxisHeight + legendHeightForBottom,
      left: state.margin.left
    }, state.margin3 = {
      top: 0,
      right: NaN,
      bottom: 0,
      left: 0
    }, $$.updateSizeForLegend && $$.updateSizeForLegend(currLegend), state.width = state.currentWidth - state.margin.left - state.margin.right, state.height = state.currentHeight - state.margin.top - state.margin.bottom, state.width < 0 && (state.width = 0), state.height < 0 && (state.height = 0), state.width2 = isRotated ? state.margin.left - state.rotatedPadding.left - state.rotatedPadding.right : state.width, state.height2 = isRotated ? state.height : state.currentHeight - state.margin2.top - state.margin2.bottom, state.width2 < 0 && (state.width2 = 0), state.height2 < 0 && (state.height2 = 0), state.arcWidth = state.width - (state.isLegendRight ? currLegend.width + 10 : 0), state.arcHeight = state.height - (state.isLegendRight ? 0 : 10), $$.hasType("gauge") && !config.gauge_fullCircle && (state.arcHeight += state.height - $$.getGaugeLabelHeight()), $$.updateRadius && $$.updateRadius(), state.isLegendRight && hasArc && (state.margin3.left = state.arcWidth / 2 + state.radiusExpanded * 1.1);
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/text.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var internals_text = ({
  opacityForText: function opacityForText() {
    return this.hasDataLabel() ? "1" : "0";
  },

  /**
   * Initializes the text
   * @private
   */
  initText: function initText() {
    var $el = this.$el;
    $el.main.select("." + config_classes.chart).append("g").attr("class", config_classes.chartTexts);
  },

  /**
   * Update chartText
   * @private
   * @param {Object} $$.data.targets
   */
  updateTargetsForText: function updateTargetsForText(targets) {
    var $$ = this,
        classChartText = $$.classChartText.bind($$),
        classTexts = $$.classTexts.bind($$),
        classFocus = $$.classFocus.bind($$),
        mainTextUpdate = $$.$el.main.select("." + config_classes.chartTexts).selectAll("." + config_classes.chartText).data(targets).attr("class", function (d) {
      return classChartText(d) + classFocus(d);
    }),
        mainTextEnter = mainTextUpdate.enter().append("g").style("opacity", "0").attr("class", classChartText).style("pointer-events", "none");
    mainTextEnter.append("g").attr("class", classTexts);
  },

  /**
   * Update text
   * @private
   * @param {Number} Fade-out transition duration
   */
  updateText: function updateText(durationForExit) {
    var _this = this,
        $$ = this,
        config = $$.config,
        $el = $$.$el,
        dataFn = $$.labelishData.bind($$),
        classText = $$.classText.bind($$);

    $el.text = $el.main.selectAll("." + config_classes.texts).selectAll("." + config_classes.text).data(function (d) {
      return _this.isRadarType(d) ? d.values : dataFn(d);
    }), $el.text.exit().transition().duration(durationForExit).style("fill-opacity", "0").remove(), $el.text = $el.text.enter().append("text").merge($$.$el.text).attr("class", classText).attr("text-anchor", function (d) {
      return config.axis_rotated ? d.value < 0 ? "end" : "start" : "middle";
    }).style("fill", $$.updateTextColor.bind($$)).style("fill-opacity", "0").text(function (d, i, j) {
      var value = $$.isBubbleZType(d) ? $$.getBubbleZData(d.value, "z") : d.value;
      return $$.dataLabelFormat(d.id)(value, d.id, i, j);
    });
  },
  updateTextColor: function updateTextColor(d) {
    var color,
        $$ = this,
        labelColors = $$.config.data_labels_colors;
    return isString(labelColors) ? color = labelColors : isObject(labelColors) && (color = labelColors[d.id]), color || $$.color(d);
  },

  /**
   * Redraw chartText
   * @param {Function} x Positioning function for x
   * @param {Function} y Positioning function for y
   * @param {Boolean} forFlow
   * @param {Boolean} withTransition transition is enabled
   * @private
   */
  redrawText: function redrawText(x, y, forFlow, withTransition) {
    var $$ = this,
        t = getRandom(),
        opacityForText = forFlow ? 0 : $$.opacityForText.bind($$);
    return [$$.$el.text.each(function (d, i) {
      var text = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this); // do not apply transition for newly added text elements

      (withTransition && text.attr("x") ? text.transition(t) : text).attr("x", x.bind(this)(d, i)).attr("y", y.bind(this)(d, i)).style("fill", $$.updateTextColor.bind($$)).style("fill-opacity", opacityForText);
    })];
  },

  /**
   * Gets the getBoundingClientRect value of the element
   * @private
   * @param {HTMLElement|d3.selection} element
   * @param {String} className
   * @returns {Object} value of element.getBoundingClientRect()
   */
  getTextRect: function getTextRect(element, className) {
    var $$ = this,
        base = element.node ? element.node() : element;
    /text/i.test(base.tagName) || (base = base.querySelector("text"));
    var text = base.textContent,
        cacheKey = "textRect-" + text.replace(/\W/g, "_"),
        rect = $$.cache.get(cacheKey); // do not prefix w/'$', to not be resetted cache in .load() call

    return rect || ($$.$el.svg.append("text").style("visibility", "hidden").style("font", Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(base).style("font")).classed(className, !0).text(text).call(function (v) {
      rect = getBoundingRect(v.node());
    }).remove(), $$.cache.add(cacheKey, rect)), rect;
  },

  /**
   * Gets the x or y coordinate of the text
   * @param {Object} indices Indices values
   * @param {Boolean} forX whether or not to x
   * @returns {Number} coordinates
   * @private
   */
  generateXYForText: function generateXYForText(indices, forX) {
    var $$ = this,
        types = Object.keys(indices),
        points = {},
        getter = forX ? $$.getXForText : $$.getYForText;
    return $$.hasType("radar") && types.push("radar"), types.forEach(function (v) {
      points[v] = $$["generateGet" + capitalize(v) + "Points"](indices[v], !1);
    }), function (d, i) {
      var type = $$.isAreaType(d) && "area" || $$.isBarType(d) && "bar" || $$.isRadarType(d) && "radar" || "line";
      return getter.call($$, points[type](d, i), d, this);
    };
  },

  /**
   * Get centerized text position for bar type data.label.text
   * @private
   * @param {Object} d Data object
   * @param {Array} points Data points position
   * @param {HTMLElement} textElement Data label text element
   * @returns {Number} Position value
   */
  getCenteredTextPos: function getCenteredTextPos(d, points, textElement) {
    var $$ = this,
        config = $$.config,
        isRotated = config.axis_rotated;

    if (config.data_labels.centered && $$.isBarType(d)) {
      var rect = getBoundingRect(textElement),
          isPositive = d.value >= 0;

      if (isRotated) {
        var w = (isPositive ? points[1][1] - points[0][1] : points[0][1] - points[1][1]) / 2 + rect.width / 2;
        return isPositive ? -w - 3 : w + 2;
      }

      var h = (isPositive ? points[0][1] - points[1][1] : points[1][1] - points[0][1]) / 2 + rect.height / 2;
      return isPositive ? h : -h - 2;
    }

    return 0;
  },

  /**
   * Get data.labels.position value
   * @param {String} id Data id value
   * @param {String} type x | y
   * @return {Number} Position value
   * @private
   */
  getTextPos: function getTextPos(id, type) {
    var pos = this.config.data_labels_position;
    return (id in pos ? pos[id] : pos)[type] || 0;
  },

  /**
   * Gets the x coordinate of the text
   * @private
   * @param {Object} points
   * @param {Object} data
   * @param {HTMLElement} element
   * @returns {Number} x coordinate
   */
  getXForText: function getXForText(points, d, textElement) {
    var xPos,
        padding,
        $$ = this,
        config = $$.config,
        state = $$.state,
        isRotated = config.axis_rotated;
    // show labels regardless of the domain if value is null
    if (isRotated ? (padding = $$.isBarType(d) ? 4 : 6, xPos = points[2][1] + padding * (d.value < 0 ? -1 : 1)) : xPos = $$.hasType("bar") ? (points[2][0] + points[0][0]) / 2 : points[0][0], d.value === null) if (xPos > state.width) {
      var _getBoundingRect = getBoundingRect(textElement),
          width = _getBoundingRect.width;

      xPos = state.width - width;
    } else xPos < 0 && (xPos = 4);
    return isRotated && (xPos += $$.getCenteredTextPos(d, points, textElement)), xPos + $$.getTextPos(d.id, "x");
  },

  /**
   * Gets the y coordinate of the text
   * @private
   * @param {Object} points
   * @param {Object} data
   * @param {HTMLElement} element
   * @returns {Number} y coordinate
   */
  getYForText: function getYForText(points, d, textElement) {
    var yPos,
        $$ = this,
        config = $$.config,
        state = $$.state,
        isRotated = config.axis_rotated,
        r = config.point_r,
        rect = getBoundingRect(textElement),
        baseY = 3;
    if (isRotated) yPos = (points[0][0] + points[2][0] + rect.height * .6) / 2;else if (yPos = points[2][1], isNumber(r) && r > 5 && ($$.isLineType(d) || $$.isScatterType(d)) && (baseY += config.point_r / 2.3), d.value < 0 || d.value === 0 && !state.hasPositiveValue && state.hasNegativeValue) yPos += rect.height + ($$.isBarType(d) ? -baseY : baseY);else {
      var diff = -baseY * 2;
      $$.isBarType(d) ? diff = -baseY : $$.isBubbleType(d) && (diff = baseY), yPos += diff;
    } // show labels regardless of the domain if value is null

    if (d.value === null && !isRotated) {
      var boxHeight = rect.height;
      yPos < boxHeight ? yPos = boxHeight : yPos > this.height && (yPos = this.height - 4);
    }

    return isRotated || (yPos += $$.getCenteredTextPos(d, points, textElement)), yPos + $$.getTextPos(d.id, "y");
  },

  /**
   * Calculate if two or more text nodes are overlapping
   * Mark overlapping text nodes with "text-overlapping" class
   * @private
   * @param {number} id
   * @param {ChartInternal} $$
   * @param {string} selector
   */
  markOverlapped: function markOverlapped(id, $$, selector) {
    var textNodes = $$.$el.arcs.selectAll(selector),
        filteredTextNodes = textNodes.filter(function (node) {
      return node.data.id !== id;
    }),
        textNode = textNodes.filter(function (node) {
      return node.data.id === id;
    }),
        translate = getTranslation(textNode.node()),
        calcHypo = function (x, y) {
      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    };

    textNode.node() && filteredTextNodes.each(function () {
      var coordinate = getTranslation(this),
          filteredTextNode = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
          nodeForWidth = calcHypo(translate.e, translate.f) > calcHypo(coordinate.e, coordinate.f) ? textNode : filteredTextNode,
          overlapsX = Math.ceil(Math.abs(translate.e - coordinate.e)) < Math.ceil(nodeForWidth.node().getComputedTextLength()),
          overlapsY = Math.ceil(Math.abs(translate.f - coordinate.f)) < parseInt(textNode.style("font-size"), 0);
      filteredTextNode.classed(config_classes.TextOverlapping, overlapsX && overlapsY);
    });
  },

  /**
   * Calculate if two or more text nodes are overlapping
   * Remove "text-overlapping" class on selected text nodes
   * @private
   * @param {ChartInternal} $$
   * @param {string} selector
   */
  undoMarkOverlapped: function undoMarkOverlapped($$, selector) {
    $$.$el.arcs.selectAll(selector).each(function () {
      Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["selectAll"])([this, this.previousSibling]).classed(config_classes.TextOverlapping, !1);
    });
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/title.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Get the text position
 * @param {String} pos right, left or center
 * @param {Number} width chart width
 * @return {String|Number} text-anchor value or position in pixel
 * @private
 */

function getTextPos(pos, width) {
  pos === void 0 && (pos = "left");
  var position,
      isNum = isNumber(width);
  return position = pos.indexOf("center") > -1 ? isNum ? width / 2 : "middle" : pos.indexOf("right") > -1 ? isNum ? width : "end" : isNum ? 0 : "start", position;
}

/* harmony default export */ var internals_title = ({
  /**
   * Initializes the title
   * @private
   */
  initTitle: function initTitle() {
    var $$ = this,
        config = $$.config,
        $el = $$.$el;

    if (config.title_text) {
      $el.title = $el.svg.append("g");
      var text = $el.title.append("text").style("text-anchor", getTextPos(config.title_position)).attr("class", config_classes.title);
      setTextValue(text, config.title_text, [.3, 1.5]);
    }
  },

  /**
   * Redraw title
   * @private
   */
  redrawTitle: function redrawTitle() {
    var $$ = this,
        config = $$.config,
        currentWidth = $$.state.currentWidth,
        title = $$.$el.title;

    if (title) {
      var y = $$.yForTitle.call($$);
      /g/i.test(title.node().tagName) ? title.attr("transform", "translate(" + getTextPos(config.title_position, currentWidth) + ", " + y + ")") : title.attr("x", $$.xForTitle.call($$)).attr("y", y);
    }
  },

  /**
   * Returns the x attribute value of the title
   * @private
   * @returns {Number} x attribute value
   */
  xForTitle: function xForTitle() {
    var x,
        $$ = this,
        config = $$.config,
        currentWidth = $$.state.currentWidth,
        position = config.title_position || "left",
        textRectWidth = $$.getTextRect($$.$el.title, config_classes.title).width;
    return /(right|center)/.test(position) ? (x = currentWidth - textRectWidth, position.indexOf("right") >= 0 ? x = currentWidth - textRectWidth - config.title_padding.right : position.indexOf("center") >= 0 && (x = (currentWidth - textRectWidth) / 2)) : x = config.title_padding.left || 0, x;
  },

  /**
   * Returns the y attribute value of the title
   * @private
   * @returns {Number} y attribute value
   */
  yForTitle: function yForTitle() {
    var $$ = this;
    return ($$.config.title_padding.top || 0) + $$.getTextRect($$.$el.title, config_classes.title).height;
  },

  /**
   * Get title padding
   * @private
   * @returns {Number} padding value
   */
  getTitlePadding: function getTitlePadding() {
    var $$ = this;
    return $$.yForTitle() + ($$.config.title_padding.bottom || 0);
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/tooltip.ts
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
    var $$ = this,
        config = $$.config,
        $el = $$.$el,
        bindto = config.tooltip_contents.bindto;

    // Show tooltip if needed
    if ($el.tooltip = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(bindto), $el.tooltip.empty() && ($el.tooltip = $el.chart.style("position", "relative").append("div").attr("class", config_classes.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none")), config.tooltip_init_show) {
      if ($$.isTimeSeries() && isString(config.tooltip_init_x)) {
        var i,
            val,
            targets = $$.data.targets[0];

        for (config.tooltip_init_x = parseDate.call($$, config.tooltip_init_x), i = 0; (val = targets.values[i]) && val.x - config.tooltip_init_x !== 0; i++);

        config.tooltip_init_x = i;
      }

      $el.tooltip.html($$.getTooltipHTML($$.data.targets.map(function (d) {
        return $$.addName(d.values[config.tooltip_init_x]);
      }), $$.axis.getXAxisTickFormat(), $$.getYFormat($$.hasArcType(null, ["radar"])), $$.color)), bindto || $el.tooltip.style("top", config.tooltip_init_position.top).style("left", config.tooltip_init_position.left).style("display", "block");
    }
  },

  /**
   * Get the tooltip HTML string
   * @param  {...any} args
   * @private
   * @return {String} Formatted HTML string
   */
  getTooltipHTML: function getTooltipHTML() {
    var $$ = this,
        config = $$.config;
    return isFunction(config.tooltip_contents) ? config.tooltip_contents.bind($$.api).apply(void 0, arguments) : $$.getTooltipContent.apply($$, arguments);
  },

  /**
   * Returns the tooltip content(HTML string)
   * @param {Object} d data
   * @param {Function} defaultTitleFormat Default title format
   * @param {Function} defaultValueFormat Default format for each data value in the tooltip.
   * @param {Function} color Color function
   * @returns {String} html
   * @private
   */
  getTooltipContent: function getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color) {
    var $$ = this,
        api = $$.api,
        config = $$.config,
        _map = ["title", "name", "value"].map(function (v) {
      var fn = config["tooltip_format_" + v];
      return isFunction(fn) ? fn.bind(api) : fn;
    }),
        titleFormat = _map[0],
        nameFormat = _map[1],
        valueFormat = _map[2];

    titleFormat = titleFormat || defaultTitleFormat, nameFormat = nameFormat || function (name) {
      return name;
    }, valueFormat = valueFormat || ($$.isStackNormalized() ? function (v, ratio) {
      return (ratio * 100).toFixed(2) + "%";
    } : defaultValueFormat);

    var order = config.tooltip_order,
        getRowValue = function (row) {
      return $$.axis && $$.isBubbleZType(row) ? $$.getBubbleZData(row.value, "z") : $$.getBaseValue(row);
    },
        getBgColor = $$.levelColor ? function (row) {
      return $$.levelColor(row.value);
    } : function (row) {
      return color(row);
    },
        contents = config.tooltip_contents,
        tplStr = contents.template,
        targetIds = $$.mapToTargetIds();

    if (order === null && config.data_groups.length) {
      // for stacked data, order should aligned with the visually displayed data
      var ids = $$.orderTargets($$.data.targets).map(function (i2) {
        return i2.id;
      }).reverse();
      d.sort(function (a, b) {
        var v1 = a ? a.value : null,
            v2 = b ? b.value : null;
        return v1 > 0 && v2 > 0 && (v1 = a.id ? ids.indexOf(a.id) : null, v2 = b.id ? ids.indexOf(b.id) : null), v1 - v2;
      });
    } else if (/^(asc|desc)$/.test(order)) {
      d.sort(function (a, b) {
        var v1 = a ? getRowValue(a) : null,
            v2 = b ? getRowValue(b) : null;
        return order === "asc" ? v1 - v2 : v2 - v1;
      });
    } else isFunction(order) && d.sort(order.bind(api));

    var text,
        row,
        param,
        value,
        i,
        tpl = $$.getTooltipContentTemplate(tplStr),
        len = d.length;

    for (i = 0; i < len; i++) if (row = d[i], row && (getRowValue(row) || getRowValue(row) === 0)) {
      if (isUndefined(text)) {
        var title = sanitise(titleFormat ? titleFormat(row.x) : row.x);
        text = tplProcess(tpl[0], {
          CLASS_TOOLTIP: config_classes.tooltip,
          TITLE: isValue(title) ? tplStr ? title : "<tr><th colspan=\"2\">" + title + "</th></tr>" : ""
        });
      }

      if (param = [row.ratio, row.id, row.index, d], value = sanitise(valueFormat.apply(void 0, [getRowValue(row)].concat(param))), $$.isAreaRangeType(row)) {
        var _map2 = ["high", "low"].map(function (v) {
          return sanitise(valueFormat.apply(void 0, [$$.getAreaRangeData(row, v)].concat(param)));
        }),
            high = _map2[0],
            low = _map2[1];

        value = "<b>Mid:</b> " + value + " <b>High:</b> " + high + " <b>Low:</b> " + low;
      }

      if (value !== undefined) {
        var _ret = function () {
          // Skip elements when their name is set to null
          if (row.name === null) return "continue";
          var name = sanitise(nameFormat.apply(void 0, [row.name].concat(param))),
              color = getBgColor(row),
              contentValue = {
            CLASS_TOOLTIP_NAME: config_classes.tooltipName + $$.getTargetSelectorSuffix(row.id),
            COLOR: tplStr || !$$.patterns ? color : "<svg><rect style=\"fill:" + color + "\" width=\"10\" height=\"10\"></rect></svg>",
            NAME: name,
            VALUE: value
          };

          if (tplStr && isObject(contents.text)) {
            var index = targetIds.indexOf(row.id);
            Object.keys(contents.text).forEach(function (key) {
              contentValue[key] = contents.text[key][index];
            });
          }

          text += tplProcess(tpl[1], contentValue);
        }();

        if (_ret === "continue") continue;
      }
    }

    return text + "</table>";
  },

  /**
   * Get the content template string
   * @param {String} tplStr
   * @return {String} Template string
   * @private
   */
  getTooltipContentTemplate: function getTooltipContentTemplate(tplStr) {
    return (tplStr || "<table class=\"{=CLASS_TOOLTIP}\"><tbody>\n\t\t\t\t{=TITLE}\n\t\t\t\t{{<tr class=\"{=CLASS_TOOLTIP_NAME}\">\n\t\t\t\t\t<td class=\"name\">" + (this.patterns ? "{=COLOR}" : "<span style=\"background-color:{=COLOR}\"></span>") + "{=NAME}</td>\n\t\t\t\t\t<td class=\"value\">{=VALUE}</td>\n\t\t\t\t</tr>}}\n\t\t\t</tbody></table>").replace(/(\r?\n|\t)/g, "").split(/{{(.*)}}/);
  },

  /**
   * Returns the position of the tooltip
   * @param {Object} dataToShow data
   * @param {String} tWidth Width value of tooltip element
   * @param {String} tHeight Height value of tooltip element
   * @param {HTMLElement} element
   * @returns {Object} top, left value
   * @private
   */
  tooltipPosition: function tooltipPosition(dataToShow, tWidth, tHeight, element) {
    var $$ = this,
        config = $$.config,
        scale = $$.scale,
        _$$$state = $$.state,
        width = _$$$state.width,
        height = _$$$state.height,
        currentWidth = _$$$state.currentWidth,
        currentHeight = _$$$state.currentHeight,
        isLegendRight = _$$$state.isLegendRight,
        inputType = _$$$state.inputType,
        hasGauge = $$.hasType("gauge") && !config.gauge_fullCircle,
        svgLeft = $$.getSvgLeft(!0),
        _d3Mouse = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(element),
        left = _d3Mouse[0],
        top = _d3Mouse[1],
        chartRight = svgLeft + currentWidth - $$.getCurrentPaddingRight();

    // Determine tooltip position
    if (top += 20, $$.hasArcType()) {
      var raw = inputType === "touch" || $$.hasType("radar");
      raw || (top += hasGauge ? height : height / 2, left += (width - (isLegendRight ? $$.getLegendWidth() : 0)) / 2);
    } else {
      var dataScale = scale.x(dataToShow[0].x);
      config.axis_rotated ? (top = dataScale + 20, left += svgLeft + 100, chartRight -= svgLeft) : (top -= 5, left = svgLeft + $$.getCurrentPaddingLeft(!0) + 20 + (scale.zoom ? left : dataScale));
    }

    var right = left + tWidth;
    return right > chartRight && (left -= right - chartRight + 20), top + tHeight > currentHeight && (top -= hasGauge ? tHeight * 3 : tHeight + 30), top < 0 && (top = 0), {
      top: top,
      left: left
    };
  },

  /**
   * Show the tooltip
   * @private
   * @param {Object} selectedData
   * @param {HTMLElement} element
   */
  showTooltip: function showTooltip(selectedData, element) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        tooltip = $$.$el.tooltip,
        bindto = config.tooltip_contents.bindto,
        forArc = $$.hasArcType(null, ["radar"]),
        dataToShow = selectedData.filter(function (d) {
      return d && isValue($$.getBaseValue(d));
    });

    if (dataToShow.length !== 0 && config.tooltip_show) {
      var datum = tooltip.datum(),
          dataStr = JSON.stringify(selectedData),
          _ref = datum || {},
          _ref$width = _ref.width,
          width = _ref$width === void 0 ? 0 : _ref$width,
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? 0 : _ref$height;

      if (!datum || datum.current !== dataStr) {
        var index = selectedData.concat().sort()[0].index;
        callFn(config.tooltip_onshow, $$.api, selectedData), tooltip.html($$.getTooltipHTML(selectedData, $$.axis && $$.axis.getXAxisTickFormat(), $$.getYFormat(forArc), $$.color)).style("display", null).style("visibility", null) // for IE9
        .datum({
          index: index,
          current: dataStr,
          width: width = tooltip.property("offsetWidth"),
          height: height = tooltip.property("offsetHeight")
        }), callFn(config.tooltip_onshown, $$.api, selectedData), $$._handleLinkedCharts(!0, index);
      }

      if (!bindto) {
        var unit,
            fn = config.tooltip_position;
        isFunction(fn) ? fn = fn.bind($$.api) : (unit = fn && fn.unit, fn = $$.tooltipPosition.bind($$));
        // Get tooltip dimensions
        var pos = fn(dataToShow, width, height, element);
        ["top", "left"].forEach(function (v) {
          var value = pos[v]; // when value is number

          if (/^\d+(\.\d+)?$/.test(value)) {
            if (unit === "%") {
              var size = state[v === "top" ? "currentHeight" : "currentWidth"];
              value = value / size * 100;
            } else unit = "px";

            value += unit;
          }

          tooltip.style(v, value);
        });
      }
    }
  },

  /**
   * Hide the tooltip
   * @param {Boolean} force Force to hide
   * @private
   */
  hideTooltip: function hideTooltip(force) {
    var $$ = this,
        config = $$.config,
        tooltip = $$.$el.tooltip;

    if (tooltip.style("display") !== "none" && (!config.tooltip_doNotHide || force)) {
      var selectedData = JSON.parse(tooltip.datum().current);
      // hide tooltip
      callFn(config.tooltip_onhide, $$.api, selectedData), tooltip.style("display", "none").style("visibility", "hidden") // for IE9
      .datum(null), callFn(config.tooltip_onhidden, $$.api, selectedData);
    }
  },

  /**
   * Toggle display for linked chart instances
   * @param {Boolean} show true: show, false: hide
   * @param {Number} index x Axis index
   * @private
   */
  _handleLinkedCharts: function _handleLinkedCharts(show, index) {
    var $$ = this,
        charts = $$.charts,
        config = $$.config;

    if (config.tooltip_linked && charts.length > 1) {
      var linkedName = config.tooltip_linked_name;
      charts.forEach(function (c) {
        if (c !== $$.api) {
          var _config = c.internal.config,
              isLinked = _config.tooltip_linked,
              name = _config.tooltip_linked_name,
              isInDom = browser_doc.body.contains(c.element);

          if (isLinked && linkedName === name && isInDom) {
            var data = c.internal.$el.tooltip.data()[0],
                isNotSameIndex = index !== (data && data.index);

            // prevent throwing error for non-paired linked indexes
            try {
              show && isNotSameIndex ? c.tooltip.show({
                index: index
              }) : !show && c.tooltip.hide();
            } catch (e) {}
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/transform.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var internals_transform = ({
  getTranslate: function getTranslate(target, index) {
    index === void 0 && (index = 0);
    var x,
        y,
        $$ = this,
        config = $$.config,
        state = $$.state,
        isRotated = config.axis_rotated,
        hasGauge = $$.hasType("gauge"),
        padding = 0;
    if (index && /^(x|y2?)$/.test(target) && (padding = $$.getAxisSize(target) * index), target === "main") x = asHalfPixel(state.margin.left), y = asHalfPixel(state.margin.top);else if (target === "context") x = asHalfPixel(state.margin2.left), y = asHalfPixel(state.margin2.top);else if (target === "legend") x = state.margin3.left, y = state.margin3.top + (hasGauge ? 10 : 0);else if (target === "x") x = isRotated ? -padding : 0, y = isRotated ? 0 : state.height + padding;else if (target === "y") x = isRotated ? 0 : -padding, y = isRotated ? state.height + padding : 0;else if (target === "y2") x = isRotated ? 0 : state.width + padding, y = isRotated ? 1 - padding : 0;else if (target === "subX") x = 0, y = isRotated ? 0 : state.height2;else if (target === "arc") x = state.arcWidth / 2, y = state.arcHeight / 2;else if (target === "radar") {
      var _$$$getRadarSize = $$.getRadarSize(),
          width = _$$$getRadarSize[0];

      x = state.width / 2 - width, y = asHalfPixel(state.margin.top);
    }
    return "translate(" + x + ", " + y + ")";
  },
  transformMain: function transformMain(withTransition, transitions) {
    var xAxis,
        yAxis,
        y2Axis,
        $$ = this,
        main = $$.$el.main;
    transitions && transitions.axisX ? xAxis = transitions.axisX : (xAxis = main.select("." + config_classes.axisX), withTransition && (xAxis = xAxis.transition())), transitions && transitions.axisY ? yAxis = transitions.axisY : (yAxis = main.select("." + config_classes.axisY), withTransition && (yAxis = yAxis.transition())), transitions && transitions.axisY2 ? y2Axis = transitions.axisY2 : (y2Axis = main.select("." + config_classes.axisY2), withTransition && (y2Axis = y2Axis.transition())), (withTransition ? main.transition() : main).attr("transform", $$.getTranslate("main")), xAxis.attr("transform", $$.getTranslate("x")), yAxis.attr("transform", $$.getTranslate("y")), y2Axis.attr("transform", $$.getTranslate("y2")), main.select("." + config_classes.chartArcs).attr("transform", $$.getTranslate("arc"));
  },
  transformAll: function transformAll(withTransition, transitions) {
    var $$ = this,
        config = $$.config,
        hasAxis = $$.state.hasAxis,
        $el = $$.$el;
    $$.transformMain(withTransition, transitions), hasAxis && config.subchart_show && $$.transformContext(withTransition, transitions), $el.legend && $$.transformLegend(withTransition);
  }
});
// CONCATENATED MODULE: ./src/config/const.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
// defined chart types as category
var TYPES = {
  Area: ["area", "area-spline", "area-spline-range", "area-line-range", "area-step"],
  AreaRange: ["area-spline-range", "area-line-range"],
  Arc: ["pie", "donut", "gauge", "radar"],
  Line: ["line", "spline", "area", "area-spline", "area-spline-range", "area-line-range", "step", "area-step"],
  Step: ["step", "area-step"],
  Spline: ["spline", "area-spline", "area-spline-range"]
};
// CONCATENATED MODULE: ./src/ChartInternal/internals/type.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var internals_type = ({
  setTargetType: function setTargetType(targetIds, type) {
    var $$ = this,
        config = $$.config,
        withoutFadeIn = $$.state.withoutFadeIn;
    $$.mapToTargetIds(targetIds).forEach(function (id) {
      withoutFadeIn[id] = type === config.data_types[id], config.data_types[id] = type;
    }), targetIds || (config.data_type = type);
  },
  hasType: function hasType(type, targetsValue) {
    var $$ = this,
        config = $$.config,
        types = config.data_types,
        targets = targetsValue || $$.data.targets,
        has = !1;
    return targets && targets.length ? targets.forEach(function (target) {
      var t = types[target.id];
      (t && t.indexOf(type) >= 0 || !t && type === "line") && (has = !0);
    }) : Object.keys(types).length ? Object.keys(types).forEach(function (id) {
      types[id] === type && (has = !0);
    }) : has = config.data_type === type, has;
  },

  /**
   * Check if contains given chart types
   * @parma {String} type Type key
   * @param {Object} targets
   * @param {Array} exclude Excluded types
   * @return {boolean}
   * @private
   */
  hasTypeOf: function hasTypeOf(type, targets, exclude) {
    var _this = this;

    return exclude === void 0 && (exclude = []), !TYPES[type] // @ts-ignore
    .filter(function (v) {
      return exclude.indexOf(v) === -1;
    }).every(function (v) {
      return !_this.hasType(v, targets);
    });
  },

  /**
   * Check if given data is certain chart type
   * @param {Object} d Data object
   * @param {String|Array} type chart type
   * @return {Boolean}
   * @private
   */
  isTypeOf: function isTypeOf(d, type) {
    var id = isString(d) ? d : d.id,
        dataType = this.config.data_types[id];
    return isArray(type) ? type.indexOf(dataType) >= 0 : dataType === type;
  },
  hasPointType: function hasPointType() {
    var $$ = this;
    return $$.hasTypeOf("Line") || $$.hasType("bubble") || $$.hasType("scatter");
  },

  /**
   * Check if contains arc types chart
   * @param {Object} targets
   * @param {Array} exclude Excluded types
   * @return {boolean}
   * @private
   */
  hasArcType: function hasArcType(targets, exclude) {
    return this.hasTypeOf("Arc", targets, exclude);
  },
  hasMultiArcGauge: function hasMultiArcGauge() {
    return this.hasType("gauge") && this.config.gauge_type === "multi";
  },
  isLineType: function isLineType(d) {
    var id = isString(d) ? d : d.id;
    return !this.config.data_types[id] || this.isTypeOf(id, TYPES.Line);
  },
  isStepType: function isStepType(d) {
    return this.isTypeOf(d, TYPES.Step);
  },
  isSplineType: function isSplineType(d) {
    return this.isTypeOf(d, TYPES.Spline);
  },
  isAreaType: function isAreaType(d) {
    return this.isTypeOf(d, TYPES.Area);
  },
  isAreaRangeType: function isAreaRangeType(d) {
    return this.isTypeOf(d, TYPES.AreaRange);
  },
  isBarType: function isBarType(d) {
    return this.isTypeOf(d, "bar");
  },
  isBubbleType: function isBubbleType(d) {
    return this.isTypeOf(d, "bubble");
  },
  isScatterType: function isScatterType(d) {
    return this.isTypeOf(d, "scatter");
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
  isRadarType: function isRadarType(d) {
    return this.isTypeOf(d, "radar");
  },
  isArcType: function isArcType(d) {
    return this.isPieType(d) || this.isDonutType(d) || this.isGaugeType(d) || this.isRadarType(d);
  },
  // determine if is 'circle' data point
  isCirclePoint: function isCirclePoint() {
    var config = this.config,
        pattern = config.point_pattern;
    return config.point_type === "circle" && (!pattern || isArray(pattern) && pattern.length === 0);
  },
  lineData: function lineData(d) {
    return this.isLineType(d) ? [d] : [];
  },
  arcData: function arcData(d) {
    return this.isArcType(d.data) ? [d] : [];
  },
  barData: function barData(d) {
    return this.isBarType(d) ? d.values : [];
  },

  /**
   * Get data adapt for data label showing
   * @param {Object} d Data object
   * @return {Array}
   * @private
   */
  labelishData: function labelishData(d) {
    return this.isBarType(d) || this.isLineType(d) || this.isScatterType(d) || this.isBubbleType(d) || this.isRadarType(d) ? d.values : [];
  },
  barLineBubbleData: function barLineBubbleData(d) {
    return this.isBarType(d) || this.isLineType(d) || this.isBubbleType(d) ? d.values : [];
  },
  // https://github.com/d3/d3-shape#curves
  isInterpolationType: function isInterpolationType(type) {
    return ["basis", "basis-closed", "basis-open", "bundle", "cardinal", "cardinal-closed", "cardinal-open", "catmull-rom", "catmull-rom-closed", "catmull-rom-open", "linear", "linear-closed", "monotone-x", "monotone-y", "natural"].indexOf(type) >= 0;
  }
});
// CONCATENATED MODULE: ./src/Chart/api/axis.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Set the min/max value
 * @param {Chart} $$
 * @param {String} type
 * @param {Object} value
 * @return {undefined}
 * @private
 */

function setMinMax($$, type, value) {
  var config = $$.config,
      axisY = "axis_y_" + type,
      axisY2 = "axis_y2_" + type;
  return isDefined(value) && (isObjectType(value) ? (isValue(value.x) && (config["axis_x_" + type] = value.x), isValue(value.y) && (config[axisY] = value.y), isValue(value.y2) && (config[axisY2] = value.y2)) : (config[axisY] = value, config[axisY2] = value), $$.redraw({
    withUpdateOrgXDomain: !0,
    withUpdateXDomain: !0
  })), undefined;
}
/**
 * Get the min/max value
 * @param {Chart} $$
 * @param {String} type
 * @return {{x, y, y2}}
 * @private
 */


function axis_getMinMax($$, type) {
  var config = $$.config;
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


var api_axis_axis = {
  /**
   * Get and set axis labels.
   * @method axis․labels
   * @instance
   * @memberof Chart
   * @param {Object} labels specified axis' label to be updated.
   * @example
   * // Update axis' label
   * chart.axis.labels({
   *   x: "New X Axis Label",
   *   y: "New Y Axis Label"
   * });
   */
  labels: function labels(_labels) {
    var $$ = this.internal;
    arguments.length && (Object.keys(_labels).forEach(function (axisId) {
      $$.axis.setLabelText(axisId, _labels[axisId]);
    }), $$.axis.updateLabels());
  },

  /**
   * Get and set axis min value.
   * @method axis․min
   * @instance
   * @memberof Chart
   * @param {Object} min If min is given, specified axis' min value will be updated.<br>
   *     If no argument is given, the min values set on generating option for each axis will be returned.
   *     If not set any min values on generation, it will return `undefined`.
   * @example
   * // Update axis' min
   * chart.axis.min({
   *   x: -10,
   *   y: 1000,
   *   y2: 100
   * });
   */
  min: function min(_min) {
    var $$ = this.internal;
    return isValue(_min) ? setMinMax($$, "min", _min) : axis_getMinMax($$, "min");
  },

  /**
   * Get and set axis max value.
   * @method axis․max
   * @instance
   * @memberof Chart
   * @param {Object} max If max is given, specified axis' max value will be updated.<br>
   *     If no argument is given, the max values set on generating option for each axis will be returned.
   *     If not set any max values on generation, it will return `undefined`.
   * @example
   * // Update axis' label
   * chart.axis.max({
   *    x: 100,
   *    y: 1000,
   *    y2: 10000
   * });
   */
  max: function max(_max) {
    var $$ = this.internal;
    return arguments.length ? setMinMax($$, "max", _max) : axis_getMinMax($$, "max");
  },

  /**
   * Get and set axis min and max value.
   * @method axis․range
   * @instance
   * @memberof Chart
   * @param {Object} range If range is given, specified axis' min and max value will be updated. If no argument is given, the current min and max values for each axis will be returned.
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
   */
  range: function range(_range) {
    var axis = this.axis;
    if (arguments.length) isDefined(_range.max) && axis.max(_range.max), isDefined(_range.min) && axis.min(_range.min);else return {
      max: axis.max(),
      min: axis.min()
    };
    return undefined;
  }
};
/* harmony default export */ var api_axis = ({
  axis: api_axis_axis
});
// CONCATENATED MODULE: ./src/Chart/api/category.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/* harmony default export */ var category = ({
  /**
   * Set specified category name on category axis.
   * @method category
   * @instance
   * @memberof Chart
   * @param {Number} i index of category to be changed
   * @param {String} category category value to be changed
   * @example
   * chart.category(2, "Category 3");
   */
  category: function category(i, _category) {
    var $$ = this.internal,
        config = $$.config;
    return arguments.length > 1 && (config.axis_x_categories[i] = _category, $$.redraw()), config.axis_x_categories[i];
  },

  /**
   * Set category names on category axis.
   * @method categories
   * @instance
   * @memberof Chart
   * @param {Array} categories This must be an array that includes category names in string. If category names are included in the date by data.x option, this is not required.
   * @example
   * chart.categories([
   *      "Category 1", "Category 2", ...
   * ]);
   */
  categories: function categories(_categories) {
    var $$ = this.internal,
        config = $$.config;
    return arguments.length ? (config.axis_x_categories = _categories, $$.redraw(), config.axis_x_categories) : config.axis_x_categories;
  }
});
// CONCATENATED MODULE: ./src/Chart/api/flow.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var api_flow = ({
  /**
   * Flow data to the chart.<br><br>
   * By this API, you can append new data points to the chart.
   * @method flow
   * @instance
   * @memberof Chart
   * @param {Object} args The object can consist with following members:<br>
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
    var data,
        domain,
        diff,
        to,
        $$ = this.internal,
        length = 0,
        tail = 0;

    if ((args.json || args.rows || args.columns) && (data = $$.convertData(args)), data && isTabVisible()) {
      var notfoundIds = [],
          orgDataCount = $$.getMaxDataCount(),
          targets = $$.convertDataToTargets(data, !0);
      $$.data.targets.forEach(function (t) {
        for (var found = !1, i = 0; i < targets.length; i++) if (t.id === targets[i].id) {
          found = !0, t.values[t.values.length - 1] && (tail = t.values[t.values.length - 1].index + 1), length = targets[i].values.length;

          for (var _j3 = 0; _j3 < length; _j3++) targets[i].values[_j3].index = tail + _j3, $$.isTimeSeries() || (targets[i].values[_j3].x = tail + _j3);

          t.values = t.values.concat(targets[i].values), targets.splice(i, 1);
          break;
        }

        found || notfoundIds.push(t.id);
      }), $$.data.targets.forEach(function (t) {
        for (var _i = 0; _i < notfoundIds.length; _i++) if (t.id === notfoundIds[_i]) {
          tail = t.values[t.values.length - 1].index + 1;

          for (var _j4 = 0; _j4 < length; _j4++) t.values.push({
            id: t.id,
            index: tail + _j4,
            x: $$.isTimeSeries() ? $$.getOtherTargetX(tail + _j4) : tail + _j4,
            value: null
          });
        }
      }), $$.data.targets.length && targets.forEach(function (t) {
        for (var missing = [], i = $$.data.targets[0].values[0].index; i < tail; i++) missing.push({
          id: t.id,
          index: i,
          x: $$.isTimeSeries() ? $$.getOtherTargetX(i) : i,
          value: null
        });

        t.values.forEach(function (v) {
          v.index += tail, $$.isTimeSeries() || (v.x += tail);
        }), t.values = missing.concat(t.values);
      }), $$.data.targets = $$.data.targets.concat(targets);
      // add remained
      // check data count because behavior needs to change when it"s only one
      // const dataCount = $$.getMaxDataCount();
      var baseTarget = $$.data.targets[0],
          baseValue = baseTarget.values[0];
      isDefined(args.to) ? (length = 0, to = $$.isTimeSeries() ? parseDate.call($$, args.to) : args.to, baseTarget.values.forEach(function (v) {
        v.x < to && length++;
      })) : isDefined(args.length) && (length = args.length), orgDataCount ? orgDataCount === 1 && $$.isTimeSeries() && (diff = (baseTarget.values[baseTarget.values.length - 1].x - baseValue.x) / 2, domain = [new Date(+baseValue.x - diff), new Date(+baseValue.x + diff)]) : (diff = $$.isTimeSeries() ? baseTarget.values.length > 1 ? baseTarget.values[baseTarget.values.length - 1].x - baseValue.x : baseValue.x - $$.getXDomain($$.data.targets)[0] : 1, domain = [baseValue.x - diff, baseValue.x]), domain && $$.updateXDomain(null, !0, !0, !1, domain), $$.updateTargets($$.data.targets), $$.redraw({
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
// CONCATENATED MODULE: ./src/Chart/api/grid.x.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Update x grid lines.
 * @method xgrids
 * @instance
 * @memberof Chart
 * @param {Array} grids X grid lines will be replaced with this argument. The format of this argument is the same as grid.x.lines.
 * @example
 *  // Show 2 x grid lines
 * chart.xgrids([
 *    {value: 1, text: "Label 1"},
 *    {value: 4, text: "Label 4"}
 * ]);
 */

function xgrids(grids) {
  var $$ = this.internal,
      config = $$.config;
  return grids ? (config.grid_x_lines = grids, $$.redrawWithoutRescale(), config.grid_x_lines) : config.grid_x_lines;
}

extend(xgrids, {
  /**
   * Add x grid lines.<br>
   * This API adds new x grid lines instead of replacing like xgrids.
   * @method xgrids․add
   * @instance
   * @memberof Chart
   * @param {Array|Object} grids New x grid lines will be added. The format of this argument is the same as grid.x.lines and it's possible to give an Object if only one line will be added.
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
    return this.xgrids(this.internal.config.grid_x_lines.concat(grids || []));
  },

  /**
   * Remove x grid lines.<br>
   * This API removes x grid lines.
   * @method xgrids․remove
   * @instance
   * @memberof Chart
   * @param {Object} params This argument should include value or class. If value is given, the x grid lines that have specified x value will be removed. If class is given, the x grid lines that have specified class will be removed. If args is not given, all of x grid lines will be removed.
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
  remove: function remove(params) {
    // TODO: multiple
    this.internal.removeGridLines(params, !0);
  }
});
/* harmony default export */ var grid_x = ({
  xgrids: xgrids
});
// CONCATENATED MODULE: ./src/Chart/api/grid.y.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Update y grid lines.
 * @method ygrids
 * @instance
 * @memberof Chart
 * @param {Array} grids Y grid lines will be replaced with this argument. The format of this argument is the same as grid.y.lines.
 * @example
 *  // Show 2 y grid lines
 * chart.ygrids([
 *    {value: 100, text: "Label 1"},
 *    {value: 400, text: "Label 4"}
 * ]);
 */

function ygrids(grids) {
  var $$ = this.internal,
      config = $$.config;
  if (!grids) return config.grid_y_lines;
  config.grid_y_lines = grids;

  http: //jindo.com/git/billboard.js/demo/work/chart.html
  $$.redrawWithoutRescale();

  return config.grid_y_lines;
}

extend(ygrids, {
  /**
   * Add y grid lines.<br>
   * This API adds new y grid lines instead of replacing like ygrids.
   * @method ygrids․add
   * @instance
   * @memberof Chart
   * @param {Array|Object} grids New y grid lines will be added. The format of this argument is the same as grid.y.lines and it's possible to give an Object if only one line will be added.
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
    return this.ygrids(this.internal.config.grid_y_lines.concat(grids || []));
  },

  /**
   * Remove y grid lines.<br>
   * This API removes x grid lines.
   * @method ygrids․remove
   * @instance
   * @memberof Chart
   * @param {Object} params This argument should include value or class. If value is given, the y grid lines that have specified y value will be removed. If class is given, the y grid lines that have specified class will be removed. If args is not given, all of y grid lines will be removed.
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
  remove: function remove(params) {
    // TODO: multiple
    this.internal.removeGridLines(params, !1);
  }
});
/* harmony default export */ var grid_y = ({
  ygrids: ygrids
});
// CONCATENATED MODULE: ./src/Chart/api/group.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var group = ({
  /**
   * Update groups for the targets.
   * @method groups
   * @instance
   * @memberof Chart
   * @param {Array} groups This argument needs to be an Array that includes one or more Array that includes target ids to be grouped.
   * @return {Array} Grouped data names array
   * @example
   *  // data1 and data2 will be a new group.
   *  chart.groups([
   *     ["data1", "data2"]
   *  ]);
   */
  groups: function groups(_groups) {
    var $$ = this.internal,
        config = $$.config;
    return isUndefined(_groups) ? config.data_groups : (config.data_groups = _groups, $$.redraw(), config.data_groups);
  }
});
// CONCATENATED MODULE: ./src/Chart/api/regions.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Update regions.
 * @method regions
 * @instance
 * @memberof Chart
 * @param {Array} regions Regions will be replaced with this argument. The format of this argument is the same as regions.
 * @return {Array} regions
 * @example
 * // Show 2 regions
 * chart.regions([
 *    {axis: "x", start: 5, class: "regionX"},
 *    {axis: "y", end: 50, class: "regionY"}
 * ]);
 */

function regions_regions(regions) {
  var $$ = this.internal,
      config = $$.config;
  return regions ? (config.regions = regions, $$.redrawWithoutRescale(), regions) : config.regions;
}

extend(regions_regions, {
  /**
   * Add new region.<br><br>
   * This API adds new region instead of replacing like regions.
   * @method regions․add
   * @instance
   * @memberof Chart
   * @param {Array|Object} regions New region will be added. The format of this argument is the same as regions and it's possible to give an Object if only one region will be added.
   * @return {Array} regions
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
    var $$ = this.internal,
        config = $$.config;
    return regions ? (config.regions = config.regions.concat(regions), $$.redrawWithoutRescale(), config.regions) : config.regions;
  },

  /**
   * Remove regions.<br><br>
   * This API removes regions.
   * @method regions․remove
   * @instance
   * @memberof Chart
   * @param {Object} regions This argument should include classes. If classes is given, the regions that have one of the specified classes will be removed. If args is not given, all of regions will be removed.
   * @return {Array} regions Removed regions
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
    var $$ = this.internal,
        config = $$.config,
        options = optionsValue || {},
        duration = getOption(options, "duration", config.transition_duration),
        classes = getOption(options, "classes", [config_classes.region]),
        regions = $$.$el.main.select("." + config_classes.regions).selectAll(classes.map(function (c) {
      return "." + c;
    }));
    return (duration ? regions.transition().duration(duration) : regions).style("opacity", "0").remove(), regions = config.regions, Object.keys(options).length ? (regions = regions.filter(function (region) {
      var found = !1;
      return !region.class || (region.class.split(" ").forEach(function (c) {
        classes.indexOf(c) >= 0 && (found = !0);
      }), !found);
    }), config.regions = regions) : config.regions = [], regions;
  }
});
/* harmony default export */ var api_regions = ({
  regions: regions_regions
});
// CONCATENATED MODULE: ./src/Chart/api/selection.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var api_selection = ({
  /**
   * Get selected data points.<br><br>
   * By this API, you can get selected data points information. To use this API, data.selection.enabled needs to be set true.
   * @method selected
   * @instance
   * @memberof Chart
   * @param {String} [targetId] You can filter the result by giving target id that you want to get. If not given, all of data points will be returned.
   * @return {Array} dataPoint Array of the data points.<br>ex.) `[{x: 1, value: 200, id: "data1", index: 1, name: "data1"}, ...]`
   * @example
   *  // all selected data points will be returned.
   *  chart.selected();
   *  // --> ex.) [{x: 1, value: 200, id: "data1", index: 1, name: "data1"}, ... ]
   *
   *  // all selected data points of data1 will be returned.
   *  chart.selected("data1");
   */
  selected: function selected(targetId) {
    var $$ = this.internal,
        dataPoint = [];
    return $$.$el.main.selectAll("." + (config_classes.shapes + $$.getTargetSelectorSuffix(targetId))).selectAll("." + config_classes.shape).filter(function () {
      return Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).classed(config_classes.SELECTED);
    }).each(function (d) {
      return dataPoint.push(d);
    }), dataPoint;
  },

  /**
   * Set data points to be selected. (`[data.selection.enabled](Options.html#.data%25E2%2580%25A4selection%25E2%2580%25A4enabled) option should be set true to use this method)`
   * @method select
   * @instance
   * @memberof Chart
   * @param {String|Array} [ids] id value to get selected.
   * @param {Array} [indices] The index array of data points. If falsy value given, will select all data points.
   * @param {Boolean} [resetOther] Unselect already selected.
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
    var $$ = this.internal,
        config = $$.config,
        $el = $$.$el;
    config.data_selection_enabled && $el.main.selectAll("." + config_classes.shapes).selectAll("." + config_classes.shape).each(function (d, i) {
      var shape = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
          id = d.data ? d.data.id : d.id,
          toggle = $$.getToggle(this, d).bind($$),
          isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
          isTargetIndex = !indices || indices.indexOf(i) >= 0,
          isSelected = shape.classed(config_classes.SELECTED);
      // line/area selection not supported yet
      shape.classed(config_classes.line) || shape.classed(config_classes.area) || (isTargetId && isTargetIndex ? config.data_selection_isselectable.bind($$.api)(d) && !isSelected && toggle(!0, shape.classed(config_classes.SELECTED, !0), d, i) : isDefined(resetOther) && resetOther && isSelected && toggle(!1, shape.classed(config_classes.SELECTED, !1), d, i));
    });
  },

  /**
   * Set data points to be un-selected.
   * @method unselect
   * @instance
   * @memberof Chart
   * @param {String|Array} [ids] id value to be unselected.
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
    var $$ = this.internal,
        config = $$.config,
        $el = $$.$el;
    config.data_selection_enabled && $el.main.selectAll("." + config_classes.shapes).selectAll("." + config_classes.shape).each(function (d, i) {
      var shape = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
          id = d.data ? d.data.id : d.id,
          toggle = $$.getToggle(this, d).bind($$),
          isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
          isTargetIndex = !indices || indices.indexOf(i) >= 0,
          isSelected = shape.classed(config_classes.SELECTED);
      // line/area selection not supported yet
      shape.classed(config_classes.line) || shape.classed(config_classes.area) || isTargetId && isTargetIndex && config.data_selection_isselectable.bind($$.api)(d) && isSelected && toggle(!1, shape.classed(config_classes.SELECTED, !1), d, i);
    });
  }
});
// CONCATENATED MODULE: ./src/Chart/api/x.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var api_x = ({
  /**
   * Get and set x values for the chart.
   * @method x
   * @instance
   * @memberof Chart
   * @param {Array} x If x is given, x values of every target will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
   * @return {Object} xs
   * @example
   *  // Get current x values
   *  chart.x();
   *
   *  // Update x values for all targets
   *  chart.x([100, 200, 300, 400, ...]);
   */
  x: function x(_x) {
    var $$ = this.internal,
        isCategorized = $$.isCustomX() && $$.isCategorized();
    return isArray(_x) && (isCategorized ? this.categories(_x) : ($$.updateTargetX($$.data.targets, _x), $$.redraw({
      withUpdateOrgXDomain: !0,
      withUpdateXDomain: !0
    }))), isCategorized ? this.categories() : $$.data.xs;
  },

  /**
   * Get and set x values for the chart.
   * @method xs
   * @instance
   * @memberof Chart
   * @param {Array} xs If xs is given, specified target's x values will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
   * @return {Object} xs
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
    var $$ = this.internal;
    return isObject(_xs) && ($$.updateTargetXs($$.data.targets, _xs), $$.redraw({
      withUpdateOrgXDomain: !0,
      withUpdateXDomain: !0
    })), $$.data.xs;
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-zoom","commonjs2":"d3-zoom","amd":"d3-zoom","root":"d3"}
var external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_ = __webpack_require__(44);

// CONCATENATED MODULE: ./src/Chart/api/zoom.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/**
 * Check if the given domain is within zoom range
 * @param {Array} domain
 * @return {Boolean}
 * @private
 */

function withinRange(domain, range) {
  var min = range[0],
      max = range[1];
  return domain.every(function (v, i) {
    return i === 0 ? v >= min : v <= max;
  });
}

/**
 * Zoom by giving x domain.
 * - **NOTE:**
 *  - For `wheel` type zoom, the minimum zoom range will be set as the given domain. To get the initial state, [.unzoom()](#unzoom) should be called.
 *  - To be used [zoom.enabled](Options.html#.zoom) option should be set as `truthy`.
 * @method zoom
 * @instance
 * @memberof Chart
 * @param {Array} domainValue If domain is given, the chart will be zoomed to the given domain. If no argument is given, the current zoomed domain will be returned.
 * @return {Array} domain value in array
 * @example
 *  // Zoom to specified domain
 *  chart.zoom([10, 20]);
 *
 *  // Get the current zoomed domain
 *  chart.zoom();
 */
var zoom_zoom = function (domainValue) {
  var resultDomain,
      $$ = this.internal,
      config = $$.config,
      scale = $$.scale,
      domain = domainValue;

  if (config.zoom_enabled && domain && withinRange(domain, $$.getZoomDomain())) {
    var isTimeSeries = $$.isTimeSeries();

    if (isTimeSeries) {
      var fn = parseDate.bind($$);
      domain = domain.map(function (x) {
        return fn(x);
      });
    }

    if (config.subchart_show) {
      var xScale = scale.zoom || scale.x;
      $$.brush.getSelection().call($$.brush.move, [xScale(domain[0]), xScale(domain[1])]), resultDomain = domain;
    } else scale.x.domain(domain), scale.zoom = scale.x, $$.axis.x.scale(scale.zoom), resultDomain = scale.zoom.orgDomain();

    $$.redraw({
      withTransition: !0,
      withY: config.zoom_rescale,
      withDimension: !1
    }), $$.setZoomResetButton(), callFn(config.zoom_onzoom, $$.api, resultDomain);
  } else resultDomain = scale.zoom ? scale.zoom.domain() : scale.x.orgDomain();

  return resultDomain;
};

extend(zoom_zoom, {
  /**
   * Enable and disable zooming.
   * @method zoom․enable
   * @instance
   * @memberof Chart
   * @param {String|Boolean} enabled Possible string values are "wheel" or "drag". If enabled is true, "wheel" will be used. If false is given, zooming will be disabled.<br>When set to false, the current zooming status will be reset.
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
    var $$ = this.internal,
        config = $$.config,
        enableType = enabled;
    enabled && (enableType = isString(enabled) && /^(drag|wheel)$/.test(enabled) ? {
      type: enabled
    } : enabled), config.zoom_enabled = enableType, $$.zoom ? enabled === !1 && $$.bindZoomEvent(!1) : ($$.initZoom(), $$.bindZoomEvent()), $$.updateAndRedraw();
  },

  /**
   * Set or get x Axis maximum zoom range value
   * @method zoom․max
   * @instance
   * @memberof Chart
   * @param {Number} [max] maximum value to set for zoom
   * @return {Number} zoom max value
   * @example
   *  // Set maximum range value
   *  chart.zoom.max(20);
   */
  max: function max(_max) {
    var $$ = this.internal,
        config = $$.config,
        xDomain = $$.org.xDomain;
    return (_max === 0 || _max) && (config.zoom_x_max = getMinMax("max", [xDomain[1], _max])), config.zoom_x_max;
  },

  /**
   * Set or get x Axis minimum zoom range value
   * @method zoom․min
   * @instance
   * @memberof Chart
   * @param {Number} [min] minimum value to set for zoom
   * @return {Number} zoom min value
   * @example
   *  // Set minimum range value
   *  chart.zoom.min(-1);
   */
  min: function min(_min) {
    var $$ = this.internal,
        config = $$.config,
        xDomain = $$.org.xDomain;
    return (_min === 0 || _min) && (config.zoom_x_min = getMinMax("min", [xDomain[0], _min])), config.zoom_x_min;
  },

  /**
   * Set zoom range
   * @method zoom․range
   * @instance
   * @memberof Chart
   * @param {Object} [range]
   * @return {Object} zoom range value
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
    var zoom = this.zoom;

    if (isObject(_range)) {
      var min = _range.min,
          max = _range.max;
      isDefined(min) && zoom.min(min), isDefined(max) && zoom.max(max);
    }

    return {
      min: zoom.min(),
      max: zoom.max()
    };
  }
});
/* harmony default export */ var api_zoom = ({
  zoom: zoom_zoom,

  /**
   * Unzoom zoomed area
   * @method unzoom
   * @instance
   * @memberof Chart
   * @example
   *  chart.unzoom();
   */
  unzoom: function unzoom() {
    var $$ = this.internal,
        config = $$.config;

    if ($$.scale.zoom) {
      config.subchart_show ? $$.brush.getSelection().call($$.brush.move, null) : $$.zoom.updateTransformScale(external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_["zoomIdentity"]), $$.updateZoom(!0), $$.zoom.resetBtn && $$.zoom.resetBtn.style("display", "none");
      // reset transform
      var eventRects = $$.$el.main.select("." + config_classes.eventRects);
      Object(external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_["zoomTransform"])(eventRects.node()) !== external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_["zoomIdentity"] && $$.zoom.transform(eventRects, external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_["zoomIdentity"]), $$.redraw({
        withTransition: !0,
        withUpdateXDomain: !0,
        withUpdateOrgXDomain: !0,
        withY: config.zoom_rescale
      });
    }
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/interactions/drag.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var interactions_drag = ({
  /**
   * Called when dragging.
   * Data points can be selected.
   * @private
   * @param {Object} mouse Object
   */
  drag: function drag(mouse) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        main = $$.$el.main;

    if (!$$.hasArcType() && config.data_selection_enabled && ( // do nothing if not selectable
    !config.zoom_enabled || $$.zoom.altDomain) && config.data_selection_multiple // skip when single selection because drag is used for multiple selection
    ) {
        var _state$dragStart = state.dragStart,
            sx = _state$dragStart[0],
            sy = _state$dragStart[1],
            mx = mouse[0],
            my = mouse[1],
            minX = Math.min(sx, mx),
            maxX = Math.max(sx, mx),
            minY = config.data_selection_grouped ? state.margin.top : Math.min(sy, my),
            maxY = config.data_selection_grouped ? state.height : Math.max(sy, my);
        main.select("." + config_classes.dragarea).attr("x", minX).attr("y", minY).attr("width", maxX - minX).attr("height", maxY - minY), main.selectAll("." + config_classes.shapes).selectAll("." + config_classes.shape).filter(function (d) {
          return config.data_selection_isselectable.bind($$.api)(d);
        }).each(function (d, i) {
          var toggle,
              shape = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
              isSelected = shape.classed(config_classes.SELECTED),
              isIncluded = shape.classed(config_classes.INCLUDED),
              isWithin = !1;

          if (shape.classed(config_classes.circle)) {
            var x = +shape.attr("cx") * 1,
                y = +shape.attr("cy") * 1;
            toggle = $$.togglePoint, isWithin = minX < x && x < maxX && minY < y && y < maxY;
          } else if (shape.classed(config_classes.bar)) {
            var _getPathBox = getPathBox(this),
                _x = _getPathBox.x,
                y = _getPathBox.y,
                width = _getPathBox.width,
                height = _getPathBox.height;

            toggle = $$.togglePath, isWithin = !(maxX < _x || _x + width < minX) && !(maxY < y || y + height < minY);
          } else // line/area selection not supported yet
            return; // @ts-ignore


          isWithin ^ isIncluded && (shape.classed(config_classes.INCLUDED, !isIncluded), shape.classed(config_classes.SELECTED, !isSelected), toggle.call($$, !isSelected, shape, d, i));
        });
      }
  },

  /**
   * Called when the drag starts.
   * Adds and Shows the drag area.
   * @private
   * @param {Object} mouse Object
   */
  dragstart: function dragstart(mouse) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        main = $$.$el.main;
    $$.hasArcType() || !config.data_selection_enabled || (state.dragStart = mouse, main.select("." + config_classes.chart).append("rect").attr("class", config_classes.dragarea).style("opacity", "0.1"), $$.setDragStatus(!0));
  },

  /**
   * Called when the drag finishes.
   * Removes the drag area.
   * @private
   */
  dragend: function dragend() {
    var $$ = this,
        config = $$.config,
        main = $$.$el.main;
    $$.hasArcType() || !config.data_selection_enabled || (main.select("." + config_classes.dragarea).transition().duration(100).style("opacity", "0").remove(), main.selectAll("." + config_classes.shape).classed(config_classes.INCLUDED, !1), $$.setDragStatus(!1));
  },
  setDragStatus: function setDragStatus(isDragging) {
    this.dragging = isDragging;
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-ease","commonjs2":"d3-ease","amd":"d3-ease","root":"d3"}
var external_commonjs_d3_ease_commonjs2_d3_ease_amd_d3_ease_root_d3_ = __webpack_require__(45);

// CONCATENATED MODULE: ./src/ChartInternal/interactions/flow.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var interactions_flow = ({
  /**
   * Generate flow
   * @param {Object} args
   * @return {Function}
      * @private
   */
  generateFlow: function generateFlow(args) {
    var $$ = this,
        data = $$.data,
        state = $$.state,
        $el = $$.$el;
    return function () {
      var flowLength = args.flow.length; // set flag

      state.flowing = !0, data.targets.forEach(function (d) {
        d.values.splice(0, flowLength);
      }), $$.updateXGrid && $$.updateXGrid(!0);
      // target elements
      var elements = {};
      ["axis.x", "grid.x", "gridLines.x", "region.list", "text", "bar", "line", "area", "circle"].forEach(function (v) {
        var name = v.split("."),
            node = $el[name[0]];
        node && name.length > 1 && (node = node[name[1]]), node && node.size() && (elements[v] = node);
      }), $$.hideGridFocus(), $$.setFlowList(elements, args);
    };
  },

  /**
   * Set flow list
   * @param elements {Object} Target elements
   * @param args {Object}
   * @private
   */
  setFlowList: function setFlowList(elements, args) {
    var $$ = this,
        flow = args.flow,
        targets = args.targets,
        _flow = flow,
        _flow$duration = _flow.duration,
        duration = _flow$duration === void 0 ? args.duration : _flow$duration,
        flowIndex = _flow.index,
        flowLength = _flow.length,
        orgDataCount = _flow.orgDataCount,
        transform = $$.getFlowTransform(targets, orgDataCount, flowIndex, flowLength),
        wait = $$.generateWait(),
        gt = Object(external_commonjs_d3_transition_commonjs2_d3_transition_amd_d3_transition_root_d3_["transition"])().ease(external_commonjs_d3_ease_commonjs2_d3_ease_amd_d3_ease_root_d3_["easeLinear"]).duration(duration);
    wait.add(Object.keys(elements).map(function (v) {
      var n = elements[v];
      return n = v === "axis.x" ? n.transition(gt).call(function (g) {
        return $$.axis.x.setTransition(gt).create(g);
      }) : v === "region.list" ? n.filter($$.isRegionOnX).transition(gt).attr("transform", transform) : n.transition(gt).attr("transform", transform), n;
    })), gt.call(wait, function () {
      $$.cleanUpFlow(elements, args);
    });
  },

  /**
   * Clean up flow
   * @param elements {Object} Target elements
   * @param args {Object}
   * @private
   */
  cleanUpFlow: function cleanUpFlow(elements, args) {
    var $$ = this,
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
        done = _flow2$done === void 0 ? function () {} : _flow2$done,
        flowLength = _flow2.length;
    // draw again for removing flowed elements and reverting attr
    // callback for end of flow
    flowLength && (["circle", "text", "shape", "eventRect"].forEach(function (v) {
      var target = [];

      for (var i = 0; i < flowLength; i++) target.push("." + config_classes[v] + "-" + i);

      svg.selectAll("." + config_classes[v + "s"]) // circles, shapes, texts, eventRects
      .selectAll(target).remove();
    }), svg.select("." + config_classes.xgrid).remove()), Object.keys(elements).forEach(function (v) {
      var n = elements[v];
      if (v !== "axis.x" && n.attr("transform", null), v === "grid.x") n.attr(state.xgridAttr);else if (v === "gridLines.x") n.attr("x1", isRotated ? 0 : xv).attr("x2", isRotated ? state.width : xv);else if (v === "gridLines.x") n.select("line").attr("x1", isRotated ? 0 : xv).attr("x2", isRotated ? state.width : xv), n.select("text").attr("x", isRotated ? state.width : 0).attr("y", xv);else if (/^(area|bar|line)$/.test(v)) n.attr("d", shape.type[v]);else if (v === "text") n.attr("x", xForText).attr("y", yForText).style("fill-opacity", $$.opacityForText.bind($$));else if (v !== "circle") v === "region.list" && n.select("rect").filter($$.isRegionOnX).attr("x", $$.regionX.bind($$)).attr("width", $$.regionWidth.bind($$));else if ($$.isCirclePoint()) n.attr("cx", cx).attr("cy", cy);else {
        var xFunc = function (d) {
          return cx(d) - config.point_r;
        },
            yFunc = function (d) {
          return cy(d) - config.point_r;
        };

        n.attr("x", xFunc).attr("y", yFunc).attr("cx", cx) // when pattern is used, it possibly contain 'circle' also.
        .attr("cy", cy);
      }
    }), config.interaction_enabled && $$.redrawEventRect(), done.call($$.api), state.flowing = !1;
  },

  /**
   * Get flow transform value
   * @param targets
   * @param orgDataCount
   * @param flowIndex
   * @param flowLength
   * @return {String}
   * @private
   */
  getFlowTransform: function getFlowTransform(targets, orgDataCount, flowIndex, flowLength) {
    var translateX,
        $$ = this,
        data = $$.data,
        x = $$.scale.x,
        dataValues = data.targets[0].values,
        flowStart = $$.getValueOnIndex(dataValues, flowIndex),
        flowEnd = $$.getValueOnIndex(dataValues, flowIndex + flowLength),
        orgDomain = x.domain(),
        domain = $$.updateXDomain(targets, !0, !0);
    orgDataCount ? orgDataCount === 1 || (flowStart && flowStart.x) === (flowEnd && flowEnd.x) ? translateX = x(orgDomain[0]) - x(domain[0]) : translateX = $$.isTimeSeries() ? x(orgDomain[0]) - x(domain[0]) : x(flowStart.x) - x(flowEnd.x) : dataValues.length === 1 ? $$.isTimeSeries() ? (flowStart = $$.getValueOnIndex(dataValues, 0), flowEnd = $$.getValueOnIndex(dataValues, dataValues.length - 1), translateX = x(flowStart.x) - x(flowEnd.x)) : translateX = diffDomain(domain) / 2 : translateX = x(orgDomain[0]) - x(domain[0]);
    var scaleX = diffDomain(orgDomain) / diffDomain(domain);
    return "translate(" + translateX + ",0) scale(" + scaleX + ",1)";
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/interactions/eventrect.ts
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
    var $$ = this;
    $$.$el.main.select("." + config_classes.chart).append("g").attr("class", config_classes.eventRects).style("fill-opacity", "0");
  },

  /**
   * Redraws the area that detects the event.
   * @private
   */
  redrawEventRect: function redrawEventRect() {
    var eventRectUpdate,
        $$ = this,
        config = $$.config,
        $el = $$.$el,
        isMultipleX = $$.isMultipleX(),
        zoomEnabled = config.zoom_enabled,
        eventRects = $$.$el.main.select("." + config_classes.eventRects).style("cursor", zoomEnabled && zoomEnabled.type !== "drag" ? config.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(config_classes.eventRectsMultiple, isMultipleX).classed(config_classes.eventRectsSingle, !isMultipleX);
    if (eventRects.selectAll("." + config_classes.eventRect).remove(), $el.eventRect = eventRects.selectAll("." + config_classes.eventRect), isMultipleX) eventRectUpdate = $el.eventRect.data([0]), eventRectUpdate = $$.generateEventRectsForMultipleXs(eventRectUpdate.enter()).merge(eventRectUpdate);else {
      // Set data and update $el.eventRect
      var xAxisTickValues = $$.getMaxDataCountTarget(); // update data's index value to be alinged with the x Axis

      $$.updateDataIndexByX(xAxisTickValues), $$.updateXs(xAxisTickValues), $$.updatePointClass(!0), eventRects.datum(xAxisTickValues), $el.eventRect = eventRects.selectAll("." + config_classes.eventRect), eventRectUpdate = $el.eventRect.data(function (d) {
        return d;
      }), eventRectUpdate.exit().remove(), eventRectUpdate = $$.generateEventRectsForSingleX(eventRectUpdate.enter()).merge(eventRectUpdate);
    }
    $el.eventRect = eventRectUpdate, $$.updateEventRect(eventRectUpdate), $$.state.inputType !== "touch" || $el.svg.on("touchstart.eventRect") || $$.hasArcType() || $$.bindTouchOnEventRect(isMultipleX);
  },
  bindTouchOnEventRect: function bindTouchOnEventRect(isMultipleX) {
    var startPx,
        $$ = this,
        config = $$.config,
        state = $$.state,
        svg = $$.$el.svg,
        getEventRect = function () {
      var touch = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"].changedTouches[0];
      return Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(browser_doc.elementFromPoint(touch.clientX, touch.clientY));
    },
        getIndex = function (eventRect) {
      var index = eventRect && eventRect.attr("class") && eventRect.attr("class").replace(new RegExp("(" + config_classes.eventRect + "-?|s)", "g"), "") * 1;
      return (isNaN(index) || index === null) && (index = -1), index;
    },
        selectRect = function (context) {
      if (isMultipleX) $$.selectRectForMultipleXs(context);else {
        var eventRect = getEventRect(),
            index = getIndex(eventRect);
        $$.callOverOutForTouch(index), index === -1 ? $$.unselectRect() : $$.selectRectForSingle(context, eventRect, index);
      }
    },
        preventDefault = config.interaction_inputType_touch.preventDefault,
        isPrevented = isBoolean(preventDefault) && preventDefault || !1,
        preventThreshold = !isNaN(preventDefault) && preventDefault || null,
        preventEvent = function (event) {
      var eventType = event.type,
          touch = event.changedTouches[0],
          currentXY = touch["client" + (config.axis_rotated ? "Y" : "X")];
      eventType === "touchstart" ? isPrevented ? event.preventDefault() : preventThreshold !== null && (startPx = currentXY) : eventType === "touchmove" && (isPrevented || startPx === !0 || preventThreshold !== null && Math.abs(startPx - currentXY) >= preventThreshold) && (startPx = !0, event.preventDefault());
    };

    // bind touch events
    svg.on("touchstart.eventRect touchmove.eventRect", function () {
      var eventRect = getEventRect(),
          event = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"];

      if (!eventRect.empty() && eventRect.classed(config_classes.eventRect)) {
        // if touch points are > 1, means doing zooming interaction. In this case do not execute tooltip codes.
        if (state.dragging || state.flowing || $$.hasArcType() || event.touches.length > 1) return;
        preventEvent(event), selectRect(this);
      } else $$.unselectRect(), $$.callOverOutForTouch();
    }, !0).on("touchend.eventRect", function () {
      var eventRect = getEventRect();
      !eventRect.empty() && eventRect.classed(config_classes.eventRect) && ($$.hasArcType() || !$$.toggleShape || state.cancelClick) && state.cancelClick && (state.cancelClick = !1);
    }, !0);
  },

  /**
   * Updates the location and size of the eventRect.
   * @private
   * @param {Object} d3.select(CLASS.eventRects) object.
   */
  updateEventRect: function updateEventRect(eventRectUpdate) {
    var x,
        y,
        w,
        h,
        $$ = this,
        config = $$.config,
        scale = $$.scale,
        state = $$.state,
        xScale = scale.zoom || scale.x,
        eventRectData = eventRectUpdate || $$.$el.eventRect.data(),
        isRotated = config.axis_rotated;
    if ($$.isMultipleX()) // TODO: rotated not supported yet
    x = 0, y = 0, w = state.width, h = state.height;else {
      var rectW, rectX;
      if ($$.isCategorized()) rectW = $$.getEventRectWidth(), rectX = function (d) {
        return xScale(d.x) - rectW / 2;
      };else {
        var getPrevNextX = function (d) {
          var index = d.index;
          return {
            prev: $$.getPrevX(index),
            next: $$.getNextX(index)
          };
        };

        rectW = function (d) {
          var x = getPrevNextX(d); // if there this is a single data point make the eventRect full width (or height)

          return x.prev === null && x.next === null ? isRotated ? state.height : state.width : (x.prev === null && (x.prev = xScale.domain()[0]), x.next === null && (x.next = xScale.domain()[1]), Math.max(0, (xScale(x.next) - xScale(x.prev)) / 2));
        }, rectX = function (d) {
          var x = getPrevNextX(d),
              thisX = d.x;
          // if there this is a single data point position the eventRect at 0
          return x.prev === null && x.next === null ? 0 : (x.prev === null && (x.prev = xScale.domain()[0]), (xScale(thisX) + xScale(x.prev)) / 2);
        };
      }
      x = isRotated ? 0 : rectX, y = isRotated ? rectX : 0, w = isRotated ? state.width : rectW, h = isRotated ? rectW : state.height;
    }
    eventRectData.attr("class", $$.classEvent.bind($$)).attr("x", x).attr("y", y).attr("width", w).attr("height", h);
  },
  selectRectForSingle: function selectRectForSingle(context, eventRect, index) {
    var $$ = this,
        config = $$.config,
        main = $$.$el.main,
        isSelectionEnabled = config.data_selection_enabled,
        isSelectionGrouped = config.data_selection_grouped,
        isTooltipGrouped = config.tooltip_grouped,
        selectedData = $$.getAllValuesOnIndex(index);
    isTooltipGrouped && ($$.showTooltip(selectedData, context), $$.showGridFocus(selectedData), !isSelectionEnabled || isSelectionGrouped) || main.selectAll("." + config_classes.shape + "-" + index).each(function () {
      Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).classed(config_classes.EXPANDED, !0), isSelectionEnabled && eventRect.style("cursor", isSelectionGrouped ? "pointer" : null), isTooltipGrouped || ($$.hideGridFocus(), $$.hideTooltip(), !isSelectionGrouped && $$.expandCirclesBars(index));
    }).filter(function (d) {
      return $$.isWithinShape(this, d);
    }).call(function (selected) {
      var d = selected.data();
      isSelectionEnabled && (isSelectionGrouped || config.data_selection_isselectable.bind($$.api)(d)) && eventRect.style("cursor", "pointer"), isTooltipGrouped || ($$.showTooltip(d, context), $$.showGridFocus(d), $$.unexpandCircles(), selected.each(function (d) {
        return $$.expandCirclesBars(index, d.id);
      }));
    });
  },
  expandCirclesBars: function expandCirclesBars(index, id, reset) {
    var $$ = this,
        config = $$.config,
        _$$$$el = $$.$el,
        bar = _$$$$el.bar,
        circle = _$$$$el.circle;
    circle && config.point_focus_expand_enabled && $$.expandCircles(index, id, reset), bar && $$.expandBars(index, id, reset);
  },
  selectRectForMultipleXs: function selectRectForMultipleXs(context) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        targetsToShow = $$.filterTargetsToShow($$.data.targets);

    // do nothing when dragging
    if (!($$.dragging || $$.hasArcType(targetsToShow))) {
      var mouse = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(context),
          closest = $$.findClosestFromTargets(targetsToShow, mouse);
      if (state.mouseover && (!closest || closest.id !== state.mouseover.id) && (config.data_onout.call($$.api, state.mouseover), state.mouseover = undefined), !closest) return void $$.unselectRect();
      var sameXData = $$.isBubbleType(closest) || $$.isScatterType(closest) || !config.tooltip_grouped ? [closest] : $$.filterByX(targetsToShow, closest.x),
          selectedData = sameXData.map(function (d) {
        return $$.addName(d);
      }); // show tooltip when cursor is close to some point

      $$.showTooltip(selectedData, context), $$.expandCirclesBars(closest.index, closest.id, !0), $$.showGridFocus(selectedData), ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) && ($$.$el.svg.select("." + config_classes.eventRect).style("cursor", "pointer"), !state.mouseover && (config.data_onover.call($$.api, closest), state.mouseover = closest));
    }
  },

  /**
   * Unselect EventRect.
   * @private
   */
  unselectRect: function unselectRect() {
    var $$ = this,
        _$$$$el2 = $$.$el,
        bar = _$$$$el2.bar,
        circle = _$$$$el2.circle,
        tooltip = _$$$$el2.tooltip;
    $$.$el.svg.select("." + config_classes.eventRect).style("cursor", null), $$.hideGridFocus(), tooltip && ($$.hideTooltip(), $$._handleLinkedCharts(!1)), circle && $$.unexpandCircles(), bar && $$.unexpandBars();
  },

  /**
   * Create eventRect for each data on the x-axis.
   * Register touch and drag events.
   * @private
   * @param {Object} d3.select(CLASS.eventRects) object.
   * @returns {Object} d3.select(CLASS.eventRects) object.
   */
  generateEventRectsForSingleX: function generateEventRectsForSingleX(eventRectEnter) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        rect = eventRectEnter.append("rect").attr("class", $$.classEvent.bind($$)).style("cursor", config.data_selection_enabled && config.data_selection_grouped ? "pointer" : null).on("click", function (d) {
      $$.clickHandlerForSingleX.bind(this)(d, $$);
    }).call($$.getDraggableSelection());
    return state.inputType === "mouse" && rect.on("mouseover", function (d) {
      state.dragging || state.flowing || $$.hasArcType() || config.tooltip_grouped && $$.setOverOut(!0, d.index);
    }).on("mousemove", function (d) {
      // do nothing while dragging/flowing
      if (!(state.dragging || state.flowing || $$.hasArcType())) {
        var index = d.index,
            eventRect = $$.$el.svg.select("." + config_classes.eventRect + "-" + index);
        $$.isStepType(d) && config.line_step_type === "step-after" && Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(this)[0] < $$.scale.x($$.getXValue(d.id, index)) && (index -= 1), index === -1 ? $$.unselectRect() : $$.selectRectForSingle(this, eventRect, index), config.tooltip_grouped || $$.setOverOut(index !== -1, d.index);
      }
    }).on("mouseout", function (d) {
      !config || $$.hasArcType() || ($$.unselectRect(), $$.setOverOut(!1, d.index));
    }), rect;
  },
  clickHandlerForSingleX: function clickHandlerForSingleX(d, ctx) {
    var $$ = ctx,
        config = $$.config,
        state = $$.state,
        main = $$.$el.main;
    if ($$.hasArcType() || !$$.toggleShape || state.cancelClick) return void (state.cancelClick && (state.cancelClick = !1));
    var index = d.index;
    main.selectAll("." + config_classes.shape + "-" + index).each(function (d2) {
      (config.data_selection_grouped || $$.isWithinShape(this, d2)) && ($$.toggleShape(this, d2, index), config.data_onclick.bind($$.api)(d2, this));
    });
  },

  /**
   * Create an eventRect,
   * Register touch and drag events.
   * @private
   * @param {Object} d3.select(CLASS.eventRects) object.
   * @returns {Object} d3.select(CLASS.eventRects) object.
   */
  generateEventRectsForMultipleXs: function generateEventRectsForMultipleXs(eventRectEnter) {
    var $$ = this,
        _$$$state = $$.state,
        width = _$$$state.width,
        height = _$$$state.height,
        inputType = _$$$state.inputType,
        rect = eventRectEnter.append("rect").attr("x", 0).attr("y", 0).attr("width", width).attr("height", height).attr("class", config_classes.eventRect).on("click", function () {
      $$.clickHandlerForMultipleXS.bind(this)($$);
    }).call($$.getDraggableSelection());
    return inputType === "mouse" && rect.on("mouseover mousemove", function () {
      $$.selectRectForMultipleXs(this);
    }).on("mouseout", function () {
      !$$.config || $$.hasArcType() || $$.unselectRect();
    }), rect;
  },
  clickHandlerForMultipleXS: function clickHandlerForMultipleXS(ctx) {
    var $$ = ctx,
        config = $$.config,
        targetsToShow = $$.filterTargetsToShow($$.data.targets);

    if (!$$.hasArcType(targetsToShow)) {
      var mouse = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(this),
          closest = $$.findClosestFromTargets(targetsToShow, mouse);
      !closest || ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) && $$.$el.main.selectAll("." + config_classes.shapes + $$.getTargetSelectorSuffix(closest.id)).selectAll("." + config_classes.shape + "-" + closest.index).each(function () {
        (config.data_selection_grouped || $$.isWithinShape(this, closest)) && ($$.toggleShape(this, closest, closest.index), config.data_onclick.bind($$.api)(closest, this));
      });
    } // select if selection enabled

  }
});
// CONCATENATED MODULE: ./src/ChartInternal/interactions/subchart.ts
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
    var $$ = this,
        config = $$.config,
        scale = $$.scale,
        subchart = $$.$el.subchart,
        isRotated = config.axis_rotated;
    $$.brush = isRotated ? Object(external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_["brushY"])() : Object(external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_["brushX"])();

    // set "brush" event
    var lastDomain,
        timeout,
        brushHandler = function () {
      $$.redrawForBrush();
    },
        getBrushSize = function () {
      var brush = $$.$el.svg.select("." + config_classes.brush + " .overlay"),
          brushSize = {
        width: 0,
        height: 0
      };
      return brush.size() && (brushSize.width = +brush.attr("width"), brushSize.height = +brush.attr("height")), brushSize[isRotated ? "width" : "height"];
    };

    // set the brush extent
    $$.brush.on("start", function () {
      $$.state.inputType === "touch" && $$.hideTooltip(), brushHandler();
    }).on("brush", brushHandler).on("end", function () {
      lastDomain = scale.x.orgDomain();
    }), $$.brush.updateResize = function () {
      var _this = this;

      timeout && clearTimeout(timeout), timeout = setTimeout(function () {
        var selection = _this.getSelection();

        lastDomain && Object(external_commonjs_d3_brush_commonjs2_d3_brush_amd_d3_brush_root_d3_["brushSelection"])(selection.node()) && _this.move(selection, lastDomain.map(scale.subX.orgScale()));
      }, 0);
    }, $$.brush.update = function () {
      var extent = this.extent()();
      return extent[1].filter(function (v) {
        return isNaN(v);
      }).length === 0 && subchart.main && subchart.main.select("." + config_classes.brush).call(this), this;
    }, $$.brush.scale = function (scale) {
      var h = config.subchart_size_height || getBrushSize(),
          extent = $$.getExtent();
      // [[x0, y0], [x1, y1]], where [x0, y0] is the top-left corner and [x1, y1] is the bottom-right corner
      // when extent updates, brush selection also be re-applied
      // https://github.com/d3/d3/issues/2918
      !extent && scale.range ? extent = [[0, 0], [scale.range()[1], h]] : isArray(extent) && (extent = extent.map(function (v, i) {
        return [v, i > 0 ? h : i];
      })), isRotated && extent[1].reverse(), this.extent(extent), this.update();
    }, $$.brush.getSelection = function () {
      return (// @ts-ignore
        subchart.main ? subchart.main.select("." + config_classes.brush) : Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])([])
      );
    };
  },

  /**
   * Initialize the subchart.
   * @private
   */
  initSubchart: function initSubchart() {
    var $$ = this,
        config = $$.config,
        _$$$state = $$.state,
        clip = _$$$state.clip,
        hasAxis = _$$$state.hasAxis,
        _$$$$el = $$.$el,
        defs = _$$$$el.defs,
        svg = _$$$$el.svg,
        subchart = _$$$$el.subchart,
        axis = _$$$$el.axis;

    if (hasAxis) {
      var visibility = config.subchart_show ? "visible" : "hidden",
          clipId = clip.id + "-subchart",
          clipPath = $$.getClipPath(clipId);
      clip.idSubchart = clipId, $$.appendClip(defs, clipId), $$.initBrush(), subchart.main = svg.append("g").attr("transform", $$.getTranslate("context"));
      var main = subchart.main;
      main.style("visibility", visibility), main.append("g").attr("clip-path", clipPath).attr("class", config_classes.chart), $$.hasType("bar") && main.select("." + config_classes.chart).append("g").attr("class", config_classes.chartBars), main.select("." + config_classes.chart).append("g").attr("class", config_classes.chartLines), main.append("g").attr("clip-path", clipPath).attr("class", config_classes.brush).call($$.brush), axis.subX = main.append("g").attr("class", config_classes.axisX).attr("transform", $$.getTranslate("subX")).attr("clip-path", config.axis_rotated ? "" : clip.pathXAxis).style("visibility", config.subchart_axis_x_show ? visibility : "hidden");
    }
  },

  /**
   * Update sub chart
   * @private
   * @param {Object} $$.data.targets
   */
  updateTargetsForSubchart: function updateTargetsForSubchart(targets) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        main = $$.$el.subchart.main,
        classChartBar = $$.classChartBar.bind($$),
        classBars = $$.classBars.bind($$),
        classChartLine = $$.classChartLine.bind($$),
        classLines = $$.classLines.bind($$),
        classAreas = $$.classAreas.bind($$);

    if (config.subchart_show) {
      // -- Bar --//
      var barUpdate = main.select("." + config_classes.chartBars).selectAll("." + config_classes.chartBar).data(targets).attr("class", classChartBar),
          barEnter = barUpdate.enter().append("g").style("opacity", "0").attr("class", classChartBar).merge(barUpdate);
      barEnter.append("g").attr("class", classBars);
      // -- Line --//
      var lineUpdate = main.select("." + config_classes.chartLines).selectAll("." + config_classes.chartLine).data(targets).attr("class", classChartLine),
          lineEnter = lineUpdate.enter().append("g").style("opacity", "0").attr("class", classChartLine).merge(lineUpdate);
      // Lines for each data
      // Area
      // -- Brush --//
      lineEnter.append("g").attr("class", classLines), $$.hasType("area") && lineEnter.append("g").attr("class", classAreas), main.selectAll("." + config_classes.brush + " rect").attr(config.axis_rotated ? "width" : "height", config.axis_rotated ? state.width2 : state.height2);
    }
  },

  /**
   * Update the bar of the sub chart
   * @private
   * @param {Object} durationForExit
   */
  updateBarForSubchart: function updateBarForSubchart(durationForExit) {
    var $$ = this,
        subchart = $$.$el.subchart;
    subchart.bar = subchart.main.selectAll("." + config_classes.bars).selectAll("." + config_classes.bar).data($$.barData.bind($$)), subchart.bar.exit().transition().duration(durationForExit).style("opacity", "0").remove(), subchart.bar = subchart.bar.enter().append("path").attr("class", $$.classBar.bind($$)).style("stroke", "none").style("fill", $$.color).merge(subchart.bar).style("opacity", $$.initialOpacity.bind($$));
  },

  /**
   * Redraw the bar of the subchart
   * @private
   * @param {String} path in subchart bar
   * @param {Boolean} whether or not to transition.
   * @param {Number} transition duration
   */
  redrawBarForSubchart: function redrawBarForSubchart(drawBarOnSub, withTransition, duration) {
    var bar = this.$el.subchart.bar;
    (withTransition ? bar.transition(getRandom()).duration(duration) : bar).attr("d", drawBarOnSub).style("opacity", "1");
  },

  /**
   * Update the line of the sub chart
   * @private
   * @param {Number} Fade-out transition duration
   */
  updateLineForSubchart: function updateLineForSubchart(durationForExit) {
    var $$ = this,
        subchart = $$.$el.subchart;
    subchart.line = subchart.main.selectAll("." + config_classes.lines).selectAll("." + config_classes.line).data($$.lineData.bind($$)), subchart.line.exit().transition().duration(durationForExit).style("opacity", "0").remove(), subchart.line = subchart.line.enter().append("path").attr("class", $$.classLine.bind($$)).style("stroke", $$.color).merge(subchart.line).style("opacity", $$.initialOpacity.bind($$));
  },

  /**
   * Redraw the line of the subchart
   * @private
   * @param {String} path in subchart line
   * @param {Boolean} whether or not to transition
   * @param {Number} transition duration
   */
  redrawLineForSubchart: function redrawLineForSubchart(drawLineOnSub, withTransition, duration) {
    var line = this.$el.subchart.line;
    (withTransition ? line.transition(getRandom()).duration(duration) : line).attr("d", drawLineOnSub).style("opacity", "1");
  },

  /**
   * Update the area of the sub chart
   * @private
   * @param {Number} Fade-out transition duration
   */
  updateAreaForSubchart: function updateAreaForSubchart(durationForExit) {
    var $$ = this,
        subchart = $$.$el.subchart;
    subchart.area = subchart.main.selectAll("." + config_classes.areas).selectAll("." + config_classes.area).data($$.lineData.bind($$)), subchart.area.exit().transition().duration(durationForExit).style("opacity", "0").remove(), subchart.area = subchart.area.enter().append("path").attr("class", $$.classArea.bind($$)).style("fill", $$.color).style("opacity", function () {
      return $$.state.orgAreaOpacity = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).style("opacity"), "0";
    }).merge(subchart.area).style("opacity", "0");
  },

  /**
   * Redraw the area of the subchart
   * @private
   * @param {String} path in subchart line
   * @param {Boolean} whether or not to transition
   * @param {Number} transition duration
   */
  redrawAreaForSubchart: function redrawAreaForSubchart(drawAreaOnSub, withTransition, duration) {
    var area = this.$el.subchart.area;
    (withTransition ? area.transition(getRandom()).duration(duration) : area).attr("d", drawAreaOnSub).style("fill", this.color).style("opacity", this.state.orgAreaOpacity);
  },

  /**
   * Redraw subchart.
   * @private
   * @param {Boolean} withSubchart whether or not to show subchart
   * @param {Number} duration duration
   * @param {Object} shape Shape's info
   */
  redrawSubchart: function redrawSubchart(withSubchart, duration, shape) {
    var $$ = this,
        config = $$.config,
        main = $$.$el.subchart.main;
    main.style("visibility", config.subchart_show ? "visible" : "hidden"), config.subchart_show && (external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"] && external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"].type === "zoom" && $$.brush.update(), withSubchart && (!brushEmpty($$) && $$.brush.update(), Object.keys(shape.type).forEach(function (v) {
      var name = capitalize(v),
          draw = $$["generateDraw" + name](shape.indices[v], !0);
      $$["update" + name + "ForSubchart"](duration), $$["redraw" + name + "ForSubchart"](draw, duration, duration);
    })));
  },

  /**
   * Redraw the brush.
   * @private
   */
  redrawForBrush: function redrawForBrush() {
    var $$ = this,
        _$$$config = $$.config,
        subchart_onbrush = _$$$config.subchart_onbrush,
        withY = _$$$config.zoom_rescale,
        scale = $$.scale;
    $$.redraw({
      withTransition: !1,
      withY: withY,
      withSubchart: !1,
      withUpdateXDomain: !0,
      withDimension: !1
    }), subchart_onbrush.bind($$.api)(scale.x.orgDomain());
  },

  /**
   * Transform context
   * @private
   * @param {Boolean} indicates transition is enabled
   * @param {Object} The return value of the generateTransitions method of Axis.
   */
  transformContext: function transformContext(withTransition, transitions) {
    var subXAxis,
        $$ = this,
        main = $$.$el.subchart.main;
    transitions && transitions.axisSubX ? subXAxis = transitions.axisSubX : (subXAxis = main.select("." + config_classes.axisX), withTransition && (subXAxis = subXAxis.transition())), main.attr("transform", $$.getTranslate("context")), subXAxis.attr("transform", $$.getTranslate("subX"));
  },

  /**
   * Get extent value
   * @private
   * @returns {Array} default extent
   */
  getExtent: function getExtent() {
    var $$ = this,
        config = $$.config,
        scale = $$.scale,
        extent = config.axis_x_extent;
    if (extent) if (isFunction(extent)) extent = extent.bind($$.api)($$.getXDomain($$.data.targets), scale.subX);else if ($$.isTimeSeries() && extent.every(isNaN)) {
      var fn = parseDate.bind($$);
      extent = extent.map(function (v) {
        return scale.subX(fn(v));
      });
    }
    return extent;
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/interactions/zoom.ts
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
    var $$ = this;
    $$.scale.zoom = null, $$.generateZoom(), $$.initZoomBehaviour();
  },

  /**
   * Bind zoom event
   * @param {Boolean} bind Weather bind or unbound
   * @private
   */
  bindZoomEvent: function bindZoomEvent(bind) {
    bind === void 0 && (bind = !0);
    var $$ = this,
        config = $$.config,
        main = $$.$el.main,
        zoomEnabled = config.zoom_enabled;
    $$.redrawEventRect();
    var eventRects = main.select("." + config_classes.eventRects);
    zoomEnabled && bind ? !config.subchart_show && $$.bindZoomOnEventRect(eventRects, zoomEnabled.type) : bind === !1 && ($$.api.unzoom(), eventRects.on(".zoom", null).on(".drag", null));
  },

  /**
   * Generate zoom
   * @private
   */
  generateZoom: function generateZoom() {
    var $$ = this,
        config = $$.config,
        org = $$.org,
        scale = $$.scale,
        zoom = Object(external_commonjs_d3_zoom_commonjs2_d3_zoom_amd_d3_zoom_root_d3_["zoom"])().duration(0).on("start", $$.onZoomStart.bind($$)).on("zoom", $$.onZoom.bind($$)).on("end", $$.onZoomEnd.bind($$));
    // get zoom extent
    // @ts-ignore
    // @ts-ignore

    /**
     * Update scale according zoom transform value
     * @param {Object} transform
     * @private
     */
    // @ts-ignore
    zoom.orgScaleExtent = function () {
      var extent = config.zoom_extent || [1, 10];
      return [extent[0], Math.max($$.getMaxDataCount() / extent[1], extent[1])];
    }, zoom.updateScaleExtent = function () {
      var ratio = diffDomain($$.scale.x.orgDomain()) / diffDomain($$.getZoomDomain()),
          extent = this.orgScaleExtent();
      return this.scaleExtent([extent[0] * ratio, extent[1] * ratio]), this;
    }, zoom.updateTransformScale = function (transform) {
      org.xScale && org.xScale.range(scale.x.range());
      // rescale from the original scale
      var newScale = transform[config.axis_rotated ? "rescaleY" : "rescaleX"](org.xScale || scale.x),
          domain = $$.trimXDomain(newScale.domain()),
          rescale = config.zoom_rescale;
      newScale.domain(domain, org.xDomain), scale.zoom = $$.getCustomizedScale(newScale), $$.axis.x.scale(scale.zoom), rescale && (!org.xScale && (org.xScale = scale.x.copy()), scale.x.domain(domain));
    }, $$.zoom = zoom;
  },

  /**
   * 'start' event listener
   * @private
   */
  onZoomStart: function onZoomStart() {
    var $$ = this,
        event = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"].sourceEvent;
    event && ($$.zoom.startEvent = event, callFn($$.config.zoom_onzoomstart, $$.api, event));
  },

  /**
   * 'zoom' event listener
   * @private
   */
  onZoom: function onZoom() {
    var $$ = this,
        config = $$.config,
        scale = $$.scale,
        org = $$.org,
        event = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"],
        sourceEvent = event.sourceEvent;

    if (config.zoom_enabled && event.sourceEvent && $$.filterTargetsToShow($$.data.targets).length !== 0 && (scale.zoom || !(sourceEvent.type.indexOf("touch") > -1) || sourceEvent.touches.length !== 1)) {
      var isMousemove = sourceEvent.type === "mousemove",
          isZoomOut = sourceEvent.wheelDelta < 0,
          transform = event.transform;
      !isMousemove && isZoomOut && scale.x.domain().every(function (v, i) {
        return v !== org.xDomain[i];
      }) && scale.x.domain(org.xDomain), $$.zoom.updateTransformScale(transform), $$.isCategorized() && scale.x.orgDomain()[0] === org.xDomain[0] && scale.x.domain([org.xDomain[0] - 1e-10, scale.x.orgDomain()[1]]), $$.redraw({
        withTransition: !1,
        withY: config.zoom_rescale,
        withSubchart: !1,
        withEventRect: !1,
        withDimension: !1
      }), $$.state.cancelClick = isMousemove, callFn(config.zoom_onzoom, $$.api, scale.zoom.domain());
    }
  },

  /**
   * 'end' event listener
   * @private
   */
  onZoomEnd: function onZoomEnd() {
    var $$ = this,
        config = $$.config,
        scale = $$.scale,
        startEvent = $$.zoom.startEvent,
        event = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"] && external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"].sourceEvent;
    startEvent && startEvent.type.indexOf("touch") > -1 && (startEvent = startEvent.changedTouches[0], event = event.changedTouches[0]);
    // if click, do nothing. otherwise, click interaction will be canceled.
    !startEvent || event && startEvent.clientX === event.clientX && startEvent.clientY === event.clientY || ($$.redrawEventRect(), $$.updateZoom(), callFn(config.zoom_onzoomend, $$.api, scale[scale.zoom ? "zoom" : "subX"].domain()));
  },

  /**
   * Get zoom domain
   * @returns {Array} zoom domain
  	 * @private
   */
  getZoomDomain: function getZoomDomain() {
    var $$ = this,
        config = $$.config,
        org = $$.org,
        _org$xDomain = org.xDomain,
        min = _org$xDomain[0],
        max = _org$xDomain[1];
    return isDefined(config.zoom_x_min) && (min = getMinMax("min", [min, config.zoom_x_min])), isDefined(config.zoom_x_max) && (max = getMinMax("max", [max, config.zoom_x_max])), [min, max];
  },

  /**
   * Update zoom
   * @param {Boolean} force Force unzoom
   * @private
   */
  updateZoom: function updateZoom(force) {
    var $$ = this,
        _$$$scale = $$.scale,
        subX = _$$$scale.subX,
        x = _$$$scale.x,
        zoom = _$$$scale.zoom;

    if (zoom) {
      var zoomDomain = zoom.domain(),
          xDomain = subX.domain(),
          delta = .015,
          isfullyShown = (zoomDomain[0] <= xDomain[0] || zoomDomain[0] - delta <= xDomain[0]) && (xDomain[1] <= zoomDomain[1] || xDomain[1] <= zoomDomain[1] - delta);
      (force || isfullyShown) && ($$.axis.x.scale(subX), x.domain(subX.orgDomain()), zoom = null);
    }
  },

  /**
   * Attach zoom event on <rect>
   * @private
   */
  bindZoomOnEventRect: function bindZoomOnEventRect(eventRects, type) {
    var $$ = this,
        behaviour = type === "drag" ? $$.zoomBehaviour : $$.zoom;
    eventRects.call(behaviour).on("dblclick.zoom", null);
  },

  /**
   * Initialize the drag behaviour used for zooming.
   * @private
   */
  initZoomBehaviour: function initZoomBehaviour() {
    var zoomRect,
        $$ = this,
        config = $$.config,
        state = $$.state,
        isRotated = config.axis_rotated,
        start = 0,
        end = 0,
        prop = {
      axis: isRotated ? "y" : "x",
      attr: isRotated ? "height" : "width",
      index: isRotated ? 1 : 0
    };
    $$.zoomBehaviour = Object(external_commonjs_d3_drag_commonjs2_d3_drag_amd_d3_drag_root_d3_["drag"])().clickDistance(4).on("start", function () {
      // @ts-ignore
      $$.setDragStatus(!0), zoomRect || (zoomRect = $$.$el.main.append("rect").attr("clip-path", state.clip.path).attr("class", config_classes.zoomBrush).attr("width", isRotated ? state.width : 0).attr("height", isRotated ? 0 : state.height)), start = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(this)[prop.index], end = start, zoomRect.attr(prop.axis, start).attr(prop.attr, 0), $$.onZoomStart();
    }).on("drag", function () {
      // @ts-ignore
      end = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(this)[prop.index], zoomRect.attr(prop.axis, Math.min(start, end)).attr(prop.attr, Math.abs(end - start));
    }).on("end", function () {
      var _ref,
          scale = $$.scale.zoom || $$.scale.x;

      if ($$.setDragStatus(!1), zoomRect.attr(prop.axis, 0).attr(prop.attr, 0), start > end && (_ref = [end, start], start = _ref[0], end = _ref[1], _ref), start < 0 && (end += Math.abs(start), start = 0), start !== end) $$.api.zoom([start, end].map(function (v) {
        return scale.invert(v);
      })), $$.onZoomEnd();else if ($$.isMultipleX()) $$.clickHandlerForMultipleXS.bind(this)($$);else {
        var _event3 = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"].sourceEvent || external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"],
            _ref2 = "clientX" in _event3 ? [_event3.clientX, _event3.clientY] : [_event3.x, _event3.y],
            x = _ref2[0],
            y = _ref2[1],
            target = browser_doc.elementFromPoint(x, y);

        $$.clickHandlerForSingleX.bind(target)(Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(target).datum(), $$);
      }
    });
  },
  setZoomResetButton: function setZoomResetButton() {
    var $$ = this,
        config = $$.config,
        resetButton = config.zoom_resetButton;
    resetButton && config.zoom_enabled.type === "drag" && ($$.zoom.resetBtn ? $$.zoom.resetBtn.style("display", null) : $$.zoom.resetBtn = $$.$el.chart.append("div").classed(config_classes.button, !0).append("span").on("click", function () {
      isFunction(resetButton.onclick) && resetButton.onclick.bind($$.api)(this), $$.api.unzoom();
    }).classed(config_classes.buttonZoomReset, !0).text(resetButton.text || "Reset Zoom"));
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/category.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/* harmony default export */ var internals_category = ({
  /**
   * Category Name
   * @private
   * @param {Number} index
   * @returns {String} gategory Name
   */
  categoryName: function categoryName(i) {
    var categories = this.config.axis_x_categories;
    return i < categories.length ? categories[i] : i;
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/clip.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var internals_clip = ({
  initClip: function initClip() {
    var $$ = this,
        clip = $$.state.clip;
    // MEMO: clipId needs to be unique because it conflicts when multiple charts exist
    // Define 'clip-path' attribute values
    clip.id = $$.state.datetimeId + "-clip", clip.idXAxis = clip.id + "-xaxis", clip.idYAxis = clip.id + "-yaxis", clip.idGrid = clip.id + "-grid", clip.path = $$.getClipPath(clip.id), clip.pathXAxis = $$.getClipPath(clip.idXAxis), clip.pathYAxis = $$.getClipPath(clip.idYAxis), clip.pathGrid = $$.getClipPath(clip.idGrid);
  },
  getClipPath: function getClipPath(id) {
    var $$ = this,
        config = $$.config;
    if (!config.clipPath && /-clip$/.test(id) || !config.axis_x_clipPath && /-clip-xaxis$/.test(id) || !config.axis_y_clipPath && /-clip-yaxis$/.test(id)) return null;
    var isIE9 = !!win.navigator && win.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0;
    return "url(" + (isIE9 ? "" : browser_doc.URL.split("#")[0]) + "#" + id + ")";
  },
  appendClip: function appendClip(parent, id) {
    return parent.append("clipPath").attr("id", id).append("rect");
  },
  getAxisClipX: function getAxisClipX(forHorizontal) {
    var margin = this.state.margin,
        left = Math.max(30, margin.left); // axis line width + padding for left

    return forHorizontal ? -(1 + left) : -(left - 1);
  },
  getAxisClipY: function getAxisClipY(forHorizontal) {
    var margin = this.state.margin;
    return forHorizontal ? -20 : -margin.top;
  },
  getXAxisClipX: function getXAxisClipX() {
    var $$ = this;
    return $$.getAxisClipX(!$$.config.axis_rotated);
  },
  getXAxisClipY: function getXAxisClipY() {
    var $$ = this;
    return $$.getAxisClipY(!$$.config.axis_rotated);
  },
  getYAxisClipX: function getYAxisClipX() {
    var $$ = this;
    return $$.config.axis_y_inner ? -1 : $$.getAxisClipX($$.config.axis_rotated);
  },
  getYAxisClipY: function getYAxisClipY() {
    var $$ = this;
    return $$.getAxisClipY($$.config.axis_rotated);
  },
  getAxisClipWidth: function getAxisClipWidth(forHorizontal) {
    var $$ = this,
        _$$$state = $$.state,
        margin = _$$$state.margin,
        width = _$$$state.width,
        left = Math.max(30, margin.left),
        right = Math.max(30, margin.right);
    // width + axis line width + padding for left/right
    return forHorizontal ? width + 2 + left + right : margin.left + 20;
  },
  getAxisClipHeight: function getAxisClipHeight(forHorizontal) {
    var _this$state = this.state,
        margin = _this$state.margin,
        height = _this$state.height; // less than 20 is not enough to show the axis label 'outer' without legend

    return (forHorizontal ? margin.bottom : margin.top + height) + 20;
  },
  getXAxisClipWidth: function getXAxisClipWidth() {
    var $$ = this;
    return $$.getAxisClipWidth(!$$.config.axis_rotated);
  },
  getXAxisClipHeight: function getXAxisClipHeight() {
    var $$ = this;
    return $$.getAxisClipHeight(!$$.config.axis_rotated);
  },
  getYAxisClipWidth: function getYAxisClipWidth() {
    var $$ = this;
    return $$.getAxisClipWidth($$.config.axis_rotated) + ($$.config.axis_y_inner ? 20 : 0);
  },
  getYAxisClipHeight: function getYAxisClipHeight() {
    var $$ = this;
    return $$.getAxisClipHeight($$.config.axis_rotated);
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/grid.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


 // Grid position and text anchor helpers

var getGridTextAnchor = function (d) {
  return isValue(d.position) || "end";
},
    getGridTextDx = function (d) {
  return d.position === "start" ? 4 : d.position === "middle" ? 0 : -4;
};

function getGridTextX(isX, width, height) {
  return function (d) {
    var x = isX ? 0 : width;
    return d.position === "start" ? x = isX ? -height : 0 : d.position === "middle" && (x = (isX ? -height : width) / 2), x;
  };
}

function smoothLines(el, type) {
  type === "grid" && el.each(function () {
    var g = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this);
    ["x1", "x2", "y1", "y2"].forEach(function (v) {
      return g.attr(v, Math.ceil(+g.attr(v)));
    });
  });
}

/* harmony default export */ var internals_grid = ({
  hasGrid: function hasGrid() {
    var config = this.config;
    return ["x", "y"].some(function (v) {
      return config["grid_" + v + "_show"] || config["grid_" + v + "_lines"].length;
    });
  },
  initGrid: function initGrid() {
    var $$ = this;
    $$.hasGrid() && $$.initGridLines(), $$.initFocusGrid();
  },
  initGridLines: function initGridLines() {
    var $$ = this,
        config = $$.config,
        clip = $$.state.clip,
        _$$$$el = $$.$el,
        gridLines = _$$$$el.gridLines,
        main = _$$$$el.main;
    (config.grid_x_lines.length || config.grid_y_lines.length) && (gridLines.main = main.insert("g", "." + config_classes.chart + (config.grid_lines_front ? " + *" : "")).attr("clip-path", clip.pathGrid).attr("class", config_classes.grid + " " + config_classes.gridLines), gridLines.main.append("g").attr("class", config_classes.xgridLines), gridLines.main.append("g").attr("class", config_classes.ygridLines), gridLines.x = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["selectAll"])([]));
  },
  updateXGrid: function updateXGrid(withoutUpdate) {
    var $$ = this,
        config = $$.config,
        scale = $$.scale,
        state = $$.state,
        _$$$$el2 = $$.$el,
        main = _$$$$el2.main,
        grid = _$$$$el2.grid,
        isRotated = config.axis_rotated,
        xgridData = $$.generateGridData(config.grid_x_type, scale.x),
        tickOffset = $$.isCategorized() ? $$.axis.x.tickOffset() : 0,
        pos = function (d) {
      return ((scale.zoom || scale.x)(d) + tickOffset) * (isRotated ? -1 : 1);
    };

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
    }, grid.x = main.select("." + config_classes.xgrids).selectAll("." + config_classes.xgrid).data(xgridData), grid.x.exit().remove(), grid.x = grid.x.enter().append("line").attr("class", config_classes.xgrid).merge(grid.x), withoutUpdate || grid.x.each(function () {
      var grid = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this);
      Object.keys(state.xgridAttr).forEach(function (id) {
        grid.attr(id, state.xgridAttr[id]).style("opacity", function () {
          return grid.attr(isRotated ? "y1" : "x1") === (isRotated ? state.height : 0) ? "0" : "1";
        });
      });
    });
  },
  updateYGrid: function updateYGrid() {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        _$$$$el3 = $$.$el,
        grid = _$$$$el3.grid,
        main = _$$$$el3.main,
        isRotated = config.axis_rotated,
        gridValues = $$.axis.y.tickValues() || $$.scale.y.ticks(config.grid_y_ticks),
        pos = function (d) {
      return Math.ceil($$.scale.y(d));
    };

    grid.y = main.select("." + config_classes.ygrids).selectAll("." + config_classes.ygrid).data(gridValues), grid.y.exit().remove(), grid.y = grid.y.enter().append("line").attr("class", config_classes.ygrid).merge(grid.y), grid.y.attr("x1", isRotated ? pos : 0).attr("x2", isRotated ? pos : state.width).attr("y1", isRotated ? 0 : pos).attr("y2", isRotated ? state.height : pos), smoothLines(grid.y, "grid");
  },
  updateGrid: function updateGrid(duration) {
    var $$ = this,
        _$$$$el4 = $$.$el,
        grid = _$$$$el4.grid,
        gridLines = _$$$$el4.gridLines;
    // hide if arc type
    gridLines.main || $$.initGridLines(), grid.main.style("visibility", $$.hasArcType() ? "hidden" : "visible"), $$.hideGridFocus(), $$.updateXGridLines(duration), $$.updateYGridLines(duration);
  },

  /**
   * Update X Grid lines
   * @param {Number} duration
   * @private
   */
  updateXGridLines: function updateXGridLines(duration) {
    var $$ = this,
        config = $$.config,
        _$$$$el5 = $$.$el,
        gridLines = _$$$$el5.gridLines,
        main = _$$$$el5.main,
        isRotated = config.axis_rotated;
    config.grid_x_show && $$.updateXGrid();
    var xLines = main.select("." + config_classes.xgridLines).selectAll("." + config_classes.xgridLine).data(config.grid_x_lines); // exit

    xLines.exit().transition().duration(duration).style("opacity", "0").remove();
    // enter
    var xgridLine = xLines.enter().append("g");
    xgridLine.append("line").style("opacity", "0"), xgridLine.append("text").attr("transform", isRotated ? "" : "rotate(-90)").attr("dy", -5).style("opacity", "0"), xLines = xgridLine.merge(xLines), xLines.attr("class", function (d) {
      return (config_classes.xgridLine + " " + (d.class || "")).trim();
    }).select("text").attr("text-anchor", getGridTextAnchor).attr("dx", getGridTextDx).transition().duration(duration).text(function (d) {
      return d.text;
    }).transition().style("opacity", "1"), gridLines.x = xLines;
  },

  /**
   * Update Y Grid lines
   * @param {Number} duration
   * @private
   */
  updateYGridLines: function updateYGridLines(duration) {
    var $$ = this,
        config = $$.config,
        _$$$state = $$.state,
        width = _$$$state.width,
        height = _$$$state.height,
        $el = $$.$el,
        isRotated = config.axis_rotated;
    config.grid_y_show && $$.updateYGrid();
    var ygridLines = $el.main.select("." + config_classes.ygridLines).selectAll("." + config_classes.ygridLine).data(config.grid_y_lines); // exit

    ygridLines.exit().transition().duration(duration).style("opacity", "0").remove();
    // enter
    var ygridLine = ygridLines.enter().append("g");
    ygridLine.append("line").style("opacity", "0"), ygridLine.append("text").attr("transform", isRotated ? "rotate(-90)" : "").style("opacity", "0"), ygridLines = ygridLine.merge(ygridLines);
    // update
    var yv = $$.yv.bind($$);
    ygridLines.attr("class", function (d) {
      return (config_classes.ygridLine + " " + (d.class || "")).trim();
    }).select("line").transition().duration(duration).attr("x1", isRotated ? yv : 0).attr("x2", isRotated ? yv : width).attr("y1", isRotated ? 0 : yv).attr("y2", isRotated ? height : yv).transition().style("opacity", "1"), ygridLines.select("text").attr("text-anchor", getGridTextAnchor).attr("dx", getGridTextDx).transition().duration(duration).attr("dy", -5).attr("x", getGridTextX(isRotated, width, height)).attr("y", yv).text(function (d) {
      return d.text;
    }).transition().style("opacity", "1"), $el.gridLines.y = ygridLines;
  },
  redrawGrid: function redrawGrid(withTransition) {
    var $$ = this,
        isRotated = $$.config.axis_rotated,
        _$$$state2 = $$.state,
        width = _$$$state2.width,
        height = _$$$state2.height,
        gridLines = $$.$el.gridLines,
        xv = $$.xv.bind($$),
        lines = gridLines.x.select("line"),
        texts = gridLines.x.select("text");
    return lines = (withTransition ? lines.transition() : lines).attr("x1", isRotated ? 0 : xv).attr("x2", isRotated ? width : xv).attr("y1", isRotated ? xv : 0).attr("y2", isRotated ? xv : height), texts = (withTransition ? texts.transition() : texts).attr("x", getGridTextX(!isRotated, width, height)).attr("y", xv).text(function (d) {
      return d.text;
    }), [(withTransition ? lines.transition() : lines).style("opacity", "1"), (withTransition ? texts.transition() : texts).style("opacity", "1")];
  },
  initFocusGrid: function initFocusGrid() {
    var $$ = this,
        config = $$.config,
        clip = $$.state.clip,
        $el = $$.$el,
        isFront = config.grid_front,
        className = "." + config_classes[isFront && $el.grid.main ? "gridLines" : "chart"] + (isFront ? " + *" : ""),
        grid = $el.grid.main = $el.main.insert("g", className).attr("clip-path", clip.pathGrid).attr("class", config_classes.grid);
    config.grid_x_show && grid.append("g").attr("class", config_classes.xgrids), config.grid_y_show && grid.append("g").attr("class", config_classes.ygrids), config.grid_focus_show && (grid.append("g").attr("class", config_classes.xgridFocus).append("line").attr("class", config_classes.xgridFocus), config.grid_focus_y && !config.tooltip_grouped && grid.append("g").attr("class", config_classes.ygridFocus).append("line").attr("class", config_classes.ygridFocus));
  },

  /**
   * Show grid focus line
   * @param {Array} selectedData
   * @private
   */
  showGridFocus: function showGridFocus(selectedData) {
    var $$ = this,
        config = $$.config,
        _$$$state3 = $$.state,
        width = _$$$state3.width,
        height = _$$$state3.height,
        isRotated = config.axis_rotated,
        dataToShow = selectedData.filter(function (d) {
      return d && isValue($$.getBaseValue(d));
    });

    // Hide when bubble/scatter/stanford plot exists
    if (!(!config.tooltip_show || dataToShow.length === 0 || $$.hasType("bubble") || $$.hasArcType())) {
      var focusEl = $$.$el.main.selectAll("line." + config_classes.xgridFocus + ", line." + config_classes.ygridFocus),
          isEdge = config.grid_focus_edge && !config.tooltip_grouped,
          xx = $$.xx.bind($$);
      focusEl.style("visibility", "visible").data(dataToShow.concat(dataToShow)).each(function (d) {
        var xy,
            el = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
            pos = {
          x: xx(d),
          y: $$.getYScale(d.id)(d.value)
        };
        if (el.classed(config_classes.xgridFocus)) xy = isRotated ? [null, // x1
        pos.x, // y1
        isEdge ? pos.y : width, // x2
        pos.x // y2
        ] : [pos.x, isEdge ? pos.y : null, pos.x, height];else {
          var isY2 = $$.axis.getId(d.id) === "y2";
          xy = isRotated ? [pos.y, // x1
          isEdge && !isY2 ? pos.x : null, // y1
          pos.y, // x2
          isEdge && isY2 ? pos.x : height // y2
          ] : [isEdge && isY2 ? pos.x : null, pos.y, isEdge && !isY2 ? pos.x : width, pos.y];
        }
        ["x1", "y1", "x2", "y2"].forEach(function (v, i) {
          return el.attr(v, xy[i]);
        });
      }), smoothLines(focusEl, "grid");
    }
  },
  hideGridFocus: function hideGridFocus() {
    this.$el.main.selectAll("line." + config_classes.xgridFocus + ", line." + config_classes.ygridFocus).style("visibility", "hidden");
  },
  updategridFocus: function updategridFocus() {
    var $$ = this,
        _$$$state4 = $$.state,
        width = _$$$state4.width,
        height = _$$$state4.height,
        isRotated = $$.config.axis_rotated;
    $$.$el.main.select("line." + config_classes.xgridFocus).attr("x1", isRotated ? 0 : -10).attr("x2", isRotated ? width : -10).attr("y1", isRotated ? -10 : 0).attr("y2", isRotated ? -10 : height);
  },
  generateGridData: function generateGridData(type, scale) {
    var $$ = this,
        tickNum = $$.$el.main.select("." + config_classes.axisX).selectAll(".tick").size(),
        gridData = [];

    if (type === "year") {
      var xDomain = $$.getXDomain(),
          firstYear = xDomain[0].getFullYear(),
          lastYear = xDomain[1].getFullYear();

      for (var i = firstYear; i <= lastYear; i++) gridData.push(new Date(i + "-01-01 00:00:00"));
    } else gridData = scale.ticks(10), gridData.length > tickNum && (gridData = gridData.filter(function (d) {
      return (d + "").indexOf(".") < 0;
    }));

    return gridData;
  },
  getGridFilterToRemove: function getGridFilterToRemove(params) {
    return params ? function (line) {
      var found = !1;
      return (isArray(params) ? params.concat() : [params]).forEach(function (param) {
        ("value" in param && line.value === param.value || "class" in param && line.class === param.class) && (found = !0);
      }), found;
    } : function () {
      return !0;
    };
  },
  removeGridLines: function removeGridLines(params, forX) {
    var $$ = this,
        config = $$.config,
        toRemove = $$.getGridFilterToRemove(params),
        classLines = forX ? config_classes.xgridLines : config_classes.ygridLines,
        classLine = forX ? config_classes.xgridLine : config_classes.ygridLine;
    $$.$el.main.select("." + classLines).selectAll("." + classLine).filter(toRemove).transition().duration(config.transition_duration).style("opacity", "0").remove();
    var gridLines = "grid_" + (forX ? "x" : "y") + "_lines";
    config[gridLines] = config[gridLines].filter(function toShow(line) {
      return !toRemove(line);
    });
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/internals/region.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
 // selection



/* harmony default export */ var region = ({
  initRegion: function initRegion() {
    var $$ = this,
        $el = $$.$el;
    $el.region.main = $el.main.append("g").attr("clip-path", $$.state.clip.path).attr("class", config_classes.regions);
  },
  updateRegion: function updateRegion(duration) {
    var $$ = this,
        config = $$.config,
        $el = $$.$el;
    $el.region.main || $$.initRegion(), $el.region.main.style("visibility", $$.hasArcType() ? "hidden" : "visible");
    // select <g> element
    var list = $el.main.select("." + config_classes.regions).selectAll("." + config_classes.region).data(config.regions);
    list.exit().transition().duration(duration).style("opacity", "0").remove(), list = list.enter().append("g").merge(list).attr("class", $$.classRegion.bind($$)), list.append("rect").style("fill-opacity", "0"), $el.region.list = list;
  },
  redrawRegion: function redrawRegion(withTransition) {
    var $$ = this,
        regions = $$.$el.region.list.select("rect");
    return regions = (withTransition ? regions.transition() : regions).attr("x", $$.regionX.bind($$)).attr("y", $$.regionY.bind($$)).attr("width", $$.regionWidth.bind($$)).attr("height", $$.regionHeight.bind($$)), [(withTransition ? regions.transition() : regions).style("fill-opacity", function (d) {
      return isValue(d.opacity) ? d.opacity : "0.1";
    }).on("end", function () {
      Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this.parentNode).selectAll("rect:not([x])").remove();
    })];
  },
  getRegionXY: function getRegionXY(type, d) {
    var currScale,
        $$ = this,
        config = $$.config,
        scale = $$.scale,
        isRotated = config.axis_rotated,
        isX = type === "x",
        key = "start",
        pos = 0;
    return d.axis === "y" || d.axis === "y2" ? (!isX && (key = "end"), (isX ? isRotated : !isRotated) && key in d && (currScale = scale[d.axis], pos = currScale(d[key]))) : (isX ? !isRotated : isRotated) && key in d && (currScale = scale.zoom || scale.x, pos = currScale($$.isTimeSeries() ? parseDate.call($$, d[key]) : d[key])), pos;
  },
  regionX: function regionX(d) {
    return this.getRegionXY("x", d);
  },
  regionY: function regionY(d) {
    return this.getRegionXY("y", d);
  },
  getRegionSize: function getRegionSize(type, d) {
    var currScale,
        $$ = this,
        config = $$.config,
        scale = $$.scale,
        state = $$.state,
        isRotated = config.axis_rotated,
        isWidth = type === "width",
        start = $$[isWidth ? "regionX" : "regionY"](d),
        key = "end",
        end = state[type];
    return d.axis === "y" || d.axis === "y2" ? (!isWidth && (key = "start"), (isWidth ? isRotated : !isRotated) && key in d && (currScale = scale[d.axis], end = currScale(d[key]))) : (isWidth ? !isRotated : isRotated) && key in d && (currScale = scale.zoom || scale.x, end = currScale($$.isTimeSeries() ? parseDate.call($$, d[key]) : d[key])), end < start ? 0 : end - start;
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
// EXTERNAL MODULE: external {"commonjs":"d3-color","commonjs2":"d3-color","amd":"d3-color","root":"d3"}
var external_commonjs_d3_color_commonjs2_d3_color_amd_d3_color_root_d3_ = __webpack_require__(46);

// CONCATENATED MODULE: ./src/ChartInternal/internals/selection.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var internals_selection = ({
  /**
   * Select a point
   * @private
   * @param {Object} target point
   * @param {Object} data
   * @param {Number} index
   */
  selectPoint: function selectPoint(target, d, i) {
    var $$ = this,
        config = $$.config,
        main = $$.$el.main,
        isRotated = config.axis_rotated,
        cx = (isRotated ? $$.circleY : $$.circleX).bind($$),
        cy = (isRotated ? $$.circleX : $$.circleY).bind($$),
        r = $$.pointSelectR.bind($$);
    // add selected-circle on low layer g
    callFn(config.data_onselected, $$.api, d, target.node()), main.select("." + config_classes.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll("." + config_classes.selectedCircle + "-" + i).data([d]).enter().append("circle").attr("class", function () {
      return $$.generateClass(config_classes.selectedCircle, i);
    }).attr("cx", cx).attr("cy", cy).attr("stroke", $$.color).attr("r", function (d2) {
      return $$.pointSelectR(d2) * 1.4;
    }).transition().duration(100).attr("r", r);
  },

  /**
   * Unelect a point
   * @private
   * @param {Object} target point
   * @param {Object} data
   * @param {Number} index
   */
  unselectPoint: function unselectPoint(target, d, i) {
    var $$ = this,
        config = $$.config,
        $el = $$.$el;
    // remove selected-circle from low layer g
    callFn(config.data_onunselected, $$.api, d, target.node()), $el.main.select("." + config_classes.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll("." + config_classes.selectedCircle + "-" + i).transition().duration(100).attr("r", 0).remove();
  },

  /**
   * Toggles the selection of points
   * @private
   * @param {Boolean} whether or not to select.
   * @param {Object} target point
   * @param {Object} data
   * @param {Number} index
   */
  togglePoint: function togglePoint(selected, target, d, i) {
    var method = (selected ? "" : "un") + "selectPoint";
    this[method](target, d, i);
  },

  /**
   * Select a path
   * @private
   * @param {Object} target path
   * @param {Object} data
   */
  selectPath: function selectPath(target, d) {
    var $$ = this,
        config = $$.config;
    callFn(config.data_onselected, $$.api, d, target.node()), config.interaction_brighten && target.transition().duration(100).style("fill", function () {
      return Object(external_commonjs_d3_color_commonjs2_d3_color_amd_d3_color_root_d3_["rgb"])($$.color(d)).brighter(.75);
    });
  },

  /**
   * Unelect a path
   * @private
   * @param {Object} target path
   * @param {Object} data
   */
  unselectPath: function unselectPath(target, d) {
    var $$ = this,
        config = $$.config;
    callFn(config.data_onunselected, $$.api, d, target.node()), config.interaction_brighten && target.transition().duration(100).style("fill", function () {
      return $$.color(d);
    });
  },

  /**
   * Toggles the selection of lines
   * @private
   * @param {Boolean} whether or not to select.
   * @param {Object} target shape
   * @param {Object} data
   * @param {Number} index
   */
  togglePath: function togglePath(selected, target, d, i) {
    this[(selected ? "" : "un") + "selectPath"](target, d, i);
  },

  /**
   * Returns the toggle method of the target
   * @private
   * @param {Object} target shape
   * @param {Object} data
   * @returns {Function} toggle method
   */
  getToggle: function getToggle(that, d) {
    var $$ = this;
    return that.nodeName === "path" ? $$.togglePath : $$.isStepType(d) ? function () {} : // circle is hidden in step chart, so treat as within the click area
    $$.togglePoint;
  },

  /**
   * Toggles the selection of shapes
   * @private
   * @param {Object} target shape
   * @param {Object} data
   * @param {Number} index
   */
  toggleShape: function toggleShape(that, d, i) {
    var toggledShape,
        $$ = this,
        config = $$.config,
        main = $$.$el.main,
        shape = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(that),
        isSelected = shape.classed(config_classes.SELECTED),
        toggle = $$.getToggle(that, d).bind($$);

    if (config.data_selection_enabled && config.data_selection_isselectable.bind($$.api)(d)) {
      if (!config.data_selection_multiple) {
        var selector = "." + config_classes.shapes;
        config.data_selection_grouped && (selector += $$.getTargetSelectorSuffix(d.id)), main.selectAll(selector).selectAll("." + config_classes.shape).each(function (d, i) {
          var shape = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this);
          shape.classed(config_classes.SELECTED) && (toggledShape = shape, toggle(!1, shape.classed(config_classes.SELECTED, !1), d, i));
        });
      }

      toggledShape && toggledShape.node() === shape.node() || (shape.classed(config_classes.SELECTED, !isSelected), toggle(!isSelected, shape, d, i));
    }
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/shape/bar.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/* harmony default export */ var ChartInternal_shape_bar = ({
  initBar: function initBar() {
    var $$ = this;
    $$.$el.main.select("." + config_classes.chart).append("g").attr("class", config_classes.chartBars);
  },
  updateTargetsForBar: function updateTargetsForBar(targets) {
    var $$ = this,
        config = $$.config,
        $el = $$.$el,
        classChartBar = $$.classChartBar.bind($$),
        classBars = $$.classBars.bind($$),
        classFocus = $$.classFocus.bind($$);
    $el.bar || $$.initBar();
    var mainBarUpdate = $$.$el.main.select("." + config_classes.chartBars).selectAll("." + config_classes.chartBar).data(targets).attr("class", function (d) {
      return classChartBar(d) + classFocus(d);
    }),
        mainBarEnter = mainBarUpdate.enter().append("g").attr("class", classChartBar).style("opacity", "0").style("pointer-events", "none");
    // Bars for each data
    mainBarEnter.append("g").attr("class", classBars).style("cursor", function (d) {
      return config.data_selection_isselectable.bind($$.api)(d) ? "pointer" : null;
    });
  },
  updateBar: function updateBar(durationForExit) {
    var $$ = this,
        $el = $$.$el,
        barData = $$.barData.bind($$),
        classBar = $$.classBar.bind($$),
        initialOpacity = $$.initialOpacity.bind($$);
    $el.bar = $el.main.selectAll("." + config_classes.bars).selectAll("." + config_classes.bar).data(barData), $el.bar.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $el.bar = $el.bar.enter().append("path").attr("class", classBar).style("fill", $$.color).merge($el.bar).style("opacity", initialOpacity);
  },
  redrawBar: function redrawBar(drawBar, withTransition) {
    var bar = this.$el.bar;
    return [(withTransition ? bar.transition(getRandom()) : bar).attr("d", drawBar).style("fill", this.color).style("opacity", "1")];
  },
  getBarW: function getBarW(axis, barTargetsNum) {
    var result,
        $$ = this,
        config = $$.config,
        scale = $$.scale,
        maxDataCount = $$.getMaxDataCount(),
        isGrouped = config.data_groups.length,
        tickInterval = (scale.zoom || $$) && !$$.isCategorized() ? $$.xx(scale.subX.domain()[1]) / maxDataCount : axis.tickInterval(maxDataCount),
        getWidth = function (id) {
      var width = id ? config.bar_width[id] : config.bar_width,
          ratio = id ? width.ratio : config.bar_width_ratio,
          max = id ? width.max : config.bar_width_max,
          w = isNumber(width) ? width : barTargetsNum ? tickInterval * ratio / barTargetsNum : 0;
      return max && w > max ? max : w;
    };

    return result = getWidth(), !isGrouped && isObjectType(config.bar_width) && (result = {
      width: result,
      total: []
    }, $$.filterTargetsToShow($$.data.targets).forEach(function (v) {
      config.bar_width[v.id] && (result[v.id] = getWidth(v.id), result.total.push(result[v.id] || result.width));
    })), result;
  },
  getBars: function getBars(i, id) {
    var $$ = this,
        main = $$.$el.main,
        suffix = isValue(i) ? "-" + i : "";
    return (id ? main.selectAll("." + config_classes.bars + $$.getTargetSelectorSuffix(id)) : main).selectAll("." + config_classes.bar + suffix);
  },
  expandBars: function expandBars(i, id, reset) {
    var $$ = this;
    reset && $$.unexpandBars(), $$.getBars(i, id).classed(config_classes.EXPANDED, !0);
  },
  unexpandBars: function unexpandBars(i) {
    this.getBars(i).classed(config_classes.EXPANDED, !1);
  },
  generateDrawBar: function generateDrawBar(barIndices, isSub) {
    var $$ = this,
        config = $$.config,
        getPoints = $$.generateGetBarPoints(barIndices, isSub),
        isRotated = config.axis_rotated,
        isGrouped = config.data_groups.length,
        barRadius = config.bar_radius,
        barRadiusRatio = config.bar_radius_ratio,
        getRadius = isNumber(barRadius) && barRadius > 0 ? function () {
      return barRadius;
    } : isNumber(barRadiusRatio) ? function (w) {
      return w * barRadiusRatio;
    } : null;
    return function (d, i) {
      // 4 points that make a bar
      var points = getPoints(d, i),
          indexX = +isRotated,
          indexY = +!indexX,
          isNegative = d.value < 0,
          pathRadius = ["", ""],
          radius = 0; // switch points if axis is rotated, not applicable for sub chart

      if (getRadius && !isGrouped) {
        var index = isRotated ? indexY : indexX,
            barW = points[2][index] - points[0][index];
        radius = getRadius(barW);
        var arc = "a" + radius + "," + radius + " " + (isNegative ? "1 0 0" : "0 0 1") + " ";
        pathRadius[+!isRotated] = "" + arc + radius + "," + radius, pathRadius[+isRotated] = "" + arc + [-radius, radius][isRotated ? "sort" : "reverse"](), isNegative && pathRadius.reverse();
      } // path string data shouldn't be containing new line chars
      // https://github.com/naver/billboard.js/issues/530


      var path = isRotated ? "H" + (points[1][indexX] - radius) + " " + pathRadius[0] + "V" + (points[2][indexY] - radius) + " " + pathRadius[1] + "H" + points[3][indexX] : "V" + (points[1][indexY] + (isNegative ? -radius : radius)) + " " + pathRadius[0] + "H" + (points[2][indexX] - radius) + " " + pathRadius[1] + "V" + points[3][indexY];
      return "M" + points[0][indexX] + "," + points[0][indexY] + path + "z";
    };
  },
  generateGetBarPoints: function generateGetBarPoints(barIndices, isSub) {
    var $$ = this,
        config = $$.config,
        axis = isSub ? $$.axis.subX : $$.axis.x,
        barTargetsNum = $$.getIndicesMax(barIndices) + 1,
        barW = $$.getBarW(axis, barTargetsNum),
        barX = $$.getShapeX(barW, barIndices, !!isSub),
        barY = $$.getShapeY(!!isSub),
        barOffset = $$.getShapeOffset($$.isBarType, barIndices, !!isSub),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
      var y0 = yScale.call($$, d.id)(0),
          offset = barOffset(d, i) || y0,
          width = isNumber(barW) ? barW : barW[d.id] || barW.width,
          posX = barX(d),
          posY = barY(d);
      // 4 points that make a bar
      return config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY) && (posY = y0), posY -= y0 - offset, [[posX, offset], [posX, posY], [posX + width, posY], [posX + width, offset]];
    };
  },
  isWithinBar: function isWithinBar(that) {
    var mouse = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(that),
        list = getRectSegList(that),
        _list = list,
        seg0 = _list[0],
        seg1 = _list[1],
        x = Math.min(seg0.x, seg1.x),
        y = Math.min(seg0.y, seg1.y),
        offset = this.config.bar_sensitivity,
        _that$getBBox = that.getBBox(),
        width = _that$getBBox.width,
        height = _that$getBBox.height;

    return x - offset < mouse[0] && mouse[0] < x + width + offset && y - offset < mouse[1] && mouse[1] < y + height + offset;
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/shape/bubble.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var shape_bubble = ({
  /**
   * Initializer
   * @private
   */
  initBubble: function initBubble() {
    var $$ = this,
        config = $$.config;
    $$.hasType("bubble") && (config.point_show = !0, config.point_type = "circle", config.point_sensitivity = 25);
  },

  /**
   * Get user agent's computed value for the total length of the path in user units
   * https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength
   * @return {Number}
   * @private
   */
  getBaseLength: function getBaseLength() {
    var $$ = this,
        axis = $$.$el.axis,
        cacheKey = "$baseLength",
        baseLength = $$.cache.get(cacheKey);
    return baseLength || $$.cache.add(cacheKey, baseLength = getMinMax("min", [axis.x.select("path").node().getTotalLength(), axis.y.select("path").node().getTotalLength()])), baseLength;
  },

  /**
   * Get the radius value for bubble circle
   * @param {Object} d
   * @return {Number}
   * @private
  	 */
  getBubbleR: function getBubbleR(d) {
    var $$ = this,
        maxR = $$.config.bubble_maxR;
    isFunction(maxR) ? maxR = maxR.bind($$.api)(d) : !isNumber(maxR) && (maxR = $$.getBaseLength() / ($$.getMaxDataCount() * 2) + 12);
    var max = getMinMax("max", $$.getMinMaxData().max.map(function (d) {
      return $$.isBubbleZType(d) ? $$.getBubbleZData(d.value, "y") : isObject(d.value) ? d.value.mid : d.value;
    })),
        maxArea = maxR * maxR * Math.PI,
        area = ($$.isBubbleZType(d) ? $$.getBubbleZData(d.value, "z") : d.value) * (maxArea / max);
    return Math.sqrt(area / Math.PI);
  },

  /**
   * Get bubble dimension data
   * @param {Object|Array} d data value
   * @param {String} type - y or z
   * @return {Number}
   * @private
   */
  getBubbleZData: function getBubbleZData(d, type) {
    return isObject(d) ? d[type] : d[type === "y" ? 0 : 1];
  },

  /**
   * Determine if bubble has dimension data
   * @param {Object|array} d data value
   * @return {Boolean}
   * @private
   */
  isBubbleZType: function isBubbleZType(d) {
    var $$ = this;
    return $$.isBubbleType(d) && (isObject(d.value) && ("z" in d.value || "y" in d.value) || isArray(d.value) && d.value.length === 2);
  }
});
// EXTERNAL MODULE: external {"commonjs":"d3-shape","commonjs2":"d3-shape","amd":"d3-shape","root":"d3"}
var external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_ = __webpack_require__(47);

// CONCATENATED MODULE: ./src/ChartInternal/shape/line.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var ChartInternal_shape_line = ({
  initLine: function initLine() {
    var $el = this.$el;
    $el.line = $el.main.select("." + config_classes.chart).append("g").attr("class", config_classes.chartLines);
  },
  updateTargetsForLine: function updateTargetsForLine(targets) {
    var $$ = this,
        $el = $$.$el,
        classChartLine = $$.classChartLine.bind($$),
        classLines = $$.classLines.bind($$),
        classFocus = $$.classFocus.bind($$);
    $el.line || $$.initLine();
    var mainLineUpdate = $el.main.select("." + config_classes.chartLines).selectAll("." + config_classes.chartLine).data(targets).attr("class", function (d) {
      return classChartLine(d) + classFocus(d);
    }),
        mainLineEnter = mainLineUpdate.enter().append("g").attr("class", classChartLine).style("opacity", "0").style("pointer-events", "none");
    // Lines for each data
    mainLineEnter.append("g").attr("class", classLines), $$.hasTypeOf("Area") && mainLineEnter.append("g").attr("class", $$.classAreas.bind($$));
  },
  updateLine: function updateLine(durationForExit) {
    var $$ = this,
        extraLineClasses = $$.format.extraLineClasses,
        $el = $$.$el;
    $el.line = $el.main.selectAll("." + config_classes.lines).selectAll("." + config_classes.line).data($$.lineData.bind($$)), $el.line.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $el.line = $el.line.enter().append("path").attr("class", function (d) {
      return $$.classLine.bind($$)(d) + " " + (extraLineClasses(d) || "");
    }).style("stroke", $$.color).merge($el.line).style("opacity", $$.initialOpacity.bind($$)).style("shape-rendering", function (d) {
      return $$.isStepType(d) ? "crispEdges" : "";
    }).attr("transform", null);
  },
  redrawLine: function redrawLine(drawLine, withTransition) {
    var line = this.$el.line;
    return [(withTransition ? line.transition(getRandom()) : line).attr("d", drawLine).style("stroke", this.color).style("opacity", "1")];
  },

  /**
   * Get the curve interpolate
   * @param {Array} d Data object
   * @return {Function}
   * @private
   */
  getCurve: function getCurve(d) {
    var $$ = this,
        isRotatedStepType = $$.config.axis_rotated && $$.isStepType(d);
    // when is step & rotated, should be computed in different way
    // https://github.com/naver/billboard.js/issues/471
    return isRotatedStepType ? function (context) {
      var step = $$.getInterpolate(d)(context); // keep the original method

      return step.orgPoint = step.point, step.pointRotated = function (x, y) {
        this._point === 1 && (this._point = 2);
        var y1 = this._y * (1 - this._t) + y * this._t;
        this._context.lineTo(this._x, y1), this._context.lineTo(x, y1), this._x = x, this._y = y;
      }, step.point = function (x, y) {
        this._point === 0 ? this.orgPoint(x, y) : this.pointRotated(x, y);
      }, step;
    } : $$.getInterpolate(d);
  },
  generateDrawLine: function generateDrawLine(lineIndices, isSub) {
    var $$ = this,
        config = $$.config,
        scale = $$.scale,
        lineConnectNull = config.line_connectNull,
        isRotated = config.axis_rotated,
        getPoints = $$.generateGetLinePoints(lineIndices, isSub),
        yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
        xValue = function (d) {
      return (isSub ? $$.subxx : $$.xx).call($$, d);
    },
        yValue = function (d, i) {
      return $$.isGrouped(d.id) ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)($$.getBaseValue(d));
    },
        line = Object(external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["line"])();

    line = isRotated ? line.x(yValue).y(xValue) : line.x(xValue).y(yValue), lineConnectNull || (line = line.defined(function (d) {
      return $$.getBaseValue(d) !== null;
    }));
    var x = isSub ? scale.subX : scale.x;
    return function (d) {
      var path,
          y = yScaleGetter.call($$, d.id),
          values = lineConnectNull ? $$.filterRemoveNull(d.values) : d.values,
          x0 = 0,
          y0 = 0;

      if ($$.isLineType(d)) {
        var regions = config.data_regions[d.id];
        regions ? path = $$.lineWithRegions(values, x, y, regions) : ($$.isStepType(d) && (values = $$.convertValuesToStep(values)), path = line.curve($$.getCurve(d))(values));
      } else values[0] && (x0 = x(values[0].x), y0 = y(values[0].value)), path = isRotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;

      return path || "M 0 0";
    };
  },
  generateGetLinePoints: function generateGetLinePoints(lineIndices, isSubValue) {
    // partial duplication of generateGetBarPoints
    var $$ = this,
        config = $$.config,
        isSub = !!isSubValue,
        x = $$.getShapeX(0, lineIndices, isSub),
        y = $$.getShapeY(isSub),
        lineOffset = $$.getShapeOffset($$.isLineType, lineIndices, isSub),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
      var y0 = yScale.call($$, d.id)(0),
          offset = lineOffset(d, i) || y0,
          posX = x(d),
          posY = y(d);
      config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY) && (posY = y0);
      // 1 point that marks the line position
      var point = [posX, posY - (y0 - offset)];
      return [point, point, // from here and below, needed for compatibility
      point, point];
    };
  },
  lineWithRegions: function lineWithRegions(d, x, y, _regions) {
    var xp,
        yp,
        diff,
        diffx2,
        $$ = this,
        config = $$.config,
        isRotated = config.axis_rotated,
        isTimeSeries = $$.isTimeSeries(),
        xOffset = $$.isCategorized() ? .5 : 0,
        regions = [],
        dasharray = "2 2",
        isWithinRegions = function (withinX, withinRegions) {
      for (var reg, i = 0; reg = withinRegions[i]; i++) if (reg.start < withinX && withinX <= reg.end) return reg.style;

      return !1;
    };

    // Check start/end of regions
    if (isDefined(_regions)) {
      var getValue = function (v, def) {
        return isUndefined(v) ? def : isTimeSeries ? parseDate.call($$, v) : v;
      };

      for (var reg, i = 0; reg = _regions[i]; i++) {
        var start = getValue(reg.start, d[0].x),
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
    } // Set scales


    var xValue = isRotated ? function (dt) {
      return y(dt.value);
    } : function (dt) {
      return x(dt.x);
    },
        yValue = isRotated ? function (dt) {
      return x(dt.x);
    } : function (dt) {
      return y(dt.value);
    },
        generateM = function (points) {
      return "M" + points[0][0] + "," + points[0][1] + "L" + points[1][0] + "," + points[1][1];
    },
        sWithRegion = isTimeSeries ? function (d0, d1, k, timeseriesDiff) {
      var x0 = d0.x.getTime(),
          xDiff = d1.x - d0.x,
          xv0 = new Date(x0 + xDiff * k),
          xv1 = new Date(x0 + xDiff * (k + timeseriesDiff)),
          points = isRotated ? [[y(yp(k)), x(xv0)], [y(yp(k + diff)), x(xv1)]] : [[x(xv0), y(yp(k))], [x(xv1), y(yp(k + diff))]];
      return generateM(points);
    } : function (d0, d1, k, otherDiff) {
      var points = isRotated ? [[y(yp(k), !0), x(xp(k))], [y(yp(k + otherDiff), !0), x(xp(k + otherDiff))]] : [[x(xp(k), !0), y(yp(k))], [x(xp(k + otherDiff), !0), y(yp(k + otherDiff))]];
      return generateM(points);
    },
        path = "";

    for (var data, _i = 0; data = d[_i]; _i++) {
      var prevData = d[_i - 1],
          hasPrevData = prevData && isValue(prevData.value),
          style = isWithinRegions(data.x, regions);
      // https://github.com/naver/billboard.js/issues/1172
      if (isValue(data.value)) // Draw as normal
        if (isUndefined(regions) || !style || !hasPrevData) path += "" + (_i && hasPrevData ? "L" : "M") + xValue(data) + "," + yValue(data);else if (hasPrevData) {
          try {
            style = style.dasharray.split(" ");
          } catch (e) {
            style = dasharray.split(" ");
          } // Draw with region // TODO: Fix for horizotal charts


          xp = $$.getScale(prevData.x + xOffset, data.x + xOffset, isTimeSeries), yp = $$.getScale(prevData.value, data.value);
          var dx = x(data.x) - x(prevData.x),
              dy = y(data.value) - y(prevData.value),
              dd = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
          diff = style[0] / dd, diffx2 = diff * style[1];

          for (var _j = diff; _j <= 1; _j += diffx2) path += sWithRegion(prevData, data, _j, diff), _j + diffx2 >= 1 && (path += sWithRegion(prevData, data, 1, 0));
        }
    }

    return path;
  },
  updateAreaGradient: function updateAreaGradient() {
    var $$ = this,
        config = $$.config,
        datetimeId = $$.state.datetimeId,
        defs = $$.$el.defs;
    $$.data.targets.forEach(function (d) {
      var id = datetimeId + "-areaGradient" + $$.getTargetSelectorSuffix(d.id);

      if ($$.isAreaType(d) && defs.select("#" + id).empty()) {
        var color = $$.color(d),
            _config$area_linearGr = config.area_linearGradient,
            _config$area_linearGr2 = _config$area_linearGr.x,
            x = _config$area_linearGr2 === void 0 ? [0, 0] : _config$area_linearGr2,
            _config$area_linearGr3 = _config$area_linearGr.y,
            y = _config$area_linearGr3 === void 0 ? [0, 1] : _config$area_linearGr3,
            _config$area_linearGr4 = _config$area_linearGr.stops,
            stops = _config$area_linearGr4 === void 0 ? [[0, color, 1], [1, color, 0]] : _config$area_linearGr4,
            linearGradient = defs.append("linearGradient").attr("id", "" + id).attr("x1", x[0]).attr("x2", x[1]).attr("y1", y[0]).attr("y2", y[1]);
        stops.forEach(function (v) {
          var stopColor = isFunction(v[1]) ? v[1].bind($$.api)(d.id) : v[1];
          linearGradient.append("stop").attr("offset", v[0]).attr("stop-color", stopColor || color).attr("stop-opacity", v[2]);
        });
      }
    });
  },
  updateAreaColor: function updateAreaColor(d) {
    var $$ = this;
    return $$.config.area_linearGradient ? "url(#" + $$.state.datetimeId + "-areaGradient" + $$.getTargetSelectorSuffix(d.id) + ")" : $$.color(d);
  },
  updateArea: function updateArea(durationForExit) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        $el = $$.$el;
    config.area_linearGradient && $$.updateAreaGradient(), $el.area = $el.main.selectAll("." + config_classes.areas).selectAll("." + config_classes.area).data($$.lineData.bind($$)), $el.area.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $el.area = $el.area.enter().append("path").attr("class", $$.classArea.bind($$)).style("fill", $$.updateAreaColor.bind($$)).style("opacity", function () {
      return state.orgAreaOpacity = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).style("opacity"), "0";
    }).merge($el.area), $el.area.style("opacity", state.orgAreaOpacity);
  },
  redrawArea: function redrawArea(drawArea, withTransition) {
    var $$ = this,
        orgAreaOpacity = $$.state.orgAreaOpacity;
    return [(withTransition ? $$.$el.area.transition(getRandom()) : $$.$el.area).attr("d", drawArea).style("fill", $$.updateAreaColor.bind($$)).style("opacity", function (d) {
      return ($$.isAreaRangeType(d) ? orgAreaOpacity / 1.75 : orgAreaOpacity) + "";
    })];
  },

  /**
   * Generate area path data
   * @param areaIndices
   * @param isSub
   * @return {function(*=): (*|string)}
   * @private
   */
  generateDrawArea: function generateDrawArea(areaIndices, isSub) {
    var $$ = this,
        config = $$.config,
        lineConnectNull = config.line_connectNull,
        isRotated = config.axis_rotated,
        getPoints = $$.generateGetAreaPoints(areaIndices, isSub),
        yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
        xValue = function (d) {
      return (isSub ? $$.subxx : $$.xx).call($$, d);
    },
        value0 = function (d, i) {
      return $$.isGrouped(d.id) ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)($$.isAreaRangeType(d) ? $$.getAreaRangeData(d, "high") : 0);
    },
        value1 = function (d, i) {
      return $$.isGrouped(d.id) ? getPoints(d, i)[1][1] : yScaleGetter.call($$, d.id)($$.isAreaRangeType(d) ? $$.getAreaRangeData(d, "low") : d.value);
    };

    return function (d) {
      var path,
          values = lineConnectNull ? $$.filterRemoveNull(d.values) : d.values,
          x0 = 0,
          y0 = 0;

      if ($$.isAreaType(d)) {
        var area = Object(external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["area"])();
        area = isRotated ? area.y(xValue).x0(value0).x1(value1) : area.x(xValue) // @ts-ignore
        .y0(config.area_above ? 0 : value0).y1(value1), lineConnectNull || (area = area.defined(function (d) {
          return $$.getBaseValue(d) !== null;
        })), $$.isStepType(d) && (values = $$.convertValuesToStep(values)), path = area.curve($$.getCurve(d))(values);
      } else values[0] && (x0 = $$.scale.x(values[0].x), y0 = $$.getYScale(d.id)(values[0].value)), path = isRotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;

      return path || "M 0 0";
    };
  },
  generateGetAreaPoints: function generateGetAreaPoints(areaIndices, isSub) {
    // partial duplication of generateGetBarPoints
    var $$ = this,
        config = $$.config,
        x = $$.getShapeX(0, areaIndices, !!isSub),
        y = $$.getShapeY(!!isSub),
        areaOffset = $$.getShapeOffset($$.isAreaType, areaIndices, !!isSub),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
      var y0 = yScale.call($$, d.id)(0),
          offset = areaOffset(d, i) || y0,
          posX = x(d),
          posY = y(d);
      // 1 point that marks the area position
      return config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY) && (posY = y0), [[posX, offset], [posX, posY - (y0 - offset)], [posX, posY - (y0 - offset)], // needed for compatibility
      [posX, offset] // needed for compatibility
      ];
    };
  },
  isWithinStep: function isWithinStep(that, y) {
    return Math.abs(y - Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(that)[1]) < 30;
  },
  shouldDrawPointsForLine: function shouldDrawPointsForLine(d) {
    var linePoint = this.config.line_point;
    return linePoint === !0 || isArray(linePoint) && linePoint.indexOf(d.id) !== -1;
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/shape/point.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */





var getTransitionName = function () {
  return getRandom();
};

/* harmony default export */ var shape_point = ({
  hasValidPointType: function hasValidPointType(type) {
    return /^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(type || this.config.point_type);
  },
  hasValidPointDrawMethods: function hasValidPointDrawMethods(type) {
    var pointType = type || this.config.point_type;
    return isObjectType(pointType) && isFunction(pointType.create) && isFunction(pointType.update);
  },
  initialOpacityForCircle: function initialOpacityForCircle(d) {
    var withoutFadeIn = this.state.withoutFadeIn;
    return this.getBaseValue(d) !== null && withoutFadeIn[d.id] ? this.opacityForCircle(d) : "0";
  },
  opacityForCircle: function opacityForCircle(d) {
    var opacity = this.config.point_show ? "1" : "0";
    return isValue(this.getBaseValue(d)) ? this.isBubbleType(d) || this.isScatterType(d) ? "0.5" : opacity : "0";
  },
  initCircle: function initCircle() {
    var $$ = this,
        config = $$.config,
        main = $$.$el.main;
    $$.point = $$.generatePoint(), config.point_show && main.select("." + config_classes.chart).append("g").attr("class", config_classes.chartCircles);
  },
  updateTargetForCircle: function updateTargetForCircle(t) {
    var $$ = this,
        config = $$.config,
        data = $$.data,
        $el = $$.$el,
        targets = t || data.targets,
        classCircles = $$.classCircles.bind($$);
    !$el.circle && config.point_show && $$.initCircle();
    var mainCircle = $el.main.select("." + config_classes.chartCircles).style("pointer-events", "none").selectAll("." + config_classes.circles).data(targets).attr("class", classCircles),
        mainCircleEnter = mainCircle.enter();
    // Circles for each data point on lines
    // Update date for selected circles
    config.data_selection_enabled && mainCircleEnter.append("g").attr("class", function (d) {
      return $$.generateClass(config_classes.selectedCircles, d.id);
    }), mainCircleEnter.append("g").attr("class", classCircles).style("cursor", function (d) {
      return config.data_selection_isselectable.bind($$.api)(d) ? "pointer" : null;
    }), targets.forEach(function (t) {
      $el.main.selectAll("." + config_classes.selectedCircles + $$.getTargetSelectorSuffix(t.id)).selectAll("" + config_classes.selectedCircle).each(function (d) {
        d.value = t.values[d.index].value;
      });
    });
  },
  updateCircle: function updateCircle() {
    var $$ = this,
        config = $$.config,
        $el = $$.$el;

    if (config.point_show) {
      var circles = $el.main.selectAll("." + config_classes.circles).selectAll("." + config_classes.circle).data(function (d) {
        return !$$.isBarType(d) && (!$$.isLineType(d) || $$.shouldDrawPointsForLine(d)) && $$.labelishData(d);
      });
      circles.exit().remove();
      var fn = $$.point("create", this, $$.pointR.bind($$), $$.color);
      $el.circle = circles.enter().append(fn).merge(circles).style("stroke", $$.color).style("opacity", $$.initialOpacityForCircle.bind($$));
    }
  },
  redrawCircle: function redrawCircle(cx, cy, withTransition, flow) {
    var $$ = this,
        rendered = $$.state.rendered,
        _$$$$el = $$.$el,
        circle = _$$$$el.circle,
        main = _$$$$el.main,
        selectedCircles = main.selectAll("." + config_classes.selectedCircle);
    if (!$$.config.point_show) return [];
    var fn = $$.point("update", $$, cx, cy, $$.color, withTransition, flow, selectedCircles),
        posAttr = $$.isCirclePoint() ? "c" : "",
        t = getRandom(),
        opacityStyleFn = $$.opacityForCircle.bind($$),
        mainCircles = [];
    return circle.each(function (d) {
      var result = fn.bind(this)(d);
      result = (withTransition || !rendered ? result.transition(t) : result).style("opacity", opacityStyleFn), mainCircles.push(result);
    }), [mainCircles, selectedCircles.attr(posAttr + "x", cx).attr(posAttr + "y", cy)];
  },
  circleX: function circleX(d) {
    var $$ = this,
        _$$$scale = $$.scale,
        x = _$$$scale.x,
        zoom = _$$$scale.zoom,
        hasValue = isValue(d.x);
    return $$.config.zoom_enabled && zoom ? hasValue ? zoom(d.x) : null : hasValue ? x(d.x) : null;
  },
  updateCircleY: function updateCircleY() {
    var $$ = this,
        getPoints = $$.generateGetLinePoints($$.getShapeIndices($$.isLineType), !1);

    $$.circleY = function (d, i) {
      var id = d.id;
      return $$.isGrouped(id) ? getPoints(d, i)[0][1] : $$.getYScale(id)($$.getBaseValue(d));
    };
  },
  getCircles: function getCircles(i, id) {
    var $$ = this,
        suffix = isValue(i) ? "-" + i : "";
    return (id ? $$.$el.main.selectAll("." + config_classes.circles + $$.getTargetSelectorSuffix(id)) : $$.$el.main).selectAll("." + config_classes.circle + suffix);
  },
  expandCircles: function expandCircles(i, id, reset) {
    var $$ = this,
        r = $$.pointExpandedR.bind($$);
    reset && $$.unexpandCircles();
    var circles = $$.getCircles(i, id).classed(config_classes.EXPANDED, !0),
        scale = r(circles) / $$.config.point_r,
        ratio = 1 - scale;
    $$.isCirclePoint() ? circles.attr("r", r) : circles.each(function () {
      var point = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this);
      if (this.tagName === "circle") point.attr("r", r);else {
        var _this$getBBox = this.getBBox(),
            width = _this$getBBox.width,
            height = _this$getBBox.height,
            x = ratio * (+point.attr("x") + width / 2),
            y = ratio * (+point.attr("y") + height / 2);

        point.attr("transform", "translate(" + x + " " + y + ") scale(" + scale + ")");
      }
    });
  },
  unexpandCircles: function unexpandCircles(i) {
    var $$ = this,
        r = $$.pointR.bind($$),
        circles = $$.getCircles(i).filter(function () {
      return Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).classed(config_classes.EXPANDED);
    }).classed(config_classes.EXPANDED, !1);
    circles.attr("r", r), $$.isCirclePoint() || circles.attr("transform", "scale(" + r(circles) / $$.config.point_r + ")");
  },
  pointR: function (d) {
    var $$ = this,
        config = $$.config,
        pointR = config.point_r,
        r = pointR;
    return $$.isStepType(d) ? r = 0 : $$.isBubbleType(d) ? r = $$.getBubbleR(d) : isFunction(pointR) && (r = pointR.bind($$.api)(d)), r;
  },
  pointExpandedR: function pointExpandedR(d) {
    var $$ = this,
        config = $$.config,
        scale = $$.isBubbleType(d) ? 1.15 : 1.75;
    return config.point_focus_expand_enabled ? config.point_focus_expand_r || $$.pointR(d) * scale : $$.pointR(d);
  },
  pointSelectR: function pointSelectR(d) {
    var $$ = this,
        selectR = $$.config.point_select_r;
    return isFunction(selectR) ? selectR(d) : selectR || $$.pointR(d) * 4;
  },
  isWithinCircle: function isWithinCircle(node, r) {
    var mouse = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["mouse"])(node),
        element = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(node),
        prefix = this.isCirclePoint() ? "c" : "",
        cx = +element.attr(prefix + "x"),
        cy = +element.attr(prefix + "y");

    // if node don't have cx/y or x/y attribute value
    if (!(cx || cy) && node.nodeType === 1) {
      var _getBoundingRect = getBoundingRect(node),
          x = _getBoundingRect.x,
          y = _getBoundingRect.y;

      cx = x, cy = y;
    }

    return Math.sqrt(Math.pow(cx - mouse[0], 2) + Math.pow(cy - mouse[1], 2)) < (r || this.config.point_sensitivity);
  },
  insertPointInfoDefs: function insertPointInfoDefs(point, id) {
    var $$ = this,
        copyAttr = function (from, target) {
      for (var name, attribs = from.attributes, i = 0; name = attribs[i]; i++) name = name.name, target.setAttribute(name, from.getAttribute(name));
    },
        doc = new DOMParser().parseFromString(point, "image/svg+xml"),
        node = doc.documentElement,
        clone = browser_doc.createElementNS(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["namespaces"].svg, node.nodeName.toLowerCase());

    if (clone.id = id, clone.style.fill = "inherit", clone.style.stroke = "inherit", copyAttr(node, clone), node.childNodes && node.childNodes.length) {
      var parent = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(clone);
      "innerHTML" in clone ? parent.html(node.innerHTML) : toArray(node.childNodes).forEach(function (v) {
        copyAttr(v, parent.append(v.tagName).node());
      });
    }

    $$.$el.defs.node().appendChild(clone);
  },
  pointFromDefs: function pointFromDefs(id) {
    return this.$el.defs.select("#" + id);
  },
  updatePointClass: function updatePointClass(d) {
    var $$ = this,
        circle = $$.$el.circle,
        pointClass = !1;
    return (isObject(d) || circle) && (pointClass = d === !0 ? circle.attr("class", $$.classCircle.bind($$)) : $$.classCircle(d)), pointClass;
  },
  generatePoint: function generatePoint() {
    var $$ = this,
        config = $$.config,
        datetimeId = $$.state.datetimeId,
        ids = [],
        pattern = notEmpty(config.point_pattern) ? config.point_pattern : [config.point_type];
    return function (method, context) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];

      return function (d) {
        var id = d.id || d.data && d.data.id || d,
            element = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this);
        ids.indexOf(id) < 0 && ids.push(id);
        var point = pattern[ids.indexOf(id) % pattern.length];
        if ($$.hasValidPointType(point)) point = $$[point];else if (!$$.hasValidPointDrawMethods(point)) {
          var pointId = datetimeId + "-point-" + id,
              pointFromDefs = $$.pointFromDefs(pointId);
          if (pointFromDefs.size() < 1 && $$.insertPointInfoDefs(point, pointId), method === "create") return $$.custom.create.bind(context).apply(void 0, [element, pointId].concat(args));
          if (method === "update") return $$.custom.update.bind(context).apply(void 0, [element].concat(args));
        }
        return point[method].bind(context).apply(void 0, [element].concat(args));
      };
    };
  },
  custom: {
    create: function create(element, id, sizeFn, fillStyleFn) {
      return element.append("use").attr("xlink:href", "#" + id).attr("class", this.updatePointClass.bind(this)).style("fill", fillStyleFn).node();
    },
    update: function update(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow, selectedCircles) {
      var $$ = this,
          _element$node$getBBox = element.node().getBBox(),
          width = _element$node$getBBox.width,
          height = _element$node$getBBox.height,
          xPosFn2 = function (d) {
        return xPosFn(d) - width / 2;
      },
          mainCircles = element;

      if (withTransition) {
        var transitionName = getTransitionName();
        flow && mainCircles.attr("x", xPosFn2), mainCircles = mainCircles.transition(transitionName), selectedCircles.transition(getTransitionName());
      }

      return mainCircles.attr("x", xPosFn2).attr("y", function yPosFn2(d) {
        return yPosFn(d) - height / 2;
      }).style("fill", fillStyleFn);
    }
  },
  // 'circle' data point
  circle: {
    create: function create(element, sizeFn, fillStyleFn) {
      return element.append("circle").attr("class", this.updatePointClass.bind(this)).attr("r", sizeFn).style("fill", fillStyleFn).node();
    },
    update: function update(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow, selectedCircles) {
      var $$ = this,
          mainCircles = element;

      if ($$.hasType("bubble") && mainCircles.attr("r", $$.pointR.bind($$)), withTransition) {
        var transitionName = getTransitionName();
        flow && mainCircles.attr("cx", xPosFn), mainCircles.attr("cx") && (mainCircles = mainCircles.transition(transitionName)), selectedCircles.transition(getTransitionName());
      }

      return mainCircles.attr("cx", xPosFn).attr("cy", yPosFn).style("fill", fillStyleFn);
    }
  },
  // 'rectangle' data point
  rectangle: {
    create: function create(element, sizeFn, fillStyleFn) {
      var rectSizeFn = function (d) {
        return sizeFn(d) * 2;
      };

      return element.append("rect").attr("class", this.updatePointClass.bind(this)).attr("width", rectSizeFn).attr("height", rectSizeFn).style("fill", fillStyleFn).node();
    },
    update: function update(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow, selectedCircles) {
      var $$ = this,
          r = $$.config.point_r,
          rectXPosFn = function (d) {
        return xPosFn(d) - r;
      },
          mainCircles = element;

      if (withTransition) {
        var transitionName = getTransitionName();
        flow && mainCircles.attr("x", rectXPosFn), mainCircles = mainCircles.transition(transitionName), selectedCircles.transition(getTransitionName());
      }

      return mainCircles.attr("x", rectXPosFn).attr("y", function rectYPosFn(d) {
        return yPosFn(d) - r;
      }).style("fill", fillStyleFn);
    }
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/shape/shape.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */




/* harmony default export */ var shape_shape = ({
  /**
   * Get the shape draw function
   * @return {Object}
   * @private
   */
  getDrawShape: function getDrawShape() {
    var $$ = this,
        isRotated = $$.config.axis_rotated,
        hasRadar = $$.state.hasRadar,
        shape = {
      type: {},
      indices: {},
      pos: {}
    };

    // setup drawer - MEMO: these must be called after axis updated
    if ($$.hasTypeOf("Line") || $$.hasType("bubble") || $$.hasType("scatter")) {
      var indices = $$.getShapeIndices($$.isLineType);

      if (shape.indices.line = indices, shape.type.line = $$.generateDrawLine ? $$.generateDrawLine(indices, !1) : undefined, $$.hasTypeOf("Area")) {
        var _indices = $$.getShapeIndices($$.isAreaType);

        shape.indices.area = _indices, shape.type.area = $$.generateDrawArea ? $$.generateDrawArea(_indices, !1) : undefined;
      }
    }

    if ($$.hasType("bar")) {
      var _indices2 = $$.getShapeIndices($$.isBarType);

      shape.indices.bar = _indices2, shape.type.bar = $$.generateDrawBar ? $$.generateDrawBar(_indices2) : undefined;
    }

    return (!$$.hasArcType() || hasRadar) && (shape.pos = {
      xForText: $$.generateXYForText(shape.indices, !0),
      yForText: $$.generateXYForText(shape.indices, !1),
      // generate circle x/y functions depending on updated params
      cx: (hasRadar ? $$.radarCircleX : isRotated ? $$.circleY : $$.circleX).bind($$),
      cy: (hasRadar ? $$.radarCircleY : isRotated ? $$.circleX : $$.circleY).bind($$)
    }), shape;
  },
  getShapeIndices: function getShapeIndices(typeFilter) {
    var $$ = this,
        config = $$.config,
        xs = config.data_xs,
        hasXs = notEmpty(xs),
        indices = {},
        i = hasXs ? {} : 0;
    return hasXs && getUnique(Object.keys(xs).map(function (v) {
      return xs[v];
    })).forEach(function (v) {
      i[v] = 0, indices[v] = {};
    }), $$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)).forEach(function (d) {
      for (var groups, xKey = (d.id in xs) ? xs[d.id] : "", ind = xKey ? indices[xKey] : indices, j = 0; groups = config.data_groups[j]; j++) if (!(groups.indexOf(d.id) < 0)) for (var _row4, _k4 = 0; _row4 = groups[_k4]; _k4++) if (_row4 in ind) {
        ind[d.id] = ind[_row4];
        break;
      }

      isUndefined(ind[d.id]) && (ind[d.id] = xKey ? i[xKey]++ : i++, ind.__max__ = (xKey ? i[xKey] : i) - 1);
    }), indices;
  },

  /**
   * Get indices value based on data ID value
   * @param {Object} indices Indices object
   * @param {String} id Data id value
   * @return {Object} Indices object
   * @private
   */
  getIndices: function getIndices(indices, id) {
    var xs = this.config.data_xs;
    return notEmpty(xs) ? indices[xs[id]] : indices;
  },

  /**
   * Get indices max number
   * @param {Object} indices Indices object
   * @return {Number} Max number
   * @private
   */
  getIndicesMax: function getIndicesMax(indices) {
    return notEmpty(this.config.data_xs) ? // if is multiple xs, return total sum of xs' __max__ value
    Object.keys(indices).map(function (v) {
      return indices[v].__max__ || 0;
    }).reduce(function (acc, curr) {
      return acc + curr;
    }) : indices.__max__;
  },
  getShapeX: function getShapeX(offset, indices, isSub) {
    var $$ = this,
        config = $$.config,
        scale = $$.scale,
        currScale = isSub ? scale.subX : scale.zoom || scale.x,
        barPadding = config.bar_padding,
        sum = function (p, c) {
      return p + c;
    },
        halfWidth = isObjectType(offset) && offset.total.length ? offset.total.reduce(sum) / 2 : 0;

    return function (d) {
      var ind = $$.getIndices(indices, d.id),
          index = d.id in ind ? ind[d.id] : 0,
          targetsNum = (ind.__max__ || 0) + 1,
          x = 0;

      if (notEmpty(d.x)) {
        var xPos = currScale(d.x);
        x = halfWidth ? xPos - (offset[d.id] || offset.width) + offset.total.slice(0, index + 1).reduce(sum) - halfWidth : xPos - (isNumber(offset) ? offset : offset.width) * (targetsNum / 2 - index);
      } // adjust x position for bar.padding optionq


      return offset && x && targetsNum > 1 && barPadding && (index && (x += barPadding * index), targetsNum > 2 ? x -= (targetsNum - 1) * barPadding / 2 : targetsNum === 2 && (x -= barPadding / 2)), x;
    };
  },
  getShapeY: function getShapeY(isSub) {
    var $$ = this,
        isStackNormalized = $$.isStackNormalized();
    return function (d) {
      var value = isStackNormalized ? $$.getRatio("index", d, !0) : $$.isBubbleZType(d) ? $$.getBubbleZData(d.value, "y") : d.value;
      return (isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id))(value);
    };
  },

  /**
   * Get Shape's offset data
   * @param {function(Object): boolean} typeFilter
   * @return {{shapeOffsetTargets: ShapeOffsetTarget[], indexMapByTargetId: object}}
   * @private
   */
  getShapeOffsetData: function getShapeOffsetData(typeFilter) {
    var $$ = this,
        targets = $$.orderTargets($$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$))),
        shapeOffsetTargets = targets.map(function (target) {
      var rowValues = target.values;
      $$.isStepType(target) && (rowValues = $$.convertValuesToStep(rowValues));
      var rowValueMapByXValue = rowValues.reduce(function (out, value) {
        return out[+value.x] = value, out;
      }, {}),
          values = rowValues.map($$.isStackNormalized() ? function (v) {
        return $$.getRatio("index", v, !0);
      } : function (_ref) {
        var value = _ref.value;
        return value;
      });
      return {
        id: target.id,
        rowValues: rowValues,
        rowValueMapByXValue: rowValueMapByXValue,
        values: values
      };
    }),
        indexMapByTargetId = targets.reduce(function (out, _ref2, index) {
      var id = _ref2.id;
      return out[id] = index, out;
    }, {});
    return {
      indexMapByTargetId: indexMapByTargetId,
      shapeOffsetTargets: shapeOffsetTargets
    };
  },
  getShapeOffset: function getShapeOffset(typeFilter, indices, isSub) {
    var $$ = this,
        _$$$getShapeOffsetDat = $$.getShapeOffsetData(typeFilter),
        shapeOffsetTargets = _$$$getShapeOffsetDat.shapeOffsetTargets,
        indexMapByTargetId = _$$$getShapeOffsetDat.indexMapByTargetId;

    return function (d, idx) {
      var ind = $$.getIndices(indices, d.id),
          scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id),
          y0 = scale(0),
          dataXAsNumber = +d.x,
          offset = y0;
      return shapeOffsetTargets.forEach(function (t) {
        var rowValues = t.rowValues,
            values = t.values;

        if (t.id !== d.id && ind[t.id] === ind[d.id] && indexMapByTargetId[t.id] < indexMapByTargetId[d.id]) {
          var _rowValue = rowValues[idx]; // check if the x values line up

          _rowValue && +_rowValue.x === dataXAsNumber || (_rowValue = t.rowValueMapByXValue[dataXAsNumber]), _rowValue && _rowValue.value * d.value >= 0 && (offset += scale(values[_rowValue.index]) - y0);
        }
      }), offset;
    };
  },
  isWithinShape: function isWithinShape(that, d) {
    var isWithin,
        $$ = this,
        shape = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(that);
    return $$.isTargetToShow(d.id) ? $$.hasValidPointType(that.nodeName) ? isWithin = $$.isStepType(d) ? $$.isWithinStep(that, $$.getYScale(d.id)(d.value)) : $$.isWithinCircle(that, $$.isBubbleType(d) ? $$.pointSelectR(d) * 1.5 : 0) : that.nodeName === "path" && (isWithin = !shape.classed(config_classes.bar) || $$.isWithinBar(that)) : isWithin = !1, isWithin;
  },
  getInterpolate: function getInterpolate(d) {
    var $$ = this,
        interpolation = $$.getInterpolateType(d);
    return {
      "basis": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveBasis"],
      "basis-closed": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveBasisClosed"],
      "basis-open": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveBasisOpen"],
      "bundle": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveBundle"],
      "cardinal": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveCardinal"],
      "cardinal-closed": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveCardinalClosed"],
      "cardinal-open": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveCardinalOpen"],
      "catmull-rom": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveCatmullRom"],
      "catmull-rom-closed": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveCatmullRomClosed"],
      "catmull-rom-open": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveCatmullRomOpen"],
      "monotone-x": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveMonotoneX"],
      "monotone-y": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveMonotoneY"],
      "natural": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveNatural"],
      "linear-closed": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveLinearClosed"],
      "linear": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveLinear"],
      "step": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveStep"],
      "step-after": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveStepAfter"],
      "step-before": external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["curveStepBefore"]
    }[interpolation];
  },
  getInterpolateType: function getInterpolateType(d) {
    var $$ = this,
        config = $$.config,
        type = config.spline_interpolation_type,
        interpolation = $$.isInterpolationType(type) ? type : "cardinal";
    return $$.isSplineType(d) ? interpolation : $$.isStepType(d) ? config.line_step_type : "linear";
  }
});
// CONCATENATED MODULE: ./src/config/resolver/axis.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Modules exports for Axis based chart
 */
// Chart









 // ChartInternal
















/* harmony default export */ var resolver_axis = ({
  api: [api_axis, category, api_flow, grid_x, grid_y, group, api_regions, api_selection, api_x, api_zoom],
  internal: [internals_category, interactions_drag, interactions_flow, interactions_subchart, interactions_zoom, internals_clip, internals_grid, region, internals_selection, eventrect, ChartInternal_shape_bar, shape_bubble, ChartInternal_shape_line, shape_point, shape_shape]
});
// EXTERNAL MODULE: external {"commonjs":"d3-interpolate","commonjs2":"d3-interpolate","amd":"d3-interpolate","root":"d3"}
var external_commonjs_d3_interpolate_commonjs2_d3_interpolate_amd_d3_interpolate_root_d3_ = __webpack_require__(48);

// CONCATENATED MODULE: ./src/ChartInternal/shape/arc.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */






/* harmony default export */ var shape_arc = ({
  initPie: function initPie() {
    var $$ = this,
        config = $$.config,
        dataType = config.data_type,
        padding = config.pie_padding,
        startingAngle = config[dataType + "_startingAngle"] || 0,
        padAngle = ($$.hasType("pie") && padding ? padding * .01 : config[dataType + "_padAngle"]) || 0,
        sortValue = $$.isOrderAsc() || $$.isOrderDesc() ? function (a, b) {
      return $$.isOrderAsc() ? a - b : b - a;
    } : null;
    $$.pie = Object(external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["pie"])().startAngle(startingAngle).endAngle(startingAngle + 2 * Math.PI).padAngle(padAngle).sortValues(sortValue).value(function (d) {
      return d.values.reduce(function (a, b) {
        return a + b.value;
      }, 0);
    });
  },
  updateRadius: function updateRadius() {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        radius = config.pie_innerRadius,
        padding = config.pie_padding,
        w = config.gauge_width || config.donut_width,
        gaugeArcWidth = $$.filterTargetsToShow($$.data.targets).length * config.gauge_arcs_minWidth;
    state.radiusExpanded = Math.min(state.arcWidth, state.arcHeight) / 2 * ($$.hasMultiArcGauge() ? .85 : 1), state.radius = state.radiusExpanded * .95, state.innerRadiusRatio = w ? (state.radius - w) / state.radius : .6, state.gaugeArcWidth = w || (gaugeArcWidth <= state.radius - state.innerRadius ? state.radius - state.innerRadius : gaugeArcWidth <= state.radius ? gaugeArcWidth : state.radius);
    var innerRadius = radius || (padding ? padding * (state.innerRadiusRatio + .1) : 0); // NOTE: innerRadius can be an object by user setting, only for 'pie' type

    state.innerRadius = $$.hasType("donut") || $$.hasType("gauge") ? state.radius * state.innerRadiusRatio : innerRadius;
  },
  getInnerRadius: function getInnerRadius(d) {
    var $$ = this,
        innerRadius = $$.state.innerRadius;
    return !isNumber(innerRadius) && d && (innerRadius = innerRadius[d.data.id] || 0), innerRadius;
  },
  updateArc: function updateArc() {
    var $$ = this;
    $$.svgArc = $$.getSvgArc(), $$.svgArcExpanded = $$.getSvgArcExpanded();
  },
  updateAngle: function updateAngle(dValue) {
    var $$ = this,
        config = $$.config,
        pie = $$.pie,
        d = dValue,
        found = !1;
    if (!config) return null;
    var radius = Math.PI * (config.gauge_fullCircle ? 2 : 1),
        gStart = config.gauge_startingAngle;

    if (d.data && $$.isGaugeType(d.data)) {
      var totalSum = $$.getTotalDataSum(); // if gauge_max less than totalSum, make totalSum to max value

      totalSum > config.gauge_max && (config.gauge_max = totalSum);
      var gEnd = radius * (totalSum / (config.gauge_max - config.gauge_min));
      pie = pie.startAngle(gStart).endAngle(gEnd + gStart);
    }

    if (pie($$.filterTargetsToShow()).forEach(function (t, i) {
      found || t.data.id !== d.data.id || (found = !0, d = t, d.index = i);
    }), isNaN(d.startAngle) && (d.startAngle = 0), isNaN(d.endAngle) && (d.endAngle = d.startAngle), d.data && $$.hasMultiArcGauge()) {
      var maxValue = $$.getMinMaxData().max[0].value; // if gauge_max less than maxValue, make maxValue to max value

      maxValue > config.gauge_max && (config.gauge_max = maxValue);
      var gMin = config.gauge_min,
          gMax = config.gauge_max,
          gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : gMax - gMin;
      d.startAngle = gStart, d.endAngle = gStart + radius / (gMax - gMin) * gValue;
    }

    return found ? d : null;
  },
  getSvgArc: function getSvgArc() {
    var $$ = this,
        state = $$.state,
        ir = $$.getInnerRadius(),
        singleArcWidth = state.gaugeArcWidth / $$.filterTargetsToShow($$.data.targets).length,
        hasMultiArcGauge = $$.hasMultiArcGauge(),
        arc = Object(external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["arc"])().outerRadius(function (d) {
      return hasMultiArcGauge ? state.radius - singleArcWidth * d.index : state.radius;
    }).innerRadius(function (d) {
      return hasMultiArcGauge ? state.radius - singleArcWidth * (d.index + 1) : isNumber(ir) ? ir : 0;
    }),
        newArc = function (d, withoutUpdate) {
      var path = "M 0 0";

      if (d.value || d.data) {
        isNumber(ir) || (arc = arc.innerRadius($$.getInnerRadius(d)));
        var updated = !withoutUpdate && $$.updateAngle(d);
        withoutUpdate ? path = arc(d) : updated && (path = arc(updated));
      }

      return path;
    };

    return newArc.centroid = arc.centroid, newArc;
  },
  getSvgArcExpanded: function getSvgArcExpanded(rate) {
    var $$ = this,
        state = $$.state,
        newRate = rate || 1,
        singleArcWidth = state.gaugeArcWidth / $$.filterTargetsToShow($$.data.targets).length,
        hasMultiArcGauge = $$.hasMultiArcGauge(),
        expandWidth = Math.min(state.radiusExpanded * newRate - state.radius, singleArcWidth * .8 - (1 - newRate) * 100),
        arc = Object(external_commonjs_d3_shape_commonjs2_d3_shape_amd_d3_shape_root_d3_["arc"])().outerRadius(function (d) {
      return hasMultiArcGauge ? state.radius - singleArcWidth * d.index + expandWidth : state.radiusExpanded * newRate;
    }).innerRadius(function (d) {
      return hasMultiArcGauge ? state.radius - singleArcWidth * (d.index + 1) : state.innerRadius;
    });
    return function (d) {
      var updated = $$.updateAngle(d);
      return updated ? (hasMultiArcGauge ? arc : arc.innerRadius($$.getInnerRadius(d)))(updated) : "M 0 0";
    };
  },
  getArc: function getArc(d, withoutUpdate, force) {
    return force || this.isArcType(d.data) ? this.svgArc(d, withoutUpdate) : "M 0 0";
  },
  transformForArcLabel: function transformForArcLabel(d) {
    var $$ = this,
        config = $$.config,
        _$$$state = $$.state,
        radius = _$$$state.radius,
        radiusExpanded = _$$$state.radiusExpanded,
        updated = $$.updateAngle(d),
        translate = "";
    if (updated) if ($$.hasMultiArcGauge()) {
      var y1 = Math.sin(updated.endAngle - Math.PI / 2),
          x = Math.cos(updated.endAngle - Math.PI / 2) * (radiusExpanded + 25),
          y = y1 * (radiusExpanded + 15 - Math.abs(y1 * 10)) + 3;
      translate = "translate(" + x + "," + y + ")";
    } else if (!$$.hasType("gauge") || $$.data.targets.length > 1) {
      var c = this.svgArc.centroid(updated),
          x = isNaN(c[0]) ? 0 : c[0],
          y = isNaN(c[1]) ? 0 : c[1],
          h = Math.sqrt(x * x + y * y),
          ratio = $$.hasType("donut") && config.donut_label_ratio || $$.hasType("pie") && config.pie_label_ratio;
      ratio = ratio ? isFunction(ratio) ? ratio.bind($$.api)(d, radius, h) : ratio : radius && (h ? (36 / radius > .375 ? 1.175 - 36 / radius : .8) * radius / h : 0), translate = "translate(" + x * ratio + "," + y * ratio + ")";
    }
    return translate;
  },
  convertToArcData: function convertToArcData(d) {
    return this.addName({
      id: d.data.id,
      value: d.value,
      ratio: this.getRatio("arc", d),
      index: d.index
    });
  },
  textForArcLabel: function textForArcLabel(selection) {
    var $$ = this;
    $$.shouldShowArcLabel() && selection.each(function (d) {
      var node = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
          updated = $$.updateAngle(d),
          value = updated ? updated.value : d.value,
          ratio = $$.getRatio("arc", updated),
          id = d.data.id,
          hasGauge = $$.hasType("gauge"),
          isUnderThreshold = hasGauge || $$.meetsArcLabelThreshold(ratio);

      if (isUnderThreshold) {
        var text = ($$.getArcLabelFormat() || $$.defaultArcValueFormat)(value, ratio, id).toString();
        setTextValue(node, text, [-1, 1], hasGauge);
      }
    });
  },
  textForGaugeMinMax: function textForGaugeMinMax(value, isMax) {
    var $$ = this,
        config = $$.config,
        format = config.gauge_label_extents;
    return isFunction(format) ? format.bind($$.api)(value, isMax) : value;
  },
  expandArc: function expandArc(targetIds) {
    var $$ = this,
        transiting = $$.state.transiting,
        $el = $$.$el;

    // MEMO: avoid to cancel transition
    if (transiting) {
      var interval = setInterval(function () {
        transiting || (clearInterval(interval), $el.legend.selectAll("." + config_classes.legendItemFocused).size() > 0 && $$.expandArc(targetIds));
      }, 10);
      return;
    }

    var newTargetIds = $$.mapToTargetIds(targetIds);
    $el.svg.selectAll($$.selectorTargets(newTargetIds, "." + config_classes.chartArc)).each(function (d) {
      if ($$.shouldExpand(d.data.id)) {
        var expandDuration = $$.getExpandConfig(d.data.id, "duration"),
            svgArcExpandedSub = $$.getSvgArcExpanded($$.getExpandConfig(d.data.id, "rate"));
        Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).selectAll("path").transition().duration(expandDuration).attr("d", $$.svgArcExpanded).transition().duration(expandDuration * 2).attr("d", svgArcExpandedSub);
      }
    });
  },
  unexpandArc: function unexpandArc(targetIds) {
    var $$ = this,
        transiting = $$.state.transiting,
        svg = $$.$el.svg;

    if (!transiting) {
      var newTargetIds = $$.mapToTargetIds(targetIds);
      svg.selectAll($$.selectorTargets(newTargetIds, "." + config_classes.chartArc)).selectAll("path").transition().duration(function (d) {
        return $$.getExpandConfig(d.data.id, "duration");
      }).attr("d", $$.svgArc), svg.selectAll("" + config_classes.arc).style("opacity", "1");
    }
  },

  /**
   * Get expand config value
   * @param {String} id data ID
   * @param {String} key config key: 'duration | rate'
   * @return {Number}
   * @private
   */
  getExpandConfig: function getExpandConfig(id, key) {
    var type,
        $$ = this,
        config = $$.config;
    return $$.isDonutType(id) ? type = "donut" : $$.isGaugeType(id) ? type = "gauge" : $$.isPieType(id) && (type = "pie"), type ? config[type + "_expand_" + key] : {
      duration: 50,
      rate: .98
    }[key];
  },
  shouldExpand: function shouldExpand(id) {
    var $$ = this,
        config = $$.config;
    return $$.isDonutType(id) && config.donut_expand || $$.isGaugeType(id) && config.gauge_expand || $$.isPieType(id) && config.pie_expand;
  },
  shouldShowArcLabel: function shouldShowArcLabel() {
    var $$ = this,
        config = $$.config;
    return ["pie", "donut", "gauge"].some(function (v) {
      return $$.hasType(v) && config[v + "_label_show"];
    });
  },
  meetsArcLabelThreshold: function meetsArcLabelThreshold(ratio) {
    var $$ = this,
        config = $$.config,
        threshold = $$.hasType("donut") ? config.donut_label_threshold : config.pie_label_threshold;
    return ratio >= threshold;
  },
  getArcLabelFormat: function getArcLabelFormat() {
    var $$ = this,
        config = $$.config,
        format = config.pie_label_format;
    return $$.hasType("gauge") ? format = config.gauge_label_format : $$.hasType("donut") && (format = config.donut_label_format), isFunction(format) ? format.bind($$.api) : format;
  },
  getArcTitle: function getArcTitle() {
    var $$ = this,
        type = $$.hasType("donut") && "donut" || $$.hasType("gauge") && "gauge";
    return type ? $$.config[type + "_title"] : "";
  },
  updateTargetsForArc: function updateTargetsForArc(targets) {
    var $$ = this,
        main = $$.$el.main,
        hasGauge = $$.hasType("gauge"),
        classChartArc = $$.classChartArc.bind($$),
        classArcs = $$.classArcs.bind($$),
        classFocus = $$.classFocus.bind($$),
        mainPieUpdate = main.select("." + config_classes.chartArcs).selectAll("." + config_classes.chartArc).data($$.pie(targets)).attr("class", function (d) {
      return classChartArc(d) + classFocus(d.data);
    }),
        mainPieEnter = mainPieUpdate.enter().append("g").attr("class", classChartArc);
    mainPieEnter.append("g").attr("class", classArcs).merge(mainPieUpdate), mainPieEnter.append("text").attr("dy", hasGauge && !$$.hasMultiTargets() ? "-.1em" : ".35em").style("opacity", "0").style("text-anchor", "middle").style("pointer-events", "none");
  },
  initArc: function initArc() {
    var $$ = this,
        $el = $$.$el;
    $el.arcs = $el.main.select("." + config_classes.chart).append("g").attr("class", config_classes.chartArcs).attr("transform", $$.getTranslate("arc")), $$.setArcTitle();
  },

  /**
   * Set arc title text
   * @private
   */
  setArcTitle: function setArcTitle() {
    var $$ = this,
        title = $$.getArcTitle(),
        hasGauge = $$.hasType("gauge");

    if (title) {
      var text = $$.$el.arcs.append("text").attr("class", config_classes[hasGauge ? "chartArcsGaugeTitle" : "chartArcsTitle"]).style("text-anchor", "middle");
      hasGauge && text.attr("dy", "-0.3em").style("font-size", "27px"), setTextValue(text, title, hasGauge ? undefined : [-.6, 1.35], !0);
    }
  },
  redrawArc: function redrawArc(duration, durationForExit, withTransform) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        main = $$.$el.main,
        hasInteraction = config.interaction_enabled,
        mainArc = main.selectAll("." + config_classes.arcs).selectAll("." + config_classes.arc).data($$.arcData.bind($$));
    // bind arc events
    mainArc.exit().transition().duration(durationForExit).style("opacity", "0").remove(), mainArc = mainArc.enter().append("path").attr("class", $$.classArc.bind($$)).style("fill", function (d) {
      return $$.color(d.data);
    }).style("cursor", function (d) {
      return hasInteraction && config.data_selection_isselectable.bind($$.api)(d) ? "pointer" : null;
    }).style("opacity", "0").each(function (d) {
      $$.isGaugeType(d.data) && (d.startAngle = config.gauge_startingAngle, d.endAngle = config.gauge_startingAngle), this._current = d;
    }).merge(mainArc), $$.hasMultiArcGauge() && $$.redrawMultiArcGauge(), mainArc.attr("transform", function (d) {
      return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : "";
    }).style("opacity", function (d) {
      return d === this._current ? "0" : "1";
    }).each(function () {
      state.transiting = !0;
    }).transition().duration(duration).attrTween("d", function (d) {
      var updated = $$.updateAngle(d);
      if (!updated) return function () {
        return "M 0 0";
      };
      isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle);
      var interpolate = Object(external_commonjs_d3_interpolate_commonjs2_d3_interpolate_amd_d3_interpolate_root_d3_["interpolate"])(this._current, updated);
      return this._current = interpolate(0), function (t) {
        var interpolated = interpolate(t);
        // data.id will be updated by interporator
        return interpolated.data = d.data, $$.getArc(interpolated, !0);
      };
    }).attr("transform", withTransform ? "scale(1)" : "").style("fill", function (d) {
      var color;
      return $$.levelColor ? (color = $$.levelColor(d.data.values[0].value), config.data_colors[d.data.id] = color) : color = $$.color(d.data.id), color;
    }) // Where gauge reading color would receive customization.
    .style("opacity", "1").call($$.endall, function () {
      if ($$.levelColor) {
        var path = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this),
            d = path.datum();
        $$.updateLegendItemColor(d.data.id, path.style("fill"));
      }

      state.transiting = !1, callFn(config.onrendered, $$.api);
    }), hasInteraction && $$.bindArcEvent(mainArc), $$.redrawArcText(duration);
  },
  redrawMultiArcGauge: function redrawMultiArcGauge() {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        $el = $$.$el,
        hiddenTargetIds = $$.state.hiddenTargetIds,
        arcLabelLines = $el.main.selectAll("." + config_classes.arcs).selectAll("." + config_classes.arcLabelLine).data($$.arcData.bind($$)),
        mainArcLabelLine = arcLabelLines.enter().append("rect").attr("class", function (d) {
      return config_classes.arcLabelLine + " " + config_classes.target + " " + config_classes.target + "-" + d.data.id;
    }).merge(arcLabelLines);
    mainArcLabelLine.style("fill", function (d) {
      return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data);
    }).style("display", config.gauge_label_show ? "" : "none").each(function (d) {
      var lineLength = 0,
          lineThickness = 2,
          x = 0,
          y = 0,
          transform = "";

      if (hiddenTargetIds.indexOf(d.data.id) < 0) {
        var updated = $$.updateAngle(d),
            innerLineLength = state.gaugeArcWidth / $$.filterTargetsToShow($$.data.targets).length * (updated.index + 1),
            lineAngle = updated.endAngle - Math.PI / 2,
            arcInnerRadius = state.radius - innerLineLength,
            linePositioningAngle = lineAngle - (arcInnerRadius === 0 ? 0 : 1 / arcInnerRadius);
        lineLength = state.radiusExpanded - state.radius + innerLineLength, x = Math.cos(linePositioningAngle) * arcInnerRadius, y = Math.sin(linePositioningAngle) * arcInnerRadius, transform = "rotate(" + lineAngle * 180 / Math.PI + ", " + x + ", " + y + ")";
      }

      Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).attr("x", x).attr("y", y).attr("width", lineLength).attr("height", lineThickness).attr("transform", transform).style("stroke-dasharray", "0, " + (lineLength + lineThickness) + ", 0");
    });
  },
  bindArcEvent: function bindArcEvent(arc) {
    function selectArc(_this, arcData, id) {
      $$.expandArc(id), $$.api.focus(id), $$.toggleFocusLegend(id, !0), $$.showTooltip([arcData], _this);
    }

    function unselectArc(arcData) {
      var id = arcData && arcData.id || undefined;
      $$.unexpandArc(id), $$.api.revert(), $$.revertLegend(), $$.hideTooltip();
    }

    var $$ = this,
        config = $$.config,
        state = $$.state,
        isTouch = state.inputType === "touch",
        isMouse = state.inputType === "mouse";

    // touch events
    if (arc.on("click", function (d, i) {
      var arcData,
          updated = $$.updateAngle(d);
      updated && (arcData = $$.convertToArcData(updated), $$.toggleShape && $$.toggleShape(this, arcData, i), config.data_onclick.bind($$.api)(arcData, this));
    }), isMouse && arc.on("mouseover", function (d) {
      if (!state.transiting) // skip while transiting
        {
          var updated = $$.updateAngle(d),
              arcData = updated ? $$.convertToArcData(updated) : null,
              id = arcData && arcData.id || undefined;
          selectArc(this, arcData, id), $$.setOverOut(!0, arcData);
        }
    }).on("mouseout", function (d) {
      if (!state.transiting) // skip while transiting
        {
          var updated = $$.updateAngle(d),
              arcData = updated ? $$.convertToArcData(updated) : null;
          unselectArc(), $$.setOverOut(!1, arcData);
        }
    }).on("mousemove", function (d) {
      var updated = $$.updateAngle(d),
          arcData = updated ? $$.convertToArcData(updated) : null;
      $$.showTooltip([arcData], this);
    }), isTouch && $$.hasArcType() && !$$.radars) {
      var getEventArc = function () {
        var touch = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"].changedTouches[0],
            eventArc = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(browser_doc.elementFromPoint(touch.clientX, touch.clientY));
        return eventArc;
      },
          handler = function () {
        if (!state.transiting) // skip while transiting
          {
            var eventArc = getEventArc(),
                datum = eventArc.datum(),
                updated = datum && datum.data && datum.data.id ? $$.updateAngle(datum) : null,
                arcData = updated ? $$.convertToArcData(updated) : null,
                id = arcData && arcData.id || undefined;
            $$.callOverOutForTouch(arcData), isUndefined(id) ? unselectArc() : selectArc(this, arcData, id);
          }
      };

      $$.$el.svg.on("touchstart", handler).on("touchmove", handler);
    }
  },
  redrawArcText: function redrawArcText(duration) {
    var text,
        $$ = this,
        config = $$.config,
        state = $$.state,
        _$$$$el = $$.$el,
        main = _$$$$el.main,
        arcs = _$$$$el.arcs,
        hasGauge = $$.hasType("gauge"),
        hasMultiArcGauge = $$.hasMultiArcGauge();

    if (hasGauge && $$.data.targets.length === 1 && config.gauge_title || (text = main.selectAll("." + config_classes.chartArc).select("text").style("opacity", "0").attr("class", function (d) {
      return $$.isGaugeType(d.data) ? config_classes.gaugeValue : null;
    }).call($$.textForArcLabel.bind($$)).attr("transform", $$.transformForArcLabel.bind($$)).style("font-size", function (d) {
      return $$.isGaugeType(d.data) && $$.data.targets.length === 1 && !hasMultiArcGauge ? Math.round(state.radius / 5) + "px" : null;
    }).transition().duration(duration).style("opacity", function (d) {
      return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? "1" : "0";
    }), hasMultiArcGauge && text.attr("dy", "-.1em")), main.select("." + config_classes.chartArcsTitle).style("opacity", $$.hasType("donut") || hasGauge ? "1" : "0"), hasGauge) {
      var isFullCircle = config.gauge_fullCircle,
          startAngle = -1 * Math.PI / 2,
          endAngle = (isFullCircle ? -4 : -1) * startAngle;
      isFullCircle && text && text.attr("dy", "" + Math.round(state.radius / 14));
      var backgroundArc = $$.$el.arcs.select((hasMultiArcGauge ? "g" : "") + "." + config_classes.chartArcsBackground);

      if (hasMultiArcGauge) {
        var index = 0;
        backgroundArc = backgroundArc.selectAll("path." + config_classes.chartArcsBackground).data($$.data.targets), backgroundArc.enter().append("path").attr("class", function (d, i) {
          return config_classes.chartArcsBackground + " " + config_classes.chartArcsBackground + "-" + i;
        }).merge(backgroundArc).attr("d", function (d1) {
          if (state.hiddenTargetIds.indexOf(d1.id) >= 0) return "M 0 0";
          var d = {
            data: [{
              value: config.gauge_max
            }],
            startAngle: startAngle,
            endAngle: endAngle,
            index: index++
          };
          return $$.getArc(d, !0, !0);
        }), backgroundArc.exit().remove();
      } else backgroundArc.attr("d", function () {
        var d = {
          data: [{
            value: config.gauge_max
          }],
          startAngle: startAngle,
          endAngle: endAngle
        };
        return $$.getArc(d, !0, !0);
      });

      arcs.select("." + config_classes.chartArcsGaugeUnit).attr("dy", ".75em").text(config.gauge_label_show ? config.gauge_units : ""), config.gauge_label_show && (arcs.select("." + config_classes.chartArcsGaugeMin).attr("dx", -1 * (state.innerRadius + (state.radius - state.innerRadius) / (isFullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text($$.textForGaugeMinMax(config.gauge_min, !1)), !isFullCircle && arcs.select("." + config_classes.chartArcsGaugeMax).attr("dx", state.innerRadius + (state.radius - state.innerRadius) / 2 + "px").attr("dy", "1.2em").text($$.textForGaugeMinMax(config.gauge_max, !0)));
    }
  },
  initGauge: function initGauge() {
    var $$ = this,
        config = $$.config,
        arcs = $$.$el.arcs,
        appendText = function (className) {
      arcs.append("text").attr("class", className).style("text-anchor", "middle").style("pointer-events", "none");
    };

    $$.hasType("gauge") && (arcs.append($$.hasMultiArcGauge() ? "g" : "path").attr("class", config_classes.chartArcsBackground), config.gauge_units && appendText(config_classes.chartArcsGaugeUnit), config.gauge_label_show && (appendText(config_classes.chartArcsGaugeMin), !config.gauge_fullCircle && appendText(config_classes.chartArcsGaugeMax)));
  },
  getGaugeLabelHeight: function getGaugeLabelHeight() {
    return this.config.gauge_label_show ? 20 : 0;
  }
});
// CONCATENATED MODULE: ./src/ChartInternal/shape/radar.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/**
 * Get the position value
 * @param {Boolean} isClockwise If the direction is clockwise
 * @param {String} type Coordinate type 'x' or 'y'
 * @param {Number} edge Number of edge
 * @param {Number} pos The indexed position
 * @param {Number} range
 * @param {Number} ratio
 * @return {number}
 * @private
 */

function getPosition(isClockwise, type, edge, pos, range, ratio) {
  var index = isClockwise && pos > 0 ? edge - pos : pos,
      r = 2 * Math.PI,
      func = type === "x" ? Math.sin : Math.cos;
  return range * (1 - ratio * func(index * r / edge));
} // cache key


var radar_cacheKey = "$radarPoints";
/* harmony default export */ var shape_radar = ({
  initRadar: function initRadar() {
    var $$ = this,
        config = $$.config,
        currentData = $$.state.currentData;
    $$.hasType("radar") && ($$.radars = $$.$el.main.select("." + config_classes.chart).append("g").attr("class", config_classes.chartRadars), $$.radars.levels = $$.radars.append("g").attr("class", config_classes.levels), $$.radars.axes = $$.radars.append("g").attr("class", config_classes.axis), $$.radars.shapes = $$.radars.append("g").attr("class", config_classes.shapes), currentData.max = config.radar_axis_max || $$.getMinMaxData().max[0].value);
  },
  getRadarSize: function getRadarSize() {
    var $$ = this,
        config = $$.config,
        _$$$state = $$.state,
        arcWidth = _$$$state.arcWidth,
        arcHeight = _$$$state.arcHeight,
        padding = config.axis_x_categories.length < 4 ? -20 : 10,
        size = (Math.min(arcWidth, arcHeight) - padding) / 2;
    return [size, size];
  },
  updateTargetsForRadar: function updateTargetsForRadar(targets) {
    var $$ = this,
        config = $$.config;
    isEmpty(config.axis_x_categories) && (config.axis_x_categories = getRange(0, getMinMax("max", targets.map(function (v) {
      return v.values.length;
    })))), $$.generateRadarPoints();
  },
  getRadarPosition: function getRadarPosition(type, index, range, ratio) {
    var $$ = this,
        config = $$.config,
        _$$$getRadarSize = $$.getRadarSize(),
        width = _$$$getRadarSize[0],
        height = _$$$getRadarSize[1],
        edge = config.axis_x_categories.length,
        isClockwise = config.radar_direction_clockwise,
        pos = toArray(type).map(function (v) {
      return getPosition(isClockwise, v, edge, index, isDefined(range) ? range : type === "x" ? width : height, isNumber(ratio) ? ratio : config.radar_size_ratio);
    });

    return pos.length === 1 ? pos[0] : pos;
  },

  /**
   * Generate data points
   * @private
   */
  generateRadarPoints: function generateRadarPoints() {
    var $$ = this,
        targets = $$.data.targets,
        _$$$getRadarSize2 = $$.getRadarSize(),
        width = _$$$getRadarSize2[0],
        height = _$$$getRadarSize2[1],
        points = $$.cache.get(radar_cacheKey) || {},
        size = points._size;

    size && (size.width === width || size.height === height) || (targets.forEach(function (d) {
      points[d.id] = d.values.map(function (v, i) {
        return $$.getRadarPosition(["x", "y"], i, undefined, $$.getRatio("radar", v));
      });
    }), points._size = {
      width: width,
      height: height
    }, $$.cache.add(radar_cacheKey, points));
  },
  redrawRadar: function redrawRadar(durationForExit) {
    var $$ = this,
        main = $$.$el.main,
        translate = $$.getTranslate("radar");
    translate && ($$.radars.attr("transform", translate), main.selectAll("." + config_classes.circles).attr("transform", translate), main.select("." + config_classes.chartTexts).attr("transform", translate), $$.generateRadarPoints(), $$.updateRadarLevel(), $$.updateRadarAxes(), $$.updateRadarShape(durationForExit));
  },
  generateGetRadarPoints: function generateGetRadarPoints() {
    var points = this.cache.get(radar_cacheKey);
    return function (d, i) {
      var point = points[d.id][i];
      return [point, point, point, point];
    };
  },
  updateRadarLevel: function updateRadarLevel() {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        _$$$getRadarSize3 = $$.getRadarSize(),
        width = _$$$getRadarSize3[0],
        height = _$$$getRadarSize3[1],
        depth = config.radar_level_depth,
        edge = config.axis_x_categories.length,
        showText = config.radar_level_text_show,
        radarLevels = $$.radars.levels,
        levelData = getRange(0, depth),
        radius = config.radar_size_ratio * Math.min(width, height),
        levelRatio = levelData.map(function (l) {
      return radius * ((l + 1) / depth);
    }),
        levelTextFormat = (config.radar_level_text_format || function () {}).bind($$.api),
        points = levelData.map(function (v) {
      var range = levelRatio[v],
          pos = getRange(0, edge).map(function (i) {
        return $$.getRadarPosition(["x", "y"], i, range, 1).join(",");
      });
      return pos.join(" ");
    }),
        level = radarLevels.selectAll("." + config_classes.level).data(levelData);

    level.exit().remove();
    var levelEnter = level.enter().append("g").attr("class", function (d, i) {
      return config_classes.level + " " + config_classes.level + "-" + i;
    });
    levelEnter.append("polygon").style("visibility", config.radar_level_show ? null : "hidden"), showText && (radarLevels.select("text").empty() && radarLevels.append("text").attr("dx", "-.5em").attr("dy", "-.7em").style("text-anchor", "end").text(function () {
      return levelTextFormat(0);
    }), levelEnter.append("text").attr("dx", "-.5em").style("text-anchor", "end").text(function (d) {
      return levelTextFormat(state.currentData.max / levelData.length * (d + 1));
    })), levelEnter.merge(level).attr("transform", function (d) {
      return "translate(" + (width - levelRatio[d]) + ", " + (height - levelRatio[d]) + ")";
    }).selectAll("polygon").attr("points", function (d) {
      return points[d];
    }), showText && radarLevels.selectAll("text").attr("x", function (d) {
      return isUndefined(d) ? width : points[d].split(",")[0];
    }).attr("y", function (d) {
      return isUndefined(d) ? height : 0;
    });
  },
  updateRadarAxes: function updateRadarAxes() {
    var $$ = this,
        config = $$.config,
        _$$$getRadarSize4 = $$.getRadarSize(),
        width = _$$$getRadarSize4[0],
        height = _$$$getRadarSize4[1],
        categories = config.axis_x_categories,
        axis = $$.radars.axes.selectAll("g").data(categories);

    axis.exit().remove();
    var axisEnter = axis.enter().append("g").attr("class", function (d, i) {
      return config_classes.axis + "-" + i;
    });

    // axis text
    if (config.radar_axis_line_show && axisEnter.append("line"), config.radar_axis_text_show && axisEnter.append("text"), axis = axisEnter.merge(axis), config.radar_axis_line_show && axis.select("line").attr("x1", width).attr("y1", height).attr("x2", function (d, i) {
      return $$.getRadarPosition("x", i);
    }).attr("y2", function (d, i) {
      return $$.getRadarPosition("y", i);
    }), config.radar_axis_text_show) {
      var _config$radar_axis_te = config.radar_axis_text_position,
          _config$radar_axis_te2 = _config$radar_axis_te.x,
          x = _config$radar_axis_te2 === void 0 ? 0 : _config$radar_axis_te2,
          _config$radar_axis_te3 = _config$radar_axis_te.y,
          y = _config$radar_axis_te3 === void 0 ? 0 : _config$radar_axis_te3;
      axis.select("text").style("text-anchor", "middle").attr("dy", ".5em").call(function (selection) {
        selection.each(function (d) {
          setTextValue(Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this), d + "", [-.6, 1.2]);
        });
      }).datum(function (d, i) {
        return {
          index: i
        };
      }).attr("transform", function (d) {
        isUndefined(this.width) && (this.width = this.getBoundingClientRect().width / 2);
        var posX = $$.getRadarPosition("x", d.index, undefined, 1),
            posY = Math.round($$.getRadarPosition("y", d.index, undefined, 1));
        return posX > width ? posX += this.width + x : Math.round(posX) < width && (posX -= this.width + x), posY > height ? (posY / 2 === height && this.firstChild.tagName === "tspan" && this.firstChild.setAttribute("dy", "0em"), posY += y) : posY < height && (posY -= y), "translate(" + posX + " " + posY + ")";
      });
    }

    $$.bindEvent();
  },
  bindEvent: function bindEvent() {
    var _this = this,
        $$ = this,
        config = $$.config,
        _$$$state2 = $$.state,
        inputType = _$$$state2.inputType,
        transiting = _$$$state2.transiting,
        svg = $$.$el.svg;

    if (config.interaction_enabled) {
      var isMouse = inputType === "mouse",
          getIndex = function () {
        var target = external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["event"].target; // in case of multilined axis text

        /tspan/i.test(target.tagName) && (target = target.parentNode);
        var d = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(target).datum();
        return d && Object.keys(d).length === 1 ? d.index : undefined;
      },
          hide = function () {
        var index = getIndex(),
            noIndex = isUndefined(index);
        (isMouse || noIndex) && (_this.hideTooltip(), _this.unexpandCircles(), isMouse ? $$.setOverOut(!1, index) : noIndex && $$.callOverOutForTouch());
      };

      $$.radars.select("." + config_classes.axis).on(isMouse ? "mouseover " : "touchstart", function () {
        if (!transiting) // skip while transiting
          {
            var index = getIndex();
            $$.selectRectForSingle(svg.node(), null, index), isMouse ? $$.setOverOut(!0, index) : $$.callOverOutForTouch(index);
          }
      }).on("mouseout", isMouse ? hide : null), isMouse || svg.on("touchstart", hide);
    }
  },
  updateRadarShape: function updateRadarShape(durationForExit) {
    var $$ = this,
        targets = $$.data.targets,
        points = $$.cache.get(radar_cacheKey),
        areas = $$.radars.shapes.selectAll("polygon").data(targets),
        areasEnter = areas.enter().append("g").attr("class", $$.classChartRadar.bind($$));
    areas.exit().transition().duration(durationForExit).remove(), areasEnter.append("polygon").merge(areas).style("fill", $$.color).style("stroke", $$.color).attr("points", function (d) {
      return points[d.id].join(" ");
    });
  },

  /**
   * Get data point x coordinate
   * @param {Object} d Data object
   * @return {Number}
   * @private
   */
  radarCircleX: function radarCircleX(d) {
    return this.cache.get(radar_cacheKey)[d.id][d.index][0];
  },

  /**
   * Get data point y coordinate
   * @param {Object} d Data object
   * @return {Number}
   * @private
   */
  radarCircleY: function radarCircleY(d) {
    return this.cache.get(radar_cacheKey)[d.id][d.index][1];
  }
});
// CONCATENATED MODULE: ./src/config/resolver/arc.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Modules exports for Arc based chart
 */
// shape


/* harmony default export */ var resolver_arc = ({
  internal: [shape_arc, shape_radar]
});
// CONCATENATED MODULE: ./src/ChartInternal/ChartInternal.ts


/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * @ignore
 */








 // for Types

// Axis
 // data



 // interactions

 // internals
















/**
 * Internal chart class.
 * - Note: Instantiated internally, not exposed for public.
 * @class ChartInternal
 * @ignore
 * @private
 */
var ChartInternal_ChartInternal =
/*#__PURE__*/
function () {
  // API interface
  // config object
  // cache instance
  // state variables
  // all Chart instances array within page (equivalent of 'bb.instances')
  // if is Arc type chart
  // data object
  // selections
  // Axis
  // Axis
  // scales
  // original values
  // formatter function
  // format function
  function ChartInternal(api) {
    _defineProperty(this, "api", void 0), _defineProperty(this, "config", void 0), _defineProperty(this, "cache", void 0), _defineProperty(this, "state", void 0), _defineProperty(this, "charts", void 0), _defineProperty(this, "isArc", !1), _defineProperty(this, "data", {
      xs: {},
      targets: []
    }), _defineProperty(this, "$el", {
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
      //mainBar,
      line: null,
      //mainLine,
      area: null,
      //mainArea,
      circle: null,
      //mainCircle,
      text: null,
      //mainText,
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
        //region
        list: null // mainRegion

      },
      eventRect: null
    }), _defineProperty(this, "axis", void 0), _defineProperty(this, "scale", {
      x: null,
      y: null,
      y2: null,
      subX: null,
      subY: null,
      subY2: null,
      zoom: null
    }), _defineProperty(this, "org", {
      xScale: null,
      xDomain: null
    }), _defineProperty(this, "color", void 0), _defineProperty(this, "patterns", void 0), _defineProperty(this, "levelColor", void 0), _defineProperty(this, "point", void 0), _defineProperty(this, "brush", void 0), _defineProperty(this, "format", {
      extraLineClasses: null,
      xAxisTick: null,
      dataTime: null,
      // dataTimeFormat
      defaultAxisTime: null,
      // defaultAxisTimeFormat
      axisTime: null // axisTimeFormat

    });
    var $$ = this;
    $$.api = api, $$.config = new Options(), $$.cache = new Cache_Cache(), $$.state = new Store_state();
  }

  var _proto = ChartInternal.prototype;
  return _proto.beforeInit = function beforeInit() {
    var $$ = this;
    $$.callPluginHook("$beforeInit"), callFn($$.config.onbeforeinit, $$.api);
  }, _proto.afterInit = function afterInit() {
    var $$ = this;
    $$.callPluginHook("$afterInit"), callFn($$.config.onafterinit, $$.api);
  }, _proto.init = function init() {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        $el = $$.$el;
    state.hasAxis = !$$.hasArcType(), state.hasRadar = !state.hasAxis && $$.hasType("radar"), $$.initParams();
    var bindto = {
      element: config.bindto,
      classname: "bb"
    };
    isObject(config.bindto) && (bindto.element = config.bindto.element || "#chart", bindto.classname = config.bindto.classname || bindto.classname), $el.chart = isFunction(bindto.element.node) ? config.bindto.element : Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(bindto.element || []), $el.chart.empty() && ($el.chart = Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(browser_doc.body.appendChild(browser_doc.createElement("div")))), $el.chart.html("").classed(bindto.classname, !0), $$.initToRender();
  }
  /**
   * Initialize the rendering process
   * @param {Boolean} forced Force to render process
   * @private
   */
  , _proto.initToRender = function initToRender(forced) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        chart = $$.$el.chart,
        isHidden = function () {
      return chart.style("display") === "none" || chart.style("visibility") === "hidden";
    },
        isLazy = config.render.lazy || isHidden(),
        MutationObserver = win.MutationObserver;

    if (isLazy && MutationObserver && config.render.observe !== !1 && !forced && new MutationObserver(function (mutation, observer) {
      isHidden() || (observer.disconnect(), !state.rendered && $$.initToRender(!0));
    }).observe(chart.node(), {
      attributes: !0,
      attributeFilter: ["class", "style"]
    }), !isLazy || forced) {
      var convertedData = $$.convertData(config, $$.initWithData);
      convertedData && $$.initWithData(convertedData);
    }
  }, _proto.initParams = function initParams() {
    var $$ = this,
        config = $$.config,
        format = $$.format,
        state = $$.state,
        isRotated = config.axis_rotated;

    if (state.datetimeId = "bb-" + +new Date(), $$.color = $$.generateColor(), $$.levelColor = $$.generateLevelColor(), $$.hasPointType() && ($$.point = $$.generatePoint()), state.hasAxis) {
      $$.initClip(), format.extraLineClasses = $$.generateExtraLineClass(), format.dataTime = config.data_xLocaltime ? external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_["timeParse"] : external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_["utcParse"], format.axisTime = config.axis_x_localtime ? external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_["timeFormat"] : external_commonjs_d3_time_format_commonjs2_d3_time_format_amd_d3_time_format_root_d3_["utcFormat"];
      var isDragZoom = $$.config.zoom_enabled && $$.config.zoom_enabled.type === "drag";

      format.defaultAxisTime = function (d) {
        var _$$$scale = $$.scale,
            x = _$$$scale.x,
            zoom = _$$$scale.zoom,
            isZoomed = isDragZoom ? zoom : zoom && x.orgDomain().toString() !== zoom.domain().toString(),
            specifier = d.getMilliseconds() && ".%L" || d.getSeconds() && ".:%S" || d.getMinutes() && "%I:%M" || d.getHours() && "%I %p" || d.getDate() !== 1 && "%b %d" || isZoomed && d.getDate() === 1 && "%b\'%y" || d.getMonth() && "%-m/%-d" || "%Y";
        return format.axisTime(specifier)(d);
      };
    }

    state.isLegendRight = config.legend_position === "right", state.isLegendInset = config.legend_position === "inset", state.isLegendTop = config.legend_inset_anchor === "top-left" || config.legend_inset_anchor === "top-right", state.isLegendLeft = config.legend_inset_anchor === "top-left" || config.legend_inset_anchor === "bottom-left", state.rotatedPaddingRight = isRotated && !config.axis_x_show ? 0 : 30, state.inputType = convertInputType(config.interaction_inputType_mouse, config.interaction_inputType_touch);
  }, _proto.initWithData = function initWithData(data) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        $el = $$.$el,
        _$$$scale2 = $$.scale,
        x = _$$$scale2.x,
        y = _$$$scale2.y,
        y2 = _$$$scale2.y2,
        subX = _$$$scale2.subX,
        subY = _$$$scale2.subY,
        subY2 = _$$$scale2.subY2,
        org = $$.org,
        hasAxis = state.hasAxis;

    if (hasAxis && ($$.axis = new Axis_Axis($$), config.zoom_enabled && $$.initZoom()), $$.data.xs = {}, $$.data.targets = $$.convertDataToTargets(data), config.data_filter && ($$.data.targets = $$.data.targets.filter(config.data_filter.bind($$.api))), config.data_hide && $$.addHiddenTargetIds(config.data_hide === !0 ? $$.mapToIds($$.data.targets) : config.data_hide), config.legend_hide && $$.addHiddenLegendIds(config.legend_hide === !0 ? $$.mapToIds($$.data.targets) : config.legend_hide), $$.updateSizes(), $$.updateScales(!0), x && (x.domain(util_sortValue($$.getXDomain($$.data.targets))), subX.domain(x.domain()), org.xDomain = x.domain()), y && (y.domain($$.getYDomain($$.data.targets, "y")), subY.domain(y.domain())), y2 && (y2.domain($$.getYDomain($$.data.targets, "y2")), subY2 && subY2.domain(y2.domain())), $el.svg = $el.chart.append("svg").style("overflow", "hidden").style("display", "block"), config.interaction_enabled && state.inputType) {
      var isTouch = state.inputType === "touch";
      $el.svg.on(isTouch ? "touchstart" : "mouseenter", function () {
        return callFn(config.onover, $$.api);
      }).on(isTouch ? "touchend" : "mouseleave", function () {
        return callFn(config.onout, $$.api);
      });
    }

    config.svg_classname && $el.svg.attr("class", config.svg_classname);
    // Define defs
    var hasColorPatterns = isFunction(config.color_tiles) && $$.patterns;
    (hasAxis || hasColorPatterns) && ($el.defs = $el.svg.append("defs"), hasAxis && ["id", "idXAxis", "idYAxis", "idGrid"].forEach(function (v) {
      $$.appendClip($el.defs, state.clip[v]);
    }), hasColorPatterns && $$.patterns.forEach(function (p) {
      return $el.defs.append(function () {
        return p.node;
      });
    })), $$.updateSvgSize();
    // Define regions
    var main = $el.svg.append("g").attr("transform", $$.getTranslate("main"));

    // data.onmin/max callback
    if ($el.main = main, config.subchart_show && $$.initSubchart(), config.tooltip_show && $$.initTooltip(), config.title_text && $$.initTitle(), config.legend_show && $$.initLegend(), config.data_empty_label_text && main.append("text").attr("class", config_classes.text + " " + config_classes.empty).attr("text-anchor", "middle") // horizontal centering of text at x position in all browsers.
    .attr("dominant-baseline", "middle"), hasAxis && (config.regions.length && $$.initRegion(), !config.clipPath && $$.axis.init()), main.append("g").attr("class", config_classes.chart).attr("clip-path", state.clip.path), $$.callPluginHook("$init"), hasAxis && ($$.initEventRect && $$.initEventRect(), $$.initGrid(), config.clipPath && $$.axis && $$.axis.init()), $$.initChartElements(), $$.updateTargets($$.data.targets), $$.updateDimension(), callFn(config.oninit, $$.api), $$.setBackground(), $$.redraw({
      withTransition: !1,
      withTransform: !0,
      withUpdateXDomain: !0,
      withUpdateOrgXDomain: !0,
      withTransitionForAxis: !1,
      initializing: !0
    }), config.data_onmin || config.data_onmax) {
      var minMax = $$.getMinMaxData();
      callFn(config.data_onmin, $$.api, minMax.min), callFn(config.data_onmax, $$.api, minMax.max);
    } // Bind resize event


    $$.bindResize(), $$.api.element = $el.chart.node(), state.rendered = !0;
  }, _proto.initChartElements = function initChartElements() {
    var $$ = this,
        _$$$state = $$.state,
        hasAxis = _$$$state.hasAxis,
        hasRadar = _$$$state.hasRadar,
        types = [];
    hasAxis ? ($$.hasType("bar") && types.push("Bar"), $$.hasType("bubble") && types.push("Bubble"), $$.hasTypeOf("Line") && types.push("Line")) : (!hasRadar && types.push("Arc", "Pie"), $$.hasType("gauge") ? types.push("Gauge") : hasRadar && types.push("Radar")), types.forEach(function (v) {
      $$["init" + v]();
    }), notEmpty($$.config.data_labels) && $$.initText();
  }, _proto.setChartElements = function setChartElements() {
    var $$ = this,
        $el = $$.$el;
    $$.api.$ = {
      chart: $el.chart,
      svg: $el.svg,
      defs: $el.defs,
      main: $el.main,
      tooltip: $el.tooltip,
      legend: $el.legend,
      title: $el.title,
      grid: $el.grid,
      arc: $el.arcs,
      circles: $el.circle,
      bar: {
        bars: $el.bar
      },
      line: {
        lines: $el.line,
        areas: $el.area
      },
      text: {
        texts: $el.text
      }
    };
  }
  /**
   * Set background element/image
   * @private
   */
  , _proto.setBackground = function setBackground() {
    var $$ = this,
        bg = $$.config.background,
        svg = $$.$el.svg;

    if (notEmpty(bg)) {
      var element = svg.select("." + config_classes[$$.hasArcType() ? "chart" : "regions"]).insert(bg.imgUrl ? "image" : "rect", ":first-child");
      bg.imgUrl ? element.attr("href", bg.imgUrl) : bg.color && element.style("fill", bg.color), element.attr("class", bg.class || null).attr("width", "100%").attr("height", "100%");
    }
  }
  /**
   * Update targeted element with given data
   * @param {Object} targets Data object formatted as 'target'
   * @private
   */
  , _proto.updateTargets = function updateTargets(targets) {
    var $$ = this,
        _$$$state2 = $$.state,
        hasAxis = _$$$state2.hasAxis,
        hasRadar = _$$$state2.hasRadar;
    $$.updateTargetsForText(targets), ($$.hasPointType() || hasRadar) && $$.updateTargetForCircle(), hasAxis ? ($$.hasType("bar") && $$.updateTargetsForBar(targets), $$.hasTypeOf("Line") && $$.updateTargetsForLine(targets), $$.updateTargetsForSubchart && $$.updateTargetsForSubchart(targets)) : $$.hasArcType(targets) && (hasRadar ? $$.updateTargetsForRadar(targets) : $$.updateTargetsForArc(targets)), $$.showTargets();
  }
  /**
   * Display targeted elements
   * @private
   */
  , _proto.showTargets = function showTargets() {
    var $$ = this,
        config = $$.config,
        svg = $$.$el.svg;
    svg.selectAll("." + config_classes.target).filter(function (d) {
      return $$.isTargetToShow(d.id);
    }).transition().duration(config.transition_duration).style("opacity", "1");
  }, _proto.getWithOption = function getWithOption(options) {
    var withOptions = {
      Y: !0,
      Subchart: !0,
      Transition: !0,
      EventRect: !0,
      Dimension: !0,
      TrimXDomain: !0,
      Transform: !1,
      UpdateXDomain: !1,
      UpdateOrgXDomain: !1,
      Legend: !1,
      UpdateXAxis: "UpdateXDomain",
      TransitionForExit: "Transition",
      TransitionForAxis: "Transition"
    };
    return Object.keys(withOptions).forEach(function (key) {
      var defVal = withOptions[key];
      isString(defVal) && (defVal = withOptions[defVal]), withOptions[key] = getOption(options, "with" + key, defVal);
    }), withOptions;
  }, _proto.redraw = function redraw(options, transitionsValue) {
    options === void 0 && (options = {});
    var $$ = this,
        config = $$.config,
        state = $$.state,
        $el = $$.$el,
        main = $el.main,
        targetsToShow = $$.filterTargetsToShow($$.data.targets),
        initializing = options.initializing,
        flow = options.flow,
        wth = $$.getWithOption(options),
        duration = wth.Transition ? config.transition_duration : 0,
        durationForExit = wth.TransitionForExit ? duration : 0,
        durationForAxis = wth.TransitionForAxis ? duration : 0,
        transitions = transitionsValue || $$.axis && $$.axis.generateTransitions(durationForAxis);
    initializing && config.tooltip_init_show || state.inputType !== "touch" || $$.hideTooltip(), $$.updateSizes(initializing), wth.Legend && config.legend_show ? $$.updateLegend($$.mapToIds($$.data.targets), options, transitions) : wth.Dimension && $$.updateDimension(!0), $$.hasDataLabel() && $$.updateText(durationForExit), (!$$.hasArcType() || state.hasRadar) && $$.updateCircleY(), ($$.hasPointType() || state.hasRadar) && $$.updateCircle(), state.hasAxis ? ($$.axis.redrawAxis(targetsToShow, wth, transitions, flow, initializing), $$.updategridFocus(), config.data_empty_label_text && main.select("text." + config_classes.text + "." + config_classes.empty).attr("x", state.width / 2).attr("y", state.height / 2).text(config.data_empty_label_text).style("display", targetsToShow.length ? "none" : null), $$.hasGrid() && $$.updateGrid(duration), config.regions.length && $$.updateRegion(duration), $$.hasType("bar") && $$.updateBar(durationForExit), $$.hasTypeOf("Line") && $$.updateLine(durationForExit), $$.hasTypeOf("Area") && $$.updateArea(durationForExit), $el.text && main.selectAll("." + config_classes.selectedCircles).filter($$.isBarType.bind($$)).selectAll("circle").remove(), config.interaction_enabled && !flow && wth.EventRect && $$.bindZoomEvent()) : ($el.arcs && $$.redrawArc(duration, durationForExit, wth.Transform), $$.radars && $$.redrawRadar(durationForExit)), $$.redrawTitle && $$.redrawTitle(), initializing && $$.setChartElements(), $$.generateRedrawList(targetsToShow, flow, duration, wth.Subchart), $$.callPluginHook("$redraw", options, duration);
  }
  /**
   * Generate redraw list
   * @param {Object} targets targets data to be shown
   * @param {Object} flow
   * @param {Object} duration
   * @param {Boolean} withSubchart whether or not to show subchart
   * @private
   */
  , _proto.generateRedrawList = function generateRedrawList(targets, flow, duration, withSubchart) {
    var $$ = this,
        config = $$.config,
        state = $$.state,
        shape = $$.getDrawShape();
    state.hasAxis && config.subchart_show && $$.redrawSubchart(withSubchart, duration, shape);
    // generate flow
    var flowFn = flow && $$.generateFlow({
      targets: targets,
      flow: flow,
      duration: flow.duration,
      shape: shape,
      xv: $$.xv.bind($$)
    }),
        isTransition = (duration || flowFn) && isTabVisible(),
        redrawList = $$.getRedrawList(shape, flow, flowFn, isTransition),
        afterRedraw = flow || config.onrendered ? function () {
      flowFn && flowFn(), callFn(config.onrendered, $$.api);
    } : null;
    if (afterRedraw) // Only use transition when current tab is visible.
      if (isTransition && redrawList.length) {
        // Wait for end of transitions for callback
        var waitForDraw = $$.generateWait(); // transition should be derived from one transition

        Object(external_commonjs_d3_transition_commonjs2_d3_transition_amd_d3_transition_root_d3_["transition"])().duration(duration).each(function () {
          redrawList.reduce(function (acc, t1) {
            return acc.concat(t1);
          }, []).forEach(function (t) {
            return waitForDraw.add(t);
          });
        }).call(waitForDraw, afterRedraw);
      } else state.transiting || afterRedraw(); // update fadein condition

    $$.mapToIds($$.data.targets).forEach(function (id) {
      state.withoutFadeIn[id] = !0;
    });
  }, _proto.getRedrawList = function getRedrawList(shape, flow, flowFn, isTransition) {
    var $$ = this,
        config = $$.config,
        _$$$state3 = $$.state,
        hasAxis = _$$$state3.hasAxis,
        hasRadar = _$$$state3.hasRadar,
        _shape$pos = shape.pos,
        cx = _shape$pos.cx,
        cy = _shape$pos.cy,
        xForText = _shape$pos.xForText,
        yForText = _shape$pos.yForText,
        list = [];

    if (hasAxis) {
      var _shape$type = shape.type,
          area = _shape$type.area,
          bar = _shape$type.bar,
          line = _shape$type.line;
      (config.grid_x_lines.length || config.grid_y_lines.length) && list.push($$.redrawGrid(isTransition)), config.regions.length && list.push($$.redrawRegion(isTransition)), $$.hasTypeOf("Line") && list.push($$.redrawLine(line, isTransition)), $$.hasTypeOf("Area") && list.push($$.redrawArea(area, isTransition)), $$.hasType("bar") && list.push($$.redrawBar(bar, isTransition));
    }

    return (!$$.hasArcType() || hasRadar) && notEmpty(config.data_labels) && list.push($$.redrawText(xForText, yForText, flow, isTransition)), ($$.hasPointType() || hasRadar) && list.push($$.redrawCircle(cx, cy, isTransition, flowFn)), list;
  }, _proto.updateAndRedraw = function updateAndRedraw(options) {
    options === void 0 && (options = {});
    var transitions,
        $$ = this,
        config = $$.config,
        state = $$.state;
    options.withTransition = getOption(options, "withTransition", !0), options.withTransform = getOption(options, "withTransform", !1), options.withLegend = getOption(options, "withLegend", !1), options.withUpdateXDomain = !0, options.withUpdateOrgXDomain = !0, options.withTransitionForExit = !1, options.withTransitionForTransform = getOption(options, "withTransitionForTransform", options.withTransition), options.withLegend && config.legend_show || (state.hasAxis && (transitions = $$.axis.generateTransitions(options.withTransitionForAxis ? config.transition_duration : 0)), $$.updateScales(), $$.updateSvgSize(), $$.transformAll(options.withTransitionForTransform, transitions)), $$.redraw(options, transitions);
  }, _proto.redrawWithoutRescale = function redrawWithoutRescale() {
    this.redraw({
      withY: !1,
      withSubchart: !1,
      withEventRect: !1,
      withTransitionForAxis: !1
    });
  }, _proto.isCategorized = function isCategorized() {
    return this.config.axis_x_type.indexOf("category") >= 0 || this.state.hasRadar;
  }, _proto.isCustomX = function isCustomX() {
    var $$ = this,
        config = $$.config;
    return !$$.isTimeSeries() && (config.data_x || notEmpty(config.data_xs));
  }, _proto.isTimeSeries = function isTimeSeries(id) {
    return id === void 0 && (id = "x"), this.config["axis_" + id + "_type"] === "timeseries";
  }, _proto.isTimeSeriesY = function isTimeSeriesY() {
    return this.isTimeSeries("y");
  }, _proto.initialOpacity = function initialOpacity(d) {
    var withoutFadeIn = this.state.withoutFadeIn;
    return this.getBaseValue(d) !== null && withoutFadeIn[d.id] ? "1" : "0";
  }
  /**
   * Get the zoom or unzoomed scaled value
   * @param {Date|Number|Object} d Data value
   * @private
   */
  , _proto.xx = function xx(d) {
    var $$ = this,
        config = $$.config,
        _$$$scale3 = $$.scale,
        x = _$$$scale3.x,
        zoom = _$$$scale3.zoom,
        fn = config.zoom_enabled && zoom ? zoom : x;
    return d ? fn(isValue(d.x) ? d.x : d) : null;
  }, _proto.xv = function xv(d) {
    var $$ = this,
        config = $$.config,
        x = $$.scale.x,
        value = $$.getBaseValue(d);
    return $$.isTimeSeries() ? value = parseDate.call($$, value) : $$.isCategorized() && isString(value) && (value = config.axis_x_categories.indexOf(value)), Math.ceil(x(value));
  }, _proto.yv = function yv(d) {
    var $$ = this,
        _$$$scale4 = $$.scale,
        y = _$$$scale4.y,
        y2 = _$$$scale4.y2,
        yScale = d.axis && d.axis === "y2" ? y2 : y;
    return Math.ceil(yScale($$.getBaseValue(d)));
  }, _proto.subxx = function subxx(d) {
    return d ? this.scale.subX(d.x) : null;
  }, _proto.bindResize = function bindResize() {
    var $$ = this,
        config = $$.config;
    $$.resizeFunction = $$.generateResize(), $$.resizeFunction.add(function () {
      return callFn(config.onresize, $$.api);
    }), config.resize_auto && $$.resizeFunction.add(function () {
      $$.resizeTimeout && (win.clearTimeout($$.resizeTimeout), $$.resizeTimeout = null), $$.resizeTimeout = win.setTimeout(function () {
        $$.api.flush(!1, !0);
      }, 200);
    }), $$.resizeFunction.add(function () {
      return callFn(config.onresized, $$.api);
    }), win.addEventListener("resize", $$.resizeFunction);
  }, _proto.generateResize = function generateResize() {
    function callResizeFunctions() {
      resizeFunctions.forEach(function (f) {
        return f();
      });
    }

    var resizeFunctions = [];
    return callResizeFunctions.add = function (f) {
      return resizeFunctions.push(f);
    }, callResizeFunctions.remove = function (f) {
      return resizeFunctions.splice(resizeFunctions.indexOf(f), 1);
    }, callResizeFunctions;
  }, _proto.endall = function endall(transition, callback) {
    var n = 0;
    transition.each(function () {
      return ++n;
    }).on("end", function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];

      --n || callback.apply.apply(callback, [this].concat(args));
    });
  }, _proto.generateWait = function generateWait() {
    var transitionsToWait = [],
        f = function (t, callback) {
      function loop() {
        for (var _t, done = 0, i = 0; _t = transitionsToWait[i]; i++) {
          if (_t.empty()) {
            done++;
            continue;
          }

          try {
            _t.transition();
          } catch (e) {
            done++;
          }
        }

        timer && clearTimeout(timer), done === transitionsToWait.length ? callback && callback() : timer = setTimeout(loop, 50);
      }

      var timer;
      loop();
    };

    return f.add = function (t) {
      isArray(t) ? transitionsToWait = transitionsToWait.concat(t) : transitionsToWait.push(t);
    }, f;
  }
  /**
   * Call plugin hook
   * @param {String} phase The lifecycle phase
   * @private
   */
  , _proto.callPluginHook = function callPluginHook(phase) {
    for (var _this = this, _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];

    this.config.plugins.forEach(function (v) {
      phase === "$beforeInit" && (v.$$ = _this, _this.api.plugins.push(v)), v[phase].apply(v, args);
    });
  }, ChartInternal;
}();


extend(ChartInternal_ChartInternal.prototype, [// common
data_convert, ChartInternal_data_data, data_load, internals_class, internals_color, internals_domain, interactions_interaction, internals_format, internals_legend, internals_scale, internals_size, internals_text, internals_title, internals_tooltip, internals_transform, internals_type].concat(resolver_arc.internal, resolver_axis.internal));
// CONCATENATED MODULE: ./src/config/config.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/**
 * Load configuration option
 * @param {Object} config User's generation config value
 * @private
 */

function loadConfig(config) {
  var target,
      keys,
      read,
      thisConfig = this.config,
      find = function () {
    var key = keys.shift();
    return key && target && isObjectType(target) && key in target ? (target = target[key], find()) : key ? undefined : target;
  };

  Object.keys(thisConfig).forEach(function (key) {
    target = config, keys = key.split("_"), read = find(), isDefined(read) && (thisConfig[key] = read);
  });
}
// CONCATENATED MODULE: ./src/chart/api/chart.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var api_chart = ({
  /**
   * Resize the chart.
   * @method resize
   * @instance
   * @memberof Chart
   * @param {Object} size This argument should include width and height in pixels.
   * @example
   * // Resize to 640x480
   * chart.resize({
   *    width: 640,
   *    height: 480
   * });
   */
  resize: function resize(size) {
    var config = this.internal.config;
    config.size_width = size ? size.width : null, config.size_height = size ? size.height : null, this.flush(!1, !0);
  },

  /**
   * Force to redraw.
   * @method flush
   * @instance
   * @memberof Chart
   * @param {Boolean} [soft] For soft redraw.
   * @example
   * chart.flush();
   *
   * // for soft redraw
   * chart.flush(true);
   */
  flush: function flush(soft, _isFromResize) {
    var $$ = this.internal;
    $$.state.rendered ? (_isFromResize ? $$.brush && $$.brush.updateResize() : $$.axis && $$.axis.setOrient(), $$.scale.zoom = null, soft ? $$.redraw({
      withTransform: !0,
      withUpdateXDomain: !0,
      withUpdateOrgXDomain: !0,
      withLegend: !0
    }) : $$.updateAndRedraw({
      withLegend: !0,
      withTransition: !1,
      withTransitionForTransform: !1
    })) : $$.initToRender(!0);
  },

  /**
   * Reset the chart object and remove element and events completely.
   * @method destroy
   * @instance
   * @memberof Chart
   * @example
   * chart.destroy();
   */
  destroy: function destroy() {
    var _this = this,
        $$ = this.internal,
        _$$$$el = $$.$el,
        chart = _$$$$el.chart,
        svg = _$$$$el.svg;

    return notEmpty($$) && ($$.callPluginHook("$willDestroy"), $$.charts.splice($$.charts.indexOf(this), 1), svg.select("*").interrupt(), isDefined($$.resizeTimeout) && win.clearTimeout($$.resizeTimeout), win.removeEventListener("resize", $$.resizeFunction), chart.classed("bb", !1).html(""), Object.keys(this).forEach(function (key) {
      key === "internal" && Object.keys($$).forEach(function (k) {
        $$[k] = null;
      }), _this[key] = null, delete _this[key];
    })), null;
  },

  /**
   * Get or set single config option value.
   * @method config
   * @instance
   * @memberof Chart
   * @param {String} name The option key name.
   * @param {*} [value] The value accepted for indicated option.
   * @param {Boolean} [redraw] Set to redraw with the new option changes.
   * - **NOTE:** Doesn't guarantee work in all circumstances. It can be applied for limited options only.
   * @example
   * // Getter
   * chart.config("gauge.max");
   *
   * // Setter
   * chart.config("gauge.max", 100);
   *
   * // Setter & redraw with the new option
   * chart.config("gauge.max", 100, true);
   */
  config: function (name, value, redraw) {
    var res,
        $$ = this.internal,
        config = $$.config,
        key = name && name.replace(/\./g, "_");
    return key in config && (isDefined(value) ? (config[key] = value, res = value, redraw && this.flush()) : res = config[key]), res;
  }
});
// CONCATENATED MODULE: ./src/chart/api/color.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/* harmony default export */ var api_color = ({
  /**
   * Get the color
   * @method color
   * @instance
   * @memberof Chart
   * @param {String} id id to get the color
   * @example
   * chart.color("data1");
   */
  color: function color(id) {
    return this.internal.color(id); // more patterns
  }
});
// CONCATENATED MODULE: ./src/chart/api/data.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Get data loaded in the chart.
 * @method data
 * @instance
 * @memberof Chart
 * @param {String|Array} targetIds If this argument is given, this API returns the specified target data. If this argument is not given, all of data will be returned.
 * @return {Array} Data objects
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

function api_data_data(targetIds) {
  var targets = this.internal.data.targets;

  if (!isUndefined(targetIds)) {
    var ids = isArray(targetIds) ? targetIds : [targetIds];
    return targets.filter(function (t) {
      return ids.some(function (v) {
        return v === t.id;
      });
    });
  }

  return targets;
}

extend(api_data_data, {
  /**
   * Get data shown in the chart.
   * @method data․shown
   * @instance
   * @memberof Chart
   * @param {String|Array} targetIds If this argument is given, this API filters the data with specified target ids. If this argument is not given, all shown data will be returned.
   * @return {Array} Data objects
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
   * @method data․values
   * @instance
   * @memberof Chart
   * @param {String|Array} targetIds This API returns the values of specified target. If this argument is not given, null will be retruned
   * @return {Array} Data values
   * @example
   * // Get data1 values
   * chart.data.values("data1");
   * // --> [10, 20, 30, 40]
   */
  values: function (targetId, flat) {
    flat === void 0 && (flat = !0);
    var values;

    if (targetId) {
      var targets = this.data(targetId);
      targets && isArray(targets) && (values = [], targets.forEach(function (v) {
        var dataValue = v.values.map(function (d) {
          return d.value;
        });
        flat ? values = values.concat(dataValue) : values.push(dataValue);
      }));
    }

    return values;
  },

  /**
   * Get and set names of the data loaded in the chart.
   * @method data․names
   * @instance
   * @memberof Chart
   * @param {Object} names If this argument is given, the names of data will be updated. If not given, the current names will be returned. The format of this argument is the same as
   * @return {Object} Corresponding names according its key value, if specified names values.
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
    var $$ = this.internal; // reset existing legend item dimension data

    return $$.getLegendItemTextBox(), $$.updateDataAttributes("names", _names);
  },

  /**
   * Get and set colors of the data loaded in the chart.
   * @method data․colors
   * @instance
   * @memberof Chart
   * @param {Object} colors If this argument is given, the colors of data will be updated. If not given, the current colors will be returned. The format of this argument is the same as [data.colors](./Options.html#.data%25E2%2580%25A4colors).
   * @return {Object} Corresponding data color value according its key value.
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
   * @method data․axes
   * @instance
   * @memberof Chart
   * @param {Object} axes If this argument is given, the axes of data will be updated. If not given, the current axes will be returned. The format of this argument is the same as
   * @return {Object} Corresponding axes value for data, if specified axes value.
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
   * @method data․min
   * @instance
   * @memberof Chart
   * @return {Array} Data objects
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
   * @method data․max
   * @instance
   * @memberof Chart
   * @return {Array} Data objects
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
// CONCATENATED MODULE: ./src/chart/api/export.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */



/**
 * Encode to base64
 * @param {String} str
 * @return {String}
 * @private
 * @see https://developer.mozilla.org/ko/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
 */

var b64EncodeUnicode = function (str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p) {
    return String.fromCharCode(+("0x" + p));
  }));
};
/**
 * Convert svg node to data url
 * @param {HTMLElement} node
 * @param {object} size
 * @return {String}
 * @private
 */


function nodeToSvgDataUrl(node, size) {
  var serializer = new XMLSerializer(),
      clone = node.cloneNode(!0),
      cssText = getCssRules(toArray(browser_doc.styleSheets)).filter(function (r) {
    return r.cssText;
  }).map(function (r) {
    return r.cssText;
  });
  clone.setAttribute("xmlns", external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["namespaces"].xhtml);
  var nodeXml = serializer.serializeToString(clone),
      style = browser_doc.createElement("style"); // escape css for XML

  style.appendChild(browser_doc.createTextNode(cssText.join("\n")));
  var styleXml = serializer.serializeToString(style),
      dataStr = ("<svg xmlns=\"" + external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["namespaces"].svg + "\" width=\"" + size.width + "\" height=\"" + size.height + "\">\n\t\t\t<foreignObject width=\"100%\" height=\"100%\">\n\t\t\t\t" + styleXml + "\n\t\t\t\t" + nodeXml.replace(/(url\()[^#]+/g, "$1") + "\n\t\t\t</foreignObject></svg>").replace("/\n/g", "%0A"); // foreignObject not supported in IE11 and below
  // https://msdn.microsoft.com/en-us/library/hh834675(v=vs.85).aspx

  return "data:image/svg+xml;base64," + b64EncodeUnicode(dataStr);
}

/* harmony default export */ var api_export = ({
  /**
   * Export chart as an image.
   * - **NOTE:**
   *   - IE11 and below not work properly due to the lack of the feature(<a href="https://msdn.microsoft.com/en-us/library/hh834675(v=vs.85).aspx">foreignObject</a>) support
   *   - The basic CSS file(ex. billboard.css) should be at same domain as API call context to get correct styled export image.
   * @method export
   * @instance
   * @memberof Chart
   * @param {String} [mimeType=image/png] The desired output image format. (ex. 'image/png' for png, 'image/jpeg' for jpeg format)
   * @param {Function} [callback] The callback to be invoked when export is ready.
   * @return {String} dataURI
   * @example
   *  chart.export();
   *  // --> "data:image/svg+xml;base64,PHN..."
   *
   *  // Initialize the download automatically
   *  chart.export("image/png", dataUrl => {
   *     const link = document.createElement("a");
   *
   *     link.download = `${Date.now()}.png`;
   *     link.href = dataUrl;
   *     link.innerHTML = "Download chart as image";
   *
   *     document.body.appendChild(link);
   *  });
   */
  export: function _export(mimeType, callback) {
    var _this = this,
        $$ = this.internal,
        _$$$state = $$.state,
        width = _$$$state.currentWidth,
        height = _$$$state.currentHeight,
        size = {
      width: width,
      height: height
    },
        svgDataUrl = nodeToSvgDataUrl(this.element, size);

    if (callback && isFunction(callback)) {
      var img = new Image();
      img.crossOrigin = "Anonymous", img.onload = function () {
        var canvas = browser_doc.createElement("canvas"),
            ctx = canvas.getContext("2d");
        canvas.width = size.width, canvas.height = size.height, ctx.drawImage(img, 0, 0), callback.bind(_this)(canvas.toDataURL(mimeType));
      }, img.src = svgDataUrl;
    }

    return svgDataUrl;
  }
});
// CONCATENATED MODULE: ./src/chart/api/focus.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */


/* harmony default export */ var api_focus = ({
  /**
   * This API highlights specified targets and fade out the others.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be highlighted.
   * @method focus
   * @instance
   * @memberof Chart
   * @param {String|Array} targetIdsValue Target ids to be highlighted.
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
    var $$ = this.internal,
        state = $$.state,
        targetIds = $$.mapToTargetIds(targetIdsValue),
        candidates = $$.$el.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$)));
    this.revert(), this.defocus(), candidates.classed(config_classes.focused, !0).classed(config_classes.defocused, !1), $$.hasArcType() && !state.hasRadar && ($$.expandArc(targetIds), $$.hasType("gauge") && $$.markOverlapped(targetIdsValue, $$, "." + config_classes.gaugeValue)), $$.toggleFocusLegend(targetIds, !0), state.focusedTargetIds = targetIds, state.defocusedTargetIds = state.defocusedTargetIds.filter(function (id) {
      return targetIds.indexOf(id) < 0;
    });
  },

  /**
   * This API fades out specified targets and reverts the others.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be faded out.
   * @method defocus
   * @instance
   * @memberof Chart
   * @param {String|Array} Target ids to be faded out.
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
    var $$ = this.internal,
        state = $$.state,
        targetIds = $$.mapToTargetIds(targetIdsValue),
        candidates = $$.$el.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$)));
    candidates.classed(config_classes.focused, !1).classed(config_classes.defocused, !0), $$.hasArcType() && ($$.unexpandArc(targetIds), $$.hasType("gauge") && $$.undoMarkOverlapped($$, "." + config_classes.gaugeValue)), $$.toggleFocusLegend(targetIds, !1), state.focusedTargetIds = state.focusedTargetIds.filter(function (id) {
      return targetIds.indexOf(id) < 0;
    }), state.defocusedTargetIds = targetIds;
  },

  /**
   * This API reverts specified targets.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be reverted.
   * @method revert
   * @instance
   * @memberof Chart
   * @param {String|Array} Target ids to be reverted
   * @example
   * // data1 will be reverted.
   * chart.revert("data1");
   *
   * // data1 and data2 will be reverted.
   * chart.revert(["data1", "data2"]);
   *
   * // all targets will be reverted.
   * chart.revert();
   */
  revert: function revert(targetIdsValue) {
    var $$ = this.internal,
        config = $$.config,
        state = $$.state,
        $el = $$.$el,
        targetIds = $$.mapToTargetIds(targetIdsValue),
        candidates = $el.svg.selectAll($$.selectorTargets(targetIds));
    // should be for all targets
    candidates.classed(config_classes.focused, !1).classed(config_classes.defocused, !1), $$.hasArcType() && $$.unexpandArc(targetIds), config.legend_show && ($$.showLegend(targetIds.filter($$.isLegendToShow.bind($$))), $el.legend.selectAll($$.selectorLegends(targetIds)).filter(function () {
      return Object(external_commonjs_d3_selection_commonjs2_d3_selection_amd_d3_selection_root_d3_["select"])(this).classed(config_classes.legendItemFocused);
    }).classed(config_classes.legendItemFocused, !1)), state.focusedTargetIds = [], state.defocusedTargetIds = [];
  }
});
// CONCATENATED MODULE: ./src/chart/api/legend.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Define legend
 * @ignore
 */
var legend_legend = {
  /**
   * Show legend for each target.
   * @method legend․show
   * @instance
   * @memberof Chart
   * @param {String|Array} targetIds
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
    var $$ = this.internal;
    $$.showLegend($$.mapToTargetIds(targetIds)), $$.updateAndRedraw({
      withLegend: !0
    });
  },

  /**
   * Hide legend for each target.
   * @method legend․hide
   * @instance
   * @memberof Chart
   * @param {String|Array} targetIds
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
    var $$ = this.internal;
    $$.hideLegend($$.mapToTargetIds(targetIds)), $$.updateAndRedraw({
      withLegend: !0
    });
  }
};
/* harmony default export */ var api_legend = ({
  legend: legend_legend
});
// CONCATENATED MODULE: ./src/chart/api/load.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/* harmony default export */ var load = ({
  /**
   * Load data to the chart.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
   * - <b>Note:</b>
   *   - unload should be used if some data needs to be unloaded simultaneously.
   *     If you call unload API soon after/before load instead of unload param, chart will not be rendered properly because of cancel of animation.<br>
   *   - done will be called after data loaded, but it's not after rendering.
   *     It's because rendering will finish after some transition and there is some time lag between loading and rendering
   * @method load
   * @instance
   * @memberof Chart
   * @param {Object} args The object can consist with following members:<br>
   *
   *    | Key | Description |
   *    | --- | --- |
   *    | - url<br>- json<br>- rows<br>- columns | The data will be loaded. If data that has the same target id is given, the chart will be updated. Otherwise, new target will be added |
   *    | data | Data objects to be loaded. Checkout the example. |
   *    | names | Same as data.names() |
   *    | xs | Same as data.xs option  |
   *    | classes | The classes specified by data.classes will be updated. classes must be Object that has target id as keys. |
   *    | categories | The categories specified by axis.x.categories or data.x will be updated. categories must be Array. |
   *    | axes | The axes specified by data.axes will be updated. axes must be Object that has target id as keys. |
   *    | colors | The colors specified by data.colors will be updated. colors must be Object that has target id as keys. |
   *    | headers |  Set request header if loading via `data.url`.<br>@see [data․headers](Options.html#.data%25E2%2580%25A4headers) |
   *    | keys |  Choose which JSON objects keys correspond to desired data.<br>**NOTE:** Only for JSON object given as array.<br>@see [data․keys](Options.html#.data%25E2%2580%25A4keys) |
   *    | mimeType |  Set 'json' if loading JSON via url.<br>@see [data․mimeType](Options.html#.data%25E2%2580%25A4mimeType) |
   *    | - type<br>- types | The type of targets will be updated. type must be String and types must be Object. |
   *    | unload | Specify the data will be unloaded before loading new data. If true given, all of data will be unloaded. If target ids given as String or Array, specified targets will be unloaded. If absent or false given, unload will not occur. |
   *    | done | The specified function will be called after data loaded.|
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
   */
  load: function load(args) {
    var $$ = this.internal,
        config = $$.config;
    // update xs if specified
    // update names if exists
    // update classes if exists
    // update axes if exists
    // update colors if exists
    args.xs && $$.addXs(args.xs), "names" in args && this.data.names(args.names), "classes" in args && Object.keys(args.classes).forEach(function (id) {
      config.data_classes[id] = args.classes[id];
    }), "categories" in args && $$.isCategorized() && (config.axis_x_categories = args.categories), "axes" in args && Object.keys(args.axes).forEach(function (id) {
      config.data_axes[id] = args.axes[id];
    }), "colors" in args && Object.keys(args.colors).forEach(function (id) {
      config.data_colors[id] = args.colors[id];
    }), "unload" in args && args.unload !== !1 ? $$.unload($$.mapToTargetIds(args.unload === !0 ? null : args.unload), function () {
      return $$.loadFromArgs(args);
    }) : $$.loadFromArgs(args);
  },

  /**
   * Unload data to the chart.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
   * - <b>Note:</b>
   * If you call load API soon after/before unload, unload param of load should be used. Otherwise chart will not be rendered properly because of cancel of animation.<br>
   * `done` will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering.
   * @method unload
   * @instance
   * @memberof Chart
   * @param {Object} args
   *  | key | Type | Description |
   *  | --- | --- | --- |
   *  | ids | String &vert; Array | Target id data to be unloaded. If not given, all data will be unloaded. |
   *  | done | Fuction | Callback after data is unloaded. |
   * @example
   *  // Unload data2 and data3
   *  chart.unload({
   *    ids: ["data2", "data3"],
   *    done: function() {
   *       // called after the unloaded
   *    }
   *  });
   */
  unload: function unload(argsValue) {
    var _this = this,
        $$ = this.internal,
        args = argsValue || {};

    isArray(args) ? args = {
      ids: args
    } : isString(args) && (args = {
      ids: [args]
    });
    var ids = $$.mapToTargetIds(args.ids);
    $$.unload(ids, function () {
      $$.redraw({
        withUpdateOrgXDomain: !0,
        withUpdateXDomain: !0,
        withLegend: !0
      }), $$.cache.remove(ids), args.done && args.done.call(_this);
    });
  }
});
// CONCATENATED MODULE: ./src/chart/api/show.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Show/Hide data series
 * @private
 */
function showHide(show, targetIdsValue, options) {
  var $$ = this.internal,
      targetIds = $$.mapToTargetIds(targetIdsValue);
  $$[(show ? "remove" : "add") + "HiddenTargetIds"](targetIds);
  var targets = $$.$el.svg.selectAll($$.selectorTargets(targetIds)),
      opacity = show ? "1" : "0";
  targets.transition().style("opacity", opacity, "important").call($$.endall, function () {
    targets.style("opacity", null).style("opacity", opacity);
  }), options.withLegend && $$[(show ? "show" : "hide") + "Legend"](targetIds), $$.redraw({
    withUpdateOrgXDomain: !0,
    withUpdateXDomain: !0,
    withLegend: !0
  });
}

/* harmony default export */ var api_show = ({
  /**
   * Show data series on chart
   * @method show
   * @instance
   * @memberof Chart
   * @param {String|Array} [targetIdsValue] The target id value.
   * @param {Object} [options] The object can consist with following members:<br>
   *
   *    | Key | Type | default | Description |
   *    | --- | --- | --- | --- |
   *    | withLegend | Boolean | false | whether or not display legend |
   *
   * @example
   * // show 'data1'
   * chart.show("data1");
   *
   * // show 'data1' and 'data3'
   * chart.show(["data1", "data3"]);
   */
  show: function show(targetIdsValue, options) {
    options === void 0 && (options = {}), showHide.call(this, !0, targetIdsValue, options);
  },

  /**
   * Hide data series from chart
   * @method hide
   * @instance
   * @memberof Chart
   * @param {String|Array} [targetIdsValue=all] The target id value.
   * @param {Object} [options] The object can consist with following members:<br>
   *
   *    | Key | Type | default | Description |
   *    | --- | --- | --- | --- |
   *    | withLegend | Boolean | false | whether or not display legend |
   *
   * @example
   * // hide 'data1'
   * chart.hide("data1");
   *
   * // hide 'data1' and 'data3'
   * chart.hide(["data1", "data3"]);
   */
  hide: function hide(targetIdsValue, options) {
    options === void 0 && (options = {}), showHide.call(this, !1, targetIdsValue, options);
  },

  /**
   * Toggle data series on chart. When target data is hidden, it will show. If is shown, it will hide in vice versa.
   * @method toggle
   * @instance
   * @memberof Chart
   * @param {String|Array} [targetIdsValue=all] The target id value.
   * @param {Object} [options] The object can consist with following members:<br>
   *
   *    | Key | Type | default | Description |
   *    | --- | --- | --- | --- |
   *    | withLegend | Boolean | false | whether or not display legend |
   *
   * @example
   * // toggle 'data1'
   * chart.toggle("data1");
   *
   * // toggle 'data1' and 'data3'
   * chart.toggle(["data1", "data3"]);
   */
  toggle: function toggle(targetIds, options) {
    var _this = this;

    options === void 0 && (options = {});
    var $$ = this.internal,
        targets = {
      show: [],
      hide: []
    };
    // sort show & hide target ids
    // perform show & hide task separately
    // https://github.com/naver/billboard.js/issues/454
    $$.mapToTargetIds(targetIds).forEach(function (id) {
      return targets[$$.isTargetToShow(id) ? "hide" : "show"].push(id);
    }), targets.show.length && this.show(targets.show, options), targets.hide.length && setTimeout(function () {
      return _this.hide(targets.hide, options);
    }, 0);
  }
});
// CONCATENATED MODULE: ./src/chart/api/tooltip.ts
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */

/**
 * Define tooltip
 * @ignore
 */

var tooltip_tooltip = {
  /**
   * Show tooltip
   * @method tooltip․show
   * @instance
   * @memberof Chart
   * @param {Object} args The object can consist with following members:<br>
   *
   *    | Key | Type | Description |
   *    | --- | --- | --- |
   *    | index | Number | Determine focus by index |
   *    | x | Number &vert; Date | Determine focus by x Axis index |
   *    | mouse | Array | Determine x and y coordinate value relative the targeted '.bb-event-rect' x Axis.<br>It should be used along with `data`, `index` or `x` value. The default value is set as `[0,0]` |
   *    | data | Object | When [data.xs](Options.html#.data%25E2%2580%25A4xs) option is used or [tooltip.grouped](Options.html#.tooltip) set to 'false', `should be used giving this param`.<br><br>**Key:**<br>- x {Number &verbar; Date}: x Axis value<br>- index {Number}: x Axis index (useless for data.xs)<br>- id {String}: data id<br>- value {Number}: The corresponding value for tooltip. |
   *
   * @example
   *  // show the 2nd x Axis coordinate tooltip
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
    var index,
        mouse,
        $$ = this.internal,
        config = $$.config,
        inputType = $$.state.inputType;

    // determine focus data
    if (args.mouse && (mouse = args.mouse), args.data) {
      var y = $$.getYScale(args.data.id)(args.data.value);
      $$.isMultipleX() ? mouse = [$$.scale.x(args.data.x), y] : (!config.tooltip_grouped && (mouse = [0, y]), index = isValue(args.data.index) ? args.data.index : $$.getIndexByX(args.data.x));
    } else isDefined(args.x) ? index = $$.getIndexByX(args.x) : isDefined(args.index) && (index = args.index); // emulate events to show


    (inputType === "mouse" ? ["mouseover", "mousemove"] : ["touchstart"]).forEach(function (eventName) {
      $$.dispatchEvent(eventName, index, mouse);
    });
  },

  /**
   * Hide tooltip
   * @method tooltip․hide
   * @instance
   * @memberof Chart
   */
  hide: function hide() {
    var $$ = this.internal;
    $$.hideTooltip(!0), $$.hideGridFocus(), $$.unexpandCircles(), $$.unexpandBars();
  }
};
/* harmony default export */ var api_tooltip = ({
  tooltip: tooltip_tooltip
});
// CONCATENATED MODULE: ./src/chart/Chart.ts


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
 *	    ["x", "2015-11-02", "2015-12-01", "2016-01-01", "2016-02-01", "2016-03-01"],
 * 	    ["count1", 11, 8, 7, 6, 5 ],
 *	    ["count2", 9, 3, 6, 2, 8 ]
 *   ]}
 * }
 * @see {@link bb.generate} for the initialization.
*/

/**
 * Access instance's primary node elements
 * @member {Object} $
 * @property {Object} $
 * @property {d3.selection} $.chart Wrapper element
 * @property {d3.selection} $.svg Main svg element
 * @property {d3.selection} $.defs Definition element
 * @property {d3.selection} $.main Main grouping element
 * @property {d3.selection} $.tooltip Tooltip element
 * @property {d3.selection} $.legend Legend element
 * @property {d3.selection} $.title Title element
 * @property {d3.selection} $.grid Grid element
 * @property {d3.selection} $.arc Arc element
 * @property {d3.selection} $.circles Data point circle elements
 * @property {Object} $.bar
 * @property {d3.selection} $.bar.bars Bar elements
 * @property {Object} $.line
 * @property {d3.selection} $.line.lines Line elements
 * @property {d3.selection} $.line.areas Areas elements
 * @property {Object} $.text
 * @property {d3.selection} $.text.texts Data label text elements
 * @memberof Chart
 * @example
 * var chart = bb.generate({ ... });
 *
 * chart.$.chart; // wrapper element
 * chart.$.line.circles;  // all data point circle elements
 */

var Chart_Chart =
/**
 * Plugin instance array
 * @member {Array} plugins
 * @memberof Chart
 * @instance
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
function Chart(options) {
  _defineProperty(this, "plugins", []), _defineProperty(this, "internal", void 0);
  var ctx = this,
      _options$data = options.data,
      type = _options$data.type,
      types = _options$data.types,
      $$ = new ChartInternal_ChartInternal(ctx);
  // bind to namespaced APIs
  this.internal = $$, function bindThis(fn, target, argThis) {
    Object.keys(fn).forEach(function (key) {
      var isFunc = isFunction(fn[key]),
          isChild = target !== argThis,
          hasChild = Object.keys(fn[key]).length > 0;
      isFunc && (!isChild && hasChild || isChild) ? target[key] = fn[key].bind(argThis) : !isFunc && (target[key] = {}), hasChild && bindThis(fn[key], target[key], argThis);
    });
  }(Chart.prototype, this, this), loadConfig.call($$, options), $$.beforeInit(), $$.init(), $$.afterInit();
}; // extend common APIs as part of Chart class



extend(Chart_Chart.prototype, [api_chart, api_color, api_data, api_export, api_focus, api_legend, load, api_show, api_tooltip].concat(resolver_axis.api));
// CONCATENATED MODULE: ./src/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return bb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bb; });
/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard project is licensed under the MIT license
 */

 // eslint-disable-next-line no-use-before-define


var _defaults = {},
    bb = {
  /**
   * Version information
   * @property {String} version version
   * @example
   *    bb.version;  // "1.0.0"
   * @memberof bb
   */
  version: "2.0.0-alpha",

  /**
   * Generate chart
   * @param {Options} options chart options
   * @memberof bb
   * @return {Chart}
   * @see {@link Options} for different generation options
   * @see {@link Chart} for different methods API
   * @example
   *  <!-- chart holder -->
   * <div id="LineChart"></div>
   * @example
   *   // generate chart with options
   *  var chart = bb.generate({
   *      "bindto": "#LineChart"
   *      "data": {
   *          "columns": [
   *              ["data1", 30, 200, 100, 400, 150, 250],
   *              ["data2", 50, 20, 10, 40, 15, 25]
   *           ]
   *      }
   *  });
   *
   *  // call some API
   *  // ex) get the data of 'data1'
   *  chart.data("data1");
   */
  generate: function generate(config) {
    var options = mergeObj({}, _defaults, config),
        inst = new Chart_Chart(options);
    return inst.internal.charts = this.instance, this.instance.push(inst), inst;
  },

  /**
   * Set or get global default options.
   * - **NOTE:**
   *   - The options values settings are valid within page context only.
   *   - If is called multiple times, will override the last value.
   * @param {Options} options chart options
   * @memberof bb
   * @return {Options}
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
    return isObject(options) && (_defaults = options), _defaults;
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
   * @property {Object} plugin plugin namespace
   * @example
   *  // Stanford diagram plugin
   *  bb.plugin.stanford;
   * @memberof bb
   */
  plugin: {}
};
/**
 * @namespace bb
 * @version 2.0.0-alpha
 */

/***/ })
/******/ ]);
});