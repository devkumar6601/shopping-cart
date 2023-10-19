"use client";

import CartItem from "@/app/components/common/card/cart";
import { UserCart } from "@/app/components/interfaces/UserCart";
import useUserCart from "@/app/data/hooks/useCart";
import styled from "styled-components";

const CartItemsWrapper = styled.div`
  margin-top: 20px;
  max-height: 550px;
  overflow-y: auto;
`;

export default function Cart() {
  const { items } = useUserCart()
  return (
    <div className="mt-5">
      <h2><b>Cart</b></h2>
      <h6 className="mb-5 mt-2" >The items you added to cart:</h6>
      <hr />
      <CartItemsWrapper>
        {items.map((value: UserCart, index: number) => (
          <CartItem key={`cart_items_${index}`} item={value} />
        ))}
      </CartItemsWrapper>
    </div>
  );
}
