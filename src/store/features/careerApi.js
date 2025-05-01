import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/getBaseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/v1/admin/Career`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const careerApi = createApi({
  reducerPath: "careerApi",
  baseQuery,
  tagTypes: ["Career"],
  endpoints: (builder) => ({
    getCareer: builder.query({
      query: () => ({
        url: '/allCareer',
        method: 'GET',
      }),
      providesTags: ['Career'],
    }),
    addCareer: builder.mutation({
      query: (newCareer) => ({
        url: "/addCareer",
        method: "POST",
        body: newCareer,
      }),
      invalidatesTags: ["Career"],
    }),
    updateCareer: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updateCareer/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Career"],
    }),
    deleteCareer: builder.mutation({
      query: (id) => ({
        url: `/deleteCareer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Career"],
    }),
  }),
});

export default careerApi;
export const {
 useGetCareerQuery,
 useAddCareerMutation,
 useUpdateCareerMutation,
 useDeleteCareerMutation
} = careerApi;
