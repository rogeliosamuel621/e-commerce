import { IProduct } from '@Types/products';
import { IAction } from '@Types/redux';

// CONSTANTS
const ADD_CART_PRODUCT: string = 'ADD_CART_PRODUCT';
const REMOVE_CART_PRODUCT: string = 'REMOVE_CART_PRODUCT';

// STORE
const initialState: IProduct[] = [];

// REDUCER
export default function reducer(state = initialState, action: ICartAction): IProduct[] {
  const ACTIONS = {
    [ADD_CART_PRODUCT]: state.concat(action.payload),
    [REMOVE_CART_PRODUCT]: state.filter((item) => item.id !== action.payload.id),
  };

  return ACTIONS[action.type] || state;
}

// ACTIONS
export const addToCartProduct = (product: IProduct): IAction => ({
  type: ADD_CART_PRODUCT,
  payload: product,
});

export const removeCartProduct = (product: IProduct): IAction => ({
  type: REMOVE_CART_PRODUCT,
  payload: product,
});

// INTERFACES
interface ICartAction {
  type: string;
  payload: IProduct;
}
