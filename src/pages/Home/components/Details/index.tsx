import React from 'react';

import { capitalize } from '../../../../utils/functions/capitalize';
import { Container, Header, Content } from './styles';

interface DetailsComponentProps {
  pokemon: {
    id: number;
    name: string;
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
}: DetailsComponentProps) => {
  const pokemonNameCapitalized = capitalize(pokemon?.name);
  return (
    <Container>
      <Header>
        <span>{pokemon?.id}</span>
        <h1>{pokemonNameCapitalized}</h1>
      </Header>
      <Content>
        {pokemon?.name && (
          <img
            src={require(`../../../../assets/static/${pokemonNameCapitalized}.gif`)}
            alt=""
          />
        )}
      </Content>
    </Container>
  );
};

export default Details;
