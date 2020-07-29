import React, { useEffect, useState, useMemo } from 'react';

import api from '../../../../services/api';
import { elementTypes } from '../../../../utils/elementTypes';
import { capitalize } from '../../../../utils/functions/capitalize';
import { formatNumber } from '../../../../utils/functions/formatNumber';
import {
 Container, Types, Dot, ImageBlock, Content
} from './styles';

interface CardComponentProps {
  name: string;
  // setPokemon: (value: {
  //   id: number;
  //   name: string;
  //   types: {
  //     name: string;
  //   };
  // }) => void;
}

interface PokemonDataProps {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

const Card: React.FC<CardComponentProps> = ({
  name,
}: // setPokemon,
CardComponentProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonDataProps>(
    {} as PokemonDataProps,
  );

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(`pokemon/${name}`);
      setPokemonData(response.data);
      // setPokemon(response.data);
    }
    getPokemon();
  }, [name]);

  return (
    <Container
      // onClick={() => setPokemon(pokemonData)}
      border={
        pokemonData.types && elementTypes[pokemonData.types[0]?.type.name]
      }
    >
      <Content>
        <p>{capitalize(name)}</p>
        <Types>
          {pokemonData.types?.map(({ type }, index) => (
            <Dot key={index} style={{ background: elementTypes[type?.name] }} />
          ))}
        </Types>

        <ImageBlock>
          <div>
            <p className="aboutPokemon">
              Height:
              {formatNumber(pokemonData?.height)}
              <span>m</span>
            </p>
            <p className="aboutPokemon">
              Weight:
              {formatNumber(pokemonData?.weight)}
              <span>kg</span>
            </p>
          </div>
          <img
            src={require(`../../../../assets/static/${capitalize(name)}.gif`)}
            alt=""
          />
        </ImageBlock>
      </Content>
    </Container>
  );
};

export default Card;
