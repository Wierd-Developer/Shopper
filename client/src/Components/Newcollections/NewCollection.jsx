import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import CardItem from "../CardItem";

const NewCollection = () => {
  const { products } = useContext(ProductContext);
  return <CardItem products={products} />;
};

export default NewCollection;
