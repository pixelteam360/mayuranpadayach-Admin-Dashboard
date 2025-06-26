import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global.type";

export const businessesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allBusinesses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/businesses/admin",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Businesses"],
    }),

    deleteBusiness: builder.mutation({
      query: (id) => ({
        url: `/businesses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Businesses"],
    }),

    bookingList: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Businesses"],
    }),

    createCategory: builder.mutation({
      query: (data) => ({
        url: `/categories`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    allCategory: builder.query({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useAllBusinessesQuery,
  useDeleteBusinessMutation,
  useBookingListQuery,
  useCreateCategoryMutation,
  useAllCategoryQuery,
  useDeleteCategoryMutation
} = businessesApi;
