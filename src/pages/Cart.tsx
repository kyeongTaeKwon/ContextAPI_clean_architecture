import React, { useState, useMemo } from "react";
import {
  useProductsState,
  useProductsDispatch,
} from "../contexts/ProductsContext";
import ProductList from "../components/productList";

const Cart: React.FC = () => {
  const { cart } = useProductsState();
  const totalOrderAmount = useMemo<number>(
    () => cart.reduce((acc, cur) => (acc += cur.price), 0),
    [cart]
  );

  return (
    <div>
      <div>
        <p>{totalOrderAmount}</p>
      </div>
      <ProductList items={cart} />
    </div>
  );
};
export default Cart;
