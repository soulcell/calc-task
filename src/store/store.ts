import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { intermediateValueMiddleware } from "./middlewares/intermediateValueMiddleware";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(intermediateValueMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
