import React from "react";
import { useCartState, useCartDispatch } from "../contexts/CartContext";
import ProductList from "../components/productList";

const Cart: React.FC = () => {
  const cart = useCartState();
  return (
    <div>
      <ProductList items={cart} />
    </div>
  );
};

export default Cart;
