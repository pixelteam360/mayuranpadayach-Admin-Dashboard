import baseApi from "@/redux/api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),

    getMe: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery, useChangePasswordMutation } =
  authApi;
