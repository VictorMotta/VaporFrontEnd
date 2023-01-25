import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 700px;
  margin-bottom: 34px;
  .slick-dots {
    width: 25%;
    button::hover {
    }
    .slick-active {
      button::before {
        color: #f8fbfe;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
`;
