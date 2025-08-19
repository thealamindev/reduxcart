import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-categoryBg py-15">
        <Container>
          <div className={"flex justify-between"}>
            <div className="w-[10%]">
              <Heading text="Menu" as={"h3"} />
              <ul>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Home
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Shop
                </li>
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
            <div className="w-[15%]">
              <Heading text="Shop" as={"h3"} />
              <ul>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Category 1
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Category 2
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Category 3
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Category 4
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Category 5
                </li>
              </ul>
            </div>

            <div className="w-[15%]">
              <Heading text="HELP" as={"h3"} />
              <ul>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Privacy Policy
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Terms & Conditions
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Special E-shop
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Shipping
                </li>
                <li className="hover:text-hoverC hover:font-bold text-menuC text-sm">
                  Secure Payments
                </li>
              </ul>
            </div>

            <div className="w-[40%]">
              <Heading text="(052) 611-5711 company@domain.com" as={"h3"} className="pr-[246px] text-base font-bold text-hoverC leading-8"/>
              {/* <Heading text="company@domain.com" as={"h3"}/> */}
              <Heading text="575 Crescent Ave. Quakertown, PA 18951" as={"p"} />
            </div>
            <div className="w-[20%]">
              <Image src={logo} alt={logo} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
