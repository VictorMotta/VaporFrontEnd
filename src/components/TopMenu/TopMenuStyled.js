import styled from "styled-components";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 76px;
  background: #202126;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.5);
`;
