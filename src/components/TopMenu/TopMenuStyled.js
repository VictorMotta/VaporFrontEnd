import styled from "styled-components";
import logo from "../../assets/images/Logo.png";
import svgIcon from "../../assets/images/icon.svg";
import { CiSearch } from "react-icons/ci";

export const TopUserImage = styled.div`
  font-size: 40px;
  img {
    height: 40px;
    border-radius: 50%;
  }
`;

export const TopUserContainer = styled.div`
  input {
    background: #292c33;
    border-radius: 7px;
    width: 70%;
    height: 34px;
    border-style: none;
    padding-left: 8px;
    background-image: url(${svgIcon});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 1.9em;
  }
  input::placeholder {
    content: url(${logo});
    display: flex;
    height: 30px;
    justify-content: center;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  height: 76px;
  background: #202126;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.5);
`;
