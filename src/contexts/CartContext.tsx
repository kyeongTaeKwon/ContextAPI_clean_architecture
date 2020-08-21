import React, { createContext, Dispatch, useReducer, useContext } from "react";

import { CartReducer, CartState, CartAction } from "../reducers/CartReducer";

type CartDispatch = Dispatch<CartAction>;

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<CartDispatch | undefined>(undefined);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, dispatch] = useReducer(CartReducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={products}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

//! dl
export const useCartState = () => {
  const state = useContext(CartStateContext);
  if (!state) throw new Error("CartProvider not found!");
  return state;
};

export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) throw new Error("CartProvider not found!");
  return dispatch;
};
