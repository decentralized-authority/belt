(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Belt"] = factory();
	else
		root["Belt"] = factory();
})(global, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrayWrap.ts":
/*!**************************!*\
  !*** ./src/arrayWrap.ts ***!
  \**************************/
/*! exports provided: arrayWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayWrap", function() { return arrayWrap; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Wrap arguments in an array. If only one argument is provided:
 *
 * - if it's `null` or `undefined`, return an empty array
 * - if it's an array, return a copy of it
 * - otherwise, return a new array containing it
 *
 * @param   first - first argument
 * @param   rest  - other arguments
 *
 * @returns an array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function arrayWrap(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var array;

  if (arguments.length > 1) {
    array = [first].concat(rest);
  } else if (first == null) {
    array = [];
  } else if (Array.isArray(first)) {
    array = _toConsumableArray(first);
  } else {
    array = [first];
  }

  return array;
}

/***/ }),

/***/ "./src/base64.ts":
/*!***********************!*\
  !*** ./src/base64.ts ***!
  \***********************/
/*! exports provided: base64ToBytes, bytesToBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToBytes", function() { return base64ToBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToBase64", function() { return bytesToBase64; });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "buffer");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var atob = function atob(base64) {
  return buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(base64, 'base64').toString('binary');
};

var btoa = function btoa(binary) {
  return buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(binary, 'binary').toString('base64');
};
/**
 * Decode bytes from Base64.
 *
 * @param   base64 - string to decode
 *
 * @returns bytes from Base64-encoded string
 */


function base64ToBytes(base64) {
  var binary = atob(base64);
  var length = binary.length;
  var bytes = new Uint8Array(new ArrayBuffer(length));

  for (var i = 0; i < length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}
/**
 * Encode bytes as Base64.
 *
 * @param   bytes - bytes to encode
 *
 * @returns Base64-encoded string from bytes
 */

function bytesToBase64(bytes) {
  var binary = String.fromCharCode.apply(String, _toConsumableArray(bytes));
  return btoa(binary);
}

/***/ }),

/***/ "./src/bytes.ts":
/*!**********************!*\
  !*** ./src/bytes.ts ***!
  \**********************/
/*! exports provided: bytesToString, stringToBytes, bufferToBytes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToString", function() { return bytesToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToBytes", function() { return stringToBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferToBytes", function() { return bufferToBytes; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

var decoder = new util__WEBPACK_IMPORTED_MODULE_0__["TextDecoder"]();
var encoder = new util__WEBPACK_IMPORTED_MODULE_0__["TextEncoder"]();
/**
 * Decode a string from bytes.
 *
 * @param   bytes - bytes to decode as a string
 *
 * @returns string decoded from bytes
 * @throws  will throw if decoding fails
 */

function bytesToString(bytes) {
  return decoder.decode(bytes);
}
/**
 * Encode a string as bytes.
 *
 * @param   string - string to encode as bytes
 *
 * @returns bytes encoded from string
 * @throws  will throw if encoding fails
 */

function stringToBytes(string) {
  return encoder.encode(string);
}
/**
 * Convert a Buffer to bytes.
 *
 * @param   buffer - Buffer to convert to bytes
 *
 * @returns bytes converted from Buffer
 */

function bufferToBytes(buffer) {
  return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}

/***/ }),

/***/ "./src/canonical.ts":
/*!**************************!*\
  !*** ./src/canonical.ts ***!
  \**************************/
