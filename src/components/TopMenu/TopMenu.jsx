import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { FaUserCircle } from "react-icons/fa";
import { TopUserImage, TopUserContainer } from "./TopMenuStyled";

const TopMenu = () => {
  const { setUser, user, authenticated } = useContext(AuthContext);

  // useEffect(() => {
  //   setUser({
  //     avatar:
  //       "https://images.vexels.com/media/users/3/160888/isolated/preview/bc02981b8349e795c78a3dadfdb1770b-ilustracao-de-copo-de-leite.png",
  //   });
  // }, []);

  const [search, setSearch] = useState("");
  return (
    <TopUserContainer>
      <input type="text" />
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
