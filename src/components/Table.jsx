import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const Table = () => {
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-80 mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
        <tbody className="">
          {product.map((item) => {
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
                      >
                        <span className="sr-only">Quantity button</span>
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
                          placeholder={1}
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
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
                    ${item.price}
                  </td>
                <td className="px-6 py-4 ">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    <RiDeleteBin5Line />
                  </a>
                </td>
              </tr>
             </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
