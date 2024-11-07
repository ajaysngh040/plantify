import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as the default storage
import authReducer from "../store/auth/authSlice";
import { combineReducers } from "redux";
// import storageSession from "redux-persist/lib/storage/session"; // session storage as an alternative
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";



// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["isAuthenticated", "user"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for `redux-persist`
    }),
});

export const persistor = persistStore(store);

// export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
