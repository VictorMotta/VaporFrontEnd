import {
  Button,
  FormStyled,
  Input,
  LinkStyled,
  Logo,
  SingUpDiv,
} from "./SignUpPageStyled";
import logo from "../../assets/images/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    avatar: "",
    password: "",
    confirmPassword: "",
  });

  function submitForm(event) {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  }

  function editForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <SingUpDiv>
      <Logo src={logo} alt="logo" />
      <FormStyled onSubmit={submitForm}>
        <Input
          name="name"
          value={form.name}
          required
          type="text"
          placeholder="Nome"
          onChange={editForm}
        />
        <Input
          name="email"
          value={form.email}
          required
          type="email"
          placeholder="E-mail"
          onChange={editForm}
        />
        <Input
          name="avatar"
          value={form.avatar}
          required
          type="url"
          placeholder="Imagem de perfil (URL)"
          onChange={editForm}
        />
        <Input
          name="password"
          value={form.password}
          required
          type="password"
          placeholder="Senha"
          onChange={editForm}
        />
        <Input
          name="confirmPassword"
          value={form.confirmPassword}
          required
          type="password"
          placeholder="Confirme a senha"
          onChange={editForm}
        />
        <Button onClick={submitForm}>Cadastrar</Button>
      </FormStyled>

      <LinkStyled to="/login">Já tem uma conta? Entre agora</LinkStyled>
    </SingUpDiv>
  );
}
