import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let [showCart, setShowCart]= useState(false)
  let data = useSelector((state)=>state.cart.value)
  console.log(data);
  

  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Flex>
            <div className="">
             <Link to={"/"}>
              <Image src={logo} alt={"logo"} />
             </Link>
            </div>
            <div className="m-auto">
              <ul className="flex items-center gap-x-[20px]">
                <Link to={"/"}>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Home
                </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                    Shop
                  </li>
                </Link>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  About
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Contact
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Journal
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-categoryBg py-6">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-3">
              <HiOutlineBars3BottomLeft />
              <Heading
                text={"Shop by Category"}
                as={"h3"}
                className={"text-hoverC text-sm"}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="p-4 w-[600px] focus:outline-0 bg-white"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            <div className="flex gap-x-3">
              <div className="flex">
                <FaUser />
                <FaCaretDown />
              </div>
              <FaShoppingCart onClick={()=>setShowCart(!showCart)}/>
             {showCart && 
              <div className="w-[350px] bg-teal-300 h-screen absolute top-0 right-0">
                  <FaShoppingCart onClick={()=>setShowCart(!showCart)}/>
                    <ul>
                      {data.map(item=>(
                       <>
                        <li>{item.title}</li>
                        <li>{item.price}</li>
                        <li>{item.quantity}</li>
                       </>
                        ))
                      }
                    </ul>
              </div>}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
