import React, { useState, useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HomePageContainer,
  Image,
  CarrouselWrapper,
  InputSearchHomePage,
  ImageWrapper,
} from "./HomePageStyled";
import TopMenu from "../../components/TopMenu/TopMenu";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import ProducDisplay from "../../components/ProductDisplay/ProductDisplay";
import BannerPriceTag from "../../components/BannerPriceTag/BannerPriceTag";
const images = [
  {
    src: "https://thumbs.dreamstime.com/b/paisagens-bonitas-do-mar-43239195.jpg",
    alt: "alt da image",
  },
  {
    src: "https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg",
    alt: "alt da image2",
  },
  {
    src: "https://thumbs.dreamstime.com/b/paisagens-bonitas-do-mar-43239195.jpg",
    alt: "alt da image",
  },
  {
    src: "https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg",
    alt: "alt da image2",
  },
];

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
    axios
      .get(`http://localhost:5000/products?offset=0&limit=0`, { promo: "true" })
      .then(({ data }) => {
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
        <h1>FEITO PARA VOCÊ</h1>
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
