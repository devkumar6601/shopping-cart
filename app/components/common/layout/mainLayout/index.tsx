"use client";

import CartProvider from "@/app/data/providers/Cart";
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../footer";
import FullPageLoader from "../../fullPageLoader";
import { Header } from "../../header";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 5% 5%;
`;

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <>
      {loader ? (
        <FullPageLoader />
      ) : (
        <>
          <CartProvider>
            <Header />
            <Wrapper>{children}</Wrapper>
            <Footer />
          </CartProvider>
        </>
      )}
    </>
  );
}
