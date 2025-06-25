import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global.type";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    overView: builder.query({
      query: () => ({
        url: "/users/admin-overview",
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

    // getMe: builder.query({
    //   query: () => ({
    //     url: "/users/profile",
    //     method: "GET",
    //   }),
    //   providesTags: ["User"],
    // }),

    // changePassword: builder.mutation({
    //   query: (data) => ({
    //     url: "/auth/change-password",
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
  }),
});

export const { useOverViewQuery, useGetAllUserQuery, useDeleteUserMutation } =
  userApi;
