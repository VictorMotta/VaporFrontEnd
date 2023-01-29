import styled from "styled-components";

const ProductPriceTagStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  justify-content: end;
  position: relative;
  border-radius: 2px;
  border: solid 2px black;
  button {
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    background: ${(props) => (props.isDefined ? "#464242" : "#75b022")};
    border-style: none;
    border-left: solid 2px black;
    color: #ffffff;
  }
  h1 {
    height: 30px;
    width: 52px;
    display: flex;
    padding-left: 3px;
    padding-right: 2px;
    background-color: green;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: #beec19;
    background: #4b6b22;
  }
  div {
    display: column;
    height: 30px;
    background: #1d2e3e;
  }
  h2 {
    height: 15px;
    width: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #738795;
  }
  h3 {
    height: 15px;
    width: 71px;
    color: #b3dc39;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed";
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
  }
  p::before {
    content: "";
    position: absolute;
    width: 25%;
    border-bottom: 1px solid;
    transform: rotate(-10deg);
    bottom: 23px;
    right: 79px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #949599;
  }
`;
export default ProductPriceTagStyled;
