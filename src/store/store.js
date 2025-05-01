import { configureStore } from "@reduxjs/toolkit";
import articlesApi from "./features/articleApi";
import careerApi from "./features/careerApi";
export default configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware,careerApi.middleware),
});
