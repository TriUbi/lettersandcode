import {
  ProfileWrapper,
  ProfileHeader,
  ProfileImage,
  ProfileDetails,
  BookList,
  BookItem,
} from "../../styles/pages/ReaderProfile.styles";

const ReaderProfile = () => {
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <ProfileImage src="https://via.placeholder.com/150" alt="Reader" />
        <ProfileDetails>
          <h2>Maria López</h2>
          <p>Lectora ávida de novelas de misterio y ciencia ficción.</p>
        </ProfileDetails>
      </ProfileHeader>
      <BookList>
        <h3>Libros comprados</h3>
        <BookItem>El Gran Misterio</BookItem>
        <BookItem>La Ciudad Perdida</BookItem>
        <BookItem>La Última Frontera</BookItem>
      </BookList>
      <BookList>
        <h3>Favoritos, compra con un click</h3>
        <BookItem>El bosque encantado</BookItem>
        <BookItem>El Cielo Perdido</BookItem>
        <BookItem>Amigos Para Siempre</BookItem>
      </BookList>
    </ProfileWrapper>
  );
};

export default ReaderProfile;
