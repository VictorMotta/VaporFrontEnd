import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, token, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
