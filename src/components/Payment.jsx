import { Link, useNavigate } from "react-router-dom";
import { BsCash } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

import { Routes, Route } from "react-router-dom";
import Card from "./payment_methods/Card";
import Cash from "./payment_methods/Cash";
import OnAccount from "./payment_methods/OnAccount";
import Cheque from "./payment_methods/Cheque";
import { useState } from "react";
import { useSelector } from 'react-redux';
import Success from "./payment_methods/Success";

const Payment = () => {
  const navigate = useNavigate()
  const [showPayment, setShowPayment] = useState(true)
  const totalAmount = useSelector(state => state.cart.total);
  const tax = totalAmount*0.005;
  const discount = totalAmount*0.05
  const shipping = totalAmount> 0 ? 45.68 : 0;
  const handleShowPayment = () =>{
    setShowPayment(false)
  }
  const confirmPayment =() =>{
navigate("/pos/thanks")
  }
  return (
    showPayment && <div className="absolute w-[50%] h-screen bg-opacity-20 bg-black z-50 top-0 right-0">
    <div className="bg-[#F4F6F8] w-full h-screen right-0 pt-10 px-5 flex flex-col gap-7">
      <div className="border-2 flex justify-between items-center p-6 rounded-md">
        <h1 className="text-2xl font-semibold text-gray-500 ">
          Order Amount
        </h1>
        <p className="text-4xl font-bold">${(totalAmount+tax+discount+shipping).toFixed(2)}</p>
      </div>

      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <Link
              to="/pos/card"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white text-xl gap-6 focus:bg-blue-700 focus:rounded-lg focus:text-white"
              aria-current="page"
            ><FaCreditCard className="text-4xl" />
            Card
            </Link>
          </li>
          <li>
            <Link
              to="/pos/cash"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white text-xl gap-6 focus:bg-blue-700 focus:rounded-lg focus:text-white"
            >
            <BsCash className="text-4xl" />
            Cash
              
            </Link>
          </li>
          <li>
            <Link
              to="/pos/on-account"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white text-xl gap-6 focus:bg-blue-700 focus:rounded-lg focus:text-white"
            >
              <MdOutlineAccountBalanceWallet className="text-4xl" />
              Account
            </Link>
          </li>
          <li>
            <Link
              to="/pos/cheque"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white text-xl gap-6 focus:bg-blue-700 focus:rounded-lg focus:text-white"
            >
              <GiMoneyStack className="text-4xl" />
              Cheque
            </Link>
          </li>
        </ul>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <Routes>
            <Route path="/card" element={<Cash />} />
            <Route path="/cash" element={<Card />} />
            <Route path="/on-account" element={<OnAccount />} />
            <Route path="/cheque" element={<Cheque />} />
            <Route path="/thanks" element={<Success />} />
          </Routes>
        </div>
      </div>
          <button className="absolute bottom-0 left-12 bg-blue-700 text-3xl text-white px-5 py-3 font-bold" onClick={confirmPayment}>
            Confirm Payment
          </button>
          <button className="absolute bottom-0 right-12 bg-red-700 text-3xl text-white px-5 py-3 font-bold" onClick={handleShowPayment}>
            Cancel
          </button>
    </div>
  </div>
  );
};

export default Payment;
