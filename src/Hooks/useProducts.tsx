import { useContext, useCallback } from "react";
import { ProductsDispatchContext, ProductsStateContext } from "../contexts/ProductsContext";
import { Item } from "../model/index";

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
