import React from 'react';

import { Container } from './styles';

interface DetailsComponentProps {
  pokemon: {
    id: number;
    name: string;
    height: number;
    width: number;
    types: {
      slot: number;
      type: {
        name: string;
      };
    }[];
  };
}

const Details: React.FC<DetailsComponentProps> = ({
  pokemon,
}: DetailsComponentProps) => (
  <div>
    <p>{pokemon.name}</p>
  </div>
);

export default Details;
