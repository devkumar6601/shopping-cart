"use client";

import { UserCart } from "@/app/components/interfaces/UserCart";
import { createContext } from "react";

export type CartContextType = {
  items?: UserCart[];
  setItems?: any
};

export default createContext<CartContextType>({
  items: [],
  setItems: () => {},
});
