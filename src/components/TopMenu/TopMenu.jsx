import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { FaUserCircle } from "react-icons/fa";
import { TopUserImage, TopUserContainer } from "./TopMenuStyled";
import { CiSearch } from "react-icons/ci";

const icon = <CiSearch />;

const TopMenu = ({ children }) => {
  const { user, authenticated } = useContext(AuthContext);

  return (
    <TopUserContainer>
      {children}
      <TopUserImage>
        {authenticated ? <img src={user.avatar} alt='user' /> : <FaUserCircle />}
      </TopUserImage>
    </TopUserContainer>
  );
};

export default TopMenu;
