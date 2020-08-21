import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { CartContextProvider } from "./contexts/CartContext";
const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Redirect path="/" to="/products" />
            <Redirect path="*" to="/" />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
