import {
  BooksWrapper,
  BookCard,
  BookImage,
  BookTitle,
  BookAuthor,
  BuyButton,
  BookDetails,
  BookSynopsis,
} from "../styles/pages/Books.styles";
import { useCart } from "../context/CartContext";

const books = [
  {
    id: 1,
    title: "El Gran Misterio",
    author: "Juan Pérez",
    image: "https://via.placeholder.com/150",
    price: "$10.00",
    synopsis:
      "Una historia llena de misterio y suspenso, con giros inesperados en cada página.",
  },
  {
    id: 2,
    title: "La Ciudad Perdida",
    author: "Ana Gómez",
    image: "https://via.placeholder.com/150",
    price: "$12.50",
    synopsis:
      "Una aventura épica a través de una ciudad olvidada, llena de secretos y riquezas.",
  },
  {
    id: 3,
    title: "La Última Frontera",
    author: "Carlos Díaz",
    image: "https://via.placeholder.com/150",
    price: "$15.00",
    synopsis:
      "Una historia de ciencia ficción que explora los límites del universo conocido.",
  },
];

export default function Books() {
  const { addToCart, cartItems } = useCart();

  const isInCart = (bookId: number) => {
    return cartItems.some((item) => item.id === bookId);
  };

  const handleAddToCart = (book: (typeof books)[0]) => {
    if (!isInCart(book.id)) {
      addToCart(book);
    }
  };

  return (
    <BooksWrapper>
      {books.map((book) => (
        <BookCard key={book.id}>
          <BookImage src={book.image} alt={book.title} />
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
          <p>{book.price}</p>
          <BookDetails>
            <BookSynopsis>{book.synopsis}</BookSynopsis>
            <BuyButton
              onClick={() => handleAddToCart(book)}
              disabled={isInCart(book.id)}
            >
              {isInCart(book.id) ? "En el carrito" : "Comprar"}
            </BuyButton>
          </BookDetails>
        </BookCard>
      ))}
    </BooksWrapper>
  );
}
