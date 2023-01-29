import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import {
  DisplayThumbsWrapp,
  DisplayThumbWrapp,
} from "./ProductImageSliderStyled";

const ProductImageSlider = (props) => {
  const [swip, setSwip] = useState();
  return (
    <>
      <Swiper
        loop={false}
        spaceBetween={10}
        thumbs={{ swiper: swip }}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
      >
        {props.images.map((image, i) => (
          <SwiperSlide key={i}>
            <DisplayThumbWrapp>
              <img src={image} alt="image" />
            </DisplayThumbWrapp>
          </SwiperSlide>
        ))}
      </Swiper>
      <DisplayThumbsWrapp>
        <Swiper
          onSwiper={setSwip}
          loop={props.images.length <= 3 && true}
          spaceBetween={10}
          slidesPerView={3}
          modules={[Navigation, Thumbs]}
        >
          {props.images.length > 1 &&
            props.images.map((image, i) => (
              <SwiperSlide key={i}>
                <img src={image} alt="image" />
              </SwiperSlide>
            ))}
        </Swiper>
      </DisplayThumbsWrapp>
    </>
  );
};
ProductImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImageSlider;
