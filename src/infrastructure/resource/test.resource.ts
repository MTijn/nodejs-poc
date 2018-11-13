import {Request, Response} from "express";
import {TrackRepository} from "../../application/repository/TrackRepository";
import {TestTrackRepository} from "../repository/TestTrackRepository";
import {CreateTrackCommand} from "../../application/command/CreateTrackCommand";
import {SimpleCommandBus} from "ts-eventsourcing/CommandHandling/SimpleCommandBus";
import {CreateTrackCommandHandler} from "../../application/commandhandler/CreateTrackCommandHandler";
import {CommandBus} from "ts-eventsourcing/CommandHandling/CommandBus";

export class TestResource {
    public trackRepository: TrackRepository;
    private commandBus: CommandBus;

    constructor() {
        this.trackRepository = new TestTrackRepository();
        this.commandBus = new SimpleCommandBus();
    }

    public test (request: Request, response: Response) : Response {
        let trackRepository = new TestTrackRepository();
        return response.json(trackRepository.getTracks());
    }

    public createTrack(request: Request, resonse: Response) : Response {
        var createTrackCommand = new CreateTrackCommand(
            '1234',
            'Test artist',
            '20',
            'Test title'
        );
        this.commandBus.dispatch(createTrackCommand);
        return resonse.status(201).json();
    }
}
