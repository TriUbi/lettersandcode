import styled from "styled-components";

export const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const BookCard = styled.div`
  background-color: #fff;
  width: 250px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  position: relative;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const BookTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 10px 0;
`;

export const BookAuthor = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  text-align: center;
`;

export const BookDetails = styled.div`
  position: absolute;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid #ddd;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  ${BookCard}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const BookSynopsis = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: #333;
  margin-top: 10px;
  text-align: center;
  flex-grow: 1;
  padding: 5px;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

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
