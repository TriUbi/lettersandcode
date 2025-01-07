import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  height: 60px;
  width: 100%;

  top: 0;
  left: 0;
  z-index: 1001;

  @media (max-width: 768px) {
    height: 50px;
    padding: 0 10px;
  }
`;

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  color: black;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  flex: none;
`;

export const BookIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s, color 0.2s;
  }
`;
