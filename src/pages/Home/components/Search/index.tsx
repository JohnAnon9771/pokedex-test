import React, { useState } from 'react';

import { Container } from './styles';

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <input
        type="text"
        placeholder="Procure seu pokemon..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
};

export default Search;
