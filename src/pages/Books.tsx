import {
  BooksWrapper,
  BookCard,
  BookImage,
  BookTitle,
  BookAuthor,
  BuyButton,
} from "../styles/pages/Books.styles";

const books = [
  {
    id: 1,
    title: "El Gran Misterio",
    author: "Juan Pérez",
    image: "https://via.placeholder.com/150",
    price: "$10.00",
  },
  {
    id: 2,
    title: "La Ciudad Perdida",
    author: "Ana Gómez",
    image: "https://via.placeholder.com/150",
    price: "$12.50",
  },
  {
    id: 3,
    title: "La Última Frontera",
    author: "Carlos Díaz",
    image: "https://via.placeholder.com/150",
    price: "$15.00",
  },
];

export default function Books() {
  return (
    <BooksWrapper>
      {books.map((book) => (
        <BookCard key={book.id}>
          <BookImage src={book.image} alt={book.title} />
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
          <p>{book.price}</p>
          <BuyButton>Comprar</BuyButton>
        </BookCard>
      ))}
    </BooksWrapper>
  );
}
