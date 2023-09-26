import { configureStore } from '@reduxjs/toolkit';
import selectTrackReducer from './sliceSelectTrack';
import userNameReduser from './sliceUserName';
import playlistReduser from './slicePlaylist';
import playlistUIReduser from './slicePlaylistUI';

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackReducer,
    userName: userNameReduser,
    playlist: playlistReduser,
    playlistUI: playlistUIReduser,
  },
});
