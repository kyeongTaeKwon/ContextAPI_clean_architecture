import React from "react";
import styled from "styled-components";
import { Coupon } from "../../model/index";
import { useProductsState } from "../../Hooks/useProducts";
import { usePayments } from "../../Hooks/usePaymentList";
import CouponItem from "../items/couponItem";
type Props = {
  visible: boolean;
  children: React.ReactNode;
  closeModal: () => void;
};

const Modal = ({ visible, children, closeModal }: Props) => {
  const { coupons } = useProductsState();
  const { applyCoupon } = usePayments();

  const onClick = (coupon: Coupon) => {
    applyCoupon(coupon);
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible} onClick={closeModal}>
        <ModalInner>
          {coupons.map(coupon => (
            <CouponItem coupon={coupon} onClick={onClick} key={coupon.title} />
          ))}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

type StyleProps = {
  visible: boolean;
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props: StyleProps) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props: StyleProps) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  color: black;
  padding: 40px 20px;
`;

export default Modal;
