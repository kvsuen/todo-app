import { FETCH_ITEMS, NEW_ITEM, EDIT_ITEM } from '../actions/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };

    case NEW_ITEM:
      const newItem = [...state.items];
      newItem.unshift(action.payload);
      return {
        ...state,
        items: newItem
      };

    case EDIT_ITEM:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}
