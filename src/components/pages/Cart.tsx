import React, { useMemo, useState } from "react";
import { useProductsState } from "../../Hooks/useProducts";
import ProductList from "../sections/productList";
import { Container } from "../../styles/CartStyle/CContainer";
const Cart: React.FC = () => {
  const { cart } = useProductsState();

  const totalOrderAmount = useMemo<number>(() => cart.reduce((acc, cur) => (acc += cur.price), 0), [cart]);

  return (
    <Container>
      <ProductList items={cart} />
    </Container>
  );
};
export default Cart;
