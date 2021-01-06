import { RecoilState } from 'recoil';
import { IWithClassName } from '../../../interfaces';

export interface IStarsPickerProps extends IWithClassName {
  state: RecoilState<number>;
}
