import React from "react";
import Route from "./routes/Root";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Route />
      </ThemeProvider>
    </ProductsContextProvider>
  );
};

export default App;
