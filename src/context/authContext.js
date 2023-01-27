import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backToCart, setBackToCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const recoveredToken = localStorage.getItem("tokenUser");

    if (recoveredUser && recoveredToken) {
      setUser(JSON.parse(recoveredUser));
      setToken(JSON.parse(recoveredToken));
    }

    setLoading(false);
  }, []);

  const login = (data) => {
    const loggedUser = data;
    const token = data.token;
    delete loggedUser.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("tokenUser", JSON.stringify(token));

    setUser(loggedUser);
    setToken(token);
    if (backToCart) {
      navigate("/carrinho");
      return setBackToCart(false);
    }
    navigate("/");
  };

  const logout = () => {
    console.log("Você saiu!");
    localStorage.removeItem("user");
    localStorage.removeItem("tokenUser");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, token, login, loading, setBackToCart, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
