import Logger from "../../Utilities/Logger/Logger";
import NameValidityChecker from '../../shared/NameValidityChecker/NameValidityChecker';
import { DeviceInterface } from './types';

export abstract class Device implements DeviceInterface {
  protected state: boolean;
  protected name: string;
  protected timer: number;

  constructor(name: string) {
    this.state = false;
    if (NameValidityChecker(name)) {
      this.name = name;
    }
  }

  getState(): boolean {
    return this.state;
  };

  getName():string {
    return this.name;
  };

  setName(name: string) {
    if (NameValidityChecker(name)) {
      this.name = name;
    }
  };

  protected isDeviceOn() {
    if (!this.getState()) {
      Logger.error("Turn on device, please!");
    }
    return true;
  };

  on() {
    this.state = true;
  };

  off() {
    this.state = false;
    this.deleteTimer();
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


