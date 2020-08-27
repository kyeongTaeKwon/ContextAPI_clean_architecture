import React, { createContext, Dispatch, useReducer, useEffect } from "react";
import { productsItems, coupons } from "./data";
import { ProductsReducer, ProductsState, Action } from "./reducers/ProductsReducer";

type ProductsDispatch = Dispatch<Action>;

export const ProductsStateContext = createContext<ProductsState | undefined>(undefined);
export const ProductsDispatchContext = createContext<ProductsDispatch | undefined>(undefined);

export const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const localData = localStorage.getItem("cart");
  const cart = localData ? JSON.parse(localData) : [];

  const [products, dispatch] = useReducer(ProductsReducer, {
    items: productsItems,
    coupons: coupons,
    cart,
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products.cart));
  }, [products.cart]);

  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={products}>{children}</ProductsStateContext.Provider>
    </ProductsDispatchContext.Provider>
  );
};
