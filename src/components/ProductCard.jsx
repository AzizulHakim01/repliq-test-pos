
import {useDispatch} from "react-redux"
import {addToCart} from "../reducers/CartReducer"
const ProductCard = ({id, title, price, image }) => {
  

  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price }));
  }
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96 flex flex-col justify-between items-center px-4 hover:opacity-70" onClick={handleAddToCart}>
      <a href="#">
        <img className="p-8 rounded-t-lg h-40" src={image} alt="product image" />
      </a>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
      </div>
        <a href="#">
          <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5"></div>
    </div>
  );
};

export default ProductCard;
