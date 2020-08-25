import { PaymentItem } from "../../model/index";

export type PaymentsState = PaymentItem[];
export type Action =
  | { type: "SET_LIST"; items: PaymentItem[] }
  | { type: "PLUS_AMOUNT"; item: PaymentItem }
  | { type: "MINUS_AMOUNT"; item: PaymentItem }
  | { type: "HANDLE_SELECT"; id: string };

export const PaymentsReducer = (state: PaymentsState, action: Action): PaymentsState => {
  switch (action.type) {
    case "SET_LIST": {
      return action.items;
    }
    case "PLUS_AMOUNT": {
      const { id } = action.item;
      const currentPaymentList = state.map(item => {
        if (item.id === id) {
          const amount = item.amount ? item.amount + 1 : 2;
          return { ...item, amount };
        }
        return item;
      });
      return currentPaymentList;
    }
    case "MINUS_AMOUNT": {
      const { id } = action.item;
      const currentPaymentList = state.map(item => {
        if (item.id === id) {
          const amount = !item.amount || item.amount === 1 ? 1 : item.amount - 1;
          return { ...item, amount };
        }
        return item;
      });
      return currentPaymentList;
    }
    case "HANDLE_SELECT": {
      const { id } = action;
      const currentPaymentList = state.map(item => (item.id === id ? { ...item, isSelected: !item.isSelected } : item));
      return currentPaymentList;
    }
    default: {
      return state;
    }
  }
};
