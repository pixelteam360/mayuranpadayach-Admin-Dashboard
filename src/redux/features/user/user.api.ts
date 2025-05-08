import baseApi from "@/redux/api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    overView: builder.query({
      query: () => ({
        url: "/users/admin-overview",
        method: "GET",
      }),
      providesTags: ["OverView"],
    }),

    // login: builder.mutation({
    //   query: (credentials) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: credentials,
    //   }),
    //   invalidatesTags: ["User"],
    // }),

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

export const { useOverViewQuery } = userApi;
