"use client";

import { UserCart } from "@/app/components/interfaces/UserCart";
import useUserCart from "@/app/data/hooks/useCart";
import Image from "next/image";
import { useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px 15px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 15px;
  border: 1px solid rgba(18, 18, 18, 0.08);
  transition: box-shadow 0.25s ease-in-out 0s;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .item-image {
    border-radius: 5px;
  }

  .sub-wrapper {
    display: flex;
    gap: 15px;

    .item-details {
      .name {
        font-size: 18px;
        font-weight: 500;
      }
      .description {
        margin-top: 5px;
        font-size: 12px;
      }

      .price {
        margin-top: 14px;
        font-size: 16px;
        font-weight: 500px;
        color: #20c997;
      }
    }
  }

  .action {
    position: relative;
  }

  .buttons-wrapper {
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 0;
    right: 0px;
  }

  .action-buttons {
    background-color: #20c997;
    border: 1px solid #2dce9d;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
  }

  .input-area {
    border: 1px solid rgba(18, 18, 18, 0.08);
    border-radius: 3px;
    height: 30px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

type Props = {
  item: UserCart;
  isOrderDetail?: boolean;
};

export default function CartItem({ item, isOrderDetail }: Props) {
  const { image, name, description, price, currency = "$", id } = item;
  const { removeCartItem, quantityDecrement, quantityIncrement } =
    useUserCart();

  const handleRemoveItem = useCallback(() => {
    removeCartItem(item);
  }, [removeCartItem, item]);

  const handleQuantityIncrement = useCallback(() => {
    quantityIncrement(item);
  }, [quantityIncrement, item]);

  const handleQuantityDecrement = useCallback(() => {
    if (item?.quantity === 1) {
      removeCartItem(item);
    } else {
      quantityDecrement(item);
    }
  }, [removeCartItem, quantityDecrement, item]);

  return (
    <Wrapper>
      <div className="sub-wrapper">
        <div>
          <Image
            alt={name}
            src={image}
            width={100}
            height={100}
            className="item-image"
          />
        </div>

        <div className="item-details">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          <div className="price">
            {currency} {price}
          </div>
        </div>
      </div>
      {!isOrderDetail && (
        <div className="action">
          <div style={{ cursor: "pointer" }} onClick={handleRemoveItem}>
            <Image
              alt="not found"
              src="/images/delete.png"
              width={20}
              height={20}
              className="item-image"
            />
          </div>

          <div className="buttons-wrapper">
            <div className="action-buttons" onClick={handleQuantityDecrement}>
              -
            </div>
            <div className="input-area">{item?.quantity}</div>
            <div className="action-buttons" onClick={handleQuantityIncrement}>
              +
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
