import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store'

import ToDoList from './components/ToDoList/to-do-list.component';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
