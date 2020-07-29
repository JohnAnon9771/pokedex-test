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
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  > section {
    flex: 1 1 150px;
    div {
      h2 {
        margin: 15px 0;
      }
      p {
        font-size: 14px;
      }
    }
  }

  .details {
    background: #eee;
    width: 100%;
    max-width: 65%;
    height: 100%;
    padding: 20px;
    border-radius: 15px;
    margin-left: 20px;
    flex: 2 2 400px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-template-rows: repeat(1fr, 3);
`;

export { Container, Content, Grid };
