// import { IoMdClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const AllCategories = () => {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(true);
  };

  const categories = [
    "All Categories",
    "Home Lifestyle",
    "Fashion",
    "Electronics",
    "Toy",
    "Beauty & Personal Care",
    "Health & Fitness",
    "Books & Audible",
    "Toys & Games",
    "Automotive",
    "Sports & Outdoors",
    "Food & Grocery",
    "Pets",
    "Office Products",
    "Tools & Home Improvement",
    "Baby",
    "Arts & Crafts",
    "Movies, Music & Games",
    "Clothing, Shoes & Jewelry",
    "Industrial & Scientific",
    "Software",
  ];

  return (
    !close && (
      <div className="absolute w-full h-screen bg-opacity-20 bg-black z-50">
        <div className="relative">
          <div className="absolute top-4 text-4xl md:right-[960px] text-white font-extrabold cursor-pointer">
            <IoCloseSharp onClick={handleClose} />
          </div>
        </div>
        <div className="absolute right-0 content-end w-[50%] bg-white h-screen p-10">
          <h1 className="text-center text-4xl font-bold mb-8">Categories</h1>
          <div className="flex flex-wrap gap-5">
            {categories.map((item, index) => {
              return (
                <button
                  className="text-gray-500 border-2 px-3 py-2 border-gray-300 font-semibold text-xl text-center rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:text-blue-400"
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default AllCategories;
