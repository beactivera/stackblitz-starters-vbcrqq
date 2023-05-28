import React, { useContext } from 'react';
import { UserContext } from './UserProvider';
import { FilterContext } from './FilterProvider';

export default function UserList() {
  const { users } = useContext(UserContext);
  const { filter } = useContext(FilterContext);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Lista użytkowników</h2>
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
