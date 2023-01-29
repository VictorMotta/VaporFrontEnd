import { func } from "prop-types";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCompra, setTotalCompra] = useState(0);

  useEffect(() => {
    const recoveredCart = localStorage.getItem("cartUser");

    if (recoveredCart) {
      setCart(JSON.parse(recoveredCart));
    } else if (cart) {
      localStorage.setItem("cartUser", JSON.stringify(cart));
    }
  }, []);

  const handleCart = function (data, boole) {
    let recoveredCart = JSON.parse(localStorage.getItem("cartUser"));
    const isOnList = recoveredCart.find((game) => game._id === data._id);

    if (boole) {
      return isOnList ? true : false;
    }

    if (isOnList) {
      recoveredCart = recoveredCart.filter((game) => game._id !== data._id);
      localStorage.setItem("cartUser", JSON.stringify(recoveredCart));
      setCart(recoveredCart);
      return false;
    } else {
      recoveredCart.push(data);
      setCart(recoveredCart);
      localStorage.setItem("cartUser", JSON.stringify(recoveredCart));
      return true;
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, totalCompra, setTotalCompra, handleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
