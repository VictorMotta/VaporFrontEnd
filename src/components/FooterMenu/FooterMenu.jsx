import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingCart, HiOutlineMenu } from "react-icons/hi";
import { FooterContainer, IconsLinks } from "./FooterStyled";
import { Link, useLocation } from "react-router-dom";

const FooterMenu = () => {
  const location = useLocation().pathname.replace("/", "");
  return (
    <FooterContainer>
      <IconsLinks path={location} name={""}>
        <Link to={"/"}>
          <AiFillHome />
        </Link>
      </IconsLinks>
      <IconsLinks path={location} name={"carrinho"}>
        <Link to={"/carrinho"}>
          <HiShoppingCart />
        </Link>
      </IconsLinks>
      <IconsLinks path={location} name={"menu"}>
        <Link to={"/menu"}>
          <HiOutlineMenu />
        </Link>
      </IconsLinks>
    </FooterContainer>
  );
};

export default FooterMenu;
