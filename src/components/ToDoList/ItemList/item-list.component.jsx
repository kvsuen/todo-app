import React from 'react';
import { connect } from 'react-redux';
import Item from './Item/item.component';

const ItemList = ({ toDos }) => {
  const ids = Object.keys(toDos)
  const items = ids.map(elem => {
    const { id, title, description, dueDate, isCompleted } = toDos[elem];

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
    <div style={{width: '100%'}}>
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
