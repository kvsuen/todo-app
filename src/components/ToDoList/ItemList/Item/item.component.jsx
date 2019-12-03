import React from 'react';
import { format } from 'date-fns'

const Item = ({ title, description, dueDate, isCompleted }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {format(dueDate, 'yyyy-MM-dd')}
      {isCompleted ? 'Completed' : 'Pending'}
    </div>
  );
};

export default Item;
