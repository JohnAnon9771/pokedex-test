import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Card from './components/Card';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { Container, Content, Grid } from './styles';

interface Pokemons {
  count: number;
  results: { name: string }[];
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemons>({} as Pokemons);
  const [search, setSearch] = useState<string | number>('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function getPokemons() {
      const searchFormated =
        typeof search === 'string' ? search.toLowerCase() : search;
      const response = await api.get(`pokemon/${searchFormated}`, {
        params: {
          offset,
          limit: 9,
        },
      });
      setPokemons(response.data);
    }
    getPokemons();
  }, [offset, search]);

  return (
    <Container>
      <Content>
        <section>
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
        <section className="details" />
      </Content>
    </Container>
  );
};

export default Home;
