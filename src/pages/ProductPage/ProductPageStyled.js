import styled from "styled-components";

export const ContainerProduct = styled.div`
  display: column;
  position: relative;
  padding-top: 93px;
  padding-bottom: 60px;
  background: #111a23;
  background: #111a23;
  height: 100vh;
`;
export const ContainerDisc = styled.div`
  display: column;
  margin-top: 16px;

  h1 {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.07em;

    color: #949599;
  }
  h2 {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;

    color: #949599;
  }
`;
export const ContainerBuy = styled.div`
  margin-top: 21px;
  position: relative;
  width: 98%;
  height: 85px;
  margin-left: 1%;
  margin-right: 1%;
  padding-left: 16px;
  padding-top: 9px;
  background: #1d2e3e;
  border-radius: 5px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #aaa9a8;
  span {
    position: absolute;
    bottom: 9px;
    right: 9px;
  }
`;
