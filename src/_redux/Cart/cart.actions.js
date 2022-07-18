import * as types from './cart.types';

export const addCartItem = payload => {
  return function (dispatch) {
    dispatch({ type: types.ADD_ITEM_CART, payload: payload });
  };
};

export const removeCartItem = ({ index }) => {
  return function (dispatch) {
    dispatch({ type: types.REMOVE_ITEM_CART, payload: { index } });
  };
};
