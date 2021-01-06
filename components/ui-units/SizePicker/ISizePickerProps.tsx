import { RecoilState } from 'recoil';
import { IWithClassName, Size } from '../../../interfaces';

export interface ISizePickerProps extends IWithClassName {
  state: RecoilState<Size>;
}
