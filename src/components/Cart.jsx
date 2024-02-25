import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import AddCustomer from "./AddCustomer";
import Table from "./Table";
import MenuFooter from "./MenuFooter";
import { useSelector } from 'react-redux';
const Cart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {items, total } = useSelector(state => state.cart);
  const tax = total*0.005;
  const discount = total*0.05
  const shipping = items.length > 0 ? 45.68 : 0;


  return (
    <>
      {modalOpen && <AddCustomer />}
      <div className="px-4">
        <div className="rounded-md text-[#5c6ac4] bg-[#eef0f9] w-full flex justify-between items-center px-6 py-3">
          <h1 className="font-medium text-2xl mb-2 flex items-center gap-2">
            <FaUserCircle /> Azizul Hakim
          </h1>
          <div className="font-extrabold text-4xl mb-2 cursor-pointer">
            <IoAddCircleOutline onClick={() => setModalOpen(!modalOpen)} />
          </div>
        </div>
        <div className="">
          <Table />
        </div>
        <div className="flex justify-end my-8">
          <ul className="w-80">
            <li className="py-3 font-medium border-t-2 flex justify-between capitalize">
              <p className="text-gray-500 text-md">Sub total</p>{" "}
              <small className="font-bold text-xl">${total.toFixed(2)}</small>
            </li>
            <li className="py-3 font-medium border-t-2 flex justify-between capitalize">
              <p className="text-gray-500 text-md">TAX</p>{" "}
              <small className="font-bold text-xl">${tax.toFixed(2)}</small>
            </li>
            <li className="py-3 font-medium border-t-2 flex justify-between capitalize">
              <p className="text-gray-500 text-md">shipping</p>{" "}
              <small className="font-bold text-xl">${shipping}</small>
            </li>
            <li className="py-3 font-medium border-t-2  flex justify-between capitalize">
              <p className="text-blue-600 text-md">discount on cart</p>{" "}
              <small className="font-bold text-xl">${discount.toFixed(2)}</small>
            </li>
          </ul>
        </div>
        <div className="flex justify-between w-full text-blue-700 bg-[#E1EAF9] items-center md:py-5 md:px-4 font-bold">
          <p className="text-md">
            Products Count <small>({items.length})</small>
          </p>
          <div className="flex md:gap-36 gap-10">
            <p className="md:text-2xl">Total</p>
            <p className="md:text-2xl">${(total+tax+shipping+discount).toFixed(2)}</p>
          </div>
        </div>
        <MenuFooter/>
      </div>
    </>
  );
};

export default Cart;
