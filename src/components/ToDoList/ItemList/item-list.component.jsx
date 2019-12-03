import React from 'react';
import { connect } from 'react-redux';
import Item from './Item/item.component';

const ItemList = ({ toDos }) => {
  const items = toDos.map(toDo => {
    const { id, title, description, dueDate, isCompleted } = toDo;

    return (
      <Item
        key={id}
        id={id}
        title={title}
        description={description}
        dueDate={dueDate}
        isCompleted={isCompleted}
      />
    );
  });

  return (
    <div>
      {items}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toDos: state.toDos.items
  };
};

export default connect(mapStateToProps, null)(ItemList);
