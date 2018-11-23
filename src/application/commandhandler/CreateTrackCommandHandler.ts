import {CreateTrackCommand} from "../command/CreateTrackCommand";
import {HandleCommand} from "ts-eventsourcing/CommandHandling/HandleCommand";
import {CommandHandler} from "ts-eventsourcing/CommandHandling/CommandHandler";

export class CreateTrackCommandHandler implements CommandHandler {
    public handle(commandArg: CreateTrackCommand) {
        console.log(commandArg);
    }
}
