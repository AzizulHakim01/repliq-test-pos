import { FaBars } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { BiSolidPlusCircle } from "react-icons/bi";
import { useState } from "react";
import Sidebar from "./Sidebar";
const MenuBar = () => {
    const [sideBar, setSideBar] = useState(false)
    const handleClick = () =>{
        setSideBar(!sideBar);
    }
  return (
    <>
    {
        sideBar && <Sidebar/>
    }
    <div className="w-full">
      <div className="flex py-3 px-5 items-center justify-between gap-4">
        <div className="cursor-pointer text-4xl" onClick={handleClick}>
          <FaBars />
        </div>
        <div className="flex  items-center gap-4 cursor-pointer rounded-md text-2xl font-semibold bg-[#e7e9f6] px-3 py-2 text-[#606ec5]">
          <CiStickyNote /> Note
        </div>
        <div className="flex items-center gap-4 cursor-pointer rounded-md text-2xl font-semibold bg-[#e7e9f6] px-3 py-2 text-[#606ec5]">
          <MdOutlineLocalShipping /> Shipping
        </div>
        <div className="flex items-center gap-4 cursor-pointer rounded-md text-2xl font-semibold bg-[#e7e9f6] px-3 py-2 text-[#606ec5]">
          <FaGroupArrowsRotate /> Hold Orders
        </div>
        <div className="flex items-center gap-4 cursor-pointer rounded-md text-2xl font-semibold bg-[#e7e9f6] px-3 py-2 text-[#606ec5]">
          <BiSolidPlusCircle /> New Item
        </div>
      </div>
    </div>
    </>
  );
};

export default MenuBar;
