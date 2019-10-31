var SmartKettle = function(name){
    this.__name = name;
    this.__state = false;
    this.__modes = {
        "standart": 100,
        "tea": 78,
        "coffee": 85,
        "porridge": 72,
        "baby food": 70
    };
    this.__currentMode = "standart";
    this.__maxFullness = 1000;
    this. __minFullness = 100;
    this.__currentFullness = 0;
    this.__currentTemperature = 0;
}

SmartKettle.prototype.getName = function(){
    return this.__name;
}

SmartKettle.prototype.setName = function(value){
    if(typeof value == "string"){
        this.__name = value;
    }
}

SmartKettle.prototype.on = function(){
    this.__state = true;
    console.log("i am on");
}

SmartKettle.prototype.off = function(){
    this.__state = false;
}

SmartKettle.prototype.getState = function(){
    return this.__state;
}

SmartKettle.prototype.__autoOff = function(){
    if(this.__currentTemperature === this.__modes[this.__currentMode]){
        this.__state = false;
        //clearInterval(this.__timer);
    }
}

SmartKettle.prototype.setTemperature = function(value){
    if(typeof value == "number" && value >= 10 && value <= 70) {
        this.__currentTemperature = value;
    }
    else{
        throw new Error("Temperature must be in range from 10 to 50C");
    }
}

SmartKettle.prototype.changeMode = function(value){
    if(this.__state === true && typeof value == "string" && this.__modes.hasOwnProperty(value)){
        this.__currentMode = value;
    }
}

SmartKettle.prototype.getCurrentMode = function(){
    return this.__currentMode;
}

SmartKettle.prototype.addWater = function(value) {
    if(typeof(value) == "number" &&
        (this.__currentFullness + value) >= this.__minFullness &&
        (this.__currentFullness + value) <= this.__maxFullness) {
        this.__currentFullness += value;
    }
    else if((this.__currentFullness + value) < this.__minFullness) {
        throw new Error("Please, add more water");
    }
    else if((this.__currentFullness + value) > this.__maxFullness) {
        throw new Error("Please, reduce the amount of water");
    }
    else {
        throw new Error("Input valid value");
    }
}

SmartKettle.prototype.getCurrentFullness = function() {
    return this.__currentFullness;
}

var myKettle = new SmartKettle("alina");