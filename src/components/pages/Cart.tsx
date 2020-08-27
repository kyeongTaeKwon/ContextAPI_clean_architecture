import React, { useState } from "react";
import CartList from "../sections/cartList";
import AmountSection from "../sections/amountSection";
import { Item } from "../../model/index";
import { Container, CartHeader, HeaderText } from "../../styles/CartStyle/$Container";
import { PaymentsContextProvider } from "../../contexts/PaymentsContext";
import CouponModal from "../sections/couponModal";
interface PaymentItem extends Item {
  amount?: number;
}

const Cart: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <PaymentsContextProvider>
      <Container>
        <CartHeader>
          <HeaderText>주문하기</HeaderText>
        </CartHeader>
        <CartList />
        <AmountSection openModal={openModal} closeModal={closeModal} />
      </Container>
      {modalVisible && <CouponModal visible={modalVisible} closeModal={closeModal} />}
    </PaymentsContextProvider>
  );
};
export default Cart;
