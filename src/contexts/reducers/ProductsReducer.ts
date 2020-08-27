import { Item, Coupon } from "../../model/index";

export type ProductsState = {
  items: Item[];
  cart: Item[];
  coupons: Coupon[];
};
export type Action =
  | { type: "SET_ITEMS"; items: ProductsState }
  | { type: "PUT_ITEM"; item: Item }
  | { type: "TAKEOUT_ITEM"; id: string };

export const ProductsReducer = (state: ProductsState, action: Action): ProductsState => {
  switch (action.type) {
    case "SET_ITEMS": {
      const items = action.items;
      state = items;
      return state;
    }
    case "PUT_ITEM": {
      const item = action.item;
      return { ...state, cart: [...state.cart, item] };
    }
    case "TAKEOUT_ITEM": {
      const { id } = action;
      const cart = state.cart.filter(item => item.id !== id);
      return { ...state, cart };
    }
    default: {
      return state;
    }
  }
};
