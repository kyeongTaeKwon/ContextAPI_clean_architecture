import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { Item, productsItems } from "../fakeData";

type ProductsState = Item[];

const ProductsStateContext = createContext<ProductsState | undefined>(
  undefined
);

type Action = { type: "SET_ITEMS"; items: ProductsState };

type ProductsDispatch = Dispatch<Action>;

const ProductsDispatchContext = createContext<ProductsDispatch | undefined>(
  undefined
);

const ProductsReducer = (
  state: ProductsState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case "SET_ITEMS": {
      const items = action.items;
      state = items;
      return state;
    }
    default: {
      return state;
    }
  }
};

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
