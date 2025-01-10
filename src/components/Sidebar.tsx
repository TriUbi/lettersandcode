import React from "react";
import { SidebarWrapper, Overlay } from "../styles/components/Sidebar.styles";
import { Button } from "@mui/material";
import { User } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  user: User | null | undefined;
  handleLogout: () => Promise<void>;
  navigate: NavigateFunction;
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  onClose,
  user,
  handleLogout,
  navigate,
}) => {
  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <SidebarWrapper open={open}>
        <ul>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                onClose();
              }}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/books"
              onClick={(e) => {
                e.preventDefault();
                navigate("/books");
                onClose();
              }}
            >
              Libros
            </a>
          </li>
          <li>
            <a
              href="/about-us"
              onClick={(e) => {
                e.preventDefault();
                navigate("/about-us");
                onClose();
              }}
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact");
                onClose();
              }}
            >
              Contacto
            </a>
          </li>
          <li className="auth-buttons">
            {user ? (
              <Button
                color="inherit"
                onClick={() => {
                  handleLogout();
                  onClose();
                }}
                sx={{ color: "white" }}
              >
                Cerrar Sesión
              </Button>
            ) : (
              <>
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate("/login");
                    onClose();
                  }}
                  sx={{ color: "white" }}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate("/signup");
                    onClose();
                  }}
                  sx={{ color: "white" }}
                >
                  Registrarse
                </Button>
              </>
            )}
          </li>
        </ul>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
