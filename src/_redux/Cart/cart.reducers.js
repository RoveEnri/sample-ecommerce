import produce from 'immer';
import * as types from './cart.types';

const initialState = {
  //add loaders for api requests
  // loaders: {
  //   isAdding: false,
  //   isReading: false,
  //   isUpdating: false
  // },
  items: []
};

const reducer = produce((draft = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_ITEM_CART:
      draft.items.push(payload);
      // draft.loaders.isAdding = false;
      return;

    case types.UPDATE_ITEM_CART:
      draft.items[payload.index] = payload.state;
      // draft.loaders.isUpdating = false;
      return;

    default:
      return draft;
  }
});

export default reducer;
