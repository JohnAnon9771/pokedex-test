import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Card from './components/Card';
import Search from './components/Search';
import { Container, Content, Grid } from './styles';

interface Pokemons {
  results: { name: string }[];
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemons>({} as Pokemons);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function getPokemons() {
      const response = await api.get('pokemon', {
        params: {
          offset,
          limit: 9,
        },
      });
      setPokemons(response.data);
    }
    getPokemons();
  }, [offset]);

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
            <Search />
          </div>
          <Grid>
            {pokemons.results?.map(({ name }, index) => (
              <Card key={index} {...{ name }} />
            ))}
          </Grid>
          <button type="button" onClick={() => setOffset(offset + 1)}>
            {offset}
          </button>
        </section>
        <section className="details" />
      </Content>
    </Container>
  );
};

export default Home;
