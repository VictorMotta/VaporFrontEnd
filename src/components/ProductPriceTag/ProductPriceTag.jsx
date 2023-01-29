import React from "react";
import ProductPriceTagStyled from "./ProductPriceTagStyled";
import { IoMdAddCircleOutline } from "react-icons/io";
const ProductPriceTag = ({ pricePromotion, price, promoPercentage }) => {
  pricePromotion = "199.90";
  price = "299.90";
  promoPercentage = 30;
  return (
    <ProductPriceTagStyled>
      <h1>-{promoPercentage}%</h1>
      <div>
        <h2>{`R$ ${price}`}</h2>
        <p> </p>
        <h3>{`R$ ${pricePromotion}`}</h3>
      </div>
      <button>
        <IoMdAddCircleOutline /> Carrinho
      </button>
    </ProductPriceTagStyled>
  );
};

export default ProductPriceTag;
