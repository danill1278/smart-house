import { Logger } from "../../Utilities/Logger/Logger";
import { regex } from "../../shared/constants";
import { DeviceInterface } from './types';



export abstract class Device implements DeviceInterface {
    protected state: boolean;
    protected name: string;
    protected timer;
    constructor(name: string) {
      this.state = false;
      if (this.checkNameValidity(name)) {
        this.name = name;
      }
    }

    checkNameValidity(name) {
      if (typeof name !== "string") {
        Logger.warning("Name must be a string");
        return false;
      }
      name = name.trim();
      const result = regex.test(name);
      if (!result) {
        Logger.warning("Name must include more than 5 characters");
        return false;
      }
      return true;
    };
    getState() {
      return this.state;
    };
    getName() {
      return this.name;
    };
    setName(name: string) {
      if (this.checkNameValidity(name)) {
        this.name = name;
      }
    };
    protected isDeviceOn() {
      if (!this.getState()) {
        Logger.warning("Turn on device, please!");
        return false;
      }
      return true;
    };
    on() {
      this.state = true;
    };
    off() {
      this.state = false;
    };

    protected deleteTimer() {
      clearInterval(this.timer);
    };

    toString() {
      return `
name: ${this.getName()},
status: ${this.getState()}`;
    };
}
