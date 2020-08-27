import { useContext, useCallback } from "react";
import { ProductsDispatchContext, ProductsStateContext } from "../contexts/ProductsContext";
import { Item } from "../model/index";

export const useProducts = () => {
  const state = useContext(ProductsStateContext);
  const dispatch = useContext(ProductsDispatchContext);

  if (!dispatch) throw new Error("ProductsProvider not found!");
  if (!state) throw new Error("ProductsProvider not found!");

  const { cart, coupons, items } = state;

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
  return { cart, coupons, items, putCart, takeOutCart };
};
