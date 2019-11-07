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

/***/ "./src/BaseDevices/Device/Device.js":
/*!******************************************!*\
  !*** ./src/BaseDevices/Device/Device.js ***!
  \******************************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities/Logger/Logger */ "./src/Utilities/Logger/Logger.js");

var Device = function Device(name) {
  var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "device";
  this._model = model;
  this._state = false;

  if (this._checkNameValidity(name)) {
    this._name = name;
  }
};

Device.prototype.getState = function () {
  return this._state;
};

Device.prototype.getName = function () {
  return this._name;
};

Device.prototype.setName = function (name) {
  if (this._checkNameValidity(name)) {
    this._name = name;
  }
};

Device.prototype.getModel = function () {
  return this._model;
};

Device.prototype._isDeviceOn = function () {
  if (!this.getState()) {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].error("Turn on device, please!");
  }

  return true;
};

Device.prototype._checkNameValidity = function (name) {
  if (typeof name !== "string") {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].error("Name must be a string");
    return false;
  }

  name = name.trim();
  var regex = /[\w\d\s]{5,10}/;
  var result = regex.test(name);

  if (!result) {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].error("Name must include more than 5 characters");
    return false;
  }

  return true;
};

Device.prototype.on = function () {
  this._state = true;
};

Device.prototype.off = function () {
  this._state = false;
};

Device.prototype._deleteTimer = function () {
  clearInterval(this._timer);
};

Device.prototype.info = function () {
  return "\nmodel: ".concat(this.getModel(), ",\nname: ").concat(this.getName(), ",\nstatus: ").concat(this.getState() ? 'On' : 'Off');
};

/***/ }),

/***/ "./src/SmartHouse/SmartHouse.js":
/*!**************************************!*\
  !*** ./src/SmartHouse/SmartHouse.js ***!
  \**************************************/
/*! exports provided: SmartHouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartHouse", function() { return SmartHouse; });
/* harmony import */ var _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseDevices/Device/Device */ "./src/BaseDevices/Device/Device.js");
/* harmony import */ var _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/Logger/Logger */ "./src/Utilities/Logger/Logger.js");


var SmartHouse = function SmartHouse() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Smart House";
  this._devices = [];

  this.onAll = function () {
    this._devices.forEach(function (device) {
      return device.on();
    });
  };

  this.offAll = function () {
    this._devices.forEach(function (device) {
      return device.off();
    });
  };

  this.deleteAllDevices = function () {
    this.offAll();
    this._devices = [];
  };

  this.getAllDevicesByModel = function (model) {
    if (typeof name === 'string' && name.length) {
      return this._devices.filter(function (device) {
        if (device.getModel() == model) {
          return device;
        }
      });
    }
  };

  this.getDeviceByName = function (name) {
    if (typeof name === 'string' && name.length) {
      var device = this._devices.find(function (device) {
        if (device.getName() === name) {
          return true;
        }
      });

      if (!device) {
        _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].warning('There is no device with this name');
      }

      return device;
    } else {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('Please, enter valid device name');
    }
  };

  this.deleteDevicesByModel = function (model) {
    var _this = this;

    this._devices.filter(function (device, i) {
      if (device.getModel() == model) {
        _this._devices.splice(i, 1);
      }
    });
  };

  this._isNameUnic = function (name) {
    var result = this._devices.find(function (device) {
      if (device.getName() === name) {
        return true;
      }
    });

    return Boolean(result);
  };

  this._checkName = function (name) {
    // return true;
    if (typeof name !== "string") {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Name must be a string");
      return false;
    }

    name = name.trim();
    var regex = /[\w\d\s]{5,10}/;
    var result = regex.test(name);

    if (!result) {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Name must include more than 5 characters");
      return false;
    }

    if (this._isNameUnic(name)) {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('Device with those name already exist');
      return false;
    }

    return true;
  };

  if (this._checkName(name)) {
    this._name = name;
  }

  this.getName = function () {
    return this._name;
  };

  this.addDevice = function (device) {
    if (device instanceof _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"]) {
      this._checkName(device.getName());

      this._devices.push(device);
    } else {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Devices must be objects of iKettle or Speaker");
    }
  };

  this.deleteDeviceByName = function (name) {
    var deleteObjIndex = null;

    this._devices.find(function (device, index) {
      if (device.getName() === name) {
        deleteObjIndex = index;
        return true;
      }
    });

    this._devices.splice(deleteObjIndex, 1);
  };

  this.getAllDevices = function () {
    return this._devices;
  };
};

/***/ }),

/***/ "./src/Speaker/Speaker.js":
/*!********************************!*\
  !*** ./src/Speaker/Speaker.js ***!
  \********************************/
/*! exports provided: Speaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return Speaker; });
/* harmony import */ var _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseDevices/Device/Device */ "./src/BaseDevices/Device/Device.js");
/* harmony import */ var _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/Logger/Logger */ "./src/Utilities/Logger/Logger.js");


var Speaker = function Speaker(name, trackList) {
  var _this = this;

  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].call(this, name, "Speaker"); // device play/pause

  this._playbackState = false; //volume controls

  this._volumeMin = 0;
  this._volumeMax = 10;
  this._currentVolume = 5; //track duration timer count

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
        _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].warning("Invalid input tracklist data, will be used default tracklist");
      }

      _this._trackList = trackList;
    });
  } else {
    //default tracklist
    this._trackList = defaultTrackList;
  } // track wich playing now


  this._currentTrack = 0;
}; // methods:

Speaker.prototype = Object.create(_BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype);
Speaker.prototype.constructor = Speaker; //////////////

Speaker.prototype.on = function () {
  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.on.call(this); // check is device has flash card
};

Speaker.prototype.off = function () {
  this._isDeviceOn(); // set device in pause mode


  this.togglePlaybackStatus(false);
  this._currentTimerValue = 0;
  this._currentTrack = 0;
  this._currentVolume = 5; // turn off device

  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.off.call(this);
}; // log info about current device state


Speaker.prototype.info = function () {
  console.log("\n".concat(_BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.info.call(this), "\nvolume: ").concat(this._currentVolume, ",\nplaying: ").concat(this._playbackState ? 'Play' : 'Pause', ",\ncurrentSong: ").concat(this._trackList[this._currentTrack].name, ",\nsongDuration: ").concat(this._trackList[this._currentTrack].duration, "s,\ncurrentTime: ").concat(this._currentTimerValue, "s\n"));
}; // turn device to play/pause modes


