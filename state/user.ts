import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../helpers/redux';

const urlPath = 'users';

export const usersApi = createApi({
  baseQuery,
  reducerPath: urlPath,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => urlPath,
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: urlPath,
        method: 'POST',
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, updateFields }) => ({
        url: `${urlPath}/${id}`,
        method: 'PUT',
        body: updateFields,
      }),
    }),
    getUserById: builder.query({
      query: (id) => `${urlPath}/${id}`,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
} = usersApi;
