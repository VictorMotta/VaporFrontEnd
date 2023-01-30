import {
  FormStyled,
  Input,
  CheckoutDiv,
  StyledTopCheckout,
  StyledContainerTotalWriting,
  StyledTotalWriting,
  StyledTotalCheckoutDiv,
  StyledButtonPay,
} from "./CheckoutPageStyled";
import { useContext, useState } from "react";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/authContext";
import { apiVapor } from "../../services/apiVapor";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    cardNumber: "",
    validDate: "",
    ccv: "",
    cardName: "",
    cpf: "",
  });
  const navigate = useNavigate();
  const { cart, setCart, totalCompra } = useContext(CartContext);
  const { token } = useContext(AuthContext);

  const products = cart.map((product) => {
    return {
      _id: product._id,
    };
  });

  function submitForm(e) {
    e.preventDefault();
    const body = {
      ...form,
      products,
      total: totalCompra,
    };

    apiVapor
      .finishOrder(body, token)
      .then((res) => {
        alert("Compra realizada com sucesso!");
        localStorage.setItem("cartUser", JSON.stringify([]));
        setCart([]);
        navigate("/");
      })
      .catch((err) => {
        err.response.data.forEach((erro) => alert(erro));
      });
  }

  function editForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <TopMenu>
        <StyledTopCheckout>
          <div>
            <AiOutlineLeft onClick={() => navigate(-1)} />
          </div>
          <h1>Pagamento</h1>
        </StyledTopCheckout>
      </TopMenu>
      <CheckoutDiv>
        <FormStyled onSubmit={submitForm}>
          <Input
            type='number'
            name='cardNumber'
            placeholder='Número do cartão'
            value={form.cardNumber}
            onChange={editForm}
            required
          />
          <Input
            type='text'
            name='validDate'
            placeholder='Data de validade'
            value={form.validDate}
            onChange={editForm}
            required
          />
          <Input
            type='number'
            name='ccv'
            minLength={3}
            maxLength={3}
            placeholder='CCV'
            value={form.ccv}
            onChange={editForm}
            required
          />
          <Input
            type='text'
            name='cardName'
            placeholder='Nome impresso no cartão'
            value={form.cardName}
            onChange={editForm}
            required
          />
          <Input
            type='number'
            name='cpf'
            placeholder='CPF'
            value={form.cpf}
            onChange={editForm}
            required
          />
          <StyledTotalCheckoutDiv>
            <StyledContainerTotalWriting>
              <StyledTotalWriting>Total:</StyledTotalWriting>
              <StyledTotalWriting>R$ {totalCompra.toFixed(2).replace(".", ",")}</StyledTotalWriting>
            </StyledContainerTotalWriting>
            <StyledButtonPay type='submit'>Finalizar Compra</StyledButtonPay>
          </StyledTotalCheckoutDiv>
        </FormStyled>
        <FooterMenu />
      </CheckoutDiv>
    </>
  );
}
