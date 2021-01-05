import { useRouter } from 'next/router';
import { guardString } from '../guards';
import { JourneyType } from '../interfaces';
import { IRoutingInfo } from './IRoutingInfo';

export const useRoutingInfo = (): IRoutingInfo => {
  const router = useRouter();

  const { id, stageKey } = router.query;
  const currentPath = router.pathname;
  const journey = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  return {
    journey: journey as JourneyType,
    id: guardString(id) ? id : '',
    stageKey: guardString(stageKey) ? stageKey : undefined,
  };
};
