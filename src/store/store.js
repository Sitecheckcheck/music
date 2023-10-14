import { configureStore } from '@reduxjs/toolkit';
import selectTrackReducer from './sliceSelectTrack';
import userNameReduser from './sliceUserName';
import playlistForShaffleReducer from './slicePlaylistForShaffle';
import { PlaylistApi } from '../services/playlistApi';

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackReducer,
    userName: userNameReduser,
    playlistForShaffle: playlistForShaffleReducer,
    [PlaylistApi.reducerPath]: PlaylistApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PlaylistApi.middleware),
});
