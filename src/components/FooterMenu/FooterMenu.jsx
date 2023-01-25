import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingCart, HiOutlineMenu } from "react-icons/hi";
import { FooterContainer, IconsLinks } from "./Footercss";
import { useLocation } from "react-router-dom";

const FooterMenu = () => {
  const location = useLocation().pathname;
  return (
    <FooterContainer>
      <IconsLinks>
        <AiFillHome />
        {location}
      </IconsLinks>
      <IconsLinks>
        <HiShoppingCart />
      </IconsLinks>
      <IconsLinks>
        <HiOutlineMenu />
      </IconsLinks>
    </FooterContainer>
  );
};

export default FooterMenu;
