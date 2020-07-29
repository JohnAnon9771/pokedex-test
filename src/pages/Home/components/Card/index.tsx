import React, { useEffect, useState, useMemo } from 'react';

import api from '../../../../services/api';
import { elementTypes } from '../../../../utils/elementTypes';
import { capitalize } from '../../../../utils/functions/capitalize';
import { Container, Types, Dot, ImageBlock } from './styles';

interface CardComponentProps {
  name: string;
}

interface PokemonDataProps {
  id: number;
  height: number;
  width: number;
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

      <ImageBlock>
        <div>
          <p>
            Height:
            {pokemonData.height}
            <span>m</span>
          </p>
        </div>
        <img
          src={require(`../../../../assets/static/${capitalize(name)}.gif`)}
          alt=""
        />
      </ImageBlock>
    </Container>
  );
};

export default Card;
