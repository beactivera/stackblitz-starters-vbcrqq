import React, { useContext, useState } from 'react';
import { FilterContext } from '.FilterProvider';

export default function FilterUser() {
  const { setFilter } = useContext(FilterContext);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Filtruj użytkowników</h2>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Filtruj..."
      />
    </div>
  );
}
