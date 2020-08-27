import React, { createContext, Dispatch, useReducer } from "react";
import { PaymentsState, PaymentsReducer, Action } from "./reducers/PaymentListReducer";
import { useProductsState } from "../Hooks/useProducts";
type PaymentsDispatch = Dispatch<Action>;

export const PaymentsStateContext = createContext<PaymentsState | undefined>(undefined);
export const PaymentsDispatchContext = createContext<PaymentsDispatch | undefined>(undefined);

export const PaymentsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { cart } = useProductsState();
  const [payments, dispatch] = useReducer(PaymentsReducer, {
    paymentList: cart.map(item => ({ ...item, amount: 1, isSelected: true })),
  });

  return (
    <PaymentsDispatchContext.Provider value={dispatch}>
      <PaymentsStateContext.Provider value={payments}>{children}</PaymentsStateContext.Provider>
    </PaymentsDispatchContext.Provider>
  );
};
