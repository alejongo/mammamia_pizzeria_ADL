import { thousandSeparator } from "../helpers/thousandSeparator";

import PropTypes from "prop-types";

export const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white outline outline-gray-300">
        <img src={img} alt={name} className="w-full h-40 object-cover" />
        <div className="px-2 py-3 sm:p-4 flex flex-col">
          <p className="text-2xl font-bold">{name}</p>
          <p className="mt-3">
            <span className="font-bold">Precio: </span>
            {`$${thousandSeparator(Number(price))}`}
          </p>
          <p className="mt-3">
            <span className="font-bold">Ingredientes: </span>
            {ingredients.join(", ")}
          </p>
        </div>
        <div className="flex justify-between px-5 py-4">
          <button className="py-2 px-4 outline outline-lime-700 rounded text-lime-700 hover:cursor-pointer hover:bg-lime-700 hover:text-white">
            Ver mas
          </button>
          <button className="py-2 px-4  bg-lime-700 rounded text-white hover:cursor-pointer hover:outline-2 hover:outline-lime-600 hover:outline-offset-1">
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
};
