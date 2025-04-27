import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { localhost } from "../helpers/fetchingUrl";

export const useRegister = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log("User Data Creado", userData);
  }, [userData]);

  const register = async (email, password) => {
    try {
      const response = await axios.post(`${localhost}/api/auth/register`, {
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        console.log("Usuario creado con éxito");
        setUserData(response.data);
      }
      return response.data;
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

  return { register };
};
