import React, { useContext } from 'react';
import { UserContext } from './UserProvider';
import { FilterContext } from './FilterProvider';

export default function GroupedUserList() {
  const { users } = useContext(UserContext);
  const { filter } = useContext(FilterContext);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const groupedUsers = filteredUsers.reduce((groups, user) => {
    const initial = user.name.charAt(0).toUpperCase();
    if (!groups[initial]) {
      groups[initial] = [];
    }
    groups[initial].push(user);
    return groups;
  }, {});

  return (
    <div>
      <h2>Lista użytkowników pogrupowana według inicjałów imion</h2>
      {Object.entries(groupedUsers).map(([initial, userList]) => (
        <div key={initial}>
          <h3>{initial}</h3>
          <ul>
            {groupedUsers[initial].map((user, index) => (
              <li key={index}>{user.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
