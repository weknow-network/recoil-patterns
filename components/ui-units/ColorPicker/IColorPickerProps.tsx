import { SetterOrUpdater } from 'recoil';
import { IWithClassName } from '../../../interfaces';

export interface IColorPickerProps extends IWithClassName {
  value: string;
  setValue: SetterOrUpdater<string>;
}
