import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1/auth",
  }),
  tagTypes: ["authApi"],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query(body) {
        return {
          url: `/login`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["authApi"],
    }),
  }),
});

export const { useSignInMutation } = authApi;
