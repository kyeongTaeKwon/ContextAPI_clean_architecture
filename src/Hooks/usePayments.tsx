import { useMemo, useEffect, useCallback, useContext, useState } from "react";
import { PaymentItem, Coupon } from "../model/index";
import { PaymentsDispatchContext, PaymentsStateContext } from "../contexts/PaymentsContext";
import { useProducts } from "./useProducts";

export const usePayments = () => {
  const dispatch = useContext(PaymentsDispatchContext);
  const state = useContext(PaymentsStateContext);
  const [discountPrice, setDiscountPrice] = useState<number>(0);

  const { cart } = useProducts();

  if (!dispatch) throw new Error("ProductsProvider not found!");
  if (!state) throw new Error("ProductsProvider not found!");

  const { paymentList, appliedCoupon } = state;

  useEffect(() => {
    const items = paymentList.filter(item => {
      let isInCart = false;

      cart.forEach(cartItem => {
        if (cartItem.id === item.id) {
          isInCart = true;
        }
      });
      return isInCart;
    });

    dispatch({ type: "SET_LIST", items });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const calculationAmount = (payments: PaymentItem[], coupon?: Coupon) => {
    setDiscountPrice(0);
    const discountPercentage = coupon && coupon.discountRate ? (100 - coupon.discountRate) / 100 : 1;
    const discountAmount = coupon && coupon.discountAmount ? coupon.discountAmount : 0;

    let discountPriceSum = 0;
    let availableCouponItems = 0;

    const price = payments.reduce((acc, cur) => {
      const amount = cur.amount ? cur.amount : 1;
      if (cur.isSelected) {
        if (cur.availableCoupon !== false) availableCouponItems += 1;
        discountPriceSum += cur.availableCoupon === false ? 0 : (cur.price - cur.price * discountPercentage) * amount;
        return (acc += cur.availableCoupon === false ? cur.price * amount : cur.price * discountPercentage * amount);
      }
      return acc;
    }, 0);

    if (discountAmount !== 0 && availableCouponItems !== 0) setDiscountPrice(discountAmount);
    if (discountPercentage !== 1 && availableCouponItems !== 0) setDiscountPrice(discountPriceSum);

    return availableCouponItems === 0 ? price : price - discountAmount;

    //! 함수가 너무 커져서 분리 하기
    //! 장바구니 전체 아이템 금액 계산, 쿠폰이 적용된 실제 결제 금액 계산 , 할인 금액 계산 => 3가지 기능을 시간복잡도를 현재처럼 유지하면서 분리할 방법 생각해보기.!
    //! 아니면 어처피 O(n)이니까 3개로 분리해서 O(3n)정도로 만들기 => 대신 함수가 분리돼서 코드는 깔끔해짐
  };

  const totalOrderAmount = useMemo<number>(() => {
    return Math.floor(calculationAmount(paymentList));
  }, [paymentList]);

  const paymentPrice = useMemo<number>(() => {
    if (appliedCoupon) {
      return Math.floor(calculationAmount(paymentList, appliedCoupon));
    }
    return Math.floor(totalOrderAmount);
  }, [totalOrderAmount, appliedCoupon, paymentList]);

  const plusAmount = useCallback(
    (item: PaymentItem) => {
      dispatch({ type: "PLUS_AMOUNT", item });
    },
    [dispatch]
  );

  const minusAmount = useCallback(
    (item: PaymentItem) => {
      dispatch({ type: "MINUS_AMOUNT", item });
    },
    [dispatch]
  );

  const handleSelect = useCallback(
    (id: string) => {
      dispatch({ type: "HANDLE_SELECT", id });
    },
    [dispatch]
  );

  const applyCoupon = useCallback(
    (coupon: Coupon) => {
      dispatch({ type: "APPLY_COUPON", coupon });
    },
    [dispatch]
  );
  return {
    paymentList,
    totalOrderAmount,
    paymentPrice,
    plusAmount,
    minusAmount,
    handleSelect,
    applyCoupon,
    discountPrice,
    appliedCoupon,
  };
};
