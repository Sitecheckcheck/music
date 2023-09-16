/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'selectTrack',
  initialState: {
    selectTrack: null,
  },
  reducers: {
    selectTrackFunction(state, action) {
      state.selectTrack = action.payload;
    },
  },
});

export const { selectTrackFunction } = slice.actions;
export default slice.reducer;