import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../helpers/redux';

const urlPath = 'posts';

export const postsApi = createApi({
  baseQuery,
  reducerPath: urlPath,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => urlPath,
    }),
    createPost: builder.mutation({
      query: (post) => ({
        url: urlPath,
        method: 'POST',
        body: post,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, updateFields }) => ({
        url: `${urlPath}/${id}`,
        method: 'PUT',
        body: updateFields,
      }),
    }),
    getPostById: builder.query({
      query: (id) => `${urlPath}/${id}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetPostByIdQuery,
} = postsApi;
