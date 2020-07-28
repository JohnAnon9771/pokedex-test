import React from 'react';

import Search from './components/Search';
import { Container, Content } from './styles';

const Home: React.FC = () => (
  <Container>
    <Content>
      <section>
        <div>
          <h2>Pokedex</h2>
          <p>
            Conheça mais desse mundo incrível dos
            <strong> Pokemons</strong>.
          </p>
          <Search />
        </div>
      </section>
      <section className="details">
        <h1>details</h1>
      </section>
    </Content>
  </Container>
);

export default Home;
