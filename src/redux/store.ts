"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { persistStore, persistReducer } from "redux-persist";
import {
  PERSIST,
  PURGE,
  REHYDRATE,
  REGISTER,
  FLUSH,
  PAUSE,
} from "redux-persist/es/constants";
import storage from "redux-persist/lib/storage";

import counterSlice from "./counter.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"], // only this will be persisted
};

const rootReducer = combineReducers({ counter: counterSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      createStateSyncMiddleware({
        predicate: (action) => {
          const blacklist = [PERSIST, PURGE, REHYDRATE, REGISTER, FLUSH, PAUSE];
          if (typeof action !== "function") {
            if (Array.isArray(blacklist)) {
              return blacklist.indexOf(action.type) < 0;
            }
          }
          return false;
        },
      })
    ) as any,
});

initMessageListener(store);

export const persistor = persistStore(store);

// just exported it as makeStore for the naming convention
export const makeStore = () => store;

// these exports are just intended to pass on the types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
