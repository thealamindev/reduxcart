import React from 'react'
import Product from "../Product";
import Container from "../Container";
import Flex from "../Flex";
import jhuri from "/src/assets/jhuri.png"
import cat from "/src/assets/cat.png"
const BestSelling = () => {
  return (
    <>
      <div className="pb-5">

        <Container>
          <div className="font-bold">Best Selling</div>
          <Flex className={'gap-x-5'} >
            <Product src={jhuri} text={"10%"}  productTitle={"Grern Cat"} priceTxt={"$44.00"}/>
            <Product src={cat} text={"New"} productTitle={"Grern Bag"} priceTxt={"$40.00"}/>
            <Product src={jhuri} text={"Best"}  productTitle={"Grern Table"} priceTxt={"$42.00"}/>
            <Product src={cat} text={"50%"}  productTitle={"Grern Cat"} priceTxt={"$44.00"}/>
            
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default BestSelling