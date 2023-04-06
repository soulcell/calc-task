import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import checkTokensMiddleware from "./middlewares/checkTokensMiddleware";
import historyMiddleware from "./middlewares/historyMiddleware";
import rootReducer, { AppState } from "./reducers/rootReducer";

const persistConfig: PersistConfig<AppState> = {
  key: "root",
  storage,
  blacklist: ["calculator"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([checkTokensMiddleware, historyMiddleware]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
