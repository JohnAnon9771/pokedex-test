import styled from 'styled-components';

const Container = styled.div`
  background: #15172b;
  border-radius: 15px;
  min-height: calc(100vh - 60px);
  height: 100%;
  max-width: 1600px;
  padding: 40px;
  margin: 0 auto;
  z-index: 1;

  section {
    div {
      > strong {
        margin-bottom: 50px;
        font-size: 18px;
      }
    }
  }
`;

const Content = styled.div``;

export { Container, Content };
