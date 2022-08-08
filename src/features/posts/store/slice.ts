import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Post } from "@/generated/models";
import { RootState } from "@/store";

import { postsAsyncActions } from "./saga";

type PostsState = {
  posts: {
    loading: boolean;
    data: Post[];
    error: any;
  };
  post: {
    loading: boolean;
    data: Post;
    error: any;
  };
};

const initialState: PostsState = {
  posts: {
    loading: false,
    data: [],
    error: null
  },
  post: {
    loading: false,
    data: {} as Post,
    error: null
  }
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPostsState: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(`${postsAsyncActions.getAllPosts.request}`, (state) => {
        state.posts.loading = true;
      })
      .addCase(
        `${postsAsyncActions.getAllPosts.success}`,
        (state, action: PayloadAction<Post[]>) => {
          state.posts.loading = false;
          state.posts.data = action.payload;
        }
      )
      .addCase(
        `${postsAsyncActions.getAllPosts.failure}`,
        (state, action: PayloadAction<any>) => {
          state.posts.loading = false;
          state.posts.data = [];
          state.posts.error = "error";
        }
      )
      .addCase(`${postsAsyncActions.getPostById.request}`, (state) => {
        state.post.loading = true;
      })
      .addCase(
        `${postsAsyncActions.getPostById.success}`,
        (state, action: PayloadAction<Post>) => {
          state.post.loading = false;
          state.post.data = action.payload;
        }
      )
      .addCase(
        `${postsAsyncActions.getPostById.failure}`,
        (state, action: PayloadAction<any>) => {
          state.post.loading = false;
          state.post.data = {} as Post;
          state.post.error = "error";
        }
      )
      .addCase(`${postsAsyncActions.createPost.request}`, (state) => {
        state.post.loading = true;
      })
      .addCase(
        `${postsAsyncActions.createPost.success}`,
        (state, action: PayloadAction<Post>) => {
          state.post.loading = false;
          state.post.data = action.payload;
        }
      )
      .addCase(
        `${postsAsyncActions.createPost.failure}`,
        (state, action: PayloadAction<any>) => {
          state.post.loading = false;
          state.post.error = action.payload;
        }
      )
      .addCase(`${postsAsyncActions.editPost.request}`, (state) => {
        state.post.loading = true;
      })
      .addCase(
        `${postsAsyncActions.editPost.success}`,
        (state, action: PayloadAction<Post>) => {
          state.post.loading = false;
          state.post.data = action.payload;
        }
      )
      .addCase(
        `${postsAsyncActions.editPost.failure}`,
        (state, action: PayloadAction<any>) => {
          state.post.loading = false;
          state.post.error = action.payload;
        }
      )
      .addCase(`${postsAsyncActions.deletePostById.request}`, (state) => {
        state.post.loading = true;
      })
      .addCase(
        `${postsAsyncActions.deletePostById.success}`,
        (state, action: PayloadAction<Post>) => {
          state.post.loading = false;
          state.post.data = {} as Post;
        }
      )
      .addCase(
        `${postsAsyncActions.deletePostById.failure}`,
        (state, action: PayloadAction<any>) => {
          state.post.loading = false;
          state.post.error = action.payload;
        }
      );
  }
});

const postsSelector = (state: RootState) => state.posts.posts;
const postSelector = (state: RootState) => state.posts.post;

const postsActions = postsSlice.actions;
const postsReducer = postsSlice.reducer;

export { postsActions, postSelector, postsReducer, postsSelector };
