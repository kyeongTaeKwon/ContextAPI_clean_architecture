import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Products from "../components/pages/Products";
import Cart from "../components/pages/Cart";
import Header from "../components/header";
export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Redirect path="/" to="/products" />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};
export default RootRoute;
