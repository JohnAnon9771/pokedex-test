import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    background: #15172b;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }

  h1 {
    color: #15172b;
    font-size: 28px;
  }
`;

export const Content = styled.div``;
