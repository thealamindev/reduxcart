import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck, FaUndo } from "react-icons/fa";

const Information = () => {
  return (
    <>
      <div className="bg-infoBg py-6">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-2">
              <PiNumberTwoBold />
              <p>Two years warranty</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaTruck />
              <p>Free shipping</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaUndo />
              <p>Return policy in 30 days</p>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Information;
