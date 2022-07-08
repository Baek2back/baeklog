import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

export const CSSReset = () => (
  <Global
    styles={css`
      ${emotionReset}

      *,
      *::after,
      *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }

      body {
        background: #e9ecef;
      }
    `}
  />
);

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <CSSReset />
      {children}
    </>
  );
};
