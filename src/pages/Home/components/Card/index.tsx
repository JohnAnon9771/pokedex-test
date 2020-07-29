import React, { useEffect, useState, useMemo } from 'react';

import api from '../../../../services/api';
import { elementTypes } from '../../../../utils/elementTypes';
import { capitalize } from '../../../../utils/functions/capitalize';
import { Container, Types, Dot } from './styles';

interface CardComponentProps {
  name: string;
}

interface PokemonDataProps {
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

const Card: React.FC<CardComponentProps> = ({ name }: CardComponentProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonDataProps>(
    {} as PokemonDataProps,
  );

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(`pokemon/${name}`);
      setPokemonData(response.data);
    }
    getPokemon();
  }, [name]);

  return (
    <Container
      border={
        pokemonData.types && elementTypes[pokemonData.types[0]?.type.name]
      }
    >
      <p>{capitalize(name)}</p>
      <Types>
        {pokemonData.types?.map(({ type }, index) => (
          <Dot key={index} style={{ background: elementTypes[type?.name] }} />
        ))}
      </Types>
    </Container>
  );
};

export default Card;
