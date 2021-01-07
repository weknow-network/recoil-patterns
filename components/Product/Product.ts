import styled from 'styled-components';
import { ProductRaw } from './ProductRaw';

export const Product = styled(ProductRaw)`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-row-gap: 1rem;

  .options {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 1rem;
    justify-content: start;

    .prod {
      font-size: 1.5rem;
      cursor: pointer;

      &.selected {
        font-weight: bold;
        color: blue;
        border: solid 0.1rem;
        padding: 0.1rem;
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

    &.disable {
      background: #777;
    }
  }
`;
