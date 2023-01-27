import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #111a23;
  padding-bottom: 70px;
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
  color: #111a23;
  background-color: #949599;
  ::placeholder {
    color: #202126;
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

export const LinkStyled = styled(Link)`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #949599;
  text-decoration: none;
  margin-top: 10px;
  cursor: pointer;
`;
