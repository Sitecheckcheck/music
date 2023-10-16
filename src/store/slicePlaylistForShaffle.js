// /* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const slicePlaylistForShaffle = createSlice({
  name: 'playlistForShaffle',
  initialState: {
    playlistForShaffle: [],
  },
  reducers: {
    playlistForShaffleFunction(state, action) {
      state.playlistForShaffle = action.payload;
    },
  },
});

export const { playlistForShaffleFunction } = slicePlaylistForShaffle.actions;
export default slicePlaylistForShaffle.reducer;
