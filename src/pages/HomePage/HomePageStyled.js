import styled from 'styled-components';
import logo from '../../assets/images/Logo.png';
import svgIcon from '../../assets/images/download.svg';
import { Link } from 'react-router-dom';

export const CarrouselWrapper = styled.div`
  width: 94.5%;
  margin: 0 auto;
  margin-bottom: 34px;
  .slick-dots {
    width: 100%;
    li {
      button::before {
        font-size: 9px;
      }
    }
    button::hover {
    }
    .slick-active {
      button::before {
        color: #f8fbfe;
      }
    }
  }
`;
export const ImageWrapper = styled(Link)`
  text-decoration: none;
  background: #0b141d;
  width: 100%;
  height: 257px;
  display: flex;
  position: relative;

  div {
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 7px;
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    width: 100%;
  }
  h2 {
    padding-left: 5px;
    padding-right: 5px;
    height: 24px;
    width: calc(100%);
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #bbbbbb;
    word-wrap: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  span {
    position: absolute;
    margin-right: 5px;
    margin-bottom: 5px;
    right: 0;
    bottom: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 181px;
  object-fit: cover;
`;

export const InputSearchHomePage = styled.input`
  background: #292c33;
  border-radius: 7px;
  width: 83%;
  height: 34px;
  border: none;
  font-weight: 700;
  color: #949599;
  padding-left: 8px;
  background-image: url(${(props) => (props.search ? 'none' : svgIcon)});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 1.9em;
  ::placeholder {
    content: url(${logo});
    display: flex;
    height: 20px;
    justify-content: center;
  }
`;

export const HomePageContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: #15212f;
  min-height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTitleOferta = styled.h1`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  margin-left: 2.5%;
  color: #ffffff;
`;
