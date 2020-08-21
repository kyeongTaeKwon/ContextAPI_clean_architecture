import { Item } from "../fakeData";

export type CartState = Item[];
export type CartAction =
  | { type: "PUT_ITEM"; item: Item }
  | { type: "TAKEOUT_ITEM"; id: string };

export const CartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "PUT_ITEM": {
      const item = action.item;
      return [...state, item];
    }
    case "TAKEOUT_ITEM": {
      const { id } = action;
      return state.filter(item => item.id !== id);
    }
    default: {
      return state;
    }
  }
};
