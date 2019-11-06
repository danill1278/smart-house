import Popup from '../Utilities/Popup/Popup';
import Logger from '../Utilities/Logger/Logger';
import BaseLayout from '../Layout/BaseLoyut';
import DeviceControlPanel from '../Layout/DeviceContolPanel';
import DeviceMenuItem from '../Layout/DevicesMenuItem';
import DomElementCreator from '../Utilities/DomElementCreator';


const SmartHouse = function() {
  this._devices = [];
  this._activeDevice = null; 
  this.suportedDevices = [];
  this._showInfoTimer = null;

  //methods  

  this._onAll = function() {
    this._devices.forEach(device => device.on());
  };

  this._offAll = function() {
    this._devices.forEach(device => device.off());
  };

  this._deleteAllDevices = function() {

    let flag = true;
    let counter = 0;
    while (flag) {
      if (this._devices.length ) {
        this._deleteDeviceById(this._devices[counter]);        
      } else {
        flag = false;
      }
    }
  };

  this._deleteDeviceById = function(obj) {   
    if ( obj.getState() ) {
      obj.off();
    }

    let deviceToDeleteIndex = null;
    this._devices.find( (device, i) => {
      if ( device.getId() === obj.getId()) {
        deviceToDeleteIndex = i;
        return true;
      }
    });

    // delete device from device menu
    let devices = document.querySelectorAll('.device-card');   
    
    devices[deviceToDeleteIndex].parentNode.removeChild(devices[deviceToDeleteIndex]);    

    //delete device from control pannel if device is active now 

    let indexItemToHiglightInMenu = null;
    if ( this._activeDevice.getId() === obj.getId() ) {
        document.querySelector('.control-panel__options--type--single-device-options').innerHTML = '';        
        
        if( deviceToDeleteIndex  === this._devices.length - 1) {
          this._activeDevice = this._devices[0];
          indexItemToHiglightInMenu = 0;
        } else {
          this._activeDevice = this._devices[deviceToDeleteIndex + 1];
          indexItemToHiglightInMenu = deviceToDeleteIndex;      
                      
        }
        this._devices.splice(deviceToDeleteIndex, 1);
        if (this._devices.length) {
          console.log(indexItemToHiglightInMenu);
          
          this._highlightActiveDeviceInMenu(
            document.querySelector('.device-menu').children[indexItemToHiglightInMenu]
          );          
          
          DeviceControlPanel(this._activeDevice);
          this._showInfo();
          // render to view
        }    
    } else {
      this._devices.splice(deviceToDeleteIndex, 1); 
    }
  };

  this._addDevice = function(obj) {
    //prevent random delete
    this._deleteButtonActive = false;
        // listen state changes in device object
        obj.getOuterStateListener(this._deviceStateListener.bind(this));

        this._devices.push(obj);
        this._activeDevice = obj;
        
        // this._renderDeviceToView(obj);

        //render device control panel
        DeviceControlPanel(obj);

        //add device to menu
        this._addItemToMenuList(obj);   
  };

  this._renderDeviceAddingPopup = function() {
    
    let content = DomElementCreator('div', 'popup__content');
    let optionsList = DomElementCreator('ul', 'available-devices-list');
    let btnHolder = DomElementCreator('div', 'btn-holder');
    let btn = DomElementCreator('button','btn', 'btn--success');
    btnHolder.appendChild(btn);
    btn.value = 'Add device';
    btn.innerHTML = 'Add device';
    btn.disabled = true;
    let selectedItem = {};    

    // create device adding popup item
    this.suportedDevices.forEach( devicesType => {

       let device = DomElementCreator('li', 'available-devices-list__item');
       
      

       device.onclick = (event) => {

        //remove active options
          [...document.querySelectorAll('.available-devices-list__item')].forEach(device => {            
            device.classList.remove('available-devices-list__item--selected')
          });

          event.currentTarget.classList.add('available-devices-list__item--selected');
          selectedItem.type = devicesType;  
          
          btn.disabled = false;
       };
       
       // get device brief description from device class
       device.innerHTML = devicesType.deviceDescription();
       optionsList.appendChild(device);
    });    

    //popup confirm button
    btn.onclick = () => {
      let isNameUnic = true;
      // check device uniqueness
      this._devices.forEach(device => {
        if ( device.getName() === selectedItem.name.trim()) {
          isNameUnic = false;
        }
      });

      if( isNameUnic ) {
        try {
          this._addDevice(new selectedItem.type(selectedItem.name));
        } catch (e) {
          Logger(e);
        }
      } else {
        Logger('Device with those name alredy exist');
      }
    }

     //create input
     let inputHolder = DomElementCreator('label', 'name-input--holder');
     inputHolder.innerHTML = `
      Enter device name: `;
     
     let nameInput = DomElementCreator('input');
     nameInput.placeholder = 'Enter device name';

     nameInput.onchange = (event) => {
      selectedItem.name = event.target.value;
     }
     inputHolder.appendChild(nameInput);
    
    content.appendChild(optionsList);
    content.appendChild(inputHolder)
    content.appendChild(btnHolder);
    Popup(content, 'Available devices');
    
  };

  this._deviceStateListener = ( objId, state ) => {

    let devices = document.querySelectorAll('.device-card');

    [...devices].find( device => {
      if ( device.prototypeObj.getId() === objId) {
        let status = device.querySelector('.device-card__status');
        if (state) {
          status.innerHTML = 'On';
          status.classList.remove('device-card__status--off');
          status.classList.add('device-card__status--on');
        } else {
          status.innerHTML = 'Off';
          status.classList.remove('device-card__status--on');
          status.classList.add('device-card__status--off');
        }    
        
        return true;
      }
    })
  }

  //add device to sidebar menu
  this._addItemToMenuList = function(item) {
    let listItem = DeviceMenuItem(item);
    
    this._highlightActiveDeviceInMenu(listItem);
    this._showInfo();

    listItem.onclick = () => {      

      this._highlightActiveDeviceInMenu(listItem);

      if ( this._deleteButtonActive ) { 
          this._deleteDeviceById(item);
          this._deleteButtonActive = false;
      } else {
        // this._renderDeviceToView(item);
        DeviceControlPanel(item);
        this._activeDevice = item;
        this._showInfo();
      }
    }
    document.querySelector('.device-menu').appendChild(listItem);
  }

  this._initContolerButtonListener = function() {
      let controllerBtns = document.querySelectorAll('.control-panel__link');

      [...controllerBtns].forEach(btn => {
        btn.onclick = (event) => {
          event.preventDefault();

          switch (btn.getAttribute('role')) {
            case 'add-device': 
              this._renderDeviceAddingPopup();
              break;
            case 'delete-device': 
              this._deleteButtonActive = !this._deleteButtonActive;              
              break;
            case 'delete-all-devices': 
              this._deleteAllDevices();
              break;
            case 'on-all-device': 
              this._onAll();
              break;
            case 'off-all-device':
              this._offAll();
          }
        }        
      })
  }

  this._highlightActiveDeviceInMenu = function(item) {
    [...document.querySelectorAll('.device-card')].forEach(menuItem => {
      menuItem.classList.remove('device-card__active')
    });
    item.classList.add('device-card__active');
  }

  this._showInfo = function() {
    let infoNode = document.querySelector('.info .info_list');
    clearInterval(this._showInfoTimer);
    this._showInfoTimer = setInterval(() => {
      infoNode.innerHTML = this._activeDevice.info();
    }, 100);
  }

  let renderBaseLayout = () => {    
      document.body.innerHTML = BaseLayout;  
  }
  //start point

  this.addSuportedDevicesInfo = function(list) {
    this.suportedDevices = list;
  };

  this.init = function() {
    renderBaseLayout();
    this._initContolerButtonListener();
  }


};



export default SmartHouse;