import React, { useState } from "react";
import {
  HeaderWrapper,
  HamburgerButton,
  Title,
  BookIconWrapper,
  CartCount,
} from "../styles/components/Header.styles";
import Sidebar from "./Sidebar";
import { useCart } from "../context/CartContext";
import BookIcon from "../../public/iconbook.png";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
      <HeaderWrapper>
        <HamburgerButton onClick={toggleSidebar}>☰</HamburgerButton>
        <Title onClick={() => navigate("/")}>Between Letters and Code</Title>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {user ? (
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{ color: "black" }}
            >
              Cerrar Sesión
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => navigate("/login")}
                sx={{ color: "black" }}
              >
                Iniciar Sesión
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/signup")}
                sx={{ color: "black" }}
              >
                Registrarse
              </Button>
            </>
          )}
          <BookIconWrapper onClick={() => navigate("/cart")}>
            <img src={BookIcon} alt="Carrito" />
            {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
          </BookIconWrapper>
        </div>
      </HeaderWrapper>
      <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;
