import CartContext from "../contexts/Cart";

import { UserCart } from "@/app/components/interfaces/UserCart";
import { useMemo, useState, type PropsWithChildren } from "react";

function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<UserCart[]>([]);

  const GlobalContextValue = useMemo(
    () => ({
      items,
      setItems,
    }),
    [[items, setItems]]
  );

  return (
    <CartContext.Provider value={GlobalContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
