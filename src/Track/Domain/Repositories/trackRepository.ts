import { Track } from "../../../Track/Domain/Entities/track";

export interface TrackRepository {
    getTrackById(id: string): Promise<Track>;
    getTracksByName(name: string): Promise<Track>
    getTracksByArtist(artist: string): Promise<Track>
    createTrack(track: Track): Promise<Track>;
    updateTrack(track: Track): Promise<Track>
    deleteTrack(track: Track): Promise<void>
}