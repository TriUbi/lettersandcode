import React, { useState } from "react";
import {
  HeaderWrapper,
  HamburgerButton,
  Title,
  BookIcon,
} from "../styles/components/Header.styles";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <HamburgerButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰
        </HamburgerButton>
        <Title>Between Letters and Code</Title>

        <BookIcon src="/iconbook.png" alt="Book Icon" />
      </HeaderWrapper>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
