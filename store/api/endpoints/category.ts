import { api } from "..";

export const categoryEndPoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/products/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryEndPoint;
