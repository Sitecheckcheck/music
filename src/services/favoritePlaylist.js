import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { baseURL } from '../api';

export const FavoritePlaylistApi = createApi({
  reducerPath: 'FavoritePlaylistApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers) => {
      
      const token = localStorage.getItem('access');
      headers.set('authorization', `Bearer ${token}`);
      return headers
    },
  }),
  endpoints: (builder) => ({
    
    getFavoritePlaylist: builder.query({
      query: () => '/catalog/track/favorite/all/',
    }),
  }),
});

export const { useGetFavoritePlaylistQuery } = FavoritePlaylistApi;

// async (_, { rejectWithValue }) => {
//   const accessToken = localStorage.getItem('access');

//   try {
//     let response = await fetch(`${baseURL}/catalog/track/favorite/all/`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     if (!response.ok) {
//       if (response.status === 401) {
//         const refteshToken = localStorage.getItem('refresh');
//         const token = await refreshingToken(refteshToken);

//         localStorage.setItem('access', token.access);

//         const access = localStorage.getItem('access');

//         response = await fetch(
//           'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
//           {
//             method: 'GET',
//             headers: {
//               Authorization: `Bearer ${access}`,
//             },
//           },
//         );

//         const data = await response.json();
//         return data;
//       }

//       throw new Error('Ошибка сервера');

//     } else {
//       const data = await response.json();
//       return data;
//     }
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// },
