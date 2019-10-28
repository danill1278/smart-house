function Speaker (name, trackList) {
    if ( typeof name === 'string' && name.length >= 3) {
        this._name = name;
    } else {
        this._name = 'Jeka Active';
    }

    this._state = false;
    this._playbackState = false;

    this._volumeMin = 0;
    this._volumeMax = 10;
    this._currentVolume = 5;

    this._flashCard = true;

    this._timer = null;
    this._durationTimer = 0;

    if ( Array.isArray(trackList)) {
        this._trackList = trackList;
    } else {
        this._trackList = [{
            name: 'Song 1',
            duration: '8'
        },
        {
            name: 'Song 2',
            duration: '10'
        },
        {
            name: 'Song 3',
            duration: '5'
        }, 
        {
            name: 'Song 4',
            duration: '13'
        },
        {
            name: 'Song 5',
            duration: '10'
        }]
    }
    this._currentTrack = 0;

    // methods:

    this.on = function() {
        this._state = true;

        if ( this._flashCard ) {
            this.togglePlaybackStatus();
        }     
    }

    this.off = function()  {
        this._state = true;
        this.togglePlaybackStatus(false);
    }

    this.info = function() {
        console.log(`
            status: ${this.getStatus()},
            currentSong: ${this._trackList[this._currentTrack].name},
            songDuration: ${this._trackList[this._currentTrack].duration},
            currentTime: ${this._durationTimer}
        `)
    }

    // move to inherited methods
    this.getState = function() {
        return this._state;
    }

    this.getName = function()  {
        return this._name;
    }
    
    this.setName = function(name) {
        this._name = name;
    }
    //////////////

    this.togglePlaybackStatus = function(newPlaybackStatus) {
        if (typeof newPlaybackStatus === 'boolean') {
            this._playbackState = newPlaybackStatus;
        } else {
            this._playbackState = !this._playbackState;
        }
        this._playSong();  
    }
        
    this._playSong = function( playSongFrom ) {
        var count = (typeof playSongFrom === 'number') ? playSongFrom : 0;            

        function tic() {
            if ( count == this._trackList[this._currentTrack].duration ) {                
                this.nextTrack();
            } else {
                this._durationTimer = count;
                count++;        
            }
        }

        this._timer = setInterval( tic.bind(this), 1000);
                
    }
         
    

    this.increaseVolume = function() {
        if ( this._currentVolume < this._volumeMax ) {
            this._currentVolume++;
        }
    }

    this.decreaseVolume = function() {
        if ( this._currentVolume > this._volumeMin ) {
            this._currentVolume--;
        }
    }
        
    this.nextTrack = function() {
        this._durationTimer = 0;
        clearInterval(this._timer);
        if ( this._currentTrack < this._trackList.length - 1 ) {
            this._currentTrack++;                    
        } else {
            this._currentTrack = 0
        }
        this._playSong();
    }
        
    this.previousTrack = function() {
        this._durationTimer = 0;
        clearInterval(this._timer);
        if ( this._currentTrack > 0 ) {
            this._currentTrack--;
        } else {
            this._currentTrack = this._trackList.length - 1;
        }
        this._playSong();
    }

    this.rewindForward = function ( ) { 
        this.togglePlaybackStatus(false);
        var rewindTime = Math.random().toFixed(1) * 1000;

        if (this._durationTimer + rewindTime < this._trackList[_currentTrack].duration ) {
            this._playSong(this._durationTimer + rewindTime);

        } else {
            clearInterval(this._timer);
            this.nextTrack();
        }
        this.togglePlaybackStatus();
    }
        
    this.rewindBack = function () {
        this.togglePlaybackStatus(false);
        var rewindTime = Math.random().toFixed(1) * 1000;

        if (this._durationTimer - rewindTime > 0  ) {
            this._playSong(this._durationTimer - rewindTime);
        } else {
            clearInterval(this._timer)
            this.previousTrack();
        }
        this.togglePlaybackStatus();
    }    
}

var speaker = new Speaker();

console.log(speaker.getName());

setInterval(() => {
    speaker.info();
}, 1000)




