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

// TODO: useCallback 을 사용해서 아래의 훅스들도 분리할 수 있음 분리하기 , 하지만 괜히 의미 없이 파일만 늘어나는 것도 조심! //
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
