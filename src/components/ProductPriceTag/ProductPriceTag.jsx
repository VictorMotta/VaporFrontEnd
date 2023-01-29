import React from "react";
import ProductPriceTagStyled from "./ProductPriceTagStyled";
import {
  IoMdAddCircleOutline,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
const ProductPriceTag = ({
  pricePromotion,
  price,
  promoPercentage,
  isDefined,
  setIsDefined,
  handleCart,
  product,
}) => {
  pricePromotion = "199.90";
  price = "299.90";
  promoPercentage = 30;
  function handleItemCheck() {
    setIsDefined(handleCart(product));
  }
  return (
    <ProductPriceTagStyled isDefined={isDefined}>
      <h1>-{promoPercentage}%</h1>
      <div>
        <h2>{`R$ ${price}`}</h2>
        <p> </p>
        <h3>{`R$ ${pricePromotion}`}</h3>
      </div>
      <button onClick={handleItemCheck}>
        {isDefined ? <IoIosCheckmarkCircleOutline /> : <IoMdAddCircleOutline />}
        Carrinho
      </button>
    </ProductPriceTagStyled>
  );
};

export default ProductPriceTag;