Speaker.prototype.togglePlaybackStatus = function (status) {
  this._isDeviceOn();

  if (arguments.length) {
    this._playbackState = status;
  } else {
    // change playing status to oposite
    this._playbackState = !this._playbackState;
  }

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


  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype._deleteTimer.call(this);
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
    // this.info();

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
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Please pass 'next' or 'previous' value as a parameter");
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
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Please pass 'forward' or 'back' string value as a parameter");
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
  if (!this._playbackState) {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].warning("Toggle device to playing mode before starting this operation");
  }
};

/***/ }),

/***/ "./src/Utilities/Logger/Logger.js":
/*!****************************************!*\
  !*** ./src/Utilities/Logger/Logger.js ***!
  \****************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
var Logger = {
  warning: function warning(text) {
    console.warn(text);
  },
  error: function error(text) {
    throw new Error(text);
  }
};

/***/ }),

/***/ "./src/iKettle/iKettle.js":
/*!********************************!*\
  !*** ./src/iKettle/iKettle.js ***!
  \********************************/
/*! exports provided: iKettle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iKettle", function() { return iKettle; });
/* harmony import */ var _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseDevices/Device/Device */ "./src/BaseDevices/Device/Device.js");
/* harmony import */ var _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/Logger/Logger */ "./src/Utilities/Logger/Logger.js");


var iKettle = function iKettle(name) {
  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].call(this, name, "iKettle");
  this._modes = [{
    standart: 100
  }, {
    tea: 78
  }, {
    coffee: 85
  }, {
    porridge: 72
  }, {
    "baby food": 70
  }];
  this._currentMode = 0;
  this._maxFullness = 1000;
  this._minFullness = 100;
  this._currentFullness = 0;
  this._currentTemperature = 28;
};
iKettle.prototype = Object.create(_BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype);
iKettle.prototype.constructor = iKettle;

iKettle.prototype.info = function () {
  return "\n".concat(_BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.info.call(this), "\nmode: ").concat(Object.keys(this._modes[this._currentMode]), ";\ncurrentFullness: ").concat(this._currentFullness, ";\n");
};

iKettle.prototype.off = function () {
  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.off.call(this);

  this._deleteTimer();

  this._currentTemperature = 26;
};

iKettle.prototype.nextMode = function () {
  if (this._currentMode === this._modes.length - 1) {
    this._currentMode = 0;
  } else {
    this._currentMode++;
  }
};

iKettle.prototype.previousMode = function () {
  if (this._currentMode === 0) {
    this._currentMode = this._modes.length - 1;
  } else {
    this._currentMode--;
  }
};

iKettle.prototype.getCurrentMode = function () {
  return Object.keys(this._modes[this._currentMode]);
};

iKettle.prototype.addWater = function (value) {
  var newAmountOfWater = this._currentFullness + value;

  if (typeof value !== "number") {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Value must be a number");
  }

  if (newAmountOfWater >= this._minFullness && newAmountOfWater <= this._maxFullness) {
    this._currentFullness = newAmountOfWater;
  } else if (newAmountOfWater < this._minFullness) {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].warning("Please, add more water");
  } else {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].warning("Please, reduce the amount of water");
  }
};

iKettle.prototype.getCurrentFullness = function () {
  return this._currentFullness;
};

