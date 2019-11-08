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

Device.prototype.toString = function () {
  return "\nname: ".concat(this.getName(), ",\nstatus: ").concat(this.getState());
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


var SmartHouse = function SmartHouse(name) {
  if (this._checkName(name)) {
    this._name = name;
  }

  this._devices = [];
};

SmartHouse.prototype.onAll = function () {
  this._devices.forEach(function (device) {
    return device.on();
  });
};

SmartHouse.prototype.offAll = function () {
  this._devices.forEach(function (device) {
    return device.off();
  });
};

SmartHouse.prototype.deleteAllDevices = function () {
  this.offAll();
  this._devices = [];
};

SmartHouse.prototype.getAllDevicesByModel = function (obj) {
  return this._devices.filter(function (device) {
    if (device instanceof obj) {
      return true;
    }

    return false;
  });
};

SmartHouse.prototype.getDeviceByName = function (name) {
  if (typeof name === "string" && name.length) {
    var device = this._devices.find(function (device) {
      if (device.getName() === name) {
        return true;
      }
    });

    if (!device) {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].warning("There is no device with this name");
    }

    return device;
  } else {
    _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Please, enter valid device name");
  }
};

SmartHouse.prototype.deleteDevicesByModel = function (obj) {
  var result = this._devices.filter(function (device) {
    return !(device instanceof obj);
  });

  this._devices = result;
};

SmartHouse.prototype._isNameUnic = function (name) {
  var result = this._devices.find(function (device) {
    if (device.getName() === name) {
      return true;
    }
  });

  return !result;
};

SmartHouse.prototype._checkName = function (name) {
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
  } else {
    return true;
  }
};

SmartHouse.prototype.getName = function () {
  return this._name;
};

SmartHouse.prototype.addDevice = function (device) {
  var _this = this;

  var matchObj = {
    trueInstance: {
      func: function func(obj) {
        return obj instanceof _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"];
      },
      error: function error() {
        _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Devices must be objects of iKettle or Speaker");
      }
    },
    unicOfName: {
      func: function func(obj) {
        return _this._isNameUnic(obj.getName());
      },
      error: function error() {
        _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Device's name must be unic");
      }
    }
  };
  var rules = Object.keys(matchObj);
  var validStatus = rules.every(function (rule) {
    if (matchObj[rule].func(device)) {
      return true;
    } else {
      if (matchObj[rule].error) {
        matchObj[rule].error();
      }

      return false;
    }
  });

  if (validStatus) {
    this._devices.push(device);
  }
};

SmartHouse.prototype.deleteDeviceByName = function (name) {
  var deleteObjIndex;

  this._devices.find(function (device, index) {
    if (device.getName() === name) {
      deleteObjIndex = index;
      return true;
    }
  });

  this._devices.splice(deleteObjIndex, 1);
};

SmartHouse.prototype.getAllDevices = function () {
  return this._devices;
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
  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].call(this, name); // device play/pause

  this._playbackState = false; //volume controls

  this._volumeMin = 0;
  this._volumeMax = 10;
  this._currentVolume = 5; //track duration timer count

  this._currentTimerValue = 0; // initializing of track-list

  if (Array.isArray(trackList) && trackList.length) {
    // tracklist passed in constructor
    var isInputTrackListValid = trackList.every(function (track) {
      if (typeof track.name === "string" && track.name.length && typeof track.duration === "number" && track.duration > 0) {
        return true;
      } else {
        return false;
      }
    });

    if (!isInputTrackListValid) {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].warning("Invalid input tracklist data, will be used default tracklist");
    } else {
      this._trackList = trackList;
    }
  } else {
    //default tracklist
    this._trackList = this._defaultTrackList;
  } // track wich playing now


  this._currentTrack = 0;
};
Speaker.prototype._defaultTrackList = [{
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
}]; // methods:

Speaker.prototype = Object.create(_BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype);
Speaker.prototype.constructor = Speaker; //////////////

Speaker.prototype.on = function () {
  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.on.call(this); // check is device has flash card
};

Speaker.prototype.off = function () {
  if (this._isDeviceOn()) {
    // set device in pause mode
    this.togglePlaybackStatus(false);
    this._currentTimerValue = 0;
    this._currentTrack = 0;
    this._currentVolume = 5; // turn off device

    _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.off.call(this);
  }
}; // log info about current device state


Speaker.prototype.toString = function () {
  return "\n".concat(_BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.toString.call(this), "\nvolume: ").concat(this._currentVolume, ",\nplaying: ").concat(this._playbackState ? 'Play' : 'Pause', ",\ncurrentSong: ").concat(this._trackList[this._currentTrack].name, ",\nsongDuration: ").concat(this._trackList[this._currentTrack].duration, "s,\ncurrentTime: ").concat(this._currentTimerValue, "s\n");
}; // turn device to play/pause modes


Speaker.prototype.togglePlaybackStatus = function (status) {
  if (this._isDeviceOn()) {
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
  }
};

Speaker.prototype._stopPlaying = function () {
  if (this._isDeviceOn()) {
    // delete async time counter
    _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype._deleteTimer.call(this);
  }
};

Speaker.prototype._startPlaying = function (playSongFrom) {
  if (this._isDeviceOn()) {
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
  }
};

Speaker.prototype.getPlayPauseState = function () {
  return this._playbackState;
};

Speaker.prototype._nextTrack = function () {
  // if there is some more track in track list start next
  if (this._currentTrack < this._trackList.length - 1) {
    this._currentTrack++;
  } else {
    // if track is last in track list start from first track
    this._currentTrack = 0;
  }
};

Speaker.prototype._previousTrack = function () {
  // if there is some more track in track list start next
  if (this._currentTrack > 0) {
    this._currentTrack--;
  } else {
    // if track is first in track list play last track
    this._currentTrack = this._trackList.length - 1;
  }
};

Speaker.prototype.toggleTrack = function (toggleDirection) {
  if (this._isDeviceOn()) {
    this._isDeviceOn();

    if (typeof toggleDirection !== "string") {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Please pass 'next' or 'previous' value as a parameter");
    } // delete old timer


    this._stopPlaying(); // set timer value to 0, for starting track from the beginning


    this._currentTimerValue = 0;

    switch (toggleDirection) {
      case "next":
        this._nextTrack();

        break;

      case "previous":
        this._previousTrack();

        break;
    } // setup new timer


    this._startPlaying();
  }
};

