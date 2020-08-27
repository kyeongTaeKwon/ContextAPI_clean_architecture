import React from "react";
import { usePayments } from "../../Hooks/usePayments";
import AmountBox from "../items/amountBox";

import {
  StyledHeaderText,
  StyledAddCouponBtn,
  StyledAmountSection,
  StyledAmountSectionFlexBox,
  StyledAplliedCouponText,
  StyledApplyCouponBox,
} from "../../styles/CartStyle/$AmountSection";

type Props = {
  openModal: () => void;
  closeModal: () => void;
};

const AmountSection = ({ openModal, closeModal }: Props) => {
  const { appliedCoupon } = usePayments();

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
        <AmountBox />
      </StyledAmountSectionFlexBox>
    </StyledAmountSection>
  );
};

export default React.memo(AmountSection);
