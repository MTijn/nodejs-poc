import {Command} from "ts-eventsourcing/CommandHandling/Command";
import {Identity} from "ts-eventsourcing/ValueObject/Identity";

export class CreateTrackCommand implements Command {
    private _identifier: Identity;
    private _artist: string;
    private _duration: string;
    private _title: string;


    constructor(identifier: Identity, artist: string, duration: string, title: string) {
        this._identifier = identifier;
        this._artist = artist;
        this._duration = duration;
        this._title = title;
    }


    get identifier(): Identity {
        return this._identifier;
    }

    get artist(): string {
        return this._artist;
    }

    get duration(): string {
        return this._duration;
    }

    get title(): string {
        return this._title;
    }
}
