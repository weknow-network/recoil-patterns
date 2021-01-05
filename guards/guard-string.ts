/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * String gard
 * @param candidate
 * @return true is candidate is a string false otherwise
 * @example if(guardString(prm))
 */
export const guardString = (candidate: any): candidate is string => {
  return typeof candidate === 'string' || candidate instanceof String;
};
