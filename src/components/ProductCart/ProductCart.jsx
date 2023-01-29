import { useContext } from "react";
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
import { CartContext } from "../../context/cartContext";

const ProductCart = ({ item, setTotal }) => {
  const { title, price, pricePromotion, images } = item;
  const { cart, setCart } = useContext(CartContext);

  const deleteProductCart = () => {
    const newCart = cart.filter((product) => product !== item);
    if (!pricePromotion) {
      setTotal((novoValor) => novoValor - Number(price));
    }
    if (pricePromotion) {
      setTotal((novoValor) => novoValor - Number(pricePromotion));
    }
    setCart(newCart);
    localStorage.setItem("cartUser", JSON.stringify(newCart));
  };

  return (
    <>
      <StyledContainerProductCart>
        <StyledContainerImageAndTittle>
          <StyledImageGame src={images[0]} alt="" />
          <StyledTitleGame>{title}</StyledTitleGame>
        </StyledContainerImageAndTittle>
        {pricePromotion ? (
          <StyledPriceWithPromotionGame>
            <StyledPriceOld>
              R$ {Number(price).toFixed(2).replace(".", ",")}
            </StyledPriceOld>
            <StyledPriceCurrent>
              R$ {Number(pricePromotion).toFixed(2).replace(".", ",")}
            </StyledPriceCurrent>
          </StyledPriceWithPromotionGame>
        ) : (
          <StyledPriceGameNotPromotion>
            <StyledPriceCurrent>
              R$ {Number(price).toFixed(2).replace(".", ",")}
            </StyledPriceCurrent>
          </StyledPriceGameNotPromotion>
        )}
        <StyledButtonDelete onClick={deleteProductCart}>
          <IoMdTrash />
        </StyledButtonDelete>
      </StyledContainerProductCart>
    </>
  );
};
export default ProductCart;
