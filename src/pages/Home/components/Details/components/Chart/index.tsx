import React from 'react';
import { Radar } from 'react-chartjs-2';

import { Container } from './styles';

import { PokemonDataProps } from '../../../../components/Card';
import { elementTypes } from '../../../../../../utils/elementTypes';

interface ChartComponentProps {
  data: PokemonDataProps;
}

const Chart: React.FC<ChartComponentProps> = ({ data }) => {
  return (
    <Container>
      <Radar
        // height={250}
        // width={250}
        data={{
          labels: data.stats?.map(({ stat }) => stat.name),
          datasets: [
            {
              data: data.stats?.map(({ base_stat }) => base_stat),
              backgroundColor:
                data.types && elementTypes[data.types[0]?.type.name],
              borderColor: data.types && elementTypes[data.types[0]?.type.name],
            },
          ],
        }}
      />
    </Container>
  );
};

export default Chart;
