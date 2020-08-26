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
  StyledAmountSectionFlexBox,
} from "../../styles/CartStyle/$AmountSection";
import { makeCommaPrice } from "../../util/makeComma";
type Props = {
  openModal: () => void;
  closeModal: () => void;
};
const AmountSection = ({ openModal, closeModal }: Props) => {
  const { totalOrderAmount, paymentPrice, discountPrice } = usePayments();

  return (
    <StyledAmountSection>
      <StyledHeaderText>결제금액</StyledHeaderText>
      <StyledAmountSectionFlexBox>
        <StyledAddCouponBtn onClick={openModal}>쿠폰 적용하기</StyledAddCouponBtn>
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
      </StyledAmountSectionFlexBox>
    </StyledAmountSection>
  );
};

export default AmountSection;
