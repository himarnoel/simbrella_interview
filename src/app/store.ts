import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter";
import { api } from "../services/loansAPI";
import { transactionApi } from "../services/transactionAPI";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, transactionApi.middleware),
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
