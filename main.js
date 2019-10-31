const Machine = function(name) {
  if (this._checkNameValidity(name)) {
    this._name = name;
  } else {
    //default name
    this._name = "default";
  }
  this._state = false;
};
Machine.prototype.info = function() {
  return `
        name: ${this._name};
        state: ${this._state};`;
};

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
  const regex = /^[A-z0-9\s]{5,10}/i;
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

const SmartKettle = function(name = "kettle22") {
  Machine.call(this, name);
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

SmartKettle.prototype = Object.create(Machine.prototype);
SmartKettle.prototype.constructor = SmartKettle;

SmartKettle.prototype.info = function() {
  console.log(`
        ${Machine.prototype.info.call(this)}
        mode: ${this.__currentMode};
        currentFullness: ${this.__currentFullness};
    `);
};

SmartKettle.prototype.setTemperature = function(value) {
  if (typeof value == "number" && value >= 10 && value <= 70) {
    this.__currentTemperature = value;
  } else {
    throw new Error("Temperature must be in range from 10 to 70C");
  }
};

SmartKettle.prototype.changeMode = function(value) {
  if (this._isDeviceOn() && typeof value == "string" && value in this.__modes) {
    this.__currentMode = value;
  }
};

SmartKettle.prototype.getCurrentMode = function() {
  return this.__currentMode;
};

SmartKettle.prototype.addWater = function(value) {
  let newAmountOfWater = this.__currentFullness + value;
  if (typeof value !== "number") {
    throw new Error("Input valid value");
  }
  if (
    newAmountOfWater >= this.__minFullness &&
    newAmountOfWater <= this.__maxFullness
  ) {
    this.__currentFullness = newAmountOfWater;
  } else if (newAmountOfWater < this.__minFullness) {
    throw new Error("Please, add more water");
  } else {
    throw new Error("Please, reduce the amount of water");
  }
};

SmartKettle.prototype.getCurrentFullness = function() {
  return this.__currentFullness;
};

SmartKettle.prototype.boilWater = function(temperature) {
  if (this._isDeviceOn() && this.__currentFullness) {
    this.setTemperature(temperature);
    this._timer = setInterval(() => {
      if (this.__currentTemperature === this.__modes[this.__currentMode]) {
        this.off();
        this._deleteTimer();
      } else {
        this.__currentTemperature++;
        this.__currentFullness -= 2;
      }
    }, 1000);
  }
};
