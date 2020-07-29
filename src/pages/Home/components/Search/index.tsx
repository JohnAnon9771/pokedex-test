import React from 'react';

import { Container } from './styles';

interface SearchComponentProps {
  setSearch: (value: string | number) => void;
}

const Search: React.FC<SearchComponentProps> = ({
  setSearch,
}: SearchComponentProps) => (
  <Container>
    <input
      type="text"
      placeholder="Procure seu pokemon..."
      onChange={(e) => setSearch(e.target.value)}
    />
  </Container>
);

export default Search;
