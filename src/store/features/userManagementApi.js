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

const userManagementApi = createApi({
  reducerPath: "userManagementApi",
  baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({
        page = 1,
        limit = 10,
      } = {}) => {
        const params = new URLSearchParams({
          page: String(page),
          limit: String(limit),
        });

        return `/getAllUsers?${params.toString()}`;
      },
      method: "GET",
      providesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/deleteUser/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export default userManagementApi;
export const {
 useGetUsersQuery,
 useUpdateUserMutation,
 useDeleteUserMutation
} = userManagementApi;
