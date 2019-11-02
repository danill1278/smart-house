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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/iKettle/iKettle.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/iKettle/iKettle.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".fast {\r\n    color: #f00;\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\r\n    background: #fcfcfc;\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

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

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
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
  var css = remove ? '' : obj.css; // For old IE

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
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/BaseDevices/Machine/Machine.js":
/*!********************************************!*\
  !*** ./src/BaseDevices/Machine/Machine.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Machine = function Machine() {
  var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "machine";
  this._model = model;
  this._state = false; // creating device id

  var id = Symbol();
  this._timer = null;

  this.getId = function () {
    return id;
  };
};

Machine.prototype.getState = function () {
  return this._state;
};

Machine.prototype.getModel = function () {
  return this._model;
};

Machine.prototype._isDeviceOn = function () {
  if (!this.getState()) {
    throw new Error("Turn on device, please!");
  }

  return true;
}; // Machine.prototype._checkNameValidity = function(name) {
//   if (typeof name !== "string") {
//     throw new Error("Name must be a string");
//   }
//   const regex = /^[\w\d\s]{5,10}$/;
//   const result = name.match(regex);
//   if (!result) {
//     throw new Error("Name must contain 5-10 characters");
//   } else {
//     return true;
//   }
// };


Machine.prototype.on = function () {
  this._state = true;
};

Machine.prototype.off = function () {
  this._state = false;
};

Machine.prototype._deleteTimer = function () {
  clearInterval(this._timer);
};

Machine.prototype.info = function () {
  return "\n        model: ".concat(this.getModel(), ",\n        status: ").concat(this.getState());
};

/* harmony default export */ __webpack_exports__["default"] = (Machine);

/***/ }),

/***/ "./src/SmartHouse/SmartHouse.js":
/*!**************************************!*\
  !*** ./src/SmartHouse/SmartHouse.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Logger/Logger */ "./src/Utilities/Logger/Logger.js");


var SmartHouse = function SmartHouse() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "New House";
  this.__devices = [];

  this.__checkName = function (name) {
    if (typeof name !== "string") {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Name must be a string");
    }

    var regex = /[\w\d\s]{5,10}/;
    var result = name.match(regex);

    if (result != null) {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].warning("Name must contain 5-10 characters");
    } else {
      return true;
    }
  };

  if (this.__checkName(name)) {
    this.__name = name;
  }

  this.getName = function () {
    return this.__name;
  };

  this.addDevice = function (value) {
    if (value instanceof iKettle || value instanceof Speaker) {
      this.__devices.push(value);
    } else {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Devices must be objects of iKettle or Speaker");
    }
  };

  this.deleteDeviceById = function (id) {
    var deleteObjIndex = this.__devices.find(function (device, index) {
      if (device.getId() === id) {
        return index;
      }
    });

    this.__devices.splice(deleteObjIndex, 1);
  };

  this.onAll = function () {
    this.__devices.forEach(function (device) {
      return device.on();
    });
  };

  this.offAll = function () {
    this.__devices.forEach(function (device) {
      return device.off();
    });
  };

  this.getAllDevices = function () {
    return this.__devices;
  };

  this.deleteAllDevices = function () {
    this.__devices = [];
  };

  this.getDeviceById = function (id) {
    return this.__devices.find(function (device) {
      if (device.getId() === id) {
        return device;
      }
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (SmartHouse);

/***/ }),

/***/ "./src/Speaker/Speaker.js":
/*!********************************!*\
  !*** ./src/Speaker/Speaker.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseDevices/Machine/Machine */ "./src/BaseDevices/Machine/Machine.js");


var Speaker = function Speaker(trackList) {
  var _this = this;

  var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Jeka Active";
  _BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, model); // device play/pause

  this._playbackState = false; //volume controls

  this._volumeMin = 0;
  this._volumeMax = 10;
  this._currentVolume = 5; //is flash card in device

  this._flashCard = true; //track duration timer count

  this._currentTimerValue = 0;
  var defaultTrackList = [{
    name: "Song 1",
    duration: 8
  }, {
    name: "Song 2",
    duration: 10
  }, {
    name: "Song 3",
    duration: 5
  }, {
    name: "Song 4",
    duration: 13
  }, {
    name: "Song 5",
    duration: 10
  }]; // initializing of track-list

  if (Array.isArray(trackList) && trackList.length) {
    // tracklist passed in constructor
    trackList.forEach(function (track) {
      if (!(typeof track.name === "string" && track.name.length && typeof track.duration === "number" && track.duration > 0)) {
        throw new Error("Invalid input tracklist data");
      }

      _this._trackList = trackList;
    });
  } else {
    //default tracklist
    this._trackList = defaultTrackList;
  } // track wich playing now


  this._currentTrack = 0;
}; // methods:


