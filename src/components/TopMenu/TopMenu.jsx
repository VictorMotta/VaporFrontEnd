import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { FaUserCircle } from "react-icons/fa";
import { TopUserImage, TopUserContainer } from "./TopMenuStyled";
import logo from "../../assets/images/Logo.png";
import { CiSearch } from "react-icons/ci";
import svgIcon from "../../assets/images/icon.svg";

const icon = <CiSearch />;

const TopMenu = () => {
  const { user, authenticated } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  return (
    <TopUserContainer search={search}>
      <input
        type="text"
        placeholder={"a"}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TopUserImage>
        {authenticated ? (
          <img src={user.avatar} alt="user" />
        ) : (
          <FaUserCircle />
        )}
      </TopUserImage>
    </TopUserContainer>
  );
};

export default TopMenu;
