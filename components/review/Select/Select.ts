import styled from 'styled-components';
import { SelectRaw } from './SelectRaw';

export const Select = styled(SelectRaw)`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-row-gap: 1rem;

  .options {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 1rem;

    .prod {
      font-size: 1.5rem;
      cursor: pointer;
      background: lightpink;
      padding: 0.7rem;
      border-radius: 0.5rem;

      &.selected {
        font-weight: bold;
      }
    }
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