/*! exports provided: toCanonicalJSON, toCanonicalJSONClone, toCanonicalJSONString, toCanonicalJSONBytes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCanonicalJSON", function() { return toCanonicalJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCanonicalJSONClone", function() { return toCanonicalJSONClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCanonicalJSONString", function() { return toCanonicalJSONString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCanonicalJSONBytes", function() { return toCanonicalJSONBytes; });
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./src/isObject.ts");
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytes */ "./src/bytes.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/**
 * Canonicalize JSON for signing.
 *
 * This recursively sorts objects by key, removing any keys with `null` or `undefined` values, and replaces other
 * `undefined` values with `null`.
 *
 * @param   value - any value (but usually a JSON object)
 *
 * @returns canonical JSON
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function toCanonicalJSON(value) {
  if (Object(_isObject__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var sorted = {};
    var keys = Object.keys(value).sort();

    var _iterator = _createForOfIteratorHelper(keys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _key = _step.value;
        sorted[_key] = toCanonicalJSON(value[_key]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return sorted;
  }

  if (Array.isArray(value)) {
    return value.map(toCanonicalJSON);
  }

  return value === undefined ? null : value;
}
/**
 * Canonicalize JSON for signing, encode it as a string, then decode the string as JSON.
 *
 * @param   value - JSON value
 *
 * @returns the canonical JSON
 * @throws  will throw if encoding or decoding fails
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function toCanonicalJSONClone(value) {
  var string = toCanonicalJSONString(value);
  return JSON.parse(string);
}
/**
 * Canonicalize JSON for signing, then encode it as a string.
 *
 * @param   value - JSON value
 *
 * @returns the canonical JSON string
 * @throws  will throw if encoding fails
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function toCanonicalJSONString(value) {
  var json = toCanonicalJSON(value);
  return JSON.stringify(json);
}
/**
 * Canonicalize JSON for signing, encode it as a string, then encode the string as bytes.
 *
 * @param   value - JSON value
 *
 * @returns the canonical JSON bytes
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function toCanonicalJSONBytes(value) {
  var string = toCanonicalJSONString(value);
  return Object(_bytes__WEBPACK_IMPORTED_MODULE_1__["stringToBytes"])(string);
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: arrayWrap, base64ToBytes, bytesToBase64, bytesToString, stringToBytes, bufferToBytes, toCanonicalJSON, toCanonicalJSONClone, toCanonicalJSONString, toCanonicalJSONBytes, isObject, jsonToBytes, bytesToJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayWrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWrap */ "./src/arrayWrap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayWrap", function() { return _arrayWrap__WEBPACK_IMPORTED_MODULE_0__["arrayWrap"]; });

/* harmony import */ var _base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base64 */ "./src/base64.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64ToBytes", function() { return _base64__WEBPACK_IMPORTED_MODULE_1__["base64ToBytes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bytesToBase64", function() { return _base64__WEBPACK_IMPORTED_MODULE_1__["bytesToBase64"]; });

/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bytes */ "./src/bytes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bytesToString", function() { return _bytes__WEBPACK_IMPORTED_MODULE_2__["bytesToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToBytes", function() { return _bytes__WEBPACK_IMPORTED_MODULE_2__["stringToBytes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferToBytes", function() { return _bytes__WEBPACK_IMPORTED_MODULE_2__["bufferToBytes"]; });

/* harmony import */ var _canonical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canonical */ "./src/canonical.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCanonicalJSON", function() { return _canonical__WEBPACK_IMPORTED_MODULE_3__["toCanonicalJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCanonicalJSONClone", function() { return _canonical__WEBPACK_IMPORTED_MODULE_3__["toCanonicalJSONClone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCanonicalJSONString", function() { return _canonical__WEBPACK_IMPORTED_MODULE_3__["toCanonicalJSONString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCanonicalJSONBytes", function() { return _canonical__WEBPACK_IMPORTED_MODULE_3__["toCanonicalJSONBytes"]; });

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isObject */ "./src/isObject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _isObject__WEBPACK_IMPORTED_MODULE_4__["isObject"]; });

/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json */ "./src/json.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonToBytes", function() { return _json__WEBPACK_IMPORTED_MODULE_5__["jsonToBytes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bytesToJSON", function() { return _json__WEBPACK_IMPORTED_MODULE_5__["bytesToJSON"]; });








/***/ }),

/***/ "./src/isObject.ts":
/*!*************************!*\
  !*** ./src/isObject.ts ***!
  \*************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/**
 * Check if a value is a plain object.
 *
 * @param   value - value to check
 *
 * @returns `true` if the value is a plain object, `false` otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/***/ }),

/***/ "./src/json.ts":
/*!*********************!*\
  !*** ./src/json.ts ***!
  \*********************/
/*! exports provided: jsonToBytes, bytesToJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToBytes", function() { return jsonToBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToJSON", function() { return bytesToJSON; });
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytes */ "./src/bytes.ts");

/**
 * Encode a value as JSON bytes
 *
 * @typeparam T     - type of encoded value
 * @param     value - value to encode
 *
 * @returns   JSON bytes
 * @throws    will throw if `JSON.stringify` fails (e.g. on circular reference)
 */

function jsonToBytes(value) {
  return Object(_bytes__WEBPACK_IMPORTED_MODULE_0__["stringToBytes"])(JSON.stringify(value));
}
/**
 * Decode a value from JSON bytes
 *
 * @typeparam T    - type of encoded value
 * @param     json - JSON bytes to decode
 *
 * @returns   value decoded from JSON bytes
 * @throws    will throw if `JSON.parse` fails (e.g. on malformed JSON)
 */

function bytesToJSON(json) {
  return JSON.parse(Object(_bytes__WEBPACK_IMPORTED_MODULE_0__["bytesToString"])(json));
}

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
});
//# sourceMappingURL=node.js.map