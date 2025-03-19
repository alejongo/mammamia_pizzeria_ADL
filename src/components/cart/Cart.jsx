import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { pizzaCart } from "../../helpers/pizzas";
import { thousandSeparator } from "../../helpers/thousandSeparator";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { CartItem } from "./CartItem";

export const Cart = ({ openState }) => {
  const [open, setOpen] = useState(true);
  //TODO: Falta agregar la funcionalidad de agregar y eliminar productos del carrito
  const [cart, setCart] = useState(pizzaCart);

  useEffect(() => {
    setOpen(!open);
  }, [openState]);

  const addItem = (id) => {
    setCart((prevState) => {
      return prevState.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
    });
  };

  const removeItem = (id) => {
    setCart((prevState) => {
      return prevState
        .map((product) => {
          if (product.id === id) {
            return {
              ...product,
              count: product.count - 1,
            };
          }
          return product;
        })
        .filter((product) => product.count > 0);
    });
  };

  const deleteItem = (id) => {
    setCart((prevState) => {
      return prevState.filter((product) => product.id !== id);
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold text-gray-900">
                        Detalle de tu pedido
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Cart content */}
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cart.map((product) => (
                            <CartItem
                              key={product.id}
                              id={product.id}
                              name={product.name}
                              price={product.price}
                              count={product.count}
                              img={product.img}
                              addItem={addItem}
                              removeItem={removeItem}
                              deleteItem={deleteItem}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* End content */}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>{thousandSeparator(calculateTotal())}</p>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-red-700"
                    >
                      Pagar ahora
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      o{" "}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-red-600 hover:text-red-400 hover:cursor-pointer"
                      >
                        Continua comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
