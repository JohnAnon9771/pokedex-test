import React from 'react';

import { elementTypes } from '../../../../utils/elementTypes';
import { capitalize } from '../../../../utils/functions/capitalize';
import { Container, Header, Content, Types, Main } from './styles';

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
      <Main>
        <h3>Types</h3>
        <div>
          {pokemon?.types?.map((item) => (
            <Types color={elementTypes[item.type?.name]}>
              <p>{capitalize(item.type?.name)}</p>
            </Types>
          ))}
        </div>
      </Main>
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
