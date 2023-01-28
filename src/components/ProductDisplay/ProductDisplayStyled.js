import styled from "styled-components";

export const GameContainer = styled.div`
  position: relative;
  margin-bottom: 4px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #192939;
  width: 100%;
  height: 60px;
  display: flex;
  padding-left: 1.4%;
  padding-right: 6%;
  padding-top: 2%;
  padding-bottom: 2%;

  div {
    justify-content: center;
    padding-left: 2.5%;
    h1 {
      font-family: "Roboto Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      width: 116px;
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
  img {
    width: 100px;
    height: 46px;
    object-fit: cover;
  }
  span {
    position: absolute;
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
      position: absolute;
      width: 100%;
      border-bottom: 1px solid;
      transform: rotate(-10deg);
      bottom: 25px;
      font-family: "Roboto Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      /* identical to box height */

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
      /* identical to box height */

      color: #949599;
    }
  }
  a {
    width: 100%;
    height: 60px;
    text-decoration: none;
    display: flex;
  }
`;
