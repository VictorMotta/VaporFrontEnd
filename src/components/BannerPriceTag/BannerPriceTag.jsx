import React from "react";
import StyledBannerPriceTag from "./BannerPriceTagStyled";

const BannerPriceTag = ({ pricePromotion, price, promoPercentage }) => {
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
