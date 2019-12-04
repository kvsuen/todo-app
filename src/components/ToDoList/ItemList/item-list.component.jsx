import React, { useState } from 'react';
import { connect } from 'react-redux';
import Item from './Item/item.component';
import AddEditModal from '../AddEditModal/add-edit-modal.component';

import { editItem } from '../../../redux/actions/itemActions';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  itemListContainer: {
    width: '100%',
    textAlign: 'center',
    marginTop: '10px'
  }
}));

const ItemList = ({ toDos, editItem }) => {
  const classes = useStyles();

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
      <div className={classes.itemListContainer}>
        {items.length > 0 ? items : 'Currently nothing to do!'}
      </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
