import React, { useState } from "react";
import CartList from "../sections/cartList";
import AmountSection from "../sections/amountSection";
import { Item } from "../../model/index";
import { Container, CartHeader, HeaderText } from "../../styles/CartStyle/CContainer";
import { PaymentsContextProvider } from "../../contexts/PaymentListContext";
import Modal from "../sections/CouponModal";
interface PaymentItem extends Item {
  amount?: number;
}

const Cart: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <PaymentsContextProvider>
      <Container>
        <CartHeader>
          <HeaderText>주문하기</HeaderText>
        </CartHeader>
        <CartList />
        <AmountSection openModal={handleOpenModal} closeModal={handleCloseModal} />
      </Container>
      <Modal visible={modalVisible} closeModal={handleCloseModal}>
        hi
      </Modal>
    </PaymentsContextProvider>
  );
};
export default Cart;
