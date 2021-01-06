import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { IFlowRouterProps } from './IFlowRouterProps';

export const useFlowRouter = (): IFlowRouterProps => {
  const router = useRouter();

  /**
   * customize push
   */
  const pushStage = async (stageKey: string, isNew?: boolean) => {
    const { id } = router.query;

    let next = `${router.pathname}?stageKey=${stageKey}`;
    if (isNew) next = `${next}&id=${uuidv4()}`;
    else if (id) next = `${next}&id=${id}`;

    const result = await router.push(next);

    return result;
  };

  return {
    ...router,
    pushStage,
  };
};
