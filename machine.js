function Machine(name) {
    if (this._checkNameValidity(name)) {
        this._name = name;
    } else {
        //default name
        this._name = 'default';
    }
    this._state = false;
}

Machine.prototype.getState = function () {
    return this._state;
};

Machine.prototype.getName = function () {
    return this._name;
};

Machine.prototype.setName = function (name) {
    if ( this._checkNameValidity(name)) {
        this._name = name;
    }    
};

Machine.prototype._isDeviceOn = function () {
    if (!this.getState()) throw new Error('Turn on device, please!');
};


Machine.prototype._checkNameValidity = function (name) {
    const regex = /^\w{2,10}/i;
    const result = name.match(regex);
    if (result) {
        this._name = result[0];
        return true;
    } else {
        throw new Error("Name must be a string and contain 5-10 characters");
    }
};

Machine.prototype.on = function () {
    this._state = true;
};

Machine.prototype.off = function () {
    this._state = false;
};


Machine.prototype._deleteTimer = function() {
    clearInterval(this._timer);
};
