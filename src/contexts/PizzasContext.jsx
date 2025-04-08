import { createContext, useState } from "react";
import { useFetchPizza } from "../hooks/useFetchPizza";

export const PizzasContext = createContext();

export const PizzasProvider = ({ children }) => {
  const { data, isLoading, hasError, error } = useFetchPizza(
    "http://localhost:5000/api/pizzas"
  );

  return (
    <PizzasContext.Provider value={{ data, isLoading, hasError, error }}>
      {children}
    </PizzasContext.Provider>
  );
};
