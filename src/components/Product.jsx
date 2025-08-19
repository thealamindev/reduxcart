import React from "react";
import Badge from "./Badge";
import Image from "./Image";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import Flex from "./Flex";
import { useDispatch } from "react-redux";
import { addtocart } from "../slices/addToCartSlice";

const Product = ({ src, text, priceTxt, productTitle, className }) => {
  let dispatch = useDispatch();

  let handleAddToCart = () => {
    // dispatch(addtocart("ami add to cart data"));
    dispatch(addtocart({
      title: productTitle,
      price: priceTxt,
      image: src,
      quantity: 1,

    }));
  };
  return (
    <>
      <div className=" relative group">
        <Image src={src} />
        <Badge
          className={`absolute top-4 left-4 ${className}`}
          badgeText={text}
        />
        <div
          className="bg-white p-7.5 absolute bottom-6 left-0 w-full opacity-0 translate-y-4 group-hover:translate-y-0 
                group-hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          <Flex className={"justify-end gap-x-2"}>
            <p className="text-menuC">Add to Wish List</p>
            <FaHeart />
          </Flex>
          <Flex className={"justify-end gap-x-2 my-3"}>
            <p className="text-menuC">Compare</p>
            <FaCodeCompare />
          </Flex>
          <div
            onClick={handleAddToCart}
            className={" flex justify-end gap-x-2"}
          >
            <p className="text-menuC">Add to Cart</p>
            <FaShoppingCart />
          </div>
        </div>
        <div className="bg-white">
          <Flex className={"justify-between"}>
            <h3>{productTitle}</h3>
            <p>{priceTxt}</p>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Product;
