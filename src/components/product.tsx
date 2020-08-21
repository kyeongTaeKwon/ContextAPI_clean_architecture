import React from "react";
import { Item } from "../fakeData";
import { useCartState, useCartDispatch } from "../contexts/CartContext";
type Props = {
  item: Item;
};
const Product = ({ item }: Props) => {
  const cart = useCartState();
  const dispatch = useCartDispatch();

  return (
    <div>
      {cart.find(el => el.id === item.id) && <p>장바구니에 있습니다.</p>}
      <img
        src={item.coverImage}
        alt={item.title}
        onClick={() => {
          cart.find(el => el.id === item.id)
            ? dispatch({ type: "TAKEOUT_ITEM", id: item.id })
            : dispatch({ type: "PUT_ITEM", item });
        }}
      />
      <h2>{item.title}</h2>
      <p>{item.price}</p>
    </div>
  );
};

export default Product;
