import React, { useState } from 'react';
import { connect } from 'react-redux';
import Item from './Item/item.component';
import AddEditModal from '../AddEditModal/add-edit-modal.component';

import { editItem } from '../../../redux/actions/itemActions';

const ItemList = ({ toDos, editItem }) => {
  const [open, setOpen] = useState(false);
  const [initialState, setInitialState] = useState({
    title: '',
    description: '',
    dueDate: new Date(),
    isCompleted: false
  });

  const handleOpen = values => {
    setInitialState({
      id: values.id,
      title: values.title,
      description: values.description,
      dueDate: values.dueDate,
      isCompleted: values.isCompleted
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ids = Object.keys(toDos);
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
        handleOpen={handleOpen}
      />
    );
  });

  return (
    <>
      <div style={{ width: '100%' }}>{items}</div>
      <AddEditModal
        open={open}
        handleClose={handleClose}
        initialState={initialState}
        submit={editItem}
        edit={true}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    toDos: state.toDos.items
  };
};

const mapDispatchToProps = {
  editItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
