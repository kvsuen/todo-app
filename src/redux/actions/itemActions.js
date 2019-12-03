import {
  FETCH_ITEMS,
  NEW_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  TOGGLE_COMPLETE
} from './types';

export const fetchItems = () => dispatch => {
  // axios call to backend server
};

export const newItem = itemData => dispatch => {
  // item will need id
  // would also need to do request to backend server
  // to persist data in db

  // temporary id generator
  let id = Math.floor(Math.random() * 1000);
  const newPost = { id, ...itemData };

  dispatch({
    type: NEW_ITEM,
    payload: newPost
  });
};

export const editItem = (id, itemData) => dispatch => {
  let data = {id, itemData}

  dispatch({
    type: EDIT_ITEM,
    payload: data
  });
};

export const deleteItem = id => dispatch => {
  dispatch({
    type: DELETE_ITEM,
    payload: id
  });
};

export const toggleComplete = id => dispatch => {
  dispatch({
    type: TOGGLE_COMPLETE,
    payload: id
  })
}
