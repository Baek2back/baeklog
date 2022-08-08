import "@/styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { clsxm } from "@/lib";
import { wrapper } from "@/store";

interface AppLayoutProps extends React.PropsWithChildren {}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div
      className={clsxm(
        "relative mx-auto my-24 flex h-[768px] w-[512px] flex-col rounded-2xl bg-white shadow-lg"
      )}
    >
      {children}
    </div>
  );
};

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

const WrappedMyApp = wrapper.withRedux(MyApp);

export { WrappedMyApp as default };
