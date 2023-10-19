"use client";

import Button from "@/app/components/common/button";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
`;

type Props = {
    handleCoupon: any
}

export default function CouponField({ handleCoupon }: Props) {
    const [input, setInput] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const coupons: any = {
        TRIALLIES2023: 20,
        FREE2023: 20,
        OFF20: 20,
        FREE40: 40,
        T40: 40,
        OFF40: 40,
        FREE50: 50,
        T50RIALLIES: 50,
    };

    const handleValidateCoupon = () => {
        if (coupons[input]) {
            setMessage(`Congratulations! You have a ${coupons[input]}% discount`);
            handleCoupon(coupons[input]);
        } else {
            setMessage(`Invalid coupon`);
            setInput("");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e?.target?.value?.toUpperCase());
        setMessage("");
    };

    return (
        <Wrapper>
            <div className="input-container">
                <input
                    placeholder="Discount Code"
                    value={input}
                    onChange={handleInputChange}
                />
                <Button
                    backgroundColor={"#20c997"}
                    onClick={handleValidateCoupon}
                >
                    Applied
                </Button>
            </div>
            <div>{message}</div>
        </Wrapper>
    );
}
