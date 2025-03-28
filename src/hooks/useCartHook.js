import { useState } from "react";
import { pizzaCart } from "../helpers/pizzas";

export const useCartHook = () => {
  const [cart, setCart] = useState(pizzaCart);

  //const { id, count } = cart;

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

  return {
    cart,
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
  };
};
