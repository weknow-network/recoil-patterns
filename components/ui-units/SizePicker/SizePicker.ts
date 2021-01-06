import styled from 'styled-components';
import { SizePickerRaw } from './SizePickerRaw';

export const SizePicker = styled(SizePickerRaw)`
  display: grid;
  justify-content: start;
  align-content: center;
  grid-template-areas: 'title options';
  grid-template-columns: 15rem 1fr;

  .item {
    /* font-size: 3rem; */
    padding: 1rem;
    border: solid 0.1rem;
    border-radius: 1rem;
    cursor: pointer;
  }

  .selected {
    font-weight: bold;
    border: solid 0.2rem;
  }

  .title {
    grid-area: title;
  }

  .options {
    grid-area: options;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
    justify-self: stretch;
  }
`;
