import { api } from "..";

export const productEndPoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productEndPoint;
