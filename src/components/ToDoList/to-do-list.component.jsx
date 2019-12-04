import React from 'react';
import Header from './Header/header.component';
import ItemList from './ItemList/item-list.component';
import AddButton from './AddButton/add-button.component';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toDoListContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%', 
    boxShadow: '-1px 4px 15px 2px rgba(0,0,0,0.24)'
  },
  addButton: {
    position: 'absolute',
    bottom: '15px',
    right: '15px'
  }
}));

const ToDoList = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.toDoListContainer}>
      <Header />
      <ItemList />
      <div className={classes.addButton}>
        <AddButton />
      </div>
    </Paper>
  );
};

export default ToDoList;
