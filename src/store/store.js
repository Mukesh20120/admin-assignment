import { configureStore } from "@reduxjs/toolkit";
import articlesApi from "./features/articleApi";
import careerApi from "./features/careerApi";
import userManagementApi from "./features/userManagementApi";
import jobsApi from "./features/jobApi";
export default configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [userManagementApi.reducerPath]: userManagementApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      articlesApi.middleware,
      careerApi.middleware,
      userManagementApi.middleware,
      jobsApi.middleware
    ),
});
