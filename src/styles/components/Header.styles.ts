import { styled } from "@mui/material/styles";

export const HeaderWrapper = styled("header")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  color: "black",
  padding: "0px",
  width: "100%",
  height: "80px",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 999,
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
});

export const HamburgerButton = styled("button")({
  background: "none",
  border: "none",
  color: "black",
  fontSize: "2.4rem",
  cursor: "pointer",
  paddingLeft: "10px",
  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
});

export const Title = styled("h1")({
  color: "black",
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "500",
  margin: 0,
  cursor: "pointer",
  fontFamily: "'Playfair Display', serif",
  letterSpacing: "1px",
  position: "relative",
  "&:hover": {
    "&:after": {
      width: "100%",
    },
  },
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-3px",
    left: "0",
    width: "0",
    height: "2px",
    backgroundColor: "black",
    transition: "width 0.3s ease",
  },
  "@media (max-width: 768px)": {
    fontSize: "1rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "1.4rem",
    paddingRight: "10px",
  },
});

export const BookIconWrapper = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: "15px",
  "& img": {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.2s ease",
    },
  },
});

export const CartCount = styled("span")({
  position: "absolute",
  top: "-5px",
  right: "3px",
  backgroundColor: "red",
  color: "white",
  fontSize: "0.8rem",
  fontWeight: "bold",
  padding: "3px 6px",
  borderRadius: "50%",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
});

export const AuthButtonsWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});
