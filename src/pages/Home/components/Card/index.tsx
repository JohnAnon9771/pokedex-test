import React, { useEffect, useState, memo } from 'react';

import api from '../../../../services/api';
import { elementTypes } from '../../../../utils/elementTypes';
import { capitalize } from '../../../../utils/functions/capitalize';
import { formatNumber } from '../../../../utils/functions/formatNumber';
import { Container, Types, Dot, ImageBlock, Content } from './styles';

interface CardComponentProps {
  name: string;
  setPokemon: (value: PokemonDataProps) => void;
}

export interface PokemonDataProps {
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
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
}

const Card: React.FC<CardComponentProps> = ({
  name,
  setPokemon,
}: CardComponentProps) => {
  const [data, setData] = useState<PokemonDataProps>({} as PokemonDataProps);

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(`pokemon/${name}`);
      setData(response.data);
    }
    getPokemon();
  }, [name]);

  return (
    <Container
      onClick={() => setPokemon(data)}
      border={data.types && elementTypes[data.types[0]?.type.name]}
    >
      <Content>
        <p>{capitalize(data.name)}</p>
        <Types>
          {data.types?.map(({ type }, index) => (
            <Dot key={index} style={{ background: elementTypes[type?.name] }} />
          ))}
        </Types>

        <ImageBlock>
          <div>
            <p className="aboutPokemon">
              Height:
              {formatNumber(data.height)}
              <span>m</span>
            </p>
            <p className="aboutPokemon">
              Weight:
              {formatNumber(data.weight)}
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

export default memo(Card);
