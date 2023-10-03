import { configureStore } from '@reduxjs/toolkit';
import selectTrackReducer from './sliceSelectTrack';
import userNameReduser from './sliceUserName';
import playlistReduser from './slicePlaylist';
import favoritePlaylistReduser from './sliceFavoritePlaylist';

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackReducer,
    userName: userNameReduser,
    playlist: playlistReduser,
    favoritePlaylist: favoritePlaylistReduser,
  },
});
