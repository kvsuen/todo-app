import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store'

import ToDoList from './components/ToDoList/to-do-list.component';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  toDoListContainer: {
    width: '50vw',
    height: '75vh',
    margin: 'auto',
    marginTop: '10vh'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <div className={classes.toDoListContainer}>
          <ToDoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
