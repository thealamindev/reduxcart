import React from "react";

import Product from "../Product";
import Container from "../Container";
import Flex from "../Flex";
import jhuri from "/src/assets/jhuri.png";
import cat from "/src/assets/cat.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const NewArrival = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="pb-5">
        <Container>
          <div className="font-bold">New Arrival</div>
            <Slider {...settings}>
              <div className="px-3">
             
                <Product
                  src={jhuri}
                  className={'bg-black'}
                  text={"10%"}
                  productTitle={"Grern Cat"}
                  priceTxt={"$44.00"}
                />
               
              </div >
              <div className="px-3">
                <Product
                  src={cat}
                  text={"New"}
                  className={'bg-amber-400'}
                  productTitle={"Grern Bag"}
                  priceTxt={"$40.00"}
                />
              </div>
              <div className="px-3">
                <Product
                  src={cat}
                  text={"New"}
                  className={'bg-pink-600'}
                  productTitle={"Grern Bag"}
                  priceTxt={"$40.00"}
                />
              </div>
              <div className="px-3">
                <Product
                  src={jhuri}
                  text={"10%"}
                  productTitle={"Grern Cat"}
                  priceTxt={"$44.00"}
                />
              </div>
              <div className="px-3">
                <Product
                  src={jhuri}
                  text={"10%"}
                  productTitle={"Grern Cat"}
                  priceTxt={"$44.00"}
                />
              </div>
            </Slider>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
