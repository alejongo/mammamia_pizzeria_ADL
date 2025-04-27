import "../App.css";
import { Cart } from "./cart/Cart";

import { UserContext } from "../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { thousandSeparator } from "../helpers/thousandSeparator";
import { useContext, useState } from "react";
import { useCartHook } from "../hooks/useCartHook";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const userInfo = {
  name: "Alejandro Gomez",
  email: "alejo@gmail.com",
  imageUrl: "./images/user-icon.png",
};

const signInNavigation = [
  {
    name: "Sign In",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
];

export const NavbarMenu = () => {
  const navigate = useNavigate();
  const navigation = [{ name: "Home", href: "/" }];

  const [cartOpen, setCartOpen] = useState(false);
  // El hook userCartHook es el encargado de consumir el CartContext
  const { calculateTotal } = useCartHook();

  const total = calculateTotal();
  const { userData, handleLogOut } = useContext(UserContext);

  const activeSession = localStorage.getItem("token");

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-gray-700">
            <div className="flex h-16 items-center justify-between px-4 sm:px-0">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="Your Company"
                    src="./images/pizza-logo.png"
                    className="size-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-8">
                  <div
                    className=" flex items-center gap-3 text-lime-300 p-1 outline-1 rounded hover:bg-lime-300 hover:text-lime-800 hover:cursor-pointer"
                    onClick={() => setCartOpen(!cartOpen)}
                  >
                    <ShoppingCartIcon className="size-5" /> |
                    <a href="#">{`$ ${thousandSeparator(total)}`}</a>
                  </div>
                  <Cart openState={cartOpen} />
                  {!activeSession ? (
                    /* User SigIn Navigation */
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {signInNavigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                              isActive
                                ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Perfil del usuario dropdown */
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 hover:cursor-pointer hover:ring-2 hover:ring-lime-200 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            alt=""
                            src="./images/user-icon.png"
                            className="size-8 rounded-full"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <MenuItem>
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                            onClick={() => navigate("/profile")}
                          >
                            Perfil del usuario
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                            onClick={handleLogOut}
                          >
                            Cerrar Sesion
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="border-b border-gray-700 md:hidden">
          <div className="space-y-1 px-2 py-3 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-whiteblock rounded-md px-3 py-2 text-base font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                }
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>

          {!activeSession ? (
            <div className="block md:hidden">
              <div className="ml-2 mb-2 flex items-baseline space-x-4">
                {signInNavigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt=""
                    src={userInfo.imageUrl}
                    className="size-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">
                    {userInfo.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {userInfo.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <DisclosureButton
                  as="a"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  onClick={() => navigate("/profile")}
                >
                  Perfil del usuario
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  onClick={handleLogOut}
                >
                  Cerrar Sesión
                </DisclosureButton>
              </div>
            </div>
          )}
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};
