import { FETCH_ITEMS, NEW_ITEM, EDIT_ITEM, DELETE_ITEM } from '../actions/types';

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
      const idToEdit = action.payload;

      // return all other items to exclude edit item
      const itemToEdit = state.items.filter(item => {
        return idToEdit !== item.id 
      })

      itemToEdit.unshift(action.payload)

      return {
        ...state,
        items: itemToEdit
      };

    case DELETE_ITEM:
      const idToDelete = action.payload;

      // return all other items excluding the deleted id
      const nonDeletedItems = state.items.filter(item => {
        return idToDelete !== item.id
      })

      return {
        ...state,
        items: nonDeletedItems
      }

    default:
      return state;
  }
}
