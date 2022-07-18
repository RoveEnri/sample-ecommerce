import produce from 'immer';
import * as types from './store.types';

const initialState = {
  // loaders: {
  //   isAdding: false,
  //   isReading: false,
  //   isUpdating: false
  // },
  products: [],
  active_product: 0
};

const reducer = produce((draft = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_PRODUCT_STORE:
      draft.products.push(payload);
      // draft.loaders.isAdding = false;
      return;

    case types.UPDATE_PRODUCT_STORE:
      draft.products[payload.index] = payload.product;
      // draft.loaders.isUpdating = false;
      return;

    case types.SET_ACTIVE_PRODUCT:
      draft.active_product = payload.index;
      return;

    default:
      return draft;
  }
});

export default reducer;
