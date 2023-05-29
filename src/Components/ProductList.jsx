import { useEffect } from "react";
import { setProducts } from "../Redux/Action/ProductAction";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => console.log("Error", err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products", products);

  return (
    <>
      <ProductComponent />
    </>
  );
};

export default ProductList;
