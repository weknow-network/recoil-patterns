import styled from 'styled-components';
import { DetailsRaw } from './DetailsRaw';

export const Details = styled(DetailsRaw)`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-auto-rows: max-content;
  grid-row-gap: 1.5rem;
  width: 100rem;

  .comment {
    display: grid;
    grid-auto-flow: column;
  }

  .comment-input {
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
