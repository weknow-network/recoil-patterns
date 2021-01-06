import styled from 'styled-components';
import { ColorPickerRaw } from './ColorPickerRaw';

export const ColorPicker = styled(ColorPickerRaw)`
  display: grid;
  justify-content: start;
  align-content: center;
  grid-template-areas: 'title picker';
  grid-template-columns: 15rem auto;

  .color-title {
    grid-area: title;
  }

  .picker {
    grid-area: picker;
    align-self: start;
  }
`;
