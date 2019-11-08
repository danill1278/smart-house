import { Device } from "../BaseDevices/Device/Device";
import { Logger } from "../Utilities/Logger/Logger";

export const SmartHouse = function(name) {
  if (this._checkName(name)) {
    this._name = name;
  }
  this._devices = [];
};

SmartHouse.prototype.onAll = function() {
  this._devices.forEach(device => device.on());
};

SmartHouse.prototype.offAll = function() {
  this._devices.forEach(device => device.off());
};

SmartHouse.prototype.deleteAllDevices = function() {
  this.offAll();
  this._devices = [];
};

SmartHouse.prototype.getAllDevicesByModel = function(obj) {
  return this._devices.filter(device => {
    if (device instanceof obj) {
      return true;
    }
    return false;
  });
};

SmartHouse.prototype.getDeviceByName = function(name) {
  if (typeof name === "string" && name.length) {
    let device = this._devices.find(device => {
      if (device.getName() === name) {
        return true;
      }
    });

    if (!device) {
      Logger.warning("There is no device with this name");
    }

    return device;
  } else {
    Logger.error("Please, enter valid device name");
  }
};

SmartHouse.prototype.deleteDevicesByModel = function(obj) {
  const result = this._devices.filter(device => {
    return !(device instanceof obj);
  });
  this._devices = result;
};

SmartHouse.prototype._isNameUnic = function(name) {
  
  const result = this._devices.find(device => {
    if (device.getName() === name) {
      return true;
    }
  });
  
  return !result;
};

SmartHouse.prototype._checkName = function(name) {
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
  } else {
    return true;
  }
};

SmartHouse.prototype.getName = function() {
  return this._name;
};

SmartHouse.prototype.addDevice = function(device) {
  let matchObj = {
    trueInstance: {
      func: (obj) =>  obj instanceof Device,
      error: () =>  {Logger.error("Devices must be objects of iKettle or Speaker");}
    },
    unicOfName: {
      func: (obj) => this._isNameUnic(obj.getName()), 
      error: () => {Logger.error("Device's name must be unic");}
    }
  }
  let rules = Object.keys(matchObj);

  let validStatus = rules.every(rule => {
    if ( matchObj[rule].func(device) ) {
      return true;
    } else {
      if (matchObj[rule].error) {
        matchObj[rule].error();
      }
      return false;
    }    
  })

  if ( validStatus ) {
    this._devices.push(device);
  }
};

SmartHouse.prototype.deleteDeviceByName = function(name) {
  let deleteObjIndex;
  this._devices.find((device, index) => {
    if (device.getName() === name) {
      deleteObjIndex = index;
      return true;
    }
  });
  this._devices.splice(deleteObjIndex, 1);
};

SmartHouse.prototype.getAllDevices = function() {
  return this._devices;
};
