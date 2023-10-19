"use client";

import { Item } from "@/app/components/interfaces/item";
import useUserCart from "@/app/data/hooks/useCart";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../button";

const Wrapper = styled.div`
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  border: 1px solid rgba(18, 18, 18, 0.08);
  transition: border 0.25s ease-in-out 0s;
  margin: 15px 15px;

  .item-image {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .detail-wrapper {
    padding: 10px;
    display: block;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    word-break: break-all;
    white-space: nowrap;
  }
  .price {
    font-size: 16px;
    font-weight: 800;
  }
  .name {
    font-size: 12px;
  }
  .action-button {
    text-align: right;
  }
`;

type Props = {
  item: Item;
};

export default function ItemCard({ item }: Props) {
  const [isAlreadyAdded, setIsAlreadyAdded] = useState<boolean>(false);
  const { image, name, price, currency = "$", id }: Item = item;

  const { addCartItem, removeCartItem, items } = useUserCart();

  useEffect(() => {
    const isAlreadyAdded = items?.find((value: Item) => value?.id === item.id);
    setIsAlreadyAdded(!!isAlreadyAdded);
  }, [items, item]);

  const handleAddItem = useCallback(() => {
    addCartItem(item);
  }, [addCartItem, item]);

  const handleRemoveItem = useCallback(() => {
    removeCartItem(item);
  }, [removeCartItem, item]);

  return (
    <Wrapper>
      <Image
        alt={name}
        src={image}
        width={400}
        height={250}
        className="item-image"
      />
      <div className="detail-wrapper">
        <h5 className="price">
          {currency} {price}
        </h5>
        <h6 className="name">{name}</h6>
        <div className="action-button mt-4">
          <Button
            backgroundColor={isAlreadyAdded && `#20c997`}
            onClick={isAlreadyAdded ? handleRemoveItem : handleAddItem}
          >
            {isAlreadyAdded ? "Remove from Cart" : "Add to cart"}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
