import { configureStore } from '@reduxjs/toolkit';
import selectTrackReducer from './sliceSelectTrack';
import userNameReduser from './sliceUserName';
import playlistReduser from './slicePlaylist';
// import playlistUIReduser from './slicePlaylistUI';
import favoritePlaylistReduser from './sliceFavoritePlaylist';
// import favoritePlaylistUIReduser from './sliceFavoritePlaylistUI';

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackReducer,
    userName: userNameReduser,
    playlist: playlistReduser,
    // playlistUI: playlistUIReduser,
    favoritePlaylist: favoritePlaylistReduser,
    // favoritePlaylistUI: favoritePlaylistUIReduser,
  },
});
