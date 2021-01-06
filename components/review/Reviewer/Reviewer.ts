import styled from 'styled-components';
import { ReviewerRaw } from './ReviewerRaw';

export const Reviewer = styled(ReviewerRaw)`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-auto-rows: max-content;
  grid-row-gap: 1.5rem;
  width: 100rem;

  .reviewer {
    display: grid;
    grid-auto-flow: column;
  }

  .reviewer-input {
    font-size: 1.5rem;
  }

  .next {
    font-size: 1.5rem;
    padding: 0.2rem 1rem;
    border: solid 0.2rem;
    border-radius: 1rem;
    cursor: pointer;
    justify-self: start;
  }
`;
