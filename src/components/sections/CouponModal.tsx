import React from "react";
import { Coupon } from "../../model/index";
import { useProductsState } from "../../Hooks/useProducts";
import { usePayments } from "../../Hooks/usePayments";
import CouponItem from "../items/couponItem";
import {
  StyledModalInner,
  StyledModalOverlay,
  StyledModalWrapper,
  StyledHeader,
} from "../../styles/CartStyle/$CouponModal";

type Props = {
  visible: boolean;
  closeModal: () => void;
};

const Modal = ({ visible, closeModal }: Props) => {
  const { coupons } = useProductsState();
  const { applyCoupon } = usePayments();

  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onClick = (coupon: Coupon) => {
    applyCoupon(coupon);
    closeModal();
  };

  const renderCouponList = () => {
    return coupons.map(coupon => <CouponItem coupon={coupon} onClick={onClick} key={coupon.title} />);
  };

  return (
    <>
      <StyledModalOverlay visible={visible} />
      <StyledModalWrapper visible={visible} onClick={e => onMaskClick(e)}>
        <StyledModalInner>
          <StyledHeader>쿠폰을 선택해주세요</StyledHeader>
          {renderCouponList()}
        </StyledModalInner>
      </StyledModalWrapper>
    </>
  );
};

export default React.memo(Modal);
