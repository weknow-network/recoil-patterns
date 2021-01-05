import styled from 'styled-components';
import { JourneyTypeRaw } from './JourneyTypeRaw';

export const JourneyType = styled(JourneyTypeRaw)`
  display: grid;
  grid-template-areas:
    '.  subtitle  .'
    '.  options   .';
`;
