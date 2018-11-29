import {CreateTrackCommand} from "../command/CreateTrackCommand";
import {HandleCommand} from "ts-eventsourcing/CommandHandling/HandleCommand";
import {CommandHandler} from "ts-eventsourcing/CommandHandling/CommandHandler";
import {TrackAggregate} from "../../domain/aggregate/TrackAggregate";

export class CreateTrackCommandHandler implements CommandHandler {
    @HandleCommand
    public handle(commandArg: CreateTrackCommand) {
        var track = new TrackAggregate(commandArg.identifier);
        track.createTrack();
        console.log(track);
    }
}
