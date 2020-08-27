import React from "react";
import { usePayments } from "../../Hooks/usePayments";
import { makeCommaPrice } from "../../util/makeComma";
import {
  StyledSubText,
  StyledAmountText,
  StyledAmountTextBox,
  StyledAmountBox,
} from "../../styles/CartStyle/$AmountSection";

const AmountBox = () => {
  const { totalOrderAmount, paymentPrice, discountPrice } = usePayments();
  return (
    <StyledAmountBox>
      <StyledAmountTextBox>
        <StyledSubText>총 상품 금액 </StyledSubText>
        <StyledSubText>{makeCommaPrice(totalOrderAmount)}원</StyledSubText>
      </StyledAmountTextBox>
      <StyledAmountTextBox>
        <StyledSubText>상품 할인 금액 </StyledSubText>
        <StyledSubText>{makeCommaPrice(discountPrice)}원</StyledSubText>
      </StyledAmountTextBox>
      <StyledAmountTextBox>
        <StyledAmountText>총 결제 금액</StyledAmountText>
        <StyledAmountText>{makeCommaPrice(paymentPrice)}원</StyledAmountText>
      </StyledAmountTextBox>
    </StyledAmountBox>
  );
};

export default AmountBox;
