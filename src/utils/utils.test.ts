import { describe, expect, it } from 'vitest';
import defaultTheme from '@styles/theme';
import { mergeTheme } from '@/utils';
import { ExtendedTheme } from '@/styles';

describe('mergeTheme', () => {
  it('should merge colors and corners from defaultTheme and ExtendedTheme', () => {
    const customTheme: ExtendedTheme = {
      colors: { primary: { main: 'green' } },
      corners: { small: '2px' },
    };

    const result = mergeTheme(customTheme);

    expect(result.colors.primary.main).toBe('green');
    expect(result.corners.small).toBe('2px');
    expect(result.corners.medium).toBe('7px');
  });

  it('should return defaultTheme if no custom theme is provided', () => {
    const result = mergeTheme({});

    expect(result).toEqual(defaultTheme);
  });
});
