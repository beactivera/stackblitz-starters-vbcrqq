import React, { useContext, useState } from 'react';
import { UserContext } from '.UserProvider';

export default function AddUser() {
  const { addUser } = useContext(UserContext);
  const [name, setName] = useState('');

  const submit = (e) => {
    e.preventDefault();
    addUser({ name });
    setName('');
  };

  return (
    <div>
      <h2>Dodaj użytkownika</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Imię"
          required
        />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}
