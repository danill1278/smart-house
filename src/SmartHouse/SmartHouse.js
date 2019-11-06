import {Logger} from '../Utilities/Logger/Logger';

const SmartHouse = function(name = "New House") {
  this.__devices = [];
  this.__checkName = function(name) {
    if (typeof name !== "string") {
      Logger.error("Name must be a string");
    }
    const regex = /[\w\d\s]{5,10}/;
    const result = name.match(regex);
    if (result != null) {
      Logger.warning("Name must contain 5-10 characters");
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
    if (value instanceof iKettle || value instanceof Speaker) {
      this.__devices.push(value);
    } else {
      Logger.error("Devices must be objects of iKettle or Speaker");
    }
  };
  this.deleteDeviceById = function(id) {
    let deleteObjIndex = this.__devices.find((device, index) => {
      if (device.getId() === id) {
        return index;
      }
    });
    this.__devices.splice(deleteObjIndex, 1);
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
   
  this.getDeviceById = function(id) {
    return this.__devices.find(device => {
      if (device.getId() === id) {
        return device;
      }
    });
  };
};





export SmartHouse;