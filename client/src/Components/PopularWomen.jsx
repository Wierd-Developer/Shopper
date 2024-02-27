import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import CardItem from "./CardItem";
const PopularWomen = () => {
  const { products } = useContext(ProductContext);
  const [filterWomen, setFilterWomen] = useState(products);
  console.log(filterWomen);
  const womenFilter = (catItem) => {
    const updated = products.filter((product) => {
      return product.category === catItem;
    });
    setFilterWomen(updated);
  };
  useEffect(() => {
    womenFilter(`women's clothing`);
  }, []);
  //   console.log(products);
  return <CardItem products={filterWomen}></CardItem>;
};

export default PopularWomen;
