import React, { createContext, Dispatch, useReducer, useContext, useCallback } from "react";
import { productsItems, coupons } from "../core/data";
import { ProductsReducer, ProductsState, Action } from "../reducers/ProductsReducer";
import { Item } from "../core/data";

type ProductsDispatch = Dispatch<Action>;

const ProductsStateContext = createContext<ProductsState | undefined>(undefined);

const ProductsDispatchContext = createContext<ProductsDispatch | undefined>(undefined);

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

export const useProductsState = () => {
  const state = useContext(ProductsStateContext);
  if (!state) throw new Error("ProductsProvider not found!");
  return state;
};

export const useProductsDispatch = () => {
  const dispatch = useContext(ProductsDispatchContext);
  if (!dispatch) throw new Error("ProductsProvider not found!");

  const putCart = useCallback(
    (item: Item) => {
      dispatch({ type: "PUT_ITEM", item });
    },
    [dispatch]
  );
  const takeOutCart = useCallback(
    (id: string) => {
      dispatch({ type: "TAKEOUT_ITEM", id });
    },
    [dispatch]
  );
  return { putCart, takeOutCart };
};
