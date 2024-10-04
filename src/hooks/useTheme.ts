import { useContext } from 'react';
import {
  PassportContext,
  PassportContextData,
} from '@providers/PassportProvider';

function useTheme() {
  const { theme } = useContext<PassportContextData>(PassportContext);

  return theme;
}

export default useTheme;
