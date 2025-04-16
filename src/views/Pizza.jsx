import { Tab, TabGroup, TabList } from "@headlessui/react";

import { useFetchPizza } from "../hooks/useFetchPizza";
import { thousandSeparator } from "../helpers/thousandSeparator";
import { Breadcrumb } from "../components/Breadcrumb";
import { useParams } from "react-router";

export const Pizza = () => {
  const { id } = useParams();

  const { data, isLoading, hasError } = useFetchPizza(
    `http://localhost:5001/api/pizzas/${id}`
  );
  console.log(data);

  const pizza = data;

  return (
    <>
      {isLoading && <p>Cargando Pizza...</p>}
      {hasError && <p>Error al cargar la pizza</p>}
      {data && (
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 ">
          <div className="rounded-lg -mt-32 bg-white px-5 py-6 shadow-sm sm:px-6">
            <Breadcrumb pizza={pizza} />
            <div className=" mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-32">
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-4">
                <TabGroup className="flex ">
                  <div className="mx-auto mt-2 w-full max-w-2xl sm:block lg:max-w-none">
                    <TabList className="grid ">
                      <Tab className="group relative flex h-96 w-96 cursor-pointer  rounded-md bg-white text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 focus:ring-3 focus:ring-red-500/50 focus:ring-offset-4 focus:outline-hidden">
                        <span className="sr-only">{pizza.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            alt=""
                            src={pizza.img}
                            className="size-full object-cover"
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-red-500/50"
                        />
                      </Tab>
                    </TabList>
                  </div>
                </TabGroup>

                {/* pizza info */}
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
                    {pizza.name}
                  </h1>

                  <div className="mt-3">
                    <h2 className="sr-only">pizza information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">
                      $ {thousandSeparator(pizza.price)}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold">Ingredientes</h3>

                    <div className="space-y-6 text-base text-gray-700 capitalize">
                      {pizza.ingredients.join(", ")}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-bold">Descripción</h3>

                    <div className="space-y-6 text-base text-gray-700">
                      {pizza.desc}
                    </div>
                  </div>

                  <form className="mt-6">
                    <div className="mt-10 flex">
                      <button className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 hover:cursor-pointer focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden sm:w-full">
                        Añadir al carrito
                      </button>

                      <button
                        type="button"
                        className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                      ></button>
                    </div>
                  </form>

                  <section aria-labelledby="details-heading" className="mt-12">
                    <h2 id="details-heading" className="sr-only">
                      Additional details
                    </h2>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
