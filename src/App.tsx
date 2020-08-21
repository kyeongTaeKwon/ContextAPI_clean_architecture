import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { ProductsContextProvider } from "./contexts/ProductsContext";
const App: React.FC = () => {
  return (
    //! Provider hell 끔찍하니 basic 완료하면 바로 리팩토링하자!
    //! https://github.com/jamiebuilds/unstated-next/issues/35 <-좋은 레퍼런스 인거 같음.

    <ProductsContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Redirect path="/" to="/products" />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
