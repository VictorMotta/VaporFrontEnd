import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import CartPage from "./pages/CartPage/CartPage";
import { CartProvider } from "./context/cartContext";
import { Private, PrivateAdmin } from "./components/Authenticated/Authenticated";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/carrinho' element={<CartPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/cadastrar' element={<SignUpPage />} />
            <Route path='/login' element={<SignInPage />} />
            <Route
              path='/cadastro-produto'
              element={
                <Private>
                  <PrivateAdmin>
                    <AddProductPage />
                  </PrivateAdmin>
                </Private>
              }
            />
            <Route
              path='/pagamento'
              element={
                <Private>
                  <CartPage />
                </Private>
              }
            />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
