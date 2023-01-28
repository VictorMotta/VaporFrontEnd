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

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`).then(({ data }) => {
      setProduct(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <TopMenu>
        <div>
          <AiOutlineLeft onClick={() => navigate(-1)} />
        </div>
        <h1>{product.title}</h1>
      </TopMenu>

      <ContainerProduct>
        <img src={product.images} alt={product.title} />
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
};
export default ProductPage;
