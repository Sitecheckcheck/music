import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const SelectionPlaylistApi = createApi({
  reducerPath: 'SelectionPlaylistApi',
  tagTypes: ['SelectPlaylist'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
  }),
  endpoints: (builder) => ({
    getSelectionPlaylist: builder.query({
      query: (id) => `catalog/selection/${id}/`,
    //   providesTags: (result) =>
    //     // console.log(result.items),
    //     result
    //       ? [
    //         ...result.items.map(({ id }) => ({ type: 'SelectPlaylist', id })),
    //         { type: 'SelectPlaylist', id: 'LIST' },
    //       ]
    //       : [{ type: 'SelectPlaylist', id: 'LIST' }],
    }),
    // invalidatesTags: ['SelectPlaylist'],
  }),
});

export const { useGetSelectionPlaylistQuery } = SelectionPlaylistApi;
