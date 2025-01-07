import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
  width: 100%;
  max-width: 800px;
  justify-content: flex-start;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const ProfileDetails = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

// Lista de libros publicados
export const BookList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 800px;
`;

export const BookItem = styled.li`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
  &:hover {
    color: #007bff;
    cursor: pointer;
  }
`;
