import React from "react";
import { Coupon } from "../../model/index";
import { StyledCouponItemBox, StyledCouponTitle, StyeldApplyBtn } from "../../styles/CartStyle/$CouponItem";
type Props = {
  coupon: Coupon;
  onClick: (coupon: Coupon) => void;
};

const CouponItem = ({ coupon, onClick }: Props) => {
  return (
    <StyledCouponItemBox>
      <StyledCouponTitle>{coupon.title}</StyledCouponTitle>
      <StyeldApplyBtn onClick={() => onClick(coupon)}>적용하기</StyeldApplyBtn>
    </StyledCouponItemBox>
  );
};

export default React.memo(CouponItem);
