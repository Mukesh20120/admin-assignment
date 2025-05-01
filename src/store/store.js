import { configureStore } from "@reduxjs/toolkit";
import articlesApi from "./features/articleApi";
import careerApi from "./features/careerApi";
import userManagementApi from "./features/userManagementApi";
export default configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [userManagementApi.reducerPath]: userManagementApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      articlesApi.middleware,
      careerApi.middleware,
      userManagementApi.middleware
    ),
});
