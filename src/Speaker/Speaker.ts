import { Device } from "../BaseDevices/Device/Device";
import { Logger } from "../Utilities/Logger/Logger";
import { trackListItemInterface } from './types';

export class Speaker extends Device {
  private playbackState: boolean;

  //volume controls
  private volumeMin: number;
  private volumeMax: number;
  private currentVolume: number;

  //track duration timer count
  private currentTimerValue: number;

  // track wich playing now
  private currentTrack: number;

  private trackList: Array<trackListItemInterface>

  static defaultTrackList = [
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

  constructor( name: string,  trackList = Speaker.defaultTrackList ) {
    super(name);
    this.playbackState = false;
    this.volumeMin = 0;
    this.volumeMax = 10;
    this.currentVolume = 5;
    this.currentTimerValue = 0;
    this.currentTrack = 0;
    this.trackList = trackList;
  }

  off() {
    if (this.isDeviceOn()) {
      // set device in pause mode
      this.playbackState = false;
      this.currentTimerValue = 0;
      this.currentTrack = 0;
      this.currentVolume = 5;
      
      // turn off device
      super.off();
    }
  };

  // turn device to play/pause modes
  togglePlaybackStatus(): void {
    if (this.isDeviceOn()) {
      // change playing status to oposite
      this.playbackState = !this.playbackState;
      if (this.playbackState) {
        // start playing tracks
        this.startPlaying(this.currentTimerValue);
      } else {
        // stop playing tracks
        this.stopPlaying();
      }
    }
  };

  // log info about current device state
 toString(): string {
  return `
${Device.prototype.toString.call(this)}
volume: ${this.currentVolume},
playing: ${this.playbackState ? "Play" : "Pause"},
currentSong: ${this.trackList[this.currentTrack].name},
songDuration: ${this.trackList[this.currentTrack].duration}s,
currentTime: ${this.currentTimerValue}s
`;
  };

  private stopPlaying(): void {
    if (this.isDeviceOn()) {
      // delete async time counter
      this.deleteTimer();
    }
  };

  private startPlaying(playSongFrom?: number): void {
    if (this.isDeviceOn()) {
      this.isDeviceOn();
      this.isDeviceInPlayingModeNow();
  
      // set time-counter to predefined {playSongFrom} value or start from 0s
      let count = playSongFrom ? playSongFrom : 0;
  
      let tic = function() {
        // if predefined value more than track duration play next song
        if (count >= this.trackList[this.currentTrack].duration) {
          this.toggleTrack("next");
        } else {
          // increase time counter on 1s
          count++;
          // set value to property to achieve that from other methods
          this.currentTimerValue = count;
        }
      };
  
      // set async time counter
      this.timer = setInterval(tic.bind(this), 1000);
    }
  };

  //safety methods
  //check is device playing track now
  private isDeviceInPlayingModeNow():void {
    if (!this.playbackState) {
      Logger.warning(
        "Toggle device to playing mode before starting this operation"
      );
    }
  }
  
  getPlayPauseState(): boolean {
      return this.playbackState;
  };

  private nextTrack() {
    // if there is some more track in track list start next
    if (this.currentTrack < this.trackList.length - 1) {
      this.currentTrack++;
    } else {
      // if track is last in track list start from first track
      this.currentTrack = 0;
    }
  };

  private previousTrack() {
    // if there is some more track in track list start next
    if (this.currentTrack > 0) {
      this.currentTrack--;
    } else {
      // if track is first in track list play last track
      this.currentTrack = this.trackList.length - 1;
    }
  };
  
  toggleTrack = function(toggleDirection: string) {
    if (this.isDeviceOn()) {
      if (toggleDirection !== "next" && toggleDirection !== "previous") {
        Logger.warning("Please pass 'next' or 'previous' value as a parameter");
      }
  
      // delete old timer
      this.stopPlaying();
      // set timer value to 0, for starting track from the beginning
      this.currentTimerValue = 0;
  
      switch (toggleDirection) {
        case "next":
          this.nextTrack();
          break;
        case "previous":
          this.previousTrack();
          break;
      }
  
      // setup new timer
      this.startPlaying();
    }
  }

  rewindTrack(rewindDirection: string) {
    if (this.isDeviceOn()) {
      this.isDeviceOn();
      //rewind only if device playing now
      this.isDeviceInPlayingModeNow();  
      if ( rewindDirection !== "forward" && rewindDirection !== "back" ) {
        Logger.warning(
          "Please pass 'forward' or 'back' string value as a parameter"
        );
      }
      // setup random rewind time
      const rewindTime = <number><unknown>Math.random().toFixed(1) * 10;
      switch (rewindDirection) {
        case "forward":
          this.rewindForward(rewindTime);
          break;
        case "back":
          this.rewindBack(rewindTime);
          break;
      }
    }
  };

  private rewindForward(time: number) {
    // if lost time + rewind time less than song duration, start playing from new time position
    if (
      this.currentTimerValue + time <
      this.trackList[this.currentTrack].duration
    ) {
      this.stopPlaying();
      this.startPlaying(this.currentTimerValue + time);
    } else {
      // if lost time + rewind time more than song duration, start playing next song
      this.toggleTrack("next");
    }
  };

  private rewindBack(time) {
    this.stopPlaying();
  
    // if lost time - rewind time more than 0, start playing from new time position
    if (this.currentTimerValue - time > 0) {
      this.startPlaying(this.currentTimerValue - time);
    } else {
      // if lost time - rewind time less than 0, start playing previous song
      this.toggleTrack("previous");
    }
  };

  increaseVolume() {
    if (this.isDeviceOn()) {
      // checks that the value does not go beyond the predefined limits
      if (this.currentVolume < this.volumeMax) {
        this.currentVolume++;
      }
    }
  };

  decreaseVolume() {
    if (this.isDeviceOn()) {
      this.isDeviceOn();
  
      // checks that the value does not go beyond the predefined limits
      if (this.currentVolume > this.volumeMin) {
        this.currentVolume--;
      }
    }
  };
}