import './iKettle.css';

import Machine from '../BaseDevices/Machine/Machine';
import Logger from '../Utilities/Logger/Logger';


const iKettle = function() {
  Machine.call(this, "kettle22");
  
  this._modes = {
    standart: 100,
    tea: 78,
    coffee: 85,
    porridge: 72,
    "baby food": 70
  };
  this._currentMode = "standart";
  this._maxFullness = 1000;
  this._minFullness = 100;
  this._currentFullness = 0;
  this._currentTemperature = 0;
};

iKettle.prototype = Object.create(Machine.prototype);
iKettle.prototype.constructor = iKettle;

iKettle.prototype.info = function() {
  console.log(`
        ${Machine.prototype.info.call(this)}
        mode: ${this._currentMode};
        currentFullness: ${this._currentFullness};
    `);
};

iKettle.prototype.setTemperature = function(value) {
  if (typeof value == "number" && value >= 10 && value <= 70) {
    this._currentTemperature = value;
  } else {
    Logger.warning("Temperature must be in range from 10 to 70C");
  }
};

iKettle.prototype.changeMode = function(value) {
  if (this._isDeviceOn() && typeof value == "string" && value in this._modes) {
    this._currentMode = value;
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
          this._currentTemperature++;
          this._currentFullness--;
        }
      }, 1000);
    }).then(() => {
      console.log(this._currentTemperature);
    });
  }
};

export default iKettle;