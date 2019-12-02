import { NEW_ITEM, EDIT_ITEM } from './types';

export const fetchItems = () => dispatch => {
  // axios call to backend server

};

export const newItem = itemData => dispatch => {
  // item will need id
  // would also need to do request to backend server
  // to persist data in db
  console.log('here', itemData)

  dispatch({
    type: NEW_ITEM,
    payload: itemData
  })
};