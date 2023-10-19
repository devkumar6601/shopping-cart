"use client";

import { UserCart } from "@/app/components/interfaces/UserCart";
import { Item } from "@/app/components/interfaces/item";
import { useCallback, useContext } from "react";
import CartContext, { CartContextType } from "../contexts/Cart";

function useUserCart() {
  const { items = [], setItems } = useContext<CartContextType>(CartContext);

  const addCartItem = useCallback(
    (item: Item) => {
      const isAlreadyAdded = items?.find(
        (value: UserCart) => value?.id === item.id
      );

      if (!isAlreadyAdded) {
        const _item: UserCart = { ...item, quantity: 1 };
        setItems([...items, _item]);
      }
    },
    [items]
  );

  const removeCartItem = useCallback(
    (item: Item) => {
      const _items = items.filter((value: UserCart) => value?.id !== item.id);
      setItems(_items);
    },
    [items]
  );

  const quantityIncrement = useCallback(
    (item: UserCart) => {
      const _items = items?.map((value: UserCart) => {
        if (value?.id === item.id) {
          value.quantity = value.quantity + 1;
        }
        return value;
      });
      setItems(_items);
    },
    [items]
  );

  const quantityDecrement = useCallback(
    (item: UserCart) => {
      const _items = items?.map((value: UserCart) => {
        if (value?.id === item.id) {
          value.quantity = value.quantity - 1;
        }
        return value;
      });
      setItems(_items);
    },
    [items]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  return {
    items,
    removeCartItem,
    addCartItem,
    quantityDecrement,
    quantityIncrement,
    clearCart,
  };
}

export default useUserCart;
