import { PaymentItem, Coupon } from "../../model/index";

export type PaymentsState = {
  paymentList: PaymentItem[];
  appliedCoupon?: Coupon;
};
export type Action =
  | { type: "SET_LIST"; items: PaymentItem[] }
  | { type: "PLUS_AMOUNT"; item: PaymentItem }
  | { type: "MINUS_AMOUNT"; item: PaymentItem }
  | { type: "HANDLE_SELECT"; id: string }
  | { type: "APPLY_COUPON"; coupon: Coupon };

export const PaymentsReducer = (state: PaymentsState, action: Action): PaymentsState => {
  switch (action.type) {
    case "SET_LIST": {
      return { ...state, paymentList: action.items };
    }
    case "PLUS_AMOUNT": {
      const { id } = action.item;
      const currentPaymentList = state.paymentList.map(item => {
        if (item.id === id) {
          const amount = item.amount + 1;
          return { ...item, amount };
        }
        return item;
      });
      return { ...state, paymentList: currentPaymentList };
    }
    case "MINUS_AMOUNT": {
      const { id } = action.item;
      const currentPaymentList = state.paymentList.map(item => {
        if (item.id === id) {
          const amount = item.amount === 1 ? 1 : item.amount - 1;
          return { ...item, amount };
        }
        return item;
      });
      return { ...state, paymentList: currentPaymentList };
    }
    case "HANDLE_SELECT": {
      const { id } = action;
      const currentPaymentList = state.paymentList.map(item =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      );
      return { ...state, paymentList: currentPaymentList };
    }
    case "APPLY_COUPON": {
      return { ...state, appliedCoupon: action.coupon };
    }
    default: {
      return state;
    }
  }
};
