import { ThemeProvider } from "@emotion/react";
import { AppRoutes } from "./routes";
import { Provider as ReduxStoreProvider } from "react-redux";
import { store } from "@/store";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReduxStoreProvider store={store}>
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </ReduxStoreProvider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
