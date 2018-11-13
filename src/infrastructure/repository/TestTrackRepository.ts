import {TrackRepository} from "../../application/repository/TrackRepository";
import {Track} from "../../application/entity/Track";

export class TestTrackRepository implements TrackRepository {
    getTracks(): Array<Track> {
        let track: Track = new Track(
            '1234',
            'test artist',
            '1234',
            'test title'
        );

        return [track];
    }
}
