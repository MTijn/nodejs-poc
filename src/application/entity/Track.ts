export class Track {
    identifier: string;
    artist: string;
    duration: string;
    title: string;


    constructor(identifier: string, artist: string, duration: string, title: string) {
        this.identifier = identifier;
        this.artist = artist;
        this.duration = duration;
        this.title = title;
    }
}
