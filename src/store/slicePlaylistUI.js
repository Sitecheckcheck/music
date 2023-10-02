// import { createSlice } from '@reduxjs/toolkit';

// const slicePlaylistUI = createSlice({
//   name: 'playlistUI',
//   initialState: {
//     playlistUI: [],
//   },
//   reducers: {
//     playlistUIFunction(state, action) {
//       state.playlistUI = action.payload;
//     },
//   },
// });

// export const { playlistUIFunction } = slicePlaylistUI.actions;
// export default slicePlaylistUI.reducer;

/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPlaylistUI = createAsyncThunk(
  'playlistUI/fetchPlaylistUI',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/all/',
      );

      if (!response.ok) {
        throw new Error('Не удалось загрузить, попробуйте еще');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const slicePlaylistUI = createSlice({
  name: 'playlistUI',
  initialState: {
    playlistUI: [],
    status: null,
    error: null,
  },
  reducers: {
    playlistUIFunction(state, action) {
      state.playlistUI = action.payload;
    },
  },

  extraReducers: {
    [fetchPlaylistUI.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPlaylistUI.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.playlistUI = action.payload;
    },
    [fetchPlaylistUI.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
});

export const { playlistUIFunction } = slicePlaylistUI.actions;
export default slicePlaylistUI.reducer;
