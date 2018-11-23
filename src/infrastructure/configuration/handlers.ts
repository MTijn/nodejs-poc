import {CreateTrackCommandHandler} from "../../application/commandhandler/CreateTrackCommandHandler";
import {CommandBus} from "./CommandBus";

export class Handlers {

    public registerHandlers() : void {
        var commandBus = new CommandBus();
        let createTrackHandler = new CreateTrackCommandHandler();
        commandBus.getCommandBus().subscribe(createTrackHandler);
        console.log(commandBus);
    }
}
