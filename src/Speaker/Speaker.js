import { Device } from '../BaseDevices/Device/Device';


export const Speaker = function(name, trackList) {
  Device.call(this, name, "Speaker");

  // device play/pause
  this._playbackState = false;

  //volume controls
  this._volumeMin = 0;
  this._volumeMax = 10;
  this._currentVolume = 5;

  //is flash card in device
  this._flashCard = true;

  //track duration timer count
  this._currentTimerValue = 0;

  const defaultTrackList = [
    {
      name: "Song 1",
      duration: 8
    },
    {
      name: "Song 2",
      duration: 10
    },
    {
      name: "Song 3",
      duration: 5
    },
    {
      name: "Song 4",
      duration: 13
    },
    {
      name: "Song 5",
      duration: 10
    }
  ];

  // initializing of track-list
  if (Array.isArray(trackList) && trackList.length) {
    // tracklist passed in constructor
    trackList.forEach(track => {
      if (
        !(
          typeof track.name === "string" &&
          track.name.length &&
          typeof track.duration === "number" &&
          track.duration > 0
        )
      ) {
        throw new Error("Invalid input tracklist data");
      }

      this._trackList = trackList;
    });
  } else {
    //default tracklist
    this._trackList = defaultTrackList;
  }

  // track wich playing now
  this._currentTrack = 0;
}

// methods:

Speaker.prototype = Object.create(Device.prototype);
Speaker.prototype.constructor = Speaker;

//////////////
Speaker.prototype.on = function() {
  Device.prototype.on.call(this);

  // check is device has flash card
  if (this._flashCard) {
    this.togglePlaybackStatus();
  }
};

Speaker.prototype.off = function() {
  this._isDeviceOn();

  // set device in pause mode
  this.togglePlaybackStatus();

  // turn off device
  Device.prototype.off.call(this);
};

// log info about current device state
Speaker.prototype.info = function() {
  console.log(`
        ${Device.prototype.info.call(this)}
        volume: ${this._currentVolume},
        playing: ${this._playbackState},
        currentSong: ${this._trackList[this._currentTrack].name},
        songDuration: ${this._trackList[this._currentTrack].duration},
        currentTime: ${this._currentTimerValue}
        `);
};

// turn device to play/pause modes
Speaker.prototype.togglePlaybackStatus = function() {
  this._isDeviceOn();

  // change playing status to oposite
  this._playbackState = !this._playbackState;

  if (this._playbackState) {
    // start playing tracks
    this._startPlaying(this._currentTimerValue);
  } else {
    // stop playing tracks
    this._stopPlaying();
  }
};

Speaker.prototype._stopPlaying = function() {
  this._isDeviceOn();

  // delete async time counter
  Device.prototype._deleteTimer.call(this);
};

Speaker.prototype._startPlaying = function(playSongFrom) {
  this._isDeviceOn();
  this._isDeviceInPlayingModeNow();

  // set time-counter to predefined {playSongFrom} value or start from 0s
  let count = typeof playSongFrom === "number" ? playSongFrom : 0;

  let tic = function() {
    // if predefined value more than track duration play next song
    if (count >= this._trackList[this._currentTrack].duration) {
      this.toggleTrack("next");
    } else {
      // increase time counter on 1s
      count++;
      // set value to property to achieve that from other methods
      this._currentTimerValue = count;
    }
    // log info on each timer tic
    this.info();
  };

  // set async time counter
  this._timer = setInterval(tic.bind(this), 1000);
};

Speaker.prototype.getPlayPauseState = function() {
  return this._playbackState;
};

Speaker.prototype.nextTrack = function() {
  // if there is some more track in track list start next
  if (this._currentTrack < this._trackList.length - 1) {
    this._currentTrack++;
  } else {
    // if track is last in track list start from first track
    this._currentTrack = 0;
  }
};

Speaker.prototype.previousTrack = function() {
  // if there is some more track in track list start next
  if (this._currentTrack > 0) {
    this._currentTrack--;
  } else {
    // if track is first in track list play last track
    this._currentTrack = this._trackList.length - 1;
  }
};

Speaker.prototype.toggleTrack = function(toggleDirection) {
  this._isDeviceOn();
  if (typeof toggleDirection !== "string") {
    throw new Error("Please pass 'next' or 'previous' value as a parameter");
  }

  // delete old timer
  this._stopPlaying();
  // set timer value to 0, for starting track from the beginning
  this._currentTimerValue = 0;

  switch (toggleDirection) {
    case "next":
      this.nextTrack();
      break;
    case "previous":
      this.previousTrack();
      break;
  }

  // setup new timer
  this._startPlaying();
};

Speaker.prototype.rewindTrack = function(rewindDirection) {
  this._isDeviceOn();
  //rewind only if device playing now
  this._isDeviceInPlayingModeNow();

  if (
    typeof rewindDirection !== "string" ||
    (rewindDirection !== "forward" && rewindDirection !== "back")
  ) {
    throw new Error(
      "Please pass 'forward' or 'back' string value as a parameter"
    );
  }

  // setup random rewind time
  const rewindTime = Math.random().toFixed(1) * 10;
  switch (rewindDirection) {
    case "forward":
      this.rewindForward(rewindTime);
      break;
    case "back":
      this.rewindBack(rewindTime);
      break;
  }
};

Speaker.prototype.rewindForward = function(time) {
  // if lost time + rewind time less than song duration, start playing from new time position
  if (
    this._currentTimerValue + time <
    this._trackList[this._currentTrack].duration
  ) {
    this._stopPlaying();
    this._startPlaying(this._currentTimerValue + time);
  } else {
    // if lost time + rewind time more than song duration, start playing next song
    this.toggleTrack("next");
  }
};

Speaker.prototype.rewindBack = function(time) {
  this._stopPlaying();

  // if lost time - rewind time more than 0, start playing from new time position
  if (this._currentTimerValue - time > 0) {
    this._startPlaying(this._currentTimerValue - time);
  } else {
    // if lost time - rewind time less than 0, start playing previous song
    this.toggleTrack("previous");
  }
};

Speaker.prototype.increaseVolume = function() {
  this._isDeviceOn();

  // checks that the value does not go beyond the predefined limits
  if (this._currentVolume < this._volumeMax) {
    this._currentVolume++;
  }
};

Speaker.prototype.decreaseVolume = function() {
  this._isDeviceOn();

  // checks that the value does not go beyond the predefined limits
  if (this._currentVolume > this._volumeMin) {
    this._currentVolume--;
  }
};

//safety methods

//check is device playing track now
Speaker.prototype._isDeviceInPlayingModeNow = function() {
  if (!this._playbackState)
    throw new Error(
      "Toggle device to playing mode before starting this operation"
    );
};

//safety methods end


