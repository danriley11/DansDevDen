import { BaseThemedCssFunction, css, CSSObject } from 'styled-components';

const pixelsPerRem = 16;

export const rem = (val: number | string): string =>
  `${parseFloat(val.toString()) / pixelsPerRem}rem`;

export const BREAKPOINT_SM = 576;
export const BREAKPOINT_MD = 768;
export const BREAKPOINT_LG = 992;
export const BREAKPOINT_XL = 1200;

type MediaSizeObject = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
type MediaSize = keyof MediaSizeObject;

export const mediaSizes: MediaSizeObject = {
  xs: 0,
  sm: BREAKPOINT_SM,
  md: BREAKPOINT_MD,
  lg: BREAKPOINT_LG,
  xl: BREAKPOINT_XL,
};

type MediaFunctionObject = {
  xs: BaseThemedCssFunction<CSSObject>;
  sm: BaseThemedCssFunction<CSSObject>;
  md: BaseThemedCssFunction<CSSObject>;
  lg: BaseThemedCssFunction<CSSObject>;
  xl: BaseThemedCssFunction<CSSObject>;
};

export const mediaUp: MediaFunctionObject = (Object.keys(mediaSizes) as MediaSize[]).reduce(
  (acc, label) => {
    (acc as any)[label] = <Props extends CSSObject>(
      ...args: [CSSObject | TemplateStringsArray, any]
    ) => {
      return css<Props>`
        @media (min-width: ${mediaSizes[label]}px) {
          ${css<Props>(...args)};
        }
      `;
    };
    return acc;
  },
  {} as MediaFunctionObject,
);
