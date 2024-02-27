import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import CardItem from "./CardItem";
const Popularmen = () => {
  const { products } = useContext(ProductContext);
  const [filterMen, setFilterMen] = useState(products);
  console.log(filterMen);
  const mensFilter = (catItem) => {
    const updated = products.filter((product) => {
      return product.category === catItem;
    });
    setFilterMen(updated);
  };
  useEffect(() => {
    mensFilter(`men's clothing`);
  }, []);
  //   console.log(products);
  return <CardItem products={filterMen}></CardItem>;
};

export default Popularmen;
