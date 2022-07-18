import produce from 'immer';
import * as types from './store.types';

const initialState = {
  // loaders: {
  //   isAdding: false,
  //   isReading: false,
  //   isUpdating: false
  // },

  products: [
    //sample products
    {
      name: 'ADILETTE',
      price: 2600,
      category: ['slides', 'new'],
      description: 'Women Originals',
      long_description:
        'The moment you step into these adidas Adilette Ayoon Slides, you are at ease. That is the whole point of them. They let you bring the comfort of home with you anywhere, thanks to the super soft one-piece EVA foam build. That minimalist approach extends beyond the construction — the colours also keep things toned down, which happens to mean that they also style well with everything.'
    },
    {
      name: 'AQUA',
      price: 1200,
      category: ['slides', 'new'],
      description: 'Core Black',
      long_description:
        'An iconic style for slick surfaces. These quick-drying slides flash 3-Stripes across the bandage-style upper. Plush cushioning in the footbed provides the ultimate in comfort in and out of the shower.'
    }
  ],
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
