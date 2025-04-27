import { createContext, useState } from "react";
import { useFetchPizza } from "../hooks/useFetchPizza";
import { localhost } from "../helpers/fetchingUrl";

export const PizzasContext = createContext();

export const PizzasProvider = ({ children }) => {
  const { data, isLoading, hasError, error } = useFetchPizza(
    `${localhost}/api/pizzas`
  );

  return (
    <PizzasContext.Provider value={{ data, isLoading, hasError, error }}>
      {children}
    </PizzasContext.Provider>
  );
};
