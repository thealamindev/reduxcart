import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import detailsOne from "/src/assets/productDetailsOne.png";
import { useState } from "react";

const Productdetails = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="py-8">
        <Container>
          <Flex className={"justify-between flex-wrap gap-y-10"}>
            <div className="w-[48%] ">
              <Image
                src={detailsOne}
                alt={"productDetailsOne.png"}
                className={"w-full"}
              />
            </div>
            <div className="w-[48%]">
              <Image
                src={detailsOne}
                alt={"productDetailsOne.png"}
                className={"w-full"}
              />
            </div>
            <div className="w-[48%] ">
              <Image
                src={detailsOne}
                alt={"productDetailsOne.png"}
                className={"w-full"}
              />
            </div>
            <div className="w-[48%]">
              <Image
                src={detailsOne}
                alt={"productDetailsOne.png"}
                className={"w-full"}
              />
            </div>
          </Flex>
          <Heading
            className={"text-[39px] font-bold"}
            text={"Product One"}
            as={"h3"}
          />
          <Flex className={"text-yellow-300 text-2xl"}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
            <p className="text-black">1 review</p>
          </Flex>
          <Flex className={"gap-x-3"}>
            <del>$44.00</del>
            <span className="font-semibold">$44.00</span>
          </Flex>
          <Flex className={"gap-x-3 "}>
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <div className="h-10 w-10 rounded-full bg-red-300 "></div>
            <div className="h-10 w-10 rounded-full bg-green-300"></div>
            <div className="h-10 w-10 rounded-full bg-blue-300"></div>
            <div className="h-10 w-10 rounded-full bg-teal-200"></div>
          </Flex>
          <Flex className={"gap-x-2"}>
            <h3>Size:</h3>
            <div className="relative">
              <select className="py-2 px-4 border-2 w-[130px] appearance-none">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </Flex>
          <Flex>
            <h3>QUANTITY:</h3>
            <div className="flex px-5 py-2 border">
              <button onClick={handleIncrement}>+</button>
              <h3>{count}</h3>
              <button onClick={handleDecrement}>-</button>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};
export default Productdetails;
