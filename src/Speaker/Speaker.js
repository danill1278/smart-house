import { Device } from '../BaseDevices/Device/Device';
import { Logger } from '../Utilities/Logger/Logger';

export const Speaker = function(name, trackList) {
  Device.call(this, name);

  // device play/pause
  this._playbackState = false;

  //volume controls
  this._volumeMin = 0;
  this._volumeMax = 10;
  this._currentVolume = 5;

  //track duration timer count
  this._currentTimerValue = 0;

  // initializing of track-list
  if (Array.isArray(trackList) && trackList.length) {
    // tracklist passed in constructor
    let isInputTrackListValid = trackList.every(track => {
      if (        
          typeof track.name === "string" &&
          track.name.length &&
          typeof track.duration === "number" &&
          track.duration > 0        
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (!isInputTrackListValid) {
      Logger.warning("Invalid input tracklist data, will be used default tracklist");
    } else {
      this._trackList = trackList;
    }
  } else {
    //default tracklist
    this._trackList = this._defaultTrackList;
  }

  // track wich playing now
  this._currentTrack = 0;
};

Speaker.prototype._defaultTrackList = [
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
// methods:

Speaker.prototype = Object.create(Device.prototype);
Speaker.prototype.constructor = Speaker;

//////////////
Speaker.prototype.on = function() {
  Device.prototype.on.call(this);

  // check is device has flash card
};

Speaker.prototype.off = function() {
  if (this._isDeviceOn()) {
    // set device in pause mode
    this.togglePlaybackStatus(false);
    this._currentTimerValue = 0;
    this._currentTrack = 0;
    this._currentVolume = 5;

    // turn off device
    Device.prototype.off.call(this);
  }
};

// log info about current device state
Speaker.prototype.toString = function() {
  return `
${Device.prototype.toString.call(this)}
volume: ${this._currentVolume},
playing: ${this._playbackState ? 'Play' : 'Pause'},
currentSong: ${this._trackList[this._currentTrack].name},
songDuration: ${this._trackList[this._currentTrack].duration}s,
currentTime: ${this._currentTimerValue}s
`;
};

// turn device to play/pause modes
Speaker.prototype.togglePlaybackStatus = function(status) {
  if (this._isDeviceOn()) {
    if (arguments.length) {
      this._playbackState = status;
    } else {
      // change playing status to oposite
      this._playbackState = !this._playbackState;
    }
    if (this._playbackState) {
      // start playing tracks
      this._startPlaying(this._currentTimerValue);
    } else {
      // stop playing tracks
      this._stopPlaying();
    }
  }
};

Speaker.prototype._stopPlaying = function() {
  if (this._isDeviceOn()) {
    // delete async time counter
    Device.prototype._deleteTimer.call(this);
  }
};

Speaker.prototype._startPlaying = function(playSongFrom) {
  if (this._isDeviceOn()) {
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
      // this.info();
    };

    // set async time counter
    this._timer = setInterval(tic.bind(this), 1000);
  }
};

Speaker.prototype.getPlayPauseState = function() {
  return this._playbackState;
};

Speaker.prototype._nextTrack = function() {
  // if there is some more track in track list start next
  if (this._currentTrack < this._trackList.length - 1) {
    this._currentTrack++;
  } else {
    // if track is last in track list start from first track
    this._currentTrack = 0;
  }
};

Speaker.prototype._previousTrack = function() {
  // if there is some more track in track list start next
  if (this._currentTrack > 0) {
    this._currentTrack--;
  } else {
    // if track is first in track list play last track
    this._currentTrack = this._trackList.length - 1;
  }
};

Speaker.prototype.toggleTrack = function(toggleDirection) {
  if (this._isDeviceOn()) {
    this._isDeviceOn();
    if (typeof toggleDirection !== "string") {
      Logger.error("Please pass 'next' or 'previous' value as a parameter");
    }

    // delete old timer
    this._stopPlaying();
    // set timer value to 0, for starting track from the beginning
    this._currentTimerValue = 0;
    
    
    switch (toggleDirection) {
      case "next":
        this._nextTrack();
        break;
      case "previous":
        this._previousTrack();
        break;
    }

    // setup new timer
    this._startPlaying();
  }
};

Speaker.prototype.rewindTrack = function(rewindDirection) {
  if (this._isDeviceOn()) {
    this._isDeviceOn();
    //rewind only if device playing now
    this._isDeviceInPlayingModeNow();

    if (
      typeof rewindDirection !== "string" ||
      (rewindDirection !== "forward" && rewindDirection !== "back")
    ) {
      Logger.error("Please pass 'forward' or 'back' string value as a parameter");
    }
    // setup random rewind time
    const rewindTime = Math.random().toFixed(1) * 10;
    switch (rewindDirection) {
      case "forward":
        this._rewindForward(rewindTime);
        break;
      case "back":
        this._rewindBack(rewindTime);
        break;
    }
  }
};

Speaker.prototype._rewindForward = function(time) {
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

Speaker.prototype._rewindBack = function(time) {
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
  if (this._isDeviceOn()) {
    // checks that the value does not go beyond the predefined limits
    if (this._currentVolume < this._volumeMax) {
      this._currentVolume++;
    }
  }
};

Speaker.prototype.decreaseVolume = function() {
  if (this._isDeviceOn()) {
    this._isDeviceOn();

    // checks that the value does not go beyond the predefined limits
    if (this._currentVolume > this._volumeMin) {
      this._currentVolume--;
    }
  }
};

//safety methods

//check is device playing track now
Speaker.prototype._isDeviceInPlayingModeNow = function() {
  if (!this._playbackState) {
    Logger.warning(
      "Toggle device to playing mode before starting this operation"
    );
  }
};