import { NextRouter } from 'next/dist/next-server/lib/router/router';

export interface IFlowRouterProps extends NextRouter {
  pushStage: (stageKey: string) => Promise<boolean>;
}
