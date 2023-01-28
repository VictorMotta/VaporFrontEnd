import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductPriceTag from "../../components/ProductPriceTag/ProductPriceTag";
import {
  ContainerDisc,
  ContainerProduct,
  ContainerBuy,
} from "./ProductPageStyled";
import TopMenu from "../../components/TopMenu/TopMenu";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import ProductImageSlider from "../../components/ProductImageSlider/ProductImageSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`).then(({ data }) => {
      setProduct(data);
      console.log(data);
    });
  }, []);
  if (!product) {
    return <div>aaa</div>;
  } else {
    return (
      <>
        <TopMenu>
          <div>
            <AiOutlineLeft onClick={() => navigate(-1)} />
          </div>
          <h1>{product.title}</h1>
        </TopMenu>
        <ContainerProduct>
          <ProductImageSlider images={product.images} />

          <ContainerBuy>
            Comprar {product.title}
            <ProductPriceTag />
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
