import { Device } from "../BaseDevices/Device/Device";
import { Logger } from "../Utilities/Logger/Logger";

export const iKettle = function(name) {
  Device.call(this, name, "iKettle");

  this._modes = [
    { standart: 100 },
    { tea: 78 },
    { coffee: 85 },
    { porridge: 72 },
    { "baby food": 70 }
  ];
  this._currentMode = this._modes[0];
  this._maxFullness = 1000;
  this._minFullness = 100;
  this._currentFullness = 0;
  this._currentTemperature = 20;
};

iKettle.prototype = Object.create(Device.prototype);
iKettle.prototype.constructor = iKettle;

iKettle.prototype.info = function() {
  return `
        ${Device.prototype.info.call(this)}
        mode: ${this._currentMode};
        currentFullness: ${this._currentFullness};
    `;
};

iKettle.prototype.setTemperature = function(value) {
  if (typeof value == "number" && value >= 10 && value <= 70) {
    this._currentTemperature = value;
  } else {
    Logger.warning("Temperature must be in range from 10 to 70C");
  }
};

iKettle.prototype.nextMode = function() {
  let length = this._modes.length - 1;
  if (this._currentMode === this._modes[length]) {
    this._currentMode = this._modes[0];
  } else {
    this._currentMode++;
  }
};

iKettle.prototype.previousMode = function() {
  let length = this._modes.length - 1;
  if (this._currentMode === this._modes[0]) {
    this._currentMode = this._modes[length];
  } else {
    this._currentMode--;
  }
};

iKettle.prototype.getCurrentMode = function() {
  return this._currentMode;
};

iKettle.prototype.addWater = function(value) {
  let newAmountOfWater = this._currentFullness + value;
  if (typeof value !== "number") {
    Logger.error("Value must be a number");
  }
  if (
    newAmountOfWater >= this._minFullness &&
    newAmountOfWater <= this._maxFullness
  ) {
    this._currentFullness = newAmountOfWater;
  } else if (newAmountOfWater < this._minFullness) {
    Logger.warning("Please, add more water");
  } else {
    Logger.warning("Please, reduce the amount of water");
  }
};

iKettle.prototype.getCurrentFullness = function() {
  return this._currentFullness;
};

iKettle.prototype.boilWater = function(temperature) {
  if (this._isDeviceOn() && this._currentFullness) {
    this.setTemperature(temperature);
    return new Promise(resolve => {
      this._timer = setInterval(() => {
        if (this._currentTemperature === this._modes[this._currentMode]) {
          resolve();
          this.off();
          this._deleteTimer();
        } else {
          this._currentTemperature += 2;
          this._currentFullness--;
        }
      }, 1000);
    }).then(() => {
      console.log(this._currentTemperature);
    });
  }
};
