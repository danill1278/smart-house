const SmartHouse = function(name = "New House") {
  this.__devices = [];
  if (this.__checkName(name)) {
    this.__name = name;
  }
  this.__checkName = function(name) {
    if (typeof name !== "string") {
      logger.error("Name must be a string");
    }
    const regex = /^[\w\d\s]{5,10}$/;
    const result = name.match(regex);
    if (!result) {
      logger.warning("Name must contain 5-10 characters");
    } else {
      return true;
    }
  };
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
    this.__devices.find((device, index) => {
      if (device.getId() === id) {
        this.__devices.splice(index, 1);
      }
    });
  };
  this.getDeviceById = function(id) {
    return this.__devices.find(device => {
      if (device.getId() === id) {
        return device;
      }
    });
  };
}

