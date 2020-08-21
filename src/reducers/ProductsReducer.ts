import { Item } from "../fakeData";

export type ProductsState = Item[];
export type Action = { type: "SET_ITEMS"; items: ProductsState };

export const ProductsReducer = (
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
