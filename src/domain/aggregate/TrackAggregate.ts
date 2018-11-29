import {EventSourcedAggregateRoot} from "ts-eventsourcing/EventSourcing/EventSourcedAggregateRoot";
import {TrackCreated} from "../event/TrackCreated";

export class TrackAggregate extends EventSourcedAggregateRoot {
    private artist : string;
    private duration : string;
    private title : string;

    public createTrack() {
        this.apply(new TrackCreated());
    }
}
