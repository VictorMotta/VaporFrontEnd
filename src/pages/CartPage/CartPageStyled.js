import styled from "styled-components";

export const StyledMainContainerCart = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #111a23;
  padding: 98px 0;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.cart.length === 0 && "center"};
  align-items: center;
`;

export const StyledTextCenterPage = styled.h1`
  width: 70%;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #949599;
`;

export const StyledTopoCart = styled.div`
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

export const StyledTotalCartBuy = styled.div`
  width: 90%;
  height: 110px;
  background: #1d2e3e;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const StyledContainerTotalWriting = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const StyledTotalWriting = styled.h1`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;

export const StyledButtonBuy = styled.button`
  width: 90%;
  height: 34px;
  border: none;
  background: linear-gradient(90deg, #74ae21 0%, #588a1b 100%);
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  cursor: pointer;
`;
