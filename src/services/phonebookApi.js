import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const phonebookApi = createApi({
  reducerPath: 'contacts',
  // baseQuery: fetchBaseQuery({
  //   // baseUrl: 'https://626febe1f7d739495bdeffa6.mockapi.io',
  //   baseUrl: 'https://connections-api.herokuapp.com',
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = getState().auth.token;
  //     if (token) {
  //       headers.set('Authorization', `Bearer ${token}`);
  //     }
  //     return headers;
  //   },
  // }),

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;

export default phonebookApi;
