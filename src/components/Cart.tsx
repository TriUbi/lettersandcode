import {
  CartWrapper,
  CartTitle,
  CartItemsWrapper,
  CartItem,
  CartItemImage,
  CartItemDetails,
  CartItemTitle,
  CartItemPrice,
  RemoveButton,
  CartTotal,
  CheckoutButton,
} from "../styles/components/Cart.styles";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price;
  }, 0);

  return (
    <CartWrapper>
      <CartTitle>Carrito de Compras</CartTitle>
      <CartItemsWrapper>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <CartItemImage src={item.image} alt={item.title} />
            <CartItemDetails>
              <CartItemTitle>{item.title}</CartItemTitle>
              <p>por {item.author}</p>
              <CartItemPrice>{item.price}</CartItemPrice>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Eliminar
              </RemoveButton>
            </CartItemDetails>
          </CartItem>
        ))}
      </CartItemsWrapper>
      <CartTotal>Total: ${totalPrice.toFixed(2)}</CartTotal>
      <CheckoutButton>Finalizar Compra</CheckoutButton>
    </CartWrapper>
  );
}
