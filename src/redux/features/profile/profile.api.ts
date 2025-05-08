import baseApi from "@/redux/api/baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profiles: builder.query({
      query: () => ({
        url: "/profiles",
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),

    deleteProfiles: builder.mutation({
      query: (id) => ({
        url: `/profiles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Profile"],
    }),

    profilesSingle: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useProfilesQuery, useDeleteProfilesMutation } = profileApi;
