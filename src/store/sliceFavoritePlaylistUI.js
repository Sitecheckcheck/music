/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getToken } from '../internal/api';

export const fetchFavoritePlaylistUI = createAsyncThunk(
  'favoritePlaylistUI/fetchFavoritePlaylistUI',
  async (_, { rejectWithValue }) => {

    const accessToken  = localStorage.getItem('access');
    

    try {
      const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const sliceFavoritePlaylistUI = createSlice({
  name: 'favoritePlaylistUI',
  initialState: {
    favoritePlaylistUI: [],
    status: null,
    error: null,
  },
  reducers: {
    favoritePlaylistUIFunction(state, action) {
      state.favoritePlaylistUI = action.payload;
    },
  },

  extraReducers: {
    [fetchFavoritePlaylistUI.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchFavoritePlaylistUI.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.favoritePlaylistUI = action.payload;
    },
    [fetchFavoritePlaylistUI.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { favoritePlaylistUIFunction } = sliceFavoritePlaylistUI.actions;
export default sliceFavoritePlaylistUI.reducer;
