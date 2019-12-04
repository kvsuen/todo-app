import {
  FETCH_ITEMS,
  NEW_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  TOGGLE_COMPLETE
} from '../actions/types';

const initialState = {
  items: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };

    case NEW_ITEM:
      const { id } = action.payload;
      return {
        ...state,
        items: { ...state.items, [id]: action.payload }
      };

    case EDIT_ITEM:
      const idToEdit = action.payload.id;

      return {
        ...state,
        items: { ...state.items, [idToEdit]: action.payload.itemData }
      };

    case DELETE_ITEM:
      const idToDelete = action.payload;

      const nonDeletedItems = { ...state.items };
      delete nonDeletedItems[idToDelete];

      return {
        ...state,
        items: nonDeletedItems
      };

    case TOGGLE_COMPLETE:
      const idToToggleComplete = action.payload;
      const updatedItem = state.items[idToToggleComplete];
      const status = updatedItem.isCompleted;
      status
        ? (updatedItem.isCompleted = false)
        : (updatedItem.isCompleted = true);

      return {
        ...state,
        items: { ...state.items, [idToToggleComplete]: updatedItem }
      };

    default:
      return state;
  }
}
