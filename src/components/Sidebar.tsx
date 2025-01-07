import React from "react";
import {
  SidebarWrapper,
  SidebarMenu,
  Overlay,
} from "../styles/components/Sidebar.styles";
import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <SidebarWrapper open={open}>
        <SidebarMenu>
          <li>
            <Link to="/" onClick={onClose}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/books" onClick={onClose}>
              Libros
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" onClick={onClose}>
              Cómo Funciona
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={onClose}>
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={onClose}>
              Contacto
            </Link>
          </li>
        </SidebarMenu>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
