import styled from "styled-components";

export const StyledContainerProductCart = styled.div`
  width: 90%;
  height: 82px;
  background: #1d2e3e;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
`;

export const StyledContainerImageAndTittle = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
`;

export const StyledImageGame = styled.img`
  width: 106px;
  height: 70px;
  object-fit: cover;
`;

export const StyledTitleGame = styled.h1`
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  margin-left: 10px;
`;

export const StyledPriceWithPromotionGame = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-bottom: 10px;
`;

export const StyledPriceCurrent = styled.h2`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
`;
export const StyledPriceOld = styled.h3`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-decoration-line: line-through;
  margin-right: 5%;
  color: #949599;
`;

export const StyledPriceGameNotPromotion = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const StyledButtonDelete = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2%;
  color: #949599;
  cursor: pointer;
`;
