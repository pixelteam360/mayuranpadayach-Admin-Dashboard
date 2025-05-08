import baseApi from "@/redux/api/baseApi";

export const reviewAndPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    reviewReports: builder.query({
      query: () => ({
        url: "/reviews/reports",
        method: "GET",
      }),
      providesTags: ["Review"],
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

export const { useReviewReportsQuery } = reviewAndPostApi;
