import {
  call,
  put,
  SagaReturnType,
  takeLatest
} from "@redux-saga/core/effects";
import axios from "axios";
import { createAsyncAction } from "typesafe-actions";

import { Configuration, PostsApi } from "@/generated";
import type { Post } from "@/generated/models";
import type { Head, Merge } from "@/shared/utils/types";

const config = new Configuration({
  basePath: "http://localhost:5000"
});

const axiosInstance = axios.create();

const commonParams = [config, undefined, axiosInstance] as const;

const postsApi = new PostsApi(...commonParams);

export const CREATE_POST = {
  REQUEST: "CREATE_POST_REQUEST",
  SUCCESS: "CREATE_POST_SUCCESS",
  FAILURE: "CREATE_POST_FAILURE"
} as const;

const createPost = createAsyncAction(
  CREATE_POST.REQUEST,
  CREATE_POST.SUCCESS,
  CREATE_POST.FAILURE
)<
  Merge<
    Head<Parameters<typeof postsApi.create>>,
    { onSuccess: (id: string) => void }
  >,
  Post,
  unknown
>();

function* createPostSaga(action: ReturnType<typeof createPost.request>) {
  const { onSuccess, ...request } = action.payload;
  try {
    const { data }: SagaReturnType<typeof postsApi.create> = yield call(
      [postsApi, postsApi.create],
      request
    );
    yield put(createPost.success(data));
    yield call(onSuccess, data.id);
  } catch (e) {
    yield put(createPost.failure(e));
  }
}

export const GET_ALL_POSTS = {
  REQUEST: "GET_ALL_POSTS_REQUEST",
  SUCCESS: "GET_ALL_POSTS_SUCCESS",
  FAILURE: "GET_ALL_POSTS_FAILURE"
} as const;

const getAllPosts = createAsyncAction(
  GET_ALL_POSTS.REQUEST,
  GET_ALL_POSTS.SUCCESS,
  GET_ALL_POSTS.FAILURE
)<Head<Parameters<typeof postsApi.findAll>>, Post[], unknown>();

function* getAllPostsSaga(action: ReturnType<typeof getAllPosts.request>) {
  try {
    const { data }: SagaReturnType<typeof postsApi.findAll> = yield call(
      [postsApi, postsApi.findAll],
      action.payload
    );
    yield put(getAllPosts.success(data));
  } catch (e) {
    yield put(getAllPosts.failure(e));
  }
}

export const GET_POST_BY_ID = {
  REQUEST: "GET_POST_BY_ID_REQUEST",
  SUCCESS: "GET_POST_BY_ID_SUCCESS",
  FAILURE: "GET_POST_BY_ID_FAILURE"
} as const;

const getPostById = createAsyncAction(
  GET_POST_BY_ID.REQUEST,
  GET_POST_BY_ID.SUCCESS,
  GET_POST_BY_ID.FAILURE
)<Head<Parameters<typeof postsApi.findOne>>, Post, unknown>();

function* getPostByIdSaga(action: ReturnType<typeof getPostById.request>) {
  try {
    const { data }: SagaReturnType<typeof postsApi.findOne> = yield call(
      [postsApi, postsApi.findOne],
      action.payload
    );
    yield put(getPostById.success(data));
  } catch (e) {
    yield put(getPostById.failure(e));
  }
}

export const DELETE_POST_BY_ID = {
  REQUEST: "DELETE_POST_BY_ID_REQUEST",
  SUCCESS: "DELETE_POST_BY_ID_SUCCESS",
  FAILURE: "DELETE_POST_BY_ID_FAILURE"
} as const;

const deletePostById = createAsyncAction(
  DELETE_POST_BY_ID.REQUEST,
  DELETE_POST_BY_ID.SUCCESS,
  DELETE_POST_BY_ID.FAILURE
)<
  Merge<Head<Parameters<typeof postsApi.remove>>, { onSuccess: () => void }>,
  Post,
  unknown
>();

function* deletePostByIdSaga(
  action: ReturnType<typeof deletePostById.request>
) {
  const { onSuccess, ...request } = action.payload;
  try {
    const { data }: SagaReturnType<typeof postsApi.remove> = yield call(
      [postsApi, postsApi.remove],
      request
    );
    yield put(deletePostById.success(data));
    yield call(onSuccess);
  } catch (e) {
    yield put(deletePostById.failure(e));
  }
}

export const EDIT_POST = {
  REQUEST: "EDIT_POST_REQUEST",
  SUCCESS: "EDIT_POST_SUCCESS",
  FAILURE: "EDIT_POST_FAILURE"
} as const;

const editPost = createAsyncAction(
  EDIT_POST.REQUEST,
  EDIT_POST.SUCCESS,
  EDIT_POST.FAILURE
)<
  Merge<Head<Parameters<typeof postsApi.update>>, { onSuccess: () => void }>,
  Post,
  unknown
>();

function* editPostSaga(action: ReturnType<typeof editPost.request>) {
  const { id, updatePostDto, onSuccess } = action.payload;
  try {
    const { data }: SagaReturnType<typeof postsApi.update> = yield call(
      [postsApi, postsApi.update],
      { id, updatePostDto }
    );
    yield put(editPost.success(data));
    yield call(onSuccess);
  } catch (e) {
    yield put(editPost.failure(e));
  }
}

export const postsAsyncActions = {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  deletePostById
};

export function* postsSaga() {
  yield takeLatest(GET_ALL_POSTS.REQUEST, getAllPostsSaga);
  yield takeLatest(GET_POST_BY_ID.REQUEST, getPostByIdSaga);
  yield takeLatest(EDIT_POST.REQUEST, editPostSaga);
  yield takeLatest(DELETE_POST_BY_ID.REQUEST, deletePostByIdSaga);
  yield takeLatest(CREATE_POST.REQUEST, createPostSaga);
}
