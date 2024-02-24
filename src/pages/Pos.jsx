import {useState} from "react"
import Cart from "../components/Cart";
import MenuBar from "../components/MenuBar";
import Products from "../components/Products";

import Search from "../components/Search";
import { BsThreeDotsVertical } from "react-icons/bs";
import AllCategories from "../components/AllCategories";

const Pos = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleClick = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
    {
      sideBar && <AllCategories/>
  }
    <div className="bg-[#F2F4F6]">
      <div className="grid grid-cols-2">
        <div className="">
          <MenuBar />
          <Cart />
        </div>
        <div className="">
          <Search />
          <div className="">
            <div className="mt-3 flex justify-between px-4">
              <button className="text-gray-500 border-2 border-gray-300 font-semibold text-xl p-3 flex gap-4 items-center rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:text-blue-500">
                 All Categories
              </button>
              <button className="text-gray-500 border-2 border-gray-300  font-semibold text-xl p-3 flex gap-4 items-center rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:text-blue-500">
                 Electronics
              </button>
              <button className="text-gray-500 border-2 border-gray-300  font-semibold text-xl p-3 flex gap-4 items-center rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:text-blue-500">
                 Home and Lifestyle
              </button>
              <button className="text-gray-500 border-2 border-gray-300  font-semibold text-xl p-3 flex gap-4 items-center rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:text-blue-500">
                 Men Fashion
              </button>
              <button className="text-gray-500 border-2 border-gray-300  font-semibold text-xl p-3 flex gap-4 items-center rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:text-blue-500">
                 Women Fashion
              </button>
              <button className="text-gray-500  font-semibold text-4xl flex gap-4 items-center rounded-md">
              <BsThreeDotsVertical onClick={handleClick}/>
              </button>
            </div>
          </div>
          <Products />
        </div>
      </div>
    </div>
    </>
  );
};

export default Pos;
