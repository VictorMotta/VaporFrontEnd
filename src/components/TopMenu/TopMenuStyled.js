import styled from "styled-components";
import logo from "../../assets/images/Logo.png";
import svgIcon from "../../assets/images/download.svg";

export const TopUserImage = styled.div`
  font-size: 40px;
  color: #949599;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const TopUserContainer = styled.div`
  input {
    background: #292c33;
    border-radius: 7px;
    width: 83%;
    height: 34px;
    border: none;
    font-weight: 700;
    color: #949599;
    padding-left: 8px;
    background-image: url(${(props) => (props.search ? "none" : svgIcon)});
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
