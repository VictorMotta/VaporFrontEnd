import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/authContext";
import { useContext } from "react";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
  function Private({ children }) {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to='/' />;
    }

    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/carrinho' element={<HomePage />} />
          <Route path='/menu' element={<HomePage />} />
          <Route path='/cadastro' element={<SignUpPage />} />
          <Route path='/login' element={<SignInPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
