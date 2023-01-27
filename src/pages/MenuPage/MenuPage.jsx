import { AiOutlineLeft } from "react-icons/ai";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { StyledButtonMenu, StyledMainContainer, StyledTopoMenu } from "./MenuPageStyled";
import { HiShoppingCart } from "react-icons/hi";
import { TiHome } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { ImDropbox } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const MenuPage = () => {
  const { authenticated, user } = useContext(AuthContext);
  return (
    <>
      <TopMenu>
        <StyledTopoMenu>
          <div>
            <AiOutlineLeft />
          </div>
          <h1>Menu</h1>
        </StyledTopoMenu>
      </TopMenu>
      <StyledMainContainer>
        {!authenticated && (
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
        )}

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
      </StyledMainContainer>
      <FooterMenu />
    </>
  );
};

export default MenuPage;
