import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import networkReducer from "./network";
import notifierReducer from "./notifier";
import organizationReducer from "./organizations";
import layerStylesReducer from "./layerStyles";
import extraLayersReducer from "./extraLayers";

export const store = configureStore({
  reducer: {
    user: userReducer,
    network: networkReducer,
    notifier: notifierReducer,
    organizations: organizationReducer,
    layerStyles: layerStylesReducer,
    extraLayers: extraLayersReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
