import axios from "axios";
import { PostsApi, Configuration } from "@/generated";

const config = new Configuration({
  basePath: "http://localhost:5000"
});

export const axiosInstance = axios.create();

const commonParams = [config, undefined, axiosInstance] as const;

export const postsApi = new PostsApi(...commonParams);
