import defaultTheme from '@styles/theme';
import { ExtendedTheme, Theme } from '@/types';

function generateRandomId() {
  return `id-${Math.random().toString(36).substring(2, 11)}-${Date.now()}`;
}

function mergeTheme(theme: ExtendedTheme): Theme {
  const mergedTheme = {} as Theme;

  (Object.keys(defaultTheme) as (keyof Theme)[]).forEach((key) => {
    mergedTheme[key] = {
      ...defaultTheme[key],
      ...theme[key],
    } as any;
  });

  return mergedTheme;
}

export {
  mergeTheme,
  generateRandomId,
};
