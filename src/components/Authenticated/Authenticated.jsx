import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export function Private({ children }) {
  const { authenticated, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!authenticated) {
    return <Navigate to='/' />;
  }

  return children;
}

export function PrivateAdmin({ children }) {
  const { user } = useContext(AuthContext);
  if (user.typeUser !== "admin") {
    return <Navigate to='/' />;
  }

  return children;
}
