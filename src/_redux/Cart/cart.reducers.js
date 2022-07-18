import produce from 'immer';
import * as types from './cart.types';

const initialState = {
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

    case types.REMOVE_ITEM_CART:
      draft.items.splice(payload.index, 1);

    default:
      return draft;
  }
});

export default reducer;
