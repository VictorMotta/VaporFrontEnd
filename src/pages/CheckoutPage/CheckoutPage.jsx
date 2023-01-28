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

export default function CheckoutPage() {
  const [form, setForm] = useState({
    cardNumber: "",
    validDate: "",
    ccv: "",
    cardName: "",
    cpf: "",
  });
  const navigate = useNavigate();
  const cart = useContext(CartContext);

  const total = 150;

  function submitForm(e) {
    e.preventDefault();
    console.log(cart);
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
            type="text"
            name="cardNumber"
            placeholder="Número do cartão"
            value={form.cardNumber}
            onChange={editForm}
          />
          <Input
            type="text"
            name="validDate"
            placeholder="Data de validade"
            value={form.validDate}
            onChange={editForm}
          />
          <Input
            type="text"
            name="ccv"
            placeholder="CCV"
            value={form.ccv}
            onChange={editForm}
          />
          <Input
            type="text"
            name="cardName"
            placeholder="Nome impresso no cartão"
            value={form.cardName}
            onChange={editForm}
          />
          <Input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={form.cpf}
            onChange={editForm}
          />
          <StyledTotalCheckoutDiv>
            <StyledContainerTotalWriting>
              <StyledTotalWriting>Total:</StyledTotalWriting>
              <StyledTotalWriting>
                R$ {total.toFixed(2).replace(".", ",")}
              </StyledTotalWriting>
            </StyledContainerTotalWriting>
            <StyledButtonPay>Finalizar Compra</StyledButtonPay>
          </StyledTotalCheckoutDiv>
        </FormStyled>
        <FooterMenu />
      </CheckoutDiv>
    </>
  );
}
