import { Link } from "react-router-dom";
import styled from "styled-components";

export const CheckoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #111a23;
  padding-bottom: 70px;
`;

export const StyledTopCheckout = styled.div`
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

export const Logo = styled.img`
  width: 146px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  padding: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 24px;
  color: #ffffff;
  background-color: #1d2e3e;
  ::placeholder {
    color: #949599;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 29px;
  font-weight: 400;
  color: #dfe3e6;
  background-color: #1d2e3e;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: #1d2e3e;
    background-color: #dfe3e6;
  }
`;

export const StyledTotalCheckoutDiv = styled.div`
  width: 100%;
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

export const StyledButtonPay = styled.button`
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
