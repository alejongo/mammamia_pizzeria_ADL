import { useEffect, useState } from "react";

export const useFetchPizza = (url) => {
  const [pizzas, setPizzas] = useState({
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
      setPizzas({
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
    setPizzas({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };
  return {
    data: pizzas.data,
    isLoading: pizzas.isLoading,
    hasError: pizzas.hasError,
  };
};
