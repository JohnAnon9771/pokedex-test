import React from 'react';

import { capitalize } from '../../../../utils/functions/capitalize';
import { Container } from './styles';

interface CardComponentProps {
  name: string;
  url: string;
}

const Card: React.FC<CardComponentProps> = ({
  name,
  url,
}: CardComponentProps) => (
  <Container>
    <strong>{capitalize(name)}</strong>
  </Container>
);

export default Card;