Speaker.prototype.rewindTrack = function (rewindDirection) {
  if (this._isDeviceOn()) {
    this._isDeviceOn(); //rewind only if device playing now


    this._isDeviceInPlayingModeNow();

    if (typeof rewindDirection !== "string" || rewindDirection !== "forward" && rewindDirection !== "back") {
      _Utilities_Logger_Logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Please pass 'forward' or 'back' string value as a parameter");
    } // setup random rewind time


    var rewindTime = Math.random().toFixed(1) * 10;

    switch (rewindDirection) {
      case "forward":
        this._rewindForward(rewindTime);

        break;

      case "back":
        this._rewindBack(rewindTime);

        break;
    }
  }
};

Speaker.prototype._rewindForward = function (time) {
  // if lost time + rewind time less than song duration, start playing from new time position
  if (this._currentTimerValue + time < this._trackList[this._currentTrack].duration) {
    this._stopPlaying();

    this._startPlaying(this._currentTimerValue + time);
  } else {
    // if lost time + rewind time more than song duration, start playing next song
    this.toggleTrack("next");
  }
};

Speaker.prototype._rewindBack = function (time) {
  this._stopPlaying(); // if lost time - rewind time more than 0, start playing from new time position


  if (this._currentTimerValue - time > 0) {
    this._startPlaying(this._currentTimerValue - time);
  } else {
    // if lost time - rewind time less than 0, start playing previous song
    this.toggleTrack("previous");
  }
};

Speaker.prototype.increaseVolume = function () {
  if (this._isDeviceOn()) {
    // checks that the value does not go beyond the predefined limits
    if (this._currentVolume < this._volumeMax) {
      this._currentVolume++;
    }
  }
};

