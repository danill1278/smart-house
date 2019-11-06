import { SmartHouse } from "./SmartHouse/SmartHouse";
import { Speaker } from "./Speaker/Speaker";
import { iKettle } from "./iKettle/iKettle";

window.sh = new SmartHouse("SmarteHouse");

sh.addDevice(new iKettle("alina"));

console.log(sh.onAll());
console.log(sh.getAllDevices());

sh.getDeviceByName("alina").on();

