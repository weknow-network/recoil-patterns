import React, { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    const changes = [...snapshot.getNodes_UNSTABLE({ isModified: true })];
    changes.forEach((node) =>
      // eslint-disable-next-line no-console
      console.log(`@ RECOIL: [${node.key}]`, snapshot.getLoadable(node))
    );
  }, [snapshot]);

  return <></>;
};
