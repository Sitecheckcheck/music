/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { refreshingToken } from '../internal/api';

export const fetchFavoritePlaylist = createAsyncThunk(
  'favoritePlaylist/fetchFavoritePlaylist',
  async (_, { rejectWithValue }) => {

    const accessToken = localStorage.getItem('access');
    
    try {
      const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/', {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        if(response.status === 401) {
          const refteshToken = localStorage.getItem('refresh');
          const token = await refreshingToken(refteshToken)

          localStorage.setItem('access', token.access);
          window.location.reload();
        } else {
          throw new Error('Ошибка сервера');
        }  
      }
      
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const sliceFavoritePlaylist = createSlice({
  name: 'favoritePlaylist',
  initialState: {
    favoritePlaylist: [],
    status: null,
    error: null,
  },
  reducers: {
    favoritePlaylistFunction(state, action) {
      state.favoritePlaylist = action.payload;
    },
  },

  extraReducers: {
    [fetchFavoritePlaylist.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchFavoritePlaylist.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.favoritePlaylist = action.payload;
    },
    [fetchFavoritePlaylist.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { favoritePlaylistFunction } = sliceFavoritePlaylist.actions;
export default sliceFavoritePlaylist.reducer;
