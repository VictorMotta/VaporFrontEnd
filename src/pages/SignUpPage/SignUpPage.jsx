import { Input, Logo, SingUpDiv } from "./SignUpPageStyled";
import logo from "../../assets/images/Logo.png";
import { Form } from "react-router-dom";

export default function SignUpPage() {
  return (
    <SingUpDiv>
      <Logo src={logo} alt="logo" />
      {/* <Form>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme a senha" />
        <Input type="submit" value="Cadastrar" />
      </Form> */}
    </SingUpDiv>
  );
}
