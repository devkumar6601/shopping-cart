"use client";

import { ReactNode } from "react";

import styled from "styled-components";

const Wrapper: any = styled.button`
  font-size: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

type Props = {
  children: ReactNode;
  backgroundColor?: any;
  onClick?: any;
  disabled?: boolean;
  props?: any;
};

export default function Button({ children, backgroundColor, ...props }: Props) {
  return (
    <Wrapper
      type="button"
      style={{
        backgroundColor,
      }}
      {...props}
    >
      {children}
    </Wrapper>
  );
}
