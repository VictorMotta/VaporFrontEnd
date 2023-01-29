import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HomePageContainer,
  Image,
  CarrouselWrapper,
  InputSearchHomePage,
  ImageWrapper,
  StyledTitleOferta,
} from "./HomePageStyled";
import TopMenu from "../../components/TopMenu/TopMenu";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import axios from "axios";
import ProducDisplay from "../../components/ProductDisplay/ProductDisplay";
import BannerPriceTag from "../../components/BannerPriceTag/BannerPriceTag";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [promoItens, setPromoItens] = useState([]);
  let currentOffset = 0;

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true,
    afterChange: (current) => setCurrentSlide(current),
  };
  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadFiveProducts();
    }
  };

  useEffect(() => {
    loadFiveProducts();
    window.addEventListener("scroll", handleScroll);
    axios.get(`http://localhost:5000/products?promo=true`).then(({ data }) => {
      setPromoItens([...data].sort(() => Math.random() - 0.5).splice(0, 4));
    });
  }, []);

  const loadFiveProducts = () => {
    axios
      .get(`http://localhost:5000/products?offset=${currentOffset}&limit=5`)
      .then(({ data }) => {
        const tenProducts = data;
        setProducts((products) => [...products, ...tenProducts]);
      });
    currentOffset += 5;
  };

  return (
    <>
      <TopMenu>
        <InputSearchHomePage
          search={search}
          type="text"
          placeholder={"a"}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </TopMenu>
      <HomePageContainer>
        <CarrouselWrapper>
          <Slider {...settings}>
            {promoItens.map((game, index) => (
              <ImageWrapper key={index} to={`/produto/${game._id}`}>
                <Image
                  className="slider-image"
                  src={game.images[0]}
                  alt={game.title}
                />
                <div>{game.title}</div>
                <h2>{game.description}</h2>
                <BannerPriceTag
                  pricePromotion={game.pricePromotion}
                  price={game.price}
                  promoPercentage={game.promoPercentage}
                />
              </ImageWrapper>
            ))}
          </Slider>
        </CarrouselWrapper>
        <StyledTitleOferta>FEITO PARA VOCÊ</StyledTitleOferta>
        {products.map(
          (
            {
              title,
              category,
              price,
              images,
              promoPercentage,
              pricePromotion,
              _id,
            },
            index
          ) => (
            <ProducDisplay
              title={title}
              category={category}
              price={price}
              images={images}
              promoPercentage={promoPercentage}
              pricePromotion={pricePromotion}
              key={index}
              _id={_id}
            />
          )
        )}
        <FooterMenu />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
