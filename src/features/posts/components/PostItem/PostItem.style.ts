import styled from "@emotion/styled";

export const ShowDetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: white;
  display: none;
  border: none;
  padding: 0;

  &:hover {
    color: #ff6b6b;
  }
`;

export const PostItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  &:hover {
    ${ShowDetailButton} {
      display: initial;
    }
  }
`;

export const PostSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PostTitle = styled.h2`
  font-size: 24px;
  color: #495057;
`;

export const PostContent = styled.p`
  font-size: 16px;
`;
