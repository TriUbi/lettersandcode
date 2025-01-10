import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const CartWrapper = styled("div")({
  padding: "20px",
  maxWidth: "800px",
  margin: "100px auto",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
});

export const CartItem = styled("div")({
  display: "flex",
  padding: "15px",
  borderBottom: "1px solid #eee",
  "&:last-child": {
    borderBottom: "none",
  },
});

export const CartItemImage = styled("img")({
  width: "100px",
  height: "150px",
  objectFit: "cover",
  marginRight: "20px",
  borderRadius: "4px",
});

export const CartItemDetails = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const CartItemTitle = styled("h3")({
  margin: "0 0 10px 0",
  fontSize: "1.2rem",
  fontFamily: "'Playfair Display', serif",
});

export const CartItemPrice = styled("p")({
  margin: "0",
  fontSize: "1.1rem",
  color: "#333",
});

export const RemoveButton = styled(Button)({
  alignSelf: "flex-start",
  marginTop: "10px",
  color: "#ff4444",
  "&:hover": {
    backgroundColor: "rgba(255, 68, 68, 0.1)",
  },
});

export const CartTotal = styled("div")({
  margin: "20px 0",
  padding: "20px 0",
  borderTop: "2px solid #eee",
  fontSize: "1.4rem",
  fontWeight: "bold",
  textAlign: "right",
  fontFamily: "'Playfair Display', serif",
});

export const CheckoutButton = styled(Button)({
  display: "block",
  width: "100%",
  padding: "15px",
  backgroundColor: "#333",
  color: "white",
  fontSize: "1.1rem",
  "&:hover": {
    backgroundColor: "#444",
  },
  "&:disabled": {
    backgroundColor: "#ccc",
  },
});

export const EmptyCartMessage = styled("p")({
  textAlign: "center",
  fontSize: "1.2rem",
  color: "#666",
  margin: "40px 0",
  fontFamily: "'Playfair Display', serif",
});
