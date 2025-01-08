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

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <HamburgerButton onClick={toggleSidebar}>☰</HamburgerButton>
        <Title onClick={() => navigate("/")}>Between Letters and Code</Title>
        <BookIconWrapper>
          <img src={BookIcon} alt="Carrito" />
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </BookIconWrapper>
      </HeaderWrapper>
      <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;
