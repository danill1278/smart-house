import Logger from "../Utilities/Logger/Logger";
import NameValidityChecker from '../shared/NameValidityChecker/NameValidityChecker';
import { DeviceInterface } from '../BaseDevices/Device/types';
import * as Collections from 'typescript-collections';

export class SmartHouse<T extends DeviceInterface> {
    private name: string;
    private devices: Collections.Dictionary<string, T>;

    constructor(name: string = 'Smart House') {
        if (NameValidityChecker(name)) {
            this.name = name;
            this.devices = new Collections.Dictionary<string, T>();
        }
    };

    onAll(): void {
        this.devices.forEach( (deviceName, device) => device.on());
    };

    offAll(): void {
        this.devices.forEach((deviceName, device) => device.off());
    };

    deleteAllDevices(): void {
        this.offAll();
        this.devices.clear();        
    };

    getAllDevicesByModel( Model: Function ): Array<T> | [] {
        let resultDevices = [];
        
        this.devices.forEach((deviceName, device) => {
            if (device instanceof Model) {
                resultDevices.push(device);
            }
        });

        return resultDevices;
    };

    getDeviceByName(name: string): T | null {
        if ( name.length ) {
            let device = this.devices.getValue(name);            
            if (!device) {
                Logger.warning("There is no device with this name");
                return null;
            }
            return device;
        } else {
            Logger.warning("Please, enter valid device name");
            return null;
        }
    };

    deleteDevicesByModel(Model): void {
        this.devices.forEach( (deviceName, device) => {
            if ( device instanceof Model ) {
                this.devices.remove(deviceName);
            }
        });
    };

    private isNameUnique(name: string): boolean {
        return !this.devices.containsKey(name);
    };

    getName(): string {
        return this.name;
    };

    addDevice(device: T): void {
        if ( this.isNameUnique(device.getName()) ) {
            this.devices.setValue(device.getName(), device);
        } else {
            Logger.warning("Device's name must be unique");
        }
    };

    deleteDeviceByName(name: string): void {
        this.devices.remove(name);
    };

    getAllDevices(): Array<T> | [] {
        return [...this.devices.values()];
    };
}

export default SmartHouse;