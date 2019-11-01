const SmartHouse = function(name = "New House") {
    this.devices = [];
    if (this.checkName(name)) {
        this.name = name;
    }
    this.checkName = function (name) {
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
    this.addDevice = function (value) {
        if(value instanceof SmartKettle || value instanceof Speaker){
            this.devices.push(value);
        }
        else{
            logger.error("Devices must be objects of SmartKettle or Speaker");
        }
    };
    this.onAll = function() {
        this.devices.forEach(device => device.on());
    };
    this.offAll = function() {
        this.devices.forEach(device => device.off());
    };
    this.getDeviceByName = function
};