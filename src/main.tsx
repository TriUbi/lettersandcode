import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Auth0Provider
        domain="dev-omepje3epi0ja1cb.us.auth0.com"
        clientId="kCqnET9nIs6kIgNGr8EwBytT9HJg6Mc4"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </CartProvider>
  </StrictMode>
);
