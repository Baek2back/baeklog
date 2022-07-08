import styled from "@emotion/styled";

export const PostsViewTitle = styled.h1`
  font-size: 36px;
  color: #343a40;
`;

export const PostsViewHeader = styled.header`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 36px;
    color: #343a40;
  }
`;

export const PostsViewMain = styled.main`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
