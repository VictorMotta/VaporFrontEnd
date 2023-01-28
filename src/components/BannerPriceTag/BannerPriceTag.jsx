import React from "react";
import StyledBannerPriceTag from "./BannerPriceTagStyled";

const BannerPriceTag = ({ pricePromotion, price, promoPercentage }) => {
  pricePromotion = "199.90";
  price = "299.90";
  promoPercentage = "33";
  return (
    <StyledBannerPriceTag>
      <h1>-{promoPercentage}%</h1>
      <h2>{`R$ ${price}`}</h2>
      <p> </p>
      <h3>{`R$ ${pricePromotion}`}</h3>
    </StyledBannerPriceTag>
  );
};

export default BannerPriceTag;
