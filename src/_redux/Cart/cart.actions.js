import * as types from './cart.types';

export const addCartItem = payload => {
  return function (dispatch) {
    dispatch({ type: types.ADD_ITEM_CART, payload: payload });
  };
};

export const updateCartItem = ({ state, index }) => {
  return function (dispatch) {
    dispatch({ type: types.UPDATE_ITEM_CART, payload: { state, index } });
  };
};
