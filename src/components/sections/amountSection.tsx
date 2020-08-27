import React from "react";
import { usePayments } from "../../Hooks/usePayments";
import {
  StyledHeaderText,
  StyledSubText,
  StyledAmountText,
  StyledAddCouponBtn,
  StyledAmountTextBox,
  StyledAmountBox,
  StyledAmountSection,
  StyledAmountSectionFlexBox,
  StyledAplliedCouponText,
  StyledApplyCouponBox,
} from "../../styles/CartStyle/$AmountSection";
import { makeCommaPrice } from "../../util/makeComma";
type Props = {
  openModal: () => void;
  closeModal: () => void;
};
const AmountSection = ({ openModal, closeModal }: Props) => {
  const { totalOrderAmount, paymentPrice, discountPrice, appliedCoupon } = usePayments();

  return (
    <StyledAmountSection>
      <StyledHeaderText>결제금액</StyledHeaderText>
      <StyledAmountSectionFlexBox>
        <StyledApplyCouponBox>
          {appliedCoupon ? (
            <StyledAplliedCouponText>{appliedCoupon.title} 적용 </StyledAplliedCouponText>
          ) : (
            <StyledAplliedCouponText>적용된 쿠폰이 없습니다.</StyledAplliedCouponText>
          )}
          <StyledAddCouponBtn onClick={openModal}>쿠폰 적용하기</StyledAddCouponBtn>
        </StyledApplyCouponBox>

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

export default React.memo(AmountSection);
