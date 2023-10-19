"use client";

import Button from "@/app/components/common/button";
import { UserCart } from "@/app/components/interfaces/UserCart";
import useUserCart from "@/app/data/hooks/useCart";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CouponField from "./coupon";
import SuccessModal from "./modal/Success";

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 15px;
  border: 1px solid rgba(18, 18, 18, 0.08);
  margin-top: 100px;
  padding: 0px 50px;
  margin-bottom: 50px;

  padding-bottom: 50px;

  .title {
    text-align: center;
    font-size: 18px;
    font-weight: 600px;
    margin-top: 30px;
  }

  .hr {
    margin: 30px 0;
    border: 0.5px solid rgba(0, 0, 0, 0.08) 0px 4px 15px;
  }

  .total-amount {
    text-align: right;
    color: red;

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  .input-container {
    input {
      padding: 10px 12px;
      font-size: 14px;
      line-height: 20px;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: right 8px center;
      border: 1px solid black;
      border-radius: 3px;
      transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
      margin-right: 10px;
    }

    @media (max-width: 600px) {
      display: flex;
    }
  }

  .action {
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
      flex-direction: column;
      text-align: center;

      gap: 30px;
    }
  }

  .balance {
    text-align: right;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

export default function Checkout() {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [orderDetails, setOrderDetails] = useState<UserCart[]>([])

  const { items, clearCart } = useUserCart();

  useEffect(() => {
    let _totalAmount = 0;
    items.map((value: UserCart) => {
      _totalAmount += value?.price * value?.quantity;
    });
    _totalAmount = Number(_totalAmount.toFixed(2));
    setTotalAmount(_totalAmount);
  }, [items]);

  useEffect(() => {
    const _totalAmount = totalAmount;

    const _discountPercentage = discountPercentage; // 10% discount
    const discount = (_discountPercentage / 100) * _totalAmount;

    const discountedTotal = Number((_totalAmount - discount).toFixed(2));
    setDiscountAmount(discountedTotal)
  }, [discountPercentage, totalAmount]);

  const handleCoupon = useCallback((value: number) => {
    setDiscountPercentage(value)
  }, [])

  const handlePurchase = () => {
    setOpenModal(true)
    setOrderDetails(items)
    clearCart()
  }

  return (
    <Wrapper>
      <h2 className="title">
        <b>Checkout</b>
      </h2>
      <div className="total-amount">Amount: ${totalAmount}</div>
      <hr className="hr" />
      <div className="action">
        <CouponField handleCoupon={handleCoupon} />
        <div className="balance">
          <div style={{ color: discountPercentage ? "#20c997" : "" }}>
            Discount: {discountPercentage}%
          </div>

          <div style={{ marginTop: "7px", marginBottom: "10px" }}>
            Total Amount: ${discountAmount}
          </div>
          <Button onClick={handlePurchase} disabled={!items?.length}>
            Proceed To Pay
          </Button>
        </div>
      </div>
      {openModal &&
        <SuccessModal onClose={() => setOpenModal(false)} orderDetails={orderDetails} />
      }
    </Wrapper>
  );
}
