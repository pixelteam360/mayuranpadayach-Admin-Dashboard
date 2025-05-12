import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global.type";

export const reviewAndPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    reviewReports: builder.query({
      query: () => ({
        url: "/reviews/reports",
        method: "GET",
      }),
      providesTags: ["Review"],
    }),

    deleteReport: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Review"],
    }),

    profileReports: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/profiles/report",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["ProfileReport"],
    }),

    deleteProfile: builder.mutation({
      query: (id) => ({
        url: `/profiles/report/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfileReport"],
    }),
  }),
});

export const { useReviewReportsQuery, useDeleteReportMutation, useProfileReportsQuery, useDeleteProfileMutation } =
  reviewAndPostApi;
