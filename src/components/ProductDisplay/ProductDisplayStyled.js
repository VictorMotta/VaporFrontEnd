import styled from "styled-components";

export const GameContainer = styled.div`
  margin-bottom: 4px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #192939;
  width: 100%;
  height: 60px;
  padding: 5px;
  a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
  }
  span {
    justify-content: center;
    align-items: center;
    bottom: 4px;
    right: 25px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    h1::before {
      content: "";
      width: 100%;
      border-bottom: 1px solid;
      transform: rotate(-10deg);
      bottom: 25px;
      font-family: "Roboto Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      color: #949599;
    }
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Roboto Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      color: #949599;
      text-decoration: line-through;
    }
  }
`;

export const StyledImageAndTitle = styled.div`
  width: 80%;
  display: flex;
  img {
    width: 82px;
    height: 46px;
    object-fit: cover;
  }
  div {
    justify-content: center;
    width: 80%;
    margin-left: 9px;
    h1 {
      font-family: "Roboto Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      width: 100%;
      height: 32px;
      word-wrap: normal;
    }
    h3 {
      font-family: "Roboto Condensed";
      font-style: normal;
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
      color: #9cafc7;
    }
  }
`;
