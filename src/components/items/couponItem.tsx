import React from "react";
import { Coupon } from "../../model/index";

type Props = {
  coupon: Coupon;
  onClick: (coupon: Coupon) => void;
};

const CouponItem = ({ coupon, onClick }: Props) => {
  return (
    <div>
      <p>{coupon.title}</p>
      <button>적용하기</button>
    </div>
  );
};

export default CouponItem;
