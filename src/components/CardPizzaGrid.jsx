import { CardPizza } from "./CardPizza";
//import { pizzas } from "../helpers/pizzas";
import { useFetchPizza } from "../hooks/useFetchPizza";

export const CardPizzaGrid = () => {
  const { data, isLoading, hasError } = useFetchPizza(
    "http://localhost:5000/api/pizzas"
  );

  return (
    <>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
            {isLoading && <p>Cargando Pizzas...</p>}
            {hasError && <p>Error al cargar las pizzas</p>}
            {data &&
              data.map((pizza) => {
                return (
                  <CardPizza
                    key={pizza.id}
                    id={pizza.id}
                    name={pizza.name}
                    desc={pizza.desc}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    img={pizza.img}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};
