import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  padding: 0px;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 2.4rem;
  cursor: pointer;
  padding-left: 10px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  color: black;
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
`;

export const BookIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease;
    }
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Agrega sombra a la notificación */
`;
