import { __DEV__ } from "@/shared/utils/assertion";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "@/features/posts";
import { all } from "@redux-saga/core/effects";
import createSagaMiddleware from "@redux-saga/core";
import { postsSaga } from "@/features/posts/remotes/saga";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const initializeStore = () => {
  const rootReducer = combineReducers({
    posts: postsReducer,
    router: routerReducer
  });

  function* rootSaga() {
    yield all([postsSaga()]);
  }

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    devTools: __DEV__,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: false
      })
        .concat(sagaMiddleware)
        .concat(routerMiddleware)
  });

  sagaMiddleware.run(rootSaga);

  return { store };
};

const { store } = initializeStore();

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const history = createReduxHistory(store);

export type { RootState, AppDispatch };
export { store, useAppDispatch, useAppSelector, history };
