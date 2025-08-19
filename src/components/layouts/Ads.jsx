import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import adsOne from "/src/assets/adOne.png";
import adsTwo from "/src/assets/adTwo.png";
import adsThree from "/src/assets/lamp-product.png";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <>
      <div className="pt-[170px] pb-[65px]">
        <Container>
          <Flex className={"gap-x-8"}>
            <div className="w-[50%]">
              <Link to={"/"}>
                <Image src={adsOne} className={"w-full"} />
              </Link>
            </div>
            <div className="w-[50%] flex flex-col gap-y-8">
              <Link to={"/"}>
                <Image src={adsTwo} className={"w-full"} />
              </Link>
              <Link to={"/"}>
                <Image src={adsThree} className={"w-full"} />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Ads;
