import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #202126;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const IconsLinks = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => (props.path === props.name ? "#1A9FFE" : "#949599")};
  }
  width: 28%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-top: solid 3px;
  border-color: ${(props) =>
    props.path === props.name ? "#1A9FFE" : "transparent"};
`;
