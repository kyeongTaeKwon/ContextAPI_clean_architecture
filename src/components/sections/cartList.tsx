import React from "react";
import CartProudct from "../items/cartProduct";
import { usePayments } from "../../Hooks/usePayments";
import { StyledListSection, StyledHeaderText, StyledSubText } from "../../styles/CartStyle/$CartList";

const CartList = () => {
  const { paymentList } = usePayments();
  const renderCartList = () => {
    return paymentList.map(item => <CartProudct item={item} key={item.id} />);
  };
  return (
    <StyledListSection>
      <StyledHeaderText>주문 정보</StyledHeaderText>
      {paymentList.length === 0 && <StyledSubText>장바구니에 담겨있는 제품이 없습니다.</StyledSubText>}
      {renderCartList()}
    </StyledListSection>
  );
};

export default CartList;