Speaker.prototype = Object.create(_BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Speaker.prototype.constructor = Speaker; //////////////

Speaker.prototype.on = function () {
  _BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on.call(this); // check is device has flash card

  if (this._flashCard) {
    this.togglePlaybackStatus();
  }
};

Speaker.prototype.off = function () {
  this._isDeviceOn(); // set device in pause mode


  this.togglePlaybackStatus(); // turn off device

  _BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off.call(this);
}; // log info about current device state


Speaker.prototype.info = function () {
  console.log("\n        ".concat(_BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.info.call(this), "\n        volume: ").concat(this._currentVolume, ",\n        playing: ").concat(this._playbackState, ",\n        currentSong: ").concat(this._trackList[this._currentTrack].name, ",\n        songDuration: ").concat(this._trackList[this._currentTrack].duration, ",\n        currentTime: ").concat(this._currentTimerValue, "\n        "));
}; // turn device to play/pause modes


Speaker.prototype.togglePlaybackStatus = function () {
  this._isDeviceOn(); // change playing status to oposite


  this._playbackState = !this._playbackState;

  if (this._playbackState) {
    // start playing tracks
    this._startPlaying(this._currentTimerValue);
  } else {
    // stop playing tracks
    this._stopPlaying();
  }
};

Speaker.prototype._stopPlaying = function () {
  this._isDeviceOn(); // delete async time counter


  _BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._deleteTimer.call(this);
};

Speaker.prototype._startPlaying = function (playSongFrom) {
  this._isDeviceOn();

  this._isDeviceInPlayingModeNow(); // set time-counter to predefined {playSongFrom} value or start from 0s


  var count = typeof playSongFrom === "number" ? playSongFrom : 0;

  var tic = function tic() {
    // if predefined value more than track duration play next song
    if (count >= this._trackList[this._currentTrack].duration) {
      this.toggleTrack("next");
    } else {
      // increase time counter on 1s
      count++; // set value to property to achieve that from other methods

      this._currentTimerValue = count;
    } // log info on each timer tic


    this.info();
  }; // set async time counter


  this._timer = setInterval(tic.bind(this), 1000);
};

Speaker.prototype.getPlayPauseState = function () {
  return this._playbackState;
};

Speaker.prototype.nextTrack = function () {
  // if there is some more track in track list start next
  if (this._currentTrack < this._trackList.length - 1) {
    this._currentTrack++;
  } else {
    // if track is last in track list start from first track
    this._currentTrack = 0;
  }
};

Speaker.prototype.previousTrack = function () {
  // if there is some more track in track list start next
  if (this._currentTrack > 0) {
    this._currentTrack--;
  } else {
    // if track is first in track list play last track
    this._currentTrack = this._trackList.length - 1;
  }
};

Speaker.prototype.toggleTrack = function (toggleDirection) {
  this._isDeviceOn();

  if (typeof toggleDirection !== "string") {
    throw new Error("Please pass 'next' or 'previous' value as a parameter");
  } // delete old timer


  this._stopPlaying(); // set timer value to 0, for starting track from the beginning


  this._currentTimerValue = 0;

  switch (toggleDirection) {
    case "next":
      this.nextTrack();
      break;

    case "previous":
      this.previousTrack();
      break;
  } // setup new timer


  this._startPlaying();
};

Speaker.prototype.rewindTrack = function (rewindDirection) {
  this._isDeviceOn(); //rewind only if device playing now


  this._isDeviceInPlayingModeNow();

  if (typeof rewindDirection !== "string" || rewindDirection !== "forward" && rewindDirection !== "back") {
    throw new Error("Please pass 'forward' or 'back' string value as a parameter");
  } // setup random rewind time


  var rewindTime = Math.random().toFixed(1) * 10;

  switch (rewindDirection) {
    case "forward":
      this.rewindForward(rewindTime);
      break;

    case "back":
      this.rewindBack(rewindTime);
      break;
  }
};

Speaker.prototype.rewindForward = function (time) {
  // if lost time + rewind time less than song duration, start playing from new time position
  if (this._currentTimerValue + time < this._trackList[this._currentTrack].duration) {
    this._stopPlaying();

    this._startPlaying(this._currentTimerValue + time);
  } else {
    // if lost time + rewind time more than song duration, start playing next song
    this.toggleTrack("next");
  }
};

Speaker.prototype.rewindBack = function (time) {
  this._stopPlaying(); // if lost time - rewind time more than 0, start playing from new time position


  if (this._currentTimerValue - time > 0) {
    this._startPlaying(this._currentTimerValue - time);
  } else {
    // if lost time - rewind time less than 0, start playing previous song
    this.toggleTrack("previous");
  }
};

Speaker.prototype.increaseVolume = function () {
  this._isDeviceOn(); // checks that the value does not go beyond the predefined limits


  if (this._currentVolume < this._volumeMax) {
    this._currentVolume++;
  }
};

Speaker.prototype.decreaseVolume = function () {
  this._isDeviceOn(); // checks that the value does not go beyond the predefined limits


  if (this._currentVolume > this._volumeMin) {
    this._currentVolume--;
  }
}; //safety methods
//check is device playing track now


Speaker.prototype._isDeviceInPlayingModeNow = function () {
  if (!this._playbackState) throw new Error("Toggle device to playing mode before starting this operation");
}; //safety methods end


/* harmony default export */ __webpack_exports__["default"] = (Speaker);

/***/ }),

/***/ "./src/Utilities/Logger/Logger.js":
/*!****************************************!*\
  !*** ./src/Utilities/Logger/Logger.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Logger = {
  warning: function warning(text) {
    console.warn(text);
  },
  error: function error(text) {
    console.error(text);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logger);

/***/ }),

/***/ "./src/iKettle/iKettle.css":
/*!*********************************!*\
  !*** ./src/iKettle/iKettle.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./iKettle.css */ "./node_modules/css-loader/dist/cjs.js!./src/iKettle/iKettle.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/iKettle/iKettle.js":
/*!********************************!*\
  !*** ./src/iKettle/iKettle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iKettle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iKettle.css */ "./src/iKettle/iKettle.css");
/* harmony import */ var _iKettle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iKettle_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseDevices/Machine/Machine */ "./src/BaseDevices/Machine/Machine.js");
/* harmony import */ var _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/Logger/Logger */ "./src/Utilities/Logger/Logger.js");




var iKettle = function iKettle() {
  _BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, "kettle22");
  this.__modes = {
    standart: 100,
    tea: 78,
    coffee: 85,
    porridge: 72,
    "baby food": 70
  };
  this.__currentMode = "standart";
  this.__maxFullness = 1000;
  this.__minFullness = 100;
  this.__currentFullness = 0;
  this.__currentTemperature = 0;
};

