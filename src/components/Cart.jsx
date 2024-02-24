import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import AddCustomer from "./AddCustomer";
const Cart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {
        modalOpen && <AddCustomer/>
      }
      <div className="px-4">
      <div className="rounded-md text-[#5c6ac4] bg-[#eef0f9] w-full flex justify-between items-center px-6 py-3">
        <h1 className="font-medium text-2xl mb-2 flex items-center gap-2">
          <FaUserCircle /> Azizul Hakim
        </h1>
        <div className="font-extrabold text-4xl mb-2 cursor-pointer">
          <IoAddCircleOutline onClick={()=>setModalOpen(!modalOpen)}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
