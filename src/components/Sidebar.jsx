import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(true);
  };
  return (
    !close && (
      <div className={`absolute w-full h-screen bg-opacity-35 bg-black `}>
        <div className="w-[22%] bg-white">
          <div className="bg-white flex flex-col h-screen justify-between">
            <div className="">
              <div className="bg-[#efefef] px-4 py-2">
                <h1 className="spacial text-center p-4 text-5xl font-bold">
                  go<span className="text-[#85d708] font-fold">B</span>illing
                </h1>
                <p className="spacial font-semibold text-2xl">
                  <small className="font-medium text-base">Location</small>
                  <br />
                  Los Angeles, California
                </p>
              </div>
              <div className="">
                <ul className="flex flex-col">
                  <Link to={"/pos/dashboard"}>
                    <li
                      className={`px-4 py-4 flex text-2xl font-medium text-slate-600 items-center gap-3 ${
                        location.pathname === "/pos/dashboard" &&
                        "bg-[#eef0f9] text-[#5c6ac4]"
                      }`}
                    >
                      <LuLayoutDashboard /> Dashboard
                    </li>
                  </Link>
                  <Link to={"/pos/location"}>
                    <li
                      className={`px-4 py-4 flex text-2xl font-medium text-slate-600 items-center gap-3 ${
                        location.pathname === "/pos/location" &&
                        "bg-[#eef0f9] text-[#5c6ac4]"
                      }`}
                    >
                      <CiLocationOn /> Location
                    </li>
                  </Link>
                  <Link to={"/pos/invoices"}>
                    <li
                      className={`px-4 py-4 flex text-2xl font-medium text-slate-600 items-center gap-3 ${
                        location.pathname === "/pos/invoices" &&
                        "bg-[#eef0f9] text-[#5c6ac4]"
                      }`}
                    >
                      <LiaFileInvoiceDollarSolid /> POS Invoices
                    </li>
                  </Link>
                  <Link to={"/pos/setting"}>
                    <li
                      className={`px-4 py-4 flex text-2xl font-medium text-slate-600 items-center gap-3 ${
                        location.pathname === "/pos/setting" &&
                        "bg-[#eef0f9] text-[#5c6ac4]"
                      }`}
                    >
                      <CiSettings />
                      Setting
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <button
              onClick={() => navigate("/")}
              className="border-2 border-slate-600 px-4 py-3 my-5 text-2xl font-medium text-slate-600 mx-5"
            >
              Logout
            </button>
          </div>
          <div className="absolute top-4 text-4xl left-[420px] text-[#efefef] font-bold cursor-pointer">
            <IoMdClose onClick={handleClose} />
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
