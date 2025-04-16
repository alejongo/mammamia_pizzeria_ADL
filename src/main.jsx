import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
//import { Cart } from "./components/cart/Cart.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { PizzasProvider } from "./contexts/PizzasContext.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <PizzasProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzasProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
