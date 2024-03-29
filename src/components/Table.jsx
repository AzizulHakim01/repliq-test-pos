import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../reducers/CartReducer';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const Table = () => {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id, price, quantity) => {
    dispatch(removeFromCart({ id, price, quantity }));
  };

  const handleIncrease = (id, price) => {
    dispatch(increaseQuantity({ id, price }));
  };

  const handleDecrease = (id, price) => {
    dispatch(decreaseQuantity({ id, price }));
  };
  
  return (
    <>
      {items.length == 0 ? (<div className="h-80 p-10 flex justify-center items-center">
        <h1 className="text-5xl text-center spacial font-semibold text-[#1D4ED8]">There is no item on Cart. <br /> Please Select Items from Left</h1>
      </div>)
      :
      (<div className="relative overflow-x-auto shadow-md sm:rounded-lg h-80 mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
        <tbody className="">
          {items.map((item) => {
            return (
             <>
              <tr key={item.id} className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-xl" >
                <td className="p-4">
                  <FaEdit />
                </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${item.price}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={() => handleDecrease(item.id, item.price)}
                        disabled={item.quantity === 1 ? true : false}
                      >
                        <span className="sr-only">Decrease Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={item.quantity}
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={() => handleIncrease(item.id, item.price)}
                      >
                        <span className="sr-only">Increase Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white align-middle">
                    ${item.price*item.quantity}
                  </td>
                <td className="px-6 py-4 ">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    <RiDeleteBin5Line onClick={() => handleRemove(item.id, item.price, item.quantity)}/>
                  </a>
                </td>
              </tr>
             </>
            );
          })}
        </tbody>
      </table>
    </div>)}
    </>
  );
};

export default Table;
