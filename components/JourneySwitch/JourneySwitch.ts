import styled from 'styled-components';
import { JourneyTypeRaw } from './JourneySwitchRaw';

export const JourneySwitch = styled(JourneyTypeRaw)`
  display: grid;
  grid-template-areas: 'order  review';
  justify-content: center;
  align-content: center;
  grid-column-gap: 4rem;
  height: 100vh;

  .order {
    grid-area: order;
  }

  .review {
    grid-area: review;
  }

  .btn {
    font-size: 3rem;
    padding: 1rem;
    border: solid 0.2rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;
