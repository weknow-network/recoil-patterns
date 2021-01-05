import { SerializableParam } from 'recoil';
import { JourneyType } from '.';

/**
 * Recoil key  (used within Recoil's atomFamily or selectorFamily)
 *
 * @description Readonly<Record<string, string>> is needed to satisfy Recoil family's key
 */
export interface IRecoilId extends Readonly<Record<string, SerializableParam>> {
  id: string;
  journey: JourneyType;
}
