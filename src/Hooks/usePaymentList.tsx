import { useMemo, useEffect, useCallback, useContext } from "react";
import { PaymentItem } from "../model/index";
import { PaymentListDispatchContext, PaymentsStateContext } from "../contexts/PaymentListContext";
import { useProductsState } from "./useProducts";

export const usePayments = () => {
  const dispatch = useContext(PaymentListDispatchContext);
  const paymentList = useContext(PaymentsStateContext);
  const { cart } = useProductsState();

  if (!dispatch) throw new Error("ProductsProvider not found!");
  if (!paymentList) throw new Error("ProductsProvider not found!");

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

  const totalOrderAmount = useMemo<number>(() => {
    return paymentList.reduce((acc, cur) => {
      const amount = cur.amount ? cur.amount : 1;
      if (cur.isSelected) {
        return (acc += cur.price * amount);
      }
      return acc;
    }, 0);
  }, [paymentList]);

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

  return { paymentList, totalOrderAmount, plusAmount, minusAmount, handleSelect };
};
