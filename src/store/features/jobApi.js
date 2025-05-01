import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/getBaseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/v1/admin`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const cleanedToken = token.replace(/^"|"$/g, '');
      headers.set("Authorization", `Bearer ${cleanedToken}`);
    }
    return headers;
  },
});

const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery,
  tagTypes: ["Jobs"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ()=>({
        url: '/allJobsForAdmin',
        method: 'GET'
      }),
      providesTags: ["Jobs"],
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updateJobs/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Jobs"],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/deleteJobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

export default jobsApi;
export const {
 useGetJobsQuery,
 useUpdateJobMutation,
 useDeleteJobMutation
} = jobsApi;
