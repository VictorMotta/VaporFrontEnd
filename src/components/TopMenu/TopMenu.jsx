import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { FaUserCircle } from "react-icons/fa";
import { TopUserImage, TopUserContainer } from "./TopMenuStyled";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const icon = <CiSearch />;

const TopMenu = ({ children }) => {
  const { user, authenticated } = useContext(AuthContext);

  return (
    <TopUserContainer>
      {children}
      <TopUserImage>
        {authenticated ? (
          <Link to={"/menu"}>
            <img src={user.avatar} alt="user" />
          </Link>
        ) : (
          <Link to={"/login"}>
            <FaUserCircle />
          </Link>
        )}
      </TopUserImage>
    </TopUserContainer>
  );
};

export default TopMenu;
