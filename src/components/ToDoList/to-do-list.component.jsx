import React from 'react';
import Header from './Header/header.component';
import SearchBar from './SearchBar/search-bar.component';
import ItemList from './ItemList/item-list.component';
import AddButton from './AddButton/add-button.component';

const ToDoList = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <ItemList />
      <AddButton />
    </>
  );
};

export default ToDoList;
