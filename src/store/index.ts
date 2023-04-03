import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { historyMiddleware } from "./middlewares/historyMiddleware";
import rootReducer, { AppState } from "./reducers/rootReducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

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
    }).concat([historyMiddleware]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
