import {Track} from "../entity/Track";

export interface TrackRepository {
    getTracks(): Array<Track>;
}
