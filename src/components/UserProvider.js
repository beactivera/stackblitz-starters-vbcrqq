import React, { createContext, useState } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  // const addUser = (user) => {
  //   setUsers([...users, user]);
  // };

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
