import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import { deleteItem } from '../../../../redux/actions/itemActions'

import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ deleteItem, id, title, description, dueDate, isCompleted }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {format(dueDate, 'yyyy-MM-dd')}
      {isCompleted ? 'Completed' : 'Pending'}
      <DeleteIcon onClick={() => deleteItem(id)}/>
    </div>
  );
};

const mapDispatchToProps = {
  deleteItem
}

export default connect(null, mapDispatchToProps)(Item);
