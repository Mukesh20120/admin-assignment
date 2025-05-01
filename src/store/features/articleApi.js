import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/getBaseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/v1/admin/Article`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery,
  tagTypes: ["Articles"],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: ({
        search = "",
        fromDate = "",
        toDate = "",
        page = 1,
        limit = 10,
      } = {}) => {
        const params = new URLSearchParams({
          search,
          fromDate,
          toDate,
          page: String(page),
          limit: String(limit),
        });

        return `/getArticle?${params.toString()}`;
      },
      method: "GET",
      providesTags: ["Articles"],
    }),
    addArticle: builder.mutation({
      query: (newArticle) => ({
        url: "/createArticle",
        method: "POST",
        body: newArticle,
      }),
      invalidatesTags: ["Articles"],
    }),
    updateArticle: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updateArticle/${id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Articles"],
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `/deleteArticle/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Articles"],
    }),
  }),
});

export default articlesApi;
export const {
  useGetArticlesQuery,
  useAddArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articlesApi;
