import { thousandSeparator } from "../helpers/thousandSeparator";

import PropTypes from "prop-types";
import { useCartHook } from "../hooks/useCartHook";
import { useNavigate } from "react-router";

export const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addProductToCart } = useCartHook();

  const navigate = useNavigate();

  const showPizzaDetail = (id) => {
    navigate(`/api/pizza/${id}`);
    console.log("click", id);
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white outline outline-gray-300 flex flex-col justify-between">
        <img src={img} alt={name} className="w-full h-40 object-cover" />
        <div className="px-2 py-3 sm:p-4 flex flex-col">
          <p className="text-2xl font-bold capitalize">{name}</p>

          <p className="text-sm text-gray-400 italic truncate text-ellipsis">
            {desc}
          </p>

          <p className="mt-3">
            <span className="font-bold">Precio: </span>
            {`$${thousandSeparator(Number(price))}`}
          </p>
          <p className="mt-3">
            <span className="font-bold">Ingredientes: </span>
          </p>
          <ul>
            {ingredients.map((ingredient) => {
              return (
                <li className="capitalize" key={ingredient}>
                  {ingredient}
                </li>
              );
            })}
          </ul>
          {/* {ingredients.join(", ")} */}
        </div>
        <div className="flex justify-between px-5 py-4">
          <button
            className="py-2 px-4 outline outline-red-700 rounded text-red-700 hover:cursor-pointer hover:bg-red-700 hover:text-white"
            onClick={() => showPizzaDetail(id)}
          >
            Ver mas
          </button>
          <button
            className="py-2 px-4  bg-red-700 rounded text-white hover:cursor-pointer hover:outline-2 hover:outline-red-600 hover:outline-offset-1"
            onClick={() => addProductToCart(id)}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  ingredients: PropTypes.array,
  img: PropTypes.string,
  desc: PropTypes.string,
  addToCart: PropTypes.func,
};