iKettle.prototype = Object.create(_BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
iKettle.prototype.constructor = iKettle;

iKettle.prototype.info = function () {
  console.log("\n        ".concat(_BaseDevices_Machine_Machine__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.info.call(this), "\n        mode: ").concat(this.__currentMode, ";\n        currentFullness: ").concat(this.__currentFullness, ";\n    "));
};

iKettle.prototype.setTemperature = function (value) {
  if (typeof value == "number" && value >= 10 && value <= 70) {
    this.__currentTemperature = value;
  } else {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_2__["default"].warning("Temperature must be in range from 10 to 70C");
  }
};

iKettle.prototype.changeMode = function (value) {
  if (this._isDeviceOn() && typeof value == "string" && value in this.__modes) {
    this.__currentMode = value;
  }
};

iKettle.prototype.getCurrentMode = function () {
  return this.__currentMode;
};

iKettle.prototype.addWater = function (value) {
  var newAmountOfWater = this.__currentFullness + value;

  if (typeof value !== "number") {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("Value must be a number");
  }

  if (newAmountOfWater >= this.__minFullness && newAmountOfWater <= this.__maxFullness) {
    this.__currentFullness = newAmountOfWater;
  } else if (newAmountOfWater < this.__minFullness) {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_2__["default"].warning("Please, add more water");
  } else {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_2__["default"].warning("Please, reduce the amount of water");
  }
};

iKettle.prototype.getCurrentFullness = function () {
  return this.__currentFullness;
};

iKettle.prototype.boilWater = function (temperature) {
  var _this = this;

  if (this._isDeviceOn() && this.__currentFullness) {
    this.setTemperature(temperature);
    return new Promise(function (resolve) {
      _this._timer = setInterval(function () {
        if (_this.__currentTemperature === _this.__modes[_this.__currentMode]) {
          resolve();

          _this.off();

          _this._deleteTimer();
        } else {
          _this.__currentTemperature++;
          _this.__currentFullness--;
        }
      }, 1000);
    }).then(function () {
      console.log(_this.__currentTemperature);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (iKettle);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartHouse_SmartHouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmartHouse/SmartHouse */ "./src/SmartHouse/SmartHouse.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker/Speaker */ "./src/Speaker/Speaker.js");
/* harmony import */ var _iKettle_iKettle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iKettle/iKettle */ "./src/iKettle/iKettle.js");




new _iKettle_iKettle__WEBPACK_IMPORTED_MODULE_3__["default"]();

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lLZXR0bGUvaUtldHRsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2VEZXZpY2VzL01hY2hpbmUvTWFjaGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU21hcnRIb3VzZS9TbWFydEhvdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TcGVha2VyL1NwZWFrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Mb2dnZXIvTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pS2V0dGxlL2lLZXR0bGUuY3NzPzkxZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lLZXR0bGUvaUtldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmYzZiJdLCJuYW1lcyI6WyJNYWNoaW5lIiwibW9kZWwiLCJfbW9kZWwiLCJfc3RhdGUiLCJpZCIsIlN5bWJvbCIsIl90aW1lciIsImdldElkIiwicHJvdG90eXBlIiwiZ2V0U3RhdGUiLCJnZXRNb2RlbCIsIl9pc0RldmljZU9uIiwiRXJyb3IiLCJvbiIsIm9mZiIsIl9kZWxldGVUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJpbmZvIiwiU21hcnRIb3VzZSIsIm5hbWUiLCJfX2RldmljZXMiLCJfX2NoZWNrTmFtZSIsIkxvZ2dlciIsImVycm9yIiwicmVnZXgiLCJyZXN1bHQiLCJtYXRjaCIsIndhcm5pbmciLCJfX25hbWUiLCJnZXROYW1lIiwiYWRkRGV2aWNlIiwidmFsdWUiLCJpS2V0dGxlIiwiU3BlYWtlciIsInB1c2giLCJkZWxldGVEZXZpY2VCeUlkIiwiZGVsZXRlT2JqSW5kZXgiLCJmaW5kIiwiZGV2aWNlIiwiaW5kZXgiLCJzcGxpY2UiLCJvbkFsbCIsImZvckVhY2giLCJvZmZBbGwiLCJnZXRBbGxEZXZpY2VzIiwiZGVsZXRlQWxsRGV2aWNlcyIsImdldERldmljZUJ5SWQiLCJ0cmFja0xpc3QiLCJjYWxsIiwiX3BsYXliYWNrU3RhdGUiLCJfdm9sdW1lTWluIiwiX3ZvbHVtZU1heCIsIl9jdXJyZW50Vm9sdW1lIiwiX2ZsYXNoQ2FyZCIsIl9jdXJyZW50VGltZXJWYWx1ZSIsImRlZmF1bHRUcmFja0xpc3QiLCJkdXJhdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInRyYWNrIiwiX3RyYWNrTGlzdCIsIl9jdXJyZW50VHJhY2siLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInRvZ2dsZVBsYXliYWNrU3RhdHVzIiwiY29uc29sZSIsImxvZyIsIl9zdGFydFBsYXlpbmciLCJfc3RvcFBsYXlpbmciLCJwbGF5U29uZ0Zyb20iLCJfaXNEZXZpY2VJblBsYXlpbmdNb2RlTm93IiwiY291bnQiLCJ0aWMiLCJ0b2dnbGVUcmFjayIsInNldEludGVydmFsIiwiYmluZCIsImdldFBsYXlQYXVzZVN0YXRlIiwibmV4dFRyYWNrIiwicHJldmlvdXNUcmFjayIsInRvZ2dsZURpcmVjdGlvbiIsInJld2luZFRyYWNrIiwicmV3aW5kRGlyZWN0aW9uIiwicmV3aW5kVGltZSIsIk1hdGgiLCJyYW5kb20iLCJ0b0ZpeGVkIiwicmV3aW5kRm9yd2FyZCIsInJld2luZEJhY2siLCJ0aW1lIiwiaW5jcmVhc2VWb2x1bWUiLCJkZWNyZWFzZVZvbHVtZSIsInRleHQiLCJ3YXJuIiwiX19tb2RlcyIsInN0YW5kYXJ0IiwidGVhIiwiY29mZmVlIiwicG9ycmlkZ2UiLCJfX2N1cnJlbnRNb2RlIiwiX19tYXhGdWxsbmVzcyIsIl9fbWluRnVsbG5lc3MiLCJfX2N1cnJlbnRGdWxsbmVzcyIsIl9fY3VycmVudFRlbXBlcmF0dXJlIiwic2V0VGVtcGVyYXR1cmUiLCJjaGFuZ2VNb2RlIiwiZ2V0Q3VycmVudE1vZGUiLCJhZGRXYXRlciIsIm5ld0Ftb3VudE9mV2F0ZXIiLCJnZXRDdXJyZW50RnVsbG5lc3MiLCJib2lsV2F0ZXIiLCJ0ZW1wZXJhdHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxVQUFVLG9CQUFvQixLQUFLOzs7Ozs7Ozs7Ozs7QUNGMUQsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLFNBQVMsNEJBQTRCLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUNGcEQ7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QyxZQUFNO0FBQ1poRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNvQyxvQkFBakI7QUFDRCxLQWJNLENBQVA7QUFjRDtBQUNGLENBbEJEOztBQW9CZXhFLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQUlBLHdEQUFKLEc7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDRIQUF5RDs7QUFFL0U7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0pBQTJFOztBQUVoRztBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmFzdCB7XFxyXFxuICAgIGNvbG9yOiAjZjAwO1xcclxcbn1cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZjZmNmYztcXHJcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiY29uc3QgTWFjaGluZSA9ICBmdW5jdGlvbihtb2RlbCA9IFwibWFjaGluZVwiKSB7XHJcbiAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcclxuICB0aGlzLl9zdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAvLyBjcmVhdGluZyBkZXZpY2UgaWRcclxuXHJcbiAgY29uc3QgaWQgPSBTeW1ib2woKTtcclxuICB0aGlzLl90aW1lciA9IG51bGw7XHJcblxyXG4gIHRoaXMuZ2V0SWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBpZDtcclxuICB9O1xyXG59XHJcblxyXG5NYWNoaW5lLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLl9zdGF0ZTtcclxufTtcclxuXHJcbk1hY2hpbmUucHJvdG90eXBlLmdldE1vZGVsID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX21vZGVsO1xyXG59O1xyXG5cclxuTWFjaGluZS5wcm90b3R5cGUuX2lzRGV2aWNlT24gPSBmdW5jdGlvbigpIHtcclxuICBpZiAoIXRoaXMuZ2V0U3RhdGUoKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVHVybiBvbiBkZXZpY2UsIHBsZWFzZSFcIik7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLy8gTWFjaGluZS5wcm90b3R5cGUuX2NoZWNrTmFtZVZhbGlkaXR5ID0gZnVuY3Rpb24obmFtZSkge1xyXG4vLyAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xyXG4vLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmFtZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4vLyAgIH1cclxuLy8gICBjb25zdCByZWdleCA9IC9eW1xcd1xcZFxcc117NSwxMH0kLztcclxuLy8gICBjb25zdCByZXN1bHQgPSBuYW1lLm1hdGNoKHJlZ2V4KTtcclxuLy8gICBpZiAoIXJlc3VsdCkge1xyXG4vLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmFtZSBtdXN0IGNvbnRhaW4gNS0xMCBjaGFyYWN0ZXJzXCIpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5NYWNoaW5lLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuX3N0YXRlID0gdHJ1ZTtcclxufTtcclxuXHJcbk1hY2hpbmUucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuX3N0YXRlID0gZmFsc2U7XHJcbn07XHJcblxyXG5NYWNoaW5lLnByb3RvdHlwZS5fZGVsZXRlVGltZXIgPSBmdW5jdGlvbigpIHtcclxuICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcclxufTtcclxuXHJcbk1hY2hpbmUucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gYFxyXG4gICAgICAgIG1vZGVsOiAke3RoaXMuZ2V0TW9kZWwoKX0sXHJcbiAgICAgICAgc3RhdHVzOiAke3RoaXMuZ2V0U3RhdGUoKX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFjaGluZTsiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL1V0aWxpdGllcy9Mb2dnZXIvTG9nZ2VyJztcclxuXHJcbmNvbnN0IFNtYXJ0SG91c2UgPSBmdW5jdGlvbihuYW1lID0gXCJOZXcgSG91c2VcIikge1xyXG4gIHRoaXMuX19kZXZpY2VzID0gW107XHJcbiAgdGhpcy5fX2NoZWNrTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBMb2dnZXIuZXJyb3IoXCJOYW1lIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWdleCA9IC9bXFx3XFxkXFxzXXs1LDEwfS87XHJcbiAgICBjb25zdCByZXN1bHQgPSBuYW1lLm1hdGNoKHJlZ2V4KTtcclxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICBMb2dnZXIud2FybmluZyhcIk5hbWUgbXVzdCBjb250YWluIDUtMTAgY2hhcmFjdGVyc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaWYgKHRoaXMuX19jaGVja05hbWUobmFtZSkpIHtcclxuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIHRoaXMuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19uYW1lO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuYWRkRGV2aWNlID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGlLZXR0bGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBTcGVha2VyKSB7XHJcbiAgICAgIHRoaXMuX19kZXZpY2VzLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTG9nZ2VyLmVycm9yKFwiRGV2aWNlcyBtdXN0IGJlIG9iamVjdHMgb2YgaUtldHRsZSBvciBTcGVha2VyXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdGhpcy5kZWxldGVEZXZpY2VCeUlkID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIGxldCBkZWxldGVPYmpJbmRleCA9IHRoaXMuX19kZXZpY2VzLmZpbmQoKGRldmljZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGRldmljZS5nZXRJZCgpID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9fZGV2aWNlcy5zcGxpY2UoZGVsZXRlT2JqSW5kZXgsIDEpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMub25BbGwgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuX19kZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IGRldmljZS5vbigpKTtcclxuICB9O1xyXG4gIHRoaXMub2ZmQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9fZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiBkZXZpY2Uub2ZmKCkpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuZ2V0QWxsRGV2aWNlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19kZXZpY2VzO1xyXG4gIH07XHJcbiAgdGhpcy5kZWxldGVBbGxEZXZpY2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9fZGV2aWNlcyA9IFtdO1xyXG4gIH07XHJcbiAgIFxyXG4gIHRoaXMuZ2V0RGV2aWNlQnlJZCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fX2RldmljZXMuZmluZChkZXZpY2UgPT4ge1xyXG4gICAgICBpZiAoZGV2aWNlLmdldElkKCkgPT09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGRldmljZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFydEhvdXNlOyIsImltcG9ydCBNYWNoaW5lIGZyb20gJy4uL0Jhc2VEZXZpY2VzL01hY2hpbmUvTWFjaGluZSc7XHJcblxyXG5cclxuY29uc3QgU3BlYWtlciA9IGZ1bmN0aW9uKHRyYWNrTGlzdCwgbW9kZWwgPSBcIkpla2EgQWN0aXZlXCIpIHtcclxuICBNYWNoaW5lLmNhbGwodGhpcywgbW9kZWwpO1xyXG5cclxuICAvLyBkZXZpY2UgcGxheS9wYXVzZVxyXG4gIHRoaXMuX3BsYXliYWNrU3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgLy92b2x1bWUgY29udHJvbHNcclxuICB0aGlzLl92b2x1bWVNaW4gPSAwO1xyXG4gIHRoaXMuX3ZvbHVtZU1heCA9IDEwO1xyXG4gIHRoaXMuX2N1cnJlbnRWb2x1bWUgPSA1O1xyXG5cclxuICAvL2lzIGZsYXNoIGNhcmQgaW4gZGV2aWNlXHJcbiAgdGhpcy5fZmxhc2hDYXJkID0gdHJ1ZTtcclxuXHJcbiAgLy90cmFjayBkdXJhdGlvbiB0aW1lciBjb3VudFxyXG4gIHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlID0gMDtcclxuXHJcbiAgY29uc3QgZGVmYXVsdFRyYWNrTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTb25nIDFcIixcclxuICAgICAgZHVyYXRpb246IDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU29uZyAyXCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTb25nIDNcIixcclxuICAgICAgZHVyYXRpb246IDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU29uZyA0XCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTb25nIDVcIixcclxuICAgICAgZHVyYXRpb246IDEwXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgLy8gaW5pdGlhbGl6aW5nIG9mIHRyYWNrLWxpc3RcclxuICBpZiAoQXJyYXkuaXNBcnJheSh0cmFja0xpc3QpICYmIHRyYWNrTGlzdC5sZW5ndGgpIHtcclxuICAgIC8vIHRyYWNrbGlzdCBwYXNzZWQgaW4gY29uc3RydWN0b3JcclxuICAgIHRyYWNrTGlzdC5mb3JFYWNoKHRyYWNrID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICEoXHJcbiAgICAgICAgICB0eXBlb2YgdHJhY2submFtZSA9PT0gXCJzdHJpbmdcIiAmJlxyXG4gICAgICAgICAgdHJhY2submFtZS5sZW5ndGggJiZcclxuICAgICAgICAgIHR5cGVvZiB0cmFjay5kdXJhdGlvbiA9PT0gXCJudW1iZXJcIiAmJlxyXG4gICAgICAgICAgdHJhY2suZHVyYXRpb24gPiAwXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IHRyYWNrbGlzdCBkYXRhXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl90cmFja0xpc3QgPSB0cmFja0xpc3Q7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy9kZWZhdWx0IHRyYWNrbGlzdFxyXG4gICAgdGhpcy5fdHJhY2tMaXN0ID0gZGVmYXVsdFRyYWNrTGlzdDtcclxuICB9XHJcblxyXG4gIC8vIHRyYWNrIHdpY2ggcGxheWluZyBub3dcclxuICB0aGlzLl9jdXJyZW50VHJhY2sgPSAwO1xyXG59XHJcblxyXG4vLyBtZXRob2RzOlxyXG5cclxuU3BlYWtlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1hY2hpbmUucHJvdG90eXBlKTtcclxuU3BlYWtlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcGVha2VyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuU3BlYWtlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuICBNYWNoaW5lLnByb3RvdHlwZS5vbi5jYWxsKHRoaXMpO1xyXG5cclxuICAvLyBjaGVjayBpcyBkZXZpY2UgaGFzIGZsYXNoIGNhcmRcclxuICBpZiAodGhpcy5fZmxhc2hDYXJkKSB7XHJcbiAgICB0aGlzLnRvZ2dsZVBsYXliYWNrU3RhdHVzKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5faXNEZXZpY2VPbigpO1xyXG5cclxuICAvLyBzZXQgZGV2aWNlIGluIHBhdXNlIG1vZGVcclxuICB0aGlzLnRvZ2dsZVBsYXliYWNrU3RhdHVzKCk7XHJcblxyXG4gIC8vIHR1cm4gb2ZmIGRldmljZVxyXG4gIE1hY2hpbmUucHJvdG90eXBlLm9mZi5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuLy8gbG9nIGluZm8gYWJvdXQgY3VycmVudCBkZXZpY2Ugc3RhdGVcclxuU3BlYWtlci5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKGBcclxuICAgICAgICAke01hY2hpbmUucHJvdG90eXBlLmluZm8uY2FsbCh0aGlzKX1cclxuICAgICAgICB2b2x1bWU6ICR7dGhpcy5fY3VycmVudFZvbHVtZX0sXHJcbiAgICAgICAgcGxheWluZzogJHt0aGlzLl9wbGF5YmFja1N0YXRlfSxcclxuICAgICAgICBjdXJyZW50U29uZzogJHt0aGlzLl90cmFja0xpc3RbdGhpcy5fY3VycmVudFRyYWNrXS5uYW1lfSxcclxuICAgICAgICBzb25nRHVyYXRpb246ICR7dGhpcy5fdHJhY2tMaXN0W3RoaXMuX2N1cnJlbnRUcmFja10uZHVyYXRpb259LFxyXG4gICAgICAgIGN1cnJlbnRUaW1lOiAke3RoaXMuX2N1cnJlbnRUaW1lclZhbHVlfVxyXG4gICAgICAgIGApO1xyXG59O1xyXG5cclxuLy8gdHVybiBkZXZpY2UgdG8gcGxheS9wYXVzZSBtb2Rlc1xyXG5TcGVha2VyLnByb3RvdHlwZS50b2dnbGVQbGF5YmFja1N0YXR1cyA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuX2lzRGV2aWNlT24oKTtcclxuXHJcbiAgLy8gY2hhbmdlIHBsYXlpbmcgc3RhdHVzIHRvIG9wb3NpdGVcclxuICB0aGlzLl9wbGF5YmFja1N0YXRlID0gIXRoaXMuX3BsYXliYWNrU3RhdGU7XHJcblxyXG4gIGlmICh0aGlzLl9wbGF5YmFja1N0YXRlKSB7XHJcbiAgICAvLyBzdGFydCBwbGF5aW5nIHRyYWNrc1xyXG4gICAgdGhpcy5fc3RhcnRQbGF5aW5nKHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gc3RvcCBwbGF5aW5nIHRyYWNrc1xyXG4gICAgdGhpcy5fc3RvcFBsYXlpbmcoKTtcclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5fc3RvcFBsYXlpbmcgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLl9pc0RldmljZU9uKCk7XHJcblxyXG4gIC8vIGRlbGV0ZSBhc3luYyB0aW1lIGNvdW50ZXJcclxuICBNYWNoaW5lLnByb3RvdHlwZS5fZGVsZXRlVGltZXIuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcblNwZWFrZXIucHJvdG90eXBlLl9zdGFydFBsYXlpbmcgPSBmdW5jdGlvbihwbGF5U29uZ0Zyb20pIHtcclxuICB0aGlzLl9pc0RldmljZU9uKCk7XHJcbiAgdGhpcy5faXNEZXZpY2VJblBsYXlpbmdNb2RlTm93KCk7XHJcblxyXG4gIC8vIHNldCB0aW1lLWNvdW50ZXIgdG8gcHJlZGVmaW5lZCB7cGxheVNvbmdGcm9tfSB2YWx1ZSBvciBzdGFydCBmcm9tIDBzXHJcbiAgbGV0IGNvdW50ID0gdHlwZW9mIHBsYXlTb25nRnJvbSA9PT0gXCJudW1iZXJcIiA/IHBsYXlTb25nRnJvbSA6IDA7XHJcblxyXG4gIGxldCB0aWMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGlmIHByZWRlZmluZWQgdmFsdWUgbW9yZSB0aGFuIHRyYWNrIGR1cmF0aW9uIHBsYXkgbmV4dCBzb25nXHJcbiAgICBpZiAoY291bnQgPj0gdGhpcy5fdHJhY2tMaXN0W3RoaXMuX2N1cnJlbnRUcmFja10uZHVyYXRpb24pIHtcclxuICAgICAgdGhpcy50b2dnbGVUcmFjayhcIm5leHRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpbmNyZWFzZSB0aW1lIGNvdW50ZXIgb24gMXNcclxuICAgICAgY291bnQrKztcclxuICAgICAgLy8gc2V0IHZhbHVlIHRvIHByb3BlcnR5IHRvIGFjaGlldmUgdGhhdCBmcm9tIG90aGVyIG1ldGhvZHNcclxuICAgICAgdGhpcy5fY3VycmVudFRpbWVyVmFsdWUgPSBjb3VudDtcclxuICAgIH1cclxuICAgIC8vIGxvZyBpbmZvIG9uIGVhY2ggdGltZXIgdGljXHJcbiAgICB0aGlzLmluZm8oKTtcclxuICB9O1xyXG5cclxuICAvLyBzZXQgYXN5bmMgdGltZSBjb3VudGVyXHJcbiAgdGhpcy5fdGltZXIgPSBzZXRJbnRlcnZhbCh0aWMuYmluZCh0aGlzKSwgMTAwMCk7XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5nZXRQbGF5UGF1c2VTdGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLl9wbGF5YmFja1N0YXRlO1xyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUubmV4dFRyYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgLy8gaWYgdGhlcmUgaXMgc29tZSBtb3JlIHRyYWNrIGluIHRyYWNrIGxpc3Qgc3RhcnQgbmV4dFxyXG4gIGlmICh0aGlzLl9jdXJyZW50VHJhY2sgPCB0aGlzLl90cmFja0xpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgdGhpcy5fY3VycmVudFRyYWNrKys7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHRyYWNrIGlzIGxhc3QgaW4gdHJhY2sgbGlzdCBzdGFydCBmcm9tIGZpcnN0IHRyYWNrXHJcbiAgICB0aGlzLl9jdXJyZW50VHJhY2sgPSAwO1xyXG4gIH1cclxufTtcclxuXHJcblNwZWFrZXIucHJvdG90eXBlLnByZXZpb3VzVHJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAvLyBpZiB0aGVyZSBpcyBzb21lIG1vcmUgdHJhY2sgaW4gdHJhY2sgbGlzdCBzdGFydCBuZXh0XHJcbiAgaWYgKHRoaXMuX2N1cnJlbnRUcmFjayA+IDApIHtcclxuICAgIHRoaXMuX2N1cnJlbnRUcmFjay0tO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiB0cmFjayBpcyBmaXJzdCBpbiB0cmFjayBsaXN0IHBsYXkgbGFzdCB0cmFja1xyXG4gICAgdGhpcy5fY3VycmVudFRyYWNrID0gdGhpcy5fdHJhY2tMaXN0Lmxlbmd0aCAtIDE7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUudG9nZ2xlVHJhY2sgPSBmdW5jdGlvbih0b2dnbGVEaXJlY3Rpb24pIHtcclxuICB0aGlzLl9pc0RldmljZU9uKCk7XHJcbiAgaWYgKHR5cGVvZiB0b2dnbGVEaXJlY3Rpb24gIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwYXNzICduZXh0JyBvciAncHJldmlvdXMnIHZhbHVlIGFzIGEgcGFyYW1ldGVyXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVsZXRlIG9sZCB0aW1lclxyXG4gIHRoaXMuX3N0b3BQbGF5aW5nKCk7XHJcbiAgLy8gc2V0IHRpbWVyIHZhbHVlIHRvIDAsIGZvciBzdGFydGluZyB0cmFjayBmcm9tIHRoZSBiZWdpbm5pbmdcclxuICB0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSA9IDA7XHJcblxyXG4gIHN3aXRjaCAodG9nZ2xlRGlyZWN0aW9uKSB7XHJcbiAgICBjYXNlIFwibmV4dFwiOlxyXG4gICAgICB0aGlzLm5leHRUcmFjaygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJwcmV2aW91c1wiOlxyXG4gICAgICB0aGlzLnByZXZpb3VzVHJhY2soKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICAvLyBzZXR1cCBuZXcgdGltZXJcclxuICB0aGlzLl9zdGFydFBsYXlpbmcoKTtcclxufTtcclxuXHJcblNwZWFrZXIucHJvdG90eXBlLnJld2luZFRyYWNrID0gZnVuY3Rpb24ocmV3aW5kRGlyZWN0aW9uKSB7XHJcbiAgdGhpcy5faXNEZXZpY2VPbigpO1xyXG4gIC8vcmV3aW5kIG9ubHkgaWYgZGV2aWNlIHBsYXlpbmcgbm93XHJcbiAgdGhpcy5faXNEZXZpY2VJblBsYXlpbmdNb2RlTm93KCk7XHJcblxyXG4gIGlmIChcclxuICAgIHR5cGVvZiByZXdpbmREaXJlY3Rpb24gIT09IFwic3RyaW5nXCIgfHxcclxuICAgIChyZXdpbmREaXJlY3Rpb24gIT09IFwiZm9yd2FyZFwiICYmIHJld2luZERpcmVjdGlvbiAhPT0gXCJiYWNrXCIpXHJcbiAgKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIFwiUGxlYXNlIHBhc3MgJ2ZvcndhcmQnIG9yICdiYWNrJyBzdHJpbmcgdmFsdWUgYXMgYSBwYXJhbWV0ZXJcIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHNldHVwIHJhbmRvbSByZXdpbmQgdGltZVxyXG4gIGNvbnN0IHJld2luZFRpbWUgPSBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMSkgKiAxMDtcclxuICBzd2l0Y2ggKHJld2luZERpcmVjdGlvbikge1xyXG4gICAgY2FzZSBcImZvcndhcmRcIjpcclxuICAgICAgdGhpcy5yZXdpbmRGb3J3YXJkKHJld2luZFRpbWUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJiYWNrXCI6XHJcbiAgICAgIHRoaXMucmV3aW5kQmFjayhyZXdpbmRUaW1lKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUucmV3aW5kRm9yd2FyZCA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAvLyBpZiBsb3N0IHRpbWUgKyByZXdpbmQgdGltZSBsZXNzIHRoYW4gc29uZyBkdXJhdGlvbiwgc3RhcnQgcGxheWluZyBmcm9tIG5ldyB0aW1lIHBvc2l0aW9uXHJcbiAgaWYgKFxyXG4gICAgdGhpcy5fY3VycmVudFRpbWVyVmFsdWUgKyB0aW1lIDxcclxuICAgIHRoaXMuX3RyYWNrTGlzdFt0aGlzLl9jdXJyZW50VHJhY2tdLmR1cmF0aW9uXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdG9wUGxheWluZygpO1xyXG4gICAgdGhpcy5fc3RhcnRQbGF5aW5nKHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlICsgdGltZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIGxvc3QgdGltZSArIHJld2luZCB0aW1lIG1vcmUgdGhhbiBzb25nIGR1cmF0aW9uLCBzdGFydCBwbGF5aW5nIG5leHQgc29uZ1xyXG4gICAgdGhpcy50b2dnbGVUcmFjayhcIm5leHRcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUucmV3aW5kQmFjayA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICB0aGlzLl9zdG9wUGxheWluZygpO1xyXG5cclxuICAvLyBpZiBsb3N0IHRpbWUgLSByZXdpbmQgdGltZSBtb3JlIHRoYW4gMCwgc3RhcnQgcGxheWluZyBmcm9tIG5ldyB0aW1lIHBvc2l0aW9uXHJcbiAgaWYgKHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlIC0gdGltZSA+IDApIHtcclxuICAgIHRoaXMuX3N0YXJ0UGxheWluZyh0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSAtIHRpbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBsb3N0IHRpbWUgLSByZXdpbmQgdGltZSBsZXNzIHRoYW4gMCwgc3RhcnQgcGxheWluZyBwcmV2aW91cyBzb25nXHJcbiAgICB0aGlzLnRvZ2dsZVRyYWNrKFwicHJldmlvdXNcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUuaW5jcmVhc2VWb2x1bWUgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLl9pc0RldmljZU9uKCk7XHJcblxyXG4gIC8vIGNoZWNrcyB0aGF0IHRoZSB2YWx1ZSBkb2VzIG5vdCBnbyBiZXlvbmQgdGhlIHByZWRlZmluZWQgbGltaXRzXHJcbiAgaWYgKHRoaXMuX2N1cnJlbnRWb2x1bWUgPCB0aGlzLl92b2x1bWVNYXgpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRWb2x1bWUrKztcclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5kZWNyZWFzZVZvbHVtZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuX2lzRGV2aWNlT24oKTtcclxuXHJcbiAgLy8gY2hlY2tzIHRoYXQgdGhlIHZhbHVlIGRvZXMgbm90IGdvIGJleW9uZCB0aGUgcHJlZGVmaW5lZCBsaW1pdHNcclxuICBpZiAodGhpcy5fY3VycmVudFZvbHVtZSA+IHRoaXMuX3ZvbHVtZU1pbikge1xyXG4gICAgdGhpcy5fY3VycmVudFZvbHVtZS0tO1xyXG4gIH1cclxufTtcclxuXHJcbi8vc2FmZXR5IG1ldGhvZHNcclxuXHJcbi8vY2hlY2sgaXMgZGV2aWNlIHBsYXlpbmcgdHJhY2sgbm93XHJcblNwZWFrZXIucHJvdG90eXBlLl9pc0RldmljZUluUGxheWluZ01vZGVOb3cgPSBmdW5jdGlvbigpIHtcclxuICBpZiAoIXRoaXMuX3BsYXliYWNrU3RhdGUpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIFwiVG9nZ2xlIGRldmljZSB0byBwbGF5aW5nIG1vZGUgYmVmb3JlIHN0YXJ0aW5nIHRoaXMgb3BlcmF0aW9uXCJcclxuICAgICk7XHJcbn07XHJcblxyXG4vL3NhZmV0eSBtZXRob2RzIGVuZFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyOyIsImNvbnN0IExvZ2dlciA9IHtcclxuICAgIHdhcm5pbmc6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgY29uc29sZS53YXJuKHRleHQpO1xyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IodGV4dCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lLZXR0bGUuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCAnLi9pS2V0dGxlLmNzcyc7XHJcblxyXG5pbXBvcnQgTWFjaGluZSBmcm9tICcuLi9CYXNlRGV2aWNlcy9NYWNoaW5lL01hY2hpbmUnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL1V0aWxpdGllcy9Mb2dnZXIvTG9nZ2VyJztcclxuXHJcblxyXG5jb25zdCBpS2V0dGxlID0gZnVuY3Rpb24oKSB7XHJcbiAgTWFjaGluZS5jYWxsKHRoaXMsIFwia2V0dGxlMjJcIik7XHJcbiAgXHJcbiAgdGhpcy5fX21vZGVzID0ge1xyXG4gICAgc3RhbmRhcnQ6IDEwMCxcclxuICAgIHRlYTogNzgsXHJcbiAgICBjb2ZmZWU6IDg1LFxyXG4gICAgcG9ycmlkZ2U6IDcyLFxyXG4gICAgXCJiYWJ5IGZvb2RcIjogNzBcclxuICB9O1xyXG4gIHRoaXMuX19jdXJyZW50TW9kZSA9IFwic3RhbmRhcnRcIjtcclxuICB0aGlzLl9fbWF4RnVsbG5lc3MgPSAxMDAwO1xyXG4gIHRoaXMuX19taW5GdWxsbmVzcyA9IDEwMDtcclxuICB0aGlzLl9fY3VycmVudEZ1bGxuZXNzID0gMDtcclxuICB0aGlzLl9fY3VycmVudFRlbXBlcmF0dXJlID0gMDtcclxufTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNYWNoaW5lLnByb3RvdHlwZSk7XHJcbmlLZXR0bGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaUtldHRsZTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZyhgXHJcbiAgICAgICAgJHtNYWNoaW5lLnByb3RvdHlwZS5pbmZvLmNhbGwodGhpcyl9XHJcbiAgICAgICAgbW9kZTogJHt0aGlzLl9fY3VycmVudE1vZGV9O1xyXG4gICAgICAgIGN1cnJlbnRGdWxsbmVzczogJHt0aGlzLl9fY3VycmVudEZ1bGxuZXNzfTtcclxuICAgIGApO1xyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUuc2V0VGVtcGVyYXR1cmUgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA+PSAxMCAmJiB2YWx1ZSA8PSA3MCkge1xyXG4gICAgdGhpcy5fX2N1cnJlbnRUZW1wZXJhdHVyZSA9IHZhbHVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBMb2dnZXIud2FybmluZyhcIlRlbXBlcmF0dXJlIG11c3QgYmUgaW4gcmFuZ2UgZnJvbSAxMCB0byA3MENcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUuY2hhbmdlTW9kZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgaWYgKHRoaXMuX2lzRGV2aWNlT24oKSAmJiB0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSBpbiB0aGlzLl9fbW9kZXMpIHtcclxuICAgIHRoaXMuX19jdXJyZW50TW9kZSA9IHZhbHVlO1xyXG4gIH1cclxufTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlLmdldEN1cnJlbnRNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX19jdXJyZW50TW9kZTtcclxufTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlLmFkZFdhdGVyID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICBsZXQgbmV3QW1vdW50T2ZXYXRlciA9IHRoaXMuX19jdXJyZW50RnVsbG5lc3MgKyB2YWx1ZTtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICBMb2dnZXIuZXJyb3IoXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBuZXdBbW91bnRPZldhdGVyID49IHRoaXMuX19taW5GdWxsbmVzcyAmJlxyXG4gICAgbmV3QW1vdW50T2ZXYXRlciA8PSB0aGlzLl9fbWF4RnVsbG5lc3NcclxuICApIHtcclxuICAgIHRoaXMuX19jdXJyZW50RnVsbG5lc3MgPSBuZXdBbW91bnRPZldhdGVyO1xyXG4gIH0gZWxzZSBpZiAobmV3QW1vdW50T2ZXYXRlciA8IHRoaXMuX19taW5GdWxsbmVzcykge1xyXG4gICAgTG9nZ2VyLndhcm5pbmcoXCJQbGVhc2UsIGFkZCBtb3JlIHdhdGVyXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBMb2dnZXIud2FybmluZyhcIlBsZWFzZSwgcmVkdWNlIHRoZSBhbW91bnQgb2Ygd2F0ZXJcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUuZ2V0Q3VycmVudEZ1bGxuZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX19jdXJyZW50RnVsbG5lc3M7XHJcbn07XHJcblxyXG5pS2V0dGxlLnByb3RvdHlwZS5ib2lsV2F0ZXIgPSBmdW5jdGlvbih0ZW1wZXJhdHVyZSkge1xyXG4gIGlmICh0aGlzLl9pc0RldmljZU9uKCkgJiYgdGhpcy5fX2N1cnJlbnRGdWxsbmVzcykge1xyXG4gICAgdGhpcy5zZXRUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9fY3VycmVudFRlbXBlcmF0dXJlID09PSB0aGlzLl9fbW9kZXNbdGhpcy5fX2N1cnJlbnRNb2RlXSkge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgdGhpcy5vZmYoKTtcclxuICAgICAgICAgIHRoaXMuX2RlbGV0ZVRpbWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX19jdXJyZW50VGVtcGVyYXR1cmUrKztcclxuICAgICAgICAgIHRoaXMuX19jdXJyZW50RnVsbG5lc3MtLTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuX19jdXJyZW50VGVtcGVyYXR1cmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaUtldHRsZTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBTbWFydEhvdXNlIGZyb20gJy4vU21hcnRIb3VzZS9TbWFydEhvdXNlJztcclxuXHJcbmltcG9ydCBTcGVha2VyIGZyb20gICcuL1NwZWFrZXIvU3BlYWtlcic7XHJcbmltcG9ydCBpS2V0dGxlIGZyb20gJy4vaUtldHRsZS9pS2V0dGxlJztcclxuXHJcbm5ldyBpS2V0dGxlKCk7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9