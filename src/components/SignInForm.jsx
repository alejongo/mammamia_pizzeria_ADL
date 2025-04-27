import { useContext, useState } from "react";
import { toast, Toaster } from "sonner";
import { UserContext } from "../contexts/UserContext";
//import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";

export const SignInForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { userData, setUserData, login } = useContext(UserContext);

  const onHandleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (user.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    try {
      const response = await login(user.email, user.password);
      if (response) {
        setUserData(response);
        localStorage.setItem("token", response.token);
        toast.success("Autenticación exitosa");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error("Los datos ingresados son incorrectos");
      }
    } catch (error) {
      console.log(error);
    }

    // if ((user.email != "") & (user.password != "")) {
    //   toast.success("Autenticación exitosa");
    // } else if (user.email === "" || user.password === "") {
    //   toast.error("Todos los campos son obligatorios");
    // } else if (user.password.length < 6) {
    //   toast.error("La contraseña debe tener al menos 6 caracteres");
    // } else {
    //   toast.error("Los datos ingresados son incorrectos");
    // }

    console.log(userData);
  };

  return (
    <>
      <div className="mt-10">
        <div>
          <form action="#" onSubmit={onHandleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={onHandleChange}
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onHandleChange}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                />
                {(user.password.length > 3) & (user.password.length < 6) ? (
                  <p className="text-red-300 text-sm/6">
                    La contraseña debe tener al menos 6 caracteres
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm/6">
                <a href="#" className="font-semibold  hover:text-red-500">
                  Recordar contraseña
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster richColors position="top-right" closeButton />
    </>
  );
};
