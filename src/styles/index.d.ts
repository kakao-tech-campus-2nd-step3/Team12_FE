import '@emotion/react';

export type ButtonVariants = 'default' | 'dark' | 'primary' | 'transparent';

export type TagVariants = 'default' | 'primary';

export type Colors = {
  primary: {
    main: string;
    lighten: string;
    darken: string;
    passive: string;
  };
  text: {
    prominent: string;
    moderate: string;
    subtle: string;
  };
  background: {
    main: string;
    lighten: string;
    darken: string;
  };
  border: {
    subtle: string;
    prominent: string;
  };
  absolute: {
    black: string;
    white: string;
  };
  other: {
    link: string;
    success: string;
    warn: string;
    error: string;
  };
  brand: {
    background: string;
    text: string;
    primary: string;
  };
};

export type Corners = {
  small: string;
  medium: string;
  big: string;
  round: string;
};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    corners: Corners;
  }
}

export type Sliced<T> = {
  [K in keyof T]?: Partial<T[K]>
};

export type ExtendedTheme = {
  [K in keyof Theme]?: Sliced<Theme[K]>;
};
