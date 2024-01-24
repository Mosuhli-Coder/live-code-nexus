import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userSlice";
import uiReducer from "./user/uiReducers";
import workspaceRootReducer from "./workspaceRootReducer";

const rootReducer = combineReducers({ user: userReducer, ui: uiReducer });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const workspaceStore = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default workspaceStore;
