import * as types from './store.types';

export const addProductStore = payload => {
  return function (dispatch) {
    dispatch({ type: types.ADD_PRODUCT_STORE, payload: payload });
  };
};

export const updateProductStore = product => {
  return function (dispatch, getState) {
    const { active_product: index } = getState().store;
    dispatch({ type: types.UPDATE_PRODUCT_STORE, payload: { product, index } });
  };
};

export const setActiveProduct = index => {
  return function (dispatch) {
    dispatch({ type: types.SET_ACTIVE_PRODUCT, payload: { index } });
  };
};
