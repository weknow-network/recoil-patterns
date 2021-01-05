import { useRouter } from 'next/router';
import { guardString } from '../guards';
import { IRoutingInfo } from './IRoutingInfo';

export const useRoutingInfo = (): IRoutingInfo => {
  const router = useRouter();

  const { id, stageKey } = router.query;
  const currentPath = router.pathname;
  const journey = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  return {
    journey,
    id: guardString(id) ? id : undefined,
    stageKey: guardString(stageKey) ? stageKey : undefined,
  };
};
