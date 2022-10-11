import { apiSlice } from '../api/baseQuery'

export const cartApi = apiSlice.injectEndpoints({
  tagTypes: ['Carts'],
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getCartItems: builder.query({
      query: () => 'carts',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Cart', id })), 'Cart']
          : ['Cart'],
    }),
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `carts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    changeCount: builder.mutation({
      query: ({ data }) => ({
        url: 'carts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
})

export const {
  useGetCartItemsQuery,
  useDeleteCartItemMutation,
  useChangeCountMutation,
} = cartApi
