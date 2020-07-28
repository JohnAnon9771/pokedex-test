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
  flex-direction: row;
  justify-content: space-between;
  /* background: blue; */
  height: 100%;
  section {
    /* background: red; */
    flex: 1;
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
    height: 100%;
    padding: 20px;
    border-radius: 15px;
    flex: 2;
  }
`;

export { Container, Content };
