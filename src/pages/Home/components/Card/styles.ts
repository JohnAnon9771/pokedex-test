import styled from 'styled-components';

const Container = styled.div<{ border?: string }>`
  background: rgba(82, 83, 87, 0.4);
  border-radius: 15px;
  height: 115px;
  width: 135px;
  padding: 12px;
  transition: 150ms;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgb(33, 55, 109, 0.11),
    inset 0 2px 2px rgb(33, 55, 109, 0.11),
    inset 0 3px 4px rgb(33, 55, 109, 0.11),
    inset 0 2px 8px rgb(33, 55, 109, 0.11),
    inset 0 1px 16px rgb(33, 55, 109, 0.11);

  &:hover {
    cursor: pointer;
    border: solid 3px ${(props) => props.border};
    transform: translate(2px, -3px);

    img {
      transform: scale(1.3) translate(5px, -3px);
    }
  }

  p {
    margin-bottom: 5px;
  }
`;

const Types = styled.div`
  display: flex;
  flex-direction: row;
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50px;
`;

export { Container, Types, Dot };
