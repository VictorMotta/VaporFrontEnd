import {
  StyledContainerProductCart,
  StyledImageGame,
  StyledTitleGame,
  StyledContainerImageAndTittle,
  StyledPriceWithPromotionGame,
  StyledPriceCurrent,
  StyledPriceOld,
  StyledButtonDelete,
  StyledPriceGameNotPromotion,
} from "./ProductCartStyled";
import { IoMdTrash } from "react-icons/io";

import { useNavigate } from "react-router-dom";

const ProductCart = ({ item }) => {
  const { title, price, pricePromotion, images } = item;

  const navigate = useNavigate();

  return (
    <>
      <StyledContainerProductCart>
        <StyledContainerImageAndTittle>
          <StyledImageGame src={images[0]} alt='' />
          <StyledTitleGame>{title}</StyledTitleGame>
        </StyledContainerImageAndTittle>
        {pricePromotion ? (
          <StyledPriceWithPromotionGame>
            <StyledPriceOld>R$ {Number(price).toFixed(2).replace(".", ",")}</StyledPriceOld>
            <StyledPriceCurrent>
              R$ {Number(pricePromotion).toFixed(2).replace(".", ",")}
            </StyledPriceCurrent>
          </StyledPriceWithPromotionGame>
        ) : (
          <StyledPriceGameNotPromotion>
            <StyledPriceCurrent>R$ {Number(price).toFixed(2).replace(".", ",")}</StyledPriceCurrent>
          </StyledPriceGameNotPromotion>
        )}
        <StyledButtonDelete>
          <IoMdTrash />
        </StyledButtonDelete>
      </StyledContainerProductCart>
    </>
  );
};
export default ProductCart;
