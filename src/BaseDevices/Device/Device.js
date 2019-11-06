import {Logger} from '../../Utilities/Logger/Logger';

export const Device = function(name, model = "device") {
  this._model = model;
  this._state = false;
  if (this._checkNameValidity(name)) {
    this._name = name;
  }
};

Device.prototype.getState = function() {
  return this._state;
};
Device.prototype.getName = function() {
  return this._name;
};
Device.prototype.setName = function(name) {
  if (this._checkNameValidity(name)) {
    this._name = name;
  }
};

Device.prototype.getModel = function() {
  return this._model;
};

Device.prototype._isDeviceOn = function() {
  if (!this.getState()) {
    throw new Error("Turn on device, please!");
  }
  return true;
};

Device.prototype._checkNameValidity = function(name) {
  if (typeof name !== "string") {
    Logger.error("Name must be a string");
    return false;
  }
  name = name.trim();
  const regex = /[\w\d\s]{5,10}/;
  const result = regex.test(name);
  if (!result) {
    Logger.error("Name must include more than 5 characters");
    return false;
  }
  return true;
};

Device.prototype.on = function() {
  this._state = true;
};

Device.prototype.off = function() {
  this._state = false;
};

Device.prototype._deleteTimer = function() {
  clearInterval(this._timer);
};

Device.prototype.info = function() {
  return `
        model: ${this.getModel()},
        name: ${this.getName()},
        status: ${this.getState()}`;
};
