import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
    font-size: 1.8rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  justify-content: flex-end;
  align-items: flex-end;
  height: 365px;
  width: auto;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;

export const Main = styled.div`
  width: max-content;
  margin-top: 10%;

  h3 {
    color: #15172b;
  }

  div {
    display: flex;
  }
`;

export const Types = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background: ${(props) => props.color};
  height: 25px;
  width: auto;
  border-radius: 7px;
`;
