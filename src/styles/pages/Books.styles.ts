import styled from "styled-components";

// Contenedor principal para los libros
export const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

// Estilo de cada card de libro
export const BookCard = styled.div`
  background-color: #fff;
  width: 250px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-10px);
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

// Imagen del libro
export const BookImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

// Título del libro
export const BookTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 10px 0;
`;

// Autor del libro
export const BookAuthor = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  text-align: center;
`;

// Botón de compra
export const BuyButton = styled.button`
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }

  &:active {
    transform: scale(0.95);
  }
`;
