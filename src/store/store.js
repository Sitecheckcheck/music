import { configureStore } from '@reduxjs/toolkit';
import selectTrackReducer from './sliceSelectTrack';
import userNameReduser from './sliceUserName';
import playlistReduser from './slicePlaylist';
import favoritePlaylistReduser from './sliceFavoritePlaylist';
// import { FavoritePlaylistApi } from '../services/favoritePlaylist';

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackReducer,
    userName: userNameReduser,
    playlist: playlistReduser,
    favoritePlaylist: favoritePlaylistReduser,
    // [FavoritePlaylistApi.reducerPath]: FavoritePlaylistApi.reducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(FavoritePlaylistApi.middleware),
});
