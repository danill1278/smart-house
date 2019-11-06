import { SmartHouse } from "./SmartHouse/SmartHouse";
import { Speaker } from "./Speaker/Speaker";
import { iKettle } from "./iKettle/iKettle";

window.sh = new SmartHouse("SmarteHouse");

sh.addDevice(new iKettle("alina"));

console.log(sh.onAll());
console.log(sh.getAllDevices());
console.log(sh.getDeviceByName("alina").on());
console.log(sh.getDeviceByName("alina").info());
console.log(sh.getDeviceByName("alina").nextMode());
console.log(sh.getDeviceByName("alina").addWater(200));
console.log(sh.getDeviceByName("alina").boilWater(56));


