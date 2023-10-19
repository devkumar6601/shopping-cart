"use client";

import items from "@/src/dummy/items";
import Slider from "react-slick";
import ItemCard from "../card/Item";

export default function index() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 2,
    // nextArrow: <span>Right</span>,
    // prevArrow: <span>left</span>,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      <h1 style={{ marginBottom: "10px" }}>
        <b>Shop Items:</b>
      </h1>
      <hr />
      <Slider {...settings}>
        {items.map((value, index) => {
          return <ItemCard key={`items_${index}`} item={value} />;
        })}
      </Slider>
    </div>
  );
}
