import styled from 'styled-components';
import { OrderScreensRaw } from './OrderScreensRaw';

export const OrderScreens = styled(OrderScreensRaw)`
  display: grid;
  grid-template-areas: 'order  review';
  justify-content: center;
  align-content: center;
`;
