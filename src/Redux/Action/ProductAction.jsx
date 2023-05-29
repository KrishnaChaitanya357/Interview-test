import { ActionTypes } from "../Container/Action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};

export const updateProducts = (product) => {
  return {
    type: ActionTypes.UPDATE_PRODUCTS,
    payload: product
  };
};

export const deleteProducts = () => {
  return {
    type: ActionTypes.UPDATE_PRODUCTS
  };
};
