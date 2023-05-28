import React from 'react';
import UserProvider from './components/UserProvider';
import FilterProvider from './components/FilterProvider';
import AddUser from './components/AddUser';
import FilterUser from './components/FilterUser';
import UserList from './components/UserList';
import GroupedUserList from './components/GroupedUserList';
import './style.css';

export default function App() {
  return (
    <UserProvider>
      <FilterProvider>
        <div>
          <h1>Lista użytkowników </h1>
          <AddUser />
          <FilterUser />
          <UserList />
          <GroupedUserList />
        </div>
      </FilterProvider>
    </UserProvider>
  );
}
