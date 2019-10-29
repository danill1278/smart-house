let SmartKettle = function(name){
    if(this.setName(name)){
        this.__name = name;
    }
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

SmartKettle.prototype.getInfo = function(){
    console.log(`
        name: ${this.__name};
        state: ${this.__state};
        mode: ${this.__currentMode};
        currentFullness: ${this.__currentFullness};
    `)

}

SmartKettle.prototype.getName = function(){
    return this.__name;
}

SmartKettle.prototype.setName = function(value){
    const regex = /^\w{5,10}/i,
        result = value.match(regex);
    if(result !== null) {
        this.__name = result[0];
        return true;
    }
    else{
        throw new Error("Name must be a string and contain from 5 to 10 characters");
    }
}

SmartKettle.prototype.on = function(){
    this.__state = true;
    console.log("ON");
}

SmartKettle.prototype.off = function(){
    this.__state = false;
    console.log("OFF");
}

SmartKettle.prototype.getState = function(){
    return this.__state;
}

SmartKettle.prototype.setTemperature = function(value){
    if(typeof value == "number" && value >= 10 && value <= 70) {
        this.__currentTemperature = value;
    }
    else{
        throw new Error("Temperature must be in range from 10 to 70C");
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
    if(typeof(value) == "number"){
        if((this.__currentFullness + value) >= this.__minFullness &&
            (this.__currentFullness + value) <= this.__maxFullness){
            this.__currentFullness += value;
        }
        else if((this.__currentFullness + value) < this.__minFullness) {
            throw new Error("Please, add more water");
        }
        else{
            throw new Error("Please, reduce the amount of water");
        }
    }
    else {
        throw new Error("Input valid value");
    }
}

SmartKettle.prototype.getCurrentFullness = function() {
    return this.__currentFullness;
}

SmartKettle.prototype.boilWater = function (temperature) {
    if (this.__state === true && this.__currentFullness) {
            this.setTemperature(temperature);
            this.__timer = setInterval(() => {
                    if(this.__currentTemperature === this.__modes[this.__currentMode]){
                        this.off();
                        clearInterval(this.__timer);
                    } else {
                    this.__currentTemperature++;
                    }
                }, 1000);
    }
}


let mk =new SmartKettle("alina18181818181818");



