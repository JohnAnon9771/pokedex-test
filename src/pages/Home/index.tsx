import React, { useEffect, useState } from 'react';

import pokeball from '../../assets/pokeball.gif';
import api from '../../services/api';
import Card from './components/Card';
import Details from './components/Details';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { Container, Content, Grid } from './styles';

interface Pokemons {
  count: number;
  results: { name: string }[];
}

interface DetailsPokemons {
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
}
const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemons>({} as Pokemons);
  const [pokemon, setPokemon] = useState<DetailsPokemons>(
    {} as DetailsPokemons,
  );
  const [loading, setLoading] = useState(true);
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
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    getPokemons();
  }, [offset, search]);
  console.log(pokemon);

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
              <Card key={index} {...{ name }} />
            ))}
          </Grid>
          <Pagination {...{ offset, setOffset }} count={142} />
        </section>
        <section className="details">
          <Details {...{ pokemon }} />
        </section>
      </Content>
    </Container>
  );
};

export default Home;
