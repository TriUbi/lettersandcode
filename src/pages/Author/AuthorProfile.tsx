import {
  ProfileWrapper,
  ProfileHeader,
  ProfileImage,
  ProfileDetails,
  BookList,
  BookItem,
} from "../../styles/pages/AuthorProfile.styles";

const AuthorProfile = () => {
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <ProfileImage src="https://via.placeholder.com/150" alt="Author" />
        <ProfileDetails>
          <h2>Juan Pérez</h2>
          <p>
            Autor de múltiples bestsellers en el mundo de la literatura
            contemporánea.
          </p>
        </ProfileDetails>
      </ProfileHeader>
      <BookList>
        <h3>Libros publicados</h3>
        <BookItem>El Gran Viaje</BookItem>
        <BookItem>Las Estrellas de la Tierra</BookItem>
        <BookItem>El Último Capítulo</BookItem>
      </BookList>
    </ProfileWrapper>
  );
};

export default AuthorProfile;
