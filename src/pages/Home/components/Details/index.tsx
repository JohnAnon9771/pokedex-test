import React from 'react';

import { elementTypes } from '../../../../utils/elementTypes';
import { capitalize } from '../../../../utils/functions/capitalize';
import { Container, Header, Footer, Types, Main } from './styles';
import Chart from './components/Chart';
import { PokemonDataProps } from '../Card';

interface DetailsComponentProps {
  pokemon: PokemonDataProps;
}

const Details: React.FC<DetailsComponentProps> = ({
  pokemon,
}: DetailsComponentProps) => {
  const pokemonNameCapitalized = capitalize(pokemon?.name);
  const pokemonImage = pokemon?.name && (
    <img
      src={require(`../../../../assets/static/${pokemonNameCapitalized}.gif`)}
      alt=""
    />
  );
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
      <Chart data={pokemon} />
      <Footer>{pokemonImage}</Footer>
    </Container>
  );
};

export default Details;
