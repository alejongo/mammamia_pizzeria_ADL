import { useState } from "react";

// Este hook se encarga de leer y setear el formulario de perfil del usuario

export const useProfileForm = () => {
  const [nameInput, setNameInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const onHandleChange = (e) => {
    setNameInput({
      ...nameInput,
      [e.target.name]: e.target.value,
    });
    console.log(nameInput);
  };
  return {
    nameInput,
    setNameInput,
    onHandleChange,
  };
};
