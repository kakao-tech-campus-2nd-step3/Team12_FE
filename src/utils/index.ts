import defaultTheme from '@styles/theme';
import { Theme } from '@emotion/react';
import { ExtendedTheme } from '@/styles';

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

function isNumericString(value?: string) {
  if (!value) return false;
  return !Number.isNaN(parseFloat(value));
}

function isIntegerString(value?: string) {
  return isNumericString(value) && Number.isInteger(parseFloat(value as string));
}

function dateToString(date: Date, includeTime?: boolean): string {
  const ymd = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  if (!includeTime) return ymd;
  return `${ymd} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export {
  mergeTheme,
  generateRandomId,
  dateToString,
  isNumericString,
  isIntegerString,
};
