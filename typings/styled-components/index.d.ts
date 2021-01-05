import 'styled-components';
import { defaultTheme } from '../../packages/@themes/default-theme';

type Theme = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme extends Theme {}
}
