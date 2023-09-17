import { createSlice } from '@reduxjs/toolkit';

const slicePlaylist = createSlice({
  name: 'playlist',
  initialState: {
    playlist: [],
  },
  reducers: {
    playlistFunction(state, action) {
      state.playlist = action.payload;
    },
  },
});

export const { playlistFunction } = slicePlaylist.actions;
export default slicePlaylist.reducer;