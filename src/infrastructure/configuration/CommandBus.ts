import {SimpleCommandBus} from "ts-eventsourcing/CommandHandling/SimpleCommandBus";

export class CommandBus {
    private commandBus : SimpleCommandBus;

    public getCommandBus() : SimpleCommandBus {
        if (this.commandBus == undefined) {
            this.commandBus = new SimpleCommandBus();
        }
        return this.commandBus;
    }
}

export const commandBus = new CommandBus();
