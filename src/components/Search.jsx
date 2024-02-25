import { useState } from "react";
import { MdQrCodeScanner } from "react-icons/md";

const Search = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  // Handler for input change
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setInputValue(searchTerm);
    setSearchTerm(searchTerm.trim()); // Update search term in parent component
  };

  return (
    <form className="max-w-full mx-auto">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
          <svg
            className="w-8 h-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-24 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Products..."
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          className="text-gray-600 absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-4xl px-4  dark:focus:ring-blue-800"
        >
          <MdQrCodeScanner />
        </button>
      </div>
    </form>
  );
};

export default Search;
