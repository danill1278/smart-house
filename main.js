const logger = {
  warning: function(text) {
    console.warn(text);
  },
  error: function(text) {
    console.error(text);
  }
};
const Machine = function(name = "default") {
  if (this._checkNameValidity(name)) {
    this._name = name;
  }
  this._state = false;
  this._timer = null;
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
    logger.error("Turn on device, please!");
  }
  return true;
};

Machine.prototype._checkNameValidity = function(name) {
  if (typeof name !== "string") {
    logger.error("Name must be a string");
  }
  const regex = /^[\w\d\s]{5,10}$/;
  const result = name.test(regex);
  if (!result) {
    logger.warning("Name must contain 5-10 characters");
  } else {
    return true;
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
    logger.warning("Temperature must be in range from 10 to 70C");
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
    logger.error("Value must be a number");
  }
  if (
    newAmountOfWater >= this.__minFullness &&
    newAmountOfWater <= this.__maxFullness
  ) {
    this.__currentFullness = newAmountOfWater;
  } else if (newAmountOfWater < this.__minFullness) {
    logger.warning("Please, add more water");
  } else {
    logger.warning("Please, reduce the amount of water");
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
        this.__currentFullness--;
      }
    }, 1000);
  }
};

let myKettle = new SmartKettle("adkdlf alakajslksj");
