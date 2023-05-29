import React from "react";
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const products = useSelector((state) => state.products.products);
  const { id, title, description, price } = products;
  console.log(id, title, description, price);
  // console.log(products);

  return <></>;
};

export default ProductComponent;
