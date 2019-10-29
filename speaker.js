function Speaker(name, trackList) {
    if (typeof name === 'string' && name.length > 1) {
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
    this._currentTimerValue = 0;

    if (Array.isArray(trackList)) {
        trackList.forEach(track => {
            if (!('name' in track &&
                    typeof track['name'] === 'string' &&
                    track['name'] &&
                    'duration' in track &&
                    typeof track['duration'] === 'number' &&
                    track['duration'] > 0)) {

                throw new Error(`Invalid input tracklist data`);
            };

            this._trackList = trackList;
        })
    } else {
        this._trackList = [{
                name: 'Song 1',
                duration: 8
            },
            {
                name: 'Song 2',
                duration: 10
            },
            {
                name: 'Song 3',
                duration: 5
            },
            {
                name: 'Song 4',
                duration: 13
            },
            {
                name: 'Song 5',
                duration: 10
            }
        ]
    }

    this._currentTrack = 0;

    // methods:
    this.on = function () {
        this._state = true;

        // check is device has flash card
        if (this._flashCard) {
            this.togglePlaybackStatus();
        }
    }

    this.off = function () {
        this.isDeviceOn();

        // set device in pause mode
        this.togglePlaybackStatus();

        // turn off device
        this._state = false;

    }

    // log info about current device state
    this.info = function () {
        console.log(`
            name: ${this._name},
            status: ${this.getState()},
            volume: ${this._currentVolume},
            playing: ${this.this._playbackState},
            currentSong: ${this._trackList[this._currentTrack].name},
            songDuration: ${this._trackList[this._currentTrack].duration},
            currentTime: ${this._currentTimerValue}
        `);
    }

    this.getName = function () {
        return this._name;
    }

    this.setName = (name) => {
        this._name = name;
    }

    // turn device to play/pause modes
    this.togglePlaybackStatus = function () {
        this.isDeviceOn();

        // change playing status to oposite
        this._playbackState = !this._playbackState;

        if (this._playbackState) {
            // start playing tracks
            this._startPlaying(this._currentTimerValue);
        } else {
            // stop playing tracks
            this._stopPlaying();
        }
    }

    this._stopPlaying = function () {
        this.isDeviceOn();

        // delete async time counter
        clearInterval(this._timer);
    }


    this._startPlaying = function (playSongFrom) {
        this.isDeviceOn();
        this.isDeviceInPlayingModeNow();

        // set time-counter to predefined {playSongFrom} value or start from 0s 
        var count = (typeof playSongFrom === 'number') ? playSongFrom : 0;

        function tic() {
            // if predefined value more than track duration play next song
            if (count >= this._trackList[this._currentTrack].duration) {
                this.nextTrack();
            } else {
                // increase time counter on 1s
                count++;
                // set value to property to achieve that from other methods
                this._currentTimerValue = count;
            }
            // log info on each timer tic
            this.info();
        }

        // set async time counter
        this._timer = setInterval(tic.bind(this), 1000);
    }


    this.nextTrack = function () {
        this.isDeviceOn();

        // delete old timer
        this._stopPlaying();
        // set timer value to 0, for starting track from the beginning
        this._currentTimerValue = 0;

        // if there is some more track in track list start next 
        if (this._currentTrack < this._trackList.length - 1) {
            this._currentTrack++;
        } else {
            // if track is last in track list start from first track
            this._currentTrack = 0;
        }

        // setup new timer
        this._startPlaying();
    }

    this.previousTrack = function () {
        this.isDeviceOn();

        // delete old timer
        this._stopPlaying();
        // set timer value to 0, for starting track from the beginning
        this._currentTimerValue = 0;

        // if there is some more track in track list start next 
        if (this._currentTrack > 0) {
            this._currentTrack--;
        } else {
            // if track is first in track list play last track
            this._currentTrack = this._trackList.length - 1;
        }

        // setup new timer
        this._startPlaying();
    }

    this.rewindForward = function () {
        this.isDeviceOn();
        //rewind only if device playing now
        this.isDeviceInPlayingModeNow();

        // setup random rewind time
        var rewindTime = Math.random().toFixed(1) * 10;

        // if lost time + rewind time less than song duration, start playing from new time position
        if (this._currentTimerValue + rewindTime < this._trackList[this._currentTrack].duration) {
            this._stopPlaying();
            this._startPlaying(this._currentTimerValue + rewindTime);

        } else {
            // if lost time + rewind time more than song duration, start playing next song
            this.nextTrack();
        }
    }



    this.rewindBack = function () {
        this.isDeviceOn();
        //rewind only if device playing now
        this.isDeviceInPlayingModeNow();

        // setup random rewind time
        var rewindTime = Math.random().toFixed(1) * 10;
        this._stopPlaying();


        // if lost time - rewind time more than 0, start playing from new time position
        if (this._currentTimerValue - rewindTime > 0) {
            this._startPlaying(this._currentTimerValue - rewindTime);

        } else {
            // if lost time - rewind time less than 0, start playing previouse song
            this.previousTrack();
        }
    }

    this.increaseVolume = function () {
        this.isDeviceOn();

        // checks that the value does not go beyond the predefined limits
        if (this._currentVolume < this._volumeMax) {
            this._currentVolume++;
        }
    }

    this.decreaseVolume = function () {
        this.isDeviceOn();

        // checks that the value does not go beyond the predefined limits
        if (this._currentVolume > this._volumeMin) {
            this._currentVolume--;
        }
    }

    //safety methods

    this.getState = function () {
        return this._state;
    }

    // check is device on
    this.isDeviceOn = function () {
        if (!this.getState()) throw new Error('Turn on device, please!');
    }

    //check is device playing track now
    this.isDeviceInPlayingModeNow = function () {
        if (!this._playbackState) throw new Error('Toggle device to playing mode before starting this operation');
    }

}

var speaker = new Speaker(null, [{
        name: 'Song 1',
        duration: 8
    },
    {
        name: 'Song 2',
        duration: 12
    }
]);