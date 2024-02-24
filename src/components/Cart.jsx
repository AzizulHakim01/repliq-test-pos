import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import AddCustomer from "./AddCustomer";
import Table from "./Table";
import MenuFooter from "./MenuFooter";
const Cart = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const product = [
    {
      id: 25,
      title: "Stylish Red & Silver Over-Ear Headphones",
      price: 3,
      description:
        "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
      images: [
        '["https://i.imgur.com/YaSqa06.jpeg"',
        '"https://i.imgur.com/isQAliJ.jpeg"',
        '"https://i.imgur.com/5B8UQfh.jpeg"]',
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T05:00:03.000Z",
      category: {
        id: 2,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 0,
      title: "Sleek Mirror Finish Phone Case",
      price: 27,
      description:
        "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
      images: [
        "https://i.imgur.com/yb9UQKL.jpeg",
        "https://i.imgur.com/m2owtQG.jpeg",
        "https://i.imgur.com/bNiORct.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 1,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 2,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 3,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 2,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 3,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 2,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 3,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 2,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 3,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 2,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 3,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 2,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 3,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 2,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 3,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
    {
      id: 2,
      title: "Sleek Smartwatch with Vibrant Display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2024-02-24T03:03:49.000Z",
      updatedAt: "2024-02-24T03:03:49.000Z",
      category: {
        id: 3,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-02-24T03:03:49.000Z",
        updatedAt: "2024-02-24T03:03:49.000Z",
      },
    },
  ];

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
              <small className="font-bold text-xl">$90.68</small>
            </li>
            <li className="py-3 font-medium border-t-2 flex justify-between capitalize">
              <p className="text-gray-500 text-md">TAX</p>{" "}
              <small className="font-bold text-xl">$9.68</small>
            </li>
            <li className="py-3 font-medium border-t-2 flex justify-between capitalize">
              <p className="text-gray-500 text-md">shipping</p>{" "}
              <small className="font-bold text-xl">$45.68</small>
            </li>
            <li className="py-3 font-medium border-t-2  flex justify-between capitalize">
              <p className="text-blue-600 text-md">discount on cart</p>{" "}
              <small className="font-bold text-xl">$10.68</small>
            </li>
          </ul>
        </div>
        <div className="flex justify-between w-full text-blue-700 bg-[#E1EAF9] items-center py-5 px-4 font-bold">
          <p className="text-md">
            Products Count <small>({product.length})</small>
          </p>
          <div className="flex gap-36">
            <p className="text-2xl">Total</p>
            <p className="text-2xl">$50000</p>
          </div>
        </div>
        <MenuFooter/>
      </div>
    </>
  );
};

export default Cart;
