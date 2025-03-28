import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { thousandSeparator } from "../../helpers/thousandSeparator";

export const CartItem = ({
  id,
  img,
  name,
  count,
  price,
  addItem,
  removeItem,
  deleteItem,
}) => {
  return (
    <>
      <li key={id} className="flex py-6">
        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img alt={img} src={img} className="size-full object-cover" />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a>{name}</a>
              </h3>
              <p className="ml-4">$ {thousandSeparator(price * count)}</p>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className="flex gap-3">
              <div className="flex items-center p-2 text-gray-600  outline outline-gray-600 rounded-md hover:text-white hover:bg-gray-600 hover:cursor-pointer hover:outline-none">
                <MinusIcon className="size-4" onClick={() => removeItem(id)} />
              </div>
              <div className="p-2">{count}</div>
              <button className="flex items-center p-2 bg-gray-600 text-white rounded-md hover:outline-2 hover:outline-gray-300 hover:outline-offset-1 hover:cursor-pointer">
                <PlusIcon className="size-4" onClick={() => addItem(id)} />
              </button>
            </div>
            {/* <p className="text-gray-500">
                                    Cantidad: {product.quantity}
                                  </p> */}

            <div className="flex">
              <button
                type="button"
                className="font-medium text-red-600 hover:text-red-500 hover:cursor-pointer"
                onClick={() => deleteItem(id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
