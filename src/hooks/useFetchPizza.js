import { useEffect, useState } from "react";

export const useFetchPizza = (url) => {
  const [pizzaState, setPizzaState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    const resp = await fetch(url);
    // Verificamos si el fetch falla y mostramos el mensaje
    if (!resp.ok) {
      setPizzaState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    // SI el fetch no falla, obtenemos los datos
    const data = await resp.json();
    // Agregamos los datos a nuevo estado
    setPizzaState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };
  return {
    data: pizzaState.data,
    isLoading: pizzaState.isLoading,
    hasError: pizzaState.hasError,
  };
};
