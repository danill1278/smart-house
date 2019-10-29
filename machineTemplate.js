class Machine {
    properties:
    
        #name: String,
        #state: Boolean false

    methods:

        +Machine( name: String )

        +get state(): Boolean this.#state

        +get name(): String this.#name

        +set name(name: String): void
        
        +on(): void

        +off(): void

        #isDeviceOn(): Boolean

        #checkNameValidity(): Boolean

        #deleteTimer(): void

        #info(): String
}