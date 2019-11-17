import { Device } from "../BaseDevices/Device/Device";
import { Logger } from "../Utilities/Logger/Logger";
import { regex } from "../shared/constants";
import { DeviceInterface } from '../BaseDevices/Device/types';
import { SmartHouseInterface } from './types';
import * as Collections from 'typescript-collections';


export class SmartHouse<T extends DeviceInterface> implements SmartHouseInterface<DeviceInterface> {
    private name: string;
    private devices;
    constructor(name: string) {
        if (this.checkName(name)) {
            this.name = name;
            this.devices = new Collections.Dictionary<string, T>();
        }
    }

    /////////////////////////////////////////
    private checkName = function(name) {
        if (typeof name !== "string") {
        Logger.warning("Name must be a string");
        return false;
        }
        name = name.trim();
        const result = regex.test(name);
    
        if (!result) {
        Logger.warning("Name must include more than 5 characters");
        return false;
        } else {
        return true;
        }
    };
    //////////////
    onAll() {
        this.devices.forEach( (deviceName, device) => device.on());
    }
    offAll() {
        this.devices.forEach((deviceName, device) => device.off());
    };
    deleteAllDevices() {
        this.offAll();
        this.devices.clear();        
    };

    getAllDevicesByModel( Model ) {
        let resultDevices = [];
        
        this.devices.forEach((deviceName, device) => {
            if (device instanceof Model) {
                resultDevices.push(device);
            }
        });

        return resultDevices;
    };


    getDeviceByName(name: string) {
        if ( name.length ) {
            let device = this.devices.getValue(name);            
            if (!device) {
                Logger.warning("There is no device with this name");
                return false;
            }
            return device;
        } else {
            Logger.warning("Please, enter valid device name");
            return false;
        }
    }

    deleteDevicesByModel = function(Model) {
        this.devices.forEach( (deviceName, device) => {
            if ( device instanceof Model ) {
                this.devices.remove(deviceName);
            }
        });
    };

    private isNameUnique = function(name) {
        return !this.devices.containsKey(name);
    };

    getName() {
        return this.name;
    };

    addDevice(device: T) {
        if ( this.isNameUnique(device.getName()) ) {
            this.devices.setValue(device.getName(), device);
        } else {
            Logger.warning("Device's name must be unique");
        }
    };

    deleteDeviceByName(name: string) {
        this.devices.remove(name);
    } 

    getAllDevices() {
        return [...this.devices.values()];
    }
}

export default SmartHouse;