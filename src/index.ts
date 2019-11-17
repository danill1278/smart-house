import  SmartHouse  from "./SmartHouse/SmartHouse";
import { Speaker } from "./Speaker/Speaker";
import { iKettle } from "./iKettle/iKettle";
import { DeviceInterface } from './BaseDevices/Device/types';

declare global {
    interface Window { 
        sh: object;
        Speaker: Function;
        iKettle: Function;
    }
}

window.sh = new SmartHouse<DeviceInterface>('Smart House');
window.Speaker = Speaker;
window.iKettle = iKettle;



