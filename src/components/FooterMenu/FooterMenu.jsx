import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingCart, HiOutlineMenu } from "react-icons/hi";
import { FooterContainer, IconsLinks } from "./FooterStyled";
import { useLocation } from "react-router-dom";

const FooterMenu = () => {
  const location = useLocation().pathname.replace("/", "");
  return (
    <FooterContainer>
      <IconsLinks path={location} name={""}>
        <AiFillHome />
      </IconsLinks>
      <IconsLinks path={location} name={"carrinho"}>
        <HiShoppingCart />
      </IconsLinks>
      <IconsLinks path={location} name={"menu"}>
        <HiOutlineMenu />
      </IconsLinks>
    </FooterContainer>
  );
};

export default FooterMenu;
