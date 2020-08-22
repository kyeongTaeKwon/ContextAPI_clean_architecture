import React from "react";
import Route from "./routes/Root";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
const App: React.FC = () => {
  return (
    //! Provider hell 끔찍하니 basic 완료하면 바로 리팩토링하자!
    //! https://github.com/jamiebuilds/unstated-next/issues/35 <-좋은 레퍼런스 인거 같음.

    <ProductsContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Route />
      </ThemeProvider>
    </ProductsContextProvider>
  );
};

export default App;
