import React from "react";
import { SidebarWrapper, Overlay } from "../styles/components/Sidebar.styles";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <SidebarWrapper open={open}>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/books">Libros</a>
          </li>
          <li>
            <a href="/about-us">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
