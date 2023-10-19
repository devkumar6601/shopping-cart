"use client";

import Image from "next/image";
import styled from "styled-components";

const Foot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  @media (max-width: 600px) {
    gap: 20px;
    display: flex;
    flex-direction: column;
    .image {
      display: inline-block;
      margin: auto;
    }
  }
`;

export default function Footer() {
  return (
    <div style={{ height: "100px" }}>
      <footer className="py-5 bg-gray-700 text-center absolute bottom-0 w-full bg-slate-100 ">
        <Foot>
          <Image
            alt="not found"
            src="/images/visa.png"
            width={200}
            height={100}
            className="image"
          />
          <div>Copyright © 2022-2023 triallies. All rights reserved.</div>
        </Foot>
      </footer>
    </div>
  );
}
