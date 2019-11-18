import { Device } from "../BaseDevices/Device/Device";
import Logger from "../Utilities/Logger/Logger";

export class iKettle extends Device {
  private modes: Array<object>;
  private currentMode = 0;
  private maxFullness = 1000;
  private minFullness = 100;
  private currentFullness = 0;
  private currentTemperature = 28;
  constructor(name: string) {
    super(name); 
    this.modes = [
      { standart: 100 },
      { tea: 78 },
      { coffee: 85 },
      { porridge: 72 },
      { "baby food": 70 }
    ];
    this.currentMode = 0;
    this.maxFullness = 1000;
    this.minFullness = 100;
    this.currentFullness = 0;
    this.currentTemperature = 28;
  }

  toString(): string {
      return `
${super.toString()}
mode: ${Object.keys(this.modes[this.currentMode])};
currentFullness: ${this.currentFullness};
`;
  };
  off(): void {
    super.off();    
    this.currentTemperature = 26;
  };
  nextMode(): void {
    if (this.currentMode === this.modes.length - 1) {
      this.currentMode = 0;
    } else {
      this.currentMode++;
    }
  };
  previousMode(): void {
    if (this.currentMode === 0) {
      this.currentMode = this.modes.length - 1;
    } else {
      this.currentMode--;
    }
  };
  getCurrentMode() {
    return Object.keys(this.modes[this.currentMode]);
  };
  addWater(value: number): void {
    let newAmountOfWater = this.currentFullness + value;
    if (typeof value !== "number") {
      Logger.error("Value must be a number");
    }
    if (
      newAmountOfWater >= this.minFullness &&
      newAmountOfWater <= this.maxFullness
    ) {
      this.currentFullness = newAmountOfWater;
    } else if (newAmountOfWater < this.minFullness) {
      Logger.warning("Please, add more water");
    } else {
      Logger.warning("Please, reduce the amount of water");
    }
  };

  getCurrentFullness(): number {
    return this.currentFullness;
  };

  boilWater(): Promise<void> {
    if (this.isDeviceOn() && this.currentFullness) {
      return new Promise(resolve => {
        this.timer = <any>setInterval(() => {
          if (
            this.currentTemperature >=
            Object.values(this.modes[this.currentMode])[0]
          ) {
            resolve();
          } else {
            this.currentTemperature += 2;
            this.currentFullness--;
          }
        }, 1000);
      }).then(() => {
        console.log(this.currentTemperature);
        this.off();
      });
    }
  };
}
