import styled from "styled-components";

export const StyledTopMenuInfo = styled.div`
  width: 100%;
  color: #949599;
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  div {
    cursor: pointer;
    font-size: 31px;
  }
  h1 {
    width: 100%;
    text-align: center;
  }
`;

export const ContainerProduct = styled.div`
  position: relative;
  padding-top: 93px;
  padding-bottom: 60px;
  background: #111a23;
  background: #111a23;
  min-height: 100vh;
`;

export const ContainerBuy = styled.div`
  margin-top: 21px;
  position: relative;
  width: 95%;
  height: 85px;
  padding-left: 16px;
  padding-top: 9px;
  background: #1d2e3e;
  border-radius: 5px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  margin: 21px auto;
  color: #aaa9a8;
  span {
    position: absolute;
    bottom: 9px;
    right: 9px;
  }
`;

export const ContainerDisc = styled.div`
  display: column;
  margin-top: 16px;
  width: 95%;
  margin: 10px auto;
  h1 {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.07em;
    margin: 20px 0;
    color: #949599;
  }
  h2 {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: justify;
    color: #949599;
  }
`;
