import styled from "styled-components";

export const DisplayThumbsWrapp = styled.div`
  margin-top: 2px;
  overflow: hidden;
  display: flex;
  margin-left: 1.5%;
  width: 97%;
  /* div {
    width: 77px;
    height: 43px;
  } */
  .swipe-slide {
    width: 77px;
    height: 43px;
  }
  .swiper-slide-thumb-active {
    border: solid 2px #d6d7d9;
  }
  .swiper-slide-duplicate-active {
    border: none;
  }
  .swiper-slide-duplicate-next {
    border: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const DisplayThumbWrapp = styled.div`
  margin-top: 5px;
  img {
    width: 97%;
    height: 196px;
    margin-left: 1.5%;
    margin-right: 1.5%;
    object-fit: cover;
  }
`;
