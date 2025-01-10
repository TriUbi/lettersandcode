import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import {
  CartWrapper,
  CartItem,
  CartItemImage,
  CartItemDetails,
  CartItemTitle,
  CartItemPrice,
  RemoveButton,
  CartTotal,
  CheckoutButton,
  EmptyCartMessage,
} from "../styles/components/Cart.styles";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price;
  }, 0);

  const handleCheckout = () => {
    if (!user) {
      setOpenDialog(true);
      return;
    }
    // Aquí iría la lógica de checkout para usuarios autenticados
    clearCart();
    // Navegar a la página de confirmación o procesamiento de pago
  };

  const handleLogin = () => {
    setOpenDialog(false);
    navigate("/login");
  };

  const handleSignup = () => {
    setOpenDialog(false);
    navigate("/signup");
  };

  if (cartItems.length === 0) {
    return (
      <CartWrapper>
        <EmptyCartMessage>Tu carrito está vacío</EmptyCartMessage>
      </CartWrapper>
    );
  }

  return (
    <>
      <CartWrapper>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <CartItemImage src={item.image} alt={item.title} />
            <CartItemDetails>
              <CartItemTitle>{item.title}</CartItemTitle>
              <CartItemPrice>{item.price}</CartItemPrice>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Eliminar
              </RemoveButton>
            </CartItemDetails>
          </CartItem>
        ))}
        <CartTotal>Total: ${total.toFixed(2)}</CartTotal>
        <CheckoutButton onClick={handleCheckout}>
          Proceder al pago
        </CheckoutButton>
      </CartWrapper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "'Playfair Display', serif" }}
          >
            Inicia sesión para completar tu compra
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>
            Para finalizar tu compra necesitas tener una cuenta. Por favor,
            inicia sesión o regístrate para continuar con el proceso de pago.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ padding: 2, gap: 1 }}>
          <Button onClick={() => setOpenDialog(false)} color="inherit">
            Cancelar
          </Button>
          <Button onClick={handleSignup} variant="outlined">
            Registrarse
          </Button>
          <Button onClick={handleLogin} variant="contained">
            Iniciar Sesión
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Cart;
