import React from "react";
import CartProudct from "../items/cartProduct";
import { usePayments } from "../../Hooks/usePaymentList";
import { ListSection } from "../../styles/CartStyle/CartList";

const CartList = () => {
  const { paymentList } = usePayments();
  const renderCartList = () => {
    return paymentList.map(item => <CartProudct item={item} key={item.id} />);
  };
  return (
    <ListSection>
      <h2 style={{ marginLeft: "2.8rem" }}>주문 정보</h2>
      {renderCartList()}
    </ListSection>
  );
};

export default CartList;
