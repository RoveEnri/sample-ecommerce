import { useReducer } from 'react';
import produce from 'immer';

export default function useProductState() {
  const initialState = {
    name: '',
    price: 0,
    category: [],
    description: '',
    long_description: ''
  };

  const stateReducer = produce((draft, action) => {
    const { type, payload } = action;

    switch (type) {
      case 'FIELD_ONCHANGE':
        draft[payload.state] = payload.value;
        return;

      case 'RESET_STATE':
        return initialState;

      case 'SET_INITIAL_STATE':
        return { ...draft, ...payload };

      case 'ADD_CATEGORY':
        draft.category.push(payload.category);
        return;

      case 'REMOVE_CATEGORY':
        draft.category.splice(payload.index, 1);
        return;

      default:
        return draft;
    }
  });
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return [state, dispatch];
}
