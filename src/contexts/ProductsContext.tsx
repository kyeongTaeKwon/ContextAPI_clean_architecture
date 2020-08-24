import React, { createContext, Dispatch, useReducer } from "react";
import { productsItems, coupons } from "./data";
import { ProductsReducer, ProductsState, Action } from "./reducers/ProductsReducer";

type ProductsDispatch = Dispatch<Action>;

export const ProductsStateContext = createContext<ProductsState | undefined>(undefined);

export const ProductsDispatchContext = createContext<ProductsDispatch | undefined>(undefined);

export const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, dispatch] = useReducer(ProductsReducer, {
    items: productsItems,
    cart: [],
    coupons: coupons,
  });

  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={products}>{children}</ProductsStateContext.Provider>
    </ProductsDispatchContext.Provider>
  );
};
