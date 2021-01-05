import { JourneyType } from '../interfaces';

export interface IRoutingInfo {
  journey: JourneyType;
  id: string;
  stageKey?: string;
}
