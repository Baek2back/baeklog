import type {
  PostsApiCreateRequest,
  PostsApiFindOneRequest,
  PostsApiRemoveRequest,
  PostsApiUpdateRequest
} from "@/generated/api/posts-api";
import type { Post } from "@/generated";
import { PostsApi } from "@/generated";
import { postsApi } from "@/features/posts/remotes/api";
import { flow, makeObservable, observable } from "mobx";

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

class PostsStore {
  api: PostsApi;
  state: PostsState = {
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

  constructor(postsApi: PostsApi) {
    makeObservable(this, {
      state: observable,
      createPost: flow,
      deletePostById: flow,
      editPostById: flow,
      getAllPosts: flow,
      getPostById: flow
    });
    this.api = postsApi;
  }

  *getAllPosts() {
    this.state.posts.loading = true;
    try {
      const { data } = yield this.api.findAll();
      this.state.posts.data = data;
    } catch (e) {
      this.state.posts.error = e;
    } finally {
      this.state.posts.loading = false;
    }
  }

  *createPost(request: PostsApiCreateRequest, navigate: (to: string) => void) {
    this.state.post.loading = true;
    try {
      const { data } = yield this.api.create(request);
      this.state.post.data = data;
      navigate(this.state.post.data.id);
    } catch (e) {
      this.state.post.error = e;
    } finally {
      this.state.post.loading = false;
    }
  }

  *getPostById(request: PostsApiFindOneRequest) {
    this.state.post.loading = true;
    try {
      const { data } = yield this.api.findOne(request);
      this.state.post.data = data;
    } catch (e) {
      this.state.post.error = e;
    } finally {
      this.state.post.loading = false;
    }
  }

  *deletePostById(
    request: PostsApiRemoveRequest,
    navigate: (to: string) => void
  ) {
    this.state.post.loading = true;
    try {
      yield this.api.remove(request);
      this.state.post.data = {} as Post;
      navigate("/");
    } catch (e) {
      this.state.post.error = e;
    } finally {
      this.state.post.loading = false;
    }
  }

  *editPostById(request: PostsApiUpdateRequest, onSuccess: () => void) {
    this.state.post.loading = true;
    try {
      const { data } = yield this.api.update(request);
      this.state.post.data = data;
      onSuccess();
    } catch (e) {
      this.state.post.error = e;
    } finally {
      this.state.post.loading = false;
    }
  }
}

export default new PostsStore(postsApi);
