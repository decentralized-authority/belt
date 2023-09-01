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

/***/ "./node_modules/@haribala/text-encoder-utf-8/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@haribala/text-encoder-utf-8/index.js ***!
  \************************************************************/
/*! exports provided: encode, decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/**
 * Encode a string to UTF-8 bytes.
 * @param {string} s - The string to encode.
 * @returns {Uint8Array} Bytes containing the UTF-8 encoding of the string.
 */
const encode = (s) => new Uint8Array([...s].map(c => c.codePointAt(0)).flatMap(x => {
    if (x < 0x80) {
        // first 128 code points need 1 byte
        return x;
    }
    if (x < 0x800) {
        // next 1920 code points need 2 bytes
        return [((x >>> 6) & 0x1F) | 0xC0, (x & 0x3F) | 0x80];
    }
    if (x < 0x10000) {
        // next 63488 (really only 61440 are in use) code points need 3 bytes
        return [((x >>> 12) & 0x0F) | 0xE0, ((x >>> 6) & 0x3F) | 0x80, (x & 0x3F) | 0x80];
    }
    // rest need 4 bytes
    return [
        ((x >>> 18) & 0x07) | 0xF0,
        ((x >>> 12) & 0x3F) | 0x80,
        ((x >>> 6) & 0x3F) | 0x80,
        (x & 0x3F) | 0x80,
    ];
}));

/**
 * Decode UTF-8 bytes into a string.
 * Will throw an error if the input is not valid UTF-8 bytes.
 * If there are 3 or less continuation bytes at the beginning of the string
 * they will be replace with \uFFFD. Similarly if a 2, 3 or 4 byte character overflows the end
 * of the string, then those bytes will also be replaced with \uFFFD.
 * @param {Uint8Array} arr - Bytes containing the UTF-8 encoding of the string.
 * @returns {string} The decoded string.
 */
const decode = (arr) => {
    const REPL_CHAR = 0xFFFD;
    const hex = x => x.toString(16).padStart(2, '0');
    const xs = Array.from(arr);
    const res = [];
    let i = 0;
    while (i < xs.length && i < 3 && xs[i] && (xs[i] & 0xC0) === 0x80) {
        res.push(REPL_CHAR); // replacement for continuation byte
        i++;
    }
    if (i >= xs.length) return String.fromCodePoint(...res);
    if (!(
        ((xs[i] & 0x80) === 0) || // 1 byte
        ((xs[i] & 0xE0) === 0xC0) || // 2 byte
        ((xs[i] & 0xF0) === 0xE0) || // 3 byte
        ((xs[i] & 0xF8) === 0xF0) // 4 byte
    )) {
        throw new Error(`invalid utf-8. Expected a leading byte at index ${i} actual ${hex(xs[i])}`);
    }
    for (; i < xs.length; i++) {
        const x = xs[i];
        if ((x & 0x80) === 0) {
            // 1 byte
            res.push(x);
            continue;
        }
        if ((x & 0xE0) === 0xC0) {
            // 2 byte
            if (i + 1 >= xs.length) {
                res.push(REPL_CHAR); // replacement for 1st byte, 2nd byte is past end of string
                break;
            }
            const x1 = xs[i + 1];
            if ((x1 & 0xC0) !== 0x80) {
                throw new Error(`invalid utf-8. Expected a continuation byte at index ${i + 1} actual ${hex(x1)}`);
            }
            const c = ((x & 0x1F) << 6) | (x1 & 0x3F);
            if (c < 0x80 || c >= 0x800) {
                throw new Error(`invalid utf-8. Expected an integer between 0x80 and 0x800 at index ${i} actual ${c}`);
            }
            res.push(c);
            i++;
            continue;
        }
        if ((x & 0xF0) === 0xE0) {
            // 3 byte
            if (i + 2 >= xs.length) {
                res.push(REPL_CHAR); // replacement for 1st byte
                if (i + 1 < xs.length) res.push(REPL_CHAR); // replacement for 2nd byte, 3rd byte is past end of string
                break;
            }
            const x1 = xs[i + 1];
            if ((x1 & 0xC0) !== 0x80) {
                throw new Error(`invalid utf-8. Expected a continuation byte at index ${i + 1} actual ${hex(x1)}`);
            }
            const x2 = xs[i + 2];
            if ((x2 & 0xC0) !== 0x80) {
                throw new Error(`invalid utf-8. Expected a continuation byte at index ${i + 2} actual ${hex(x2)}`);
            }
            const c = ((x & 0x0F) << 12) | ((x1 & 0x3F) << 6) | (x2 & 0x3F);
            if (c < 0x800 || c >= 0x10000) {
                throw new Error(`invalid utf-8. Expected an integer between 0x800 and 0x10000 at index ${i} actual ${c}`);
            }
            res.push(c);
            i += 2;
            continue;
        }
        if ((x & 0xF8) === 0xF0) {
            // 4 byte
            if (i + 3 >= xs.length) {
                res.push(REPL_CHAR); // replacement for 1st byte
                if (i + 1 < xs.length) res.push(REPL_CHAR); // replacement for 2nd byte
                if (i + 2 < xs.length) res.push(REPL_CHAR); // replacement for 3rd byte, 4th byte is past end of string
                break;
            }
            const x1 = xs[i + 1];
            if ((x1 & 0xC0) !== 0x80) {
                throw new Error(`invalid utf-8. Expected a continuation byte at index ${i + 1} actual ${hex(x1)}`);
            }
            const x2 = xs[i + 2];
            if ((x2 & 0xC0) !== 0x80) {
                throw new Error(`invalid utf-8. Expected a continuation byte at index ${i + 2} actual ${hex(x2)}`);
            }
            const x3 = xs[i + 3];
            if ((x3 & 0xC0) !== 0x80) {
                throw new Error(`invalid utf-8. Expected a continuation byte at index ${i + 3} actual ${hex(x3)}`);
            }
            const c = ((x & 0x07) << 18) | ((x1 & 0x3F) << 12) | ((x2 & 0x3F) << 6) | (x3 & 0x3F);
            if (c < 0x10000) {
                throw new Error(`invalid utf-8. Expected an integer above 0x10000 at index ${i} actual ${c}`);
            }
            res.push(c);
            i += 3;
            continue;
        }
        throw new Error(`invalid utf-8. Expected a leading byte at index ${i} actual ${hex(x)}`);
    }
    return String.fromCodePoint(...res);
};


/***/ }),

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
/* harmony import */ var _haribala_text_encoder_utf_8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @haribala/text-encoder-utf-8 */ "./node_modules/@haribala/text-encoder-utf-8/index.js");
 // const decoder = new TextDecoder;
// const encoder = new TextEncoder;

/**
 * Decode a string from bytes.
 *
 * @param   bytes - bytes to decode as a string
 *
 * @returns string decoded from bytes
 * @throws  will throw if decoding fails
 */

function bytesToString(bytes) {
  // return decoder.decode(bytes);
  return Object(_haribala_text_encoder_utf_8__WEBPACK_IMPORTED_MODULE_0__["decode"])(bytes);
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
  // return encoder.encode(string);
  return Object(_haribala_text_encoder_utf_8__WEBPACK_IMPORTED_MODULE_0__["encode"])(string);
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

/***/ })

/******/ });
});
//# sourceMappingURL=node.js.map