const Machine =  function(model = "machine") {
  this._model = model;
  this._state = false;

  // creating device id

  const id = Symbol();
  this._timer = null;

  this.getId = function() {
    return id;
  };
}

Machine.prototype.getState = function() {
  return this._state;
};

Machine.prototype.getModel = function() {
  return this._model;
};

Machine.prototype._isDeviceOn = function() {
  if (!this.getState()) {
    throw new Error("Turn on device, please!");
  }
  return true;
};

// Machine.prototype._checkNameValidity = function(name) {
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
        model: ${this.getModel()},
        status: ${this.getState()}`;
};

export default Machine;