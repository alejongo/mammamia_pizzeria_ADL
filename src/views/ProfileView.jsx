import { useContext } from "react";
import { useProfileForm } from "../hooks/useProfileForm";
import { UserContext } from "../contexts/UserContext";

export const ProfileView = () => {
  const { userData, setUserData, handleLogOut } = useContext(UserContext);
  console.log("DATOS DESDE CONTEXTO", userData);
  const { nameInput, onHandleChange } = useProfileForm({
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

  // useEffect(() => {
  //   const getUserDataFromLocalStorage = async () => {
  //     console.log("User Data inicial", userData);
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       try {
  //         const response = await axios.get(
  //           "http://localhost:5001/api/auth/me",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         setUserData(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };
  //   getUserDataFromLocalStorage();
  // }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 ">
      {!userData ? (
        <p>No hay datos</p>
      ) : (
        <div className="rounded-lg -mt-32 bg-white px-5 py-6 shadow-sm sm:px-6">
          <div className="divide-y divide-gray-900/10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
              <div className="px-4 sm:px-0">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Información personal
                </h2>
              </div>

              <form className="bg-white ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Nombres
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          onChange={onHandleChange}
                          value={nameInput.firstName}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Apellidos
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          onChange={onHandleChange}
                          value={nameInput.lastName}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Correo Electrónico
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          onChange={onHandleChange}
                          value={userData.email}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Pais
                      </label>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Dirección para entrega de domicilios
                      </label>
                      <div className="mt-2">
                        <input
                          id="street-address"
                          name="address"
                          type="text"
                          autoComplete="street-address"
                          onChange={onHandleChange}
                          value={nameInput.address}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Ciudad
                      </label>
                      <div className="mt-2">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          autoComplete="address-level2"
                          onChange={onHandleChange}
                          value={nameInput.city}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Estado / Provincia
                      </label>
                      <div className="mt-2">
                        <input
                          id="region"
                          name="state"
                          type="text"
                          autoComplete="address-level1"
                          onChange={onHandleChange}
                          value={nameInput.state}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        ZIP / Código Postal
                      </label>
                      <div className="mt-2">
                        <input
                          id="postal-code"
                          name="zipCode"
                          type="text"
                          autoComplete="postal-code"
                          onChange={onHandleChange}
                          value={nameInput.zipCode}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                  <div className="flex justify-start">
                    <button
                      className="p-2 text-red-400 hover:rounded hover:outline hover:outline-red-400 hover:cursor-pointer"
                      onClick={handleLogOut}
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                  <div className="flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Actualizar información
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
