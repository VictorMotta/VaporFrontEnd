import styled from "styled-components";

const StyledBannerPriceTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  justify-content: end;
  position: relative;
  h1 {
    height: 15px;
    display: flex;
    padding-left: 3px;
    padding-right: 2px;
    background-color: green;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #84d374;
    background: #4b6b22;
  }
  h2 {
    height: 15px;
    width: 60px;
    display: flex;
    background-color: blue;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: #599bb5;
    background: #15212f;
  }
  h3 {
    height: 15px;
    width: 60px;
    display: flex;
    background-color: blue;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #84d085;
    background: #15212f;
  }
  p::before {
    content: "";
    position: absolute;
    width: 33%;
    border-bottom: 1px solid;
    transform: rotate(-10deg);
    bottom: 7px;
    right: 62px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #949599;
  }
`;
export default StyledBannerPriceTag;
