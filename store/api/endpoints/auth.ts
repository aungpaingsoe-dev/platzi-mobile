import { api } from "..";

const authEndPoint = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInMutation } = authEndPoint;
