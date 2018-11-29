import {commandBus} from "./CommandBus";
import {CreateTrackCommandHandler} from "../../application/commandhandler/CreateTrackCommandHandler";

export class ConfigureHandlers {
    public configure() {
        commandBus.getCommandBus().subscribe(new CreateTrackCommandHandler());
    }
}
