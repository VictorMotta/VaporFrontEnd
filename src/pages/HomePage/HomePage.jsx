import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, ImageWrapper } from "./HomePageStyled";
import TopMenu from "../../components/TopMenu/TopMenu";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

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

  return (
    <>
      <TopMenu />
      <ImageWrapper>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image className="slider-image" src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </ImageWrapper>
      <FooterMenu />
    </>
  );
};

export default HomePage;
