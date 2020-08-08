import React, { useEffect, useState } from 'react';

import pokeball from '../../assets/pokeball.gif';
import api from '../../services/api';
import Details from './components/Details';
import Card, { PokemonDataProps } from './components/Card';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { Container, Content, Grid } from './styles';

interface Pokemons {
  count: number;
  results: PokemonDataProps[];
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemons>({} as Pokemons);
  const [pokemon, setPokemon] = useState<PokemonDataProps>(
    {} as PokemonDataProps,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState<string | number>('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function getPokemons() {
      try {
        const searchFormated =
          typeof search === 'string' ? search.toLowerCase() : search;
        const response = await api.get(`pokemon/${searchFormated}`, {
          params: {
            offset,
            limit: 9,
          },
        });
        setPokemons(response.data);
        setLoading(true);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getPokemons();
  }, [offset, search]);

  const renderLoadingOrDetails = loading ? (
    <img className="loading" src={pokeball} alt="" />
  ) : (
    <Details {...{ pokemon }} />
  );

  return (
    <Container>
      <Content>
        <section className="pokemons">
          <div>
            <h2>Pokedex</h2>
            <p>
              Conheça mais desse mundo incrível dos
              <strong> Pokemons</strong>
            </p>
            <Search {...{ setSearch }} />
          </div>
          <Grid>
            {pokemons.results?.map(({ name }, index) => (
              <Card key={index} {...{ name, setPokemon, pokemon }} />
            ))}
          </Grid>
          <Pagination {...{ offset, setOffset }} count={142} />
        </section>
        <section className="details">{renderLoadingOrDetails}</section>
      </Content>
    </Container>
  );
};

export default Home;
