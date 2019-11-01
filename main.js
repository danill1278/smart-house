const logger = {
  warning: function(text) {
    console.warn(text);
  },
  error: function(text) {
    console.error(text);
  }
};
const Machine = function(model = "machine") {
  this._model = model;
  this._state = false;

  // creating device id

  const id = Symbol();
  this._timer = null;

  this.getId = function() {
    return id;
  };
};

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

const SmartKettle = function() {
  Machine.call(this, "kettle22");
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
    return new Promise(resolve => {
      this._timer = setInterval(() => {
        if (this.__currentTemperature === this.__modes[this.__currentMode]) {
          resolve();
          this.off();
          this._deleteTimer();
        } else {
          this.__currentTemperature++;
          this.__currentFullness--;
        }
      }, 1000);
    }).then(() => {
      console.log(this.__currentTemperature);
    });
  }
};
const SmartHouse = function(name = "New House") {
  this.__devices = [];
  this.__checkName = function(name) {
    if (typeof name !== "string") {
      logger.error("Name must be a string");
    }
    const regex = /^[\w\d\s]{5,10}/;
    const result = name.match(regex);
    if (!result) {
      logger.warning("Name must contain 5-10 characters");
    } else {
      return true;
    }
  };
  if (this.__checkName(name)) {
    this.__name = name;
  }

  this.getName = function() {
    return this.__name;
  };
  this.addDevice = function(value) {
    if (value instanceof SmartKettle || value instanceof Speaker) {
      this.__devices.push(value);
    } else {
      logger.error("Devices must be objects of SmartKettle or Speaker");
    }
  };
  this.onAll = function() {
    this.__devices.forEach(device => device.on());
  };
  this.offAll = function() {
    this.__devices.forEach(device => device.off());
  };
  this.getAllDevices = function() {
    return this.__devices;
  };
  this.deleteAllDevices = function() {
    this.__devices = [];
  };
  this.deleteDeviceById = function(id) {
    let deleteObjIndex = this.__devices.find((device, index) => {
      if (device.getId() === id) {
        return index;
      }
    });
    this.__devices.splice(deleteObjIndex, 1);
  };
  this.getDeviceById = function(id) {
    return this.__devices.find(device => {
      if (device.getId() === id) {
        return device;
      }
    });
  };
};


