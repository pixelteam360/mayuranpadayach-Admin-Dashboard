import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global.type";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    overView: builder.query({
      query: () => ({
        url: "/auth/dashboard",
        method: "GET",
      }),
      providesTags: ["OverView"],
    }),

    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/users/all",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["User"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useOverViewQuery, useGetAllUserQuery, useDeleteUserMutation } =
  userApi;
