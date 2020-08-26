import React, { useMemo } from "react";
import { usePayments } from "../../Hooks/usePaymentList";
import {
  StyledHeaderText,
  StyledSubText,
  StyledAmountText,
  StyledAddCouponBtn,
  StyledAmountTextBox,
  StyledAmountBox,
  StyledAmountSection,
} from "../../styles/CartStyle/StyledAmountSection";
import { makeCommaPrice } from "../../util/makeComma";
type Props = {
  openModal: () => void;
  closeModal: () => void;
};
const AmountSection = ({ openModal, closeModal }: Props) => {
  const { totalOrderAmount, paymentPrice, discountPrice, paymentList } = usePayments();
  const paymentsCount = useMemo(() => paymentList.reduce((acc, cur) => (acc += cur.isSelected ? cur.amount : 0), 0), [
    paymentList,
  ]);
  return (
    <StyledAmountSection>
      <StyledHeaderText>결제금액</StyledHeaderText>
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
          <StyledAmountText>총 {paymentsCount}개의 클래스 결제 금액</StyledAmountText>
          <StyledAmountText>{makeCommaPrice(paymentPrice)}원</StyledAmountText>
        </StyledAmountTextBox>
      </StyledAmountBox>
      <StyledAddCouponBtn onClick={openModal}>쿠폰 적용하기</StyledAddCouponBtn>
    </StyledAmountSection>
  );
};

export default AmountSection;
