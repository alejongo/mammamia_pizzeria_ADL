import { useContext } from "react";
//import { pizzaCart } from "../helpers/pizzas";
import { CartContext } from "../contexts/CartContext.jsx";
import { PizzasContext } from "../contexts/PizzasContext.jsx";

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

  return {
    cart,
    addProductToCart,
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
  };
};
