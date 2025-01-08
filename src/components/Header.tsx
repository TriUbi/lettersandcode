import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  HamburgerButton,
  Title,
  BookIconWrapper,
  CartCount,
} from "../styles/components/Header.styles";
import { useCart } from "../context/CartContext";
import BookIcon from "../../public/iconbook.png";

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HamburgerButton>☰</HamburgerButton>
      <Title>Between Letters and Code</Title>
      <BookIconWrapper onClick={() => navigate("/cart")}>
        <img src={BookIcon} alt="Carrito" />
        {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
      </BookIconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
