import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { productsItems } from "../fakeData";
import {
  ProductsReducer,
  ProductsState,
  Action,
} from "../reducers/ProductsReducer";

type ProductsDispatch = Dispatch<Action>;

const ProductsStateContext = createContext<ProductsState | undefined>(
  undefined
);

const ProductsDispatchContext = createContext<ProductsDispatch | undefined>(
  undefined
);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, dispatch] = useReducer(ProductsReducer, productsItems);
  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={products}>
        {children}
      </ProductsStateContext.Provider>
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
  return dispatch;
};
