"use client";

import { configureStore, Tuple } from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

import counterSlice from "./counter.slice";

export const makeStore = () => {
  const config = {};

  return configureStore({
    reducer: {
      counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(createStateSyncMiddleware(config) as any),
  });
};

initMessageListener(makeStore as any);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
