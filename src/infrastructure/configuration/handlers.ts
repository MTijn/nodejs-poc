import {CommandBus} from "ts-eventsourcing/CommandHandling/CommandBus";
import {CreateTrackCommandHandler} from "../../application/commandhandler/CreateTrackCommandHandler";

export class Handlers {

    public registerHandlers(commandBus: CommandBus) : void {
        let createTrackHandler = new CreateTrackCommandHandler()
        commandBus.subscribe(createTrackHandler);
    }
}
