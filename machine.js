function Machine(name = "default") {
  if (this._checkNameValidity(name)) {
    this._name = name;
  }
  // device on/off
  this._state = false;
  this._timer = null;
}

Machine.prototype.getState = function() {
  return this._state;
};

Machine.prototype.getName = function() {
  return this._name;
};

Machine.prototype.setName = function(name) {
  if (this._checkNameValidity(name)) {
    this._name = name;
  }
};

Machine.prototype._isDeviceOn = function() {
  if (!this.getState()) {
    throw new Error("Turn on device, please!");
  }
  return true;
};

Machine.prototype._checkNameValidity = function(name) {
  if (typeof name !== "string") {
    throw new Error("Name must be a string");
  }
  const regex = /\w\d\s/;
  const result = name.match(regex);
  if (result) {
    return true;
  } else {
    throw new Error("Name must contain 5-10 characters");
  }
};

Machine.prototype.on = function() {
  this._state = true;
};

Machine.prototype.off = function() {
  this._state = false;
};

Machine.prototype._deleteTimer = function() {
  clearInterval(this._timer);
};

Machine.prototype.info = function() {
  return `
        name: ${this.getName()},
        status: ${this.getState()}`;
};