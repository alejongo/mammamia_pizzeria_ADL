import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { localhost } from "../helpers/fetchingUrl";

export const useLogin = () => {
  useEffect(() => {
    console.log("User Data actualizado", userData);
  }, [userData]);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${localhost}/api/auth/login`, {
        email,
        password,
      });
      setUserData(response.data.token);

      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const handleLogOut = () => {
    console.log("Sesion cerrada");
    localStorage.removeItem("token");
    setUserData(null);
  };

  return {
    userData,
    setUserData,
    login,
    handleLogOut,
  };
};
