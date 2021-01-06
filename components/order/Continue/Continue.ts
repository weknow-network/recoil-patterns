import styled from 'styled-components';
import { ContinueRaw } from './ContinueRaw';

export const Continue = styled(ContinueRaw)`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-auto-rows: max-content;
  grid-row-gap: 0.3rem;
  width: 100rem;

  .entry {
    display: grid;
    grid-auto-flow: column;
  }

  .action {
    font-size: 1.5rem;
    padding: 0.2rem 1rem;
    margin-bottom: 1rem;
    border: solid 0.2rem;
    border-radius: 1rem;
    cursor: pointer;
    justify-self: start;
  }
`;
