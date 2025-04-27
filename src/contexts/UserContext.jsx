import { createContext, use, useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";
import axios from "axios";
import { useNavigate } from "react-router";
import { localhost } from "../helpers/fetchingUrl";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const { login, handleLogOut } = useLogin();
  const { register } = useRegister();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${localhost}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        localStorage.removeItem("token");
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthToken();
  }, []);

  // Funció encargada del login
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${localhost}/api/auth/login`, {
        email,
        password,
      });
      setUserData(response.data);
      localStorage.setItem("token", response.data.token);
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
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ userData, setUserData, handleLogOut, register, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
