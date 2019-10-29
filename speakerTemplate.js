class Speaker {
    properties:
        // device play/pause
        #playbackState: Boolean false,

        //volume controls
        #volumeMin: Number 0,
        #volumeMax: Number 10,
        #currentVolume: Number 5,

        //is flash card in device
        #flashCard: Boolean true,

        //track duration timer count
        #timer: Number null,
        #currentTimerValue: Number null,

        // track-list
        #trackList: [Object] [{
            name: String 'Song 1',
            duration: Number 8
        },
        {
            name: String 'Song 2',
            duration: Number 10
        },
        {
            name: String 'Song 3',
            duration: Number 5
        },
        {
            name: String 'Song 4',
            duration: Number 13
        },
        {
            name: String 'Song 5',
            duration: Number 10
        }],

        // track wich playing now
        #currentTrack: Number 0

    methods:
        //constructor
        +Speaker( trackList: [Object], name: String)   

        // turn device to play/pause modes
        +togglePlaybackStatus(): void 
        
        +get PlayPauseState(): Boolean #playbackState

        // log info about current device state
        +info(): String

        // set async time counter
        #startPlaying(): void

        // delete async time counter
        #stopPlaying(): void        

        +nextTrack(): void

        +previousTrack(): void
        
        +rewindForward(): void
        
        +rewindBack(): void 

        +increaseVolume(): void        

        +decreaseVolume(): void   
        
        //safety method
        #isDeviceInPlayingModeNow(): void      
}