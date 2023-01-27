import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1d2e3e;
  padding: 80px 0;
`;

export const StyledTopoMenu = styled.div`
  width: 100%;
  color: #949599;
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  div {
    cursor: pointer;
  }
  h1 {
    width: 100%;
    text-align: center;
  }
`;

export const StyledButtonMenu = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #dfe3e6;
  display: flex;
  align-items: center;
  height: 68px;

  border-bottom: 0.5px solid rgba(148, 149, 153, 0.25);
  span {
    font-size: 44px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
