import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CircleButton = styled.button<{ isCreateStatus: boolean }>`
  background: #38d9a9;

  &:hover {
    background: #63e6be;
  }

  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;

  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  transition: 0.125s all ease-in;

  ${({ isCreateStatus }) =>
    isCreateStatus &&
    css`
      background: #ff6b6b;

      &:hover {
        background: #ff8787;
      }

      &:active {
        background: #fa5252;
      }

      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
