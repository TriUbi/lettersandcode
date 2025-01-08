import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(197, 187, 187, 0);
  color: white;
  padding: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;

  @media (max-width: 768px) {
    padding: 10px;
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

export const BookIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
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
`;
