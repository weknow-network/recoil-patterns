import { SetterOrUpdater } from 'recoil';
import { IWithClassName, Size } from '../../../interfaces';

export interface ISizePickerProps extends IWithClassName {
  value: Size;
  setValue: SetterOrUpdater<Size>;
}
