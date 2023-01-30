import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPriceTag from "../../components/ProductPriceTag/ProductPriceTag";
import {
  ContainerDisc,
  ContainerProduct,
  ContainerBuy,
  StyledTopMenuInfo,
} from "./ProductPageStyled";
import TopMenu from "../../components/TopMenu/TopMenu";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import ProductImageSlider from "../../components/ProductImageSlider/ProductImageSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { CartContext } from "../../context/cartContext";
import { apiVapor } from "../../services/apiVapor";

const ProductPage = () => {
  const { handleCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(undefined);
  const [isDefined, setIsDefined] = useState(false);
  useEffect(() => {
    apiVapor.getProduct(id).then(({ data }) => {
      setProduct(data);
      setIsDefined(handleCart(data, true));
    });
  }, []);
  if (!product) {
    return <div>aaa</div>;
  } else {
    return (
      <>
        <TopMenu>
          <StyledTopMenuInfo>
            <div>
              <AiOutlineLeft onClick={() => navigate(-1)} />
            </div>
            <h1>{product.title}</h1>
          </StyledTopMenuInfo>
        </TopMenu>
        <ContainerProduct>
          <ProductImageSlider images={product.images} />

          <ContainerBuy>
            Comprar {product.title}
            <ProductPriceTag
              isDefined={isDefined}
              setIsDefined={setIsDefined}
              handleCart={handleCart}
              product={product}
            />
          </ContainerBuy>
          <ContainerDisc>
            <h1>SOBRE ESSE JOGO</h1>
            <h2>{product.description}</h2>
          </ContainerDisc>
        </ContainerProduct>
        <FooterMenu />
      </>
    );
  }
};
export default ProductPage;
