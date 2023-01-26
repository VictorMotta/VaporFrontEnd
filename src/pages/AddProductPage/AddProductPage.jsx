import {
  Button,
  FormStyled,
  Input,
  Logo,
  AddProductDiv,
} from "./AddProductStyled";
import logo from "../../assets/images/Logo.png";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import { useState } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    promoPercentage: "",
  });
  const [images, setImages] = useState([""]);

  function submitForm(event) {
    event.preventDefault();
  }

  function editForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addImageInput() {
    setImages([...images, ""]);
  }

  function handleChangeImage(e) {
    const index = e.target.name.split("-")[1];
    const newImages = [...images];
    newImages[index] = e.target.value;
    setImages(newImages);
    console.log(newImages);
  }

  return (
    <AddProductDiv>
      <Logo src={logo} alt="logo" />
      <FormStyled onSubmit={submitForm}>
        <Input
          name="title"
          value={form.title}
          required
          type="text"
          placeholder="Título"
          onChange={editForm}
        />
        <Input
          name="description"
          value={form.description}
          required
          type="text"
          placeholder="Descrição"
          onChange={editForm}
        />
        <Input
          name="category"
          value={form.category}
          required
          type="text"
          placeholder="Categoria"
          onChange={editForm}
        />
        <Input
          name="price"
          value={form.price}
          required
          type="text"
          placeholder="Preço"
          onChange={editForm}
        />
        <Input
          name="promoPercentage"
          value={form.promoPercentage}
          required
          type="text"
          placeholder="Porcentagem da promoção"
          onChange={editForm}
        />
        {images.map((image, index) => (
          <Input
            key={index}
            name={`image-${index}`}
            value={image}
            required
            type="text"
            placeholder="Imagem"
            onChange={handleChangeImage}
          />
        ))}
        <Button onClick={addImageInput}>Adicionar imagem</Button>
        <Button type="submit">Cadastrar</Button>
      </FormStyled>
      <FooterMenu />
    </AddProductDiv>
  );
}
