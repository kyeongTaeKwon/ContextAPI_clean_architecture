import React, { createContext, Dispatch, useReducer } from "react";
import { PaymentsState, PaymentsReducer, Action } from "./reducers/PaymentListReducer";
import { useProductsState } from "../Hooks/useProducts";
type PaymentListDispatch = Dispatch<Action>;

export const PaymentsStateContext = createContext<PaymentsState | undefined>(undefined);
export const PaymentListDispatchContext = createContext<PaymentListDispatch | undefined>(undefined);

export const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { cart } = useProductsState();
  const [paymentList, dispatch] = useReducer(
    PaymentsReducer,
    cart.map(item => ({ ...item, amount: 1, isSelected: true }))
  );

  return (
    <PaymentListDispatchContext.Provider value={dispatch}>
      <PaymentsStateContext.Provider value={paymentList}>{children}</PaymentsStateContext.Provider>
    </PaymentListDispatchContext.Provider>
  );
};
