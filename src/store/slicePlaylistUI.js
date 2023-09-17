import { createSlice } from '@reduxjs/toolkit';

const slicePlaylistUI = createSlice({
  name: 'playlistUI',
  initialState: {
    playlistUI: [],
  },
  reducers: {
    playlistUIFunction(state, action) {
      state.playlistUI = action.payload;
    },
  },
});

export const { playlistUIFunction } = slicePlaylistUI.actions;
export default slicePlaylistUI.reducer;