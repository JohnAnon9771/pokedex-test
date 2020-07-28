import React from 'react';

import { Container, Content } from './styles';

const Home: React.FC = () => (
  <Container>
    <Content>
      <section>
        <div>
          <strong>Pokedex</strong>
          <p>
            Conheça mais desse mundo incrível dos
            <strong> Pokemons</strong>.
          </p>
        </div>
      </section>
      <section />
    </Content>
  </Container>
);

export default Home;
