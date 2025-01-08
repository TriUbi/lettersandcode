import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const CartTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-left: 15px;
`;

export const CartItemTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 5px 0;
`;

export const CartItemPrice = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0 0 10px 0;
`;

export const RemoveButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e04040;
  }
`;

export const CartTotal = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 0;
  color: #333;
`;

export const CheckoutButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }

  &:active {
    transform: scale(0.95);
  }
`;
