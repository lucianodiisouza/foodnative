import {PRODUCTS_RESPONSE, PRODUCT_SELECT} from '../actions/ProductAction';

export const initialState = {
  productsList: [],
  selectedProduct: null,
};

export const ProductReducer = (store = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_RESPONSE:
      return {...store, productsList: action.value};

    case PRODUCT_SELECT:
      return {...store, selectedProduct: action.value};

    default:
      return store;
  }
};
