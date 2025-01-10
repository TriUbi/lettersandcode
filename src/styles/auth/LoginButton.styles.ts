import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const LoginSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
  color: #555;
`;

export const StyledLoginButton = styled.button`
  background-color: #333;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #444;
    transform: scale(1.05);
  }

  &:active {
    background-color: #555;
    transform: scale(0.95);
  }
`;