Speaker.prototype.decreaseVolume = function () {
  if (this._isDeviceOn()) {
    this._isDeviceOn(); // checks that the value does not go beyond the predefined limits


    if (this._currentVolume > this._volumeMin) {
      this._currentVolume--;
    }
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
  _BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].call(this, name);
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
  return "\n".concat(_BaseDevices_Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"].prototype.toString.call(this), "\nmode: ").concat(Object.keys(this._modes[this._currentMode]), ";\ncurrentFullness: ").concat(this._currentFullness, ";\n");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2VEZXZpY2VzL0RldmljZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NtYXJ0SG91c2UvU21hcnRIb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlYWtlci9TcGVha2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvTG9nZ2VyL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaUtldHRsZS9pS2V0dGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEZXZpY2UiLCJuYW1lIiwiX3N0YXRlIiwiX2NoZWNrTmFtZVZhbGlkaXR5IiwiX25hbWUiLCJwcm90b3R5cGUiLCJnZXRTdGF0ZSIsImdldE5hbWUiLCJzZXROYW1lIiwiX2lzRGV2aWNlT24iLCJMb2dnZXIiLCJlcnJvciIsInRyaW0iLCJyZWdleCIsInJlc3VsdCIsInRlc3QiLCJvbiIsIm9mZiIsIl9kZWxldGVUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJfdGltZXIiLCJ0b1N0cmluZyIsIlNtYXJ0SG91c2UiLCJfY2hlY2tOYW1lIiwiX2RldmljZXMiLCJvbkFsbCIsImZvckVhY2giLCJkZXZpY2UiLCJvZmZBbGwiLCJkZWxldGVBbGxEZXZpY2VzIiwiZ2V0QWxsRGV2aWNlc0J5TW9kZWwiLCJvYmoiLCJmaWx0ZXIiLCJnZXREZXZpY2VCeU5hbWUiLCJsZW5ndGgiLCJmaW5kIiwid2FybmluZyIsImRlbGV0ZURldmljZXNCeU1vZGVsIiwiX2lzTmFtZVVuaWMiLCJhZGREZXZpY2UiLCJtYXRjaE9iaiIsInRydWVJbnN0YW5jZSIsImZ1bmMiLCJ1bmljT2ZOYW1lIiwicnVsZXMiLCJPYmplY3QiLCJrZXlzIiwidmFsaWRTdGF0dXMiLCJldmVyeSIsInJ1bGUiLCJwdXNoIiwiZGVsZXRlRGV2aWNlQnlOYW1lIiwiZGVsZXRlT2JqSW5kZXgiLCJpbmRleCIsInNwbGljZSIsImdldEFsbERldmljZXMiLCJTcGVha2VyIiwidHJhY2tMaXN0IiwiY2FsbCIsIl9wbGF5YmFja1N0YXRlIiwiX3ZvbHVtZU1pbiIsIl92b2x1bWVNYXgiLCJfY3VycmVudFZvbHVtZSIsIl9jdXJyZW50VGltZXJWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImlzSW5wdXRUcmFja0xpc3RWYWxpZCIsInRyYWNrIiwiZHVyYXRpb24iLCJfdHJhY2tMaXN0IiwiX2RlZmF1bHRUcmFja0xpc3QiLCJfY3VycmVudFRyYWNrIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJ0b2dnbGVQbGF5YmFja1N0YXR1cyIsInN0YXR1cyIsImFyZ3VtZW50cyIsIl9zdGFydFBsYXlpbmciLCJfc3RvcFBsYXlpbmciLCJwbGF5U29uZ0Zyb20iLCJfaXNEZXZpY2VJblBsYXlpbmdNb2RlTm93IiwiY291bnQiLCJ0aWMiLCJ0b2dnbGVUcmFjayIsInNldEludGVydmFsIiwiYmluZCIsImdldFBsYXlQYXVzZVN0YXRlIiwiX25leHRUcmFjayIsIl9wcmV2aW91c1RyYWNrIiwidG9nZ2xlRGlyZWN0aW9uIiwicmV3aW5kVHJhY2siLCJyZXdpbmREaXJlY3Rpb24iLCJyZXdpbmRUaW1lIiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJfcmV3aW5kRm9yd2FyZCIsIl9yZXdpbmRCYWNrIiwidGltZSIsImluY3JlYXNlVm9sdW1lIiwiZGVjcmVhc2VWb2x1bWUiLCJ0ZXh0IiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsImlLZXR0bGUiLCJfbW9kZXMiLCJzdGFuZGFydCIsInRlYSIsImNvZmZlZSIsInBvcnJpZGdlIiwiX2N1cnJlbnRNb2RlIiwiX21heEZ1bGxuZXNzIiwiX21pbkZ1bGxuZXNzIiwiX2N1cnJlbnRGdWxsbmVzcyIsIl9jdXJyZW50VGVtcGVyYXR1cmUiLCJpbmZvIiwibmV4dE1vZGUiLCJwcmV2aW91c01vZGUiLCJnZXRDdXJyZW50TW9kZSIsImFkZFdhdGVyIiwidmFsdWUiLCJuZXdBbW91bnRPZldhdGVyIiwiZ2V0Q3VycmVudEZ1bGxuZXNzIiwiYm9pbFdhdGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ2YWx1ZXMiLCJ0aGVuIiwibG9nIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBU0MsSUFBVCxFQUFlO0FBQ25DLE9BQUtDLE1BQUwsR0FBYyxLQUFkOztBQUNBLE1BQUksS0FBS0Msa0JBQUwsQ0FBd0JGLElBQXhCLENBQUosRUFBbUM7QUFDakMsU0FBS0csS0FBTCxHQUFhSCxJQUFiO0FBQ0Q7QUFDRixDQUxNOztBQU9QRCxNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLFFBQWpCLEdBQTRCLFlBQVc7QUFDckMsU0FBTyxLQUFLSixNQUFaO0FBQ0QsQ0FGRDs7QUFJQUYsTUFBTSxDQUFDSyxTQUFQLENBQWlCRSxPQUFqQixH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RyxTQUFSLENBQWtCdUgsU0FBbEIsR0FBOEIsWUFBVztBQUFBOztBQUN2QyxNQUFJLEtBQUtuSCxXQUFMLE1BQXNCLEtBQUt5RyxnQkFBL0IsRUFBaUQ7QUFDL0MsV0FBTyxJQUFJVyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO0FBQzVCLFdBQUksQ0FBQzFHLE1BQUwsR0FBY2dFLFdBQVcsQ0FBQyxZQUFNO0FBQzlCLFlBQ0UsS0FBSSxDQUFDK0IsbUJBQUwsSUFDQXRFLE1BQU0sQ0FBQ2tGLE1BQVAsQ0FBYyxLQUFJLENBQUNyQixNQUFMLENBQVksS0FBSSxDQUFDSyxZQUFqQixDQUFkLENBRkYsRUFHRTtBQUNBZSxpQkFBTztBQUNSLFNBTEQsTUFLTztBQUNMLGVBQUksQ0FBQ1gsbUJBQUwsSUFBNEIsQ0FBNUI7QUFDQSxlQUFJLENBQUNELGdCQUFMO0FBQ0Q7QUFDRixPQVZ3QixFQVV0QixJQVZzQixDQUF6QjtBQVdELEtBWk0sRUFZSmMsSUFaSSxDQVlDLFlBQU07QUFDWjFCLGFBQU8sQ0FBQzJCLEdBQVIsQ0FBWSxLQUFJLENBQUNkLG1CQUFqQjs7QUFDQSxXQUFJLENBQUNsRyxHQUFMO0FBQ0QsS0FmTSxDQUFQO0FBZ0JEO0FBQ0YsQ0FuQkQsQzs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFpSCxNQUFNLENBQUM1RyxVQUFQLEdBQW9CQSxpRUFBcEI7QUFDQTRHLE1BQU0sQ0FBQzFFLE9BQVAsR0FBaUJBLHdEQUFqQjtBQUNBMEUsTUFBTSxDQUFDekIsT0FBUCxHQUFpQkEsd0RBQWpCLEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL1V0aWxpdGllcy9Mb2dnZXIvTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGV2aWNlID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIHRoaXMuX3N0YXRlID0gZmFsc2U7XHJcbiAgaWYgKHRoaXMuX2NoZWNrTmFtZVZhbGlkaXR5KG5hbWUpKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICB9XHJcbn07XHJcblxyXG5EZXZpY2UucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG59O1xyXG5cclxuRGV2aWNlLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbn07XHJcblxyXG5EZXZpY2UucHJvdG90eXBlLnNldE5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgaWYgKHRoaXMuX2NoZWNrTmFtZVZhbGlkaXR5KG5hbWUpKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICB9XHJcbn07XHJcblxyXG5EZXZpY2UucHJvdG90eXBlLl9pc0RldmljZU9uID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKCF0aGlzLmdldFN0YXRlKCkpIHtcclxuICAgIExvZ2dlci5lcnJvcihcIlR1cm4gb24gZGV2aWNlLCBwbGVhc2UhXCIpO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbkRldmljZS5wcm90b3R5cGUuX2NoZWNrTmFtZVZhbGlkaXR5ID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgTG9nZ2VyLmVycm9yKFwiTmFtZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBuYW1lID0gbmFtZS50cmltKCk7XHJcbiAgY29uc3QgcmVnZXggPSAvW1xcd1xcZFxcc117NSwxMH0vO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHJlZ2V4LnRlc3QobmFtZSk7XHJcbiAgaWYgKCFyZXN1bHQpIHtcclxuICAgIExvZ2dlci5lcnJvcihcIk5hbWUgbXVzdCBpbmNsdWRlIG1vcmUgdGhhbiA1IGNoYXJhY3RlcnNcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuRGV2aWNlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuX3N0YXRlID0gdHJ1ZTtcclxufTtcclxuXHJcbkRldmljZS5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5fc3RhdGUgPSBmYWxzZTtcclxufTtcclxuXHJcbkRldmljZS5wcm90b3R5cGUuX2RlbGV0ZVRpbWVyID0gZnVuY3Rpb24oKSB7XHJcbiAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XHJcbn07XHJcblxyXG5EZXZpY2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIGBcclxubmFtZTogJHt0aGlzLmdldE5hbWUoKX0sXHJcbnN0YXR1czogJHt0aGlzLmdldFN0YXRlKCl9YDtcclxufTtcclxuIiwiaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSBcIi4uL0Jhc2VEZXZpY2VzL0RldmljZS9EZXZpY2VcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL1V0aWxpdGllcy9Mb2dnZXIvTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU21hcnRIb3VzZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICBpZiAodGhpcy5fY2hlY2tOYW1lKG5hbWUpKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICB9XHJcbiAgdGhpcy5fZGV2aWNlcyA9IFtdO1xyXG59O1xyXG5cclxuU21hcnRIb3VzZS5wcm90b3R5cGUub25BbGwgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLl9kZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IGRldmljZS5vbigpKTtcclxufTtcclxuXHJcblNtYXJ0SG91c2UucHJvdG90eXBlLm9mZkFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuX2RldmljZXMuZm9yRWFjaChkZXZpY2UgPT4gZGV2aWNlLm9mZigpKTtcclxufTtcclxuXHJcblNtYXJ0SG91c2UucHJvdG90eXBlLmRlbGV0ZUFsbERldmljZXMgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLm9mZkFsbCgpO1xyXG4gIHRoaXMuX2RldmljZXMgPSBbXTtcclxufTtcclxuXHJcblNtYXJ0SG91c2UucHJvdG90eXBlLmdldEFsbERldmljZXNCeU1vZGVsID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgcmV0dXJuIHRoaXMuX2RldmljZXMuZmlsdGVyKGRldmljZSA9PiB7XHJcbiAgICBpZiAoZGV2aWNlIGluc3RhbmNlb2Ygb2JqKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuU21hcnRIb3VzZS5wcm90b3R5cGUuZ2V0RGV2aWNlQnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBuYW1lLmxlbmd0aCkge1xyXG4gICAgbGV0IGRldmljZSA9IHRoaXMuX2RldmljZXMuZmluZChkZXZpY2UgPT4ge1xyXG4gICAgICBpZiAoZGV2aWNlLmdldE5hbWUoKSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRldmljZSkge1xyXG4gICAgICBMb2dnZXIud2FybmluZyhcIlRoZXJlIGlzIG5vIGRldmljZSB3aXRoIHRoaXMgbmFtZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGV2aWNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBMb2dnZXIuZXJyb3IoXCJQbGVhc2UsIGVudGVyIHZhbGlkIGRldmljZSBuYW1lXCIpO1xyXG4gIH1cclxufTtcclxuXHJcblNtYXJ0SG91c2UucHJvdG90eXBlLmRlbGV0ZURldmljZXNCeU1vZGVsID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IHtcclxuICAgIHJldHVybiAhKGRldmljZSBpbnN0YW5jZW9mIG9iaik7XHJcbiAgfSk7XHJcbiAgdGhpcy5fZGV2aWNlcyA9IHJlc3VsdDtcclxufTtcclxuXHJcblNtYXJ0SG91c2UucHJvdG90eXBlLl9pc05hbWVVbmljID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIFxyXG4gIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RldmljZXMuZmluZChkZXZpY2UgPT4ge1xyXG4gICAgaWYgKGRldmljZS5nZXROYW1lKCkgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuICFyZXN1bHQ7XHJcbn07XHJcblxyXG5TbWFydEhvdXNlLnByb3RvdHlwZS5fY2hlY2tOYW1lID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgTG9nZ2VyLmVycm9yKFwiTmFtZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBuYW1lID0gbmFtZS50cmltKCk7XHJcbiAgY29uc3QgcmVnZXggPSAvW1xcd1xcZFxcc117NSwxMH0vO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHJlZ2V4LnRlc3QobmFtZSk7XHJcblxyXG4gIGlmICghcmVzdWx0KSB7XHJcbiAgICBMb2dnZXIuZXJyb3IoXCJOYW1lIG11c3QgaW5jbHVkZSBtb3JlIHRoYW4gNSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG5TbWFydEhvdXNlLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbn07XHJcblxyXG5TbWFydEhvdXNlLnByb3RvdHlwZS5hZGREZXZpY2UgPSBmdW5jdGlvbihkZXZpY2UpIHtcclxuICBsZXQgbWF0Y2hPYmogPSB7XHJcbiAgICB0cnVlSW5zdGFuY2U6IHtcclxuICAgICAgZnVuYzogKG9iaikgPT4gIG9iaiBpbnN0YW5jZW9mIERldmljZSxcclxuICAgICAgZXJyb3I6ICgpID0+ICB7TG9nZ2VyLmVycm9yKFwiRGV2aWNlcyBtdXN0IGJlIG9iamVjdHMgb2YgaUtldHRsZSBvciBTcGVha2VyXCIpO31cclxuICAgIH0sXHJcbiAgICB1bmljT2ZOYW1lOiB7XHJcbiAgICAgIGZ1bmM6IChvYmopID0+IHRoaXMuX2lzTmFtZVVuaWMob2JqLmdldE5hbWUoKSksIFxyXG4gICAgICBlcnJvcjogKCkgPT4ge0xvZ2dlci5lcnJvcihcIkRldmljZSdzIG5hbWUgbXVzdCBiZSB1bmljXCIpO31cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHJ1bGVzID0gT2JqZWN0LmtleXMobWF0Y2hPYmopO1xyXG5cclxuICBsZXQgdmFsaWRTdGF0dXMgPSBydWxlcy5ldmVyeShydWxlID0+IHtcclxuICAgIGlmICggbWF0Y2hPYmpbcnVsZV0uZnVuYyhkZXZpY2UpICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXRjaE9ialtydWxlXS5lcnJvcikge1xyXG4gICAgICAgIG1hdGNoT2JqW3J1bGVdLmVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAgICBcclxuICB9KVxyXG5cclxuICBpZiAoIHZhbGlkU3RhdHVzICkge1xyXG4gICAgdGhpcy5fZGV2aWNlcy5wdXNoKGRldmljZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuU21hcnRIb3VzZS5wcm90b3R5cGUuZGVsZXRlRGV2aWNlQnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIGxldCBkZWxldGVPYmpJbmRleDtcclxuICB0aGlzLl9kZXZpY2VzLmZpbmQoKGRldmljZSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChkZXZpY2UuZ2V0TmFtZSgpID09PSBuYW1lKSB7XHJcbiAgICAgIGRlbGV0ZU9iakluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHRoaXMuX2RldmljZXMuc3BsaWNlKGRlbGV0ZU9iakluZGV4LCAxKTtcclxufTtcclxuXHJcblNtYXJ0SG91c2UucHJvdG90eXBlLmdldEFsbERldmljZXMgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5fZGV2aWNlcztcclxufTtcclxuIiwiaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnLi4vQmFzZURldmljZXMvRGV2aWNlL0RldmljZSc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL1V0aWxpdGllcy9Mb2dnZXIvTG9nZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBTcGVha2VyID0gZnVuY3Rpb24obmFtZSwgdHJhY2tMaXN0KSB7XHJcbiAgRGV2aWNlLmNhbGwodGhpcywgbmFtZSk7XHJcblxyXG4gIC8vIGRldmljZSBwbGF5L3BhdXNlXHJcbiAgdGhpcy5fcGxheWJhY2tTdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAvL3ZvbHVtZSBjb250cm9sc1xyXG4gIHRoaXMuX3ZvbHVtZU1pbiA9IDA7XHJcbiAgdGhpcy5fdm9sdW1lTWF4ID0gMTA7XHJcbiAgdGhpcy5fY3VycmVudFZvbHVtZSA9IDU7XHJcblxyXG4gIC8vdHJhY2sgZHVyYXRpb24gdGltZXIgY291bnRcclxuICB0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSA9IDA7XHJcblxyXG4gIC8vIGluaXRpYWxpemluZyBvZiB0cmFjay1saXN0XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodHJhY2tMaXN0KSAmJiB0cmFja0xpc3QubGVuZ3RoKSB7XHJcbiAgICAvLyB0cmFja2xpc3QgcGFzc2VkIGluIGNvbnN0cnVjdG9yXHJcbiAgICBsZXQgaXNJbnB1dFRyYWNrTGlzdFZhbGlkID0gdHJhY2tMaXN0LmV2ZXJ5KHRyYWNrID0+IHtcclxuICAgICAgaWYgKCAgICAgICAgXHJcbiAgICAgICAgICB0eXBlb2YgdHJhY2submFtZSA9PT0gXCJzdHJpbmdcIiAmJlxyXG4gICAgICAgICAgdHJhY2submFtZS5sZW5ndGggJiZcclxuICAgICAgICAgIHR5cGVvZiB0cmFjay5kdXJhdGlvbiA9PT0gXCJudW1iZXJcIiAmJlxyXG4gICAgICAgICAgdHJhY2suZHVyYXRpb24gPiAwICAgICAgICBcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghaXNJbnB1dFRyYWNrTGlzdFZhbGlkKSB7XHJcbiAgICAgIExvZ2dlci53YXJuaW5nKFwiSW52YWxpZCBpbnB1dCB0cmFja2xpc3QgZGF0YSwgd2lsbCBiZSB1c2VkIGRlZmF1bHQgdHJhY2tsaXN0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdHJhY2tMaXN0ID0gdHJhY2tMaXN0O1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvL2RlZmF1bHQgdHJhY2tsaXN0XHJcbiAgICB0aGlzLl90cmFja0xpc3QgPSB0aGlzLl9kZWZhdWx0VHJhY2tMaXN0O1xyXG4gIH1cclxuXHJcbiAgLy8gdHJhY2sgd2ljaCBwbGF5aW5nIG5vd1xyXG4gIHRoaXMuX2N1cnJlbnRUcmFjayA9IDA7XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5fZGVmYXVsdFRyYWNrTGlzdCA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlNvbmcgMVwiLFxyXG4gICAgZHVyYXRpb246IDhcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU29uZyAyXCIsXHJcbiAgICBkdXJhdGlvbjogMTBcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU29uZyAzXCIsXHJcbiAgICBkdXJhdGlvbjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTb25nIDRcIixcclxuICAgIGR1cmF0aW9uOiAxM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTb25nIDVcIixcclxuICAgIGR1cmF0aW9uOiAxMFxyXG4gIH1cclxuXTtcclxuLy8gbWV0aG9kczpcclxuXHJcblNwZWFrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEZXZpY2UucHJvdG90eXBlKTtcclxuU3BlYWtlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcGVha2VyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuU3BlYWtlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuICBEZXZpY2UucHJvdG90eXBlLm9uLmNhbGwodGhpcyk7XHJcblxyXG4gIC8vIGNoZWNrIGlzIGRldmljZSBoYXMgZmxhc2ggY2FyZFxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuX2lzRGV2aWNlT24oKSkge1xyXG4gICAgLy8gc2V0IGRldmljZSBpbiBwYXVzZSBtb2RlXHJcbiAgICB0aGlzLnRvZ2dsZVBsYXliYWNrU3RhdHVzKGZhbHNlKTtcclxuICAgIHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlID0gMDtcclxuICAgIHRoaXMuX2N1cnJlbnRUcmFjayA9IDA7XHJcbiAgICB0aGlzLl9jdXJyZW50Vm9sdW1lID0gNTtcclxuXHJcbiAgICAvLyB0dXJuIG9mZiBkZXZpY2VcclxuICAgIERldmljZS5wcm90b3R5cGUub2ZmLmNhbGwodGhpcyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gbG9nIGluZm8gYWJvdXQgY3VycmVudCBkZXZpY2Ugc3RhdGVcclxuU3BlYWtlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gYFxyXG4ke0RldmljZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKX1cclxudm9sdW1lOiAke3RoaXMuX2N1cnJlbnRWb2x1bWV9LFxyXG5wbGF5aW5nOiAke3RoaXMuX3BsYXliYWNrU3RhdGUgPyAnUGxheScgOiAnUGF1c2UnfSxcclxuY3VycmVudFNvbmc6ICR7dGhpcy5fdHJhY2tMaXN0W3RoaXMuX2N1cnJlbnRUcmFja10ubmFtZX0sXHJcbnNvbmdEdXJhdGlvbjogJHt0aGlzLl90cmFja0xpc3RbdGhpcy5fY3VycmVudFRyYWNrXS5kdXJhdGlvbn1zLFxyXG5jdXJyZW50VGltZTogJHt0aGlzLl9jdXJyZW50VGltZXJWYWx1ZX1zXHJcbmA7XHJcbn07XHJcblxyXG4vLyB0dXJuIGRldmljZSB0byBwbGF5L3BhdXNlIG1vZGVzXHJcblNwZWFrZXIucHJvdG90eXBlLnRvZ2dsZVBsYXliYWNrU3RhdHVzID0gZnVuY3Rpb24oc3RhdHVzKSB7XHJcbiAgaWYgKHRoaXMuX2lzRGV2aWNlT24oKSkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fcGxheWJhY2tTdGF0ZSA9IHN0YXR1cztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNoYW5nZSBwbGF5aW5nIHN0YXR1cyB0byBvcG9zaXRlXHJcbiAgICAgIHRoaXMuX3BsYXliYWNrU3RhdGUgPSAhdGhpcy5fcGxheWJhY2tTdGF0ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9wbGF5YmFja1N0YXRlKSB7XHJcbiAgICAgIC8vIHN0YXJ0IHBsYXlpbmcgdHJhY2tzXHJcbiAgICAgIHRoaXMuX3N0YXJ0UGxheWluZyh0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzdG9wIHBsYXlpbmcgdHJhY2tzXHJcbiAgICAgIHRoaXMuX3N0b3BQbGF5aW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUuX3N0b3BQbGF5aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuX2lzRGV2aWNlT24oKSkge1xyXG4gICAgLy8gZGVsZXRlIGFzeW5jIHRpbWUgY291bnRlclxyXG4gICAgRGV2aWNlLnByb3RvdHlwZS5fZGVsZXRlVGltZXIuY2FsbCh0aGlzKTtcclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5fc3RhcnRQbGF5aW5nID0gZnVuY3Rpb24ocGxheVNvbmdGcm9tKSB7XHJcbiAgaWYgKHRoaXMuX2lzRGV2aWNlT24oKSkge1xyXG4gICAgdGhpcy5faXNEZXZpY2VPbigpO1xyXG4gICAgdGhpcy5faXNEZXZpY2VJblBsYXlpbmdNb2RlTm93KCk7XHJcblxyXG4gICAgLy8gc2V0IHRpbWUtY291bnRlciB0byBwcmVkZWZpbmVkIHtwbGF5U29uZ0Zyb219IHZhbHVlIG9yIHN0YXJ0IGZyb20gMHNcclxuICAgIGxldCBjb3VudCA9IHR5cGVvZiBwbGF5U29uZ0Zyb20gPT09IFwibnVtYmVyXCIgPyBwbGF5U29uZ0Zyb20gOiAwO1xyXG4gICAgXHJcbiAgICBsZXQgdGljID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGlmIHByZWRlZmluZWQgdmFsdWUgbW9yZSB0aGFuIHRyYWNrIGR1cmF0aW9uIHBsYXkgbmV4dCBzb25nXHJcbiAgICAgIGlmIChjb3VudCA+PSB0aGlzLl90cmFja0xpc3RbdGhpcy5fY3VycmVudFRyYWNrXS5kdXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVHJhY2soXCJuZXh0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGluY3JlYXNlIHRpbWUgY291bnRlciBvbiAxc1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgLy8gc2V0IHZhbHVlIHRvIHByb3BlcnR5IHRvIGFjaGlldmUgdGhhdCBmcm9tIG90aGVyIG1ldGhvZHNcclxuICAgICAgICB0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSA9IGNvdW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxvZyBpbmZvIG9uIGVhY2ggdGltZXIgdGljXHJcbiAgICAgIC8vIHRoaXMuaW5mbygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzZXQgYXN5bmMgdGltZSBjb3VudGVyXHJcbiAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKHRpYy5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5nZXRQbGF5UGF1c2VTdGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLl9wbGF5YmFja1N0YXRlO1xyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUuX25leHRUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vIGlmIHRoZXJlIGlzIHNvbWUgbW9yZSB0cmFjayBpbiB0cmFjayBsaXN0IHN0YXJ0IG5leHRcclxuICBpZiAodGhpcy5fY3VycmVudFRyYWNrIDwgdGhpcy5fdHJhY2tMaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRUcmFjaysrO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiB0cmFjayBpcyBsYXN0IGluIHRyYWNrIGxpc3Qgc3RhcnQgZnJvbSBmaXJzdCB0cmFja1xyXG4gICAgdGhpcy5fY3VycmVudFRyYWNrID0gMDtcclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5fcHJldmlvdXNUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vIGlmIHRoZXJlIGlzIHNvbWUgbW9yZSB0cmFjayBpbiB0cmFjayBsaXN0IHN0YXJ0IG5leHRcclxuICBpZiAodGhpcy5fY3VycmVudFRyYWNrID4gMCkge1xyXG4gICAgdGhpcy5fY3VycmVudFRyYWNrLS07XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHRyYWNrIGlzIGZpcnN0IGluIHRyYWNrIGxpc3QgcGxheSBsYXN0IHRyYWNrXHJcbiAgICB0aGlzLl9jdXJyZW50VHJhY2sgPSB0aGlzLl90cmFja0xpc3QubGVuZ3RoIC0gMTtcclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS50b2dnbGVUcmFjayA9IGZ1bmN0aW9uKHRvZ2dsZURpcmVjdGlvbikge1xyXG4gIGlmICh0aGlzLl9pc0RldmljZU9uKCkpIHtcclxuICAgIHRoaXMuX2lzRGV2aWNlT24oKTtcclxuICAgIGlmICh0eXBlb2YgdG9nZ2xlRGlyZWN0aW9uICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIExvZ2dlci5lcnJvcihcIlBsZWFzZSBwYXNzICduZXh0JyBvciAncHJldmlvdXMnIHZhbHVlIGFzIGEgcGFyYW1ldGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRlbGV0ZSBvbGQgdGltZXJcclxuICAgIHRoaXMuX3N0b3BQbGF5aW5nKCk7XHJcbiAgICAvLyBzZXQgdGltZXIgdmFsdWUgdG8gMCwgZm9yIHN0YXJ0aW5nIHRyYWNrIGZyb20gdGhlIGJlZ2lubmluZ1xyXG4gICAgdGhpcy5fY3VycmVudFRpbWVyVmFsdWUgPSAwO1xyXG4gICAgXHJcbiAgICBcclxuICAgIHN3aXRjaCAodG9nZ2xlRGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJuZXh0XCI6XHJcbiAgICAgICAgdGhpcy5fbmV4dFRyYWNrKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwcmV2aW91c1wiOlxyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVHJhY2soKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXR1cCBuZXcgdGltZXJcclxuICAgIHRoaXMuX3N0YXJ0UGxheWluZygpO1xyXG4gIH1cclxufTtcclxuXHJcblNwZWFrZXIucHJvdG90eXBlLnJld2luZFRyYWNrID0gZnVuY3Rpb24ocmV3aW5kRGlyZWN0aW9uKSB7XHJcbiAgaWYgKHRoaXMuX2lzRGV2aWNlT24oKSkge1xyXG4gICAgdGhpcy5faXNEZXZpY2VPbigpO1xyXG4gICAgLy9yZXdpbmQgb25seSBpZiBkZXZpY2UgcGxheWluZyBub3dcclxuICAgIHRoaXMuX2lzRGV2aWNlSW5QbGF5aW5nTW9kZU5vdygpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHJld2luZERpcmVjdGlvbiAhPT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAocmV3aW5kRGlyZWN0aW9uICE9PSBcImZvcndhcmRcIiAmJiByZXdpbmREaXJlY3Rpb24gIT09IFwiYmFja1wiKVxyXG4gICAgKSB7XHJcbiAgICAgIExvZ2dlci5lcnJvcihcIlBsZWFzZSBwYXNzICdmb3J3YXJkJyBvciAnYmFjaycgc3RyaW5nIHZhbHVlIGFzIGEgcGFyYW1ldGVyXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0dXAgcmFuZG9tIHJld2luZCB0aW1lXHJcbiAgICBjb25zdCByZXdpbmRUaW1lID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDEpICogMTA7XHJcbiAgICBzd2l0Y2ggKHJld2luZERpcmVjdGlvbikge1xyXG4gICAgICBjYXNlIFwiZm9yd2FyZFwiOlxyXG4gICAgICAgIHRoaXMuX3Jld2luZEZvcndhcmQocmV3aW5kVGltZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJiYWNrXCI6XHJcbiAgICAgICAgdGhpcy5fcmV3aW5kQmFjayhyZXdpbmRUaW1lKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5fcmV3aW5kRm9yd2FyZCA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAvLyBpZiBsb3N0IHRpbWUgKyByZXdpbmQgdGltZSBsZXNzIHRoYW4gc29uZyBkdXJhdGlvbiwgc3RhcnQgcGxheWluZyBmcm9tIG5ldyB0aW1lIHBvc2l0aW9uXHJcbiAgaWYgKFxyXG4gICAgdGhpcy5fY3VycmVudFRpbWVyVmFsdWUgKyB0aW1lIDxcclxuICAgIHRoaXMuX3RyYWNrTGlzdFt0aGlzLl9jdXJyZW50VHJhY2tdLmR1cmF0aW9uXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdG9wUGxheWluZygpO1xyXG4gICAgdGhpcy5fc3RhcnRQbGF5aW5nKHRoaXMuX2N1cnJlbnRUaW1lclZhbHVlICsgdGltZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIGxvc3QgdGltZSArIHJld2luZCB0aW1lIG1vcmUgdGhhbiBzb25nIGR1cmF0aW9uLCBzdGFydCBwbGF5aW5nIG5leHQgc29uZ1xyXG4gICAgdGhpcy50b2dnbGVUcmFjayhcIm5leHRcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuU3BlYWtlci5wcm90b3R5cGUuX3Jld2luZEJhY2sgPSBmdW5jdGlvbih0aW1lKSB7XHJcbiAgdGhpcy5fc3RvcFBsYXlpbmcoKTtcclxuXHJcbiAgLy8gaWYgbG9zdCB0aW1lIC0gcmV3aW5kIHRpbWUgbW9yZSB0aGFuIDAsIHN0YXJ0IHBsYXlpbmcgZnJvbSBuZXcgdGltZSBwb3NpdGlvblxyXG4gIGlmICh0aGlzLl9jdXJyZW50VGltZXJWYWx1ZSAtIHRpbWUgPiAwKSB7XHJcbiAgICB0aGlzLl9zdGFydFBsYXlpbmcodGhpcy5fY3VycmVudFRpbWVyVmFsdWUgLSB0aW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgbG9zdCB0aW1lIC0gcmV3aW5kIHRpbWUgbGVzcyB0aGFuIDAsIHN0YXJ0IHBsYXlpbmcgcHJldmlvdXMgc29uZ1xyXG4gICAgdGhpcy50b2dnbGVUcmFjayhcInByZXZpb3VzXCIpO1xyXG4gIH1cclxufTtcclxuXHJcblNwZWFrZXIucHJvdG90eXBlLmluY3JlYXNlVm9sdW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuX2lzRGV2aWNlT24oKSkge1xyXG4gICAgLy8gY2hlY2tzIHRoYXQgdGhlIHZhbHVlIGRvZXMgbm90IGdvIGJleW9uZCB0aGUgcHJlZGVmaW5lZCBsaW1pdHNcclxuICAgIGlmICh0aGlzLl9jdXJyZW50Vm9sdW1lIDwgdGhpcy5fdm9sdW1lTWF4KSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWb2x1bWUrKztcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5TcGVha2VyLnByb3RvdHlwZS5kZWNyZWFzZVZvbHVtZSA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICh0aGlzLl9pc0RldmljZU9uKCkpIHtcclxuICAgIHRoaXMuX2lzRGV2aWNlT24oKTtcclxuXHJcbiAgICAvLyBjaGVja3MgdGhhdCB0aGUgdmFsdWUgZG9lcyBub3QgZ28gYmV5b25kIHRoZSBwcmVkZWZpbmVkIGxpbWl0c1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRWb2x1bWUgPiB0aGlzLl92b2x1bWVNaW4pIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZvbHVtZS0tO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vc2FmZXR5IG1ldGhvZHNcclxuXHJcbi8vY2hlY2sgaXMgZGV2aWNlIHBsYXlpbmcgdHJhY2sgbm93XHJcblNwZWFrZXIucHJvdG90eXBlLl9pc0RldmljZUluUGxheWluZ01vZGVOb3cgPSBmdW5jdGlvbigpIHtcclxuICBpZiAoIXRoaXMuX3BsYXliYWNrU3RhdGUpIHtcclxuICAgIExvZ2dlci53YXJuaW5nKFxyXG4gICAgICBcIlRvZ2dsZSBkZXZpY2UgdG8gcGxheWluZyBtb2RlIGJlZm9yZSBzdGFydGluZyB0aGlzIG9wZXJhdGlvblwiXHJcbiAgICApO1xyXG4gIH1cclxufTsiLCJleHBvcnQgY29uc3QgTG9nZ2VyID0ge1xyXG4gIHdhcm5pbmc6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgIGNvbnNvbGUud2Fybih0ZXh0KTtcclxuICB9LFxyXG4gIGVycm9yOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IodGV4dCk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBEZXZpY2UgfSBmcm9tIFwiLi4vQmFzZURldmljZXMvRGV2aWNlL0RldmljZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vVXRpbGl0aWVzL0xvZ2dlci9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpS2V0dGxlID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIERldmljZS5jYWxsKHRoaXMsIG5hbWUpO1xyXG5cclxuICB0aGlzLl9tb2RlcyA9IFtcclxuICAgIHsgc3RhbmRhcnQ6IDEwMCB9LFxyXG4gICAgeyB0ZWE6IDc4IH0sXHJcbiAgICB7IGNvZmZlZTogODUgfSxcclxuICAgIHsgcG9ycmlkZ2U6IDcyIH0sXHJcbiAgICB7IFwiYmFieSBmb29kXCI6IDcwIH1cclxuICBdO1xyXG4gIHRoaXMuX2N1cnJlbnRNb2RlID0gMDtcclxuICB0aGlzLl9tYXhGdWxsbmVzcyA9IDEwMDA7XHJcbiAgdGhpcy5fbWluRnVsbG5lc3MgPSAxMDA7XHJcbiAgdGhpcy5fY3VycmVudEZ1bGxuZXNzID0gMDtcclxuICB0aGlzLl9jdXJyZW50VGVtcGVyYXR1cmUgPSAyODtcclxufTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEZXZpY2UucHJvdG90eXBlKTtcclxuaUtldHRsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpS2V0dGxlO1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBgXHJcbiR7RGV2aWNlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpfVxyXG5tb2RlOiAke09iamVjdC5rZXlzKHRoaXMuX21vZGVzW3RoaXMuX2N1cnJlbnRNb2RlXSl9O1xyXG5jdXJyZW50RnVsbG5lc3M6ICR7dGhpcy5fY3VycmVudEZ1bGxuZXNzfTtcclxuYDtcclxufTtcclxuaUtldHRsZS5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oKSB7XHJcbiAgRGV2aWNlLnByb3RvdHlwZS5vZmYuY2FsbCh0aGlzKTtcclxuICB0aGlzLl9kZWxldGVUaW1lcigpO1xyXG4gIHRoaXMuX2N1cnJlbnRUZW1wZXJhdHVyZSA9IDI2O1xyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUubmV4dE1vZGUgPSBmdW5jdGlvbigpIHtcclxuICBpZiAodGhpcy5fY3VycmVudE1vZGUgPT09IHRoaXMuX21vZGVzLmxlbmd0aCAtIDEpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRNb2RlID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5fY3VycmVudE1vZGUrKztcclxuICB9XHJcbn07XHJcblxyXG5pS2V0dGxlLnByb3RvdHlwZS5wcmV2aW91c01vZGUgPSBmdW5jdGlvbigpIHtcclxuICBpZiAodGhpcy5fY3VycmVudE1vZGUgPT09IDApIHtcclxuICAgIHRoaXMuX2N1cnJlbnRNb2RlID0gdGhpcy5fbW9kZXMubGVuZ3RoIC0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5fY3VycmVudE1vZGUtLTtcclxuICB9XHJcbn07XHJcblxyXG5pS2V0dGxlLnByb3RvdHlwZS5nZXRDdXJyZW50TW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9tb2Rlc1t0aGlzLl9jdXJyZW50TW9kZV0pO1xyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUuYWRkV2F0ZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIGxldCBuZXdBbW91bnRPZldhdGVyID0gdGhpcy5fY3VycmVudEZ1bGxuZXNzICsgdmFsdWU7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgTG9nZ2VyLmVycm9yKFwiVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgbmV3QW1vdW50T2ZXYXRlciA+PSB0aGlzLl9taW5GdWxsbmVzcyAmJlxyXG4gICAgbmV3QW1vdW50T2ZXYXRlciA8PSB0aGlzLl9tYXhGdWxsbmVzc1xyXG4gICkge1xyXG4gICAgdGhpcy5fY3VycmVudEZ1bGxuZXNzID0gbmV3QW1vdW50T2ZXYXRlcjtcclxuICB9IGVsc2UgaWYgKG5ld0Ftb3VudE9mV2F0ZXIgPCB0aGlzLl9taW5GdWxsbmVzcykge1xyXG4gICAgTG9nZ2VyLndhcm5pbmcoXCJQbGVhc2UsIGFkZCBtb3JlIHdhdGVyXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBMb2dnZXIud2FybmluZyhcIlBsZWFzZSwgcmVkdWNlIHRoZSBhbW91bnQgb2Ygd2F0ZXJcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuaUtldHRsZS5wcm90b3R5cGUuZ2V0Q3VycmVudEZ1bGxuZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX2N1cnJlbnRGdWxsbmVzcztcclxufTtcclxuXHJcbmlLZXR0bGUucHJvdG90eXBlLmJvaWxXYXRlciA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICh0aGlzLl9pc0RldmljZU9uKCkgJiYgdGhpcy5fY3VycmVudEZ1bGxuZXNzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRUZW1wZXJhdHVyZSA+PVxyXG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9tb2Rlc1t0aGlzLl9jdXJyZW50TW9kZV0pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRUZW1wZXJhdHVyZSArPSAyO1xyXG4gICAgICAgICAgdGhpcy5fY3VycmVudEZ1bGxuZXNzLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl9jdXJyZW50VGVtcGVyYXR1cmUpO1xyXG4gICAgICB0aGlzLm9mZigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBTbWFydEhvdXNlIH0gZnJvbSBcIi4vU21hcnRIb3VzZS9TbWFydEhvdXNlXCI7XHJcbmltcG9ydCB7IFNwZWFrZXIgfSBmcm9tIFwiLi9TcGVha2VyL1NwZWFrZXJcIjtcclxuaW1wb3J0IHsgaUtldHRsZSB9IGZyb20gXCIuL2lLZXR0bGUvaUtldHRsZVwiO1xyXG5cclxud2luZG93LlNtYXJ0SG91c2UgPSBTbWFydEhvdXNlO1xyXG53aW5kb3cuU3BlYWtlciA9IFNwZWFrZXI7XHJcbndpbmRvdy5pS2V0dGxlID0gaUtldHRsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==