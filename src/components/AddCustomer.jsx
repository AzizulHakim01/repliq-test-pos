import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const AddCustomer = () => {
  const [close, setClose] = useState(true);
  return (
    close && (
      <div className="bg-black bg-opacity-55 absolute w-full h-full top-0 flex items-center justify-center">
        <div className="bg-white w-[40%] mx-auto">
          <div className="flex gap-48 items-center p-4">
            <IoIosArrowBack
              className="text-4xl cursor-pointer"
              onClick={() => setClose(false)}
            />
            <h1 className="text-center text-3xl font-semibold">
              Add New Customer
            </h1>
          </div>
          <form className="p-12 gap-6 mt-7 space-y-6 flex flex-col">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border-b-2 outline-none text-2xl px-2 font-light"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-b-2 outline-none text-2xl px-2 font-light"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="border-b-2 outline-none text-2xl px-2 font-light"
            />
            <input
              type="text"
              name="currenct"
              id="currency"
              placeholder="Currency"
              className="border-b-2 outline-none text-2xl px-2 font-light"
            />
            <input
              type="text"
              name="tax"
              id="tax"
              placeholder="TAX ID"
              className="border-b-2 outline-none text-2xl px-2 font-light"
            />
          </form>
          <p className="px-12 text-2xl text-blue-700 font-semibold">
            + &nbsp; Add More Details
          </p>
          <div className="flex my-5">
            <button className="bg-blue-700 text-white w-[90%] py-4 my-8 text-3xl mx-auto">
              Update
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddCustomer;
