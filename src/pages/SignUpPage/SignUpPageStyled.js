import styled from "styled-components";

export const SingUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #111a23;
`;

export const Logo = styled.img`
  width: 146px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #111a23;
  background-color: #fff;
`;
