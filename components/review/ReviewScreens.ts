import styled from 'styled-components';
import { ReviewScreensRaw } from './ReviewScreensRaw';

export const ReviewScreens = styled(ReviewScreensRaw)`
  display: grid;
  grid-template-areas: 'order  review';
  justify-content: center;
  align-content: center;
`;
