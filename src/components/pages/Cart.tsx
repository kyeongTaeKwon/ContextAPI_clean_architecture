import React from "react";
import CartList from "../sections/cartList";
import AmountSection from "../sections/amountSection";
import { Item } from "../../model/index";
import { Container } from "../../styles/CartStyle/CContainer";
import { ProductsContextProvider } from "../../contexts/PaymentListContext";
interface PaymentItem extends Item {
  amount?: number;
}

const Cart: React.FC = () => {
  return (
    <ProductsContextProvider>
      <Container>
        <CartList />
        <AmountSection />
      </Container>
    </ProductsContextProvider>
  );
};
export default Cart;
