import createSagaMiddleware from "@redux-saga/core";
import { all } from "@redux-saga/core/effects";
import type { Store } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { Task } from "redux-saga";

import { postsSaga } from "@/features/posts/store";
import { postsReducer } from "@/features/posts/store";
import { __DEV__ } from "@/shared/utils/assertion";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const combinedReducer = combineReducers({
  posts: postsReducer
});

const rootReducer: typeof combinedReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return combinedReducer(state, action);
  }
};

export default function* rootSaga() {
  yield all([postsSaga()]);
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    devTools: __DEV__,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: false
      }).concat(sagaMiddleware)
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const wrapper = createWrapper(makeStore, { debug: __DEV__ });

export type { AppDispatch, AppStore, RootState };
export { useAppDispatch, useAppSelector, wrapper };
