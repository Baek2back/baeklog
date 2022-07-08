import { usePostDetail } from "./PostDetail.hook";

interface PostDetailProps {
  content: string;
}

export const PostDetail = ({ content }: PostDetailProps) => {
  usePostDetail();

  return <p>{content}</p>;
};
