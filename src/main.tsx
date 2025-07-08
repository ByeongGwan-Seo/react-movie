import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import { theme } from "./theme.ts";
import GlobalStyle from "./styles/GlobalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
