import { useRouter } from 'next/router';
import { IFlowRouterProps } from './IFlowRouterProps';

export const useFlowRouter = (): IFlowRouterProps => {
  const router = useRouter();

  /**
   * customize push
   */
  const pushStage = async (stageKey: string) => {
    const { id } = router.query;

    let next = `${router.pathname}?stageKey=${stageKey}`;
    if (id) next = `${next}&id=${id}`;

    const result = await router.push(next);

    return result;
  };

  return {
    ...router,
    pushStage,
  };
};
