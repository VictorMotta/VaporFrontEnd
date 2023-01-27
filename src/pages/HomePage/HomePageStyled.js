import styled from "styled-components";
import logo from "../../assets/images/Logo.png";
import svgIcon from "../../assets/images/download.svg";

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

export const InputSearchHomePage = styled.input`
  background: #292c33;
  border-radius: 7px;
  width: 83%;
  height: 34px;
  border: none;
  font-weight: 700;
  color: #949599;
  padding-left: 8px;
  background-image: url(${(props) => (props.search ? "none" : svgIcon)});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 1.9em;
  ::placeholder {
    content: url(${logo});
    display: flex;
    height: 30px;
    justify-content: center;
  }
`;
