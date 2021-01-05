import { useRoutingInfo } from '../../routing';

export const ReviewScreens = () => {
  const { stageKey } = useRoutingInfo();
  return (
    <>
      {stageKey === 'add' && <h1>ADD</h1>}
      {stageKey === 'title' && <h1>TITLE</h1>}
      {stageKey === 'details' && <h1>Details</h1>}
      {stageKey === 'continue' && <h1>Continue</h1>}
      {stageKey === 'checkout' && <h1>checkout</h1>}
    </>
  );
};
