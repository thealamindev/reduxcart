import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import cat from "/src/assets/cat.png"

const Shop = () => {
  return (
    <>
      <Container>
        <Flex>
          <div className="w-1/4">
            <Product src={cat} />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Shop;
