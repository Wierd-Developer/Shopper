import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const myData = { products };
  return (
    <ProductContext.Provider value={myData}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
