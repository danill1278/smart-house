class Speaker {
    properties:
        #playbackState: Boolean false,

        #volumeMin: Number 0,
        #volumeMax: Number 10,
        #currentVolume: Number 5,

        #flashCard: Boolean true,

        #timer: Number null,
        #durationTimer: Number null,

        #trackList: [Object] [{
            name: 'Song 1',
            duration: '280'
        },
        {
            name: 'Song 2',
            duration: '315'
        },
        {
            name: 'Song 3',
            duration: '192'
        }, 
        {
            name: 'Song 4',
            duration: '285'
        }, 
        {
            name: 'Song 5',
            duration: '365'
        }],
        #currentTrack: Number 0

    methods:
        +Speaker( name: String, trackList: [Object]),

        +on(): void

        +off(): void        

        +togglePlaybackStatus(Boolean newPlaybackStatus): void        

        +increaseVolume(): void

        +decreaseVolume(): void
        
        +nextTrack(): void
        
        +previousTrack(): void

        +rewindFastForward(): void
        
        +rewindBack(): void 

        #playSong(Number playSongFrom = 0 ): void        
}