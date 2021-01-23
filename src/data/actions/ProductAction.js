export const PRODUCTS_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCTS_RESPONSE = 'PRODUCT_RESPONSE';
export const PRODUCT_SELECT = 'PRODUCT_SELECT';

export const productRequest = () => ({
  type: PRODUCTS_REQUEST,
});

export const productResponse = (value) => ({
  type: PRODUCTS_RESPONSE,
  value,
});

export const productSelect = (value) => ({
  type: PRODUCT_SELECT,
  value,
});
