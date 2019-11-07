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
  this._currentMode = 0;
  this._maxFullness = 1000;
  this._minFullness = 100;
  this._currentFullness = 0;
  this._currentTemperature = 28;
};

iKettle.prototype = Object.create(Device.prototype);
iKettle.prototype.constructor = iKettle;

iKettle.prototype.info = function() {
  return `
        ${Device.prototype.info.call(this)}
        mode: ${Object.keys(this._modes[this._currentMode])};
        currentFullness: ${this._currentFullness};
    `;
};
iKettle.prototype.off = function() {
  Device.prototype.off.call(this);
  this._deleteTimer();
};

iKettle.prototype.nextMode = function() {
  if (this._currentMode === this._modes.length - 1) {
    this._currentMode = 0;
  } else {
    this._currentMode++;
  }
};

iKettle.prototype.previousMode = function() {
  if (this._currentMode === 0) {
    this._currentMode = this._modes.length - 1;
  } else {
    this._currentMode--;
  }
};

iKettle.prototype.getCurrentMode = function() {
  return Object.keys(this._modes[this._currentMode]);
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

iKettle.prototype.boilWater = function() {
  if (this._isDeviceOn() && this._currentFullness) {
    return new Promise(resolve => {
      this._timer = setInterval(() => {
        if (
          this._currentTemperature >=
          Object.values(this._modes[this._currentMode])
        ) {
          resolve();
          this.off();
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
