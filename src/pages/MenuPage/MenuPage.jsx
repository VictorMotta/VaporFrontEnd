import { AiOutlineLeft } from "react-icons/ai";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { StyledButtonMenu, StyledMainContainer, StyledTopoMenu } from "./MenuPageStyled";
import { HiShoppingCart } from "react-icons/hi";
import { TiHome } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { ImDropbox, ImExit } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";

const MenuPage = () => {
  const { authenticated, user, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOutButton = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    apiAuth
      .signOut(config)
      .then((res) => {
        logout();
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("Erro Interno ao tentar sair!");
      });
  };

  return (
    <>
      <TopMenu>
        <StyledTopoMenu>
          <div>
            <AiOutlineLeft onClick={() => navigate(-1)} />
          </div>
          <h1>Menu</h1>
        </StyledTopoMenu>
      </TopMenu>
      <StyledMainContainer>
        <StyledButtonMenu to='/'>
          <span>
            <TiHome />
          </span>
          <h1>Início</h1>
        </StyledButtonMenu>
        <StyledButtonMenu to='/carrinho'>
          <span>
            <HiShoppingCart />
          </span>
          <h1>Carrinho</h1>
        </StyledButtonMenu>
        {!user ||
          (user.typeUser === "admin" && (
            <StyledButtonMenu to='/cadastro-produto'>
              <span>
                <ImDropbox />
              </span>
              <h1>Cadastrar Produtos</h1>
            </StyledButtonMenu>
          ))}

        {!authenticated ? (
          <>
            <StyledButtonMenu to='/login'>
              <span>
                <BsFillPersonFill />
              </span>
              <h1>Logar</h1>
            </StyledButtonMenu>
            <StyledButtonMenu to='/cadastrar'>
              <span>
                <MdGroup />
              </span>
              <h1>Cadastrar</h1>
            </StyledButtonMenu>
          </>
        ) : (
          <>
            <StyledButtonMenu to='/' onClick={signOutButton}>
              <span>
                <ImExit />
              </span>
              <h1>Sair</h1>
            </StyledButtonMenu>
          </>
        )}
      </StyledMainContainer>
      <FooterMenu />
    </>
  );
};

export default MenuPage;