iKettle.prototype.boilWater = function () {
  var _this = this;

  if (this._isDeviceOn() && this._currentFullness) {
    return new Promise(function (resolve) {
      _this._timer = setInterval(function () {
        if (_this._currentTemperature >= Object.values(_this._modes[_this._currentMode])) {
          resolve();
        } else {
          _this._currentTemperature += 2;
          _this._currentFullness--;
        }
      }, 1000);
    }).then(function () {
      console.log(_this._currentTemperature);

      _this.off();
    });
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmartHouse_SmartHouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartHouse/SmartHouse */ "./src/SmartHouse/SmartHouse.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker/Speaker */ "./src/Speaker/Speaker.js");
/* harmony import */ var _iKettle_iKettle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iKettle/iKettle */ "./src/iKettle/iKettle.js");



window.SmartHouse = _SmartHouse_SmartHouse__WEBPACK_IMPORTED_MODULE_0__["SmartHouse"];
window.Speaker = _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_1__["Speaker"];
window.iKettle = _iKettle_iKettle__WEBPACK_IMPORTED_MODULE_2__["iKettle"];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2VEZXZpY2VzL0RldmljZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NtYXJ0SG91c2UvU21hcnRIb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlYWtlci9TcGVha2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvTG9nZ2VyL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaUtldHRsZS9pS2V0dGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEZXZpY2UiLCJuYW1lIiwibW9kZWwiLCJfbW9kZWwiLCJfc3RhdGUiLCJfY2hlY2tOYW1lVmFsaWRpdHkiLCJfbmFtZSIsInByb3RvdHlwZSIsImdldFN0YXRlIiwiZ2V0TmFtZSIsInNldE5hbWUiLCJnZXRNb2RlbCIsIl9pc0RldmljZU9uIiwiTG9nZ2VyIiwiZXJyb3IiLCJ0cmltIiwicmVnZXgiLCJyZXN1bHQiLCJ0ZXN0Iiwib24iLCJvZmYiLCJfZGVsZXRlVGltZXIiLCJjbGVhckludGVydmFsIiwiX3RpbWVyIiwiaW5mbyIsIlNtYXJ0SG91c2UiLCJfZGV2aWNlcyIsIm9uQWxsIiwiZm9yRWFjaCIsImRldmljZSIsIm9mZkFsbCIsImRlbGV0ZUFsbERldmljZXMiLCJnZXRBbGxEZXZpY2VzQnlNb2RlbCIsImxlbmd0aCIsImZpbHRlciIsImdldERldmljZUJ5TmFtZSIsImZpbmQiLCJ3YXJuaW5nIiwiZGVsZXRlRGV2aWNlc0J5TW9kZWwiLCJpIiwic3BsaWNlIiwiX2lzTmFtZVVuaWMiLCJCb29sZWFuIiwiX2NoZWNrTmFtZSIsImFkZERldmljZSIsInB1c2giLCJkZWxldGVEZXZpY2VCeU5hbWUiLCJkZWxldGVPYmpJbmRleCIsImluZGV4IiwiZ2V0QWxsRGV2aWNlcyIsIlNwZWFrZXIiLCJ0cmFja0xpc3QiLCJjYWxsIiwiX3BsYXliYWNrU3RhdGUiLCJfdm9sdW1lTWluIiwiX3ZvbHVtZU1heCIsIl9jdXJyZW50Vm9sdW1lIiwiX2N1cnJlbnRUaW1lclZhbHVlIiwiZGVmYXVsdFRyYWNrTGlzdCIsImR1cmF0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwidHJhY2siLCJfdHJhY2tMaXN0IiwiX2N1cnJlbnRUcmFjayIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidG9nZ2xlUGxheWJhY2tTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiYXJndW1lbnRzIiwiX3N0YXJ0UGxheWluZyIsIl9zdG9wUGxheWluZyIsInBsYXlTb25nRnJvbSIsIl9pc0RldmljZUluUGxheWluZ01vZGVOb3ciLCJjb3VudCIsInRpYyIsInRvZ2dsZVRyYWNrIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwiZ2V0UGxheVBhdXNlU3RhdGUiLCJuZXh0VHJhY2siLCJwcmV2aW91c1RyYWNrIiwidG9nZ2xlRGlyZWN0aW9uIiwicmV3aW5kVHJhY2siLCJyZXdpbmREaXJlY3Rpb24iLCJyZXdpbmRUaW1lIiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJyZXdpbmRGb3J3YXJkIiwicmV3aW5kQmFjayIsInRpbWUiLCJpbmNyZWFzZVZvbHVtZSIsImRlY3JlYXNlVm9sdW1lIiwidGV4dCIsIndhcm4iLCJFcnJvciIsImlLZXR0bGUiLCJfbW9kZXMiLCJzdGFuZGFydCIsInRlYSIsImNvZmZlZSIsInBvcnJpZGdlIiwiX2N1cnJlbnRNb2RlIiwiX21heEZ1bGxuZXNzIiwiX21pbkZ1bGxuZXNzIiwiX2N1cnJlbnRGdWxsbmVzcyIsIl9jdXJyZW50VGVtcGVyYXR1cmUiLCJrZXlzIiwibmV4dE1vZGUiLCJwcmV2aW91c01vZGUiLCJnZXRDdXJyZW50TW9kZSIsImFkZFdhdGVyIiwidmFsdWUiLCJuZXdBbW91bnRPZldhdGVyIiwiZ2V0Q3VycmVudEZ1bGxuZXNzIiwiYm9pbFdhdGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ2YWx1ZXMiLCJ0aGVuIiwi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QUM3RixTQUFSLENBQWtCK0csa0JBQWxCLEdBQXVDLFlBQVc7QUFDaEQsU0FBTyxLQUFLVCxnQkFBWjtBQUNELENBRkQ7O0FBSUFULE9BQU8sQ0FBQzdGLFNBQVIsQ0FBa0JnSCxTQUFsQixHQUE4QixZQUFXO0FBQUE7O0FBQ3ZDLE1BQUksS0FBSzNHLFdBQUwsTUFBc0IsS0FBS2lHLGdCQUEvQixFQUFpRDtBQUMvQyxXQUFPLElBQUlXLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDNUIsV0FBSSxDQUFDbEcsTUFBTCxHQUFjeUQsV0FBVyxDQUFDLFlBQU07QUFDOUIsWUFDRSxLQUFJLENBQUM4QixtQkFBTCxJQUNBN0MsTUFBTSxDQUFDeUQsTUFBUCxDQUFjLEtBQUksQ0FBQ3JCLE1BQUwsQ0FBWSxLQUFJLENBQUNLLFlBQWpCLENBQWQsQ0FGRixFQUdFO0FBQ0FlLGlCQUFPO0FBQ1IsU0FMRCxNQUtPO0FBQ0wsZUFBSSxDQUFDWCxtQkFBTCxJQUE0QixDQUE1QjtBQUNBLGVBQUksQ0FBQ0QsZ0JBQUw7QUFDRDtBQUNGLE9BVndCLEVBVXRCLElBVnNCLENBQXpCO0FBV0QsS0FaTSxFQVlKYyxJQVpJLENBWUMsWUFBTTtBQUNadEQsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBSSxDQUFDd0MsbUJBQWpCOztBQUNBLFdBQUksQ0FBQzFGLEdBQUw7QUFDRCxLQWZNLENBQVA7QUFnQkQ7QUFDRixDQW5CRCxDOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQXdHLE1BQU0sQ0FBQ25HLFVBQVAsR0FBb0JBLGlFQUFwQjtBQUNBbUcsTUFBTSxDQUFDMUUsT0FBUCxHQUFpQkEsd0RBQWpCO0FBQ0EwRSxNQUFNLENBQUN4QixPQUFQLEdBQWlCQSx3REFBakIsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vLi4vVXRpbGl0aWVzL0xvZ2dlci9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXZpY2UgPSBmdW5jdGlvbihuYW1lLCBtb2RlbCA9IFwiZGV2aWNlXCIpIHtcclxuICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xyXG4gIHRoaXMuX3N0YXRlID0gZmFsc2U7XHJcbiAgaWYgKHRoaXMuX2NoZWNrTmFtZVZhbGlkaXR5KG5hbWUpKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICB9XHJcbn07XHJcblxyXG5EZXZpY2UucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG59O1xyXG5EZXZpY2UucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5fbmFtZTtcclxufTtcclxuRGV2aWNlLnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIGlmICh0aGlzLl9jaGVja05hbWVWYWxpZGl0eShuYW1lKSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG59O1xyXG5cclxuRGV2aWNlLnByb3RvdHlwZS5nZXRNb2RlbCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLl9tb2RlbDtcclxufTtcclxuXHJcbkRldmljZS5wcm90b3R5cGUuX2lzRGV2aWNlT24gPSBmdW5jdGlvbigpIHtcclxuICBpZiAoIXRoaXMuZ2V0U3RhdGUoKSkge1xyXG4gICAgTG9nZ2VyLmVycm9yKFwiVHVybiBvbiBkZXZpY2UsIHBsZWFzZSFcIik7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuRGV2aWNlLnByb3RvdHlwZS5fY2hlY2tOYW1lVmFsaWRpdHkgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICBMb2dnZXIuZXJyb3IoXCJOYW1lIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIG5hbWUgPSBuYW1lLnRyaW0oKTtcclxuICBjb25zdCByZWdleCA9IC9bXFx3XFxkXFxzXXs1LDEwfS87XHJcbiAgY29uc3QgcmVzdWx0ID0gcmVnZXgudGVzdChuYW1lKTtcclxuICBpZiAoIXJlc3VsdCkge1xyXG4gICAgTG9nZ2VyLmVycm9yKFwiTmFtZSBtdXN0IGluY2x1ZGUgbW9yZSB0aGFuIDUgY2hhcmFjdGVyc1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5EZXZpY2UucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5fc3RhdGUgPSB0cnVlO1xyXG59O1xyXG5cclxuRGV2aWNlLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLl9zdGF0ZSA9IGZhbHNlO1xyXG59O1xyXG5cclxuRGV2aWNlLnByb3RvdHlwZS5fZGVsZXRlVGltZXIgPSBmdW5jdGlvbigpIHtcclxuICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcclxufTtcclxuXHJcbkRldmljZS5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBgXHJcbm1vZGVsOiAke3RoaXMuZ2V0TW9kZWwoKX0sXHJcbm5hbWU6ICR7dGhpcy5nZXROYW1lKCl9LFxyXG5zdGF0dXM6ICR7dGhpcy5nZXRTdGF0ZSgpID8gJ09uJyA6ICdPZmYnfWA7XHJcbn07XHJcbiIsImltcG9ydCB7IERldmljZSB9IGZyb20gXCIuLi9CYXNlRGV2aWNlcy9EZXZpY2UvRGV2aWNlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9VdGlsaXRpZXMvTG9nZ2VyL0xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNtYXJ0SG91c2UgPSBmdW5jdGlvbihuYW1lID0gXCJTbWFydCBIb3VzZVwiKSB7XHJcbiAgdGhpcy5fZGV2aWNlcyA9IFtdO1xyXG5cclxuICB0aGlzLm9uQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9kZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IGRldmljZS5vbigpKTtcclxuICB9O1xyXG5cclxuICB0aGlzLm9mZkFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5fZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiBkZXZpY2Uub2ZmKCkpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuZGVsZXRlQWxsRGV2aWNlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5vZmZBbGwoKTtcclxuICAgIHRoaXMuX2RldmljZXMgPSBbXTtcclxuICB9O1xyXG5cclxuICB0aGlzLmdldEFsbERldmljZXNCeU1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgbmFtZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2RldmljZXMuZmlsdGVyKGRldmljZSA9PiB7XHJcbiAgICAgICAgaWYgKGRldmljZS5nZXRNb2RlbCgpID09IG1vZGVsKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGV2aWNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5nZXREZXZpY2VCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIG5hbWUubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBkZXZpY2UgPSB0aGlzLl9kZXZpY2VzLmZpbmQoZGV2aWNlID0+IHtcclxuICAgICAgICBpZiAoZGV2aWNlLmdldE5hbWUoKSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICggIWRldmljZSkge1xyXG4gICAgICAgIExvZ2dlci53YXJuaW5nKCdUaGVyZSBpcyBubyBkZXZpY2Ugd2l0aCB0aGlzIG5hbWUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRldmljZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBMb2dnZXIuZXJyb3IoJ1BsZWFzZSwgZW50ZXIgdmFsaWQgZGV2aWNlIG5hbWUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB0aGlzLmRlbGV0ZURldmljZXNCeU1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuXHJcbiAgICB0aGlzLl9kZXZpY2VzLmZpbHRlcigoZGV2aWNlLCBpKSA9PiB7XHJcbiAgICAgIGlmIChkZXZpY2UuZ2V0TW9kZWwoKSA9PSBtb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX2RldmljZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB0aGlzLl9pc05hbWVVbmljID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuX2RldmljZXMuZmluZChkZXZpY2UgPT4ge1xyXG4gICAgICBpZiAoZGV2aWNlLmdldE5hbWUoKSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBCb29sZWFuKHJlc3VsdCk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5fY2hlY2tOYW1lID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgLy8gcmV0dXJuIHRydWU7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgTG9nZ2VyLmVycm9yKFwiTmFtZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBuYW1lID0gbmFtZS50cmltKCk7XHJcbiAgICBjb25zdCByZWdleCA9IC9bXFx3XFxkXFxzXXs1LDEwfS87XHJcbiAgICBjb25zdCByZXN1bHQgPSByZWdleC50ZXN0KG5hbWUpO1xyXG5cclxuICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgIExvZ2dlci5lcnJvcihcIk5hbWUgbXVzdCBpbmNsdWRlIG1vcmUgdGhhbiA1IGNoYXJhY3RlcnNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5faXNOYW1lVW5pYyhuYW1lKSkge1xyXG5cclxuICAgICAgTG9nZ2VyLmVycm9yKCdEZXZpY2Ugd2l0aCB0aG9zZSBuYW1lIGFscmVhZHkgZXhpc3QnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHRoaXMuX2NoZWNrTmFtZShuYW1lKSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICB0aGlzLmdldE5hbWUgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuYWRkRGV2aWNlID0gZnVuY3Rpb24oZGV2aWNlKSB7XHJcbiAgICBpZiAoZGV2aWNlIGluc3RhbmNlb2YgRGV2aWNlKSB7XHJcbiAgICAgIHRoaXMuX2NoZWNrTmFtZShkZXZpY2UuZ2V0TmFtZSgpKTtcclxuICAgICAgdGhpcy5fZGV2aWNlcy5wdXNoKGRldmljZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBMb2dnZXIuZXJyb3IoXCJEZXZpY2VzIG11c3QgYmUgb2JqZWN0cyBvZiBpS2V0dGxlIG9yIFNwZWFrZXJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5kZWxldGVEZXZpY2VCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICBsZXQgZGVsZXRlT2JqSW5kZXggPSBudWxsO1xyXG4gICAgdGhpcy5fZGV2aWNlcy5maW5kKChkZXZpY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChkZXZpY2UuZ2V0TmFtZSgpID09PSBuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlT2JqSW5kZXggPSBpbmRleDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHRoaXMuX2RldmljZXMuc3BsaWNlKGRlbGV0ZU9iakluZGV4LCAxKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmdldEFsbERldmljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXZpY2VzO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IERldmljZSB9IGZyb20gJy4uL0Jhc2VEZXZpY2VzL0RldmljZS9EZXZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi9VdGlsaXRpZXMvTG9nZ2VyL0xvZ2dlcic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNwZWFrZXIgPSBmdW5jdGlvbihuYW1lLCB0cmFja0xpc3QpIHtcclxuICBEZXZpY2UuY2FsbCh0aGlzLCBuYW1lLCBcIlNwZWFrZXJcIik7XHJcblxyXG4gIC8vIGRldmljZSBwbGF5L3BhdXNlXHJcbiAgdGhpcy5fcGxheWJhY2tTdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAvL3ZvbHVtZSBjb250cm9sc1xyXG4gIHRoaXMuX3ZvbHVtZU1pbiA9IDA7XHJcbiAgdGhpcy5fdm9sdW1lTWF4ID0gMTA7XHJcbiAgdGhpcy5fY3VycmVudFZvbHVtZSA9IDU7XHJcblxyXG4gIC8vdHJhY2sgZHVyYXRpb24gdGltZXIgY291bnRcclxuICB0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSA9IDA7XHJcblxyXG4gIGNvbnN0IGRlZmF1bHRUcmFja0xpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU29uZyAxXCIsXHJcbiAgICAgIGR1cmF0aW9uOiA4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNvbmcgMlwiLFxyXG4gICAgICBkdXJhdGlvbjogMTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU29uZyAzXCIsXHJcbiAgICAgIGR1cmF0aW9uOiA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNvbmcgNFwiLFxyXG4gICAgICBkdXJhdGlvbjogMTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU29uZyA1XCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxMFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIC8vIGluaXRpYWxpemluZyBvZiB0cmFjay1saXN0XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodHJhY2tMaXN0KSAmJiB0cmFja0xpc3QubGVuZ3RoKSB7XHJcbiAgICAvLyB0cmFja2xpc3QgcGFzc2VkIGluIGNvbnN0cnVjdG9yXHJcbiAgICB0cmFja0xpc3QuZm9yRWFjaCh0cmFjayA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhKFxyXG4gICAgICAgICAgdHlwZW9mIHRyYWNrLm5hbWUgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgIHRyYWNrLm5hbWUubGVuZ3RoICYmXHJcbiAgICAgICAgICB0eXBlb2YgdHJhY2suZHVyYXRpb24gPT09IFwibnVtYmVyXCIgJiZcclxuICAgICAgICAgIHRyYWNrLmR1cmF0aW9uID4gMFxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgTG9nZ2VyLndhcm5pbmcoXCJJbnZhbGlkIGlucHV0IHRyYWNrbGlzdCBkYXRhLCB3aWxsIGJlIHVzZWQgZGVmYXVsdCB0cmFja2xpc3RcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3RyYWNrTGlzdCA9IHRyYWNrTGlzdDtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvL2RlZmF1bHQgdHJhY2tsaXN0XHJcbiAgICB0aGlzLl90cmFja0xpc3QgPSBkZWZhdWx0VHJhY2tMaXN0O1xyXG4gIH1cclxuXHJcbiAgLy8gdHJhY2sgd2ljaCBwbGF5aW5nIG5vd1xyXG4gIHRoaXMuX2N1cnJlbnRUcmFjayA9IDA7XHJcbn1cclxuXHJcbi8vIG1ldGhvZHM6XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGV2aWNlLnByb3RvdHlwZSk7XHJcblNwZWFrZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3BlYWtlcjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcblNwZWFrZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XHJcbiAgRGV2aWNlLnByb3RvdHlwZS5vbi5jYWxsKHRoaXMpO1xyXG5cclxuICAvLyBjaGVjayBpcyBkZXZpY2UgaGFzIGZsYXNoIGNhcmRcclxufTtcclxuXHJcblNwZWFrZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuX2lzRGV2aWNlT24oKTtcclxuXHJcbiAgLy8gc2V0IGRldmljZSBpbiBwYXVzZSBtb2RlXHJcbiAgdGhpcy50b2dnbGVQbGF5YmFja1N0YXR1cyhmYWxzZSk7XHJcbiAgdGhpcy5fY3VycmVudFRpbWVyVmFsdWUgPSAwO1xyXG4gIHRoaXMuX2N1cnJlbnRUcmFjayA9IDA7XHJcbiAgdGhpcy5fY3VycmVudFZvbHVtZSA9IDU7XHJcblxyXG4gIC8vIHR1cm4gb2ZmIGRldmljZVxyXG4gIERldmljZS5wcm90b3R5cGUub2ZmLmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG4vLyBsb2cgaW5mbyBhYm91dCBjdXJyZW50IGRldmljZSBzdGF0ZVxyXG5TcGVha2VyLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc29sZS5sb2coYFxyXG4ke0RldmljZS5wcm90b3R5cGUuaW5mby5jYWxsKHRoaXMpfVxyXG52b2x1bWU6ICR7dGhpcy5fY3VycmVudFZvbHVtZX0sXHJcbnBsYXlpbmc6ICR7dGhpcy5fcGxheWJhY2tTdGF0ZSA/ICdQbGF5JyA6ICdQYXVzZSd9LFxyXG5jdXJyZW50U29uZzogJHt0aGlzLl90cmFja0xpc3RbdGhpcy5fY3VycmVudFRyYWNrXS5uYW1lfSxcclxuc29uZ0R1cmF0aW9uOiAke3RoaXMuX3RyYWNrTGlzdFt0aGlzLl9jdXJyZW50VHJhY2tdLmR1cmF0aW9ufXMsXHJcbmN1cnJlbnRUaW1lOiAke3RoaXMuX2N1cnJlbnRUaW1lclZhbHVlfXNcclxuYCk7XHJcbn07XHJcblxyXG4vLyB0dXJuIGRldmljZSB0byBwbGF5L3BhdXNlIG1vZGVzXHJcblNwZWFrZXIucHJvdG90eXBlLnRvZ2dsZVBsYXliYWNrU3RhdHVzID0gZnVuY3Rpb24oc3RhdHVzKSB7XHJcbiAgdGhpcy5faXNEZXZpY2VPbigpO1xyXG5cclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fcGxheWJhY2tTdGF0ZSA9IHN0YXR1cztcclxuICB9IGVsc2Uge1xyXG4gICAgIC8vIGNoYW5nZSBwbGF5aW5nIHN0YXR1cyB0byBvcG9zaXRlXHJcbiAgICB0aGlzLl9wbGF5YmFja1N0YXRlID0gIXRoaXMuX3BsYXliYWNrU3RhdGU7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5fcGxheWJhY2tTdGF0ZSkge1xyXG4gICAgLy8gc3RhcnQgcGxheWluZyB0cmFja3NcclxuICAgIHRoaXMuX3N0YXJ0UGxheWluZyh0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIHN0b3AgcGxheWluZyB0cmFja3NcclxuICAgIHRoaXMuX3N0b3BQbGF5aW5nKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUuX3N0b3BQbGF5aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5faXNEZXZpY2VPbigpO1xyXG5cclxuICAvLyBkZWxldGUgYXN5bmMgdGltZSBjb3VudGVyXHJcbiAgRGV2aWNlLnByb3RvdHlwZS5fZGVsZXRlVGltZXIuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcblNwZWFrZXIucHJvdG90eXBlLl9zdGFydFBsYXlpbmcgPSBmdW5jdGlvbihwbGF5U29uZ0Zyb20pIHtcclxuICB0aGlzLl9pc0RldmljZU9uKCk7XHJcbiAgdGhpcy5faXNEZXZpY2VJblBsYXlpbmdNb2RlTm93KCk7XHJcblxyXG4gIC8vIHNldCB0aW1lLWNvdW50ZXIgdG8gcHJlZGVmaW5lZCB7cGxheVNvbmdGcm9tfSB2YWx1ZSBvciBzdGFydCBmcm9tIDBzXHJcbiAgbGV0IGNvdW50ID0gdHlwZW9mIHBsYXlTb25nRnJvbSA9PT0gXCJudW1iZXJcIiA/IHBsYXlTb25nRnJvbSA6IDA7XHJcbiAgXHJcbiAgbGV0IHRpYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gaWYgcHJlZGVmaW5lZCB2YWx1ZSBtb3JlIHRoYW4gdHJhY2sgZHVyYXRpb24gcGxheSBuZXh0IHNvbmdcclxuICAgIGlmIChjb3VudCA+PSB0aGlzLl90cmFja0xpc3RbdGhpcy5fY3VycmVudFRyYWNrXS5kdXJhdGlvbikge1xyXG4gICAgICB0aGlzLnRvZ2dsZVRyYWNrKFwibmV4dFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGluY3JlYXNlIHRpbWUgY291bnRlciBvbiAxc1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgICAvLyBzZXQgdmFsdWUgdG8gcHJvcGVydHkgdG8gYWNoaWV2ZSB0aGF0IGZyb20gb3RoZXIgbWV0aG9kc1xyXG4gICAgICB0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSA9IGNvdW50O1xyXG4gICAgfVxyXG4gICAgLy8gbG9nIGluZm8gb24gZWFjaCB0aW1lciB0aWNcclxuICAgIC8vIHRoaXMuaW5mbygpO1xyXG4gIH07XHJcblxyXG4gIC8vIHNldCBhc3luYyB0aW1lIGNvdW50ZXJcclxuICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKHRpYy5iaW5kKHRoaXMpLCAxMDAwKTtcclxufTtcclxuXHJcblNwZWFrZXIucHJvdG90eXBlLmdldFBsYXlQYXVzZVN0YXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX3BsYXliYWNrU3RhdGU7XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5uZXh0VHJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAvLyBpZiB0aGVyZSBpcyBzb21lIG1vcmUgdHJhY2sgaW4gdHJhY2sgbGlzdCBzdGFydCBuZXh0XHJcbiAgaWYgKHRoaXMuX2N1cnJlbnRUcmFjayA8IHRoaXMuX3RyYWNrTGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50VHJhY2srKztcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgdHJhY2sgaXMgbGFzdCBpbiB0cmFjayBsaXN0IHN0YXJ0IGZyb20gZmlyc3QgdHJhY2tcclxuICAgIHRoaXMuX2N1cnJlbnRUcmFjayA9IDA7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUucHJldmlvdXNUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vIGlmIHRoZXJlIGlzIHNvbWUgbW9yZSB0cmFjayBpbiB0cmFjayBsaXN0IHN0YXJ0IG5leHRcclxuICBpZiAodGhpcy5fY3VycmVudFRyYWNrID4gMCkge1xyXG4gICAgdGhpcy5fY3VycmVudFRyYWNrLS07XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHRyYWNrIGlzIGZpcnN0IGluIHRyYWNrIGxpc3QgcGxheSBsYXN0IHRyYWNrXHJcbiAgICB0aGlzLl9jdXJyZW50VHJhY2sgPSB0aGlzLl90cmFja0xpc3QubGVuZ3RoIC0gMTtcclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS50b2dnbGVUcmFjayA9IGZ1bmN0aW9uKHRvZ2dsZURpcmVjdGlvbikge1xyXG4gIHRoaXMuX2lzRGV2aWNlT24oKTtcclxuICBpZiAodHlwZW9mIHRvZ2dsZURpcmVjdGlvbiAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgTG9nZ2VyLmVycm9yKFwiUGxlYXNlIHBhc3MgJ25leHQnIG9yICdwcmV2aW91cycgdmFsdWUgYXMgYSBwYXJhbWV0ZXJcIik7XHJcbiAgfVxyXG5cclxuICAvLyBkZWxldGUgb2xkIHRpbWVyXHJcbiAgdGhpcy5fc3RvcFBsYXlpbmcoKTtcclxuICAvLyBzZXQgdGltZXIgdmFsdWUgdG8gMCwgZm9yIHN0YXJ0aW5nIHRyYWNrIGZyb20gdGhlIGJlZ2lubmluZ1xyXG4gIHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlID0gMDtcclxuICBcclxuICBcclxuICBzd2l0Y2ggKHRvZ2dsZURpcmVjdGlvbikge1xyXG4gICAgY2FzZSBcIm5leHRcIjpcclxuICAgICAgdGhpcy5uZXh0VHJhY2soKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwicHJldmlvdXNcIjpcclxuICAgICAgdGhpcy5wcmV2aW91c1RyYWNrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgLy8gc2V0dXAgbmV3IHRpbWVyXHJcbiAgdGhpcy5fc3RhcnRQbGF5aW5nKCk7XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5yZXdpbmRUcmFjayA9IGZ1bmN0aW9uKHJld2luZERpcmVjdGlvbikge1xyXG4gIHRoaXMuX2lzRGV2aWNlT24oKTtcclxuICAvL3Jld2luZCBvbmx5IGlmIGRldmljZSBwbGF5aW5nIG5vd1xyXG4gIHRoaXMuX2lzRGV2aWNlSW5QbGF5aW5nTW9kZU5vdygpO1xyXG5cclxuICBpZiAoXHJcbiAgICB0eXBlb2YgcmV3aW5kRGlyZWN0aW9uICE9PSBcInN0cmluZ1wiIHx8XHJcbiAgICAocmV3aW5kRGlyZWN0aW9uICE9PSBcImZvcndhcmRcIiAmJiByZXdpbmREaXJlY3Rpb24gIT09IFwiYmFja1wiKVxyXG4gICkge1xyXG4gICAgTG9nZ2VyLmVycm9yKFwiUGxlYXNlIHBhc3MgJ2ZvcndhcmQnIG9yICdiYWNrJyBzdHJpbmcgdmFsdWUgYXMgYSBwYXJhbWV0ZXJcIik7XHJcbiAgfVxyXG4gIC8vIHNldHVwIHJhbmRvbSByZXdpbmQgdGltZVxyXG4gIGNvbnN0IHJld2luZFRpbWUgPSBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMSkgKiAxMDtcclxuICBzd2l0Y2ggKHJld2luZERpcmVjdGlvbikge1xyXG4gICAgY2FzZSBcImZvcndhcmRcIjpcclxuICAgICAgdGhpcy5yZXdpbmRGb3J3YXJkKHJld2luZFRpbWUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJiYWNrXCI6XHJcbiAgICAgIHRoaXMucmV3aW5kQmFjayhyZXdpbmRUaW1lKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUucmV3aW5kRm9yd2FyZCA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAvLyBpZiBsb3N0IHRpbWUgKyByZXdpbmQgdGltZSBsZXNzIHRoYW4gc29uZyBkdXJhdGlvbiwgc3RhcnQgcGxheWluZyBmcm9tIG5ldyB0aW1lIHBvc2l0aW9uXHJcbiAgaWYgKFxyXG4gICAgdGhpcy5fY3VycmVudFRpbWVyVmFsdWUgKyB0aW1lIDxcclxuICAgIHRoaXMuX3RyYWNrTGlzdFt0aGlzLl9jdXJyZW50VHJhY2tdLmR1cmF0aW9uXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdG9wUGxheWluZygpO1xyXG4gICAgdGhpcy5fc3RhcnRQbGF5aW5nKHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlICsgdGltZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIGxvc3QgdGltZSArIHJld2luZCB0aW1lIG1vcmUgdGhhbiBzb25nIGR1cmF0aW9uLCBzdGFydCBwbGF5aW5nIG5leHQgc29uZ1xyXG4gICAgdGhpcy50b2dnbGVUcmFjayhcIm5leHRcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUucmV3aW5kQmFjayA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICB0aGlzLl9zdG9wUGxheWluZygpO1xyXG5cclxuICAvLyBpZiBsb3N0IHRpbWUgLSByZXdpbmQgdGltZSBtb3JlIHRoYW4gMCwgc3RhcnQgcGxheWluZyBmcm9tIG5ldyB0aW1lIHBvc2l0aW9uXHJcbiAgaWYgKHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlIC0gdGltZSA+IDApIHtcclxuICAgIHRoaXMuX3N0YXJ0UGxheWluZyh0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSAtIHRpbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBsb3N0IHRpbWUgLSByZXdpbmQgdGltZSBsZXNzIHRoYW4gMCwgc3RhcnQgcGxheWluZyBwcmV2aW91cyBzb25nXHJcbiAgICB0aGlzLnRvZ2dsZVRyYWNrKFwicHJldmlvdXNcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUuaW5jcmVhc2VWb2x1bWUgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLl9pc0RldmljZU9uKCk7XHJcblxyXG4gIC8vIGNoZWNrcyB0aGF0IHRoZSB2YWx1ZSBkb2VzIG5vdCBnbyBiZXlvbmQgdGhlIHByZWRlZmluZWQgbGltaXRzXHJcbiAgaWYgKHRoaXMuX2N1cnJlbnRWb2x1bWUgPCB0aGlzLl92b2x1bWVNYXgpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRWb2x1bWUrKztcclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5kZWNyZWFzZVZvbHVtZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuX2lzRGV2aWNlT24oKTtcclxuXHJcbiAgLy8gY2hlY2tzIHRoYXQgdGhlIHZhbHVlIGRvZXMgbm90IGdvIGJleW9uZCB0aGUgcHJlZGVmaW5lZCBsaW1pdHNcclxuICBpZiAodGhpcy5fY3VycmVudFZvbHVtZSA+IHRoaXMuX3ZvbHVtZU1pbikge1xyXG4gICAgdGhpcy5fY3VycmVudFZvbHVtZS0tO1xyXG4gIH1cclxufTtcclxuXHJcbi8vc2FmZXR5IG1ldGhvZHNcclxuXHJcbi8vY2hlY2sgaXMgZGV2aWNlIHBsYXlpbmcgdHJhY2sgbm93XHJcblNwZWFrZXIucHJvdG90eXBlLl9pc0RldmljZUluUGxheWluZ01vZGVOb3cgPSBmdW5jdGlvbigpIHtcclxuICBpZiAoIXRoaXMuX3BsYXliYWNrU3RhdGUpIHtcclxuICAgIExvZ2dlci53YXJuaW5nKFxyXG4gICAgICBcIlRvZ2dsZSBkZXZpY2UgdG8gcGxheWluZyBtb2RlIGJlZm9yZSBzdGFydGluZyB0aGlzIG9wZXJhdGlvblwiXHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IExvZ2dlciA9IHtcclxuICB3YXJuaW5nOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICBjb25zb2xlLndhcm4odGV4dCk7XHJcbiAgfSxcclxuICBlcnJvcjogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHRleHQpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSBcIi4uL0Jhc2VEZXZpY2VzL0RldmljZS9EZXZpY2VcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL1V0aWxpdGllcy9Mb2dnZXIvTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaUtldHRsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICBEZXZpY2UuY2FsbCh0aGlzLCBuYW1lLCBcImlLZXR0bGVcIik7XHJcblxyXG4gIHRoaXMuX21vZGVzID0gW1xyXG4gICAgeyBzdGFuZGFydDogMTAwIH0sXHJcbiAgICB7IHRlYTogNzggfSxcclxuICAgIHsgY29mZmVlOiA4NSB9LFxyXG4gICAgeyBwb3JyaWRnZTogNzIgfSxcclxuICAgIHsgXCJiYWJ5IGZvb2RcIjogNzAgfVxyXG4gIF07XHJcbiAgdGhpcy5fY3VycmVudE1vZGUgPSAwO1xyXG4gIHRoaXMuX21heEZ1bGxuZXNzID0gMTAwMDtcclxuICB0aGlzLl9taW5GdWxsbmVzcyA9IDEwMDtcclxuICB0aGlzLl9jdXJyZW50RnVsbG5lc3MgPSAwO1xyXG4gIHRoaXMuX2N1cnJlbnRUZW1wZXJhdHVyZSA9IDI4O1xyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERldmljZS5wcm90b3R5cGUpO1xyXG5pS2V0dGxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGlLZXR0bGU7XHJcblxyXG5pS2V0dGxlLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIGBcclxuJHtEZXZpY2UucHJvdG90eXBlLmluZm8uY2FsbCh0aGlzKX1cclxubW9kZTogJHtPYmplY3Qua2V5cyh0aGlzLl9tb2Rlc1t0aGlzLl9jdXJyZW50TW9kZV0pfTtcclxuY3VycmVudEZ1bGxuZXNzOiAke3RoaXMuX2N1cnJlbnRGdWxsbmVzc307XHJcbmA7XHJcbn07XHJcbmlLZXR0bGUucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKCkge1xyXG4gIERldmljZS5wcm90b3R5cGUub2ZmLmNhbGwodGhpcyk7XHJcbiAgdGhpcy5fZGVsZXRlVGltZXIoKTtcclxuICB0aGlzLl9jdXJyZW50VGVtcGVyYXR1cmUgPSAyNjtcclxufTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlLm5leHRNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuX2N1cnJlbnRNb2RlID09PSB0aGlzLl9tb2Rlcy5sZW5ndGggLSAxKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50TW9kZSA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuX2N1cnJlbnRNb2RlKys7XHJcbiAgfVxyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUucHJldmlvdXNNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuX2N1cnJlbnRNb2RlID09PSAwKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50TW9kZSA9IHRoaXMuX21vZGVzLmxlbmd0aCAtIDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuX2N1cnJlbnRNb2RlLS07XHJcbiAgfVxyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUuZ2V0Q3VycmVudE1vZGUgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fbW9kZXNbdGhpcy5fY3VycmVudE1vZGVdKTtcclxufTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlLmFkZFdhdGVyID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICBsZXQgbmV3QW1vdW50T2ZXYXRlciA9IHRoaXMuX2N1cnJlbnRGdWxsbmVzcyArIHZhbHVlO1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIpIHtcclxuICAgIExvZ2dlci5lcnJvcihcIlZhbHVlIG11c3QgYmUgYSBudW1iZXJcIik7XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIG5ld0Ftb3VudE9mV2F0ZXIgPj0gdGhpcy5fbWluRnVsbG5lc3MgJiZcclxuICAgIG5ld0Ftb3VudE9mV2F0ZXIgPD0gdGhpcy5fbWF4RnVsbG5lc3NcclxuICApIHtcclxuICAgIHRoaXMuX2N1cnJlbnRGdWxsbmVzcyA9IG5ld0Ftb3VudE9mV2F0ZXI7XHJcbiAgfSBlbHNlIGlmIChuZXdBbW91bnRPZldhdGVyIDwgdGhpcy5fbWluRnVsbG5lc3MpIHtcclxuICAgIExvZ2dlci53YXJuaW5nKFwiUGxlYXNlLCBhZGQgbW9yZSB3YXRlclwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgTG9nZ2VyLndhcm5pbmcoXCJQbGVhc2UsIHJlZHVjZSB0aGUgYW1vdW50IG9mIHdhdGVyXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlLmdldEN1cnJlbnRGdWxsbmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLl9jdXJyZW50RnVsbG5lc3M7XHJcbn07XHJcblxyXG5pS2V0dGxlLnByb3RvdHlwZS5ib2lsV2F0ZXIgPSBmdW5jdGlvbigpIHtcclxuICBpZiAodGhpcy5faXNEZXZpY2VPbigpICYmIHRoaXMuX2N1cnJlbnRGdWxsbmVzcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLl9jdXJyZW50VGVtcGVyYXR1cmUgPj1cclxuICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5fbW9kZXNbdGhpcy5fY3VycmVudE1vZGVdKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9jdXJyZW50VGVtcGVyYXR1cmUgKz0gMjtcclxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRGdWxsbmVzcy0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5fY3VycmVudFRlbXBlcmF0dXJlKTtcclxuICAgICAgdGhpcy5vZmYoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgU21hcnRIb3VzZSB9IGZyb20gXCIuL1NtYXJ0SG91c2UvU21hcnRIb3VzZVwiO1xyXG5pbXBvcnQgeyBTcGVha2VyIH0gZnJvbSBcIi4vU3BlYWtlci9TcGVha2VyXCI7XHJcbmltcG9ydCB7IGlLZXR0bGUgfSBmcm9tIFwiLi9pS2V0dGxlL2lLZXR0bGVcIjtcclxuXHJcbndpbmRvdy5TbWFydEhvdXNlID0gU21hcnRIb3VzZTtcclxud2luZG93LlNwZWFrZXIgPSBTcGVha2VyO1xyXG53aW5kb3cuaUtldHRsZSA9IGlLZXR0bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=