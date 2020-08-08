import styled from 'styled-components';

import intersect from '../../assets/Intersect.svg';

const Container = styled.div`
  background: #15172b;
  border-radius: 15px;
  max-width: 1600px;
  min-width: 80%;
  margin: auto 0;
  padding: 40px;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .pokemons {
    flex: 1 1 150px;
    width: 75%;
    div {
      h2 {
        margin: 15px 0;
      }
    }
  }

  .details {
    background: #eee url(${intersect}) no-repeat;
    width: 100%;
    max-width: 65%;
    min-height: 80%;
    padding: 20px;
    border-radius: 15px;
    margin-left: 50px;
    flex: 2 2 400px;

    @media (max-width: 344px) {
      display: none;
    }

    .loading {
      width: inherit;
      height: auto;
      opacity: 0.3;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-template-rows: repeat(1fr, 3);
`;

export { Container, Content, Grid };
