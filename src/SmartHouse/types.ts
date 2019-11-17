export interface SmartHouseInterface<T>{
    onAll(): void;
    offAll(): void;
    deleteAllDevices(): void;
    getAllDevicesByModel(model);
    getDeviceByName(name: string);
    deleteDevicesByModel(model);
    getName(): string;
    addDevice(device: T): void;
    deleteDeviceByName(name: string): void;
    getAllDevices();
}
