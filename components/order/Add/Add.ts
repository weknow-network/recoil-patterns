import styled from 'styled-components';
import { AddRaw } from './AddRaw';

export const Add = styled(AddRaw)`
  display: grid;
  justify-content: center;
  align-content: center;

  .options {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 1rem;

    .prod {
      font-size: 1.5rem;
      cursor: pointer;

      &.selected {
        font-weight: bold;
      }
    }
  }
`;
