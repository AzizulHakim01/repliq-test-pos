import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [product, setProduct] = useState(null);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products'
      );
      const truncatedData = data.map(item => ({
        ...item,
        title: item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title
      }));
      setProduct(truncatedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []); // Empty dependency array to run the effect only once on mount/ Empty dependency array to run the effect only once on mount
  return (
    <div className="mt-8 h-[80vh] overflow-y-scroll">
      <div className="grid grid-cols-4 gap-5 px-4">
        {product &&
          product.map((item) => {
            return (
              <div className="" key={item.id}>
                <ProductCard
                  title={item.title}
                  price={item.price}
                  image={item.image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
