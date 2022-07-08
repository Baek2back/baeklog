import styled from "@emotion/styled";

export const PostView = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`;

export const PostViewHeader = styled.header`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostsViewTitle = styled.h1`
  font-size: 36px;
  width: 100%;
  color: #343a40;
`;

export const PostViewMain = styled.main`
  flex: 1 0 0;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export const PostViewContent = styled.p`
  height: 100%;
`;

export const PostEditPanel = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button<{ variant?: "primary" | "warning" }>`
  border: none;
  padding: 0 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  font-size: 24px;
  height: 36px;
  color: white;
  font-weight: bold;
  background: ${({ variant = "primary" }) =>
    variant === "primary" ? "#38d9a9" : "#ff6b6b"};
`;

export const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const PostEditButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  background: red;

  font-size: 16px;
  background: #38d9a9;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  cursor: pointer;
`;
