import { useContext } from "react";
//import { pizzaCart } from "../helpers/pizzas";
import { CartContext } from "../contexts/CartContext.jsx";
import { PizzasContext } from "../contexts/PizzasContext.jsx";
import { toast } from "sonner";
import axios from "axios";
import { localhost } from "../helpers/fetchingUrl.js";

export const useCartHook = () => {
  const { data } = useContext(PizzasContext);
  const { cart, setCart } = useContext(CartContext);

  //const { id, count } = cart;
  const addProductToCart = (id) => {
    const product = data.find((product) => product.id === id);
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      setCart((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart((prevState) => [...prevState, { ...product, count: 1 }]);
    }
  };
  const addItem = (id) => {
    setCart((prevState) => {
      return prevState.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
    });
  };

  const removeItem = (id) => {
    setCart((prevState) => {
      return prevState
        .map((product) => {
          if (product.id === id) {
            return {
              ...product,
              count: product.count - 1,
            };
          }
          return product;
        })
        .filter((product) => product.count > 0);
    });
  };

  const deleteItem = (id) => {
    setCart((prevState) => {
      return prevState.filter((product) => product.id !== id);
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);
  };

  const checkout = async () => {
    // Implement checkout logic here
    console.log("Cart Items", cart);
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Debes iniciar sesión para realizar el pago");
      return;
    }
    try {
      console.log(token);
      const response = await axios.post(
        `${localhost}/api/checkouts/`,
        { cart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response);
        toast.success("Pago realizado con éxito, se limpiará tu carrito");
        setTimeout(() => {
          setCart([]);
        }, 1500);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Error al procesar el pago");
    }
  };

  return {
    cart,
    addProductToCart,
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
    checkout,
  };
};
