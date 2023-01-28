import React from "react";
import { GameContainer } from "./ProductDisplayStyled";
import { Link } from "react-router-dom";

const ProducDisplay = ({
  title,
  category,
  price,
  pricePromotion,
  images,
  promoPercentage,
  _id,
}) => {
  return (
    <GameContainer>
      <Link to={`/produto/${_id}`}>
        <img src={images} alt={title} />
        <div>
          <h1>{title}</h1>
          <h3>{category}</h3>
        </div>
        <PriceTag
          price={price}
          pricePromotion={pricePromotion}
          promoPercentage={promoPercentage}
        />
      </Link>
    </GameContainer>
  );
};

const PriceTag = ({ price, pricePromotion, promoPercentage }) => {
  promoPercentage = Number(promoPercentage);
  if (price) {
    price = price.replace(".", ",");
    console.log(pricePromotion);
    pricePromotion = `${pricePromotion}`;
    pricePromotion = pricePromotion.replace(".", ",");
  }

  return (
    <>
      {promoPercentage === 0 ? (
        <span>
          <h3>R$ {price}</h3>
        </span>
      ) : (
        <span>
          <h1> </h1>
          <h2>R$ {price}</h2>
          <h3>R$ {pricePromotion}</h3>
        </span>
      )}
    </>
  );
};

export default ProducDisplay;
